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
// ConvertTo-TS run at 2016-10-04T11:26:37.7814046-07:00
import { ATNStateType } from "./ATNStateType";
import { DecisionState } from "./DecisionState";
import { Override } from "../Decorators";
/** The Tokens rule start state linking to each lexer rule start state */
export class TokensStartState extends DecisionState {
    get stateType() {
        return ATNStateType.TOKEN_START;
    }
}
__decorate([
    Override
], TokensStartState.prototype, "stateType", null);
