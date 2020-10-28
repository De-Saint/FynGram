import { FunctionsService } from './../../../functions.service';
import { Product } from './../../../data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productreview',
  templateUrl: './productreview.component.html',
  styleUrls: ['./productreview.component.scss'],
  inputs: ['product', 'bool']
})
export class ProductreviewComponent implements OnInit {
  @Input() product: Product;
  @Input() bool: boolean;
  constructor(private fun: FunctionsService) { 
    console.log(this.product);
  }

  ngOnInit() {}

}
