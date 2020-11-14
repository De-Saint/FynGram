import { MessagesService } from './../../services/messages.service';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';

import { FunctionsService } from './../../services/functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  sid: any;
  messages: any;
  show = true;
  constructor(private fun: FunctionsService, private loadingCtrl: LoadingController,
              private authService: AuthServiceService, private messagesService: MessagesService) { }

  ngOnInit() {
    if (!this.messages) {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetMessages(this.sid);
    }
  }

  shop() {
    this.fun.navigate('home');
  }


  async GetMessages(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.messagesService.GetMessages(sid, 'All').subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.messages = res.data;
        this.show = true;
      } else {
        this.fun.presentToast(res.msg);
        this.show = false;
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }

  async onDelete(message) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    this.fun.removeConform('message').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.messagesService.DeleteMessage(String(message.id))
          .subscribe(resp => {
            loading.dismiss().catch(() => { });
            if (resp.code === 200) {
              this.fun.presentToast(resp.msg);
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetMessages(this.sid);
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
