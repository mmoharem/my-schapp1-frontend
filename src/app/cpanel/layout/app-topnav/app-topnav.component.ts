import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../shared/services/token.service';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './app-topnav.component.html',
  styleUrls: ['./app-topnav.component.scss']
})
export class AppTopnavComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private tokenServ: TokenService,
              private httpServ: HttpService) { }

  ngOnInit() {
    this.httpServ.loggedInStateEmit.subscribe((loggedInState: boolean) => this.loggedIn = loggedInState)
  }

  logout() {
    this.tokenServ.removeToken();
    this.httpServ.isLoggedIn();
  }

}
