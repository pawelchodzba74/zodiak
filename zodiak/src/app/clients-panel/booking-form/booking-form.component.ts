import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormContactComponent } from './../../shared/form-contact/form-contact.component';
import { StartEndEventComponent } from '../../shared/date/start-end-event/start-end-event.component';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  @ViewChild('formContact') formContact: FormContactComponent;
  @ViewChild('startEndEvent') startEndEvent;
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }
  setStartEnd(Date) {
    this.formContact.setDateEvent(Date);

   }

}
