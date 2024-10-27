import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangePassword } from '../model/change-password';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  login(login: Login) {
    return this.httpClient.post('api/Auth/login', login, {
      responseType: 'text',
    });
  }


  changePassword(changePassword: ChangePassword) {
    return this.httpClient.post('api/Auth/changePassword', changePassword, {
      responseType: 'text',
    });
  }
}
