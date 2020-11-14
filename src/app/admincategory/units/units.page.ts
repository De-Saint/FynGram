import { ShopService } from './../../home/service/shop.service';
import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units',
  templateUrl: './units.page.html',
  styleUrls: ['./units.page.scss'],
})
export class UnitsPage implements OnInit {
  show = true;
  units: any;
  constructor(
    private loadingCtrl: LoadingController,
    private shopService: ShopService,
  ) { }

  ngOnInit() {
    if (!this.units) {
    this.GetUnits();
    }
  }

  async GetUnits() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.shopService.GetUnits().subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.units = res.data;
        this.show = true;
      } else {
        this.show = false;
      }
    }, error => {
      loading.dismiss().catch(() => { });
      this.show = false;
    });
  }


}
