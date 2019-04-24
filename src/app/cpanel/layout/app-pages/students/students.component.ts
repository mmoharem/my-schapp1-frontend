import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import { TokenService } from 'src/app/cpanel/shared/services/token.service';
import { Router } from '@angular/router';
// import { moment } from "moment/moment";
import * as moment from 'moment/moment';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  grades = [];

  form: FormGroup;
  error = [];
  minDate = new Date();
  // option;
  // gender: string;

  constructor() { }

  ngOnInit() {
  }
}
