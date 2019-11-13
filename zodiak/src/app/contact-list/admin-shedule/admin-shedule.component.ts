import { Component, OnInit, Input } from '@angular/core';
import { ScheduleComponent} from '../../shared/schedule/schedule.component'
import {  MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { DataSourceTableService } from '../../shared/services/data-source-table.service';
// import { AppService } from '../../app-service.service';
@Component({
  selector: 'app-admin-shedule',
  templateUrl: './admin-shedule.component.html',
  styleUrls: ['./admin-shedule.component.css']
})
export class AdminSheduleComponent implements OnInit {

  events =  [{ // id: 1,
    start: new Date(),
    end: new Date()
    }
  ];

  constructor(
    // private appService: AppService,
    private dataSourceTableService: DataSourceTableService,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
    this.getEvents();

  }
  getEvents() {

    const events = this.dataSourceTableService.getRoomProperties(this.data.nrRoom,
       ['start', 'end', 'client_name', 'status', 'user_name']);
      const evReady = events.map((e) => {
      const start = new Date(e.start);
      const end = new Date(e.end);
      // start.setTime( start.getTime() + start.getTimezoneOffset()*60*1000 );
      // end.setTime( end.getTime() + end.getTimezoneOffset()*60*1000 );
      const approved = e.user_name ? `Zatwierdził: ${e.user_name}` : ``;
      const title = `${e.client_name} status: ${e.status} ${approved} `;

      return {
        start: start,
        end: end,
        title: title
      };
    });
    this.events = evReady;
  //  this.appService.getEvents(this.data.nrRoom)
  //  .then(this.showEvents.bind(this), this.eventsEmpty.bind(this));

}

}
