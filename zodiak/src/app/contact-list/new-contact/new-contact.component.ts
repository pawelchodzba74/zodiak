import { Component , ViewChild} from '@angular/core';
import { FormContactComponent } from './../form-contact/form-contact.component';
import { ContactListService } from './../contact-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent  {
  @ViewChild('formContact') formContact: FormContactComponent;
  constructor(
    private contactListService: ContactListService ,
    private toastr: ToastrService
  ) { }
  createContact(alias: string): void {
      this.contactListService.addPerson(this.formContact.form.value).subscribe((data) => {
      this.showSuccess('Klient ' + data.alias + '  został dodany do listy kontaktów');
      this.reloadTab();

  },
    (e) => {console.log(e);
      this.toastr.error(e, 'Bład');
    });
  }
  showSuccess(text: string): void {
    this.toastr.success(text);
  }
  reloadTab() {
    this.contactListService.reLoadTab();

  }
  test() {
    return true;
  }
}
