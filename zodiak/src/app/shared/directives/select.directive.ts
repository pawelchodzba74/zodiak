import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  @Input()
  set appSelect(action) {
      if (action === 'select') {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
   }
 }
}
