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
exports.LexerATNSimulator = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:29.1083066-07:00
var AcceptStateInfo_1 = require("../dfa/AcceptStateInfo");
var ATN_1 = require("./ATN");
var ATNConfig_1 = require("./ATNConfig");
var ATNConfigSet_1 = require("./ATNConfigSet");
var ATNSimulator_1 = require("./ATNSimulator");
var DFAState_1 = require("../dfa/DFAState");
var Interval_1 = require("../misc/Interval");
var IntStream_1 = require("../IntStream");
var Lexer_1 = require("../Lexer");
var LexerActionExecutor_1 = require("./LexerActionExecutor");
var LexerNoViableAltException_1 = require("../LexerNoViableAltException");
var Decorators_1 = require("../Decorators");
var OrderedATNConfigSet_1 = require("./OrderedATNConfigSet");
var PredictionContext_1 = require("./PredictionContext");
var RuleStopState_1 = require("./RuleStopState");
var Token_1 = require("../Token");
var assert = require("assert");
/** "dup" of ParserInterpreter */
var LexerATNSimulator = /** @class */ (function (_super) {
    __extends(LexerATNSimulator, _super);
    function LexerATNSimulator(atn, recog) {
        var _this = _super.call(this, atn) || this;
        _this.optimize_tail_calls = true;
        /** The current token's starting index into the character stream.
         *  Shared across DFA to ATN simulation in case the ATN fails and the
         *  DFA did not have a previous accept state. In this case, we use the
         *  ATN-generated exception object.
         */
        _this.startIndex = -1;
        /** line number 1..n within the input */
        _this._line = 1;
        /** The index of the character relative to the beginning of the line 0..n-1 */
        _this._charPositionInLine = 0;
        _this.mode = Lexer_1.Lexer.DEFAULT_MODE;
        /** Used during DFA/ATN exec to record the most recent accept configuration info */
        _this.prevAccept = new LexerATNSimulator.SimState();
        _this.recog = recog;
        return _this;
    }
    LexerATNSimulator.prototype.copyState = function (simulator) {
        this._charPositionInLine = simulator.charPositionInLine;
        this._line = simulator._line;
        this.mode = simulator.mode;
        this.startIndex = simulator.startIndex;
    };
    LexerATNSimulator.prototype.match = function (input, mode) {
        LexerATNSimulator.match_calls++;
        this.mode = mode;
        var mark = input.mark();
        try {
            this.startIndex = input.index;
            this.prevAccept.reset();
            var s0 = this.atn.modeToDFA[mode].s0;
            if (s0 == null) {
                return this.matchATN(input);
            }
            else {
                return this.execATN(input, s0);
            }
        }
        finally {
            input.release(mark);
        }
    };
    LexerATNSimulator.prototype.reset = function () {
        this.prevAccept.reset();
        this.startIndex = -1;
        this._line = 1;
        this._charPositionInLine = 0;
        this.mode = Lexer_1.Lexer.DEFAULT_MODE;
    };
    LexerATNSimulator.prototype.matchATN = function (input) {
        var startState = this.atn.modeToStartState[this.mode];
        if (LexerATNSimulator.debug) {
            console.log("matchATN mode ".concat(this.mode, " start: ").concat(startState));
        }
        var old_mode = this.mode;
        var s0_closure = this.computeStartState(input, startState);
        var suppressEdge = s0_closure.hasSemanticContext;
        if (suppressEdge) {
            s0_closure.hasSemanticContext = false;
        }
        var next = this.addDFAState(s0_closure);
        if (!suppressEdge) {
            var dfa = this.atn.modeToDFA[this.mode];
            if (!dfa.s0) {
                dfa.s0 = next;
            }
            else {
                next = dfa.s0;
            }
        }
        var predict = this.execATN(input, next);
        if (LexerATNSimulator.debug) {
            console.log("DFA after matchATN: ".concat(this.atn.modeToDFA[old_mode].toLexerString()));
        }
        return predict;
    };
    LexerATNSimulator.prototype.execATN = function (input, ds0) {
        // console.log("enter exec index "+input.index+" from "+ds0.configs);
        if (LexerATNSimulator.debug) {
            console.log("start state closure=".concat(ds0.configs));
        }
        if (ds0.isAcceptState) {
            // allow zero-length tokens
            this.captureSimState(this.prevAccept, input, ds0);
        }
        var t = input.LA(1);
        // @NotNull
        var s = ds0; // s is current/from DFA state
        while (true) { // while more work
            if (LexerATNSimulator.debug) {
                console.log("execATN loop starting closure: ".concat(s.configs));
            }
            // As we move src->trg, src->trg, we keep track of the previous trg to
            // avoid looking up the DFA state again, which is expensive.
            // If the previous target was already part of the DFA, we might
            // be able to avoid doing a reach operation upon t. If s!=null,
            // it means that semantic predicates didn't prevent us from
            // creating a DFA state. Once we know s!=null, we check to see if
            // the DFA state has an edge already for t. If so, we can just reuse
            // it's configuration set; there's no point in re-computing it.
            // This is kind of like doing DFA simulation within the ATN
            // simulation because DFA simulation is really just a way to avoid
            // computing reach/closure sets. Technically, once we know that
            // we have a previously added DFA state, we could jump over to
            // the DFA simulator. But, that would mean popping back and forth
            // a lot and making things more complicated algorithmically.
            // This optimization makes a lot of sense for loops within DFA.
            // A character will take us back to an existing DFA state
            // that already has lots of edges out of it. e.g., .* in comments.
            var target = this.getExistingTargetState(s, t);
            if (target == null) {
                target = this.computeTargetState(input, s, t);
            }
            if (target === ATNSimulator_1.ATNSimulator.ERROR) {
                break;
            }
            // If this is a consumable input element, make sure to consume before
            // capturing the accept state so the input index, line, and char
            // position accurately reflect the state of the interpreter at the
            // end of the token.
            if (t !== IntStream_1.IntStream.EOF) {
                this.consume(input);
            }
            if (target.isAcceptState) {
                this.captureSimState(this.prevAccept, input, target);
                if (t === IntStream_1.IntStream.EOF) {
                    break;
                }
            }
            t = input.LA(1);
            s = target; // flip; current DFA target becomes new src/from state
        }
        return this.failOrAccept(this.prevAccept, input, s.configs, t);
    };
    /**
     * Get an existing target state for an edge in the DFA. If the target state
     * for the edge has not yet been computed or is otherwise not available,
     * this method returns `undefined`.
     *
     * @param s The current DFA state
     * @param t The next input symbol
     * @returns The existing target DFA state for the given input symbol
     * `t`, or `undefined` if the target state for this edge is not
     * already cached
     */
    LexerATNSimulator.prototype.getExistingTargetState = function (s, t) {
        var target = s.getTarget(t);
        if (LexerATNSimulator.debug && target != null) {
            console.log("reuse state " + s.stateNumber +
                " edge to " + target.stateNumber);
        }
        return target;
    };
    /**
     * Compute a target state for an edge in the DFA, and attempt to add the
     * computed state and corresponding edge to the DFA.
     *
     * @param input The input stream
     * @param s The current DFA state
     * @param t The next input symbol
     *
     * @returns The computed target DFA state for the given input symbol
     * `t`. If `t` does not lead to a valid DFA state, this method
     * returns {@link #ERROR}.
     */
    LexerATNSimulator.prototype.computeTargetState = function (input, s, t) {
        var reach = new OrderedATNConfigSet_1.OrderedATNConfigSet();
        // if we don't find an existing DFA state
        // Fill reach starting from closure, following t transitions
        this.getReachableConfigSet(input, s.configs, reach, t);
        if (reach.isEmpty) { // we got nowhere on t from s
            if (!reach.hasSemanticContext) {
                // we got nowhere on t, don't throw out this knowledge; it'd
                // cause a failover from DFA later.
                this.addDFAEdge(s, t, ATNSimulator_1.ATNSimulator.ERROR);
            }
            // stop when we can't match any more char
            return ATNSimulator_1.ATNSimulator.ERROR;
        }
        // Add an edge from s to target DFA found/created for reach
        return this.addDFAEdge(s, t, reach);
    };
    LexerATNSimulator.prototype.failOrAccept = function (prevAccept, input, reach, t) {
        if (prevAccept.dfaState != null) {
            var lexerActionExecutor = prevAccept.dfaState.lexerActionExecutor;
            this.accept(input, lexerActionExecutor, this.startIndex, prevAccept.index, prevAccept.line, prevAccept.charPos);
            return prevAccept.dfaState.prediction;
        }
        else {
            // if no accept and EOF is first char, return EOF
            if (t === IntStream_1.IntStream.EOF && input.index === this.startIndex) {
                return Token_1.Token.EOF;
            }
            throw new LexerNoViableAltException_1.LexerNoViableAltException(this.recog, input, this.startIndex, reach);
        }
    };
    /** Given a starting configuration set, figure out all ATN configurations
     *  we can reach upon input `t`. Parameter `reach` is a return
     *  parameter.
     */
    LexerATNSimulator.prototype.getReachableConfigSet = function (input, closure, reach, t) {
        // this is used to skip processing for configs which have a lower priority
        // than a config that already reached an accept state for the same rule
        var skipAlt = ATN_1.ATN.INVALID_ALT_NUMBER;
        for (var _i = 0, closure_1 = closure; _i < closure_1.length; _i++) {
            var c = closure_1[_i];
            var currentAltReachedAcceptState = c.alt === skipAlt;
            if (currentAltReachedAcceptState && c.hasPassedThroughNonGreedyDecision) {
                continue;
            }
            if (LexerATNSimulator.debug) {
                console.log("testing ".concat(this.getTokenName(t), " at ").concat(c.toString(this.recog, true)));
            }
            var n = c.state.numberOfOptimizedTransitions;
            for (var ti = 0; ti < n; ti++) { // for each optimized transition
                var trans = c.state.getOptimizedTransition(ti);
                var target = this.getReachableTarget(trans, t);
                if (target != null) {
                    var lexerActionExecutor = c.lexerActionExecutor;
                    var config = void 0;
                    if (lexerActionExecutor != null) {
                        lexerActionExecutor = lexerActionExecutor.fixOffsetBeforeMatch(input.index - this.startIndex);
                        config = c.transform(target, true, lexerActionExecutor);
                    }
                    else {
                        assert(c.lexerActionExecutor == null);
                        config = c.transform(target, true);
                    }
                    var treatEofAsEpsilon = t === IntStream_1.IntStream.EOF;
                    if (this.closure(input, config, reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
                        // any remaining configs for this alt have a lower priority than
                        // the one that just reached an accept state.
                        skipAlt = c.alt;
                        break;
                    }
                }
            }
        }
    };
    LexerATNSimulator.prototype.accept = function (input, lexerActionExecutor, startIndex, index, line, charPos) {
        if (LexerATNSimulator.debug) {
            console.log("ACTION ".concat(lexerActionExecutor));
        }
        // seek to after last char in token
        input.seek(index);
        this._line = line;
        this._charPositionInLine = charPos;
        if (lexerActionExecutor != null && this.recog != null) {
            lexerActionExecutor.execute(this.recog, input, startIndex);
        }
    };
    LexerATNSimulator.prototype.getReachableTarget = function (trans, t) {
        if (trans.matches(t, Lexer_1.Lexer.MIN_CHAR_VALUE, Lexer_1.Lexer.MAX_CHAR_VALUE)) {
            return trans.target;
        }
        return undefined;
    };
    LexerATNSimulator.prototype.computeStartState = function (input, p) {
        var initialContext = PredictionContext_1.PredictionContext.EMPTY_FULL;
        var configs = new OrderedATNConfigSet_1.OrderedATNConfigSet();
        for (var i = 0; i < p.numberOfTransitions; i++) {
            var target = p.transition(i).target;
            var c = ATNConfig_1.ATNConfig.create(target, i + 1, initialContext);
            this.closure(input, c, configs, false, false, false);
        }
        return configs;
    };
    /**
     * Since the alternatives within any lexer decision are ordered by
     * preference, this method stops pursuing the closure as soon as an accept
     * state is reached. After the first accept state is reached by depth-first
     * search from `config`, all other (potentially reachable) states for
     * this rule would have a lower priority.
     *
     * @returns `true` if an accept state is reached, otherwise
     * `false`.
     */
    LexerATNSimulator.prototype.closure = function (input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
        if (LexerATNSimulator.debug) {
            console.log("closure(" + config.toString(this.recog, true) + ")");
        }
        if (config.state instanceof RuleStopState_1.RuleStopState) {
            if (LexerATNSimulator.debug) {
                if (this.recog != null) {
                    console.log("closure at ".concat(this.recog.ruleNames[config.state.ruleIndex], " rule stop ").concat(config));
                }
                else {
                    console.log("closure at rule stop ".concat(config));
                }
            }
            var context = config.context;
            if (context.isEmpty) {
                configs.add(config);
                return true;
            }
            else if (context.hasEmpty) {
                configs.add(config.transform(config.state, true, PredictionContext_1.PredictionContext.EMPTY_FULL));
                currentAltReachedAcceptState = true;
            }
            for (var i = 0; i < context.size; i++) {
                var returnStateNumber = context.getReturnState(i);
                if (returnStateNumber === PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY) {
                    continue;
                }
                var newContext = context.getParent(i); // "pop" return state
                var returnState = this.atn.states[returnStateNumber];
                var c = config.transform(returnState, false, newContext);
                currentAltReachedAcceptState = this.closure(input, c, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon);
            }
            return currentAltReachedAcceptState;
        }
        // optimization
        if (!config.state.onlyHasEpsilonTransitions) {
            if (!currentAltReachedAcceptState || !config.hasPassedThroughNonGreedyDecision) {
                configs.add(config);
            }
        }
        var p = config.state;
        for (var i = 0; i < p.numberOfOptimizedTransitions; i++) {
            var t = p.getOptimizedTransition(i);
            var c = this.getEpsilonTarget(input, config, t, configs, speculative, treatEofAsEpsilon);
            if (c != null) {
                currentAltReachedAcceptState = this.closure(input, c, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon);
            }
        }
        return currentAltReachedAcceptState;
    };
    // side-effect: can alter configs.hasSemanticContext
    LexerATNSimulator.prototype.getEpsilonTarget = function (input, config, t, configs, speculative, treatEofAsEpsilon) {
        var c;
        switch (t.serializationType) {
            case 3 /* TransitionType.RULE */:
                var ruleTransition = t;
                if (this.optimize_tail_calls && ruleTransition.optimizedTailCall && !config.context.hasEmpty) {
                    c = config.transform(t.target, true);
                }
                else {
                    var newContext = config.context.getChild(ruleTransition.followState.stateNumber);
                    c = config.transform(t.target, true, newContext);
                }
                break;
            case 10 /* TransitionType.PRECEDENCE */:
                throw new Error("Precedence predicates are not supported in lexers.");
            case 4 /* TransitionType.PREDICATE */:
                /*  Track traversing semantic predicates. If we traverse,
                    we cannot add a DFA state for this "reach" computation
                    because the DFA would not test the predicate again in the
                    future. Rather than creating collections of semantic predicates
                    like v3 and testing them on prediction, v4 will test them on the
                    fly all the time using the ATN not the DFA. This is slower but
                    semantically it's not used that often. One of the key elements to
                    this predicate mechanism is not adding DFA states that see
                    predicates immediately afterwards in the ATN. For example,
    
                    a : ID {p1}? | ID {p2}? ;
    
                    should create the start state for rule 'a' (to save start state
                    competition), but should not create target of ID state. The
                    collection of ATN states the following ID references includes
                    states reached by traversing predicates. Since this is when we
                    test them, we cannot cash the DFA state target of ID.
                */
                var pt = t;
                if (LexerATNSimulator.debug) {
                    console.log("EVAL rule " + pt.ruleIndex + ":" + pt.predIndex);
                }
                configs.hasSemanticContext = true;
                if (this.evaluatePredicate(input, pt.ruleIndex, pt.predIndex, speculative)) {
                    c = config.transform(t.target, true);
                }
                else {
                    c = undefined;
                }
                break;
            case 6 /* TransitionType.ACTION */:
                if (config.context.hasEmpty) {
                    // execute actions anywhere in the start rule for a token.
                    //
                    // TODO: if the entry rule is invoked recursively, some
                    // actions may be executed during the recursive call. The
                    // problem can appear when hasEmpty is true but
                    // isEmpty is false. In this case, the config needs to be
                    // split into two contexts - one with just the empty path
                    // and another with everything but the empty path.
                    // Unfortunately, the current algorithm does not allow
                    // getEpsilonTarget to return two configurations, so
                    // additional modifications are needed before we can support
                    // the split operation.
                    var lexerActionExecutor = LexerActionExecutor_1.LexerActionExecutor.append(config.lexerActionExecutor, this.atn.lexerActions[t.actionIndex]);
                    c = config.transform(t.target, true, lexerActionExecutor);
                    break;
                }
                else {
                    // ignore actions in referenced rules
                    c = config.transform(t.target, true);
                    break;
                }
            case 1 /* TransitionType.EPSILON */:
                c = config.transform(t.target, true);
                break;
            case 5 /* TransitionType.ATOM */:
            case 2 /* TransitionType.RANGE */:
            case 7 /* TransitionType.SET */:
                if (treatEofAsEpsilon) {
                    if (t.matches(IntStream_1.IntStream.EOF, Lexer_1.Lexer.MIN_CHAR_VALUE, Lexer_1.Lexer.MAX_CHAR_VALUE)) {
                        c = config.transform(t.target, false);
                        break;
                    }
                }
                c = undefined;
                break;
            default:
                c = undefined;
                break;
        }
        return c;
    };
    /**
     * Evaluate a predicate specified in the lexer.
     *
     * If `speculative` is `true`, this method was called before
     * {@link #consume} for the matched character. This method should call
     * {@link #consume} before evaluating the predicate to ensure position
     * sensitive values, including {@link Lexer#getText}, {@link Lexer#getLine},
     * and {@link Lexer#getCharPositionInLine}, properly reflect the current
     * lexer state. This method should restore `input` and the simulator
     * to the original state before returning (i.e. undo the actions made by the
     * call to {@link #consume}.
     *
     * @param input The input stream.
     * @param ruleIndex The rule containing the predicate.
     * @param predIndex The index of the predicate within the rule.
     * @param speculative `true` if the current index in `input` is
     * one character before the predicate's location.
     *
     * @returns `true` if the specified predicate evaluates to
     * `true`.
     */
    LexerATNSimulator.prototype.evaluatePredicate = function (input, ruleIndex, predIndex, speculative) {
        // assume true if no recognizer was provided
        if (this.recog == null) {
            return true;
        }
        if (!speculative) {
            return this.recog.sempred(undefined, ruleIndex, predIndex);
        }
        var savedCharPositionInLine = this._charPositionInLine;
        var savedLine = this._line;
        var index = input.index;
        var marker = input.mark();
        try {
            this.consume(input);
            return this.recog.sempred(undefined, ruleIndex, predIndex);
        }
        finally {
            this._charPositionInLine = savedCharPositionInLine;
            this._line = savedLine;
            input.seek(index);
            input.release(marker);
        }
    };
    LexerATNSimulator.prototype.captureSimState = function (settings, input, dfaState) {
        settings.index = input.index;
        settings.line = this._line;
        settings.charPos = this._charPositionInLine;
        settings.dfaState = dfaState;
    };
    LexerATNSimulator.prototype.addDFAEdge = function (p, t, q) {
        if (q instanceof ATNConfigSet_1.ATNConfigSet) {
            /* leading to this call, ATNConfigSet.hasSemanticContext is used as a
            * marker indicating dynamic predicate evaluation makes this edge
            * dependent on the specific input sequence, so the static edge in the
            * DFA should be omitted. The target DFAState is still created since
            * execATN has the ability to resynchronize with the DFA state cache
            * following the predicate evaluation step.
            *
            * TJP notes: next time through the DFA, we see a pred again and eval.
            * If that gets us to a previously created (but dangling) DFA
            * state, we can continue in pure DFA mode from there.
            */
            var suppressEdge = q.hasSemanticContext;
            if (suppressEdge) {
                q.hasSemanticContext = false;
            }
            // @NotNull
            var to = this.addDFAState(q);
            if (suppressEdge) {
                return to;
            }
            this.addDFAEdge(p, t, to);
            return to;
        }
        else {
            if (LexerATNSimulator.debug) {
                console.log("EDGE " + p + " -> " + q + " upon " + String.fromCharCode(t));
            }
            if (p != null) {
                p.setTarget(t, q);
            }
        }
    };
    /** Add a new DFA state if there isn't one with this set of
     * 	configurations already. This method also detects the first
     * 	configuration containing an ATN rule stop state. Later, when
     * 	traversing the DFA, we will know which rule to accept.
     */
    LexerATNSimulator.prototype.addDFAState = function (configs) {
        /* the lexer evaluates predicates on-the-fly; by this point configs
         * should not contain any configurations with unevaluated predicates.
         */
        assert(!configs.hasSemanticContext);
        var proposed = new DFAState_1.DFAState(configs);
        var existing = this.atn.modeToDFA[this.mode].states.get(proposed);
        if (existing != null) {
            return existing;
        }
        configs.optimizeConfigs(this);
        var newState = new DFAState_1.DFAState(configs.clone(true));
        var firstConfigWithRuleStopState;
        for (var _i = 0, configs_1 = configs; _i < configs_1.length; _i++) {
            var c = configs_1[_i];
            if (c.state instanceof RuleStopState_1.RuleStopState) {
                firstConfigWithRuleStopState = c;
                break;
            }
        }
        if (firstConfigWithRuleStopState != null) {
            var prediction = this.atn.ruleToTokenType[firstConfigWithRuleStopState.state.ruleIndex];
            var lexerActionExecutor = firstConfigWithRuleStopState.lexerActionExecutor;
            newState.acceptStateInfo = new AcceptStateInfo_1.AcceptStateInfo(prediction, lexerActionExecutor);
        }
        return this.atn.modeToDFA[this.mode].addState(newState);
    };
    LexerATNSimulator.prototype.getDFA = function (mode) {
        return this.atn.modeToDFA[mode];
    };
    /** Get the text matched so far for the current token.
     */
    LexerATNSimulator.prototype.getText = function (input) {
        // index is first lookahead char, don't include.
        return input.getText(Interval_1.Interval.of(this.startIndex, input.index - 1));
    };
    Object.defineProperty(LexerATNSimulator.prototype, "line", {
        get: function () {
            return this._line;
        },
        set: function (line) {
            this._line = line;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexerATNSimulator.prototype, "charPositionInLine", {
        get: function () {
            return this._charPositionInLine;
        },
        set: function (charPositionInLine) {
            this._charPositionInLine = charPositionInLine;
        },
        enumerable: false,
        configurable: true
    });
    LexerATNSimulator.prototype.consume = function (input) {
        var curChar = input.LA(1);
        if (curChar === "\n".charCodeAt(0)) {
            this._line++;
            this._charPositionInLine = 0;
        }
        else {
            this._charPositionInLine++;
        }
        input.consume();
    };
    LexerATNSimulator.prototype.getTokenName = function (t) {
        if (t === -1) {
            return "EOF";
        }
        //if ( atn.g!=null ) return atn.g.getTokenDisplayName(t);
        return "'" + String.fromCharCode(t) + "'";
    };
    LexerATNSimulator.match_calls = 0;
    __decorate([
        Decorators_1.NotNull
    ], LexerATNSimulator.prototype, "prevAccept");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "copyState");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "match");
    __decorate([
        Decorators_1.Override
    ], LexerATNSimulator.prototype, "reset");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "matchATN");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "execATN");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "getExistingTargetState");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "computeTargetState");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull),
        __param(2, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "getReachableConfigSet");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "accept");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "computeStartState");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull),
        __param(2, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "closure");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull),
        __param(2, Decorators_1.NotNull),
        __param(3, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "getEpsilonTarget");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "evaluatePredicate");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull),
        __param(2, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "captureSimState");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "addDFAState");
    __decorate([
        Decorators_1.NotNull
    ], LexerATNSimulator.prototype, "getDFA");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "getText");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], LexerATNSimulator.prototype, "consume");
    __decorate([
        Decorators_1.NotNull
    ], LexerATNSimulator.prototype, "getTokenName");
    LexerATNSimulator = __decorate([
        __param(0, Decorators_1.NotNull)
    ], LexerATNSimulator);
    return LexerATNSimulator;
}(ATNSimulator_1.ATNSimulator));
exports.LexerATNSimulator = LexerATNSimulator;
(function (LexerATNSimulator) {
    LexerATNSimulator.debug = false;
    LexerATNSimulator.dfa_debug = false;
    /** When we hit an accept state in either the DFA or the ATN, we
     *  have to notify the character stream to start buffering characters
     *  via {@link IntStream#mark} and record the current state. The current sim state
     *  includes the current index into the input, the current line,
     *  and current character position in that line. Note that the Lexer is
     *  tracking the starting line and characterization of the token. These
     *  variables track the "state" of the simulator when it hits an accept state.
     *
     *  We track these variables separately for the DFA and ATN simulation
     *  because the DFA simulation often has to fail over to the ATN
     *  simulation. If the ATN simulation fails, we need the DFA to fall
     *  back to its previously accepted state, if any. If the ATN succeeds,
     *  then the ATN does the accept and the DFA simulator that invoked it
     *  can simply return the predicted token type.
     */
    var SimState = /** @class */ (function () {
        function SimState() {
            this.index = -1;
            this.line = 0;
            this.charPos = -1;
        }
        SimState.prototype.reset = function () {
            this.index = -1;
            this.line = 0;
            this.charPos = -1;
            this.dfaState = undefined;
        };
        return SimState;
    }());
    LexerATNSimulator.SimState = SimState;
})(LexerATNSimulator = exports.LexerATNSimulator || (exports.LexerATNSimulator = {}));
exports.LexerATNSimulator = LexerATNSimulator;
