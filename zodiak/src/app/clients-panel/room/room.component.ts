import { Component, OnInit, Input } from '@angular/core';
import { BtnScheduleComponent } from '../../shared/btn-schedule/btn-schedule.component';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { MatDialog } from '@angular/material';
import { ScrollViewComponent } from '../scroll-view/scroll-view.component';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() id: number;
  constructor(private dialog: MatDialog ) { }

  ngOnInit() {
  }
  booking(nrRoom) {
    this.dialog.open(BookingFormComponent, {
      data: {nrRoom: nrRoom[0]}
    });
  }


}
