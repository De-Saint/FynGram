import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductdetailsPage } from './productdetails.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ProductdetailsPage,
    children: [
      {
        path: 'overview',
        children: [
          {
            path: '',
            loadChildren: () => import('./overview/overview.module').then(m => m.OverviewPageModule)
          }
        ]
      },
      {
        path: 'related',
        children: [
          {
            path: '',
            loadChildren: () => import('./related/related.module').then(m => m.RelatedPageModule)
          }
        ]
      },
      {
        path: 'review',
        children: [
          {
            path: '',
            loadChildren: () => import('./review/review.module').then(m => m.ReviewPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo:'/home/tabs/buy/productdetails/tabs/overview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'/home/tabs/buy/productdetails/tabs/overview',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductdetailsPageRoutingModule { }

