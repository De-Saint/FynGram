import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellersaccountsPageRoutingModule } from './sellersaccounts-routing.module';

import { SellersaccountsPage } from './sellersaccounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellersaccountsPageRoutingModule
  ],
  declarations: [SellersaccountsPage]
})
export class SellersaccountsPageModule {}
