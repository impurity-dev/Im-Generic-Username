import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailIconComponent } from './mail-icon.component';

describe('MailIconComponent', () => {
  let component: MailIconComponent;
  let fixture: ComponentFixture<MailIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
