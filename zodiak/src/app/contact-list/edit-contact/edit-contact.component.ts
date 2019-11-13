import { Component, OnInit, ViewChild, ViewContainerRef  } from '@angular/core';
import { AppService } from '../../app-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormContactComponent } from '../../shared/form-contact/form-contact.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SpinerComponent } from '../../shared/spiner/spiner.component';
import { StartEndEventComponent } from '../../shared/date/start-end-event/start-end-event.component';
import { RentBrodecastService} from '../../shared/services/rent-brodecast.service';
import { RefreshTableService } from '../../shared/services/refresh-table.service';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
   @ViewChild('formContact') formContact: FormContactComponent;
   @ViewChild('spiner', {read: ViewContainerRef}) spiner: ViewContainerRef;
   rent;
   idRent;
   price = '';
  constructor(
    private appService: AppService,
    private rentBrodecastService: RentBrodecastService,
    private route: ActivatedRoute,
    private rout: Router,
    private toastrService: ToastrService,
    private spinerComponent: SpinerComponent,
    private refreshTable: RefreshTableService
  ) { }
  ngOnInit() {
    this.loadContact();
  }
  setStartEnd(date) {
    this.formContact.setDateEvent(date);
  }
  private loadContact(): void {
    const spiner = this.spinerComponent.show(this.spiner);
    this.idRent = this.route.snapshot.params['id'];

    this.appService.show(this.idRent).subscribe((rent) => {
      this.rent = rent;
      this.price = rent['price'];
      this.rentBrodecastService.setRent(this.rent);
      spiner.destroy();
    },
      (error) => {
        this.rout.navigate(['/', 'clients']);
        this.toastrService.error(error, `nie można wczytać danych  rezewacji o nr: ${this.idRent}`);
        spiner.destroy();
    });
  }
  updateContact(): void {
    const ValuesForm = this.formContact.currentForm();
    ValuesForm.client_id = this.rent.client_id;
    // console.log(ValuesForm);

    this.appService.upData(ValuesForm, this.rent.id ).subscribe(
      (rent) => this.handleUpdated(rent),
      (error) => this.errorUpdate(error)
    );
  }
  private handleUpdated(rent) {
    this.refreshTable.refresh();
    this.alert('success', 'rezerwacja o numerze:  ' +  this.rent.id + ' zotała zaktualizowana');
  }
  private errorUpdate(error) {
    if (error.error.datesTaken) {
      const errors = error.error.datesTaken.map((objError) => {
        let{room, start, end} = objError;
        return `wynajęcie sali nr: ${room}  w terminie  ${start} - ${end} niemożliwe`;
      }).join();
      const alertString = `${errors} musisz zmienić termin lub sale`;
      this.alert('error', alertString);
    } else {
      this.alert('error', error.error.message, `aktualizacja niemożliwa`);
      console.log(error);
    }
  }
  private alert(prop, text, tilte = null): void {
    this.toastrService[prop](text , tilte, {timeOut: 10000});
  }
  currentPrice() {
    this.formContact.setPrice(this.price);

  }
}
