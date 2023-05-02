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
exports.PredictionMode = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:36.2673893-07:00
var Array2DHashMap_1 = require("../misc/Array2DHashMap");
var MurmurHash_1 = require("../misc/MurmurHash");
var Decorators_1 = require("../Decorators");
var RuleStopState_1 = require("./RuleStopState");
/**
 * This enumeration defines the prediction modes available in ANTLR 4 along with
 * utility methods for analyzing configuration sets for conflicts and/or
 * ambiguities.
 */
var PredictionMode;
(function (PredictionMode) {
    /**
     * The SLL(*) prediction mode. This prediction mode ignores the current
     * parser context when making predictions. This is the fastest prediction
     * mode, and provides correct results for many grammars. This prediction
     * mode is more powerful than the prediction mode provided by ANTLR 3, but
     * may result in syntax errors for grammar and input combinations which are
     * not SLL.
     *
     * When using this prediction mode, the parser will either return a correct
     * parse tree (i.e. the same parse tree that would be returned with the
     * {@link #LL} prediction mode), or it will report a syntax error. If a
     * syntax error is encountered when using the {@link #SLL} prediction mode,
     * it may be due to either an actual syntax error in the input or indicate
     * that the particular combination of grammar and input requires the more
     * powerful {@link #LL} prediction abilities to complete successfully.
     *
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.
     */
    PredictionMode[PredictionMode["SLL"] = 0] = "SLL";
    /**
     * The LL(*) prediction mode. This prediction mode allows the current parser
     * context to be used for resolving SLL conflicts that occur during
     * prediction. This is the fastest prediction mode that guarantees correct
     * parse results for all combinations of grammars with syntactically correct
     * inputs.
     *
     * When using this prediction mode, the parser will make correct decisions
     * for all syntactically-correct grammar and input combinations. However, in
     * cases where the grammar is truly ambiguous this prediction mode might not
     * report a precise answer for *exactly which* alternatives are
     * ambiguous.
     *
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.
     */
    PredictionMode[PredictionMode["LL"] = 1] = "LL";
    /**
     * The LL(*) prediction mode with exact ambiguity detection. In addition to
     * the correctness guarantees provided by the {@link #LL} prediction mode,
     * this prediction mode instructs the prediction algorithm to determine the
     * complete and exact set of ambiguous alternatives for every ambiguous
     * decision encountered while parsing.
     *
     * This prediction mode may be used for diagnosing ambiguities during
     * grammar development. Due to the performance overhead of calculating sets
     * of ambiguous alternatives, this prediction mode should be avoided when
     * the exact results are not necessary.
     *
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.
     */
    PredictionMode[PredictionMode["LL_EXACT_AMBIG_DETECTION"] = 2] = "LL_EXACT_AMBIG_DETECTION";
})(PredictionMode = exports.PredictionMode || (exports.PredictionMode = {}));
(function (PredictionMode) {
    /** A Map that uses just the state and the stack context as the key. */
    // NOTE: Base type used to be FlexibleHashMap<ATNConfig, BitSet>
    var AltAndContextMap = /** @class */ (function (_super) {
        __extends(AltAndContextMap, _super);
        function AltAndContextMap() {
            return _super.call(this, AltAndContextConfigEqualityComparator.INSTANCE) || this;
        }
        return AltAndContextMap;
    }(Array2DHashMap_1.Array2DHashMap));
    var AltAndContextConfigEqualityComparator = /** @class */ (function () {
        function AltAndContextConfigEqualityComparator() {
        }
        AltAndContextConfigEqualityComparator.prototype.AltAndContextConfigEqualityComparator = function () {
            // intentionally empty
        };
        /**
         * The hash code is only a function of the {@link ATNState#stateNumber}
         * and {@link ATNConfig#context}.
         */
        AltAndContextConfigEqualityComparator.prototype.hashCode = function (o) {
            var hashCode = MurmurHash_1.MurmurHash.initialize(7);
            hashCode = MurmurHash_1.MurmurHash.update(hashCode, o.state.stateNumber);
            hashCode = MurmurHash_1.MurmurHash.update(hashCode, o.context);
            hashCode = MurmurHash_1.MurmurHash.finish(hashCode, 2);
            return hashCode;
        };
        AltAndContextConfigEqualityComparator.prototype.equals = function (a, b) {
            if (a === b) {
                return true;
            }
            if (a == null || b == null) {
                return false;
            }
            return a.state.stateNumber === b.state.stateNumber
                && a.context.equals(b.context);
        };
        AltAndContextConfigEqualityComparator.INSTANCE = new AltAndContextConfigEqualityComparator();
        __decorate([
            Decorators_1.Override
        ], AltAndContextConfigEqualityComparator.prototype, "hashCode");
        __decorate([
            Decorators_1.Override
        ], AltAndContextConfigEqualityComparator.prototype, "equals");
        return AltAndContextConfigEqualityComparator;
    }());
    /**
     * Checks if any configuration in `configs` is in a
     * {@link RuleStopState}. Configurations meeting this condition have reached
     * the end of the decision rule (local context) or end of start rule (full
     * context).
     *
     * @param configs the configuration set to test
     * @returns `true` if any configuration in `configs` is in a
     * {@link RuleStopState}, otherwise `false`
     */
    function hasConfigInRuleStopState(configs) {
        for (var _i = 0, configs_1 = configs; _i < configs_1.length; _i++) {
            var c = configs_1[_i];
            if (c.state instanceof RuleStopState_1.RuleStopState) {
                return true;
            }
        }
        return false;
    }
    PredictionMode.hasConfigInRuleStopState = hasConfigInRuleStopState;
    /**
     * Checks if all configurations in `configs` are in a
     * {@link RuleStopState}. Configurations meeting this condition have reached
     * the end of the decision rule (local context) or end of start rule (full
     * context).
     *
     * @param configs the configuration set to test
     * @returns `true` if all configurations in `configs` are in a
     * {@link RuleStopState}, otherwise `false`
     */
    function allConfigsInRuleStopStates(/*@NotNull*/ configs) {
        for (var _i = 0, configs_2 = configs; _i < configs_2.length; _i++) {
            var config = configs_2[_i];
            if (!(config.state instanceof RuleStopState_1.RuleStopState)) {
                return false;
            }
        }
        return true;
    }
    PredictionMode.allConfigsInRuleStopStates = allConfigsInRuleStopStates;
})(PredictionMode = exports.PredictionMode || (exports.PredictionMode = {}));
