import { Component, Inject, ViewContainerRef, ComponentFactoryResolver, Type  } from '@angular/core';

@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.css']
})
export class SpinerComponent  {
  public loading = true;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }
  show(refConeinerSpiner: ViewContainerRef) {
  const dataInFactory = this.componentFactoryResolver.resolveComponentFactory(<Type<SpinerComponent>>SpinerComponent);
  return refConeinerSpiner.createComponent(dataInFactory);
  }
}


