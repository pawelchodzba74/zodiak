import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormContactComponent } from './../../shared/form-contact/form-contact.component';
import { StartEndEventComponent } from '../../shared/date/start-end-event/start-end-event.component';
import { MAT_DIALOG_DATA } from '@angular/material';
// import { RoomService } from '../room.service';
import { AppService } from '../../app-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  @ViewChild('formContact') formContact: FormContactComponent;
  @ViewChild('startEndEvent') startEndEvent;
  disabled = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private appService: AppService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {

  }
  setStartEnd(Date) {
    this.formContact.setDateEvent(Date);
   }
  setDisabled(fromCheckBox = false) {
   return this.formContact.form.invalid;
    // return !fromCheckBox ? this.formContact.form.invalid : fromCheckBox;

     //  console.log('dd');

    }
    setStateValidity(invalid) { // emit
      this.setDisabled(invalid);
  }
  //  {
    // "email":"dd4tw",
    // "end":"2019-09-23 22:00:00",
    // "name":"3dsssdsaaa",
    // "room":["1","2"],
    // "start":"2019-09-23T21:00:00.000Z",
    // "telephon":"1q",
    // }
   // add reserwation/////////////////////////////////////
   addReservations(value) {

    this.appService.create(this.formContact.currentForm()).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
    handleResponse(data) {console.log(data);

      const i = data.room.length > 1 ? '' : 'i';
      const title = `Rezerwacja: sal${i} nr : ${data.room.join()} przyjęta do realizacji.`;
      const text = `potwierdzenie nastąpi na  podany telefon: ${data.telephon} lub email: ${data.email}`;
      this.alert('success', text , title);
    }
    handleError(error) {
      if (error.error.datesTaken) {
        const errors = error.error.datesTaken.map((objError) => {
          let{room, start, end} = objError;
          return `wynajęcie sali nr: ${room}  w terminie  ${start} - ${end} niemożliwe`;
        }).join();
        const alertString = `${errors} musisz zmienić termin lub sale`;
        this.alert('error', alertString);
      } else {
        this.alert('error', error.error.message, `nie można dokonąć rezerwacji`);
        console.log(error);
      }
    }
    alert(prop, text, tilte = null): void {
      this.toastrService[prop](text , tilte, {timeOut: 10000});
    }

}
