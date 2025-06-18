/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { MediaChange } from '../media-change';
import { MockMatchMedia } from './mock/mock-match-media';
import { DEFAULT_BREAKPOINTS } from '../breakpoints/data/break-points';
import { BreakPointRegistry } from '../breakpoints/break-point-registry';

const createMatchMediaSuite = () => {
    const breakPoints = new BreakPointRegistry(DEFAULT_BREAKPOINTS);
    const matchMedia = new MockMatchMedia(
        { run: (fn: any) => fn(), runOutsideAngular: (fn: any) => fn() } as any,
        'browser',
        document,
        breakPoints
    );

    return { matchMedia, breakPoints };
};

describe('match-media', () => {
    let matchMedia: MockMatchMedia;
    let breakPoints: BreakPointRegistry;

    beforeEach(() => {
        ({ matchMedia, breakPoints } = createMatchMediaSuite());
    });

    afterEach(() => {
        matchMedia.clearAll();
        matchMedia.useOverlaps = false;
    });

    it('can observe the initial, default activation for mediaQuery == "all"', () => {
        let current = new MediaChange();
        const sub = matchMedia.observe().subscribe(change => current = change);
        expect(current.mediaQuery).toBe('all');
        sub.unsubscribe();
    });

    it('can observe all mediaQuery activations', () => {
        let current = new MediaChange();
        const q1 = 'screen and (min-width: 610px) and (max-width: 620px)';
        const q2 = '(min-width: 730px) and (max-width: 950px)';
        const sub = matchMedia.observe([q1, q2]).subscribe(change => current = change);

        expect(current.mediaQuery).toBe('all');
        matchMedia.activate(q1);
        expect(current.mediaQuery).toBe(q1);
        expect(matchMedia.isActive(q1)).toBe(true);

        matchMedia.activate(q2);
        expect(current.mediaQuery).toBe(q2);
        expect(matchMedia.isActive(q2)).toBe(true);

        sub.unsubscribe();
    });

    it('can observe an array of custom mediaQuery ranges', () => {
        let current = new MediaChange();
        const q1 = 'screen and (min-width: 610px) and (max-width: 620px)';
        const q2 = '(min-width: 730px) and (max-width: 950px)';
        matchMedia.registerQuery([q1, q2]);

        const sub = matchMedia.observe([q1], true).subscribe(change => current = change);

        matchMedia.activate(q1);
        expect(current.mediaQuery).toBe(q1);
        expect(matchMedia.isActive(q1)).toBe(true);

        matchMedia.activate(q2);
        expect(current.mediaQuery).not.toBe(q2);
        expect(matchMedia.isActive(q2)).toBe(true);

        sub.unsubscribe();
    });

    describe('match-media-observable', () => {
        const watchMedia = (alias: string, observer: (val: MediaChange) => void) =>
            matchMedia.observe(alias ? [alias] : []).subscribe(observer);

        it('can observe an existing activation', () => {
            let current = new MediaChange();
            const bp = breakPoints.findByAlias('md')!;
            const sub = watchMedia('md', c => current = c);
            matchMedia.activate(bp.mediaQuery);
            expect(current.mediaQuery).toBe(bp.mediaQuery);
            sub.unsubscribe();
        });

        it('can observe the initial, default activation', () => {
            let current = new MediaChange();
            const sub = watchMedia('', c => current = c);
            expect(current.mediaQuery).toBe('all');
            sub.unsubscribe();
        });

        it('can observe custom mediaQuery ranges', () => {
            let current = new MediaChange();
            const customQuery = 'screen and (min-width: 610px) and (max-width: 620px)';
            const sub = watchMedia(customQuery, c => current = c);
            matchMedia.useOverlaps = true;
            matchMedia.activate(customQuery);
            expect(current.mediaQuery).toBe(customQuery);
            sub.unsubscribe();
        });

        it('can observe registered breakpoint activations', () => {
            let current = new MediaChange();
            const sub = watchMedia('md', c => current = c);
            const bp = breakPoints.findByAlias('md')!;
            matchMedia.activate(bp.mediaQuery);
            expect(current.mediaQuery).toBe(bp.mediaQuery);
            sub.unsubscribe();
        });

        it('reports mediaQuery de-activations', () => {
            const lookup = (alias: string) => breakPoints.findByAlias(alias)!.mediaQuery;
            let activations = 0;
            let deactivations = 0;

            const sub = watchMedia('', c => {
                c.matches ? activations++ : deactivations++;
            });

            matchMedia.activate(lookup('md'));
            matchMedia.activate(lookup('gt-md'));
            matchMedia.activate(lookup('lg'));

            expect(activations).toBe(4); // includes initial 'all'
            expect(deactivations).toBe(2);
            sub.unsubscribe();
        });
    });
});
