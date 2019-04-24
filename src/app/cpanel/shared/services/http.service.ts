import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  emitGrade = new Subject;

  baseUrl = 'http://localhost:8000';

  loggedIn: boolean;
  loggedInStateEmit = new Subject();
  emitError = new Subject();

  constructor(private http: HttpClient) {
    this.getGrades();
  }

  signIn(data) {
    return this.http.post(`${this.baseUrl}/oauth/token`, data);
  }

  adminRedirect(header) {
    return this.http.get(`${this.baseUrl}/user`, {headers: header});
  }

  signUp(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  getRequest(link) {
    return this.http.get(`${this.baseUrl}/${link}`);
  }

  postRequest(link, data) {
    return this.http.post(`${this.baseUrl}/${link}`, data);
  }

  getGrades() {
    this.getRequest('school/grade')
      .subscribe(
        (results: any) => this.emitGrade.next(results),
        error => this.handleError(error),
      )
    ;
  }

  handleError(error) {
    const errorConst = error.error.error;
    this.emitError.next(errorConst);
  }

  sendPassResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPassResetLink`, data);
  }

  isLoggedIn() {
    this.loggedIn = localStorage.getItem('token') !== null;
    this.loggedInStateEmit.next(this.loggedIn);
    console.log(this.loggedIn);
  }

}
