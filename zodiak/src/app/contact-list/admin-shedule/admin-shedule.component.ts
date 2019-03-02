import { Component, OnInit, Input } from '@angular/core';
import { ScheduleComponent} from '../../shared/schedule/schedule.component'
import {  MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { ContactListService } from '../contact-list.service';
@Component({
  selector: 'app-admin-shedule',
  templateUrl: './admin-shedule.component.html',
  styleUrls: ['./admin-shedule.component.css']
})
export class AdminSheduleComponent implements OnInit {

  events ;

  constructor(
    private contactListService: ContactListService,
    // public dialogRef: MatDialogRef<ListComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
    this.getEvents();

  }
  getEvents() {//console.log(this.data.nrRoom)
   this.contactListService.getEvents(this.data.nrRoom)
   .then(this.showEvents.bind(this), this.eventsEmpty.bind(this))

}
showEvents(e) {console.log(e);
  this.events = e;
}
eventsEmpty() {
  console.log('empty');
}
}
