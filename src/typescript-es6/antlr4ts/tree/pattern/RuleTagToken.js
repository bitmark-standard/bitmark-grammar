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
exports.RuleTagToken = void 0;
var Decorators_1 = require("../../Decorators");
var Token_1 = require("../../Token");
/**
 * A {@link Token} object representing an entire subtree matched by a parser
 * rule; e.g., `<expr>`. These tokens are created for {@link TagChunk}
 * chunks where the tag corresponds to a parser rule.
 */
var RuleTagToken = /** @class */ (function () {
    /**
     * Constructs a new instance of {@link RuleTagToken} with the specified rule
     * name, bypass token type, and label.
     *
     * @param ruleName The name of the parser rule this rule tag matches.
     * @param bypassTokenType The bypass token type assigned to the parser rule.
     * @param label The label associated with the rule tag, or `undefined` if
     * the rule tag is unlabeled.
     *
     * @exception IllegalArgumentException if `ruleName` is not defined
     * or empty.
     */
    function RuleTagToken(ruleName, bypassTokenType, label) {
        if (ruleName == null || ruleName.length === 0) {
            throw new Error("ruleName cannot be null or empty.");
        }
        this._ruleName = ruleName;
        this.bypassTokenType = bypassTokenType;
        this._label = label;
    }
    Object.defineProperty(RuleTagToken.prototype, "ruleName", {
        /**
         * Gets the name of the rule associated with this rule tag.
         *
         * @returns The name of the parser rule associated with this rule tag.
         */
        get: function () {
            return this._ruleName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "label", {
        /**
         * Gets the label associated with the rule tag.
         *
         * @returns The name of the label associated with the rule tag, or
         * `undefined` if this is an unlabeled rule tag.
         */
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "channel", {
        /**
         * {@inheritDoc}
         *
         * Rule tag tokens are always placed on the {@link #DEFAULT_CHANNEL}.
         */
        get: function () {
            return Token_1.Token.DEFAULT_CHANNEL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "text", {
        /**
         * {@inheritDoc}
         *
         * This method returns the rule tag formatted with `<` and `>`
         * delimiters.
         */
        get: function () {
            if (this._label != null) {
                return "<" + this._label + ":" + this._ruleName + ">";
            }
            return "<" + this._ruleName + ">";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "type", {
        /**
         * {@inheritDoc}
         *
         * Rule tag tokens have types assigned according to the rule bypass
         * transitions created during ATN deserialization.
         */
        get: function () {
            return this.bypassTokenType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "line", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns 0.
         */
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "charPositionInLine", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns -1.
         */
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "tokenIndex", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns -1.
         */
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "startIndex", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns -1.
         */
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "stopIndex", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns -1.
         */
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "tokenSource", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns `undefined`.
         */
        get: function () {
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleTagToken.prototype, "inputStream", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link RuleTagToken} always returns `undefined`.
         */
        get: function () {
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link RuleTagToken} returns a string of the form
     * `ruleName:bypassTokenType`.
     */
    RuleTagToken.prototype.toString = function () {
        return this._ruleName + ":" + this.bypassTokenType;
    };
    __decorate([
        Decorators_1.NotNull
    ], RuleTagToken.prototype, "ruleName");
    __decorate([
        Decorators_1.Override
    ], RuleTagToken.prototype, "channel");
    __decorate([
        Decorators_1.Override
    ], RuleTagToken.prototype, "text");
    __decorate([
        Decorators_1.Override
    ], RuleTagToken.prototype, "type");
    __decorate([
        Decorators_1.Override
    ], RuleTagToken.prototype, "line");
    __decorate([
        Decorators_1.Override
    ], RuleTagToken.prototype, "charPositionInLine");
    __decorate([
        Decorators_1.Override
    ], RuleTagToken.prototype, "tokenIndex");
    __decorate([
        Decorators_1.Override
    ], RuleTagToken.prototype, "startIndex");
    __decorate([
        Decorators_1.Override
    ], RuleTagToken.prototype, "stopIndex");
    __decorate([
        Decorators_1.Override
    ], RuleTagToken.prototype, "tokenSource");
    __decorate([
        Decorators_1.Override
    ], RuleTagToken.prototype, "inputStream");
    __decorate([
        Decorators_1.Override
    ], RuleTagToken.prototype, "toString");
    RuleTagToken = __decorate([
        __param(0, Decorators_1.NotNull)
    ], RuleTagToken);
    return RuleTagToken;
}());
exports.RuleTagToken = RuleTagToken;
