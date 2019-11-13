import { Component, OnInit,  ViewChild, ViewContainerRef, Input, Output,  EventEmitter } from '@angular/core';
import { AppService } from '../../app-service.service';
import { MatDialog, MatTableDataSource, MatTable, MatPaginator, MatSort, MatIconModule} from '@angular/material';
import { DialogDeleteComponent } from '../../shared/dialog-delete/dialog-delete.component';
import { ToastrService } from 'ngx-toastr';
import { SpinerComponent } from '../../shared/spiner/spiner.component';
import { AuthService } from '../../auth/auth.service';
import { LayoutService } from '../../shared/services/layout.service';
import { Router } from '@angular/router';
import { RequireKeys } from '../validators/reqire-key';
import { log } from 'util';
import { withoutKeys } from '../../shared/object-proces/withoutKey.js';
import { MatchModelOnSorceBd } from './match-model-on-source-db.js';
import { RefreshTableService } from '../../shared/services/refresh-table.service';
import { DataSourceTableService } from '../../shared/services/data-source-table.service';
import { DataSource } from '@angular/cdk/collections';
import { ObjectUnsubscribedError } from 'rxjs/internal/util/ObjectUnsubscribedError';

// import { $ } from 'protr actor';
@Component({
  selector: 'app-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.css'],
  // providers: [RefreshTableService]
})
export class TableBasicComponent implements OnInit {
// displayedColumns: string[] = ['alias', 'first_name', 'last_name', 'email', 'telephon', 'sex', 'photo', 'details', 'edit', 'delete'];

displayedColumns: string[];
dataSource: MatTableDataSource<any>;
error: string;
reversModelMaterial;
ObjectOwnerObject;
MatchModelTableBD;
MatchAdditionalModel;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
@ViewChild('spiner', {read: ViewContainerRef}) spiner: ViewContainerRef;
@Input() service;
@Input() ModelMaterialTable;
@Input() ModelTableAdditional;
@Input() exceptionsIsObject;
// @Input() CalledMethod;
@Output()calledMethod: EventEmitter<any> =  new EventEmitter();

constructor(
  private appService: AppService,
  private dialog: MatDialog,
  private toastr: ToastrService,
  private spinerComponent: SpinerComponent,
  private layoutService: LayoutService,
  private authService: AuthService,
  private route: Router,
  private requireKeys: RequireKeys,
  private refreshTableService: RefreshTableService,
  private dataSourceTableService: DataSourceTableService


) { }
  ngOnInit() {
    this.refreshTableService.setContext(this);
    this.MatchModelTableBD = new MatchModelOnSorceBd(this.ModelMaterialTable);
    if (this.ModelTableAdditional) {
     this.MatchModelTableBD.modelWithAdditional(this.ModelTableAdditional);
    }
    this.displayedColumns = this.MatchModelTableBD.displayedColumns;
    this.MatchModelTableBD.setExceptions(this.exceptionsIsObject);
    this.requireKeys.checkInObj(['read'], this.service);

    // this.giveItToServiceContext();
    this.createDataSorce();
  }
  private createDataSorce(): void {
    this.spinerComponent.show(this.spiner);
    this.service.read().subscribe(
      (Data) => this.handleResponse(Data),
      (Error) => this.handleError(Error)
    );
  }
  private handleResponse(Data) {
    const ObjectReady = this.MatchModelTableBD.oneObjFromDbIsModelTable(Data, this.ModelTableAdditional);
    this.dataSource = new MatTableDataSource(ObjectReady); /// row?
    this.dataSourceTableService.setDataSource(this.dataSource.data);
    this.dataSource.sort = this.sort;
    this.createPaginator();
    this.spiner.remove();
  }
  private handleError(Error) {
    this.error = `Nie  można wczytać danych  `;
    if (Error.status === 401) {
      this.onCall('logOut');
    }
    console.log(Error);
    this.spiner.remove();
  }
  private applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  private createPaginator(): MatPaginator {
    this.dataSource.paginator = this.paginator;
    return this.paginator;
  }
  public refreshPage(): void {
      this.createDataSorce();
      // this.createPaginator().firstPage();
    }
    // giveItToServiceContext(): void {
    //   this.refreshTableService.setContext(this);
    // }
    // showSuccess(text): void {
    //   this.toastr.success(text);
    // }

// invokes method on additional columns/////////////////////////////////
  private onCall(nameMethod, row = null, ...otherArgs) {

    this.calledMethod.emit({
      nameMethod: nameMethod,
      row: row,
      otherArgs: otherArgs
      });


  }








}
