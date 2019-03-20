import { Component, OnInit } from '@angular/core';
import { PanelBarItemModel, PanelBarExpandMode } from '@progress/kendo-angular-layout';
import { Router } from '@angular/router';
import { RoomComponent } from '../room/room.component';

@Component({
  selector: 'app-panel-bar',
  templateUrl: './panel-bar.component.html',
  styleUrls: ['./panel-bar.component.css']
})
export class PanelBarComponent implements OnInit {
  public expandMode: number = PanelBarExpandMode.Full;
  public kendoPanelBarExpandMode: any = PanelBarExpandMode;
  private height = 100;
  private rooms = ['1', '2', '3', '4', '5', '6'];



  private items  ; //  : Array<PanelBarItemModel>;

  ngOnInit() {
    this.setItems({id: '5'});
  }
  makeItem(property) {
    return   this.rooms.map((room) => {
      return {
        id: room,
        title: `Sala nr ${room}`,
        content: `component ${room}`,
        expanded: this.setExpanded(property.id, room)

      };
    });
  }
  setExpanded(id, room) {
    return room === id ? true : false ;
  }
  setItems(property) {
    this.items = this.makeItem(property);
  }
  refreshPanelBar(nrRoom) {

    this.setItems({id: nrRoom});
  }



}

