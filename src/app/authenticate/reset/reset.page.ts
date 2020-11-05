import { FunctionsService } from './../../services/functions.service';
import { AuthServiceService } from './../service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  resetForm: FormGroup;

  constructor(private fun: FunctionsService, private authService: AuthServiceService,
    private loadingCtrl: LoadingController,
  ) {
    this.resetForm = new FormGroup({
      code: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] }),
      password: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] }),
      password2: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] })
    });
  }

  ngOnInit() {
  }


  async onSubmit() {
    if (!this.resetForm.valid) {
      this.fun.presentToast('Wrong Input!');
      return false;
    }
    if (this.resetForm.value.password === this.resetForm.value.password2) {
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
      });
      await loading.present();
      this.authService.PasswordRecovery(this.resetForm.value.code, this.resetForm.value.password)
        .subscribe(res => {
          loading.dismiss().catch(() => { });
          if (res.code === 200) {
            this.fun.navigate('authenticate');
            this.fun.presentToast(res.msg);
          }
        }, error => {
          loading.dismiss().catch(() => { });
          this.fun.presentToast(error);
        })

    } else {
      this.fun.presentToast('Password Mismatch!');
    }
  }

}
