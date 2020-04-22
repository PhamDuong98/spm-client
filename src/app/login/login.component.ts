import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastComponent } from '../shared/toast/toast.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService, LoginContext } from '../core/service/authentication.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading = false;
  subscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Đăng nhập vào hệ thống');
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [true]
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  login() {
    const loginContext: LoginContext = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
      remember: this.loginForm.get('rememberMe').value
    };

    if (!this.isLoading) {
      this.isLoading = true;
      this.subscription = this.authenticationService
        .login(loginContext)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe(
          () => {
            this.route.queryParams.subscribe(params =>
              this.router.navigate([params.redirect || '/'], { replaceUrl: true })
            );
          },
          () => {
            this.snackBar.openFromComponent(ToastComponent, {
              duration: 3000,
              verticalPosition: 'top',
              data: { message: 'Đăng nhập không thành công' }
            });
          }
        );
    }
  }

}
