import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import 'rxjs/add/operator/map'
import { studentData } from 'src/app/cpanel/shared/interfaces/app-interface';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';
import { AppError } from 'src/app/cpanel/shared/classes/app-error';

@Component({
  selector: 'stud-tables',
  templateUrl: './stud-tables.component.html',
  styleUrls: ['./stud-tables.component.scss']
})
export class StudTablesComponent implements OnInit {

  // data: PeriodicElement[] = [];
  private displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'phoneNumber', 'mobilePhone', 'class', 'address', 'image'];
  private dataSource: studentData[];

  constructor(private httpServ: HttpService,
              private studServ: StudentsService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    // this.httpServ.getRequest('students')
    this.studServ.getStudents()
    .subscribe(
      (results: studentData[]) => {
        this.dataSource = results['data']
        // console.log(results['data'][2].user['images'][0].filename)Internal Server Error
      },
      (error: AppError) => {
        console.log(error);
        // if(error instanceof internal)
      }
    );
  }

}
