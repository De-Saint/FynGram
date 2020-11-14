import { FunctionsService } from './../../../services/functions.service';
import { AuthServiceService } from './../../../authenticate/service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  shippingId: any;
  shipping: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fun: FunctionsService,
    private authService: AuthServiceService,
    private loadingCtrl: LoadingController, ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('shippingId')) {
        return false;
      }
      this.shippingId = paramMap.get('shippingId');
      this.GetShippingDetails(this.shippingId);
    });
  }

  async GetShippingDetails(shippingId) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetShippingDetails(String(shippingId))
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.shipping = res.data;
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }

  async onDelete(shipping) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });

    this.fun.removeConform('shipping method').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.authService.DeleteShipping(String(shipping.id))
          .subscribe(res => {
            loading.dismiss().catch(() => { });
            if (res.code === 200) {
              this.fun.presentToast(res.msg);
              this.router.navigate(['/', 'adminusers', 'tabs', 'shippings']);
            } else {
              this.fun.presentToast(res.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });
  }
  async onReset(shipping, option) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });

    this.fun.processRequest(option, 'shipping method').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.authService.ResetShipping(String(shipping.id))
          .subscribe(res => {
            loading.dismiss().catch(() => { });
            if (res.code === 200) {
              this.fun.presentToast(res.msg);
              this.GetShippingDetails(this.shippingId);
            } else {
              this.fun.presentToast(res.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });
  }
}
