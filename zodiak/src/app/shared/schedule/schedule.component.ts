import { Component } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { Input } from '@angular/core';
import { Scheduler } from 'amazing-time-picker/node_modules/rxjs';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent  {
  public selectedDate: Date = new Date();
  @Input() events: SchedulerEvent[];

}
