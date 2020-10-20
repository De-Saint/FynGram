import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerdashboardPageRoutingModule } from './customerdashboard-routing.module';

import { CustomerdashboardPage } from './customerdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerdashboardPageRoutingModule
  ],
  declarations: [CustomerdashboardPage]
})
export class CustomerdashboardPageModule {}
