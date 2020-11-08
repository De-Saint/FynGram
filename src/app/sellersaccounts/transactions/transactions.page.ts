import { TransactionService } from './../../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { FunctionsService } from './../../services/functions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  show = true;
  transactions: any;
  sid: any;
  constructor(
    private fun: FunctionsService,
    private loadingCtrl: LoadingController,
    private authService: AuthServiceService,
    private transactionService: TransactionService) { }

  ngOnInit() {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetRecentTransactions(this.sid);
  }
  async GetRecentTransactions(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.transactionService.GetRecentTransactions(sid).subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.transactions = res.data;
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
}
