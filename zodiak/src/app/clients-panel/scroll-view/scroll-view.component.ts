import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-view',
  templateUrl: './scroll-view.component.html',
  styleUrls: ['./scroll-view.component.css']
})
export class ScrollViewComponent implements OnInit {
  public items: any[] = [
    // tslint:disable-next-line:max-line-length
    { title: 'Flower', url: 'https://www.google.com/maps/@50.0306314,22.0254908,3a,90y,-2.61h,88.38t/data=!3m7!1e1!3m5!1sAF1QipM2Jh7hBsTjxm4L5uUxJlAkLj5AoxlXDHDjV6bE!2e10!3e12!7i13312!8i6656' }  ,
    { title: 'Mountain', url: 'https://bit.ly/2cTBNaL'}
    // { title: 'Sky', url: 'https://bit.ly/2cJl3Cx' }
  ];
  public width = '100%';
  public height = '500px';

  constructor() { }

  ngOnInit() {
  }


}
