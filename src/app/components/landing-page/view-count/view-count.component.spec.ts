import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCountComponent } from './view-count.component';

describe('ViewCountComponent', () => {
  let component: ViewCountComponent;
  let fixture: ComponentFixture<ViewCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
