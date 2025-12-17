import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexRowFillComponent } from './flex-row-fill.component';

describe('FlexRowFillComponent', () => {
  let component: FlexRowFillComponent;
  let fixture: ComponentFixture<FlexRowFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexRowFillComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexRowFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
