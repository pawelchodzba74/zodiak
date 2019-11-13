import { Component, OnInit, ViewChild, ViewContainerRef  } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { AppService } from '../../app-service.service';
import { SpinerComponent } from '../spiner/spiner.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo;
  @ViewChild('spiner', {read: ViewContainerRef}) spiner: ViewContainerRef;
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private spinerComponent: SpinerComponent,
    private rout: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loadPhoto();
  }
  loadPhoto(): void {
    // const spiner = this.spinerComponent.show(this.spiner);
    // const id = this.route.snapshot.params['id'];
    // this.appService.getPerson(id).subscribe((person) => {
    //   this.photo = person.photo;
    //   spiner.destroy();
    // },
    //   (error) => {
    //     this.rout.navigate(['/', 'clients']);
    //     this.toastr.error(error, ' Bład');
    //     spiner.destroy();

    //   }
    // );
  }

}
