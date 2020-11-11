import { FunctionsService } from './../../../../services/functions.service';
import { Router } from '@angular/router';
import { ShopService } from './../../../service/shop.service';
import { LoadingController, NavController } from '@ionic/angular';
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
    private fun: FunctionsService,
    private router: Router,
    private shopService: ShopService) {

  }

  ngOnInit() {
    this.navlink = this.fun.getNavLink();
  }

  getProductId(productid) {
    if (!this.thatThingHappened) {
      this.thatThingHappened = true;
      this.shopService.GetRelatedProducts(productid).subscribe(res => {
        if (res.code === 200) {
          this.products = res.data;
        }
      }, error => {
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
