import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Room } from '../clients-panel/models/Room';
import { Observable } from 'rxjs/internal/Observable';
import { load } from '@telerik/kendo-intl';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  objectRoom$ = new Subject<Room>();
 // from build --prod
 roomsUrl = '../assets/rooms-obj.json';
  // roomsUrl = '../../assets/rooms-obj.json';
  constructor(private http: HttpClient) { }

  brodecastRoom(nrRoom: string) {
    this.getROOMS().subscribe((rooms) => {
      this.objectRoom$.next(this.searchRoom(rooms, nrRoom));
    });

  }
  getROOMS(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl);
  }
  private searchRoom(rooms , nrRoom: string): Room {
    return rooms.filter((room) => room['nr'] === nrRoom)[0];
  }
  addReservations(Values) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {console.log(Values);
        resolve('save new reservation');
      }, 100);
    });


  }
}
