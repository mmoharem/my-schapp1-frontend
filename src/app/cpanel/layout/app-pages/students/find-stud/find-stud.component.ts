import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';
import * as moment from 'moment/moment';
import { CompHttpService } from 'src/app/cpanel/shared/components/comp-http.service';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';

@Component({
  selector: 'app-find-stud',
  templateUrl: './find-stud.component.html',
  styleUrls: ['./find-stud.component.scss']
})
export class FindStudComponent implements OnInit {


  grades;
  form: FormGroup;
  data: Response;
  dataS: userStudData[];
  searchData;

  tableColumns: string[] = [
    'id', 'name', 'address', 'gender', 'birthDate', 'grade', 'fees', 'payment', 'image', 'show', 'edite', 'delete'
  ];


  constructor(private fB: FormBuilder,
              private compHttp: CompHttpService,
              private httpServ: HttpService) { }

  ngOnInit() {
    this.initForm();
    this.httpServ.emitGrade.subscribe(grades => this.grades = grades);
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
    const stdData = this.form.getRawValue();
    const date = this.form.value['birthDate'];
    let dateFormated;

    if(date) {
    dateFormated = moment(date).format('YYYY-MM-DD');
    stdData.birthDate = dateFormated;
    this.searchData = stdData;
    }

    this.compHttp.postRequest('http://127.0.0.1:8000/students/search', stdData);
  }

  // showStud(student: userStudData) {
  //   this.studServ.showStudent(student);
  // }
}
