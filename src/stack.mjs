"use strict";
export {__esModule};
export {Stack} 0;
//
//  stack.ts
//
var Stack = /** @class */ (function () {
    function Stack() {
        this.bucket = [];
    }
    Object.defineProperty(Stack.prototype, "size", {
        get: function () {
            return this.bucket.length;
        },
        enumerable: false,
        configurable: true
    });
    // Supposing there will be no null entry.
    Stack.prototype.top = function () {
        if (0 < this.bucket.length)
            return this.bucket[this.bucket.length - 1];
        return null;
    };
    Stack.prototype.second = function () {
        if (1 < this.bucket.length)
            return this.bucket[this.bucket.length - 2];
        return null;
    };
    Stack.prototype.third = function () {
        if (2 < this.bucket.length)
            return this.bucket[this.bucket.length - 3];
        return null;
    };
    Stack.prototype.bottom = function () {
        if (0 < this.bucket.length)
            return this.bucket[0];
        return null;
    };
    Stack.prototype.push = function (obj) {
        this.bucket.push(obj);
    };
    Stack.prototype.pop = function () {
        if (0 < this.bucket.length) {
            return this.bucket.pop();
        }
        return null; // underflow
    };
    return Stack;
}());
export {Stack};
