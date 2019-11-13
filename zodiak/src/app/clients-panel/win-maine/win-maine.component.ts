import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../login/login.component';
import { AuthService } from '../../auth/auth.service';
import { LayoutService } from '../../shared/services/layout.service';
import { TokenService } from '../../auth/token.service';
// import { SkyComponent } from '../sky/sky.component';

// import { PanelBarComponent } from '../panel-bar/panel-bar.component';
// import { ScrollViewComponent } from '../scroll-view/scroll-view.component';
@Component({
  selector: 'app-win-maine',
  templateUrl: './win-maine.component.html',
  styleUrls: ['./win-maine.component.css']
})
export class WinMaineComponent implements OnInit {
  isLoged = false;
  configLogOut;
  constructor(
    public dialog: MatDialog,
    public layoutService: LayoutService,
    public authService: AuthService,
    public tokenService: TokenService
  )  { }
  ngOnInit() {
    this.setIsLogedFlag();
   }

  private openDialog() {
    this.dialog.open(LoginComponent);
  }
  private setIsLogedFlag() {
    this.isLoged = this.tokenService.loggedIn();
    this.layoutService.logedOrNoneSorce.subscribe(flagLog => this.isLoged = flagLog);
  }
  Out() {
    // this.authService.logOut();
    // console.log(this.layoutService.impossibleWithoutLogging());
    // this.setLoginFlag();
  }
  // set config logOut///////////////////
  // get createConfigLogOut() {
  //   return {
  //     rout: {
  //       path: 'room',
  //       param: ''
  //     }
  //   };
  // }
}
