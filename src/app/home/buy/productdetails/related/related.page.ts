import { FunctionsService } from './../../../../functions.service';
import { Product, DataService } from './../../../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related',
  templateUrl: './related.page.html',
  styleUrls: ['./related.page.scss'],
})
export class RelatedPage implements OnInit {

 products: Product;

  constructor(private fun: FunctionsService, private dataService: DataService) {
    this.products = dataService.current_product;
  }

  ngOnInit() {
  }

  open(data){
    this.fun.update(data);
    // this.nav.navigateForward('/productdetail');
  }

}
