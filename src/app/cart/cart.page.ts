import { Router } from '@angular/router';
import { ShopService } from './../home/service/shop.service';
import { AuthServiceService } from './../authenticate/service/auth-service.service';
import { FunctionsService } from './../functions.service';
import { DataService, Cart } from './../data.service';
import { AlertController, IonList, LoadingController } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  @ViewChild('slidingList') slidingList: IonList;
  customAlertOptions: any = {
    header: 'Select Quantity',
    translucent: true
  };
  shipping: any;
  shippingFees: any;
  code = '';
  show = true;
  data: Array<Cart> = [];
  usercart: any;
  usercartcount: any;
  cart: [];
  cartdetails: any;
  sid: any;
  constructor(
    public dataService: DataService,
    public fun: FunctionsService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private authService: AuthServiceService,
    private shopService: ShopService,
    public alertController: AlertController) {

  }
  ionViewWillEnter() {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetUserCart(this.sid);
  }

  async GetUserCart(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.shopService.GetUserCart(sid)
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.usercart = res.data;
          this.usercartcount = this.usercart.product_count;
          this.cart = this.usercart.CartProductDetails;
          this.cartdetails = this.usercart;
        } else {
          this.show = false;
        }
      }, error => {
        this.show = false;
        loading.dismiss().catch(() => { });
      })
  }

  async open_modal() {
    const link = "https://fyngram.com/FynGramShop/pages/shop/terms/terms.jsp";
    await Browser.open(
      {
        url: link,
        toolbarColor: "#40A944"
      }
    );
  }
  async onQuantityChange(event, details) {
    let quantity = 0;
    let action: string;
    const newQty = event.detail.value;
    const oldQty = details.product_quantity;
    if (parseInt(newQty) > parseInt(oldQty)) {
      quantity = parseInt(newQty) - parseInt(oldQty);
      action = 'Increase';
    } else if (parseInt(newQty) < parseInt(oldQty)) {
      quantity = parseInt(oldQty) - parseInt(newQty);
      action = 'Decrease';
    } else if (parseInt(newQty) === parseInt(oldQty)) {
      return false;
    }
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.shopService.UpdateOption('Cart', details.ProductDetails.id,
     details.ProductDetails.PriceDetails.selling_price, String(quantity), action)
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.fun.presentToast(res.msg);
          this.sid = this.authService.currentUserDataValue.sid;
          this.GetUserCart(this.sid);
        } else {
          this.fun.presentToast(res.msg);
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }


  browse() {
    this.fun.navigate('/home', false);
  }

  async remove(cart) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

    this.fun.removeConform().then(async res => {
      if (res === 'ok') {
        this.slidingList.closeSlidingItems();
        await loading.present();
        this.shopService.DeleteOption('Cart', String(cart.cartid), cart.ProductDetails.id)
          .subscribe(resp => {
            loading.dismiss().catch(() => { });
            if (resp.code === 200) {
              this.fun.presentToast(resp.msg);
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetUserCart(this.sid);
            } else {
              this.fun.presentToast(resp.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });
  }

  onApply() {
    if (this.code) {
      const usertype = this.authService.currentUserDataValue.usertype;
      if (usertype !== 'Guest') {
        this.onCompute(this.code);
      } else {
        this.loginOrRegister();
      }
    } else {
      this.fun.presentToast('Please, enter your discount code.');
    }

  }

  async onCompute(code) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.shopService.CartDiscountCode(code)
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.sid = this.authService.currentUserDataValue.sid;
          this.GetUserCart(this.sid);
          this.fun.presentToast(res.msg);
        } else {
          this.fun.presentToast(res.msg);
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }


  async  loginOrRegister() {
    const alert = await this.alertController.create({
      header: 'Discount Code!',
      message: 'Please, you need to Login or Register to use your Discount Code',
      buttons: [
        {
          text: 'Register',
          cssClass: 'secondary',
          handler: () => {
            this.fun.navigate('/authenticate/register');
          }
        }, {
          text: 'Login',
          handler: () => {
            this.fun.navigate('/authenticate');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            return false;
          }
        }
      ]
    });

    alert.present();
  }

  checkout() {
    this.router.navigate(['/checkout'], { queryParams: { 'totalamount': this.usercart.total_amount } });
  }
}
