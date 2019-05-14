import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompHttpService } from '../comp-http.service';
import { HttpService } from '../../services/http.service';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'findStudents',
  templateUrl: './find-students.component.html',
  styleUrls: ['./find-students.component.scss']
})
export class FindStudentsComponent implements OnInit {

  grades;
  form: FormGroup;

  constructor(private studServ: StudentsService,
              private fB: FormBuilder,
              private compHttp: CompHttpService) { }

  ngOnInit() {
    this.grades = this.studServ.grades;
    this.initForm();
  }

  private initForm() {
    this.form = this.fB.group({
      firstName: [''],
      lastName: '',
      grade_id: '',
      birthDate: ''
    });
  }

  submit() {
    const formData = this.form.getRawValue();
    const date = this.form.value['birthDate'];
    let dateFormated;

    if(date) {
      dateFormated = moment(date).format('YYYY-MM-DD');
      formData.birthDate = dateFormated;
    }

    this.compHttp.postRequest('http://127.0.0.1:8000/students/search', formData);
  }
}
