import { AuthServiceService } from './service/auth-service.service';
import { DatalinkService } from './../datalink.service';
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
    private authService: AuthServiceService,
    private fun: FunctionsService,
    private data: DataService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      password: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
    });
  }

  ngOnInit() {
  }


  signin() {
    if (this.fun.validateEmail(this.loginForm.value.email) && this.loginForm.value.password !== '') {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(res => {
        console.log(res);
      })

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

  onOpen(link){
    this.fun.navigate(link, true);
  }

}
