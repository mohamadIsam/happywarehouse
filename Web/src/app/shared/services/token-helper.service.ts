import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenHelperService {
  private token: any;

  constructor(private jwtHelperService: JwtHelperService) {
    this.decodeJwt();
  }

  public decodeJwt() {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      this.token = this.jwtHelperService.decodeToken(jwt);
    }
  }

  get userId() {
    return this.token ? this.token.sid : '';
  }

  get name() {
    return this.token ? this.token.name : '';
  }

  get email() {
    return this.token ? this.token.email : '';
  }

  get tokenType() {
    return this.token.TokenType;
  }

  get isAdmin() {
    return this.token.role == "Admin"
  }

  get isExpired(): boolean {
    const token = localStorage.getItem('token');
    const expirationBufferSeconds = 60;  // 1-minute grace period

    if (token) {
      const dateNow = new Date()

      const tokenExpirationDate = this.jwtHelperService.getTokenExpirationDate(token);
      const currentTimeWithBuffer = new Date(dateNow.getTime() + expirationBufferSeconds * 1000);

      if (tokenExpirationDate && tokenExpirationDate > currentTimeWithBuffer) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }
}
