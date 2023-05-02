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
exports.ProfilingATNSimulator = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:36.4188352-07:00
var AmbiguityInfo_1 = require("./AmbiguityInfo");
var ATN_1 = require("./ATN");
var ATNSimulator_1 = require("./ATNSimulator");
var ContextSensitivityInfo_1 = require("./ContextSensitivityInfo");
var DecisionInfo_1 = require("./DecisionInfo");
var ErrorInfo_1 = require("./ErrorInfo");
var Decorators_1 = require("../Decorators");
var LookaheadEventInfo_1 = require("./LookaheadEventInfo");
var ParserATNSimulator_1 = require("./ParserATNSimulator");
var PredicateEvalInfo_1 = require("./PredicateEvalInfo");
var SemanticContext_1 = require("./SemanticContext");
var SimulatorState_1 = require("./SimulatorState");
/**
 * @since 4.3
 */
var ProfilingATNSimulator = /** @class */ (function (_super) {
    __extends(ProfilingATNSimulator, _super);
    function ProfilingATNSimulator(parser) {
        var _this = _super.call(this, parser.interpreter.atn, parser) || this;
        _this._startIndex = 0;
        _this._sllStopIndex = 0;
        _this._llStopIndex = 0;
        _this.currentDecision = 0;
        /** At the point of LL failover, we record how SLL would resolve the conflict so that
         *  we can determine whether or not a decision / input pair is context-sensitive.
         *  If LL gives a different result than SLL's predicted alternative, we have a
         *  context sensitivity for sure. The converse is not necessarily true, however.
         *  It's possible that after conflict resolution chooses minimum alternatives,
         *  SLL could get the same answer as LL. Regardless of whether or not the result indicates
         *  an ambiguity, it is not treated as a context sensitivity because LL prediction
         *  was not required in order to produce a correct prediction for this decision and input sequence.
         *  It may in fact still be a context sensitivity but we don't know by looking at the
         *  minimum alternatives for the current input.
         */
        _this.conflictingAltResolvedBySLL = 0;
        _this.optimize_ll1 = false;
        _this.reportAmbiguities = true;
        _this.numDecisions = _this.atn.decisionToState.length;
        _this.decisions = [];
        for (var i = 0; i < _this.numDecisions; i++) {
            _this.decisions.push(new DecisionInfo_1.DecisionInfo(i));
        }
        return _this;
    }
    ProfilingATNSimulator.prototype.adaptivePredict = function (input, decision, outerContext, useContext) {
        if (useContext !== undefined) {
            return _super.prototype.adaptivePredict.call(this, input, decision, outerContext, useContext);
        }
        try {
            this._input = input;
            this._startIndex = input.index;
            // it's possible for SLL to reach a conflict state without consuming any input
            this._sllStopIndex = this._startIndex - 1;
            this._llStopIndex = -1;
            this.currentDecision = decision;
            this.currentState = undefined;
            this.conflictingAltResolvedBySLL = ATN_1.ATN.INVALID_ALT_NUMBER;
            var start = process.hrtime();
            var alt = _super.prototype.adaptivePredict.call(this, input, decision, outerContext);
            var stop_1 = process.hrtime();
            var nanoseconds = (stop_1[0] - start[0]) * 1000000000;
            if (nanoseconds === 0) {
                nanoseconds = stop_1[1] - start[1];
            }
            else {
                // Add nanoseconds from start to end of that second, plus start of the end second to end
                nanoseconds += (1000000000 - start[1]) + stop_1[1];
            }
            this.decisions[decision].timeInPrediction += nanoseconds;
            this.decisions[decision].invocations++;
            var SLL_k = this._sllStopIndex - this._startIndex + 1;
            this.decisions[decision].SLL_TotalLook += SLL_k;
            this.decisions[decision].SLL_MinLook = this.decisions[decision].SLL_MinLook === 0 ? SLL_k : Math.min(this.decisions[decision].SLL_MinLook, SLL_k);
            if (SLL_k > this.decisions[decision].SLL_MaxLook) {
                this.decisions[decision].SLL_MaxLook = SLL_k;
                this.decisions[decision].SLL_MaxLookEvent =
                    new LookaheadEventInfo_1.LookaheadEventInfo(decision, undefined, alt, input, this._startIndex, this._sllStopIndex, false);
            }
            if (this._llStopIndex >= 0) {
                var LL_k = this._llStopIndex - this._startIndex + 1;
                this.decisions[decision].LL_TotalLook += LL_k;
                this.decisions[decision].LL_MinLook = this.decisions[decision].LL_MinLook === 0 ? LL_k : Math.min(this.decisions[decision].LL_MinLook, LL_k);
                if (LL_k > this.decisions[decision].LL_MaxLook) {
                    this.decisions[decision].LL_MaxLook = LL_k;
                    this.decisions[decision].LL_MaxLookEvent =
                        new LookaheadEventInfo_1.LookaheadEventInfo(decision, undefined, alt, input, this._startIndex, this._llStopIndex, true);
                }
            }
            return alt;
        }
        finally {
            this._input = undefined;
            this.currentDecision = -1;
        }
    };
    ProfilingATNSimulator.prototype.getStartState = function (dfa, input, outerContext, useContext) {
        var state = _super.prototype.getStartState.call(this, dfa, input, outerContext, useContext);
        this.currentState = state;
        return state;
    };
    ProfilingATNSimulator.prototype.computeStartState = function (dfa, globalContext, useContext) {
        var state = _super.prototype.computeStartState.call(this, dfa, globalContext, useContext);
        this.currentState = state;
        return state;
    };
    ProfilingATNSimulator.prototype.computeReachSet = function (dfa, previous, t, contextCache) {
        if (this._input === undefined) {
            throw new Error("Invalid state");
        }
        var reachState = _super.prototype.computeReachSet.call(this, dfa, previous, t, contextCache);
        if (reachState == null) {
            // no reach on current lookahead symbol. ERROR.
            this.decisions[this.currentDecision].errors.push(new ErrorInfo_1.ErrorInfo(this.currentDecision, previous, this._input, this._startIndex, this._input.index));
        }
        this.currentState = reachState;
        return reachState;
    };
    ProfilingATNSimulator.prototype.getExistingTargetState = function (previousD, t) {
        if (this.currentState === undefined || this._input === undefined) {
            throw new Error("Invalid state");
        }
        // this method is called after each time the input position advances
        if (this.currentState.useContext) {
            this._llStopIndex = this._input.index;
        }
        else {
            this._sllStopIndex = this._input.index;
        }
        var existingTargetState = _super.prototype.getExistingTargetState.call(this, previousD, t);
        if (existingTargetState != null) {
            // this method is directly called by execDFA; must construct a SimulatorState
            // to represent the current state for this case
            this.currentState = new SimulatorState_1.SimulatorState(this.currentState.outerContext, existingTargetState, this.currentState.useContext, this.currentState.remainingOuterContext);
            if (this.currentState.useContext) {
                this.decisions[this.currentDecision].LL_DFATransitions++;
            }
            else {
                this.decisions[this.currentDecision].SLL_DFATransitions++; // count only if we transition over a DFA state
            }
            if (existingTargetState === ATNSimulator_1.ATNSimulator.ERROR) {
                var state = new SimulatorState_1.SimulatorState(this.currentState.outerContext, previousD, this.currentState.useContext, this.currentState.remainingOuterContext);
                this.decisions[this.currentDecision].errors.push(new ErrorInfo_1.ErrorInfo(this.currentDecision, state, this._input, this._startIndex, this._input.index));
            }
        }
        return existingTargetState;
    };
    ProfilingATNSimulator.prototype.computeTargetState = function (dfa, s, remainingGlobalContext, t, useContext, contextCache) {
        var targetState = _super.prototype.computeTargetState.call(this, dfa, s, remainingGlobalContext, t, useContext, contextCache);
        if (useContext) {
            this.decisions[this.currentDecision].LL_ATNTransitions++;
        }
        else {
            this.decisions[this.currentDecision].SLL_ATNTransitions++;
        }
        return targetState;
    };
    ProfilingATNSimulator.prototype.evalSemanticContextImpl = function (pred, parserCallStack, alt) {
        if (this.currentState === undefined || this._input === undefined) {
            throw new Error("Invalid state");
        }
        var result = _super.prototype.evalSemanticContextImpl.call(this, pred, parserCallStack, alt);
        if (!(pred instanceof SemanticContext_1.SemanticContext.PrecedencePredicate)) {
            var fullContext = this._llStopIndex >= 0;
            var stopIndex = fullContext ? this._llStopIndex : this._sllStopIndex;
            this.decisions[this.currentDecision].predicateEvals.push(new PredicateEvalInfo_1.PredicateEvalInfo(this.currentState, this.currentDecision, this._input, this._startIndex, stopIndex, pred, result, alt));
        }
        return result;
    };
    ProfilingATNSimulator.prototype.reportContextSensitivity = function (dfa, prediction, acceptState, startIndex, stopIndex) {
        if (this._input === undefined) {
            throw new Error("Invalid state");
        }
        if (prediction !== this.conflictingAltResolvedBySLL) {
            this.decisions[this.currentDecision].contextSensitivities.push(new ContextSensitivityInfo_1.ContextSensitivityInfo(this.currentDecision, acceptState, this._input, startIndex, stopIndex));
        }
        _super.prototype.reportContextSensitivity.call(this, dfa, prediction, acceptState, startIndex, stopIndex);
    };
    ProfilingATNSimulator.prototype.reportAttemptingFullContext = function (dfa, conflictingAlts, conflictState, startIndex, stopIndex) {
        if (conflictingAlts != null) {
            this.conflictingAltResolvedBySLL = conflictingAlts.nextSetBit(0);
        }
        else {
            this.conflictingAltResolvedBySLL = conflictState.s0.configs.getRepresentedAlternatives().nextSetBit(0);
        }
        this.decisions[this.currentDecision].LL_Fallback++;
        _super.prototype.reportAttemptingFullContext.call(this, dfa, conflictingAlts, conflictState, startIndex, stopIndex);
    };
    ProfilingATNSimulator.prototype.reportAmbiguity = function (dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
        if (this.currentState === undefined || this._input === undefined) {
            throw new Error("Invalid state");
        }
        var prediction;
        if (ambigAlts != null) {
            prediction = ambigAlts.nextSetBit(0);
        }
        else {
            prediction = configs.getRepresentedAlternatives().nextSetBit(0);
        }
        if (this.conflictingAltResolvedBySLL !== ATN_1.ATN.INVALID_ALT_NUMBER && prediction !== this.conflictingAltResolvedBySLL) {
            // Even though this is an ambiguity we are reporting, we can
            // still detect some context sensitivities.  Both SLL and LL
            // are showing a conflict, hence an ambiguity, but if they resolve
            // to different minimum alternatives we have also identified a
            // context sensitivity.
            this.decisions[this.currentDecision].contextSensitivities.push(new ContextSensitivityInfo_1.ContextSensitivityInfo(this.currentDecision, this.currentState, this._input, startIndex, stopIndex));
        }
        this.decisions[this.currentDecision].ambiguities.push(new AmbiguityInfo_1.AmbiguityInfo(this.currentDecision, this.currentState, ambigAlts, this._input, startIndex, stopIndex));
        _super.prototype.reportAmbiguity.call(this, dfa, D, startIndex, stopIndex, exact, ambigAlts, configs);
    };
    // ---------------------------------------------------------------------
    ProfilingATNSimulator.prototype.getDecisionInfo = function () {
        return this.decisions;
    };
    ProfilingATNSimulator.prototype.getCurrentState = function () {
        return this.currentState;
    };
    __decorate([
        Decorators_1.Override,
        __param(0, Decorators_1.NotNull)
    ], ProfilingATNSimulator.prototype, "adaptivePredict");
    __decorate([
        Decorators_1.Override
    ], ProfilingATNSimulator.prototype, "getStartState");
    __decorate([
        Decorators_1.Override
    ], ProfilingATNSimulator.prototype, "computeStartState");
    __decorate([
        Decorators_1.Override
    ], ProfilingATNSimulator.prototype, "computeReachSet");
    __decorate([
        Decorators_1.Override
    ], ProfilingATNSimulator.prototype, "getExistingTargetState");
    __decorate([
        Decorators_1.Override
    ], ProfilingATNSimulator.prototype, "computeTargetState");
    __decorate([
        Decorators_1.Override
    ], ProfilingATNSimulator.prototype, "evalSemanticContextImpl");
    __decorate([
        Decorators_1.Override
    ], ProfilingATNSimulator.prototype, "reportContextSensitivity");
    __decorate([
        Decorators_1.Override
    ], ProfilingATNSimulator.prototype, "reportAttemptingFullContext");
    __decorate([
        Decorators_1.Override,
        __param(0, Decorators_1.NotNull),
        __param(5, Decorators_1.NotNull),
        __param(6, Decorators_1.NotNull)
    ], ProfilingATNSimulator.prototype, "reportAmbiguity");
    return ProfilingATNSimulator;
}(ParserATNSimulator_1.ParserATNSimulator));
exports.ProfilingATNSimulator = ProfilingATNSimulator;
