import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MozHolyGrailComponent } from './moz-holy-grail.component';

describe('MozHolyGrailComponent', () => {
  let component: MozHolyGrailComponent;
  let fixture: ComponentFixture<MozHolyGrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MozHolyGrailComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MozHolyGrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
