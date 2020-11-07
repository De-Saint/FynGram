import { AuthServiceService } from './../../../authenticate/service/auth-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Address2 } from './../../../services/data.service';
import { LoadingController } from '@ionic/angular';

import { AddressService } from './../../../services/address.service';
import { FunctionsService } from './../../../services/functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  addresstypes: any;
  states: any;
  lgas: any;
  towns: any;
  busstops: any;
  streets: any;
  showbustop = true;
  showstreet = true;
  addressForm: FormGroup;
  sid: any;

  defaultcustomAlertOptions: any = {
    header: 'Select Default',
  };
  addresstypecustomAlertOptions: any = {
    header: 'Select Address Type',
  };
  statecustomAlertOptions: any = {
    header: 'Select State',
  };
  lgacustomAlertOptions: any = {
    header: 'Select LGA',
  };
  towncustomAlertOptions: any = {
    header: 'Select Town',
  };
  busstopcustomAlertOptions: any = {
    header: 'Select Bus Stop',
  };
  streetcustomAlertOptions: any = {
    header: 'Select Street',
  };
  constructor(private fun: FunctionsService, private addressService: AddressService,
    private loadingCtrl: LoadingController, private router: Router,
    private authService: AuthServiceService) {

    this.addressForm = new FormGroup({
      addresstype: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      state: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      lga: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      town: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      busstop: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      street: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      closeto: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      housenumber: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      phone: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required, Validators.minLength(11), Validators.maxLength(11)] }),
      postal: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      default: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
    });
  }

  ngOnInit() {
    this.GetAddressTypes();
    this.GetStates();

  }

  async  GetAddressTypes() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });
    await loading.present();
    this.addressService.GetAddressTypes().subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.addresstypes = res.data;
      } else {
        this.fun.presentToast(res.msg);
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }
  GetStates() {
    this.addressService.GetStates().subscribe(res => {
      if (res.code === 200) {
        this.states = res.data;
      } else {
        this.fun.presentToast(res.msg);
      }
    }, error => {
    })
  }
  async onSelectState(event) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });
    await loading.present();
    this.addressService.GetLga(String(event.detail.value)).subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.code === 200) {
        this.lgas = res.data;
      } else {
        this.fun.presentToast(res.msg);
      }
    }, error => {
      loading.dismiss().catch(() => { });
    })
  }
  async onSelectLga(event) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });
    await loading.present();
    this.addressService.GetTowns(String(event.detail.value))
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.towns = res.data;
        } else {
          this.fun.presentToast(res.msg);
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }
  async onSelectTown(event) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });
    await loading.present();
    this.addressService.GetBusStops(String(event.detail.value))
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.busstops = res.data;
          this.showbustop = true;
        } else {
          this.showbustop = false;
          this.showstreet = false;
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }


  async onSelectBusStop(event) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode:'ios'
    });
    await loading.present();
    this.addressService.GetStreets(String(event.detail.value))
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.streets = res.data;
          this.showstreet = true;
        } else {
          this.showstreet = false;
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }




  async update() {
    if (!this.addressForm.valid) {
      this.fun.presentToast('Wrong Input!');
      return false;
    }

    if (this.addressForm.value.phone.length === 11) {
      const loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        mode:'ios'
      });
      await loading.present();
      this.sid = this.authService.currentUserDataValue.sid;
      this.addressService.AddNewAddress(String(this.sid),
        String(this.addressForm.value.addresstype),
        this.addressForm.value.state,
        this.addressForm.value.lga,
        this.addressForm.value.town,
        this.addressForm.value.busstop,
        this.addressForm.value.street,
        this.addressForm.value.closeto,
        String(this.addressForm.value.housenumber),
        String(this.addressForm.value.phone),
        String(this.addressForm.value.postal),
        String(this.addressForm.value.default)
      )
        .subscribe(res => {
          loading.dismiss().catch(() => { });
          if (res.code === 200) {
            this.router.navigate(['/', 'customerprofile', 'tabs', 'address']);

            this.fun.presentToast(res.msg);
          }
        }, error => {
          loading.dismiss().catch(() => { });
          this.fun.presentToast(error);
        })
    } else {
      this.fun.presentToast('Phone must be 11 digits, start with 070xxxxxxxx!');
    }
  }

}
