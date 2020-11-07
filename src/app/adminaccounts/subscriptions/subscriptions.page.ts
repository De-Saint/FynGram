import { FunctionsService } from './../../services/functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})
export class SubscriptionsPage implements OnInit {
  show = false;
  subscriptions: any;
  sid: any;
  constructor(private fun: FunctionsService, ) { }

  ngOnInit() {
  }
  shop() {
    this.fun.navigate('home');
  }
}
