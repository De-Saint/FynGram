import { ShopService } from './../../../service/shop.service';
import { FunctionsService } from './../../../../functions.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  inputs: ['product']
})
export class ReviewComponent implements OnInit {
  @Input() product: any;
  constructor(private fun: FunctionsService) { }
  thatThingHappened = false;
  ngOnInit() { }

  computeRatings(ratenumber) {
    return this.fun.array(parseInt(ratenumber));
  }
  
}
