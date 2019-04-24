import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import * as moment from 'moment';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';

// import FullCalendar from '@fullcalendar/core/Calendar';
// import Calendar from '@fullcalendar/core/Calendar';
// import { FullCalendar } from "@fullcalendar/core/Calendar";
// declare var Clendar: any;
import dayGridPlugin from '@fullcalendar/daygrid';
import dayGrid from '@fullcalendar/daygrid';
import timeGrid from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/daygrid';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @ViewChild('calendar') calendEl: ElementRef;

  calendarPlugins = [interaction ,dayGrid, timeGrid];

  constructor(private fb: FormBuilder,
              private httpServ: HttpService) { }



  ngOnInit() {
    // var calendar = new FullCalendar.Calendar(this.calendEl, {

    // })
  }
}
