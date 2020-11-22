import { FunctionsService } from './../../services/functions.service';
import { Router } from '@angular/router';
import { ShopService } from './../service/shop.service';
import { LoadingController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: any;
  slideOpts = {
    effect: 'flip',
    zoom: false
  };
  constructor(
    private fun: FunctionsService,
    private loadingCtrl: LoadingController,
    private shopService: ShopService,
    private router: Router) {

  }

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
      mode:'ios'
    });
    await loading.present();
    this.shopService.GetCategories().subscribe(res => {
      loading.dismiss().catch(() => { });
      console.log(res);
      if (res.code === 200) {
        this.categories = res.data;
      } else {
        this.fun.presentToast(res.msg);
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }

  open(data) {
    this.router.navigate(['/', 'home', 'tabs', 'category', 'products', data.id]);
  }

  onOpen(link) {
    this.fun.navigate(link);
  }
}
