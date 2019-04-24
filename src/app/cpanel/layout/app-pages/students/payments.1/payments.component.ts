import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import * as moment from 'moment/moment';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';

export interface dataElement {

  id: number,
  user: {
    firstName: string,
    lastName: string,
    birthDate: string,
    address: string
  },


  grade: {
    name: string,
    level: string,

    fees: {
      old_schFees: number,
      schFees: number,
      old_booksFees: number,
      booksFees: number,
    }
  }

}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  private form: FormGroup;
  private grades;
  private tableColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'grade', 'address', 'btn'];
  private dataS: dataElement[];

  constructor(private fB: FormBuilder,
              private httpServ: HttpService,
              private http: HttpClient,
              private studServ: StudentsService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fB.group({
      firstName: ['', Validators.required],
      lastName: '',
      grade: '',
      birthDate: ''
    });
  }

  private submit() {
    const data = this.form.getRawValue();
    const date = this.form.value['birthDate'];
    let dateFormated;

    if(date) {
      dateFormated = moment(date).format('YYYY-MM-DD');
      data.birthDate = dateFormated;
    }

    // this.httpServ.postRequest('search', data)
    this.http.post('http://127.0.0.1:8000/search', data)
      .subscribe(
        results => this.dataS = results['data'],
        // results => {
        //   let data: any = results['data'];
        //   data.forEach(dat => {
        //     console.log(dat.grade);
        //   })
          // console.log(data)
        // },
        error => console.log(error)
      )
    ;
  }

  showStud(student) {
    this.studServ.showStudent(student);
  }

}
