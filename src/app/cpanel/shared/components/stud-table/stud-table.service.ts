import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { userStudData } from '../../interfaces/app-interface';

@Injectable({
  providedIn: 'root'
})
export class StudTableService {

  constructor() { }

  student: userStudData;
  emittStud = new Subject;

  onUpdate(student: userStudData) {
    this.student = student;
    // this.emittStud.next(student);
  }

}
