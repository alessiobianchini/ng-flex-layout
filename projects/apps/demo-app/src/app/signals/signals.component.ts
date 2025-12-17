import {AfterViewInit, Component, ElementRef, Injector, Signal, ViewChild, computed, inject, signal} from '@angular/core';
import {MediaMarshaller, MediaObserver} from 'ng-flex-layout';
import {MatchMedia} from 'ng-flex-layout/core';
import {ElementMatcher} from 'ng-flex-layout/core';

@Component({
    selector: 'demo-signals',
    templateUrl: './signals.component.html',
    standalone: false
})
export class DocsSignalsComponent implements AfterViewInit {
    private readonly injector = inject(Injector);

    private readonly mediaObserver = inject(MediaObserver);
    private readonly matchMedia = inject(MatchMedia);
    private readonly marshaller = inject(MediaMarshaller);

    readonly activations = this.mediaObserver.asSignal({injector: this.injector, initialValue: []});

    readonly isXsActive = computed(() => this.mediaObserver.isActive('xs'));

    readonly query = '(min-width: 600px)';
    readonly queryChange = this.matchMedia.observeAsSignal([this.query], {injector: this.injector});

    readonly layoutDir = signal<'row' | 'column'>('row');

    @ViewChild('layoutBox', {static: true}) layoutBox!: ElementRef<HTMLElement>;
    private readonly layoutMatcherSignal = signal<Signal<ElementMatcher> | null>(null);
    readonly layoutValue = computed(() => this.layoutMatcherSignal()?.().value ?? '');

    ngAfterViewInit(): void {
        const element = this.layoutBox.nativeElement;
        this.layoutMatcherSignal.set(
            this.marshaller.trackValueAsSignal(element, 'layout', {injector: this.injector})
        );
    }

    toggleLayout(): void {
        this.layoutDir.update(value => value === 'row' ? 'column' : 'row');
    }
}
