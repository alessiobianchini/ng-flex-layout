import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { MockMatchMedia } from './mock-match-media';
import { DEFAULT_BREAKPOINTS } from 'ng-flex-layout';
import { BreakPointRegistry } from '../../breakpoints/break-point-registry';
import { MediaChange } from '../../media-change';
import { NgZone } from '@angular/core';
import { Subject } from 'rxjs';

let mediaController: MockMatchMedia;
const zoneStub: NgZone = {
    run: (fn: Function) => fn(),
    runOutsideAngular: (fn: Function) => fn(),
    hasPendingMacrotasks: false,
    hasPendingMicrotasks: false,
    isStable: new Subject<boolean>(),
    onUnstable: new Subject<void>(),
    onMicrotaskEmpty: new Subject<void>(),
    onStable: new Subject<void>(),
    onError: new Subject<any>()
} as any;

const platformId = 'browser';
const documentRef = globalThis.document;
const breakPoints: BreakPointRegistry = new BreakPointRegistry(DEFAULT_BREAKPOINTS);

describe('MockMatchMedia (vitest)', () => {
    beforeEach(() => {
        mediaController = new MockMatchMedia(zoneStub, platformId, documentRef, breakPoints);

        breakPoints.items.forEach(bp => mediaController.observe([bp.mediaQuery]));
    });

    afterEach(() => mediaController.clearAll());

    it('can observe custom mediaQuery ranges', () => {
        const customQuery = 'screen and (min-width: 610px) and (max-width: 620px';
        let current = new MediaChange();
        const sub = mediaController.observe([customQuery]).subscribe(change => current = change);
        expect(mediaController.activate(customQuery)).toBe(true);
        expect(current.mediaQuery).toBe(customQuery);
        sub.unsubscribe();
    });

    it('can observe a media query change for each breakpoint', () => {
        let current: MediaChange = new MediaChange();
        const sub = mediaController.observe().subscribe(change => current = change);
        breakPoints.items.forEach(bp => {
            mediaController.activate(bp.mediaQuery);
            expect(current).toBeDefined();
            expect(current.mediaQuery).toBe(bp.mediaQuery);
        });
        sub.unsubscribe();
    });

    it('can observe ALL media query changes', () => {
        let current = new MediaChange();
        let mqcGtSM = new MediaChange();
        const bpGtSM = breakPoints.findByAlias('gt-sm')!;
        const bpLg = breakPoints.findByAlias('lg')!;

        const sub = mediaController.observe().subscribe(change => current = change);
        mediaController.activate(bpGtSM.mediaQuery);
        expect(current.mediaQuery).toBe(bpGtSM.mediaQuery);
        expect(mediaController.isActive(bpGtSM.mediaQuery)).toBe(true);
        mqcGtSM = current;

        mediaController.activate(bpLg.mediaQuery);
        expect(current.mediaQuery).not.toBe(mqcGtSM.mediaQuery);
        expect(mediaController.isActive(bpLg.mediaQuery)).toBe(true);
        expect(mediaController.isActive(bpGtSM.mediaQuery)).toBe(false);
        sub.unsubscribe();
    });

    it('can observe only a specific media query changes', () => {
        let current = new MediaChange();
        const bpGtSM = breakPoints.findByAlias('gt-sm')!;
        const bpLg = breakPoints.findByAlias('lg')!;
        const sub = mediaController.observe([bpLg.mediaQuery]).subscribe(change => current = change);

        expect(current.matches).toBe(true);
        mediaController.activate(bpGtSM.mediaQuery);
        expect(current.matches).toBe(true);
        mediaController.activate(bpLg.mediaQuery);
        expect(current.mediaQuery).toBe(bpLg.mediaQuery);
        expect(mediaController.isActive(bpLg.mediaQuery)).toBe(true);
        sub.unsubscribe();
    });

    it('can observe both activation and deactivation changes', () => {
        let activates = 0, deactivates = 0;
        const bpGtSM = breakPoints.findByAlias('gt-sm')!;
        const bpLg = breakPoints.findByAlias('lg')!;
        const sub = mediaController.observe().subscribe(change => {
            change.matches ? activates++ : deactivates++;
        });
        expect(activates).toBe(1);
        mediaController.activate(bpGtSM.mediaQuery);
        expect(activates).toBe(2);
        mediaController.activate(bpLg.mediaQuery);
        expect(activates).toBe(3);
        expect(deactivates).toBe(1);
        mediaController.activate(bpGtSM.mediaQuery);
        expect(activates).toBe(4);
        expect(deactivates).toBe(2);
        sub.unsubscribe();
    });

    it('can observe both activated & deactivated changes for specific mediaQueries', () => {
        let activates = 0, deactivates = 0;
        const bpGtSM = breakPoints.findByAlias('gt-sm')!;
        const bpLg = breakPoints.findByAlias('lg')!;
        const sub = mediaController.observe([bpGtSM.mediaQuery], true).subscribe(change => {
            change.matches ? activates++ : deactivates++;
        });
        expect(activates).toBe(0);
        mediaController.activate(bpGtSM.mediaQuery);
        expect(activates).toBe(1);
        mediaController.activate(bpLg.mediaQuery);
        expect(deactivates).toBe(1);
        mediaController.activate(bpGtSM.mediaQuery);
        expect(activates).toBe(2);
        sub.unsubscribe();
    });

    it('can onMediaChange with either a mediaQuery or an alias', () => {
        let activates = 0;
        const bpGtSM = breakPoints.findByAlias('gt-sm')!;
        const bpLg = breakPoints.findByAlias('lg')!;
        const sub = mediaController.observe().subscribe(change => {
            if (change.matches) activates++;
        });
        expect(activates).toBe(1);
        mediaController.activate(bpGtSM.mediaQuery);
        mediaController.activate(bpLg.mediaQuery);
        mediaController.activate(bpGtSM.mediaQuery);
        mediaController.activate(bpLg.mediaQuery);
        expect(activates).toBe(5);
        sub.unsubscribe();
    });

    it('can check if a range is active', () => {
        const bpGtSm = breakPoints.findByAlias('gt-sm')!;
        const bpLg = breakPoints.findByAlias('lg')!;
        const bpXs = breakPoints.findByAlias('xs')!;
        const bpGtXs = breakPoints.findByAlias('gt-xs')!;
        const bpSm = breakPoints.findByAlias('sm')!;
        const bpMd = breakPoints.findByAlias('md')!;
        const bpGtMd = breakPoints.findByAlias('gt-md')!;
        const sub = mediaController.observe().subscribe(() => { });

        mediaController.activate(bpGtSm.mediaQuery);
        expect(mediaController.isActive(bpGtSm.mediaQuery)).toBe(true);
        expect(mediaController.isActive(bpLg.mediaQuery)).toBe(false);

        mediaController.activate(bpLg.mediaQuery);
        expect(mediaController.isActive(bpGtSm.mediaQuery)).toBe(false);
        expect(mediaController.isActive(bpLg.mediaQuery)).toBe(true);

        mediaController.activate(bpGtSm.mediaQuery);
        expect(mediaController.isActive(bpXs.mediaQuery)).toBe(false);
        expect(mediaController.isActive(bpGtXs.mediaQuery)).toBe(false);
        expect(mediaController.isActive(bpSm.mediaQuery)).toBe(false);
        expect(mediaController.isActive(bpGtSm.mediaQuery)).toBe(true);
        expect(mediaController.isActive(bpMd.mediaQuery)).toBe(false);
        expect(mediaController.isActive(bpGtMd.mediaQuery)).toBe(false);
        expect(mediaController.isActive(bpLg.mediaQuery)).toBe(false);
        sub.unsubscribe();
    });

    it('can observe a startup activation of XS', () => {
        const bpXs = breakPoints.findByAlias('xs')!;
        mediaController.activate(bpXs.mediaQuery);
        let current = new MediaChange();
        const sub = mediaController.observe([bpXs.mediaQuery]).subscribe(change => current = change);
        expect(current).toBeDefined();
        expect(current.mediaQuery).toBe(bpXs.mediaQuery);
        expect(mediaController.isActive(bpXs.mediaQuery)).toBe(true);
        sub.unsubscribe();
    });

    it('activates overlapping breakpoints correct', () => {
        mediaController.activate('xs', true);
        expect(mediaController.isActive('screen and (min-width: 0px) and (max-width: 599.98px)')).toBe(true);
        expect(mediaController.isActive('screen and (min-width: 600px) and (max-width: 959.98px)')).toBe(false);
        expect(mediaController.isActive('screen and (max-width: 599.98px)')).toBe(true);
    });
});
