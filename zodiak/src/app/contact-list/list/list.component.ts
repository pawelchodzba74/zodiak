import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AppService } from '../../app-service.service';
import { Person } from '../models/person';
import { withoutKeys } from '../../shared/object-proces/withoutKey.js';
import { addNewProperties } from '../../shared/object-proces/addNewProperties.js';
import { createModelForMaterialTable } from '../../shared/object-proces/create-model-for-material-table.js';
import { DialogDeleteComponent } from '../../shared/dialog-delete/dialog-delete.component';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../auth/token.service';
import { RefreshTableService } from '../../shared/services/refresh-table.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent  implements OnInit {
  @ViewChild('LogOut') LogOut;
  appService;
  model: Person;
  ModelFromRent;
  configLogOut;
  AdditionalModel;
  exceptionsIsObject = [{key: 'user_name', value: ''}];
  constructor (
    public dialog: MatDialog,
    public toastrService: ToastrService,
    private service: AppService,
    private tokenService: TokenService,
    private refreshTable: RefreshTableService,

  ) {
    this.appService =  this.service;

  }
  ngOnInit() {
    this.setModelForMaterialTable();
  }
  setModelForMaterialTable() {
    // this.ModelFromRent = withoutKeys(this.createModel, 'sex', 'photo');
    // this.ModelFromRent  = addNewProperties(this.ModelFromRent,
    //   createModelForMaterialTable(this.additionalModel));
    this.AdditionalModel = createModelForMaterialTable(this.createAdditionalModel);
    this.ModelFromRent = createModelForMaterialTable(this.createModel);
    // console.log(this.AdditionalModel);

  }
  get createAdditionalModel() {
    return {
      edit: {
        action: 'routing',
        path: 'edit',
        label: 'edytuj'
      },
      delete: {
        action: 'callFn',
        label: 'usuń',
        nameMethod: 'delete',
      },
      chengeStatus: {
        action: 'select',
        label: 'status',
        options: [
          {
            nameView: 'pendding',
            value: 'oczekujący'
          },
          {
            nameView: 'isAccept',
            value: 'zatwierdzony'
          },
          {
            nameView: 'isPaid',
            value: 'zapłacony'
          }
        ],
        nameMethod: 'changeStatus'
      }

    };
  }
  get createModel() {

    return {
      id: 'id',
      start: 'start rezewacji',
      end: 'koniec rezerwacji',
      room: 'wynajęte sale',
      client_name: 'klient',
      client_telephon: 'telefon',
      client_email: 'email',
      user_name: 'zmodyfikował',
      description: 'opis',
      price: 'cena'
    };

  }
  // call mthod on "basic table" //////////////////////////////////////////////
  dispatcherMethod(callConfig) {
   this[callConfig.nameMethod](callConfig.row, callConfig.otherArgs);
  }
    // delete //
    private delete(Row): void {
      const dialogRef = this.dialog.open(DialogDeleteComponent, {
        data: Row
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.appService.delete(Row.id).subscribe(
            (deleted) => this.deletedRent(deleted),
            (error) => this.deletedError(error)
          );
        }
      });
    }
    private deletedRent(deleted) {
      this.toastrService.success(`Rezerwacja o numerze ${deleted.id} została usunięta`);
      this.refreshTable.refresh();
    }
    private deletedError(error) {
      this.toastrService.error(`nie można usunąć rezerwacji`);
      console.log(error);

    }
    // chenge status //
    private changeStatus(row, status) {
      row.status = status[0]['value'];
      // add id_admin end  row send row to service
      const bodyRequest = {
        option: status[0],
        rentRow: row
      };
      this.appService.changeStatus(bodyRequest, row['id']).subscribe(
        (data) => this.changedStatus(data),
        (error) => this.errorStatus(error),
      );
    }
    private changedStatus(data) {
     this.refreshTable.refresh();
    }
    private errorStatus(error) {
      this.toastrService.error(`nie można zmienić statusu`);
      console.log(error);
    }
    private logOut() {
      this.LogOut.logOut();
    }
}
