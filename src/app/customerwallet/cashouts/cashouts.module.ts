import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashoutsPageRoutingModule } from './cashouts-routing.module';

import { CashoutsPage } from './cashouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashoutsPageRoutingModule
  ],
  declarations: [CashoutsPage]
})
export class CashoutsPageModule {}
