import { FunctionsService } from './../../services/functions.service';
import { AuthServiceService } from './../service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  forgotForm: FormGroup;

  constructor(private fun: FunctionsService,
              private authService: AuthServiceService,
              private loadingCtrl: LoadingController) {
    this.forgotForm = new FormGroup({
      email: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] }),
    })
  }

  ngOnInit() {
  }


  async onSubmit() {
    if (!this.forgotForm.valid) {
      this.fun.presentToast('Wrong Input!');
      return false;
    }
    if (this.fun.validateEmail(this.forgotForm.value.email)) {
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        mode:'ios'
      });
      await loading.present();
      this.authService.ResetPassword(this.forgotForm.value.email)
        .subscribe(res => {
          loading.dismiss().catch(() => { });
          if (res.code === 200) {
            this.fun.navigate('authenticate/reset');
            this.fun.presentToast(res.msg);
          }
        }, error => {
          loading.dismiss().catch(() => { });
          this.fun.presentToast(error);
        })
    } else {
      this.fun.presentToast('Invalid Email!');
    }
  }



}
