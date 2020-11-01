import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, NavController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  private nagivationData = [];

  constructor(
    public dataService: DataService,
    private router: Router,
    private toastController: ToastController,
    private nav: NavController, public alertController: AlertController) { }

  navigate(link, forward?) {
    if (forward) {
      this.nav.navigateForward('/' + link);
    } else {
      this.router.navigateByUrl('/' + link);
    }
  }

  array(i) {
    const l = [];
    for (let j = 0; j < i; j++) {
      l.push(1);
    }
    return l;
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkout() {
    if (this.dataService.current_user.address.length === 0) {
      this.nav.navigateForward('/NewAddress/$1');
    } else {
      this.nav.navigateForward('/Checkout');
    }
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      duration: 2100,
      message: message
    });
    toast.present();
  }

  back() {
    // this.nav.goBack();
    this.nav.back();
  }

  date(date) {
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  update(product) {
    this.dataService.current_product = product;
  }

  removeConform(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Are you sure you want to remove this item',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (cancel) => {
              console.log('Confirm Cancel: blah');
              resolve('cancel');
            }
          }, {
            text: 'Okay',
            handler: (ok) => {
              console.log('Confirm Okay');
              resolve('ok');
            }
          }
        ]
      });

      alert.present();
    });
  }

  calculate(price, discount) {
    price = price - (price * discount / 100);
    return price.toFixed(2);
  }

  faqs = {
    'About Us': "https://fyngram.com/FynGramShop/pages/shop/aboutus/aboutus.jsp",
    'Blog': "https://fyngram.com/FynGramShop/pages/shop/services/services.jsp",
    'Contact Us': "https://fyngram.com/FynGramShop/pages/shop/contact/contact.jsp",
    'Supports': "https://fyngram.com/FynGramShop/pages/shop/support/support.jsp",
    'FAQs': "https://fyngram.com/FynGramShop/pages/shop/faq/faq.jsp",
    'Privacy Policy': "https://fyngram.com/FynGramShop/pages/shop/privacy/privacy.jsp",
    'Terms & Conditions': "https://fyngram.com/FynGramShop/pages/shop/terms/terms.jsp",
    'Return Policy': "https://fyngram.com/FynGramShop/pages/shop/returned_policy/returned_policy.jsp",
  };

  setNavigationData(id, data) {
    this.nagivationData[id] = data;
  }
 
  getNavigationData(id) {
    return this.nagivationData[id];
  }
}
