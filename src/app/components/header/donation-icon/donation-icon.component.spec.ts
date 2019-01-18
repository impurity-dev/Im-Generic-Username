import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationIconComponent } from './donation-icon.component';

describe('DonationIconComponent', () => {
  let component: DonationIconComponent;
  let fixture: ComponentFixture<DonationIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
