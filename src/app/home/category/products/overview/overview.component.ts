import { FunctionsService } from './../../../../services/functions.service';
import { AuthServiceService } from './../../../../authenticate/service/auth-service.service';
import { ShopService } from './../../../service/shop.service';
import { IonSlides, LoadingController, AlertController } from '@ionic/angular';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  inputs: ['slider', 'product',]
})
export class OverviewComponent implements OnInit {
  @Input() slider: IonSlides;
  @Input() product: any;
  @Output() notify: EventEmitter<Number> = new EventEmitter<Number>();


  slideOpts = {
    effect: 'flip'
  };
  open = [false, false, false, false];
  liked = false;
  constructor(private fun: FunctionsService, private shopService: ShopService,
    private authService: AuthServiceService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController) {
  }

  ngOnInit() { }

  goToReviews() {
    this.notify.emit(2);
  }

  toggle(i) {
    this.open[i] = !this.open[i];
  }

  remove() {
    this.slider.lockSwipes(true);
  }

  gainback() {
    this.slider.lockSwipes(false);
  }

  async like(product) {
    this.liked = !this.liked;
    console.log(this.liked)

    if (this.like) {
      const usertype = this.authService.currentUserDataValue.usertype;
      if (usertype !== 'Guest') {
        this.AddtoSavedItem(product);
      } else {
        this.loginOrRegister();
      }
    }
  }


  async  loginOrRegister() {
    const alert = await this.alertController.create({
      header: 'Wishlist!',
      message: 'Please, you need to Login or Register to add to WishList',
      buttons: [
        {
          text: 'Register',
          cssClass: 'secondary',
          handler: () => {
            this.fun.navigate('/authenticate/register');
          }
        }, {
          text: 'Login',
          handler: () => {
            this.fun.navigate('/authenticate');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.liked = !this.liked;
          }
        }
      ]
    });

    alert.present();
  }


  async AddtoSavedItem(product) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });
    await loading.present();
    this.shopService.AddOption('SavedItems', product.id, product.PriceDetails.selling_price, String(1), 'Increase')
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.fun.presentToast(res.msg);
        } else {
          this.fun.presentToast(res.msg);
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }

  computeRatings(ratenumber) {
    return this.fun.array(parseInt(ratenumber));
  }
  computeRatings2(ratenumber) {
    return this.fun.array(5 - parseInt(ratenumber));
  }
  computeDate() {
    return this.fun.date(new Date());
  }
}
