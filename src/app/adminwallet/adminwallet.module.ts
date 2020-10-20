import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminwalletPageRoutingModule } from './adminwallet-routing.module';

import { AdminwalletPage } from './adminwallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminwalletPageRoutingModule
  ],
  declarations: [AdminwalletPage]
})
export class AdminwalletPageModule {}
