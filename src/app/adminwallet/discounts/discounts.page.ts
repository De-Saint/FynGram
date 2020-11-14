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
  constructor(
    private fun: FunctionsService,
    private loadingCtrl: LoadingController,
    private authService: AuthServiceService, ) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    if (!this.discounts) {
    this.GetDiscountCodes();
    }
  }
  shop() {
    this.fun.navigate('home');
  }
  async GetDiscountCodes() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetDiscountCodes().subscribe(res => {
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


  async onStop(discount) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    this.fun.processRequest('stop', 'discount code').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.authService.ProcessDiscount(String(discount.id), 'Stopped')
          .subscribe(resp => {
            loading.dismiss().catch(() => { });
            if (resp.code === 200) {
              this.fun.presentToast(resp.msg);
              this.GetDiscountCodes();
            } else {
              this.fun.presentToast(resp.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });
  }
  async onDelete(discount) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    this.fun.removeConform('discount code').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.authService.ProcessDiscount(String(discount.id), 'Deleted')
          .subscribe(resp => {
            loading.dismiss().catch(() => { });
            if (resp.code === 200) {
              this.fun.presentToast(resp.msg);
              this.GetDiscountCodes();
            } else {
              this.fun.presentToast(resp.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });

  }
}
