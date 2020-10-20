import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnedPageRoutingModule } from './returned-routing.module';

import { ReturnedPage } from './returned.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnedPageRoutingModule
  ],
  declarations: [ReturnedPage]
})
export class ReturnedPageModule {}
