import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import { ImgUploadService } from 'src/app/cpanel/shared/services/img-upload.service';
declare var Dynamsoft: any;
declare var WebTwain: any;

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

  private imgObj;
  private form: FormGroup;
  DWObject: WebTwain;

  constructor(private fB: FormBuilder,
              private httpServ: HttpService,
              private imgUpldServ: ImgUploadService) { }

  ngOnInit() {
    this.initForm();
    this.imgUpldServ.emitImgObj.subscribe(imgObj => this.imgObj = imgObj);

    Dynamsoft.WebTwainEnv.Load();
    Dynamsoft.WebTwainEnv.RegisterEvent("OnWebTwainReady", () => { this.Dynamsoft_OnReady() });
  }

  Dynamsoft_OnReady(): void {
    this.DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
  }

  private initForm() {
    this.form = this.fB.group({
      firstName: ['', ],
      lastName: ['', ],
      image_id: [''],
      address: ['', ],
      gender: ['', ],
      // birthDate: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // phoneNumber: ['', Validators.required],
      // mobilePhone: ['', Validators.required],
      // medicalState: [''],
      // notes: [''],
      // grade: ['', Validators.required],
      // class: ['', Validators.required],
      // password: ['', Validators.required],
      // passwordConfirmation: ['', Validators.required]
    });
  }

  private submit() {
    const data = this.form.getRawValue();

    if(this.imgObj) {
      data.image_id = this.imgObj.id;
    }

    console.log(data);

    this.httpServ.postRequest(`students/8`, data)
      .subscribe(
        results => console.log(results),
        error => console.log(error)
      )
    ;


  }

  acquireImage(): void {
    if (this.DWObject.SelectSource()) {
      const onAcquireImageSuccess = () => { this.DWObject.CloseSource(); };
      const onAcquireImageFailure = onAcquireImageSuccess;
      this.DWObject.OpenSource();
      this.DWObject.AcquireImage({}, onAcquireImageSuccess, onAcquireImageFailure);
    }
  //   const dwObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
  //   const bSelected = dwObject.SelectSource();
  //   if (bSelected) {
  //     const onAcquireImageSuccess = () => { dwObject.CloseSource(); };
  //     const onAcquireImageFailure = onAcquireImageSuccess;
  //     dwObject.OpenSource();
  //     dwObject.AcquireImage({}, onAcquireImageSuccess, onAcquireImageFailure);
  // }
}

  private uploadImg(e) {
    // const image = e.target.files[0];

    // this.imgUpldServ.uploadImg(e.target.files[0]);
  }

}
