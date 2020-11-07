import { Router } from '@angular/router';
import { ShopService } from './../../../home/service/shop.service';
import { AuthServiceService } from './../../../authenticate/service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { FunctionsService } from './../../../services/functions.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  fundForm: FormGroup;
  userName: any;
  userEmail: any;
  pay_amount: any;
  sid: any;
  public public_key: any;
  public channels = ['card']; //Paystack Payment Methods
  public random_id = Math.floor(Date.now() / 1000); //Line to generate reference number

  constructor(private fun: FunctionsService, private router: Router,
              private shopService: ShopService, private authService: AuthServiceService,
              private loadingCtrl: LoadingController) {
    this.fundForm = new FormGroup({
      amount: new FormControl(null, { updateOn: 'blur', validators: [Validators.required] }),
    });
  }

  ngOnInit() {
    this.getParameter();
    this.userName = this.authService.currentUserDataValue.name;
    this.userEmail = this.authService.currentUserDataValue.email;

  }
  paymentInit() {

  }

  getParameter() {
    this.shopService.getParameter()
      .subscribe(result => {
        this.public_key = result.data;
      });
  }

  paymentCancel() {
    this.errorSwt('You cancelled the payment!');
  }

  onPay() {
    this.fun.presentToast('Please Wait ...');
  }

  async paymentDone(ref: any) {
    if (ref.status === 'success') {
      //ref contains the response from paystack after successful payment
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        mode: 'ios'
      });
      await loading.present();
      this.sid = this.authService.currentUserDataValue.sid;
      this.shopService.fundWallet(String(this.sid), 'Fund Wallet',
      String(this.fundForm.value.amount), String(ref.reference), String(ref.transaction))
        .subscribe(res => {
          loading.dismiss().catch(() => { });
          if (res.code === 200) {
            this.router.navigate(['/', 'adminwallet', 'tabs', 'fynpay']);
            this.fun.presentToast(res.msg);
          } else {
            this.errorSwt(res.msg);
          }
        }, error => {
          loading.dismiss().catch(() => { });
        })
    } else {
      this.errorSwt('Please, the payment was not successful');
    }

  }
  CalculatePercentage(userAmt) {
    let addedPerc = (parseInt(userAmt) * 0.02);
    let newAmt = parseInt(userAmt) + addedPerc;
    if (parseInt(userAmt) >= 2500) {
      newAmt = parseInt(userAmt) + 100;
    }
    return newAmt;
  }

  errorSwt(msg) {
    Swal.fire({
      title: 'Fund Account!',
      text: msg,
      timer: 2000,
      timerProgressBar: true,
      icon: 'error'
    });
  }
}
