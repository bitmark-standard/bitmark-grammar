"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
exports.__esModule = true;
exports.XPath = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:46.4373888-07:00
var CharStreams_1 = require("../../CharStreams");
var CommonTokenStream_1 = require("../../CommonTokenStream");
var LexerNoViableAltException_1 = require("../../LexerNoViableAltException");
var ParserRuleContext_1 = require("../../ParserRuleContext");
var Token_1 = require("../../Token");
var XPathLexer_1 = require("./XPathLexer");
var XPathLexerErrorListener_1 = require("./XPathLexerErrorListener");
var XPathRuleAnywhereElement_1 = require("./XPathRuleAnywhereElement");
var XPathRuleElement_1 = require("./XPathRuleElement");
var XPathTokenAnywhereElement_1 = require("./XPathTokenAnywhereElement");
var XPathTokenElement_1 = require("./XPathTokenElement");
var XPathWildcardAnywhereElement_1 = require("./XPathWildcardAnywhereElement");
var XPathWildcardElement_1 = require("./XPathWildcardElement");
/**
 * Represent a subset of XPath XML path syntax for use in identifying nodes in
 * parse trees.
 *
 * Split path into words and separators `/` and `//` via ANTLR
 * itself then walk path elements from left to right. At each separator-word
 * pair, find set of nodes. Next stage uses those as work list.
 *
 * The basic interface is
 * {@link XPath#findAll ParseTree.findAll}`(tree, pathString, parser)`.
 * But that is just shorthand for:
 *
 * ```
 * let p = new XPath(parser, pathString);
 * return p.evaluate(tree);
 * ```
 *
 * See `TestXPath` for descriptions. In short, this
 * allows operators:
 *
 * | | |
 * | --- | --- |
 * | `/` | root |
 * | `//` | anywhere |
 * | `!` | invert; this much appear directly after root or anywhere operator |
 *
 * and path elements:
 *
 * | | |
 * | --- | --- |
 * | `ID` | token name |
 * | `'string'` | any string literal token from the grammar |
 * | `expr` | rule name |
 * | `*` | wildcard matching any node |
 *
 * Whitespace is not allowed.
 */
var XPath = /** @class */ (function () {
    function XPath(parser, path) {
        this.parser = parser;
        this.path = path;
        this.elements = this.split(path);
        // console.log(this.elements.toString());
    }
    // TODO: check for invalid token/rule names, bad syntax
    XPath.prototype.split = function (path) {
        var lexer = new XPathLexer_1.XPathLexer(CharStreams_1.CharStreams.fromString(path));
        lexer.recover = function (e) { throw e; };
        lexer.removeErrorListeners();
        lexer.addErrorListener(new XPathLexerErrorListener_1.XPathLexerErrorListener());
        var tokenStream = new CommonTokenStream_1.CommonTokenStream(lexer);
        try {
            tokenStream.fill();
        }
        catch (e) {
            if (e instanceof LexerNoViableAltException_1.LexerNoViableAltException) {
                var pos = lexer.charPositionInLine;
                var msg = "Invalid tokens or characters at index " + pos + " in path '" + path + "' -- " + e.message;
                throw new RangeError(msg);
            }
            throw e;
        }
        var tokens = tokenStream.getTokens();
        // console.log("path=" + path + "=>" + tokens);
        var elements = [];
        var n = tokens.length;
        var i = 0;
        loop: while (i < n) {
            var el = tokens[i];
            var next = void 0;
            switch (el.type) {
                case XPathLexer_1.XPathLexer.ROOT:
                case XPathLexer_1.XPathLexer.ANYWHERE:
                    var anywhere = el.type === XPathLexer_1.XPathLexer.ANYWHERE;
                    i++;
                    next = tokens[i];
                    var invert = next.type === XPathLexer_1.XPathLexer.BANG;
                    if (invert) {
                        i++;
                        next = tokens[i];
                    }
                    var pathElement = this.getXPathElement(next, anywhere);
                    pathElement.invert = invert;
                    elements.push(pathElement);
                    i++;
                    break;
                case XPathLexer_1.XPathLexer.TOKEN_REF:
                case XPathLexer_1.XPathLexer.RULE_REF:
                case XPathLexer_1.XPathLexer.WILDCARD:
                    elements.push(this.getXPathElement(el, false));
                    i++;
                    break;
                case Token_1.Token.EOF:
                    break loop;
                default:
                    throw new Error("Unknowth path element " + el);
            }
        }
        return elements;
    };
    /**
     * Convert word like `*` or `ID` or `expr` to a path
     * element. `anywhere` is `true` if `//` precedes the
     * word.
     */
    XPath.prototype.getXPathElement = function (wordToken, anywhere) {
        if (wordToken.type === Token_1.Token.EOF) {
            throw new Error("Missing path element at end of path");
        }
        var word = wordToken.text;
        if (word == null) {
            throw new Error("Expected wordToken to have text content.");
        }
        var ttype = this.parser.getTokenType(word);
        var ruleIndex = this.parser.getRuleIndex(word);
        switch (wordToken.type) {
            case XPathLexer_1.XPathLexer.WILDCARD:
                return anywhere ?
                    new XPathWildcardAnywhereElement_1.XPathWildcardAnywhereElement() :
                    new XPathWildcardElement_1.XPathWildcardElement();
            case XPathLexer_1.XPathLexer.TOKEN_REF:
            case XPathLexer_1.XPathLexer.STRING:
                if (ttype === Token_1.Token.INVALID_TYPE) {
                    throw new Error(word + " at index " +
                        wordToken.startIndex +
                        " isn't a valid token name");
                }
                return anywhere ?
                    new XPathTokenAnywhereElement_1.XPathTokenAnywhereElement(word, ttype) :
                    new XPathTokenElement_1.XPathTokenElement(word, ttype);
            default:
                if (ruleIndex === -1) {
                    throw new Error(word + " at index " +
                        wordToken.startIndex +
                        " isn't a valid rule name");
                }
                return anywhere ?
                    new XPathRuleAnywhereElement_1.XPathRuleAnywhereElement(word, ruleIndex) :
                    new XPathRuleElement_1.XPathRuleElement(word, ruleIndex);
        }
    };
    XPath.findAll = function (tree, xpath, parser) {
        var p = new XPath(parser, xpath);
        return p.evaluate(tree);
    };
    /**
     * Return a list of all nodes starting at `t` as root that satisfy the
     * path. The root `/` is relative to the node passed to {@link evaluate}.
     */
    XPath.prototype.evaluate = function (t) {
        var dummyRoot = new ParserRuleContext_1.ParserRuleContext();
        dummyRoot.addChild(t);
        var work = new Set([dummyRoot]);
        var i = 0;
        while (i < this.elements.length) {
            var next = new Set();
            for (var _i = 0, work_1 = work; _i < work_1.length; _i++) {
                var node = work_1[_i];
                if (node.childCount > 0) {
                    // only try to match next element if it has children
                    // e.g., //func/*/stat might have a token node for which
                    // we can't go looking for stat nodes.
                    var matching = this.elements[i].evaluate(node);
                    matching.forEach(next.add, next);
                }
            }
            i++;
            work = next;
        }
        return work;
    };
    XPath.WILDCARD = "*"; // word not operator/separator
    XPath.NOT = "!"; // word for invert operator
    return XPath;
}());
exports.XPath = XPath;
