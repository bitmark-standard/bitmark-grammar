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
exports.RangeTransition = void 0;
var IntervalSet_1 = require("../misc/IntervalSet");
var Decorators_1 = require("../Decorators");
var Transition_1 = require("./Transition");
var RangeTransition = /** @class */ (function (_super) {
    __extends(RangeTransition, _super);
    function RangeTransition(target, from, to) {
        var _this = _super.call(this, target) || this;
        _this.from = from;
        _this.to = to;
        return _this;
    }
    Object.defineProperty(RangeTransition.prototype, "serializationType", {
        get: function () {
            return 2 /* TransitionType.RANGE */;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RangeTransition.prototype, "label", {
        get: function () {
            return IntervalSet_1.IntervalSet.of(this.from, this.to);
        },
        enumerable: false,
        configurable: true
    });
    RangeTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= this.from && symbol <= this.to;
    };
    RangeTransition.prototype.toString = function () {
        return "'" + String.fromCodePoint(this.from) + "'..'" + String.fromCodePoint(this.to) + "'";
    };
    __decorate([
        Decorators_1.Override
    ], RangeTransition.prototype, "serializationType");
    __decorate([
        Decorators_1.Override,
        Decorators_1.NotNull
    ], RangeTransition.prototype, "label");
    __decorate([
        Decorators_1.Override
    ], RangeTransition.prototype, "matches");
    __decorate([
        Decorators_1.Override,
        Decorators_1.NotNull
    ], RangeTransition.prototype, "toString");
    RangeTransition = __decorate([
        __param(0, Decorators_1.NotNull)
    ], RangeTransition);
    return RangeTransition;
}(Transition_1.Transition));
exports.RangeTransition = RangeTransition;
