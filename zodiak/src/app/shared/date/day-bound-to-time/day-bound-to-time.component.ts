import { Component, EventEmitter, Output, Input , ViewChild, OnInit } from '@angular/core';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { TimePickerComponent} from '../time-picker/time-picker.component';

@Component({
  selector: 'app-day-bound-to-time',
  templateUrl: './day-bound-to-time.component.html',
  styleUrls: ['./day-bound-to-time.component.css']
})
export class DayBoundToTimeComponent implements OnInit {
  public Date = new Date();
  public time = {
    hours: this.Date.getHours(),
    minutes: this.Date.getMinutes()
  };

  @Output() dateReady: EventEmitter<any> = new EventEmitter();
  // @Output() everyEvent: EventEmitter<any> = new EventEmitter();
  @Input() disabled: boolean;
  @Input() startEdit: boolean;
  @Input() placeholderDate: string;
  @Input() placeholderTime: string;
  @ViewChild('datepicker') datePicker;
  @ViewChild('timepicker') timePicker;
  eventTime = false;
  eventDate = false;

  ngOnInit() {
  this.setPlaceholder();
  }
  // main sequence event /////////////////////////////////////////////////////
  glueDateTime(date) {
    if (date instanceof Date) {
      this.assignTime(date, this.time);
      this.eventDate = true;
    } else {
      this.assignTime(this.Date, date);
      this.eventTime = true;
    }

    this.fowardIsEventsRedy();
  }
  assignTime(Date, time) {
    this.Date = Object.assign(
      Date,
      Date.setHours(time.hours),
      Date.setMinutes(time.minutes),
    );
    this.time = time === this.time ? this.time : time ;
  }
  fowardIsEventsRedy() {
    return  this.eventDate && this.eventTime ?  this.dateReady.emit(this.Date) : null;
  }
  // disabled /////////////////////////////////////////////////////////////////////
  // end //
  disabledShow() {
    this.datePicker.chengeDisabled(false);
    this.timePicker.chengeDisabled(false);
  }
  // set min max /////////////////////////////////////////////////////////////////
  // srart & end //
  minMaxDefault(minMaxDefault) {
    this.datePicker.setDefaultMinMax(minMaxDefault);
  }
  // placeholder ///////////////////////////////////////////////////////////////
  setPlaceholder() {
    this.timePicker.setPlaceholder(this.placeholderTime);
    this.datePicker.setPlaceholder(this.placeholderDate);
  }
  // edit /////////////////////////////////////////////////////////////////////////
  endDateEdit(end) {
    const date = this.fowardDate(end);
    this.Date = date;
  }
  startDateEdit(start) {
    const date =  this.fowardDate(start);
    this.Date = date;
  }
  private fowardDate(dateStr) {
    const date = new Date(dateStr);
    this.datePicker.setDefaultDate(date);
    this.timePicker.setDefaultDate(date);
    this.everyEvents();
    return date;
  }
  private everyEvents() {
    this.eventDate = true;
    this.eventTime = true;
  }
  chengeDefaultTime(date) {
    this.time = {
      hours: date.getHours(),
      minutes: date.getMinutes()
    };
  }
}
