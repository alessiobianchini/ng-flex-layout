import {Directive, ElementRef, Inject, Output, DOCUMENT} from '@angular/core';

import {fromEvent, Observable} from 'rxjs';
import {map, switchMap, takeUntil, throttleTime} from 'rxjs/operators';

@Directive({
    selector: '[ngxSplitHandle]',
    host: {
        class: 'ngx-split-handle',
        title: 'Drag to resize'
    },
    standalone: false
})
export class SplitHandleDirective {
  @Output() drag: Observable<{ x: number, y: number }>;

  constructor(ref: ElementRef, @Inject(DOCUMENT) _document: any) {
    let last = {x: 0, y: 0};
    const scanPositionDelta = (event: MouseEvent) => {
      const current = {x: event.screenX, y: event.screenY};
      const delta = {x: current.x - last.x, y: current.y - last.y};
      last = current;
      return delta;
    };

    const mousedown$ = fromEvent<MouseEvent>(ref.nativeElement, 'mousedown').pipe(
      map(scanPositionDelta)
    );
    const mousemove$ = fromEvent<MouseEvent>(window, 'mousemove').pipe(
      throttleTime(50),
      map(scanPositionDelta)
    );
    const mouseup$ = fromEvent(window, 'mouseup');

    this.drag = mousedown$.pipe(switchMap(() => mousemove$.pipe(takeUntil(mouseup$))));
  }
}
