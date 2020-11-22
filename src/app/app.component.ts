import { AuthServiceService } from './authenticate/service/auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Platform } from '@ionic/angular';
import {
  Plugins,
  StatusBarStyle
} from '@capacitor/core';

const { Storage, StatusBar, SplashScreen } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  loggedIn = false;
  userType = 'Guest';
  version: string;
  userName: any;
  HAS_LOGGED_IN = 'hasLoggedIn';
  isStatusBarLight = true;
  public appPages = [
    { title: 'Buy', url: '/home/tabs/buy', icon: 'basket' },
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Login', url: '/authenticate', icon: 'log-in' },
    { title: 'Register', url: '/authenticate/register', icon: 'person-add' }
  ];

  public sellerPages = [
    { title: 'Dashboard', url: '/sellersdashboard', icon: 'home' },
    { title: 'Profile', url: '/sellersprofile/tabs/profile', icon: 'person-circle' },
    { title: 'FynPay', url: '/sellerswallet/tabs/fynpay', icon: 'wallet' },
    { title: 'Accounts', url: '/sellersaccounts/tabs/transactions', icon: 'cash' },
    { title: 'Inventory', url: '/sellersinventory/tabs/products', icon: 'bag-add' },

  ];

  public adminPages = [
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
    { title: 'Profile', url: '/customerprofile/tabs/profile', icon: 'person-circle' },
    { title: 'FynPay', url: '/customerwallet/tabs/fynpay', icon: 'wallet' },
    { title: 'Accounts', url: '/customeraccounts/tabs/transactions', icon: 'cash' },
    { title: 'Orders', url: '/customerorders/tabs/orders', icon: 'cart' },
    { title: 'WishList', url: '/customerorders/tabs/wishlist', icon: 'heart-circle' },
  ];

  constructor(
    private platform: Platform,
    private renderer: Renderer2,
    private router: Router,
    private appVersion: AppVersion,
    private authService: AuthServiceService,
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.updateAppVersion();
      this.changeStatusBar();
      this.hideSplash();
    });

  }
  updateAppVersion() {
    this.appVersion.getVersionNumber()
      .then((version) => {
        this.version = version;
      }).catch(() => {
      });
  }

  changeStatusBar() {
    StatusBar.show();
    StatusBar.setStyle({
      style: this.isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
    });
    this.isStatusBarLight = !this.isStatusBarLight;

    // Display content under transparent status bar (Android only)
    StatusBar.setOverlaysWebView({
      overlay: false
    });

    StatusBar.setBackgroundColor({
      color: "#40A944"
    });
  }

  hideSplash() {
    SplashScreen.hide();
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
    if (event.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    }
    else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }
  }
  onRegister() {
    this.router.navigateByUrl('/authenticate/register');
  }
}
