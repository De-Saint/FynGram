import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmininventoryPage } from './admininventory.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AdmininventoryPage,
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule)
          }
        ]
      },
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
        path: 'stock',
        children: [
          {
            path: '',
            loadChildren: () => import('./stock/stock.module').then(m => m.StockPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/admininventory/tabs/products',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/admininventory/tabs/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmininventoryPageRoutingModule { }
