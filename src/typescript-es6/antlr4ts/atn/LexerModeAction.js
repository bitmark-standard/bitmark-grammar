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
exports.LexerModeAction = void 0;
var MurmurHash_1 = require("../misc/MurmurHash");
var Decorators_1 = require("../Decorators");
/**
 * Implements the `mode` lexer action by calling {@link Lexer#mode} with
 * the assigned mode.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerModeAction = /** @class */ (function () {
    /**
     * Constructs a new `mode` action with the specified mode value.
     * @param mode The mode value to pass to {@link Lexer#mode}.
     */
    function LexerModeAction(mode) {
        this._mode = mode;
    }
    Object.defineProperty(LexerModeAction.prototype, "mode", {
        /**
         * Get the lexer mode this action should transition the lexer to.
         *
         * @returns The lexer mode for this `mode` command.
         */
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexerModeAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         * @returns This method returns {@link LexerActionType#MODE}.
         */
        get: function () {
            return 2 /* LexerActionType.MODE */;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexerModeAction.prototype, "isPositionDependent", {
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
     * This action is implemented by calling {@link Lexer#mode} with the
     * value provided by {@link #getMode}.
     */
    LexerModeAction.prototype.execute = function (lexer) {
        lexer.mode(this._mode);
    };
    LexerModeAction.prototype.hashCode = function () {
        var hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        hash = MurmurHash_1.MurmurHash.update(hash, this._mode);
        return MurmurHash_1.MurmurHash.finish(hash, 2);
    };
    LexerModeAction.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerModeAction)) {
            return false;
        }
        return this._mode === obj._mode;
    };
    LexerModeAction.prototype.toString = function () {
        return "mode(".concat(this._mode, ")");
    };
    __decorate([
        Decorators_1.Override
    ], LexerModeAction.prototype, "actionType");
    __decorate([
        Decorators_1.Override
    ], LexerModeAction.prototype, "isPositionDependent");
    __decorate([
        Decorators_1.Override,
        __param(0, Decorators_1.NotNull)
    ], LexerModeAction.prototype, "execute");
    __decorate([
        Decorators_1.Override
    ], LexerModeAction.prototype, "hashCode");
    __decorate([
        Decorators_1.Override
    ], LexerModeAction.prototype, "equals");
    __decorate([
        Decorators_1.Override
    ], LexerModeAction.prototype, "toString");
    return LexerModeAction;
}());
exports.LexerModeAction = LexerModeAction;
