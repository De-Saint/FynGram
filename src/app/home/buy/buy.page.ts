import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { DataService, Product } from './../../data.service';
import { FunctionsService } from './../../functions.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage {
  products: Array<Product> = [];
  topsellingProducts: any;
  recentlyaddedProducts: any;
  featuredProducts: any;
  bestsellerProducts: any;
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_VISITED = 'hasVisited';
  constructor(private menuCtrl: MenuController,
    private fun: FunctionsService,
    private authService: AuthServiceService,
    private dataService: DataService) {
    this.products = dataService.sponsored;
    this.getTopSellingProducts;
  }

  onOpen(link) {
    this.fun.navigate(link);
  }

  async ionViewWillEnter() {
    const { value } = await Storage.get({ key: this.HAS_VISITED });
    console.log(value);
    if (!value) {
      this.getIP();
    }
  }
  getIP() {
    this.authService.getIPAddress().subscribe((res: any) => {
      this.authService.SaveGuest(res.ip, "Lagos Nigeria").subscribe(res => {
        console.log(res);
        Storage.set({ key: this.HAS_VISITED, value: 'true' });
        this.fun.navigate('home', false);
        const event = new CustomEvent('user:guest');
        return window.dispatchEvent(event);
      })
    });
  }

  side_open() {
    this.menuCtrl.toggle('end');
  }


  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  }

  open(product) {
    this.fun.update(product);
    this.fun.navigate('/home/tabs/buy/productdetails/tabs/overview', false);
  }

  getTopSellingProducts() {

  }

}
