import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appCallFn]'
})
export class CallFnDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  @Input()
  set appCallFn(action) {
     if (action === 'callFn') {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
   }
 }


}
