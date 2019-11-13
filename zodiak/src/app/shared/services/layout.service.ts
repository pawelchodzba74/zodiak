import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TokenService } from '../../auth/token.service';


@Injectable({
  providedIn: 'root'
})
export class LayoutService  {
  constructor(
    private tokenService: TokenService
  ) {

}
  logedOrNoneSorce = new Subject<boolean>();
  possibleAfterLogging() {
    this.logedOrNoneSorce.next(this.tokenService.loggedIn());
  }
  impossibleWithoutLogging() {
    this.logedOrNoneSorce.next(this.tokenService.loggedIn());
  }


}
