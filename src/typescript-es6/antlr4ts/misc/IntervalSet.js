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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.IntervalSet = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:40.8683480-07:00
var ArrayEqualityComparator_1 = require("./ArrayEqualityComparator");
var IntegerList_1 = require("./IntegerList");
var Interval_1 = require("./Interval");
var Lexer_1 = require("../Lexer");
var MurmurHash_1 = require("./MurmurHash");
var Decorators_1 = require("../Decorators");
var Token_1 = require("../Token");
/**
 * This class implements the {@link IntSet} backed by a sorted array of
 * non-overlapping intervals. It is particularly efficient for representing
 * large collections of numbers, where the majority of elements appear as part
 * of a sequential range of numbers that are all part of the set. For example,
 * the set { 1, 2, 3, 4, 7, 8 } may be represented as { [1, 4], [7, 8] }.
 *
 * This class is able to represent sets containing any combination of values in
 * the range {@link Integer#MIN_VALUE} to {@link Integer#MAX_VALUE}
 * (inclusive).
 */
var IntervalSet = /** @class */ (function () {
    function IntervalSet(intervals) {
        this.readonly = false;
        if (intervals != null) {
            this._intervals = intervals.slice(0);
        }
        else {
            this._intervals = [];
        }
    }
    Object.defineProperty(IntervalSet, "COMPLETE_CHAR_SET", {
        get: function () {
            if (IntervalSet._COMPLETE_CHAR_SET === undefined) {
                IntervalSet._COMPLETE_CHAR_SET = IntervalSet.of(Lexer_1.Lexer.MIN_CHAR_VALUE, Lexer_1.Lexer.MAX_CHAR_VALUE);
                IntervalSet._COMPLETE_CHAR_SET.setReadonly(true);
            }
            return IntervalSet._COMPLETE_CHAR_SET;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntervalSet, "EMPTY_SET", {
        get: function () {
            if (IntervalSet._EMPTY_SET == null) {
                IntervalSet._EMPTY_SET = new IntervalSet();
                IntervalSet._EMPTY_SET.setReadonly(true);
            }
            return IntervalSet._EMPTY_SET;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Create a set with all ints within range [a..b] (inclusive). If b is omitted, the set contains the single element
     * a.
     */
    IntervalSet.of = function (a, b) {
        if (b === void 0) { b = a; }
        var s = new IntervalSet();
        s.add(a, b);
        return s;
    };
    IntervalSet.prototype.clear = function () {
        if (this.readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        this._intervals.length = 0;
    };
    /** Add interval; i.e., add all integers from a to b to set.
     *  If b&lt;a, do nothing.
     *  Keep list in sorted order (by left range value).
     *  If overlap, combine ranges.  For example,
     *  If this is {1..5, 10..20}, adding 6..7 yields
     *  {1..5, 6..7, 10..20}.  Adding 4..8 yields {1..8, 10..20}.
     */
    IntervalSet.prototype.add = function (a, b) {
        if (b === void 0) { b = a; }
        this.addRange(Interval_1.Interval.of(a, b));
    };
    // copy on write so we can cache a..a intervals and sets of that
    IntervalSet.prototype.addRange = function (addition) {
        if (this.readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        //System.out.println("add "+addition+" to "+intervals.toString());
        if (addition.b < addition.a) {
            return;
        }
        // find position in list
        // Use iterators as we modify list in place
        for (var i = 0; i < this._intervals.length; i++) {
            var r = this._intervals[i];
            if (addition.equals(r)) {
                return;
            }
            if (addition.adjacent(r) || !addition.disjoint(r)) {
                // next to each other, make a single larger interval
                var bigger = addition.union(r);
                this._intervals[i] = bigger;
                // make sure we didn't just create an interval that
                // should be merged with next interval in list
                while (i < this._intervals.length - 1) {
                    i++;
                    var next = this._intervals[i];
                    if (!bigger.adjacent(next) && bigger.disjoint(next)) {
                        break;
                    }
                    // if we bump up against or overlap next, merge
                    // remove this one
                    this._intervals.splice(i, 1);
                    i--;
                    // move backwards to what we just set
                    this._intervals[i] = bigger.union(next);
                    // set to 3 merged ones
                }
                // first call to next after previous duplicates the result
                return;
            }
            if (addition.startsBeforeDisjoint(r)) {
                // insert before r
                this._intervals.splice(i, 0, addition);
                return;
            }
            // if disjoint and after r, a future iteration will handle it
        }
        // ok, must be after last interval (and disjoint from last interval)
        // just add it
        this._intervals.push(addition);
    };
    /** combine all sets in the array returned the or'd value */
    IntervalSet.or = function (sets) {
        var r = new IntervalSet();
        for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
            var s = sets_1[_i];
            r.addAll(s);
        }
        return r;
    };
    IntervalSet.prototype.addAll = function (set) {
        if (set == null) {
            return this;
        }
        if (set instanceof IntervalSet) {
            var other = set;
            // walk set and add each interval
            var n = other._intervals.length;
            for (var i = 0; i < n; i++) {
                var I = other._intervals[i];
                this.add(I.a, I.b);
            }
        }
        else {
            for (var _i = 0, _a = set.toArray(); _i < _a.length; _i++) {
                var value = _a[_i];
                this.add(value);
            }
        }
        return this;
    };
    IntervalSet.prototype.complementRange = function (minElement, maxElement) {
        return this.complement(IntervalSet.of(minElement, maxElement));
    };
    /** {@inheritDoc} */
    IntervalSet.prototype.complement = function (vocabulary) {
        if (vocabulary.isNil) {
            // nothing in common with null set
            return IntervalSet.EMPTY_SET;
        }
        var vocabularyIS;
        if (vocabulary instanceof IntervalSet) {
            vocabularyIS = vocabulary;
        }
        else {
            vocabularyIS = new IntervalSet();
            vocabularyIS.addAll(vocabulary);
        }
        return vocabularyIS.subtract(this);
    };
    IntervalSet.prototype.subtract = function (a) {
        if (a == null || a.isNil) {
            return new IntervalSet(this._intervals);
        }
        if (a instanceof IntervalSet) {
            return IntervalSet.subtract(this, a);
        }
        var other = new IntervalSet();
        other.addAll(a);
        return IntervalSet.subtract(this, other);
    };
    /**
     * Compute the set difference between two interval sets. The specific
     * operation is `left - right`.
     */
    IntervalSet.subtract = function (left, right) {
        if (left.isNil) {
            return new IntervalSet();
        }
        var result = new IntervalSet(left._intervals);
        if (right.isNil) {
            // right set has no elements; just return the copy of the current set
            return result;
        }
        var resultI = 0;
        var rightI = 0;
        while (resultI < result._intervals.length && rightI < right._intervals.length) {
            var resultInterval = result._intervals[resultI];
            var rightInterval = right._intervals[rightI];
            // operation: (resultInterval - rightInterval) and update indexes
            if (rightInterval.b < resultInterval.a) {
                rightI++;
                continue;
            }
            if (rightInterval.a > resultInterval.b) {
                resultI++;
                continue;
            }
            var beforeCurrent = void 0;
            var afterCurrent = void 0;
            if (rightInterval.a > resultInterval.a) {
                beforeCurrent = new Interval_1.Interval(resultInterval.a, rightInterval.a - 1);
            }
            if (rightInterval.b < resultInterval.b) {
                afterCurrent = new Interval_1.Interval(rightInterval.b + 1, resultInterval.b);
            }
            if (beforeCurrent) {
                if (afterCurrent) {
                    // split the current interval into two
                    result._intervals[resultI] = beforeCurrent;
                    result._intervals.splice(resultI + 1, 0, afterCurrent);
                    resultI++;
                    rightI++;
                    continue;
                }
                else {
                    // replace the current interval
                    result._intervals[resultI] = beforeCurrent;
                    resultI++;
                    continue;
                }
            }
            else {
                if (afterCurrent) {
                    // replace the current interval
                    result._intervals[resultI] = afterCurrent;
                    rightI++;
                    continue;
                }
                else {
                    // remove the current interval (thus no need to increment resultI)
                    result._intervals.splice(resultI, 1);
                    continue;
                }
            }
        }
        // If rightI reached right.intervals.size, no more intervals to subtract from result.
        // If resultI reached result.intervals.size, we would be subtracting from an empty set.
        // Either way, we are done.
        return result;
    };
    IntervalSet.prototype.or = function (a) {
        var o = new IntervalSet();
        o.addAll(this);
        o.addAll(a);
        return o;
    };
    /** {@inheritDoc} */
    IntervalSet.prototype.and = function (other) {
        if (other.isNil) { //|| !(other instanceof IntervalSet) ) {
            // nothing in common with null set
            return new IntervalSet();
        }
        var myIntervals = this._intervals;
        var theirIntervals = other._intervals;
        var intersection;
        var mySize = myIntervals.length;
        var theirSize = theirIntervals.length;
        var i = 0;
        var j = 0;
        // iterate down both interval lists looking for nondisjoint intervals
        while (i < mySize && j < theirSize) {
            var mine = myIntervals[i];
            var theirs = theirIntervals[j];
            //System.out.println("mine="+mine+" and theirs="+theirs);
            if (mine.startsBeforeDisjoint(theirs)) {
                // move this iterator looking for interval that might overlap
                i++;
            }
            else if (theirs.startsBeforeDisjoint(mine)) {
                // move other iterator looking for interval that might overlap
                j++;
            }
            else if (mine.properlyContains(theirs)) {
                // overlap, add intersection, get next theirs
                if (!intersection) {
                    intersection = new IntervalSet();
                }
                intersection.addRange(mine.intersection(theirs));
                j++;
            }
            else if (theirs.properlyContains(mine)) {
                // overlap, add intersection, get next mine
                if (!intersection) {
                    intersection = new IntervalSet();
                }
                intersection.addRange(mine.intersection(theirs));
                i++;
            }
            else if (!mine.disjoint(theirs)) {
                // overlap, add intersection
                if (!intersection) {
                    intersection = new IntervalSet();
                }
                intersection.addRange(mine.intersection(theirs));
                // Move the iterator of lower range [a..b], but not
                // the upper range as it may contain elements that will collide
                // with the next iterator. So, if mine=[0..115] and
                // theirs=[115..200], then intersection is 115 and move mine
                // but not theirs as theirs may collide with the next range
                // in thisIter.
                // move both iterators to next ranges
                if (mine.startsAfterNonDisjoint(theirs)) {
                    j++;
                }
                else if (theirs.startsAfterNonDisjoint(mine)) {
                    i++;
                }
            }
        }
        if (!intersection) {
            return new IntervalSet();
        }
        return intersection;
    };
    /** {@inheritDoc} */
    IntervalSet.prototype.contains = function (el) {
        var n = this._intervals.length;
        var l = 0;
        var r = n - 1;
        // Binary search for the element in the (sorted, disjoint) array of intervals.
        while (l <= r) {
            var m = (l + r) >> 1;
            var I = this._intervals[m];
            var a = I.a;
            var b = I.b;
            if (b < el) {
                l = m + 1;
            }
            else if (a > el) {
                r = m - 1;
            }
            else {
                // el >= a && el <= b
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(IntervalSet.prototype, "isNil", {
        /** {@inheritDoc} */
        get: function () {
            return this._intervals == null || this._intervals.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntervalSet.prototype, "maxElement", {
        /**
         * Returns the maximum value contained in the set if not isNil.
         *
         * @return the maximum value contained in the set.
         * @throws RangeError if set is empty
         */
        get: function () {
            if (this.isNil) {
                throw new RangeError("set is empty");
            }
            var last = this._intervals[this._intervals.length - 1];
            return last.b;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntervalSet.prototype, "minElement", {
        /**
         * Returns the minimum value contained in the set if not isNil.
         *
         * @return the minimum value contained in the set.
         * @throws RangeError if set is empty
         */
        get: function () {
            if (this.isNil) {
                throw new RangeError("set is empty");
            }
            return this._intervals[0].a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntervalSet.prototype, "intervals", {
        /** Return a list of Interval objects. */
        get: function () {
            return this._intervals;
        },
        enumerable: false,
        configurable: true
    });
    IntervalSet.prototype.hashCode = function () {
        var hash = MurmurHash_1.MurmurHash.initialize();
        for (var _i = 0, _a = this._intervals; _i < _a.length; _i++) {
            var I = _a[_i];
            hash = MurmurHash_1.MurmurHash.update(hash, I.a);
            hash = MurmurHash_1.MurmurHash.update(hash, I.b);
        }
        hash = MurmurHash_1.MurmurHash.finish(hash, this._intervals.length * 2);
        return hash;
    };
    /** Are two IntervalSets equal?  Because all intervals are sorted
     *  and disjoint, equals is a simple linear walk over both lists
     *  to make sure they are the same.  Interval.equals() is used
     *  by the List.equals() method to check the ranges.
     */
    IntervalSet.prototype.equals = function (o) {
        if (o == null || !(o instanceof IntervalSet)) {
            return false;
        }
        return ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this._intervals, o._intervals);
    };
    IntervalSet.prototype.toString = function (elemAreChar) {
        if (elemAreChar === void 0) { elemAreChar = false; }
        var buf = "";
        if (this._intervals == null || this._intervals.length === 0) {
            return "{}";
        }
        if (this.size > 1) {
            buf += "{";
        }
        var first = true;
        for (var _i = 0, _a = this._intervals; _i < _a.length; _i++) {
            var I = _a[_i];
            if (first) {
                first = false;
            }
            else {
                buf += ", ";
            }
            var a = I.a;
            var b = I.b;
            if (a === b) {
                if (a === Token_1.Token.EOF) {
                    buf += "<EOF>";
                }
                else if (elemAreChar) {
                    buf += "'" + String.fromCodePoint(a) + "'";
                }
                else {
                    buf += a;
                }
            }
            else {
                if (elemAreChar) {
                    buf += "'" + String.fromCodePoint(a) + "'..'" + String.fromCodePoint(b) + "'";
                }
                else {
                    buf += a + ".." + b;
                }
            }
        }
        if (this.size > 1) {
            buf += "}";
        }
        return buf;
    };
    IntervalSet.prototype.toStringVocabulary = function (vocabulary) {
        if (this._intervals == null || this._intervals.length === 0) {
            return "{}";
        }
        var buf = "";
        if (this.size > 1) {
            buf += "{";
        }
        var first = true;
        for (var _i = 0, _a = this._intervals; _i < _a.length; _i++) {
            var I = _a[_i];
            if (first) {
                first = false;
            }
            else {
                buf += ", ";
            }
            var a = I.a;
            var b = I.b;
            if (a === b) {
                buf += this.elementName(vocabulary, a);
            }
            else {
                for (var i = a; i <= b; i++) {
                    if (i > a) {
                        buf += ", ";
                    }
                    buf += this.elementName(vocabulary, i);
                }
            }
        }
        if (this.size > 1) {
            buf += "}";
        }
        return buf;
    };
    IntervalSet.prototype.elementName = function (vocabulary, a) {
        if (a === Token_1.Token.EOF) {
            return "<EOF>";
        }
        else if (a === Token_1.Token.EPSILON) {
            return "<EPSILON>";
        }
        else {
            return vocabulary.getDisplayName(a);
        }
    };
    Object.defineProperty(IntervalSet.prototype, "size", {
        get: function () {
            var n = 0;
            var numIntervals = this._intervals.length;
            if (numIntervals === 1) {
                var firstInterval = this._intervals[0];
                return firstInterval.b - firstInterval.a + 1;
            }
            for (var i = 0; i < numIntervals; i++) {
                var I = this._intervals[i];
                n += (I.b - I.a + 1);
            }
            return n;
        },
        enumerable: false,
        configurable: true
    });
    IntervalSet.prototype.toIntegerList = function () {
        var values = new IntegerList_1.IntegerList(this.size);
        var n = this._intervals.length;
        for (var i = 0; i < n; i++) {
            var I = this._intervals[i];
            var a = I.a;
            var b = I.b;
            for (var v = a; v <= b; v++) {
                values.add(v);
            }
        }
        return values;
    };
    IntervalSet.prototype.toSet = function () {
        var s = new Set();
        for (var _i = 0, _a = this._intervals; _i < _a.length; _i++) {
            var I = _a[_i];
            var a = I.a;
            var b = I.b;
            for (var v = a; v <= b; v++) {
                s.add(v);
            }
        }
        return s;
    };
    IntervalSet.prototype.toArray = function () {
        var values = new Array();
        var n = this._intervals.length;
        for (var i = 0; i < n; i++) {
            var I = this._intervals[i];
            var a = I.a;
            var b = I.b;
            for (var v = a; v <= b; v++) {
                values.push(v);
            }
        }
        return values;
    };
    IntervalSet.prototype.remove = function (el) {
        if (this.readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        var n = this._intervals.length;
        for (var i = 0; i < n; i++) {
            var I = this._intervals[i];
            var a = I.a;
            var b = I.b;
            if (el < a) {
                break; // list is sorted and el is before this interval; not here
            }
            // if whole interval x..x, rm
            if (el === a && el === b) {
                this._intervals.splice(i, 1);
                break;
            }
            // if on left edge x..b, adjust left
            if (el === a) {
                this._intervals[i] = Interval_1.Interval.of(I.a + 1, I.b);
                break;
            }
            // if on right edge a..x, adjust right
            if (el === b) {
                this._intervals[i] = Interval_1.Interval.of(I.a, I.b - 1);
                break;
            }
            // if in middle a..x..b, split interval
            if (el > a && el < b) { // found in this interval
                var oldb = I.b;
                this._intervals[i] = Interval_1.Interval.of(I.a, el - 1); // [a..x-1]
                this.add(el + 1, oldb); // add [x+1..b]
            }
        }
    };
    Object.defineProperty(IntervalSet.prototype, "isReadonly", {
        get: function () {
            return this.readonly;
        },
        enumerable: false,
        configurable: true
    });
    IntervalSet.prototype.setReadonly = function (readonly) {
        if (this.readonly && !readonly) {
            throw new Error("can't alter readonly IntervalSet");
        }
        this.readonly = readonly;
    };
    __decorate([
        Decorators_1.Override
    ], IntervalSet.prototype, "addAll");
    __decorate([
        Decorators_1.Override
    ], IntervalSet.prototype, "complement");
    __decorate([
        Decorators_1.Override
    ], IntervalSet.prototype, "subtract");
    __decorate([
        Decorators_1.Override
    ], IntervalSet.prototype, "or");
    __decorate([
        Decorators_1.Override
    ], IntervalSet.prototype, "and");
    __decorate([
        Decorators_1.Override
    ], IntervalSet.prototype, "contains");
    __decorate([
        Decorators_1.Override
    ], IntervalSet.prototype, "isNil");
    __decorate([
        Decorators_1.Override
    ], IntervalSet.prototype, "hashCode");
    __decorate([
        Decorators_1.Override
    ], IntervalSet.prototype, "equals");
    __decorate([
        __param(0, Decorators_1.NotNull)
    ], IntervalSet.prototype, "toStringVocabulary");
    __decorate([
        Decorators_1.NotNull,
        __param(0, Decorators_1.NotNull)
    ], IntervalSet.prototype, "elementName");
    __decorate([
        Decorators_1.Override
    ], IntervalSet.prototype, "size");
    __decorate([
        Decorators_1.Override
    ], IntervalSet.prototype, "remove");
    __decorate([
        Decorators_1.NotNull
    ], IntervalSet, "of");
    __decorate([
        Decorators_1.NotNull
    ], IntervalSet, "subtract");
    return IntervalSet;
}());
exports.IntervalSet = IntervalSet;
