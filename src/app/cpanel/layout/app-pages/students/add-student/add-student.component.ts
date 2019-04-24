import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import { TokenService } from 'src/app/cpanel/shared/services/token.service';
import { Router } from '@angular/router';
import * as moment from 'moment/moment';
import { ImgUploadService } from 'src/app/cpanel/shared/services/img-upload.service';

@Component({
  selector: 'students-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  grades = [];
  private imgObj;
  form: FormGroup;
  error = [];

  constructor(private formBuild: FormBuilder,
              private httpServ: HttpService,
              private tokenServ: TokenService,
              private imgUpldServ: ImgUploadService,
              private router: Router) { }

  ngOnInit() {
    this.httpServ.getGrades();
    this.httpServ.emitGrade.subscribe((grades: any) => this.grades = grades)
    this.imgUpldServ.emitImgObj.subscribe(imgObj => this.imgObj = imgObj)
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuild.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      image: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      medicalState: [''],
      notes: [''],
      grade: ['', Validators.required],
      class: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  private submit() {
    const data = this.form.getRawValue();
    const date = this.form.value['birthDate'];

    const dateFormat = moment(date).format('YYYY-MM-DD');
    data.birthDate = dateFormat;
  }

  private uploadImg(e) {
    const image = e.target.files[0];

    this.imgUpldServ.uploadImg(e.target.files[0]);
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  handleResponse(result) {
    console.log(result);
    this.tokenServ.setTokrn(result.access_token);
    this.router.navigate(['/secure']);
    this.httpServ.isLoggedIn();
  }

}
