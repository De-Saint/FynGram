import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminwalletPage } from './adminwallet.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AdminwalletPage,
    children: [
      {
        path: 'fynpay',
        children: [
          {
            path: '',
            loadChildren: () => import('./fynpay/fynpay.module').then(m => m.FynpayPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./fynpay/new/new.module').then(m => m.NewPageModule)
          }
        ]
      },
      {
        path: 'cashouts',
        children: [
          {
            path: '',
            loadChildren: () => import('./cashouts/cashouts.module').then(m => m.CashoutsPageModule)}
        ]
      },
      {
        path: 'discounts',
        children: [
          {
            path: '',
            loadChildren: () => import('./discounts/discounts.module').then(m => m.DiscountsPageModule)}
        ]
      },
      {
        path: '',
        redirectTo: '/adminwallet/tabs/fynpay',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/adminwallet/tabs/fynpay',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminwalletPageRoutingModule { }
