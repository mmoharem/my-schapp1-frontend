import { Component, OnInit } from '@angular/core';


import * as moment from 'moment/moment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { userStudData } from '../../interfaces/app-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'findStudents',
  templateUrl: './find-students.component.html',
  styleUrls: ['./find-students.component.scss']
})
export class FindStudentsComponent implements OnInit {

  // private form: FormGroup;
  form: FormGroup;
  // private dataSource: userStudData;
  dataSource: userStudData;

  constructor(private http: HttpClient,
              private fB: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fB.group({
      firstName: [''],
      lastName: '',
      grade: '',
      birthDate: ''
    });
  }

  // private submit() {
  submit() {
    const data = this.form.getRawValue();
    const date = this.form.value['birthDate'];
    let dateFormated;

    if(date) {
      dateFormated = moment(date).format('YYYY-MM-DD');
      data.birthDate = dateFormated;
    }

    // this.httpServ.postRequest('search', data)
    this.http.post('http://127.0.0.1:8000/students/search', data)
      .subscribe(
        (results: Response) => this.dataSource = results['data']['data'],
        // results => {
        //   this.dataS = results['data']['data'];
        //   let data: any = results['data']['data'];
        //   data.forEach(dat => {
        //     console.log(dat.firstName);
        //   })
        //   console.log(data)
        // },
        (error: Response) => console.log(error)
      )
    ;
  }

}
