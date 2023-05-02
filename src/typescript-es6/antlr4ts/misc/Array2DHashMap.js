"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
exports.__esModule = true;
exports.Array2DHashMap = void 0;
var Array2DHashSet_1 = require("./Array2DHashSet");
var MapKeyEqualityComparator = /** @class */ (function () {
    function MapKeyEqualityComparator(keyComparator) {
        this.keyComparator = keyComparator;
    }
    MapKeyEqualityComparator.prototype.hashCode = function (obj) {
        return this.keyComparator.hashCode(obj.key);
    };
    MapKeyEqualityComparator.prototype.equals = function (a, b) {
        return this.keyComparator.equals(a.key, b.key);
    };
    return MapKeyEqualityComparator;
}());
var Array2DHashMap = /** @class */ (function () {
    function Array2DHashMap(keyComparer) {
        if (keyComparer instanceof Array2DHashMap) {
            this.backingStore = new Array2DHashSet_1.Array2DHashSet(keyComparer.backingStore);
        }
        else {
            this.backingStore = new Array2DHashSet_1.Array2DHashSet(new MapKeyEqualityComparator(keyComparer));
        }
    }
    Array2DHashMap.prototype.clear = function () {
        this.backingStore.clear();
    };
    Array2DHashMap.prototype.containsKey = function (key) {
        return this.backingStore.contains({ key: key });
    };
    Array2DHashMap.prototype.get = function (key) {
        var bucket = this.backingStore.get({ key: key });
        if (!bucket) {
            return undefined;
        }
        return bucket.value;
    };
    Object.defineProperty(Array2DHashMap.prototype, "isEmpty", {
        get: function () {
            return this.backingStore.isEmpty;
        },
        enumerable: false,
        configurable: true
    });
    Array2DHashMap.prototype.put = function (key, value) {
        var element = this.backingStore.get({ key: key, value: value });
        var result;
        if (!element) {
            this.backingStore.add({ key: key, value: value });
        }
        else {
            result = element.value;
            element.value = value;
        }
        return result;
    };
    Array2DHashMap.prototype.putIfAbsent = function (key, value) {
        var element = this.backingStore.get({ key: key, value: value });
        var result;
        if (!element) {
            this.backingStore.add({ key: key, value: value });
        }
        else {
            result = element.value;
        }
        return result;
    };
    Object.defineProperty(Array2DHashMap.prototype, "size", {
        get: function () {
            return this.backingStore.size;
        },
        enumerable: false,
        configurable: true
    });
    Array2DHashMap.prototype.hashCode = function () {
        return this.backingStore.hashCode();
    };
    Array2DHashMap.prototype.equals = function (o) {
        if (!(o instanceof Array2DHashMap)) {
            return false;
        }
        return this.backingStore.equals(o.backingStore);
    };
    return Array2DHashMap;
}());
exports.Array2DHashMap = Array2DHashMap;
