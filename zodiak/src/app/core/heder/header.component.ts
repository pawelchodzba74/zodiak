import { Component, OnInit } from '@angular/core';
import {ScrollDispatcher} from '@angular/cdk/scrolling';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { map } from 'rxjs/operators';
import { NgZone } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../login/login.component';
import { AuthService } from '../../auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  private readonly SHRINK_TOP_SCROLL_POSITION = 0;
  shrinkToolbar = false;
  viewToolbar = true;
  isLoged = false;
  logName: string;
  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone,
    public dialog: MatDialog,
    private authService: AuthService

  ) { }

  ngOnInit() {
    this.scrollDispatcher.scrolled()
      .pipe(map((event: CdkScrollable) => this.getScrollPosition(event)))
      .subscribe(scrollTop => this.ngZone.run(() => this.shrinkToolbar = scrollTop > this.SHRINK_TOP_SCROLL_POSITION ? true : false));
  }

  getScrollPosition(event) {
    if (event) {
      return event.getElementRef().nativeElement.scrollTop;
    } else {
      return window.scrollY;
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterOpen().subscribe(() => {
      this.viewToolbar = false;

   });
    dialogRef.afterClosed().subscribe(() => {
      this.viewToolbar = true;
      this.isLoged = this.checkLog();
      this.getNameLogin();
   });
  }
  logOut() {
    this.authService.logOut();
    this.isLoged = this.checkLog();
    this.getNameLogin();
  }
  checkLog() {
    return this.authService.userLoged();
  }
  getNameLogin() {
    this.logName =  this.authService.getLogName();
  }
}
