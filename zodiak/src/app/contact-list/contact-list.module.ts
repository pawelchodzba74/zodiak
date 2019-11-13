import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
// import { NewAdminComponent } from './new-admin/new-admin.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { RouterModule } from '@angular/router';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { SharedModule } from '../shared/shared.module';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { AdminSheduleComponent } from './admin-shedule/admin-shedule.component';
import { LoginModule } from '../login/login.module';
/// on build --prod///
import { NewContactComponent } from './new-contact/new-contact.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    AmazingTimePickerModule,
    FormsModule,
    LoginModule
  ],
  entryComponents: [AdminSheduleComponent],
  exports: [
    ListComponent,
  ],
  declarations: [
    ListComponent,
    // NewContactComponent,
    ContactDetailsComponent,
    EditContactComponent,
    AdminSheduleComponent,
    NewContactComponent

    ]
})
export class ContactListModule { }
