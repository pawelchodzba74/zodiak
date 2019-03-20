import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SchemaComponent } from './schema/schema.component';
import { WinMaineComponent } from './win-maine/win-maine.component';
import { RoomComponent } from './room/room.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MaterialModule } from '../material/material.module';
import { ClientScheduleComponent } from './client-schedule/client-schedule.component';
import { PanelBarComponent } from './panel-bar/panel-bar.component';
import { PanelBarModule } from '@progress/kendo-angular-layout';
import { ScrollViewComponent } from './scroll-view/scroll-view.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
// import { PanelBarItemModel } from '@progress/kendo-angular-layout';
@NgModule({
  declarations: [
    SchemaComponent,
    WinMaineComponent,
    RoomComponent,
    BookingFormComponent,
    ClientScheduleComponent,
    PanelBarComponent,
    ScrollViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    PanelBarModule,
    ScrollViewModule


  ],
  entryComponents: [BookingFormComponent],
  exports: [
    SchemaComponent,
    WinMaineComponent,
    RoomComponent,
    ClientScheduleComponent,
    PanelBarComponent,
    ScrollViewComponent

  ]
})
export class ClientsPanelModule { }
