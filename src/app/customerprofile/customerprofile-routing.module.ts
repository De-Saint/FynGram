import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerprofilePage } from './customerprofile.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: CustomerprofilePage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'address',
        children: [
          {
            path: '',
            loadChildren: () => import('./address/address.module').then(m => m.AddressPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./address/new/new.module').then(m => m.NewPageModule)
          }
        ]
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () => import('./messages/messages.module').then(m => m.MessagesPageModule)
          }
        ]
      },
      {
        path: 'reviews',
        children: [
          {
            path: '',
            loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/customerprofile/tabs/profile',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/customerprofile/tabs/profile',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerprofilePageRoutingModule { }
