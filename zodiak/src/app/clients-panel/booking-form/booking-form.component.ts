import { Component, OnInit, ViewChild } from '@angular/core';
import { FormContactComponent } from './../../shared/form-contact/form-contact.component';
import { StartEndEventComponent } from '../../shared/date/start-end-event/start-end-event.component';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  @ViewChild('formContact') formContact: FormContactComponent;
  @ViewChild('startEndEvent') startEndEvent;
  constructor() { }

  ngOnInit() {
  }
  setStartEnd(Date) {
    this.formContact.setDateEvent(Date);

   }

}
