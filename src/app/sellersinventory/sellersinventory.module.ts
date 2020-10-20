import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellersinventoryPageRoutingModule } from './sellersinventory-routing.module';

import { SellersinventoryPage } from './sellersinventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellersinventoryPageRoutingModule
  ],
  declarations: [SellersinventoryPage]
})
export class SellersinventoryPageModule {}
