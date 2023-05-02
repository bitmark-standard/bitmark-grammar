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
exports.__esModule = true;
exports.ATNDeserializationOptions = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:25.8187912-07:00
var Decorators_1 = require("../Decorators");
/**
 *
 * @author Sam Harwell
 */
var ATNDeserializationOptions = /** @class */ (function () {
    function ATNDeserializationOptions(options) {
        this.readOnly = false;
        if (options) {
            this.verifyATN = options.verifyATN;
            this.generateRuleBypassTransitions = options.generateRuleBypassTransitions;
            this.optimize = options.optimize;
        }
        else {
            this.verifyATN = true;
            this.generateRuleBypassTransitions = false;
            this.optimize = true;
        }
    }
    Object.defineProperty(ATNDeserializationOptions, "defaultOptions", {
        get: function () {
            if (ATNDeserializationOptions._defaultOptions == null) {
                ATNDeserializationOptions._defaultOptions = new ATNDeserializationOptions();
                ATNDeserializationOptions._defaultOptions.makeReadOnly();
            }
            return ATNDeserializationOptions._defaultOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ATNDeserializationOptions.prototype, "isReadOnly", {
        get: function () {
            return this.readOnly;
        },
        enumerable: false,
        configurable: true
    });
    ATNDeserializationOptions.prototype.makeReadOnly = function () {
        this.readOnly = true;
    };
    Object.defineProperty(ATNDeserializationOptions.prototype, "isVerifyATN", {
        get: function () {
            return this.verifyATN;
        },
        set: function (verifyATN) {
            this.throwIfReadOnly();
            this.verifyATN = verifyATN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ATNDeserializationOptions.prototype, "isGenerateRuleBypassTransitions", {
        get: function () {
            return this.generateRuleBypassTransitions;
        },
        set: function (generateRuleBypassTransitions) {
            this.throwIfReadOnly();
            this.generateRuleBypassTransitions = generateRuleBypassTransitions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ATNDeserializationOptions.prototype, "isOptimize", {
        get: function () {
            return this.optimize;
        },
        set: function (optimize) {
            this.throwIfReadOnly();
            this.optimize = optimize;
        },
        enumerable: false,
        configurable: true
    });
    ATNDeserializationOptions.prototype.throwIfReadOnly = function () {
        if (this.isReadOnly) {
            throw new Error("The object is read only.");
        }
    };
    __decorate([
        Decorators_1.NotNull
    ], ATNDeserializationOptions, "defaultOptions");
    return ATNDeserializationOptions;
}());
exports.ATNDeserializationOptions = ATNDeserializationOptions;
