import {NO_ERRORS_SCHEMA, signal} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, expect, it} from 'vitest';
import {BreakPointRegistry, MediaChange, MediaObserver, MatchMedia} from 'ng-flex-layout';
import {SignalsCookbookComponent} from './signals-cookbook.component';

class FakeMediaObserver {
    asSignal() {
        return signal([]);
    }
    isActive() {
        return false;
    }
}

class FakeMatchMedia {
    observeAsSignal(queries: string[]) {
        return signal(new MediaChange(false, queries[0] ?? ''));
    }
}

class FakeBreakPointRegistry {
    readonly items = [
        {alias: 'xs', suffix: 'Xs', mediaQuery: 'screen and (max-width: 599.98px)', overlapping: false, priority: 1000},
        {alias: 'sm', suffix: 'Sm', mediaQuery: 'screen and (min-width: 600px) and (max-width: 959.98px)', overlapping: false, priority: 900},
    ] as any[];

    findByAlias(alias: string) {
        return this.items.find(item => item.alias === alias) ?? null;
    }
}

describe('SignalsCookbookComponent', () => {
    it('should create', async () => {
        await TestBed.configureTestingModule({
            declarations: [SignalsCookbookComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: MediaObserver, useClass: FakeMediaObserver},
                {provide: MatchMedia, useClass: FakeMatchMedia},
                {provide: BreakPointRegistry, useClass: FakeBreakPointRegistry},
            ],
        }).compileComponents();

        const fixture: ComponentFixture<SignalsCookbookComponent> = TestBed.createComponent(SignalsCookbookComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance).toBeTruthy();
    });
});

