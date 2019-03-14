import { Component, OnInit, Input } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { MatDialog } from '@angular/material';
import { AdminSheduleComponent } from '../../contact-list/admin-shedule/admin-shedule.component';
import { ClientScheduleComponent } from '../../clients-panel/client-schedule/client-schedule.component';
@Component({
  selector: 'app-btn-schedule',
  template: `<div (click) = "openDialog($event)">
              <button *ngFor = "let room of nrRooms"
                mat-flat-button color="primary" style= "width:10px">{{room}}
              </button>
             </div>
             `,
  styleUrls: ['./btn-schedule.component.css']
})
export class BtnScheduleComponent implements OnInit {
  @Input() nrRooms;
  @Input() admin;
  propSchedule;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.checkRole();
  }
  checkRole() {
   this.propSchedule =  this.admin ? this.setObjAdmin() : this.setObjClient();
  }
  setObjAdmin() {
    return {
      component: AdminSheduleComponent,
      nrRoom: ''
    };
  }
  setObjClient() {
    return {
      component: ClientScheduleComponent,
      nrRoom: ''
    };
  }
  openDialog(e) {
    this.propSchedule.nrRoom = e.target.tagName === 'BUTTON' ? e.target.textContent : null;
    this.openSchedule();
  }

  openSchedule() {
    this.dialog.open(this.propSchedule.component, {
      data: {nrRoom: this.propSchedule.nrRoom},
      width: '50%',
    });
  }

}
