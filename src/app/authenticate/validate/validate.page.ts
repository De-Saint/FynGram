import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../service/auth-service.service';
import { FunctionsService } from './../../functions.service';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Component({
  selector: 'app-validate',
  templateUrl: './validate.page.html',
  styleUrls: ['./validate.page.scss'],
})
export class ValidatePage implements OnInit {
  validateForm: FormGroup;
  HAS_LOGGED_IN = 'hasLoggedIn';
  constructor(private fun: FunctionsService,
              private authService: AuthServiceService,
              private loadingCtrl: LoadingController) {
    this.validateForm = new FormGroup({
      code: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] }),
    })
  }

  ngOnInit() {
    const oldsid = this.authService.currentUserDataValue.sid;
    console.log(oldsid);
  }


  async onSubmit() {
    if (!this.validateForm.valid) {
      this.fun.presentToast('Wrong Input!');
      return false;
    }
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.authService.ValidateAccount(this.validateForm.value.code)
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        console.log(res);
        if (res.code === 200) {
          console.log(res)
          const oldsid = this.authService.currentUserDataValue.sid;
          this.authService.login(res.data.email, res.data.password, oldsid)
            .subscribe(res => {
              loading.dismiss().catch(() => { });
              console.log(res);
              if (res.code === 200) {
                this.gotoHomePage(res.data);
              }
            }, error => {
              loading.dismiss().catch(() => { });
              console.log(JSON.stringify(error));
              this.fun.presentToast(error);
            })
        }
      }, error => {
        loading.dismiss().catch(() => { });
        console.log(JSON.stringify(error));
        this.fun.presentToast(error);
      })

  }
  gotoHomePage(data) {
    Storage.set({ key: this.HAS_LOGGED_IN, value: 'true' });
    const name = this.authService.currentUserDataValue.name;
    const type = this.authService.currentUserDataValue.usertype;
    this.fun.presentToast('Welcome ' + name);
    this.fun.navigate('/home/tabs/buy', false);
    const event = new CustomEvent('user:login', { detail: { name, type } });
    return window.dispatchEvent(event);
  }

}
