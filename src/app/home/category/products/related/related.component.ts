import { Router } from '@angular/router';
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
  thatThingHappened = false;
  constructor(
    private fun: FunctionsService,
    private router: Router,
    private shopService: ShopService ) {

  }

  ngOnInit() {
   
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
    this.fun.navigate('home')
    this.fun.setNavigationData(product.id, product);
    this.router.navigate(['/', 'home', 'tabs', 'category', 'products', 'details', product.id]);
  }
}
