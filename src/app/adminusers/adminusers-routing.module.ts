import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminusersPage } from './adminusers.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AdminusersPage,
    children: [
      {
        path: 'sellers',
        children: [
          {
            path: '',
            loadChildren: () => import('./sellers/sellers.module').then(m => m.SellersPageModule)
          },
          {
            path: 'details/:sellerId',
            loadChildren: () => import('./sellers/details/details.module').then(m => m.DetailsPageModule)
          },
        ]
      },
      {
        path: 'customers',
        children: [
          {
            path: '',
            loadChildren: () => import('./customers/customers.module').then(m => m.CustomersPageModule)
          },
          {
            path: 'details/:customerId',
            loadChildren: () => import('./customers/details/details.module').then(m => m.DetailsPageModule)
          },
        ]
      },
      {
        path: 'shippings',
        children: [
          {
            path: '',
            loadChildren: () => import('./shipping/shipping.module').then(m => m.ShippingPageModule)
          },
          {
            path: 'details/:shippingId',
            loadChildren: () => import('./shipping/details/details.module').then(m => m.DetailsPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./shipping/new/new.module').then(m => m.NewPageModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '/adminusers/tabs/sellers',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/adminusers/tabs/sellers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminusersPageRoutingModule { }
