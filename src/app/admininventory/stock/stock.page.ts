import { LoadingController } from '@ionic/angular';
import { ShopService } from './../../home/service/shop.service';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { FunctionsService } from './../../services/functions.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  show = true;
  returns: any;
  sid: any;
  constructor(
    private fun: FunctionsService,
    private shopService: ShopService,
    private loadingCtrl: LoadingController,
    private authService: AuthServiceService, ) { }

  ngOnInit() {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetStockMovement(this.sid);
  }

  shop() {
    this.fun.navigate('home');
  }
  async GetStockMovement(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.shopService.GetStockMovement(sid)
    .subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.returns = res.data;
        this.show = true;
      } else {
        this.show = false;
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }

}
