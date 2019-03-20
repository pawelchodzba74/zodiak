import { Component, OnInit, ViewChild } from '@angular/core';
import { PanelBarComponent } from '../panel-bar/panel-bar.component';

@Component({
  selector: 'app-win-maine',
  templateUrl: './win-maine.component.html',
  styleUrls: ['./win-maine.component.css']
})
export class WinMaineComponent implements OnInit {

  constructor() { }

@ViewChild('panelBar') Panelbar;
trigerRoom(nrRoom) {
  this.Panelbar.refreshPanelBar(nrRoom);

}
  ngOnInit() {
  }

}
