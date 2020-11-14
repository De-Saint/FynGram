import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../authenticate/service/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.page.html',
  styleUrls: ['./admindashboard.page.scss'],
})
export class AdmindashboardPage implements OnInit {
  sid: any;
  stats: any;
  constructor(
    private authService: AuthServiceService,
    private loadingCtrl: LoadingController, ) { }

  ngOnInit() {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetStatDetails(this.sid);
  }
  async GetStatDetails(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.authService.GetStatDetails(sid)
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.stats = res.data;
        } 
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }
}
