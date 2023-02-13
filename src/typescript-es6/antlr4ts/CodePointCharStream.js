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
import * as assert from "assert";
import { IntStream } from "./IntStream";
import { Interval } from "./misc/Interval";
import { Override } from "./Decorators";
/**
 * Alternative to {@link ANTLRInputStream} which treats the input
 * as a series of Unicode code points, instead of a series of UTF-16
 * code units.
 *
 * Use this if you need to parse input which potentially contains
 * Unicode values > U+FFFF.
 */
export class CodePointCharStream {
    // Use the factory method {@link #fromBuffer(CodePointBuffer)} to
    // construct instances of this type.
    constructor(array, position, remaining, name) {
        // TODO
        assert(position === 0);
        this._array = array;
        this._size = remaining;
        this._name = name;
        this._position = 0;
    }
    get internalStorage() {
        return this._array;
    }
    static fromBuffer(codePointBuffer, name) {
        if (name === undefined || name.length === 0) {
            name = IntStream.UNKNOWN_SOURCE_NAME;
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
    }
    consume() {
        if (this._size - this._position === 0) {
            assert(this.LA(1) === IntStream.EOF);
            throw new RangeError("cannot consume EOF");
        }
        this._position++;
    }
    get index() {
        return this._position;
    }
    get size() {
        return this._size;
    }
    /** mark/release do nothing; we have entire buffer */
    mark() {
        return -1;
    }
    release(marker) {
        // No default implementation since this stream buffers the entire input
    }
    seek(index) {
        this._position = index;
    }
    get sourceName() {
        return this._name;
    }
    toString() {
        return this.getText(Interval.of(0, this.size - 1));
    }
    LA(i) {
        let offset;
        switch (Math.sign(i)) {
            case -1:
                offset = this.index + i;
                if (offset < 0) {
                    return IntStream.EOF;
                }
                return this._array[offset];
            case 0:
                // Undefined
                return 0;
            case 1:
                offset = this.index + i - 1;
                if (offset >= this.size) {
                    return IntStream.EOF;
                }
                return this._array[offset];
        }
        throw new RangeError("Not reached");
    }
    /** Return the UTF-16 encoded string for the given interval */
    getText(interval) {
        const startIdx = Math.min(interval.a, this.size);
        const len = Math.min(interval.b - interval.a + 1, this.size - startIdx);
        if (this._array instanceof Int32Array) {
            return String.fromCodePoint(...Array.from(this._array.subarray(startIdx, startIdx + len)));
        }
        else {
            return String.fromCharCode(...Array.from(this._array.subarray(startIdx, startIdx + len)));
        }
    }
}
__decorate([
    Override
], CodePointCharStream.prototype, "consume", null);
__decorate([
    Override
], CodePointCharStream.prototype, "index", null);
__decorate([
    Override
], CodePointCharStream.prototype, "size", null);
__decorate([
    Override
], CodePointCharStream.prototype, "mark", null);
__decorate([
    Override
], CodePointCharStream.prototype, "release", null);
__decorate([
    Override
], CodePointCharStream.prototype, "seek", null);
__decorate([
    Override
], CodePointCharStream.prototype, "sourceName", null);
__decorate([
    Override
], CodePointCharStream.prototype, "toString", null);
__decorate([
    Override
], CodePointCharStream.prototype, "LA", null);
__decorate([
    Override
], CodePointCharStream.prototype, "getText", null);
