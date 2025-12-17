import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { MediaObserver } from './media-observer';
import { MediaChange } from '../media-change';
import { BreakPointRegistry } from '../breakpoints/break-point-registry';
import { DEFAULT_BREAKPOINTS } from '../breakpoints/data/break-points';
import { MockMatchMedia } from '../match-media/mock/mock-match-media';
import { DEFAULT_CONFIG } from '../tokens/library-config';
import { delay } from 'rxjs';
import { PrintHook } from '../media-marshaller/print-hook';

const findMediaQuery = (alias: string, registry: BreakPointRegistry): string =>
    registry.findByAlias(alias)?.mediaQuery ?? `${alias} not found`;

describe('MediaObserver (vitest)', () => {
    let matchMedia: MockMatchMedia;
    let breakPoints: BreakPointRegistry;
    let mediaObserver: MediaObserver;
    let injector: Injector;

    const activateQuery = async (alias: string, useOverlaps = false) => {
        matchMedia.activate(alias, useOverlaps);
        await delay(100); // simulate debounce time
    };

    beforeEach(() => {
        TestBed.configureTestingModule({});
        injector = TestBed.inject(Injector);

        breakPoints = new BreakPointRegistry(DEFAULT_BREAKPOINTS);
        matchMedia = new MockMatchMedia(
            { run: (fn: any) => fn(), runOutsideAngular: (fn: any) => fn() } as any,
            'browser',
            globalThis.document,
            breakPoints
        );

        const printHook = new PrintHook(breakPoints, DEFAULT_CONFIG, globalThis.document);
        mediaObserver = new MediaObserver(breakPoints, matchMedia, printHook);
        matchMedia.useOverlaps = false;
    });

    afterEach(() => {
        matchMedia.clearAll();
        matchMedia.useOverlaps = false;
    });

    it('can supports the `.isActive()` API', async () => {
        expect(mediaObserver).toBeDefined();

        matchMedia.autoRegisterQueries = false;

        await activateQuery('md');
        expect(mediaObserver.isActive('md')).toBeTruthy();

        await activateQuery('lg');
        expect(mediaObserver.isActive('lg')).toBeTruthy();
        expect(mediaObserver.isActive('md')).toBeFalsy();
    });

    it('can supports RxJS operators', async () => {
        let count = 0;
        const sub = mediaObserver.asObservable().subscribe(changes => {
            if (changes.some(c => c.mqAlias === 'md')) count++;
        });

        await activateQuery('sm');
        expect(count).toBe(0);

        await activateQuery('md');
        expect(count).toBe(1);

        await activateQuery('lg');
        expect(count).toBe(1);

        await activateQuery('md');
        expect(count).toBe(2);

        await activateQuery('gt-md');
        await activateQuery('gt-lg');
        await activateQuery('invalid');
        expect(count).toBe(2);

        sub.unsubscribe();
    });

    it('only gets one substantive update per media change set', async () => {
        let count = 0;
        const sub = mediaObserver.asObservable().subscribe(() => count++);

        await activateQuery('sm', true);
        await activateQuery('sm', true);
        expect(count).toBe(1);

        await activateQuery('md', true);
        expect(count).toBe(2);

        await activateQuery('xl', true);
        expect(count).toBe(3);

        sub.unsubscribe();
    });

    it('can subscribe to built-in mediaQueries', async () => {
        let current: MediaChange[] = [];
        matchMedia.activate('all');
        const sub = mediaObserver.asObservable().subscribe(changes => current = changes);

        await delay(100);
        expect(current[0]?.mediaQuery).toBe('all');

        matchMedia.autoRegisterQueries = false;
        mediaObserver.filterOverlaps = false;

        await activateQuery('md');
        expect(current[0]?.mediaQuery).toBe(findMediaQuery('md', breakPoints));

        await activateQuery('gt-lg');
        expect(current[0]?.mediaQuery).toBe(findMediaQuery('gt-lg', breakPoints));

        matchMedia.autoRegisterQueries = true;
        sub.unsubscribe();
    });

    it('can filter overlapping breakpoints when enabled', async () => {
        let current: MediaChange[] = [];
        const sub = mediaObserver.asObservable().subscribe(changes => current = changes);

        matchMedia.autoRegisterQueries = false;
        matchMedia.useOverlaps = true;
        mediaObserver.filterOverlaps = true;

        await activateQuery('md', true);
        expect(current.map(c => c.mqAlias)).toEqual(['md']);

        sub.unsubscribe();
    });

    it('can expose a signal API', async () => {
        const current = mediaObserver.asSignal({ injector });
        expect(current()).toEqual([]);

        await activateQuery('md');
        expect(current()[0]?.mqAlias).toBe('md');
    });

    it('can `.unsubscribe()` properly', async () => {
        let current: MediaChange[] = [];
        const sub = mediaObserver.asObservable().subscribe(changes => current = changes);

        await activateQuery('md');
        expect(current[0]?.mediaQuery).toBe(findMediaQuery('md', breakPoints));

        sub.unsubscribe();

        await activateQuery('lg');
        expect(current[0]?.mqAlias).toBe('md');

        await activateQuery('xs');
        expect(current[0]?.mqAlias).toBe('md');
    });

    it('can observe a startup activation of XS', async () => {
        let current: MediaChange[] = [];
        const sub = mediaObserver.asObservable().subscribe(changes => current = changes);

        await activateQuery('xs');
        expect(current[0]?.mediaQuery).toBe(findMediaQuery('xs', breakPoints));

        sub.unsubscribe();

        await activateQuery('lg');
        expect(current[0]?.mqAlias).toBe('xs');
    });

    it('can activate when configured with "md" alias for print', async () => {
        const config = { ...DEFAULT_CONFIG, printWithBreakpoints: ['md'] };
        const printHook = new PrintHook(breakPoints, config, globalThis.document);
        mediaObserver = new MediaObserver(breakPoints, matchMedia, printHook);

        let current: MediaChange[] = [];
        const sub = mediaObserver.asObservable().subscribe(changes => current = changes);

        await activateQuery('lg');
        await activateQuery('print');
        expect(current[0]?.mqAlias).toBe('md');

        await activateQuery('sm');
        expect(current[0]?.mqAlias).toBe('sm');

        sub.unsubscribe();
    });

    it('will skip print activation without alias', async () => {
        let current: MediaChange[] = [];
        const sub = mediaObserver.asObservable().subscribe(changes => current = changes);

        await activateQuery('sm');
        expect(current[0]?.mqAlias).toBe('sm');

        await activateQuery('print');
        expect(current[0]?.mqAlias).toBe('sm');

        await activateQuery('xl');
        expect(current[0]?.mqAlias).toBe('xl');

        sub.unsubscribe();
    });

    it('can activate custom alias with custom mediaQueries', async () => {
        const CUSTOM = [
            { alias: 'slate.xl', priority: 11000, mediaQuery: 'screen and (min-width:10000px)' },
            { alias: 'tablet-gt-xs', priority: 110, mediaQuery: 'screen and (min-width:120px) and (orientation:landscape)' },
        ];
        breakPoints = new BreakPointRegistry([...DEFAULT_BREAKPOINTS, ...CUSTOM]);
        matchMedia = new MockMatchMedia(
            { run: (fn: any) => fn(), runOutsideAngular: (fn: any) => fn() } as any,
            'browser',
            globalThis.document,
            breakPoints
        );
        const printHook = new PrintHook(breakPoints, DEFAULT_CONFIG, globalThis.document);
        mediaObserver = new MediaObserver(breakPoints, matchMedia, printHook);

        let current: MediaChange = new MediaChange(true);
        const sub = mediaObserver.asObservable().subscribe(([first]) => current = first);

        await activateQuery('sm');
        expect(current.mediaQuery).toBe(findMediaQuery('sm', breakPoints));

        await activateQuery('slate.xl');
        expect(current.mediaQuery).toBe(findMediaQuery('slate.xl', breakPoints));

        await activateQuery('tablet-gt-xs');
        expect(current.mqAlias).toBe('tablet-gt-xs');

        sub.unsubscribe();
    });
});
