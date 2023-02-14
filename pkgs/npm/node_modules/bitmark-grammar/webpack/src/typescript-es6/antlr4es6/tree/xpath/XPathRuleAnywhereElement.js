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
import { Override } from "../../Decorators";
import { Trees } from "../Trees";
import { XPathElement } from "./XPathElement";
/**
 * Either `ID` at start of path or `...//ID` in middle of path.
 */
export class XPathRuleAnywhereElement extends XPathElement {
    constructor(ruleName, ruleIndex) {
        super(ruleName);
        this.ruleIndex = ruleIndex;
    }
    evaluate(t) {
        return Trees.findAllRuleNodes(t, this.ruleIndex);
    }
}
__decorate([
    Override
], XPathRuleAnywhereElement.prototype, "evaluate", null);
