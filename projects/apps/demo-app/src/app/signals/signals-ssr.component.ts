import {isPlatformBrowser} from '@angular/common';
import {Component, Injector, PLATFORM_ID, computed, inject} from '@angular/core';
import {MediaChange, MatchMedia} from 'ng-flex-layout';

@Component({
    selector: 'demo-signals-ssr',
    templateUrl: './signals-ssr.component.html',
    standalone: false
})
export class SignalsSsrComponent {
    private readonly injector = inject(Injector);
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);

    private readonly matchMedia = inject(MatchMedia);

    readonly query = '(min-width: 600px)';
    private readonly querySignal = this.matchMedia.observeAsSignal([this.query], {injector: this.injector});

    readonly change = computed<MediaChange>(() => {
        if (!this.isBrowser) {
            // Pattern: in SSR, you can also choose to avoid relying on any browser behavior.
            return new MediaChange(false, this.query);
        }
        return this.querySignal();
    });
}

