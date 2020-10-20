import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellersprofilePageRoutingModule } from './sellersprofile-routing.module';

import { SellersprofilePage } from './sellersprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellersprofilePageRoutingModule
  ],
  declarations: [SellersprofilePage]
})
export class SellersprofilePageModule {}
