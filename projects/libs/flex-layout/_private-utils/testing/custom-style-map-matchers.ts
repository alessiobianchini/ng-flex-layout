import { expect } from 'vitest';

expect.extend({
    toHaveMap(received: Record<string, string>, expected: Record<string, string>) {
        const pass = Object.entries(expected).every(([k, v]) => received[k] === v);
        return {
            pass,
            message: () =>
                `Expected map ${JSON.stringify(received)} ${pass ? 'not ' : ''}to match ${JSON.stringify(expected)}`,
        };
    },
    toHaveCssClass(received: HTMLElement, className: string) {
        const hasClass = received.classList.contains(className);
        return {
            pass: hasClass,
            message: () =>
                `Expected element ${received.outerHTML} ${hasClass ? 'not ' : ''}to have class '${className}'`
        };
    },
    toHaveAttributes(received: HTMLElement, expected: Record<string, string>) {
        const allMatch = Object.entries(expected).every(
            ([key, value]) => received.getAttribute(key) === value
        );
        return {
            pass: allMatch,
            message: () =>
                `Expected element ${received.outerHTML} ${allMatch ? 'not ' : ''}to have attributes ${JSON.stringify(expected)}`
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
