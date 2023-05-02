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
exports.DefaultErrorStrategy = void 0;
var ATNState_1 = require("./atn/ATNState");
var ATNStateType_1 = require("./atn/ATNStateType");
var FailedPredicateException_1 = require("./FailedPredicateException");
var InputMismatchException_1 = require("./InputMismatchException");
var IntervalSet_1 = require("./misc/IntervalSet");
var NoViableAltException_1 = require("./NoViableAltException");
var PredictionContext_1 = require("./atn/PredictionContext");
var Token_1 = require("./Token");
var Decorators_1 = require("./Decorators");
/**
 * This is the default implementation of {@link ANTLRErrorStrategy} used for
 * error reporting and recovery in ANTLR parsers.
 */
var DefaultErrorStrategy = /** @class */ (function () {
    function DefaultErrorStrategy() {
        /**
         * Indicates whether the error strategy is currently "recovering from an
         * error". This is used to suppress reporting multiple error messages while
         * attempting to recover from a detected syntax error.
         *
         * @see #inErrorRecoveryMode
         */
        this.errorRecoveryMode = false;
        /** The index into the input stream where the last error occurred.
         * 	This is used to prevent infinite loops where an error is found
         *  but no token is consumed during recovery...another error is found,
         *  ad nauseum.  This is a failsafe mechanism to guarantee that at least
         *  one token/tree node is consumed for two errors.
         */
        this.lastErrorIndex = -1;
        /**
         * @see #nextTokensContext
         */
        this.nextTokensState = ATNState_1.ATNState.INVALID_STATE_NUMBER;
    }
    /**
     * {@inheritDoc}
     *
     * The default implementation simply calls {@link #endErrorCondition} to
     * ensure that the handler is not in error recovery mode.
     */
    DefaultErrorStrategy.prototype.reset = function (recognizer) {
        this.endErrorCondition(recognizer);
    };
    /**
     * This method is called to enter error recovery mode when a recognition
     * exception is reported.
     *
     * @param recognizer the parser instance
     */
    DefaultErrorStrategy.prototype.beginErrorCondition = function (recognizer) {
        this.errorRecoveryMode = true;
    };
    /**
     * {@inheritDoc}
     */
    DefaultErrorStrategy.prototype.inErrorRecoveryMode = function (recognizer) {
        return this.errorRecoveryMode;
    };
    /**
     * This method is called to leave error recovery mode after recovering from
     * a recognition exception.
     *
     * @param recognizer
     */
    DefaultErrorStrategy.prototype.endErrorCondition = function (recognizer) {
        this.errorRecoveryMode = false;
        this.lastErrorStates = undefined;
        this.lastErrorIndex = -1;
    };
    /**
     * {@inheritDoc}
     *
     * The default implementation simply calls {@link #endErrorCondition}.
     */
    DefaultErrorStrategy.prototype.reportMatch = function (recognizer) {
        this.endErrorCondition(recognizer);
    };
    /**
     * {@inheritDoc}
     *
     * The default implementation returns immediately if the handler is already
     * in error recovery mode. Otherwise, it calls {@link #beginErrorCondition}
     * and dispatches the reporting task based on the runtime type of `e`
     * according to the following table.
     *
     * * {@link NoViableAltException}: Dispatches the call to
     *   {@link #reportNoViableAlternative}
     * * {@link InputMismatchException}: Dispatches the call to
     *   {@link #reportInputMismatch}
     * * {@link FailedPredicateException}: Dispatches the call to
     *   {@link #reportFailedPredicate}
     * * All other types: calls {@link Parser#notifyErrorListeners} to report
     *   the exception
     */
    DefaultErrorStrategy.prototype.reportError = function (recognizer, e) {
        // if we've already reported an error and have not matched a token
        // yet successfully, don't report any errors.
        if (this.inErrorRecoveryMode(recognizer)) {
            //			System.err.print("[SPURIOUS] ");
            return; // don't report spurious errors
        }
        this.beginErrorCondition(recognizer);
        if (e instanceof NoViableAltException_1.NoViableAltException) {
            this.reportNoViableAlternative(recognizer, e);
        }
        else if (e instanceof InputMismatchException_1.InputMismatchException) {
            this.reportInputMismatch(recognizer, e);
        }
        else if (e instanceof FailedPredicateException_1.FailedPredicateException) {
            this.reportFailedPredicate(recognizer, e);
        }
        else {
            console.error("unknown recognition error type: ".concat(e));
            this.notifyErrorListeners(recognizer, e.toString(), e);
        }
    };
    DefaultErrorStrategy.prototype.notifyErrorListeners = function (recognizer, message, e) {
        var offendingToken = e.getOffendingToken(recognizer);
        if (offendingToken === undefined) {
            // Pass null to notifyErrorListeners so it in turn calls the error listeners with undefined as the offending
            // token. If we passed undefined, it would instead call the listeners with currentToken from the parser.
            offendingToken = null;
        }
        recognizer.notifyErrorListeners(message, offendingToken, e);
    };
    /**
     * {@inheritDoc}
     *
     * The default implementation resynchronizes the parser by consuming tokens
     * until we find one in the resynchronization set--loosely the set of tokens
     * that can follow the current rule.
     */
    DefaultErrorStrategy.prototype.recover = function (recognizer, e) {
        //		System.out.println("recover in "+recognizer.getRuleInvocationStack()+
        //						   " index="+recognizer.inputStream.index+
        //						   ", lastErrorIndex="+
        //						   lastErrorIndex+
        //						   ", states="+lastErrorStates);
        if (this.lastErrorIndex === recognizer.inputStream.index &&
            this.lastErrorStates &&
            this.lastErrorStates.contains(recognizer.state)) {
            // uh oh, another error at same token index and previously-visited
            // state in ATN; must be a case where LT(1) is in the recovery
            // token set so nothing got consumed. Consume a single token
            // at least to prevent an infinite loop; this is a failsafe.
            //			System.err.println("seen error condition before index="+
            //							   lastErrorIndex+", states="+lastErrorStates);
            //			System.err.println("FAILSAFE consumes "+recognizer.getTokenNames()[recognizer.inputStream.LA(1)]);
            recognizer.consume();
        }
        this.lastErrorIndex = recognizer.inputStream.index;
        if (!this.lastErrorStates) {
            this.lastErrorStates = new IntervalSet_1.IntervalSet();
        }
        this.lastErrorStates.add(recognizer.state);
        var followSet = this.getErrorRecoverySet(recognizer);
        this.consumeUntil(recognizer, followSet);
    };
    /**
     * The default implementation of {@link ANTLRErrorStrategy#sync} makes sure
     * that the current lookahead symbol is consistent with what were expecting
     * at this point in the ATN. You can call this anytime but ANTLR only
     * generates code to check before subrules/loops and each iteration.
     *
     * Implements Jim Idle's magic sync mechanism in closures and optional
     * subrules. E.g.,
     *
     * ```antlr
     * a : sync ( stuff sync )* ;
     * sync : {consume to what can follow sync} ;
     * ```
     *
     * At the start of a sub rule upon error, {@link #sync} performs single
     * token deletion, if possible. If it can't do that, it bails on the current
     * rule and uses the default error recovery, which consumes until the
     * resynchronization set of the current rule.
     *
     * If the sub rule is optional (`(...)?`, `(...)*`, or block
     * with an empty alternative), then the expected set includes what follows
     * the subrule.
     *
     * During loop iteration, it consumes until it sees a token that can start a
     * sub rule or what follows loop. Yes, that is pretty aggressive. We opt to
     * stay in the loop as long as possible.
     *
     * **ORIGINS**
     *
     * Previous versions of ANTLR did a poor job of their recovery within loops.
     * A single mismatch token or missing token would force the parser to bail
     * out of the entire rules surrounding the loop. So, for rule
     *
     * ```antlr
     * classDef : 'class' ID '{' member* '}'
     * ```
     *
     * input with an extra token between members would force the parser to
     * consume until it found the next class definition rather than the next
     * member definition of the current class.
     *
     * This functionality cost a little bit of effort because the parser has to
     * compare token set at the start of the loop and at each iteration. If for
     * some reason speed is suffering for you, you can turn off this
     * functionality by simply overriding this method as a blank { }.
     */
    DefaultErrorStrategy.prototype.sync = function (recognizer) {
        var s = recognizer.interpreter.atn.states[recognizer.state];
        //		System.err.println("sync @ "+s.stateNumber+"="+s.getClass().getSimpleName());
        // If already recovering, don't try to sync
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        var tokens = recognizer.inputStream;
        var la = tokens.LA(1);
        // try cheaper subset first; might get lucky. seems to shave a wee bit off
        var nextTokens = recognizer.atn.nextTokens(s);
        if (nextTokens.contains(la)) {
            // We are sure the token matches
            this.nextTokensContext = undefined;
            this.nextTokensState = ATNState_1.ATNState.INVALID_STATE_NUMBER;
            return;
        }
        if (nextTokens.contains(Token_1.Token.EPSILON)) {
            if (this.nextTokensContext === undefined) {
                // It's possible the next token won't match; information tracked
                // by sync is restricted for performance.
                this.nextTokensContext = recognizer.context;
                this.nextTokensState = recognizer.state;
            }
            return;
        }
        switch (s.stateType) {
            case ATNStateType_1.ATNStateType.BLOCK_START:
            case ATNStateType_1.ATNStateType.STAR_BLOCK_START:
            case ATNStateType_1.ATNStateType.PLUS_BLOCK_START:
            case ATNStateType_1.ATNStateType.STAR_LOOP_ENTRY:
                // report error and recover if possible
                if (this.singleTokenDeletion(recognizer)) {
                    return;
                }
                throw new InputMismatchException_1.InputMismatchException(recognizer);
            case ATNStateType_1.ATNStateType.PLUS_LOOP_BACK:
            case ATNStateType_1.ATNStateType.STAR_LOOP_BACK:
                //			System.err.println("at loop back: "+s.getClass().getSimpleName());
                this.reportUnwantedToken(recognizer);
                var expecting = recognizer.getExpectedTokens();
                var whatFollowsLoopIterationOrRule = expecting.or(this.getErrorRecoverySet(recognizer));
                this.consumeUntil(recognizer, whatFollowsLoopIterationOrRule);
                break;
            default:
                // do nothing if we can't identify the exact kind of ATN state
                break;
        }
    };
    /**
     * This is called by {@link #reportError} when the exception is a
     * {@link NoViableAltException}.
     *
     * @see #reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    DefaultErrorStrategy.prototype.reportNoViableAlternative = function (recognizer, e) {
        var tokens = recognizer.inputStream;
        var input;
        if (tokens) {
            if (e.startToken.type === Token_1.Token.EOF) {
                input = "<EOF>";
            }
            else {
                input = tokens.getTextFromRange(e.startToken, e.getOffendingToken());
            }
        }
        else {
            input = "<unknown input>";
        }
        var msg = "no viable alternative at input " + this.escapeWSAndQuote(input);
        this.notifyErrorListeners(recognizer, msg, e);
    };
    /**
     * This is called by {@link #reportError} when the exception is an
     * {@link InputMismatchException}.
     *
     * @see #reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    DefaultErrorStrategy.prototype.reportInputMismatch = function (recognizer, e) {
        var expected = e.expectedTokens;
        var expectedString = expected ? expected.toStringVocabulary(recognizer.vocabulary) : "";
        var msg = "mismatched input " + this.getTokenErrorDisplay(e.getOffendingToken(recognizer)) +
            " expecting " + expectedString;
        this.notifyErrorListeners(recognizer, msg, e);
    };
    /**
     * This is called by {@link #reportError} when the exception is a
     * {@link FailedPredicateException}.
     *
     * @see #reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    DefaultErrorStrategy.prototype.reportFailedPredicate = function (recognizer, e) {
        var ruleName = recognizer.ruleNames[recognizer.context.ruleIndex];
        var msg = "rule " + ruleName + " " + e.message;
        this.notifyErrorListeners(recognizer, msg, e);
    };
    /**
     * This method is called to report a syntax error which requires the removal
     * of a token from the input stream. At the time this method is called, the
     * erroneous symbol is current `LT(1)` symbol and has not yet been
     * removed from the input stream. When this method returns,
     * `recognizer` is in error recovery mode.
     *
     * This method is called when {@link #singleTokenDeletion} identifies
     * single-token deletion as a viable recovery strategy for a mismatched
     * input error.
     *
     * The default implementation simply returns if the handler is already in
     * error recovery mode. Otherwise, it calls {@link #beginErrorCondition} to
     * enter error recovery mode, followed by calling
     * {@link Parser#notifyErrorListeners}.
     *
     * @param recognizer the parser instance
     */
    DefaultErrorStrategy.prototype.reportUnwantedToken = function (recognizer) {
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        this.beginErrorCondition(recognizer);
        var t = recognizer.currentToken;
        var tokenName = this.getTokenErrorDisplay(t);
        var expecting = this.getExpectedTokens(recognizer);
        var msg = "extraneous input " + tokenName + " expecting " +
            expecting.toStringVocabulary(recognizer.vocabulary);
        recognizer.notifyErrorListeners(msg, t, undefined);
    };
    /**
     * This method is called to report a syntax error which requires the
     * insertion of a missing token into the input stream. At the time this
     * method is called, the missing token has not yet been inserted. When this
     * method returns, `recognizer` is in error recovery mode.
     *
     * This method is called when {@link #singleTokenInsertion} identifies
     * single-token insertion as a viable recovery strategy for a mismatched
     * input error.
     *
     * The default implementation simply returns if the handler is already in
     * error recovery mode. Otherwise, it calls {@link #beginErrorCondition} to
     * enter error recovery mode, followed by calling
     * {@link Parser#notifyErrorListeners}.
     *
     * @param recognizer the parser instance
     */
    DefaultErrorStrategy.prototype.reportMissingToken = function (recognizer) {
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        this.beginErrorCondition(recognizer);
        var t = recognizer.currentToken;
        var expecting = this.getExpectedTokens(recognizer);
        var msg = "missing " + expecting.toStringVocabulary(recognizer.vocabulary) +
            " at " + this.getTokenErrorDisplay(t);
        recognizer.notifyErrorListeners(msg, t, undefined);
    };
    /**
     * {@inheritDoc}
     *
     * The default implementation attempts to recover from the mismatched input
     * by using single token insertion and deletion as described below. If the
     * recovery attempt fails, this method
     * {@link InputMismatchException}.
     *
     * **EXTRA TOKEN** (single token deletion)
     *
     * `LA(1)` is not what we are looking for. If `LA(2)` has the
     * right token, however, then assume `LA(1)` is some extra spurious
     * token and delete it. Then consume and return the next token (which was
     * the `LA(2)` token) as the successful result of the match operation.
     *
     * This recovery strategy is implemented by {@link #singleTokenDeletion}.
     *
     * **MISSING TOKEN** (single token insertion)
     *
     * If current token (at `LA(1)`) is consistent with what could come
     * after the expected `LA(1)` token, then assume the token is missing
     * and use the parser's {@link TokenFactory} to create it on the fly. The
     * "insertion" is performed by returning the created token as the successful
     * result of the match operation.
     *
     * This recovery strategy is implemented by {@link #singleTokenInsertion}.
     *
     * **EXAMPLE**
     *
     * For example, Input `i=(3;` is clearly missing the `')'`. When
     * the parser returns from the nested call to `expr`, it will have
     * call chain:
     *
     * ```
     * stat → expr → atom
     * ```
     *
     * and it will be trying to match the `')'` at this point in the
     * derivation:
     *
     * ```
     * => ID '=' '(' INT ')' ('+' atom)* ';'
     *                    ^
     * ```
     *
     * The attempt to match `')'` will fail when it sees `';'` and
     * call {@link #recoverInline}. To recover, it sees that `LA(1)==';'`
     * is in the set of tokens that can follow the `')'` token reference
     * in rule `atom`. It can assume that you forgot the `')'`.
     */
    DefaultErrorStrategy.prototype.recoverInline = function (recognizer) {
        // SINGLE TOKEN DELETION
        var matchedSymbol = this.singleTokenDeletion(recognizer);
        if (matchedSymbol) {
            // we have deleted the extra token.
            // now, move past ttype token as if all were ok
            recognizer.consume();
            return matchedSymbol;
        }
        // SINGLE TOKEN INSERTION
        if (this.singleTokenInsertion(recognizer)) {
            return this.getMissingSymbol(recognizer);
        }
        // even that didn't work; must throw the exception
        if (this.nextTokensContext === undefined) {
            throw new InputMismatchException_1.InputMismatchException(recognizer);
        }
        else {
            throw new InputMismatchException_1.InputMismatchException(recognizer, this.nextTokensState, this.nextTokensContext);
        }
    };
    /**
     * This method implements the single-token insertion inline error recovery
     * strategy. It is called by {@link #recoverInline} if the single-token
     * deletion strategy fails to recover from the mismatched input. If this
     * method returns `true`, `recognizer` will be in error recovery
     * mode.
     *
     * This method determines whether or not single-token insertion is viable by
     * checking if the `LA(1)` input symbol could be successfully matched
     * if it were instead the `LA(2)` symbol. If this method returns
     * `true`, the caller is responsible for creating and inserting a
     * token with the correct type to produce this behavior.
     *
     * @param recognizer the parser instance
     * @returns `true` if single-token insertion is a viable recovery
     * strategy for the current mismatched input, otherwise `false`
     */
    DefaultErrorStrategy.prototype.singleTokenInsertion = function (recognizer) {
        var currentSymbolType = recognizer.inputStream.LA(1);
        // if current token is consistent with what could come after current
        // ATN state, then we know we're missing a token; error recovery
        // is free to conjure up and insert the missing token
        var currentState = recognizer.interpreter.atn.states[recognizer.state];
        var next = currentState.transition(0).target;
        var atn = recognizer.interpreter.atn;
        var expectingAtLL2 = atn.nextTokens(next, PredictionContext_1.PredictionContext.fromRuleContext(atn, recognizer.context));
        //		console.warn("LT(2) set="+expectingAtLL2.toString(recognizer.getTokenNames()));
        if (expectingAtLL2.contains(currentSymbolType)) {
            this.reportMissingToken(recognizer);
            return true;
        }
        return false;
    };
    /**
     * This method implements the single-token deletion inline error recovery
     * strategy. It is called by {@link #recoverInline} to attempt to recover
     * from mismatched input. If this method returns `undefined`, the parser and error
     * handler state will not have changed. If this method returns non-`undefined`,
     * `recognizer` will *not* be in error recovery mode since the
     * returned token was a successful match.
     *
     * If the single-token deletion is successful, this method calls
     * {@link #reportUnwantedToken} to report the error, followed by
     * {@link Parser#consume} to actually "delete" the extraneous token. Then,
     * before returning {@link #reportMatch} is called to signal a successful
     * match.
     *
     * @param recognizer the parser instance
     * @returns the successfully matched {@link Token} instance if single-token
     * deletion successfully recovers from the mismatched input, otherwise
     * `undefined`
     */
    DefaultErrorStrategy.prototype.singleTokenDeletion = function (recognizer) {
        var nextTokenType = recognizer.inputStream.LA(2);
        var expecting = this.getExpectedTokens(recognizer);
        if (expecting.contains(nextTokenType)) {
            this.reportUnwantedToken(recognizer);
            /*
            System.err.println("recoverFromMismatchedToken deleting "+
                               ((TokenStream)recognizer.inputStream).LT(1)+
                               " since "+((TokenStream)recognizer.inputStream).LT(2)+
                               " is what we want");
            */
            recognizer.consume(); // simply delete extra token
            // we want to return the token we're actually matching
            var matchedSymbol = recognizer.currentToken;
            this.reportMatch(recognizer); // we know current token is correct
            return matchedSymbol;
        }
        return undefined;
    };
    /** Conjure up a missing token during error recovery.
     *
     *  The recognizer attempts to recover from single missing
     *  symbols. But, actions might refer to that missing symbol.
     *  For example, x=ID {f($x);}. The action clearly assumes
     *  that there has been an identifier matched previously and that
     *  $x points at that token. If that token is missing, but
     *  the next token in the stream is what we want we assume that
     *  this token is missing and we keep going. Because we
     *  have to return some token to replace the missing token,
     *  we have to conjure one up. This method gives the user control
     *  over the tokens returned for missing tokens. Mostly,
     *  you will want to create something special for identifier
     *  tokens. For literals such as '{' and ',', the default
     *  action in the parser or tree parser works. It simply creates
     *  a CommonToken of the appropriate type. The text will be the token.
     *  If you change what tokens must be created by the lexer,
     *  override this method to create the appropriate tokens.
     */
    DefaultErrorStrategy.prototype.getMissingSymbol = function (recognizer) {
        var currentSymbol = recognizer.currentToken;
        var expecting = this.getExpectedTokens(recognizer);
        var expectedTokenType = Token_1.Token.INVALID_TYPE;
        if (!expecting.isNil) {
            // get any element
            expectedTokenType = expecting.minElement;
        }
        var tokenText;
        if (expectedTokenType === Token_1.Token.EOF) {
            tokenText = "<missing EOF>";
        }
        else {
            tokenText = "<missing " + recognizer.vocabulary.getDisplayName(expectedTokenType) + ">";
        }
        var current = currentSymbol;
        var lookback = recognizer.inputStream.tryLT(-1);
        if (current.type === Token_1.Token.EOF && lookback != null) {
            current = lookback;
        }
        return this.constructToken(recognizer.inputStream.tokenSource, expectedTokenType, tokenText, current);
    };
    DefaultErrorStrategy.prototype.constructToken = function (tokenSource, expectedTokenType, tokenText, current) {
        var factory = tokenSource.tokenFactory;
        var x = current.tokenSource;
        var stream = x ? x.inputStream : undefined;
        return factory.create({ source: tokenSource, stream: stream }, expectedTokenType, tokenText, Token_1.Token.DEFAULT_CHANNEL, -1, -1, current.line, current.charPositionInLine);
    };
    DefaultErrorStrategy.prototype.getExpectedTokens = function (recognizer) {
        return recognizer.getExpectedTokens();
    };
    /** How should a token be displayed in an error message? The default
     *  is to display just the text, but during development you might
     *  want to have a lot of information spit out.  Override in that case
     *  to use t.toString() (which, for CommonToken, dumps everything about
     *  the token). This is better than forcing you to override a method in
     *  your token objects because you don't have to go modify your lexer
     *  so that it creates a new Java type.
     */
    DefaultErrorStrategy.prototype.getTokenErrorDisplay = function (t) {
        if (!t) {
            return "<no token>";
        }
        var s = this.getSymbolText(t);
        if (!s) {
            if (this.getSymbolType(t) === Token_1.Token.EOF) {
                s = "<EOF>";
            }
            else {
                s = "<".concat(this.getSymbolType(t), ">");
            }
        }
        return this.escapeWSAndQuote(s);
    };
    DefaultErrorStrategy.prototype.getSymbolText = function (symbol) {
        return symbol.text;
    };
    DefaultErrorStrategy.prototype.getSymbolType = function (symbol) {
        return symbol.type;
    };
    DefaultErrorStrategy.prototype.escapeWSAndQuote = function (s) {
        //		if ( s==null ) return s;
        s = s.replace("\n", "\\n");
        s = s.replace("\r", "\\r");
        s = s.replace("\t", "\\t");
        return "'" + s + "'";
    };
    /*  Compute the error recovery set for the current rule.  During
     *  rule invocation, the parser pushes the set of tokens that can
     *  follow that rule reference on the stack; this amounts to
     *  computing FIRST of what follows the rule reference in the
     *  enclosing rule. See LinearApproximator.FIRST().
     *  This local follow set only includes tokens
     *  from within the rule; i.e., the FIRST computation done by
     *  ANTLR stops at the end of a rule.
     *
     *  EXAMPLE
     *
     *  When you find a "no viable alt exception", the input is not
     *  consistent with any of the alternatives for rule r.  The best
     *  thing to do is to consume tokens until you see something that
     *  can legally follow a call to r *or* any rule that called r.
     *  You don't want the exact set of viable next tokens because the
     *  input might just be missing a token--you might consume the
     *  rest of the input looking for one of the missing tokens.
     *
     *  Consider grammar:
     *
     *  a : '[' b ']'
     *    | '(' b ')'
     *    ;
     *  b : c '^' INT ;
     *  c : ID
     *    | INT
     *    ;
     *
     *  At each rule invocation, the set of tokens that could follow
     *  that rule is pushed on a stack.  Here are the various
     *  context-sensitive follow sets:
     *
     *  FOLLOW(b1_in_a) = FIRST(']') = ']'
     *  FOLLOW(b2_in_a) = FIRST(')') = ')'
     *  FOLLOW(c_in_b) = FIRST('^') = '^'
     *
     *  Upon erroneous input "[]", the call chain is
     *
     *  a -> b -> c
     *
     *  and, hence, the follow context stack is:
     *
     *  depth     follow set       start of rule execution
     *    0         <EOF>                    a (from main())
     *    1          ']'                     b
     *    2          '^'                     c
     *
     *  Notice that ')' is not included, because b would have to have
     *  been called from a different context in rule a for ')' to be
     *  included.
     *
     *  For error recovery, we cannot consider FOLLOW(c)
     *  (context-sensitive or otherwise).  We need the combined set of
     *  all context-sensitive FOLLOW sets--the set of all tokens that
     *  could follow any reference in the call chain.  We need to
     *  resync to one of those tokens.  Note that FOLLOW(c)='^' and if
     *  we resync'd to that token, we'd consume until EOF.  We need to
     *  sync to context-sensitive FOLLOWs for a, b, and c: {']','^'}.
     *  In this case, for input "[]", LA(1) is ']' and in the set, so we would
     *  not consume anything. After printing an error, rule c would
     *  return normally.  Rule b would not find the required '^' though.
     *  At this point, it gets a mismatched token error and
     *  exception (since LA(1) is not in the viable following token
     *  set).  The rule exception handler tries to recover, but finds
     *  the same recovery set and doesn't consume anything.  Rule b
     *  exits normally returning to rule a.  Now it finds the ']' (and
     *  with the successful match exits errorRecovery mode).
     *
     *  So, you can see that the parser walks up the call chain looking
     *  for the token that was a member of the recovery set.
     *
     *  Errors are not generated in errorRecovery mode.
     *
     *  ANTLR's error recovery mechanism is based upon original ideas:
     *
     *  "Algorithms + Data Structures = Programs" by Niklaus Wirth
     *
     *  and
     *
     *  "A note on error recovery in recursive descent parsers":
     *  http://portal.acm.org/citation.cfm?id=947902.947905
     *
     *  Later, Josef Grosch had some good ideas:
     *
     *  "Efficient and Comfortable Error Recovery in Recursive Descent
     *  Parsers":
     *  ftp://www.cocolab.com/products/cocktail/doca4.ps/ell.ps.zip
     *
     *  Like Grosch I implement context-sensitive FOLLOW sets that are combined
     *  at run-time upon error to avoid overhead during parsing.
     */
    DefaultErrorStrategy.prototype.getErrorRecoverySet = function (recognizer) {
        var atn = recognizer.interpreter.atn;
        var ctx = recognizer.context;
        var recoverSet = new IntervalSet_1.IntervalSet();
        while (ctx && ctx.invokingState >= 0) {
            // compute what follows who invoked us
            var invokingState = atn.states[ctx.invokingState];
            var rt = invokingState.transition(0);
            var follow = atn.nextTokens(rt.followState);
            recoverSet.addAll(follow);
            ctx = ctx._parent;
        }
        recoverSet.remove(Token_1.Token.EPSILON);
        //		System.out.println("recover set "+recoverSet.toString(recognizer.getTokenNames()));
        return recoverSet;
    };
    /** Consume tokens until one matches the given token set. */
    DefaultErrorStrategy.prototype.consumeUntil = function (recognizer, set) {
        //		System.err.println("consumeUntil("+set.toString(recognizer.getTokenNames())+")");
        var ttype = recognizer.inputStream.LA(1);
        while (ttype !== Token_1.Token.EOF && !set.contains(ttype)) {
            //System.out.println("consume during recover LA(1)="+getTokenNames()[input.LA(1)]);
            //			recognizer.inputStream.consume();
            recognizer.consume();
            ttype = recognizer.inputStream.LA(1);
        }
    };
    __decorate([
        Decorators_1.Override
    ], DefaultErrorStrategy.prototype, "reset");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "beginErrorCondition");
    __decorate([
        Decorators_1.Override
    ], DefaultErrorStrategy.prototype, "inErrorRecoveryMode");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "endErrorCondition");
    __decorate([
        Decorators_1.Override
    ], DefaultErrorStrategy.prototype, "reportMatch");
    __decorate([
        Decorators_1.Override
    ], DefaultErrorStrategy.prototype, "reportError");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "notifyErrorListeners");
    __decorate([
        Decorators_1.Override
    ], DefaultErrorStrategy.prototype, "recover");
    __decorate([
        Decorators_1.Override
    ], DefaultErrorStrategy.prototype, "sync");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "reportNoViableAlternative");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "reportInputMismatch");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "reportFailedPredicate");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "reportUnwantedToken");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "reportMissingToken");
    __decorate([
        Decorators_1.Override
    ], DefaultErrorStrategy.prototype, "recoverInline");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "singleTokenInsertion");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "singleTokenDeletion");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "getMissingSymbol");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "getExpectedTokens");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "getSymbolText");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "getSymbolType");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "escapeWSAndQuote");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "getErrorRecoverySet");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull)
    ], DefaultErrorStrategy.prototype, "consumeUntil");
    return DefaultErrorStrategy;
}());
exports.DefaultErrorStrategy = DefaultErrorStrategy;
