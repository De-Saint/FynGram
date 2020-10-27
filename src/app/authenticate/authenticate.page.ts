import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './../data.service';
import { FunctionsService } from './../functions.service';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.page.html',
  styleUrls: ['./authenticate.page.scss'],
})
export class AuthenticatePage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private platform: Platform,
    private fun: FunctionsService,
    private data: DataService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      password: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] }),
    });
  }

  ngOnInit() {
  }


  signin() {
    if (this.fun.validateEmail(this.loginForm.value.email) && this.loginForm.value.password !== '') {
      this.fun.navigate('home', false);
    } else {
      this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
    }

  }

  async openLink(link) {
    console.log(link);
    await Browser.open(
      {
        url: link,
        toolbarColor: "#40A944"
      }
      );
  }

}
