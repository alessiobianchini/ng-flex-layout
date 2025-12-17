import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveFlexDirectiveComponent } from './responsive-flex-directive.component';

describe('ResponsiveFlexDirectiveComponent', () => {
  let component: ResponsiveFlexDirectiveComponent;
  let fixture: ComponentFixture<ResponsiveFlexDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveFlexDirectiveComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveFlexDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
