import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FynpayPageRoutingModule } from './fynpay-routing.module';

import { FynpayPage } from './fynpay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FynpayPageRoutingModule
  ],
  declarations: [FynpayPage]
})
export class FynpayPageModule {}
