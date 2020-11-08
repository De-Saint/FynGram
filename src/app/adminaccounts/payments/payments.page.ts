import { PaymentService } from './../../services/payment.service';
import { TransactionService } from './../../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { FunctionsService } from './../../services/functions.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  show = true;
  payments: any;
  sid: any;
  constructor(
    private fun: FunctionsService, 
    private loadingCtrl: LoadingController,
    private authService: AuthServiceService, 
    private paymentService: PaymentService) { }

  ngOnInit() {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetRecentTransactions(this.sid);
  }
  async GetRecentTransactions(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });
    await loading.present();
    this.paymentService.GetPayments(sid).subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.payments = res.data;
        this.show = true;
      } else {
        this.show = false;
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }

   shop() {
    this.fun.navigate('home');
  }


  async onDelete(payment) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    this.fun.removeConform('payment').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.paymentService.DeletePayment(String(payment.id))
          .subscribe(resp => {
            loading.dismiss().catch(() => { });
            if (resp.code === 200) {
              this.fun.presentToast(resp.msg);
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetRecentTransactions(this.sid);
            } else {
              this.fun.presentToast(resp.msg);
            }
          }, error => {
            loading.dismiss().catch(() => { });
          })
      }
    });
  }

}
