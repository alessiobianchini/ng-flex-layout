import { SplitHandleDirective } from './split-handle.directive';
import { ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

describe('SplitHandleDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(document.createElement('div'));
    const directive = new SplitHandleDirective(elementRef, (document as any));
    expect(directive).toBeTruthy();
  });
});
