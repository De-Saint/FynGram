import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from './../../data.service';
import { FunctionsService } from './../../functions.service';
import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  titlecustomAlertOptions: any = {
    header: 'Select Title',
  };
  gendercustomAlertOptions: any = {
    header: 'Select Gender',
  };

  constructor(private fun: FunctionsService,  private data: DataService) {
    this.registerForm = new FormGroup({
      first_name: new FormControl(null, { updateOn: 'blur', validators: [Validators.required] }),
      last_name: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      email: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      password: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] }),
      password2: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] }),
      title: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      gender: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] }),
      phone: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required, Validators.minLength(11), Validators.maxLength(11)] }),
      terms: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required] })
    });
  }

  ngOnInit() {
  }


  onSubmit() {
    if (!this.registerForm.valid) {
      this.fun.presentToast('Wrong Input!');
      return false;
    }
    if (this.fun.validateEmail(this.registerForm.value.email)) {
      if (this.registerForm.value.phone.length === 11) {
        if (this.registerForm.value.password === this.registerForm.value.password2) {
          this.fun.navigate('home/tabs/buy', false);

        } else {
          this.fun.presentToast('Password Mismatch!');
        }
      }else{
        this.fun.presentToast('Phone must be 11 digits, start with 070xxxxxxxx!');
      }

    } else {
      this.fun.presentToast('Invalid Email!');
    }

  }


  async openLink(link) {
    console.log(link);
    await Browser.open(
      {
        url: link,
        toolbarColor: "#40A944"
      }
      );
  }

  onOpen(link){
    this.fun.navigate(link);
  }
}
