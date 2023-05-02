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
exports.AtomTransition = void 0;
var IntervalSet_1 = require("../misc/IntervalSet");
var Decorators_1 = require("../Decorators");
var Transition_1 = require("./Transition");
/** TODO: make all transitions sets? no, should remove set edges */
var AtomTransition = /** @class */ (function (_super) {
    __extends(AtomTransition, _super);
    function AtomTransition(target, label) {
        var _this = _super.call(this, target) || this;
        _this._label = label;
        return _this;
    }
    Object.defineProperty(AtomTransition.prototype, "serializationType", {
        get: function () {
            return 5 /* TransitionType.ATOM */;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AtomTransition.prototype, "label", {
        get: function () {
            return IntervalSet_1.IntervalSet.of(this._label);
        },
        enumerable: false,
        configurable: true
    });
    AtomTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return this._label === symbol;
    };
    AtomTransition.prototype.toString = function () {
        return String(this.label);
    };
    __decorate([
        Decorators_1.Override
    ], AtomTransition.prototype, "serializationType");
    __decorate([
        Decorators_1.Override,
        Decorators_1.NotNull
    ], AtomTransition.prototype, "label");
    __decorate([
        Decorators_1.Override
    ], AtomTransition.prototype, "matches");
    __decorate([
        Decorators_1.Override,
        Decorators_1.NotNull
    ], AtomTransition.prototype, "toString");
    AtomTransition = __decorate([
        __param(0, Decorators_1.NotNull)
    ], AtomTransition);
    return AtomTransition;
}(Transition_1.Transition));
exports.AtomTransition = AtomTransition;
