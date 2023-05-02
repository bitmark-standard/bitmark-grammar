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
exports.AmbiguityInfo = void 0;
var DecisionEventInfo_1 = require("./DecisionEventInfo");
var Decorators_1 = require("../Decorators");
/**
 * This class represents profiling event information for an ambiguity.
 * Ambiguities are decisions where a particular input resulted in an SLL
 * conflict, followed by LL prediction also reaching a conflict state
 * (indicating a true ambiguity in the grammar).
 *
 * This event may be reported during SLL prediction in cases where the
 * conflicting SLL configuration set provides sufficient information to
 * determine that the SLL conflict is truly an ambiguity. For example, if none
 * of the ATN configurations in the conflicting SLL configuration set have
 * traversed a global follow transition (i.e.
 * {@link ATNConfig#getReachesIntoOuterContext} is `false` for all
 * configurations), then the result of SLL prediction for that input is known to
 * be equivalent to the result of LL prediction for that input.
 *
 * In some cases, the minimum represented alternative in the conflicting LL
 * configuration set is not equal to the minimum represented alternative in the
 * conflicting SLL configuration set. Grammars and inputs which result in this
 * scenario are unable to use {@link PredictionMode#SLL}, which in turn means
 * they cannot use the two-stage parsing strategy to improve parsing performance
 * for that input.
 *
 * @see ParserATNSimulator#reportAmbiguity
 * @see ParserErrorListener#reportAmbiguity
 *
 * @since 4.3
 */
var AmbiguityInfo = /** @class */ (function (_super) {
    __extends(AmbiguityInfo, _super);
    /**
     * Constructs a new instance of the {@link AmbiguityInfo} class with the
     * specified detailed ambiguity information.
     *
     * @param decision The decision number
     * @param state The final simulator state identifying the ambiguous
     * alternatives for the current input
     * @param ambigAlts The set of alternatives in the decision that lead to a valid parse.
     *                  The predicted alt is the min(ambigAlts)
     * @param input The input token stream
     * @param startIndex The start index for the current prediction
     * @param stopIndex The index at which the ambiguity was identified during
     * prediction
     */
    function AmbiguityInfo(decision, state, ambigAlts, input, startIndex, stopIndex) {
        var _this = _super.call(this, decision, state, input, startIndex, stopIndex, state.useContext) || this;
        _this.ambigAlts = ambigAlts;
        return _this;
    }
    Object.defineProperty(AmbiguityInfo.prototype, "ambiguousAlternatives", {
        /**
         * Gets the set of alternatives in the decision that lead to a valid parse.
         *
         * @since 4.5
         */
        get: function () {
            return this.ambigAlts;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Decorators_1.NotNull
    ], AmbiguityInfo.prototype, "ambigAlts");
    __decorate([
        Decorators_1.NotNull
    ], AmbiguityInfo.prototype, "ambiguousAlternatives");
    AmbiguityInfo = __decorate([
        __param(1, Decorators_1.NotNull),
        __param(2, Decorators_1.NotNull),
        __param(3, Decorators_1.NotNull)
    ], AmbiguityInfo);
    return AmbiguityInfo;
}(DecisionEventInfo_1.DecisionEventInfo));
exports.AmbiguityInfo = AmbiguityInfo;
