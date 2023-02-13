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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NotNull } from "../Decorators";
import { ParserRuleContext } from "../ParserRuleContext";
/**
 *
 * @author Sam Harwell
 */
let SimulatorState = class SimulatorState {
    constructor(outerContext, s0, useContext, remainingOuterContext) {
        this.outerContext = outerContext != null ? outerContext : ParserRuleContext.emptyContext();
        this.s0 = s0;
        this.useContext = useContext;
        this.remainingOuterContext = remainingOuterContext;
    }
};
SimulatorState = __decorate([
    __param(1, NotNull)
], SimulatorState);
export { SimulatorState };
