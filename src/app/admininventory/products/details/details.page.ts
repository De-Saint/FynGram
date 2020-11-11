import { FunctionsService } from 'src/app/services/functions.service';
import { ShopService } from './../../../home/service/shop.service';
import { ProductService } from './../../../services/product.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  product: any;
  productId: any;
  slideOpts = {
    effect: 'flip'
  };
  constructor(
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private shopService: ShopService,
    private fun: FunctionsService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) {
        return false;
      }
      this.productId = paramMap.get('productId');
      this.GetProductDetails(this.productId);
    });
  }
  async GetProductDetails(productId) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.shopService.GetProductDetails(productId)
      .subscribe(res => {
        console.log(res);
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.product = res.data;
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }

  computeRatings(ratenumber) {
    return this.fun.array(parseInt(ratenumber));
  }
  computeRatings2(ratenumber) {
    return this.fun.array(5 - parseInt(ratenumber));
  }
}
