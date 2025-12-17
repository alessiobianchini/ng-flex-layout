import 'reflect-metadata';
import 'zone.js';
import 'zone.js/testing';

type AnyFn = (...args: any[]) => any;

function wrapInProxyZone<T extends AnyFn>(fn: T): T {
    const ZoneCtor = (globalThis as any).Zone as any;
    const ProxyZoneSpec = ZoneCtor?.ProxyZoneSpec as any;
    if (!ProxyZoneSpec) return fn;

    return function proxyZoned(this: any, ...args: any[]) {
        const proxyZone = ZoneCtor.current.fork(new ProxyZoneSpec());
        return proxyZone.run(fn, this, args);
    } as any as T;
}

function patchHook(name: 'beforeAll' | 'beforeEach' | 'afterEach' | 'afterAll') {
    const original = (globalThis as any)[name] as undefined | ((fn: AnyFn, timeout?: number) => unknown);
    if (typeof original !== 'function') return;

    (globalThis as any)[name] = (fn: AnyFn, timeout?: number) => {
        return original(fn ? wrapInProxyZone(fn) : fn, timeout);
    };
}

function patchTest(name: 'it' | 'test') {
    const original = (globalThis as any)[name] as any;
    if (typeof original !== 'function') return;

    const patched = ((title: any, fn?: AnyFn, timeout?: number) => {
        return original(title, fn ? wrapInProxyZone(fn) : fn, timeout);
    }) as any;

    for (const variant of ['skip', 'only', 'todo', 'concurrent', 'fails']) {
        if (typeof original[variant] === 'function') {
            patched[variant] = (title: any, fn?: AnyFn, timeout?: number) => {
                return original[variant](title, fn ? wrapInProxyZone(fn) : fn, timeout);
            };
        }
    }

    (globalThis as any)[name] = patched;
}

// Vitest doesn't integrate with Zone.js out of the box.
// Patch hooks/tests so Angular's `waitForAsync`/`fakeAsync` see a ProxyZone.
patchHook('beforeAll');
patchHook('beforeEach');
patchHook('afterEach');
patchHook('afterAll');
patchTest('it');
patchTest('test');

import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// Initialise Angular testing environment once for all Vitest suites.
const testBed = getTestBed();
if (!testBed.platform) {
    testBed.initTestEnvironment(
        BrowserDynamicTestingModule,
        platformBrowserDynamicTesting(),
        {
            teardown: { destroyAfterEach: true, rethrowErrors: true }
        }
    );
}

// Match Jasmine-style behavior: reset TestBed after each test so suites can safely reconfigure.
if (typeof (globalThis as any).afterEach === 'function') {
    (globalThis as any).afterEach(() => {
        try {
            getTestBed().resetTestingModule();
        } catch {
            // ignore
        }
    });
}

// Polyfill matchMedia for jsdom.
if (typeof window !== 'undefined' && !window.matchMedia) {
    window.matchMedia = (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false
    }) as any;
}

// Register custom matchers once so they are available globally.
import './projects/libs/flex-layout/_private-utils/testing/custom-matchers';
import './projects/libs/flex-layout/_private-utils/testing/custom-style-map-matchers';
