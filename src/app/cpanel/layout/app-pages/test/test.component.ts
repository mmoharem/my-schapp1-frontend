import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';

export interface dataElem {

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

export interface del {
  id: number,
  firstName: string
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  // displayColumn: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'address'];

  dd: del[] = [
    {id: 1,
    firstName: 'name'}
  ]
  displayedC: string[] = ['id', 'firstName'];
   dataS: dataElem;

  form: FormGroup;

  // @ViewChild('picker') picker: MatDatepicker<Date>;

  constructor(private fb: FormBuilder,
              private httpServ: HttpService) { }



  ngOnInit() {
    this.findeStud();

  }

  findeStud() {
    let data;

    this.httpServ.postRequest('search', data)
      .subscribe(
        results => {
          console.log(results);
          this.dataS = results['data'];
        },
        error => console.log(error)
      )
    ;
  }
}
