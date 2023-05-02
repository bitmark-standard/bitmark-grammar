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
exports.LexerChannelAction = void 0;
var MurmurHash_1 = require("../misc/MurmurHash");
var Decorators_1 = require("../Decorators");
/**
 * Implements the `channel` lexer action by calling
 * {@link Lexer#setChannel} with the assigned channel.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerChannelAction = /** @class */ (function () {
    /**
     * Constructs a new `channel` action with the specified channel value.
     * @param channel The channel value to pass to {@link Lexer#setChannel}.
     */
    function LexerChannelAction(channel) {
        this._channel = channel;
    }
    Object.defineProperty(LexerChannelAction.prototype, "channel", {
        /**
         * Gets the channel to use for the {@link Token} created by the lexer.
         *
         * @returns The channel to use for the {@link Token} created by the lexer.
         */
        get: function () {
            return this._channel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexerChannelAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         * @returns This method returns {@link LexerActionType#CHANNEL}.
         */
        get: function () {
            return 0 /* LexerActionType.CHANNEL */;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexerChannelAction.prototype, "isPositionDependent", {
        /**
         * {@inheritDoc}
         * @returns This method returns `false`.
         */
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#setChannel} with the
     * value provided by {@link #getChannel}.
     */
    LexerChannelAction.prototype.execute = function (lexer) {
        lexer.channel = this._channel;
    };
    LexerChannelAction.prototype.hashCode = function () {
        var hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        hash = MurmurHash_1.MurmurHash.update(hash, this._channel);
        return MurmurHash_1.MurmurHash.finish(hash, 2);
    };
    LexerChannelAction.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerChannelAction)) {
            return false;
        }
        return this._channel === obj._channel;
    };
    LexerChannelAction.prototype.toString = function () {
        return "channel(".concat(this._channel, ")");
    };
    __decorate([
        Decorators_1.Override
    ], LexerChannelAction.prototype, "actionType");
    __decorate([
        Decorators_1.Override
    ], LexerChannelAction.prototype, "isPositionDependent");
    __decorate([
        Decorators_1.Override,
        __param(0, Decorators_1.NotNull)
    ], LexerChannelAction.prototype, "execute");
    __decorate([
        Decorators_1.Override
    ], LexerChannelAction.prototype, "hashCode");
    __decorate([
        Decorators_1.Override
    ], LexerChannelAction.prototype, "equals");
    __decorate([
        Decorators_1.Override
    ], LexerChannelAction.prototype, "toString");
    return LexerChannelAction;
}());
exports.LexerChannelAction = LexerChannelAction;
