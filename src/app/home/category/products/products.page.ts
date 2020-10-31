import { ShopService } from './../../service/shop.service';
import { MenuController, LoadingController } from '@ionic/angular';
import { FunctionsService } from './../../../functions.service';
import { Product, DataService } from './../../../data.service';
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
    private router: Router,
    private dataService: DataService, private route: ActivatedRoute) {
    // this.products = dataService.sponsored;

  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('catId')) {
        this.fun.navigate('home/tabs/category');
        return;
      }
      this.catId = paramMap.get('catId');
      this.GetCategoryProducts(this.catId);
    })
  }
  open(data) {
    // this.fun.update(data);
    console.log(data.id);
    this.router.navigate(['/', 'home', 'tabs', 'buy', 'productdetails', data.id]);
    // this.fun.navigate('/home/tabs/buy/productdetails', true);
  }

  side_open() {

  }

  onOpen(link) {
    this.fun.navigate(link);
  }

  async GetCategoryProducts(catid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.shopService.GetCategoryProducts(catid).subscribe(res => {
      loading.dismiss().catch(() => { });
      console.log(res);
      if (res.code === 200) {
        this.products = res.data;
        console.log(this.products);
      } else {
        this.fun.presentToast(res.msg);
      }
    }, error => {
      loading.dismiss().catch(() => { });
      console.log(JSON.stringify(error));
    })
  }

}
