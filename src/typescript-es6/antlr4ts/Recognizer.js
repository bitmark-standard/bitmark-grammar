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
exports.Recognizer = void 0;
var ConsoleErrorListener_1 = require("./ConsoleErrorListener");
var ProxyErrorListener_1 = require("./ProxyErrorListener");
var Decorators_1 = require("./Decorators");
var Token_1 = require("./Token");
var Utils = require("./misc/Utils");
var Recognizer = /** @class */ (function () {
    function Recognizer() {
        this._listeners = [ConsoleErrorListener_1.ConsoleErrorListener.INSTANCE];
        this._stateNumber = -1;
    }
    /**
     * Get a map from token names to token types.
     *
     * Used for XPath and tree pattern compilation.
     */
    Recognizer.prototype.getTokenTypeMap = function () {
        var vocabulary = this.vocabulary;
        var result = Recognizer.tokenTypeMapCache.get(vocabulary);
        if (result == null) {
            var intermediateResult = new Map();
            for (var i = 0; i <= this.atn.maxTokenType; i++) {
                var literalName = vocabulary.getLiteralName(i);
                if (literalName != null) {
                    intermediateResult.set(literalName, i);
                }
                var symbolicName = vocabulary.getSymbolicName(i);
                if (symbolicName != null) {
                    intermediateResult.set(symbolicName, i);
                }
            }
            intermediateResult.set("EOF", Token_1.Token.EOF);
            result = intermediateResult;
            Recognizer.tokenTypeMapCache.set(vocabulary, result);
        }
        return result;
    };
    /**
     * Get a map from rule names to rule indexes.
     *
     * Used for XPath and tree pattern compilation.
     */
    Recognizer.prototype.getRuleIndexMap = function () {
        var ruleNames = this.ruleNames;
        if (ruleNames == null) {
            throw new Error("The current recognizer does not provide a list of rule names.");
        }
        var result = Recognizer.ruleIndexMapCache.get(ruleNames);
        if (result == null) {
            result = Utils.toMap(ruleNames);
            Recognizer.ruleIndexMapCache.set(ruleNames, result);
        }
        return result;
    };
    Recognizer.prototype.getTokenType = function (tokenName) {
        var ttype = this.getTokenTypeMap().get(tokenName);
        if (ttype != null) {
            return ttype;
        }
        return Token_1.Token.INVALID_TYPE;
    };
    Object.defineProperty(Recognizer.prototype, "serializedATN", {
        /**
         * If this recognizer was generated, it will have a serialized ATN
         * representation of the grammar.
         *
         * For interpreters, we don't know their serialized ATN despite having
         * created the interpreter from it.
         */
        get: function () {
            throw new Error("there is no serialized ATN");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recognizer.prototype, "atn", {
        /**
         * Get the {@link ATN} used by the recognizer for prediction.
         *
         * @returns The {@link ATN} used by the recognizer for prediction.
         */
        get: function () {
            return this._interp.atn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recognizer.prototype, "interpreter", {
        /**
         * Get the ATN interpreter used by the recognizer for prediction.
         *
         * @returns The ATN interpreter used by the recognizer for prediction.
         */
        get: function () {
            return this._interp;
        },
        /**
         * Set the ATN interpreter used by the recognizer for prediction.
         *
         * @param interpreter The ATN interpreter used by the recognizer for
         * prediction.
         */
        set: function (interpreter) {
            this._interp = interpreter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recognizer.prototype, "parseInfo", {
        /** If profiling during the parse/lex, this will return DecisionInfo records
         *  for each decision in recognizer in a ParseInfo object.
         *
         * @since 4.3
         */
        get: function () {
            return Promise.resolve(undefined);
        },
        enumerable: false,
        configurable: true
    });
    /** What is the error header, normally line/character position information? */
    Recognizer.prototype.getErrorHeader = function (e) {
        var token = e.getOffendingToken();
        if (!token) {
            return "";
        }
        var line = token.line;
        var charPositionInLine = token.charPositionInLine;
        return "line " + line + ":" + charPositionInLine;
    };
    /**
     * @exception NullPointerException if `listener` is `undefined`.
     */
    Recognizer.prototype.addErrorListener = function (listener) {
        if (!listener) {
            throw new TypeError("listener must not be null");
        }
        this._listeners.push(listener);
    };
    Recognizer.prototype.removeErrorListener = function (listener) {
        var position = this._listeners.indexOf(listener);
        if (position !== -1) {
            this._listeners.splice(position, 1);
        }
    };
    Recognizer.prototype.removeErrorListeners = function () {
        this._listeners.length = 0;
    };
    Recognizer.prototype.getErrorListeners = function () {
        return this._listeners.slice(0);
    };
    Recognizer.prototype.getErrorListenerDispatch = function () {
        return new ProxyErrorListener_1.ProxyErrorListener(this.getErrorListeners());
    };
    // subclass needs to override these if there are sempreds or actions
    // that the ATN interp needs to execute
    Recognizer.prototype.sempred = function (_localctx, ruleIndex, actionIndex) {
        return true;
    };
    Recognizer.prototype.precpred = function (localctx, precedence) {
        return true;
    };
    Recognizer.prototype.action = function (_localctx, ruleIndex, actionIndex) {
        // intentionally empty
    };
    Object.defineProperty(Recognizer.prototype, "state", {
        get: function () {
            return this._stateNumber;
        },
        /** Indicate that the recognizer has changed internal state that is
         *  consistent with the ATN state passed in.  This way we always know
         *  where we are in the ATN as the parser goes along. The rule
         *  context objects form a stack that lets us see the stack of
         *  invoking rules. Combine this and we have complete ATN
         *  configuration information.
         */
        set: function (atnState) {
            //		System.err.println("setState "+atnState);
            this._stateNumber = atnState;
            //		if ( traceATNStates ) _ctx.trace(atnState);
        },
        enumerable: false,
        configurable: true
    });
    Recognizer.EOF = -1;
    Recognizer.tokenTypeMapCache = new WeakMap();
    Recognizer.ruleIndexMapCache = new WeakMap();
    __decorate([
        (0, Decorators_1.SuppressWarnings)("serial"),
        Decorators_1.NotNull
    ], Recognizer.prototype, "_listeners");
    __decorate([
        Decorators_1.NotNull
    ], Recognizer.prototype, "getTokenTypeMap");
    __decorate([
        Decorators_1.NotNull
    ], Recognizer.prototype, "getRuleIndexMap");
    __decorate([
        Decorators_1.NotNull
    ], Recognizer.prototype, "serializedATN");
    __decorate([
        Decorators_1.NotNull
    ], Recognizer.prototype, "atn");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull)
    ], Recognizer.prototype, "interpreter");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull)
    ], Recognizer.prototype, "getErrorHeader");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], Recognizer.prototype, "addErrorListener");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], Recognizer.prototype, "removeErrorListener");
    __decorate([
        Decorators_1.NotNull
    ], Recognizer.prototype, "getErrorListeners");
    return Recognizer;
}());
exports.Recognizer = Recognizer;
