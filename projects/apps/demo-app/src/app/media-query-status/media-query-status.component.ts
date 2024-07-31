import {Component} from '@angular/core';
import {MediaChange, MediaObserver} from 'ng-flex-layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'media-query-status',
  templateUrl: './media-query-status.component.html',
  styleUrls: ['./media-query-status.component.scss'],
})
export class MediaQueryStatusComponent {
  media$: Observable<MediaChange[]>;

  constructor(media: MediaObserver) {
    this.media$ = media.asObservable();
  }
}
