import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { MaterialModule } from '../material/material.module';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { RouterModule } from '@angular/router';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { SharedModule } from '../shared/shared.module';
import { AmazingTimePickerModule } from 'amazing-time-picker';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ContactListRoutingModule } from '../contact-list/contact-list-routing-module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    AmazingTimePickerModule
    // NgbModule
    // ContactListRoutingModule
  ],
  entryComponents: [NewContactComponent],
  exports: [ListComponent],
  declarations: [
    ListComponent,
    NewContactComponent,
    FormContactComponent,
    ContactDetailsComponent,
    EditContactComponent
    ]
})
export class ContactListModule { }
