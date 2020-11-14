import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.page.html',
  styleUrls: ['./discounts.page.scss'],
})
export class DiscountsPage implements OnInit {
  show = true;
  discounts: any;
  sid: any;
  constructor(
    private fun: FunctionsService,
    private loadingCtrl: LoadingController,
    private authService: AuthServiceService, ) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    if (!this.discounts) {
      this.sid = this.authService.currentUserDataValue.sid;
      this.GetCustomerDiscountCodes(this.sid);
    }
  }
  shop() {
    this.fun.navigate('home');
  }
  async GetCustomerDiscountCodes(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetCustomerDiscountCodes(String(sid)).subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.discounts = res.data;
        this.show = true;
      } else {
        this.show = false;
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }

}
