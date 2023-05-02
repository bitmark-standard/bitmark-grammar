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
exports.LexerTypeAction = void 0;
var MurmurHash_1 = require("../misc/MurmurHash");
var Decorators_1 = require("../Decorators");
/**
 * Implements the `type` lexer action by setting `Lexer.type`
 * with the assigned type.
 *
 * @author Sam Harwell
 * @since 4.2
 */
var LexerTypeAction = /** @class */ (function () {
    /**
     * Constructs a new `type` action with the specified token type value.
     * @param type The type to assign to the token using `Lexer.type`.
     */
    function LexerTypeAction(type) {
        this._type = type;
    }
    Object.defineProperty(LexerTypeAction.prototype, "type", {
        /**
         * Gets the type to assign to a token created by the lexer.
         * @returns The type to assign to a token created by the lexer.
         */
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexerTypeAction.prototype, "actionType", {
        /**
         * {@inheritDoc}
         * @returns This method returns {@link LexerActionType#TYPE}.
         */
        get: function () {
            return 7 /* LexerActionType.TYPE */;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexerTypeAction.prototype, "isPositionDependent", {
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
     * This action is implemented by setting `Lexer.type` with the
     * value provided by `type`.
     */
    LexerTypeAction.prototype.execute = function (lexer) {
        lexer.type = this._type;
    };
    LexerTypeAction.prototype.hashCode = function () {
        var hash = MurmurHash_1.MurmurHash.initialize();
        hash = MurmurHash_1.MurmurHash.update(hash, this.actionType);
        hash = MurmurHash_1.MurmurHash.update(hash, this._type);
        return MurmurHash_1.MurmurHash.finish(hash, 2);
    };
    LexerTypeAction.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof LexerTypeAction)) {
            return false;
        }
        return this._type === obj._type;
    };
    LexerTypeAction.prototype.toString = function () {
        return "type(".concat(this._type, ")");
    };
    __decorate([
        Decorators_1.Override
    ], LexerTypeAction.prototype, "actionType");
    __decorate([
        Decorators_1.Override
    ], LexerTypeAction.prototype, "isPositionDependent");
    __decorate([
        Decorators_1.Override,
        __param(0, Decorators_1.NotNull)
    ], LexerTypeAction.prototype, "execute");
    __decorate([
        Decorators_1.Override
    ], LexerTypeAction.prototype, "hashCode");
    __decorate([
        Decorators_1.Override
    ], LexerTypeAction.prototype, "equals");
    __decorate([
        Decorators_1.Override
    ], LexerTypeAction.prototype, "toString");
    return LexerTypeAction;
}());
exports.LexerTypeAction = LexerTypeAction;
