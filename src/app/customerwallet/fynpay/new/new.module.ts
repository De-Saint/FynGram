import { Angular4PaystackModule } from 'angular4-paystack';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPageRoutingModule } from './new-routing.module';

import { NewPage } from './new.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Angular4PaystackModule,
    IonicModule,
    NewPageRoutingModule
  ],
  declarations: [NewPage]
})
export class NewPageModule {}
