import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import { CompHttpService } from 'src/app/cpanel/shared/components/comp-http.service';

@Component({
  selector: 'stud-tables',
  templateUrl: './stud-tables.component.html',
  styleUrls: ['./stud-tables.component.scss']
})
export class StudTablesComponent implements OnInit {

  type: string = 'student';
  // tableColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'phoneNumber', 'mobilePhone', 'class', 'address', 'image'];
  tableColumns: string[] = ['id', 'name', 'birthDate', 'phoneNumber', 'mobilePhone', 'address', 'image'];

  constructor(private compHttp: CompHttpService) {

  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    let tableObj = {
      tableColumns: this.tableColumns,
      type: 'student'
    };
    this.compHttp.getRequest('http://127.0.0.1:8000/students', tableObj);
  }

  handelResults(results: Response) {
  }

  handelError(error: Response) {
    console.log(error);
  }

}
