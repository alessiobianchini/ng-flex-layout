import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { beforeEach, describe, expect, it } from 'vitest';
import { GithubIssuesComponent } from './github-issues.component';

describe('GithubIssuesComponent', () => {
  let component: GithubIssuesComponent;
  let fixture: ComponentFixture<GithubIssuesComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ GithubIssuesComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
