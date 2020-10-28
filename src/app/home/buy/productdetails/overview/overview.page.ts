import { DataService, Product } from './../../../../data.service';
import { FunctionsService } from './../../../../functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  slideOpts = {
    effect: 'flip'
  };
  open = [false, false, false, false];
  liked = false;
  product: Product;
  constructor(
    private fun: FunctionsService, private dataService: DataService) {
    this.product = this.dataService.current_product;
  }

  ngOnInit() {
  }


  toogle(i) {
    this.open[i] = !this.open[i];
  }



  like() {
    console.log('like')
    this.liked = !this.liked;
  }

  onOpen(option) {
    this.fun.array(option);
  }

  onCompute(cost_price, discount) {
    this.fun.calculate(cost_price, discount);
  }
}
