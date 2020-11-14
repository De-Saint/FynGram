import { FunctionsService } from './../../../services/functions.service';
import { AuthServiceService } from './../../../authenticate/service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  customerId: any;
  customer: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthServiceService,
    private loadingCtrl: LoadingController,
    private fun: FunctionsService,

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('customerId')) {
        return false;
      }
      this.customerId = paramMap.get('customerId');
      this.customer = this.fun.getNavigationData(this.customerId);
      console.log(this.customer);
    });
  }

  async onDelete(customer) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });

    this.fun.removeConform('customer').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.authService.DeleteCustomer(String(customer.userid))
          .subscribe(res => {
            loading.dismiss().catch(() => { });
            if (res.code === 200) {
              this.fun.presentToast(res.msg);
              this.router.navigate(['/', 'adminusers', 'tabs', 'customers']);
            } else {
              this.fun.presentToast(res.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });
  }
  
}
