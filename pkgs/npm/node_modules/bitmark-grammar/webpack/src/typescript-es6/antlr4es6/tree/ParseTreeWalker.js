/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { ErrorNode } from "./ErrorNode";
import { TerminalNode } from "./TerminalNode";
import { RuleNode } from "./RuleNode";
export class ParseTreeWalker {
    walk(listener, t) {
        let nodeStack = [];
        let indexStack = [];
        let currentNode = t;
        let currentIndex = 0;
        while (currentNode) {
            // pre-order visit
            if (currentNode instanceof ErrorNode) {
                if (listener.visitErrorNode) {
                    listener.visitErrorNode(currentNode);
                }
            }
            else if (currentNode instanceof TerminalNode) {
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
                if (currentNode instanceof RuleNode) {
                    this.exitRule(listener, currentNode);
                }
                // No parent, so no siblings
                if (nodeStack.length === 0) {
                    currentNode = undefined;
                    currentIndex = 0;
                    break;
                }
                // Move to next sibling if possible
                let last = nodeStack[nodeStack.length - 1];
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
    }
    /**
     * The discovery of a rule node, involves sending two events: the generic
     * {@link ParseTreeListener#enterEveryRule} and a
     * {@link RuleContext}-specific event. First we trigger the generic and then
     * the rule specific. We to them in reverse order upon finishing the node.
     */
    enterRule(listener, r) {
        let ctx = r.ruleContext;
        if (listener.enterEveryRule) {
            listener.enterEveryRule(ctx);
        }
        if (ctx != undefined)
            ctx.enterRule(listener);
    }
    exitRule(listener, r) {
        let ctx = r.ruleContext;
        ctx.exitRule(listener);
        if (listener.exitEveryRule) {
            listener.exitEveryRule(ctx);
        }
    }
}
(function (ParseTreeWalker) {
    ParseTreeWalker.DEFAULT = new ParseTreeWalker();
})(ParseTreeWalker || (ParseTreeWalker = {}));
