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
exports.__esModule = true;
exports.InterpreterRuleContext = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:51.5898546-07:00
var Decorators_1 = require("./Decorators");
var ParserRuleContext_1 = require("./ParserRuleContext");
/**
 * This class extends {@link ParserRuleContext} by allowing the value of
 * {@link #getRuleIndex} to be explicitly set for the context.
 *
 * {@link ParserRuleContext} does not include field storage for the rule index
 * since the context classes created by the code generator override the
 * {@link #getRuleIndex} method to return the correct value for that context.
 * Since the parser interpreter does not use the context classes generated for a
 * parser, this class (with slightly more memory overhead per node) is used to
 * provide equivalent functionality.
 */
var InterpreterRuleContext = /** @class */ (function (_super) {
    __extends(InterpreterRuleContext, _super);
    function InterpreterRuleContext(ruleIndex, parent, invokingStateNumber) {
        var _this = this;
        if (invokingStateNumber !== undefined) {
            _this = _super.call(this, parent, invokingStateNumber) || this;
        }
        else {
            _this = _super.call(this) || this;
        }
        _this._ruleIndex = ruleIndex;
        return _this;
    }
    Object.defineProperty(InterpreterRuleContext.prototype, "ruleIndex", {
        get: function () {
            return this._ruleIndex;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Decorators_1.Override
    ], InterpreterRuleContext.prototype, "ruleIndex");
    return InterpreterRuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterpreterRuleContext = InterpreterRuleContext;
