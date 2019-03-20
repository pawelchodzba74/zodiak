import { Component, OnInit, Input } from '@angular/core';
import { ScheduleComponent} from '../../shared/schedule/schedule.component'
import {  MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { AppService } from '../../app-service.service';
@Component({
  selector: 'app-admin-shedule',
  templateUrl: './admin-shedule.component.html',
  styleUrls: ['./admin-shedule.component.css']
})
export class AdminSheduleComponent implements OnInit {

  events ;

  constructor(
    private appService: AppService,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
    this.getEvents();

  }
  getEvents() {//console.log(this.data);
   this.appService.getEvents(this.data.nrRoom)
   .then(this.showEvents.bind(this), this.eventsEmpty.bind(this))

}
showEvents(e) {console.log(e);

  this.events = e;
}
eventsEmpty() {


}
}
