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
  reviewForm: FormGroup;
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
  constructor(
    private route: ActivatedRoute,
    private authService: AuthServiceService,
    private orderService: OrderService,
    private loadingCtrl: LoadingController,
    private fun: FunctionsService) {
    this.reviewForm = new FormGroup({
      ratevalue: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      comment: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      product: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
    });

  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('orderId')) {
        return false;
      }
      this.orderId = paramMap.get('orderId');
      this.GetOrderDetails(this.orderId);
      
    });
  }

  async GetOrderDetails(orderId) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.orderService.GetProductDetails(orderId)
      .subscribe(res => {
        console.log(res);
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.order = res.data;
        } else {
          this.fun.presentToast(res.msg);
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }

  async onCancel(order) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });

    this.fun.removeConform('order').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.sid = this.authService.currentUserDataValue.sid;
        this.orderService.UpdateOrderStatus(String(this.sid),
          String(order.id),
          String(3)
        ).subscribe(res => {
          loading.dismiss().catch(() => { });
          if (res.code === 200) {
            this.fun.presentToast(res.msg);
            this.reviewForm.value.comment = '';
          }
        }, error => {
          loading.dismiss().catch(() => { });
          this.fun.presentToast(error);
        })
      }
    });
  }

  async onSubmit() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.sid = this.authService.currentUserDataValue.sid;
    this.orderService.ReviewProduct(String(this.sid),
      String(this.reviewForm.value.product),
      String(this.reviewForm.value.ratevalue),
      this.reviewForm.value.comment
    ).subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.fun.presentToast(res.msg);
        this.reviewForm.value.comment = '';
      }
    }, error => {
      loading.dismiss().catch(() => { });
      this.fun.presentToast(error);
    })
  }



}
