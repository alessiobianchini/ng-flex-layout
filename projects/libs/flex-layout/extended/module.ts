/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {NgModule} from '@angular/core';
import {CoreModule} from 'ng-flex-layout/core';

import {DefaultImgSrcDirective} from './img-src/img-src';
import {DefaultClassDirective} from './class/class';
import {DefaultShowHideDirective} from './show-hide/show-hide';
import {DefaultStyleDirective} from './style/style';


const ALL_DIRECTIVES = [
    DefaultShowHideDirective,
    DefaultClassDirective,
    DefaultStyleDirective,
    DefaultImgSrcDirective,
];

/**
 * *****************************************************************
 * Define module for the Extended API
 * *****************************************************************
 */

@NgModule({
    imports: [CoreModule,...ALL_DIRECTIVES],
    declarations: [],
    exports: [...ALL_DIRECTIVES]
})
export class ExtendedModule {
}
