import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexRowFillWrapComponent } from './flex-row-fill-wrap.component';

describe('FlexRowFillWrapComponent', () => {
  let component: FlexRowFillWrapComponent;
  let fixture: ComponentFixture<FlexRowFillWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexRowFillWrapComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexRowFillWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
