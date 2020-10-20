import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FynpayPage } from './fynpay.page';

const routes: Routes = [
  {
    path: '',
    component: FynpayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FynpayPageRoutingModule {}
