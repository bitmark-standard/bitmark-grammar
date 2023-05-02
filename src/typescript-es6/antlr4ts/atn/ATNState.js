"use strict";
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
exports.__esModule = true;
exports.ATNState = void 0;
var Decorators_1 = require("../Decorators");
var INITIAL_NUM_TRANSITIONS = 4;
/**
 * The following images show the relation of states and
 * {@link ATNState#transitions} for various grammar constructs.
 *
 * * Solid edges marked with an &#0949; indicate a required
 *   {@link EpsilonTransition}.
 *
 * * Dashed edges indicate locations where any transition derived from
 *   {@link Transition} might appear.
 *
 * * Dashed nodes are place holders for either a sequence of linked
 *   {@link BasicState} states or the inclusion of a block representing a nested
 *   construct in one of the forms below.
 *
 * * Nodes showing multiple outgoing alternatives with a `...` support
 *   any number of alternatives (one or more). Nodes without the `...` only
 *   support the exact number of alternatives shown in the diagram.
 *
 * <h2>Basic Blocks</h2>
 *
 * <h3>Rule</h3>
 *
 * <embed src="images/Rule.svg" type="image/svg+xml"/>
 *
 * <h3>Block of 1 or more alternatives</h3>
 *
 * <embed src="images/Block.svg" type="image/svg+xml"/>
 *
 * <h2>Greedy Loops</h2>
 *
 * <h3>Greedy Closure: `(...)*`</h3>
 *
 * <embed src="images/ClosureGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Greedy Positive Closure: `(...)+`</h3>
 *
 * <embed src="images/PositiveClosureGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Greedy Optional: `(...)?`</h3>
 *
 * <embed src="images/OptionalGreedy.svg" type="image/svg+xml"/>
 *
 * <h2>Non-Greedy Loops</h2>
 *
 * <h3>Non-Greedy Closure: `(...)*?`</h3>
 *
 * <embed src="images/ClosureNonGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Non-Greedy Positive Closure: `(...)+?`</h3>
 *
 * <embed src="images/PositiveClosureNonGreedy.svg" type="image/svg+xml"/>
 *
 * <h3>Non-Greedy Optional: `(...)??`</h3>
 *
 * <embed src="images/OptionalNonGreedy.svg" type="image/svg+xml"/>
 */
var ATNState = /** @class */ (function () {
    function ATNState() {
        this.stateNumber = ATNState.INVALID_STATE_NUMBER;
        this.ruleIndex = 0; // at runtime, we don't have Rule objects
        this.epsilonOnlyTransitions = false;
        /** Track the transitions emanating from this ATN state. */
        this.transitions = [];
        this.optimizedTransitions = this.transitions;
    }
    /**
     * Gets the state number.
     *
     * @returns the state number
     */
    ATNState.prototype.getStateNumber = function () {
        return this.stateNumber;
    };
    Object.defineProperty(ATNState.prototype, "nonStopStateNumber", {
        /**
         * For all states except {@link RuleStopState}, this returns the state
         * number. Returns -1 for stop states.
         *
         * @returns -1 for {@link RuleStopState}, otherwise the state number
         */
        get: function () {
            return this.getStateNumber();
        },
        enumerable: false,
        configurable: true
    });
    ATNState.prototype.hashCode = function () {
        return this.stateNumber;
    };
    ATNState.prototype.equals = function (o) {
        // are these states same object?
        if (o instanceof ATNState) {
            return this.stateNumber === o.stateNumber;
        }
        return false;
    };
    Object.defineProperty(ATNState.prototype, "isNonGreedyExitState", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    ATNState.prototype.toString = function () {
        return String(this.stateNumber);
    };
    ATNState.prototype.getTransitions = function () {
        return this.transitions.slice(0);
    };
    Object.defineProperty(ATNState.prototype, "numberOfTransitions", {
        get: function () {
            return this.transitions.length;
        },
        enumerable: false,
        configurable: true
    });
    ATNState.prototype.addTransition = function (e, index) {
        if (this.transitions.length === 0) {
            this.epsilonOnlyTransitions = e.isEpsilon;
        }
        else if (this.epsilonOnlyTransitions !== e.isEpsilon) {
            this.epsilonOnlyTransitions = false;
            throw new Error("ATN state " + this.stateNumber + " has both epsilon and non-epsilon transitions.");
        }
        this.transitions.splice(index !== undefined ? index : this.transitions.length, 0, e);
    };
    ATNState.prototype.transition = function (i) {
        return this.transitions[i];
    };
    ATNState.prototype.setTransition = function (i, e) {
        this.transitions[i] = e;
    };
    ATNState.prototype.removeTransition = function (index) {
        return this.transitions.splice(index, 1)[0];
    };
    Object.defineProperty(ATNState.prototype, "onlyHasEpsilonTransitions", {
        get: function () {
            return this.epsilonOnlyTransitions;
        },
        enumerable: false,
        configurable: true
    });
    ATNState.prototype.setRuleIndex = function (ruleIndex) {
        this.ruleIndex = ruleIndex;
    };
    Object.defineProperty(ATNState.prototype, "isOptimized", {
        get: function () {
            return this.optimizedTransitions !== this.transitions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ATNState.prototype, "numberOfOptimizedTransitions", {
        get: function () {
            return this.optimizedTransitions.length;
        },
        enumerable: false,
        configurable: true
    });
    ATNState.prototype.getOptimizedTransition = function (i) {
        return this.optimizedTransitions[i];
    };
    ATNState.prototype.addOptimizedTransition = function (e) {
        if (!this.isOptimized) {
            this.optimizedTransitions = new Array();
        }
        this.optimizedTransitions.push(e);
    };
    ATNState.prototype.setOptimizedTransition = function (i, e) {
        if (!this.isOptimized) {
            throw new Error("This ATNState is not optimized.");
        }
        this.optimizedTransitions[i] = e;
    };
    ATNState.prototype.removeOptimizedTransition = function (i) {
        if (!this.isOptimized) {
            throw new Error("This ATNState is not optimized.");
        }
        this.optimizedTransitions.splice(i, 1);
    };
    __decorate([
        Decorators_1.Override
    ], ATNState.prototype, "hashCode");
    __decorate([
        Decorators_1.Override
    ], ATNState.prototype, "equals");
    __decorate([
        Decorators_1.Override
    ], ATNState.prototype, "toString");
    return ATNState;
}());
exports.ATNState = ATNState;
(function (ATNState) {
    ATNState.INVALID_STATE_NUMBER = -1;
})(ATNState = exports.ATNState || (exports.ATNState = {}));
exports.ATNState = ATNState;
