import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { AppService } from '../../app-service.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../contact-list/models/person';
import { ToastrService } from 'ngx-toastr';
import { SpinerComponent } from '../../shared/spiner/spiner.component';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  Person: Person;
  @ViewChild('spiner', {read: ViewContainerRef}) spiner: ViewContainerRef;
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private spinerComponent: SpinerComponent

  ) {}

  ngOnInit() {
    this.loadContact();
  }
  loadContact(): void {
    // const spiner = this.spinerComponent.show(this.spiner);
    // const id = this.route.snapshot.params['id'];
    // this.appService.getPerson(id).subscribe((person) => {
    //   this.Person = person;
    //   spiner.destroy();
    // },
    //   (error) => {
    //     this.toastr.error(error, ' Bład');
    //     spiner.destroy();
    //   }
    // );
  }
}
