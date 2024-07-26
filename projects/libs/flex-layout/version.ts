/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Version } from '@angular/core';
import packageJson from './package.json';

/** Current version of Angular Flex-Layout. */
export const VERSION = new Version(packageJson.version);
