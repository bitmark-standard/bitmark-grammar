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
exports.__esModule = true;
exports.RecognitionException = void 0;
/** The root of the ANTLR exception hierarchy. In general, ANTLR tracks just
 *  3 kinds of errors: prediction errors, failed predicate errors, and
 *  mismatched input errors. In each case, the parser knows where it is
 *  in the input, where it is in the ATN, the rule invocation stack,
 *  and what kind of problem occurred.
 */
var RecognitionException = /** @class */ (function (_super) {
    __extends(RecognitionException, _super);
    function RecognitionException(recognizer, input, ctx, message) {
        var _this = _super.call(this, message) || this;
        _this._offendingState = -1;
        _this._recognizer = recognizer;
        _this.input = input;
        _this.ctx = ctx;
        if (recognizer) {
            _this._offendingState = recognizer.state;
        }
        return _this;
    }
    Object.defineProperty(RecognitionException.prototype, "offendingState", {
        /**
         * Get the ATN state number the parser was in at the time the error
         * occurred. For {@link NoViableAltException} and
         * {@link LexerNoViableAltException} exceptions, this is the
         * {@link DecisionState} number. For others, it is the state whose outgoing
         * edge we couldn't match.
         *
         * If the state number is not known, this method returns -1.
         */
        get: function () {
            return this._offendingState;
        },
        enumerable: false,
        configurable: true
    });
    RecognitionException.prototype.setOffendingState = function (offendingState) {
        this._offendingState = offendingState;
    };
    Object.defineProperty(RecognitionException.prototype, "expectedTokens", {
        /**
         * Gets the set of input symbols which could potentially follow the
         * previously matched symbol at the time this exception was thrown.
         *
         * If the set of expected tokens is not known and could not be computed,
         * this method returns `undefined`.
         *
         * @returns The set of token types that could potentially follow the current
         * state in the ATN, or `undefined` if the information is not available.
         */
        get: function () {
            if (this._recognizer) {
                return this._recognizer.atn.getExpectedTokens(this._offendingState, this.ctx);
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecognitionException.prototype, "context", {
        /**
         * Gets the {@link RuleContext} at the time this exception was thrown.
         *
         * If the context is not available, this method returns `undefined`.
         *
         * @returns The {@link RuleContext} at the time this exception was thrown.
         * If the context is not available, this method returns `undefined`.
         */
        get: function () {
            return this.ctx;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecognitionException.prototype, "inputStream", {
        /**
         * Gets the input stream which is the symbol source for the recognizer where
         * this exception was thrown.
         *
         * If the input stream is not available, this method returns `undefined`.
         *
         * @returns The input stream which is the symbol source for the recognizer
         * where this exception was thrown, or `undefined` if the stream is not
         * available.
         */
        get: function () {
            return this.input;
        },
        enumerable: false,
        configurable: true
    });
    RecognitionException.prototype.getOffendingToken = function (recognizer) {
        if (recognizer && recognizer !== this._recognizer) {
            return undefined;
        }
        return this.offendingToken;
    };
    RecognitionException.prototype.setOffendingToken = function (recognizer, offendingToken) {
        if (recognizer === this._recognizer) {
            this.offendingToken = offendingToken;
        }
    };
    Object.defineProperty(RecognitionException.prototype, "recognizer", {
        /**
         * Gets the {@link Recognizer} where this exception occurred.
         *
         * If the recognizer is not available, this method returns `undefined`.
         *
         * @returns The recognizer where this exception occurred, or `undefined` if
         * the recognizer is not available.
         */
        get: function () {
            return this._recognizer;
        },
        enumerable: false,
        configurable: true
    });
    return RecognitionException;
}(Error));
exports.RecognitionException = RecognitionException;
