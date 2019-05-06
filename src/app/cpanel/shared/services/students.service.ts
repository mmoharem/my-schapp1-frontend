import { Injectable } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppError, NotFoundError, BadInput } from '../classes/app-error';
// import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { userStudData } from '../interfaces/app-interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  emitStudent = new Subject();

  showStudent(student: userStudData) {
    this.emitStudent.next(student);
  }

  getStudents() {
    return this.http.get(`${this.baseUrl}/students`)
      // .catch((error: Response) => {
      //   if(error.status === 404) {return Observable.throw(new NotFoundError())}
      //   return Observable.throw(new AppError(error));
      // });
  }

  turnPage(url) {
    return this.http.get(url);
  }

  findStudent(data) {
    return this.http.post(`${this.baseUrl}/students/search`, data);
  }

  createStudent(data) {
    return this.http.post(`${this.baseUrl}/students`, data);
    //   .catch((error: Response) => {

    //     if(error.status === 400) {
    //       return Observable.throw(new BadInput(error))
    //     } else if(error.status === 404) {
    //       return Observable.throw(new NotFoundError(error))
    //     }

    //     return Observable.throw(new AppError(error));
    //   })
    // ;
  }

  updateStudent() {

  }

  deleteStudent() {

  }
}
