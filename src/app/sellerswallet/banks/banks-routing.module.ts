import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanksPage } from './banks.page';

const routes: Routes = [
  {
    path: '',
    component: BanksPage
  },
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then( m => m.NewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanksPageRoutingModule {}
