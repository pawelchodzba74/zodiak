import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
// import {  } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCompareDateStartEnd]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CompareDateStartEndDirective,
    multi: true
  }]
})

export class CompareDateStartEndDirective implements Validator  {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    // console.log(control.value.start);
    // console.log(control.value.end);
    const dateStart = new Date(control.value.start);
    const dateEnd = new Date(control.value.end);
    // console.log(dateStart);
    // console.log(dateEnd);

    if (dateStart >= dateEnd ) {
      return {
        DateEvent: true
      };

    }
    return null;
  }
    // return compareDateStartEnd(control);
}
