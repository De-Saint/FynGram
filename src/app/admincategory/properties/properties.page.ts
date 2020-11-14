import { LoadingController } from '@ionic/angular';
import { ShopService } from './../../home/service/shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {
  properties: any;
  show = true;
  constructor(
    private shopService: ShopService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    if (!this.properties) {
      this.GetProperties();
    }
  }
  async GetProperties() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.shopService.GetProperties().subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.properties = res.data;
        this.show = true;
      } else {
        this.show = false;
      }
    }, error => {
      this.show = false;
      loading.dismiss().catch(() => { });
    });
  }
}
