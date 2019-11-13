import { Component, OnInit } from '@angular/core';
import { PanelBarItemModel, PanelBarExpandMode } from '@progress/kendo-angular-layout';
import { Router } from '@angular/router';
import { RoomComponent } from '../room/room.component';
import { RoomService } from '../room.service';
import { Room } from '../../clients-panel/models/Room';
@Component({
  selector: 'app-panel-bar',
  templateUrl: './panel-bar.component.html',
  styleUrls: ['./panel-bar.component.css']
})
export class PanelBarComponent implements OnInit {
  public expandMode: number = PanelBarExpandMode.Full;
  public kendoPanelBarExpandMode: any = PanelBarExpandMode;
  public height;
  private rooms = ['1', '2', '3', '4', '5', '6'];
  // private idActiveRoom: string;
  // private infoRoom: string;

  public items; //  : Array<PanelBarItemModel>;

  constructor (private roomService: RoomService) {}




  ngOnInit() {
    this.subscribeRoom();
    this.roomService.brodecastRoom('1');
    // this.setItems({id: '1', content: 'first'} ); //  default extanded
  }
// create item
  private makeItem(property) {
    return   this.rooms.map((room) => {
      const selected: boolean = this.setSelected(property.id, room);
      return {
        id: room,
        title: `Sala nr ${room}`,
        content: property.content,
        selected: selected,
        expanded: selected
      };
    });
  }
  private setSelected(id: string, nrRoom: string): boolean {
    return nrRoom === id ? true : false ;
  }
  private setItems(room): void {
    this.items = this.makeItem(room);

  }
// chenge mouse over /////////////////////////////////////////
  private subscribeRoom(): void {
    this.roomService.objectRoom$.subscribe((Room) => {//console.log(Room);
      this.refreshPanelBar(Room);
      // stop loop ///
      // this.idActiveRoom = this.idActiveRoom === Room.nr ? null : this.refreshPanelBar(Room);
    });
  }
  private refreshPanelBar(Room: Room): string {
    this.setItems(
    {
      id: Room.nr,
      content: Room.info
      });
    return Room.nr;
  }
// chenge panel/////////////////////////////////////////////
  onPanelChange(e): void {
    // console.log(e);
    const expendedRoom = e.filter((onePanel) => onePanel.expanded)[0];
    this.roomService.brodecastRoom(expendedRoom.id);
    // this.idActiveRoom  = expendedRoom.id;


  }



}

