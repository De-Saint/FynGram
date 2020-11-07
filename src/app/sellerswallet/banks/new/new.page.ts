import { Router } from '@angular/router';
import { FunctionsService } from './../../../services/functions.service';
import { AuthServiceService } from './../../../authenticate/service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  banks: any;
  bankForm: FormGroup;
  sid: any;
  bankcustomAlertOptions: any = {
    header: 'Select Bank',
  };
  accounttypecustomAlertOptions: any = {
    header: 'Select Account Type',
  };

  constructor(
      private loadingCtrl: LoadingController,
      private fun: FunctionsService,
      private router: Router,
      private authService: AuthServiceService) {
    this.bankForm = new FormGroup({
      bank: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      accttype: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      acctnumber: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] })
    });
  }

  ngOnInit() {
    this.GetBanks();
  }

  async  GetBanks() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetBanks().subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.banks = res.data;
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }
  async onSubmit() {
    if (!this.bankForm.valid) {
      this.fun.presentToast('Wrong Input!');
      return false;
    }

    if (this.bankForm.value.acctnumber.length === 10) {
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        mode: 'ios'
      });
      await loading.present();
      this.sid = this.authService.currentUserDataValue.sid;
      this.authService.CreateBankDetails(String(this.sid),
        String(this.bankForm.value.bank),
        this.bankForm.value.accttype,
        this.bankForm.value.acctnumber,
      )
        .subscribe(res => {
          loading.dismiss().catch(() => { });
          if (res.code === 200) {
            this.router.navigate(['/', 'sellerswallet', 'tabs', 'banks']);

            this.fun.presentToast(res.msg);
          }
        }, error => {
          loading.dismiss().catch(() => { });
          this.fun.presentToast(error);
        })
    } else {
      this.fun.presentToast('Account Number must be 10 digits!');
    }
  }

}
