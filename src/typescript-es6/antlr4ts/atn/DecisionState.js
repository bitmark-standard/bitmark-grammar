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
exports.DecisionState = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:28.4381103-07:00
var ATNState_1 = require("./ATNState");
var DecisionState = /** @class */ (function (_super) {
    __extends(DecisionState, _super);
    function DecisionState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.decision = -1;
        _this.nonGreedy = false;
        _this.sll = false;
        return _this;
    }
    return DecisionState;
}(ATNState_1.ATNState));
exports.DecisionState = DecisionState;
