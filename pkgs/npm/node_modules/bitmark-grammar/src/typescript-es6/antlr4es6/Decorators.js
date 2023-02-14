/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
export function NotNull(target, propertyKey, propertyDescriptor) {
    // intentionally empty
}
export function Nullable(target, propertyKey, propertyDescriptor) {
    // intentionally empty
}
export function Override(target, propertyKey, propertyDescriptor) {
    // do something with 'target' ...
}
export function SuppressWarnings(options) {
    return (target, propertyKey, descriptor) => {
        // intentionally empty
    };
}
