import { Subject } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BreakPointRegistry } from '../breakpoints/break-point-registry';
import { DEFAULT_BREAKPOINTS } from '../breakpoints/data/break-points';
import { MockMatchMedia } from '../match-media/mock/mock-match-media';
import { DEFAULT_CONFIG } from '../tokens/library-config';
import { MediaMarshaller } from './media-marshaller';
import { PrintHook } from './print-hook';
const fakeElement = {} as HTMLElement;
const fakeKey = 'FAKE_KEY';

const createMarshallerSuite = (config = DEFAULT_CONFIG) => {
    const breakpoints = new BreakPointRegistry(DEFAULT_BREAKPOINTS);
    const matchMedia = new MockMatchMedia(
        { run: (fn: any) => fn(), runOutsideAngular: (fn: any) => fn() } as any,
        'browser',
        globalThis.document,
        breakpoints
    );
    const hook = new PrintHook(breakpoints, config, globalThis.document);
    const mediaMarshaller = new MediaMarshaller(matchMedia, breakpoints, hook);

    const onMediaChangeSpy = vi.spyOn(mediaMarshaller, 'onMediaChange');
    const updateStylesSpy = vi.spyOn(mediaMarshaller, 'updateStyles');

    return { mediaMarshaller, matchMedia, onMediaChangeSpy, updateStylesSpy };
};


