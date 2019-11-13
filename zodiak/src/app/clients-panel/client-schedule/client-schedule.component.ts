import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ScheduleComponent} from '../../shared/schedule/schedule.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { AppService } from '../../app-service.service';

// import { ContactListService } from '../../contact-list/contact-list.service';


@Component({
  selector: 'app-client-schedule',
  templateUrl: './client-schedule.component.html',
  styleUrls: ['./client-schedule.component.css']
})
export class ClientScheduleComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private appService: AppService,
    ) { }
  events =  [{ // id: 1,
    start: new Date(),
    end: new Date()
    // title: '11 NOVA - pisać pierwsze nazwę firmy wynajmującej będzie wtety dobrze widać w tygodniowym ujęciu',
    // isAllDay: true,
    // nrRoom: '1'
    }];
  ngOnInit() {
    this.appService.eventsFromClients(+this.data.nrRoom).subscribe(
      (events) => this.handleResponse(events),
      (errors) => this.handleErrors(errors)
    );
  }
  handleResponse(events) {
    const  evReady = events.map((e) => {
      const start = new Date(e.start);
      const end = new Date(e.end);
      // start.setTime( start.getTime() + start.getTimezoneOffset()*60*1000 );
      // end.setTime( end.getTime() + end.getTimezoneOffset()*60*1000 );
      return {
        start: start,
        end: end
      };
    });
    this.events = evReady;

  }
  handleErrors(errors) {
    console.log(errors);

  }
}
