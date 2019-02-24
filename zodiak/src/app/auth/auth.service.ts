import { Injectable } from '@angular/core';
import { LayoutService } from '../shared/services/layout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private NameLog: string;
  private credential = {
    login: 'admin',
    password: 'admin'
  };
  private isUserLoggedIn = false;
  constructor(private layoutService: LayoutService) {}

  login(login, password) {
    return new Promise((resolve, reject) => {
      if (login === this.credential.login && password === this.credential.password) {
        this.isUserLoggedIn = true;
        this.layoutService.possibleAfterLogging();
        this.NameLog = this.credential.login;
        resolve();
      } else {
        reject();
      }
    });
  }
  logOut() {
    this.isUserLoggedIn = false;
    this.layoutService.impossibleWithoutLogging();
  }
  userLoged() {
    return this.isUserLoggedIn;
  }
  getLogName() {
    return this.NameLog;
  }
}
