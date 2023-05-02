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
exports.PredicateEvalInfo = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:35.1914305-07:00
var DecisionEventInfo_1 = require("./DecisionEventInfo");
var Decorators_1 = require("../Decorators");
/**
 * This class represents profiling event information for semantic predicate
 * evaluations which occur during prediction.
 *
 * @see ParserATNSimulator#evalSemanticContext
 *
 * @since 4.3
 */
var PredicateEvalInfo = /** @class */ (function (_super) {
    __extends(PredicateEvalInfo, _super);
    /**
     * Constructs a new instance of the {@link PredicateEvalInfo} class with the
     * specified detailed predicate evaluation information.
     *
     * @param state The simulator state
     * @param decision The decision number
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the predicate evaluation was
     * triggered. Note that the input stream may be reset to other positions for
     * the actual evaluation of individual predicates.
     * @param semctx The semantic context which was evaluated
     * @param evalResult The results of evaluating the semantic context
     * @param predictedAlt The alternative number for the decision which is
     * guarded by the semantic context `semctx`. See {@link #predictedAlt}
     * for more information.
     *
     * @see ParserATNSimulator#evalSemanticContext(SemanticContext, ParserRuleContext, int)
     * @see SemanticContext#eval(Recognizer, RuleContext)
     */
    function PredicateEvalInfo(state, decision, input, startIndex, stopIndex, semctx, evalResult, predictedAlt) {
        var _this = _super.call(this, decision, state, input, startIndex, stopIndex, state.useContext) || this;
        _this.semctx = semctx;
        _this.evalResult = evalResult;
        _this.predictedAlt = predictedAlt;
        return _this;
    }
    PredicateEvalInfo = __decorate([
        __param(0, Decorators_1.NotNull),
        __param(2, Decorators_1.NotNull),
        __param(5, Decorators_1.NotNull)
    ], PredicateEvalInfo);
    return PredicateEvalInfo;
}(DecisionEventInfo_1.DecisionEventInfo));
exports.PredicateEvalInfo = PredicateEvalInfo;
