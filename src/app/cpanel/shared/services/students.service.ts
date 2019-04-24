import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  emitStudent = new Subject();

  showStudent(student) {
    this.emitStudent.next(student);
  }
}
