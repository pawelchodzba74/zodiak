import { Injectable } from '@angular/core';
import { TableBasicComponent } from '../table-basic/table-basic.component';

@Injectable({
  providedIn: 'root'
})
export  class RefreshTableService {
  constructor(
    // private table: TableBasicComponent
  ){}
  table: TableBasicComponent;
  refresh() {
    this.table.refreshPage();
    // this.ContextTable.refreshPage();
  }
  setContext(TableComponent) {
    this.table = TableComponent;
  }
}
