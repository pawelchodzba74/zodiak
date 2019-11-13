import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './contact-list/list/list.component';
import { Route } from '@angular/router';
import { ContactDetailsComponent } from './contact-list/contact-details/contact-details.component';
import { EditContactComponent } from './contact-list/edit-contact/edit-contact.component';
import { PhotoComponent } from './shared/photo/photo.component';
import { WinMaineComponent } from './clients-panel/win-maine/win-maine.component';
import { ShowAdminComponent } from './login/show-admin/show-admin.component';
import { AddAdminComponent } from './login/add-admin/add-admin.component';
import { EditAdminComponent } from './login/edit-admin/edit-admin.component';
import { RoomComponent } from './clients-panel/room/room.component';
import { AuthGuard } from './auth/auth.guard';
import { ErrorComponent } from './core/error/error.component';

export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: 'room', pathMatch: 'full' },
  { path: 'clients' , component: <any>ListComponent, children: [
      { path: 'details/:id', component: <any>ContactDetailsComponent},
      { path: 'edit/:id', component: <any>EditContactComponent},
  ]}, // canActivate: [AuthGuard]},
  {path: 'room', component: <any>WinMaineComponent },
  {path: 'admins', component: <any>ShowAdminComponent, children: [
    {path: 'edit/:id', component: <any> EditAdminComponent}
  ] // canActivate: [AuthGuard]
  },

  // {path: 'error', component: <any>ErrorComponent },


  // { path: 'clients/photo/:id', component: <any>PhotoComponent },


];
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
