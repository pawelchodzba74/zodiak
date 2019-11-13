import { Component, Input, ViewChild } from '@angular/core';
import { AuthService} from '../../auth/auth.service';
// import { Person } from '../../shared/models/person';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { withoutKeys } from '../../shared/object-proces/withoutKey.js';
import { addNewProperties } from '../../shared/object-proces/addNewProperties.js';
import { createModelForMaterialTable } from '../../shared/object-proces/create-model-for-material-table.js';
import { LayoutService } from '../../shared/services/layout.service';
import { MatDialog } from '@angular/material';
import { EditAdminComponent } from '../edit-admin/edit-admin.component';
import { AddAdminComponent } from '../add-admin/add-admin.component';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDeleteComponent } from '../../shared/dialog-delete/dialog-delete.component';
// import { TableBasicComponent } from '../../shared/table-basic/table-basic.component';
@Component({

  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.css'],
})
export class ShowAdminComponent implements OnInit {
  authService;
  ModelFromPerson;
  configLogOut;
  @ViewChild('LogOut') LogOut;
  constructor(
    private authServ: AuthService,
    private layoutService: LayoutService,
    public dialog: MatDialog,

    // public Table: TableBasicComponent

  ) {
    this.authService = this.authServ;
   }
  ngOnInit() {
    this.setModelForMaterialTable();


   }

  setModelForMaterialTable() {
    this.ModelFromPerson = createModelForMaterialTable(this.createModel);

  }
  get createModel() {
    return {
      id: 'id',
      name: 'Nazwa',
      email: 'email',
      telephon: 'telefon',
      };
  }

  newAdmin() {
    const winNewAdmin = this.openDialog(EditAdminComponent);
     }
// call mthod on "basic table" //////////////////////////////////////////////
  dispatcherMethod(callConfig) {
  this[callConfig.nameMethod](callConfig.Properties);
  }
  // edit(arg) {console.log('editttttttttttttt');

  //   this.openDialog(EditAdminComponent, withoutKeys(arg, 'edit', 'delete'));
  //   }
  openDialog(component, person = false) {
    return this.dialog.open(component, { data: { person: person }});
    // dialogRef.afterOpen().subscribe(() => {
    // });

  }
  delete(Row): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      // data: {alias: Row.alias}
    });
    dialogRef.afterClosed().subscribe(result => {
      // if (result) {this.authService.delete(Row);
      if (result) {

        // this.authService.delete(Row).subscribe((data) => {
        // }
        // );
      }
    });
  }
  logOut() {
    this.LogOut.logOut();
  }
}
