import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemLocalComponent } from './nav-item-local.component';

describe('NavItemLocalComponent', () => {
  let component: NavItemLocalComponent;
  let fixture: ComponentFixture<NavItemLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
