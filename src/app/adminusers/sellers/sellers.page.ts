import { FunctionsService } from './../../services/functions.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.page.html',
  styleUrls: ['./sellers.page.scss'],
})
export class SellersPage implements OnInit {
  show = true;
  sellers: any;
  originalsellers: any;
  searchTerm: string;
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private fun: FunctionsService,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.GetSellers();
    this.searchTerm = '';
  }

  async GetSellers() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetSellers()
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.sellers = res.data;
          this.originalsellers = res.data;
          this.show = true;
        } else {
          this.show = false;
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }
  onOpen(seller) {
    this.fun.setNavigationData(seller.id, seller);
    this.router.navigate(['/', 'adminusers', 'tabs', 'sellers', 'details', seller.id]);
  }

  async onSearch() {
    const searchvalue = this.searchTerm;
    if (searchvalue.trim() === '') {
      this.sellers = this.originalsellers;
    } else {
      if (String(searchvalue).length >= 3) {
        if (searchvalue !== undefined) {
          const loading = await this.loadingCtrl.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            mode: 'ios'
          });
          await loading.present();
          this.authService.SearchSellers(searchvalue)
            .subscribe(res => {
              loading.dismiss().catch(() => { });
              if (res.code === 200) {
                this.sellers = res.data;
                this.show = true;
              } else {
                this.sellers = this.originalsellers;
              }
            }, error => {
              loading.dismiss().catch(() => { });
              this.sellers = this.originalsellers;
            })
        }

      }
    }
  }

}
