"use strict";
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
exports.__esModule = true;
exports.CommonTokenFactory = void 0;
var CommonToken_1 = require("./CommonToken");
var Interval_1 = require("./misc/Interval");
var Decorators_1 = require("./Decorators");
/**
 * This default implementation of {@link TokenFactory} creates
 * {@link CommonToken} objects.
 */
var CommonTokenFactory = /** @class */ (function () {
    /**
     * Constructs a {@link CommonTokenFactory} with the specified value for
     * {@link #copyText}.
     *
     * When `copyText` is `false`, the {@link #DEFAULT} instance
     * should be used instead of constructing a new instance.
     *
     * @param copyText The value for {@link #copyText}.
     */
    function CommonTokenFactory(copyText) {
        if (copyText === void 0) { copyText = false; }
        this.copyText = copyText;
    }
    CommonTokenFactory.prototype.create = function (source, type, text, channel, start, stop, line, charPositionInLine) {
        var t = new CommonToken_1.CommonToken(type, text, source, channel, start, stop);
        t.line = line;
        t.charPositionInLine = charPositionInLine;
        if (text == null && this.copyText && source.stream != null) {
            t.text = source.stream.getText(Interval_1.Interval.of(start, stop));
        }
        return t;
    };
    CommonTokenFactory.prototype.createSimple = function (type, text) {
        return new CommonToken_1.CommonToken(type, text);
    };
    __decorate([
        Decorators_1.Override
    ], CommonTokenFactory.prototype, "create");
    __decorate([
        Decorators_1.Override
    ], CommonTokenFactory.prototype, "createSimple");
    return CommonTokenFactory;
}());
exports.CommonTokenFactory = CommonTokenFactory;
(function (CommonTokenFactory) {
    /**
     * The default {@link CommonTokenFactory} instance.
     *
     * This token factory does not explicitly copy token text when constructing
     * tokens.
     */
    CommonTokenFactory.DEFAULT = new CommonTokenFactory();
})(CommonTokenFactory = exports.CommonTokenFactory || (exports.CommonTokenFactory = {}));
exports.CommonTokenFactory = CommonTokenFactory;
