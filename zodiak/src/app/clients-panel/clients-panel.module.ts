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
@NgModule({
  declarations: [SchemaComponent, WinMaineComponent, SaleComponent, BookingFormComponent, ClientScheduleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule
  ],
  entryComponents: [BookingFormComponent],
  exports: [SchemaComponent, WinMaineComponent, SaleComponent, ClientScheduleComponent]
})
export class ClientsPanelModule { }
