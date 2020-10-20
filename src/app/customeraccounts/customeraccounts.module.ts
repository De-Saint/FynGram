import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomeraccountsPageRoutingModule } from './customeraccounts-routing.module';

import { CustomeraccountsPage } from './customeraccounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomeraccountsPageRoutingModule
  ],
  declarations: [CustomeraccountsPage]
})
export class CustomeraccountsPageModule {}
