import { Injectable } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: NavbarComponent,
      children: routes
    };
  }
}