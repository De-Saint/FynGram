import { Router } from '@angular/router';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {
  show = true;
  shippings: any;
  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private authService: AuthServiceService,
  ) {

  }
  ionViewWillEnter() {
    this.GetShippings();
  }

  ngOnInit() {

  }
  async GetShippings() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetShippings()
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.shippings = res.data;
          this.show = true;
        } else {
          this.show = false;
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }

  onAdd() {
    this.router.navigate(['/', 'adminusers', 'tabs', 'shippings', 'new']);
  }

  onDetails(shipping) {
    this.router.navigate(['/', 'adminusers', 'tabs', 'shippings', 'details', shipping.id]);
  }
}
