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
exports.StarLoopEntryState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:37.7099201-07:00
var ATNStateType_1 = require("./ATNStateType");
var BitSet_1 = require("../misc/BitSet");
var DecisionState_1 = require("./DecisionState");
var Decorators_1 = require("../Decorators");
var StarLoopEntryState = /** @class */ (function (_super) {
    __extends(StarLoopEntryState, _super);
    function StarLoopEntryState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Indicates whether this state can benefit from a precedence DFA during SLL
         * decision making.
         *
         * This is a computed property that is calculated during ATN deserialization
         * and stored for use in {@link ParserATNSimulator} and
         * {@link ParserInterpreter}.
         *
         * @see `DFA.isPrecedenceDfa`
         */
        _this.precedenceRuleDecision = false;
        /**
         * For precedence decisions, this set marks states *S* which have all
         * of the following characteristics:
         *
         * * One or more invocation sites of the current rule returns to
         *   *S*.
         * * The closure from *S* includes the current decision without
         *   passing through any rule invocations or stepping out of the current
         *   rule.
         *
         * This field is not used when {@link #precedenceRuleDecision} is
         * `false`.
         */
        _this.precedenceLoopbackStates = new BitSet_1.BitSet();
        return _this;
    }
    Object.defineProperty(StarLoopEntryState.prototype, "stateType", {
        get: function () {
            return ATNStateType_1.ATNStateType.STAR_LOOP_ENTRY;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Decorators_1.Override
    ], StarLoopEntryState.prototype, "stateType");
    return StarLoopEntryState;
}(DecisionState_1.DecisionState));
exports.StarLoopEntryState = StarLoopEntryState;
