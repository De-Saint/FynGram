import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Product, DataService } from './../../data.service';
import { FunctionsService } from './../../functions.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categories: Array<Product> = [];
  slideOpts = {
    effect: 'flip',
    zoom: false
  };
  constructor(private fun: FunctionsService,
    private loadingCtrl: LoadingController,
    private authService: AuthServiceService,
    private dataService: DataService, private router: Router) {
    this.categories = dataService.sponsored;

  }

  ngOnInit() {
    this.getAllCategories();
  }


  async getAllCategories() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    // this.homeService.getAllCategories.
    // this.homeService.getAllCategories.subscribe(res => {
    //     loading.dismiss().catch(() => { });
    //     console.log(res);
    //     if (res.code === 200) {
         
    //     } else {
    //       this.fun.presentToast(res.msg);
    //     }
    //   }, error => {
    //     loading.dismiss().catch(() => { });
    //     console.log(JSON.stringify(error));
    //   })
  }

  open(data) {
    this.fun.navigate('/home/tabs/category/products/1');
    // this.router.navigate(['/', 'home', 'tabs', 'category', 'products', 1]);
  }

  onOpen(link) {
    this.fun.navigate(link);
  }
}
