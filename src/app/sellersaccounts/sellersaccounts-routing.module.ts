import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellersaccountsPage } from './sellersaccounts.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SellersaccountsPage,
    children: [
      
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
        path: 'subscriptions',
        children: [
          {
            path: '',
            loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/sellersaccounts/tabs/subscriptions',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/sellersaccounts/tabs/subscriptions',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellersaccountsPageRoutingModule { }
