import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { userStudData } from '../../interfaces/app-interface';
import { CompHttpService, compResObj } from '../comp-http.service';
import { Router } from '@angular/router';
import { StudTableService } from './stud-table.service';
import { select } from "@angular-redux/store";

// export interface tableCol {
//   id: 'id', name: 'name', gender: 'gender', birthDate: 'birthDate', grade: 'grade',
//     address: 'address', fees: 'fees', payment: 'payment', image: 'image', show: 'show', edite: 'edite', delete: 'delete'
// }

@Component({
  selector: 'studTable',
  templateUrl: './stud-table.component.html',
  styleUrls: ['./stud-table.component.scss']
})
export class StudTableComponent implements OnInit, OnChanges {

  @Input() tableObjInp: {type: string,tableColumns:string[]};
  @Input() typeInp: string = null;

  dataType: string;
  tableColInput: string[] = [];
  // @select(t => t.usersStore.usersData.tableColumns) tableColInput: string[] = [];
  @select(t => t.student) getStore;
  // @select(t => `${t}.${this.typeInp}`) getStore2;
  // @select(t => t.usersStore.users) dataSInput = [];
  dataSInput = [];
  data: Response;
  // dataS: userStudData[];

  // tableColumns: string[] = [
  //   'id', 'name', 'gender', 'birthDate', 'grade', 'phoneNumber', 'mobilePhone', 'address', 'fees', 'payment', 'image', 'show', 'edite', 'delete'
  // ];


  constructor(private compHttp: CompHttpService,
              private stdTableSer: StudTableService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.typeInp)
    this.compHttp.emittReq.subscribe(this);
    this.getStore.subscribe(t => {
      this.dataSInput = t.student;
      this.dataType = t.usersData.type;
      this.tableColInput = t.usersData.tableColumns;
    });
    this.getStore2.subscribe(t => {

      console.log(t)
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.dataType = this.tableObjInp.type;
    // this.tableColInput = this.tableObjInp.tableColumns;
  }



  next = (resObject: compResObj) => {
    if(resObject.searchRes) {
      this.handelResults(resObject.searchRes);
    }
    // else if(resObject.postErr) {
    //   this.handelError(resObject.postErr);
    // }
    else if(resObject.getRes) {
      this.handelResults(resObject.getRes);
    }
  }


  handelResults(results: Response) {
    this.dataSInput = results['data']['data'];
    this.data = results['data'];
  }

  handelError(error) {
    console.log(error);
  }

  update(student: userStudData) {
    if(this.tableObjInp.type === 'student') {
      this.router.navigate(['/students/testupdate', 'id']);
      this.stdTableSer.onUpdate(student);
    } else

    if(this.tableObjInp.type === 'employee') {
      this.router.navigate(['/students/update', 'id']);
      this.stdTableSer.onUpdate(student);
    } else

    if(this.tableObjInp.type === 'teacher') {
      this.router.navigate(['/students/update', 'id']);
      this.stdTableSer.onUpdate(student);
    };

  }

  studAttend(user: userStudData) {
    if(this.tableObjInp.type === 'student') {
      this.router.navigate(['/students/studattendance', user.student.id]);
      this.stdTableSer.onUpdate(user);
    };
  }

}
