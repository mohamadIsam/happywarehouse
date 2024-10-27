import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../shared/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { emailValidator } from '../shared/validations/validations';
import { TokenHelperService } from '../shared/services/token-helper.service';
import { Login } from '../shared/model/login';
import { ShowHidePasswordDirective } from '../shared/components/directive/show-password.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ShowHidePasswordDirective
  ],
  providers: [
    AuthService,
    TokenHelperService
  ],
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.css',
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, emailValidator()]),
    password: new FormControl(null, [Validators.required]),
  });
  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenHelperService: TokenHelperService,
  ) { }

  ngOnInit(): void {
    this.checkIsLoggedIn();
  }

  checkIsLoggedIn() {
    if (!this.tokenHelperService.isExpired)
      this.router.navigateByUrl('dashboard');
  }

  get controls() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      const loginObj = Object.assign(this.loginForm.value) as Login;
      this.authService.login(loginObj).subscribe({
        next: (res) => {
          localStorage.setItem('token', res);
          this.tokenHelperService.decodeJwt();
          this.router.navigateByUrl('dashboard');
        },
        error: (res) => {
          this.error = JSON.parse(res.error);
        },
      });
    }
  }
}
