import { FunctionsService } from './../../../services/functions.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../../authenticate/service/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  requestForm: FormGroup;
  sid: any;
  constructor(private authService: AuthServiceService, private router: Router, 
    private fun: FunctionsService,
    private loadingCtrl: LoadingController) {
    this.requestForm = new FormGroup({
      amount: new FormControl(null, { updateOn: 'blur', validators: [Validators.required] }),
      pin: new FormControl(null, { updateOn: 'blur', validators: [Validators.required] }),
    });
  }

  ngOnInit() {
    this.sid = this.authService.currentUserDataValue.sid;
  }
  async onSubmit(){
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.sid = this.authService.currentUserDataValue.sid;
    this.authService.RequestCashOut(String(this.sid), String(this.requestForm.value.amount), String(this.requestForm.value.pin))
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.router.navigate(['/', 'sellerswallet', 'tabs', 'cashouts']);
          this.fun.presentToast(res.msg);
        } else {
          this.fun.presentToast(res.msg);
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }
}
