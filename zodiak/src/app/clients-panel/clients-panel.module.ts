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
// import { ScrollViewComponent } from './scroll-view/scroll-view.component';
// import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { RoomService } from '../clients-panel/room.service';
import { LoginModule } from '../login/login.module';
import { SkyComponent } from './sky/sky.component';

// import { MapComponent } from './map/map.component';
// import { AgmCoreModule } from '@agm/core';
// import { PanelBarItemModel } from '@progress/kendo-angular-layout';
@NgModule({
  declarations: [
    SchemaComponent,
    WinMaineComponent,
    RoomComponent,
    BookingFormComponent,
    ClientScheduleComponent,
    PanelBarComponent,
    SkyComponent

    // ScrollViewComponent,
    // MapComponent

    // AgmCoreModule
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    PanelBarModule,
    LoginModule
    // ScrollViewModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCfVuTpUBK6UMvaVSbB2NHO5v3JZcVfkc4'})


  ],
  entryComponents: [BookingFormComponent, ClientScheduleComponent],
  exports: [
    SchemaComponent,
    WinMaineComponent,
    RoomComponent,
    // ClientScheduleComponent,
    PanelBarComponent,
    // ScrollViewComponent,
    // MapComponent
    SkyComponent
  ],
  providers: [RoomService]
})
export class ClientsPanelModule { }
