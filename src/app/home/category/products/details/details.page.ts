import { FunctionsService } from './../../../../functions.service';
import { HomeTab, Product, DataService } from './../../../../data.service';
import { IonSlides, IonContent, MenuController, NavController } from '@ionic/angular';
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
    private dataService: DataService,
    private activeRoute: ActivatedRoute,
    private nav: NavController) {
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
 

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
}
