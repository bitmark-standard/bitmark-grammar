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
exports.MultiMap = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:42.1346951-07:00
var MultiMap = /** @class */ (function (_super) {
    __extends(MultiMap, _super);
    function MultiMap() {
        return _super.call(this) || this;
    }
    MultiMap.prototype.map = function (key, value) {
        var elementsForKey = _super.prototype.get.call(this, key);
        if (!elementsForKey) {
            elementsForKey = [];
            _super.prototype.set.call(this, key, elementsForKey);
        }
        elementsForKey.push(value);
    };
    MultiMap.prototype.getPairs = function () {
        var pairs = [];
        this.forEach(function (values, key) {
            values.forEach(function (v) {
                pairs.push([key, v]);
            });
        });
        return pairs;
    };
    return MultiMap;
}(Map));
exports.MultiMap = MultiMap;
