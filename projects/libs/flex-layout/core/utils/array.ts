/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Wraps the provided value in an array, unless the provided value is an array. */
function isReadonlyArray<T>(value: T | readonly T[]): value is readonly T[] {
    return Array.isArray(value);
}

/** Wraps the provided value in an array, unless the provided value is an array. */
export function coerceArray<T>(value: T | readonly T[]): T[] {
    return isReadonlyArray(value) ? [...value] : [value];
}
