import { isPlatformServer } from '@angular/common';
import { describe, it, beforeEach, vi } from 'vitest';
import { StylesheetMap } from 'ng-flex-layout';
import { StyleUtils } from './style-utils';
import { DEFAULT_CONFIG } from '../tokens/library-config';
import { makeCreateTestComponent, expectNativeEl } from 'ng-flex-layout/_private-utils/testing';

const createTestComponent = makeCreateTestComponent();
let styler: StyleUtils;
let platformId: string;

const createStylerSuite = () => {
  const documentRef = globalThis.document;
  platformId = 'browser';

  const stylesheetMap = {
    stylesheet: new Map(),
    addStyleToElement: vi.fn(),
    clearStyles: vi.fn(),
    getStyleForElement: vi.fn()
  } as unknown as StylesheetMap;

  styler = new StyleUtils(stylesheetMap, false, platformId, DEFAULT_CONFIG);
};

describe('StyleUtils (Vitest)', () => {
  beforeEach(() => {
    createStylerSuite();
  });

  describe('display styles', () => {
    it('should not have a default for <div></div>', async () => {
      const fixture = await createTestComponent('<div></div>');
      expectNativeEl(fixture).not.toHaveStyle({ display: 'block' }, styler);
    });

    it('should find "display" for inline style', async () => {
      const fixture = await createTestComponent('<div style="display: flex;"></div>');
      expectNativeEl(fixture).toHaveCSS({ display: 'flex' }, styler);
    });

    it('should find display from <style> in template', async () => {
      const fixture = await createTestComponent(`
        <style>
          div.special { display: inline-block; }
        </style>
        <div class="special"></div>
      `);
      if (!isPlatformServer(platformId)) {
        expectNativeEl(fixture).toHaveCSS({ display: 'inline-block' }, styler);
      }
    });

    it('should find display from component styles', async () => {
      const fixture = await createTestComponent(
        '<div class="extra"></div>',
        ['div.extra { display: table; }']
      );
      if (!isPlatformServer(platformId)) {
        expectNativeEl(fixture).toHaveCSS({ display: 'table' }, styler);
      }
    });
  });
});
