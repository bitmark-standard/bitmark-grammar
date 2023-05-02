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
exports.__esModule = true;
exports.IntegerStack = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:40.6647101-07:00
var IntegerList_1 = require("./IntegerList");
/**
 *
 * @author Sam Harwell
 */
var IntegerStack = /** @class */ (function (_super) {
    __extends(IntegerStack, _super);
    function IntegerStack(arg) {
        return _super.call(this, arg) || this;
    }
    IntegerStack.prototype.push = function (value) {
        this.add(value);
    };
    IntegerStack.prototype.pop = function () {
        return this.removeAt(this.size - 1);
    };
    IntegerStack.prototype.peek = function () {
        return this.get(this.size - 1);
    };
    return IntegerStack;
}(IntegerList_1.IntegerList));
exports.IntegerStack = IntegerStack;
