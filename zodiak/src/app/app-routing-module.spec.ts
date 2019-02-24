
// import {Location} from '@angular/common';
// import {TestBed, fakeAsync, tick } from '@angular/core/testing';
// import {RouterTestingModule} from '@angular/router/testing';
// import {Router} from '@angular/router';

// import { ListComponent } from './contact-list/list/list.component';
// import { ContactDetailsComponent } from './contact-list/contact-details/contact-details.component';
// import { EditContactComponent } from './contact-list/edit-contact/edit-contact.component';
// import { PhotoComponent } from './shared/photo/photo.component';
// import { APP_ROUTES } from './app-routing-module';
// import {AppComponent } from './app.component';

// describe('Router', () => {

//   let location: Location;
//   let router: Router;
//   let fixture;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule.withRoutes(APP_ROUTES)],
//       declarations: [
//         ListComponent,
//         ContactDetailsComponent,
//         EditContactComponent,
//         PhotoComponent,
//         AppComponent
//       ]
//     });
//     router = TestBed.get(Router);
//     location = TestBed.get(Location);
//     fixture = TestBed.createComponent(AppComponent);
//     router.initialNavigation();
//   });
//   it('navigate to "" redirects you to /clients', fakeAsync(() => {
//     router.navigate(['']);
//     tick();
//     expect(location.path()).toBe('clients');
//   }));

// });
