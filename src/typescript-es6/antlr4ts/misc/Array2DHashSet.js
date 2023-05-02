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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
exports.Array2DHashSet = void 0;
// ConvertTo-TS run at 2016-10-03T02:09:41.7434086-07:00
var assert = require("assert");
var DefaultEqualityComparator_1 = require("./DefaultEqualityComparator");
var Decorators_1 = require("../Decorators");
var MurmurHash_1 = require("./MurmurHash");
/** {@link Set} implementation with closed hashing (open addressing). */
// NOTE:  JavaScript's Set interface has on significant different diffrence from Java's:
// 		  e.g. the return type of add() differs!
//        For this reason I've commented tweaked the implements clause
var INITAL_CAPACITY = 16; // must be power of 2
var LOAD_FACTOR = 0.75;
var Array2DHashSet = /** @class */ (function () {
    function Array2DHashSet(comparatorOrSet, initialCapacity) {
        if (initialCapacity === void 0) { initialCapacity = INITAL_CAPACITY; }
        /** How many elements in set */
        this.n = 0;
        this.threshold = Math.floor(INITAL_CAPACITY * LOAD_FACTOR); // when to expand
        if (comparatorOrSet instanceof Array2DHashSet) {
            this.comparator = comparatorOrSet.comparator;
            this.buckets = comparatorOrSet.buckets.slice(0);
            for (var i = 0; i < this.buckets.length; i++) {
                var bucket = this.buckets[i];
                if (bucket) {
                    this.buckets[i] = bucket.slice(0);
                }
            }
            this.n = comparatorOrSet.n;
            this.threshold = comparatorOrSet.threshold;
        }
        else {
            this.comparator = comparatorOrSet || DefaultEqualityComparator_1.DefaultEqualityComparator.INSTANCE;
            this.buckets = this.createBuckets(initialCapacity);
        }
    }
    /**
     * Add `o` to set if not there; return existing value if already
     * there. This method performs the same operation as {@link #add} aside from
     * the return value.
     */
    Array2DHashSet.prototype.getOrAdd = function (o) {
        if (this.n > this.threshold) {
            this.expand();
        }
        return this.getOrAddImpl(o);
    };
    Array2DHashSet.prototype.getOrAddImpl = function (o) {
        var b = this.getBucket(o);
        var bucket = this.buckets[b];
        // NEW BUCKET
        if (!bucket) {
            bucket = [o];
            this.buckets[b] = bucket;
            this.n++;
            return o;
        }
        // LOOK FOR IT IN BUCKET
        for (var _i = 0, bucket_1 = bucket; _i < bucket_1.length; _i++) {
            var existing = bucket_1[_i];
            if (this.comparator.equals(existing, o)) {
                return existing; // found existing, quit
            }
        }
        // FULL BUCKET, expand and add to end
        bucket.push(o);
        this.n++;
        return o;
    };
    Array2DHashSet.prototype.get = function (o) {
        if (o == null) {
            return o;
        }
        var b = this.getBucket(o);
        var bucket = this.buckets[b];
        if (!bucket) {
            // no bucket
            return undefined;
        }
        for (var _i = 0, bucket_2 = bucket; _i < bucket_2.length; _i++) {
            var e = bucket_2[_i];
            if (this.comparator.equals(e, o)) {
                return e;
            }
        }
        return undefined;
    };
    Array2DHashSet.prototype.getBucket = function (o) {
        var hash = this.comparator.hashCode(o);
        var b = hash & (this.buckets.length - 1); // assumes len is power of 2
        return b;
    };
    Array2DHashSet.prototype.hashCode = function () {
        var hash = MurmurHash_1.MurmurHash.initialize();
        for (var _i = 0, _b = this.buckets; _i < _b.length; _i++) {
            var bucket = _b[_i];
            if (bucket == null) {
                continue;
            }
            for (var _c = 0, bucket_3 = bucket; _c < bucket_3.length; _c++) {
                var o = bucket_3[_c];
                if (o == null) {
                    break;
                }
                hash = MurmurHash_1.MurmurHash.update(hash, this.comparator.hashCode(o));
            }
        }
        hash = MurmurHash_1.MurmurHash.finish(hash, this.size);
        return hash;
    };
    Array2DHashSet.prototype.equals = function (o) {
        if (o === this) {
            return true;
        }
        if (!(o instanceof Array2DHashSet)) {
            return false;
        }
        if (o.size !== this.size) {
            return false;
        }
        var same = this.containsAll(o);
        return same;
    };
    Array2DHashSet.prototype.expand = function () {
        var old = this.buckets;
        var newCapacity = this.buckets.length * 2;
        var newTable = this.createBuckets(newCapacity);
        this.buckets = newTable;
        this.threshold = Math.floor(newCapacity * LOAD_FACTOR);
        //		System.out.println("new size="+newCapacity+", thres="+threshold);
        // rehash all existing entries
        var oldSize = this.size;
        for (var _i = 0, old_1 = old; _i < old_1.length; _i++) {
            var bucket = old_1[_i];
            if (!bucket) {
                continue;
            }
            for (var _b = 0, bucket_4 = bucket; _b < bucket_4.length; _b++) {
                var o = bucket_4[_b];
                var b = this.getBucket(o);
                var newBucket = this.buckets[b];
                if (!newBucket) {
                    newBucket = [];
                    this.buckets[b] = newBucket;
                }
                newBucket.push(o);
            }
        }
        assert(this.n === oldSize);
    };
    Array2DHashSet.prototype.add = function (t) {
        var existing = this.getOrAdd(t);
        return existing === t;
    };
    Object.defineProperty(Array2DHashSet.prototype, "size", {
        get: function () {
            return this.n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Array2DHashSet.prototype, "isEmpty", {
        get: function () {
            return this.n === 0;
        },
        enumerable: false,
        configurable: true
    });
    Array2DHashSet.prototype.contains = function (o) {
        return this.containsFast(this.asElementType(o));
    };
    Array2DHashSet.prototype.containsFast = function (obj) {
        if (obj == null) {
            return false;
        }
        return this.get(obj) != null;
    };
    Array2DHashSet.prototype[_a = Symbol.iterator] = function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [5 /*yield**/, __values(this.toArray())];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    };
    Array2DHashSet.prototype.toArray = function () {
        var a = new Array(this.size);
        // Copy elements from the nested arrays into the destination array
        var i = 0; // Position within destination array
        for (var _i = 0, _b = this.buckets; _i < _b.length; _i++) {
            var bucket = _b[_i];
            if (bucket == null) {
                continue;
            }
            for (var _c = 0, bucket_5 = bucket; _c < bucket_5.length; _c++) {
                var o = bucket_5[_c];
                if (o == null) {
                    break;
                }
                a[i++] = o;
            }
        }
        return a;
    };
    Array2DHashSet.prototype.containsAll = function (collection) {
        if (collection instanceof Array2DHashSet) {
            var s = collection;
            for (var _i = 0, _b = s.buckets; _i < _b.length; _i++) {
                var bucket = _b[_i];
                if (bucket == null) {
                    continue;
                }
                for (var _c = 0, bucket_6 = bucket; _c < bucket_6.length; _c++) {
                    var o = bucket_6[_c];
                    if (o == null) {
                        break;
                    }
                    if (!this.containsFast(this.asElementType(o))) {
                        return false;
                    }
                }
            }
        }
        else {
            for (var _d = 0, collection_1 = collection; _d < collection_1.length; _d++) {
                var o = collection_1[_d];
                if (!this.containsFast(this.asElementType(o))) {
                    return false;
                }
            }
        }
        return true;
    };
    Array2DHashSet.prototype.addAll = function (c) {
        var changed = false;
        for (var _i = 0, c_1 = c; _i < c_1.length; _i++) {
            var o = c_1[_i];
            var existing = this.getOrAdd(o);
            if (existing !== o) {
                changed = true;
            }
        }
        return changed;
    };
    Array2DHashSet.prototype.clear = function () {
        this.buckets = this.createBuckets(INITAL_CAPACITY);
        this.n = 0;
        this.threshold = Math.floor(INITAL_CAPACITY * LOAD_FACTOR);
    };
    Array2DHashSet.prototype.toString = function () {
        if (this.size === 0) {
            return "{}";
        }
        var buf = "{";
        var first = true;
        for (var _i = 0, _b = this.buckets; _i < _b.length; _i++) {
            var bucket = _b[_i];
            if (bucket == null) {
                continue;
            }
            for (var _c = 0, bucket_7 = bucket; _c < bucket_7.length; _c++) {
                var o = bucket_7[_c];
                if (o == null) {
                    break;
                }
                if (first) {
                    first = false;
                }
                else {
                    buf += ", ";
                }
                buf += o.toString();
            }
        }
        buf += "}";
        return buf;
    };
    Array2DHashSet.prototype.toTableString = function () {
        var buf = "";
        for (var _i = 0, _b = this.buckets; _i < _b.length; _i++) {
            var bucket = _b[_i];
            if (bucket == null) {
                buf += "null\n";
                continue;
            }
            buf += "[";
            var first = true;
            for (var _c = 0, bucket_8 = bucket; _c < bucket_8.length; _c++) {
                var o = bucket_8[_c];
                if (first) {
                    first = false;
                }
                else {
                    buf += " ";
                }
                if (o == null) {
                    buf += "_";
                }
                else {
                    buf += o.toString();
                }
            }
            buf += "]\n";
        }
        return buf;
    };
    /**
     * Return `o` as an instance of the element type `T`. If
     * `o` is non-undefined but known to not be an instance of `T`, this
     * method returns `undefined`. The base implementation does not perform any
     * type checks; override this method to provide strong type checks for the
     * {@link #contains} and {@link #remove} methods to ensure the arguments to
     * the {@link EqualityComparator} for the set always have the expected
     * types.
     *
     * @param o the object to try and cast to the element type of the set
     * @returns `o` if it could be an instance of `T`, otherwise
     * `undefined`.
     */
    Array2DHashSet.prototype.asElementType = function (o) {
        return o;
    };
    /**
     * Return an array of `T[]` with length `capacity`.
     *
     * @param capacity the length of the array to return
     * @returns the newly constructed array
     */
    Array2DHashSet.prototype.createBuckets = function (capacity) {
        return new Array(capacity);
    };
    var _a;
    __decorate([
        Decorators_1.NotNull
    ], Array2DHashSet.prototype, "comparator");
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, "hashCode");
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, "equals");
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, "add");
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, "size");
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, "isEmpty");
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, "contains");
    __decorate([
        __param(0, Decorators_1.Nullable)
    ], Array2DHashSet.prototype, "containsFast");
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, _a);
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, "toArray");
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, "containsAll");
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, "addAll");
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, "clear");
    __decorate([
        Decorators_1.Override
    ], Array2DHashSet.prototype, "toString");
    __decorate([
        (0, Decorators_1.SuppressWarnings)("unchecked")
    ], Array2DHashSet.prototype, "asElementType");
    __decorate([
        (0, Decorators_1.SuppressWarnings)("unchecked")
    ], Array2DHashSet.prototype, "createBuckets");
    return Array2DHashSet;
}());
exports.Array2DHashSet = Array2DHashSet;
