/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule, isPlatformServer } from '@angular/common';
import { Component, PLATFORM_ID } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import {
    ɵMatchMedia as MatchMedia,
    ɵMockMatchMedia as MockMatchMedia,
    ɵMockMatchMediaProvider as MockMatchMediaProvider,
    SERVER_TOKEN,
    StyleUtils,
} from 'ng-flex-layout/core';

import { _dom as _, customMatchers, expect, expectEl, makeCreateTestComponent, queryFor } from 'ng-flex-layout/_private-utils/testing';
import { FlexLayoutModule } from '../../module';

const SRC_URLS = {
    'xs': [
        'https://dummyimage.com/300x200/c7751e/fff.png',
        'https://dummyimage.com/300x200/c7751e/000.png'
    ],
    'gt-xs': [
        'https://dummyimage.com/400x250/c7c224/fff.png',
        'https://dummyimage.com/400x250/c7c224/000.png'
    ],
    'md': [
        'https://dummyimage.com/500x300/76c720/fff.png',
        'https://dummyimage.com/500x300/76c720/000.png'
    ],
    'lt-lg': [
        'https://dummyimage.com/600x350/25c794/fff.png',
        'https://dummyimage.com/600x350/25c794/000.png'
    ],
    'lg': [
        'https://dummyimage.com/700x400/258cc7/fff.png',
        'https://dummyimage.com/700x400/258cc7/000.png'
    ],
    'lt-xl': [
        'https://dummyimage.com/800x500/b925c7/ffffff.png',
        'https://dummyimage.com/800x500/b925c7/000.png'
    ]
};
const DEFAULT_SRC = 'https://dummyimage.com/300x300/c72538/ffffff.png';

