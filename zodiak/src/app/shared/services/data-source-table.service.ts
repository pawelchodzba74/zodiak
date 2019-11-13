import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceTableService {

  constructor() { }
  // dataSource = new Subject<any>();
  data;
  setDataSource(data) {
    this.data = data;
  }
  get dataSource() {
    return this.data;
  }
  getRoomProperties(room, properties) {
    return this.withRoom(room).map((obj) => {
      let O = {};
      properties.forEach(key => {
       O[key] = obj[key];
     });
     return O;
    });
  }
  private withRoom (room) {
   return this.dataSource.filter(rent =>  rent.room.includes(room));
 }
}
