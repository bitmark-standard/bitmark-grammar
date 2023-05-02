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
exports.XPathRuleElement = void 0;
// CONVERSTION complete, Burt Harris 10/14/2016
var ParserRuleContext_1 = require("../../ParserRuleContext");
var Decorators_1 = require("../../Decorators");
var Trees_1 = require("../Trees");
var XPathElement_1 = require("./XPathElement");
var XPathRuleElement = /** @class */ (function (_super) {
    __extends(XPathRuleElement, _super);
    function XPathRuleElement(ruleName, ruleIndex) {
        var _this = _super.call(this, ruleName) || this;
        _this.ruleIndex = ruleIndex;
        return _this;
    }
    XPathRuleElement.prototype.evaluate = function (t) {
        // return all children of t that match nodeName
        var nodes = [];
        for (var _i = 0, _a = Trees_1.Trees.getChildren(t); _i < _a.length; _i++) {
            var c = _a[_i];
            if (c instanceof ParserRuleContext_1.ParserRuleContext) {
                if ((c.ruleIndex === this.ruleIndex && !this.invert) ||
                    (c.ruleIndex !== this.ruleIndex && this.invert)) {
                    nodes.push(c);
                }
            }
        }
        return nodes;
    };
    __decorate([
        Decorators_1.Override
    ], XPathRuleElement.prototype, "evaluate");
    return XPathRuleElement;
}(XPathElement_1.XPathElement));
exports.XPathRuleElement = XPathRuleElement;
