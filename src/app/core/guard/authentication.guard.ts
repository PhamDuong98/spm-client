import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { CredentialsService } from '../service/credentials.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivateChild {

  constructor(
    private router: Router,
    private credentialsService: CredentialsService
  ) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.credentialsService.isAuthenticated()) {
      return true;
    }

    this.router.navigate([''], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }

}
