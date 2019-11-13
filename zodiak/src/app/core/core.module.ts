import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './heder/header.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, ErrorComponent]
})
export class CoreModule { }
