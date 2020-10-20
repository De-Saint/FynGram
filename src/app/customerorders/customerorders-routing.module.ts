import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerordersPage } from './customerorders.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: CustomerordersPage,
    children: [
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: () => import('./orders/orders.module').then(m => m.OrdersPageModule)
          }
        ]
      },
      {
        path: 'wishlist',
        children: [
          {
            path: '',
            loadChildren: () => import('./wishlist/wishlist.module').then(m => m.WishlistPageModule)
          }
        ]
      },
      {
        path: 'returned',
        children: [
          {
            path: '',
            loadChildren: () => import('./returned/returned.module').then(m => m.ReturnedPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/customerorders/tabs/orders',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/customerorders/tabs/orders',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerordersPageRoutingModule { }
