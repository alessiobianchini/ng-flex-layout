declare let global: any;
const _global = <any>(typeof window === 'undefined' ? global : window);

import { _dom as _ } from './dom-tools';

import { applyCssPrefixes, extendObject, } from 'ng-flex-layout/_private-utils';
import { StyleUtils } from 'ng-flex-layout/core';
import { expect } from 'vitest';

expect.extend({
    toHaveText(received: any, expectedText: string) {
        const actualText = elementText(received);
        const pass = actualText === expectedText;
        return {
            pass,
            message: () =>
                `Expected element text ${actualText} to ${pass ? 'not ' : ''}equal ${expectedText}`,
        };
    },

    toHaveCssClass(received: any, className: string) {
        const pass = _.hasClass(received, className);
        return {
            pass,
            message: () =>
                `Expected element ${received.outerHTML} ${pass ? 'not ' : ''}to have class "${className}"`,
        };
    },
    

    toHaveMap(received: { [key: string]: string }, expected: { [key: string]: string }) {
        const allPassed = Object.entries(expected).every(([k, v]) => received[k] === v);
        return {
            pass: allPassed,
            message: () =>
                `Expected map ${JSON.stringify(received)} ${allPassed ? 'not ' : ''}to match ${JSON.stringify(expected)}`,
        };
    },

    toHaveAttributes(received: HTMLElement, expected: { [key: string]: string }) {
        const allPassed = Object.entries(expected).every(
            ([name, value]) => _.hasAttribute(received, name) && _.getAttribute(received, name) === value
        );
        return {
            pass: allPassed,
            message: () =>
                `Expected element ${received.outerHTML} ${allPassed ? 'not ' : ''}to have attributes ${JSON.stringify(expected)}`,
        };
    },

    toHaveStyle(received: HTMLElement, styles: { [k: string]: string } | string, styler: StyleUtils) {
        return buildCompareStyleFunction(true)(received, styles, styler);
    },

    toHaveCSS(received: HTMLElement, styles: { [k: string]: string } | string, styler: StyleUtils) {
        return buildCompareStyleFunction(false)(received, styles, styler);
    },
});

function buildCompareStyleFunction(inlineOnly = true) {
    return function (
        actual: any,
        styles: { [k: string]: string } | string,
        styler: StyleUtils
    ) {
        const found = {};
        const styleMap: { [k: string]: string } = {};

        if (typeof styles === 'string') {
            styleMap[styles] = '';
        } else {
            Object.assign(styleMap, styles);
        }

        let allPassed = Object.keys(styleMap).length !== 0;
        Object.keys(styleMap).forEach(prop => {
            const { elHasStyle, current } = hasPrefixedStyles(
                actual,
                prop,
                styleMap[prop],
                inlineOnly,
                styler
            );
            allPassed = allPassed && elHasStyle;
            if (!elHasStyle) {
                extendObject(found, current);
            }
        });

        return {
            pass: allPassed,
            message: () => {
                const expectedValueStr =
                    typeof styles === 'string'
                        ? styleMap
                        : JSON.stringify(styleMap, null, 2);
                const foundValueStr = inlineOnly
                    ? actual.outerHTML
                    : JSON.stringify(found);

                return `Expected ${foundValueStr}${!allPassed ? '' : ' not'} to contain the CSS ${typeof styles === 'string' ? 'property' : 'styles'
                    } '${expectedValueStr}'`;
            }
        };
    };
}


/**
 * Validate presence of requested style or use fallback
 * to possible `prefixed` styles. Useful when some browsers
 * (Safari, IE, etc) will use prefixed style instead of defaults.
 */
function hasPrefixedStyles(actual: HTMLElement,
    key: string,
    value: string,
    inlineOnly: boolean,
    styler: StyleUtils) {
    const current = {};

    if (value === '*') {
        return { elHasStyle: styler.lookupStyle(actual, key, inlineOnly) !== '', current };
    }

    value = value.trim();
    let elHasStyle = styler.lookupStyle(actual, key, inlineOnly) === value;
    if (!elHasStyle) {
        let prefixedStyles = applyCssPrefixes({ [key]: value });
        Object.keys(prefixedStyles).forEach(prop => {
            // Search for optional prefixed values
            elHasStyle = elHasStyle ||
                styler.lookupStyle(actual, prop, inlineOnly) === prefixedStyles[prop];
        });
    }
    // Return BOTH confirmation and current computed key values (if confirmation == false)
    return { elHasStyle, current };
}

function elementText(n: any): string {
    const hasNodes = (m: any) => {
        const children = _.childNodes(m);
        return children && children['length'];
    };

    if (n instanceof Array) {
        return n.map(elementText).join('');
    }

    if (_.isCommentNode(n)) {
        return '';
    }

    if (_.isElementNode(n) && _.tagName(n) == 'CONTENT') {
        return elementText(Array.prototype.slice.apply(_.getDistributedNodes(n)));
    }

    if (_.hasShadowRoot(n)) {
        return elementText(_.childNodesAsList(_.getShadowRoot(n)));
    }

    if (hasNodes(n)) {
        return elementText(_.childNodesAsList(n));
    }

    return _.getText(n);
}

