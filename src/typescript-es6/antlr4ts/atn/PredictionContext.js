"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.SingletonPredictionContext = exports.PredictionContext = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:35.3812636-07:00
var Array2DHashMap_1 = require("../misc/Array2DHashMap");
var Array2DHashSet_1 = require("../misc/Array2DHashSet");
var Arrays_1 = require("../misc/Arrays");
var MurmurHash_1 = require("../misc/MurmurHash");
var Decorators_1 = require("../Decorators");
var PredictionContextCache_1 = require("./PredictionContextCache");
var assert = require("assert");
var INITIAL_HASH = 1;
var PredictionContext = /** @class */ (function () {
    function PredictionContext(cachedHashCode) {
        this.cachedHashCode = cachedHashCode;
    }
    PredictionContext.calculateEmptyHashCode = function () {
        var hash = MurmurHash_1.MurmurHash.initialize(INITIAL_HASH);
        hash = MurmurHash_1.MurmurHash.finish(hash, 0);
        return hash;
    };
    PredictionContext.calculateSingleHashCode = function (parent, returnState) {
        var hash = MurmurHash_1.MurmurHash.initialize(INITIAL_HASH);
        hash = MurmurHash_1.MurmurHash.update(hash, parent);
        hash = MurmurHash_1.MurmurHash.update(hash, returnState);
        hash = MurmurHash_1.MurmurHash.finish(hash, 2);
        return hash;
    };
    PredictionContext.calculateHashCode = function (parents, returnStates) {
        var hash = MurmurHash_1.MurmurHash.initialize(INITIAL_HASH);
        for (var _i = 0, parents_1 = parents; _i < parents_1.length; _i++) {
            var parent_1 = parents_1[_i];
            hash = MurmurHash_1.MurmurHash.update(hash, parent_1);
        }
        for (var _a = 0, returnStates_1 = returnStates; _a < returnStates_1.length; _a++) {
            var returnState = returnStates_1[_a];
            hash = MurmurHash_1.MurmurHash.update(hash, returnState);
        }
        hash = MurmurHash_1.MurmurHash.finish(hash, 2 * parents.length);
        return hash;
    };
    PredictionContext.fromRuleContext = function (atn, outerContext, fullContext) {
        if (fullContext === void 0) { fullContext = true; }
        if (outerContext.isEmpty) {
            return fullContext ? PredictionContext.EMPTY_FULL : PredictionContext.EMPTY_LOCAL;
        }
        var parent;
        if (outerContext._parent) {
            parent = PredictionContext.fromRuleContext(atn, outerContext._parent, fullContext);
        }
        else {
            parent = fullContext ? PredictionContext.EMPTY_FULL : PredictionContext.EMPTY_LOCAL;
        }
        var state = atn.states[outerContext.invokingState];
        var transition = state.transition(0);
        return parent.getChild(transition.followState.stateNumber);
    };
    PredictionContext.addEmptyContext = function (context) {
        return context.addEmptyContext();
    };
    PredictionContext.removeEmptyContext = function (context) {
        return context.removeEmptyContext();
    };
    PredictionContext.join = function (context0, context1, contextCache) {
        if (contextCache === void 0) { contextCache = PredictionContextCache_1.PredictionContextCache.UNCACHED; }
        if (context0 === context1) {
            return context0;
        }
        if (context0.isEmpty) {
            return PredictionContext.isEmptyLocal(context0) ? context0 : PredictionContext.addEmptyContext(context1);
        }
        else if (context1.isEmpty) {
            return PredictionContext.isEmptyLocal(context1) ? context1 : PredictionContext.addEmptyContext(context0);
        }
        var context0size = context0.size;
        var context1size = context1.size;
        if (context0size === 1 && context1size === 1 && context0.getReturnState(0) === context1.getReturnState(0)) {
            var merged = contextCache.join(context0.getParent(0), context1.getParent(0));
            if (merged === context0.getParent(0)) {
                return context0;
            }
            else if (merged === context1.getParent(0)) {
                return context1;
            }
            else {
                return merged.getChild(context0.getReturnState(0));
            }
        }
        var count = 0;
        var parentsList = new Array(context0size + context1size);
        var returnStatesList = new Array(parentsList.length);
        var leftIndex = 0;
        var rightIndex = 0;
        var canReturnLeft = true;
        var canReturnRight = true;
        while (leftIndex < context0size && rightIndex < context1size) {
            if (context0.getReturnState(leftIndex) === context1.getReturnState(rightIndex)) {
                parentsList[count] = contextCache.join(context0.getParent(leftIndex), context1.getParent(rightIndex));
                returnStatesList[count] = context0.getReturnState(leftIndex);
                canReturnLeft = canReturnLeft && parentsList[count] === context0.getParent(leftIndex);
                canReturnRight = canReturnRight && parentsList[count] === context1.getParent(rightIndex);
                leftIndex++;
                rightIndex++;
            }
            else if (context0.getReturnState(leftIndex) < context1.getReturnState(rightIndex)) {
                parentsList[count] = context0.getParent(leftIndex);
                returnStatesList[count] = context0.getReturnState(leftIndex);
                canReturnRight = false;
                leftIndex++;
            }
            else {
                assert(context1.getReturnState(rightIndex) < context0.getReturnState(leftIndex));
                parentsList[count] = context1.getParent(rightIndex);
                returnStatesList[count] = context1.getReturnState(rightIndex);
                canReturnLeft = false;
                rightIndex++;
            }
            count++;
        }
        while (leftIndex < context0size) {
            parentsList[count] = context0.getParent(leftIndex);
            returnStatesList[count] = context0.getReturnState(leftIndex);
            leftIndex++;
            canReturnRight = false;
            count++;
        }
        while (rightIndex < context1size) {
            parentsList[count] = context1.getParent(rightIndex);
            returnStatesList[count] = context1.getReturnState(rightIndex);
            rightIndex++;
            canReturnLeft = false;
            count++;
        }
        if (canReturnLeft) {
            return context0;
        }
        else if (canReturnRight) {
            return context1;
        }
        if (count < parentsList.length) {
            parentsList = parentsList.slice(0, count);
            returnStatesList = returnStatesList.slice(0, count);
        }
        if (parentsList.length === 0) {
            // if one of them was EMPTY_LOCAL, it would be empty and handled at the beginning of the method
            return PredictionContext.EMPTY_FULL;
        }
        else if (parentsList.length === 1) {
            return new SingletonPredictionContext(parentsList[0], returnStatesList[0]);
        }
        else {
            return new ArrayPredictionContext(parentsList, returnStatesList);
        }
    };
    PredictionContext.isEmptyLocal = function (context) {
        return context === PredictionContext.EMPTY_LOCAL;
    };
    PredictionContext.getCachedContext = function (context, contextCache, visited) {
        if (context.isEmpty) {
            return context;
        }
        var existing = visited.get(context);
        if (existing) {
            return existing;
        }
        existing = contextCache.get(context);
        if (existing) {
            visited.put(context, existing);
            return existing;
        }
        var changed = false;
        var parents = new Array(context.size);
        for (var i = 0; i < parents.length; i++) {
            var parent_2 = PredictionContext.getCachedContext(context.getParent(i), contextCache, visited);
            if (changed || parent_2 !== context.getParent(i)) {
                if (!changed) {
                    parents = new Array(context.size);
                    for (var j = 0; j < context.size; j++) {
                        parents[j] = context.getParent(j);
                    }
                    changed = true;
                }
                parents[i] = parent_2;
            }
        }
        if (!changed) {
            existing = contextCache.putIfAbsent(context, context);
            visited.put(context, existing != null ? existing : context);
            return context;
        }
        // We know parents.length>0 because context.isEmpty is checked at the beginning of the method.
        var updated;
        if (parents.length === 1) {
            updated = new SingletonPredictionContext(parents[0], context.getReturnState(0));
        }
        else {
            var returnStates = new Array(context.size);
            for (var i = 0; i < context.size; i++) {
                returnStates[i] = context.getReturnState(i);
            }
            updated = new ArrayPredictionContext(parents, returnStates, context.hashCode());
        }
        existing = contextCache.putIfAbsent(updated, updated);
        visited.put(updated, existing || updated);
        visited.put(context, existing || updated);
        return updated;
    };
    PredictionContext.prototype.appendSingleContext = function (returnContext, contextCache) {
        return this.appendContext(PredictionContext.EMPTY_FULL.getChild(returnContext), contextCache);
    };
    PredictionContext.prototype.getChild = function (returnState) {
        return new SingletonPredictionContext(this, returnState);
    };
    PredictionContext.prototype.hashCode = function () {
        return this.cachedHashCode;
    };
    PredictionContext.prototype.toStrings = function (recognizer, currentState, stop) {
        if (stop === void 0) { stop = PredictionContext.EMPTY_FULL; }
        var result = [];
        outer: for (var perm = 0;; perm++) {
            var offset = 0;
            var last = true;
            var p = this;
            var stateNumber = currentState;
            var localBuffer = "";
            localBuffer += "[";
            while (!p.isEmpty && p !== stop) {
                var index = 0;
                if (p.size > 0) {
                    var bits = 1;
                    while (((1 << bits) >>> 0) < p.size) {
                        bits++;
                    }
                    var mask = ((1 << bits) >>> 0) - 1;
                    index = (perm >> offset) & mask;
                    last = last && index >= p.size - 1;
                    if (index >= p.size) {
                        continue outer;
                    }
                    offset += bits;
                }
                if (recognizer) {
                    if (localBuffer.length > 1) {
                        // first char is '[', if more than that this isn't the first rule
                        localBuffer += " ";
                    }
                    var atn = recognizer.atn;
                    var s = atn.states[stateNumber];
                    var ruleName = recognizer.ruleNames[s.ruleIndex];
                    localBuffer += ruleName;
                }
                else if (p.getReturnState(index) !== PredictionContext.EMPTY_FULL_STATE_KEY) {
                    if (!p.isEmpty) {
                        if (localBuffer.length > 1) {
                            // first char is '[', if more than that this isn't the first rule
                            localBuffer += " ";
                        }
                        localBuffer += p.getReturnState(index);
                    }
                }
                stateNumber = p.getReturnState(index);
                p = p.getParent(index);
            }
            localBuffer += "]";
            result.push(localBuffer);
            if (last) {
                break;
            }
        }
        return result;
    };
    __decorate([
        Decorators_1.Override
    ], PredictionContext.prototype, "hashCode");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull),
        __param(2, Decorators_1.NotNull)
    ], PredictionContext, "join");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull),
        __param(2, Decorators_1.NotNull)
    ], PredictionContext, "getCachedContext");
    return PredictionContext;
}());
exports.PredictionContext = PredictionContext;
var EmptyPredictionContext = /** @class */ (function (_super) {
    __extends(EmptyPredictionContext, _super);
    function EmptyPredictionContext(fullContext) {
        var _this = _super.call(this, PredictionContext.calculateEmptyHashCode()) || this;
        _this.fullContext = fullContext;
        return _this;
    }
    Object.defineProperty(EmptyPredictionContext.prototype, "isFullContext", {
        get: function () {
            return this.fullContext;
        },
        enumerable: false,
        configurable: true
    });
    EmptyPredictionContext.prototype.addEmptyContext = function () {
        return this;
    };
    EmptyPredictionContext.prototype.removeEmptyContext = function () {
        throw new Error("Cannot remove the empty context from itself.");
    };
    EmptyPredictionContext.prototype.getParent = function (index) {
        throw new Error("index out of bounds");
    };
    EmptyPredictionContext.prototype.getReturnState = function (index) {
        throw new Error("index out of bounds");
    };
    EmptyPredictionContext.prototype.findReturnState = function (returnState) {
        return -1;
    };
    Object.defineProperty(EmptyPredictionContext.prototype, "size", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    EmptyPredictionContext.prototype.appendSingleContext = function (returnContext, contextCache) {
        return contextCache.getChild(this, returnContext);
    };
    EmptyPredictionContext.prototype.appendContext = function (suffix, contextCache) {
        return suffix;
    };
    Object.defineProperty(EmptyPredictionContext.prototype, "isEmpty", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmptyPredictionContext.prototype, "hasEmpty", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    EmptyPredictionContext.prototype.equals = function (o) {
        return this === o;
    };
    EmptyPredictionContext.prototype.toStrings = function (recognizer, currentState, stop) {
        return ["[]"];
    };
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "addEmptyContext");
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "removeEmptyContext");
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "getParent");
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "getReturnState");
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "findReturnState");
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "size");
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "appendSingleContext");
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "appendContext");
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "isEmpty");
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "hasEmpty");
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "equals");
    __decorate([
        Decorators_1.Override
    ], EmptyPredictionContext.prototype, "toStrings");
    return EmptyPredictionContext;
}(PredictionContext));
var ArrayPredictionContext = /** @class */ (function (_super) {
    __extends(ArrayPredictionContext, _super);
    function ArrayPredictionContext(parents, returnStates, hashCode) {
        var _this = _super.call(this, hashCode || PredictionContext.calculateHashCode(parents, returnStates)) || this;
        assert(parents.length === returnStates.length);
        assert(returnStates.length > 1 || returnStates[0] !== PredictionContext.EMPTY_FULL_STATE_KEY, "Should be using PredictionContext.EMPTY instead.");
        _this.parents = parents;
        _this.returnStates = returnStates;
        return _this;
    }
    ArrayPredictionContext.prototype.getParent = function (index) {
        return this.parents[index];
    };
    ArrayPredictionContext.prototype.getReturnState = function (index) {
        return this.returnStates[index];
    };
    ArrayPredictionContext.prototype.findReturnState = function (returnState) {
        return Arrays_1.Arrays.binarySearch(this.returnStates, returnState);
    };
    Object.defineProperty(ArrayPredictionContext.prototype, "size", {
        get: function () {
            return this.returnStates.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayPredictionContext.prototype, "isEmpty", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayPredictionContext.prototype, "hasEmpty", {
        get: function () {
            return this.returnStates[this.returnStates.length - 1] === PredictionContext.EMPTY_FULL_STATE_KEY;
        },
        enumerable: false,
        configurable: true
    });
    ArrayPredictionContext.prototype.addEmptyContext = function () {
        if (this.hasEmpty) {
            return this;
        }
        var parents2 = this.parents.slice(0);
        var returnStates2 = this.returnStates.slice(0);
        parents2.push(PredictionContext.EMPTY_FULL);
        returnStates2.push(PredictionContext.EMPTY_FULL_STATE_KEY);
        return new ArrayPredictionContext(parents2, returnStates2);
    };
    ArrayPredictionContext.prototype.removeEmptyContext = function () {
        if (!this.hasEmpty) {
            return this;
        }
        if (this.returnStates.length === 2) {
            return new SingletonPredictionContext(this.parents[0], this.returnStates[0]);
        }
        else {
            var parents2 = this.parents.slice(0, this.parents.length - 1);
            var returnStates2 = this.returnStates.slice(0, this.returnStates.length - 1);
            return new ArrayPredictionContext(parents2, returnStates2);
        }
    };
    ArrayPredictionContext.prototype.appendContext = function (suffix, contextCache) {
        return ArrayPredictionContext.appendContextImpl(this, suffix, new PredictionContext.IdentityHashMap());
    };
    ArrayPredictionContext.appendContextImpl = function (context, suffix, visited) {
        if (suffix.isEmpty) {
            if (PredictionContext.isEmptyLocal(suffix)) {
                if (context.hasEmpty) {
                    return PredictionContext.EMPTY_LOCAL;
                }
                throw new Error("what to do here?");
            }
            return context;
        }
        if (suffix.size !== 1) {
            throw new Error("Appending a tree suffix is not yet supported.");
        }
        var result = visited.get(context);
        if (!result) {
            if (context.isEmpty) {
                result = suffix;
            }
            else {
                var parentCount = context.size;
                if (context.hasEmpty) {
                    parentCount--;
                }
                var updatedParents = new Array(parentCount);
                var updatedReturnStates = new Array(parentCount);
                for (var i = 0; i < parentCount; i++) {
                    updatedReturnStates[i] = context.getReturnState(i);
                }
                for (var i = 0; i < parentCount; i++) {
                    updatedParents[i] = ArrayPredictionContext.appendContextImpl(context.getParent(i), suffix, visited);
                }
                if (updatedParents.length === 1) {
                    result = new SingletonPredictionContext(updatedParents[0], updatedReturnStates[0]);
                }
                else {
                    assert(updatedParents.length > 1);
                    result = new ArrayPredictionContext(updatedParents, updatedReturnStates);
                }
                if (context.hasEmpty) {
                    result = PredictionContext.join(result, suffix);
                }
            }
            visited.put(context, result);
        }
        return result;
    };
    ArrayPredictionContext.prototype.equals = function (o) {
        if (this === o) {
            return true;
        }
        else if (!(o instanceof ArrayPredictionContext)) {
            return false;
        }
        if (this.hashCode() !== o.hashCode()) {
            // can't be same if hash is different
            return false;
        }
        var other = o;
        return this.equalsImpl(other, new Array2DHashSet_1.Array2DHashSet());
    };
    ArrayPredictionContext.prototype.equalsImpl = function (other, visited) {
        var selfWorkList = [];
        var otherWorkList = [];
        selfWorkList.push(this);
        otherWorkList.push(other);
        while (true) {
            var currentSelf = selfWorkList.pop();
            var currentOther = otherWorkList.pop();
            if (!currentSelf || !currentOther) {
                break;
            }
            var operands = new PredictionContextCache_1.PredictionContextCache.IdentityCommutativePredictionContextOperands(currentSelf, currentOther);
            if (!visited.add(operands)) {
                continue;
            }
            var selfSize = operands.x.size;
            if (selfSize === 0) {
                if (!operands.x.equals(operands.y)) {
                    return false;
                }
                continue;
            }
            var otherSize = operands.y.size;
            if (selfSize !== otherSize) {
                return false;
            }
            for (var i = 0; i < selfSize; i++) {
                if (operands.x.getReturnState(i) !== operands.y.getReturnState(i)) {
                    return false;
                }
                var selfParent = operands.x.getParent(i);
                var otherParent = operands.y.getParent(i);
                if (selfParent.hashCode() !== otherParent.hashCode()) {
                    return false;
                }
                if (selfParent !== otherParent) {
                    selfWorkList.push(selfParent);
                    otherWorkList.push(otherParent);
                }
            }
        }
        return true;
    };
    __decorate([
        Decorators_1.NotNull
    ], ArrayPredictionContext.prototype, "parents");
    __decorate([
        Decorators_1.NotNull
    ], ArrayPredictionContext.prototype, "returnStates");
    __decorate([
        Decorators_1.Override
    ], ArrayPredictionContext.prototype, "getParent");
    __decorate([
        Decorators_1.Override
    ], ArrayPredictionContext.prototype, "getReturnState");
    __decorate([
        Decorators_1.Override
    ], ArrayPredictionContext.prototype, "findReturnState");
    __decorate([
        Decorators_1.Override
    ], ArrayPredictionContext.prototype, "size");
    __decorate([
        Decorators_1.Override
    ], ArrayPredictionContext.prototype, "isEmpty");
    __decorate([
        Decorators_1.Override
    ], ArrayPredictionContext.prototype, "hasEmpty");
    __decorate([
        Decorators_1.Override
    ], ArrayPredictionContext.prototype, "addEmptyContext");
    __decorate([
        Decorators_1.Override
    ], ArrayPredictionContext.prototype, "removeEmptyContext");
    __decorate([
        Decorators_1.Override
    ], ArrayPredictionContext.prototype, "appendContext");
    __decorate([
        Decorators_1.Override
    ], ArrayPredictionContext.prototype, "equals");
    ArrayPredictionContext = __decorate([
        __param(0, Decorators_1.NotNull)
    ], ArrayPredictionContext);
    return ArrayPredictionContext;
}(PredictionContext));
var SingletonPredictionContext = /** @class */ (function (_super) {
    __extends(SingletonPredictionContext, _super);
    function SingletonPredictionContext(parent, returnState) {
        var _this = _super.call(this, PredictionContext.calculateSingleHashCode(parent, returnState)) || this;
        // assert(returnState != PredictionContext.EMPTY_FULL_STATE_KEY && returnState != PredictionContext.EMPTY_LOCAL_STATE_KEY);
        _this.parent = parent;
        _this.returnState = returnState;
        return _this;
    }
    SingletonPredictionContext.prototype.getParent = function (index) {
        // assert(index == 0);
        return this.parent;
    };
    SingletonPredictionContext.prototype.getReturnState = function (index) {
        // assert(index == 0);
        return this.returnState;
    };
    SingletonPredictionContext.prototype.findReturnState = function (returnState) {
        return this.returnState === returnState ? 0 : -1;
    };
    Object.defineProperty(SingletonPredictionContext.prototype, "size", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SingletonPredictionContext.prototype, "isEmpty", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SingletonPredictionContext.prototype, "hasEmpty", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    SingletonPredictionContext.prototype.appendContext = function (suffix, contextCache) {
        return contextCache.getChild(this.parent.appendContext(suffix, contextCache), this.returnState);
    };
    SingletonPredictionContext.prototype.addEmptyContext = function () {
        var parents = [this.parent, PredictionContext.EMPTY_FULL];
        var returnStates = [this.returnState, PredictionContext.EMPTY_FULL_STATE_KEY];
        return new ArrayPredictionContext(parents, returnStates);
    };
    SingletonPredictionContext.prototype.removeEmptyContext = function () {
        return this;
    };
    SingletonPredictionContext.prototype.equals = function (o) {
        if (o === this) {
            return true;
        }
        else if (!(o instanceof SingletonPredictionContext)) {
            return false;
        }
        var other = o;
        if (this.hashCode() !== other.hashCode()) {
            return false;
        }
        return this.returnState === other.returnState
            && this.parent.equals(other.parent);
    };
    __decorate([
        Decorators_1.NotNull
    ], SingletonPredictionContext.prototype, "parent");
    __decorate([
        Decorators_1.Override
    ], SingletonPredictionContext.prototype, "getParent");
    __decorate([
        Decorators_1.Override
    ], SingletonPredictionContext.prototype, "getReturnState");
    __decorate([
        Decorators_1.Override
    ], SingletonPredictionContext.prototype, "findReturnState");
    __decorate([
        Decorators_1.Override
    ], SingletonPredictionContext.prototype, "size");
    __decorate([
        Decorators_1.Override
    ], SingletonPredictionContext.prototype, "isEmpty");
    __decorate([
        Decorators_1.Override
    ], SingletonPredictionContext.prototype, "hasEmpty");
    __decorate([
        Decorators_1.Override
    ], SingletonPredictionContext.prototype, "appendContext");
    __decorate([
        Decorators_1.Override
    ], SingletonPredictionContext.prototype, "addEmptyContext");
    __decorate([
        Decorators_1.Override
    ], SingletonPredictionContext.prototype, "removeEmptyContext");
    __decorate([
        Decorators_1.Override
    ], SingletonPredictionContext.prototype, "equals");
    SingletonPredictionContext = __decorate([
        __param(0, Decorators_1.NotNull)
    ], SingletonPredictionContext);
    return SingletonPredictionContext;
}(PredictionContext));
exports.SingletonPredictionContext = SingletonPredictionContext;
(function (PredictionContext) {
    PredictionContext.EMPTY_LOCAL = new EmptyPredictionContext(false);
    PredictionContext.EMPTY_FULL = new EmptyPredictionContext(true);
    PredictionContext.EMPTY_LOCAL_STATE_KEY = -((1 << 31) >>> 0);
    PredictionContext.EMPTY_FULL_STATE_KEY = ((1 << 31) >>> 0) - 1;
    var IdentityHashMap = /** @class */ (function (_super) {
        __extends(IdentityHashMap, _super);
        function IdentityHashMap() {
            return _super.call(this, IdentityEqualityComparator.INSTANCE) || this;
        }
        return IdentityHashMap;
    }(Array2DHashMap_1.Array2DHashMap));
    PredictionContext.IdentityHashMap = IdentityHashMap;
    var IdentityEqualityComparator = /** @class */ (function () {
        function IdentityEqualityComparator() {
        }
        IdentityEqualityComparator.prototype.IdentityEqualityComparator = function () {
            // intentionally empty
        };
        IdentityEqualityComparator.prototype.hashCode = function (obj) {
            return obj.hashCode();
        };
        IdentityEqualityComparator.prototype.equals = function (a, b) {
            return a === b;
        };
        IdentityEqualityComparator.INSTANCE = new IdentityEqualityComparator();
        __decorate([
            Decorators_1.Override
        ], IdentityEqualityComparator.prototype, "hashCode");
        __decorate([
            Decorators_1.Override
        ], IdentityEqualityComparator.prototype, "equals");
        return IdentityEqualityComparator;
    }());
    PredictionContext.IdentityEqualityComparator = IdentityEqualityComparator;
})(PredictionContext = exports.PredictionContext || (exports.PredictionContext = {}));
exports.PredictionContext = PredictionContext;
