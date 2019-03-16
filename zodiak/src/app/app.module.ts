import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactListModule } from './contact-list/contact-list.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { CoreModule } from '../app/core/core.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { ScrollDispatchModule} from '@angular/cdk/scrolling';
import { SpinerComponent } from './shared/spiner/spiner.component';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth/auth.service';
import { LayoutService } from './shared/services/layout.service';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import '@progress/kendo-angular-intl/locales/pl/all';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ClientsPanelModule } from './clients-panel/clients-panel.module';
import { AppService } from './app-service.service';
// import { LayoutModule } from '@progress/kendo-angular-layout';
import { PanelBarModule } from '@progress/kendo-angular-layout';

// import { BehaviorSubject } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ContactListModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ScrollDispatchModule,
    LoginModule,
    DeviceDetectorModule.forRoot(),
    AmazingTimePickerModule,
    DateInputsModule,
    LabelModule,
    ClientsPanelModule,
    PanelBarModule
    // SchedulerModule


  ],
  providers: [
    SpinerComponent,
    AuthService,
    LayoutService,
    AppService,
    {provide: LOCALE_ID, useValue: 'pl'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {






}
