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
exports.NotSetTransition = void 0;
var Decorators_1 = require("../Decorators");
var SetTransition_1 = require("./SetTransition");
var NotSetTransition = /** @class */ (function (_super) {
    __extends(NotSetTransition, _super);
    function NotSetTransition(target, set) {
        return _super.call(this, target, set) || this;
    }
    Object.defineProperty(NotSetTransition.prototype, "serializationType", {
        get: function () {
            return 8 /* TransitionType.NOT_SET */;
        },
        enumerable: false,
        configurable: true
    });
    NotSetTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= minVocabSymbol
            && symbol <= maxVocabSymbol
            && !_super.prototype.matches.call(this, symbol, minVocabSymbol, maxVocabSymbol);
    };
    NotSetTransition.prototype.toString = function () {
        return "~" + _super.prototype.toString.call(this);
    };
    __decorate([
        Decorators_1.Override
    ], NotSetTransition.prototype, "serializationType");
    __decorate([
        Decorators_1.Override
    ], NotSetTransition.prototype, "matches");
    __decorate([
        Decorators_1.Override
    ], NotSetTransition.prototype, "toString");
    NotSetTransition = __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.Nullable)
    ], NotSetTransition);
    return NotSetTransition;
}(SetTransition_1.SetTransition));
exports.NotSetTransition = NotSetTransition;
