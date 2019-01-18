import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaticonCreditComponent } from './flaticon-credit.component';

describe('FlaticonCreditComponent', () => {
  let component: FlaticonCreditComponent;
  let fixture: ComponentFixture<FlaticonCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlaticonCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaticonCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
