import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomeraccountsPage } from './customeraccounts.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: CustomeraccountsPage,
    children: [
      {
        path: 'discounts',
        children: [
          {
            path: '',
            loadChildren: () => import('./discounts/discounts.module').then( m => m.DiscountsPageModule)
          }
        ]
      },
      {
        path: 'transactions',
        children: [
          {
            path: '',
            loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsPageModule)
          }
        ]
      },
      {
        path: 'payments',
        children: [
          {
            path: '',
            loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/customeraccounts/tabs/discounts',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/customeraccounts/tabs/discounts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomeraccountsPageRoutingModule { }
