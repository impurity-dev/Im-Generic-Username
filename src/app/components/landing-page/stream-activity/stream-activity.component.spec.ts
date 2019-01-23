import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamActivityComponent } from './stream-activity.component';

describe('StreamActivityComponent', () => {
  let component: StreamActivityComponent;
  let fixture: ComponentFixture<StreamActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
