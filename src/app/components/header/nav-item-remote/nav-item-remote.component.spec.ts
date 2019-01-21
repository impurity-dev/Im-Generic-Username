import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemRemoteComponent } from './nav-item-remote.component';

describe('NavItemRemoteComponent', () => {
  let component: NavItemRemoteComponent;
  let fixture: ComponentFixture<NavItemRemoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemRemoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
