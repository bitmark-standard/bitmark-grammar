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
exports.CodePointCharStream = void 0;
var assert = require("assert");
var IntStream_1 = require("./IntStream");
var Interval_1 = require("./misc/Interval");
var Decorators_1 = require("./Decorators");
/**
 * Alternative to {@link ANTLRInputStream} which treats the input
 * as a series of Unicode code points, instead of a series of UTF-16
 * code units.
 *
 * Use this if you need to parse input which potentially contains
 * Unicode values > U+FFFF.
 */
var CodePointCharStream = /** @class */ (function () {
    // Use the factory method {@link #fromBuffer(CodePointBuffer)} to
    // construct instances of this type.
    function CodePointCharStream(array, position, remaining, name) {
        // TODO
        assert(position === 0);
        this._array = array;
        this._size = remaining;
        this._name = name;
        this._position = 0;
    }
    Object.defineProperty(CodePointCharStream.prototype, "internalStorage", {
        get: function () {
            return this._array;
        },
        enumerable: false,
        configurable: true
    });
    CodePointCharStream.fromBuffer = function (codePointBuffer, name) {
        if (name === undefined || name.length === 0) {
            name = IntStream_1.IntStream.UNKNOWN_SOURCE_NAME;
        }
        // Java lacks generics on primitive types.
        //
        // To avoid lots of calls to virtual methods in the
        // very hot codepath of LA() below, we construct one
        // of three concrete subclasses.
        //
        // The concrete subclasses directly access the code
        // points stored in the underlying array (byte[],
        // char[], or int[]), so we can avoid lots of virtual
        // method calls to ByteBuffer.get(offset).
        return new CodePointCharStream(codePointBuffer.array(), codePointBuffer.position, codePointBuffer.remaining, name);
    };
    CodePointCharStream.prototype.consume = function () {
        if (this._size - this._position === 0) {
            assert(this.LA(1) === IntStream_1.IntStream.EOF);
            throw new RangeError("cannot consume EOF");
        }
        this._position++;
    };
    Object.defineProperty(CodePointCharStream.prototype, "index", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodePointCharStream.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    /** mark/release do nothing; we have entire buffer */
    CodePointCharStream.prototype.mark = function () {
        return -1;
    };
    CodePointCharStream.prototype.release = function (marker) {
        // No default implementation since this stream buffers the entire input
    };
    CodePointCharStream.prototype.seek = function (index) {
        this._position = index;
    };
    Object.defineProperty(CodePointCharStream.prototype, "sourceName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    CodePointCharStream.prototype.toString = function () {
        return this.getText(Interval_1.Interval.of(0, this.size - 1));
    };
    CodePointCharStream.prototype.LA = function (i) {
        var offset;
        switch (Math.sign(i)) {
            case -1:
                offset = this.index + i;
                if (offset < 0) {
                    return IntStream_1.IntStream.EOF;
                }
                return this._array[offset];
            case 0:
                // Undefined
                return 0;
            case 1:
                offset = this.index + i - 1;
                if (offset >= this.size) {
                    return IntStream_1.IntStream.EOF;
                }
                return this._array[offset];
        }
        throw new RangeError("Not reached");
    };
    /** Return the UTF-16 encoded string for the given interval */
    CodePointCharStream.prototype.getText = function (interval) {
        var startIdx = Math.min(interval.a, this.size);
        var len = Math.min(interval.b - interval.a + 1, this.size - startIdx);
        if (this._array instanceof Int32Array) {
            return String.fromCodePoint.apply(String, Array.from(this._array.subarray(startIdx, startIdx + len)));
        }
        else {
            return String.fromCharCode.apply(String, Array.from(this._array.subarray(startIdx, startIdx + len)));
        }
    };
    __decorate([
        Decorators_1.Override
    ], CodePointCharStream.prototype, "consume");
    __decorate([
        Decorators_1.Override
    ], CodePointCharStream.prototype, "index");
    __decorate([
        Decorators_1.Override
    ], CodePointCharStream.prototype, "size");
    __decorate([
        Decorators_1.Override
    ], CodePointCharStream.prototype, "mark");
    __decorate([
        Decorators_1.Override
    ], CodePointCharStream.prototype, "release");
    __decorate([
        Decorators_1.Override
    ], CodePointCharStream.prototype, "seek");
    __decorate([
        Decorators_1.Override
    ], CodePointCharStream.prototype, "sourceName");
    __decorate([
        Decorators_1.Override
    ], CodePointCharStream.prototype, "toString");
    __decorate([
        Decorators_1.Override
    ], CodePointCharStream.prototype, "LA");
    __decorate([
        Decorators_1.Override
    ], CodePointCharStream.prototype, "getText");
    return CodePointCharStream;
}());
exports.CodePointCharStream = CodePointCharStream;
