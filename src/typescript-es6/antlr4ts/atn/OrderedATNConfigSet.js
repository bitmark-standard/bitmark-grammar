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
exports.OrderedATNConfigSet = void 0;
var ATNConfigSet_1 = require("./ATNConfigSet");
var Decorators_1 = require("../Decorators");
/**
 *
 * @author Sam Harwell
 */
var OrderedATNConfigSet = /** @class */ (function (_super) {
    __extends(OrderedATNConfigSet, _super);
    function OrderedATNConfigSet(set, readonly) {
        var _this = this;
        if (set != null && readonly != null) {
            _this = _super.call(this, set, readonly) || this;
        }
        else {
            _this = _super.call(this) || this;
        }
        return _this;
    }
    OrderedATNConfigSet.prototype.clone = function (readonly) {
        var copy = new OrderedATNConfigSet(this, readonly);
        if (!readonly && this.isReadOnly) {
            copy.addAll(this);
        }
        return copy;
    };
    OrderedATNConfigSet.prototype.getKey = function (e) {
        // This is a specially crafted key to ensure configurations are only merged if they are equal
        return { state: 0, alt: e.hashCode() };
    };
    OrderedATNConfigSet.prototype.canMerge = function (left, leftKey, right) {
        return left.equals(right);
    };
    __decorate([
        Decorators_1.Override
    ], OrderedATNConfigSet.prototype, "clone");
    __decorate([
        Decorators_1.Override
    ], OrderedATNConfigSet.prototype, "getKey");
    __decorate([
        Decorators_1.Override
    ], OrderedATNConfigSet.prototype, "canMerge");
    return OrderedATNConfigSet;
}(ATNConfigSet_1.ATNConfigSet));
exports.OrderedATNConfigSet = OrderedATNConfigSet;
