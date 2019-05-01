import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import 'rxjs/add/operator/map'
import { studentData } from 'src/app/cpanel/shared/interfaces/app-interface';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';
import { AppError } from 'src/app/cpanel/shared/classes/app-error';
import { PaginationService, dataObj } from 'src/app/cpanel/shared/components/pagination/pagination.service';

@Component({
  selector: 'stud-tables',
  templateUrl: './stud-tables.component.html',
  styleUrls: ['./stud-tables.component.scss']
})
export class StudTablesComponent implements OnInit {

  @Input('perPage') perPage = 2;
  private data;
  private displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'phoneNumber', 'mobilePhone', 'class', 'address', 'image'];
  private dataSource: studentData[];

  constructor(private httpServ: HttpService,
              private studServ: StudentsService,
              private paginSer: PaginationService) {

  }

  ngOnInit() {
    this.getStudents();
    this.paginSer.responseEmit.subscribe(this);
  }

  next = (obj: dataObj) => {
    if(obj.results) {
      this.handelResults(obj.results);

    } else if(obj.error) {
      this.handelError(obj.error);
    }
  }

  getStudents() {
    this.studServ.getStudents()
    .subscribe(
      (results: Response) => this.handelResults(results),
      (error: Response) => this.handelError(error)
    );
  }

  handelResults(results: Response) {
    this.dataSource = results['data']['data'];
    this.data = results['data'];
  }

  handelError(error: Response) {
    console.log(error);
  }

}
