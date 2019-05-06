import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { studentData, userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-find-stud',
  templateUrl: './find-stud.component.html',
  styleUrls: ['./find-stud.component.scss']
})
export class FindStudComponent implements OnInit {

  private form: FormGroup;
  private grades;
  private tableColumns: string[] = [
    'id', 'name', 'address', 'gender', 'birthDate', 'grade', 'fees', 'payment', 'image', 'show', 'edite', 'delete'
  ];
  private dataS: userStudData[];

  constructor(private fB: FormBuilder,
              private studServ: StudentsService) { }

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

  private submit() {
    const data = this.form.getRawValue();
    const date = this.form.value['birthDate'];
    let dateFormated;

    if(date) {
    dateFormated = moment(date).format('YYYY-MM-DD');
    data.birthDate = dateFormated;
    }

    this.studServ.findStudent(data)
      .subscribe(
        (results: Response) => this.dataS = results['data']['data'],
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

  showStud(student: userStudData) {
    this.studServ.showStudent(student);
  }
}
