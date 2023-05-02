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
exports.BlockEndState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:27.9125304-07:00
var ATNState_1 = require("./ATNState");
var ATNStateType_1 = require("./ATNStateType");
var Decorators_1 = require("../Decorators");
/** Terminal node of a simple `(a|b|c)` block. */
var BlockEndState = /** @class */ (function (_super) {
    __extends(BlockEndState, _super);
    function BlockEndState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BlockEndState.prototype, "stateType", {
        get: function () {
            return ATNStateType_1.ATNStateType.BLOCK_END;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Decorators_1.Override
    ], BlockEndState.prototype, "stateType");
    return BlockEndState;
}(ATNState_1.ATNState));
exports.BlockEndState = BlockEndState;
