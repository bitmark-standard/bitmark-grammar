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
// ConvertTo-TS run at 2016-10-04T11:26:48.1433686-07:00
import { Interval } from "../misc/Interval";
import { Override } from "../Decorators";
import { Token } from "../Token";
export class TerminalNode {
    constructor(symbol) {
        this._symbol = symbol;
    }
    getChild(i) {
        throw new RangeError("Terminal Node has no children.");
    }
    get symbol() {
        return this._symbol;
    }
    get parent() {
        return this._parent;
    }
    setParent(parent) {
        this._parent = parent;
    }
    get payload() {
        return this._symbol;
    }
    get sourceInterval() {
        let tokenIndex = this._symbol.tokenIndex;
        return new Interval(tokenIndex, tokenIndex);
    }
    get childCount() {
        return 0;
    }
    accept(visitor) {
        return visitor.visitTerminal(this);
    }
    get text() {
        return this._symbol.text || "";
    }
    toStringTree(parser) {
        return this.toString();
    }
    toString() {
        if (this._symbol.type === Token.EOF) {
            return "<EOF>";
        }
        return this._symbol.text || "";
    }
}
__decorate([
    Override
], TerminalNode.prototype, "getChild", null);
__decorate([
    Override
], TerminalNode.prototype, "parent", null);
__decorate([
    Override
], TerminalNode.prototype, "setParent", null);
__decorate([
    Override
], TerminalNode.prototype, "payload", null);
__decorate([
    Override
], TerminalNode.prototype, "sourceInterval", null);
__decorate([
    Override
], TerminalNode.prototype, "childCount", null);
__decorate([
    Override
], TerminalNode.prototype, "accept", null);
__decorate([
    Override
], TerminalNode.prototype, "text", null);
__decorate([
    Override
], TerminalNode.prototype, "toStringTree", null);
__decorate([
    Override
], TerminalNode.prototype, "toString", null);
