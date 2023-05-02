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
exports.ATNDeserializer = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:25.9683447-07:00
var ActionTransition_1 = require("./ActionTransition");
var Array2DHashSet_1 = require("../misc/Array2DHashSet");
var ATN_1 = require("./ATN");
var ATNDeserializationOptions_1 = require("./ATNDeserializationOptions");
var ATNStateType_1 = require("./ATNStateType");
var AtomTransition_1 = require("./AtomTransition");
var BasicBlockStartState_1 = require("./BasicBlockStartState");
var BasicState_1 = require("./BasicState");
var BitSet_1 = require("../misc/BitSet");
var BlockEndState_1 = require("./BlockEndState");
var BlockStartState_1 = require("./BlockStartState");
var DecisionState_1 = require("./DecisionState");
var DFA_1 = require("../dfa/DFA");
var EpsilonTransition_1 = require("./EpsilonTransition");
var IntervalSet_1 = require("../misc/IntervalSet");
var InvalidState_1 = require("./InvalidState");
var LexerChannelAction_1 = require("./LexerChannelAction");
var LexerCustomAction_1 = require("./LexerCustomAction");
var LexerModeAction_1 = require("./LexerModeAction");
var LexerMoreAction_1 = require("./LexerMoreAction");
var LexerPopModeAction_1 = require("./LexerPopModeAction");
var LexerPushModeAction_1 = require("./LexerPushModeAction");
var LexerSkipAction_1 = require("./LexerSkipAction");
var LexerTypeAction_1 = require("./LexerTypeAction");
var LoopEndState_1 = require("./LoopEndState");
var Decorators_1 = require("../Decorators");
var NotSetTransition_1 = require("./NotSetTransition");
var ParserATNSimulator_1 = require("./ParserATNSimulator");
var PlusBlockStartState_1 = require("./PlusBlockStartState");
var PlusLoopbackState_1 = require("./PlusLoopbackState");
var PrecedencePredicateTransition_1 = require("./PrecedencePredicateTransition");
var PredicateTransition_1 = require("./PredicateTransition");
var RangeTransition_1 = require("./RangeTransition");
var RuleStartState_1 = require("./RuleStartState");
var RuleStopState_1 = require("./RuleStopState");
var RuleTransition_1 = require("./RuleTransition");
var SetTransition_1 = require("./SetTransition");
var StarBlockStartState_1 = require("./StarBlockStartState");
var StarLoopbackState_1 = require("./StarLoopbackState");
var StarLoopEntryState_1 = require("./StarLoopEntryState");
var Token_1 = require("../Token");
var TokensStartState_1 = require("./TokensStartState");
var UUID_1 = require("../misc/UUID");
var WildcardTransition_1 = require("./WildcardTransition");
/**
 *
 * @author Sam Harwell
 */
