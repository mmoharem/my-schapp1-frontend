import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import 'rxjs/add/operator/map'
import { studentData } from 'src/app/cpanel/shared/interfaces/app-interface';

@Component({
  selector: 'stud-tables',
  templateUrl: './stud-tables.component.html',
  styleUrls: ['./stud-tables.component.scss']
})
export class StudTablesComponent implements OnInit {

  // data: PeriodicElement[] = [];
  private displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'phoneNumber', 'mobilePhone', 'class', 'address', 'image'];
  private dataSource: studentData[];

  constructor(private httpServ: HttpService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.httpServ.getRequest('students')
    .subscribe(
      (results: studentData[]) => {
        this.dataSource = results['data']
        // console.log(results['data'][2].user['images'][0].filename)
      },
      error => console.log(error)
    // this.data =
    // {
    //   id: data['id'],
    //   first_name: data['first_name'],
    //   last_name: data['last_name'],
    //   email: data['email']
    // }
    );
  }

}
