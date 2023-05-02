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
exports.XPathWildcardElement = void 0;
// CONVERSTION complete, Burt Harris 10/14/2016
var Decorators_1 = require("../../Decorators");
var Trees_1 = require("../Trees");
var XPath_1 = require("./XPath");
var XPathElement_1 = require("./XPathElement");
var XPathWildcardElement = /** @class */ (function (_super) {
    __extends(XPathWildcardElement, _super);
    function XPathWildcardElement() {
        return _super.call(this, XPath_1.XPath.WILDCARD) || this;
    }
    XPathWildcardElement.prototype.evaluate = function (t) {
        var kids = [];
        if (this.invert) {
            // !* is weird but valid (empty)
            return kids;
        }
        for (var _i = 0, _a = Trees_1.Trees.getChildren(t); _i < _a.length; _i++) {
            var c = _a[_i];
            kids.push(c);
        }
        return kids;
    };
    __decorate([
        Decorators_1.Override
    ], XPathWildcardElement.prototype, "evaluate");
    return XPathWildcardElement;
}(XPathElement_1.XPathElement));
exports.XPathWildcardElement = XPathWildcardElement;
