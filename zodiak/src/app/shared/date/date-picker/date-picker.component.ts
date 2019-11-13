import { EventEmitter , Component, Output, Input, OnInit } from '@angular/core';
import { CompareTwoDate } from '../../../shared/validators/compare-two-date';
import {  } from '@angular/core';

// import { IntlService } from '@progress/kendo-angular-intl';
@Component({
  selector: 'app-data-picker',
  templateUrl: './date-picker.component.html',
  styles: [`
  .label {
    display: block;
    font-weight: bold;
    text-indent: 8px;
    color: #656565;
  }
`]

})
export class DatePickerComponent implements OnInit  {
  public value;
  public max: Date;
  public min: Date = new Date ();

  @Output() date: EventEmitter<Date> = new EventEmitter();
  @Input() disabled: boolean;
  placeholder;

ngOnInit() {
// this.setDefaultDate();
}
  ///////////////////////////////
  setPlaceholder(placeholder) {
    this.placeholder  = placeholder;
  }
///////////////// maine sequence///////////////////
  onChange(value: Date): void {
    this.dateEvent(value);
  }
  dateEvent(date: Date): void {
    this.date.emit(date);
  }
//////////// disabled ////////////////////////////
  chengeDisabled(disabled: boolean): void {
    this.disabled = disabled;
  }
/////// set max min ///////////////////////////////
  setDefaultMinMax(minMax): void {
    const  date = new CompareTwoDate();
      return date.EndAfterStart(minMax.min, minMax.max) ?
        this.setMinMax(minMax.min, minMax.max) :
        console.log('The max value should be bigger than the min.' );
  }
  setMinMax (min, max) {
    this.min =  min;
    this.max = max;
    }
  setDefaultDate(date = false) {
    this.value = date;
  }
}
