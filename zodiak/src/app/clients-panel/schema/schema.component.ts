import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, HostListener, Inject, Renderer2 } from '@angular/core';


import { BookingFormComponent } from '../booking-form/booking-form.component';
import { MatDialog } from '@angular/material';
// import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {


  constructor(
    private dialog: MatDialog,
    private el: ElementRef,
    private renderer: Renderer2,

  ) { }
  @ViewChild('bookingRooms') bookingRooms: ElementRef;
  @Output() trigerRoom: EventEmitter<string> = new EventEmitter();

  ngOnInit()  {
    this.iteratioRooms(this.getRooms());
  }
  getRooms()  {
    return Array.from(this.bookingRooms.nativeElement.querySelectorAll('g'));
  }
  iteratioRooms(Rooms) {
    Rooms.forEach((room) => {
      this.addEvent(room, 'click', this.onClick.bind(this, room.id));
      this.addEvent(room, 'mouseover', this.mouseOver.bind(this, room.id));
    });
  }
  addEvent(el, eName, fn) {
    this.renderer.listen(el, eName, fn);
  }
  onClick(nrRoom) {
    this.booking(nrRoom);
  }
  mouseOver(nrRoom) {
    this.chengePanel(nrRoom);
  }
  chengePanel(nrRoom) {
    this.trigerRoom.emit(nrRoom);
  }
  booking(nrRoom) {
    this.dialog.open(BookingFormComponent, {
      data: {nrRoom: nrRoom}
    });
  }

}
