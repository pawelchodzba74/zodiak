import { Injectable } from '@angular/core';
import { Person } from './models/person';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs';
import { retry } from 'rxjs/internal/operators/retry';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  ListContext;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8'
    })
  };
  constructor(
    private http: HttpClient,
    private divaceDetector: DeviceDetectorService
    ) {}

  addPerson(person: Person): Observable<any> {
    const phpUrl = 'http://localhost/contact-new/back-end/create.php';
    // const prefixRoute = (this.detectBrowser() === 'chrome') ? '../' : '' ;
    // const phpUrl = prefixRoute + 'back-end/create.php';
    return  this.http.post(phpUrl, person)
    .pipe(
      catchError(this.handleError)
    );
  }
  read(): Observable<Person[]> {
    const phpUrl = 'http://localhost/contact-new/back-end/read.php';
    // const prefixRoute = (this.detectBrowser() === 'chrome') ? '../' : '' ;
    // const phpUrl = prefixRoute + 'back-end/read.php';
    return this.http.get<Person[]>(phpUrl)
      .pipe(
        retry(3),
        catchError(this.handleError));
  }
  getPerson(id: string): Observable<any> {
    const phpUrl = 'http://localhost/contact-new/back-end/read_one.php?id=' + id;
    // const prefixRoute = (this.detectBrowser() === 'chrome') ? '../../../' : '' ;
    // const phpUrl = prefixRoute + 'back-end/read_one.php?id=' + id;
    return this.http.get(phpUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  upDataPerson(person: Person): Observable<object> {
    const phpUrl = 'http://localhost/contact-new/back-end/update.php';
    // const prefixRoute = (this.detectBrowser() === 'chrome') ? '../../../' : '' ;
    // const phpUrl = prefixRoute + 'back-end/update.php';
    return this.http.post(phpUrl, person, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
}
  deletePerson(person: Person): Observable<object> {
    const phpUrl = 'http://localhost/contact-new/back-end/delete.php';
    // const prefixRoute = (this.detectBrowser() === 'chrome') ? '../' : '' ;
    // const phpUrl = prefixRoute + 'back-end/delete.php';
    return this.http.post(phpUrl, {id: person.id}, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
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
    return throwError(
      'NIe można wczytać danych skontaktuj się z administratorem');
  }
  fowardRefTab(ListContext): void {
    this.ListContext = ListContext;
  }
  reLoadTab(): void {
    this.ListContext.refreshPage();
  }
  detectBrowser(): string  {
    return this.divaceDetector.browser;
  }
}
