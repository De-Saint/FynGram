import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { FunctionsService } from './../../services/functions.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fynpay',
  templateUrl: './fynpay.page.html',
  styleUrls: ['./fynpay.page.scss'],
})
export class FynpayPage implements OnInit {
  account: any;
  sid: any;
  constructor(
    private router: Router, private fun: FunctionsService,
    private loadingCtrl: LoadingController, private authService: AuthServiceService) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    if (!this.account) {
      this.sid = this.authService.currentUserDataValue.sid;
      this.GetWalletDetails(this.sid);
    }
  }
  onFund() {
    this.router.navigate(['/', 'adminwallet', 'tabs', 'fynpay', 'new']);
  }

  async GetWalletDetails(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetWalletDetails(String(sid))
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.account = res.data;
        } else {
          this.fun.presentToast(res.msg);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.fun.presentToast(error);
        
      })
  }

}
