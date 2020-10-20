import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmininventoryPageRoutingModule } from './admininventory-routing.module';

import { AdmininventoryPage } from './admininventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmininventoryPageRoutingModule
  ],
  declarations: [AdmininventoryPage]
})
export class AdmininventoryPageModule {}
