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
exports.Interval = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:40.7402214-07:00
var Decorators_1 = require("../Decorators");
var INTERVAL_POOL_MAX_VALUE = 1000;
/** An immutable inclusive interval a..b */
var Interval = /** @class */ (function () {
    /**
     * @param a The start of the interval
     * @param b The end of the interval (inclusive)
     */
    function Interval(a, b) {
        this.a = a;
        this.b = b;
    }
    Object.defineProperty(Interval, "INVALID", {
        get: function () {
            return Interval._INVALID;
        },
        enumerable: false,
        configurable: true
    });
    /** Interval objects are used readonly so share all with the
     *  same single value a==b up to some max size.  Use an array as a perfect hash.
     *  Return shared object for 0..INTERVAL_POOL_MAX_VALUE or a new
     *  Interval object with a..a in it.  On Java.g4, 218623 IntervalSets
     *  have a..a (set with 1 element).
     */
    Interval.of = function (a, b) {
        // cache just a..a
        if (a !== b || a < 0 || a > INTERVAL_POOL_MAX_VALUE) {
            return new Interval(a, b);
        }
        if (Interval.cache[a] == null) {
            Interval.cache[a] = new Interval(a, a);
        }
        return Interval.cache[a];
    };
    Object.defineProperty(Interval.prototype, "length", {
        /** return number of elements between a and b inclusively. x..x is length 1.
         *  if b &lt; a, then length is 0.  9..10 has length 2.
         */
        get: function () {
            if (this.b < this.a) {
                return 0;
            }
            return this.b - this.a + 1;
        },
        enumerable: false,
        configurable: true
    });
    Interval.prototype.equals = function (o) {
        if (o === this) {
            return true;
        }
        else if (!(o instanceof Interval)) {
            return false;
        }
        return this.a === o.a && this.b === o.b;
    };
    Interval.prototype.hashCode = function () {
        var hash = 23;
        hash = hash * 31 + this.a;
        hash = hash * 31 + this.b;
        return hash;
    };
    /** Does this start completely before other? Disjoint */
    Interval.prototype.startsBeforeDisjoint = function (other) {
        return this.a < other.a && this.b < other.a;
    };
    /** Does this start at or before other? Nondisjoint */
    Interval.prototype.startsBeforeNonDisjoint = function (other) {
        return this.a <= other.a && this.b >= other.a;
    };
    /** Does this.a start after other.b? May or may not be disjoint */
    Interval.prototype.startsAfter = function (other) {
        return this.a > other.a;
    };
    /** Does this start completely after other? Disjoint */
    Interval.prototype.startsAfterDisjoint = function (other) {
        return this.a > other.b;
    };
    /** Does this start after other? NonDisjoint */
    Interval.prototype.startsAfterNonDisjoint = function (other) {
        return this.a > other.a && this.a <= other.b; // this.b>=other.b implied
    };
    /** Are both ranges disjoint? I.e., no overlap? */
    Interval.prototype.disjoint = function (other) {
        return this.startsBeforeDisjoint(other) || this.startsAfterDisjoint(other);
    };
    /** Are two intervals adjacent such as 0..41 and 42..42? */
    Interval.prototype.adjacent = function (other) {
        return this.a === other.b + 1 || this.b === other.a - 1;
    };
    Interval.prototype.properlyContains = function (other) {
        return other.a >= this.a && other.b <= this.b;
    };
    /** Return the interval computed from combining this and other */
    Interval.prototype.union = function (other) {
        return Interval.of(Math.min(this.a, other.a), Math.max(this.b, other.b));
    };
    /** Return the interval in common between this and o */
    Interval.prototype.intersection = function (other) {
        return Interval.of(Math.max(this.a, other.a), Math.min(this.b, other.b));
    };
    /** Return the interval with elements from `this` not in `other`;
     *  `other` must not be totally enclosed (properly contained)
     *  within `this`, which would result in two disjoint intervals
     *  instead of the single one returned by this method.
     */
    Interval.prototype.differenceNotProperlyContained = function (other) {
        var diff;
        if (other.startsBeforeNonDisjoint(this)) {
            // other.a to left of this.a (or same)
            diff = Interval.of(Math.max(this.a, other.b + 1), this.b);
        }
        else if (other.startsAfterNonDisjoint(this)) {
            // other.a to right of this.a
            diff = Interval.of(this.a, other.a - 1);
        }
        return diff;
    };
    Interval.prototype.toString = function () {
        return this.a + ".." + this.b;
    };
    Interval._INVALID = new Interval(-1, -2);
    Interval.cache = new Array(INTERVAL_POOL_MAX_VALUE + 1);
    __decorate([
        Decorators_1.Override
    ], Interval.prototype, "equals");
    __decorate([
        Decorators_1.Override
    ], Interval.prototype, "hashCode");
    __decorate([
        Decorators_1.Override
    ], Interval.prototype, "toString");
    return Interval;
}());
exports.Interval = Interval;
