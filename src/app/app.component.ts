import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  loggedIn = false;
  dark = false;
  userType = '';
  public appPages = [
    { title: 'Buy', url: '/home/tabs/buy', icon: 'home' },
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'Carts', url: '/cart', icon: 'cart' }
  ];
  public sellerPages = [
    { title: 'Dashboard', url: '/sellersdashboard', icon: 'home' },
    { title: 'Profile', url: '/sellersprofile/tabs/profile', icon: 'search' },
    { title: 'FynPay', url: '/sellerswallet/tabs/fynpay', icon: 'search' },
    { title: 'Accounts', url: '/sellersaccounts/tabs/subscriptions', icon: 'search' },
    { title: 'Inventory', url: '/sellersinventory/tabs/products', icon: 'search' },
    { title: 'LogOut', url: '/authenticate', icon: 'log-in' },
  ];
  public adminPages = [
    { title: 'Dashboard', url: '/admindashboard', icon: 'home' },
    { title: 'Profile', url: '/adminprofile/tabs/profile', icon: 'search' },
    { title: 'FynPay', url: '/adminwallet/tabs/fynpay', icon: 'search' },
    { title: 'Accounts', url: '/adminaccounts/tabs/subscriptions', icon: 'search' },
    { title: 'Users', url: '/adminusers/tabs/sellers', icon: 'search' },
    { title: 'Inventory', url: '/admininventory/tabs/products', icon: 'search' },
    { title: 'Categories', url: '/admincategory/tabs/categories', icon: 'search' },
    { title: 'LogOut', url: '/authenticate', icon: 'log-in' },
  ];
  public customerPages = [
    { title: 'Dashboard', url: '/customerdashboard', icon: 'home' },
    { title: 'Profile', url: '/customerprofile/tabs/profile', icon: 'search' },
    { title: 'FynPay', url: '/customerwallet/tabs/fynpay', icon: 'search' },
    { title: 'Accounts', url: '/customeraccounts/tabs/discounts', icon: 'cart' },
    { title: 'Orders', url: '/customerorders/tabs/orders', icon: 'cart' },
    { title: 'WishList', url: '/customerorders/tabs/wishlist', icon: 'cart' },
    { title: 'LogOut', url: '/authenticate', icon: 'log-in' },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
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
    // this.checkLoginStatus();
    this.listenToEvents();
  }
  updateLoggedInStatus(loggedIn: boolean, userType: string) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
      this.userType = userType;
    }, 300);
  }

  listenToEvents() {
    this.updateLoggedInStatus(false, "");
    // this.events.subscribe('user:signup', () => {
    //   this.enableMenu(true, "");
    // });

    // this.events.subscribe('user:logout', () => {
    //   this.nav.setRoot('SignInPage');
    //   this.enableMenu(false, "");
    //   this.auth.logout();
    // });

    // this.events.subscribe('user:login', (usertype, Userfullname) => {
    //   this.Userfullname = Userfullname;
    //   this.usertype = usertype;
    //   this.enableMenu(true, usertype);
    // })

    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true, '');
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true, '');
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false, '');
    });
  }

  logout() {
    // this.userData.logout().then(() => {
    //   return this.router.navigateByUrl('/app/tabs/schedule');
    // });
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
}
