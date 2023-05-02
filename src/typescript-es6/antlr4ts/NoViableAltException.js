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
exports.__esModule = true;
exports.NoViableAltException = void 0;
var Parser_1 = require("./Parser");
var RecognitionException_1 = require("./RecognitionException");
var Decorators_1 = require("./Decorators");
/** Indicates that the parser could not decide which of two or more paths
 *  to take based upon the remaining input. It tracks the starting token
 *  of the offending input and also knows where the parser was
 *  in the various paths when the error. Reported by reportNoViableAlternative()
 */
var NoViableAltException = /** @class */ (function (_super) {
    __extends(NoViableAltException, _super);
    function NoViableAltException(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
        var _this = this;
        if (recognizer instanceof Parser_1.Parser) {
            if (input === undefined) {
                input = recognizer.inputStream;
            }
            if (startToken === undefined) {
                startToken = recognizer.currentToken;
            }
            if (offendingToken === undefined) {
                offendingToken = recognizer.currentToken;
            }
            if (ctx === undefined) {
                ctx = recognizer.context;
            }
        }
        _this = _super.call(this, recognizer, input, ctx) || this;
        _this._deadEndConfigs = deadEndConfigs;
        _this._startToken = startToken;
        _this.setOffendingToken(recognizer, offendingToken);
        return _this;
    }
    Object.defineProperty(NoViableAltException.prototype, "startToken", {
        get: function () {
            return this._startToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoViableAltException.prototype, "deadEndConfigs", {
        get: function () {
            return this._deadEndConfigs;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Decorators_1.NotNull
    ], NoViableAltException.prototype, "_startToken");
    return NoViableAltException;
}(RecognitionException_1.RecognitionException));
exports.NoViableAltException = NoViableAltException;
