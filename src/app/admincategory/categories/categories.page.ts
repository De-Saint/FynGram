import { ShopService } from './../../home/service/shop.service';
import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: any;
  show = true;
  constructor(
    private loadingCtrl: LoadingController,
    private shopService: ShopService) { }

  ionViewWillEnter() {
    if (!this.categories) {
      this.getAllCategories();
    }
  }
  ngOnInit() {
  }
  async getAllCategories() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.shopService.GetCategories().subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.categories = res.data;
        this.show = true;
      } else {
        this.show = false;
      }
    }, error => {
      loading.dismiss().catch(() => { });
    });
  }

}
