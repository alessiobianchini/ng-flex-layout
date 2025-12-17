import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsGridComponent } from './docs-grid.component';

describe('DocsGridComponent', () => {
  let component: DocsGridComponent;
  let fixture: ComponentFixture<DocsGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
