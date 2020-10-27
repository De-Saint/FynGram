import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticatePageRoutingModule } from './authenticate-routing.module';

import { AuthenticatePage } from './authenticate.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AuthenticatePageRoutingModule
  ],
  declarations: [AuthenticatePage]
})
export class AuthenticatePageModule {}
