import { FunctionsService } from './../../services/functions.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  show = true;
  customers: any;
  originalcustomers: any;
  searchTerm: string;
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private fun: FunctionsService,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    if (!this.customers) {
      this.GetCustomers();
    }
    this.searchTerm = '';

  }

  async GetCustomers() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetCustomers()
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.customers = res.data;
          this.originalcustomers = res.data;
          this.show = true;
        } else {
          this.show = false;
        }
      }, error => {
        this.show = false;
        loading.dismiss().catch(() => { });
      })
  }
  onOpen(customer) {
    this.fun.setNavigationData(customer.id, customer);
    this.router.navigate(['/', 'adminusers', 'tabs', 'customers', 'details', customer.id]);
  }

  async onSearch() {
    const searchvalue = this.searchTerm;
    if (searchvalue.trim() === '') {
      this.customers = this.originalcustomers;
    } else {
      if (String(searchvalue).length >= 3) {
        if (searchvalue !== undefined) {
          const loading = await this.loadingCtrl.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            mode: 'ios'
          });
          await loading.present();
          this.authService.SearchCustomers(searchvalue).subscribe(res => {
            loading.dismiss().catch(() => { });
            if (res.code === 200) {
              this.customers = res.data;
              this.show = true;
            } else {
              this.customers = this.originalcustomers;
            }
          }, error => {
            loading.dismiss().catch(() => { });
            this.customers = this.originalcustomers;
          })
        }

      }
    }
  }
}
