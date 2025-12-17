import { expect } from 'vitest';

function unwrapNativeElement(value: any): HTMLElement {
    return (value && typeof value === 'object' && 'nativeElement' in value) ? (value as any).nativeElement : value;
}

expect.extend({
    toHaveMap(received: Record<string, string>, expected: Record<string, string>) {
        const pass = Object.entries(expected).every(([k, v]) => received[k] === v);
        return {
            pass,
            message: () =>
                `Expected map ${JSON.stringify(received)} ${pass ? 'not ' : ''}to match ${JSON.stringify(expected)}`,
        };
    },
    toHaveCssClass(received: any, className: string) {
        const el = unwrapNativeElement(received);
        const hasClass = el.classList.contains(className);
        return {
            pass: hasClass,
            message: () =>
                `Expected element ${el.outerHTML} ${hasClass ? 'not ' : ''}to have class '${className}'`
        };
    },
    toHaveAttributes(received: any, expected: Record<string, string>) {
        const el = unwrapNativeElement(received);
        const allMatch = Object.entries(expected).every(
            ([key, value]) => el.getAttribute(key) === value
        );
        return {
            pass: allMatch,
            message: () =>
                `Expected element ${el.outerHTML} ${allMatch ? 'not ' : ''}to have attributes ${JSON.stringify(expected)}`
        };
    }
});

declare module 'vitest' {
    export interface Assertion<T = any> {
        toHaveMap(expected: Record<string, string>): void;
    }
    export interface AsymmetricMatchersContaining {
        toHaveMap(expected: Record<string, string>): void;
    }
    export interface Assertion<T = any> {
        toHaveCssClass(expected: string): void;
    }
    export interface AsymmetricMatchersContaining {
        toHaveCssClass(expected: string): void;
    }
    export interface Assertion<T = any> {
        toHaveAttributes(expected: Record<string, string>): void;
    }
    export interface AsymmetricMatchersContaining {
        toHaveAttributes(expected: Record<string, string>): void;
    }
}
