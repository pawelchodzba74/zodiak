import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
 let authService;
 let toastrService;
 let loginComponent;
 let matDialog;

let fixture: ComponentFixture<LoginComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ MaterialModule, FormsModule],
      providers: [
        LoginComponent,
        {provide: AuthService, useClass: AuthServiceMock},
        {provide: ToastrService, useClass: ToastrServiceMock},
        {provide: MatDialog, useClass: MatDialogMock}
      ]
    });
    authService = TestBed.get(AuthService);
    toastrService = TestBed.get(ToastrService);
    loginComponent = TestBed.get(LoginComponent);
    matDialog = TestBed.get(MatDialog);
    fixture = TestBed.createComponent(LoginComponent);

  });
  it('sholud create', () => {
    expect(loginComponent).toBeDefined();
  });
  it('start component then password is false', () => {
    expect(loginComponent.password).toBeFalsy();
  });
  it('start component then login is false', () => {
    expect(loginComponent.login).toBeFalsy();
  });
  it('if reject promise shuld alert toastrService', () => {
    spyOn(toastrService, 'error');
    loginComponent.noLoged();
    expect(toastrService.error).toHaveBeenCalledWith(jasmine.any(String));
  });
  it('if logged in window log to disappear', () => {
    spyOn(matDialog, 'ngOnDestroy');
    loginComponent.loged();
    expect(matDialog.ngOnDestroy).toHaveBeenCalled();
  });
  it('Mthod send called authService', (done) => {
   let spy =  spyOn(authService, 'login').and.returnValue(Promise.resolve(true));
    loginComponent.send();
    spy.calls.mostRecent().returnValue.then(() => {
      expect(authService.login).toHaveBeenCalled();
      done();
    });
  });
});

class ToastrServiceMock {

  error() {}
}
class AuthServiceMock {
  login() {

  }
}
class MatDialogMock {
  ngOnDestroy() {

  }
}
