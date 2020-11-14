import { FunctionsService } from './../../../../services/functions.service';
import { Router } from '@angular/router';
import { ShopService } from './../../../service/shop.service';
import { LoadingController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss'],
  inputs: ['productId']
})
export class RelatedComponent implements OnInit {
  @Input() productId: any;
  products: any;
  navlink: string;
  thatThingHappened = false;
  constructor(
    private loadingCtrl: LoadingController,
    private fun: FunctionsService,
    private router: Router,
    private shopService: ShopService) {

  }

  ngOnInit() {
    this.navlink = this.fun.getNavLink();
  }

  async getProductId(productid) {
    if (!this.thatThingHappened) {
      this.thatThingHappened = true;
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        mode: 'ios'
      });
      await loading.present();
      this.shopService.GetRelatedProducts(productid).subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.products = res.data;
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
    }
  }

  open(product) {
    this.fun.navigate('home', false);
    if (this.navlink === 'buy') {
      this.router.navigate(['/', 'home', 'tabs', 'buy', 'products', 'details', product.id]);
    } else if (this.navlink === 'wishlist') {
      this.router.navigate(['/', 'customerorders', 'tabs', 'wishlist', 'products', 'details', product.id]);
    } else if (this.navlink === 'search') {
      this.router.navigate(['/', 'search', 'products', 'details', product.id]);
    } else {
      this.router.navigate(['/', 'home', 'tabs', 'category', 'products', 'details', product.id]);
    }
  }
}
