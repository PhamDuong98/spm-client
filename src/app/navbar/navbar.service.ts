import { Routes, Route } from '@angular/router';
import { AuthenticationGuard } from '../core/guard/authentication.guard';
import { NavbarComponent } from './navbar.component';

/**
 * Provides helper methods to create routes.
 */
export class NavbarService {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: NavbarComponent,
      children: routes,
      // canActivateChild: [AuthenticationGuard],
    };
  }
}
