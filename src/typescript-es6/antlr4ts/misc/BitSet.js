"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
exports.__esModule = true;
exports.BitSet = void 0;
var util = require("util");
var MurmurHash_1 = require("./MurmurHash");
/**
 * Private empty array used to construct empty BitSets
 */
var EMPTY_DATA = new Uint16Array(0);
/**
 * Gets the word index of the `UInt16` element in `BitSet.data` containing the bit with the specified index.
 */
function getIndex(bitNumber) {
    return bitNumber >>> 4;
}
/**
 * Convert a word index into the bit index of the LSB of that word
 */
function unIndex(n) {
    return n * 16;
}
/**
 * Get's the bit number of the least signficant bit set LSB which is set in a word non-zero word;
 * Bit numbers run from LSB to MSB starting with 0.
 */
function findLSBSet(word) {
    var bit = 1;
    for (var i = 0; i < 16; i++) {
        if ((word & bit) !== 0) {
            return i;
        }
        bit = (bit << 1) >>> 0;
    }
    throw new RangeError("No specified bit found");
}
function findMSBSet(word) {
    var bit = (1 << 15) >>> 0;
    for (var i = 15; i >= 0; i--) {
        if ((word & bit) !== 0) {
            return i;
        }
        bit = bit >>> 1;
    }
    throw new RangeError("No specified bit found");
}
/**
 * Gets a 16-bit mask with bit numbers fromBit to toBit (inclusive) set.
 * Bit numbers run from LSB to MSB starting with 0.
 */
function bitsFor(fromBit, toBit) {
    fromBit &= 0xF;
    toBit &= 0xF;
    if (fromBit === toBit) {
        return (1 << fromBit) >>> 0;
    }
    return ((0xFFFF >>> (15 - toBit)) ^ (0xFFFF >>> (16 - fromBit)));
}
/**
 * A lookup table for number of set bits in a 16-bit integer.   This is used to quickly count the cardinality (number of unique elements) of a BitSet.
 */
