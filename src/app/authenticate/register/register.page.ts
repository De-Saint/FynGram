import { DataService } from './../../data.service';
import { MenuController, ModalController } from '@ionic/angular';
import { FunctionsService } from './../../functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  first_name = '';
  last_name = '';
  email = '';
  password = '';
  title = '';
  customAlertOptions: any = {
    header: 'Select Title',
  };

  constructor(private fun: FunctionsService, private menuCtrl: MenuController, private modalController: ModalController, private data: DataService) {
    
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.menuCtrl.enable(false, 'start');
    // this.menuCtrl.enable(false, 'end');
  }

  signup() {
    if (this.first_name != '' && this.last_name != '' && this.email != '' && this.password != '' && this.fun.validateEmail(this.email)) {
      this.fun.navigate('home', false);
    }
    else {
      this.fun.presentToast('Wrong Input', true, 'bottom', 2100);
    }
  }

  async open_modal(b) {
    //   let modal;
    //   if(b){
    //     modal = await this.modalController.create({
    //       component: InfomodalPage,
    //       componentProps: { value: this.data.terms_of_use, title: 'Terms of Use' }
    //     });
    //   }
    //   else{
    //     modal = await this.modalController.create({
    //       component: InfomodalPage,
    //       componentProps: { value: this.data.privacy_policy, title: 'Privacy Policy' }
    //     });
    //   }
    //   return await modal.present();
  }

}
