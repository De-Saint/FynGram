import { FunctionsService } from './../services/functions.service';
import { AuthServiceService } from './service/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser, Storage } = Plugins;
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.page.html',
  styleUrls: ['./authenticate.page.scss'],
})
export class AuthenticatePage implements OnInit {
  HAS_LOGGED_IN = 'hasLoggedIn';
  loginForm: FormGroup;

  constructor(
    private authService: AuthServiceService,
    private fun: FunctionsService,
    private loadingCtrl: LoadingController,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      password: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
    });
  }

  ngOnInit() {
  }


  async signin() {
    if (this.fun.validateEmail(this.loginForm.value.email) && this.loginForm.value.password !== '') {
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        mode: 'ios'
      });
      await loading.present();
      let oldsid;
      if (this.authService.currentUserDataValue) {
        oldsid = this.authService.currentUserDataValue.sid;
      }
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password, oldsid)
        .subscribe(res => {
          loading.dismiss().catch(() => { });
          if (res.code === 200) {
            this.gotoHomePage(res.data);
          } else {
            this.fun.presentToast(res.msg);
          }
        }, error => {
          loading.dismiss().catch(() => { });
        })
    } else {
      this.fun.presentToast('Wrong Input!');
    }
  }

  async openLink(link) {
    await Browser.open(
      {
        url: link,
        toolbarColor: "#40A944"
      }
    );
  }

  onOpen(link) {
    this.fun.navigate(link, true);
  }

  gotoHomePage(data) {
    Storage.set({ key: this.HAS_LOGGED_IN, value: 'true' });
    const name = this.authService.currentUserDataValue.name;
    const type = this.authService.currentUserDataValue.usertype;
    this.fun.presentToast('Welcome ' + name);
    if (type === 'Guest' || type === 'Customer') {
      this.fun.navigate('/home/tabs/buy', false);
    } else if (type === 'Seller') {
      this.fun.navigate('/sellersdashboard', false);
    } else if (type === 'Admin') {
      this.fun.navigate('/admindashboard', false);
    }

    const event = new CustomEvent('user:login', { detail: { name, type } });
    return window.dispatchEvent(event);
  }
}
