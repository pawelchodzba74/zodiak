import { Component, OnInit, Input } from '@angular/core';
import { ScheduleComponent} from '../../shared/schedule/schedule.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

// import { ContactListService } from '../../contact-list/contact-list.service';


@Component({
  selector: 'app-client-schedule',
  templateUrl: './client-schedule.component.html',
  styleUrls: ['./client-schedule.component.css']
})
export class ClientScheduleComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data) { }
  events;
  ngOnInit() {
  }

}
