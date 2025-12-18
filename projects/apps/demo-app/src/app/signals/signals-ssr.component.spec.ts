import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { MatchMedia } from 'ng-flex-layout';
import { SignalsSsrComponent } from './signals-ssr.component';

class FakeMatchMedia {
    observeAsSignal() {
        return () => ({ matches: false, mediaQuery: '(min-width: 600px)' });
    }
}

describe('SignalsSsrComponent', () => {
    it('should create', async () => {
        await TestBed.configureTestingModule({
            declarations: [SignalsSsrComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{ provide: MatchMedia, useClass: FakeMatchMedia }],
        }).compileComponents();

        const fixture: ComponentFixture<SignalsSsrComponent> = TestBed.createComponent(SignalsSsrComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance).toBeTruthy();
    });
});

