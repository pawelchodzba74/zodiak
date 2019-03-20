import { Component, OnInit, Input } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { MatDialog } from '@angular/material';
import { AdminSheduleComponent } from '../../contact-list/admin-shedule/admin-shedule.component';
import { ClientScheduleComponent } from '../../clients-panel/client-schedule/client-schedule.component';
@Component({
  selector: 'app-btn-schedule',
  template: `<div (click) = "openD\ialog($event)">
              <button *ngFor = "let room of nrRooms"
                 id = "{{room}}" color="primary" style= "width:10px">sprawdź dostępnnoć sali {{room}}
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
   this.propSchedule =  this.admin ? this.setObj(AdminSheduleComponent) : this.setObj(ClientScheduleComponent);
  }
  setObj(component) {
    return {
      component: component,
      nrRoom: ''
    };
  }
  openDialog(e) {//console.log(e);
    const target = e.target;
    const nodeName = target.tagName;
    console.log(nodeName);

    this.propSchedule.nrRoom = nodeName === 'BUTTON' ? target.id : null;
    this.openSchedule();
  }

  openSchedule() {
    this.dialog.open(this.propSchedule.component, {
      data: {nrRoom: this.propSchedule.nrRoom},
      width: '50%',
    });
  }

}
