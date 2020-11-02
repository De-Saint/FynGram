import { ShopService } from './../home/service/shop.service';
import { AuthServiceService } from './../authenticate/service/auth-service.service';
import { FunctionsService } from './../functions.service';
import { DataService, Cart } from './../data.service';
import { ModalController, NavController, AlertController, IonList, LoadingController } from '@ionic/angular';
import { Component, ViewChild, OnInit } from '@angular/core';
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

  qty = [];
  code = '';
  show = true;
  data: Array<Cart> = [];
  usercart: any;
  usercartcount: any;
  cart: [];
  constructor(
    public dataService: DataService,
    public fun: FunctionsService,
    private modalController: ModalController,
    private nav: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthServiceService,
    private shopService: ShopService,
    public alertController: AlertController) {
    this.data = dataService.cart;
    if (this.data.length === 0) { this.show = false; }

    for (let i = 1; i <= 12; i++) {
      this.qty.push(i);
    }
    console.log(this.qty);

  }
  ionViewWillEnter() {
    const sid = this.authService.currentUserDataValue.sid;
    this.GetUserCart(sid);
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
          console.log(this.usercart);
          this.usercartcount = this.usercart.CartProductDetails.length;
          this.cart = this.usercart.CartProductDetails;
          console.log(this.cart);
        } else {
          this.show = false;
          this.fun.presentToast(res.msg);
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
  onQuantityChange(event) {
    console.log(event);
  }
  calculate(i) {
    let res = 0;
    if (i === 0) {
      for (const j of this.data) {
        if (j.product.offer) {
          res += this.fun.calculate(j.product.cost_price, j.product.discount) * j.quantity;
        } else {
          res += j.product.cost_price * j.quantity;
        }
      }
    }
    if (i === 1) {
      for (const j of this.data) {
        res += j.product.shipping;
      }
    }
    return res;
  }


  fix(a) {
    return a.toFixed(2);
  }

  add() {
    const res = this.calculate(1) + this.calculate(0);
    return res;
  }

  browse() {
    this.fun.navigate('/home', false);
  }

  async remove(j) {
    this.fun.removeConform().then(res => {
      console.log('res conform', res);
      if (res === 'ok') {
        this.slidingList.closeSlidingItems();
        this.data.splice(j, 1);
        if (this.data.length === 0) {
          this.show = !this.show;
        }
      }
    });
  }

}
