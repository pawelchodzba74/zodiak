import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string;
  login: string;
  constructor(
    private authService: AuthService,
    private thisDialog: MatDialog,
    private toastrService: ToastrService
  ) {}

  send() {
    this.authService.login(this.login, this.password)
      .then(this.loged.bind(this), this.noLoged.bind(this));
  }
  loged() {
    this.thisDialog.ngOnDestroy();
  }
  noLoged() {
    this.toastrService.error('nieprawidłowy login lub hasło');
    }

}
