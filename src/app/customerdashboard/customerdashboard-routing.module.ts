import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerdashboardPage } from './customerdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerdashboardPageRoutingModule {}
