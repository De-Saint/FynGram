import { FunctionsService } from './../../functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})
export class SellPage implements OnInit {

  constructor(private fun: FunctionsService) { }

  ngOnInit() {
  }
  onOpen(link) {
    this.fun.navigate(link);
  }
}
