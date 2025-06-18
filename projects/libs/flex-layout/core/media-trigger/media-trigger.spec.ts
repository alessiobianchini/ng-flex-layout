/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { MediaTrigger } from './media-trigger';
import { MediaChange } from '../media-change';
import { MatchMedia } from '../match-media/match-media';
import { MockMatchMedia } from '../match-media/mock/mock-match-media';
import { MediaObserver } from '../media-observer/media-observer';
import { BreakPointRegistry } from '../breakpoints/break-point-registry';
import { DEFAULT_BREAKPOINTS } from '../breakpoints/data/break-points';
import { DEFAULT_CONFIG } from '../tokens/library-config';
import { PrintHook } from '../media-marshaller/print-hook';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

describe('MediaTrigger', () => {
    let mediaObserver: MediaObserver;
    let mediaTrigger: MediaTrigger;
    let matchMedia: MockMatchMedia;

    const activateQuery = async (aliases: string[]) => {
        mediaTrigger.activate(aliases);
        await delay(100); // Simula debounceTime
    };

    beforeEach(() => {
        const breakPoints = new BreakPointRegistry(DEFAULT_BREAKPOINTS);
        matchMedia = new MockMatchMedia(
            { run: (fn: any) => fn(), runOutsideAngular: (fn: any) => fn() } as any,
            'browser',
            globalThis.document,
            breakPoints
        );

        const printHook = new PrintHook(breakPoints, DEFAULT_CONFIG, globalThis.document);

        mediaObserver = new MediaObserver(breakPoints, matchMedia, printHook);
        mediaTrigger = new MediaTrigger(
            breakPoints,
            matchMedia,
            DEFAULT_CONFIG,
            'browser',
            globalThis.document
        );

        matchMedia.useOverlaps = true;
    });

    it('can trigger activations with list of breakpoint aliases', async () => {
        let activations: MediaChange[] = [];

        const subscription = mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
            activations = [...changes];
        });

        matchMedia.activate('xl');
        const originalActivations = matchMedia.activations.length;

        await activateQuery(['sm']);
        expect(activations.length).toBe(1);
        expect(activations[0].mqAlias).toBe('sm');

        await activateQuery(['lt-lg', 'md']);
        expect(activations.length).toBe(2);
        expect(activations[0].mqAlias).toBe('md');
        expect(activations[1].mqAlias).toBe('lt-lg');

        mediaTrigger.restore();
        await delay(100);
        expect(activations.length).toBe(originalActivations);

        subscription.unsubscribe();
    });
});
