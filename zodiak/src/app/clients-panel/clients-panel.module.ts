import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SchemaComponent } from './schema/schema.component';
import { WinMaineComponent } from './win-maine/win-maine.component';
import { SaleComponent } from './sale/sale.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MaterialModule } from '../material/material.module';
import { ClientScheduleComponent } from './client-schedule/client-schedule.component';
import { PanelBarComponent } from './panel-bar/panel-bar.component';
import { PanelBarModule } from '@progress/kendo-angular-layout';
// import { PanelBarItemModel } from '@progress/kendo-angular-layout';
@NgModule({
  declarations: [SchemaComponent, WinMaineComponent, SaleComponent, BookingFormComponent, ClientScheduleComponent, PanelBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    PanelBarModule

  ],
  entryComponents: [BookingFormComponent],
  exports: [
    SchemaComponent,
    WinMaineComponent,
    SaleComponent,
    ClientScheduleComponent,
    PanelBarComponent

  ]
})
export class ClientsPanelModule { }
