import { OrderService } from './../../../services/order.service';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../../authenticate/service/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FunctionsService } from './../../../services/functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  order: any;
  sid: any;
  products: any;
  orderId: any;
  customAlertOptions: any = {
    header: 'Select Rate Value',
    translucent: true
  };
  productAlertOptions: any = {
    header: 'Select Product',
    translucent: true
  };
  constructor(private route: ActivatedRoute,
    private fun: FunctionsService) {
    

  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('orderId')) {
        return false;
      }
      this.orderId = paramMap.get('orderId');
      this.order = this.fun.getNavigationData(this.orderId);
      this.products = this.order.HistoryDetails;
      
    });
  }

}
