import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'authenticate',
    loadChildren: () => import('./authenticate/authenticate.module').then( m => m.AuthenticatePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'customeraccounts',
    loadChildren: () => import('./customeraccounts/customeraccounts.module').then( m => m.CustomeraccountsPageModule)
  },
  {
    path: 'customerprofile',
    loadChildren: () => import('./customerprofile/customerprofile.module').then( m => m.CustomerprofilePageModule)
  },
  {
    path: 'customerorders',
    loadChildren: () => import('./customerorders/customerorders.module').then( m => m.CustomerordersPageModule)
  },
  {
    path: 'admindashboard',
    loadChildren: () => import('./admindashboard/admindashboard.module').then( m => m.AdmindashboardPageModule)
  },
  {
    path: 'admininventory',
    loadChildren: () => import('./admininventory/admininventory.module').then( m => m.AdmininventoryPageModule)
  },
  {
    path: 'adminusers',
    loadChildren: () => import('./adminusers/adminusers.module').then( m => m.AdminusersPageModule)
  },
  {
    path: 'adminaccounts',
    loadChildren: () => import('./adminaccounts/adminaccounts.module').then( m => m.AdminaccountsPageModule)
  },
  {
    path: 'adminprofile',
    loadChildren: () => import('./adminprofile/adminprofile.module').then( m => m.AdminprofilePageModule)
  },
  {
    path: 'sellersaccounts',
    loadChildren: () => import('./sellersaccounts/sellersaccounts.module').then( m => m.SellersaccountsPageModule)
  },
  {
    path: 'sellersprofile',
    loadChildren: () => import('./sellersprofile/sellersprofile.module').then( m => m.SellersprofilePageModule)
  },
  {
    path: 'sellersdashboard',
    loadChildren: () => import('./sellersdashboard/sellersdashboard.module').then( m => m.SellersdashboardPageModule)
  },
  {
    path: 'sellersinventory',
    loadChildren: () => import('./sellersinventory/sellersinventory.module').then( m => m.SellersinventoryPageModule)
  },
  {
    path: 'sellerswallet',
    loadChildren: () => import('./sellerswallet/sellerswallet.module').then( m => m.SellerswalletPageModule)
  },
  {
    path: 'adminwallet',
    loadChildren: () => import('./adminwallet/adminwallet.module').then( m => m.AdminwalletPageModule)
  },
  {
    path: 'admincategory',
    loadChildren: () => import('./admincategory/admincategory.module').then( m => m.AdmincategoryPageModule)
  },
  {
    path: 'customerwallet',
    loadChildren: () => import('./customerwallet/customerwallet.module').then( m => m.CustomerwalletPageModule)
  },
  {
    path: 'customerdashboard',
    loadChildren: () => import('./customerdashboard/customerdashboard.module').then( m => m.CustomerdashboardPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
