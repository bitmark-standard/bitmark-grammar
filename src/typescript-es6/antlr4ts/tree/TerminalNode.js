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
exports.TerminalNode = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:48.1433686-07:00
var Interval_1 = require("../misc/Interval");
var Decorators_1 = require("../Decorators");
var Token_1 = require("../Token");
var TerminalNode = /** @class */ (function () {
    function TerminalNode(symbol) {
        this._symbol = symbol;
    }
    TerminalNode.prototype.getChild = function (i) {
        throw new RangeError("Terminal Node has no children.");
    };
    Object.defineProperty(TerminalNode.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminalNode.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    TerminalNode.prototype.setParent = function (parent) {
        this._parent = parent;
    };
    Object.defineProperty(TerminalNode.prototype, "payload", {
        get: function () {
            return this._symbol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminalNode.prototype, "sourceInterval", {
        get: function () {
            var tokenIndex = this._symbol.tokenIndex;
            return new Interval_1.Interval(tokenIndex, tokenIndex);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminalNode.prototype, "childCount", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    TerminalNode.prototype.accept = function (visitor) {
        return visitor.visitTerminal(this);
    };
    Object.defineProperty(TerminalNode.prototype, "text", {
        get: function () {
            return this._symbol.text || "";
        },
        enumerable: false,
        configurable: true
    });
    TerminalNode.prototype.toStringTree = function (parser) {
        return this.toString();
    };
    TerminalNode.prototype.toString = function () {
        if (this._symbol.type === Token_1.Token.EOF) {
            return "<EOF>";
        }
        return this._symbol.text || "";
    };
    __decorate([
        Decorators_1.Override
    ], TerminalNode.prototype, "getChild");
    __decorate([
        Decorators_1.Override
    ], TerminalNode.prototype, "parent");
    __decorate([
        Decorators_1.Override
    ], TerminalNode.prototype, "setParent");
    __decorate([
        Decorators_1.Override
    ], TerminalNode.prototype, "payload");
    __decorate([
        Decorators_1.Override
    ], TerminalNode.prototype, "sourceInterval");
    __decorate([
        Decorators_1.Override
    ], TerminalNode.prototype, "childCount");
    __decorate([
        Decorators_1.Override
    ], TerminalNode.prototype, "accept");
    __decorate([
        Decorators_1.Override
    ], TerminalNode.prototype, "text");
    __decorate([
        Decorators_1.Override
    ], TerminalNode.prototype, "toStringTree");
    __decorate([
        Decorators_1.Override
    ], TerminalNode.prototype, "toString");
    return TerminalNode;
}());
exports.TerminalNode = TerminalNode;
