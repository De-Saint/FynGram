import { Router } from '@angular/router';
import { FunctionsService } from './../../services/functions.service';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  show = true;
  orders: any;
  sid: any;
  constructor(
    private router: Router,
    private authService: AuthServiceService,
    private loadingCtrl: LoadingController,
    private orderService: OrderService,
    private fun: FunctionsService,
  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (!this.orders) {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetOrders(this.sid);
    }
  }

  open(order) {
    this.router.navigate(['/', 'admininventory', 'tabs', 'orders', 'details', order.id]);
  }

  async GetOrders(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.orderService.GetOrders(sid)
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.orders = res.data;
          this.show = true;
        } else {
          this.show = false;
        }
      }, error => {
        this.show = false;
        loading.dismiss().catch(() => { });
      })
  }
  onShop() {
    this.fun.navigate('home');
  }
}
