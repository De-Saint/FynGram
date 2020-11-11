import { Router } from '@angular/router';
import { ShopService } from './../home/service/shop.service';
import { DataService } from './../services/data.service';
import { FunctionsService } from './../services/functions.service';

import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  sid: any;
  products: any;
  searchTerm: string;
  show = false;
  constructor(
    private fun: FunctionsService,
    private loadingCtrl: LoadingController,
    private shopService: ShopService,
    private router: Router,
  ) {
  }

  ngOnInit() {

  }
  browse() {
    this.fun.navigate('home');
  }
  async onSearch() {
    const searchvalue = this.searchTerm;
    if (searchvalue.trim() === '') {
      this.products = [];
      this.show = false;
    } else {
      if (String(searchvalue).length >= 3) {
        if (searchvalue !== undefined) {
          const loading = await this.loadingCtrl.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            mode: 'ios'
          });
          await loading.present();
          this.shopService.SearchProducts(searchvalue).subscribe(res => {
            loading.dismiss().catch(() => { });
            if (res.code === 200) {
              this.products = res.data;
              this.show = true;
            } else {
              this.fun.presentToast(res.msg);
              this.show = false;
            }
          }, error => {
            loading.dismiss().catch(() => { });
            this.show = false;
          })
        }

      }
    }
  }



  open(data) {
    this.fun.setNavLink('search');
    this.router.navigate(['/', 'search', 'products', 'details', data.ProductID]);
  }
}
