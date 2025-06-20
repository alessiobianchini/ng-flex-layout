import { CommonModule } from '@angular/common';
import {
    Component,
    ComponentRef,
    DOCUMENT,
    EnvironmentInjector,
    Provider,
    createComponent,
    createEnvironmentInjector,
    importProvidersFrom,
    inject,
    runInInjectionContext
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from 'ng-flex-layout';
import { expect } from 'vitest';

export function makeCreateTestComponent(defaultProviders: Provider[] = []) {
    return async function createTestComponent(
        templateStr: string,
        styles: string[] = [],
        additionalProviders: Provider[] = []
    ) {
        const DynamicTestComponent = Component({
            selector: 'test-wrapper',
            standalone: true,
            template: templateStr,
            styles,
            imports: [CommonModule, FlexLayoutModule]
        })(class { });

        let finalInjector: EnvironmentInjector;

        const tmpInjector = createEnvironmentInjector([], {
            get: () => undefined,
            runInContext: (fn) => fn(),
            destroy: () => { }
        });

        runInInjectionContext(tmpInjector, () => {
            const parent = inject(EnvironmentInjector);
            finalInjector = createEnvironmentInjector(
                [
                    importProvidersFrom(BrowserModule, FlexLayoutModule),
                    { provide: DOCUMENT, useValue: window.document },
                    ...defaultProviders,
                    ...additionalProviders
                ],
                parent
            );
        });

        const fixture = await createComponent(DynamicTestComponent, {
            environmentInjector: finalInjector!
        });

        fixture.changeDetectorRef.detectChanges();
        return fixture;
    };
}

export function expectNativeEl(ref: ComponentRef<any>, instanceOptions?: any): any {
    Object.assign(ref.instance, instanceOptions || {});
    ref.changeDetectorRef.detectChanges();
    return expect(ref.location.nativeElement.children[0]);
}

export function expectEl(el: HTMLElement): any {
    return expect(el);
}

export function queryFor(ref: ComponentRef<any>, selector: string): HTMLElement[] {
    return Array.from(ref.location.nativeElement.querySelectorAll(selector));
}
