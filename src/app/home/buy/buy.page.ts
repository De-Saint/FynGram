import { DataService, Product } from './../../data.service';
import { FunctionsService } from './../../functions.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {
  products: Array<Product> = [];
  topsellingProducts:any;
  recentlyaddedProducts:any;
  featuredProducts:any;
  bestsellerProducts:any;
  constructor(private menuCtrl: MenuController,
    private fun: FunctionsService,
    private dataService: DataService) {
    this.products = dataService.sponsored;
      this.getTopSellingProducts;
  }

  onOpen(link){
    this.fun.navigate(link);
  }

  ngOnInit() {
    

  }

  side_open() {
    this.menuCtrl.toggle('end');
  }


  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  }

  open(product) {
    this.fun.update(product);
    this.fun.navigate('/home/tabs/buy/productdetails/tabs/overview', false);
  }

  getTopSellingProducts(){
    
  }

}
