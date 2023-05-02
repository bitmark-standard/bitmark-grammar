"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
exports.__esModule = true;
exports.CodePointBuffer = void 0;
var assert = require("assert");
var Character = require("./misc/Character");
/**
 * Wrapper for `Uint8Array` / `Uint16Array` / `Int32Array`.
 */
var CodePointBuffer = /** @class */ (function () {
    function CodePointBuffer(buffer, size) {
        this.buffer = buffer;
        this._position = 0;
        this._size = size;
    }
    CodePointBuffer.withArray = function (buffer) {
        return new CodePointBuffer(buffer, buffer.length);
    };
    Object.defineProperty(CodePointBuffer.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (newPosition) {
            if (newPosition < 0 || newPosition > this._size) {
                throw new RangeError();
            }
            this._position = newPosition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodePointBuffer.prototype, "remaining", {
        get: function () {
            return this._size - this.position;
        },
        enumerable: false,
        configurable: true
    });
    CodePointBuffer.prototype.get = function (offset) {
        return this.buffer[offset];
    };
    CodePointBuffer.prototype.array = function () {
        return this.buffer.slice(0, this._size);
    };
    CodePointBuffer.builder = function (initialBufferSize) {
        return new CodePointBuffer.Builder(initialBufferSize);
    };
    return CodePointBuffer;
}());
exports.CodePointBuffer = CodePointBuffer;
(function (CodePointBuffer) {
    var Builder = /** @class */ (function () {
        function Builder(initialBufferSize) {
            this.type = 0 /* Type.BYTE */;
            this.buffer = new Uint8Array(initialBufferSize);
            this.prevHighSurrogate = -1;
            this.position = 0;
        }
        Builder.prototype.build = function () {
            return new CodePointBuffer(this.buffer, this.position);
        };
        Builder.roundUpToNextPowerOfTwo = function (i) {
            var nextPowerOfTwo = 32 - Math.clz32(i - 1);
            return Math.pow(2, nextPowerOfTwo);
        };
        Builder.prototype.ensureRemaining = function (remainingNeeded) {
            switch (this.type) {
                case 0 /* Type.BYTE */:
                    if (this.buffer.length - this.position < remainingNeeded) {
                        var newCapacity = Builder.roundUpToNextPowerOfTwo(this.buffer.length + remainingNeeded);
                        var newBuffer = new Uint8Array(newCapacity);
                        newBuffer.set(this.buffer.subarray(0, this.position), 0);
                        this.buffer = newBuffer;
                    }
                    break;
                case 1 /* Type.CHAR */:
                    if (this.buffer.length - this.position < remainingNeeded) {
                        var newCapacity = Builder.roundUpToNextPowerOfTwo(this.buffer.length + remainingNeeded);
                        var newBuffer = new Uint16Array(newCapacity);
                        newBuffer.set(this.buffer.subarray(0, this.position), 0);
                        this.buffer = newBuffer;
                    }
                    break;
                case 2 /* Type.INT */:
                    if (this.buffer.length - this.position < remainingNeeded) {
                        var newCapacity = Builder.roundUpToNextPowerOfTwo(this.buffer.length + remainingNeeded);
                        var newBuffer = new Int32Array(newCapacity);
                        newBuffer.set(this.buffer.subarray(0, this.position), 0);
                        this.buffer = newBuffer;
                    }
                    break;
            }
        };
        Builder.prototype.append = function (utf16In) {
            this.ensureRemaining(utf16In.length);
            this.appendArray(utf16In);
        };
        Builder.prototype.appendArray = function (utf16In) {
            switch (this.type) {
                case 0 /* Type.BYTE */:
                    this.appendArrayByte(utf16In);
                    break;
                case 1 /* Type.CHAR */:
                    this.appendArrayChar(utf16In);
                    break;
                case 2 /* Type.INT */:
                    this.appendArrayInt(utf16In);
                    break;
            }
        };
        Builder.prototype.appendArrayByte = function (utf16In) {
            assert(this.prevHighSurrogate === -1);
            var input = utf16In;
            var inOffset = 0;
            var inLimit = utf16In.length;
            var outByte = this.buffer;
            var outOffset = this.position;
            while (inOffset < inLimit) {
                var c = input[inOffset];
                if (c <= 0xFF) {
                    outByte[outOffset] = c;
                }
                else {
                    utf16In = utf16In.subarray(inOffset, inLimit);
                    this.position = outOffset;
                    if (!Character.isHighSurrogate(c)) {
                        this.byteToCharBuffer(utf16In.length);
                        this.appendArrayChar(utf16In);
                        return;
                    }
                    else {
                        this.byteToIntBuffer(utf16In.length);
                        this.appendArrayInt(utf16In);
                        return;
                    }
                }
                inOffset++;
                outOffset++;
            }
            this.position = outOffset;
        };
        Builder.prototype.appendArrayChar = function (utf16In) {
            assert(this.prevHighSurrogate === -1);
            var input = utf16In;
            var inOffset = 0;
            var inLimit = utf16In.length;
            var outChar = this.buffer;
            var outOffset = this.position;
            while (inOffset < inLimit) {
                var c = input[inOffset];
                if (!Character.isHighSurrogate(c)) {
                    outChar[outOffset] = c;
                }
                else {
                    utf16In = utf16In.subarray(inOffset, inLimit);
                    this.position = outOffset;
                    this.charToIntBuffer(utf16In.length);
                    this.appendArrayInt(utf16In);
                    return;
                }
                inOffset++;
                outOffset++;
            }
            this.position = outOffset;
        };
        Builder.prototype.appendArrayInt = function (utf16In) {
            var input = utf16In;
            var inOffset = 0;
            var inLimit = utf16In.length;
            var outInt = this.buffer;
            var outOffset = this.position;
            while (inOffset < inLimit) {
                var c = input[inOffset];
                inOffset++;
                if (this.prevHighSurrogate !== -1) {
                    if (Character.isLowSurrogate(c)) {
                        outInt[outOffset] = String.fromCharCode(this.prevHighSurrogate, c).codePointAt(0);
                        outOffset++;
                        this.prevHighSurrogate = -1;
                    }
                    else {
                        // Dangling high surrogate
                        outInt[outOffset] = this.prevHighSurrogate;
                        outOffset++;
                        if (Character.isHighSurrogate(c)) {
                            this.prevHighSurrogate = c;
                        }
                        else {
                            outInt[outOffset] = c;
                            outOffset++;
                            this.prevHighSurrogate = -1;
                        }
                    }
                }
                else if (Character.isHighSurrogate(c)) {
                    this.prevHighSurrogate = c;
                }
                else {
                    outInt[outOffset] = c;
                    outOffset++;
                }
            }
            if (this.prevHighSurrogate !== -1) {
                // Dangling high surrogate
                outInt[outOffset] = this.prevHighSurrogate;
                outOffset++;
            }
            this.position = outOffset;
        };
        Builder.prototype.byteToCharBuffer = function (toAppend) {
            // CharBuffers hold twice as much per unit as ByteBuffers, so start with half the capacity.
            var newBuffer = new Uint16Array(Math.max(this.position + toAppend, this.buffer.length >> 1));
            newBuffer.set(this.buffer.subarray(0, this.position), 0);
            this.type = 1 /* Type.CHAR */;
            this.buffer = newBuffer;
        };
        Builder.prototype.byteToIntBuffer = function (toAppend) {
            // IntBuffers hold four times as much per unit as ByteBuffers, so start with one quarter the capacity.
            var newBuffer = new Int32Array(Math.max(this.position + toAppend, this.buffer.length >> 2));
            newBuffer.set(this.buffer.subarray(0, this.position), 0);
            this.type = 2 /* Type.INT */;
            this.buffer = newBuffer;
        };
        Builder.prototype.charToIntBuffer = function (toAppend) {
            // IntBuffers hold two times as much per unit as ByteBuffers, so start with one half the capacity.
            var newBuffer = new Int32Array(Math.max(this.position + toAppend, this.buffer.length >> 1));
            newBuffer.set(this.buffer.subarray(0, this.position), 0);
            this.type = 2 /* Type.INT */;
            this.buffer = newBuffer;
        };
        return Builder;
    }());
    CodePointBuffer.Builder = Builder;
})(CodePointBuffer = exports.CodePointBuffer || (exports.CodePointBuffer = {}));
exports.CodePointBuffer = CodePointBuffer;
