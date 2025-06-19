import { isPlatformServer } from '@angular/common';
import { Component } from '@angular/core';
import { describe, it, vi } from 'vitest';

import { expectNativeEl, makeCreateTestComponent } from 'ng-flex-layout/_private-utils/testing';
import { BreakPointRegistry } from '../breakpoints/break-point-registry';
import { MockMatchMedia } from '../match-media/mock/mock-match-media';
import { DEFAULT_CONFIG } from '../tokens/library-config';
import { StyleUtils } from './style-utils';
import { StylesheetMap } from 'ng-flex-layout';

const createStylerSuite = () => {
    const documentRef = globalThis.document;
    const platformId = 'browser';

    const stylesheetMap = {
        stylesheet: new Map(),
        addStyleToElement: vi.fn(),
        clearStyles: vi.fn(),
        getStyleForElement: vi.fn()
    } as unknown as StylesheetMap;

    const styler = new StyleUtils(
        stylesheetMap,
        false,
        platformId,
        DEFAULT_CONFIG
    );

    return { styler, document: documentRef, platformId };
};

@Component({
    selector: 'test-style-utils',
    template: '<span>PlaceHolder Template HTML</span>',
    standalone: false
})
class TestLayoutComponent { }

describe('StyleUtils (vitest)', () => {
    let styler: StyleUtils;
    let fixture: any;
    let platformId: Object;

    const componentWithTemplate = (template: string, styles?: any[]) => {
        fixture = makeCreateTestComponent(() => TestLayoutComponent)(template, styles);

        const { styler: _styler, platformId: _platformId } = createStylerSuite();
        styler = _styler;
        platformId = _platformId;
    };

    describe('display styles', () => {
        it('should not have a default for <div></div>', () => {
            componentWithTemplate('<div></div>');
            expectNativeEl(fixture).not.toHaveStyle({ display: 'block' }, styler);
        });

        it('should find "display" for inline style <div></div>', () => {
            componentWithTemplate('<div style="display: flex;"></div>');
            expectNativeEl(fixture).toHaveCSS({ display: 'flex' }, styler);
        });

        it('should find `display` from html style element', () => {
            componentWithTemplate(`
        <style>
          div.special { display: inline-block; }
        </style>
        <div class="special"></div>
      `);

            if (!isPlatformServer(platformId)) {
                expectNativeEl(fixture).toHaveCSS({ display: 'inline-block' }, styler);
            }
        });

        it('should find `display` from component styles', () => {
            componentWithTemplate('<div class="extra"></div>', ['div.extra { display: table; }']);

            if (!isPlatformServer(platformId)) {
                expectNativeEl(fixture).toHaveCSS({ display: 'table' }, styler);
            }
        });
    });
});