describe('img-src directive', () => {
    let fixture: any;
    let mediaController: MockMatchMedia;
    let platformId: Object;
    let styler: StyleUtils;

    let componentWithTemplate = (template: string) => {
        fixture = makeCreateTestComponent(() => TestSrcComponent)(template);

        inject([MatchMedia, PLATFORM_ID, StyleUtils],
            (_matchMedia: MockMatchMedia, _platformId: Object, _styler: StyleUtils) => {
                mediaController = _matchMedia;
                platformId = _platformId;
                styler = _styler;
            })();
    };

    beforeEach(() => {
        jasmine.addMatchers(customMatchers);

        // Configure testbed to prepare services
        TestBed.configureTestingModule({
            imports: [CommonModule, FlexLayoutModule],
            declarations: [TestSrcComponent],
            providers: [
                MockMatchMediaProvider,
                {provide: SERVER_TOKEN, useValue: true}
            ]
        });
    });

    describe('with static api', () => {
        it('should preserve the static src attribute', () => {
            let url = 'https://dummyimage.com/300x300/c72538/ffffff.png';
            componentWithTemplate(`
        <img src="${url}">
      `);
            const img = queryFor(fixture, 'img')[0].nativeElement;

            fixture.detectChanges();
            expect(_.getAttribute(img, 'src')).toEqual(url);
        });

        it('should work with empty src attributes', () => {
            componentWithTemplate(`
        <img src="">
      `);
            const img = queryFor(fixture, 'img')[0].nativeElement;

            fixture.detectChanges();
            expect(img).toHaveAttributes({
                src: ''
            });
        });

        it('should work standard input bindings', () => {
            componentWithTemplate(`
        <img [src]="defaultSrc" [src.xs]="xsSrc">
      `);
            const img = queryFor(fixture, 'img')[0];
            const imgEl = img.nativeElement;

            fixture.detectChanges();
            if (isPlatformServer(platformId)) {
                expectEl(img).toHaveStyle({
                    'content': 'url(https://dummyimage.com/300x300/c72538/ffffff.png)'
                }, styler);

                let url = 'https://dummyimage.com/700x400/258cc7/fff.png';
                fixture.componentInstance.defaultSrc = url;
                fixture.detectChanges();
                expectEl(img).toHaveStyle({
                    'content': `url(${url})`
                }, styler);
            } else {
                expect(imgEl).toHaveAttributes({
                    src: 'https://dummyimage.com/300x300/c72538/ffffff.png'
                });

                let url = 'https://dummyimage.com/700x400/258cc7/fff.png';
                fixture.componentInstance.defaultSrc = url;
                fixture.detectChanges();
                expect(imgEl).toHaveAttributes({ src: url });
            }
        });

        it('should work when `src` value is not defined', () => {
            componentWithTemplate(`
        <img src>
      `);

            const img = queryFor(fixture, 'img')[0].nativeElement;
            fixture.detectChanges();
            expect(img).toHaveAttributes({
                src: ''
            });
        });

        it('should only work with "<img>" elements.', () => {
            componentWithTemplate(`
        <iframe src.xs="none.png" >
      `);

            const img = queryFor(fixture, 'iframe')[0].nativeElement;
            fixture.detectChanges();
            expect(img).not.toHaveAttributes({
                src: ''
            });
        });

        it('should not replace src on the server', () => {
            if (isPlatformServer(platformId)) {
                componentWithTemplate(`
          <img src="https://dummyimage.com/300x300/c72538/ffffff.png">
        `);

                const img = queryFor(fixture, 'img')[0];
                fixture.detectChanges();
                expectEl(img).not.toHaveStyle({
                    'content': 'url(https://dummyimage.com/300x300/c72538/ffffff.png)'
                }, styler);
            }
        });

    });

    describe('with responsive api', () => {

        it('should work on the server', () => {
            if (isPlatformServer(platformId)) {
                componentWithTemplate(`
          <img [src]="'https://dummyimage.com/300x300/c72538/ffffff.png'" [src.md]="mdSrc">
        `);
                fixture.detectChanges();

                const img = queryFor(fixture, 'img')[0];

                expectEl(img).toHaveStyle({
                    'content': 'url(https://dummyimage.com/300x300/c72538/ffffff.png)'
                }, styler);

                mediaController.activate('md');
                fixture.detectChanges();
                expectEl(img).toHaveStyle({
                    'content': `url(${SRC_URLS['md'][0]})`
                }, styler);
            }
        });

        it('should work with a isolated image element and responsive srcs', () => {
            componentWithTemplate(`
        <img [src]="xsSrc"
             [src.md]="mdSrc">
      `);
            fixture.detectChanges();

            let img = queryFor(fixture, 'img')[0];
            let imgEl = img.nativeElement;

            mediaController.activate('md');
            fixture.detectChanges();
            expect(imgEl).toBeDefined();
            if (isPlatformServer(platformId)) {
                expectEl(img).toHaveStyle({
                    'content': `url(${SRC_URLS['md'][0]})`
                }, styler);

                // When activating an unused breakpoint, fallback to default [src] value
                mediaController.activate('xl');
                fixture.detectChanges();
                expectEl(img).toHaveStyle({
                    'content': `url(${SRC_URLS['xs'][0]})`
                }, styler);
            } else {
                expect(imgEl).toHaveAttributes({
                    src: SRC_URLS['md'][0]
                });

                // When activating an unused breakpoint, fallback to default [src] value
                mediaController.activate('xl');
                fixture.detectChanges();
                expect(imgEl).toHaveAttributes({
                    src: SRC_URLS['xs'][0]
                });
            }
        });

        it('should work with responsive srcs, starting and ending with fallback', () => {
            const defaultSrc = 'https://www.gstatic.com/webp/gallery2/1.png';
            const xsSrc = 'https://www.gstatic.com/webp/gallery3/1.png';
            componentWithTemplate(`
        <img src="${defaultSrc}" src.xs="${xsSrc}">
      `);
            fixture.detectChanges();

            let img = queryFor(fixture, 'img')[0];
            let imgEl = img.nativeElement;
            expect(imgEl).toBeDefined();
            if (isPlatformServer(platformId)) {
                expectEl(img).toHaveStyle({
                    'content': `url(${defaultSrc})`
                }, styler);

                mediaController.activate('xs');
                fixture.detectChanges();
                expectEl(img).toHaveStyle({
                    'content': `url(${xsSrc})`
                }, styler);

                mediaController.activate('lg');
                fixture.detectChanges();
                expectEl(img).toHaveStyle({
                    'content': `url(${defaultSrc})`
                }, styler);
            } else {
                expect(imgEl).toHaveAttributes({
                    src: defaultSrc
                });

                mediaController.activate('xs');
                fixture.detectChanges();
                expect(imgEl).toHaveAttributes({
                    src: xsSrc
                });

                mediaController.activate('lg');
                fixture.detectChanges();
                expect(imgEl).toHaveAttributes({
                    src: defaultSrc
                });
            }
        });

        it('should work if default [src] is not defined', () => {
            componentWithTemplate(`
         <img [src.md]="mdSrc">
       `);
            fixture.detectChanges();
            mediaController.activate('md');
            fixture.detectChanges();

            let img = queryFor(fixture, 'img')[0];
            let imgEl = img.nativeElement;
            expect(imgEl).toBeDefined();
            if (isPlatformServer(platformId)) {
                expect(imgEl).toHaveAttributes({
                    src: ''
                });
                expectEl(img).toHaveStyle({
                    'content': `url(${SRC_URLS['md'][0]})`
                }, styler);

                // When activating an unused breakpoint, fallback to default [src] value
                mediaController.activate('xl');
                fixture.detectChanges();
                expectEl(img).not.toHaveStyle({
                    'content': `url(${SRC_URLS['md'][0]})`
                }, styler);
                expect(imgEl).toHaveAttributes({
                    src: ''
                });
            } else {
                expect(imgEl).toHaveAttributes({
                    src: SRC_URLS['md'][0]
                });

                // When activating an unused breakpoint, fallback to default [src] value
                mediaController.activate('xl');
                fixture.detectChanges();
                expect(imgEl).toHaveAttributes({
                    src: ''
                });
            }
        });

    });
});

// *****************************************************************
// Template Component
// *****************************************************************

@Component({
    selector: 'test-src-api',
    template: '',
    standalone: false
})
class TestSrcComponent {
    defaultSrc = '';
    xsSrc = '';
    mdSrc = '';
    lgSrc = '';

    constructor() {
        this.defaultSrc = DEFAULT_SRC;
        this.xsSrc = SRC_URLS['xs'][0];
        this.mdSrc = SRC_URLS['md'][0];
        this.lgSrc = SRC_URLS['lg'][0];

    }
}


