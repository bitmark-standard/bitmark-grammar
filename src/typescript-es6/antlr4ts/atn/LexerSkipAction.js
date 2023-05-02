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
exports.LexerSkipAction = void 0;
var MurmurHash_1 = require("../misc/MurmurHash");
var Decorators_1 = require("../Decorators");
/**
 * Implements the `skip` lexer action by calling {@link Lexer#skip}.
 *
 * The `skip` command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link #INSTANCE}.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerSkipAction = /** @class */ (function () {
    /**
     * Constructs the singleton instance of the lexer `skip` command.
     */
    function LexerSkipAction() {
        // intentionally empty
    }
    Object.defineProperty(LexerSkipAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         * @returns This method returns {@link LexerActionType#SKIP}.
         */
        get: function () {
            return 6 /* LexerActionType.SKIP */;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexerSkipAction.prototype, "isPositionDependent", {
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
     * This action is implemented by calling {@link Lexer#skip}.
     */
    LexerSkipAction.prototype.execute = function (lexer) {
        lexer.skip();
    };
    LexerSkipAction.prototype.hashCode = function () {
        var hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        return MurmurHash_1.MurmurHash.finish(hash, 1);
    };
    LexerSkipAction.prototype.equals = function (obj) {
        return obj === this;
    };
    LexerSkipAction.prototype.toString = function () {
        return "skip";
    };
    __decorate([
        Decorators_1.Override
    ], LexerSkipAction.prototype, "actionType");
    __decorate([
        Decorators_1.Override
    ], LexerSkipAction.prototype, "isPositionDependent");
    __decorate([
        Decorators_1.Override,
        __param(0, Decorators_1.NotNull)
    ], LexerSkipAction.prototype, "execute");
    __decorate([
        Decorators_1.Override
    ], LexerSkipAction.prototype, "hashCode");
    __decorate([
        Decorators_1.Override
    ], LexerSkipAction.prototype, "equals");
    __decorate([
        Decorators_1.Override
    ], LexerSkipAction.prototype, "toString");
    return LexerSkipAction;
}());
exports.LexerSkipAction = LexerSkipAction;
(function (LexerSkipAction) {
    /**
     * Provides a singleton instance of this parameterless lexer action.
     */
    LexerSkipAction.INSTANCE = new LexerSkipAction();
})(LexerSkipAction = exports.LexerSkipAction || (exports.LexerSkipAction = {}));
exports.LexerSkipAction = LexerSkipAction;
