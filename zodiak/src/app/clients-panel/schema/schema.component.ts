import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Inject, Renderer2 } from '@angular/core';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { MatDialog } from '@angular/material';
import { RoomService } from '../room.service';

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
    private roomService: RoomService
  ) { }
  @ViewChild('bookingRooms') bookingRooms: ElementRef;
  // @Output() trigerRoom: EventEmitter<string> = new EventEmitter();
  roomsAll;
  idActiveRoom: string;
  ngOnInit()  {
    this.getRooms();
    this.subscribeRoom();
    this.iteratioRooms();
    this.mouseLeave();
    this.addActiveClass('1');
  }
  private getRooms(): void  {
    this.roomsAll = Array.from(this.nodeListRoom('g'));
  }
  private nodeListRoom(marker) {
    return this.bookingRooms.nativeElement.querySelectorAll(marker);
  }
  private iteratioRooms(): void {
    this.roomsAll.forEach((room) => {
      this.addEvent(room, 'click', this.onClick.bind(this, room.id));
      this.addEvent(room, 'mouseover', this.mouseOver.bind(this, room.id));
    });
  }
  private addEvent(el, eName, fn): void {
    this.renderer.listen(el, eName, fn);
  }
// mouse leave //////////////////////////////////////////////////////
  private mouseLeave() {
    this.addEvent(this.bookingRooms.nativeElement, 'mouseleave', () => {
      this.idActiveRoom = null;
    });
  }
// click//////////////////////////////////////////////////////////////
  private onClick(nrRoom): void {
    this.booking(nrRoom);
  }
  private booking(nrRoom): void {
    this.dialog.open(BookingFormComponent, {
      data: {room: [nrRoom]}
    });
  }
// mouse over////////////////////////////////////////////////////////////
  private mouseOver(nrRoom): void {
    if (this.stopReCall(nrRoom)) { return; }
    this.idActiveRoom = nrRoom;
    this.addActiveClass(nrRoom);
    this.roomService.brodecastRoom(nrRoom);
  }
// event from roomservice (panel bar) ////////////////////////////////////
  private subscribeRoom(): void {
    this.roomService.objectRoom$.subscribe((Room) => {
      return this.stopReCall(Room.nr) ? null : this.addActiveClass(Room.nr);
    });
  }
// repo ///////////////////////////////////////////////////////////////////
  private addActiveClass(nr): void {
    this.removeActiveClass();
    this.renderer.addClass(this.getChengeEl(nr), 'active-room');
  }
  private getChengeEl(nr): ElementRef {
    return this.roomsAll.filter(room => nr === room.id)[0].children[0];
  }
  private stopReCall(nrRoom): boolean {
    return this.idActiveRoom ===  nrRoom ? true : false;
  }
  private removeActiveClass(): void {
    this.roomsAll.forEach(room => {
      room.children[0].classList.remove('active-room');
    });
  }
}
