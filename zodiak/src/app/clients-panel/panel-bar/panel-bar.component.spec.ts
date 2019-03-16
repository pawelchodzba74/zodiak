import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBarComponent } from './panel-bar.component';

describe('PanelBarComponent', () => {
  let component: PanelBarComponent;
  let fixture: ComponentFixture<PanelBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
