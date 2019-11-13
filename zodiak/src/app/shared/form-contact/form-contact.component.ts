import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';
import { StartEndEventComponent } from '../date/start-end-event/start-end-event.component';
// import { DateEventValid } from '../../shared/validators/date-event-valid';
import { CompareDateStartEndDirective } from '../../shared/validators/compare-date-start-end.directive';
import { StartEndDateProces } from './start-end-date-proces.js';
import { RentBrodecastService} from '../../shared/services/rent-brodecast.service';
import { Subscription } from 'rxjs';
import { ZonedDate } from '@progress/kendo-date-math';
import '@progress/kendo-date-math/tz/Europe/Warsaw';
// import { EventEmitter } from 'events';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css'],
 })
export class FormContactComponent implements OnInit, OnDestroy {


  @Input() data; // onclick schema
  @Output() validForm: EventEmitter<any> =  new EventEmitter();
  invoice;
  roomList: string[] = ['1', '2', '3', '4', '5', '6'];
  additionalControls;
  form: FormGroup;
  // controls = [
  //   {
  //   name: 'start',
  //   value: ''
  //   },
  //   {
  //   name: 'end',
  //   value: ''
  //   }
  // ];
  subscription: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private rentBrodecastService: RentBrodecastService,
  ) {}
  ngOnInit() {
    this.buildForm(this.setValuesForm());
    return !this.data ?  this.isEditRouting() : null;
  }
  isEditRouting() {
    this.subscription = this.rentBrodecastService.Rent$.subscribe((rent) => {
      this.form.setValue(this.setValuesForm(rent));
      this.setDateEvent({
        start : rent.start,
        end: rent.end
      });
      this.setTelephonValid();
    });
  }
  // maine sequence///////////////////////////////////////////////////////////////////////////////////////
  buildForm(rent): void {
    this.form = this.formBuilder.group({
      name: [rent.client.name , { validators: [Validators.required, Validators.maxLength(255) ]}],
      email: [rent.client.email, { validators: [ Validators.required, Validators.maxLength(32), Validators.email]}],
      telephon: [rent.client.telephon, { validators: [ Validators.required, Validators.maxLength(16)]}],
      room: [rent.room, Validators.required],
      description: [rent.description, Validators.maxLength(255)],

      factory: [rent.client.factory],
      city: [rent.client.city],
      street: [rent.client.street],
      nip: [rent.client.nip],
      service_name: [rent.client.service_name]
    });
    // this.additionalControls = new StartEndDateProces(this.form);
    // this.additionalControls.addControls(this.controls);
    // console.log(rent.start);

    this.form.addControl('start', new FormControl());
    this.form.addControl('end', new FormControl());
    this.form.get('start').setValidators([Validators.required]);
    this.form.get('end').setValidators([Validators.required]);

    this.form.addControl('price', new FormControl());
    this.form.get('price').setValidators([Validators.pattern('[0-9]{0,5}')]);

    this.form.updateValueAndValidity();
  }
  setValuesForm(rent = false) {
    if (!rent) {
      return {
        client: {
          name: '',
          email: '',
          telephon: '',
          factory: '',
          city: '',
          street: '',
          nip: '',
          service_name: ''

        },
        room: this.data ? this.data.room : [],
        start: '',
        end: '',
        description: '',
        price: 0

      };
    } else { // console.log(rent.client);
      return {
            name: rent['client'].name,
            email: rent['client'].email,
            telephon: rent['client'].telephon,
            room: rent['room'],
            start: '',
            end: '',
            description: rent['description'],
            price: rent['price'],

            factory: rent['client'].factory,
            city: rent['client'].city,
            street: rent['client'].street,
            nip: rent['client'].nip,
            service_name: rent['client'].service_name
          };
    }
    // if (this.data) {
    //   return Object.assign(rent, this.data);
    // }
  }
  setPrice(price) {
    this.form.get('price').setValue(price);
  }
  setDateEvent(startEndDate): void { // emit
    // console.log(startEndDate);
    const start = this.dateRequest(startEndDate.start) ;
    const end = this.dateRequest(startEndDate.end);
// if (startEndDate.start instanceof Date && startEndDate.end instanceof Date) {
// console.log(start);
// console.log(end);

//   start = this.corectDateZone(startEndDate.start);
//   end = this.corectDateZone(startEndDate.end);

// } else {
//   start = this.corectDateZone(this.objDate(startEndDate.start));
//   end = this.corectDateZone(this.objDate(startEndDate.end));
// }
// console.log(this.objDate(start));
// const en = this.objDate(end);
// end = ZonedDate.fromUTCDate(en, 'Europe/Warsaw').cachedUTCDate;
// console.log(end);


    // tslint:disable-next-line:max-line-length
    // const start = startEndDate.start instanceof Date ? this.corectDateZone(startEndDate.start) : this.corectDateZone(this.objDate(startEndDate.start));
    // tslint:disable-next-line:max-line-length
    // const end = startEndDate.end instanceof Date ?  this.corectDateZone(startEndDate.end) : this.corectDateZone(this.objDate(startEndDate.end));
    this.form.get('start').setValue(start);
    this.form.get('end').setValue(end);
    // console.log(this.form.get('start'));
    // console.log(this.form.get('end'));

    // this.additionalControls.setValuesControls(startEndDate);
    this.form.updateValueAndValidity();
  }
  setTelephonValid() {
    const phon = this.form.get('telephon');
    const pattern = '[0-9]{9,9}';
    phon.setValidators([ Validators.required, Validators.pattern(pattern)]);
    phon.markAsTouched();
    phon.markAsDirty();
    const regExp = new RegExp(pattern);
    if (!regExp.test(phon.value)) {
      phon.setErrors({'incorrect': true});
    }
  }
  objDate(dateStr) {  // console.log(dateStr);
    return new Date(dateStr);
  }
  corectDateZone(objDate) {
    if (objDate) {
      const date = this.objDate(objDate);
      const diffMinutes = Math.abs(this.objDate(objDate).getTimezoneOffset());
      return date.setMinutes(date.getMinutes() + diffMinutes);
    }
  }
  currentForm() {
    this.form.updateValueAndValidity();
    // console.log(this.form.value);
    return this.form.value;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  dateRequest(d) { //console.log(d.getMonth());
    if (d instanceof Date) {
      // tslint:disable-next-line:max-line-length
         return `${d.getFullYear()}-${this.addZero(d.getMonth() + 1)}-${this.addZero(d.getDate())} ${this.addZero(d.getHours())}:${this.addZero(d.getMinutes())}:${this.addZero(d.getSeconds())}`;
    }
    return  d;
  }
  addZero(d) {
    return d < 10 ? '0' + d : d;
  }

  // set properties from input 'this.data'  /////////////////
  // setInputProperties(Value) {
  //   console.log(this.data);
  //   console.log(Value);

  //   return this.data ? this.assignProperties(Value) : Value;
  // }
  // assignProperties(Value) {
  //   return Object.assign(Value, this.data);
  // }
  switchInvoice() {
    this.invoice = !this.invoice;
    this.settingsInvoice(this.invoice);
    this.form.updateValueAndValidity();
    // console.log(this.form.status);
    this.validForm.emit(this.form.invalid);

   console.log(this.form.get('factory').validator);


  }
  settingsInvoice(invoice) {
    invoice ? this.setInvoice() : this.resetInvoice();
  }
  private setInvoice() {
    this.form.controls['factory'].setValidators([Validators.minLength(1), Validators.maxLength(30)]);
    // console.log(this.form.get('factory').invalid);
    // this.form.get('factory').setValidators([Validators.required]);
    this.form.get('city').setValidators([Validators.required]);
    this.form.get('street').setValidators([Validators.required]);
    this.form.get('nip').setValidators([Validators.required]);
    this.form.get('service_name').setValidators([Validators.required]);
  }
  private resetInvoice() {
    this.form.get('factory').clearValidators();
    this.form.get('city').clearValidators();
    this.form.get('street').clearValidators();
    this.form.get('nip').clearValidators();
    this.form.get('service_name').clearValidators();
  }
}
