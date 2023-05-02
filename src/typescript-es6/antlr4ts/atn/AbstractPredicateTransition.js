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
exports.AbstractPredicateTransition = void 0;
var Transition_1 = require("./Transition");
/**
 *
 * @author Sam Harwell
 */
var AbstractPredicateTransition = /** @class */ (function (_super) {
    __extends(AbstractPredicateTransition, _super);
    function AbstractPredicateTransition(target) {
        return _super.call(this, target) || this;
    }
    return AbstractPredicateTransition;
}(Transition_1.Transition));
exports.AbstractPredicateTransition = AbstractPredicateTransition;
