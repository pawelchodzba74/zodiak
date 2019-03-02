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
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxLoadingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SchedulerModule


  ],
  exports: [DialogDeleteComponent, SpinerComponent, PhotoComponent, FormContactComponent, ScheduleComponent],
  entryComponents: [DialogDeleteComponent, SpinerComponent, ScheduleComponent],
  declarations: [DialogDeleteComponent, SpinerComponent, PhotoComponent, FormContactComponent, ScheduleComponent, ScheduleComponent]
})
export class SharedModule { }
