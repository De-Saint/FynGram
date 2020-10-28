import { FunctionsService } from './../../../functions.service';
import { Product } from './../../../data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productrelated',
  templateUrl: './productrelated.component.html',
  styleUrls: ['./productrelated.component.scss'],
  inputs: ['products']
})
export class ProductrelatedComponent implements OnInit {

  @Input() products: Array<Product>;

  constructor(private fun: FunctionsService) {
  }

  ngOnInit() {
  }

  open(data){
    this.fun.update(data);
    // this.nav.navigateForward('/productdetail');
  }

}
