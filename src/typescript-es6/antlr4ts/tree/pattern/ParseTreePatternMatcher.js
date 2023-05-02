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
exports.ParseTreePatternMatcher = void 0;
// CONVERSTION complete, Burt Harris 10/14/2016
var BailErrorStrategy_1 = require("../../BailErrorStrategy");
var CharStreams_1 = require("../../CharStreams");
var CommonTokenStream_1 = require("../../CommonTokenStream");
var ListTokenSource_1 = require("../../ListTokenSource");
var MultiMap_1 = require("../../misc/MultiMap");
var Decorators_1 = require("../../Decorators");
var ParseCancellationException_1 = require("../../misc/ParseCancellationException");
var ParserInterpreter_1 = require("../../ParserInterpreter");
var ParserRuleContext_1 = require("../../ParserRuleContext");
var ParseTreeMatch_1 = require("./ParseTreeMatch");
var ParseTreePattern_1 = require("./ParseTreePattern");
var RecognitionException_1 = require("../../RecognitionException");
var RuleNode_1 = require("../RuleNode");
var RuleTagToken_1 = require("./RuleTagToken");
var TagChunk_1 = require("./TagChunk");
var TerminalNode_1 = require("../TerminalNode");
var TextChunk_1 = require("./TextChunk");
var Token_1 = require("../../Token");
var TokenTagToken_1 = require("./TokenTagToken");
/**
 * A tree pattern matching mechanism for ANTLR {@link ParseTree}s.
 *
 * Patterns are strings of source input text with special tags representing
 * token or rule references such as:
 *
 * ```
 * <ID> = <expr>;
 * ```
 *
 * Given a pattern start rule such as `statement`, this object constructs
 * a {@link ParseTree} with placeholders for the `ID` and `expr`
 * subtree. Then the {@link #match} routines can compare an actual
 * {@link ParseTree} from a parse with this pattern. Tag `<ID>` matches
 * any `ID` token and tag `<expr>` references the result of the
 * `expr` rule (generally an instance of `ExprContext`.
 *
 * Pattern `x = 0;` is a similar pattern that matches the same pattern
 * except that it requires the identifier to be `x` and the expression to
 * be `0`.
 *
 * The {@link #matches} routines return `true` or `false` based
 * upon a match for the tree rooted at the parameter sent in. The
 * {@link #match} routines return a {@link ParseTreeMatch} object that
 * contains the parse tree, the parse tree pattern, and a map from tag name to
 * matched nodes (more below). A subtree that fails to match, returns with
 * {@link ParseTreeMatch#mismatchedNode} set to the first tree node that did not
 * match.
 *
 * For efficiency, you can compile a tree pattern in string form to a
 * {@link ParseTreePattern} object.
 *
 * See `TestParseTreeMatcher` for lots of examples.
 * {@link ParseTreePattern} has two static helper methods:
 * {@link ParseTreePattern#findAll} and {@link ParseTreePattern#match} that
 * are easy to use but not super efficient because they create new
 * {@link ParseTreePatternMatcher} objects each time and have to compile the
 * pattern in string form before using it.
 *
 * The lexer and parser that you pass into the {@link ParseTreePatternMatcher}
 * constructor are used to parse the pattern in string form. The lexer converts
 * the `<ID> = <expr>;` into a sequence of four tokens (assuming lexer
 * throws out whitespace or puts it on a hidden channel). Be aware that the
 * input stream is reset for the lexer (but not the parser; a
 * {@link ParserInterpreter} is created to parse the input.). Any user-defined
 * fields you have put into the lexer might get changed when this mechanism asks
 * it to scan the pattern string.
 *
 * Normally a parser does not accept token `<expr>` as a valid
 * `expr` but, from the parser passed in, we create a special version of
 * the underlying grammar representation (an {@link ATN}) that allows imaginary
 * tokens representing rules (`<expr>`) to match entire rules. We call
 * these *bypass alternatives*.
 *
 * Delimiters are `<`} and `>`}, with `\` as the escape string
 * by default, but you can set them to whatever you want using
 * {@link #setDelimiters}. You must escape both start and stop strings
 * `\<` and `\>`.
 */
