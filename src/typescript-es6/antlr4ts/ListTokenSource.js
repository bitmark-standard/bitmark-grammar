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
exports.ListTokenSource = void 0;
var CommonTokenFactory_1 = require("./CommonTokenFactory");
var Decorators_1 = require("./Decorators");
var Token_1 = require("./Token");
/**
 * Provides an implementation of {@link TokenSource} as a wrapper around a list
 * of {@link Token} objects.
 *
 * If the final token in the list is an {@link Token#EOF} token, it will be used
 * as the EOF token for every call to {@link #nextToken} after the end of the
 * list is reached. Otherwise, an EOF token will be created.
 */
var ListTokenSource = /** @class */ (function () {
    /**
     * Constructs a new {@link ListTokenSource} instance from the specified
     * collection of {@link Token} objects and source name.
     *
     * @param tokens The collection of {@link Token} objects to provide as a
     * {@link TokenSource}.
     * @param sourceName The name of the {@link TokenSource}. If this value is
     * `undefined`, {@link #getSourceName} will attempt to infer the name from
     * the next {@link Token} (or the previous token if the end of the input has
     * been reached).
     *
     * @exception NullPointerException if `tokens` is `undefined`
     */
    function ListTokenSource(tokens, sourceName) {
        /**
         * The index into {@link #tokens} of token to return by the next call to
         * {@link #nextToken}. The end of the input is indicated by this value
         * being greater than or equal to the number of items in {@link #tokens}.
         */
        this.i = 0;
        /**
         * This is the backing field for {@link #getTokenFactory} and
         * {@link setTokenFactory}.
         */
        this._factory = CommonTokenFactory_1.CommonTokenFactory.DEFAULT;
        if (tokens == null) {
            throw new Error("tokens cannot be null");
        }
        this.tokens = tokens;
        this._sourceName = sourceName;
    }
    Object.defineProperty(ListTokenSource.prototype, "charPositionInLine", {
        /**
         * {@inheritDoc}
         */
        get: function () {
            if (this.i < this.tokens.length) {
                return this.tokens[this.i].charPositionInLine;
            }
            else if (this.eofToken != null) {
                return this.eofToken.charPositionInLine;
            }
            else if (this.tokens.length > 0) {
                // have to calculate the result from the line/column of the previous
                // token, along with the text of the token.
                var lastToken = this.tokens[this.tokens.length - 1];
                var tokenText = lastToken.text;
                if (tokenText != null) {
                    var lastNewLine = tokenText.lastIndexOf("\n");
                    if (lastNewLine >= 0) {
                        return tokenText.length - lastNewLine - 1;
                    }
                }
                return lastToken.charPositionInLine + lastToken.stopIndex - lastToken.startIndex + 1;
            }
            // only reach this if tokens is empty, meaning EOF occurs at the first
            // position in the input
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * {@inheritDoc}
     */
    ListTokenSource.prototype.nextToken = function () {
        if (this.i >= this.tokens.length) {
            if (this.eofToken == null) {
                var start = -1;
                if (this.tokens.length > 0) {
                    var previousStop = this.tokens[this.tokens.length - 1].stopIndex;
                    if (previousStop !== -1) {
                        start = previousStop + 1;
                    }
                }
                var stop_1 = Math.max(-1, start - 1);
                this.eofToken = this._factory.create({ source: this, stream: this.inputStream }, Token_1.Token.EOF, "EOF", Token_1.Token.DEFAULT_CHANNEL, start, stop_1, this.line, this.charPositionInLine);
            }
            return this.eofToken;
        }
        var t = this.tokens[this.i];
        if (this.i === this.tokens.length - 1 && t.type === Token_1.Token.EOF) {
            this.eofToken = t;
        }
        this.i++;
        return t;
    };
    Object.defineProperty(ListTokenSource.prototype, "line", {
        /**
         * {@inheritDoc}
         */
        get: function () {
            if (this.i < this.tokens.length) {
                return this.tokens[this.i].line;
            }
            else if (this.eofToken != null) {
                return this.eofToken.line;
            }
            else if (this.tokens.length > 0) {
                // have to calculate the result from the line/column of the previous
                // token, along with the text of the token.
                var lastToken = this.tokens[this.tokens.length - 1];
                var line = lastToken.line;
                var tokenText = lastToken.text;
                if (tokenText != null) {
                    for (var i = 0; i < tokenText.length; i++) {
                        if (tokenText.charAt(i) === "\n") {
                            line++;
                        }
                    }
                }
                // if no text is available, assume the token did not contain any newline characters.
                return line;
            }
            // only reach this if tokens is empty, meaning EOF occurs at the first
            // position in the input
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListTokenSource.prototype, "inputStream", {
        /**
         * {@inheritDoc}
         */
        get: function () {
            if (this.i < this.tokens.length) {
                return this.tokens[this.i].inputStream;
            }
            else if (this.eofToken != null) {
                return this.eofToken.inputStream;
            }
            else if (this.tokens.length > 0) {
                return this.tokens[this.tokens.length - 1].inputStream;
            }
            // no input stream information is available
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListTokenSource.prototype, "sourceName", {
        /**
         * {@inheritDoc}
         */
        get: function () {
            if (this._sourceName) {
                return this._sourceName;
            }
            var inputStream = this.inputStream;
            if (inputStream != null) {
                return inputStream.sourceName;
            }
            return "List";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListTokenSource.prototype, "tokenFactory", {
        /**
         * {@inheritDoc}
         */
        get: function () {
            return this._factory;
        },
        /**
         * {@inheritDoc}
         */
        // @Override
        set: function (factory) {
            this._factory = factory;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Decorators_1.Override
    ], ListTokenSource.prototype, "charPositionInLine");
    __decorate([
        Decorators_1.Override
    ], ListTokenSource.prototype, "nextToken");
    __decorate([
        Decorators_1.Override
    ], ListTokenSource.prototype, "line");
    __decorate([
        Decorators_1.Override
    ], ListTokenSource.prototype, "inputStream");
    __decorate([
        Decorators_1.Override
    ], ListTokenSource.prototype, "sourceName");
    __decorate([
        Decorators_1.Override,
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull)
    ], ListTokenSource.prototype, "tokenFactory");
    ListTokenSource = __decorate([
        __param(0, Decorators_1.NotNull)
    ], ListTokenSource);
    return ListTokenSource;
}());
exports.ListTokenSource = ListTokenSource;
