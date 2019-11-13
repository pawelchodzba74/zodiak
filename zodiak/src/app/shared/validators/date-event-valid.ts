import { AbstractControl } from '@angular/forms';

export class DateEventValid {
  static DateEvent(control: AbstractControl) {

    if (control.value.start >= control.value.end ) {
      return {
        DateEvent: true
      };

    }
    return null;
  }
}
