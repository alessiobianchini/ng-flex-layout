import {Component, Injector, computed, effect, inject, signal} from '@angular/core';
import {MediaObserver} from 'ng-flex-layout';

@Component({
    selector: 'demo-signals-patterns',
    templateUrl: './signals-patterns.component.html',
    standalone: false
})
export class SignalsPatternsComponent {
    private readonly injector = inject(Injector);
    private readonly media = inject(MediaObserver);

    readonly activations = this.media.asSignal({injector: this.injector, initialValue: []});
    readonly activeAlias = computed(() => this.activations()[0]?.mqAlias ?? '(none)');

    readonly isHandset = computed(() => this.media.isActive(['xs', 'sm']));
    readonly isTablet = computed(() => this.media.isActive('md'));
    readonly isDesktop = computed(() => this.media.isActive(['lg', 'xl']));

    readonly lastSeenAlias = signal<string>('');

    constructor() {
        effect(() => {
            this.lastSeenAlias.set(this.activeAlias());
        });
    }
}
