import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  logedOrNoneSorce = new Subject<boolean>();
  possibleAfterLogging() {
    this.logedOrNoneSorce.next(true);
  }
  impossibleWithoutLogging() {
    this.logedOrNoneSorce.next(false);
  }
}
