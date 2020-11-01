import { FunctionsService } from './../../../../functions.service';
import { Product } from './../../../../data.service';
import { IonSlides } from '@ionic/angular';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  inputs: ['slider', 'product',]
})
export class OverviewComponent implements OnInit {
  @Input() slider: IonSlides;
  @Input() product: any;
  @Output() notify: EventEmitter<Number> = new EventEmitter<Number>();


  slideOpts = {
    effect: 'flip'
  };
  open = [false, false, false, false];
  liked = false;
  constructor(private fun: FunctionsService) {
  }

  ngOnInit() { }

  goToReviews() {
    this.notify.emit(2);
  }

  toggle(i) {
    this.open[i] = !this.open[i];
  }

  remove() {
    this.slider.lockSwipes(true);
  }

  gainback() {
    this.slider.lockSwipes(false);
  }

  like() {
    this.liked = !this.liked;
    console.log(this.liked)
  }
  computeRatings(ratenumber) {
    return this.fun.array(parseInt(ratenumber));
  }
  computeDate(){
    return this.fun.date(new Date());
  }
}
