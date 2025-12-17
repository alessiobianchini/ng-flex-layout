import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexAlignSelfComponent } from './flex-align-self.component';

describe('FlexAlignSelfComponent', () => {
  let component: FlexAlignSelfComponent;
  let fixture: ComponentFixture<FlexAlignSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexAlignSelfComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexAlignSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
