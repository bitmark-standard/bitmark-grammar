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
exports.SemanticContext = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:36.9521478-07:00
var Array2DHashSet_1 = require("../misc/Array2DHashSet");
var ArrayEqualityComparator_1 = require("../misc/ArrayEqualityComparator");
var MurmurHash_1 = require("../misc/MurmurHash");
var Decorators_1 = require("../Decorators");
var ObjectEqualityComparator_1 = require("../misc/ObjectEqualityComparator");
var Utils = require("../misc/Utils");
function max(items) {
    var result;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var current = items_1[_i];
        if (result === undefined) {
            result = current;
            continue;
        }
        var comparison = result.compareTo(current);
        if (comparison < 0) {
            result = current;
        }
    }
    return result;
}
function min(items) {
    var result;
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
        var current = items_2[_i];
        if (result === undefined) {
            result = current;
            continue;
        }
        var comparison = result.compareTo(current);
        if (comparison > 0) {
            result = current;
        }
    }
    return result;
}
/** A tree structure used to record the semantic context in which
 *  an ATN configuration is valid.  It's either a single predicate,
 *  a conjunction `p1&&p2`, or a sum of products `p1||p2`.
 *
 *  I have scoped the {@link AND}, {@link OR}, and {@link Predicate} subclasses of
 *  {@link SemanticContext} within the scope of this outer class.
 */
