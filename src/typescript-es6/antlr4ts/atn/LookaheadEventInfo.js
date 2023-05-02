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
exports.LookaheadEventInfo = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:30.6852565-07:00
var DecisionEventInfo_1 = require("./DecisionEventInfo");
var Decorators_1 = require("../Decorators");
/**
 * This class represents profiling event information for tracking the lookahead
 * depth required in order to make a prediction.
 *
 * @since 4.3
 */
var LookaheadEventInfo = /** @class */ (function (_super) {
    __extends(LookaheadEventInfo, _super);
    /**
     * Constructs a new instance of the {@link LookaheadEventInfo} class with
     * the specified detailed lookahead information.
     *
     * @param decision The decision number
     * @param state The final simulator state containing the necessary
     * information to determine the result of a prediction, or `undefined` if
     * the final state is not available
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the prediction was finally made
     * @param fullCtx `true` if the current lookahead is part of an LL
     * prediction; otherwise, `false` if the current lookahead is part of
     * an SLL prediction
     */
    function LookaheadEventInfo(decision, state, predictedAlt, input, startIndex, stopIndex, fullCtx) {
        var _this = _super.call(this, decision, state, input, startIndex, stopIndex, fullCtx) || this;
        _this.predictedAlt = predictedAlt;
        return _this;
    }
    LookaheadEventInfo = __decorate([
        __param(3, Decorators_1.NotNull)
    ], LookaheadEventInfo);
    return LookaheadEventInfo;
}(DecisionEventInfo_1.DecisionEventInfo));
exports.LookaheadEventInfo = LookaheadEventInfo;
