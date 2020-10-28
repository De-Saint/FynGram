import { FunctionsService } from './../../../functions.service';
import { DataService, Product } from './../../../data.service';
import { AlertController, IonSlides } from '@ionic/angular';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-productoverview',
  templateUrl: './productoverview.component.html',
  styleUrls: ['./productoverview.component.scss'],
  inputs: ['product', 'slider']
})
export class ProductoverviewComponent implements OnInit {
  @Input() product: Product;
  @Input() slider: IonSlides;
  @Output() notify: EventEmitter<Number> = new EventEmitter<Number>();

  slideOpts = {
    effect: 'flip'
  };
  open = [false, false, false, false];
  liked = false;
  constructor(public alertController: AlertController,
    private fun: FunctionsService, private dataService: DataService) { }

  ngOnInit() {
  }

  goToReviews() {
    this.notify.emit(2);
  }

  toogle(i) {
    this.open[i] = !this.open[i];
  }

  remove() {
    this.slider.lockSwipes(true);
  }

  gainback() {
    this.slider.lockSwipes(false);
  }

  like() {
    console.log('like')
    this.liked = !this.liked;
  }

}