var POP_CNT = new Uint8Array(65536);
for (var i = 0; i < 16; i++) {
    var stride = (1 << i) >>> 0;
    var index = 0;
    while (index < POP_CNT.length) {
        // skip the numbers where the bit isn't set
        index += stride;
        // increment the ones where the bit is set
        for (var j = 0; j < stride; j++) {
            POP_CNT[index]++;
            index++;
        }
    }
}
var BitSet = /** @class */ (function () {
    /*
    ** constructor implementation
    */
    function BitSet(arg) {
        if (!arg) {
            // covering the case of unspecified and nbits===0
            this.data = EMPTY_DATA;
        }
        else if (typeof arg === "number") {
            if (arg < 0) {
                throw new RangeError("nbits cannot be negative");
            }
            else {
                this.data = new Uint16Array(getIndex(arg - 1) + 1);
            }
        }
        else {
            if (arg instanceof BitSet) {
                this.data = arg.data.slice(0); // Clone the data
            }
            else {
                var max = -1;
                for (var _i = 0, arg_1 = arg; _i < arg_1.length; _i++) {
                    var v = arg_1[_i];
                    if (max < v) {
                        max = v;
                    }
                }
                this.data = new Uint16Array(getIndex(max - 1) + 1);
                for (var _a = 0, arg_2 = arg; _a < arg_2.length; _a++) {
                    var v = arg_2[_a];
                    this.set(v);
                }
            }
        }
    }
    /**
     * Performs a logical **AND** of this target bit set with the argument bit set. This bit set is modified so that
     * each bit in it has the value `true` if and only if it both initially had the value `true` and the corresponding
     * bit in the bit set argument also had the value `true`.
     */
    BitSet.prototype.and = function (set) {
        var data = this.data;
        var other = set.data;
        var words = Math.min(data.length, other.length);
        var lastWord = -1; // Keep track of index of last non-zero word
        for (var i = 0; i < words; i++) {
            var value = data[i] &= other[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA;
        }
        if (lastWord < data.length - 1) {
            this.data = data.slice(0, lastWord + 1);
        }
    };
    /**
     * Clears all of the bits in this `BitSet` whose corresponding bit is set in the specified `BitSet`.
     */
    BitSet.prototype.andNot = function (set) {
        var data = this.data;
        var other = set.data;
        var words = Math.min(data.length, other.length);
        var lastWord = -1; // Keep track of index of last non-zero word
        for (var i = 0; i < words; i++) {
            var value = data[i] &= (other[i] ^ 0xFFFF);
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA;
        }
        if (lastWord < data.length - 1) {
            this.data = data.slice(0, lastWord + 1);
        }
    };
    /**
     * Returns the number of bits set to `true` in this `BitSet`.
     */
    BitSet.prototype.cardinality = function () {
        if (this.isEmpty) {
            return 0;
        }
        var data = this.data;
        var length = data.length;
        var result = 0;
        for (var i = 0; i < length; i++) {
            result += POP_CNT[data[i]];
        }
        return result;
    };
    BitSet.prototype.clear = function (fromIndex, toIndex) {
        if (fromIndex == null) {
            this.data.fill(0);
        }
        else if (toIndex == null) {
            this.set(fromIndex, false);
        }
        else {
            this.set(fromIndex, toIndex, false);
        }
    };
    BitSet.prototype.flip = function (fromIndex, toIndex) {
        if (toIndex == null) {
            toIndex = fromIndex;
        }
        if (fromIndex < 0 || toIndex < fromIndex) {
            throw new RangeError();
        }
        var word = getIndex(fromIndex);
        var lastWord = getIndex(toIndex);
        if (word === lastWord) {
            this.data[word] ^= bitsFor(fromIndex, toIndex);
        }
        else {
            this.data[word++] ^= bitsFor(fromIndex, 15);
            while (word < lastWord) {
                this.data[word++] ^= 0xFFFF;
            }
            this.data[word++] ^= bitsFor(0, toIndex);
        }
    };
    BitSet.prototype.get = function (fromIndex, toIndex) {
        if (toIndex === undefined) {
            return !!(this.data[getIndex(fromIndex)] & bitsFor(fromIndex, fromIndex));
        }
        else {
            // return a BitSet
            var result = new BitSet(toIndex + 1);
            for (var i = fromIndex; i <= toIndex; i++) {
                result.set(i, this.get(i));
            }
            return result;
        }
    };
    /**
     * Returns true if the specified `BitSet` has any bits set to `true` that are also set to `true` in this `BitSet`.
     *
     * @param set `BitSet` to intersect with
     */
    BitSet.prototype.intersects = function (set) {
        var smallerLength = Math.min(this.length(), set.length());
        if (smallerLength === 0) {
            return false;
        }
        var bound = getIndex(smallerLength - 1);
        for (var i = 0; i <= bound; i++) {
            if ((this.data[i] & set.data[i]) !== 0) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(BitSet.prototype, "isEmpty", {
        /**
         * Returns true if this `BitSet` contains no bits that are set to `true`.
         */
        get: function () {
            return this.length() === 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the "logical size" of this `BitSet`: the index of the highest set bit in the `BitSet` plus one. Returns
     * zero if the `BitSet` contains no set bits.
     */
    BitSet.prototype.length = function () {
        if (!this.data.length) {
            return 0;
        }
        return this.previousSetBit(unIndex(this.data.length) - 1) + 1;
    };
    /**
     * Returns the index of the first bit that is set to `false` that occurs on or after the specified starting index,
     * If no such bit exists then `-1` is returned.
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is negative
     */
    BitSet.prototype.nextClearBit = function (fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        var data = this.data;
        var length = data.length;
        var word = getIndex(fromIndex);
        if (word > length) {
            return -1;
        }
        var ignore = 0xFFFF ^ bitsFor(fromIndex, 15);
        if ((data[word] | ignore) === 0xFFFF) {
            word++;
            ignore = 0;
            for (; word < length; word++) {
                if (data[word] !== 0xFFFF) {
                    break;
                }
            }
            if (word === length) {
                // Hit the end
                return -1;
            }
        }
        return unIndex(word) + findLSBSet((data[word] | ignore) ^ 0xFFFF);
    };
    /**
     * Returns the index of the first bit that is set to `true` that occurs on or after the specified starting index.
     * If no such bit exists then `-1` is returned.
     *
     * To iterate over the `true` bits in a `BitSet`, use the following loop:
     *
     * ```
     * for (let i = bs.nextSetBit(0); i >= 0; i = bs.nextSetBit(i + 1)) {
     *   // operate on index i here
     * }
     * ```
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is negative
     */
    BitSet.prototype.nextSetBit = function (fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        var data = this.data;
        var length = data.length;
        var word = getIndex(fromIndex);
        if (word > length) {
            return -1;
        }
        var mask = bitsFor(fromIndex, 15);
        if ((data[word] & mask) === 0) {
            word++;
            mask = 0xFFFF;
            for (; word < length; word++) {
                if (data[word] !== 0) {
                    break;
                }
            }
            if (word >= length) {
                return -1;
            }
        }
        return unIndex(word) + findLSBSet(data[word] & mask);
    };
    /**
     * Performs a logical **OR** of this bit set with the bit set argument. This bit set is modified so that a bit in it
     * has the value `true` if and only if it either already had the value `true` or the corresponding bit in the bit
     * set argument has the value `true`.
     */
    BitSet.prototype.or = function (set) {
        var data = this.data;
        var other = set.data;
        var minWords = Math.min(data.length, other.length);
        var words = Math.max(data.length, other.length);
        var dest = data.length === words ? data : new Uint16Array(words);
        var lastWord = -1;
        // Or those words both sets have in common
        for (var i = 0; i < minWords; i++) {
            var value = dest[i] = data[i] | other[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        // Copy words from larger set (if there is one)
        var longer = data.length > other.length ? data : other;
        for (var i = minWords; i < words; i++) {
            var value = dest[i] = longer[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA;
        }
        else if (dest.length === lastWord + 1) {
            this.data = dest;
        }
        else {
            this.data = dest.slice(0, lastWord);
        }
    };
    /**
     * Returns the index of the nearest bit that is set to `false` that occurs on or before the specified starting
     * index. If no such bit exists, or if `-1` is given as the starting index, then `-1` is returned.
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is less than `-1`
     */
    BitSet.prototype.previousClearBit = function (fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        var data = this.data;
        var length = data.length;
        var word = getIndex(fromIndex);
        if (word >= length) {
            word = length - 1;
        }
        var ignore = 0xFFFF ^ bitsFor(0, fromIndex);
        if ((data[word] | ignore) === 0xFFFF) {
            ignore = 0;
            word--;
            for (; word >= 0; word--) {
                if (data[word] !== 0xFFFF) {
                    break;
                }
            }
            if (word < 0) {
                // Hit the end
                return -1;
            }
        }
        return unIndex(word) + findMSBSet((data[word] | ignore) ^ 0xFFFF);
    };
    /**
     * Returns the index of the nearest bit that is set to `true` that occurs on or before the specified starting index.
     * If no such bit exists, or if `-1` is given as the starting index, then `-1` is returned.
     *
     * To iterate over the `true` bits in a `BitSet`, use the following loop:
     *
     * ```
     * for (let i = bs.length(); (i = bs.previousSetBit(i-1)) >= 0; ) {
     *   // operate on index i here
     * }
     * ```
     *
     * @param fromIndex the index to start checking from (inclusive)
     *
     * @throws RangeError if the specified index is less than `-1`
     */
    BitSet.prototype.previousSetBit = function (fromIndex) {
        if (fromIndex < 0) {
            throw new RangeError("fromIndex cannot be negative");
        }
        var data = this.data;
        var length = data.length;
        var word = getIndex(fromIndex);
        if (word >= length) {
            word = length - 1;
        }
        var mask = bitsFor(0, fromIndex);
        if ((data[word] & mask) === 0) {
            word--;
            mask = 0xFFFF;
            for (; word >= 0; word--) {
                if (data[word] !== 0) {
                    break;
                }
            }
            if (word < 0) {
                return -1;
            }
        }
        return unIndex(word) + findMSBSet(data[word] & mask);
    };
    BitSet.prototype.set = function (fromIndex, toIndex, value) {
        if (toIndex === undefined) {
            toIndex = fromIndex;
            value = true;
        }
        else if (typeof toIndex === "boolean") {
            value = toIndex;
            toIndex = fromIndex;
        }
        if (value === undefined) {
            value = true;
        }
        if (fromIndex < 0 || fromIndex > toIndex) {
            throw new RangeError();
        }
        var word = getIndex(fromIndex);
        var lastWord = getIndex(toIndex);
        if (value && lastWord >= this.data.length) {
            // Grow array "just enough" for bits we need to set
            var temp_1 = new Uint16Array(lastWord + 1);
            this.data.forEach(function (value, index) { return temp_1[index] = value; });
            this.data = temp_1;
        }
        else if (!value) {
            // But there is no need to grow array to clear bits.
            if (word >= this.data.length) {
                // Early exit
                return;
            }
            if (lastWord >= this.data.length) {
                // Adjust work to fit array
                lastWord = this.data.length - 1;
                toIndex = this.data.length * 16 - 1;
            }
        }
        if (word === lastWord) {
            this._setBits(word, value, bitsFor(fromIndex, toIndex));
        }
        else {
            this._setBits(word++, value, bitsFor(fromIndex, 15));
            while (word < lastWord) {
                this.data[word++] = value ? 0xFFFF : 0;
            }
            this._setBits(word, value, bitsFor(0, toIndex));
        }
    };
    BitSet.prototype._setBits = function (word, value, mask) {
        if (value) {
            this.data[word] |= mask;
        }
        else {
            this.data[word] &= 0xFFFF ^ mask;
        }
    };
    Object.defineProperty(BitSet.prototype, "size", {
        /**
         * Returns the number of bits of space actually in use by this `BitSet` to represent bit values. The maximum element
         * in the set is the size - 1st element.
         */
        get: function () {
            return this.data.byteLength * 8;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a new byte array containing all the bits in this bit set.
     *
     * More precisely, if
     * `let bytes = s.toByteArray();`
     * then `bytes.length === (s.length()+7)/8` and `s.get(n) === ((bytes[n/8] & (1<<(n%8))) != 0)` for all
     * `n < 8 * bytes.length`.
     */
    // toByteArray(): Int8Array {
    // 	throw new Error("NOT IMPLEMENTED");
    // }
    /**
     * Returns a new integer array containing all the bits in this bit set.
     *
     * More precisely, if
     * `let integers = s.toIntegerArray();`
     * then `integers.length === (s.length()+31)/32` and `s.get(n) === ((integers[n/32] & (1<<(n%32))) != 0)` for all
     * `n < 32 * integers.length`.
     */
    // toIntegerArray(): Int32Array {
    // 	throw new Error("NOT IMPLEMENTED");
    // }
    BitSet.prototype.hashCode = function () {
        return MurmurHash_1.MurmurHash.hashCode(this.data, 22);
    };
    /**
     * Compares this object against the specified object. The result is `true` if and only if the argument is not
     * `undefined` and is a `Bitset` object that has exactly the same set of bits set to `true` as this bit set. That
     * is, for every nonnegative index `k`,
     *
     * ```
     * ((BitSet)obj).get(k) == this.get(k)
     * ```
     *
     * must be true. The current sizes of the two bit sets are not compared.
     */
    BitSet.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof BitSet)) {
            return false;
        }
        var len = this.length();
        if (len !== obj.length()) {
            return false;
        }
        if (len === 0) {
            return true;
        }
        var bound = getIndex(len - 1);
        for (var i = 0; i <= bound; i++) {
            if (this.data[i] !== obj.data[i]) {
                return false;
            }
        }
        return true;
    };
    /**
     * Returns a string representation of this bit set. For every index for which this `BitSet` contains a bit in the
     * set state, the decimal representation of that index is included in the result. Such indices are listed in order
     * from lowest to highest, separated by ", " (a comma and a space) and surrounded by braces, resulting in the usual
     * mathematical notation for a set of integers.
     *
     * Example:
     *
     *     BitSet drPepper = new BitSet();
     *
     * Now `drPepper.toString()` returns `"{}"`.
     *
     *     drPepper.set(2);
     *
     * Now `drPepper.toString()` returns `"{2}"`.
     *
     *     drPepper.set(4);
     *     drPepper.set(10);
     *
     * Now `drPepper.toString()` returns `"{2, 4, 10}"`.
     */
    BitSet.prototype.toString = function () {
        var result = "{";
        var first = true;
        for (var i = this.nextSetBit(0); i >= 0; i = this.nextSetBit(i + 1)) {
            if (first) {
                first = false;
            }
            else {
                result += ", ";
            }
            result += i;
        }
        result += "}";
        return result;
    };
    // static valueOf(bytes: Int8Array): BitSet;
    // static valueOf(buffer: ArrayBuffer): BitSet;
    // static valueOf(integers: Int32Array): BitSet;
    // static valueOf(data: Int8Array | Int32Array | ArrayBuffer): BitSet {
    // 	throw new Error("NOT IMPLEMENTED");
    // }
    /**
     * Performs a logical **XOR** of this bit set with the bit set argument. This bit set is modified so that a bit in
     * it has the value `true` if and only if one of the following statements holds:
     *
     * * The bit initially has the value `true`, and the corresponding bit in the argument has the value `false`.
     * * The bit initially has the value `false`, and the corresponding bit in the argument has the value `true`.
     */
    BitSet.prototype.xor = function (set) {
        var data = this.data;
        var other = set.data;
        var minWords = Math.min(data.length, other.length);
        var words = Math.max(data.length, other.length);
        var dest = data.length === words ? data : new Uint16Array(words);
        var lastWord = -1;
        // Xor those words both sets have in common
        for (var i = 0; i < minWords; i++) {
            var value = dest[i] = data[i] ^ other[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        // Copy words from larger set (if there is one)
        var longer = data.length > other.length ? data : other;
        for (var i = minWords; i < words; i++) {
            var value = dest[i] = longer[i];
            if (value !== 0) {
                lastWord = i;
            }
        }
        if (lastWord === -1) {
            this.data = EMPTY_DATA;
        }
        else if (dest.length === lastWord + 1) {
            this.data = dest;
        }
        else {
            this.data = dest.slice(0, lastWord + 1);
        }
    };
    BitSet.prototype.clone = function () {
        return new BitSet(this);
    };
    BitSet.prototype[Symbol.iterator] = function () {
        return new BitSetIterator(this.data);
    };
    // Overrides formatting for nodejs assert etc.
    BitSet.prototype[util.inspect.custom] = function () {
        return "BitSet " + this.toString();
    };
    return BitSet;
}());
exports.BitSet = BitSet;
var BitSetIterator = /** @class */ (function () {
    function BitSetIterator(data) {
        this.data = data;
        this.index = 0;
        this.mask = 0xFFFF;
    }
    BitSetIterator.prototype.next = function () {
        while (this.index < this.data.length) {
            var bits = this.data[this.index] & this.mask;
            if (bits !== 0) {
                var bitNumber = unIndex(this.index) + findLSBSet(bits);
                this.mask = bitsFor(bitNumber + 1, 15);
                return { done: false, value: bitNumber };
            }
            this.index++;
            this.mask = 0xFFFF;
        }
        return { done: true, value: -1 };
    };
    BitSetIterator.prototype[Symbol.iterator] = function () { return this; };
    return BitSetIterator;
}());
