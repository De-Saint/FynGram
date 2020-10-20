import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnedPage } from './returned.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnedPageRoutingModule {}
