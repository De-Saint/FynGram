import { FunctionsService } from './../../functions.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  resetForm: FormGroup;

  constructor(private fun: FunctionsService,
  ) {
    this.resetForm = new FormGroup({
      code: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] }),
      password: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] }),
      password2: new FormControl(null,
        { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] })
    });
  }

  ngOnInit() {
  }


  onSubmit() {
    if (!this.resetForm.valid) {
      this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
      return false;
    }
    if (this.resetForm.value.password === this.resetForm.value.password2) {
      this.fun.navigate('home/tabs/buy', false);
    } else {
      this.fun.presentToast('Password Mismatch!', true, 'bottom', 2100);
    }
  }

}
