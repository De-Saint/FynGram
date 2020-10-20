import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmincategoryPageRoutingModule } from './admincategory-routing.module';

import { AdmincategoryPage } from './admincategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmincategoryPageRoutingModule
  ],
  declarations: [AdmincategoryPage]
})
export class AdmincategoryPageModule {}
