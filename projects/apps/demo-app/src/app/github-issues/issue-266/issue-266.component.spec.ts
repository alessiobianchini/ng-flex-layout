import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Issue266Component } from './issue-266.component';

describe('Issue266Component', () => {
  let component: Issue266Component;
  let fixture: ComponentFixture<Issue266Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Issue266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
