import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { MediaObserver } from 'ng-flex-layout';
import { SignalsPatternsComponent } from './signals-patterns.component';

class FakeMediaObserver {
    asSignal() {
        return () => [];
    }
    isActive() {
        return false;
    }
}

describe('SignalsPatternsComponent', () => {
    it('should create', async () => {
        await TestBed.configureTestingModule({
            declarations: [SignalsPatternsComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{ provide: MediaObserver, useClass: FakeMediaObserver }],
        }).compileComponents();

        const fixture: ComponentFixture<SignalsPatternsComponent> = TestBed.createComponent(SignalsPatternsComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance).toBeTruthy();
    });
});