var ParseTreePatternMatcher = /** @class */ (function () {
    /**
     * Constructs a {@link ParseTreePatternMatcher} or from a {@link Lexer} and
     * {@link Parser} object. The lexer input stream is altered for tokenizing
     * the tree patterns. The parser is used as a convenient mechanism to get
     * the grammar name, plus token, rule names.
     */
    function ParseTreePatternMatcher(lexer, parser) {
        this.start = "<";
        this.stop = ">";
        this.escape = "\\"; // e.g., \< and \> must escape BOTH!
        /**
         * Regular expression corresponding to escape, for global replace
         */
        this.escapeRE = /\\/g;
        this._lexer = lexer;
        this._parser = parser;
    }
    /**
     * Set the delimiters used for marking rule and token tags within concrete
     * syntax used by the tree pattern parser.
     *
     * @param start The start delimiter.
     * @param stop The stop delimiter.
     * @param escapeLeft The escape sequence to use for escaping a start or stop delimiter.
     *
     * @throws {@link Error} if `start` is not defined or empty.
     * @throws {@link Error} if `stop` is not defined or empty.
     */
    ParseTreePatternMatcher.prototype.setDelimiters = function (start, stop, escapeLeft) {
        if (!start) {
            throw new Error("start cannot be null or empty");
        }
        if (!stop) {
            throw new Error("stop cannot be null or empty");
        }
        this.start = start;
        this.stop = stop;
        this.escape = escapeLeft;
        this.escapeRE = new RegExp(escapeLeft.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    };
    ParseTreePatternMatcher.prototype.matches = function (tree, pattern, patternRuleIndex) {
        if (patternRuleIndex === void 0) { patternRuleIndex = 0; }
        if (typeof pattern === "string") {
            var p = this.compile(pattern, patternRuleIndex);
            return this.matches(tree, p);
        }
        else {
            var labels = new MultiMap_1.MultiMap();
            var mismatchedNode = this.matchImpl(tree, pattern.patternTree, labels);
            return !mismatchedNode;
        }
    };
    // Implementation of match
    ParseTreePatternMatcher.prototype.match = function (tree, pattern, patternRuleIndex) {
        if (patternRuleIndex === void 0) { patternRuleIndex = 0; }
        if (typeof pattern === "string") {
            var p = this.compile(pattern, patternRuleIndex);
            return this.match(tree, p);
        }
        else {
            var labels = new MultiMap_1.MultiMap();
            var mismatchedNode = this.matchImpl(tree, pattern.patternTree, labels);
            return new ParseTreeMatch_1.ParseTreeMatch(tree, pattern, labels, mismatchedNode);
        }
    };
    /**
     * For repeated use of a tree pattern, compile it to a
     * {@link ParseTreePattern} using this method.
     */
    ParseTreePatternMatcher.prototype.compile = function (pattern, patternRuleIndex) {
        var tokenList = this.tokenize(pattern);
        var tokenSrc = new ListTokenSource_1.ListTokenSource(tokenList);
        var tokens = new CommonTokenStream_1.CommonTokenStream(tokenSrc);
        var parser = this._parser;
        var parserInterp = new ParserInterpreter_1.ParserInterpreter(parser.grammarFileName, parser.vocabulary, parser.ruleNames, parser.getATNWithBypassAlts(), tokens);
        var tree;
        try {
            parserInterp.errorHandler = new BailErrorStrategy_1.BailErrorStrategy();
            tree = parserInterp.parse(patternRuleIndex);
            //			System.out.println("pattern tree = "+tree.toStringTree(parserInterp));
        }
        catch (e) {
            if (e instanceof ParseCancellationException_1.ParseCancellationException) {
                throw e.getCause();
            }
            else if (e instanceof RecognitionException_1.RecognitionException) {
                throw e;
            }
            else if (e instanceof Error) {
                throw new ParseTreePatternMatcher.CannotInvokeStartRule(e);
            }
            else {
                throw e;
            }
        }
        // Make sure tree pattern compilation checks for a complete parse
        if (tokens.LA(1) !== Token_1.Token.EOF) {
            throw new ParseTreePatternMatcher.StartRuleDoesNotConsumeFullPattern();
        }
        return new ParseTreePattern_1.ParseTreePattern(this, pattern, patternRuleIndex, tree);
    };
    Object.defineProperty(ParseTreePatternMatcher.prototype, "lexer", {
        /**
         * Used to convert the tree pattern string into a series of tokens. The
         * input stream is reset.
         */
        get: function () {
            return this._lexer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParseTreePatternMatcher.prototype, "parser", {
        /**
         * Used to collect to the grammar file name, token names, rule names for
         * used to parse the pattern into a parse tree.
         */
        get: function () {
            return this._parser;
        },
        enumerable: false,
        configurable: true
    });
    // ---- SUPPORT CODE ----
    /**
     * Recursively walk `tree` against `patternTree`, filling
     * `match.`{@link ParseTreeMatch#labels labels}.
     *
     * @returns the first node encountered in `tree` which does not match
     * a corresponding node in `patternTree`, or `undefined` if the match
     * was successful. The specific node returned depends on the matching
     * algorithm used by the implementation, and may be overridden.
     */
    ParseTreePatternMatcher.prototype.matchImpl = function (tree, patternTree, labels) {
        if (!tree) {
            throw new TypeError("tree cannot be null");
        }
        if (!patternTree) {
            throw new TypeError("patternTree cannot be null");
        }
        // x and <ID>, x and y, or x and x; or could be mismatched types
        if (tree instanceof TerminalNode_1.TerminalNode && patternTree instanceof TerminalNode_1.TerminalNode) {
            var mismatchedNode = void 0;
            // both are tokens and they have same type
            if (tree.symbol.type === patternTree.symbol.type) {
                if (patternTree.symbol instanceof TokenTagToken_1.TokenTagToken) { // x and <ID>
                    var tokenTagToken = patternTree.symbol;
                    // track label->list-of-nodes for both token name and label (if any)
                    labels.map(tokenTagToken.tokenName, tree);
                    var l = tokenTagToken.label;
                    if (l) {
                        labels.map(l, tree);
                    }
                }
                else if (tree.text === patternTree.text) {
                    // x and x
                }
                else {
                    // x and y
                    if (!mismatchedNode) {
                        mismatchedNode = tree;
                    }
                }
            }
            else {
                if (!mismatchedNode) {
                    mismatchedNode = tree;
                }
            }
            return mismatchedNode;
        }
        if (tree instanceof ParserRuleContext_1.ParserRuleContext
            && patternTree instanceof ParserRuleContext_1.ParserRuleContext) {
            var mismatchedNode = void 0;
            // (expr ...) and <expr>
            var ruleTagToken = this.getRuleTagToken(patternTree);
            if (ruleTagToken) {
                var m = void 0;
                if (tree.ruleContext.ruleIndex === patternTree.ruleContext.ruleIndex) {
                    // track label->list-of-nodes for both rule name and label (if any)
                    labels.map(ruleTagToken.ruleName, tree);
                    var l = ruleTagToken.label;
                    if (l) {
                        labels.map(l, tree);
                    }
                }
                else {
                    if (!mismatchedNode) {
                        mismatchedNode = tree;
                    }
                }
                return mismatchedNode;
            }
            // (expr ...) and (expr ...)
            if (tree.childCount !== patternTree.childCount) {
                if (!mismatchedNode) {
                    mismatchedNode = tree;
                }
                return mismatchedNode;
            }
            var n = tree.childCount;
            for (var i = 0; i < n; i++) {
                var childMatch = this.matchImpl(tree.getChild(i), patternTree.getChild(i), labels);
                if (childMatch) {
                    return childMatch;
                }
            }
            return mismatchedNode;
        }
        // if nodes aren't both tokens or both rule nodes, can't match
        return tree;
    };
    /** Is `t` `(expr <expr>)` subtree? */
    ParseTreePatternMatcher.prototype.getRuleTagToken = function (t) {
        if (t instanceof RuleNode_1.RuleNode) {
            if (t.childCount === 1 && t.getChild(0) instanceof TerminalNode_1.TerminalNode) {
                var c = t.getChild(0);
                if (c.symbol instanceof RuleTagToken_1.RuleTagToken) {
                    //					System.out.println("rule tag subtree "+t.toStringTree(parser));
                    return c.symbol;
                }
            }
        }
        return undefined;
    };
    ParseTreePatternMatcher.prototype.tokenize = function (pattern) {
        // split pattern into chunks: sea (raw input) and islands (<ID>, <expr>)
        var chunks = this.split(pattern);
        // create token stream from text and tags
        var tokens = [];
        for (var _i = 0, chunks_1 = chunks; _i < chunks_1.length; _i++) {
            var chunk = chunks_1[_i];
            if (chunk instanceof TagChunk_1.TagChunk) {
                var tagChunk = chunk;
                var firstChar = tagChunk.tag.substr(0, 1);
                // add special rule token or conjure up new token from name
                if (firstChar === firstChar.toUpperCase()) {
                    var ttype = this._parser.getTokenType(tagChunk.tag);
                    if (ttype === Token_1.Token.INVALID_TYPE) {
                        throw new Error("Unknown token " + tagChunk.tag + " in pattern: " + pattern);
                    }
                    var t = new TokenTagToken_1.TokenTagToken(tagChunk.tag, ttype, tagChunk.label);
                    tokens.push(t);
                }
                else if (firstChar === firstChar.toLowerCase()) {
                    var ruleIndex = this._parser.getRuleIndex(tagChunk.tag);
                    if (ruleIndex === -1) {
                        throw new Error("Unknown rule " + tagChunk.tag + " in pattern: " + pattern);
                    }
                    var ruleImaginaryTokenType = this._parser.getATNWithBypassAlts().ruleToTokenType[ruleIndex];
                    tokens.push(new RuleTagToken_1.RuleTagToken(tagChunk.tag, ruleImaginaryTokenType, tagChunk.label));
                }
                else {
                    throw new Error("invalid tag: " + tagChunk.tag + " in pattern: " + pattern);
                }
            }
            else {
                var textChunk = chunk;
                this._lexer.inputStream = CharStreams_1.CharStreams.fromString(textChunk.text);
                var t = this._lexer.nextToken();
                while (t.type !== Token_1.Token.EOF) {
                    tokens.push(t);
                    t = this._lexer.nextToken();
                }
            }
        }
        //		System.out.println("tokens="+tokens);
        return tokens;
    };
    /** Split `<ID> = <e:expr> ;` into 4 chunks for tokenizing by {@link #tokenize}. */
    ParseTreePatternMatcher.prototype.split = function (pattern) {
        var p = 0;
        var n = pattern.length;
        var chunks = [];
        var buf;
        // find all start and stop indexes first, then collect
        var starts = [];
        var stops = [];
        while (p < n) {
            if (p === pattern.indexOf(this.escape + this.start, p)) {
                p += this.escape.length + this.start.length;
            }
            else if (p === pattern.indexOf(this.escape + this.stop, p)) {
                p += this.escape.length + this.stop.length;
            }
            else if (p === pattern.indexOf(this.start, p)) {
                starts.push(p);
                p += this.start.length;
            }
            else if (p === pattern.indexOf(this.stop, p)) {
                stops.push(p);
                p += this.stop.length;
            }
            else {
                p++;
            }
        }
        //		System.out.println("");
        //		System.out.println(starts);
        //		System.out.println(stops);
        if (starts.length > stops.length) {
            throw new Error("unterminated tag in pattern: " + pattern);
        }
        if (starts.length < stops.length) {
            throw new Error("missing start tag in pattern: " + pattern);
        }
        var ntags = starts.length;
        for (var i = 0; i < ntags; i++) {
            if (starts[i] >= stops[i]) {
                throw new Error("tag delimiters out of order in pattern: " + pattern);
            }
        }
        // collect into chunks now
        if (ntags === 0) {
            var text = pattern.substring(0, n);
            chunks.push(new TextChunk_1.TextChunk(text));
        }
        if (ntags > 0 && starts[0] > 0) { // copy text up to first tag into chunks
            var text = pattern.substring(0, starts[0]);
            chunks.push(new TextChunk_1.TextChunk(text));
        }
        for (var i = 0; i < ntags; i++) {
            // copy inside of <tag>
            var tag = pattern.substring(starts[i] + this.start.length, stops[i]);
            var ruleOrToken = tag;
            var label = void 0;
            var colon = tag.indexOf(":");
            if (colon >= 0) {
                label = tag.substring(0, colon);
                ruleOrToken = tag.substring(colon + 1, tag.length);
            }
            chunks.push(new TagChunk_1.TagChunk(ruleOrToken, label));
            if (i + 1 < ntags) {
                // copy from end of <tag> to start of next
                var text = pattern.substring(stops[i] + this.stop.length, starts[i + 1]);
                chunks.push(new TextChunk_1.TextChunk(text));
            }
        }
        if (ntags > 0) {
            var afterLastTag = stops[ntags - 1] + this.stop.length;
            if (afterLastTag < n) { // copy text from end of last tag to end
                var text = pattern.substring(afterLastTag, n);
                chunks.push(new TextChunk_1.TextChunk(text));
            }
        }
        // strip out the escape sequences from text chunks but not tags
        for (var i = 0; i < chunks.length; i++) {
            var c = chunks[i];
            if (c instanceof TextChunk_1.TextChunk) {
                var unescaped = c.text.replace(this.escapeRE, "");
                if (unescaped.length < c.text.length) {
                    chunks[i] = new TextChunk_1.TextChunk(unescaped);
                }
            }
        }
        return chunks;
    };
    __decorate([
        Decorators_1.NotNull,
        __param(1, Decorators_1.NotNull)
    ], ParseTreePatternMatcher.prototype, "match");
    __decorate([
        Decorators_1.NotNull
    ], ParseTreePatternMatcher.prototype, "lexer");
    __decorate([
        Decorators_1.NotNull
    ], ParseTreePatternMatcher.prototype, "parser");
    __decorate([
        __param(0, Decorators_1.NotNull),
        __param(1, Decorators_1.NotNull),
        __param(2, Decorators_1.NotNull)
    ], ParseTreePatternMatcher.prototype, "matchImpl");
    return ParseTreePatternMatcher;
}());
exports.ParseTreePatternMatcher = ParseTreePatternMatcher;
(function (ParseTreePatternMatcher) {
    var CannotInvokeStartRule = /** @class */ (function (_super) {
        __extends(CannotInvokeStartRule, _super);
        function CannotInvokeStartRule(error) {
            var _this = _super.call(this, "CannotInvokeStartRule: ".concat(error)) || this;
            _this.error = error;
            return _this;
        }
        return CannotInvokeStartRule;
    }(Error));
    ParseTreePatternMatcher.CannotInvokeStartRule = CannotInvokeStartRule;
    // Fixes https://github.com/antlr/antlr4/issues/413
    // "Tree pattern compilation doesn't check for a complete parse"
    var StartRuleDoesNotConsumeFullPattern = /** @class */ (function (_super) {
        __extends(StartRuleDoesNotConsumeFullPattern, _super);
        function StartRuleDoesNotConsumeFullPattern() {
            return _super.call(this, "StartRuleDoesNotConsumeFullPattern") || this;
        }
        return StartRuleDoesNotConsumeFullPattern;
    }(Error));
    ParseTreePatternMatcher.StartRuleDoesNotConsumeFullPattern = StartRuleDoesNotConsumeFullPattern;
})(ParseTreePatternMatcher = exports.ParseTreePatternMatcher || (exports.ParseTreePatternMatcher = {}));
exports.ParseTreePatternMatcher = ParseTreePatternMatcher;
