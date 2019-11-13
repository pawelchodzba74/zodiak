import { Component, OnInit, Input } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { MatDialog } from '@angular/material';
import { AdminSheduleComponent } from '../../contact-list/admin-shedule/admin-shedule.component';
import { ClientScheduleComponent } from '../../clients-panel/client-schedule/client-schedule.component';
import { load } from '@progress/kendo-angular-intl';
@Component({
  selector: 'app-btn-schedule',
  template: `<div (click) = "openDialog($event)"
                style= "display:flex; justify-content: space-between; flex-wrap: wrap;" >
                  <button mat-raised-button  *ngFor = "let room of nrRooms"
                    id = "{{room}}"
                    style="margin-top:10px;opacity:0.5"
                    >{{room}}
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
  openDialog(e) {
    const target = e.target;
    const nodeName = target.tagName;
    this.propSchedule.nrRoom = nodeName === 'BUTTON' ? target.id : null;
    this.propSchedule.nrRoom = !this.propSchedule.nrRoom && nodeName === 'SPAN' ? target.parentElement.id : this.propSchedule.nrRoom;
    if (parseInt(this.propSchedule.nrRoom, 10) > 0) {
      this.openSchedule();
    }
  }
  private openSchedule() {
    this.dialog.open(this.propSchedule.component, {
      data: {nrRoom: this.propSchedule.nrRoom},
      width: '50%',
    });
  }

}
