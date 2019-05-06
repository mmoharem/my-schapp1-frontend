import { Component, OnInit, Input } from '@angular/core';
import { PaginationService, dataObj } from './pagination.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input('perPage') perPage = 4;
  perPageCheck;
  @Input() data;
  // private dataSource;

  constructor(private paginServ: PaginationService) { }

  ngOnInit() {
    this.perPageCheck = this.perPage;
  }

  // ngOnChanges() {
  //   console.log('changes');
  // }

  ngDoCheck() {
    if(this.perPage === this.perPageCheck) {
      return;
    }

    this.perPageCheck = this.perPage;
    this.paginate('perPage');
    // console.log('docheck');
    // console.log(this.perPage);
  }

  paginate(state) {

    this.paginServ.paginate(state, this.data, this.perPage);
  }

}
