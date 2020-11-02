import { Router, ActivatedRoute } from '@angular/router';
import { FunctionsService } from './../../../../functions.service';
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
        } else {
          // this.fun.presentToast(res.msg);
        }
      }, error => {
      })
    }
  }

  open(product) {
    this.fun.navigate('home', false)
    this.fun.setNavigationData(product.id, product);
    if (this.navlink) {
      this.router.navigate(['/', 'home', 'tabs', this.navlink, 'products', 'details', product.id]);
    } else {
      this.router.navigate(['/', 'home', 'tabs', 'category', 'products', 'details', product.id]);

    }
  }
}
