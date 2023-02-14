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
// ConvertTo-TS run at 2016-10-04T11:26:37.7099201-07:00
import { ATNStateType } from "./ATNStateType";
import { BitSet } from "../misc/BitSet";
import { DecisionState } from "./DecisionState";
import { Override } from "../Decorators";
export class StarLoopEntryState extends DecisionState {
    constructor() {
        super(...arguments);
        /**
         * Indicates whether this state can benefit from a precedence DFA during SLL
         * decision making.
         *
         * This is a computed property that is calculated during ATN deserialization
         * and stored for use in {@link ParserATNSimulator} and
         * {@link ParserInterpreter}.
         *
         * @see `DFA.isPrecedenceDfa`
         */
        this.precedenceRuleDecision = false;
        /**
         * For precedence decisions, this set marks states *S* which have all
         * of the following characteristics:
         *
         * * One or more invocation sites of the current rule returns to
         *   *S*.
         * * The closure from *S* includes the current decision without
         *   passing through any rule invocations or stepping out of the current
         *   rule.
         *
         * This field is not used when {@link #precedenceRuleDecision} is
         * `false`.
         */
        this.precedenceLoopbackStates = new BitSet();
    }
    get stateType() {
        return ATNStateType.STAR_LOOP_ENTRY;
    }
}
__decorate([
    Override
], StarLoopEntryState.prototype, "stateType", null);
