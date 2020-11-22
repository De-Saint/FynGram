import { FunctionsService } from './../../services/functions.service';
import { ShopService } from './../service/shop.service';
import { Router } from '@angular/router';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { Component } from '@angular/core';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Plugins } from '@capacitor/core';
const { Storage, Browser } = Plugins;
@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage {
  products: any;
  recents: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  recentProducts: any;
  featuredProducts: any;
  bestsellerProducts: any;
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_VISITED = 'hasVisited';
  constructor(
    private fun: FunctionsService,
    private router: Router,
    private appVersion: AppVersion,
    private platform: Platform,
    private alertCtrl: AlertController,
    private shopService: ShopService,
    private loadingCtrl: LoadingController,
    private authService: AuthServiceService,
  ) {
    this.getVersionNumber();
  }

  onOpen(link) {
    this.fun.navigate(link);
  }

  async ionViewWillEnter() {
    const { value } = await Storage.get({ key: this.HAS_VISITED });
    if (!value) {
      this.getIP();
    }
    if (!this.products) {
      this.getTopSellingProducts();
      this.GetRecentlyAddedProducts();
      this.GetFeaturedProducts();
      this.GetBestSellersProducts();
    }
  }

  getIP() {
    this.authService.getIPAddress().subscribe((res: any) => {
      this.authService.SaveGuest(res.ip, res.city + ' ' + res.country_name)
        .subscribe(res => {
          Storage.set({ key: this.HAS_VISITED, value: 'true' });
          this.fun.navigate('home', false);
          const event = new CustomEvent('user:guest');
          return window.dispatchEvent(event);
        })
    }, error => {
    });
  }



  open(product) {
    this.fun.setNavLink('buy');
    this.router.navigate(['/', 'home', 'tabs', 'buy', 'products', 'details', product.ProductID]);
  }

  async getTopSellingProducts() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.shopService.GetTopSellingProducts().subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.products = res.data;
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }


  GetRecentlyAddedProducts() {
    this.shopService.GetRecentlyAddedProducts().subscribe(res => {
      if (res.code === 200) {
        this.recentProducts = res.data;
      } else {
        this.fun.presentToast(res.msg);
      }
    }, error => {
    })
  }
  GetFeaturedProducts() {
    this.shopService.GetFeaturedProducts().subscribe(res => {
      if (res.code === 200) {
        this.featuredProducts = res.data;
      }
    }, error => {
    })
  }

  GetBestSellersProducts() {
    this.shopService.GetBestSellersProducts().subscribe(res => {
      if (res.code === 200) {
        this.bestsellerProducts = res.data;
      }
    }, error => {
    })
  }


  async getVersionNumber() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.appVersion.getVersionNumber()
          .then((version) => {
            alert(version)
            this.CheckAppVersion(version);
          }).catch(() => {
          });
      }
    })
  }

  CheckAppVersion(appversion) {
    this.platform.ready().then(() => {
      this.shopService.GetAppVersion()
        .subscribe(result => {
          console.log(result);
          if (result.code === 200) {
            const serverAppVersion = result.data;
            if (this.platform.is('android')) {
              if (String(appversion) !== String(serverAppVersion)) {
                this.UpdateVersion();
              }
            }
          }
        }, error => {
        });
    });
  }
  async UpdateVersion() {
    const alert = await this.alertCtrl.create({
      header: 'Update Available!!',
      mode: 'ios',
      message: 'A new version of Fyngram App is available. Please update to the new version now!!!',
      buttons: [
        {
          text: 'Update Later',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Update Now',
          handler: (ok) => {
            console.log('Confirm Okay');
            this.onUpdateNow();
          }
        }
      ]
    });
    alert.present();
  }

  onUpdateNow() {
    this.openInAppStore('https://play.google.com/store/apps/details?id=com.fyngram.fynapp').then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  async openInAppStore(link) {
    await Browser.open(
      {
        url: link,
        toolbarColor: "#0f5656"
      }
    );
  }
}
