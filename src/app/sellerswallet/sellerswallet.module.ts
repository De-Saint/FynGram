import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerswalletPageRoutingModule } from './sellerswallet-routing.module';

import { SellerswalletPage } from './sellerswallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerswalletPageRoutingModule
  ],
  declarations: [SellerswalletPage]
})
export class SellerswalletPageModule {}
