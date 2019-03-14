import { Component, OnInit, Input,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  FormControl} from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';
import { StartEndEventComponent } from '../date/start-end-event/start-end-event.component';
import { DateEventValid } from '../../shared/validators/date-event-valid';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css'],
 })
export class FormContactComponent implements OnInit {
  @Input() Person ;
  selected;
  form: FormGroup;

  // date = new FormControl(new Date());
  // serializedDate = new FormControl((new Date()).toISOString());
  // checked = false;
  startEnd;
  constructor(
    private formBuilder: FormBuilder,
    ) {}

  ngOnInit() {
    const Value = this.setValueForm(false);
    this.buildForm(Value);
    this.setControlStartEnd({
      name: 'startEnd',
      value: '',
      validators: Validators.required
    });
  }

  setDateEvent(startEndDate): void {
    this.setControlStartEnd({
      name: 'startEnd',
      value: startEndDate,
      validators: DateEventValid.DateEvent
    });
    // this.form.get('startEnd').setValue(startEndDate);
    // this.form.get('startEnd').setValidators(DateEventValid.DateEvent);
  }
  setControlStartEnd(control) {
    if (!this.form.controls[control.name]) {
      this.form.addControl(control.name, new FormControl(control.value, control.validators));
    } else {
      this.form.get(control.name).setValue(control.value);
      this.form.get(control.name).setValidators(control.validators);
    }
  }
  buildForm(Value): void {
    this.form = this.formBuilder.group({
      alias: [Value.alias , { validators: [Validators.required, Validators.maxLength(24) ]}],
      first_name: [Value.first_name, { validators: [ Validators.required, Validators.maxLength(24) ]}],
      last_name: [Value.last_name, { validators: [ Validators.required, Validators.maxLength(24) ]}],
      email: [Value.email, { validators: [ Validators.required, Validators.maxLength(32), Validators.email  ]}],
      telephon: [Value.telephon, { validators: [ Validators.required, Validators.maxLength(12), Validators.pattern('[0-9]{9}') ]}],
      sex: [Value.sex, Validators.required],
      photo: null


    });
  }
  setValueForm(Person) {
    if (Person) {
      return{
        alias: Person.alias,
        first_name: Person.first_name,
        last_name: Person.last_name,
        email: Person.email,
        telephon: Person.telephon,
        sex: Person.sex
      };
    } else {
      return {
        alias: '',
        first_name: '',
        last_name: '',
        email: '',
        telephon: '',
        sex: 'k'
      };
    }
  }

}
