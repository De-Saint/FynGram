import { AuthServiceService } from './../../../authenticate/service/auth-service.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FunctionsService } from './../../../services/functions.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  shippingForm: any;
  constructor(
    private fun: FunctionsService,
    private router: Router,
    private authService: AuthServiceService,
    private loadingCtrl: LoadingController,
  ) {
    this.shippingForm = new FormGroup({
      name: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      phone: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      email: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      interval: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      fyngramfees: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      sellerfees: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
    });
  }

  ngOnInit() {
  }
  async onSubmit() {
    if (!this.shippingForm.valid) {
      this.fun.presentToast('Wrong Input!');
      return false;
    }

    if (this.shippingForm.value.phone.length === 11) {
      if (this.fun.validateEmail(this.shippingForm.value.email)) {
        const loading = await this.loadingCtrl.create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          mode: 'ios'
        });
        await loading.present();
        this.authService.NewShippingAddress(String(0),
          String(this.shippingForm.value.name),
          this.shippingForm.value.interval,
          this.shippingForm.value.fyngramfees,
          this.shippingForm.value.sellerfees,
          'add',
          String(this.shippingForm.value.phone),
          String(this.shippingForm.value.email),
        )
          .subscribe(res => {
            loading.dismiss().catch(() => { });
            if (res.code === 200) {
              this.router.navigate(['/', 'adminusers', 'tabs', 'shippings']);
              this.fun.presentToast(res.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
            this.fun.presentToast(error);
          })
      } else {
        this.fun.presentToast('Invalid Email address!');
      }
    } else {
      this.fun.presentToast('Phone number must be 11 digits!');
    }
  }
}
