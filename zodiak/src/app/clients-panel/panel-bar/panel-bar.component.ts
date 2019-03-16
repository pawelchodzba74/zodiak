import { Component, OnInit } from '@angular/core';
import { PanelBarItemModel, PanelBarExpandMode } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-panel-bar',
  templateUrl: './panel-bar.component.html',
  styleUrls: ['./panel-bar.component.css']
})
export class PanelBarComponent implements OnInit {
  public expandMode: number = PanelBarExpandMode.Full;
  public kendoPanelBarExpandMode: any = PanelBarExpandMode;
  private height = 100;
  // private items:[{title: 'First item', content: 'First item content', expanded: true }];
//   private items: Array<PanelBarItemModel> = [
//     <PanelBarItemModel> {title: 'First item', content: 'First item content', expanded: true },
//     <PanelBarItemModel> {title: 'Second item', children: [
//             <PanelBarItemModel> {title: 'Child item' }
//         ]
//     }
// ];
  constructor() { }

  ngOnInit() {
  }

}

