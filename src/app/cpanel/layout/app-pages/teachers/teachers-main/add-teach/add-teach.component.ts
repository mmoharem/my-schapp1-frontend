import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';
import { TokenService } from 'src/app/cpanel/shared/services/token.service';
import { ImgUploadService } from 'src/app/cpanel/shared/services/img-upload.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-teach',
  templateUrl: './add-teach.component.html',
  styleUrls: ['./add-teach.component.scss']
})
export class AddTeachComponent implements OnInit {
  imgObj;
  form: FormGroup;
  error = [];

  constructor(private formBuild: FormBuilder,
              private httpServ: HttpService,
              private studServ: StudentsService,
              private tokenServ: TokenService,
              private imgUpldServ: ImgUploadService,
              private router: Router,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.imgUpldServ.emitImgObj.subscribe(imgObj => this.imgObj = imgObj);
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuild.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      image: [''],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      medicalState: [''],
      notes: [''],
      grade_id: [''],
      class: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    });
  }

  // private uploadImg(e) {
  uploadImg(e) {
    const image = e.target.files[0];

    this.imgUpldServ.uploadImg(e.target.files[0]);
  }

  // private submit() {
  submit() {
    const data = this.form.getRawValue();
    const date = this.form.value['birthDate'];

    const dateFormat = moment(date).format('YYYY-MM-DD');
    data.birthDate = dateFormat;

    if (this.imgObj) {
      data.image_id = this.imgObj.id;

    } else {
      this.toastr.error('Error: User Image Require')
    }

    console.log(data);

    this.studServ.createStudent(data)
      .subscribe(
        (results: Response) => console.log(results),
        (error: any) => {
          this.toastr.error(error.error.message)
          console.log(error);
        }
      );
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
