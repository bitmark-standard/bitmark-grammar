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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.DFASerializer = void 0;
var ATNSimulator_1 = require("../atn/ATNSimulator");
var Decorators_1 = require("../Decorators");
var PredictionContext_1 = require("../atn/PredictionContext");
var Recognizer_1 = require("../Recognizer");
var VocabularyImpl_1 = require("../VocabularyImpl");
/** A DFA walker that knows how to dump them to serialized strings. */
var DFASerializer = /** @class */ (function () {
    function DFASerializer(dfa, vocabulary, ruleNames, atn) {
        if (vocabulary instanceof Recognizer_1.Recognizer) {
            ruleNames = vocabulary.ruleNames;
            atn = vocabulary.atn;
            vocabulary = vocabulary.vocabulary;
        }
        else if (!vocabulary) {
            vocabulary = VocabularyImpl_1.VocabularyImpl.EMPTY_VOCABULARY;
        }
        this.dfa = dfa;
        this.vocabulary = vocabulary;
        this.ruleNames = ruleNames;
        this.atn = atn;
    }
    DFASerializer.prototype.toString = function () {
        if (!this.dfa.s0) {
            return "";
        }
        var buf = "";
        if (this.dfa.states) {
            var states = new (Array.bind.apply(Array, __spreadArray([void 0], this.dfa.states.toArray(), false)))();
            states.sort(function (o1, o2) { return o1.stateNumber - o2.stateNumber; });
            for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
                var s = states_1[_i];
                var edges = s.getEdgeMap();
                var edgeKeys = __spreadArray([], edges.keys(), true).sort(function (a, b) { return a - b; });
                var contextEdges = s.getContextEdgeMap();
                var contextEdgeKeys = __spreadArray([], contextEdges.keys(), true).sort(function (a, b) { return a - b; });
                for (var _a = 0, edgeKeys_1 = edgeKeys; _a < edgeKeys_1.length; _a++) {
                    var entry = edgeKeys_1[_a];
                    var value = edges.get(entry);
                    if ((value == null || value === ATNSimulator_1.ATNSimulator.ERROR) && !s.isContextSymbol(entry)) {
                        continue;
                    }
                    var contextSymbol = false;
                    buf += (this.getStateString(s)) + ("-") + (this.getEdgeLabel(entry)) + ("->");
                    if (s.isContextSymbol(entry)) {
                        buf += ("!");
                        contextSymbol = true;
                    }
                    var t = value;
                    if (t && t.stateNumber !== ATNSimulator_1.ATNSimulator.ERROR.stateNumber) {
                        buf += (this.getStateString(t)) + ("\n");
                    }
                    else if (contextSymbol) {
                        buf += ("ctx\n");
                    }
                }
                if (s.isContextSensitive) {
                    for (var _b = 0, contextEdgeKeys_1 = contextEdgeKeys; _b < contextEdgeKeys_1.length; _b++) {
                        var entry = contextEdgeKeys_1[_b];
                        buf += (this.getStateString(s))
                            + ("-")
                            + (this.getContextLabel(entry))
                            + ("->")
                            + (this.getStateString(contextEdges.get(entry)))
                            + ("\n");
                    }
                }
            }
        }
        var output = buf;
        if (output.length === 0) {
            return "";
        }
        //return Utils.sortLinesInString(output);
        return output;
    };
    DFASerializer.prototype.getContextLabel = function (i) {
        if (i === PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
            return "ctx:EMPTY_FULL";
        }
        else if (i === PredictionContext_1.PredictionContext.EMPTY_LOCAL_STATE_KEY) {
            return "ctx:EMPTY_LOCAL";
        }
        if (this.atn && i > 0 && i <= this.atn.states.length) {
            var state = this.atn.states[i];
            var ruleIndex = state.ruleIndex;
            if (this.ruleNames && ruleIndex >= 0 && ruleIndex < this.ruleNames.length) {
                return "ctx:" + String(i) + "(" + this.ruleNames[ruleIndex] + ")";
            }
        }
        return "ctx:" + String(i);
    };
    DFASerializer.prototype.getEdgeLabel = function (i) {
        return this.vocabulary.getDisplayName(i);
    };
    DFASerializer.prototype.getStateString = function (s) {
        if (s === ATNSimulator_1.ATNSimulator.ERROR) {
            return "ERROR";
        }
        var n = s.stateNumber;
        var stateStr = "s" + n;
        if (s.isAcceptState) {
            if (s.predicates) {
                stateStr = ":s" + n + "=>" + s.predicates;
            }
            else {
                stateStr = ":s" + n + "=>" + s.prediction;
            }
        }
        if (s.isContextSensitive) {
            stateStr += "*";
            for (var _i = 0, _a = s.configs; _i < _a.length; _i++) {
                var config = _a[_i];
                if (config.reachesIntoOuterContext) {
                    stateStr += "*";
                    break;
                }
            }
        }
        return stateStr;
    };
    __decorate([
        Decorators_1.NotNull
    ], DFASerializer.prototype, "dfa");
    __decorate([
        Decorators_1.NotNull
    ], DFASerializer.prototype, "vocabulary");
    __decorate([
        Decorators_1.Override
    ], DFASerializer.prototype, "toString");
    return DFASerializer;
}());
exports.DFASerializer = DFASerializer;
