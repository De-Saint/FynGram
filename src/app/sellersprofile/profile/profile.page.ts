import { FunctionsService } from './../../services/functions.service';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  updateForm: FormGroup;
  sid: any;
  details: any;
  constructor(
    private authService: AuthServiceService,
    private loadingCtrl: LoadingController,
    private fun: FunctionsService) {
    this.updateForm = new FormGroup({
      first_name: new FormControl(null, { updateOn: 'blur', validators: [Validators.required] }),
      last_name: new FormControl(null, { updateOn: 'blur', validators: [Validators.required] }),
      email: new FormControl(null, { updateOn: 'blur', validators: [Validators.required] }),
      password: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] }),
      password2: new FormControl(null, { updateOn: 'blur', validators: [Validators.minLength(6)] }),
      title: new FormControl(null, { updateOn: 'blur', validators: [Validators.required] }),
      gender: new FormControl({ disabled: true }, { updateOn: 'blur', validators: [Validators.required] }),
      phone: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(11), Validators.maxLength(11)] }),
    });
  }

  ngOnInit() {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetUserDetails(this.sid);
  }

  async GetUserDetails(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetUserDetails(sid).subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.details = res.data;
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }

  async onSubmit() {
   if (this.updateForm.value.password !== null) {
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        mode: 'ios'
      });
      await loading.present();
      this.sid = this.authService.currentUserDataValue.sid;
      this.authService.UpdateProfile(String(this.sid), String(this.updateForm.value.first_name),
        String(this.updateForm.value.last_name), String(this.updateForm.value.password),
        String(this.updateForm.value.password2), String(this.updateForm.value.phone))
        .subscribe(res => {
          loading.dismiss().catch(() => { });
          if (res.code === 200) {
            this.GetUserDetails(this.sid);
            this.fun.presentToast(res.msg);
          } else {
            this.fun.presentToast(res.msg);
          }
        }, error => {
          loading.dismiss().catch(() => { });
          this.fun.presentToast(error);
        })
    } else {
      this.fun.presentToast('Your current password is needed to update your profile');
    }


  }
}
