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
exports.ATNConfigSet = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:25.5488013-07:00
var Array2DHashMap_1 = require("../misc/Array2DHashMap");
var Array2DHashSet_1 = require("../misc/Array2DHashSet");
var ArrayEqualityComparator_1 = require("../misc/ArrayEqualityComparator");
var ATN_1 = require("./ATN");
var ATNConfig_1 = require("./ATNConfig");
var BitSet_1 = require("../misc/BitSet");
var Decorators_1 = require("../Decorators");
var ObjectEqualityComparator_1 = require("../misc/ObjectEqualityComparator");
var PredictionContext_1 = require("./PredictionContext");
var PredictionContextCache_1 = require("./PredictionContextCache");
var SemanticContext_1 = require("./SemanticContext");
var assert = require("assert");
var Utils = require("../misc/Utils");
var KeyTypeEqualityComparer = /** @class */ (function () {
    function KeyTypeEqualityComparer() {
    }
    KeyTypeEqualityComparer.prototype.hashCode = function (key) {
        return key.state ^ key.alt;
    };
    KeyTypeEqualityComparer.prototype.equals = function (a, b) {
        return a.state === b.state && a.alt === b.alt;
    };
    KeyTypeEqualityComparer.INSTANCE = new KeyTypeEqualityComparer();
    return KeyTypeEqualityComparer;
}());
function NewKeyedConfigMap(map) {
    if (map) {
        return new Array2DHashMap_1.Array2DHashMap(map);
    }
    else {
        return new Array2DHashMap_1.Array2DHashMap(KeyTypeEqualityComparer.INSTANCE);
    }
}
/**
 * Represents a set of ATN configurations (see `ATNConfig`). As configurations are added to the set, they are merged
 * with other `ATNConfig` instances already in the set when possible using the graph-structured stack.
 *
 * An instance of this class represents the complete set of positions (with context) in an ATN which would be associated
 * with a single DFA state. Its internal representation is more complex than traditional state used for NFA to DFA
 * conversion due to performance requirements (both improving speed and reducing memory overhead) as well as supporting
 * features such as semantic predicates and non-greedy operators in a form to support ANTLR's prediction algorithm.
 *
 * @author Sam Harwell
 */
