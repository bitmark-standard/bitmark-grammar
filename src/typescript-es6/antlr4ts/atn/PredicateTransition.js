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
exports.PredicateTransition = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:35.2826960-07:00
var AbstractPredicateTransition_1 = require("./AbstractPredicateTransition");
var Decorators_1 = require("../Decorators");
var SemanticContext_1 = require("./SemanticContext");
/** TODO: this is old comment:
 *  A tree of semantic predicates from the grammar AST if label==SEMPRED.
 *  In the ATN, labels will always be exactly one predicate, but the DFA
 *  may have to combine a bunch of them as it collects predicates from
 *  multiple ATN configurations into a single DFA state.
 */
var PredicateTransition = /** @class */ (function (_super) {
    __extends(PredicateTransition, _super);
    function PredicateTransition(target, ruleIndex, predIndex, isCtxDependent) {
        var _this = _super.call(this, target) || this;
        _this.ruleIndex = ruleIndex;
        _this.predIndex = predIndex;
        _this.isCtxDependent = isCtxDependent;
        return _this;
    }
    Object.defineProperty(PredicateTransition.prototype, "serializationType", {
        get: function () {
            return 4 /* TransitionType.PREDICATE */;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PredicateTransition.prototype, "isEpsilon", {
        get: function () { return true; },
        enumerable: false,
        configurable: true
    });
    PredicateTransition.prototype.matches = function (symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    };
    Object.defineProperty(PredicateTransition.prototype, "predicate", {
        get: function () {
            return new SemanticContext_1.SemanticContext.Predicate(this.ruleIndex, this.predIndex, this.isCtxDependent);
        },
        enumerable: false,
        configurable: true
    });
    PredicateTransition.prototype.toString = function () {
        return "pred_" + this.ruleIndex + ":" + this.predIndex;
    };
    __decorate([
        Decorators_1.Override
    ], PredicateTransition.prototype, "serializationType");
    __decorate([
        Decorators_1.Override
    ], PredicateTransition.prototype, "isEpsilon");
    __decorate([
        Decorators_1.Override
    ], PredicateTransition.prototype, "matches");
    __decorate([
        Decorators_1.Override,
        Decorators_1.NotNull
    ], PredicateTransition.prototype, "toString");
    PredicateTransition = __decorate([
        __param(0, Decorators_1.NotNull)
    ], PredicateTransition);
    return PredicateTransition;
}(AbstractPredicateTransition_1.AbstractPredicateTransition));
exports.PredicateTransition = PredicateTransition;
