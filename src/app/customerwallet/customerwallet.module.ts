import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerwalletPageRoutingModule } from './customerwallet-routing.module';

import { CustomerwalletPage } from './customerwallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerwalletPageRoutingModule
  ],
  declarations: [CustomerwalletPage]
})
export class CustomerwalletPageModule {}
