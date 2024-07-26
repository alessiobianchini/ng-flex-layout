import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexOffsetValuesComponent } from './grid-layout.component';

describe('FlexOffsetValuesComponent', () => {
  let component: FlexOffsetValuesComponent;
  let fixture: ComponentFixture<FlexOffsetValuesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexOffsetValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexOffsetValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
