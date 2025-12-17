import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPositionComponent } from './grid-position.component';

describe('GridPositionComponent', () => {
  let component: GridPositionComponent;
  let fixture: ComponentFixture<GridPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPositionComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
