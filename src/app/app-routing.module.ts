import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'favorites', loadChildren: () => import('./pages/favs-page/favs-page.module').then(m => m.FavsPageModule)
  },
  {
    path: 'cart', loadChildren: () => import('./pages/cart-page/cart-page.module').then(m => m.CartPageModule)
  },
  {
    path: 'admin', loadChildren: () => import('./pages/admin-page/admin-page.module').then(m => m.AdminPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
