import { FunctionsService } from './../../../../services/functions.service';

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
 ngOnInit() { }

  computeRatings(ratenumber) {
    return this.fun.array(parseInt(ratenumber));
  }
  computeRatings2(ratenumber) {
    return this.fun.array(5-parseInt(ratenumber));
  }
  
}
