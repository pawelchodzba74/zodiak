import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShowAdminComponent } from './show-admin/show-admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LogOutGlobalConfig } from './log-out/config-log-out';

@NgModule({
  declarations: [
    LoginComponent,
    ShowAdminComponent,
    AddAdminComponent,
    EditAdminComponent,
    LogOutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ShowAdminComponent,
    LogOutComponent
  ],
  providers: [LogOutGlobalConfig],
  entryComponents: [LoginComponent,  EditAdminComponent, AddAdminComponent]
})
export class LoginModule {}
