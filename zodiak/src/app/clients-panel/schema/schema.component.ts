import { Component, OnInit } from '@angular/core';


import { BookingFormComponent } from '../booking-form/booking-form.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  ngOnInit()  {


  }
  booking(nrRoom) {
    this.dialog.open(BookingFormComponent);




  }

}
