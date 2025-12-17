import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveLayoutDirectionComponent } from './responsive-layout-direction.component';

describe('ResponsiveLayoutDirectionComponent', () => {
  let component: ResponsiveLayoutDirectionComponent;
  let fixture: ComponentFixture<ResponsiveLayoutDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveLayoutDirectionComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveLayoutDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
