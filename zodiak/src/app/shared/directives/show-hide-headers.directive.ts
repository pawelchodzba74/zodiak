import { Directive, Input, Renderer } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';

@Directive({
  selector: '[appShowHideHeaders]'
})
export class ShowHideHeadersDirective implements OnInit {
  @Input() appShowHideHeaders;
  constructor(private el: ElementRef) {
// el.nativeElement.style.color = 'red';
   }
   ngOnInit() {
    //  console.log(this.el.nativeElement.textContent);
    //  console.log( this.appShowHideHeaders);

      if ( this.appShowHideHeaders === '[object Object]' ) {
        this.el.nativeElement.textContent = '';
      }
   }

}
