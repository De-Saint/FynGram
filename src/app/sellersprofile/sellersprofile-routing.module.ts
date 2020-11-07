import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellersprofilePage } from './sellersprofile.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SellersprofilePage,
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
        path: '',
        redirectTo: '/sellersprofile/tabs/profile',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/sellersprofile/tabs/profile',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellersprofilePageRoutingModule { }
