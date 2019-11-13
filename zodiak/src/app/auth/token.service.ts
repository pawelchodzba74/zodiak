import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }
  iss = {
    login: 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup',
    upDate: 'http://localhost:8000/rent/update/'

  };

  handle(token) {
    this.set(token);

  }
  set(token) {
  //  console.log(this.isValid());

    localStorage.setItem('token', token);
  }
  get() {
    return localStorage.getItem('token');
  }
  delete() {
    localStorage.removeItem('token');
  }
  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
  }
  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }
  decode(payload) {
    return JSON.parse(atob(payload));
  }
  // userId() {
  //   return this.payload(this.get()).sub;
  // }
  loggedIn() {
    // console.log(this.isValid());

    return this.isValid();
  }


}
