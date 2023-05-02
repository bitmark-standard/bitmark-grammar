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
exports.ATNSimulator = void 0;
var ATNConfigSet_1 = require("./ATNConfigSet");
var DFAState_1 = require("../dfa/DFAState");
var Decorators_1 = require("../Decorators");
var PredictionContext_1 = require("./PredictionContext");
var ATNSimulator = /** @class */ (function () {
    function ATNSimulator(atn) {
        this.atn = atn;
    }
    Object.defineProperty(ATNSimulator, "ERROR", {
        get: function () {
            if (!ATNSimulator._ERROR) {
                ATNSimulator._ERROR = new DFAState_1.DFAState(new ATNConfigSet_1.ATNConfigSet());
                ATNSimulator._ERROR.stateNumber = PredictionContext_1.PredictionContext.EMPTY_FULL_STATE_KEY;
            }
            return ATNSimulator._ERROR;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clear the DFA cache used by the current instance. Since the DFA cache may
     * be shared by multiple ATN simulators, this method may affect the
     * performance (but not accuracy) of other parsers which are being used
     * concurrently.
     *
     * @ if the current instance does not
     * support clearing the DFA.
     *
     * @since 4.3
     */
    ATNSimulator.prototype.clearDFA = function () {
        this.atn.clearDFA();
    };
    __decorate([
        Decorators_1.NotNull
    ], ATNSimulator.prototype, "atn");
    __decorate([
        Decorators_1.NotNull
    ], ATNSimulator, "ERROR");
    ATNSimulator = __decorate([
        __param(0, Decorators_1.NotNull)
    ], ATNSimulator);
    return ATNSimulator;
}());
exports.ATNSimulator = ATNSimulator;
(function (ATNSimulator) {
    var RULE_VARIANT_DELIMITER = "$";
    var RULE_LF_VARIANT_MARKER = "$lf$";
    var RULE_NOLF_VARIANT_MARKER = "$nolf$";
})(ATNSimulator = exports.ATNSimulator || (exports.ATNSimulator = {}));
exports.ATNSimulator = ATNSimulator;
