"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.LexerNoViableAltException = void 0;
var RecognitionException_1 = require("./RecognitionException");
var Decorators_1 = require("./Decorators");
var Interval_1 = require("./misc/Interval");
var Utils = require("./misc/Utils");
var LexerNoViableAltException = /** @class */ (function (_super) {
    __extends(LexerNoViableAltException, _super);
    function LexerNoViableAltException(lexer, input, startIndex, deadEndConfigs) {
        var _this = _super.call(this, lexer, input) || this;
        _this._startIndex = startIndex;
        _this._deadEndConfigs = deadEndConfigs;
        return _this;
    }
    Object.defineProperty(LexerNoViableAltException.prototype, "startIndex", {
        get: function () {
            return this._startIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexerNoViableAltException.prototype, "deadEndConfigs", {
        get: function () {
            return this._deadEndConfigs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexerNoViableAltException.prototype, "inputStream", {
        get: function () {
            return _super.prototype.inputStream;
        },
        enumerable: false,
        configurable: true
    });
    LexerNoViableAltException.prototype.toString = function () {
        var symbol = "";
        if (this._startIndex >= 0 && this._startIndex < this.inputStream.size) {
            symbol = this.inputStream.getText(Interval_1.Interval.of(this._startIndex, this._startIndex));
            symbol = Utils.escapeWhitespace(symbol, false);
        }
        // return String.format(Locale.getDefault(), "%s('%s')", LexerNoViableAltException.class.getSimpleName(), symbol);
        return "LexerNoViableAltException('".concat(symbol, "')");
    };
    __decorate([
        Decorators_1.Override
    ], LexerNoViableAltException.prototype, "inputStream");
    __decorate([
        Decorators_1.Override
    ], LexerNoViableAltException.prototype, "toString");
    LexerNoViableAltException = __decorate([
        __param(1, Decorators_1.NotNull)
    ], LexerNoViableAltException);
    return LexerNoViableAltException;
}(RecognitionException_1.RecognitionException));
exports.LexerNoViableAltException = LexerNoViableAltException;