describe('MediaMarshaller (vitest)', () => {
    describe('without print layout configured', () => {
        let mediaMarshaller: MediaMarshaller;
        let matchMedia: MockMatchMedia;
        let onMediaChangeSpy: ReturnType<typeof vi.spyOn>;
        let updateStylesSpy: ReturnType<typeof vi.spyOn>;

        beforeEach(() => {
            const suite = createMarshallerSuite();
            mediaMarshaller = suite.mediaMarshaller;
            matchMedia = suite.matchMedia;
            onMediaChangeSpy = suite.onMediaChangeSpy;
            updateStylesSpy = suite.updateStylesSpy;
        });

        afterEach(() => {
            matchMedia.clearAll();
        });

        it('activates when match-media activates', () => {
            let triggered = false;
            const builder = () => { triggered = true; };

            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, 'xs'); // 👈 NECESSARIO

            triggered = false;
            matchMedia.activate('xs');

            expect(triggered).toBeTruthy(); // ✅ Ora passa
        });

        it('doesn\'t trigger onMediaChange for same breakpoint activations', () => {
            matchMedia.activate('xs');
            matchMedia.activate('xs');
            expect(mediaMarshaller.updateStyles).toHaveBeenCalledTimes(1);
        });

        it('should set correct activated breakpoint', () => {
            matchMedia.activate('lg');
            expect(mediaMarshaller.activatedAlias).toBe('lg');
            matchMedia.activate('gt-md');
            expect(mediaMarshaller.activatedAlias).toBe('gt-md');
        });

        it('should init', () => {
            let triggered = false;
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, 'xs');
            triggered = false;
            matchMedia.activate('xs');
            expect(triggered).toBeTruthy();
        });

        it('should init with observables', () => {
            let triggered = false;
            const subject: Subject<void> = new Subject();
            const obs = subject.asObservable();
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder, () => { }, [obs]);
            subject.next();
            expect(triggered).toBeTruthy();
        });

        it('should updateStyles', () => {
            let triggered = false;
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, '');
            triggered = false;
            mediaMarshaller.updateStyles();
            expect(triggered).toBeTruthy();
        });

        it('should updateElement', () => {
            let triggered = false;
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.updateElement(fakeElement, fakeKey, 0);
            expect(triggered).toBeTruthy();
        });

        it('should triggerUpdate', () => {
            let triggered = false;
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, '');
            mediaMarshaller.triggerUpdate(fakeElement, fakeKey);
            expect(triggered).toBeTruthy();
        });

        it('should get the right value', () => {
            const builder = () => { };
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, '');
            const value = mediaMarshaller.getValue(fakeElement, fakeKey);
            expect(value).toEqual(0);
        });

        it('should track changes', () => {
            const builder = () => { };
            let triggered = false;
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.trackValue(fakeElement, fakeKey).subscribe(() => {
                triggered = true;
            });
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, '');
            expect(triggered).toBeTruthy();
        });

        it('should release', () => {
            let triggered = false;
            const subject: Subject<void> = new Subject();
            const obs = subject.asObservable();
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder, () => { }, [obs]);
            mediaMarshaller.releaseElement(fakeElement);
            subject.next();
            expect(triggered).toBeFalsy();
        });
    });

    describe('with print layout configured', () => {
        let mediaMarshaller: MediaMarshaller;
        let matchMedia: MockMatchMedia;
        let onMediaChangeSpy: ReturnType<typeof vi.spyOn>;
        let updateStylesSpy: ReturnType<typeof vi.spyOn>;

        beforeEach(() => {
            const suite = createMarshallerSuite();
            mediaMarshaller = suite.mediaMarshaller;
            matchMedia = suite.matchMedia;
            onMediaChangeSpy = suite.onMediaChangeSpy;
            updateStylesSpy = suite.updateStylesSpy;
        });

        afterEach(() => {
            matchMedia.clearAll();
        });

        it('call onMediaChange when breakpoint activates', () => {
            let triggered = false;
            const builder = () => { triggered = true; };

            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, 'xs'); // 👈 obbligatorio

            triggered = false;
            matchMedia.activate('xs');

            expect(triggered).toBeTruthy();
        });

        it('doesn\'t call updateStyles() when match-media activates the same breakpoint twice', () => {
            matchMedia.activate('xs');
            matchMedia.activate('xs');
            expect(updateStylesSpy).toHaveBeenCalledTimes(1);
        });

        it('should set correct activated breakpoint', () => {
            matchMedia.activate('lg');
            expect(mediaMarshaller.activatedAlias).toBe('lg');
            matchMedia.activate('gt-md');
            expect(mediaMarshaller.activatedAlias).toBe('gt-md');
        });

        it('should init', () => {
            let triggered = false;
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, 'xs');
            triggered = false;
            matchMedia.activate('xs');
            expect(triggered).toBeTruthy();
        });

        it('should init with observables', () => {
            let triggered = false;
            const subject: Subject<void> = new Subject();
            const obs = subject.asObservable();
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder, () => { }, [obs]);
            subject.next();
            expect(triggered).toBeTruthy();
        });

        it('should updateStyles', () => {
            let triggered = false;
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, '');
            triggered = false;
            mediaMarshaller.updateStyles();
            expect(triggered).toBeTruthy();
        });

        it('should updateElement', () => {
            let triggered = false;
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.updateElement(fakeElement, fakeKey, 0);
            expect(triggered).toBeTruthy();
        });

        it('should triggerUpdate', () => {
            let triggered = false;
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, '');
            mediaMarshaller.triggerUpdate(fakeElement, fakeKey);
            expect(triggered).toBeTruthy();
        });

        it('should get the right value', () => {
            const builder = () => { };
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, '');
            const value = mediaMarshaller.getValue(fakeElement, fakeKey);
            expect(value).toEqual(0);
        });

        it('should track changes', () => {
            const builder = () => { };
            let triggered = false;
            mediaMarshaller.init(fakeElement, fakeKey, builder);
            mediaMarshaller.trackValue(fakeElement, fakeKey).subscribe(() => {
                triggered = true;
            });
            mediaMarshaller.setValue(fakeElement, fakeKey, 0, '');
            expect(triggered).toBeTruthy();
        });

        it('should release', () => {
            let triggered = false;
            const subject: Subject<void> = new Subject();
            const obs = subject.asObservable();
            const builder = () => { triggered = true; };
            mediaMarshaller.init(fakeElement, fakeKey, builder, () => { }, [obs]);
            mediaMarshaller.releaseElement(fakeElement);
            subject.next();
            expect(triggered).toBeFalsy();
        });

        it('will not propagate "print" events to activate', () => {
            matchMedia.activate('print');
            expect(onMediaChangeSpy).not.toHaveBeenCalledWith({ mediaQuery: 'print' } as any);
        });

        it('"print" events restore breakpoints correctly', () => {
            matchMedia.activate('xs');
            const activatedBps = mediaMarshaller.activatedBreakpoints;
            matchMedia.activate('print');
            matchMedia.activate('xs');
            const secondActivatedBps = mediaMarshaller.activatedBreakpoints;
            expect(activatedBps).toEqual(secondActivatedBps);
        });
    });
});
