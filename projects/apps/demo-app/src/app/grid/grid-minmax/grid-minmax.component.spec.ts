import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMinmaxComponent } from './grid-minmax.component';

describe('GridMinmaxComponent', () => {
  let component: GridMinmaxComponent;
  let fixture: ComponentFixture<GridMinmaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridMinmaxComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMinmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
