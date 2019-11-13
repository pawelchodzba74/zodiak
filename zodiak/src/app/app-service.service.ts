  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs/Observable';
  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  // import { DeviceDetectorService } from 'ngx-device-detector';
  import { HttpResponse } from '@angular/common/http';
  import { catchError } from 'rxjs/internal/operators/catchError';
  import { throwError } from 'rxjs';
  import { retry } from 'rxjs/internal/operators/retry';
  // import { ArrayType } from '@angular/compiler/src/output/output_ast';
  import { TokenService } from '../app/auth/token.service';
  // import { DatePipe } from '@angular/common';
  // import { formatDate } from '@angular/common';

  @Injectable({
    providedIn: 'root'
  })
  export class AppService {
    constructor(
    private http: HttpClient,
    // private divaceDetector: DeviceDetectorService,
    private tokenService: TokenService
    ) {}
    url = 'http://localhost:8000/api/rent/';
      // const prefixRoute = (this.detectBrowser() === 'chrome') ? '../../../' : '' ;

    create(rent) {
      // !! must be better method//////////
      rent.start = this.dateRequest(rent.start);
      rent.end = this.dateRequest(rent.end);
      return this.http.post(this.url, rent);
    }
    read() {
      return this.http.get(this.url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
    }
    show(id: string) {
      return this.http.get(this.url + id)
        .pipe(
          retry(3),
          catchError(this.handleError)
      );
    }
    upData(rent, id): Observable<object> {
      rent.start = this.dateRequest(rent.start);
      rent.end = this.dateRequest(rent.end);
      return this.http.put(this.url + id, rent)
        .pipe(
          retry(3),
          catchError(this.handleError)
      );
    }
    delete(id) {
      return this.http.delete(this.url  + id)
        .pipe(
          retry(3),
          catchError(this.handleError)
      );
    }
    eventsFromClients(room) {
      return this.http.get(this.url + 'event/' + room);
    }
    changeStatus(status, id) {
      return this.http.put(this.url + 'status/' + id, status);
    }


    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(error);
    }

    // detectBrowser(): string  {
    //   return this.divaceDetector.browser;
    // }
    //////////////////////////////////////// date ////////////////////////////////////////////
    private dateRequest(d) {
      if (d instanceof Date) {
        // tslint:disable-next-line:max-line-length
           return `${d.getFullYear()}-${this.addZero(d.getUTCMonth())}-${this.addZero(d.getDate())} ${this.addZero(d.getHours())}:${this.addZero(d.getMinutes())}:${this.addZero(d.getSeconds())}`;
      }
      return  d;

    }
    private addZero(d) {
      return d < 10 ? '0' + d : d;
    }
  }
