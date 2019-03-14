import { Component, ViewChild, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DayBoundToTimeComponent} from '../day-bound-to-time/day-bound-to-time.component';
import { LoginComponent } from 'src/app/login/login.component';


@Component({
  selector: 'app-start-end-event',
  templateUrl: './start-end-event.component.html',
  styleUrls: ['./start-end-event.component.css']
})
export class StartEndEventComponent implements OnInit {
Date = {
  start: '',
  end: ''

};

  @ViewChild('start') start;
  @ViewChild('end') end;
  disabled = true;
  @Input() minDayDefault ;
  @Input() maxDayDefault ;
  errorsAlert = [];
  @Output() date: EventEmitter<any> = new EventEmitter();

  ngOnInit() {


    this.start.minMaxDefault(this.setMinMaxDefault(this.minDayDefault, this.maxDayDefault));
  }
// the main sequnce of events ////////////////////////////////////////
      // start //
  startEvent(date) {
    this.Date.start = date;
    const clonDate = new Date(date.getTime());
    this.fowardPropEnd(clonDate);
    //console.log(this.Date.start);
    this.afterBothEv();

  }
  afterBothEv() {// console.log(this.Date.start);console.log(this.Date.end);

    return this.Date.start && this.Date.end ? this.getDateStartEnd() : null;

  }
  fowardPropEnd(date) {
    this.minDayDefault = !this.minDayDefault ? 0 : this.minDayDefault;
    this.end.disabledShow();
    this.end.minMaxDefault(this.setMinMaxDefault(this.minDayDefault, this.maxDayDefault, date));
  }
      // end //
  endEvent(date) {
    this.Date.end = date;
    this.afterBothEv();
  }

// settting the minimum and maximum of the date shown in datePicker/////
  howManyDaysDiff(amountDays: number, date = new Date()) {
      return new Date(date.setDate(date.getDate() + amountDays)) ;
  }
  setMinMaxDefault(min: number, max: number, date = new Date()) {
    return {
      min: Number.isInteger(min) ? this.howManyDaysDiff(min, date) : null,
      max: Number.isInteger(min) ? this.howManyDaysDiff(max, date) : null
    };
  }
  ////////////////////////////////////////////////////////////////////////////
  //////////////////////// returned date result //////
  getDateStartEnd() {
    this.date.emit(this.Date);
    // return this.startEndExist() ?
    //   this.compareStartEnd() :
    //   null;
  }
  startEndExist() {//console.log(this.Date.start); console.log(this.Date.end)
    return this.Date.end  &&  this.Date.start  ?
      true :
      this.error('One of date properties  must be Data Object');
  }
  compareStartEnd () {
    return  this.Date.end >= this.Date.start ?
      this.Date :
      this.error('Date start must be before date end');
  }
  error(text) {
    this.errorsAlert.push(text);
    console.log(text);
    return;
  }
}
