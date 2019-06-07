import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { TokenService } from '../services/token.service';
import { NgRedux } from "@angular-redux/store";
import { IAppState } from '../store/store';
import { GET_STUDENTS } from '../../layout/app-pages/students/store/students.store';

export interface compResObj {
  getRes: Response,
  getErr: Response,

  postRes: Response,
  postErr: Response,

  searchRes: Response,
  searchErr: Response
}

@Injectable({
  providedIn: 'root'
})

export class CompHttpService {

  emittReq = new Subject;
  baseUrl = 'http://127.0.0.1:8000/';
  header: HttpHeaders;
  searchData;

  constructor(private http: HttpClient,
              private tokenServ: TokenService,
              private ngRedux: NgRedux<IAppState>)
  {
  }

  // Get Request
  getRequest(url, userData?) {
    // this.http.get(url, {headers: this.tokenServ.Header}).subscribe(
    //   (results: Response) => { this.emittReq.next(<compResObj>{getRes: results}); },
    //   (error: Response) => { this.emittReq.next(<compResObj>{getErr: error}); }
    // );
    this.http.get(url, {headers: this.tokenServ.Header}).subscribe(
      (results: Response) => {
        this.ngRedux.dispatch({type: GET_STUDENTS, students: results['data']['data']});
        this.emittReq.next(<compResObj>{getRes: results});
      },
      (error: Response) => { this.emittReq.next(<compResObj>{getErr: error}); }
    );
  }

  // Post Request
  postRequest(url, data) {
    this.http.post(`${this.baseUrl}${url}`, data, {headers: this.tokenServ.Header}).subscribe(
      (results: Response) => { this.emittReq.next(<compResObj>{postRes: results}); },
      (error: Response) => { this.emittReq.next(<compResObj>{postErr: error}); }
    );
  }

  // Search Request
  searchRequest(url, data?) {

    if(data) this.searchData = data;

    this.http.post(url, this.searchData).subscribe (
      (results: Response) => { this.emittReq.next(<compResObj>{searchRes: results}); },
      (error: Response) => { this.emittReq.next(<compResObj>{searchErr: error}); }
    );
  }

  emittReqFn(response: Response) {
    this.emittReq.next(response);
  }

}
