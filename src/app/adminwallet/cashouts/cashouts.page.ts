import { FunctionsService } from './../../services/functions.service';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashouts',
  templateUrl: './cashouts.page.html',
  styleUrls: ['./cashouts.page.scss'],
})
export class CashoutsPage implements OnInit {
  cashouts: any;
  sid: any;
  show = true;
  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private fun: FunctionsService,
    private authService: AuthServiceService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    if (!this.cashouts) {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetUserCashoutRequest(this.sid);
    }
  }
 

  async  GetUserCashoutRequest(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetCashoutRequests(String(sid))
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.cashouts = res.data;
          this.show = true;
        } else {
          this.show = false;
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.show = false;
      })
  }

  async onDelete(request) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });

    this.fun.removeConform('cashout request').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.authService.ProcessCashOut('Deleted', request.CashOutID)
          .subscribe(res => {
            loading.dismiss().catch(() => { });
            if (res.code === 200) {
              this.fun.presentToast(res.msg);
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetUserCashoutRequest(this.sid);
            } else {
              this.fun.presentToast(res.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });
  }
  async onProcess(request, option, optiontext) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });

    this.fun.processRequest(option, 'cashout request').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.authService.ProcessCashOut(optiontext, request.CashOutID)
          .subscribe(res => {
            loading.dismiss().catch(() => { });
            if (res.code === 200) {
              this.fun.presentToast(res.msg);
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetUserCashoutRequest(this.sid);
            } else {
              this.fun.presentToast(res.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });
  }

 
}
