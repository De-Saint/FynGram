import { Router } from '@angular/router';
import { AddressService } from './../../services/address.service';
import { LoadingController } from '@ionic/angular';
import { FunctionsService } from './../../services/functions.service';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  show = true;
  sid: any;
  addressess: any;
  constructor(private fun: FunctionsService, private loadingCtrl: LoadingController,
    private authService: AuthServiceService,
    private router: Router,
    private addressService: AddressService) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetUserAddress(this.sid);
  }

  onAdd() {
    this.router.navigate(['/', 'sellersprofile', 'tabs', 'address', 'new']);
  }

  async GetUserAddress(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });
    await loading.present();
    this.addressService.GetUserAddress(sid).subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.addressess = res.data;
        this.show = true;
      } else {
        this.show = false;
      }
    }, error => {
      loading.dismiss().catch(() => { });
      console.log(JSON.stringify(error));
    })
  }
  async onDelete(address) {
    console.log(address);
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });

    this.fun.removeConform('address').then(async res => {
      if (res === 'ok') {
        await loading.present();
        this.addressService.DeleteUserAddresses(address.id)
          .subscribe(res => {
            loading.dismiss().catch(() => { });
            if (res.code === 200) {
              this.fun.presentToast(res.msg);
              this.show = true;
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetUserAddress(this.sid);
            } else {
              this.fun.presentToast(res.msg);
              this.show = false;
            }
          }, error => {
            loading.dismiss().catch(() => { });
            console.log(JSON.stringify(error));
          })
      }
    });



  }



}
