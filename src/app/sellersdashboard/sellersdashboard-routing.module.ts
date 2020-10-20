import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellersdashboardPage } from './sellersdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: SellersdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellersdashboardPageRoutingModule {}
