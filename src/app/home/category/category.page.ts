import { FunctionsService } from './../../functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(private fun : FunctionsService) { }

  ngOnInit() {
  }

}
