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
exports.TokenTagToken = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:46.3281988-07:00
var CommonToken_1 = require("../../CommonToken");
var Decorators_1 = require("../../Decorators");
/**
 * A {@link Token} object representing a token of a particular type; e.g.,
 * `<ID>`. These tokens are created for {@link TagChunk} chunks where the
 * tag corresponds to a lexer rule or token type.
 */
var TokenTagToken = /** @class */ (function (_super) {
    __extends(TokenTagToken, _super);
    /**
     * Constructs a new instance of {@link TokenTagToken} with the specified
     * token name, type, and label.
     *
     * @param tokenName The token name.
     * @param type The token type.
     * @param label The label associated with the token tag, or `undefined` if
     * the token tag is unlabeled.
     */
    function TokenTagToken(tokenName, type, label) {
        var _this = _super.call(this, type) || this;
        _this._tokenName = tokenName;
        _this._label = label;
        return _this;
    }
    Object.defineProperty(TokenTagToken.prototype, "tokenName", {
        /**
         * Gets the token name.
         * @returns The token name.
         */
        get: function () {
            return this._tokenName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenTagToken.prototype, "label", {
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
    Object.defineProperty(TokenTagToken.prototype, "text", {
        /**
         * {@inheritDoc}
         *
         * The implementation for {@link TokenTagToken} returns the token tag
         * formatted with `<` and `>` delimiters.
         */
        get: function () {
            if (this._label != null) {
                return "<" + this._label + ":" + this._tokenName + ">";
            }
            return "<" + this._tokenName + ">";
        },
        enumerable: false,
        configurable: true
    });
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link TokenTagToken} returns a string of the form
     * `tokenName:type`.
     */
    TokenTagToken.prototype.toString = function () {
        return this._tokenName + ":" + this.type;
    };
    __decorate([
        Decorators_1.NotNull
    ], TokenTagToken.prototype, "_tokenName");
    __decorate([
        Decorators_1.NotNull
    ], TokenTagToken.prototype, "tokenName");
    __decorate([
        Decorators_1.Override
    ], TokenTagToken.prototype, "text");
    __decorate([
        Decorators_1.Override
    ], TokenTagToken.prototype, "toString");
    TokenTagToken = __decorate([
        __param(0, Decorators_1.NotNull)
    ], TokenTagToken);
    return TokenTagToken;
}(CommonToken_1.CommonToken));
exports.TokenTagToken = TokenTagToken;
