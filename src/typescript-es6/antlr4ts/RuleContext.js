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
exports.RuleContext = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:57.3490837-07:00
var ATN_1 = require("./atn/ATN");
var Recognizer_1 = require("./Recognizer");
var RuleNode_1 = require("./tree/RuleNode");
var Interval_1 = require("./misc/Interval");
var Decorators_1 = require("./Decorators");
var Trees_1 = require("./tree/Trees");
var ParserRuleContext_1 = require("./ParserRuleContext");
/** A rule context is a record of a single rule invocation.
 *
 *  We form a stack of these context objects using the parent
 *  pointer. A parent pointer of `undefined` indicates that the current
 *  context is the bottom of the stack. The ParserRuleContext subclass
 *  as a children list so that we can turn this data structure into a
 *  tree.
 *
 *  The root node always has a `undefined` pointer and invokingState of -1.
 *
 *  Upon entry to parsing, the first invoked rule function creates a
 *  context object (a subclass specialized for that rule such as
 *  SContext) and makes it the root of a parse tree, recorded by field
 *  Parser._ctx.
 *
 *  public final SContext s() throws RecognitionException {
 *      SContext _localctx = new SContext(_ctx, state); <-- create new node
 *      enterRule(_localctx, 0, RULE_s);                     <-- push it
 *      ...
 *      exitRule();                                          <-- pop back to _localctx
 *      return _localctx;
 *  }
 *
 *  A subsequent rule invocation of r from the start rule s pushes a
 *  new context object for r whose parent points at s and use invoking
 *  state is the state with r emanating as edge label.
 *
 *  The invokingState fields from a context object to the root
 *  together form a stack of rule indication states where the root
 *  (bottom of the stack) has a -1 sentinel value. If we invoke start
 *  symbol s then call r1, which calls r2, the  would look like
 *  this:
 *
 *     SContext[-1]   <- root node (bottom of the stack)
 *     R1Context[p]   <- p in rule s called r1
 *     R2Context[q]   <- q in rule r1 called r2
 *
 *  So the top of the stack, _ctx, represents a call to the current
 *  rule and it holds the return address from another rule that invoke
 *  to this rule. To invoke a rule, we must always have a current context.
 *
 *  The parent contexts are useful for computing lookahead sets and
 *  getting error information.
 *
 *  These objects are used during parsing and prediction.
 *  For the special case of parsers, we use the subclass
 *  ParserRuleContext.
 *
 *  @see ParserRuleContext
 */
var RuleContext = /** @class */ (function (_super) {
    __extends(RuleContext, _super);
    function RuleContext(parent, invokingState) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this.invokingState = invokingState != null ? invokingState : -1;
        return _this;
    }
    RuleContext.getChildContext = function (parent, invokingState) {
        return new RuleContext(parent, invokingState);
    };
    RuleContext.prototype.depth = function () {
        var n = 0;
        var p = this;
        while (p) {
            p = p._parent;
            n++;
        }
        return n;
    };
    Object.defineProperty(RuleContext.prototype, "isEmpty", {
        /** A context is empty if there is no invoking state; meaning nobody called
         *  current context.
         */
        get: function () {
            return this.invokingState === -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "sourceInterval", {
        // satisfy the ParseTree / SyntaxTree interface
        get: function () {
            return Interval_1.Interval.INVALID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "ruleContext", {
        get: function () { return this; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "parent", {
        get: function () { return this._parent; },
        enumerable: false,
        configurable: true
    });
    /** @since 4.7. {@see ParseTree#setParent} comment */
    RuleContext.prototype.setParent = function (parent) {
        this._parent = parent;
    };
    Object.defineProperty(RuleContext.prototype, "payload", {
        get: function () { return this; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "text", {
        /** Return the combined text of all child nodes. This method only considers
         *  tokens which have been added to the parse tree.
         *
         *  Since tokens on hidden channels (e.g. whitespace or comments) are not
         *  added to the parse trees, they will not appear in the output of this
         *  method.
         */
        get: function () {
            if (this.childCount === 0) {
                return "";
            }
            var builder = "";
            for (var i = 0; i < this.childCount; i++) {
                builder += this.getChild(i).text;
            }
            return builder.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "ruleIndex", {
        get: function () { return -1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RuleContext.prototype, "altNumber", {
        /** For rule associated with this parse tree internal node, return
         *  the outer alternative number used to match the input. Default
         *  implementation does not compute nor store this alt num. Create
         *  a subclass of ParserRuleContext with backing field and set
         *  option contextSuperClass.
         *  to set it.
         *
         *  @since 4.5.3
         */
        get: function () { return ATN_1.ATN.INVALID_ALT_NUMBER; },
        /** Set the outer alternative number for this context node. Default
         *  implementation does nothing to avoid backing field overhead for
         *  trees that don't need it.  Create
         *  a subclass of ParserRuleContext with backing field and set
         *  option contextSuperClass.
         *
         *  @since 4.5.3
         */
        set: function (altNumber) {
            // intentionally ignored by the base implementation
        },
        enumerable: false,
        configurable: true
    });
    RuleContext.prototype.getChild = function (i) {
        throw new RangeError("i must be greater than or equal to 0 and less than childCount");
    };
    Object.defineProperty(RuleContext.prototype, "childCount", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    RuleContext.prototype.accept = function (visitor) {
        return visitor.visitChildren(this);
    };
    RuleContext.prototype.toStringTree = function (recog) {
        return Trees_1.Trees.toStringTree(this, recog);
    };
    RuleContext.prototype.toString = function (arg1, stop) {
        var ruleNames = (arg1 instanceof Recognizer_1.Recognizer) ? arg1.ruleNames : arg1;
        stop = stop || ParserRuleContext_1.ParserRuleContext.emptyContext();
        var buf = "";
        var p = this;
        buf += ("[");
        while (p && p !== stop) {
            if (!ruleNames) {
                if (!p.isEmpty) {
                    buf += (p.invokingState);
                }
            }
            else {
                var ruleIndex = p.ruleIndex;
                var ruleName = (ruleIndex >= 0 && ruleIndex < ruleNames.length)
                    ? ruleNames[ruleIndex] : ruleIndex.toString();
                buf += (ruleName);
            }
            if (p._parent && (ruleNames || !p._parent.isEmpty)) {
                buf += (" ");
            }
            p = p._parent;
        }
        buf += ("]");
        return buf.toString();
    };
    __decorate([
        Decorators_1.Override
    ], RuleContext.prototype, "sourceInterval");
    __decorate([
        Decorators_1.Override
    ], RuleContext.prototype, "ruleContext");
    __decorate([
        Decorators_1.Override
    ], RuleContext.prototype, "parent");
    __decorate([
        Decorators_1.Override
    ], RuleContext.prototype, "setParent");
    __decorate([
        Decorators_1.Override
    ], RuleContext.prototype, "payload");
    __decorate([
        Decorators_1.Override
    ], RuleContext.prototype, "text");
    __decorate([
        Decorators_1.Override
    ], RuleContext.prototype, "getChild");
    __decorate([
        Decorators_1.Override
    ], RuleContext.prototype, "childCount");
    __decorate([
        Decorators_1.Override
    ], RuleContext.prototype, "accept");
    __decorate([
        Decorators_1.Override
    ], RuleContext.prototype, "toStringTree");
    return RuleContext;
}(RuleNode_1.RuleNode));
exports.RuleContext = RuleContext;
