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
exports.XPathLexerErrorListener = void 0;
var Decorators_1 = require("../../Decorators");
var XPathLexerErrorListener = /** @class */ (function () {
    function XPathLexerErrorListener() {
    }
    XPathLexerErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        // intentionally empty
    };
    __decorate([
        Decorators_1.Override
    ], XPathLexerErrorListener.prototype, "syntaxError");
    return XPathLexerErrorListener;
}());
exports.XPathLexerErrorListener = XPathLexerErrorListener;
