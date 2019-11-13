import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { SpinerComponent } from './spiner/spiner.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { PhotoComponent } from './photo/photo.component';
import { RouterModule } from '@angular/router';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DatePickerComponent } from './date/date-picker/date-picker.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { TimePickerComponent } from './date/time-picker/time-picker.component';
import { DayBoundToTimeComponent } from './date/day-bound-to-time/day-bound-to-time.component';
import { StartEndEventComponent } from './date/start-end-event/start-end-event.component';
import { BtnScheduleComponent } from './btn-schedule/btn-schedule.component';
import { LogEssentialComponent } from './log-essential/log-essential.component';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { RequireKeys } from './validators/reqire-key';
import { ShowHideHeadersDirective } from './directives/show-hide-headers.directive';
import { RoutDirective } from './directives/rout.directive';
import { CallFnDirective } from './directives/call-fn.directive';
import { CompareDateStartEndDirective } from './validators/compare-date-start-end.directive';
import { SelectDirective } from './directives/select.directive';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxLoadingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SchedulerModule,
    DateInputsModule,
    LabelModule

  ],
  exports: [
      DialogDeleteComponent,
      SpinerComponent,
      PhotoComponent,
      FormContactComponent,
      ScheduleComponent,
      DatePickerComponent,
      TimePickerComponent,
      DayBoundToTimeComponent,
      StartEndEventComponent,
      BtnScheduleComponent,
      LogEssentialComponent,
      TableBasicComponent,
      ShowHideHeadersDirective,
      RoutDirective,
      CallFnDirective,
      SelectDirective


    ],
  entryComponents: [DialogDeleteComponent, SpinerComponent, ScheduleComponent],
  declarations: [
    DialogDeleteComponent,
    SpinerComponent, PhotoComponent,
    FormContactComponent, ScheduleComponent,
    ScheduleComponent, DatePickerComponent,
    TimePickerComponent, DayBoundToTimeComponent,
    StartEndEventComponent, BtnScheduleComponent,
    LogEssentialComponent, TableBasicComponent,
    ShowHideHeadersDirective, RoutDirective,
    CallFnDirective, CompareDateStartEndDirective,
    SelectDirective

    ],
    providers: [
      RequireKeys
    ]

})
export class SharedModule { }
