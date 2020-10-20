import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerwalletPage } from './customerwallet.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: CustomerwalletPage,
    children: [
      {
        path: 'fynpay',
        children: [
          {
            path: '',
            loadChildren: () => import('./fynpay/fynpay.module').then(m => m.FynpayPageModule)
          }
        ]
      },
      {
        path: 'cashouts',
        children: [
          {
            path: '',
            loadChildren: () => import('./cashouts/cashouts.module').then(m => m.CashoutsPageModule)
          }
        ]
      },
      {
        path: 'banks',
        children: [
          {
            path: '',
            loadChildren: () => import('./banks/banks.module').then(m => m.BanksPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/customerwallet/tabs/fynpay',
        pathMatch: 'full'
      },

    ]
  },
  {
    path: '',
    redirectTo: '/customerwallet/tabs/fynpay',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerwalletPageRoutingModule { }
