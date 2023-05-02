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
exports.__esModule = true;
exports.ParserRuleContext = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:56.6285494-07:00
var ErrorNode_1 = require("./tree/ErrorNode");
var Interval_1 = require("./misc/Interval");
var Decorators_1 = require("./Decorators");
var RuleContext_1 = require("./RuleContext");
var TerminalNode_1 = require("./tree/TerminalNode");
/** A rule invocation record for parsing.
 *
 *  Contains all of the information about the current rule not stored in the
 *  RuleContext. It handles parse tree children list, Any ATN state
 *  tracing, and the default values available for rule invocations:
 *  start, stop, rule index, current alt number.
 *
 *  Subclasses made for each rule and grammar track the parameters,
 *  return values, locals, and labels specific to that rule. These
 *  are the objects that are returned from rules.
 *
 *  Note text is not an actual field of a rule return value; it is computed
 *  from start and stop using the input stream's toString() method.  I
 *  could add a ctor to this so that we can pass in and store the input
 *  stream, but I'm not sure we want to do that.  It would seem to be undefined
 *  to get the .text property anyway if the rule matches tokens from multiple
 *  input streams.
 *
 *  I do not use getters for fields of objects that are used simply to
 *  group values such as this aggregate.  The getters/setters are there to
 *  satisfy the superclass interface.
 */
var ParserRuleContext = /** @class */ (function (_super) {
    __extends(ParserRuleContext, _super);
    function ParserRuleContext(parent, invokingStateNumber) {
        var _this = this;
        if (invokingStateNumber == null) {
            _this = _super.call(this) || this;
        }
        else {
            _this = _super.call(this, parent, invokingStateNumber) || this;
        }
        return _this;
    }
    ParserRuleContext.emptyContext = function () {
        return ParserRuleContext.EMPTY;
    };
    /**
     * COPY a ctx (I'm deliberately not using copy constructor) to avoid
     * confusion with creating node with parent. Does not copy children
     * (except error leaves).
     *
     * This is used in the generated parser code to flip a generic XContext
     * node for rule X to a YContext for alt label Y. In that sense, it is not
     * really a generic copy function.
     *
     * If we do an error sync() at start of a rule, we might add error nodes
     * to the generic XContext so this function must copy those nodes to the
     * YContext as well else they are lost!
     */
    ParserRuleContext.prototype.copyFrom = function (ctx) {
        this._parent = ctx._parent;
        this.invokingState = ctx.invokingState;
        this._start = ctx._start;
        this._stop = ctx._stop;
        // copy any error nodes to alt label node
        if (ctx.children) {
            this.children = [];
            // reset parent pointer for any error nodes
            for (var _i = 0, _a = ctx.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child instanceof ErrorNode_1.ErrorNode) {
                    this.addChild(child);
                }
            }
        }
    };
    // Double dispatch methods for listeners
    ParserRuleContext.prototype.enterRule = function (listener) {
        // intentionally empty
    };
    ParserRuleContext.prototype.exitRule = function (listener) {
        // intentionally empty
    };
    /** Add a parse tree node to this as a child.  Works for
     *  internal and leaf nodes. Does not set parent link;
     *  other add methods must do that. Other addChild methods
     *  call this.
     *
     *  We cannot set the parent pointer of the incoming node
     *  because the existing interfaces do not have a setParent()
     *  method and I don't want to break backward compatibility for this.
     *
     *  @since 4.7
     */
    ParserRuleContext.prototype.addAnyChild = function (t) {
        if (!this.children) {
            this.children = [t];
        }
        else {
            this.children.push(t);
        }
        return t;
    };
    ParserRuleContext.prototype.addChild = function (t) {
        var result;
        if (t instanceof TerminalNode_1.TerminalNode) {
            t.setParent(this);
            this.addAnyChild(t);
            return;
        }
        else if (t instanceof RuleContext_1.RuleContext) {
            // Does not set parent link
            this.addAnyChild(t);
            return;
        }
        else {
            // Deprecated code path
            t = new TerminalNode_1.TerminalNode(t);
            this.addAnyChild(t);
            t.setParent(this);
            return t;
        }
    };
    ParserRuleContext.prototype.addErrorNode = function (node) {
        if (node instanceof ErrorNode_1.ErrorNode) {
            var errorNode = node;
            errorNode.setParent(this);
            return this.addAnyChild(errorNode);
        }
        else {
            // deprecated path
            var badToken = node;
            var t = new ErrorNode_1.ErrorNode(badToken);
            this.addAnyChild(t);
            t.setParent(this);
            return t;
        }
    };
    //	public void trace(int s) {
    //		if ( states==null ) states = new ArrayList<Integer>();
    //		states.add(s);
    //	}
    /** Used by enterOuterAlt to toss out a RuleContext previously added as
     *  we entered a rule. If we have # label, we will need to remove
     *  generic ruleContext object.
     */
    ParserRuleContext.prototype.removeLastChild = function () {
        if (this.children) {
            this.children.pop();
        }
    };
    Object.defineProperty(ParserRuleContext.prototype, "parent", {
        get: function () {
            var parent = _super.prototype.parent;
            if (parent === undefined || parent instanceof ParserRuleContext) {
                return parent;
            }
            throw new TypeError("Invalid parent type for ParserRuleContext");
        },
        enumerable: false,
        configurable: true
    });
    // Note: in TypeScript, order or arguments reversed
    ParserRuleContext.prototype.getChild = function (i, ctxType) {
        if (!this.children || i < 0 || i >= this.children.length) {
            throw new RangeError("index parameter must be between >= 0 and <= number of children.");
        }
        if (ctxType == null) {
            return this.children[i];
        }
        var result = this.tryGetChild(i, ctxType);
        if (result === undefined) {
            throw new Error("The specified node does not exist");
        }
        return result;
    };
    ParserRuleContext.prototype.tryGetChild = function (i, ctxType) {
        if (!this.children || i < 0 || i >= this.children.length) {
            return undefined;
        }
        var j = -1; // what node with ctxType have we found?
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o instanceof ctxType) {
                j++;
                if (j === i) {
                    return o;
                }
            }
        }
        return undefined;
    };
    ParserRuleContext.prototype.getToken = function (ttype, i) {
        var result = this.tryGetToken(ttype, i);
        if (result === undefined) {
            throw new Error("The specified token does not exist");
        }
        return result;
    };
    ParserRuleContext.prototype.tryGetToken = function (ttype, i) {
        if (!this.children || i < 0 || i >= this.children.length) {
            return undefined;
        }
        var j = -1; // what token with ttype have we found?
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o instanceof TerminalNode_1.TerminalNode) {
                var symbol = o.symbol;
                if (symbol.type === ttype) {
                    j++;
                    if (j === i) {
                        return o;
                    }
                }
            }
        }
        return undefined;
    };
    ParserRuleContext.prototype.getTokens = function (ttype) {
        var tokens = [];
        if (!this.children) {
            return tokens;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o instanceof TerminalNode_1.TerminalNode) {
                var symbol = o.symbol;
                if (symbol.type === ttype) {
                    tokens.push(o);
                }
            }
        }
        return tokens;
    };
    Object.defineProperty(ParserRuleContext.prototype, "ruleContext", {
        get: function () {
            return this;
        },
        enumerable: false,
        configurable: true
    });
    // NOTE: argument order change from Java version
    ParserRuleContext.prototype.getRuleContext = function (i, ctxType) {
        return this.getChild(i, ctxType);
    };
    ParserRuleContext.prototype.tryGetRuleContext = function (i, ctxType) {
        return this.tryGetChild(i, ctxType);
    };
    ParserRuleContext.prototype.getRuleContexts = function (ctxType) {
        var contexts = [];
        if (!this.children) {
            return contexts;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o instanceof ctxType) {
                contexts.push(o);
            }
        }
        return contexts;
    };
    Object.defineProperty(ParserRuleContext.prototype, "childCount", {
        get: function () {
            return this.children ? this.children.length : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParserRuleContext.prototype, "sourceInterval", {
        get: function () {
            if (!this._start) {
                return Interval_1.Interval.INVALID;
            }
            if (!this._stop || this._stop.tokenIndex < this._start.tokenIndex) {
                return Interval_1.Interval.of(this._start.tokenIndex, this._start.tokenIndex - 1); // empty
            }
            return Interval_1.Interval.of(this._start.tokenIndex, this._stop.tokenIndex);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParserRuleContext.prototype, "start", {
        /**
         * Get the initial token in this context.
         * Note that the range from start to stop is inclusive, so for rules that do not consume anything
         * (for example, zero length or error productions) this token may exceed stop.
         */
        get: function () { return this._start; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParserRuleContext.prototype, "stop", {
        /**
         * Get the final token in this context.
         * Note that the range from start to stop is inclusive, so for rules that do not consume anything
         * (for example, zero length or error productions) this token may precede start.
         */
        get: function () { return this._stop; },
        enumerable: false,
        configurable: true
    });
    /** Used for rule context info debugging during parse-time, not so much for ATN debugging */
    ParserRuleContext.prototype.toInfoString = function (recognizer) {
        var rules = recognizer.getRuleInvocationStack(this).reverse();
        return "ParserRuleContext" + rules + "{" +
            "start=" + this._start +
            ", stop=" + this._stop +
            "}";
    };
    ParserRuleContext.EMPTY = new ParserRuleContext();
    __decorate([
        Decorators_1.Override
        /** Override to make type more specific */
    ], ParserRuleContext.prototype, "parent");
    __decorate([
        Decorators_1.Override
    ], ParserRuleContext.prototype, "childCount");
    __decorate([
        Decorators_1.Override
    ], ParserRuleContext.prototype, "sourceInterval");
    return ParserRuleContext;
}(RuleContext_1.RuleContext));
exports.ParserRuleContext = ParserRuleContext;
