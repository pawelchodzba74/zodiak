import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentBrodecastService {
Rent$ = new Subject <any> ();
  constructor() { }
  setRent(rent) {
    this.Rent$.next(rent);
  }
}
