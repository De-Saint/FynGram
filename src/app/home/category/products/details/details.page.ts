import { FunctionsService } from './../../../../services/functions.service';
import { ShopService } from './../../../service/shop.service';
import { IonSlides, IonContent, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  productId: any;
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  @ViewChild('Slides', { static: true }) slides: IonSlides;
  @ViewChild('Content') content: IonContent;

  Details: any;

  index = 0;
  slideOpts = {
    effect: 'flip',
    zoom: false
  };

  product: any;

  constructor(
    private fun: FunctionsService,
    private loadingCtrl: LoadingController,
    private shopService: ShopService,
    private activeRoute: ActivatedRoute,
    ) {
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) {
        return false;
      }
      this.productId = paramMap.get('productId');
      this.product = this.fun.getNavigationData(this.productId);
      console.log(this.product);
    })
  }


  onReviewClick(index) {
    this.index = index;
    this.slides.slideTo(index);
    this.content.scrollToTop();
    // this.drag();
  }

  goToCart() {
    this.fun.navigate('cart', false);
  }

  onSearch() {
    this.fun.navigate('search', false);
  }
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  async onAddtoCart(product) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.shopService.AddOption('Cart', product.id, product.PriceDetails.selling_price, String(1), 'Increase')
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.fun.navigate('cart');
          this.fun.presentToast(res.msg);
        } else {
          this.fun.presentToast(res.msg);
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }
}
