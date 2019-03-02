import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'con-new';





 constructor( private router: Router) {}
  ngOnInit() {

  }

}
