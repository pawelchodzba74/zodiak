import { Component, OnInit,  ViewChild, ViewContainerRef } from '@angular/core';
import { ContactListService } from './../contact-list.service';
import { MatDialog, MatTableDataSource, MatTable, MatPaginator, MatSort, MatIconModule} from '@angular/material';
import { NewContactComponent } from './../new-contact/new-contact.component';
import { DialogDeleteComponent } from '../../shared/dialog-delete/dialog-delete.component';
import { ToastrService } from 'ngx-toastr';
import { Person } from '../models/person';
import { SpinerComponent } from '../../shared/spiner/spiner.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

displayedColumns: string[] = ['Nazwa', 'Sala', 'Data', 'Email', 'Telephon', 'Description', 'Admin', 'details', 'edit', 'delete'];
dataSource: MatTableDataSource<Person>;
error: string;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
@ViewChild('spiner', {read: ViewContainerRef}) spiner: ViewContainerRef;

constructor(
  private contactListService: ContactListService,
  private dialog: MatDialog,
  private toastr: ToastrService,
  private spinerComponent: SpinerComponent
) { }
  ngOnInit() {
    this.giveItToServiceContext();
    this.createDataSorce();
  }
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
  }
  createDataSorce(): void {
    const spiner = this.spinerComponent.show(this.spiner);
    this.contactListService.read().subscribe((Persons) => {
      this.dataSource = new MatTableDataSource(Persons['records']);
      this.dataSource.sort = this.sort;
      this.createPaginator();
      spiner.destroy();
    },
      (error) => {
        this.error = error;
        spiner.destroy();
       }
    );
  }
  createPaginator(): MatPaginator {
    this.dataSource.paginator = this.paginator;
    return this.paginator;
  }
  refreshPage(): void {
    this.createDataSorce();
    this.createPaginator().firstPage();
  }
  giveItToServiceContext(): void {
    this.contactListService.fowardRefTab(this);
  }
  showSuccess(text): void {
     this.toastr.success(text);
  }
  delete(Row): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: {alias: Row.alias}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactListService.deletePerson(Row).subscribe((data) => {
          this.showSuccess('client ' + Row.alias + '  został usunięty z listy kontaktów');
          this.refreshPage();
        },
          (error) => {
            this.toastr.error(error, ' Bład');
          }
        );
      }
    });
  }
  openNewContactModal(): void {
     const dialogRef = this.dialog.open(NewContactComponent);
  }

}
