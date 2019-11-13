import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { TokenService } from '../../auth/token.service';
import { LayoutService } from '../../shared/services/layout.service';
import { RefreshTableService } from '../../shared/services/refresh-table.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-essential',
  templateUrl: './log-essential.component.html',
  styleUrls: ['./log-essential.component.css']
})
export class LogEssentialComponent implements OnInit {
@Input() component;
@Input() credential;
@Input() personOnTable;
IDs = {
  name: '',
  password:  ''
};
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private layoutService: LayoutService,
    private refreshTable: RefreshTableService,
    private thisDialog: MatDialog,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    return this.personOnTable ? Object.assign(this.IDs, this.personOnTable) : null;
  }
  get objectToSend() {
    return Object.assign({}, this.credential, this.IDs);
  }
  send() {
     if (!this.personOnTable && this.credential) {
      this.addAdmin();
    } else if (this.personOnTable && this.credential) {

    } else {
      this.loging();
    }
  }
  addAdmin() {
    if (this.credential.confirm === this.IDs.password) {
        this.authService.create({
          // must have laravel default
          name: this.objectToSend.name,
          email: this.objectToSend.email,
          telephon: this.objectToSend.telephon,
          password: this.objectToSend.password,
          // foul if?
          password_confirmation: this.objectToSend.password
          //
        }).subscribe(
          (data) => this.handleSuccesAddAdmin(data),
          (error) => this.handlErrorAddAdmin(error)
        );
    } else {
      this.toastr.error('potwierdzenie hasła jest niezgodne spróbuj ponownie');
      //  console.log('potwierdzenie hasła jest niezgodne');
    }
  }
  handleSuccesAddAdmin(data) {
    this.toastr.success(`${data.user} został dodany`);
    this.refreshTable.refresh();
    this.thisDialog.ngOnDestroy();
  }
  handlErrorAddAdmin(error) {
    if (error.status === 401) {
      this.toastr.warning('musisz ponownie się zalogować');
      this.thisDialog.ngOnDestroy();
      this.router.navigate(['/', 'room']);
      return;
    }
    this.toastr.error(`nie można dodać administratora. Błąd: ${error.status}`);
    this.thisDialog.ngOnDestroy();
    console.log(error);

  }

  loging() {
    this.authService.login(this.IDs).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }
  handleResponse(data) {
    // this.handleResponse(data);
    this.layoutService.possibleAfterLogging();
    this.thisDialog.ngOnDestroy();
    this.router.navigate(['/', 'clients']);
    this.tokenService.handle(data.access_token);

  }
  handleError(error) {
    if (error.status === 401) {
      this.toastr.warning('nieprawidłowy login lub hasło');
      return;
    }
      this.toastr.error(`nie można się zalogować. Błąd: ${error.status}`);
      this.thisDialog.ngOnDestroy();
      console.log(error);
  }







}

