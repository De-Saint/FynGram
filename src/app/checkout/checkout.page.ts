import { FunctionsService } from './../services/functions.service';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from './../authenticate/service/auth-service.service';
import { ShopService } from './../home/service/shop.service';
import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  sid: any;
  userName: any;
  userEmail: any;
  selectedPaymentMethod: any;
  shiptypeId: any;
  useraddress: any;
  pay_amount: any;
  public public_key: any;
  resp: any;
  public channels = ['card']; //Paystack Payment Methods
  public random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
  constructor(private fun: FunctionsService, private loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    private shopService: ShopService, private authService: AuthServiceService,
  ) { }

  ngOnInit() {
    this.getUserAddress();
    this.getParameter();
    this.userName = this.authService.currentUserDataValue.name;
    this.userEmail = this.authService.currentUserDataValue.email;
    this.route.queryParams.subscribe(params => {
      this.resp = params;
      console.log(this.resp);
    });
  }

  addAddress() {

  }

  done(msg) {
    Swal.fire('Order', msg, 'success');
    this.fun.navigate('home', false);
  }

  async getUserAddress() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });
    await loading.present();
    this.sid = this.authService.currentUserDataValue.sid;
    this.shopService.GetCartDefaultAddress(this.sid)
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.useraddress = res.data;
        } else {
          this.fun.presentToast(res.msg);
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }

  onSelectPayMeth(event) {
    this.selectedPaymentMethod = event.detail.value;
    this.pay_amount = this.fun.CalculatePercentage(this.resp.totalamount);
  }
  onSelectShipType(event) {
    this.shiptypeId = event.detail.value;
  }
  onPlaceOrder() {
    if (this.shiptypeId !== undefined) {
      if (this.selectedPaymentMethod !== undefined) {
        if (this.selectedPaymentMethod === 'fynpay') {
          this.processOrder('FynPay', this.shiptypeId, this.useraddress.id);
        }
      } else {
        this.errorSwt('Please, select a Payment Method');
      }
    } else {
      this.errorSwt('Please, select a Shipping Method');
    }

  }

  errorSwt(msg) {
    Swal.fire({
      title: 'CheckOut!',
      text: msg,
      timer: 2000,
      timerProgressBar: true,
      icon: 'error'
    });
  }
  async processOrder(paytype, shiptypeId, addressid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });
    await loading.present();
    this.sid = this.authService.currentUserDataValue.sid;
    this.shopService.processOrder(String(this.sid), paytype, String(shiptypeId), String(addressid))
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.done(res.msg);
        } else {
          this.errorSwt(res.msg)
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }

  getParameter() {
    this.shopService.getParameter()
      .subscribe(result => {
        this.public_key = result.data;
      })
  }
  paymentInit() {

  }

  onPay() {
    this.fun.presentToast('Please Wait ...');
  }

  paymentCancel() {
    this.errorSwt('You cancelled the payment!');
  }
 
  async paymentDone(ref: any) {
    console.log(ref);
    if (ref.status === 'success') {
      //ref contains the response from paystack after successful payment
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        mode:'ios'
      });
      await loading.present();
      this.sid = this.authService.currentUserDataValue.sid;
      this.shopService.placeOrder(String(this.sid), 'CheckOut Payment', String(this.shiptypeId), String(this.useraddress.id),
        String(this.resp.totalamount), String(ref.reference), String(ref.transaction))
        .subscribe(res => {
          loading.dismiss().catch(() => { });
          if (res.code === 200) {
            this.done(res.msg);
          } else {
            this.errorSwt(res.msg)
          }
        }, error => {
          loading.dismiss().catch(() => { });
        })
      //  ( 

    } else {
      this.errorSwt('Please, the payment was not successful');
    }

  }
}
