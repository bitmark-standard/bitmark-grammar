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
exports.PlusLoopbackState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:35.0257730-07:00
var ATNStateType_1 = require("./ATNStateType");
var DecisionState_1 = require("./DecisionState");
var Decorators_1 = require("../Decorators");
/** Decision state for `A+` and `(A|B)+`.  It has two transitions:
 *  one to the loop back to start of the block and one to exit.
 */
var PlusLoopbackState = /** @class */ (function (_super) {
    __extends(PlusLoopbackState, _super);
    function PlusLoopbackState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PlusLoopbackState.prototype, "stateType", {
        get: function () {
            return ATNStateType_1.ATNStateType.PLUS_LOOP_BACK;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Decorators_1.Override
    ], PlusLoopbackState.prototype, "stateType");
    return PlusLoopbackState;
}(DecisionState_1.DecisionState));
exports.PlusLoopbackState = PlusLoopbackState;
