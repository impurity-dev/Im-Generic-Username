import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerCountComponent } from './follower-count.component';

describe('FollowerCountComponent', () => {
  let component: FollowerCountComponent;
  let fixture: ComponentFixture<FollowerCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowerCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
