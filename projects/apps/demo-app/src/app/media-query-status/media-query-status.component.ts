import {Component, Signal} from '@angular/core';
import {MediaChange, MediaObserver} from 'ng-flex-layout';

@Component({
    selector: 'media-query-status',
    templateUrl: './media-query-status.component.html',
    styleUrls: ['./media-query-status.component.scss'],
    standalone: false
})
export class MediaQueryStatusComponent {
  readonly mediaChanges: Signal<MediaChange[]>;

  constructor(media: MediaObserver) {
    this.mediaChanges = media.asSignal();
  }
}
