import { MenuController } from '@ionic/angular';
import { FunctionsService } from './../../../functions.service';
import { Product, DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Array<Product> = [];
  slideOpts = {
    effect: 'flip',
    zoom: false
  };
  catId: any;
  constructor(private fun: FunctionsService,
    private menu: MenuController,
    private dataService: DataService, private route: ActivatedRoute) {
    this.products = dataService.sponsored;

  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('catId')) {
        this.fun.navigate('home/tabs/category');
        return;
      }
      this.catId = paramMap.get('catId');
    })
  }
  open(data) {
    this.fun.update(data);
    this.fun.navigate('/home/tabs/buy/productdetails', true);
  }

  side_open() {
    // this.menu.enable(true, 'custom');
    // this.menu.open('custom');
  }

  onOpen(link) {
    this.fun.navigate(link);
  }
}
