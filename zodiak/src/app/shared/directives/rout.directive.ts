import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRout]'
})
export class RoutDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input()
     set appRout(action) {

        if (action === 'routing') {
         this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    }

}
