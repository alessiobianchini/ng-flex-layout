import {Component, Signal, signal} from '@angular/core';
import {MediaChange, MediaObserver} from 'ng-flex-layout';

@Component({
    selector: 'demo-responsive-row-column',
    templateUrl: './responsive-row-column.component.html',
    standalone: false
})
export class ResponsiveRowColumnComponent {
  readonly cols = signal<Record<string, string>>({
    firstCol: 'row',
    firstColXs: 'column',
    firstColMd: 'column',
    firstColLg: 'invalid',
    firstColGtLg: 'column',
    secondCol: 'column'
  });
  isVisible = true;

  private readonly activeMQC: Signal<MediaChange[]>;

  constructor(mediaService: MediaObserver) {
    this.activeMQC = mediaService.asSignal();
  }

  toggleLayoutFor(col: number) {
    const changes = this.activeMQC();
    this.cols.update((cols) => {
      const next = { ...cols };

      changes.forEach((change: MediaChange) => {
        switch (col) {
          case 1: {
            const key = `firstCol${change ? change.suffix : ''}`;
            next[key] = next[key] === 'column' ? 'row' : 'column';
            break;
          }
          case 2: {
            const key = 'secondCol';
            next[key] = next[key] === 'row' ? 'column' : 'row';
            break;
          }
        }
      });

      return next;
    });
  }
}