var ATNConfigSet = /** @class */ (function () {
    function ATNConfigSet(set, readonly) {
        this._uniqueAlt = 0;
        // Used in parser and lexer. In lexer, it indicates we hit a pred
        // while computing a closure operation.  Don't make a DFA state from this.
        this._hasSemanticContext = false;
        this._dipsIntoOuterContext = false;
        /**
         * When `true`, this config set represents configurations where the entire
         * outer context has been consumed by the ATN interpreter. This prevents the
         * {@link ParserATNSimulator#closure} from pursuing the global FOLLOW when a
         * rule stop state is reached with an empty prediction context.
         *
         * Note: `outermostConfigSet` and {@link #dipsIntoOuterContext} should never
         * be true at the same time.
         */
        this.outermostConfigSet = false;
        this.cachedHashCode = -1;
        if (!set) {
            this.mergedConfigs = NewKeyedConfigMap();
            this.unmerged = [];
            this.configs = [];
            this._uniqueAlt = ATN_1.ATN.INVALID_ALT_NUMBER;
        }
        else {
            if (readonly) {
                this.mergedConfigs = undefined;
                this.unmerged = undefined;
            }
            else if (!set.isReadOnly) {
                this.mergedConfigs = NewKeyedConfigMap(set.mergedConfigs);
                this.unmerged = set.unmerged.slice(0);
            }
            else {
                this.mergedConfigs = NewKeyedConfigMap();
                this.unmerged = [];
            }
            this.configs = set.configs.slice(0);
            this._dipsIntoOuterContext = set._dipsIntoOuterContext;
            this._hasSemanticContext = set._hasSemanticContext;
            this.outermostConfigSet = set.outermostConfigSet;
            if (readonly || !set.isReadOnly) {
                this._uniqueAlt = set._uniqueAlt;
                this._conflictInfo = set._conflictInfo;
            }
            // if (!readonly && set.isReadOnly) -> addAll is called from clone()
        }
    }
    /**
     * Get the set of all alternatives represented by configurations in this
     * set.
     */
    ATNConfigSet.prototype.getRepresentedAlternatives = function () {
        if (this._conflictInfo != null) {
            return this._conflictInfo.conflictedAlts.clone();
        }
        var alts = new BitSet_1.BitSet();
        for (var _i = 0, _b = this; _i < _b.length; _i++) {
            var config = _b[_i];
            alts.set(config.alt);
        }
        return alts;
    };
    Object.defineProperty(ATNConfigSet.prototype, "isReadOnly", {
        get: function () {
            return this.mergedConfigs == null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "isOutermostConfigSet", {
        get: function () {
            return this.outermostConfigSet;
        },
        set: function (outermostConfigSet) {
            if (this.outermostConfigSet && !outermostConfigSet) {
                throw new Error("IllegalStateException");
            }
            assert(!outermostConfigSet || !this._dipsIntoOuterContext);
            this.outermostConfigSet = outermostConfigSet;
        },
        enumerable: false,
        configurable: true
    });
    ATNConfigSet.prototype.getStates = function () {
        var states = new Array2DHashSet_1.Array2DHashSet(ObjectEqualityComparator_1.ObjectEqualityComparator.INSTANCE);
        for (var _i = 0, _b = this.configs; _i < _b.length; _i++) {
            var c = _b[_i];
            states.add(c.state);
        }
        return states;
    };
    ATNConfigSet.prototype.optimizeConfigs = function (interpreter) {
        if (this.configs.length === 0) {
            return;
        }
        for (var _i = 0, _b = this.configs; _i < _b.length; _i++) {
            var config = _b[_i];
            config.context = interpreter.atn.getCachedContext(config.context);
        }
    };
    ATNConfigSet.prototype.clone = function (readonly) {
        var copy = new ATNConfigSet(this, readonly);
        if (!readonly && this.isReadOnly) {
            copy.addAll(this.configs);
        }
        return copy;
    };
    Object.defineProperty(ATNConfigSet.prototype, "size", {
        get: function () {
            return this.configs.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "isEmpty", {
        get: function () {
            return this.configs.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    ATNConfigSet.prototype.contains = function (o) {
        if (!(o instanceof ATNConfig_1.ATNConfig)) {
            return false;
        }
        if (this.mergedConfigs && this.unmerged) {
            var config = o;
            var configKey = this.getKey(config);
            var mergedConfig = this.mergedConfigs.get(configKey);
            if (mergedConfig != null && this.canMerge(config, configKey, mergedConfig)) {
                return mergedConfig.contains(config);
            }
            for (var _i = 0, _b = this.unmerged; _i < _b.length; _i++) {
                var c = _b[_i];
                if (c.contains(o)) {
                    return true;
                }
            }
        }
        else {
            for (var _c = 0, _d = this.configs; _c < _d.length; _c++) {
                var c = _d[_c];
                if (c.contains(o)) {
                    return true;
                }
            }
        }
        return false;
    };
    ATNConfigSet.prototype[_a = Symbol.iterator] = function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [5 /*yield**/, __values(this.configs)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    };
    ATNConfigSet.prototype.toArray = function () {
        return this.configs;
    };
    ATNConfigSet.prototype.add = function (e, contextCache) {
        this.ensureWritable();
        if (!this.mergedConfigs || !this.unmerged) {
            throw new Error("Covered by ensureWritable but duplicated here for strict null check limitation");
        }
        assert(!this.outermostConfigSet || !e.reachesIntoOuterContext);
        if (contextCache == null) {
            contextCache = PredictionContextCache_1.PredictionContextCache.UNCACHED;
        }
        var addKey;
        var key = this.getKey(e);
        var mergedConfig = this.mergedConfigs.get(key);
        addKey = (mergedConfig == null);
        if (mergedConfig != null && this.canMerge(e, key, mergedConfig)) {
            mergedConfig.outerContextDepth = Math.max(mergedConfig.outerContextDepth, e.outerContextDepth);
            if (e.isPrecedenceFilterSuppressed) {
                mergedConfig.isPrecedenceFilterSuppressed = true;
            }
            var joined = PredictionContext_1.PredictionContext.join(mergedConfig.context, e.context, contextCache);
            this.updatePropertiesForMergedConfig(e);
            if (mergedConfig.context === joined) {
                return false;
            }
            mergedConfig.context = joined;
            return true;
        }
        for (var i = 0; i < this.unmerged.length; i++) {
            var unmergedConfig = this.unmerged[i];
            if (this.canMerge(e, key, unmergedConfig)) {
                unmergedConfig.outerContextDepth = Math.max(unmergedConfig.outerContextDepth, e.outerContextDepth);
                if (e.isPrecedenceFilterSuppressed) {
                    unmergedConfig.isPrecedenceFilterSuppressed = true;
                }
                var joined = PredictionContext_1.PredictionContext.join(unmergedConfig.context, e.context, contextCache);
                this.updatePropertiesForMergedConfig(e);
                if (unmergedConfig.context === joined) {
                    return false;
                }
                unmergedConfig.context = joined;
                if (addKey) {
                    this.mergedConfigs.put(key, unmergedConfig);
                    this.unmerged.splice(i, 1);
                }
                return true;
            }
        }
        this.configs.push(e);
        if (addKey) {
            this.mergedConfigs.put(key, e);
        }
        else {
            this.unmerged.push(e);
        }
        this.updatePropertiesForAddedConfig(e);
        return true;
    };
    ATNConfigSet.prototype.updatePropertiesForMergedConfig = function (config) {
        // merged configs can't change the alt or semantic context
        this._dipsIntoOuterContext = this._dipsIntoOuterContext || config.reachesIntoOuterContext;
        assert(!this.outermostConfigSet || !this._dipsIntoOuterContext);
    };
    ATNConfigSet.prototype.updatePropertiesForAddedConfig = function (config) {
        if (this.configs.length === 1) {
            this._uniqueAlt = config.alt;
        }
        else if (this._uniqueAlt !== config.alt) {
            this._uniqueAlt = ATN_1.ATN.INVALID_ALT_NUMBER;
        }
        this._hasSemanticContext = this._hasSemanticContext || !SemanticContext_1.SemanticContext.NONE.equals(config.semanticContext);
        this._dipsIntoOuterContext = this._dipsIntoOuterContext || config.reachesIntoOuterContext;
        assert(!this.outermostConfigSet || !this._dipsIntoOuterContext);
    };
    ATNConfigSet.prototype.canMerge = function (left, leftKey, right) {
        if (left.state.stateNumber !== right.state.stateNumber) {
            return false;
        }
        if (leftKey.alt !== right.alt) {
            return false;
        }
        return left.semanticContext.equals(right.semanticContext);
    };
    ATNConfigSet.prototype.getKey = function (e) {
        return { state: e.state.stateNumber, alt: e.alt };
    };
    ATNConfigSet.prototype.containsAll = function (c) {
        for (var _i = 0, c_1 = c; _i < c_1.length; _i++) {
            var o = c_1[_i];
            if (!(o instanceof ATNConfig_1.ATNConfig)) {
                return false;
            }
            if (!this.contains(o)) {
                return false;
            }
        }
        return true;
    };
    ATNConfigSet.prototype.addAll = function (c, contextCache) {
        this.ensureWritable();
        var changed = false;
        for (var _i = 0, c_2 = c; _i < c_2.length; _i++) {
            var group = c_2[_i];
            if (this.add(group, contextCache)) {
                changed = true;
            }
        }
        return changed;
    };
    ATNConfigSet.prototype.clear = function () {
        this.ensureWritable();
        if (!this.mergedConfigs || !this.unmerged) {
            throw new Error("Covered by ensureWritable but duplicated here for strict null check limitation");
        }
        this.mergedConfigs.clear();
        this.unmerged.length = 0;
        this.configs.length = 0;
        this._dipsIntoOuterContext = false;
        this._hasSemanticContext = false;
        this._uniqueAlt = ATN_1.ATN.INVALID_ALT_NUMBER;
        this._conflictInfo = undefined;
    };
    ATNConfigSet.prototype.equals = function (obj) {
        if (this === obj) {
            return true;
        }
        if (!(obj instanceof ATNConfigSet)) {
            return false;
        }
        return this.outermostConfigSet === obj.outermostConfigSet
            && Utils.equals(this._conflictInfo, obj._conflictInfo)
            && ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.equals(this.configs, obj.configs);
    };
    ATNConfigSet.prototype.hashCode = function () {
        if (this.isReadOnly && this.cachedHashCode !== -1) {
            return this.cachedHashCode;
        }
        var hashCode = 1;
        hashCode = 5 * hashCode ^ (this.outermostConfigSet ? 1 : 0);
        hashCode = 5 * hashCode ^ ArrayEqualityComparator_1.ArrayEqualityComparator.INSTANCE.hashCode(this.configs);
        if (this.isReadOnly) {
            this.cachedHashCode = hashCode;
        }
        return hashCode;
    };
    ATNConfigSet.prototype.toString = function (showContext) {
        if (showContext == null) {
            showContext = false;
        }
        var buf = "";
        var sortedConfigs = this.configs.slice(0);
        sortedConfigs.sort(function (o1, o2) {
            if (o1.alt !== o2.alt) {
                return o1.alt - o2.alt;
            }
            else if (o1.state.stateNumber !== o2.state.stateNumber) {
                return o1.state.stateNumber - o2.state.stateNumber;
            }
            else {
                return o1.semanticContext.toString().localeCompare(o2.semanticContext.toString());
            }
        });
        buf += ("[");
        for (var i = 0; i < sortedConfigs.length; i++) {
            if (i > 0) {
                buf += (", ");
            }
            buf += (sortedConfigs[i].toString(undefined, true, showContext));
        }
        buf += ("]");
        if (this._hasSemanticContext) {
            buf += (",hasSemanticContext=") + (this._hasSemanticContext);
        }
        if (this._uniqueAlt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
            buf += (",uniqueAlt=") + (this._uniqueAlt);
        }
        if (this._conflictInfo != null) {
            buf += (",conflictingAlts=") + (this._conflictInfo.conflictedAlts);
            if (!this._conflictInfo.isExact) {
                buf += ("*");
            }
        }
        if (this._dipsIntoOuterContext) {
            buf += (",dipsIntoOuterContext");
        }
        return buf.toString();
    };
    Object.defineProperty(ATNConfigSet.prototype, "uniqueAlt", {
        get: function () {
            return this._uniqueAlt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "hasSemanticContext", {
        get: function () {
            return this._hasSemanticContext;
        },
        set: function (value) {
            this.ensureWritable();
            this._hasSemanticContext = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "conflictInfo", {
        get: function () {
            return this._conflictInfo;
        },
        set: function (conflictInfo) {
            this.ensureWritable();
            this._conflictInfo = conflictInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "conflictingAlts", {
        get: function () {
            if (this._conflictInfo == null) {
                return undefined;
            }
            return this._conflictInfo.conflictedAlts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "isExactConflict", {
        get: function () {
            if (this._conflictInfo == null) {
                return false;
            }
            return this._conflictInfo.isExact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ATNConfigSet.prototype, "dipsIntoOuterContext", {
        get: function () {
            return this._dipsIntoOuterContext;
        },
        enumerable: false,
        configurable: true
    });
    ATNConfigSet.prototype.get = function (index) {
        return this.configs[index];
    };
    ATNConfigSet.prototype.ensureWritable = function () {
        if (this.isReadOnly) {
            throw new Error("This ATNConfigSet is read only.");
        }
    };
    var _a;
    __decorate([
        Decorators_1.NotNull
    ], ATNConfigSet.prototype, "getRepresentedAlternatives");
    __decorate([
        Decorators_1.Override
    ], ATNConfigSet.prototype, "size");
    __decorate([
        Decorators_1.Override
    ], ATNConfigSet.prototype, "isEmpty");
    __decorate([
        Decorators_1.Override
    ], ATNConfigSet.prototype, "contains");
    __decorate([
        Decorators_1.Override
    ], ATNConfigSet.prototype, _a);
    __decorate([
        Decorators_1.Override
    ], ATNConfigSet.prototype, "toArray");
    __decorate([
        Decorators_1.Override
    ], ATNConfigSet.prototype, "containsAll");
    __decorate([
        Decorators_1.Override
    ], ATNConfigSet.prototype, "clear");
    __decorate([
        Decorators_1.Override
    ], ATNConfigSet.prototype, "equals");
    __decorate([
        Decorators_1.Override
    ], ATNConfigSet.prototype, "hashCode");
    return ATNConfigSet;
}());
exports.ATNConfigSet = ATNConfigSet;
