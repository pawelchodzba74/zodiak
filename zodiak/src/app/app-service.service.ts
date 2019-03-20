  import { Injectable } from '@angular/core';
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
  export class AppService {

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

    addPerson(person): Observable<any> {
      const phpUrl = 'http://localhost/contact-new/back-end/create.php';
      // const prefixRoute = (this.detectBrowser() === 'chrome') ? '../' : '' ;
      // const phpUrl = prefixRoute + 'back-end/create.php';
      return  this.http.post(phpUrl, person)
      .pipe(
        catchError(this.handleError)
      );
    }
    read() {
      const phpUrl = 'http://localhost/contact-new/back-end/read.php';
      // const prefixRoute = (this.detectBrowser() === 'chrome') ? '../' : '' ;
      // const phpUrl = prefixRoute + 'back-end/read.php';
      return this.http.get(phpUrl)
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
    // tslint:disable-next-line:max-line-length
    upDataPerson(person): Observable<object> {
  /////////////////////////////////////////////////////// set data time //////////////////////
      // person.dateDo = person.dateDo.setHours(person.hoursDo.split(':')[0], person.hoursDo.split(':')[1]) ;
      ///////////////////////////////////////////////////////////////////////////
      const phpUrl = 'http://localhost/contact-new/back-end/update.php';
      // const prefixRoute = (this.detectBrowser() === 'chrome') ? '../../../' : '' ;
      // const phpUrl = prefixRoute + 'back-end/update.php';
      return this.http.post(phpUrl, person, this.httpOptions)
        .pipe(
          catchError(this.handleError)
        );
  }
    deletePerson(person): Observable<object> {
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
    ///////////////////////////////////////////// zodiak service///////////////

    getEvents(nrRoom: number) {//this.fabrickMock();
      return new Promise((resolve, reject) => {
        // let EVENTS = this.fabrickMock();
        let EVENTS = this.mockEvents();
       let eResult = [];
        eResult = EVENTS.filter((e) => +e['nrRoom'] === nrRoom);
         eResult.length ? resolve(eResult) : reject();
      });
    }

    fabrickMock() {

    const date = new Date();
    const title = 'treć xxx ';
    const isAllDay = false;
    const nrRoom = [1,2,3,4,6,6];

    const maineObj = [];
    const one = {
      start: '',
      end: '',
      title: '',
      isAllDay: '',
      nrRoom: ''
    };

    for (let i = 0; i <= 10; i++) {
      maineObj.push(one);
    }
    console.log(maineObj);
  return maineObj;

    }


    mockEvents() { //this.fabrickMock();

        return[
        { id: 1,
      start: new Date('2019-03-19T09:00:00'),
      end: new Date('2019-03-12T19:30:00'),
      title: '11 NOVA - pisać pierwsze nazwę firmy wynajmującej będzie wtety dobrze widać w tygodniowym ujęciu',
      isAllDay: true,
      nrRoom: '1'
      },
      {
      id: 2,
      start: new Date('2019-03-19T11:00:00'),
      end: new Date('2019-03-19T12:30:00'),
      title: '2222222222222',
      isAllDay: false,
      nrRoom: '1'
      },
      {
      id: 3,
      start: new Date('2019-03-19T09:00:00'),
      end: new Date('2019-03-19T11:30:00'),
      title: '333333333333333333333',
      isAllDay: false,
      nrRoom: '1'
      },
      { id: 1,
        start: new Date('2019-03-19T09:00:00'),
        end: new Date('2019-03-19T11:30:00'),
        title: '11 NOVA - pisać pierwsze nazwę firmy wynajmującej będzie wtety dobrze widać w tygodniowym ujęciu',
        isAllDay: true,
        nrRoom: '2'
        },
        {
        id: 2,
        start: new Date('2019-03-19T11:00:00'),
        end: new Date('2019-03-19T12:30:00'),
        title: '2222222222222',
        isAllDay: false,
        nrRoom: '2'
        },
        {
        id: 3,
        start: new Date('2019-03-19T09:00:00'),
        end: new Date('2019-03-19T11:30:00'),
        title: '333333333333333333333',
        isAllDay: false,
        nrRoom: '2'
        },
        { id: 1,
          start: new Date('2019-03-19T09:00:00'),
          end: new Date('2019-03-19T11:30:00'),
          title: '11 NOVA - pisać pierwsze nazwę firmy wynajmującej będzie wtety dobrze widać w tygodniowym ujęciu',
          isAllDay: true,
          nrRoom: '3'
          },
          {
          id: 2,
          start: new Date('2019-03-19T11:00:00'),
          end: new Date('2019-03-19T12:30:00'),
          title: '2222222222222',
          isAllDay: false,
          nrRoom: '3'
          },
          {
          id: 3,
          start: new Date('2019-03-19T09:00:00'),
          end: new Date('2019-03-19T11:30:00'),
          title: '333333333333333333333',
          isAllDay: false,
          nrRoom: '3'
          },
          { id: 1,
            start: new Date('2019-03-19T09:00:00'),
            end: new Date('2019-03-19T11:30:00'),
            title: '11 NOVA - pisać pierwsze nazwę firmy wynajmującej będzie wtety dobrze widać w tygodniowym ujęciu',
            isAllDay: true,
            nrRoom: '4'
            },
            {
            id: 2,
            start: new Date('2019-03-19T11:00:00'),
            end: new Date('2019-03-19T12:30:00'),
            title: '2222222222222',
            isAllDay: false,
            nrRoom: '4'
            },
            {
            id: 3,
            start: new Date('2019-03-19T09:00:00'),
            end: new Date('2019-03-19T11:30:00'),
            title: '333333333333333333333',
            isAllDay: false,
            nrRoom: '4'
            },
            { id: 1,
              start: new Date('2019-03-19T09:00:00'),
              end: new Date('2019-03-19T11:30:00'),
              title: '11 NOVA - pisać pierwsze nazwę firmy wynajmującej będzie wtety dobrze widać w tygodniowym ujęciu',
              isAllDay: true,
              nrRoom: '5'
              },
              {
              id: 2,
              start: new Date('2019-03-19T11:00:00'),
              end: new Date('2019-03-19T12:30:00'),
              title: '2222222222222',
              isAllDay: false,
              nrRoom: '5'
              },
              {
              id: 3,
              start: new Date('2019-03-19T09:00:00'),
              end: new Date('2019-03-19T11:30:00'),
              title: '333333333333333333333',
              isAllDay: false,
              nrRoom: '5'
              },
              { id: 1,
                start: new Date('2019-03-19T09:00:00'),
                end: new Date('2019-03-19T11:30:00'),
                title: '11 NOVA - pisać pierwsze nazwę firmy wynajmującej będzie wtety dobrze widać w tygodniowym ujęciu',
                isAllDay: true,
                nrRoom: '6'
                },
                {
                id: 2,
                start: new Date('2019-03-19T11:00:00'),
                end: new Date('2019-03-19T12:30:00'),
                title: '2222222222222',
                isAllDay: false,
                nrRoom: '6'
                },
                {
                id: 3,
                start: new Date('2019-03-19T09:00:00'),
                end: new Date('2019-03-19T11:30:00'),
                title: '333333333333333333333',
                isAllDay: false,
                nrRoom: '6'
                },


      ] ;
    }
  }
