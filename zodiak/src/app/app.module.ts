import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
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
import { TokenService } from './auth/token.service';
import { LayoutService } from './shared/services/layout.service';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import '@progress/kendo-angular-intl/locales/pl/all';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ClientsPanelModule } from './clients-panel/clients-panel.module';
import { AppService } from './app-service.service';
// import { LayoutModule } from '@progress/kendo-angular-layout';
import { PanelBarModule } from '@progress/kendo-angular-layout';
import { AuthGuard } from './auth/auth.guard';
import { GlobalErrorHandler } from './core/global-error-handler';
import { RentBrodecastService } from './shared/services/rent-brodecast.service';
import { DataSourceTableService } from './shared/services/data-source-table.service';

// import { ScrollViewModule } from '@progress/kendo-angular-scrollview';

// import { AgmCoreModule } from '@agm/core';

// import { BehaviorSubject } from 'rxjs';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token-interceptor';
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
    // AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyCfVuTpUBK6UMvaVSbB2NHO5v3JZcVfkc4'})
    // SchedulerModule


  ],
  providers: [
    // {provide: ErrorHandler, useClass: GlobalErrorHandler},
    SpinerComponent,
    RentBrodecastService,
    DataSourceTableService,
    AuthService,
    TokenService,
    LayoutService,
    AppService,
    AuthGuard,
    {provide: LOCALE_ID, useValue: 'pl'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {






}
