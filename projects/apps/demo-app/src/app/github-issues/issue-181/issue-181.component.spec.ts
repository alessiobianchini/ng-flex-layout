import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Issue181Component } from './issue-181.component';

describe('Issue181Component', () => {
  let component: Issue181Component;
  let fixture: ComponentFixture<Issue181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Issue181Component ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
