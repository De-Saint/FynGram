import { DataService } from './../data.service';
import { FunctionsService } from './../functions.service';
import { Platform, MenuController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.page.html',
  styleUrls: ['./authenticate.page.scss'],
})
export class AuthenticatePage implements OnInit {

  email = '';
  password = '';

  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private fun: FunctionsService,
    private menuCtrl: MenuController,
    private modalController: ModalController,
    private data: DataService) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.menuCtrl.enable(false, 'start');
    // this.menuCtrl.enable(false, 'end');
    // this.splashScreen.hide();
  }

  signin() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        if (this.fun.validateEmail(this.email) && this.password !== '') {
          this.fun.navigate('home', false);
        } else {
          this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
        }
      } else {
        this.fun.navigate('home', false);
      }
    });

  }

  async open_modal(b) {
    // let modal;
    // if (b) {
    //   modal = await this.modalController.create({
    //     component: InfomodalPage,
    //     componentProps: { value: this.data.terms_of_use, title: 'Terms of Use' }
    //   });
    // } else {
    //   modal = await this.modalController.create({
    //     component: InfomodalPage,
    //     componentProps: { value: this.data.privacy_policy, title: 'Privacy Policy' }
    //   });
    // }
    // return await modal.present();
  }

}
