import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

export interface dataObj {
  results: Response,
  error: Response
};

@Injectable({
  providedIn: 'root'
})

export class PaginationService {

  changeEmit = new Subject;
  responseEmit = new Subject;
  dataErrEmit = new Subject;
  response: dataObj;

  constructor(private http: HttpClient) { }

  turnPage(url) {
    let dataRes: Response;
    let dataErr: Response;

    this.http.get(url)
      .subscribe
      (
        (results: Response) =>
        {
          dataRes = results;
          this.responseEmit.next({results: results});
        },

        (error: Response) =>
        {
          dataErr = error;
          this.responseEmit.next({error: error})
        }
      )

    ;
  }

  paginate(state: string, data, perPage: number) {

    let url;
    const cur = data.current_page;
    const path = data.path;
    console.log(perPage)

    if(state === 'perPage') {
      url = `${path}?page=1&per_page=${perPage}`;

    } else if(state === 'next') {
      url = `${data.next_page_url}&per_page=${perPage}`;

    } else if(state === 'back') {
      url = `${data.prev_page_url}&per_page=${perPage}`;
    }
    this.turnPage(url);
    console.log(url);
  }


}
