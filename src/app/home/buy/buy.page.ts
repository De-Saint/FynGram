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
  sponsored: Array<Product> = [];

  constructor(private menuCtrl: MenuController,
    private fun: FunctionsService,
    private dataService: DataService) {
    this.sponsored = dataService.sponsored;
    console.log(this.sponsored);
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
  };
}
