import { Router } from '@angular/router';
import { FunctionsService } from './../../services/functions.service';
import { ShopService } from './../../home/service/shop.service';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { LoadingController, IonList } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  @ViewChild('slidingList') slidingList: IonList;
  sid: any;
  show = true;
  wishlists: any;
  wishdetails: any;
  constructor(
    private loadingCtrl: LoadingController,
    private fun: FunctionsService,
    private router: Router,
    private authService: AuthServiceService,
    private shopService: ShopService, ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    if (!this.wishlists) {
      this.sid = this.authService.currentUserDataValue.sid;
      this.GetShopSavedItems(this.sid);
    }
  }

  async GetShopSavedItems(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.shopService.GetShopSavedItems(sid)
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.wishlists = res.data;
          this.wishdetails = this.wishlists.WishListProductDetails;
          this.show = true;
        } else {
          this.show = false;
        }
      }, error => {
        this.show = false;
        loading.dismiss().catch(() => { });
      })
  }

  browse() {
    this.fun.navigate('/home', false);
  }

  async remove(wishlist) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });

    this.fun.removeConform('product').then(async res => {
      if (res === 'ok') {
        this.slidingList.closeSlidingItems();
        await loading.present();
        this.shopService.DeleteOption('SavedItems', String(wishlist.id), wishlist.ProductDetails.id)
          .subscribe(resp => {
            loading.dismiss().catch(() => { });
            if (resp.code === 200) {
              this.fun.presentToast(resp.msg);
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetShopSavedItems(this.sid);
            } else {
              this.fun.presentToast(resp.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });
  }
  details(wishlist) {
    this.fun.setNavLink('wishlist');
    this.router.navigate(['/', 'customerorders', 'tabs', 'wishlist', 'products', 'details', wishlist.ProductDetails.ProductID]);
  }
}
