import {Component, Injector, computed, inject} from '@angular/core';
import {BreakPoint, BreakPointRegistry, MediaChange, MediaObserver, MatchMedia} from 'ng-flex-layout';

@Component({
    selector: 'demo-signals-cookbook',
    templateUrl: './signals-cookbook.component.html',
    standalone: false
})
export class SignalsCookbookComponent {
    private readonly injector = inject(Injector);
    private readonly registry = inject(BreakPointRegistry);
    private readonly media = inject(MediaObserver);
    private readonly matchMedia = inject(MatchMedia);

    readonly breakpoints: BreakPoint[] = this.registry.items;

    readonly activations = this.media.asSignal({injector: this.injector, initialValue: []});
    readonly activeAliases = computed(() => this.activations().map(change => change.mqAlias));
    readonly activeQuery = computed(() => {
        const activeAlias = this.activeAliases()[0];
        return activeAlias ? (this.registry.findByAlias(activeAlias)?.mediaQuery ?? '(unknown)') : '(none)';
    });

    readonly isHandset = computed(() => this.media.isActive(['xs', 'sm']));
    readonly isTablet = computed(() => this.media.isActive('md'));
    readonly isDesktop = computed(() => this.media.isActive(['lg', 'xl']));

    readonly customQuery = '(min-width: 600px)';
    readonly customQueryChange = this.matchMedia.observeAsSignal([this.customQuery], {
        injector: this.injector,
        initialValue: new MediaChange(false, this.customQuery),
    });
}

