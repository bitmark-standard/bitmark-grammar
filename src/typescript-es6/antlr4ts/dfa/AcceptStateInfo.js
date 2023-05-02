"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
exports.__esModule = true;
exports.AcceptStateInfo = void 0;
/**
 * Stores information about a {@link DFAState} which is an accept state under
 * some condition. Certain settings, such as
 * {@link ParserATNSimulator#getPredictionMode()}, may be used in addition to
 * this information to determine whether or not a particular state is an accept
 * state.
 *
 * @author Sam Harwell
 */
var AcceptStateInfo = /** @class */ (function () {
    function AcceptStateInfo(prediction, lexerActionExecutor) {
        this._prediction = prediction;
        this._lexerActionExecutor = lexerActionExecutor;
    }
    Object.defineProperty(AcceptStateInfo.prototype, "prediction", {
        /**
         * Gets the prediction made by this accept state. Note that this value
         * assumes the predicates, if any, in the {@link DFAState} evaluate to
         * `true`. If predicate evaluation is enabled, the final prediction of
         * the accept state will be determined by the result of predicate
         * evaluation.
         */
        get: function () {
            return this._prediction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcceptStateInfo.prototype, "lexerActionExecutor", {
        /**
         * Gets the {@link LexerActionExecutor} which can be used to execute actions
         * and/or commands after the lexer matches a token.
         */
        get: function () {
            return this._lexerActionExecutor;
        },
        enumerable: false,
        configurable: true
    });
    return AcceptStateInfo;
}());
exports.AcceptStateInfo = AcceptStateInfo;
