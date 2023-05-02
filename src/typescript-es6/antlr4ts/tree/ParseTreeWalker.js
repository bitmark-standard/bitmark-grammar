"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
exports.__esModule = true;
exports.ParseTreeWalker = void 0;
var ErrorNode_1 = require("./ErrorNode");
var TerminalNode_1 = require("./TerminalNode");
var RuleNode_1 = require("./RuleNode");
var ParseTreeWalker = /** @class */ (function () {
    function ParseTreeWalker() {
    }
    ParseTreeWalker.prototype.walk = function (listener, t) {
        var nodeStack = [];
        var indexStack = [];
        var currentNode = t;
        var currentIndex = 0;
        while (currentNode) {
            // pre-order visit
            if (currentNode instanceof ErrorNode_1.ErrorNode) {
                if (listener.visitErrorNode) {
                    listener.visitErrorNode(currentNode);
                }
            }
            else if (currentNode instanceof TerminalNode_1.TerminalNode) {
                if (listener.visitTerminal) {
                    listener.visitTerminal(currentNode);
                }
            }
            else {
                this.enterRule(listener, currentNode);
            }
            // Move down to first child, if exists
            if (currentNode.childCount > 0) {
                nodeStack.push(currentNode);
                indexStack.push(currentIndex);
                currentIndex = 0;
                currentNode = currentNode.getChild(0);
                continue;
            }
            // No child nodes, so walk tree
            do {
                // post-order visit
                if (currentNode instanceof RuleNode_1.RuleNode) {
                    this.exitRule(listener, currentNode);
                }
                // No parent, so no siblings
                if (nodeStack.length === 0) {
                    currentNode = undefined;
                    currentIndex = 0;
                    break;
                }
                // Move to next sibling if possible
                var last = nodeStack[nodeStack.length - 1];
                currentIndex++;
                currentNode = currentIndex < last.childCount ? last.getChild(currentIndex) : undefined;
                if (currentNode) {
                    break;
                }
                // No next sibling, so move up
                currentNode = nodeStack.pop();
                currentIndex = indexStack.pop();
            } while (currentNode);
        }
    };
    /**
     * The discovery of a rule node, involves sending two events: the generic
     * {@link ParseTreeListener#enterEveryRule} and a
     * {@link RuleContext}-specific event. First we trigger the generic and then
     * the rule specific. We to them in reverse order upon finishing the node.
     */
    ParseTreeWalker.prototype.enterRule = function (listener, r) {
        var ctx = r.ruleContext;
        if (listener.enterEveryRule) {
            listener.enterEveryRule(ctx);
        }
        ctx.enterRule(listener);
    };
    ParseTreeWalker.prototype.exitRule = function (listener, r) {
        var ctx = r.ruleContext;
        ctx.exitRule(listener);
        if (listener.exitEveryRule) {
            listener.exitEveryRule(ctx);
        }
    };
    return ParseTreeWalker;
}());
exports.ParseTreeWalker = ParseTreeWalker;
(function (ParseTreeWalker) {
    ParseTreeWalker.DEFAULT = new ParseTreeWalker();
})(ParseTreeWalker = exports.ParseTreeWalker || (exports.ParseTreeWalker = {}));
exports.ParseTreeWalker = ParseTreeWalker;
