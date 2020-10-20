import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellersdashboardPageRoutingModule } from './sellersdashboard-routing.module';

import { SellersdashboardPage } from './sellersdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellersdashboardPageRoutingModule
  ],
  declarations: [SellersdashboardPage]
})
export class SellersdashboardPageModule {}
