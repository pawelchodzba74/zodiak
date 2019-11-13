import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  confirm;
  confirmFile;
  credential = {
    email: '',
    telephon: '',
    confirm: '',
    };
  personOnTable;
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.personOnTable = this.data.person;
    this.confirmFile = !this.data.person;
    this.data.person ? this.showEditCredential() : null;
  }
  showEditCredential() {
    Object.assign(this.credential, this.data.person);
  }

}
