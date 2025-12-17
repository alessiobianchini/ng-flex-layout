/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule } from '@angular/common';
import { Component, PLATFORM_ID } from '@angular/core';
import {
    BreakPointRegistry,
    DEFAULT_BREAKPOINTS,
    DEFAULT_CONFIG,
    LAYOUT_CONFIG,
    ɵMatchMedia as MatchMedia,
    ɵMockMatchMedia as MockMatchMedia,
    ɵMockMatchMediaProvider as MockMatchMediaProvider,
    SERVER_TOKEN,
    StyleUtils
} from 'ng-flex-layout/core';

import {
    expectNativeEl,
    makeCreateTestComponent
} from 'ng-flex-layout/_private-utils/testing';
import { describe, expect, it } from 'vitest';
import { DefaultStyleDirective } from './style';

const TEST_URL = 'https://example.com/test.png';

@Component({
    selector: 'test-style-component',
    standalone: true,
    template: `<div [ngStyle.xs]="{ 'font-size': '15px' }"></div>`,
    imports: [CommonModule, DefaultStyleDirective],
})
class TestStyleComponent {
    fontSize = 0;
    testUrl = TEST_URL;
    divStyle = { border: '2px solid green' };
}

describe('style directive (Vitest)', () => {
    const resolveDeps = (fixture: any) => ({
        mediaController: fixture.injector.get(MatchMedia) as MockMatchMedia,
        styler: fixture.injector.get(StyleUtils),
    });

    const createTestComponent = makeCreateTestComponent(
        () => TestStyleComponent,
        [
            MockMatchMediaProvider,
            { provide: MockMatchMedia, useExisting: MatchMedia },
            { provide: LAYOUT_CONFIG, useValue: DEFAULT_CONFIG },
        ]
    );

    [
        { mq: 'xs', styleStr: "{'font-size': '15px'}", styleObj: { 'font-size': '15px' } },
        { mq: 'sm', styleStr: "{'font-size': '16px'}", styleObj: { 'font-size': '16px' } },
        { mq: 'md', styleStr: "{'font-size': '17px'}", styleObj: { 'font-size': '17px' } },
        { mq: 'lg', styleStr: "{'font-size': '18px'}", styleObj: { 'font-size': '18px' } },
    ].forEach(({ mq, styleStr, styleObj }) => {
        it(`should apply ${styleStr} with '${mq}' media query`, async () => {
            const fixture = await createTestComponent(
                `<div [ngStyle.${mq}]="${styleStr}"></div>`,
                [],
                [{ provide: PLATFORM_ID, useValue: 'browser' }]
            );
            const { mediaController, styler } = resolveDeps(fixture);
            mediaController.activate(mq);
            expectNativeEl(fixture).toHaveStyle(styleObj, styler);
        });
    });

    it('should merge with default inline styles', async () => {
        const fixture = await createTestComponent(
            `<div style="color: blue" [ngStyle.xs]="{'font-size.px': '15'}"></div>`,
            [],
            [{ provide: PLATFORM_ID, useValue: 'browser' }]
        );
        const { mediaController, styler } = resolveDeps(fixture);
        expectNativeEl(fixture).toHaveStyle({ color: 'blue' }, styler);
        mediaController.activate('xs');
        expectNativeEl(fixture).toHaveStyle({ color: 'blue', 'font-size': '15px' }, styler);
    });

    it('should support raw-string notations', async () => {
        const fixture = await createTestComponent(
            `<div style="color: blue" ngStyle.xs="font-size: 15px; background-color: #fc2929;"></div>`,
            [],
            [{ provide: PLATFORM_ID, useValue: 'browser' }]
        );
        const { mediaController, styler } = resolveDeps(fixture);
        expectNativeEl(fixture).toHaveStyle({ color: 'blue' }, styler);
        mediaController.activate('xs');
        expectNativeEl(fixture).toHaveStyle({ 'font-size': '15px' }, styler);
        const bg = styler.lookupStyle(fixture.location.nativeElement.children[0], 'background-color');
        expect(bg === '#fc2929' || bg === 'rgb(252, 41, 41)').toBeTruthy();
    });

    it('should allow more than one responsive breakpoint on one element', async () => {
        const fixture = await createTestComponent(
            `<div fxLayout
            [ngStyle]="{'font-size': '10px', 'margin-left' : '13px'}"
            [ngStyle.xs]="{'font-size': '16px'}"
            [ngStyle.md]="{'font-size': '12px'}"></div>`,
            [],
            [{ provide: PLATFORM_ID, useValue: 'browser' }]
        );
        const { mediaController, styler } = resolveDeps(fixture);
        mediaController.activate('xs');
        expectNativeEl(fixture).toHaveStyle({ display: 'flex', 'font-size': '16px' }, styler);
        mediaController.activate('md');
        expectNativeEl(fixture).toHaveStyle({ 'font-size': '12px' }, styler);
        mediaController.activate('lg');
        expectNativeEl(fixture).toHaveStyle({ 'font-size': '10px', 'margin-left': '13px' }, styler);
    });

    it('should work with special ngStyle px notation', async () => {
        const fixture = await createTestComponent(
            `<div [ngStyle.xs]="{'font-size.px': 15}"></div>`,
            [],
            [{ provide: PLATFORM_ID, useValue: 'browser' }]
        );
        const { mediaController, styler } = resolveDeps(fixture);
        mediaController.activate('xs');
        expectNativeEl(fixture).toHaveStyle({ 'font-size': '15px' }, styler);
    });

    it('should work with bound values', async () => {
        const fixture = await createTestComponent(
            `<div [ngStyle.xs]="{'font-size.px': fontSize}"></div>`,
            [],
            [{ provide: PLATFORM_ID, useValue: 'browser' }]
        );
        const { mediaController, styler } = resolveDeps(fixture);
        fixture.instance.fontSize = 19;
        fixture.changeDetectorRef.detectChanges();
        mediaController.activate('xs');
        expectNativeEl(fixture).toHaveStyle({ 'font-size': '19px' }, styler);
    });

    it('should work with URLs', async () => {
        const fixture = await createTestComponent(
            `<div [ngStyle]="{'background-image': 'url(' + testUrl + ')', 'height': '300px'}"></div>`,
            [],
            [{ provide: PLATFORM_ID, useValue: 'browser' }]
        );
        const { styler } = resolveDeps(fixture);
        fixture.changeDetectorRef.detectChanges();
        const url = styler.lookupStyle(fixture.location.nativeElement.children[0], 'background-image');
        expect(url === `url("${TEST_URL}")` || url === `url(${TEST_URL})`).toBeTruthy();
    });

    it('should work with just ngStyle and preexisting styles', async () => {
        const fixture = await createTestComponent(
            `<div style="background-color: red; height: 100px; width: 100px;" [ngStyle]="divStyle"></div>`,
            [],
            [{ provide: PLATFORM_ID, useValue: 'browser' }]
        );
        const { styler } = resolveDeps(fixture);
        expectNativeEl(fixture).toHaveStyle({
            'background-color': 'red',
            height: '100px',
            width: '100px',
            border: '2px solid green',
        }, styler);
    });
});
