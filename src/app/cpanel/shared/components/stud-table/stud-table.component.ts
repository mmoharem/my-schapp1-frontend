import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { userStudData } from '../../interfaces/app-interface';
import { HttpClient } from '@angular/common/http';
import { CompHttpService, compResObj } from '../comp-http.service';

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

  @Input() tableColInput: string[] = [];

  dataSInput: userStudData[];
  data: Response;
  dataS: userStudData[];

  // tableColumns: string[] = [
  //   'id', 'name', 'gender', 'birthDate', 'grade', 'phoneNumber', 'mobilePhone', 'address', 'fees', 'payment', 'image', 'show', 'edite', 'delete'
  // ];


  constructor(private http: HttpClient,
              private compHttp: CompHttpService) { }

  ngOnInit() {
    this.compHttp.emittReq.subscribe(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }



  next = (resObject: compResObj) => {
    if(resObject.postRes) {
      this.handelResults(resObject.postRes);

    }
    // else if(resObject.postErr) {
    //   this.handelError(resObject.postErr);
    // }
  }


  handelResults(results: Response) {
    this.dataSInput = results['data']['data'];
    this.data = results['data'];
  }

  handelError(error) {
    console.log(error);
  }

}
