import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminprofilePage } from './adminprofile.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AdminprofilePage,
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
        redirectTo: '/adminprofile/tabs/profile',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/adminprofile/tabs/profile',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminprofilePageRoutingModule { }
