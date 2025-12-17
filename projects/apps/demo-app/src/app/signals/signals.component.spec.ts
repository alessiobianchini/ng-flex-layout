import { NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { MediaChange, MediaMarshaller, MediaObserver } from 'ng-flex-layout';
import { MatchMedia } from 'ng-flex-layout/core';
import { DocsSignalsComponent } from './signals.component';

class FakeMediaObserver {
    asSignal() {
        return signal([]);
    }
    isActive() {
        return false;
    }
}

class FakeMatchMedia {
    observeAsSignal() {
        return signal(new MediaChange(false, '(min-width: 600px)'));
    }
}

class FakeMediaMarshaller {
    trackValueAsSignal() {
        return signal({ element: {} as HTMLElement, key: 'layout', value: 'row' });
    }
}

describe('DocsSignalsComponent', () => {
    it('should create', async () => {
        await TestBed.configureTestingModule({
            declarations: [DocsSignalsComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: MediaObserver, useClass: FakeMediaObserver },
                { provide: MatchMedia, useClass: FakeMatchMedia },
                { provide: MediaMarshaller, useClass: FakeMediaMarshaller },
            ],
        }).compileComponents();

        const fixture: ComponentFixture<DocsSignalsComponent> = TestBed.createComponent(DocsSignalsComponent);
        fixture.detectChanges();

        expect(fixture.componentInstance).toBeTruthy();
    });
});
