import { FunctionsService } from './../../../services/functions.service';
import { ShopService } from './../../service/shop.service';
import { MenuController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: any;
  slideOpts = {
    effect: 'flip',
    zoom: false
  };
  catId: any;
  constructor(private fun: FunctionsService,
    private loadingCtrl: LoadingController,
    private shopService: ShopService,
    private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('catId')) {
        this.fun.navigate('home/tabs/category');
        return;
      }
      this.catId = paramMap.get('catId');
      this.GetCategoryProducts(this.catId);
    })
  }
  open(data) {
    this.router.navigate(['/', 'home', 'tabs', 'category', 'products', 'details', data.id]);
  }


  onOpen(link) {
    this.fun.navigate(link);
  }

  async GetCategoryProducts(catid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });
    await loading.present();
    this.shopService.GetCategoryProducts(catid).subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.products = res.data;
      } else {
        this.fun.presentToast(res.msg);
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }

}
