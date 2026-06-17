import { CommonModule } from '@angular/common';
import {
    Component,
    EnvironmentInjector,
    Provider,
    createComponent,
    createEnvironmentInjector,
    getDebugNode,
} from '@angular/core';
import type { ComponentRef, DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from 'ng-flex-layout';
import { BreakPointRegistry, MediaMarshaller, MediaObserver, StyleUtils } from 'ng-flex-layout/core';
import { expect } from 'vitest';

type ComponentFactory = () => any;

type FixtureLike = {
    componentInstance?: any
    debugElement?: DebugElement
    nativeElement?: any
    location?: { nativeElement: any }
    injector?: any
    changeDetectorRef?: { detectChanges: () => void }
    detectChanges?: () => void
    [key: string]: any
};

function getHostElement(fixture: any): any {
    return fixture?.location?.nativeElement ?? fixture?.nativeElement ?? fixture?.componentRef?.location?.nativeElement;
}

function getInstance(fixture: any): any {
    return fixture?.componentInstance ?? fixture?.instance ?? fixture?.componentRef?.instance;
}

function detectChanges(fixture: any): void {
    const hostEl = fixture?.location?.nativeElement ?? fixture?.nativeElement ?? fixture?.componentRef?.location?.nativeElement;
    if (hostEl) {
        const wrapper = hostEl.querySelector('#testing-wrapper-node');
        if (wrapper) {
            wrapper.dispatchEvent(new CustomEvent('change'));
        }
    }

    if (typeof fixture?.detectChanges === 'function') {
        fixture.detectChanges();
        return;
    }
    if (fixture?.changeDetectorRef?.detectChanges) {
        fixture.changeDetectorRef.detectChanges();
        return;
    }
    if (fixture?.componentRef?.changeDetectorRef?.detectChanges) {
        fixture.componentRef.changeDetectorRef.detectChanges();
    }
}

function asFixtureLike<T>(ref: ComponentRef<T>): ComponentRef<T> & FixtureLike {
    const fixture = ref as ComponentRef<T> & FixtureLike;

    fixture.componentInstance ??= ref.instance;
    fixture.location ??= ref.location as any;
    fixture.injector ??= ref.injector as any;
    fixture.changeDetectorRef ??= ref.changeDetectorRef as any;
    fixture.nativeElement ??= ref.location.nativeElement;
    fixture.detectChanges ??= () => {
        const hostEl = fixture.nativeElement ?? fixture.location?.nativeElement;
        if (hostEl) {
            const wrapper = hostEl.querySelector('#testing-wrapper-node');
            if (wrapper) {
                wrapper.dispatchEvent(new CustomEvent('change'));
            }
        }
        ref.changeDetectorRef.detectChanges();
    };

    const debugNode = getDebugNode(ref.location.nativeElement);
    if (debugNode && (debugNode as any).children) {
        const wrapper = (debugNode as any).children.find((c: any) => c.nativeElement?.id === 'testing-wrapper-node');
        if (wrapper) {
            Object.defineProperty(debugNode, 'children', {
                get: () => wrapper.children
            });
            Object.defineProperty(debugNode, 'childNodes', {
                get: () => wrapper.childNodes
            });
        }
        fixture.debugElement ??= debugNode as DebugElement;
    }

    return fixture;
}

type TrackedRef = {
    componentRef: ComponentRef<any>
    envInjector?: EnvironmentInjector
};

const TRACKED_REFS: TrackedRef[] = [];
let cleanupRegistered = false;

function registerCleanup() {
    if (cleanupRegistered) {
        return;
    }
    cleanupRegistered = true;

    const afterEachHook = (globalThis as any).afterEach as undefined | ((fn: () => void) => void);
    if (typeof afterEachHook !== 'function') {
        return;
    }

    afterEachHook(() => {
        while (TRACKED_REFS.length) {
            const tracked = TRACKED_REFS.pop()!;
            try {
                tracked.componentRef.destroy();
            } catch {
                // ignore
            }
            if (tracked.envInjector && tracked.envInjector !== (tracked.componentRef.injector as any)) {
                try {
                    tracked.envInjector.destroy();
                } catch {
                    // ignore
                }
            }
        }
    });
}

export function makeCreateTestComponent(
    baseOrProviders: ComponentFactory | Provider[] = [],
    defaultProviders: Provider[] = []
) {
    const hasBase = typeof baseOrProviders === 'function';
    const BaseComponent = hasBase ? (baseOrProviders as ComponentFactory)() : class { };
    const providers = [
        ...(hasBase ? [] : (baseOrProviders as Provider[])),
        ...defaultProviders
    ];

    return function createTestComponent(
        templateStr: string,
        styles: string[] = [],
        additionalProviders: Provider[] = [],
        additionalImports: any[] = []
    ) {
        registerCleanup();

        const DynamicTestComponent = Component({
            selector: 'test-wrapper',
            standalone: true,
            template: `<div (change)="0" id="testing-wrapper-node" style="display:contents">${templateStr}</div>`,
            styles,
            imports: [CommonModule, FlexLayoutModule, ...additionalImports]
        })(class extends BaseComponent { });

        const parentInjector = TestBed.inject(EnvironmentInjector);
        const isolatedFlexProviders: Provider[] = [
            { provide: BreakPointRegistry, useClass: BreakPointRegistry },
            { provide: MediaMarshaller, useClass: MediaMarshaller },
            { provide: MediaObserver, useClass: MediaObserver },
        ];

        const finalProviders = [...isolatedFlexProviders, ...providers, ...additionalProviders];
        const envInjector = createEnvironmentInjector(finalProviders, parentInjector);

        const componentRef = createComponent(DynamicTestComponent, { environmentInjector: envInjector });
        TRACKED_REFS.push({ componentRef, envInjector });

        const fixture = asFixtureLike(componentRef);
        fixture.detectChanges?.();
        return fixture;
    };
}

export function expectNativeEl(fixture: any, instanceOptions?: any): any {
    Object.assign(getInstance(fixture) ?? {}, instanceOptions || {});
    detectChanges(fixture);
    const host = getHostElement(fixture);
    const wrapper = host.querySelector('#testing-wrapper-node');
    const target = wrapper ? wrapper.children[0] : host.children[0];
    return expect(target);
}

export function expectEl(el: HTMLElement): any {
    const native = (el as any)?.nativeElement ?? el;
    return expect(native);
}

export function queryFor(fixture: any, selector: string): HTMLElement[] {
    const host = getHostElement(fixture);
    const wrapper = host.querySelector('#testing-wrapper-node');
    const target = wrapper ? wrapper : host;
    const nodes = Array.from(target.querySelectorAll(selector));
    return nodes.map((node) => (getDebugNode(node as any) as any) ?? node) as any;
}