var ATNDeserializer = /** @class */ (function () {
    function ATNDeserializer(deserializationOptions) {
        if (deserializationOptions == null) {
            deserializationOptions = ATNDeserializationOptions_1.ATNDeserializationOptions.defaultOptions;
        }
        this.deserializationOptions = deserializationOptions;
    }
    Object.defineProperty(ATNDeserializer, "SERIALIZED_VERSION", {
        get: function () {
            /* This value should never change. Updates following this version are
             * reflected as change in the unique ID SERIALIZED_UUID.
             */
            return 3;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Determines if a particular serialized representation of an ATN supports
     * a particular feature, identified by the {@link UUID} used for serializing
     * the ATN at the time the feature was first introduced.
     *
     * @param feature The {@link UUID} marking the first time the feature was
     * supported in the serialized ATN.
     * @param actualUuid The {@link UUID} of the actual serialized ATN which is
     * currently being deserialized.
     * @returns `true` if the `actualUuid` value represents a
     * serialized ATN at or after the feature identified by `feature` was
     * introduced; otherwise, `false`.
     */
    ATNDeserializer.isFeatureSupported = function (feature, actualUuid) {
        var featureIndex = ATNDeserializer.SUPPORTED_UUIDS.findIndex(function (e) { return e.equals(feature); });
        if (featureIndex < 0) {
            return false;
        }
        return ATNDeserializer.SUPPORTED_UUIDS.findIndex(function (e) { return e.equals(actualUuid); }) >= featureIndex;
    };
    ATNDeserializer.getUnicodeDeserializer = function (mode) {
        if (mode === 0 /* UnicodeDeserializingMode.UNICODE_BMP */) {
            return {
                readUnicode: function (data, p) {
                    return ATNDeserializer.toInt(data[p]);
                },
                size: 1
            };
        }
        else {
            return {
                readUnicode: function (data, p) {
                    return ATNDeserializer.toInt32(data, p);
                },
                size: 2
            };
        }
    };
    ATNDeserializer.prototype.deserialize = function (data) {
        data = data.slice(0);
        // Each Uint16 value in data is shifted by +2 at the entry to this method. This is an encoding optimization
        // targeting the serialized values 0 and -1 (serialized to 0xFFFF), each of which are very common in the
        // serialized form of the ATN. In the modified UTF-8 that Java uses for compiled string literals, these two
        // character values have multi-byte forms. By shifting each value by +2, they become characters 2 and 1 prior to
        // writing the string, each of which have single-byte representations. Since the shift occurs in the tool during
        // ATN serialization, each target is responsible for adjusting the values during deserialization.
        //
        // As a special case, note that the first element of data is not adjusted because it contains the major version
        // number of the serialized ATN, which was fixed at 3 at the time the value shifting was implemented.
        for (var i = 1; i < data.length; i++) {
            data[i] = (data[i] - 2) & 0xFFFF;
        }
        var p = 0;
        var version = ATNDeserializer.toInt(data[p++]);
        if (version !== ATNDeserializer.SERIALIZED_VERSION) {
            var reason = "Could not deserialize ATN with version ".concat(version, " (expected ").concat(ATNDeserializer.SERIALIZED_VERSION, ").");
            throw new Error(reason);
        }
        var uuid = ATNDeserializer.toUUID(data, p);
        p += 8;
        if (ATNDeserializer.SUPPORTED_UUIDS.findIndex(function (e) { return e.equals(uuid); }) < 0) {
            var reason = "Could not deserialize ATN with UUID ".concat(uuid, " (expected ").concat(ATNDeserializer.SERIALIZED_UUID, " or a legacy UUID).");
            throw new Error(reason);
        }
        var supportsLexerActions = ATNDeserializer.isFeatureSupported(ATNDeserializer.ADDED_LEXER_ACTIONS, uuid);
        var grammarType = ATNDeserializer.toInt(data[p++]);
        var maxTokenType = ATNDeserializer.toInt(data[p++]);
        var atn = new ATN_1.ATN(grammarType, maxTokenType);
        //
        // STATES
        //
        var loopBackStateNumbers = [];
        var endStateNumbers = [];
        var nstates = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nstates; i++) {
            var stype = ATNDeserializer.toInt(data[p++]);
            // ignore bad type of states
            if (stype === ATNStateType_1.ATNStateType.INVALID_TYPE) {
                atn.addState(new InvalidState_1.InvalidState());
                continue;
            }
            var ruleIndex = ATNDeserializer.toInt(data[p++]);
            if (ruleIndex === 0xFFFF) {
                ruleIndex = -1;
            }
            var s = this.stateFactory(stype, ruleIndex);
            if (stype === ATNStateType_1.ATNStateType.LOOP_END) { // special case
                var loopBackStateNumber = ATNDeserializer.toInt(data[p++]);
                loopBackStateNumbers.push([s, loopBackStateNumber]);
            }
            else if (s instanceof BlockStartState_1.BlockStartState) {
                var endStateNumber = ATNDeserializer.toInt(data[p++]);
                endStateNumbers.push([s, endStateNumber]);
            }
            atn.addState(s);
        }
        // delay the assignment of loop back and end states until we know all the state instances have been initialized
        for (var _i = 0, loopBackStateNumbers_1 = loopBackStateNumbers; _i < loopBackStateNumbers_1.length; _i++) {
            var pair = loopBackStateNumbers_1[_i];
            pair[0].loopBackState = atn.states[pair[1]];
        }
        for (var _a = 0, endStateNumbers_1 = endStateNumbers; _a < endStateNumbers_1.length; _a++) {
            var pair = endStateNumbers_1[_a];
            pair[0].endState = atn.states[pair[1]];
        }
        var numNonGreedyStates = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < numNonGreedyStates; i++) {
            var stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].nonGreedy = true;
        }
        var numSllDecisions = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < numSllDecisions; i++) {
            var stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].sll = true;
        }
        var numPrecedenceStates = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < numPrecedenceStates; i++) {
            var stateNumber = ATNDeserializer.toInt(data[p++]);
            atn.states[stateNumber].isPrecedenceRule = true;
        }
        //
        // RULES
        //
        var nrules = ATNDeserializer.toInt(data[p++]);
        if (atn.grammarType === 0 /* ATNType.LEXER */) {
            atn.ruleToTokenType = new Int32Array(nrules);
        }
        atn.ruleToStartState = new Array(nrules);
        for (var i = 0; i < nrules; i++) {
            var s = ATNDeserializer.toInt(data[p++]);
            var startState = atn.states[s];
            startState.leftFactored = ATNDeserializer.toInt(data[p++]) !== 0;
            atn.ruleToStartState[i] = startState;
            if (atn.grammarType === 0 /* ATNType.LEXER */) {
                var tokenType = ATNDeserializer.toInt(data[p++]);
                if (tokenType === 0xFFFF) {
                    tokenType = Token_1.Token.EOF;
                }
                atn.ruleToTokenType[i] = tokenType;
                if (!ATNDeserializer.isFeatureSupported(ATNDeserializer.ADDED_LEXER_ACTIONS, uuid)) {
                    // this piece of unused metadata was serialized prior to the
                    // addition of LexerAction
                    var actionIndexIgnored = ATNDeserializer.toInt(data[p++]);
                    if (actionIndexIgnored === 0xFFFF) {
                        actionIndexIgnored = -1;
                    }
                }
            }
        }
        atn.ruleToStopState = new Array(nrules);
        for (var _b = 0, _c = atn.states; _b < _c.length; _b++) {
            var state = _c[_b];
            if (!(state instanceof RuleStopState_1.RuleStopState)) {
                continue;
            }
            atn.ruleToStopState[state.ruleIndex] = state;
            atn.ruleToStartState[state.ruleIndex].stopState = state;
        }
        //
        // MODES
        //
        var nmodes = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nmodes; i++) {
            var s = ATNDeserializer.toInt(data[p++]);
            atn.modeToStartState.push(atn.states[s]);
        }
        atn.modeToDFA = new Array(nmodes);
        for (var i = 0; i < nmodes; i++) {
            atn.modeToDFA[i] = new DFA_1.DFA(atn.modeToStartState[i]);
        }
        //
        // SETS
        //
        var sets = [];
        // First, read all sets with 16-bit Unicode code points <= U+FFFF.
        p = this.deserializeSets(data, p, sets, ATNDeserializer.getUnicodeDeserializer(0 /* UnicodeDeserializingMode.UNICODE_BMP */));
        // Next, if the ATN was serialized with the Unicode SMP feature,
        // deserialize sets with 32-bit arguments <= U+10FFFF.
        if (ATNDeserializer.isFeatureSupported(ATNDeserializer.ADDED_UNICODE_SMP, uuid)) {
            p = this.deserializeSets(data, p, sets, ATNDeserializer.getUnicodeDeserializer(1 /* UnicodeDeserializingMode.UNICODE_SMP */));
        }
        //
        // EDGES
        //
        var nedges = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nedges; i++) {
            var src = ATNDeserializer.toInt(data[p]);
            var trg = ATNDeserializer.toInt(data[p + 1]);
            var ttype = ATNDeserializer.toInt(data[p + 2]);
            var arg1 = ATNDeserializer.toInt(data[p + 3]);
            var arg2 = ATNDeserializer.toInt(data[p + 4]);
            var arg3 = ATNDeserializer.toInt(data[p + 5]);
            var trans = this.edgeFactory(atn, ttype, src, trg, arg1, arg2, arg3, sets);
            // console.log(`EDGE ${trans.constructor.name} ${src}->${trg} ${Transition.serializationNames[ttype]} ${arg1},${arg2},${arg3}`);
            var srcState = atn.states[src];
            srcState.addTransition(trans);
            p += 6;
        }
        var returnTransitionsSet = new Array2DHashSet_1.Array2DHashSet({
            hashCode: function (o) { return o.stopState ^ o.returnState ^ o.outermostPrecedenceReturn; },
            equals: function (a, b) {
                return a.stopState === b.stopState
                    && a.returnState === b.returnState
                    && a.outermostPrecedenceReturn === b.outermostPrecedenceReturn;
            }
        });
        var returnTransitions = [];
        for (var _d = 0, _e = atn.states; _d < _e.length; _d++) {
            var state = _e[_d];
            var returningToLeftFactored = state.ruleIndex >= 0 && atn.ruleToStartState[state.ruleIndex].leftFactored;
            for (var i = 0; i < state.numberOfTransitions; i++) {
                var t = state.transition(i);
                if (!(t instanceof RuleTransition_1.RuleTransition)) {
                    continue;
                }
                var ruleTransition = t;
                var returningFromLeftFactored = atn.ruleToStartState[ruleTransition.target.ruleIndex].leftFactored;
                if (!returningFromLeftFactored && returningToLeftFactored) {
                    continue;
                }
                var outermostPrecedenceReturn = -1;
                if (atn.ruleToStartState[ruleTransition.target.ruleIndex].isPrecedenceRule) {
                    if (ruleTransition.precedence === 0) {
                        outermostPrecedenceReturn = ruleTransition.target.ruleIndex;
                    }
                }
                var current = { stopState: ruleTransition.target.ruleIndex, returnState: ruleTransition.followState.stateNumber, outermostPrecedenceReturn: outermostPrecedenceReturn };
                if (returnTransitionsSet.add(current)) {
                    returnTransitions.push(current);
                }
            }
        }
        // Add all elements from returnTransitions to the ATN
        for (var _f = 0, returnTransitions_1 = returnTransitions; _f < returnTransitions_1.length; _f++) {
            var returnTransition = returnTransitions_1[_f];
            var transition = new EpsilonTransition_1.EpsilonTransition(atn.states[returnTransition.returnState], returnTransition.outermostPrecedenceReturn);
            atn.ruleToStopState[returnTransition.stopState].addTransition(transition);
        }
        for (var _g = 0, _h = atn.states; _g < _h.length; _g++) {
            var state = _h[_g];
            if (state instanceof BlockStartState_1.BlockStartState) {
                // we need to know the end state to set its start state
                if (state.endState == null) {
                    throw new Error("IllegalStateException");
                }
                // block end states can only be associated to a single block start state
                if (state.endState.startState != null) {
                    throw new Error("IllegalStateException");
                }
                state.endState.startState = state;
            }
            if (state instanceof PlusLoopbackState_1.PlusLoopbackState) {
                var loopbackState = state;
                for (var i = 0; i < loopbackState.numberOfTransitions; i++) {
                    var target = loopbackState.transition(i).target;
                    if (target instanceof PlusBlockStartState_1.PlusBlockStartState) {
                        target.loopBackState = loopbackState;
                    }
                }
            }
            else if (state instanceof StarLoopbackState_1.StarLoopbackState) {
                var loopbackState = state;
                for (var i = 0; i < loopbackState.numberOfTransitions; i++) {
                    var target = loopbackState.transition(i).target;
                    if (target instanceof StarLoopEntryState_1.StarLoopEntryState) {
                        target.loopBackState = loopbackState;
                    }
                }
            }
        }
        //
        // DECISIONS
        //
        var ndecisions = ATNDeserializer.toInt(data[p++]);
        for (var i = 1; i <= ndecisions; i++) {
            var s = ATNDeserializer.toInt(data[p++]);
            var decState = atn.states[s];
            atn.decisionToState.push(decState);
            decState.decision = i - 1;
        }
        //
        // LEXER ACTIONS
        //
        if (atn.grammarType === 0 /* ATNType.LEXER */) {
            if (supportsLexerActions) {
                atn.lexerActions = new Array(ATNDeserializer.toInt(data[p++]));
                for (var i = 0; i < atn.lexerActions.length; i++) {
                    var actionType = ATNDeserializer.toInt(data[p++]);
                    var data1 = ATNDeserializer.toInt(data[p++]);
                    if (data1 === 0xFFFF) {
                        data1 = -1;
                    }
                    var data2 = ATNDeserializer.toInt(data[p++]);
                    if (data2 === 0xFFFF) {
                        data2 = -1;
                    }
                    var lexerAction = this.lexerActionFactory(actionType, data1, data2);
                    atn.lexerActions[i] = lexerAction;
                }
            }
            else {
                // for compatibility with older serialized ATNs, convert the old
                // serialized action index for action transitions to the new
                // form, which is the index of a LexerCustomAction
                var legacyLexerActions = [];
                for (var _j = 0, _k = atn.states; _j < _k.length; _j++) {
                    var state = _k[_j];
                    for (var i = 0; i < state.numberOfTransitions; i++) {
                        var transition = state.transition(i);
                        if (!(transition instanceof ActionTransition_1.ActionTransition)) {
                            continue;
                        }
                        var ruleIndex = transition.ruleIndex;
                        var actionIndex = transition.actionIndex;
                        var lexerAction = new LexerCustomAction_1.LexerCustomAction(ruleIndex, actionIndex);
                        state.setTransition(i, new ActionTransition_1.ActionTransition(transition.target, ruleIndex, legacyLexerActions.length, false));
                        legacyLexerActions.push(lexerAction);
                    }
                }
                atn.lexerActions = legacyLexerActions;
            }
        }
        this.markPrecedenceDecisions(atn);
        atn.decisionToDFA = new Array(ndecisions);
        for (var i = 0; i < ndecisions; i++) {
            atn.decisionToDFA[i] = new DFA_1.DFA(atn.decisionToState[i], i);
        }
        if (this.deserializationOptions.isVerifyATN) {
            this.verifyATN(atn);
        }
        if (this.deserializationOptions.isGenerateRuleBypassTransitions && atn.grammarType === 1 /* ATNType.PARSER */) {
            atn.ruleToTokenType = new Int32Array(atn.ruleToStartState.length);
            for (var i = 0; i < atn.ruleToStartState.length; i++) {
                atn.ruleToTokenType[i] = atn.maxTokenType + i + 1;
            }
            for (var i = 0; i < atn.ruleToStartState.length; i++) {
                var bypassStart = new BasicBlockStartState_1.BasicBlockStartState();
                bypassStart.ruleIndex = i;
                atn.addState(bypassStart);
                var bypassStop = new BlockEndState_1.BlockEndState();
                bypassStop.ruleIndex = i;
                atn.addState(bypassStop);
                bypassStart.endState = bypassStop;
                atn.defineDecisionState(bypassStart);
                bypassStop.startState = bypassStart;
                var endState = void 0;
                var excludeTransition = void 0;
                if (atn.ruleToStartState[i].isPrecedenceRule) {
                    // wrap from the beginning of the rule to the StarLoopEntryState
                    endState = undefined;
                    for (var _l = 0, _m = atn.states; _l < _m.length; _l++) {
                        var state = _m[_l];
                        if (state.ruleIndex !== i) {
                            continue;
                        }
                        if (!(state instanceof StarLoopEntryState_1.StarLoopEntryState)) {
                            continue;
                        }
                        var maybeLoopEndState = state.transition(state.numberOfTransitions - 1).target;
                        if (!(maybeLoopEndState instanceof LoopEndState_1.LoopEndState)) {
                            continue;
                        }
                        if (maybeLoopEndState.epsilonOnlyTransitions && maybeLoopEndState.transition(0).target instanceof RuleStopState_1.RuleStopState) {
                            endState = state;
                            break;
                        }
                    }
                    if (!endState) {
                        throw new Error("Couldn't identify final state of the precedence rule prefix section.");
                    }
                    excludeTransition = endState.loopBackState.transition(0);
                }
                else {
                    endState = atn.ruleToStopState[i];
                }
                // all non-excluded transitions that currently target end state need to target blockEnd instead
                for (var _o = 0, _p = atn.states; _o < _p.length; _o++) {
                    var state = _p[_o];
                    for (var i_1 = 0; i_1 < state.numberOfTransitions; i_1++) {
                        var transition = state.transition(i_1);
                        if (transition === excludeTransition) {
                            continue;
                        }
                        if (transition.target === endState) {
                            transition.target = bypassStop;
                        }
                    }
                }
                // all transitions leaving the rule start state need to leave blockStart instead
                while (atn.ruleToStartState[i].numberOfTransitions > 0) {
                    var transition = atn.ruleToStartState[i].removeTransition(atn.ruleToStartState[i].numberOfTransitions - 1);
                    bypassStart.addTransition(transition);
                }
                // link the new states
                atn.ruleToStartState[i].addTransition(new EpsilonTransition_1.EpsilonTransition(bypassStart));
                bypassStop.addTransition(new EpsilonTransition_1.EpsilonTransition(endState));
                var matchState = new BasicState_1.BasicState();
                atn.addState(matchState);
                matchState.addTransition(new AtomTransition_1.AtomTransition(bypassStop, atn.ruleToTokenType[i]));
                bypassStart.addTransition(new EpsilonTransition_1.EpsilonTransition(matchState));
            }
            if (this.deserializationOptions.isVerifyATN) {
                // reverify after modification
                this.verifyATN(atn);
            }
        }
        if (this.deserializationOptions.isOptimize) {
            while (true) {
                var optimizationCount = 0;
                optimizationCount += ATNDeserializer.inlineSetRules(atn);
                optimizationCount += ATNDeserializer.combineChainedEpsilons(atn);
                var preserveOrder = atn.grammarType === 0 /* ATNType.LEXER */;
                optimizationCount += ATNDeserializer.optimizeSets(atn, preserveOrder);
                if (optimizationCount === 0) {
                    break;
                }
            }
            if (this.deserializationOptions.isVerifyATN) {
                // reverify after modification
                this.verifyATN(atn);
            }
        }
        ATNDeserializer.identifyTailCalls(atn);
        return atn;
    };
    ATNDeserializer.prototype.deserializeSets = function (data, p, sets, unicodeDeserializer) {
        var nsets = ATNDeserializer.toInt(data[p++]);
        for (var i = 0; i < nsets; i++) {
            var nintervals = ATNDeserializer.toInt(data[p]);
            p++;
            var set = new IntervalSet_1.IntervalSet();
            sets.push(set);
            var containsEof = ATNDeserializer.toInt(data[p++]) !== 0;
            if (containsEof) {
                set.add(-1);
            }
            for (var j = 0; j < nintervals; j++) {
                var a = unicodeDeserializer.readUnicode(data, p);
                p += unicodeDeserializer.size;
                var b = unicodeDeserializer.readUnicode(data, p);
                p += unicodeDeserializer.size;
                set.add(a, b);
            }
        }
        return p;
    };
    /**
     * Analyze the {@link StarLoopEntryState} states in the specified ATN to set
     * the {@link StarLoopEntryState#precedenceRuleDecision} field to the
     * correct value.
     *
     * @param atn The ATN.
     */
    ATNDeserializer.prototype.markPrecedenceDecisions = function (atn) {
        // Map rule index -> precedence decision for that rule
        var rulePrecedenceDecisions = new Map();
        for (var _i = 0, _a = atn.states; _i < _a.length; _i++) {
            var state = _a[_i];
            if (!(state instanceof StarLoopEntryState_1.StarLoopEntryState)) {
                continue;
            }
            /* We analyze the ATN to determine if this ATN decision state is the
             * decision for the closure block that determines whether a
             * precedence rule should continue or complete.
             */
            if (atn.ruleToStartState[state.ruleIndex].isPrecedenceRule) {
                var maybeLoopEndState = state.transition(state.numberOfTransitions - 1).target;
                if (maybeLoopEndState instanceof LoopEndState_1.LoopEndState) {
                    if (maybeLoopEndState.epsilonOnlyTransitions && maybeLoopEndState.transition(0).target instanceof RuleStopState_1.RuleStopState) {
                        rulePrecedenceDecisions.set(state.ruleIndex, state);
                        state.precedenceRuleDecision = true;
                        state.precedenceLoopbackStates = new BitSet_1.BitSet(atn.states.length);
                    }
                }
            }
        }
        // After marking precedence decisions, we go back through and fill in
        // StarLoopEntryState.precedenceLoopbackStates.
        for (var _b = 0, rulePrecedenceDecisions_1 = rulePrecedenceDecisions; _b < rulePrecedenceDecisions_1.length; _b++) {
            var precedenceDecision = rulePrecedenceDecisions_1[_b];
            for (var _c = 0, _d = atn.ruleToStopState[precedenceDecision[0]].getTransitions(); _c < _d.length; _c++) {
                var transition = _d[_c];
                if (transition.serializationType !== 1 /* TransitionType.EPSILON */) {
                    continue;
                }
                var epsilonTransition = transition;
                if (epsilonTransition.outermostPrecedenceReturn !== -1) {
                    continue;
                }
                precedenceDecision[1].precedenceLoopbackStates.set(transition.target.stateNumber);
            }
        }
    };
    ATNDeserializer.prototype.verifyATN = function (atn) {
        // verify assumptions
        for (var _i = 0, _a = atn.states; _i < _a.length; _i++) {
            var state = _a[_i];
            this.checkCondition(state != null, "ATN states should not be null.");
            if (state.stateType === ATNStateType_1.ATNStateType.INVALID_TYPE) {
                continue;
            }
            this.checkCondition(state.onlyHasEpsilonTransitions || state.numberOfTransitions <= 1);
            if (state instanceof PlusBlockStartState_1.PlusBlockStartState) {
                this.checkCondition(state.loopBackState != null);
            }
            if (state instanceof StarLoopEntryState_1.StarLoopEntryState) {
                var starLoopEntryState = state;
                this.checkCondition(starLoopEntryState.loopBackState != null);
                this.checkCondition(starLoopEntryState.numberOfTransitions === 2);
                if (starLoopEntryState.transition(0).target instanceof StarBlockStartState_1.StarBlockStartState) {
                    this.checkCondition(starLoopEntryState.transition(1).target instanceof LoopEndState_1.LoopEndState);
                    this.checkCondition(!starLoopEntryState.nonGreedy);
                }
                else if (starLoopEntryState.transition(0).target instanceof LoopEndState_1.LoopEndState) {
                    this.checkCondition(starLoopEntryState.transition(1).target instanceof StarBlockStartState_1.StarBlockStartState);
                    this.checkCondition(starLoopEntryState.nonGreedy);
                }
                else {
                    throw new Error("IllegalStateException");
                }
            }
            if (state instanceof StarLoopbackState_1.StarLoopbackState) {
                this.checkCondition(state.numberOfTransitions === 1);
                this.checkCondition(state.transition(0).target instanceof StarLoopEntryState_1.StarLoopEntryState);
            }
            if (state instanceof LoopEndState_1.LoopEndState) {
                this.checkCondition(state.loopBackState != null);
            }
            if (state instanceof RuleStartState_1.RuleStartState) {
                this.checkCondition(state.stopState != null);
            }
            if (state instanceof BlockStartState_1.BlockStartState) {
                this.checkCondition(state.endState != null);
            }
            if (state instanceof BlockEndState_1.BlockEndState) {
                this.checkCondition(state.startState != null);
            }
            if (state instanceof DecisionState_1.DecisionState) {
                var decisionState = state;
                this.checkCondition(decisionState.numberOfTransitions <= 1 || decisionState.decision >= 0);
            }
            else {
                this.checkCondition(state.numberOfTransitions <= 1 || state instanceof RuleStopState_1.RuleStopState);
            }
        }
    };
    ATNDeserializer.prototype.checkCondition = function (condition, message) {
        if (!condition) {
            throw new Error("IllegalStateException: " + message);
        }
    };
    ATNDeserializer.inlineSetRules = function (atn) {
        var inlinedCalls = 0;
        var ruleToInlineTransition = new Array(atn.ruleToStartState.length);
        for (var i = 0; i < atn.ruleToStartState.length; i++) {
            var startState = atn.ruleToStartState[i];
            var middleState = startState;
            while (middleState.onlyHasEpsilonTransitions
                && middleState.numberOfOptimizedTransitions === 1
                && middleState.getOptimizedTransition(0).serializationType === 1 /* TransitionType.EPSILON */) {
                middleState = middleState.getOptimizedTransition(0).target;
            }
            if (middleState.numberOfOptimizedTransitions !== 1) {
                continue;
            }
            var matchTransition = middleState.getOptimizedTransition(0);
            var matchTarget = matchTransition.target;
            if (matchTransition.isEpsilon
                || !matchTarget.onlyHasEpsilonTransitions
                || matchTarget.numberOfOptimizedTransitions !== 1
                || !(matchTarget.getOptimizedTransition(0).target instanceof RuleStopState_1.RuleStopState)) {
                continue;
            }
            switch (matchTransition.serializationType) {
                case 5 /* TransitionType.ATOM */:
                case 2 /* TransitionType.RANGE */:
                case 7 /* TransitionType.SET */:
                    ruleToInlineTransition[i] = matchTransition;
                    break;
                case 8 /* TransitionType.NOT_SET */:
                case 9 /* TransitionType.WILDCARD */:
                    // not implemented yet
                    continue;
                default:
                    continue;
            }
        }
        for (var _i = 0, _a = atn.states; _i < _a.length; _i++) {
            var state = _a[_i];
            if (state.ruleIndex < 0) {
                continue;
            }
            var optimizedTransitions = void 0;
            for (var i = 0; i < state.numberOfOptimizedTransitions; i++) {
                var transition = state.getOptimizedTransition(i);
                if (!(transition instanceof RuleTransition_1.RuleTransition)) {
                    if (optimizedTransitions != null) {
                        optimizedTransitions.push(transition);
                    }
                    continue;
                }
                var ruleTransition = transition;
                var effective = ruleToInlineTransition[ruleTransition.target.ruleIndex];
                if (effective == null) {
                    if (optimizedTransitions != null) {
                        optimizedTransitions.push(transition);
                    }
                    continue;
                }
                if (optimizedTransitions == null) {
                    optimizedTransitions = [];
                    for (var j = 0; j < i; j++) {
                        optimizedTransitions.push(state.getOptimizedTransition(i));
                    }
                }
                inlinedCalls++;
                var target = ruleTransition.followState;
                var intermediateState = new BasicState_1.BasicState();
                intermediateState.setRuleIndex(target.ruleIndex);
                atn.addState(intermediateState);
                optimizedTransitions.push(new EpsilonTransition_1.EpsilonTransition(intermediateState));
                switch (effective.serializationType) {
                    case 5 /* TransitionType.ATOM */:
                        intermediateState.addTransition(new AtomTransition_1.AtomTransition(target, effective._label));
                        break;
                    case 2 /* TransitionType.RANGE */:
                        intermediateState.addTransition(new RangeTransition_1.RangeTransition(target, effective.from, effective.to));
                        break;
                    case 7 /* TransitionType.SET */:
                        intermediateState.addTransition(new SetTransition_1.SetTransition(target, effective.label));
                        break;
                    default:
                        throw new Error("UnsupportedOperationException");
                }
            }
            if (optimizedTransitions != null) {
                if (state.isOptimized) {
                    while (state.numberOfOptimizedTransitions > 0) {
                        state.removeOptimizedTransition(state.numberOfOptimizedTransitions - 1);
                    }
                }
                for (var _b = 0, optimizedTransitions_1 = optimizedTransitions; _b < optimizedTransitions_1.length; _b++) {
                    var transition = optimizedTransitions_1[_b];
                    state.addOptimizedTransition(transition);
                }
            }
        }
        if (ParserATNSimulator_1.ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + inlinedCalls + " rule invocations by inlining sets.");
        }
        return inlinedCalls;
    };
    ATNDeserializer.combineChainedEpsilons = function (atn) {
        var removedEdges = 0;
        for (var _i = 0, _a = atn.states; _i < _a.length; _i++) {
            var state = _a[_i];
            if (!state.onlyHasEpsilonTransitions || state instanceof RuleStopState_1.RuleStopState) {
                continue;
            }
            var optimizedTransitions = void 0;
            nextTransition: for (var i = 0; i < state.numberOfOptimizedTransitions; i++) {
                var transition = state.getOptimizedTransition(i);
                var intermediate = transition.target;
                if (transition.serializationType !== 1 /* TransitionType.EPSILON */
                    || transition.outermostPrecedenceReturn !== -1
                    || intermediate.stateType !== ATNStateType_1.ATNStateType.BASIC
                    || !intermediate.onlyHasEpsilonTransitions) {
                    if (optimizedTransitions != null) {
                        optimizedTransitions.push(transition);
                    }
                    continue nextTransition;
                }
                for (var j = 0; j < intermediate.numberOfOptimizedTransitions; j++) {
                    if (intermediate.getOptimizedTransition(j).serializationType !== 1 /* TransitionType.EPSILON */
                        || intermediate.getOptimizedTransition(j).outermostPrecedenceReturn !== -1) {
                        if (optimizedTransitions != null) {
                            optimizedTransitions.push(transition);
                        }
                        continue nextTransition;
                    }
                }
                removedEdges++;
                if (optimizedTransitions == null) {
                    optimizedTransitions = [];
                    for (var j = 0; j < i; j++) {
                        optimizedTransitions.push(state.getOptimizedTransition(j));
                    }
                }
                for (var j = 0; j < intermediate.numberOfOptimizedTransitions; j++) {
                    var target = intermediate.getOptimizedTransition(j).target;
                    optimizedTransitions.push(new EpsilonTransition_1.EpsilonTransition(target));
                }
            }
            if (optimizedTransitions != null) {
                if (state.isOptimized) {
                    while (state.numberOfOptimizedTransitions > 0) {
                        state.removeOptimizedTransition(state.numberOfOptimizedTransitions - 1);
                    }
                }
                for (var _b = 0, optimizedTransitions_2 = optimizedTransitions; _b < optimizedTransitions_2.length; _b++) {
                    var transition = optimizedTransitions_2[_b];
                    state.addOptimizedTransition(transition);
                }
            }
        }
        if (ParserATNSimulator_1.ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + removedEdges + " transitions by combining chained epsilon transitions.");
        }
        return removedEdges;
    };
    ATNDeserializer.optimizeSets = function (atn, preserveOrder) {
        if (preserveOrder) {
            // this optimization currently doesn't preserve edge order.
            return 0;
        }
        var removedPaths = 0;
        var decisions = atn.decisionToState;
        for (var _i = 0, decisions_1 = decisions; _i < decisions_1.length; _i++) {
            var decision = decisions_1[_i];
            var setTransitions = new IntervalSet_1.IntervalSet();
            for (var i = 0; i < decision.numberOfOptimizedTransitions; i++) {
                var epsTransition = decision.getOptimizedTransition(i);
                if (!(epsTransition instanceof EpsilonTransition_1.EpsilonTransition)) {
                    continue;
                }
                if (epsTransition.target.numberOfOptimizedTransitions !== 1) {
                    continue;
                }
                var transition = epsTransition.target.getOptimizedTransition(0);
                if (!(transition.target instanceof BlockEndState_1.BlockEndState)) {
                    continue;
                }
                if (transition instanceof NotSetTransition_1.NotSetTransition) {
                    // TODO: not yet implemented
                    continue;
                }
                if (transition instanceof AtomTransition_1.AtomTransition
                    || transition instanceof RangeTransition_1.RangeTransition
                    || transition instanceof SetTransition_1.SetTransition) {
                    setTransitions.add(i);
                }
            }
            if (setTransitions.size <= 1) {
                continue;
            }
            var optimizedTransitions = [];
            for (var i = 0; i < decision.numberOfOptimizedTransitions; i++) {
                if (!setTransitions.contains(i)) {
                    optimizedTransitions.push(decision.getOptimizedTransition(i));
                }
            }
            var blockEndState = decision.getOptimizedTransition(setTransitions.minElement).target.getOptimizedTransition(0).target;
            var matchSet = new IntervalSet_1.IntervalSet();
            for (var _a = 0, _b = setTransitions.intervals; _a < _b.length; _a++) {
                var interval = _b[_a];
                for (var j = interval.a; j <= interval.b; j++) {
                    var matchTransition = decision.getOptimizedTransition(j).target.getOptimizedTransition(0);
                    if (matchTransition instanceof NotSetTransition_1.NotSetTransition) {
                        throw new Error("Not yet implemented.");
                    }
                    else {
                        matchSet.addAll(matchTransition.label);
                    }
                }
            }
            var newTransition = void 0;
            if (matchSet.intervals.length === 1) {
                if (matchSet.size === 1) {
                    newTransition = new AtomTransition_1.AtomTransition(blockEndState, matchSet.minElement);
                }
                else {
                    var matchInterval = matchSet.intervals[0];
                    newTransition = new RangeTransition_1.RangeTransition(blockEndState, matchInterval.a, matchInterval.b);
                }
            }
            else {
                newTransition = new SetTransition_1.SetTransition(blockEndState, matchSet);
            }
            var setOptimizedState = new BasicState_1.BasicState();
            setOptimizedState.setRuleIndex(decision.ruleIndex);
            atn.addState(setOptimizedState);
            setOptimizedState.addTransition(newTransition);
            optimizedTransitions.push(new EpsilonTransition_1.EpsilonTransition(setOptimizedState));
            removedPaths += decision.numberOfOptimizedTransitions - optimizedTransitions.length;
            if (decision.isOptimized) {
                while (decision.numberOfOptimizedTransitions > 0) {
                    decision.removeOptimizedTransition(decision.numberOfOptimizedTransitions - 1);
                }
            }
            for (var _c = 0, optimizedTransitions_3 = optimizedTransitions; _c < optimizedTransitions_3.length; _c++) {
                var transition = optimizedTransitions_3[_c];
                decision.addOptimizedTransition(transition);
            }
        }
        if (ParserATNSimulator_1.ParserATNSimulator.debug) {
            console.log("ATN runtime optimizer removed " + removedPaths + " paths by collapsing sets.");
        }
        return removedPaths;
    };
    ATNDeserializer.identifyTailCalls = function (atn) {
        for (var _i = 0, _a = atn.states; _i < _a.length; _i++) {
            var state = _a[_i];
            for (var i = 0; i < state.numberOfTransitions; i++) {
                var transition = state.transition(i);
                if (!(transition instanceof RuleTransition_1.RuleTransition)) {
                    continue;
                }
                transition.tailCall = this.testTailCall(atn, transition, false);
                transition.optimizedTailCall = this.testTailCall(atn, transition, true);
            }
            if (!state.isOptimized) {
                continue;
            }
            for (var i = 0; i < state.numberOfOptimizedTransitions; i++) {
                var transition = state.getOptimizedTransition(i);
                if (!(transition instanceof RuleTransition_1.RuleTransition)) {
                    continue;
                }
                transition.tailCall = this.testTailCall(atn, transition, false);
                transition.optimizedTailCall = this.testTailCall(atn, transition, true);
            }
        }
    };
    ATNDeserializer.testTailCall = function (atn, transition, optimizedPath) {
        if (!optimizedPath && transition.tailCall) {
            return true;
        }
        if (optimizedPath && transition.optimizedTailCall) {
            return true;
        }
        var reachable = new BitSet_1.BitSet(atn.states.length);
        var worklist = [];
        worklist.push(transition.followState);
        while (true) {
            var state = worklist.pop();
            if (!state) {
                break;
            }
            if (reachable.get(state.stateNumber)) {
                continue;
            }
            if (state instanceof RuleStopState_1.RuleStopState) {
                continue;
            }
            if (!state.onlyHasEpsilonTransitions) {
                return false;
            }
            var transitionCount = optimizedPath ? state.numberOfOptimizedTransitions : state.numberOfTransitions;
            for (var i = 0; i < transitionCount; i++) {
                var t = optimizedPath ? state.getOptimizedTransition(i) : state.transition(i);
                if (t.serializationType !== 1 /* TransitionType.EPSILON */) {
                    return false;
                }
                worklist.push(t.target);
            }
        }
        return true;
    };
    ATNDeserializer.toInt = function (c) {
        return c;
    };
    ATNDeserializer.toInt32 = function (data, offset) {
        return (data[offset] | (data[offset + 1] << 16)) >>> 0;
    };
    ATNDeserializer.toUUID = function (data, offset) {
        var leastSigBits = ATNDeserializer.toInt32(data, offset);
        var lessSigBits = ATNDeserializer.toInt32(data, offset + 2);
        var moreSigBits = ATNDeserializer.toInt32(data, offset + 4);
        var mostSigBits = ATNDeserializer.toInt32(data, offset + 6);
        return new UUID_1.UUID(mostSigBits, moreSigBits, lessSigBits, leastSigBits);
    };
    ATNDeserializer.prototype.edgeFactory = function (atn, type, src, trg, arg1, arg2, arg3, sets) {
        var target = atn.states[trg];
        switch (type) {
            case 1 /* TransitionType.EPSILON */: return new EpsilonTransition_1.EpsilonTransition(target);
            case 2 /* TransitionType.RANGE */:
                if (arg3 !== 0) {
                    return new RangeTransition_1.RangeTransition(target, Token_1.Token.EOF, arg2);
                }
                else {
                    return new RangeTransition_1.RangeTransition(target, arg1, arg2);
                }
            case 3 /* TransitionType.RULE */:
                var rt = new RuleTransition_1.RuleTransition(atn.states[arg1], arg2, arg3, target);
                return rt;
            case 4 /* TransitionType.PREDICATE */:
                var pt = new PredicateTransition_1.PredicateTransition(target, arg1, arg2, arg3 !== 0);
                return pt;
            case 10 /* TransitionType.PRECEDENCE */:
                return new PrecedencePredicateTransition_1.PrecedencePredicateTransition(target, arg1);
            case 5 /* TransitionType.ATOM */:
                if (arg3 !== 0) {
                    return new AtomTransition_1.AtomTransition(target, Token_1.Token.EOF);
                }
                else {
                    return new AtomTransition_1.AtomTransition(target, arg1);
                }
            case 6 /* TransitionType.ACTION */:
                var a = new ActionTransition_1.ActionTransition(target, arg1, arg2, arg3 !== 0);
                return a;
            case 7 /* TransitionType.SET */: return new SetTransition_1.SetTransition(target, sets[arg1]);
            case 8 /* TransitionType.NOT_SET */: return new NotSetTransition_1.NotSetTransition(target, sets[arg1]);
            case 9 /* TransitionType.WILDCARD */: return new WildcardTransition_1.WildcardTransition(target);
        }
        throw new Error("The specified transition type is not valid.");
    };
    ATNDeserializer.prototype.stateFactory = function (type, ruleIndex) {
        var s;
        switch (type) {
            case ATNStateType_1.ATNStateType.INVALID_TYPE: return new InvalidState_1.InvalidState();
            case ATNStateType_1.ATNStateType.BASIC:
                s = new BasicState_1.BasicState();
                break;
            case ATNStateType_1.ATNStateType.RULE_START:
                s = new RuleStartState_1.RuleStartState();
                break;
            case ATNStateType_1.ATNStateType.BLOCK_START:
                s = new BasicBlockStartState_1.BasicBlockStartState();
                break;
            case ATNStateType_1.ATNStateType.PLUS_BLOCK_START:
                s = new PlusBlockStartState_1.PlusBlockStartState();
                break;
            case ATNStateType_1.ATNStateType.STAR_BLOCK_START:
                s = new StarBlockStartState_1.StarBlockStartState();
                break;
            case ATNStateType_1.ATNStateType.TOKEN_START:
                s = new TokensStartState_1.TokensStartState();
                break;
            case ATNStateType_1.ATNStateType.RULE_STOP:
                s = new RuleStopState_1.RuleStopState();
                break;
            case ATNStateType_1.ATNStateType.BLOCK_END:
                s = new BlockEndState_1.BlockEndState();
                break;
            case ATNStateType_1.ATNStateType.STAR_LOOP_BACK:
                s = new StarLoopbackState_1.StarLoopbackState();
                break;
            case ATNStateType_1.ATNStateType.STAR_LOOP_ENTRY:
                s = new StarLoopEntryState_1.StarLoopEntryState();
                break;
            case ATNStateType_1.ATNStateType.PLUS_LOOP_BACK:
                s = new PlusLoopbackState_1.PlusLoopbackState();
                break;
            case ATNStateType_1.ATNStateType.LOOP_END:
                s = new LoopEndState_1.LoopEndState();
                break;
            default:
                var message = "The specified state type ".concat(type, " is not valid.");
                throw new Error(message);
        }
        s.ruleIndex = ruleIndex;
        return s;
    };
    ATNDeserializer.prototype.lexerActionFactory = function (type, data1, data2) {
        switch (type) {
            case 0 /* LexerActionType.CHANNEL */:
                return new LexerChannelAction_1.LexerChannelAction(data1);
            case 1 /* LexerActionType.CUSTOM */:
                return new LexerCustomAction_1.LexerCustomAction(data1, data2);
            case 2 /* LexerActionType.MODE */:
                return new LexerModeAction_1.LexerModeAction(data1);
            case 3 /* LexerActionType.MORE */:
                return LexerMoreAction_1.LexerMoreAction.INSTANCE;
            case 4 /* LexerActionType.POP_MODE */:
                return LexerPopModeAction_1.LexerPopModeAction.INSTANCE;
            case 5 /* LexerActionType.PUSH_MODE */:
                return new LexerPushModeAction_1.LexerPushModeAction(data1);
            case 6 /* LexerActionType.SKIP */:
                return LexerSkipAction_1.LexerSkipAction.INSTANCE;
            case 7 /* LexerActionType.TYPE */:
                return new LexerTypeAction_1.LexerTypeAction(data1);
            default:
                var message = "The specified lexer action type ".concat(type, " is not valid.");
                throw new Error(message);
        }
    };
    /* WARNING: DO NOT MERGE THESE LINES. If UUIDs differ during a merge,
     * resolve the conflict by generating a new ID!
     */
    /**
     * This is the earliest supported serialized UUID.
     */
    ATNDeserializer.BASE_SERIALIZED_UUID = UUID_1.UUID.fromString("E4178468-DF95-44D0-AD87-F22A5D5FB6D3");
    /**
     * This UUID indicates an extension of {@link #ADDED_PRECEDENCE_TRANSITIONS}
     * for the addition of lexer actions encoded as a sequence of
     * {@link LexerAction} instances.
     */
    ATNDeserializer.ADDED_LEXER_ACTIONS = UUID_1.UUID.fromString("AB35191A-1603-487E-B75A-479B831EAF6D");
    /**
     * This UUID indicates the serialized ATN contains two sets of
     * IntervalSets, where the second set's values are encoded as
     * 32-bit integers to support the full Unicode SMP range up to U+10FFFF.
     */
    ATNDeserializer.ADDED_UNICODE_SMP = UUID_1.UUID.fromString("C23FEA89-0605-4f51-AFB8-058BCAB8C91B");
    /**
     * This list contains all of the currently supported UUIDs, ordered by when
     * the feature first appeared in this branch.
     */
    ATNDeserializer.SUPPORTED_UUIDS = [
        ATNDeserializer.BASE_SERIALIZED_UUID,
        ATNDeserializer.ADDED_LEXER_ACTIONS,
        ATNDeserializer.ADDED_UNICODE_SMP,
    ];
    /**
     * This is the current serialized UUID.
     */
    ATNDeserializer.SERIALIZED_UUID = ATNDeserializer.ADDED_UNICODE_SMP;
    __decorate([
        Decorators_1.NotNull
    ], ATNDeserializer.prototype, "deserializationOptions");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], ATNDeserializer.prototype, "deserialize");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], ATNDeserializer.prototype, "markPrecedenceDecisions");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull)
    ], ATNDeserializer.prototype, "edgeFactory");
    return ATNDeserializer;
}());
exports.ATNDeserializer = ATNDeserializer;
