import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent  {
  public steps: any = { hour: 1, minute: 30 };
  public value: Date = new Date();
  public time = {
    hours: this.value.getHours(),
    minutes: this.value.getMinutes()
  };
  @Output() hoursMinutes: EventEmitter<any> = new EventEmitter();
  @Input() disabled;
  placeholder: string;

  setPlaceholder(placeholder): void {
    this.placeholder  = placeholder;
  }
// main sequentin event//////////////////////////////////////////////
  setTime(date): void {
    this.time.hours = date.getHours();
    this.time.minutes = date.getMinutes();
  }
  getHoursTime(date): void {
    this.setTime(date);
    this.hoursMinutes.emit(this.time);
  }
  chengeDisabled(disabled): void {
    this.disabled = disabled;
  }


}
