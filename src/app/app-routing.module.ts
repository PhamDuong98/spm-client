import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarService } from './navbar/navbar.service';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  NavbarService.childRoutes([
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'list-product', loadChildren: () => import('./list-product/list-product.module').then(m => m.ListProductModule) },
  ]),

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
