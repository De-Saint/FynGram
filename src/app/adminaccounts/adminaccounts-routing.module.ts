import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminaccountsPage } from './adminaccounts.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AdminaccountsPage,
    children: [
      {
        path: 'subscriptions',
        children: [
          {
            path: '',
            loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsPageModule)
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
        redirectTo: '/adminaccounts/tabs/discounts',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/adminaccounts/tabs/discounts',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminaccountsPageRoutingModule { }
