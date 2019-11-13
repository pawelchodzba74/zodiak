import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutGlobalConfig } from './config-log-out';

@Component({
  selector: 'app-log-out',
  template: `
    <div (click) = "logOut()" >
      <a  mat-raised-button style ="opacity:0.5"> Wyloguj </a>
    </div>
  `,
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
@Input()DataConfig;
  constructor(
    private router: Router,
    private  config: LogOutGlobalConfig
  ) {}

  ngOnInit() {
     this.config.config = this.config.createConfig;
    }
   logOut() {
    this.config.config.services.forEach(Service => {
      Service.obj[Service.method]();
    });
    this.router.navigate([this.config.config.rout.path]);
  }
  setConfig() {
    if (this.DataConfig) {
      this.config.setConfig(this.DataConfig);
    }
  }

}
