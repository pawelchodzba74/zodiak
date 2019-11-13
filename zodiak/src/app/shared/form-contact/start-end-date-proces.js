import {Validators,  FormControl} from '@angular/forms';


export const StartEndDateProces = (function(){

  function StartEndDateProces (form) {
  this.form = form;
    // this.setControlStartEnd();
  }
  StartEndDateProces.prototype.addControls = function(controls) {
    controls.forEach(control => {
      if (!this.form.controls[control.name]) {
        this.form.addControl(control.name, new FormControl(control.value));
      } else {
        this.form.get(control.name).setValue(control.value);
      }
    });
  }
  StartEndDateProces.prototype.setValuesControls = function(values){ //console.log(values);
    const formValues = this.form.value;
    // console.log(formValues);
    for (const key in formValues) {
              if (Object.keys(values).includes(key)) {
                  formValues[key] = values[key];
              }
    }


    // const readyControls =  this.controls.map((control) => {
    //   if (control.name in startEndDate) {
    //     control.value = startEndDate[control.name];
    //   }
    //   return control;
    //   }).filter(control => control);
    //   console.log(this.controls);

    //   this.setControlStartEnd(readyControls);
  }
  StartEndDateProces.prototype.newForm = function() {
    return this.form;
  }
  // StartEndDateProces.prototype.setControlStartEnd = function(controls) {
  //   controls.forEach(control => {
  //     if (!this.form.controls[control.name]) {
  //       this.form.addControl(control.name, new FormControl(control.value));
  //     } else {
  //       this.form.get(control.name).setValue(control.value);
  //     }
  //   });
  // }


return StartEndDateProces;

})();
