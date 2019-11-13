import { Component, ViewChild, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DayBoundToTimeComponent} from '../day-bound-to-time/day-bound-to-time.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RentBrodecastService } from '../../services/rent-brodecast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start-end-event',
  templateUrl: './start-end-event.component.html',
  styleUrls: ['./start-end-event.component.css']
})
export class StartEndEventComponent implements OnInit, OnDestroy {
Date = {
  start: '',
  end: ''
};
  @ViewChild('start') start;
  @ViewChild('end') end;
  @Input() minDayDefault ;
  @Input() maxDayDefault ;
  @Output() date: EventEmitter<any> = new EventEmitter();
  // @Output() everyEv: EventEmitter<any> = new EventEmitter();
  disabled = true;
  errorsAlert = [];
  // editFlag = false;
  subscription: Subscription;

  constructor( private rentBrodecastService: RentBrodecastService) {}
  ngOnInit() {
    this.start.minMaxDefault(this.setMinMaxDefault(this.minDayDefault, this.maxDayDefault));
    this.subscription = this.rentBrodecastService.Rent$.subscribe((rent) => {
      this.start.startDateEdit(rent.start);
      this.start.chengeDefaultTime (new Date(rent.start));
      this.end.endDateEdit(rent.end);
      this.end.chengeDefaultTime (new Date(rent.end));
      this.end.disabledShow();
      this.Date.start = rent.start;
      this.Date.end = rent.end;
      // this.editFlag = true;
    });
  }
  // the main sequnce of events ////////////////////////////////////////
    // start //
  // everyEventStart(date) {
  //   this.everyEv.emit({start: date});
  // }
  startEvent(date) {
    this.Date.start = date;
    const clonDate = new Date(date.getTime());
    this.fowardPropEnd(clonDate);
    this.afterBothEv();
  }
  afterBothEv() {
    return this.Date.start && this.Date.end ? this.getDateStartEnd() : null;
  }
  fowardPropEnd(date) {
    this.minDayDefault = !this.minDayDefault ? 0 : this.minDayDefault;
    this.end.disabledShow();
    this.end.minMaxDefault(this.setMinMaxDefault(this.minDayDefault, this.maxDayDefault, date));
  }
      // end //
  // everyEventEnd(date) {
  //   this.everyEv.emit({end: date});
  // }
  endEvent(date) {
    this.Date.end = date;
    this.afterBothEv();
  }
  // settting the minimum and maximum of the date shown in datePicker/////
  howManyDaysDiff(amountDays: number, date = new Date()) {
      return new Date(date.setDate(date.getDate() + amountDays));
  }
  setMinMaxDefault(min: number, max: number, date = new Date()) {
    return {
      min: Number.isInteger(min) ? this.howManyDaysDiff(min, date) : null,
      max: Number.isInteger(min) ? this.howManyDaysDiff(max, date) : null
    };
  }
  ////////////////////////////////////////////////////////////////////////////
  //////////////////////// returned date result //////
  getDateStartEnd() { // console.log(this.Date);
    this.date.emit(this.Date);
    // return this.startEndExist() ?
    //   this.compareStartEnd() :
    //   null;
  }
  startEndExist() {// console.log(this.Date.start); console.log(this.Date.end)
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
    // console.log(text);
    return;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
