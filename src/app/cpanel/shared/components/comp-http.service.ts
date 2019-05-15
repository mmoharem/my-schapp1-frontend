import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  emittReq = new Subject;
  baseUrl = 'http://127.0.0.1:8000/';
  searchData;

  // Get Request
  getRequest(url) {
    this.http.get(url).subscribe(
      (results: Response) => { this.emittReq.next(<compResObj>{getRes: results}); },
      (error: Response) => { this.emittReq.next(<compResObj>{getErr: error}); }
    );
  }

  // Post Request
  postRequest(url, data) {
    this.http.post(`${this.baseUrl}${url}`, data).subscribe(
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
