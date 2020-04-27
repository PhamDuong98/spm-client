import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/service/authentication.service';
import { CredentialsService } from '../core/service/credentials.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentFullName: string;

  constructor(
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) { }

  ngOnInit(): void {
    this.currentFullName = this.credentialsService.credentials.fullname;
  }

  logout() {
    this.authenticationService.logout();
    window.location.reload();
  }
}