var SemanticContext = /** @class */ (function () {
    function SemanticContext() {
    }
    Object.defineProperty(SemanticContext, "NONE", {
        /**
         * The default {@link SemanticContext}, which is semantically equivalent to
         * a predicate of the form `{true}?`.
         */
        get: function () {
            if (SemanticContext._NONE === undefined) {
                SemanticContext._NONE = new SemanticContext.Predicate();
            }
            return SemanticContext._NONE;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Evaluate the precedence predicates for the context and reduce the result.
     *
     * @param parser The parser instance.
     * @param parserCallStack
     * @returns The simplified semantic context after precedence predicates are
     * evaluated, which will be one of the following values.
     *
     * * {@link #NONE}: if the predicate simplifies to `true` after
     *   precedence predicates are evaluated.
     * * `undefined`: if the predicate simplifies to `false` after
     *   precedence predicates are evaluated.
     * * `this`: if the semantic context is not changed as a result of
     *   precedence predicate evaluation.
     * * A non-`undefined` {@link SemanticContext}: the new simplified
     *   semantic context after precedence predicates are evaluated.
     */
    SemanticContext.prototype.evalPrecedence = function (parser, parserCallStack) {
        return this;
    };
    SemanticContext.and = function (a, b) {
        if (!a || a === SemanticContext.NONE) {
            return b;
        }
        if (b === SemanticContext.NONE) {
            return a;
        }
        var result = new SemanticContext.AND(a, b);
        if (result.opnds.length === 1) {
            return result.opnds[0];
        }
        return result;
    };
    /**
     *
     *  @see ParserATNSimulator#getPredsForAmbigAlts
     */
    SemanticContext.or = function (a, b) {
        if (!a) {
            return b;
        }
        if (a === SemanticContext.NONE || b === SemanticContext.NONE) {
            return SemanticContext.NONE;
        }
        var result = new SemanticContext.OR(a, b);
        if (result.opnds.length === 1) {
            return result.opnds[0];
        }
        return result;
    };
    return SemanticContext;
}());
exports.SemanticContext = SemanticContext;
(function (SemanticContext) {
    /**
     * This random 30-bit prime represents the value of `AND.class.hashCode()`.
     */
    var AND_HASHCODE = 40363613;
    /**
     * This random 30-bit prime represents the value of `OR.class.hashCode()`.
     */
    var OR_HASHCODE = 486279973;
    function filterPrecedencePredicates(collection) {
        var result = [];
        for (var i = 0; i < collection.length; i++) {
            var context = collection[i];
            if (context instanceof SemanticContext.PrecedencePredicate) {
                result.push(context);
                // Remove the item from 'collection' and move i back so we look at the same index again
                collection.splice(i, 1);
                i--;
            }
        }
        return result;
    }
    var Predicate = /** @class */ (function (_super) {
        __extends(Predicate, _super);
        function Predicate(ruleIndex, predIndex, isCtxDependent) {
            if (ruleIndex === void 0) { ruleIndex = -1; }
            if (predIndex === void 0) { predIndex = -1; }
            if (isCtxDependent === void 0) { isCtxDependent = false; }
            var _this = _super.call(this) || this;
            _this.ruleIndex = ruleIndex;
            _this.predIndex = predIndex;
            _this.isCtxDependent = isCtxDependent;
            return _this;
        }
        Predicate.prototype.eval = function (parser, parserCallStack) {
            var localctx = this.isCtxDependent ? parserCallStack : undefined;
            return parser.sempred(localctx, this.ruleIndex, this.predIndex);
        };
        Predicate.prototype.hashCode = function () {
            var hashCode = MurmurHash_1.MurmurHash.initialize();
            hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.ruleIndex);
            hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.predIndex);
            hashCode = MurmurHash_1.MurmurHash.update(hashCode, this.isCtxDependent ? 1 : 0);
            hashCode = MurmurHash_1.MurmurHash.finish(hashCode, 3);
            return hashCode;
        };
        Predicate.prototype.equals = function (obj) {
            if (!(obj instanceof Predicate)) {
                return false;
            }
            if (this === obj) {
                return true;
            }
            return this.ruleIndex === obj.ruleIndex &&
                this.predIndex === obj.predIndex &&
                this.isCtxDependent === obj.isCtxDependent;
        };
        Predicate.prototype.toString = function () {
            return "{" + this.ruleIndex + ":" + this.predIndex + "}?";
        };
        __decorate([
            Decorators_1.Override
        ], Predicate.prototype, "eval");
        __decorate([
            Decorators_1.Override
        ], Predicate.prototype, "hashCode");
        __decorate([
            Decorators_1.Override
        ], Predicate.prototype, "equals");
        __decorate([
            Decorators_1.Override
        ], Predicate.prototype, "toString");
        return Predicate;
    }(SemanticContext));
    SemanticContext.Predicate = Predicate;
    var PrecedencePredicate = /** @class */ (function (_super) {
        __extends(PrecedencePredicate, _super);
        function PrecedencePredicate(precedence) {
            var _this = _super.call(this) || this;
            _this.precedence = precedence;
            return _this;
        }
        PrecedencePredicate.prototype.eval = function (parser, parserCallStack) {
            return parser.precpred(parserCallStack, this.precedence);
        };
        PrecedencePredicate.prototype.evalPrecedence = function (parser, parserCallStack) {
            if (parser.precpred(parserCallStack, this.precedence)) {
                return SemanticContext.NONE;
            }
            else {
                return undefined;
            }
        };
        PrecedencePredicate.prototype.compareTo = function (o) {
            return this.precedence - o.precedence;
        };
        PrecedencePredicate.prototype.hashCode = function () {
            var hashCode = 1;
            hashCode = 31 * hashCode + this.precedence;
            return hashCode;
        };
        PrecedencePredicate.prototype.equals = function (obj) {
            if (!(obj instanceof PrecedencePredicate)) {
                return false;
            }
            if (this === obj) {
                return true;
            }
            return this.precedence === obj.precedence;
        };
        PrecedencePredicate.prototype.toString = function () {
            return "{" + this.precedence + ">=prec}?";
        };
        __decorate([
            Decorators_1.Override
        ], PrecedencePredicate.prototype, "eval");
        __decorate([
            Decorators_1.Override
        ], PrecedencePredicate.prototype, "evalPrecedence");
        __decorate([
            Decorators_1.Override
        ], PrecedencePredicate.prototype, "compareTo");
        __decorate([
            Decorators_1.Override
        ], PrecedencePredicate.prototype, "hashCode");
        __decorate([
            Decorators_1.Override
        ], PrecedencePredicate.prototype, "equals");
        __decorate([
            Decorators_1.Override
            // precedence >= _precedenceStack.peek()
        ], PrecedencePredicate.prototype, "toString");
        return PrecedencePredicate;
    }(SemanticContext));
    SemanticContext.PrecedencePredicate = PrecedencePredicate;
    /**
     * This is the base class for semantic context "operators", which operate on
     * a collection of semantic context "operands".
     *
     * @since 4.3
     */
    var Operator = /** @class */ (function (_super) {
        __extends(Operator, _super);
        function Operator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Operator;
    }(SemanticContext));
    SemanticContext.Operator = Operator;
    /**
     * A semantic context which is true whenever none of the contained contexts
     * is false.
     */
    var AND = /** @class */ (function (_super) {
        __extends(AND, _super);
        function AND(a, b) {
            var _this = _super.call(this) || this;
            var operands = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
            if (a instanceof AND) {
                operands.addAll(a.opnds);
            }
            else {
                operands.add(a);
            }
            if (b instanceof AND) {
                operands.addAll(b.opnds);
            }
            else {
                operands.add(b);
            }
            _this.opnds = operands.toArray();
            var precedencePredicates = filterPrecedencePredicates(_this.opnds);
            // interested in the transition with the lowest precedence
            var reduced = min(precedencePredicates);
            if (reduced) {
                _this.opnds.push(reduced);
            }
            return _this;
        }
        Object.defineProperty(AND.prototype, "operands", {
            get: function () {
                return this.opnds;
            },
            enumerable: false,
            configurable: true
        });
        AND.prototype.equals = function (obj) {
            if (this === obj) {
                return true;
            }
            if (!(obj instanceof AND)) {
                return false;
            }
            return ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this.opnds, obj.opnds);
        };
        AND.prototype.hashCode = function () {
            return MurmurHash_1.MurmurHash.hashCode(this.opnds, AND_HASHCODE);
        };
        /**
         * {@inheritDoc}
         *
         * The evaluation of predicates by this context is short-circuiting, but
         * unordered.
         */
        AND.prototype.eval = function (parser, parserCallStack) {
            for (var _i = 0, _a = this.opnds; _i < _a.length; _i++) {
                var opnd = _a[_i];
                if (!opnd.eval(parser, parserCallStack)) {
                    return false;
                }
            }
            return true;
        };
        AND.prototype.evalPrecedence = function (parser, parserCallStack) {
            var differs = false;
            var operands = [];
            for (var _i = 0, _a = this.opnds; _i < _a.length; _i++) {
                var context = _a[_i];
                var evaluated = context.evalPrecedence(parser, parserCallStack);
                differs = differs || (evaluated !== context);
                if (evaluated == null) {
                    // The AND context is false if any element is false
                    return undefined;
                }
                else if (evaluated !== SemanticContext.NONE) {
                    // Reduce the result by skipping true elements
                    operands.push(evaluated);
                }
            }
            if (!differs) {
                return this;
            }
            if (operands.length === 0) {
                // all elements were true, so the AND context is true
                return SemanticContext.NONE;
            }
            var result = operands[0];
            for (var i = 1; i < operands.length; i++) {
                result = SemanticContext.and(result, operands[i]);
            }
            return result;
        };
        AND.prototype.toString = function () {
            return Utils.join(this.opnds, "&&");
        };
        __decorate([
            Decorators_1.Override
        ], AND.prototype, "operands");
        __decorate([
            Decorators_1.Override
        ], AND.prototype, "equals");
        __decorate([
            Decorators_1.Override
        ], AND.prototype, "hashCode");
        __decorate([
            Decorators_1.Override
        ], AND.prototype, "eval");
        __decorate([
            Decorators_1.Override
        ], AND.prototype, "evalPrecedence");
        __decorate([
            Decorators_1.Override
        ], AND.prototype, "toString");
        AND = __decorate([
            __param(0, Decorators_1.NotNull),
            __param(1, Decorators_1.NotNull)
        ], AND);
        return AND;
    }(Operator));
    SemanticContext.AND = AND;
    /**
     * A semantic context which is true whenever at least one of the contained
     * contexts is true.
     */
    var OR = /** @class */ (function (_super) {
        __extends(OR, _super);
        function OR(a, b) {
            var _this = _super.call(this) || this;
            var operands = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
            if (a instanceof OR) {
                operands.addAll(a.opnds);
            }
            else {
                operands.add(a);
            }
            if (b instanceof OR) {
                operands.addAll(b.opnds);
            }
            else {
                operands.add(b);
            }
            _this.opnds = operands.toArray();
            var precedencePredicates = filterPrecedencePredicates(_this.opnds);
            // interested in the transition with the highest precedence
            var reduced = max(precedencePredicates);
            if (reduced) {
                _this.opnds.push(reduced);
            }
            return _this;
        }
        Object.defineProperty(OR.prototype, "operands", {
            get: function () {
                return this.opnds;
            },
            enumerable: false,
            configurable: true
        });
        OR.prototype.equals = function (obj) {
            if (this === obj) {
                return true;
            }
            if (!(obj instanceof OR)) {
                return false;
            }
            return ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this.opnds, obj.opnds);
        };
        OR.prototype.hashCode = function () {
            return MurmurHash_1.MurmurHash.hashCode(this.opnds, OR_HASHCODE);
        };
        /**
         * {@inheritDoc}
         *
         * The evaluation of predicates by this context is short-circuiting, but
         * unordered.
         */
        OR.prototype.eval = function (parser, parserCallStack) {
            for (var _i = 0, _a = this.opnds; _i < _a.length; _i++) {
                var opnd = _a[_i];
                if (opnd.eval(parser, parserCallStack)) {
                    return true;
                }
            }
            return false;
        };
        OR.prototype.evalPrecedence = function (parser, parserCallStack) {
            var differs = false;
            var operands = [];
            for (var _i = 0, _a = this.opnds; _i < _a.length; _i++) {
                var context = _a[_i];
                var evaluated = context.evalPrecedence(parser, parserCallStack);
                differs = differs || (evaluated !== context);
                if (evaluated === SemanticContext.NONE) {
                    // The OR context is true if any element is true
                    return SemanticContext.NONE;
                }
                else if (evaluated) {
                    // Reduce the result by skipping false elements
                    operands.push(evaluated);
                }
            }
            if (!differs) {
                return this;
            }
            if (operands.length === 0) {
                // all elements were false, so the OR context is false
                return undefined;
            }
            var result = operands[0];
            for (var i = 1; i < operands.length; i++) {
                result = SemanticContext.or(result, operands[i]);
            }
            return result;
        };
        OR.prototype.toString = function () {
            return Utils.join(this.opnds, "||");
        };
        __decorate([
            Decorators_1.Override
        ], OR.prototype, "operands");
        __decorate([
            Decorators_1.Override
        ], OR.prototype, "equals");
        __decorate([
            Decorators_1.Override
        ], OR.prototype, "hashCode");
        __decorate([
            Decorators_1.Override
        ], OR.prototype, "eval");
        __decorate([
            Decorators_1.Override
        ], OR.prototype, "evalPrecedence");
        __decorate([
            Decorators_1.Override
        ], OR.prototype, "toString");
        OR = __decorate([
            __param(0, Decorators_1.NotNull),
            __param(1, Decorators_1.NotNull)
        ], OR);
        return OR;
    }(Operator));
    SemanticContext.OR = OR;
})(SemanticContext = exports.SemanticContext || (exports.SemanticContext = {}));
exports.SemanticContext = SemanticContext;
