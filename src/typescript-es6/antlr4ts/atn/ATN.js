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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ATN = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:25.1063510-07:00
var Array2DHashMap_1 = require("../misc/Array2DHashMap");
var DFA_1 = require("../dfa/DFA");
var IntervalSet_1 = require("../misc/IntervalSet");
var InvalidState_1 = require("./InvalidState");
var LL1Analyzer_1 = require("./LL1Analyzer");
var Decorators_1 = require("../Decorators");
var ObjectEqualityComparator_1 = require("../misc/ObjectEqualityComparator");
var PredictionContext_1 = require("./PredictionContext");
var Token_1 = require("../Token");
var assert = require("assert");
/** */
var ATN = /** @class */ (function () {
    /** Used for runtime deserialization of ATNs from strings */
    function ATN(grammarType, maxTokenType) {
        this.states = [];
        /** Each subrule/rule is a decision point and we must track them so we
         *  can go back later and build DFA predictors for them.  This includes
         *  all the rules, subrules, optional blocks, ()+, ()* etc...
         */
        this.decisionToState = [];
        this.modeNameToStartState = new Map();
        this.modeToStartState = [];
        this.contextCache = new Array2DHashMap_1.Array2DHashMap(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        this.decisionToDFA = [];
        this.modeToDFA = [];
        this.LL1Table = new Map();
        this.grammarType = grammarType;
        this.maxTokenType = maxTokenType;
    }
    ATN.prototype.clearDFA = function () {
        this.decisionToDFA = new Array(this.decisionToState.length);
        for (var i = 0; i < this.decisionToDFA.length; i++) {
            this.decisionToDFA[i] = new DFA_1.DFA(this.decisionToState[i], i);
        }
        this.modeToDFA = new Array(this.modeToStartState.length);
        for (var i = 0; i < this.modeToDFA.length; i++) {
            this.modeToDFA[i] = new DFA_1.DFA(this.modeToStartState[i]);
        }
        this.contextCache.clear();
        this.LL1Table.clear();
    };
    Object.defineProperty(ATN.prototype, "contextCacheSize", {
        get: function () {
            return this.contextCache.size;
        },
        enumerable: false,
        configurable: true
    });
    ATN.prototype.getCachedContext = function (context) {
        return PredictionContext_1.PredictionContext.getCachedContext(context, this.contextCache, new PredictionContext_1.PredictionContext.IdentityHashMap());
    };
    ATN.prototype.getDecisionToDFA = function () {
        assert(this.decisionToDFA != null && this.decisionToDFA.length === this.decisionToState.length);
        return this.decisionToDFA;
    };
    ATN.prototype.nextTokens = function (s, ctx) {
        if (ctx) {
            var anal = new LL1Analyzer_1.LL1Analyzer(this);
            var next = anal.LOOK(s, ctx);
            return next;
        }
        else {
            if (s.nextTokenWithinRule) {
                return s.nextTokenWithinRule;
            }
            s.nextTokenWithinRule = this.nextTokens(s, PredictionContext_1.PredictionContext.EMPTY_LOCAL);
            s.nextTokenWithinRule.setReadonly(true);
            return s.nextTokenWithinRule;
        }
    };
    ATN.prototype.addState = function (state) {
        state.atn = this;
        state.stateNumber = this.states.length;
        this.states.push(state);
    };
    ATN.prototype.removeState = function (state) {
        // just replace the state, don't shift states in list
        var invalidState = new InvalidState_1.InvalidState();
        invalidState.atn = this;
        invalidState.stateNumber = state.stateNumber;
        this.states[state.stateNumber] = invalidState;
    };
    ATN.prototype.defineMode = function (name, s) {
        this.modeNameToStartState.set(name, s);
        this.modeToStartState.push(s);
        this.modeToDFA.push(new DFA_1.DFA(s));
        this.defineDecisionState(s);
    };
    ATN.prototype.defineDecisionState = function (s) {
        this.decisionToState.push(s);
        s.decision = this.decisionToState.length - 1;
        this.decisionToDFA.push(new DFA_1.DFA(s, s.decision));
        return s.decision;
    };
    ATN.prototype.getDecisionState = function (decision) {
        if (this.decisionToState.length > 0) {
            return this.decisionToState[decision];
        }
        return undefined;
    };
    Object.defineProperty(ATN.prototype, "numberOfDecisions", {
        get: function () {
            return this.decisionToState.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Computes the set of input symbols which could follow ATN state number
     * `stateNumber` in the specified full `context`. This method
     * considers the complete parser context, but does not evaluate semantic
     * predicates (i.e. all predicates encountered during the calculation are
     * assumed true). If a path in the ATN exists from the starting state to the
     * {@link RuleStopState} of the outermost context without matching any
     * symbols, {@link Token#EOF} is added to the returned set.
     *
     * If `context` is `undefined`, it is treated as
     * {@link ParserRuleContext#EMPTY}.
     *
     * Note that this does NOT give you the set of all tokens that could
     * appear at a given token position in the input phrase.  In other words, it
     * does not answer:
     *
     * > Given a specific partial input phrase, return the set of all
     * > tokens that can follow the last token in the input phrase.
     *
     * The big difference is that with just the input, the parser could land
     * right in the middle of a lookahead decision. Getting all
     * *possible* tokens given a partial input stream is a separate
     * computation. See https://github.com/antlr/antlr4/issues/1428
     *
     * For this function, we are specifying an ATN state and call stack to
     * compute what token(s) can come next and specifically: outside of a
     * lookahead decision. That is what you want for error reporting and
     * recovery upon parse error.
     *
     * @param stateNumber the ATN state number
     * @param context the full parse context
     * @returns The set of potentially valid input symbols which could follow the
     * specified state in the specified context.
     * @ if the ATN does not contain a state with
     * number `stateNumber`
     */
    ATN.prototype.getExpectedTokens = function (stateNumber, context) {
        if (stateNumber < 0 || stateNumber >= this.states.length) {
            throw new RangeError("Invalid state number.");
        }
        var ctx = context;
        var s = this.states[stateNumber];
        var following = this.nextTokens(s);
        if (!following.contains(Token_1.Token.EPSILON)) {
            return following;
        }
        var expected = new IntervalSet_1.IntervalSet();
        expected.addAll(following);
        expected.remove(Token_1.Token.EPSILON);
        while (ctx != null && ctx.invokingState >= 0 && following.contains(Token_1.Token.EPSILON)) {
            var invokingState = this.states[ctx.invokingState];
            var rt = invokingState.transition(0);
            following = this.nextTokens(rt.followState);
            expected.addAll(following);
            expected.remove(Token_1.Token.EPSILON);
            ctx = ctx._parent;
        }
        if (following.contains(Token_1.Token.EPSILON)) {
            expected.add(Token_1.Token.EOF);
        }
        return expected;
    };
    __decorate([
        Decorators_1.NotNull
    ], ATN.prototype, "states");
    __decorate([
        Decorators_1.NotNull
    ], ATN.prototype, "decisionToState");
    __decorate([
        Decorators_1.NotNull
    ], ATN.prototype, "modeNameToStartState");
    __decorate([
        Decorators_1.NotNull
    ], ATN.prototype, "modeToStartState");
    __decorate([
        Decorators_1.NotNull
    ], ATN.prototype, "decisionToDFA");
    __decorate([
        Decorators_1.NotNull
    ], ATN.prototype, "modeToDFA");
    __decorate([
        Decorators_1.NotNull
    ], ATN.prototype, "nextTokens");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], ATN.prototype, "removeState");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull)
    ], ATN.prototype, "defineMode");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], ATN.prototype, "defineDecisionState");
    __decorate([
        Decorators_1.NotNull
    ], ATN.prototype, "getExpectedTokens");
    ATN = __decorate([
        __param(0, Decorators_1.NotNull)
    ], ATN);
    return ATN;
}());
exports.ATN = ATN;
(function (ATN) {
    ATN.INVALID_ALT_NUMBER = 0;
})(ATN = exports.ATN || (exports.ATN = {}));
exports.ATN = ATN;
