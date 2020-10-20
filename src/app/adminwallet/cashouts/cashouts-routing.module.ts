import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashoutsPage } from './cashouts.page';

const routes: Routes = [
  {
    path: '',
    component: CashoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashoutsPageRoutingModule {}
