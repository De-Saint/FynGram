import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellersinventoryPage } from './sellersinventory.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SellersinventoryPage,
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule)
          },
          {
            path: 'details/:productId',
            loadChildren: () => import('./products/details/details.module').then(m => m.DetailsPageModule)
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: () => import('./orders/orders.module').then(m => m.OrdersPageModule)
          },
          {
            path: 'details/:orderId',
            loadChildren: () => import('./orders/details/details.module').then(m => m.DetailsPageModule)
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
        redirectTo: '/sellersinventory/tabs/products',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/sellersinventory/tabs/products',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellersinventoryPageRoutingModule { }
