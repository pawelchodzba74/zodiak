import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { SpinerComponent } from './spiner/spiner.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { PhotoComponent } from './photo/photo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxLoadingModule,
    RouterModule

  ],
  exports: [DialogDeleteComponent, SpinerComponent, PhotoComponent],
  entryComponents: [DialogDeleteComponent, SpinerComponent],
  declarations: [DialogDeleteComponent, SpinerComponent, PhotoComponent]
})
export class SharedModule { }
