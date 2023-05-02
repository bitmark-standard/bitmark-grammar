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
exports.BufferedTokenStream = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:49.6074365-07:00
var assert = require("assert");
var CommonToken_1 = require("./CommonToken");
var Interval_1 = require("./misc/Interval");
var Lexer_1 = require("./Lexer");
var Decorators_1 = require("./Decorators");
var Token_1 = require("./Token");
/**
 * This implementation of {@link TokenStream} loads tokens from a
 * {@link TokenSource} on-demand, and places the tokens in a buffer to provide
 * access to any previous token by index.
 *
 * This token stream ignores the value of {@link Token#getChannel}. If your
 * parser requires the token stream filter tokens to only those on a particular
 * channel, such as {@link Token#DEFAULT_CHANNEL} or
 * {@link Token#HIDDEN_CHANNEL}, use a filtering token stream such a
 * {@link CommonTokenStream}.
 */
var BufferedTokenStream = /** @class */ (function () {
    function BufferedTokenStream(tokenSource) {
        /**
         * A collection of all tokens fetched from the token source. The list is
         * considered a complete view of the input once {@link #fetchedEOF} is set
         * to `true`.
         */
        this.tokens = [];
        /**
         * The index into {@link #tokens} of the current token (next token to
         * {@link #consume}). {@link #tokens}`[`{@link #p}`]` should be
         * {@link #LT LT(1)}.
         *
         * This field is set to -1 when the stream is first constructed or when
         * {@link #setTokenSource} is called, indicating that the first token has
         * not yet been fetched from the token source. For additional information,
         * see the documentation of {@link IntStream} for a description of
         * Initializing Methods.
         */
        this.p = -1;
        /**
         * Indicates whether the {@link Token#EOF} token has been fetched from
         * {@link #tokenSource} and added to {@link #tokens}. This field improves
         * performance for the following cases:
         *
         * * {@link #consume}: The lookahead check in {@link #consume} to prevent
         *   consuming the EOF symbol is optimized by checking the values of
         *   {@link #fetchedEOF} and {@link #p} instead of calling {@link #LA}.
         * * {@link #fetch}: The check to prevent adding multiple EOF symbols into
         *   {@link #tokens} is trivial with this field.
         */
        this.fetchedEOF = false;
        if (tokenSource == null) {
            throw new Error("tokenSource cannot be null");
        }
        this._tokenSource = tokenSource;
    }
    Object.defineProperty(BufferedTokenStream.prototype, "tokenSource", {
        get: function () {
            return this._tokenSource;
        },
        /** Reset this token stream by setting its token source. */
        set: function (tokenSource) {
            this._tokenSource = tokenSource;
            this.tokens.length = 0;
            this.p = -1;
            this.fetchedEOF = false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BufferedTokenStream.prototype, "index", {
        get: function () {
            return this.p;
        },
        enumerable: false,
        configurable: true
    });
    BufferedTokenStream.prototype.mark = function () {
        return 0;
    };
    BufferedTokenStream.prototype.release = function (marker) {
        // no resources to release
    };
    BufferedTokenStream.prototype.seek = function (index) {
        this.lazyInit();
        this.p = this.adjustSeekIndex(index);
    };
    Object.defineProperty(BufferedTokenStream.prototype, "size", {
        get: function () {
            return this.tokens.length;
        },
        enumerable: false,
        configurable: true
    });
    BufferedTokenStream.prototype.consume = function () {
        var skipEofCheck;
        if (this.p >= 0) {
            if (this.fetchedEOF) {
                // the last token in tokens is EOF. skip check if p indexes any
                // fetched token except the last.
                skipEofCheck = this.p < this.tokens.length - 1;
            }
            else {
                // no EOF token in tokens. skip check if p indexes a fetched token.
                skipEofCheck = this.p < this.tokens.length;
            }
        }
        else {
            // not yet initialized
            skipEofCheck = false;
        }
        if (!skipEofCheck && this.LA(1) === Token_1.Token.EOF) {
            throw new Error("cannot consume EOF");
        }
        if (this.sync(this.p + 1)) {
            this.p = this.adjustSeekIndex(this.p + 1);
        }
    };
    /** Make sure index `i` in tokens has a token.
     *
     * @returns `true` if a token is located at index `i`, otherwise
     *    `false`.
     * @see #get(int i)
     */
    BufferedTokenStream.prototype.sync = function (i) {
        assert(i >= 0);
        var n = i - this.tokens.length + 1; // how many more elements we need?
        //System.out.println("sync("+i+") needs "+n);
        if (n > 0) {
            var fetched = this.fetch(n);
            return fetched >= n;
        }
        return true;
    };
    /** Add `n` elements to buffer.
     *
     * @returns The actual number of elements added to the buffer.
     */
    BufferedTokenStream.prototype.fetch = function (n) {
        if (this.fetchedEOF) {
            return 0;
        }
        for (var i = 0; i < n; i++) {
            var t = this.tokenSource.nextToken();
            if (this.isWritableToken(t)) {
                t.tokenIndex = this.tokens.length;
            }
            this.tokens.push(t);
            if (t.type === Token_1.Token.EOF) {
                this.fetchedEOF = true;
                return i + 1;
            }
        }
        return n;
    };
    BufferedTokenStream.prototype.get = function (i) {
        if (i < 0 || i >= this.tokens.length) {
            throw new RangeError("token index " + i + " out of range 0.." + (this.tokens.length - 1));
        }
        return this.tokens[i];
    };
    /** Get all tokens from start..stop inclusively. */
    BufferedTokenStream.prototype.getRange = function (start, stop) {
        if (start < 0 || stop < 0) {
            return [];
        }
        this.lazyInit();
        var subset = new Array();
        if (stop >= this.tokens.length) {
            stop = this.tokens.length - 1;
        }
        for (var i = start; i <= stop; i++) {
            var t = this.tokens[i];
            if (t.type === Token_1.Token.EOF) {
                break;
            }
            subset.push(t);
        }
        return subset;
    };
    BufferedTokenStream.prototype.LA = function (i) {
        var token = this.LT(i);
        if (!token) {
            return Token_1.Token.INVALID_TYPE;
        }
        return token.type;
    };
    BufferedTokenStream.prototype.tryLB = function (k) {
        if ((this.p - k) < 0) {
            return undefined;
        }
        return this.tokens[this.p - k];
    };
    BufferedTokenStream.prototype.LT = function (k) {
        var result = this.tryLT(k);
        if (result === undefined) {
            throw new RangeError("requested lookback index out of range");
        }
        return result;
    };
    BufferedTokenStream.prototype.tryLT = function (k) {
        this.lazyInit();
        if (k === 0) {
            throw new RangeError("0 is not a valid lookahead index");
        }
        if (k < 0) {
            return this.tryLB(-k);
        }
        var i = this.p + k - 1;
        this.sync(i);
        if (i >= this.tokens.length) {
            // return EOF token
            // EOF must be last token
            return this.tokens[this.tokens.length - 1];
        }
        //		if ( i>range ) range = i;
        return this.tokens[i];
    };
    /**
     * Allowed derived classes to modify the behavior of operations which change
     * the current stream position by adjusting the target token index of a seek
     * operation. The default implementation simply returns `i`. If an
     * exception is thrown in this method, the current stream index should not be
     * changed.
     *
     * For example, {@link CommonTokenStream} overrides this method to ensure that
     * the seek target is always an on-channel token.
     *
     * @param i The target token index.
     * @returns The adjusted target token index.
     */
    BufferedTokenStream.prototype.adjustSeekIndex = function (i) {
        return i;
    };
    BufferedTokenStream.prototype.lazyInit = function () {
        if (this.p === -1) {
            this.setup();
        }
    };
    BufferedTokenStream.prototype.setup = function () {
        this.sync(0);
        this.p = this.adjustSeekIndex(0);
    };
    /** Given a start and stop index, return a `List` of all tokens in
     *  the token type `BitSet`.  Return an empty array if no tokens were found.  This
     *  method looks at both on and off channel tokens.
     */
    BufferedTokenStream.prototype.getTokens = function (start, stop, types) {
        this.lazyInit();
        if (start === undefined) {
            assert(stop === undefined && types === undefined);
            return this.tokens;
        }
        else if (stop === undefined) {
            stop = this.tokens.length - 1;
        }
        if (start < 0 || stop >= this.tokens.length || stop < 0 || start >= this.tokens.length) {
            throw new RangeError("start " + start + " or stop " + stop + " not in 0.." + (this.tokens.length - 1));
        }
        if (start > stop) {
            return [];
        }
        if (types === undefined) {
            return this.tokens.slice(start, stop + 1);
        }
        else if (typeof types === "number") {
            types = new Set().add(types);
        }
        var typesSet = types;
        // list = tokens[start:stop]:{T t, t.type in types}
        var filteredTokens = this.tokens.slice(start, stop + 1);
        filteredTokens = filteredTokens.filter(function (value) { return typesSet.has(value.type); });
        return filteredTokens;
    };
    /**
     * Given a starting index, return the index of the next token on channel.
     * Return `i` if `tokens[i]` is on channel. Return the index of
     * the EOF token if there are no tokens on channel between `i` and
     * EOF.
     */
    BufferedTokenStream.prototype.nextTokenOnChannel = function (i, channel) {
        this.sync(i);
        if (i >= this.size) {
            return this.size - 1;
        }
        var token = this.tokens[i];
        while (token.channel !== channel) {
            if (token.type === Token_1.Token.EOF) {
                return i;
            }
            i++;
            this.sync(i);
            token = this.tokens[i];
        }
        return i;
    };
    /**
     * Given a starting index, return the index of the previous token on
     * channel. Return `i` if `tokens[i]` is on channel. Return -1
     * if there are no tokens on channel between `i` and 0.
     *
     * If `i` specifies an index at or after the EOF token, the EOF token
     * index is returned. This is due to the fact that the EOF token is treated
     * as though it were on every channel.
     */
    BufferedTokenStream.prototype.previousTokenOnChannel = function (i, channel) {
        this.sync(i);
        if (i >= this.size) {
            // the EOF token is on every channel
            return this.size - 1;
        }
        while (i >= 0) {
            var token = this.tokens[i];
            if (token.type === Token_1.Token.EOF || token.channel === channel) {
                return i;
            }
            i--;
        }
        return i;
    };
    /** Collect all tokens on specified channel to the right of
     *  the current token up until we see a token on {@link Lexer#DEFAULT_TOKEN_CHANNEL} or
     *  EOF. If `channel` is `-1`, find any non default channel token.
     */
    BufferedTokenStream.prototype.getHiddenTokensToRight = function (tokenIndex, channel) {
        if (channel === void 0) { channel = -1; }
        this.lazyInit();
        if (tokenIndex < 0 || tokenIndex >= this.tokens.length) {
            throw new RangeError(tokenIndex + " not in 0.." + (this.tokens.length - 1));
        }
        var nextOnChannel = this.nextTokenOnChannel(tokenIndex + 1, Lexer_1.Lexer.DEFAULT_TOKEN_CHANNEL);
        var to;
        var from = tokenIndex + 1;
        // if none onchannel to right, nextOnChannel=-1 so set to = last token
        if (nextOnChannel === -1) {
            to = this.size - 1;
        }
        else {
            to = nextOnChannel;
        }
        return this.filterForChannel(from, to, channel);
    };
    /** Collect all tokens on specified channel to the left of
     *  the current token up until we see a token on {@link Lexer#DEFAULT_TOKEN_CHANNEL}.
     *  If `channel` is `-1`, find any non default channel token.
     */
    BufferedTokenStream.prototype.getHiddenTokensToLeft = function (tokenIndex, channel) {
        if (channel === void 0) { channel = -1; }
        this.lazyInit();
        if (tokenIndex < 0 || tokenIndex >= this.tokens.length) {
            throw new RangeError(tokenIndex + " not in 0.." + (this.tokens.length - 1));
        }
        if (tokenIndex === 0) {
            // obviously no tokens can appear before the first token
            return [];
        }
        var prevOnChannel = this.previousTokenOnChannel(tokenIndex - 1, Lexer_1.Lexer.DEFAULT_TOKEN_CHANNEL);
        if (prevOnChannel === tokenIndex - 1) {
            return [];
        }
        // if none onchannel to left, prevOnChannel=-1 then from=0
        var from = prevOnChannel + 1;
        var to = tokenIndex - 1;
        return this.filterForChannel(from, to, channel);
    };
    BufferedTokenStream.prototype.filterForChannel = function (from, to, channel) {
        var hidden = new Array();
        for (var i = from; i <= to; i++) {
            var t = this.tokens[i];
            if (channel === -1) {
                if (t.channel !== Lexer_1.Lexer.DEFAULT_TOKEN_CHANNEL) {
                    hidden.push(t);
                }
            }
            else {
                if (t.channel === channel) {
                    hidden.push(t);
                }
            }
        }
        return hidden;
    };
    Object.defineProperty(BufferedTokenStream.prototype, "sourceName", {
        get: function () {
            return this.tokenSource.sourceName;
        },
        enumerable: false,
        configurable: true
    });
    BufferedTokenStream.prototype.getText = function (interval) {
        if (interval === undefined) {
            interval = Interval_1.Interval.of(0, this.size - 1);
        }
        else if (!(interval instanceof Interval_1.Interval)) {
            // Note: the more obvious check for 'instanceof RuleContext' results in a circular dependency problem
            interval = interval.sourceInterval;
        }
        var start = interval.a;
        var stop = interval.b;
        if (start < 0 || stop < 0) {
            return "";
        }
        this.fill();
        if (stop >= this.tokens.length) {
            stop = this.tokens.length - 1;
        }
        var buf = "";
        for (var i = start; i <= stop; i++) {
            var t = this.tokens[i];
            if (t.type === Token_1.Token.EOF) {
                break;
            }
            buf += t.text;
        }
        return buf.toString();
    };
    BufferedTokenStream.prototype.getTextFromRange = function (start, stop) {
        if (this.isToken(start) && this.isToken(stop)) {
            return this.getText(Interval_1.Interval.of(start.tokenIndex, stop.tokenIndex));
        }
        return "";
    };
    /** Get all tokens from lexer until EOF. */
    BufferedTokenStream.prototype.fill = function () {
        this.lazyInit();
        var blockSize = 1000;
        while (true) {
            var fetched = this.fetch(blockSize);
            if (fetched < blockSize) {
                return;
            }
        }
    };
    // TODO: Figure out a way to make this more flexible?
    BufferedTokenStream.prototype.isWritableToken = function (t) {
        return t instanceof CommonToken_1.CommonToken;
    };
    // TODO: Figure out a way to make this more flexible?
    BufferedTokenStream.prototype.isToken = function (t) {
        return t instanceof CommonToken_1.CommonToken;
    };
    __decorate([
        Decorators_1.NotNull
    ], BufferedTokenStream.prototype, "_tokenSource");
    __decorate([
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "tokenSource");
    __decorate([
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "index");
    __decorate([
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "mark");
    __decorate([
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "release");
    __decorate([
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "seek");
    __decorate([
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "size");
    __decorate([
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "consume");
    __decorate([
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "get");
    __decorate([
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "LA");
    __decorate([
        Decorators_1.NotNull,
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "LT");
    __decorate([
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "sourceName");
    __decorate([
        Decorators_1.NotNull,
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "getText");
    __decorate([
        Decorators_1.NotNull,
        Decorators_1.Override
    ], BufferedTokenStream.prototype, "getTextFromRange");
    BufferedTokenStream = __decorate([
        __param(0, Decorators_1.NotNull)
    ], BufferedTokenStream);
    return BufferedTokenStream;
}());
exports.BufferedTokenStream = BufferedTokenStream;
