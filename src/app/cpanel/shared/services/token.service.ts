import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  hasTokenEmmite = new Subject;

  constructor() { }

  setTokrn(token) {
    localStorage.setItem('token', token);
    this.hasTokenEmmite.next(localStorage.getItem('token') !== null);
  }

  get Token() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
    this.hasTokenEmmite.next(localStorage.getItem('token') !== null);
  }

  hasToken() {
    return localStorage.getItem('token') !== null;
  }
}
