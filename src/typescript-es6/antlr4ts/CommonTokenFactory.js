/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonToken } from "./CommonToken";
import { Interval } from "./misc/Interval";
import { Override } from "./Decorators";
/**
 * This default implementation of {@link TokenFactory} creates
 * {@link CommonToken} objects.
 */
export class CommonTokenFactory {
    /**
     * Constructs a {@link CommonTokenFactory} with the specified value for
     * {@link #copyText}.
     *
     * When `copyText` is `false`, the {@link #DEFAULT} instance
     * should be used instead of constructing a new instance.
     *
     * @param copyText The value for {@link #copyText}.
     */
    constructor(copyText = false) {
        this.copyText = copyText;
    }
    create(source, type, text, channel, start, stop, line, charPositionInLine) {
        let t = new CommonToken(type, text, source, channel, start, stop);
        t.line = line;
        t.charPositionInLine = charPositionInLine;
        if (text == null && this.copyText && source.stream != null) {
            t.text = source.stream.getText(Interval.of(start, stop));
        }
        return t;
    }
    createSimple(type, text) {
        return new CommonToken(type, text);
    }
}
__decorate([
    Override
], CommonTokenFactory.prototype, "create", null);
__decorate([
    Override
], CommonTokenFactory.prototype, "createSimple", null);
(function (CommonTokenFactory) {
    /**
     * The default {@link CommonTokenFactory} instance.
     *
     * This token factory does not explicitly copy token text when constructing
     * tokens.
     */
    CommonTokenFactory.DEFAULT = new CommonTokenFactory();
})(CommonTokenFactory || (CommonTokenFactory = {}));
