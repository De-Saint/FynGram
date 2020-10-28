import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Product, DataService } from './../../data.service';
import { FunctionsService } from './../../functions.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categories: Array<Product> = [];
  slideOpts = {
    effect: 'flip',
    zoom: false
  };
  constructor(private fun: FunctionsService, private dataService: DataService, private router: Router) {
    this.categories = dataService.sponsored;

  }

  ngOnInit() {
  }
  
  open(data) {
    this.fun.navigate('/home/tabs/category/products/1');
    // this.router.navigate(['/', 'home', 'tabs', 'category', 'products', 1]);
  }


}
