import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminaccountsPageRoutingModule } from './adminaccounts-routing.module';

import { AdminaccountsPage } from './adminaccounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminaccountsPageRoutingModule
  ],
  declarations: [AdminaccountsPage]
})
export class AdminaccountsPageModule {}
