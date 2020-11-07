import { FunctionsService } from './../../services/functions.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.page.html',
  styleUrls: ['./banks.page.scss'],
})
export class BanksPage implements OnInit {
  banks: any;
  show = true;
  sid: any;

  constructor(private loadingCtrl: LoadingController,
              private fun: FunctionsService, private authService: AuthServiceService,
              private router: Router) {

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetBankDetails(this.sid);
  }

  async  GetBankDetails(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetBankDetails(String(sid)).subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.show = true;
        this.banks = res.data;
      } else {
        this.show = false;
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }
  onAdd() {
    this.router.navigate(['/', 'sellerswallet', 'tabs', 'banks', 'new']);
  }

  async onDelete(bank) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    this.fun.removeConform('bank details').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.authService.DeleteBankDetails(bank.id)
          .subscribe(res => {
            loading.dismiss().catch(() => { });
            if (res.code === 200) {
              this.fun.presentToast(res.msg);
              this.show = true;
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetBankDetails(this.sid);
            } else {
              this.fun.presentToast(res.msg);
              this.show = false;
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });
  }
}
