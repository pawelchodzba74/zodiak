
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { FormContactComponent } from '../../shared/form-contact/form-contact.component';
import { FileAlert } from '../../contact-list/models/fileAlert';
@Injectable({
  providedIn: 'root'
})
export class FileUp {
  constructor(private toastr: ToastrService) {}
  reader = new FileReader();
  file: File;
  Context: FormContactComponent;
  requirePropertiesFile = {
    size: null,
    type: null,
    name: null,
    lastModifiedDate : null
  };
  errors: FileAlert[] = [];

  dataUrl(file: File): void {
    this.reader.readAsDataURL(file);
    this.setFile(file);
    this.errorsClear();
    this.checkProperties();
    this.checkErrors().length ? this.showErrors() : this.onLoad();
  }
  setObj(Context): void {
    this.Context = Context;

  }
  setRequiredPropFile(propertiesFile) {
    this.requirePropertiesFile = propertiesFile;
  }
  private setFile(file): void {
    this.file = file;
  }
  private size(size: number): FileAlert {
    if (Number.isInteger(size)) {
      return this.file.size > this.requirePropertiesFile.size ? {valid: 'nieprawidłowy rozmiar pliku'} : {valid: null};
    } else {
      console.log('size must be integer');
    }
  }
  private type(regExp: string): FileAlert {
    return !this.file.type.match(regExp) ? {valid: 'nieprawidłowy format pliku'} : {valid: null};
  }
  private checkProperties(): void {
    for (const key in this.requirePropertiesFile) {
      if (this.requirePropertiesFile[key]) {
       this.errors.push(this[key](this.requirePropertiesFile[key]));
      }
    }
  }
  private checkErrors(): FileAlert[] {
    return this.errors.filter((valid) => {
      return valid.valid != null ? valid : null;
    });
  }
  private showErrors(): void {
    this.errors.forEach(error => {
      error.valid ? this.toastr.warning(error.valid) : null ;
    });
  }
  private errorsClear(): void {
    this.errors = [];
  }
   ///////////////////////// async   /////////////////
  private onLoad(): void {
    this.reader.onload = () => {
    this.fnToBeCalled();
    };
  }
  private fnToBeCalled(): void {
    this.Context.form.patchValue({photo: this.getResult()});
  }
  private getResult() {
    return this.reader.result;
  }


}
