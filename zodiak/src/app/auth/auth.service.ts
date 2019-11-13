import { Injectable } from '@angular/core';
import { LayoutService } from '../shared/services/layout.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { catchError } from 'rxjs/internal/operators/catchError';
// import { retry } from 'rxjs/internal/operators/retry';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private NameLog: string;

  private isUserLoggedIn = false;
  constructor(
    private layoutService: LayoutService,
    private http: HttpClient,
  ) {}
  url = 'http://localhost:8000/api/';
  // const prefixRoute = (this.detectBrowser() === 'chrome') ? '../' : '' ;
  login(credential) {
    return  this.http.post(this.url + 'login', credential);
  }
  read() {
    return this.http.get(this.url + 'admin');
  }
  logOut() {
    this.isUserLoggedIn = false;
    return this.http.post(this.url + 'logout', null);
  }
  create(person) {
    return  this.http.post(this.url + 'signup', person);
  }
  getFlagLoged() {
    return this.isUserLoggedIn;
  }
  userLoged() {
    return this.isUserLoggedIn;
  }
  getLogName() {
    return this.NameLog;
  }
}
