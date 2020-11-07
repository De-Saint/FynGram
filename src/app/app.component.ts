import { AuthServiceService } from './authenticate/service/auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {
  Plugins,
  // StatusBarStyle
} from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  loggedIn = false;
  dark = false;
  userType = 'Guest';
  userName: any;
  HAS_LOGGED_IN = 'hasLoggedIn';
  public appPages = [
    { title: 'Buy', url: '/home/tabs/buy', icon: 'basket' },
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Login', url: '/authenticate', icon: 'log-in' },
    { title: 'Register', url: '/authenticate/register', icon: 'person-add' }
  ];
  public sellerPages = [
    { title: 'Buy', url: '/home/tabs/buy', icon: 'basket' },
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Dashboard', url: '/sellersdashboard', icon: 'home' },
    { title: 'Profile', url: '/sellersprofile/tabs/profile', icon: 'person-circle' },
    { title: 'FynPay', url: '/sellerswallet/tabs/fynpay', icon: 'wallet' },
    { title: 'Accounts', url: '/sellersaccounts/tabs/transactions', icon: 'cash' },
    { title: 'Inventory', url: '/sellersinventory/tabs/products', icon: 'bag-add' },

  ];
  public adminPages = [
    { title: 'Buy', url: '/home/tabs/buy', icon: 'basket' },
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Dashboard', url: '/admindashboard', icon: 'home' },
    { title: 'Profile', url: '/adminprofile/tabs/profile', icon: 'person-circle' },
    { title: 'FynPay', url: '/adminwallet/tabs/fynpay', icon: 'wallet' },
    { title: 'Accounts', url: '/adminaccounts/tabs/transactions', icon: 'cash' },
    { title: 'Users', url: '/adminusers/tabs/sellers', icon: 'people-circle' },
    { title: 'Inventory', url: '/admininventory/tabs/products', icon: 'bag-add' },
    { title: 'Categories', url: '/admincategory/tabs/categories', icon: 'apps' },
  ];
  public customerPages = [
    { title: 'Buy', url: '/home/tabs/buy', icon: 'basket' },
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Dashboard', url: '/customerdashboard', icon: 'home' },
    { title: 'Profile', url: '/customerprofile/tabs/profile', icon: 'person-circle' },
    { title: 'FynPay', url: '/customerwallet/tabs/fynpay', icon: 'wallet' },
    { title: 'Accounts', url: '/customeraccounts/tabs/discounts', icon: 'cash' },
    { title: 'Orders', url: '/customerorders/tabs/orders', icon: 'cart' },
    { title: 'WishList', url: '/customerorders/tabs/wishlist', icon: 'heart-circle' },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthServiceService,
  ) {
    this.initializeApp();
    this.dark
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

  ngOnInit() {
    this.checkLoginStatus();
    this.listenToEvents();
  }


  updateLoggedInStatus(loggedIn: boolean, userType: string) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
      this.userType = userType;
    }, 300);
  }

  async checkLoginStatus() {
    const { value } = await Storage.get({ key: this.HAS_LOGGED_IN });
    if (value === 'true') {
      if (this.authService.currentUserDataValue) {
        this.userName = this.authService.currentUserDataValue.name;
        this.userType = this.authService.currentUserDataValue.usertype;
        this.updateLoggedInStatus(true, this.userType);
      }
    } else {
      this.router.navigateByUrl('/home/tabs/buy');
    }
  }

  listenToEvents() {
    window.addEventListener('user:login', (e: any) => {
      this.userName = e.detail.name;
      this.updateLoggedInStatus(true, e.detail.type);
    });
    window.addEventListener('user:guest', (e: any) => {
      this.updateLoggedInStatus(false, 'Guest');
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false, 'Guest');
    });
  }

  logout() {
    this.authService.logout().then(() => {
      return this.router.navigateByUrl('/authenticate');
    });
  }

  updateDarkMode(event) {
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if (event.detail.checked) {
      document.body.setAttribute('data-theme', 'dark');
    }
    else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }
  onRegister() {
    this.router.navigateByUrl('/authenticate/register');
  }
}
