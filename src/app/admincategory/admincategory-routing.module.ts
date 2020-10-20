import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmincategoryPage } from './admincategory.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AdmincategoryPage,
    children:[
      {
        path:'categories',
        children:[
          {
            path:'',
            loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
          }
        ]
      },
      {
        path:'properties',
        children:[
          {
            path:'',
            loadChildren: () => import('./properties/properties.module').then( m => m.PropertiesPageModule)
          }
        ]
      },
      {
        path:'units',
        children:[
          {
            path:'',
            loadChildren: () => import('./units/units.module').then( m => m.UnitsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/admincategory/tabs/categories',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/admincategory/tabs/categories',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmincategoryPageRoutingModule {}
