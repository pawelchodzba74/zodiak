import { Component, OnInit, ViewChild, AfterViewInit, ViewContainerRef  } from '@angular/core';
import { AppService } from '../../app-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormContactComponent } from '../../shared/form-contact/form-contact.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SpinerComponent } from '../../shared/spiner/spiner.component';
import { StartEndEventComponent } from '../../shared/date/start-end-event/start-end-event.component';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit, AfterViewInit {
   @ViewChild('formContact') formContact: FormContactComponent;
   @ViewChild('spiner', {read: ViewContainerRef}) spiner: ViewContainerRef;
   Person;
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private rout: Router,
    private toastr: ToastrService,
    private spinerComponent: SpinerComponent
  ) { }
  ngAfterViewInit() {

  }
  ngOnInit() {
    this.loadContact();
  }
  setStartEnd(Date) {
    this.formContact.setDateEvent(Date);

   }

  loadContact(): void {
    const spiner = this.spinerComponent.show(this.spiner);
    const id = this.route.snapshot.params['id'];

    this.appService.getPerson(id).subscribe((person) => {
      this.formContact.buildForm(this.formContact.setValueForm(person));
      this.Person = person;
      this.Person.id  = id;
      spiner.destroy();
   },
      (error) => {
        this.rout.navigate(['/', 'clients']);
        this.toastr.error(error, ' Bład');
        spiner.destroy();
    });
  }
  updateContact(): void {
    const ValuesForm = this.formContact.form.value;
    ValuesForm.id = this.Person.id;
      this.appService.upDataPerson(ValuesForm).subscribe((data) => {
      this.showSuccess('Dane Klienta  ' +  ValuesForm.alias + ' zotały zaktualizowane');
      this.reloadTab();
    },
    (error) => {
      this.toastr.error(error, ' Bład');
     }
  );

  }
  reloadTab(): void {
    this.appService.reLoadTab();
 }
  showSuccess(text): void {
    this.toastr.success(text);
  }

}
