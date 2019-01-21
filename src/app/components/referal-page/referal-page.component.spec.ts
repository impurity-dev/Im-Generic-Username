import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalPageComponent } from './referal-page.component';

describe('ReferalPageComponent', () => {
  let component: ReferalPageComponent;
  let fixture: ComponentFixture<ReferalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
