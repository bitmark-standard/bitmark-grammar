"use strict";
// Generated from ./Flashcard/flashcardParser.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.S_and_wContext = exports.LinesContext = exports.DcolonContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.Bullet_itemContext = exports.Single_gapContext = exports.GapContext = exports.ResourceContext = exports.BitElemContext = exports.VsideContext = exports.Side_NLContext = exports.SideContext = exports.Sidex_NLContext = exports.SidexContext = exports.SxContext = exports.Vocab_1Context = exports.VocabContext = exports.Flashcard_language_1Context = exports.Flashcard_language_setContext = exports.Flashcard_setContext = exports.FlashcardContext = exports.Flashcard_1Context = exports.FlashcardsContext = exports.Bitmark_Context = exports.BitmarkContext = exports.flashcardParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class flashcardParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(flashcardParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return flashcardParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "flashcardParser.g4"; }
    // @Override
    get ruleNames() { return flashcardParser.ruleNames; }
    // @Override
    get serializedATN() { return flashcardParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    bitmark() {
        let _localctx = new BitmarkContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, flashcardParser.RULE_bitmark);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 172;
                            this.bitmark_();
                            this.state = 182;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 176;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === flashcardParser.S) {
                                                {
                                                    {
                                                        this.state = 173;
                                                        this.match(flashcardParser.S);
                                                    }
                                                }
                                                this.state = 178;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 179;
                                            this.match(flashcardParser.NL);
                                        }
                                    }
                                }
                                this.state = 184;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            }
                        }
                    }
                    this.state = 187;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.BitFlash1) | (1 << flashcardParser.BitFlash) | (1 << flashcardParser.BitFlashcardset) | (1 << flashcardParser.BitFlashcardlangset) | (1 << flashcardParser.BitFlashcardlang1) | (1 << flashcardParser.BitVocabulary) | (1 << flashcardParser.BitVocabulary_1))) !== 0));
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.NL) {
                    {
                        {
                            this.state = 189;
                            this.match(flashcardParser.NL);
                        }
                    }
                    this.state = 194;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 195;
                this.match(flashcardParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bitmark_() {
        let _localctx = new Bitmark_Context(this._ctx, this.state);
        this.enterRule(_localctx, 2, flashcardParser.RULE_bitmark_);
        try {
            this.state = 200;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.BitFlash1:
                case flashcardParser.BitFlash:
                case flashcardParser.BitFlashcardset:
                case flashcardParser.BitFlashcardlangset:
                case flashcardParser.BitFlashcardlang1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 197;
                        this.flashcards();
                    }
                    break;
                case flashcardParser.BitVocabulary:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 198;
                        this.vocab();
                    }
                    break;
                case flashcardParser.BitVocabulary_1:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 199;
                        this.vocab_1();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    flashcards() {
        let _localctx = new FlashcardsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, flashcardParser.RULE_flashcards);
        try {
            this.state = 207;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.BitFlash:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 202;
                        this.flashcard();
                    }
                    break;
                case flashcardParser.BitFlash1:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 203;
                        this.flashcard_1();
                    }
                    break;
                case flashcardParser.BitFlashcardset:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 204;
                        this.flashcard_set();
                    }
                    break;
                case flashcardParser.BitFlashcardlangset:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 205;
                        this.flashcard_language_set();
                    }
                    break;
                case flashcardParser.BitFlashcardlang1:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 206;
                        this.flashcard_language_1();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    flashcard_1() {
        let _localctx = new Flashcard_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 6, flashcardParser.RULE_flashcard_1);
        let _la;
        try {
            let _alt;
            this.state = 258;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 209;
                        this.match(flashcardParser.BitFlash1);
                        this.state = 210;
                        this.format();
                        this.state = 211;
                        this.match(flashcardParser.CL);
                        this.state = 215;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 212;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 217;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                        }
                        this.state = 227;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 218;
                                        this.bitElem();
                                        this.state = 222;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 219;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 224;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 229;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 230;
                        this.match(flashcardParser.BitFlash1);
                        this.state = 231;
                        this.format();
                        this.state = 232;
                        this.match(flashcardParser.CL);
                        this.state = 233;
                        this.match(flashcardParser.NL);
                        this.state = 234;
                        this.side();
                        this.state = 235;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 236;
                        this.side();
                        this.state = 240;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 237;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 242;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                        }
                        this.state = 256;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                            case 1:
                                {
                                    this.state = 243;
                                    this.resource();
                                    this.state = 253;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 247;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === flashcardParser.NL) {
                                                        {
                                                            {
                                                                this.state = 244;
                                                                this.match(flashcardParser.NL);
                                                            }
                                                        }
                                                        this.state = 249;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 250;
                                                    this.resource();
                                                }
                                            }
                                        }
                                        this.state = 255;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                                    }
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    flashcard() {
        let _localctx = new FlashcardContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, flashcardParser.RULE_flashcard);
        let _la;
        try {
            let _alt;
            this.state = 326;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 260;
                        this.match(flashcardParser.BitFlash);
                        this.state = 261;
                        this.format();
                        this.state = 262;
                        this.match(flashcardParser.CL);
                        this.state = 266;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 263;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 268;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                        }
                        this.state = 278;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 269;
                                        this.bitElem();
                                        this.state = 273;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 270;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 275;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 280;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 281;
                        this.match(flashcardParser.BitFlash);
                        this.state = 282;
                        this.format();
                        this.state = 283;
                        this.match(flashcardParser.CL);
                        this.state = 287;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.NL) {
                            {
                                {
                                    this.state = 284;
                                    this.match(flashcardParser.NL);
                                }
                            }
                            this.state = 289;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 290;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 291;
                        this.side();
                        this.state = 292;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 293;
                        this.side();
                        this.state = 301;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 294;
                                        _la = this._input.LA(1);
                                        if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 295;
                                        this.side();
                                        this.state = 296;
                                        _la = this._input.LA(1);
                                        if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 297;
                                        this.side();
                                    }
                                }
                            }
                            this.state = 303;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                        }
                        this.state = 304;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 308;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 305;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 310;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                        }
                        this.state = 324;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                            case 1:
                                {
                                    this.state = 311;
                                    this.resource();
                                    this.state = 321;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 315;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === flashcardParser.NL) {
                                                        {
                                                            {
                                                                this.state = 312;
                                                                this.match(flashcardParser.NL);
                                                            }
                                                        }
                                                        this.state = 317;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 318;
                                                    this.resource();
                                                }
                                            }
                                        }
                                        this.state = 323;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                                    }
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    flashcard_set() {
        let _localctx = new Flashcard_setContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, flashcardParser.RULE_flashcard_set);
        let _la;
        try {
            let _alt;
            this.state = 404;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 328;
                        this.match(flashcardParser.BitFlashcardset);
                        this.state = 329;
                        this.format();
                        this.state = 330;
                        this.match(flashcardParser.CL);
                        this.state = 334;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 331;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 336;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                        }
                        this.state = 346;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 337;
                                        this.bitElem();
                                        this.state = 341;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 338;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 343;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 348;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 349;
                        this.match(flashcardParser.BitFlashcardset);
                        this.state = 350;
                        this.format();
                        this.state = 351;
                        this.match(flashcardParser.CL);
                        this.state = 355;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.NL) {
                            {
                                {
                                    this.state = 352;
                                    this.match(flashcardParser.NL);
                                }
                            }
                            this.state = 357;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 363;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                            case 1:
                                {
                                    this.state = 358;
                                    _la = this._input.LA(1);
                                    if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 359;
                                    this.side();
                                    this.state = 360;
                                    _la = this._input.LA(1);
                                    if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 361;
                                    this.side();
                                }
                                break;
                        }
                        this.state = 379;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 365;
                                        _la = this._input.LA(1);
                                        if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 366;
                                        this.side();
                                        this.state = 367;
                                        _la = this._input.LA(1);
                                        if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 368;
                                        this.side();
                                        this.state = 374;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === flashcardParser.NL) {
                                            {
                                                {
                                                    this.state = 369;
                                                    this.match(flashcardParser.NL);
                                                    this.state = 370;
                                                    this.match(flashcardParser.OR);
                                                    this.state = 371;
                                                    this.side();
                                                }
                                            }
                                            this.state = 376;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                            }
                            this.state = 381;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                        }
                        this.state = 382;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 386;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 383;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 388;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                        }
                        this.state = 402;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                            case 1:
                                {
                                    this.state = 389;
                                    this.resource();
                                    this.state = 399;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 393;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === flashcardParser.NL) {
                                                        {
                                                            {
                                                                this.state = 390;
                                                                this.match(flashcardParser.NL);
                                                            }
                                                        }
                                                        this.state = 395;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 396;
                                                    this.resource();
                                                }
                                            }
                                        }
                                        this.state = 401;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                                    }
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    flashcard_language_set() {
        let _localctx = new Flashcard_language_setContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, flashcardParser.RULE_flashcard_language_set);
        let _la;
        try {
            let _alt;
            this.state = 474;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 406;
                        this.match(flashcardParser.BitFlashcardlangset);
                        this.state = 407;
                        this.format();
                        this.state = 408;
                        this.match(flashcardParser.CL);
                        this.state = 412;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 409;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 414;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        }
                        this.state = 424;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 415;
                                        this.bitElem();
                                        this.state = 419;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 416;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 421;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 426;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 427;
                        this.match(flashcardParser.BitFlashcardlangset);
                        this.state = 428;
                        this.format();
                        this.state = 429;
                        this.match(flashcardParser.CL);
                        this.state = 433;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.NL) {
                            {
                                {
                                    this.state = 430;
                                    this.match(flashcardParser.NL);
                                }
                            }
                            this.state = 435;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 436;
                        this.sidex_NL();
                        this.state = 448;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 437;
                                            _la = this._input.LA(1);
                                            if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
                                                this._errHandler.recoverInline(this);
                                            }
                                            else {
                                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                                    this.matchedEOF = true;
                                                }
                                                this._errHandler.reportMatch(this);
                                                this.consume();
                                            }
                                            this.state = 438;
                                            this.sidex();
                                            {
                                                this.state = 439;
                                                this.match(flashcardParser.NL);
                                                this.state = 440;
                                                this.sidex_NL();
                                            }
                                            this.state = 444;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            do {
                                                {
                                                    {
                                                        this.state = 442;
                                                        _la = this._input.LA(1);
                                                        if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
                                                            this._errHandler.recoverInline(this);
                                                        }
                                                        else {
                                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                                this.matchedEOF = true;
                                                            }
                                                            this._errHandler.reportMatch(this);
                                                            this.consume();
                                                        }
                                                        this.state = 443;
                                                        this.sidex_NL();
                                                    }
                                                }
                                                this.state = 446;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            } while (_la === flashcardParser.EQ || _la === flashcardParser.EQ2);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 450;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 452;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 456;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 453;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 458;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                        }
                        this.state = 472;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                            case 1:
                                {
                                    this.state = 459;
                                    this.resource();
                                    this.state = 469;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 463;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === flashcardParser.NL) {
                                                        {
                                                            {
                                                                this.state = 460;
                                                                this.match(flashcardParser.NL);
                                                            }
                                                        }
                                                        this.state = 465;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 466;
                                                    this.resource();
                                                }
                                            }
                                        }
                                        this.state = 471;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                                    }
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    flashcard_language_1() {
        let _localctx = new Flashcard_language_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 14, flashcardParser.RULE_flashcard_language_1);
        let _la;
        try {
            let _alt;
            this.state = 539;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 476;
                        this.match(flashcardParser.BitFlashcardlang1);
                        this.state = 477;
                        this.format();
                        this.state = 478;
                        this.match(flashcardParser.CL);
                        this.state = 482;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 479;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 484;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                        }
                        this.state = 494;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 485;
                                        this.bitElem();
                                        this.state = 489;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 486;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 491;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 496;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 497;
                        this.match(flashcardParser.BitFlashcardlang1);
                        this.state = 498;
                        this.format();
                        this.state = 499;
                        this.match(flashcardParser.CL);
                        this.state = 503;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.NL) {
                            {
                                {
                                    this.state = 500;
                                    this.match(flashcardParser.NL);
                                }
                            }
                            this.state = 505;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 506;
                        this.sidex_NL();
                        this.state = 507;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 508;
                        this.sidex();
                        {
                            this.state = 509;
                            this.match(flashcardParser.NL);
                            this.state = 510;
                            this.sidex_NL();
                        }
                        this.state = 514;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 512;
                                    this.match(flashcardParser.OR);
                                    this.state = 513;
                                    this.sidex_NL();
                                }
                            }
                            this.state = 516;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === flashcardParser.OR);
                        this.state = 521;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 518;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 523;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                        }
                        this.state = 537;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                            case 1:
                                {
                                    this.state = 524;
                                    this.resource();
                                    this.state = 534;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 528;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === flashcardParser.NL) {
                                                        {
                                                            {
                                                                this.state = 525;
                                                                this.match(flashcardParser.NL);
                                                            }
                                                        }
                                                        this.state = 530;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 531;
                                                    this.resource();
                                                }
                                            }
                                        }
                                        this.state = 536;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                                    }
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    vocab() {
        let _localctx = new VocabContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, flashcardParser.RULE_vocab);
        let _la;
        try {
            let _alt;
            this.state = 626;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 541;
                        this.match(flashcardParser.BitVocabulary);
                        this.state = 542;
                        this.format();
                        this.state = 543;
                        this.match(flashcardParser.CL);
                        this.state = 547;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 544;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 549;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
                        }
                        this.state = 559;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 550;
                                        this.bitElem();
                                        this.state = 554;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 551;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 556;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 561;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 562;
                        this.match(flashcardParser.BitVocabulary);
                        this.state = 563;
                        this.format();
                        this.state = 564;
                        this.match(flashcardParser.CL);
                        this.state = 568;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.NL) {
                            {
                                {
                                    this.state = 565;
                                    this.match(flashcardParser.NL);
                                }
                            }
                            this.state = 570;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 580;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (flashcardParser.AtExampleWithStr - 66)) | (1 << (flashcardParser.AtExamplecol - 66)) | (1 << (flashcardParser.AtExamplecl - 66)) | (1 << (flashcardParser.AtSampleSolution - 66)) | (1 << (flashcardParser.AtLabeltrue - 66)) | (1 << (flashcardParser.AtLabelfalse - 66)) | (1 << (flashcardParser.OpAtCopyright - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (flashcardParser.OpAmpAudio - 100)) | (1 << (flashcardParser.OpAmpImage - 100)) | (1 << (flashcardParser.OpAmpImageZoom - 100)) | (1 << (flashcardParser.OpAmpImageWAudio - 100)) | (1 << (flashcardParser.OpAmpVideo - 100)) | (1 << (flashcardParser.OpAmpArticle - 100)) | (1 << (flashcardParser.OpAmpDocument - 100)) | (1 << (flashcardParser.OpAmpApp - 100)) | (1 << (flashcardParser.OpAmpWebsite - 100)) | (1 << (flashcardParser.OpAmpStillImageFilm - 100)) | (1 << (flashcardParser.OpAmpAudioLink - 100)) | (1 << (flashcardParser.OpAmpImageLink - 100)) | (1 << (flashcardParser.OpAmpVideoLink - 100)) | (1 << (flashcardParser.OpAmpArticleLink - 100)) | (1 << (flashcardParser.OpAmpDocumentLink - 100)) | (1 << (flashcardParser.OpAmpDocumentDownload - 100)) | (1 << (flashcardParser.OpAmpAppLink - 100)) | (1 << (flashcardParser.OpAmpWebsiteLink - 100)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 100)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 136)) | (1 << (flashcardParser.OpAmpAudioEmbed - 136)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 136)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 136)) | (1 << (flashcardParser.URL - 136)) | (1 << (flashcardParser.LIST_LINE - 136)))) !== 0)) {
                            {
                                {
                                    this.state = 571;
                                    this.bitElem();
                                    this.state = 575;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === flashcardParser.NL) {
                                        {
                                            {
                                                this.state = 572;
                                                this.match(flashcardParser.NL);
                                            }
                                        }
                                        this.state = 577;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 582;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 600;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 583;
                                            _la = this._input.LA(1);
                                            if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
                                                this._errHandler.recoverInline(this);
                                            }
                                            else {
                                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                                    this.matchedEOF = true;
                                                }
                                                this._errHandler.reportMatch(this);
                                                this.consume();
                                            }
                                            this.state = 585;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            do {
                                                {
                                                    {
                                                        this.state = 584;
                                                        this.vside();
                                                    }
                                                }
                                                this.state = 587;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (flashcardParser.AtExampleWithStr - 66)) | (1 << (flashcardParser.AtExamplecol - 66)) | (1 << (flashcardParser.AtExamplecl - 66)) | (1 << (flashcardParser.AtSampleSolution - 66)) | (1 << (flashcardParser.AtLabeltrue - 66)) | (1 << (flashcardParser.AtLabelfalse - 66)) | (1 << (flashcardParser.OpAtCopyright - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (flashcardParser.OpAmpAudio - 100)) | (1 << (flashcardParser.OpAmpImage - 100)) | (1 << (flashcardParser.OpAmpImageZoom - 100)) | (1 << (flashcardParser.OpAmpImageWAudio - 100)) | (1 << (flashcardParser.OpAmpVideo - 100)) | (1 << (flashcardParser.OpAmpArticle - 100)) | (1 << (flashcardParser.OpAmpDocument - 100)) | (1 << (flashcardParser.OpAmpApp - 100)) | (1 << (flashcardParser.OpAmpWebsite - 100)) | (1 << (flashcardParser.OpAmpStillImageFilm - 100)) | (1 << (flashcardParser.OpAmpAudioLink - 100)) | (1 << (flashcardParser.OpAmpImageLink - 100)) | (1 << (flashcardParser.OpAmpVideoLink - 100)) | (1 << (flashcardParser.OpAmpArticleLink - 100)) | (1 << (flashcardParser.OpAmpDocumentLink - 100)) | (1 << (flashcardParser.OpAmpDocumentDownload - 100)) | (1 << (flashcardParser.OpAmpAppLink - 100)) | (1 << (flashcardParser.OpAmpWebsiteLink - 100)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 100)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 136)) | (1 << (flashcardParser.OpAmpAudioEmbed - 136)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 136)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 136)) | (1 << (flashcardParser.URL - 136)) | (1 << (flashcardParser.LIST_LINE - 136)))) !== 0));
                                            this.state = 597;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === flashcardParser.EQ || _la === flashcardParser.EQ2) {
                                                {
                                                    {
                                                        this.state = 589;
                                                        _la = this._input.LA(1);
                                                        if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
                                                            this._errHandler.recoverInline(this);
                                                        }
                                                        else {
                                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                                this.matchedEOF = true;
                                                            }
                                                            this._errHandler.reportMatch(this);
                                                            this.consume();
                                                        }
                                                        this.state = 591;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                        do {
                                                            {
                                                                {
                                                                    this.state = 590;
                                                                    this.vside();
                                                                }
                                                            }
                                                            this.state = 593;
                                                            this._errHandler.sync(this);
                                                            _la = this._input.LA(1);
                                                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (flashcardParser.AtExampleWithStr - 66)) | (1 << (flashcardParser.AtExamplecol - 66)) | (1 << (flashcardParser.AtExamplecl - 66)) | (1 << (flashcardParser.AtSampleSolution - 66)) | (1 << (flashcardParser.AtLabeltrue - 66)) | (1 << (flashcardParser.AtLabelfalse - 66)) | (1 << (flashcardParser.OpAtCopyright - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (flashcardParser.OpAmpAudio - 100)) | (1 << (flashcardParser.OpAmpImage - 100)) | (1 << (flashcardParser.OpAmpImageZoom - 100)) | (1 << (flashcardParser.OpAmpImageWAudio - 100)) | (1 << (flashcardParser.OpAmpVideo - 100)) | (1 << (flashcardParser.OpAmpArticle - 100)) | (1 << (flashcardParser.OpAmpDocument - 100)) | (1 << (flashcardParser.OpAmpApp - 100)) | (1 << (flashcardParser.OpAmpWebsite - 100)) | (1 << (flashcardParser.OpAmpStillImageFilm - 100)) | (1 << (flashcardParser.OpAmpAudioLink - 100)) | (1 << (flashcardParser.OpAmpImageLink - 100)) | (1 << (flashcardParser.OpAmpVideoLink - 100)) | (1 << (flashcardParser.OpAmpArticleLink - 100)) | (1 << (flashcardParser.OpAmpDocumentLink - 100)) | (1 << (flashcardParser.OpAmpDocumentDownload - 100)) | (1 << (flashcardParser.OpAmpAppLink - 100)) | (1 << (flashcardParser.OpAmpWebsiteLink - 100)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 100)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 136)) | (1 << (flashcardParser.OpAmpAudioEmbed - 136)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 136)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 136)) | (1 << (flashcardParser.URL - 136)) | (1 << (flashcardParser.LIST_LINE - 136)))) !== 0));
                                                    }
                                                }
                                                this.state = 599;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 602;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 604;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.HSPL || _la === flashcardParser.HSPL2)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 608;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 605;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 610;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                        }
                        this.state = 624;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                            case 1:
                                {
                                    this.state = 611;
                                    this.resource();
                                    this.state = 621;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 615;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === flashcardParser.NL) {
                                                        {
                                                            {
                                                                this.state = 612;
                                                                this.match(flashcardParser.NL);
                                                            }
                                                        }
                                                        this.state = 617;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 618;
                                                    this.resource();
                                                }
                                            }
                                        }
                                        this.state = 623;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                                    }
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    vocab_1() {
        let _localctx = new Vocab_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 18, flashcardParser.RULE_vocab_1);
        let _la;
        try {
            let _alt;
            this.state = 703;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 628;
                        this.match(flashcardParser.BitVocabulary_1);
                        this.state = 629;
                        this.format();
                        this.state = 630;
                        this.match(flashcardParser.CL);
                        this.state = 634;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 631;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                            }
                            this.state = 636;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                        }
                        this.state = 646;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 637;
                                        this.bitElem();
                                        this.state = 641;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 638;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 643;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 648;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 649;
                        this.match(flashcardParser.BitVocabulary_1);
                        this.state = 650;
                        this.format();
                        this.state = 651;
                        this.match(flashcardParser.CL);
                        this.state = 655;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.NL) {
                            {
                                {
                                    this.state = 652;
                                    this.match(flashcardParser.NL);
                                }
                            }
                            this.state = 657;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 667;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (flashcardParser.AtExampleWithStr - 66)) | (1 << (flashcardParser.AtExamplecol - 66)) | (1 << (flashcardParser.AtExamplecl - 66)) | (1 << (flashcardParser.AtSampleSolution - 66)) | (1 << (flashcardParser.AtLabeltrue - 66)) | (1 << (flashcardParser.AtLabelfalse - 66)) | (1 << (flashcardParser.OpAtCopyright - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (flashcardParser.OpAmpAudio - 100)) | (1 << (flashcardParser.OpAmpImage - 100)) | (1 << (flashcardParser.OpAmpImageZoom - 100)) | (1 << (flashcardParser.OpAmpImageWAudio - 100)) | (1 << (flashcardParser.OpAmpVideo - 100)) | (1 << (flashcardParser.OpAmpArticle - 100)) | (1 << (flashcardParser.OpAmpDocument - 100)) | (1 << (flashcardParser.OpAmpApp - 100)) | (1 << (flashcardParser.OpAmpWebsite - 100)) | (1 << (flashcardParser.OpAmpStillImageFilm - 100)) | (1 << (flashcardParser.OpAmpAudioLink - 100)) | (1 << (flashcardParser.OpAmpImageLink - 100)) | (1 << (flashcardParser.OpAmpVideoLink - 100)) | (1 << (flashcardParser.OpAmpArticleLink - 100)) | (1 << (flashcardParser.OpAmpDocumentLink - 100)) | (1 << (flashcardParser.OpAmpDocumentDownload - 100)) | (1 << (flashcardParser.OpAmpAppLink - 100)) | (1 << (flashcardParser.OpAmpWebsiteLink - 100)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 100)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 136)) | (1 << (flashcardParser.OpAmpAudioEmbed - 136)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 136)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 136)) | (1 << (flashcardParser.URL - 136)) | (1 << (flashcardParser.LIST_LINE - 136)))) !== 0)) {
                            {
                                {
                                    this.state = 658;
                                    this.bitElem();
                                    this.state = 662;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === flashcardParser.NL) {
                                        {
                                            {
                                                this.state = 659;
                                                this.match(flashcardParser.NL);
                                            }
                                        }
                                        this.state = 664;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 669;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 670;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.EQ || _la === flashcardParser.EQ2)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 672;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 671;
                                            this.vside();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 674;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 684;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 676;
                                        this.match(flashcardParser.OR);
                                        this.state = 678;
                                        this._errHandler.sync(this);
                                        _alt = 1;
                                        do {
                                            switch (_alt) {
                                                case 1:
                                                    {
                                                        {
                                                            this.state = 677;
                                                            this.vside();
                                                        }
                                                    }
                                                    break;
                                                default:
                                                    throw new NoViableAltException_1.NoViableAltException(this);
                                            }
                                            this.state = 680;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                    }
                                }
                            }
                            this.state = 686;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                        }
                        this.state = 701;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.OR) {
                            {
                                this.state = 687;
                                this.match(flashcardParser.OR);
                                this.state = 688;
                                this.resource();
                                this.state = 698;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 692;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === flashcardParser.NL) {
                                                    {
                                                        {
                                                            this.state = 689;
                                                            this.match(flashcardParser.NL);
                                                        }
                                                    }
                                                    this.state = 694;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 695;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 700;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                                }
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sx() {
        let _localctx = new SxContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, flashcardParser.RULE_sx);
        try {
            this.state = 710;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OPA:
                case flashcardParser.AtSampleSolution:
                case flashcardParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 705;
                        this.atdef();
                    }
                    break;
                case flashcardParser.S:
                case flashcardParser.OPS:
                case flashcardParser.COLON:
                case flashcardParser.AMP:
                case flashcardParser.Greater:
                case flashcardParser.Less:
                case flashcardParser.RightAngle:
                case flashcardParser.RightArrow:
                case flashcardParser.NUMERIC:
                case flashcardParser.STRING:
                case flashcardParser.NOTBITMARK:
                case flashcardParser.ELIPSIS:
                case flashcardParser.SENTENCE:
                case flashcardParser.BARSTRING:
                case flashcardParser.URL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 706;
                        this.s_and_w();
                    }
                    break;
                case flashcardParser.OPB:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 707;
                        this.instruction();
                    }
                    break;
                case flashcardParser.OpAmpImage:
                case flashcardParser.OpAmpImageZoom:
                case flashcardParser.OpAmpImageWAudio:
                case flashcardParser.OpAmpImageLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 708;
                        this.imagebit();
                    }
                    break;
                case flashcardParser.OpAmpAudio:
                case flashcardParser.OpAmpAudioLink:
                case flashcardParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 709;
                        this.audiobit();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sidex() {
        let _localctx = new SidexContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, flashcardParser.RULE_sidex);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 712;
                this.sx();
                this.state = 719;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 714;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === flashcardParser.NL) {
                                    {
                                        this.state = 713;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                                this.state = 716;
                                this.sx();
                            }
                        }
                    }
                    this.state = 721;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sidex_NL() {
        let _localctx = new Sidex_NLContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, flashcardParser.RULE_sidex_NL);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 722;
                this.bitElem();
                this.state = 726;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 723;
                                this.match(flashcardParser.NL);
                            }
                        }
                    }
                    this.state = 728;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    side() {
        let _localctx = new SideContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, flashcardParser.RULE_side);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 729;
                this.sidex();
                this.state = 734;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.OR) {
                    {
                        {
                            this.state = 730;
                            this.match(flashcardParser.OR);
                            this.state = 731;
                            this.sidex();
                        }
                    }
                    this.state = 736;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    side_NL() {
        let _localctx = new Side_NLContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, flashcardParser.RULE_side_NL);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 737;
                this.sidex_NL();
                this.state = 742;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.OR) {
                    {
                        {
                            this.state = 738;
                            this.match(flashcardParser.OR);
                            this.state = 739;
                            this.sidex_NL();
                        }
                    }
                    this.state = 744;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    vside() {
        let _localctx = new VsideContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, flashcardParser.RULE_vside);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 745;
                this.sidex_NL();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bitElem() {
        let _localctx = new BitElemContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, flashcardParser.RULE_bitElem);
        try {
            this.state = 770;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 747;
                        this.match(flashcardParser.LIST_LINE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 748;
                        this.match(flashcardParser.NOTBITMARK);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 749;
                        this.gap();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 750;
                        this.atdef();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 751;
                        this.reference();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 752;
                        this.item();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 753;
                        this.title();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 754;
                        this.instruction();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 755;
                        this.hint();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 756;
                        this.s_and_w();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 757;
                        this.example();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 758;
                        this.bool_label();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 759;
                        this.imagebit();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 760;
                        this.audiobit();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 761;
                        this.videobit();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 762;
                        this.articlebit();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 763;
                        this.documentbit();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 764;
                        this.appbit();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 765;
                        this.websitebit();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 766;
                        this.stillimagefilmbit();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 767;
                        this.angleref();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 768;
                        this.anchor();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 769;
                        this.sp();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resource() {
        let _localctx = new ResourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, flashcardParser.RULE_resource);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 772;
                this.bitElem();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    gap() {
        let _localctx = new GapContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, flashcardParser.RULE_gap);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 774;
                this.single_gap();
                this.state = 782;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 780;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case flashcardParser.OPU:
                                    {
                                        this.state = 775;
                                        this.single_gap();
                                    }
                                    break;
                                case flashcardParser.OPB:
                                    {
                                        this.state = 776;
                                        this.instruction();
                                    }
                                    break;
                                case flashcardParser.OPQ:
                                    {
                                        this.state = 777;
                                        this.hint();
                                    }
                                    break;
                                case flashcardParser.OPC:
                                    {
                                        this.state = 778;
                                        this.item();
                                    }
                                    break;
                                case flashcardParser.AtExampleWithStr:
                                case flashcardParser.AtExamplecol:
                                case flashcardParser.AtExamplecl:
                                    {
                                        this.state = 779;
                                        this.example();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 784;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    single_gap() {
        let _localctx = new Single_gapContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, flashcardParser.RULE_single_gap);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 785;
                this.match(flashcardParser.OPU);
                this.state = 789;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                    case 1:
                        {
                            this.state = 786;
                            this.match(flashcardParser.NUMERIC);
                        }
                        break;
                    case 2:
                        {
                            this.state = 787;
                            this.match(flashcardParser.STRING);
                        }
                        break;
                    case 3:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                }
                this.state = 794;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                    {
                        {
                            this.state = 791;
                            this.s_and_w();
                        }
                    }
                    this.state = 796;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 797;
                this.clnsp();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bullet_item() {
        let _localctx = new Bullet_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, flashcardParser.RULE_bullet_item);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 799;
                this.match(flashcardParser.OPBUL);
                this.state = 800;
                this.s_and_w();
                this.state = 801;
                this.match(flashcardParser.CL);
                this.state = 803;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.AtPoints) {
                    {
                        this.state = 802;
                        this.atpoint();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    atpoint() {
        let _localctx = new AtpointContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, flashcardParser.RULE_atpoint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 805;
                this.match(flashcardParser.AtPoints);
                this.state = 806;
                this.match(flashcardParser.NUMERIC);
                this.state = 807;
                this.match(flashcardParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    format() {
        let _localctx = new FormatContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, flashcardParser.RULE_format);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 812;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 809;
                                this.resource_format();
                            }
                        }
                    }
                    this.state = 814;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                }
                this.state = 820;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (flashcardParser.AmpAudio - 89)) | (1 << (flashcardParser.AmpImage - 89)) | (1 << (flashcardParser.AmpImageZoom - 89)) | (1 << (flashcardParser.AmpImageWAudio - 89)) | (1 << (flashcardParser.AmpVideo - 89)) | (1 << (flashcardParser.AmpArticle - 89)) | (1 << (flashcardParser.AmpDocument - 89)) | (1 << (flashcardParser.AmpApp - 89)) | (1 << (flashcardParser.AmpWebsite - 89)) | (1 << (flashcardParser.AmpStillImageFilm - 89)) | (1 << (flashcardParser.AmpPdf - 89)) | (1 << (flashcardParser.AmpAudioLink - 89)) | (1 << (flashcardParser.AmpImageLink - 89)) | (1 << (flashcardParser.AmpVideoLink - 89)) | (1 << (flashcardParser.AmpArticleLink - 89)) | (1 << (flashcardParser.AmpDocumentLink - 89)) | (1 << (flashcardParser.AmpDocumentDownload - 89)) | (1 << (flashcardParser.AmpAppLink - 89)) | (1 << (flashcardParser.AmpWebsiteLink - 89)) | (1 << (flashcardParser.AmpStillImageFilmLink - 89)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (flashcardParser.AmpVideoEmbed - 131)) | (1 << (flashcardParser.AmpDocumentEmbed - 131)) | (1 << (flashcardParser.AmpStillImageFilmEmbed - 131)) | (1 << (flashcardParser.ColonText - 131)) | (1 << (flashcardParser.ColonJson - 131)))) !== 0)) {
                    {
                        this.state = 818;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case flashcardParser.ColonText:
                                {
                                    this.state = 815;
                                    this.match(flashcardParser.ColonText);
                                }
                                break;
                            case flashcardParser.ColonJson:
                                {
                                    this.state = 816;
                                    this.match(flashcardParser.ColonJson);
                                }
                                break;
                            case flashcardParser.AmpAudio:
                            case flashcardParser.AmpImage:
                            case flashcardParser.AmpImageZoom:
                            case flashcardParser.AmpImageWAudio:
                            case flashcardParser.AmpVideo:
                            case flashcardParser.AmpArticle:
                            case flashcardParser.AmpDocument:
                            case flashcardParser.AmpApp:
                            case flashcardParser.AmpWebsite:
                            case flashcardParser.AmpStillImageFilm:
                            case flashcardParser.AmpPdf:
                            case flashcardParser.AmpAudioLink:
                            case flashcardParser.AmpImageLink:
                            case flashcardParser.AmpVideoLink:
                            case flashcardParser.AmpArticleLink:
                            case flashcardParser.AmpDocumentLink:
                            case flashcardParser.AmpDocumentDownload:
                            case flashcardParser.AmpAppLink:
                            case flashcardParser.AmpWebsiteLink:
                            case flashcardParser.AmpStillImageFilmLink:
                            case flashcardParser.AmpVideoEmbed:
                            case flashcardParser.AmpDocumentEmbed:
                            case flashcardParser.AmpStillImageFilmEmbed:
                                {
                                    this.state = 817;
                                    this.resource_format_extra();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 822;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resource_format() {
        let _localctx = new Resource_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, flashcardParser.RULE_resource_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 823;
                _la = this._input.LA(1);
                if (!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (flashcardParser.AmpArticle - 94)) | (1 << (flashcardParser.AmpDocument - 94)) | (1 << (flashcardParser.AmpWebsite - 94)) | (1 << (flashcardParser.AmpStillImageFilm - 94)) | (1 << (flashcardParser.AmpAudioLink - 94)) | (1 << (flashcardParser.AmpImageLink - 94)) | (1 << (flashcardParser.AmpVideoLink - 94)) | (1 << (flashcardParser.AmpArticleLink - 94)) | (1 << (flashcardParser.AmpDocumentLink - 94)) | (1 << (flashcardParser.AmpDocumentDownload - 94)) | (1 << (flashcardParser.AmpAppLink - 94)) | (1 << (flashcardParser.AmpWebsiteLink - 94)) | (1 << (flashcardParser.AmpStillImageFilmLink - 94)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (flashcardParser.AmpVideoEmbed - 131)) | (1 << (flashcardParser.AmpAudioEmbed - 131)) | (1 << (flashcardParser.AmpDocumentEmbed - 131)) | (1 << (flashcardParser.AmpStillImageFilmEmbed - 131)) | (1 << (flashcardParser.BitmarkMinus - 131)) | (1 << (flashcardParser.BitmarkPlus - 131)) | (1 << (flashcardParser.ColonJson - 131)) | (1 << (flashcardParser.Prosemirror - 131)) | (1 << (flashcardParser.Placeholder - 131)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resource_format_extra() {
        let _localctx = new Resource_format_extraContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, flashcardParser.RULE_resource_format_extra);
        try {
            this.state = 834;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AmpImage:
                case flashcardParser.AmpImageZoom:
                case flashcardParser.AmpImageWAudio:
                case flashcardParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 825;
                        this.image_format();
                    }
                    break;
                case flashcardParser.AmpAudio:
                case flashcardParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 826;
                        this.audio_format();
                    }
                    break;
                case flashcardParser.AmpVideo:
                case flashcardParser.AmpVideoLink:
                case flashcardParser.AmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 827;
                        this.video_format();
                    }
                    break;
                case flashcardParser.AmpArticle:
                case flashcardParser.AmpArticleLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 828;
                        this.article_format();
                    }
                    break;
                case flashcardParser.AmpDocument:
                case flashcardParser.AmpDocumentLink:
                case flashcardParser.AmpDocumentDownload:
                case flashcardParser.AmpDocumentEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 829;
                        this.document_format();
                    }
                    break;
                case flashcardParser.AmpApp:
                case flashcardParser.AmpAppLink:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 830;
                        this.app_format();
                    }
                    break;
                case flashcardParser.AmpWebsite:
                case flashcardParser.AmpWebsiteLink:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 831;
                        this.website_format();
                    }
                    break;
                case flashcardParser.AmpStillImageFilm:
                case flashcardParser.AmpStillImageFilmLink:
                case flashcardParser.AmpStillImageFilmEmbed:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 832;
                        this.stillimagefilm_format();
                    }
                    break;
                case flashcardParser.AmpPdf:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 833;
                        this.match(flashcardParser.AmpPdf);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    format2() {
        let _localctx = new Format2Context(this._ctx, this.state);
        this.enterRule(_localctx, 50, flashcardParser.RULE_format2);
        try {
            this.state = 842;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.BitmarkMinus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 836;
                        this.match(flashcardParser.BitmarkMinus);
                    }
                    break;
                case flashcardParser.BitmarkPlus:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 837;
                        this.match(flashcardParser.BitmarkPlus);
                    }
                    break;
                case flashcardParser.ColonText:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 838;
                        this.match(flashcardParser.ColonText);
                    }
                    break;
                case flashcardParser.Placeholder:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 839;
                        this.match(flashcardParser.Placeholder);
                    }
                    break;
                case flashcardParser.ColonJson:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 840;
                        this.match(flashcardParser.ColonJson);
                    }
                    break;
                case flashcardParser.EOF:
                    this.enterOuterAlt(_localctx, 6);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    image_format() {
        let _localctx = new Image_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, flashcardParser.RULE_image_format);
        let _la;
        try {
            this.state = 858;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 844;
                        this.match(flashcardParser.AmpImage);
                        this.state = 847;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case flashcardParser.Image_type:
                                {
                                    {
                                        this.state = 845;
                                        this.match(flashcardParser.Image_type);
                                    }
                                }
                                break;
                            case flashcardParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 846;
                                        this.match(flashcardParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case flashcardParser.CL:
                            case flashcardParser.AmpAudio:
                            case flashcardParser.AmpImage:
                            case flashcardParser.AmpImageZoom:
                            case flashcardParser.AmpImageWAudio:
                            case flashcardParser.AmpVideo:
                            case flashcardParser.AmpArticle:
                            case flashcardParser.AmpDocument:
                            case flashcardParser.AmpApp:
                            case flashcardParser.AmpWebsite:
                            case flashcardParser.AmpStillImageFilm:
                            case flashcardParser.AmpPdf:
                            case flashcardParser.AmpAudioLink:
                            case flashcardParser.AmpImageLink:
                            case flashcardParser.AmpVideoLink:
                            case flashcardParser.AmpArticleLink:
                            case flashcardParser.AmpDocumentLink:
                            case flashcardParser.AmpDocumentDownload:
                            case flashcardParser.AmpAppLink:
                            case flashcardParser.AmpWebsiteLink:
                            case flashcardParser.AmpStillImageFilmLink:
                            case flashcardParser.AmpVideoEmbed:
                            case flashcardParser.AmpDocumentEmbed:
                            case flashcardParser.AmpStillImageFilmEmbed:
                            case flashcardParser.ColonText:
                            case flashcardParser.ColonJson:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case flashcardParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 849;
                        this.match(flashcardParser.AmpImageLink);
                        this.state = 851;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.Image_type) {
                            {
                                this.state = 850;
                                this.match(flashcardParser.Image_type);
                            }
                        }
                    }
                    break;
                case flashcardParser.AmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 853;
                        this.match(flashcardParser.AmpImageZoom);
                        this.state = 855;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.Image_type) {
                            {
                                this.state = 854;
                                this.match(flashcardParser.Image_type);
                            }
                        }
                    }
                    break;
                case flashcardParser.AmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 857;
                        this.match(flashcardParser.AmpImageWAudio);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    video_format() {
        let _localctx = new Video_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, flashcardParser.RULE_video_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 860;
                _la = this._input.LA(1);
                if (!(_la === flashcardParser.AmpVideo || _la === flashcardParser.AmpVideoLink || _la === flashcardParser.AmpVideoEmbed)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 863;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.COLON) {
                    {
                        this.state = 861;
                        this.match(flashcardParser.COLON);
                        this.state = 862;
                        this.match(flashcardParser.Video_type);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    article_format() {
        let _localctx = new Article_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, flashcardParser.RULE_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 865;
                _la = this._input.LA(1);
                if (!(_la === flashcardParser.AmpArticle || _la === flashcardParser.AmpArticleLink)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    document_format() {
        let _localctx = new Document_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, flashcardParser.RULE_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 867;
                _la = this._input.LA(1);
                if (!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (flashcardParser.AmpDocument - 95)) | (1 << (flashcardParser.AmpDocumentLink - 95)) | (1 << (flashcardParser.AmpDocumentDownload - 95)))) !== 0) || _la === flashcardParser.AmpDocumentEmbed)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    app_format() {
        let _localctx = new App_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, flashcardParser.RULE_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 869;
                _la = this._input.LA(1);
                if (!(_la === flashcardParser.AmpApp || _la === flashcardParser.AmpAppLink)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    website_format() {
        let _localctx = new Website_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, flashcardParser.RULE_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 871;
                _la = this._input.LA(1);
                if (!(_la === flashcardParser.AmpWebsite || _la === flashcardParser.AmpWebsiteLink)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stillimagefilm_format() {
        let _localctx = new Stillimagefilm_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, flashcardParser.RULE_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 873;
                _la = this._input.LA(1);
                if (!(_la === flashcardParser.AmpStillImageFilm || _la === flashcardParser.AmpStillImageFilmLink || _la === flashcardParser.AmpStillImageFilmEmbed)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    op_article_format() {
        let _localctx = new Op_article_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, flashcardParser.RULE_op_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 875;
                _la = this._input.LA(1);
                if (!(_la === flashcardParser.OpAmpArticle || _la === flashcardParser.OpAmpArticleLink)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    op_document_format() {
        let _localctx = new Op_document_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, flashcardParser.RULE_op_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 877;
                _la = this._input.LA(1);
                if (!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (flashcardParser.OpAmpDocument - 107)) | (1 << (flashcardParser.OpAmpDocumentLink - 107)) | (1 << (flashcardParser.OpAmpDocumentDownload - 107)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 107)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    op_app_format() {
        let _localctx = new Op_app_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, flashcardParser.RULE_op_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 879;
                _la = this._input.LA(1);
                if (!(_la === flashcardParser.OpAmpApp || _la === flashcardParser.OpAmpAppLink)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    op_website_format() {
        let _localctx = new Op_website_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, flashcardParser.RULE_op_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 881;
                _la = this._input.LA(1);
                if (!(_la === flashcardParser.OpAmpWebsite || _la === flashcardParser.OpAmpWebsiteLink)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    op_video_format() {
        let _localctx = new Op_video_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, flashcardParser.RULE_op_video_format);
        try {
            this.state = 898;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OpAmpVideo:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 883;
                        this.match(flashcardParser.OpAmpVideo);
                        this.state = 886;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                            case 1:
                                {
                                    this.state = 884;
                                    this.match(flashcardParser.COLON);
                                    this.state = 885;
                                    this.match(flashcardParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case flashcardParser.OpAmpVideoLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 888;
                        this.match(flashcardParser.OpAmpVideoLink);
                        this.state = 891;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                            case 1:
                                {
                                    this.state = 889;
                                    this.match(flashcardParser.COLON);
                                    this.state = 890;
                                    this.match(flashcardParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case flashcardParser.OpAmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 893;
                        this.match(flashcardParser.OpAmpVideoEmbed);
                        this.state = 896;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                            case 1:
                                {
                                    this.state = 894;
                                    this.match(flashcardParser.COLON);
                                    this.state = 895;
                                    this.match(flashcardParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    op_stillimagefilm_format() {
        let _localctx = new Op_stillimagefilm_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, flashcardParser.RULE_op_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 900;
                _la = this._input.LA(1);
                if (!(((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (flashcardParser.OpAmpStillImageFilm - 110)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 110)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 110)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    articlebit() {
        let _localctx = new ArticlebitContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, flashcardParser.RULE_articlebit);
        try {
            this.state = 908;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OpAmpArticle:
                case flashcardParser.OpAmpArticleLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 902;
                        this.op_article_format();
                        this.state = 903;
                        this.match(flashcardParser.COLON);
                        this.state = 904;
                        this.url();
                        this.state = 905;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.ArticleText:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 907;
                        this.match(flashcardParser.ArticleText);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    documentbit() {
        let _localctx = new DocumentbitContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, flashcardParser.RULE_documentbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 910;
                this.op_document_format();
                this.state = 911;
                this.match(flashcardParser.COLON);
                this.state = 912;
                this.url();
                this.state = 913;
                this.match(flashcardParser.CL);
                this.state = 918;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.OPATALT) {
                    {
                        this.state = 914;
                        this.match(flashcardParser.OPATALT);
                        this.state = 915;
                        this.words();
                        this.state = 916;
                        this.match(flashcardParser.CL);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    websitebit() {
        let _localctx = new WebsitebitContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, flashcardParser.RULE_websitebit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 920;
                this.op_website_format();
                this.state = 921;
                this.match(flashcardParser.COLON);
                this.state = 922;
                this.url();
                this.state = 923;
                this.match(flashcardParser.CL);
                this.state = 928;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.OPATALT) {
                    {
                        this.state = 924;
                        this.match(flashcardParser.OPATALT);
                        this.state = 925;
                        this.words();
                        this.state = 926;
                        this.match(flashcardParser.CL);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    appbit() {
        let _localctx = new AppbitContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, flashcardParser.RULE_appbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 930;
                this.op_app_format();
                this.state = 931;
                this.match(flashcardParser.COLON);
                this.state = 934;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case flashcardParser.URL:
                        {
                            this.state = 932;
                            this.url();
                        }
                        break;
                    case flashcardParser.TEL:
                        {
                            this.state = 933;
                            this.telephone();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 936;
                this.match(flashcardParser.CL);
                this.state = 941;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.OPATALT) {
                    {
                        this.state = 937;
                        this.match(flashcardParser.OPATALT);
                        this.state = 938;
                        this.words();
                        this.state = 939;
                        this.match(flashcardParser.CL);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stillimagefilmbit() {
        let _localctx = new StillimagefilmbitContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, flashcardParser.RULE_stillimagefilmbit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 943;
                this.stillimg_one();
                this.state = 947;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 944;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 949;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stillimg_one() {
        let _localctx = new Stillimg_oneContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, flashcardParser.RULE_stillimg_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 950;
                this.op_stillimagefilm_format();
                this.state = 951;
                this.match(flashcardParser.COLON);
                this.state = 955;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.S) {
                    {
                        {
                            this.state = 952;
                            this.match(flashcardParser.S);
                        }
                    }
                    this.state = 957;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 958;
                this.url();
                this.state = 959;
                this.match(flashcardParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    videobit() {
        let _localctx = new VideobitContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, flashcardParser.RULE_videobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 961;
                this.video_one();
                this.state = 965;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 962;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 967;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    video_one() {
        let _localctx = new Video_oneContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, flashcardParser.RULE_video_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 968;
                this.op_video_format();
                this.state = 969;
                this.match(flashcardParser.COLON);
                this.state = 970;
                this.url();
                this.state = 971;
                this.match(flashcardParser.CL);
                this.state = 976;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                    case 1:
                        {
                            this.state = 972;
                            this.match(flashcardParser.OPATALT);
                            this.state = 973;
                            this.words();
                            this.state = 974;
                            this.match(flashcardParser.CL);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    imagebit() {
        let _localctx = new ImagebitContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, flashcardParser.RULE_imagebit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 978;
                this.image_one();
                this.state = 982;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 979;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 984;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                }
                this.state = 987;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                    case 1:
                        {
                            this.state = 985;
                            this.match(flashcardParser.NL);
                            this.state = 986;
                            this.match(flashcardParser.ShowInIndex);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    image_one() {
        let _localctx = new Image_oneContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, flashcardParser.RULE_image_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 989;
                this.op_image_format();
                this.state = 990;
                this.match(flashcardParser.COLON);
                this.state = 994;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.S) {
                    {
                        {
                            this.state = 991;
                            this.match(flashcardParser.S);
                        }
                    }
                    this.state = 996;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 997;
                this.url();
                this.state = 998;
                this.match(flashcardParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    op_image_format() {
        let _localctx = new Op_image_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, flashcardParser.RULE_op_image_format);
        let _la;
        try {
            this.state = 1014;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OpAmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1000;
                        this.match(flashcardParser.OpAmpImage);
                        this.state = 1003;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case flashcardParser.Image_type:
                                {
                                    {
                                        this.state = 1001;
                                        this.match(flashcardParser.Image_type);
                                    }
                                }
                                break;
                            case flashcardParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 1002;
                                        this.match(flashcardParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case flashcardParser.COLON:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case flashcardParser.OpAmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1005;
                        this.match(flashcardParser.OpAmpImageLink);
                        this.state = 1007;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.Image_type) {
                            {
                                this.state = 1006;
                                this.match(flashcardParser.Image_type);
                            }
                        }
                    }
                    break;
                case flashcardParser.OpAmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1009;
                        this.match(flashcardParser.OpAmpImageZoom);
                        this.state = 1011;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.Image_type) {
                            {
                                this.state = 1010;
                                this.match(flashcardParser.Image_type);
                            }
                        }
                    }
                    break;
                case flashcardParser.OpAmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1013;
                        this.match(flashcardParser.OpAmpImageWAudio);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    image_chained() {
        let _localctx = new Image_chainedContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, flashcardParser.RULE_image_chained);
        let _la;
        try {
            let _alt;
            this.state = 1033;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1016;
                        this.match(flashcardParser.AtSrc);
                        this.state = 1017;
                        this.match(flashcardParser.COLON);
                        this.state = 1018;
                        this.url();
                        this.state = 1019;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.AtWidth:
                case flashcardParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1021;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.AtWidth || _la === flashcardParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1022;
                        this.match(flashcardParser.COLON);
                        this.state = 1023;
                        this.match(flashcardParser.NUMERIC);
                        this.state = 1024;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.OPATALT:
                case flashcardParser.OpAtCaption:
                case flashcardParser.OpAtLicense:
                case flashcardParser.OpAtCopyright:
                case flashcardParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1025;
                        _la = this._input.LA(1);
                        if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (flashcardParser.OPATALT - 77)) | (1 << (flashcardParser.OpAtCaption - 77)) | (1 << (flashcardParser.OpAtLicense - 77)) | (1 << (flashcardParser.OpAtCopyright - 77)) | (1 << (flashcardParser.OpAtSearch - 77)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1029;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1026;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1031;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                        }
                        this.state = 1032;
                        this.match(flashcardParser.CL);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    image_chained4match() {
        let _localctx = new Image_chained4matchContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, flashcardParser.RULE_image_chained4match);
        let _la;
        try {
            let _alt;
            this.state = 1052;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1035;
                        this.match(flashcardParser.AtSrc);
                        this.state = 1036;
                        this.match(flashcardParser.COLON);
                        this.state = 1037;
                        this.url();
                        this.state = 1038;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.AtWidth:
                case flashcardParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1040;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.AtWidth || _la === flashcardParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1041;
                        this.match(flashcardParser.COLON);
                        this.state = 1042;
                        this.match(flashcardParser.NUMERIC);
                        this.state = 1043;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.OPATALT:
                case flashcardParser.OpAtCaption:
                case flashcardParser.OpAtLicense:
                case flashcardParser.OpAtCopyright:
                case flashcardParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1044;
                        _la = this._input.LA(1);
                        if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (flashcardParser.OPATALT - 77)) | (1 << (flashcardParser.OpAtCaption - 77)) | (1 << (flashcardParser.OpAtLicense - 77)) | (1 << (flashcardParser.OpAtCopyright - 77)) | (1 << (flashcardParser.OpAtSearch - 77)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1048;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1045;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1050;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                        }
                        this.state = 1051;
                        this.match(flashcardParser.CL);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    audiobit() {
        let _localctx = new AudiobitContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, flashcardParser.RULE_audiobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1054;
                this.audio_one();
                this.state = 1058;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1055;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 1060;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    audio_one() {
        let _localctx = new Audio_oneContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, flashcardParser.RULE_audio_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1061;
                this.op_audio_format();
                this.state = 1062;
                this.match(flashcardParser.COLON);
                this.state = 1063;
                this.url();
                this.state = 1064;
                this.match(flashcardParser.CL);
                this.state = 1069;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                    case 1:
                        {
                            this.state = 1065;
                            this.match(flashcardParser.OPATALT);
                            this.state = 1066;
                            this.words();
                            this.state = 1067;
                            this.match(flashcardParser.CL);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    audio_format() {
        let _localctx = new Audio_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, flashcardParser.RULE_audio_format);
        let _la;
        try {
            this.state = 1081;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1071;
                        this.match(flashcardParser.AmpAudio);
                        this.state = 1074;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.COLON) {
                            {
                                this.state = 1072;
                                this.match(flashcardParser.COLON);
                                this.state = 1073;
                                this.match(flashcardParser.Audio_type);
                            }
                        }
                    }
                    break;
                case flashcardParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1076;
                        this.match(flashcardParser.AmpAudioLink);
                        this.state = 1079;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.COLON) {
                            {
                                this.state = 1077;
                                this.match(flashcardParser.COLON);
                                this.state = 1078;
                                this.match(flashcardParser.Audio_type);
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    op_audio_format() {
        let _localctx = new Op_audio_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, flashcardParser.RULE_op_audio_format);
        try {
            this.state = 1098;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OpAmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1083;
                        this.match(flashcardParser.OpAmpAudio);
                        this.state = 1086;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1084;
                                    this.match(flashcardParser.COLON);
                                    this.state = 1085;
                                    this.match(flashcardParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case flashcardParser.OpAmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1088;
                        this.match(flashcardParser.OpAmpAudioLink);
                        this.state = 1091;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1089;
                                    this.match(flashcardParser.COLON);
                                    this.state = 1090;
                                    this.match(flashcardParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case flashcardParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1093;
                        this.match(flashcardParser.OpAmpAudioEmbed);
                        this.state = 1096;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1094;
                                    this.match(flashcardParser.COLON);
                                    this.state = 1095;
                                    this.match(flashcardParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resource_chained() {
        let _localctx = new Resource_chainedContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, flashcardParser.RULE_resource_chained);
        let _la;
        try {
            let _alt;
            this.state = 1131;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OPA:
                case flashcardParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1103;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case flashcardParser.OPA:
                                {
                                    this.state = 1100;
                                    this.match(flashcardParser.OPA);
                                    this.state = 1101;
                                    this.s_and_w();
                                }
                                break;
                            case flashcardParser.AtSrc:
                                {
                                    this.state = 1102;
                                    this.match(flashcardParser.AtSrc);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1105;
                        this.match(flashcardParser.COLON);
                        this.state = 1109;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1106;
                                        this.match(flashcardParser.S);
                                    }
                                }
                            }
                            this.state = 1111;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                        }
                        this.state = 1114;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1114;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case flashcardParser.S:
                                    case flashcardParser.OPS:
                                    case flashcardParser.COLON:
                                    case flashcardParser.AMP:
                                    case flashcardParser.Greater:
                                    case flashcardParser.Less:
                                    case flashcardParser.RightAngle:
                                    case flashcardParser.RightArrow:
                                    case flashcardParser.NUMERIC:
                                    case flashcardParser.STRING:
                                    case flashcardParser.NOTBITMARK:
                                    case flashcardParser.ELIPSIS:
                                    case flashcardParser.SENTENCE:
                                    case flashcardParser.BARSTRING:
                                    case flashcardParser.URL:
                                        {
                                            this.state = 1112;
                                            this.s_and_w();
                                        }
                                        break;
                                    case flashcardParser.NL:
                                        {
                                            this.state = 1113;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 1116;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                        this.state = 1118;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.AtWidth:
                case flashcardParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1119;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.AtWidth || _la === flashcardParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1120;
                        this.match(flashcardParser.COLON);
                        this.state = 1121;
                        this.match(flashcardParser.NUMERIC);
                        this.state = 1122;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.OPATALT:
                case flashcardParser.OpAtCaption:
                case flashcardParser.OpAtLicense:
                case flashcardParser.OpAtCopyright:
                case flashcardParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1123;
                        _la = this._input.LA(1);
                        if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (flashcardParser.OPATALT - 77)) | (1 << (flashcardParser.OpAtCaption - 77)) | (1 << (flashcardParser.OpAtLicense - 77)) | (1 << (flashcardParser.OpAtCopyright - 77)) | (1 << (flashcardParser.OpAtSearch - 77)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1127;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1124;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1129;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                        }
                        this.state = 1130;
                        this.match(flashcardParser.CL);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    telephone() {
        let _localctx = new TelephoneContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, flashcardParser.RULE_telephone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1133;
                this.match(flashcardParser.TEL);
                this.state = 1134;
                this.match(flashcardParser.PLUS);
                this.state = 1135;
                this.match(flashcardParser.NUMERIC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    url() {
        let _localctx = new UrlContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, flashcardParser.RULE_url);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1137;
                this.match(flashcardParser.URL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    item() {
        let _localctx = new ItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, flashcardParser.RULE_item);
        let _la;
        try {
            this.state = 1169;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 152, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1139;
                        this.match(flashcardParser.OPC);
                        this.state = 1140;
                        this.match(flashcardParser.CL);
                        this.state = 1148;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1144;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === flashcardParser.S) {
                                        {
                                            {
                                                this.state = 1141;
                                                this.match(flashcardParser.S);
                                            }
                                        }
                                        this.state = 1146;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1147;
                                    this.lead();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1150;
                        this.match(flashcardParser.OPC);
                        this.state = 1151;
                        this.s_and_w();
                        this.state = 1156;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1154;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1152;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1153;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 1158;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1159;
                        this.match(flashcardParser.CL);
                        this.state = 1167;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1163;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === flashcardParser.S) {
                                        {
                                            {
                                                this.state = 1160;
                                                this.match(flashcardParser.S);
                                            }
                                        }
                                        this.state = 1165;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1166;
                                    this.lead();
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lead() {
        let _localctx = new LeadContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, flashcardParser.RULE_lead);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1171;
                this.match(flashcardParser.OPC);
                this.state = 1172;
                this.s_and_w();
                this.state = 1177;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                    {
                        this.state = 1175;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1173;
                                    this.match(flashcardParser.COLON);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1174;
                                    this.s_and_w();
                                }
                                break;
                        }
                    }
                    this.state = 1179;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1180;
                this.match(flashcardParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    angleref() {
        let _localctx = new AnglerefContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, flashcardParser.RULE_angleref);
        let _la;
        try {
            this.state = 1192;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OPRANGLES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1182;
                        this.match(flashcardParser.OPRANGLES);
                        this.state = 1184;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1183;
                                this.s_and_w();
                            }
                        }
                        this.state = 1186;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.OPRANGLEL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1187;
                        this.match(flashcardParser.OPRANGLEL);
                        this.state = 1189;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1188;
                                this.s_and_w();
                            }
                        }
                        this.state = 1191;
                        this.match(flashcardParser.CL);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    example() {
        let _localctx = new ExampleContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, flashcardParser.RULE_example);
        let _la;
        try {
            this.state = 1201;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AtExamplecl:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1194;
                        this.match(flashcardParser.AtExamplecl);
                    }
                    break;
                case flashcardParser.AtExampleWithStr:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1195;
                        this.match(flashcardParser.AtExampleWithStr);
                    }
                    break;
                case flashcardParser.AtExamplecol:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1196;
                        this.match(flashcardParser.AtExamplecol);
                        this.state = 1198;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.SENTENCE) {
                            {
                                this.state = 1197;
                                this.match(flashcardParser.SENTENCE);
                            }
                        }
                        this.state = 1200;
                        this.match(flashcardParser.EOF);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bracketed_text() {
        let _localctx = new Bracketed_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, flashcardParser.RULE_bracketed_text);
        let _la;
        try {
            let _alt;
            this.state = 1242;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 167, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1203;
                        this.match(flashcardParser.BracEnclose);
                        this.state = 1205;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1204;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1228;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                {
                                    this.state = 1207;
                                    this.s_and_w();
                                    this.state = 1217;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1208;
                                                    this.match(flashcardParser.NL);
                                                    this.state = 1212;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1209;
                                                                    this.match(flashcardParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1214;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 1219;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                                    }
                                    this.state = 1223;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === flashcardParser.NL) {
                                        {
                                            {
                                                this.state = 1220;
                                                this.match(flashcardParser.NL);
                                            }
                                        }
                                        this.state = 1225;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 1230;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1231;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1232;
                        this.match(flashcardParser.BracEnclose);
                        this.state = 1238;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1236;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1233;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1234;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1235;
                                            this.match(flashcardParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1240;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1241;
                        this.match(flashcardParser.EOF);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    reference() {
        let _localctx = new ReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, flashcardParser.RULE_reference);
        let _la;
        try {
            this.state = 1266;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1244;
                        this.match(flashcardParser.AtReference);
                        this.state = 1249;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1249;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1245;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1246;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1247;
                                            this.match(flashcardParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1248;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1251;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                        this.state = 1253;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1254;
                        this.match(flashcardParser.AtReference);
                        this.state = 1262;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1260;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1255;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1256;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1257;
                                            this.match(flashcardParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1258;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 1259;
                                            this.match(flashcardParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1264;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1265;
                        this.match(flashcardParser.EOF);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    progress() {
        let _localctx = new ProgressContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, flashcardParser.RULE_progress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1268;
                this.match(flashcardParser.AtProgress);
                this.state = 1269;
                this.s_and_w();
                this.state = 1270;
                this.match(flashcardParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dateprop() {
        let _localctx = new DatepropContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, flashcardParser.RULE_dateprop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1272;
                this.match(flashcardParser.AtDate);
                this.state = 1276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1276;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1273;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1274;
                                    this.match(flashcardParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1275;
                                    this.match(flashcardParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1278;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                this.state = 1280;
                this.match(flashcardParser.CL);
                this.state = 1282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.AtDate) {
                    {
                        this.state = 1281;
                        this.dateprop_chained();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dateprop_chained() {
        let _localctx = new Dateprop_chainedContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, flashcardParser.RULE_dateprop_chained);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1284;
                this.match(flashcardParser.AtDate);
                this.state = 1288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1288;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1285;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1286;
                                    this.match(flashcardParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1287;
                                    this.match(flashcardParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1290;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                this.state = 1292;
                this.match(flashcardParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instruction() {
        let _localctx = new InstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, flashcardParser.RULE_instruction);
        let _la;
        try {
            let _alt;
            this.state = 1340;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1294;
                        this.match(flashcardParser.OPB);
                        this.state = 1298;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.NL) {
                            {
                                {
                                    this.state = 1295;
                                    this.match(flashcardParser.NL);
                                }
                            }
                            this.state = 1300;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1302;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1301;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1325;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                {
                                    this.state = 1304;
                                    this.s_and_w();
                                    this.state = 1314;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1305;
                                                    this.match(flashcardParser.NL);
                                                    this.state = 1309;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1306;
                                                                    this.match(flashcardParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1311;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 1316;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
                                    }
                                    this.state = 1320;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === flashcardParser.NL) {
                                        {
                                            {
                                                this.state = 1317;
                                                this.match(flashcardParser.NL);
                                            }
                                        }
                                        this.state = 1322;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 1327;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1328;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1329;
                        this.match(flashcardParser.OPB);
                        this.state = 1333;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.NL) {
                            {
                                {
                                    this.state = 1330;
                                    this.match(flashcardParser.NL);
                                }
                            }
                            this.state = 1335;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1337;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1336;
                                this.s_and_w();
                            }
                        }
                        this.state = 1339;
                        this.match(flashcardParser.EOF);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    hint() {
        let _localctx = new HintContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, flashcardParser.RULE_hint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1342;
                this.match(flashcardParser.OPQ);
                this.state = 1344;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1343;
                            _la = this._input.LA(1);
                            if (_la <= 0 || (_la === flashcardParser.CL)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 1346;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.OPDOT) | (1 << flashcardParser.S) | (1 << flashcardParser.BitFlash1) | (1 << flashcardParser.BitFlash) | (1 << flashcardParser.BitFlashcardset) | (1 << flashcardParser.BitFlashcardlangset) | (1 << flashcardParser.BitFlashcardlang1) | (1 << flashcardParser.BitVocabulary) | (1 << flashcardParser.BitVocabulary_1) | (1 << flashcardParser.OPDOLL) | (1 << flashcardParser.OPBUL) | (1 << flashcardParser.OPESC) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPP) | (1 << flashcardParser.OPM) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPR) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP) | (1 << flashcardParser.DBLCOLON) | (1 << flashcardParser.PLUS) | (1 << flashcardParser.DotAt))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.DBLEQ - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.EQ - 32)) | (1 << (flashcardParser.EQ2 - 32)) | (1 << (flashcardParser.OR - 32)) | (1 << (flashcardParser.HSPL - 32)) | (1 << (flashcardParser.HSPL2 - 32)) | (1 << (flashcardParser.SSPL - 32)) | (1 << (flashcardParser.SSPL2 - 32)) | (1 << (flashcardParser.COMMENT - 32)) | (1 << (flashcardParser.DCANY - 32)) | (1 << (flashcardParser.Image_type - 32)) | (1 << (flashcardParser.Audio_type - 32)) | (1 << (flashcardParser.Video_type - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NOTCL - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.OPAT - 32)) | (1 << (flashcardParser.AtProgress - 32)) | (1 << (flashcardParser.AtReference - 32)) | (1 << (flashcardParser.AtWidth - 32)) | (1 << (flashcardParser.AtHeight - 32)) | (1 << (flashcardParser.AtProgressPoints - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (flashcardParser.AtShortanswer - 64)) | (1 << (flashcardParser.AtLonganswer - 64)) | (1 << (flashcardParser.AtExampleWithStr - 64)) | (1 << (flashcardParser.AtExamplecol - 64)) | (1 << (flashcardParser.AtExamplecl - 64)) | (1 << (flashcardParser.AtSampleSolution - 64)) | (1 << (flashcardParser.AtPartialAnswerS - 64)) | (1 << (flashcardParser.AtPartialAnswer - 64)) | (1 << (flashcardParser.AtLabeltrue - 64)) | (1 << (flashcardParser.AtLabelfalse - 64)) | (1 << (flashcardParser.AtPoints - 64)) | (1 << (flashcardParser.AtSrc - 64)) | (1 << (flashcardParser.AtPartner - 64)) | (1 << (flashcardParser.OPATALT - 64)) | (1 << (flashcardParser.OPAMARK - 64)) | (1 << (flashcardParser.ShowInIndex - 64)) | (1 << (flashcardParser.OpAtCaption - 64)) | (1 << (flashcardParser.OpAtLicense - 64)) | (1 << (flashcardParser.OpAtCopyright - 64)) | (1 << (flashcardParser.OpAtSearch - 64)) | (1 << (flashcardParser.OpAtIsTracked - 64)) | (1 << (flashcardParser.OpAtIsInfoOnly - 64)) | (1 << (flashcardParser.AtDate - 64)) | (1 << (flashcardParser.Http - 64)) | (1 << (flashcardParser.Https - 64)) | (1 << (flashcardParser.AmpAudio - 64)) | (1 << (flashcardParser.AmpImage - 64)) | (1 << (flashcardParser.AmpImageZoom - 64)) | (1 << (flashcardParser.AmpImageWAudio - 64)) | (1 << (flashcardParser.AmpVideo - 64)) | (1 << (flashcardParser.AmpArticle - 64)) | (1 << (flashcardParser.AmpDocument - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (flashcardParser.AmpApp - 96)) | (1 << (flashcardParser.AmpWebsite - 96)) | (1 << (flashcardParser.AmpStillImageFilm - 96)) | (1 << (flashcardParser.AmpPdf - 96)) | (1 << (flashcardParser.OpAmpAudio - 96)) | (1 << (flashcardParser.OpAmpImage - 96)) | (1 << (flashcardParser.OpAmpImageZoom - 96)) | (1 << (flashcardParser.OpAmpImageWAudio - 96)) | (1 << (flashcardParser.OpAmpVideo - 96)) | (1 << (flashcardParser.OpAmpArticle - 96)) | (1 << (flashcardParser.OpAmpArticleAtt - 96)) | (1 << (flashcardParser.OpAmpDocument - 96)) | (1 << (flashcardParser.OpAmpApp - 96)) | (1 << (flashcardParser.OpAmpWebsite - 96)) | (1 << (flashcardParser.OpAmpStillImageFilm - 96)) | (1 << (flashcardParser.BracEnclose - 96)) | (1 << (flashcardParser.AmpAudioLink - 96)) | (1 << (flashcardParser.AmpImageLink - 96)) | (1 << (flashcardParser.AmpVideoLink - 96)) | (1 << (flashcardParser.AmpArticleLink - 96)) | (1 << (flashcardParser.AmpDocumentLink - 96)) | (1 << (flashcardParser.AmpDocumentDownload - 96)) | (1 << (flashcardParser.AmpAppLink - 96)) | (1 << (flashcardParser.AmpWebsiteLink - 96)) | (1 << (flashcardParser.AmpStillImageFilmLink - 96)) | (1 << (flashcardParser.OpAmpAudioLink - 96)) | (1 << (flashcardParser.OpAmpImageLink - 96)) | (1 << (flashcardParser.OpAmpVideoLink - 96)) | (1 << (flashcardParser.OpAmpArticleLink - 96)) | (1 << (flashcardParser.OpAmpDocumentLink - 96)) | (1 << (flashcardParser.OpAmpDocumentDownload - 96)) | (1 << (flashcardParser.OpAmpAppLink - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (flashcardParser.OpAmpWebsiteLink - 128)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 128)) | (1 << (flashcardParser.AmpImageEmbed - 128)) | (1 << (flashcardParser.AmpVideoEmbed - 128)) | (1 << (flashcardParser.AmpAudioEmbed - 128)) | (1 << (flashcardParser.AmpDocumentEmbed - 128)) | (1 << (flashcardParser.AmpStillImageFilmEmbed - 128)) | (1 << (flashcardParser.OpAmpImageEmbed - 128)) | (1 << (flashcardParser.OpAmpVideoEmbed - 128)) | (1 << (flashcardParser.OpAmpAudioEmbed - 128)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 128)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (flashcardParser.BitmarkMinus - 128)) | (1 << (flashcardParser.BitmarkPlus - 128)) | (1 << (flashcardParser.ColonText - 128)) | (1 << (flashcardParser.ColonJson - 128)) | (1 << (flashcardParser.Prosemirror - 128)) | (1 << (flashcardParser.Placeholder - 128)) | (1 << (flashcardParser.BASIC - 128)) | (1 << (flashcardParser.JPG - 128)) | (1 << (flashcardParser.PNG - 128)) | (1 << (flashcardParser.GIF - 128)) | (1 << (flashcardParser.SVG - 128)) | (1 << (flashcardParser.MP2 - 128)) | (1 << (flashcardParser.MP3 - 128)) | (1 << (flashcardParser.MP4 - 128)) | (1 << (flashcardParser.FLV - 128)) | (1 << (flashcardParser.WMV - 128)) | (1 << (flashcardParser.MPEG - 128)) | (1 << (flashcardParser.MPG - 128)) | (1 << (flashcardParser.TEL - 128)) | (1 << (flashcardParser.DotArticleAtt - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (flashcardParser.STAR - 160)) | (1 << (flashcardParser.URL - 160)) | (1 << (flashcardParser.LIST_LINE - 160)) | (1 << (flashcardParser.ENCLBARS - 160)))) !== 0));
                this.state = 1348;
                this.match(flashcardParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    title() {
        let _localctx = new TitleContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, flashcardParser.RULE_title);
        let _la;
        try {
            this.state = 1362;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 190, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1350;
                        this.match(flashcardParser.OPHASH);
                        this.state = 1353;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1353;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case flashcardParser.S:
                                    case flashcardParser.OPS:
                                    case flashcardParser.COLON:
                                    case flashcardParser.AMP:
                                    case flashcardParser.Greater:
                                    case flashcardParser.Less:
                                    case flashcardParser.RightAngle:
                                    case flashcardParser.RightArrow:
                                    case flashcardParser.NUMERIC:
                                    case flashcardParser.STRING:
                                    case flashcardParser.NOTBITMARK:
                                    case flashcardParser.ELIPSIS:
                                    case flashcardParser.SENTENCE:
                                    case flashcardParser.BARSTRING:
                                    case flashcardParser.URL:
                                        {
                                            this.state = 1351;
                                            this.s_and_w();
                                        }
                                        break;
                                    case flashcardParser.NL:
                                        {
                                            this.state = 1352;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 1355;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                        this.state = 1357;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1358;
                        this.match(flashcardParser.OPHASH);
                        this.state = 1359;
                        this.s_and_w();
                        this.state = 1360;
                        this.match(flashcardParser.EOF);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bool_label() {
        let _localctx = new Bool_labelContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, flashcardParser.RULE_bool_label);
        try {
            this.state = 1372;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AtLabeltrue:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1364;
                        this.match(flashcardParser.AtLabeltrue);
                        this.state = 1365;
                        this.s_and_w();
                        this.state = 1366;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.AtLabelfalse:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1368;
                        this.match(flashcardParser.AtLabelfalse);
                        this.state = 1369;
                        this.s_and_w();
                        this.state = 1370;
                        this.match(flashcardParser.CL);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    progress_points() {
        let _localctx = new Progress_pointsContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, flashcardParser.RULE_progress_points);
        try {
            this.state = 1383;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1374;
                        this.match(flashcardParser.AtProgressPoints);
                        this.state = 1375;
                        this.match(flashcardParser.COLON);
                        this.state = 1376;
                        this.match(flashcardParser.NUMERIC);
                        this.state = 1377;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1378;
                        this.match(flashcardParser.AtProgressPoints);
                        this.state = 1379;
                        this.match(flashcardParser.COLON);
                        this.state = 1380;
                        this.s_and_w();
                        this.state = 1381;
                        this.match(flashcardParser.CL);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    istracked() {
        let _localctx = new IstrackedContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, flashcardParser.RULE_istracked);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1385;
                this.match(flashcardParser.OpAtIsTracked);
                this.state = 1386;
                this.s_and_w();
                this.state = 1387;
                this.match(flashcardParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    isinfoonly() {
        let _localctx = new IsinfoonlyContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, flashcardParser.RULE_isinfoonly);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1389;
                this.match(flashcardParser.OpAtIsInfoOnly);
                this.state = 1390;
                this.s_and_w();
                this.state = 1391;
                this.match(flashcardParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    atdef() {
        let _localctx = new AtdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, flashcardParser.RULE_atdef);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1393;
                this.atdef_();
                this.state = 1403;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1397;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === flashcardParser.NL) {
                                    {
                                        {
                                            this.state = 1394;
                                            this.match(flashcardParser.NL);
                                        }
                                    }
                                    this.state = 1399;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1400;
                                this.atdef_();
                            }
                        }
                    }
                    this.state = 1405;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    atdef_() {
        let _localctx = new Atdef_Context(this._ctx, this.state);
        this.enterRule(_localctx, 152, flashcardParser.RULE_atdef_);
        let _la;
        try {
            let _alt;
            this.state = 1429;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OPA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1406;
                        this.match(flashcardParser.OPA);
                        this.state = 1407;
                        this.s_and_w();
                        this.state = 1408;
                        _la = this._input.LA(1);
                        if (!(_la === flashcardParser.COLON || _la === flashcardParser.DBLCOLON)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1409;
                        this.s_and_w();
                        this.state = 1415;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1413;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 195, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1410;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1411;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1412;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 1417;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1418;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1420;
                        this.match(flashcardParser.OpAtCopyright);
                        this.state = 1424;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1421;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1426;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
                        }
                        this.state = 1427;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.AtSampleSolution:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1428;
                        this.match(flashcardParser.AtSampleSolution);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dollarans() {
        let _localctx = new DollaransContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, flashcardParser.RULE_dollarans);
        let _la;
        try {
            this.state = 1450;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 203, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1431;
                        this.match(flashcardParser.OPDOLL);
                        this.state = 1435;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1435;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 199, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1432;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1433;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1434;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1437;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                        this.state = 1439;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1440;
                        this.match(flashcardParser.OPDOLL);
                        this.state = 1446;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1444;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 201, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1441;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1442;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1443;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1448;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1449;
                        this.match(flashcardParser.EOF);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    anchor() {
        let _localctx = new AnchorContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, flashcardParser.RULE_anchor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1452;
                this.match(flashcardParser.OPDANGLE);
                this.state = 1454;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                    {
                        this.state = 1453;
                        this.s_and_w();
                    }
                }
                this.state = 1456;
                this.match(flashcardParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dcolon() {
        let _localctx = new DcolonContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, flashcardParser.RULE_dcolon);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1458;
                this.match(flashcardParser.DBLCOLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lines() {
        let _localctx = new LinesContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, flashcardParser.RULE_lines);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1464;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1460;
                            this.s_and_w();
                            this.state = 1462;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === flashcardParser.NL) {
                                {
                                    this.state = 1461;
                                    this.match(flashcardParser.NL);
                                }
                            }
                        }
                    }
                    this.state = 1466;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    s_and_w() {
        let _localctx = new S_and_wContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, flashcardParser.RULE_s_and_w);
        let _la;
        try {
            let _alt;
            this.state = 1512;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 214, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1468;
                        this.match(flashcardParser.STRING);
                        this.state = 1475;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 208, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1470;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1469;
                                                this.match(flashcardParser.S);
                                            }
                                        }
                                        this.state = 1472;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === flashcardParser.S);
                                    this.state = 1474;
                                    this.match(flashcardParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1477;
                        this.words();
                        this.state = 1484;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 210, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1479;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1478;
                                                this.match(flashcardParser.S);
                                            }
                                        }
                                        this.state = 1481;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === flashcardParser.S);
                                    this.state = 1483;
                                    this.match(flashcardParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1486;
                        this.match(flashcardParser.OPS);
                        this.state = 1487;
                        this.s_and_w();
                        this.state = 1488;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1490;
                        this.match(flashcardParser.NUMERIC);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1494;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.S) {
                            {
                                {
                                    this.state = 1491;
                                    this.match(flashcardParser.S);
                                }
                            }
                            this.state = 1496;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1497;
                        this.match(flashcardParser.COLON);
                        this.state = 1501;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1498;
                                        this.match(flashcardParser.S);
                                    }
                                }
                            }
                            this.state = 1503;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1504;
                        this.match(flashcardParser.AMP);
                        this.state = 1508;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1505;
                                        this.match(flashcardParser.S);
                                    }
                                }
                            }
                            this.state = 1510;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1511;
                        this.match(flashcardParser.URL);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    clnsp() {
        let _localctx = new ClnspContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, flashcardParser.RULE_clnsp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1514;
                this.match(flashcardParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sspl() {
        let _localctx = new SsplContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, flashcardParser.RULE_sspl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1516;
                _la = this._input.LA(1);
                if (!(_la === flashcardParser.SSPL || _la === flashcardParser.SSPL2)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    words() {
        let _localctx = new WordsContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, flashcardParser.RULE_words);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1529;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1529;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case flashcardParser.SENTENCE:
                                        {
                                            this.state = 1518;
                                            this.match(flashcardParser.SENTENCE);
                                        }
                                        break;
                                    case flashcardParser.NOTBITMARK:
                                        {
                                            this.state = 1519;
                                            this.match(flashcardParser.NOTBITMARK);
                                        }
                                        break;
                                    case flashcardParser.BARSTRING:
                                        {
                                            this.state = 1520;
                                            this.match(flashcardParser.BARSTRING);
                                        }
                                        break;
                                    case flashcardParser.ELIPSIS:
                                        {
                                            this.state = 1521;
                                            this.match(flashcardParser.ELIPSIS);
                                        }
                                        break;
                                    case flashcardParser.AMP:
                                        {
                                            this.state = 1522;
                                            this.match(flashcardParser.AMP);
                                        }
                                        break;
                                    case flashcardParser.Greater:
                                        {
                                            this.state = 1523;
                                            this.match(flashcardParser.Greater);
                                            this.state = 1524;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === flashcardParser.Greater)) {
                                                this._errHandler.recoverInline(this);
                                            }
                                            else {
                                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                                    this.matchedEOF = true;
                                                }
                                                this._errHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                        break;
                                    case flashcardParser.Less:
                                        {
                                            this.state = 1525;
                                            this.match(flashcardParser.Less);
                                            this.state = 1526;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === flashcardParser.Less)) {
                                                this._errHandler.recoverInline(this);
                                            }
                                            else {
                                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                                    this.matchedEOF = true;
                                                }
                                                this._errHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                        break;
                                    case flashcardParser.RightArrow:
                                        {
                                            this.state = 1527;
                                            this.match(flashcardParser.RightArrow);
                                        }
                                        break;
                                    case flashcardParser.RightAngle:
                                        {
                                            this.state = 1528;
                                            this.match(flashcardParser.RightAngle);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1531;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sp() {
        let _localctx = new SpContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, flashcardParser.RULE_sp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1533;
                this.match(flashcardParser.S);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!flashcardParser.__ATN) {
            flashcardParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(flashcardParser._serializedATN));
        }
        return flashcardParser.__ATN;
    }
}
exports.flashcardParser = flashcardParser;
flashcardParser.OPDOT = 1;
flashcardParser.S = 2;
flashcardParser.BitFlash1 = 3;
flashcardParser.BitFlash = 4;
flashcardParser.BitFlashcardset = 5;
flashcardParser.BitFlashcardlangset = 6;
flashcardParser.BitFlashcardlang1 = 7;
flashcardParser.BitVocabulary = 8;
flashcardParser.BitVocabulary_1 = 9;
flashcardParser.OPDOLL = 10;
flashcardParser.OPBUL = 11;
flashcardParser.OPESC = 12;
flashcardParser.OPRANGLES = 13;
flashcardParser.OPRANGLEL = 14;
flashcardParser.OPDANGLE = 15;
flashcardParser.OPU = 16;
flashcardParser.OPB = 17;
flashcardParser.OPQ = 18;
flashcardParser.OPA = 19;
flashcardParser.OPP = 20;
flashcardParser.OPM = 21;
flashcardParser.OPS = 22;
flashcardParser.OPR = 23;
flashcardParser.OPC = 24;
flashcardParser.OPHASH = 25;
flashcardParser.CL = 26;
flashcardParser.COLON = 27;
flashcardParser.AMP = 28;
flashcardParser.DBLCOLON = 29;
flashcardParser.PLUS = 30;
flashcardParser.DotAt = 31;
flashcardParser.Greater = 32;
flashcardParser.Less = 33;
flashcardParser.DBLEQ = 34;
flashcardParser.RightAngle = 35;
flashcardParser.RightArrow = 36;
flashcardParser.EQ = 37;
flashcardParser.EQ2 = 38;
flashcardParser.OR = 39;
flashcardParser.HSPL = 40;
flashcardParser.HSPL2 = 41;
flashcardParser.SSPL = 42;
flashcardParser.SSPL2 = 43;
flashcardParser.COMMENT = 44;
flashcardParser.DCANY = 45;
flashcardParser.Image_type = 46;
flashcardParser.Audio_type = 47;
flashcardParser.Video_type = 48;
flashcardParser.ArticleText = 49;
flashcardParser.NOTCL = 50;
flashcardParser.NUMERIC = 51;
flashcardParser.STRING = 52;
flashcardParser.NL = 53;
flashcardParser.NOTBITMARK = 54;
flashcardParser.ELIPSIS = 55;
flashcardParser.SENTENCE = 56;
flashcardParser.BARSTRING = 57;
flashcardParser.OPAT = 58;
flashcardParser.AtProgress = 59;
flashcardParser.AtReference = 60;
flashcardParser.AtWidth = 61;
flashcardParser.AtHeight = 62;
flashcardParser.AtProgressPoints = 63;
flashcardParser.AtShortanswer = 64;
flashcardParser.AtLonganswer = 65;
flashcardParser.AtExampleWithStr = 66;
flashcardParser.AtExamplecol = 67;
flashcardParser.AtExamplecl = 68;
flashcardParser.AtSampleSolution = 69;
flashcardParser.AtPartialAnswerS = 70;
flashcardParser.AtPartialAnswer = 71;
flashcardParser.AtLabeltrue = 72;
flashcardParser.AtLabelfalse = 73;
flashcardParser.AtPoints = 74;
flashcardParser.AtSrc = 75;
flashcardParser.AtPartner = 76;
flashcardParser.OPATALT = 77;
flashcardParser.OPAMARK = 78;
flashcardParser.ShowInIndex = 79;
flashcardParser.OpAtCaption = 80;
flashcardParser.OpAtLicense = 81;
flashcardParser.OpAtCopyright = 82;
flashcardParser.OpAtSearch = 83;
flashcardParser.OpAtIsTracked = 84;
flashcardParser.OpAtIsInfoOnly = 85;
flashcardParser.AtDate = 86;
flashcardParser.Http = 87;
flashcardParser.Https = 88;
flashcardParser.AmpAudio = 89;
flashcardParser.AmpImage = 90;
flashcardParser.AmpImageZoom = 91;
flashcardParser.AmpImageWAudio = 92;
flashcardParser.AmpVideo = 93;
flashcardParser.AmpArticle = 94;
flashcardParser.AmpDocument = 95;
flashcardParser.AmpApp = 96;
flashcardParser.AmpWebsite = 97;
flashcardParser.AmpStillImageFilm = 98;
flashcardParser.AmpPdf = 99;
flashcardParser.OpAmpAudio = 100;
flashcardParser.OpAmpImage = 101;
flashcardParser.OpAmpImageZoom = 102;
flashcardParser.OpAmpImageWAudio = 103;
flashcardParser.OpAmpVideo = 104;
flashcardParser.OpAmpArticle = 105;
flashcardParser.OpAmpArticleAtt = 106;
flashcardParser.OpAmpDocument = 107;
flashcardParser.OpAmpApp = 108;
flashcardParser.OpAmpWebsite = 109;
flashcardParser.OpAmpStillImageFilm = 110;
flashcardParser.BracEnclose = 111;
flashcardParser.AmpAudioLink = 112;
flashcardParser.AmpImageLink = 113;
flashcardParser.AmpVideoLink = 114;
flashcardParser.AmpArticleLink = 115;
flashcardParser.AmpDocumentLink = 116;
flashcardParser.AmpDocumentDownload = 117;
flashcardParser.AmpAppLink = 118;
flashcardParser.AmpWebsiteLink = 119;
flashcardParser.AmpStillImageFilmLink = 120;
flashcardParser.OpAmpAudioLink = 121;
flashcardParser.OpAmpImageLink = 122;
flashcardParser.OpAmpVideoLink = 123;
flashcardParser.OpAmpArticleLink = 124;
flashcardParser.OpAmpDocumentLink = 125;
flashcardParser.OpAmpDocumentDownload = 126;
flashcardParser.OpAmpAppLink = 127;
flashcardParser.OpAmpWebsiteLink = 128;
flashcardParser.OpAmpStillImageFilmLink = 129;
flashcardParser.AmpImageEmbed = 130;
flashcardParser.AmpVideoEmbed = 131;
flashcardParser.AmpAudioEmbed = 132;
flashcardParser.AmpDocumentEmbed = 133;
flashcardParser.AmpStillImageFilmEmbed = 134;
flashcardParser.OpAmpImageEmbed = 135;
flashcardParser.OpAmpVideoEmbed = 136;
flashcardParser.OpAmpAudioEmbed = 137;
flashcardParser.OpAmpDocumentEmbed = 138;
flashcardParser.OpAmpStillImageFilmEmbed = 139;
flashcardParser.BitmarkMinus = 140;
flashcardParser.BitmarkPlus = 141;
flashcardParser.ColonText = 142;
flashcardParser.ColonJson = 143;
flashcardParser.Prosemirror = 144;
flashcardParser.Placeholder = 145;
flashcardParser.BASIC = 146;
flashcardParser.JPG = 147;
flashcardParser.PNG = 148;
flashcardParser.GIF = 149;
flashcardParser.SVG = 150;
flashcardParser.MP2 = 151;
flashcardParser.MP3 = 152;
flashcardParser.MP4 = 153;
flashcardParser.FLV = 154;
flashcardParser.WMV = 155;
flashcardParser.MPEG = 156;
flashcardParser.MPG = 157;
flashcardParser.TEL = 158;
flashcardParser.DotArticleAtt = 159;
flashcardParser.STAR = 160;
flashcardParser.URL = 161;
flashcardParser.LIST_LINE = 162;
flashcardParser.ENCLBARS = 163;
flashcardParser.RULE_bitmark = 0;
flashcardParser.RULE_bitmark_ = 1;
flashcardParser.RULE_flashcards = 2;
flashcardParser.RULE_flashcard_1 = 3;
flashcardParser.RULE_flashcard = 4;
flashcardParser.RULE_flashcard_set = 5;
flashcardParser.RULE_flashcard_language_set = 6;
flashcardParser.RULE_flashcard_language_1 = 7;
flashcardParser.RULE_vocab = 8;
flashcardParser.RULE_vocab_1 = 9;
flashcardParser.RULE_sx = 10;
flashcardParser.RULE_sidex = 11;
flashcardParser.RULE_sidex_NL = 12;
flashcardParser.RULE_side = 13;
flashcardParser.RULE_side_NL = 14;
flashcardParser.RULE_vside = 15;
flashcardParser.RULE_bitElem = 16;
flashcardParser.RULE_resource = 17;
flashcardParser.RULE_gap = 18;
flashcardParser.RULE_single_gap = 19;
flashcardParser.RULE_bullet_item = 20;
flashcardParser.RULE_atpoint = 21;
flashcardParser.RULE_format = 22;
flashcardParser.RULE_resource_format = 23;
flashcardParser.RULE_resource_format_extra = 24;
flashcardParser.RULE_format2 = 25;
flashcardParser.RULE_image_format = 26;
flashcardParser.RULE_video_format = 27;
flashcardParser.RULE_article_format = 28;
flashcardParser.RULE_document_format = 29;
flashcardParser.RULE_app_format = 30;
flashcardParser.RULE_website_format = 31;
flashcardParser.RULE_stillimagefilm_format = 32;
flashcardParser.RULE_op_article_format = 33;
flashcardParser.RULE_op_document_format = 34;
flashcardParser.RULE_op_app_format = 35;
flashcardParser.RULE_op_website_format = 36;
flashcardParser.RULE_op_video_format = 37;
flashcardParser.RULE_op_stillimagefilm_format = 38;
flashcardParser.RULE_articlebit = 39;
flashcardParser.RULE_documentbit = 40;
flashcardParser.RULE_websitebit = 41;
flashcardParser.RULE_appbit = 42;
flashcardParser.RULE_stillimagefilmbit = 43;
flashcardParser.RULE_stillimg_one = 44;
flashcardParser.RULE_videobit = 45;
flashcardParser.RULE_video_one = 46;
flashcardParser.RULE_imagebit = 47;
flashcardParser.RULE_image_one = 48;
flashcardParser.RULE_op_image_format = 49;
flashcardParser.RULE_image_chained = 50;
flashcardParser.RULE_image_chained4match = 51;
flashcardParser.RULE_audiobit = 52;
flashcardParser.RULE_audio_one = 53;
flashcardParser.RULE_audio_format = 54;
flashcardParser.RULE_op_audio_format = 55;
flashcardParser.RULE_resource_chained = 56;
flashcardParser.RULE_telephone = 57;
flashcardParser.RULE_url = 58;
flashcardParser.RULE_item = 59;
flashcardParser.RULE_lead = 60;
flashcardParser.RULE_angleref = 61;
flashcardParser.RULE_example = 62;
flashcardParser.RULE_bracketed_text = 63;
flashcardParser.RULE_reference = 64;
flashcardParser.RULE_progress = 65;
flashcardParser.RULE_dateprop = 66;
flashcardParser.RULE_dateprop_chained = 67;
flashcardParser.RULE_instruction = 68;
flashcardParser.RULE_hint = 69;
flashcardParser.RULE_title = 70;
flashcardParser.RULE_bool_label = 71;
flashcardParser.RULE_progress_points = 72;
flashcardParser.RULE_istracked = 73;
flashcardParser.RULE_isinfoonly = 74;
flashcardParser.RULE_atdef = 75;
flashcardParser.RULE_atdef_ = 76;
flashcardParser.RULE_dollarans = 77;
flashcardParser.RULE_anchor = 78;
flashcardParser.RULE_dcolon = 79;
flashcardParser.RULE_lines = 80;
flashcardParser.RULE_s_and_w = 81;
flashcardParser.RULE_clnsp = 82;
flashcardParser.RULE_sspl = 83;
flashcardParser.RULE_words = 84;
flashcardParser.RULE_sp = 85;
// tslint:disable:no-trailing-whitespace
flashcardParser.ruleNames = [
    "bitmark", "bitmark_", "flashcards", "flashcard_1", "flashcard", "flashcard_set",
    "flashcard_language_set", "flashcard_language_1", "vocab", "vocab_1",
    "sx", "sidex", "sidex_NL", "side", "side_NL", "vside", "bitElem", "resource",
    "gap", "single_gap", "bullet_item", "atpoint", "format", "resource_format",
    "resource_format_extra", "format2", "image_format", "video_format", "article_format",
    "document_format", "app_format", "website_format", "stillimagefilm_format",
    "op_article_format", "op_document_format", "op_app_format", "op_website_format",
    "op_video_format", "op_stillimagefilm_format", "articlebit", "documentbit",
    "websitebit", "appbit", "stillimagefilmbit", "stillimg_one", "videobit",
    "video_one", "imagebit", "image_one", "op_image_format", "image_chained",
    "image_chained4match", "audiobit", "audio_one", "audio_format", "op_audio_format",
    "resource_chained", "telephone", "url", "item", "lead", "angleref", "example",
    "bracketed_text", "reference", "progress", "dateprop", "dateprop_chained",
    "instruction", "hint", "title", "bool_label", "progress_points", "istracked",
    "isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "dcolon", "lines",
    "s_and_w", "clnsp", "sspl", "words", "sp",
];
flashcardParser._LITERAL_NAMES = [
    undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, "'[^'", undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'[#'", "']'", "':'", "'&'",
    "'::'", "'+'", "'.@'", "'>'", "'<'", "'=='", "'\u25BA'", "'\u2192'", undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'[@'",
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "'http://'", "'https://'", "'&audio'", "'&image'", "'&image-zoom'", "'&image-with-audio'",
    "'&video'", "'&article'", "'&document'", "'&app'", "'&website'", "'&still-image-film'",
    "'&pdf'", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'&audio-link'",
    "'&image-link'", "'&video-link'", "'&article-link'", "'&document-link'",
    "'&document-download'", "'&app-link'", "'&website-link'", "'&still-image-film-link'",
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "'&image-embed'", "'&video-embed'", "'&daudio-embed'",
    "'&document-embed'", "'&still-image-film-embed'", undefined, undefined,
    undefined, undefined, undefined, "':bitmark--'", "':bitmark++'", "':text'",
    "':json'", "':prosemirror'", "':placeholder'", "':basic'", "':jpg'", "':png'",
    "':gif'", "':svg'", "':mp2'", "':mp3'", "':mp4'", "':flv'", "':wmv'",
    "':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'", "'*'",
];
flashcardParser._SYMBOLIC_NAMES = [
    undefined, "OPDOT", "S", "BitFlash1", "BitFlash", "BitFlashcardset", "BitFlashcardlangset",
    "BitFlashcardlang1", "BitVocabulary", "BitVocabulary_1", "OPDOLL", "OPBUL",
    "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", "OPQ", "OPA",
    "OPP", "OPM", "OPS", "OPR", "OPC", "OPHASH", "CL", "COLON", "AMP", "DBLCOLON",
    "PLUS", "DotAt", "Greater", "Less", "DBLEQ", "RightAngle", "RightArrow",
    "EQ", "EQ2", "OR", "HSPL", "HSPL2", "SSPL", "SSPL2", "COMMENT", "DCANY",
    "Image_type", "Audio_type", "Video_type", "ArticleText", "NOTCL", "NUMERIC",
    "STRING", "NL", "NOTBITMARK", "ELIPSIS", "SENTENCE", "BARSTRING", "OPAT",
    "AtProgress", "AtReference", "AtWidth", "AtHeight", "AtProgressPoints",
    "AtShortanswer", "AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl",
    "AtSampleSolution", "AtPartialAnswerS", "AtPartialAnswer", "AtLabeltrue",
    "AtLabelfalse", "AtPoints", "AtSrc", "AtPartner", "OPATALT", "OPAMARK",
    "ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright", "OpAtSearch",
    "OpAtIsTracked", "OpAtIsInfoOnly", "AtDate", "Http", "Https", "AmpAudio",
    "AmpImage", "AmpImageZoom", "AmpImageWAudio", "AmpVideo", "AmpArticle",
    "AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm", "AmpPdf",
    "OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", "OpAmpImageWAudio", "OpAmpVideo",
    "OpAmpArticle", "OpAmpArticleAtt", "OpAmpDocument", "OpAmpApp", "OpAmpWebsite",
    "OpAmpStillImageFilm", "BracEnclose", "AmpAudioLink", "AmpImageLink",
    "AmpVideoLink", "AmpArticleLink", "AmpDocumentLink", "AmpDocumentDownload",
    "AmpAppLink", "AmpWebsiteLink", "AmpStillImageFilmLink", "OpAmpAudioLink",
    "OpAmpImageLink", "OpAmpVideoLink", "OpAmpArticleLink", "OpAmpDocumentLink",
    "OpAmpDocumentDownload", "OpAmpAppLink", "OpAmpWebsiteLink", "OpAmpStillImageFilmLink",
    "AmpImageEmbed", "AmpVideoEmbed", "AmpAudioEmbed", "AmpDocumentEmbed",
    "AmpStillImageFilmEmbed", "OpAmpImageEmbed", "OpAmpVideoEmbed", "OpAmpAudioEmbed",
    "OpAmpDocumentEmbed", "OpAmpStillImageFilmEmbed", "BitmarkMinus", "BitmarkPlus",
    "ColonText", "ColonJson", "Prosemirror", "Placeholder", "BASIC", "JPG",
    "PNG", "GIF", "SVG", "MP2", "MP3", "MP4", "FLV", "WMV", "MPEG", "MPG",
    "TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE", "ENCLBARS",
];
flashcardParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(flashcardParser._LITERAL_NAMES, flashcardParser._SYMBOLIC_NAMES, []);
flashcardParser._serializedATNSegments = 3;
flashcardParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA5\u0602\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
    "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
    "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
    "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
    "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x03" +
    "\x02\x03\x02\x07\x02\xB1\n\x02\f\x02\x0E\x02\xB4\v\x02\x03\x02\x07\x02" +
    "\xB7\n\x02\f\x02\x0E\x02\xBA\v\x02\x06\x02\xBC\n\x02\r\x02\x0E\x02\xBD" +
    "\x03\x02\x07\x02\xC1\n\x02\f\x02\x0E\x02\xC4\v\x02\x03\x02\x03\x02\x03" +
    "\x03\x03\x03\x03\x03\x05\x03\xCB\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x05\x04\xD2\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xD8" +
    "\n\x05\f\x05\x0E\x05\xDB\v\x05\x03\x05\x03\x05\x07\x05\xDF\n\x05\f\x05" +
    "\x0E\x05\xE2\v\x05\x07\x05\xE4\n\x05\f\x05\x0E\x05\xE7\v\x05\x03\x05\x03" +
    "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xF1\n\x05" +
    "\f\x05\x0E\x05\xF4\v\x05\x03\x05\x03\x05\x07\x05\xF8\n\x05\f\x05\x0E\x05" +
    "\xFB\v\x05\x03\x05\x07\x05\xFE\n\x05\f\x05\x0E\x05\u0101\v\x05\x05\x05" +
    "\u0103\n\x05\x05\x05\u0105\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
    "\u010B\n\x06\f\x06\x0E\x06\u010E\v\x06\x03\x06\x03\x06\x07\x06\u0112\n" +
    "\x06\f\x06\x0E\x06\u0115\v\x06\x07\x06\u0117\n\x06\f\x06\x0E\x06\u011A" +
    "\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0120\n\x06\f\x06\x0E\x06" +
    "\u0123\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x07\x06\u012E\n\x06\f\x06\x0E\x06\u0131\v\x06\x03\x06\x03" +
    "\x06\x07\x06\u0135\n\x06\f\x06\x0E\x06\u0138\v\x06\x03\x06\x03\x06\x07" +
    "\x06\u013C\n\x06\f\x06\x0E\x06\u013F\v\x06\x03\x06\x07\x06\u0142\n\x06" +
    "\f\x06\x0E\x06\u0145\v\x06\x05\x06\u0147\n\x06\x05\x06\u0149\n\x06\x03" +
    "\x07\x03\x07\x03\x07\x03\x07\x07\x07\u014F\n\x07\f\x07\x0E\x07\u0152\v" +
    "\x07\x03\x07\x03\x07\x07\x07\u0156\n\x07\f\x07\x0E\x07\u0159\v\x07\x07" +
    "\x07\u015B\n\x07\f\x07\x0E\x07\u015E\v\x07\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x07\x07\u0164\n\x07\f\x07\x0E\x07\u0167\v\x07\x03\x07\x03\x07\x03" +
    "\x07\x03\x07\x03\x07\x05\x07\u016E\n\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
    "\x03\x07\x03\x07\x03\x07\x07\x07\u0177\n\x07\f\x07\x0E\x07\u017A\v\x07" +
    "\x07\x07\u017C\n\x07\f\x07\x0E\x07\u017F\v\x07\x03\x07\x03\x07\x07\x07" +
    "\u0183\n\x07\f\x07\x0E\x07\u0186\v\x07\x03\x07\x03\x07\x07\x07\u018A\n" +
    "\x07\f\x07\x0E\x07\u018D\v\x07\x03\x07\x07\x07\u0190\n\x07\f\x07\x0E\x07" +
    "\u0193\v\x07\x05\x07\u0195\n\x07\x05\x07\u0197\n\x07\x03\b\x03\b\x03\b" +
    "\x03\b\x07\b\u019D\n\b\f\b\x0E\b\u01A0\v\b\x03\b\x03\b\x07\b\u01A4\n\b" +
    "\f\b\x0E\b\u01A7\v\b\x07\b\u01A9\n\b\f\b\x0E\b\u01AC\v\b\x03\b\x03\b\x03" +
    "\b\x03\b\x07\b\u01B2\n\b\f\b\x0E\b\u01B5\v\b\x03\b\x03\b\x03\b\x03\b\x03" +
    "\b\x03\b\x03\b\x03\b\x06\b\u01BF\n\b\r\b\x0E\b\u01C0\x06\b\u01C3\n\b\r" +
    "\b\x0E\b\u01C4\x03\b\x03\b\x07\b\u01C9\n\b\f\b\x0E\b\u01CC\v\b\x03\b\x03" +
    "\b\x07\b\u01D0\n\b\f\b\x0E\b\u01D3\v\b\x03\b\x07\b\u01D6\n\b\f\b\x0E\b" +
    "\u01D9\v\b\x05\b\u01DB\n\b\x05\b\u01DD\n\b\x03\t\x03\t\x03\t\x03\t\x07" +
    "\t\u01E3\n\t\f\t\x0E\t\u01E6\v\t\x03\t\x03\t\x07\t\u01EA\n\t\f\t\x0E\t" +
    "\u01ED\v\t\x07\t\u01EF\n\t\f\t\x0E\t\u01F2\v\t\x03\t\x03\t\x03\t\x03\t" +
    "\x07\t\u01F8\n\t\f\t\x0E\t\u01FB\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
    "\t\x03\t\x03\t\x06\t\u0205\n\t\r\t\x0E\t\u0206\x03\t\x07\t\u020A\n\t\f" +
    "\t\x0E\t\u020D\v\t\x03\t\x03\t\x07\t\u0211\n\t\f\t\x0E\t\u0214\v\t\x03" +
    "\t\x07\t\u0217\n\t\f\t\x0E\t\u021A\v\t\x05\t\u021C\n\t\x05\t\u021E\n\t" +
    "\x03\n\x03\n\x03\n\x03\n\x07\n\u0224\n\n\f\n\x0E\n\u0227\v\n\x03\n\x03" +
    "\n\x07\n\u022B\n\n\f\n\x0E\n\u022E\v\n\x07\n\u0230\n\n\f\n\x0E\n\u0233" +
    "\v\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0239\n\n\f\n\x0E\n\u023C\v\n\x03\n" +
    "\x03\n\x07\n\u0240\n\n\f\n\x0E\n\u0243\v\n\x07\n\u0245\n\n\f\n\x0E\n\u0248" +
    "\v\n\x03\n\x03\n\x06\n\u024C\n\n\r\n\x0E\n\u024D\x03\n\x03\n\x06\n\u0252" +
    "\n\n\r\n\x0E\n\u0253\x07\n\u0256\n\n\f\n\x0E\n\u0259\v\n\x06\n\u025B\n" +
    "\n\r\n\x0E\n\u025C\x03\n\x03\n\x07\n\u0261\n\n\f\n\x0E\n\u0264\v\n\x03" +
    "\n\x03\n\x07\n\u0268\n\n\f\n\x0E\n\u026B\v\n\x03\n\x07\n\u026E\n\n\f\n" +
    "\x0E\n\u0271\v\n\x05\n\u0273\n\n\x05\n\u0275\n\n\x03\v\x03\v\x03\v\x03" +
    "\v\x07\v\u027B\n\v\f\v\x0E\v\u027E\v\v\x03\v\x03\v\x07\v\u0282\n\v\f\v" +
    "\x0E\v\u0285\v\v\x07\v\u0287\n\v\f\v\x0E\v\u028A\v\v\x03\v\x03\v\x03\v" +
    "\x03\v\x07\v\u0290\n\v\f\v\x0E\v\u0293\v\v\x03\v\x03\v\x07\v\u0297\n\v" +
    "\f\v\x0E\v\u029A\v\v\x07\v\u029C\n\v\f\v\x0E\v\u029F\v\v\x03\v\x03\v\x06" +
    "\v\u02A3\n\v\r\v\x0E\v\u02A4\x03\v\x03\v\x06\v\u02A9\n\v\r\v\x0E\v\u02AA" +
    "\x07\v\u02AD\n\v\f\v\x0E\v\u02B0\v\v\x03\v\x03\v\x03\v\x07\v\u02B5\n\v" +
    "\f\v\x0E\v\u02B8\v\v\x03\v\x07\v\u02BB\n\v\f\v\x0E\v\u02BE\v\v\x05\v\u02C0" +
    "\n\v\x05\v\u02C2\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u02C9\n\f\x03" +
    "\r\x03\r\x05\r\u02CD\n\r\x03\r\x07\r\u02D0\n\r\f\r\x0E\r\u02D3\v\r\x03" +
    "\x0E\x03\x0E\x07\x0E\u02D7\n\x0E\f\x0E\x0E\x0E\u02DA\v\x0E\x03\x0F\x03" +
    "\x0F\x03\x0F\x07\x0F\u02DF\n\x0F\f\x0F\x0E\x0F\u02E2\v\x0F\x03\x10\x03" +
    "\x10\x03\x10\x07\x10\u02E7\n\x10\f\x10\x0E\x10\u02EA\v\x10\x03\x11\x03" +
    "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0305\n\x12\x03\x13" +
    "\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u030F" +
    "\n\x14\f\x14\x0E\x14\u0312\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15" +
    "\u0318\n\x15\x03\x15\x07\x15\u031B\n\x15\f\x15\x0E\x15\u031E\v\x15\x03" +
    "\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0326\n\x16\x03\x17" +
    "\x03\x17\x03\x17\x03\x17\x03\x18\x07\x18\u032D\n\x18\f\x18\x0E\x18\u0330" +
    "\v\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0335\n\x18\f\x18\x0E\x18\u0338" +
    "\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
    "\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0345\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
    "\x1B\x03\x1B\x03\x1B\x05\x1B\u034D\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
    "\u0352\n\x1C\x03\x1C\x03\x1C\x05\x1C\u0356\n\x1C\x03\x1C\x03\x1C\x05\x1C" +
    "\u035A\n\x1C\x03\x1C\x05\x1C\u035D\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D" +
    "\u0362\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"" +
    "\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x05\'" +
    "\u0379\n\'\x03\'\x03\'\x03\'\x05\'\u037E\n\'\x03\'\x03\'\x03\'\x05\'\u0383" +
    "\n\'\x05\'\u0385\n\'\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u038F" +
    "\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0399\n*\x03+\x03+\x03" +
    "+\x03+\x03+\x03+\x03+\x03+\x05+\u03A3\n+\x03,\x03,\x03,\x03,\x05,\u03A9" +
    "\n,\x03,\x03,\x03,\x03,\x03,\x05,\u03B0\n,\x03-\x03-\x07-\u03B4\n-\f-" +
    "\x0E-\u03B7\v-\x03.\x03.\x03.\x07.\u03BC\n.\f.\x0E.\u03BF\v.\x03.\x03" +
    ".\x03.\x03/\x03/\x07/\u03C6\n/\f/\x0E/\u03C9\v/\x030\x030\x030\x030\x03" +
    "0\x030\x030\x030\x050\u03D3\n0\x031\x031\x071\u03D7\n1\f1\x0E1\u03DA\v" +
    "1\x031\x031\x051\u03DE\n1\x032\x032\x032\x072\u03E3\n2\f2\x0E2\u03E6\v" +
    "2\x032\x032\x032\x033\x033\x033\x053\u03EE\n3\x033\x033\x053\u03F2\n3" +
    "\x033\x033\x053\u03F6\n3\x033\x053\u03F9\n3\x034\x034\x034\x034\x034\x03" +
    "4\x034\x034\x034\x034\x034\x074\u0406\n4\f4\x0E4\u0409\v4\x034\x054\u040C" +
    "\n4\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x075\u0419" +
    "\n5\f5\x0E5\u041C\v5\x035\x055\u041F\n5\x036\x036\x076\u0423\n6\f6\x0E" +
    "6\u0426\v6\x037\x037\x037\x037\x037\x037\x037\x037\x057\u0430\n7\x038" +
    "\x038\x038\x058\u0435\n8\x038\x038\x038\x058\u043A\n8\x058\u043C\n8\x03" +
    "9\x039\x039\x059\u0441\n9\x039\x039\x039\x059\u0446\n9\x039\x039\x039" +
    "\x059\u044B\n9\x059\u044D\n9\x03:\x03:\x03:\x05:\u0452\n:\x03:\x03:\x07" +
    ":\u0456\n:\f:\x0E:\u0459\v:\x03:\x03:\x06:\u045D\n:\r:\x0E:\u045E\x03" +
    ":\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u0468\n:\f:\x0E:\u046B\v:\x03:\x05" +
    ":\u046E\n:\x03;\x03;\x03;\x03;\x03<\x03<\x03=\x03=\x03=\x07=\u0479\n=" +
    "\f=\x0E=\u047C\v=\x03=\x05=\u047F\n=\x03=\x03=\x03=\x03=\x07=\u0485\n" +
    "=\f=\x0E=\u0488\v=\x03=\x03=\x07=\u048C\n=\f=\x0E=\u048F\v=\x03=\x05=" +
    "\u0492\n=\x05=\u0494\n=\x03>\x03>\x03>\x03>\x07>\u049A\n>\f>\x0E>\u049D" +
    "\v>\x03>\x03>\x03?\x03?\x05?\u04A3\n?\x03?\x03?\x03?\x05?\u04A8\n?\x03" +
    "?\x05?\u04AB\n?\x03@\x03@\x03@\x03@\x05@\u04B1\n@\x03@\x05@\u04B4\n@\x03" +
    "A\x03A\x05A\u04B8\nA\x03A\x03A\x03A\x07A\u04BD\nA\fA\x0EA\u04C0\vA\x07" +
    "A\u04C2\nA\fA\x0EA\u04C5\vA\x03A\x07A\u04C8\nA\fA\x0EA\u04CB\vA\x07A\u04CD" +
    "\nA\fA\x0EA\u04D0\vA\x03A\x03A\x03A\x03A\x03A\x07A\u04D7\nA\fA\x0EA\u04DA" +
    "\vA\x03A\x05A\u04DD\nA\x03B\x03B\x03B\x03B\x03B\x06B\u04E4\nB\rB\x0EB" +
    "\u04E5\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u04EF\nB\fB\x0EB\u04F2" +
    "\vB\x03B\x05B\u04F5\nB\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x06D\u04FF" +
    "\nD\rD\x0ED\u0500\x03D\x03D\x05D\u0505\nD\x03E\x03E\x03E\x03E\x06E\u050B" +
    "\nE\rE\x0EE\u050C\x03E\x03E\x03F\x03F\x07F\u0513\nF\fF\x0EF\u0516\vF\x03" +
    "F\x05F\u0519\nF\x03F\x03F\x03F\x07F\u051E\nF\fF\x0EF\u0521\vF\x07F\u0523" +
    "\nF\fF\x0EF\u0526\vF\x03F\x07F\u0529\nF\fF\x0EF\u052C\vF\x07F\u052E\n" +
    "F\fF\x0EF\u0531\vF\x03F\x03F\x03F\x07F\u0536\nF\fF\x0EF\u0539\vF\x03F" +
    "\x05F\u053C\nF\x03F\x05F\u053F\nF\x03G\x03G\x06G\u0543\nG\rG\x0EG\u0544" +
    "\x03G\x03G\x03H\x03H\x03H\x06H\u054C\nH\rH\x0EH\u054D\x03H\x03H\x03H\x03" +
    "H\x03H\x05H\u0555\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u055F" +
    "\nI\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u056A\nJ\x03K\x03" +
    "K\x03K\x03K\x03L\x03L\x03L\x03L\x03M\x03M\x07M\u0576\nM\fM\x0EM\u0579" +
    "\vM\x03M\x07M\u057C\nM\fM\x0EM\u057F\vM\x03N\x03N\x03N\x03N\x03N\x03N" +
    "\x03N\x07N\u0588\nN\fN\x0EN\u058B\vN\x03N\x03N\x03N\x03N\x07N\u0591\n" +
    "N\fN\x0EN\u0594\vN\x03N\x03N\x05N\u0598\nN\x03O\x03O\x03O\x03O\x06O\u059E" +
    "\nO\rO\x0EO\u059F\x03O\x03O\x03O\x03O\x03O\x07O\u05A7\nO\fO\x0EO\u05AA" +
    "\vO\x03O\x05O\u05AD\nO\x03P\x03P\x05P\u05B1\nP\x03P\x03P\x03Q\x03Q\x03" +
    "R\x03R\x05R\u05B9\nR\x06R\u05BB\nR\rR\x0ER\u05BC\x03S\x03S\x06S\u05C1" +
    "\nS\rS\x0ES\u05C2\x03S\x05S\u05C6\nS\x03S\x03S\x06S\u05CA\nS\rS\x0ES\u05CB" +
    "\x03S\x05S\u05CF\nS\x03S\x03S\x03S\x03S\x03S\x03S\x07S\u05D7\nS\fS\x0E" +
    "S\u05DA\vS\x03S\x03S\x07S\u05DE\nS\fS\x0ES\u05E1\vS\x03S\x03S\x07S\u05E5" +
    "\nS\fS\x0ES\u05E8\vS\x03S\x05S\u05EB\nS\x03T\x03T\x03U\x03U\x03V\x03V" +
    "\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x06V\u05FC\nV\rV\x0EV\u05FD" +
    "\x03W\x03W\x03W\x06\u0407\u041A\u0469\u0592\x02\x02X\x02\x02\x04\x02\x06" +
    "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
    "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
    "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
    "N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
    "j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
    "\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
    "\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02" +
    "\xA8\x02\xAA\x02\xAC\x02\x02\x17\x03\x02\'(\x03\x02*+\b\x02`acdrz\x85" +
    "\x88\x8E\x8F\x91\x93\x05\x02__tt\x85\x85\x04\x02``uu\x05\x02aavw\x87\x87" +
    "\x04\x02bbxx\x04\x02ccyy\x05\x02ddzz\x88\x88\x04\x02kk~~\x05\x02mm\x7F" +
    "\x80\x8C\x8C\x04\x02nn\x81\x81\x04\x02oo\x82\x82\x05\x02pp\x83\x83\x8D" +
    "\x8D\x03\x02?@\x04\x02OORU\x03\x02\x1C\x1C\x04\x02\x1D\x1D\x1F\x1F\x03" +
    "\x02,-\x03\x02\"\"\x03\x02##\x02\u06D4\x02\xBB\x03\x02\x02\x02\x04\xCA" +
    "\x03\x02\x02\x02\x06\xD1\x03\x02\x02\x02\b\u0104\x03\x02\x02\x02\n\u0148" +
    "\x03\x02\x02\x02\f\u0196\x03\x02\x02\x02\x0E\u01DC\x03\x02\x02\x02\x10" +
    "\u021D\x03\x02\x02\x02\x12\u0274\x03\x02\x02\x02\x14\u02C1\x03\x02\x02" +
    "\x02\x16\u02C8\x03\x02\x02\x02\x18\u02CA\x03\x02\x02\x02\x1A\u02D4\x03" +
    "\x02\x02\x02\x1C\u02DB\x03\x02\x02\x02\x1E\u02E3\x03\x02\x02\x02 \u02EB" +
    "\x03\x02\x02\x02\"\u0304\x03\x02\x02\x02$\u0306\x03\x02\x02\x02&\u0308" +
    "\x03\x02\x02\x02(\u0313\x03\x02\x02\x02*\u0321\x03\x02\x02\x02,\u0327" +
    "\x03\x02\x02\x02.\u032E\x03\x02\x02\x020\u0339\x03\x02\x02\x022\u0344" +
    "\x03\x02\x02\x024\u034C\x03\x02\x02\x026\u035C\x03\x02\x02\x028\u035E" +
    "\x03\x02\x02\x02:\u0363\x03\x02\x02\x02<\u0365\x03\x02\x02\x02>\u0367" +
    "\x03\x02\x02\x02@\u0369\x03\x02\x02\x02B\u036B\x03\x02\x02\x02D\u036D" +
    "\x03\x02\x02\x02F\u036F\x03\x02\x02\x02H\u0371\x03\x02\x02\x02J\u0373" +
    "\x03\x02\x02\x02L\u0384\x03\x02\x02\x02N\u0386\x03\x02\x02\x02P\u038E" +
    "\x03\x02\x02\x02R\u0390\x03\x02\x02\x02T\u039A\x03\x02\x02\x02V\u03A4" +
    "\x03\x02\x02\x02X\u03B1\x03\x02\x02\x02Z\u03B8\x03\x02\x02\x02\\\u03C3" +
    "\x03\x02\x02\x02^\u03CA\x03\x02\x02\x02`\u03D4\x03\x02\x02\x02b\u03DF" +
    "\x03\x02\x02\x02d\u03F8\x03\x02\x02\x02f\u040B\x03\x02\x02\x02h\u041E" +
    "\x03\x02\x02\x02j\u0420\x03\x02\x02\x02l\u0427\x03\x02\x02\x02n\u043B" +
    "\x03\x02\x02\x02p\u044C\x03\x02\x02\x02r\u046D\x03\x02\x02\x02t\u046F" +
    "\x03\x02\x02\x02v\u0473\x03\x02\x02\x02x\u0493\x03\x02\x02\x02z\u0495" +
    "\x03\x02\x02\x02|\u04AA\x03\x02\x02\x02~\u04B3\x03\x02\x02\x02\x80\u04DC" +
    "\x03\x02\x02\x02\x82\u04F4\x03\x02\x02\x02\x84\u04F6\x03\x02\x02\x02\x86" +
    "\u04FA\x03\x02\x02\x02\x88\u0506\x03\x02\x02\x02\x8A\u053E\x03\x02\x02" +
    "\x02\x8C\u0540\x03\x02\x02\x02\x8E\u0554\x03\x02\x02\x02\x90\u055E\x03" +
    "\x02\x02\x02\x92\u0569\x03\x02\x02\x02\x94\u056B\x03\x02\x02\x02\x96\u056F" +
    "\x03\x02\x02\x02\x98\u0573\x03\x02\x02\x02\x9A\u0597\x03\x02\x02\x02\x9C" +
    "\u05AC\x03\x02\x02\x02\x9E\u05AE\x03\x02\x02\x02\xA0\u05B4\x03\x02\x02" +
    "\x02\xA2\u05BA\x03\x02\x02\x02\xA4\u05EA\x03\x02\x02\x02\xA6\u05EC\x03" +
    "\x02\x02\x02\xA8\u05EE\x03\x02\x02\x02\xAA\u05FB\x03\x02\x02\x02\xAC\u05FF" +
    "\x03\x02\x02\x02\xAE\xB8\x05\x04\x03\x02\xAF\xB1\x07\x04\x02\x02\xB0\xAF" +
    "\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3" +
    "\x03\x02\x02\x02\xB3\xB5\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB7" +
    "\x077\x02\x02\xB6\xB2\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6" +
    "\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8" +
    "\x03\x02\x02\x02\xBB\xAE\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBB" +
    "\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC2\x03\x02\x02\x02\xBF\xC1" +
    "\x077\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0" +
    "\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC2" +
    "\x03\x02\x02\x02\xC5\xC6\x07\x02\x02\x03\xC6\x03\x03\x02\x02\x02\xC7\xCB" +
    "\x05\x06\x04\x02\xC8\xCB\x05\x12\n\x02\xC9\xCB\x05\x14\v\x02\xCA\xC7\x03" +
    "\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB\x05\x03" +
    "\x02\x02\x02\xCC\xD2\x05\n\x06\x02\xCD\xD2\x05\b\x05\x02\xCE\xD2\x05\f" +
    "\x07\x02\xCF\xD2\x05\x0E\b\x02\xD0\xD2\x05\x10\t\x02\xD1\xCC\x03\x02\x02" +
    "\x02\xD1\xCD\x03\x02\x02\x02\xD1\xCE\x03\x02\x02\x02\xD1\xCF\x03\x02\x02" +
    "\x02\xD1\xD0\x03\x02\x02\x02\xD2\x07\x03\x02\x02\x02\xD3\xD4\x07\x05\x02" +
    "\x02\xD4\xD5\x05.\x18\x02\xD5\xD9\x07\x1C\x02\x02\xD6\xD8\x077\x02\x02" +
    "\xD7\xD6\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02" +
    "\xD9\xDA\x03\x02\x02\x02\xDA\xE5\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02" +
    "\xDC\xE0\x05\"\x12\x02\xDD\xDF\x077\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF" +
    "\xE2\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1" +
    "\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xDC\x03\x02\x02\x02\xE4" +
    "\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6" +
    "\u0105\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xE9\x07\x05\x02\x02" +
    "\xE9\xEA\x05.\x18\x02\xEA\xEB\x07\x1C\x02\x02\xEB\xEC\x077\x02\x02\xEC" +
    "\xED\x05\x1C\x0F\x02\xED\xEE\t\x02\x02\x02\xEE\xF2\x05\x1C\x0F\x02\xEF" +
    "\xF1\x077\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2" +
    "\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\u0102\x03\x02\x02\x02" +
    "\xF4\xF2\x03\x02\x02\x02\xF5\xFF\x05$\x13\x02\xF6\xF8\x077\x02\x02\xF7" +
    "\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9" +
    "\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC" +
    "\xFE\x05$\x13\x02\xFD\xF9\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF" +
    "\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0103\x03\x02\x02" +
    "\x02\u0101\xFF\x03\x02\x02\x02\u0102\xF5\x03\x02\x02\x02\u0102\u0103\x03" +
    "\x02\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104\xD3\x03\x02\x02\x02\u0104" +
    "\xE8\x03\x02\x02\x02\u0105\t\x03\x02\x02\x02\u0106\u0107\x07\x06\x02\x02" +
    "\u0107\u0108\x05.\x18\x02\u0108\u010C\x07\x1C\x02\x02\u0109\u010B\x07" +
    "7\x02\x02\u010A\u0109\x03\x02\x02\x02\u010B\u010E\x03\x02\x02\x02\u010C" +
    "\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u0118\x03\x02" +
    "\x02\x02\u010E\u010C\x03\x02\x02\x02\u010F\u0113\x05\"\x12\x02\u0110\u0112" +
    "\x077\x02\x02\u0111\u0110\x03\x02\x02\x02\u0112\u0115\x03\x02\x02\x02" +
    "\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0117\x03" +
    "\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0116\u010F\x03\x02\x02\x02\u0117" +
    "\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118";
flashcardParser._serializedATNSegment1 = "\u0119\x03\x02\x02\x02\u0119\u0149\x03\x02\x02\x02\u011A\u0118\x03\x02" +
    "\x02\x02\u011B\u011C\x07\x06\x02\x02\u011C\u011D\x05.\x18\x02\u011D\u0121" +
    "\x07\x1C\x02\x02\u011E\u0120\x077\x02\x02\u011F\u011E\x03\x02\x02\x02" +
    "\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03" +
    "\x02\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124" +
    "\u0125\t\x03\x02\x02\u0125\u0126\x05\x1C\x0F\x02\u0126\u0127\t\x02\x02" +
    "\x02\u0127\u012F\x05\x1C\x0F\x02\u0128\u0129\t\x03\x02\x02\u0129\u012A" +
    "\x05\x1C\x0F\x02\u012A\u012B\t\x02\x02\x02\u012B\u012C\x05\x1C\x0F\x02" +
    "\u012C\u012E\x03\x02\x02\x02\u012D\u0128\x03\x02\x02\x02\u012E\u0131\x03" +
    "\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130" +
    "\u0132\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132\u0136\t\x03\x02" +
    "\x02\u0133\u0135\x077\x02\x02\u0134\u0133\x03\x02\x02\x02\u0135\u0138" +
    "\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02" +
    "\u0137\u0146\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0139\u0143\x05" +
    "$\x13\x02\u013A\u013C\x077\x02\x02\u013B\u013A\x03\x02\x02\x02\u013C\u013F" +
    "\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02" +
    "\u013E\u0140\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0142\x05" +
    "$\x13\x02\u0141\u013D\x03\x02\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143" +
    "\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0147\x03\x02" +
    "\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0139\x03\x02\x02\x02\u0146" +
    "\u0147\x03\x02\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148\u0106\x03\x02" +
    "\x02\x02\u0148\u011B\x03\x02\x02\x02\u0149\v\x03\x02\x02\x02\u014A\u014B" +
    "\x07\x07\x02\x02\u014B\u014C\x05.\x18\x02\u014C\u0150\x07\x1C\x02\x02" +
    "\u014D\u014F\x077\x02\x02\u014E\u014D\x03\x02\x02\x02\u014F\u0152\x03" +
    "\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151" +
    "\u015C\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0157\x05\"\x12" +
    "\x02\u0154\u0156\x077\x02\x02\u0155\u0154\x03\x02\x02\x02\u0156\u0159" +
    "\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02" +
    "\u0158\u015B\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u015A\u0153\x03" +
    "\x02\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C" +
    "\u015D\x03\x02\x02\x02\u015D\u0197\x03\x02\x02\x02\u015E\u015C\x03\x02" +
    "\x02\x02\u015F\u0160\x07\x07\x02\x02\u0160\u0161\x05.\x18\x02\u0161\u0165" +
    "\x07\x1C\x02\x02\u0162\u0164\x077\x02\x02\u0163\u0162\x03\x02\x02\x02" +
    "\u0164\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03" +
    "\x02\x02\x02\u0166\u016D\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168" +
    "\u0169\t\x03\x02\x02\u0169\u016A\x05\x1C\x0F\x02\u016A\u016B\t\x02\x02" +
    "\x02\u016B\u016C\x05\x1C\x0F\x02\u016C\u016E\x03\x02\x02\x02\u016D\u0168" +
    "\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u017D\x03\x02\x02\x02" +
    "\u016F\u0170\t\x03\x02\x02\u0170\u0171\x05\x1C\x0F\x02\u0171\u0172\t\x02" +
    "\x02\x02\u0172\u0178\x05\x1C\x0F\x02\u0173\u0174\x077\x02\x02\u0174\u0175" +
    "\x07)\x02\x02\u0175\u0177\x05\x1C\x0F\x02\u0176\u0173\x03\x02\x02\x02" +
    "\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03" +
    "\x02\x02\x02\u0179\u017C\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017B" +
    "\u016F\x03\x02\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02" +
    "\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0180\x03\x02\x02\x02\u017F" +
    "\u017D\x03\x02\x02\x02\u0180\u0184\t\x03\x02\x02\u0181\u0183\x077\x02" +
    "\x02\u0182\u0181\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02\u0184\u0182" +
    "\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0194\x03\x02\x02\x02" +
    "\u0186\u0184\x03\x02\x02\x02\u0187\u0191\x05$\x13\x02\u0188\u018A\x07" +
    "7\x02\x02\u0189\u0188\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B" +
    "\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018E\x03\x02" +
    "\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E\u0190\x05$\x13\x02\u018F\u018B" +
    "\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02" +
    "\u0191\u0192\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03" +
    "\x02\x02\x02\u0194\u0187\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195" +
    "\u0197\x03\x02\x02\x02\u0196\u014A\x03\x02\x02\x02\u0196\u015F\x03\x02" +
    "\x02\x02\u0197\r\x03\x02\x02\x02\u0198\u0199\x07\b\x02\x02\u0199\u019A" +
    "\x05.\x18\x02\u019A\u019E\x07\x1C\x02\x02\u019B\u019D\x077\x02\x02\u019C" +
    "\u019B\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E\u019C\x03\x02" +
    "\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01AA\x03\x02\x02\x02\u01A0" +
    "\u019E\x03\x02\x02\x02\u01A1\u01A5\x05\"\x12\x02\u01A2\u01A4\x077\x02" +
    "\x02\u01A3\u01A2\x03\x02\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3" +
    "\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02" +
    "\u01A7\u01A5\x03\x02\x02\x02\u01A8\u01A1\x03\x02\x02\x02\u01A9\u01AC\x03" +
    "\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB" +
    "\u01DD\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD\u01AE\x07\b\x02" +
    "\x02\u01AE\u01AF\x05.\x18\x02\u01AF\u01B3\x07\x1C\x02\x02\u01B0\u01B2" +
    "\x077\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02" +
    "\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B6\x03" +
    "\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6\u01C2\x05\x1A\x0E\x02\u01B7" +
    "\u01B8\t\x03\x02\x02\u01B8\u01B9\x05\x18\r\x02\u01B9\u01BA\x077\x02\x02" +
    "\u01BA\u01BB\x05\x1A\x0E\x02\u01BB\u01BE\x03\x02\x02\x02\u01BC\u01BD\t" +
    "\x02\x02\x02\u01BD\u01BF\x05\x1A\x0E\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF" +
    "\u01C0\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03\x02" +
    "\x02\x02\u01C1\u01C3\x03\x02\x02\x02\u01C2\u01B7\x03\x02\x02\x02\u01C3" +
    "\u01C4\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03\x02" +
    "\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01CA\t\x03\x02\x02\u01C7\u01C9" +
    "\x077\x02\x02\u01C8\u01C7\x03\x02\x02\x02\u01C9\u01CC\x03\x02\x02\x02" +
    "\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01DA\x03" +
    "\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01D7\x05$\x13\x02\u01CE" +
    "\u01D0\x077\x02\x02\u01CF\u01CE\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02" +
    "\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D4" +
    "\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D4\u01D6\x05$\x13\x02" +
    "\u01D5\u01D1\x03\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D5\x03" +
    "\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9" +
    "\u01D7\x03\x02\x02\x02\u01DA\u01CD\x03\x02\x02\x02\u01DA\u01DB\x03\x02" +
    "\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u0198\x03\x02\x02\x02\u01DC" +
    "\u01AD\x03\x02\x02\x02\u01DD\x0F\x03\x02\x02\x02\u01DE\u01DF\x07\t\x02" +
    "\x02\u01DF\u01E0\x05.\x18\x02\u01E0\u01E4\x07\x1C\x02\x02\u01E1\u01E3" +
    "\x077\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02\x02" +
    "\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01F0\x03" +
    "\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01EB\x05\"\x12\x02\u01E8" +
    "\u01EA\x077\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02" +
    "\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01EF" +
    "\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01EE\u01E7\x03\x02\x02\x02" +
    "\u01EF\u01F2\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03" +
    "\x02\x02\x02\u01F1\u021E\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3" +
    "\u01F4\x07\t\x02\x02\u01F4\u01F5\x05.\x18\x02\u01F5\u01F9\x07\x1C\x02" +
    "\x02\u01F6\u01F8\x077\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F8\u01FB" +
    "\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
    "\u01FA\u01FC\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC\u01FD\x05" +
    "\x1A\x0E\x02\u01FD\u01FE\t\x02\x02\x02\u01FE\u01FF\x05\x18\r\x02\u01FF" +
    "\u0200\x077\x02\x02\u0200\u0201\x05\x1A\x0E\x02\u0201\u0204\x03\x02\x02" +
    "\x02\u0202\u0203\x07)\x02\x02\u0203\u0205\x05\x1A\x0E\x02\u0204\u0202" +
    "\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02" +
    "\u0206\u0207\x03\x02\x02\x02\u0207\u020B\x03\x02\x02\x02\u0208\u020A\x07" +
    "7\x02\x02\u0209\u0208\x03\x02\x02\x02\u020A\u020D\x03\x02\x02\x02\u020B" +
    "\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u021B\x03\x02" +
    "\x02\x02\u020D\u020B\x03\x02\x02\x02\u020E\u0218\x05$\x13\x02\u020F\u0211" +
    "\x077\x02\x02\u0210\u020F\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02" +
    "\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0215\x03" +
    "\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0217\x05$\x13\x02\u0216" +
    "\u0212\x03\x02\x02\x02\u0217\u021A\x03\x02\x02\x02\u0218\u0216\x03\x02" +
    "\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021C\x03\x02\x02\x02\u021A" +
    "\u0218\x03\x02\x02\x02\u021B\u020E\x03\x02\x02\x02\u021B\u021C\x03\x02" +
    "\x02\x02\u021C\u021E\x03\x02\x02\x02\u021D\u01DE\x03\x02\x02\x02\u021D" +
    "\u01F3\x03\x02\x02\x02\u021E\x11\x03\x02\x02\x02\u021F\u0220\x07\n\x02" +
    "\x02\u0220\u0221\x05.\x18\x02\u0221\u0225\x07\x1C\x02\x02\u0222\u0224" +
    "\x077\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224\u0227\x03\x02\x02\x02" +
    "\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0231\x03" +
    "\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228\u022C\x05\"\x12\x02\u0229" +
    "\u022B\x077\x02\x02\u022A\u0229\x03\x02\x02\x02\u022B\u022E\x03\x02\x02" +
    "\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u0230" +
    "\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022F\u0228\x03\x02\x02\x02" +
    "\u0230\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03" +
    "\x02\x02\x02\u0232\u0275\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234" +
    "\u0235\x07\n\x02\x02\u0235\u0236\x05.\x18\x02\u0236\u023A\x07\x1C\x02" +
    "\x02\u0237\u0239\x077\x02\x02\u0238\u0237\x03\x02\x02\x02\u0239\u023C" +
    "\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02" +
    "\u023B\u0246\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u0241\x05" +
    "\"\x12\x02\u023E\u0240\x077\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240" +
    "\u0243\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241\u0242\x03\x02" +
    "\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0241\x03\x02\x02\x02\u0244" +
    "\u023D\x03\x02\x02\x02\u0245\u0248\x03\x02\x02\x02\u0246\u0244\x03\x02" +
    "\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u025A\x03\x02\x02\x02\u0248" +
    "\u0246\x03\x02\x02\x02\u0249\u024B\t\x03\x02\x02\u024A\u024C\x05 \x11" +
    "\x02\u024B\u024A\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D\u024B" +
    "\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u0257\x03\x02\x02\x02" +
    "\u024F\u0251\t\x02\x02\x02\u0250\u0252\x05 \x11\x02\u0251\u0250\x03\x02" +
    "\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253" +
    "\u0254\x03\x02\x02\x02\u0254\u0256\x03\x02\x02\x02\u0255\u024F\x03\x02" +
    "\x02\x02\u0256\u0259\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257" +
    "\u0258\x03\x02\x02\x02\u0258\u025B\x03\x02\x02\x02\u0259\u0257\x03\x02" +
    "\x02\x02\u025A\u0249\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C" +
    "\u025A\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x03\x02" +
    "\x02\x02\u025E\u0262\t\x03\x02\x02\u025F\u0261\x077\x02\x02\u0260\u025F" +
    "\x03\x02\x02\x02\u0261\u0264\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02" +
    "\u0262\u0263\x03\x02\x02\x02\u0263\u0272\x03\x02\x02\x02\u0264\u0262\x03" +
    "\x02\x02\x02\u0265\u026F\x05$\x13\x02\u0266\u0268\x077\x02\x02\u0267\u0266" +
    "\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02" +
    "\u0269\u026A\x03\x02\x02\x02\u026A\u026C\x03\x02\x02\x02\u026B\u0269\x03" +
    "\x02\x02\x02\u026C\u026E\x05$\x13\x02\u026D\u0269\x03\x02\x02\x02\u026E" +
    "\u0271\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02" +
    "\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0272" +
    "\u0265\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u0275\x03\x02" +
    "\x02\x02\u0274\u021F\x03\x02\x02\x02\u0274\u0234\x03\x02\x02\x02\u0275" +
    "\x13\x03\x02\x02\x02\u0276\u0277\x07\v\x02\x02\u0277\u0278\x05.\x18\x02" +
    "\u0278\u027C\x07\x1C\x02\x02\u0279\u027B\x077\x02\x02\u027A\u0279\x03" +
    "\x02\x02\x02\u027B\u027E\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C" +
    "\u027D\x03\x02\x02\x02\u027D\u0288\x03\x02\x02\x02\u027E\u027C\x03\x02" +
    "\x02\x02\u027F\u0283\x05\"\x12\x02\u0280\u0282\x077\x02\x02\u0281\u0280" +
    "\x03\x02\x02\x02\u0282\u0285\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02" +
    "\u0283\u0284\x03\x02\x02\x02\u0284\u0287\x03\x02\x02\x02\u0285\u0283\x03" +
    "\x02\x02\x02\u0286\u027F\x03\x02\x02\x02\u0287\u028A\x03\x02\x02\x02\u0288" +
    "\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u02C2\x03\x02" +
    "\x02\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028C\x07\v\x02\x02\u028C\u028D" +
    "\x05.\x18\x02\u028D\u0291\x07\x1C\x02\x02\u028E\u0290\x077\x02\x02\u028F" +
    "\u028E\x03\x02\x02\x02\u0290\u0293\x03\x02\x02\x02\u0291\u028F\x03\x02" +
    "\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u029D\x03\x02\x02\x02\u0293" +
    "\u0291\x03\x02\x02\x02\u0294\u0298\x05\"\x12\x02\u0295\u0297\x077\x02" +
    "\x02\u0296\u0295\x03\x02\x02\x02\u0297\u029A\x03\x02\x02\x02\u0298\u0296" +
    "\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029C\x03\x02\x02\x02" +
    "\u029A\u0298\x03\x02\x02\x02\u029B\u0294\x03\x02\x02\x02\u029C\u029F\x03" +
    "\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E" +
    "\u02A0\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u02A0\u02A2\t\x02\x02" +
    "\x02\u02A1\u02A3\x05 \x11\x02\u02A2\u02A1\x03\x02\x02\x02\u02A3\u02A4" +
    "\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02" +
    "\u02A5\u02AE\x03\x02\x02\x02\u02A6\u02A8\x07)\x02\x02\u02A7\u02A9\x05" +
    " \x11\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA" +
    "\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AD\x03\x02" +
    "\x02\x02\u02AC\u02A6\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE" +
    "\u02AC\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02BF\x03\x02" +
    "\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B1\u02B2\x07)\x02\x02\u02B2\u02BC" +
    "\x05$\x13\x02\u02B3\u02B5\x077\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B5" +
    "\u02B8\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02" +
    "\x02\x02\u02B7\u02B9\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B9" +
    "\u02BB\x05$\x13\x02\u02BA\u02B6\x03\x02\x02\x02\u02BB\u02BE\x03\x02\x02" +
    "\x02\u02BC\u02BA\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02C0" +
    "\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BF\u02B1\x03\x02\x02\x02" +
    "\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C2\x03\x02\x02\x02\u02C1\u0276\x03" +
    "\x02\x02\x02\u02C1\u028B\x03\x02\x02\x02\u02C2\x15\x03\x02\x02\x02\u02C3" +
    "\u02C9\x05\x98M\x02\u02C4\u02C9\x05\xA4S\x02\u02C5\u02C9\x05\x8AF\x02" +
    "\u02C6\u02C9\x05`1\x02\u02C7\u02C9\x05j6\x02\u02C8\u02C3\x03\x02\x02\x02" +
    "\u02C8\u02C4\x03\x02\x02\x02\u02C8\u02C5\x03\x02\x02\x02\u02C8\u02C6\x03" +
    "\x02\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C9\x17\x03\x02\x02\x02\u02CA" +
    "\u02D1\x05\x16\f\x02\u02CB\u02CD\x077\x02\x02\u02CC\u02CB\x03\x02\x02" +
    "\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0" +
    "\x05\x16\f\x02\u02CF\u02CC\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02" +
    "\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\x19\x03" +
    "\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4\u02D8\x05\"\x12\x02\u02D5" +
    "\u02D7\x077\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D7\u02DA\x03\x02\x02" +
    "\x02\u02D8\u02D6\x03\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\x1B" +
    "\x03\x02\x02\x02\u02DA\u02D8\x03\x02\x02\x02\u02DB\u02E0\x05\x18\r\x02" +
    "\u02DC\u02DD\x07)\x02\x02\u02DD\u02DF\x05\x18\r\x02\u02DE\u02DC\x03\x02" +
    "\x02\x02\u02DF\u02E2\x03\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E0" +
    "\u02E1\x03\x02\x02\x02\u02E1\x1D\x03\x02\x02\x02\u02E2\u02E0\x03\x02\x02" +
    "\x02\u02E3\u02E8\x05\x1A\x0E\x02\u02E4\u02E5\x07)\x02\x02\u02E5\u02E7" +
    "\x05\x1A\x0E\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7\u02EA\x03\x02\x02\x02" +
    "\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\x1F\x03" +
    "\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02EC\x05\x1A\x0E\x02\u02EC" +
    "!\x03\x02\x02\x02\u02ED\u0305\x07\xA4\x02\x02\u02EE\u0305\x078\x02\x02" +
    "\u02EF\u0305\x05&\x14\x02\u02F0\u0305\x05\x98M\x02\u02F1\u0305\x05\x82" +
    "B\x02\u02F2\u0305\x05x=\x02\u02F3\u0305\x05\x8EH\x02\u02F4\u0305\x05\x8A" +
    "F\x02\u02F5\u0305\x05\x8CG\x02\u02F6\u0305\x05\xA4S\x02\u02F7\u0305\x05" +
    "~@\x02\u02F8\u0305\x05\x90I\x02\u02F9\u0305\x05`1\x02\u02FA\u0305\x05" +
    "j6\x02\u02FB\u0305\x05\\/\x02\u02FC\u0305\x05P)\x02\u02FD\u0305\x05R*" +
    "\x02\u02FE\u0305\x05V,\x02\u02FF\u0305\x05T+\x02\u0300\u0305\x05X-\x02" +
    "\u0301\u0305\x05|?\x02\u0302\u0305\x05\x9EP\x02\u0303\u0305\x05\xACW\x02" +
    "\u0304\u02ED\x03\x02\x02\x02\u0304\u02EE\x03\x02\x02\x02\u0304\u02EF\x03" +
    "\x02\x02\x02\u0304\u02F0\x03\x02\x02\x02\u0304\u02F1\x03\x02\x02\x02\u0304" +
    "\u02F2\x03\x02\x02\x02\u0304\u02F3\x03\x02\x02\x02\u0304\u02F4\x03\x02" +
    "\x02\x02\u0304\u02F5\x03\x02\x02\x02\u0304\u02F6\x03\x02\x02\x02\u0304" +
    "\u02F7\x03\x02\x02\x02\u0304\u02F8\x03\x02\x02\x02\u0304\u02F9\x03\x02" +
    "\x02\x02\u0304\u02FA\x03\x02\x02\x02\u0304\u02FB\x03\x02\x02\x02\u0304" +
    "\u02FC\x03\x02\x02\x02\u0304\u02FD\x03\x02\x02\x02\u0304\u02FE\x03\x02" +
    "\x02\x02\u0304\u02FF\x03\x02\x02\x02\u0304\u0300\x03\x02\x02\x02\u0304" +
    "\u0301\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0304\u0303\x03\x02" +
    "\x02\x02\u0305#\x03\x02\x02\x02\u0306\u0307\x05\"\x12\x02\u0307%\x03\x02" +
    "\x02\x02\u0308\u0310\x05(\x15\x02\u0309\u030F\x05(\x15\x02\u030A\u030F" +
    "\x05\x8AF\x02\u030B\u030F\x05\x8CG\x02\u030C\u030F\x05x=\x02\u030D\u030F" +
    "\x05~@\x02\u030E\u0309\x03\x02\x02\x02\u030E\u030A\x03\x02\x02\x02\u030E" +
    "\u030B\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030E\u030D\x03\x02" +
    "\x02\x02\u030F\u0312\x03\x02\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310" +
    "\u0311\x03\x02\x02\x02\u0311\'\x03\x02\x02\x02\u0312\u0310\x03\x02\x02" +
    "\x02\u0313\u0317\x07\x12\x02\x02\u0314\u0318\x075\x02\x02\u0315\u0318" +
    "\x076\x02\x02\u0316\u0318\x03\x02\x02\x02\u0317\u0314\x03\x02\x02\x02" +
    "\u0317\u0315\x03\x02\x02\x02\u0317\u0316\x03\x02\x02\x02\u0318\u031C\x03" +
    "\x02\x02\x02\u0319\u031B\x05\xA4S\x02\u031A\u0319\x03\x02\x02\x02\u031B" +
    "\u031E\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031C\u031D\x03\x02" +
    "\x02\x02\u031D\u031F\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031F" +
    "\u0320\x05\xA6T\x02\u0320)\x03\x02\x02\x02\u0321\u0322\x07\r\x02\x02\u0322" +
    "\u0323\x05\xA4S\x02\u0323\u0325\x07\x1C\x02\x02\u0324\u0326\x05,\x17\x02" +
    "\u0325\u0324\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326+\x03\x02" +
    "\x02\x02\u0327\u0328\x07L\x02\x02\u0328\u0329\x075\x02\x02\u0329\u032A" +
    "\x07\x1C\x02\x02\u032A-\x03\x02\x02\x02\u032B\u032D\x050\x19\x02\u032C" +
    "\u032B\x03\x02\x02\x02\u032D\u0330\x03\x02\x02\x02\u032E\u032C\x03\x02" +
    "\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0336\x03\x02\x02\x02\u0330" +
    "\u032E\x03\x02\x02\x02\u0331\u0335\x07\x90\x02\x02\u0332\u0335\x07\x91" +
    "\x02\x02\u0333\u0335\x052\x1A\x02\u0334\u0331\x03\x02\x02\x02\u0334\u0332" +
    "\x03\x02\x02\x02\u0334\u0333\x03\x02\x02\x02\u0335\u0338\x03\x02\x02\x02" +
    "\u0336\u0334\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337/\x03\x02" +
    "\x02\x02\u0338\u0336\x03\x02\x02\x02\u0339\u033A\t\x04\x02\x02\u033A1" +
    "\x03\x02\x02\x02\u033B\u0345\x056\x1C\x02\u033C\u0345\x05n8\x02\u033D" +
    "\u0345\x058\x1D\x02\u033E\u0345\x05:\x1E\x02\u033F\u0345\x05<\x1F\x02" +
    "\u0340\u0345\x05> \x02\u0341\u0345\x05@!\x02\u0342\u0345\x05B\"\x02\u0343" +
    "\u0345\x07e\x02\x02\u0344\u033B\x03\x02\x02\x02\u0344\u033C\x03\x02\x02" +
    "\x02\u0344\u033D\x03\x02\x02\x02\u0344\u033E\x03\x02\x02\x02\u0344\u033F" +
    "\x03\x02\x02\x02\u0344\u0340\x03\x02\x02\x02\u0344\u0341\x03\x02\x02\x02" +
    "\u0344\u0342\x03\x02\x02\x02\u0344\u0343\x03\x02\x02\x02\u03453\x03\x02" +
    "\x02\x02\u0346\u034D\x07\x8E\x02\x02\u0347\u034D\x07\x8F\x02\x02\u0348" +
    "\u034D\x07\x90\x02\x02\u0349\u034D\x07\x93\x02\x02\u034A\u034D\x07\x91" +
    "\x02\x02\u034B\u034D\x03\x02\x02\x02\u034C\u0346\x03\x02\x02\x02\u034C" +
    "\u0347\x03\x02\x02\x02\u034C\u0348\x03\x02\x02\x02\u034C\u0349\x03\x02" +
    "\x02\x02\u034C\u034A\x03\x02\x02\x02\u034C\u034B\x03\x02\x02\x02\u034D" +
    "5\x03\x02\x02\x02\u034E\u0351\x07\\\x02\x02\u034F\u0352\x070\x02\x02\u0350" +
    "\u0352\x07\xA1\x02\x02\u0351\u034F\x03\x02\x02\x02\u0351\u0350\x03\x02" +
    "\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352\u035D\x03\x02\x02\x02\u0353" +
    "\u0355\x07s\x02\x02\u0354\u0356\x070\x02\x02\u0355\u0354\x03\x02\x02\x02" +
    "\u0355\u0356\x03\x02\x02\x02\u0356\u035D\x03\x02\x02\x02\u0357\u0359\x07" +
    "]\x02\x02\u0358\u035A\x070\x02\x02\u0359\u0358\x03\x02\x02\x02\u0359\u035A" +
    "\x03\x02\x02\x02\u035A\u035D\x03\x02\x02\x02\u035B\u035D\x07^\x02\x02" +
    "\u035C\u034E\x03\x02\x02\x02\u035C\u0353\x03\x02\x02\x02\u035C\u0357\x03" +
    "\x02\x02\x02\u035C\u035B\x03\x02\x02\x02\u035D7\x03\x02\x02\x02\u035E" +
    "\u0361\t\x05\x02\x02\u035F\u0360\x07\x1D\x02\x02\u0360\u0362\x072\x02" +
    "\x02\u0361\u035F\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u03629\x03" +
    "\x02\x02\x02\u0363\u0364\t\x06\x02\x02\u0364;\x03\x02\x02\x02\u0365\u0366" +
    "\t\x07\x02\x02\u0366=\x03\x02\x02\x02\u0367\u0368\t\b\x02\x02\u0368?\x03" +
    "\x02\x02\x02\u0369\u036A\t\t\x02\x02\u036AA\x03\x02\x02\x02\u036B\u036C" +
    "\t\n\x02\x02\u036CC\x03\x02\x02\x02\u036D\u036E\t\v\x02\x02\u036EE\x03" +
    "\x02\x02\x02\u036F\u0370\t\f\x02\x02\u0370G\x03\x02\x02\x02\u0371\u0372" +
    "\t\r\x02\x02\u0372I\x03\x02\x02\x02\u0373\u0374\t\x0E\x02\x02\u0374K\x03" +
    "\x02\x02\x02\u0375\u0378\x07j\x02\x02\u0376\u0377\x07\x1D\x02\x02\u0377" +
    "\u0379\x072\x02\x02\u0378\u0376\x03\x02\x02\x02\u0378\u0379\x03\x02\x02" +
    "\x02\u0379\u0385\x03\x02\x02\x02\u037A\u037D\x07}\x02\x02\u037B\u037C" +
    "\x07\x1D\x02\x02\u037C\u037E\x072\x02\x02\u037D\u037B\x03\x02\x02\x02" +
    "\u037D\u037E\x03\x02\x02\x02\u037E\u0385\x03\x02\x02\x02\u037F\u0382\x07" +
    "\x8A\x02\x02\u0380\u0381\x07\x1D\x02\x02\u0381\u0383\x072\x02\x02\u0382" +
    "\u0380\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u0385\x03\x02" +
    "\x02\x02\u0384\u0375\x03\x02\x02\x02\u0384\u037A\x03\x02\x02\x02\u0384" +
    "\u037F\x03\x02\x02\x02\u0385M\x03\x02\x02\x02\u0386\u0387\t\x0F\x02\x02" +
    "\u0387O\x03\x02\x02\x02\u0388\u0389\x05D#\x02\u0389\u038A\x07\x1D\x02" +
    "\x02\u038A\u038B\x05v<\x02\u038B\u038C\x07\x1C\x02\x02\u038C\u038F\x03" +
    "\x02\x02\x02\u038D\u038F\x073\x02\x02\u038E\u0388\x03\x02\x02\x02\u038E" +
    "\u038D\x03\x02\x02\x02\u038FQ\x03\x02\x02\x02\u0390\u0391\x05F$\x02\u0391" +
    "\u0392\x07\x1D\x02\x02\u0392\u0393\x05v<\x02\u0393\u0398\x07\x1C\x02\x02" +
    "\u0394\u0395\x07O\x02\x02\u0395\u0396\x05\xAAV\x02\u0396\u0397\x07\x1C" +
    "\x02\x02\u0397\u0399\x03\x02\x02\x02\u0398\u0394\x03\x02\x02\x02\u0398" +
    "\u0399\x03\x02\x02\x02\u0399S\x03\x02\x02\x02\u039A\u039B\x05J&\x02\u039B" +
    "\u039C\x07\x1D\x02\x02\u039C\u039D\x05v<\x02\u039D\u03A2\x07\x1C\x02\x02" +
    "\u039E\u039F\x07O\x02\x02\u039F\u03A0\x05\xAAV\x02\u03A0\u03A1\x07\x1C" +
    "\x02\x02\u03A1\u03A3\x03\x02\x02\x02\u03A2\u039E\x03\x02\x02\x02\u03A2" +
    "\u03A3\x03\x02\x02\x02\u03A3U\x03\x02\x02\x02\u03A4\u03A5\x05H%\x02\u03A5" +
    "\u03A8\x07\x1D\x02\x02\u03A6\u03A9\x05v<\x02\u03A7\u03A9\x05t;\x02\u03A8" +
    "\u03A6\x03\x02\x02\x02\u03A8\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03\x02" +
    "\x02\x02\u03AA\u03AF\x07\x1C\x02\x02\u03AB\u03AC\x07O\x02\x02\u03AC\u03AD" +
    "\x05\xAAV\x02\u03AD\u03AE\x07\x1C\x02\x02\u03AE\u03B0\x03\x02\x02\x02" +
    "\u03AF\u03AB\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0W\x03\x02" +
    "\x02\x02\u03B1\u03B5\x05Z.\x02\u03B2\u03B4\x05r:\x02\u03B3\u03B2\x03\x02" +
    "\x02\x02\u03B4\u03B7\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B5" +
    "\u03B6\x03\x02\x02\x02\u03B6Y\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02" +
    "\x02\u03B8\u03B9\x05N(\x02\u03B9\u03BD\x07\x1D\x02\x02\u03BA\u03BC\x07" +
    "\x04\x02\x02\u03BB\u03BA\x03\x02\x02\x02\u03BC\u03BF\x03\x02\x02\x02\u03BD" +
    "\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C0\x03\x02" +
    "\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03C1\x05v<\x02\u03C1\u03C2" +
    "\x07\x1C\x02\x02\u03C2[\x03\x02\x02\x02\u03C3\u03C7\x05^0\x02\u03C4\u03C6" +
    "\x05r:\x02\u03C5\u03C4\x03\x02\x02\x02\u03C6\u03C9\x03\x02\x02\x02\u03C7" +
    "\u03C5\x03\x02\x02\x02\u03C7\u03C8\x03";
flashcardParser._serializedATNSegment2 = "\x02\x02\x02\u03C8]\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03CA" +
    "\u03CB\x05L\'\x02\u03CB\u03CC\x07\x1D\x02\x02\u03CC\u03CD\x05v<\x02\u03CD" +
    "\u03D2\x07\x1C\x02\x02\u03CE\u03CF\x07O\x02\x02\u03CF\u03D0\x05\xAAV\x02" +
    "\u03D0\u03D1\x07\x1C\x02\x02\u03D1\u03D3\x03\x02\x02\x02\u03D2\u03CE\x03" +
    "\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3_\x03\x02\x02\x02\u03D4" +
    "\u03D8\x05b2\x02\u03D5\u03D7\x05f4\x02\u03D6\u03D5\x03\x02\x02\x02\u03D7" +
    "\u03DA\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D8\u03D9\x03\x02" +
    "\x02\x02\u03D9\u03DD\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DB" +
    "\u03DC\x077\x02\x02\u03DC\u03DE\x07Q\x02\x02\u03DD\u03DB\x03\x02\x02\x02" +
    "\u03DD\u03DE\x03\x02\x02\x02\u03DEa\x03\x02\x02\x02\u03DF\u03E0\x05d3" +
    "\x02\u03E0\u03E4\x07\x1D\x02\x02\u03E1\u03E3\x07\x04\x02\x02\u03E2\u03E1" +
    "\x03\x02\x02\x02\u03E3\u03E6\x03\x02\x02\x02\u03E4\u03E2\x03\x02\x02\x02" +
    "\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E7\x03\x02\x02\x02\u03E6\u03E4\x03" +
    "\x02\x02\x02\u03E7\u03E8\x05v<\x02\u03E8\u03E9\x07\x1C\x02\x02\u03E9c" +
    "\x03\x02\x02\x02\u03EA\u03ED\x07g\x02\x02\u03EB\u03EE\x070\x02\x02\u03EC" +
    "\u03EE\x07\xA1\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03ED\u03EC\x03\x02" +
    "\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03F9\x03\x02\x02\x02\u03EF" +
    "\u03F1\x07|\x02\x02\u03F0\u03F2\x070\x02\x02\u03F1\u03F0\x03\x02\x02\x02" +
    "\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F9\x03\x02\x02\x02\u03F3\u03F5\x07" +
    "h\x02\x02\u03F4\u03F6\x070\x02\x02\u03F5\u03F4\x03\x02\x02\x02\u03F5\u03F6" +
    "\x03\x02\x02\x02\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F9\x07i\x02\x02" +
    "\u03F8\u03EA\x03\x02\x02\x02\u03F8\u03EF\x03\x02\x02\x02\u03F8\u03F3\x03" +
    "\x02\x02\x02\u03F8\u03F7\x03\x02\x02\x02\u03F9e\x03\x02\x02\x02\u03FA" +
    "\u03FB\x07M\x02\x02\u03FB\u03FC\x07\x1D\x02\x02\u03FC\u03FD\x05v<\x02" +
    "\u03FD\u03FE\x07\x1C\x02\x02\u03FE\u040C\x03\x02\x02\x02\u03FF\u0400\t" +
    "\x10\x02\x02\u0400\u0401\x07\x1D\x02\x02\u0401\u0402\x075\x02\x02\u0402" +
    "\u040C\x07\x1C\x02\x02\u0403\u0407\t\x11\x02\x02\u0404\u0406\v\x02\x02" +
    "\x02\u0405\u0404\x03\x02\x02\x02\u0406\u0409\x03\x02\x02\x02\u0407\u0408" +
    "\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02\u0408\u040A\x03\x02\x02\x02" +
    "\u0409\u0407\x03\x02\x02\x02\u040A\u040C\x07\x1C\x02\x02\u040B\u03FA\x03" +
    "\x02\x02\x02\u040B\u03FF\x03\x02\x02\x02\u040B\u0403\x03\x02\x02\x02\u040C" +
    "g\x03\x02\x02\x02\u040D\u040E\x07M\x02\x02\u040E\u040F\x07\x1D\x02\x02" +
    "\u040F\u0410\x05v<\x02\u0410\u0411\x07\x1C\x02\x02\u0411\u041F\x03\x02" +
    "\x02\x02\u0412\u0413\t\x10\x02\x02\u0413\u0414\x07\x1D\x02\x02\u0414\u0415" +
    "\x075\x02\x02\u0415\u041F\x07\x1C\x02\x02\u0416\u041A\t\x11\x02\x02\u0417" +
    "\u0419\v\x02\x02\x02\u0418\u0417\x03\x02\x02\x02\u0419\u041C\x03\x02\x02" +
    "\x02\u041A\u041B\x03\x02\x02\x02\u041A\u0418\x03\x02\x02\x02\u041B\u041D" +
    "\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02\u041D\u041F\x07\x1C\x02\x02" +
    "\u041E\u040D\x03\x02\x02\x02\u041E\u0412\x03\x02\x02\x02\u041E\u0416\x03" +
    "\x02\x02\x02\u041Fi\x03\x02\x02\x02\u0420\u0424\x05l7\x02\u0421\u0423" +
    "\x05r:\x02\u0422\u0421\x03\x02\x02\x02\u0423\u0426\x03\x02\x02\x02\u0424" +
    "\u0422\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425k\x03\x02\x02" +
    "\x02\u0426\u0424\x03\x02\x02\x02\u0427\u0428\x05p9\x02\u0428\u0429\x07" +
    "\x1D\x02\x02\u0429\u042A\x05v<\x02\u042A\u042F\x07\x1C\x02\x02\u042B\u042C" +
    "\x07O\x02\x02\u042C\u042D\x05\xAAV\x02\u042D\u042E\x07\x1C\x02\x02\u042E" +
    "\u0430\x03\x02\x02\x02\u042F\u042B\x03\x02\x02\x02\u042F\u0430\x03\x02" +
    "\x02\x02\u0430m\x03\x02\x02\x02\u0431\u0434\x07[\x02\x02\u0432\u0433\x07" +
    "\x1D\x02\x02\u0433\u0435\x071\x02\x02\u0434\u0432\x03\x02\x02\x02\u0434" +
    "\u0435\x03\x02\x02\x02\u0435\u043C\x03\x02\x02\x02\u0436\u0439\x07r\x02" +
    "\x02\u0437\u0438\x07\x1D\x02\x02\u0438\u043A\x071\x02\x02\u0439\u0437" +
    "\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u043C\x03\x02\x02\x02" +
    "\u043B\u0431\x03\x02\x02\x02\u043B\u0436\x03\x02\x02\x02\u043Co\x03\x02" +
    "\x02\x02\u043D\u0440\x07f\x02\x02\u043E\u043F\x07\x1D\x02\x02\u043F\u0441" +
    "\x071\x02\x02\u0440\u043E\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02" +
    "\u0441\u044D\x03\x02\x02\x02\u0442\u0445\x07{\x02\x02\u0443\u0444\x07" +
    "\x1D\x02\x02\u0444\u0446\x071\x02\x02\u0445\u0443\x03\x02\x02\x02\u0445" +
    "\u0446\x03\x02\x02\x02\u0446\u044D\x03\x02\x02\x02\u0447\u044A\x07\x8B" +
    "\x02\x02\u0448\u0449\x07\x1D\x02\x02\u0449\u044B\x071\x02\x02\u044A\u0448" +
    "\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B\u044D\x03\x02\x02\x02" +
    "\u044C\u043D\x03\x02\x02\x02\u044C\u0442\x03\x02\x02\x02\u044C\u0447\x03" +
    "\x02\x02\x02\u044Dq\x03\x02\x02\x02\u044E\u044F\x07\x15\x02\x02\u044F" +
    "\u0452\x05\xA4S\x02\u0450\u0452\x07M\x02\x02\u0451\u044E\x03\x02\x02\x02" +
    "\u0451\u0450\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0457\x07" +
    "\x1D\x02\x02\u0454\u0456\x07\x04\x02\x02\u0455\u0454\x03\x02\x02\x02\u0456" +
    "\u0459\x03\x02\x02\x02\u0457\u0455\x03\x02\x02\x02\u0457\u0458\x03\x02" +
    "\x02\x02\u0458\u045C\x03\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u045A" +
    "\u045D\x05\xA4S\x02\u045B\u045D\x077\x02\x02\u045C\u045A\x03\x02\x02\x02" +
    "\u045C\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u045C\x03" +
    "\x02\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460" +
    "\u046E\x07\x1C\x02\x02\u0461\u0462\t\x10\x02\x02\u0462\u0463\x07\x1D\x02" +
    "\x02\u0463\u0464\x075\x02\x02\u0464\u046E\x07\x1C\x02\x02\u0465\u0469" +
    "\t\x11\x02\x02\u0466\u0468\v\x02\x02\x02\u0467\u0466\x03\x02\x02\x02\u0468" +
    "\u046B\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u0469\u0467\x03\x02" +
    "\x02\x02\u046A\u046C\x03\x02\x02\x02\u046B\u0469\x03\x02\x02\x02\u046C" +
    "\u046E\x07\x1C\x02\x02\u046D\u0451\x03\x02\x02\x02\u046D\u0461\x03\x02" +
    "\x02\x02\u046D\u0465\x03\x02\x02\x02\u046Es\x03\x02\x02\x02\u046F\u0470" +
    "\x07\xA0\x02\x02\u0470\u0471\x07 \x02\x02\u0471\u0472\x075\x02\x02\u0472" +
    "u\x03\x02\x02\x02\u0473\u0474\x07\xA3\x02\x02\u0474w\x03\x02\x02\x02\u0475" +
    "\u0476\x07\x1A\x02\x02\u0476\u047E\x07\x1C\x02\x02\u0477\u0479\x07\x04" +
    "\x02\x02\u0478\u0477\x03\x02\x02\x02\u0479\u047C\x03\x02\x02\x02\u047A" +
    "\u0478\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u047D\x03\x02" +
    "\x02\x02\u047C\u047A\x03\x02\x02\x02\u047D\u047F\x05z>\x02\u047E\u047A" +
    "\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02\u047F\u0494\x03\x02\x02\x02" +
    "\u0480\u0481\x07\x1A\x02\x02\u0481\u0486\x05\xA4S\x02\u0482\u0485\x07" +
    "\x1D\x02\x02\u0483\u0485\x05\xA4S\x02\u0484\u0482\x03\x02\x02\x02\u0484" +
    "\u0483\x03\x02\x02\x02\u0485\u0488\x03\x02\x02\x02\u0486\u0484\x03\x02" +
    "\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u0489\x03\x02\x02\x02\u0488" +
    "\u0486\x03\x02\x02\x02\u0489\u0491\x07\x1C\x02\x02\u048A\u048C\x07\x04" +
    "\x02\x02\u048B\u048A\x03\x02\x02\x02\u048C\u048F\x03\x02\x02\x02\u048D" +
    "\u048B\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E\u0490\x03\x02" +
    "\x02\x02\u048F\u048D\x03\x02\x02\x02\u0490\u0492\x05z>\x02\u0491\u048D" +
    "\x03\x02\x02\x02\u0491\u0492\x03\x02\x02\x02\u0492\u0494\x03\x02\x02\x02" +
    "\u0493\u0475\x03\x02\x02\x02\u0493\u0480\x03\x02\x02\x02\u0494y\x03\x02" +
    "\x02\x02\u0495\u0496\x07\x1A\x02\x02\u0496\u049B\x05\xA4S\x02\u0497\u049A" +
    "\x07\x1D\x02\x02\u0498\u049A\x05\xA4S\x02\u0499\u0497\x03\x02\x02\x02" +
    "\u0499\u0498\x03\x02\x02\x02\u049A\u049D\x03\x02\x02\x02\u049B\u0499\x03" +
    "\x02\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\u049E\x03\x02\x02\x02\u049D" +
    "\u049B\x03\x02\x02\x02\u049E\u049F\x07\x1C\x02\x02\u049F{\x03\x02\x02" +
    "\x02\u04A0\u04A2\x07\x0F\x02\x02\u04A1\u04A3\x05\xA4S\x02\u04A2\u04A1" +
    "\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02" +
    "\u04A4\u04AB\x07\x1C\x02\x02\u04A5\u04A7\x07\x10\x02\x02\u04A6\u04A8\x05" +
    "\xA4S\x02\u04A7\u04A6\x03\x02\x02\x02\u04A7\u04A8\x03\x02\x02\x02\u04A8" +
    "\u04A9\x03\x02\x02\x02\u04A9\u04AB\x07\x1C\x02\x02\u04AA\u04A0\x03\x02" +
    "\x02\x02\u04AA\u04A5\x03\x02\x02\x02\u04AB}\x03\x02\x02\x02\u04AC\u04B4" +
    "\x07F\x02\x02\u04AD\u04B4\x07D\x02\x02\u04AE\u04B0\x07E\x02\x02\u04AF" +
    "\u04B1\x07:\x02\x02\u04B0\u04AF\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02" +
    "\x02\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B4\x07\x02\x02\x03\u04B3\u04AC" +
    "\x03\x02\x02\x02\u04B3\u04AD\x03\x02\x02\x02\u04B3\u04AE\x03\x02\x02\x02" +
    "\u04B4\x7F\x03\x02\x02\x02\u04B5\u04B7\x07q\x02\x02\u04B6\u04B8\x05\xA4" +
    "S\x02\u04B7\u04B6\x03\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04CE" +
    "\x03\x02\x02\x02\u04B9\u04C3\x05\xA4S\x02\u04BA\u04BE\x077\x02\x02\u04BB" +
    "\u04BD\x07\x04\x02\x02\u04BC\u04BB\x03\x02\x02\x02\u04BD\u04C0\x03\x02" +
    "\x02\x02\u04BE\u04BC\x03\x02\x02\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF" +
    "\u04C2\x03\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02\u04C1\u04BA\x03\x02" +
    "\x02\x02\u04C2\u04C5\x03\x02\x02\x02\u04C3\u04C1\x03\x02\x02\x02\u04C3" +
    "\u04C4\x03\x02\x02\x02\u04C4\u04C9\x03\x02\x02\x02\u04C5\u04C3\x03\x02" +
    "\x02\x02\u04C6\u04C8\x077\x02\x02\u04C7\u04C6\x03\x02\x02\x02\u04C8\u04CB" +
    "\x03\x02\x02\x02\u04C9\u04C7\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02" +
    "\u04CA\u04CD\x03\x02\x02\x02\u04CB\u04C9\x03\x02\x02\x02\u04CC\u04B9\x03" +
    "\x02\x02\x02\u04CD\u04D0\x03\x02\x02\x02\u04CE\u04CC\x03\x02\x02\x02\u04CE" +
    "\u04CF\x03\x02\x02\x02\u04CF\u04D1\x03\x02\x02\x02\u04D0\u04CE\x03\x02" +
    "\x02\x02\u04D1\u04DD\x07\x1C\x02\x02\u04D2\u04D8\x07q\x02\x02\u04D3\u04D7" +
    "\x05\xA4S\x02\u04D4\u04D7\x077\x02\x02\u04D5\u04D7\x07\x04\x02\x02\u04D6" +
    "\u04D3\x03\x02\x02\x02\u04D6\u04D4\x03\x02\x02\x02\u04D6\u04D5\x03\x02" +
    "\x02\x02\u04D7\u04DA\x03\x02\x02\x02\u04D8\u04D6\x03\x02\x02\x02\u04D8" +
    "\u04D9\x03\x02\x02\x02\u04D9\u04DB\x03\x02\x02\x02\u04DA\u04D8\x03\x02" +
    "\x02\x02\u04DB\u04DD\x07\x02\x02\x03\u04DC\u04B5\x03\x02\x02\x02\u04DC" +
    "\u04D2\x03\x02\x02\x02\u04DD\x81\x03\x02\x02\x02\u04DE\u04E3\x07>\x02" +
    "\x02\u04DF\u04E4\x05\xA4S\x02\u04E0\u04E4\x07\x1D\x02\x02\u04E1\u04E4" +
    "\x07\xA3\x02\x02\u04E2\u04E4\x077\x02\x02\u04E3\u04DF\x03\x02\x02\x02" +
    "\u04E3\u04E0\x03\x02\x02\x02\u04E3\u04E1\x03\x02\x02\x02\u04E3\u04E2\x03" +
    "\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\u04E3\x03\x02\x02\x02\u04E5" +
    "\u04E6\x03\x02\x02\x02\u04E6\u04E7\x03\x02\x02\x02\u04E7\u04F5\x07\x1C" +
    "\x02\x02\u04E8\u04F0\x07>\x02\x02\u04E9\u04EF\x05\xA4S\x02\u04EA\u04EF" +
    "\x07\x1D\x02\x02\u04EB\u04EF\x07\xA3\x02\x02\u04EC\u04EF\x077\x02\x02" +
    "\u04ED\u04EF\x07\x04\x02\x02\u04EE\u04E9\x03\x02\x02\x02\u04EE\u04EA\x03" +
    "\x02\x02\x02\u04EE\u04EB\x03\x02\x02\x02\u04EE\u04EC\x03\x02\x02\x02\u04EE" +
    "\u04ED\x03\x02\x02\x02\u04EF\u04F2\x03\x02\x02\x02\u04F0\u04EE\x03\x02" +
    "\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1\u04F3\x03\x02\x02\x02\u04F2" +
    "\u04F0\x03\x02\x02\x02\u04F3\u04F5\x07\x02\x02\x03\u04F4\u04DE\x03\x02" +
    "\x02\x02\u04F4\u04E8\x03\x02\x02\x02\u04F5\x83\x03\x02\x02\x02\u04F6\u04F7" +
    "\x07=\x02\x02\u04F7\u04F8\x05\xA4S\x02\u04F8\u04F9\x07\x1C\x02\x02\u04F9" +
    "\x85\x03\x02\x02\x02\u04FA\u04FE\x07X\x02\x02\u04FB\u04FF\x05\xA4S\x02" +
    "\u04FC\u04FF\x07\x1D\x02\x02\u04FD\u04FF\x077\x02\x02\u04FE\u04FB\x03" +
    "\x02\x02\x02\u04FE\u04FC\x03\x02\x02\x02\u04FE\u04FD\x03\x02\x02\x02\u04FF" +
    "\u0500\x03\x02\x02\x02\u0500\u04FE\x03\x02\x02\x02\u0500\u0501\x03\x02" +
    "\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\u0504\x07\x1C\x02\x02\u0503" +
    "\u0505\x05\x88E\x02\u0504\u0503\x03\x02\x02\x02\u0504\u0505\x03\x02\x02" +
    "\x02\u0505\x87\x03\x02\x02\x02\u0506\u050A\x07X\x02\x02\u0507\u050B\x05" +
    "\xA4S\x02\u0508\u050B\x07\x1D\x02\x02\u0509\u050B\x077\x02\x02\u050A\u0507" +
    "\x03\x02\x02\x02\u050A\u0508\x03\x02\x02\x02\u050A\u0509\x03\x02\x02\x02" +
    "\u050B\u050C\x03\x02\x02\x02\u050C\u050A\x03\x02\x02\x02\u050C\u050D\x03" +
    "\x02\x02\x02\u050D\u050E\x03\x02\x02\x02\u050E\u050F\x07\x1C\x02\x02\u050F" +
    "\x89\x03\x02\x02\x02\u0510\u0514\x07\x13\x02\x02\u0511\u0513\x077\x02" +
    "\x02\u0512\u0511\x03\x02\x02\x02\u0513\u0516\x03\x02\x02\x02\u0514\u0512" +
    "\x03\x02\x02\x02\u0514\u0515\x03\x02\x02\x02\u0515\u0518\x03\x02\x02\x02" +
    "\u0516\u0514\x03\x02\x02\x02\u0517\u0519\x05\xA4S\x02\u0518\u0517\x03" +
    "\x02\x02\x02\u0518\u0519\x03\x02\x02\x02\u0519\u052F\x03\x02\x02\x02\u051A" +
    "\u0524\x05\xA4S\x02\u051B\u051F\x077\x02\x02\u051C\u051E\x07\x04\x02\x02" +
    "\u051D\u051C\x03\x02\x02\x02\u051E\u0521\x03\x02\x02\x02\u051F\u051D\x03" +
    "\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520\u0523\x03\x02\x02\x02\u0521" +
    "\u051F\x03\x02\x02\x02\u0522\u051B\x03\x02\x02\x02\u0523\u0526\x03\x02" +
    "\x02\x02\u0524\u0522\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525" +
    "\u052A\x03\x02\x02\x02\u0526\u0524\x03\x02\x02\x02\u0527\u0529\x077\x02" +
    "\x02\u0528\u0527\x03\x02\x02\x02\u0529\u052C\x03\x02\x02\x02\u052A\u0528" +
    "\x03\x02\x02\x02\u052A\u052B\x03\x02\x02\x02\u052B\u052E\x03\x02\x02\x02" +
    "\u052C\u052A\x03\x02\x02\x02\u052D\u051A\x03\x02\x02\x02\u052E\u0531\x03" +
    "\x02\x02\x02\u052F\u052D\x03\x02\x02\x02\u052F\u0530\x03\x02\x02\x02\u0530" +
    "\u0532\x03\x02\x02\x02\u0531\u052F\x03\x02\x02\x02\u0532\u053F\x07\x1C" +
    "\x02\x02\u0533\u0537\x07\x13\x02\x02\u0534\u0536\x077\x02\x02\u0535\u0534" +
    "\x03\x02\x02\x02\u0536\u0539\x03\x02\x02\x02\u0537\u0535\x03\x02\x02\x02" +
    "\u0537\u0538\x03\x02\x02\x02\u0538\u053B\x03\x02\x02\x02\u0539\u0537\x03" +
    "\x02\x02\x02\u053A\u053C\x05\xA4S\x02\u053B\u053A\x03\x02\x02\x02\u053B" +
    "\u053C\x03\x02\x02\x02\u053C\u053D\x03\x02\x02\x02\u053D\u053F\x07\x02" +
    "\x02\x03\u053E\u0510\x03\x02\x02\x02\u053E\u0533\x03\x02\x02\x02\u053F" +
    "\x8B\x03\x02\x02\x02\u0540\u0542\x07\x14\x02\x02\u0541\u0543\n\x12\x02" +
    "\x02\u0542\u0541\x03\x02\x02\x02\u0543\u0544\x03\x02\x02\x02\u0544\u0542" +
    "\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545\u0546\x03\x02\x02\x02" +
    "\u0546\u0547\x07\x1C\x02\x02\u0547\x8D\x03\x02\x02\x02\u0548\u054B\x07" +
    "\x1B\x02\x02\u0549\u054C\x05\xA4S\x02\u054A\u054C\x077\x02\x02\u054B\u0549" +
    "\x03\x02\x02\x02\u054B\u054A\x03\x02\x02\x02\u054C\u054D\x03\x02\x02\x02" +
    "\u054D\u054B\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u054F\x03" +
    "\x02\x02\x02\u054F\u0555\x07\x1C\x02\x02\u0550\u0551\x07\x1B\x02\x02\u0551" +
    "\u0552\x05\xA4S\x02\u0552\u0553\x07\x02\x02\x03\u0553\u0555\x03\x02\x02" +
    "\x02\u0554\u0548\x03\x02\x02\x02\u0554\u0550\x03\x02\x02\x02\u0555\x8F" +
    "\x03\x02\x02\x02\u0556\u0557\x07J\x02\x02\u0557\u0558\x05\xA4S\x02\u0558" +
    "\u0559\x07\x1C\x02\x02\u0559\u055F\x03\x02\x02\x02\u055A\u055B\x07K\x02" +
    "\x02\u055B\u055C\x05\xA4S\x02\u055C\u055D\x07\x1C\x02\x02\u055D\u055F" +
    "\x03\x02\x02\x02\u055E\u0556\x03\x02\x02\x02\u055E\u055A\x03\x02\x02\x02" +
    "\u055F\x91\x03\x02\x02\x02\u0560\u0561\x07A\x02\x02\u0561\u0562\x07\x1D" +
    "\x02\x02\u0562\u0563\x075\x02\x02\u0563\u056A\x07\x1C\x02\x02\u0564\u0565" +
    "\x07A\x02\x02\u0565\u0566\x07\x1D\x02\x02\u0566\u0567\x05\xA4S\x02\u0567" +
    "\u0568\x07\x1C\x02\x02\u0568\u056A\x03\x02\x02\x02\u0569\u0560\x03\x02" +
    "\x02\x02\u0569\u0564\x03\x02\x02\x02\u056A\x93\x03\x02\x02\x02\u056B\u056C" +
    "\x07V\x02\x02\u056C\u056D\x05\xA4S\x02\u056D\u056E\x07\x1C\x02\x02\u056E" +
    "\x95\x03\x02\x02\x02\u056F\u0570\x07W\x02\x02\u0570\u0571\x05\xA4S\x02" +
    "\u0571\u0572\x07\x1C\x02\x02\u0572\x97\x03\x02\x02\x02\u0573\u057D\x05" +
    "\x9AN\x02\u0574\u0576\x077\x02\x02\u0575\u0574\x03\x02\x02\x02\u0576\u0579" +
    "\x03\x02\x02\x02\u0577\u0575\x03\x02\x02\x02\u0577\u0578\x03\x02\x02\x02" +
    "\u0578\u057A\x03\x02\x02\x02\u0579\u0577\x03\x02\x02\x02\u057A\u057C\x05" +
    "\x9AN\x02\u057B\u0577\x03\x02\x02\x02\u057C\u057F\x03\x02\x02\x02\u057D" +
    "\u057B\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E\x99\x03\x02\x02" +
    "\x02\u057F\u057D\x03\x02\x02\x02\u0580\u0581\x07\x15\x02\x02\u0581\u0582" +
    "\x05\xA4S\x02\u0582\u0583\t\x13\x02\x02\u0583\u0589\x05\xA4S\x02\u0584" +
    "\u0588\x077\x02\x02\u0585\u0588\x07\x1D\x02\x02\u0586\u0588\x05\xA4S\x02" +
    "\u0587\u0584\x03\x02\x02\x02\u0587\u0585\x03\x02\x02\x02\u0587\u0586\x03" +
    "\x02\x02\x02\u0588\u058B\x03\x02\x02\x02\u0589\u0587\x03\x02\x02\x02\u0589" +
    "\u058A\x03\x02\x02\x02\u058A\u058C\x03\x02\x02\x02\u058B\u0589\x03\x02" +
    "\x02\x02\u058C\u058D\x07\x1C\x02\x02\u058D\u0598\x03\x02\x02\x02\u058E" +
    "\u0592\x07T\x02\x02\u058F\u0591\v\x02\x02\x02\u0590\u058F\x03\x02\x02" +
    "\x02\u0591\u0594\x03\x02\x02\x02\u0592\u0593\x03\x02\x02\x02\u0592\u0590" +
    "\x03\x02\x02\x02\u0593\u0595\x03\x02\x02\x02\u0594\u0592\x03\x02\x02\x02" +
    "\u0595\u0598\x07\x1C\x02\x02\u0596\u0598\x07G\x02\x02\u0597\u0580\x03" +
    "\x02\x02\x02\u0597\u058E\x03\x02\x02\x02\u0597\u0596\x03\x02\x02\x02\u0598" +
    "\x9B\x03\x02\x02\x02\u0599\u059D\x07\f\x02\x02\u059A\u059E\x05\xA4S\x02" +
    "\u059B\u059E\x07\x1D\x02\x02\u059C\u059E\x077\x02\x02\u059D\u059A\x03" +
    "\x02\x02\x02\u059D\u059B\x03\x02\x02\x02\u059D\u059C\x03\x02\x02\x02\u059E" +
    "\u059F\x03\x02\x02\x02\u059F\u059D\x03\x02\x02\x02\u059F\u05A0\x03\x02" +
    "\x02\x02\u05A0\u05A1\x03\x02\x02\x02\u05A1\u05AD\x07\x1C\x02\x02\u05A2" +
    "\u05A8\x07\f\x02\x02\u05A3\u05A7\x05\xA4S\x02\u05A4\u05A7\x07\x1D\x02" +
    "\x02\u05A5\u05A7\x077\x02\x02\u05A6\u05A3\x03\x02\x02\x02\u05A6\u05A4" +
    "\x03\x02\x02\x02\u05A6\u05A5\x03\x02\x02\x02\u05A7\u05AA\x03\x02\x02\x02" +
    "\u05A8\u05A6\x03\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9\u05AB\x03" +
    "\x02\x02\x02\u05AA\u05A8\x03\x02\x02\x02\u05AB\u05AD\x07\x02\x02\x03\u05AC" +
    "\u0599\x03\x02\x02\x02\u05AC\u05A2\x03\x02\x02\x02\u05AD\x9D\x03\x02\x02" +
    "\x02\u05AE\u05B0\x07\x11\x02\x02\u05AF\u05B1\x05\xA4S\x02\u05B0\u05AF" +
    "\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1\u05B2\x03\x02\x02\x02" +
    "\u05B2\u05B3\x07\x1C\x02\x02\u05B3\x9F\x03\x02\x02\x02\u05B4\u05B5\x07" +
    "\x1F\x02\x02\u05B5\xA1\x03\x02\x02\x02\u05B6\u05B8\x05\xA4S\x02\u05B7" +
    "\u05B9\x077\x02\x02\u05B8\u05B7\x03\x02\x02\x02\u05B8\u05B9\x03\x02\x02" +
    "\x02\u05B9\u05BB\x03\x02\x02\x02\u05BA\u05B6\x03\x02\x02\x02\u05BB\u05BC" +
    "\x03\x02\x02\x02\u05BC\u05BA\x03\x02\x02\x02\u05BC\u05BD\x03\x02\x02\x02" +
    "\u05BD\xA3\x03\x02\x02\x02\u05BE\u05C5\x076\x02\x02\u05BF\u05C1\x07\x04" +
    "\x02\x02\u05C0\u05BF\x03\x02\x02\x02\u05C1\u05C2\x03\x02\x02\x02\u05C2" +
    "\u05C0\x03\x02\x02\x02\u05C2\u05C3\x03\x02\x02\x02\u05C3\u05C4\x03\x02" +
    "\x02\x02\u05C4\u05C6\x075\x02\x02\u05C5\u05C0\x03\x02\x02\x02\u05C5\u05C6" +
    "\x03\x02\x02\x02\u05C6\u05EB\x03\x02\x02\x02\u05C7\u05CE\x05\xAAV\x02" +
    "\u05C8\u05CA\x07\x04\x02\x02\u05C9\u05C8\x03\x02\x02\x02\u05CA\u05CB\x03" +
    "\x02\x02\x02\u05CB\u05C9\x03\x02\x02\x02\u05CB\u05CC\x03\x02\x02\x02\u05CC" +
    "\u05CD\x03\x02\x02\x02\u05CD\u05CF\x075\x02\x02\u05CE\u05C9\x03\x02\x02" +
    "\x02\u05CE\u05CF\x03\x02\x02\x02\u05CF\u05EB\x03\x02\x02\x02\u05D0\u05D1" +
    "\x07\x18\x02\x02\u05D1\u05D2\x05\xA4S\x02\u05D2\u05D3\x07\x1C\x02\x02" +
    "\u05D3\u05EB\x03\x02\x02\x02\u05D4\u05EB\x075\x02\x02\u05D5\u05D7\x07" +
    "\x04\x02\x02\u05D6\u05D5\x03\x02\x02\x02\u05D7\u05DA\x03\x02\x02\x02\u05D8" +
    "\u05D6\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9\u05DB\x03\x02" +
    "\x02\x02\u05DA\u05D8\x03\x02\x02\x02\u05DB\u05DF\x07\x1D\x02\x02\u05DC" +
    "\u05DE\x07\x04\x02\x02\u05DD\u05DC\x03\x02\x02\x02\u05DE\u05E1\x03\x02" +
    "\x02\x02\u05DF\u05DD\x03\x02\x02\x02\u05DF\u05E0\x03\x02\x02\x02\u05E0" +
    "\u05EB\x03\x02\x02\x02\u05E1\u05DF\x03\x02\x02\x02\u05E2\u05E6\x07\x1E" +
    "\x02\x02\u05E3\u05E5\x07\x04\x02\x02\u05E4\u05E3\x03\x02\x02\x02\u05E5" +
    "\u05E8\x03\x02\x02\x02\u05E6\u05E4\x03\x02\x02\x02\u05E6\u05E7\x03\x02" +
    "\x02\x02\u05E7\u05EB\x03\x02\x02\x02\u05E8\u05E6\x03\x02\x02\x02\u05E9" +
    "\u05EB\x07\xA3\x02\x02\u05EA\u05BE\x03\x02\x02\x02\u05EA\u05C7\x03\x02" +
    "\x02\x02\u05EA\u05D0\x03\x02\x02\x02\u05EA\u05D4\x03\x02\x02\x02\u05EA" +
    "\u05D8\x03\x02\x02\x02\u05EA\u05E2\x03\x02\x02\x02\u05EA\u05E9\x03\x02" +
    "\x02\x02\u05EB\xA5\x03\x02\x02\x02\u05EC\u05ED\x07\x1C\x02\x02\u05ED\xA7" +
    "\x03\x02\x02\x02\u05EE\u05EF\t\x14\x02\x02\u05EF\xA9\x03\x02\x02\x02\u05F0" +
    "\u05FC\x07:\x02\x02\u05F1\u05FC\x078\x02\x02\u05F2\u05FC\x07;\x02\x02" +
    "\u05F3\u05FC\x079\x02\x02\u05F4\u05FC\x07\x1E\x02\x02\u05F5\u05F6\x07" +
    "\"\x02\x02\u05F6\u05FC\n\x15\x02\x02\u05F7\u05F8\x07#\x02\x02\u05F8\u05FC" +
    "\n\x16\x02\x02\u05F9\u05FC\x07&\x02\x02\u05FA\u05FC\x07%\x02\x02\u05FB" +
    "\u05F0\x03\x02\x02\x02\u05FB\u05F1\x03\x02\x02\x02\u05FB\u05F2\x03\x02" +
    "\x02\x02\u05FB\u05F3\x03\x02\x02\x02\u05FB\u05F4\x03\x02\x02\x02\u05FB" +
    "\u05F5\x03\x02\x02\x02\u05FB\u05F7\x03\x02\x02\x02\u05FB\u05F9\x03\x02" +
    "\x02\x02\u05FB\u05FA\x03\x02\x02\x02\u05FC\u05FD\x03\x02\x02\x02\u05FD" +
    "\u05FB\x03\x02\x02\x02\u05FD\u05FE\x03\x02\x02\x02\u05FE\xAB\x03\x02\x02" +
    "\x02\u05FF\u0600\x07\x04\x02\x02\u0600\xAD\x03\x02\x02\x02\xDB\xB2\xB8" +
    "\xBD\xC2\xCA\xD1\xD9\xE0\xE5\xF2\xF9\xFF\u0102\u0104\u010C\u0113\u0118" +
    "\u0121\u012F\u0136\u013D\u0143\u0146\u0148\u0150\u0157\u015C\u0165\u016D" +
    "\u0178\u017D\u0184\u018B\u0191\u0194\u0196\u019E\u01A5\u01AA\u01B3\u01C0" +
    "\u01C4\u01CA\u01D1\u01D7\u01DA\u01DC\u01E4\u01EB\u01F0\u01F9\u0206\u020B" +
    "\u0212\u0218\u021B\u021D\u0225\u022C\u0231\u023A\u0241\u0246\u024D\u0253" +
    "\u0257\u025C\u0262\u0269\u026F\u0272\u0274\u027C\u0283\u0288\u0291\u0298" +
    "\u029D\u02A4\u02AA\u02AE\u02B6\u02BC\u02BF\u02C1\u02C8\u02CC\u02D1\u02D8" +
    "\u02E0\u02E8\u0304\u030E\u0310\u0317\u031C\u0325\u032E\u0334\u0336\u0344" +
    "\u034C\u0351\u0355\u0359\u035C\u0361\u0378\u037D\u0382\u0384\u038E\u0398" +
    "\u03A2\u03A8\u03AF\u03B5\u03BD\u03C7\u03D2\u03D8\u03DD\u03E4\u03ED\u03F1" +
    "\u03F5\u03F8\u0407\u040B\u041A\u041E\u0424\u042F\u0434\u0439\u043B\u0440" +
    "\u0445\u044A\u044C\u0451\u0457\u045C\u045E\u0469\u046D\u047A\u047E\u0484" +
    "\u0486\u048D\u0491\u0493\u0499\u049B\u04A2\u04A7\u04AA\u04B0\u04B3\u04B7" +
    "\u04BE\u04C3\u04C9\u04CE\u04D6\u04D8\u04DC\u04E3\u04E5\u04EE\u04F0\u04F4" +
    "\u04FE\u0500\u0504\u050A\u050C\u0514\u0518\u051F\u0524\u052A\u052F\u0537" +
    "\u053B\u053E\u0544\u054B\u054D\u0554\u055E\u0569\u0577\u057D\u0587\u0589" +
    "\u0592\u0597\u059D\u059F\u05A6\u05A8\u05AC\u05B0\u05B8\u05BC\u05C2\u05C5" +
    "\u05CB\u05CE\u05D8\u05DF\u05E6\u05EA\u05FB\u05FD";
flashcardParser._serializedATN = Utils.join([
    flashcardParser._serializedATNSegment0,
    flashcardParser._serializedATNSegment1,
    flashcardParser._serializedATNSegment2,
], "");
class BitmarkContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(flashcardParser.EOF, 0); }
    bitmark_(i) {
        if (i === undefined) {
            return this.getRuleContexts(Bitmark_Context);
        }
        else {
            return this.getRuleContext(i, Bitmark_Context);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.S);
        }
        else {
            return this.getToken(flashcardParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_bitmark; }
    // @Override
    enterRule(listener) {
        if (listener.enterBitmark) {
            listener.enterBitmark(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBitmark) {
            listener.exitBitmark(this);
        }
    }
}
exports.BitmarkContext = BitmarkContext;
class Bitmark_Context extends ParserRuleContext_1.ParserRuleContext {
    flashcards() {
        return this.tryGetRuleContext(0, FlashcardsContext);
    }
    vocab() {
        return this.tryGetRuleContext(0, VocabContext);
    }
    vocab_1() {
        return this.tryGetRuleContext(0, Vocab_1Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_bitmark_; }
    // @Override
    enterRule(listener) {
        if (listener.enterBitmark_) {
            listener.enterBitmark_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBitmark_) {
            listener.exitBitmark_(this);
        }
    }
}
exports.Bitmark_Context = Bitmark_Context;
class FlashcardsContext extends ParserRuleContext_1.ParserRuleContext {
    flashcard() {
        return this.tryGetRuleContext(0, FlashcardContext);
    }
    flashcard_1() {
        return this.tryGetRuleContext(0, Flashcard_1Context);
    }
    flashcard_set() {
        return this.tryGetRuleContext(0, Flashcard_setContext);
    }
    flashcard_language_set() {
        return this.tryGetRuleContext(0, Flashcard_language_setContext);
    }
    flashcard_language_1() {
        return this.tryGetRuleContext(0, Flashcard_language_1Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_flashcards; }
    // @Override
    enterRule(listener) {
        if (listener.enterFlashcards) {
            listener.enterFlashcards(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFlashcards) {
            listener.exitFlashcards(this);
        }
    }
}
exports.FlashcardsContext = FlashcardsContext;
class Flashcard_1Context extends ParserRuleContext_1.ParserRuleContext {
    BitFlash1() { return this.getToken(flashcardParser.BitFlash1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    side(i) {
        if (i === undefined) {
            return this.getRuleContexts(SideContext);
        }
        else {
            return this.getRuleContext(i, SideContext);
        }
    }
    EQ() { return this.tryGetToken(flashcardParser.EQ, 0); }
    EQ2() { return this.tryGetToken(flashcardParser.EQ2, 0); }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_flashcard_1; }
    // @Override
    enterRule(listener) {
        if (listener.enterFlashcard_1) {
            listener.enterFlashcard_1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFlashcard_1) {
            listener.exitFlashcard_1(this);
        }
    }
}
exports.Flashcard_1Context = Flashcard_1Context;
class FlashcardContext extends ParserRuleContext_1.ParserRuleContext {
    BitFlash() { return this.getToken(flashcardParser.BitFlash, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    side(i) {
        if (i === undefined) {
            return this.getRuleContexts(SideContext);
        }
        else {
            return this.getRuleContext(i, SideContext);
        }
    }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.HSPL);
        }
        else {
            return this.getToken(flashcardParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.HSPL2);
        }
        else {
            return this.getToken(flashcardParser.HSPL2, i);
        }
    }
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.EQ);
        }
        else {
            return this.getToken(flashcardParser.EQ, i);
        }
    }
    EQ2(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.EQ2);
        }
        else {
            return this.getToken(flashcardParser.EQ2, i);
        }
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_flashcard; }
    // @Override
    enterRule(listener) {
        if (listener.enterFlashcard) {
            listener.enterFlashcard(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFlashcard) {
            listener.exitFlashcard(this);
        }
    }
}
exports.FlashcardContext = FlashcardContext;
class Flashcard_setContext extends ParserRuleContext_1.ParserRuleContext {
    BitFlashcardset() { return this.getToken(flashcardParser.BitFlashcardset, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.HSPL);
        }
        else {
            return this.getToken(flashcardParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.HSPL2);
        }
        else {
            return this.getToken(flashcardParser.HSPL2, i);
        }
    }
    side(i) {
        if (i === undefined) {
            return this.getRuleContexts(SideContext);
        }
        else {
            return this.getRuleContext(i, SideContext);
        }
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.EQ);
        }
        else {
            return this.getToken(flashcardParser.EQ, i);
        }
    }
    EQ2(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.EQ2);
        }
        else {
            return this.getToken(flashcardParser.EQ2, i);
        }
    }
    OR(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.OR);
        }
        else {
            return this.getToken(flashcardParser.OR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_flashcard_set; }
    // @Override
    enterRule(listener) {
        if (listener.enterFlashcard_set) {
            listener.enterFlashcard_set(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFlashcard_set) {
            listener.exitFlashcard_set(this);
        }
    }
}
exports.Flashcard_setContext = Flashcard_setContext;
class Flashcard_language_setContext extends ParserRuleContext_1.ParserRuleContext {
    BitFlashcardlangset() { return this.getToken(flashcardParser.BitFlashcardlangset, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    sidex_NL(i) {
        if (i === undefined) {
            return this.getRuleContexts(Sidex_NLContext);
        }
        else {
            return this.getRuleContext(i, Sidex_NLContext);
        }
    }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.HSPL);
        }
        else {
            return this.getToken(flashcardParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.HSPL2);
        }
        else {
            return this.getToken(flashcardParser.HSPL2, i);
        }
    }
    sidex(i) {
        if (i === undefined) {
            return this.getRuleContexts(SidexContext);
        }
        else {
            return this.getRuleContext(i, SidexContext);
        }
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.EQ);
        }
        else {
            return this.getToken(flashcardParser.EQ, i);
        }
    }
    EQ2(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.EQ2);
        }
        else {
            return this.getToken(flashcardParser.EQ2, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_flashcard_language_set; }
    // @Override
    enterRule(listener) {
        if (listener.enterFlashcard_language_set) {
            listener.enterFlashcard_language_set(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFlashcard_language_set) {
            listener.exitFlashcard_language_set(this);
        }
    }
}
exports.Flashcard_language_setContext = Flashcard_language_setContext;
class Flashcard_language_1Context extends ParserRuleContext_1.ParserRuleContext {
    BitFlashcardlang1() { return this.getToken(flashcardParser.BitFlashcardlang1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    sidex_NL(i) {
        if (i === undefined) {
            return this.getRuleContexts(Sidex_NLContext);
        }
        else {
            return this.getRuleContext(i, Sidex_NLContext);
        }
    }
    sidex() {
        return this.tryGetRuleContext(0, SidexContext);
    }
    EQ() { return this.tryGetToken(flashcardParser.EQ, 0); }
    EQ2() { return this.tryGetToken(flashcardParser.EQ2, 0); }
    OR(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.OR);
        }
        else {
            return this.getToken(flashcardParser.OR, i);
        }
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_flashcard_language_1; }
    // @Override
    enterRule(listener) {
        if (listener.enterFlashcard_language_1) {
            listener.enterFlashcard_language_1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFlashcard_language_1) {
            listener.exitFlashcard_language_1(this);
        }
    }
}
exports.Flashcard_language_1Context = Flashcard_language_1Context;
class VocabContext extends ParserRuleContext_1.ParserRuleContext {
    BitVocabulary() { return this.getToken(flashcardParser.BitVocabulary, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.HSPL);
        }
        else {
            return this.getToken(flashcardParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.HSPL2);
        }
        else {
            return this.getToken(flashcardParser.HSPL2, i);
        }
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    vside(i) {
        if (i === undefined) {
            return this.getRuleContexts(VsideContext);
        }
        else {
            return this.getRuleContext(i, VsideContext);
        }
    }
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.EQ);
        }
        else {
            return this.getToken(flashcardParser.EQ, i);
        }
    }
    EQ2(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.EQ2);
        }
        else {
            return this.getToken(flashcardParser.EQ2, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_vocab; }
    // @Override
    enterRule(listener) {
        if (listener.enterVocab) {
            listener.enterVocab(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVocab) {
            listener.exitVocab(this);
        }
    }
}
exports.VocabContext = VocabContext;
class Vocab_1Context extends ParserRuleContext_1.ParserRuleContext {
    BitVocabulary_1() { return this.getToken(flashcardParser.BitVocabulary_1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    EQ() { return this.tryGetToken(flashcardParser.EQ, 0); }
    EQ2() { return this.tryGetToken(flashcardParser.EQ2, 0); }
    vside(i) {
        if (i === undefined) {
            return this.getRuleContexts(VsideContext);
        }
        else {
            return this.getRuleContext(i, VsideContext);
        }
    }
    OR(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.OR);
        }
        else {
            return this.getToken(flashcardParser.OR, i);
        }
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_vocab_1; }
    // @Override
    enterRule(listener) {
        if (listener.enterVocab_1) {
            listener.enterVocab_1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVocab_1) {
            listener.exitVocab_1(this);
        }
    }
}
exports.Vocab_1Context = Vocab_1Context;
class SxContext extends ParserRuleContext_1.ParserRuleContext {
    atdef() {
        return this.tryGetRuleContext(0, AtdefContext);
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    instruction() {
        return this.tryGetRuleContext(0, InstructionContext);
    }
    imagebit() {
        return this.tryGetRuleContext(0, ImagebitContext);
    }
    audiobit() {
        return this.tryGetRuleContext(0, AudiobitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_sx; }
    // @Override
    enterRule(listener) {
        if (listener.enterSx) {
            listener.enterSx(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSx) {
            listener.exitSx(this);
        }
    }
}
exports.SxContext = SxContext;
class SidexContext extends ParserRuleContext_1.ParserRuleContext {
    sx(i) {
        if (i === undefined) {
            return this.getRuleContexts(SxContext);
        }
        else {
            return this.getRuleContext(i, SxContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_sidex; }
    // @Override
    enterRule(listener) {
        if (listener.enterSidex) {
            listener.enterSidex(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSidex) {
            listener.exitSidex(this);
        }
    }
}
exports.SidexContext = SidexContext;
class Sidex_NLContext extends ParserRuleContext_1.ParserRuleContext {
    bitElem() {
        return this.getRuleContext(0, BitElemContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_sidex_NL; }
    // @Override
    enterRule(listener) {
        if (listener.enterSidex_NL) {
            listener.enterSidex_NL(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSidex_NL) {
            listener.exitSidex_NL(this);
        }
    }
}
exports.Sidex_NLContext = Sidex_NLContext;
class SideContext extends ParserRuleContext_1.ParserRuleContext {
    sidex(i) {
        if (i === undefined) {
            return this.getRuleContexts(SidexContext);
        }
        else {
            return this.getRuleContext(i, SidexContext);
        }
    }
    OR(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.OR);
        }
        else {
            return this.getToken(flashcardParser.OR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_side; }
    // @Override
    enterRule(listener) {
        if (listener.enterSide) {
            listener.enterSide(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSide) {
            listener.exitSide(this);
        }
    }
}
exports.SideContext = SideContext;
class Side_NLContext extends ParserRuleContext_1.ParserRuleContext {
    sidex_NL(i) {
        if (i === undefined) {
            return this.getRuleContexts(Sidex_NLContext);
        }
        else {
            return this.getRuleContext(i, Sidex_NLContext);
        }
    }
    OR(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.OR);
        }
        else {
            return this.getToken(flashcardParser.OR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_side_NL; }
    // @Override
    enterRule(listener) {
        if (listener.enterSide_NL) {
            listener.enterSide_NL(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSide_NL) {
            listener.exitSide_NL(this);
        }
    }
}
exports.Side_NLContext = Side_NLContext;
class VsideContext extends ParserRuleContext_1.ParserRuleContext {
    sidex_NL() {
        return this.getRuleContext(0, Sidex_NLContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_vside; }
    // @Override
    enterRule(listener) {
        if (listener.enterVside) {
            listener.enterVside(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVside) {
            listener.exitVside(this);
        }
    }
}
exports.VsideContext = VsideContext;
class BitElemContext extends ParserRuleContext_1.ParserRuleContext {
    LIST_LINE() { return this.tryGetToken(flashcardParser.LIST_LINE, 0); }
    NOTBITMARK() { return this.tryGetToken(flashcardParser.NOTBITMARK, 0); }
    gap() {
        return this.tryGetRuleContext(0, GapContext);
    }
    atdef() {
        return this.tryGetRuleContext(0, AtdefContext);
    }
    reference() {
        return this.tryGetRuleContext(0, ReferenceContext);
    }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    title() {
        return this.tryGetRuleContext(0, TitleContext);
    }
    instruction() {
        return this.tryGetRuleContext(0, InstructionContext);
    }
    hint() {
        return this.tryGetRuleContext(0, HintContext);
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    bool_label() {
        return this.tryGetRuleContext(0, Bool_labelContext);
    }
    imagebit() {
        return this.tryGetRuleContext(0, ImagebitContext);
    }
    audiobit() {
        return this.tryGetRuleContext(0, AudiobitContext);
    }
    videobit() {
        return this.tryGetRuleContext(0, VideobitContext);
    }
    articlebit() {
        return this.tryGetRuleContext(0, ArticlebitContext);
    }
    documentbit() {
        return this.tryGetRuleContext(0, DocumentbitContext);
    }
    appbit() {
        return this.tryGetRuleContext(0, AppbitContext);
    }
    websitebit() {
        return this.tryGetRuleContext(0, WebsitebitContext);
    }
    stillimagefilmbit() {
        return this.tryGetRuleContext(0, StillimagefilmbitContext);
    }
    angleref() {
        return this.tryGetRuleContext(0, AnglerefContext);
    }
    anchor() {
        return this.tryGetRuleContext(0, AnchorContext);
    }
    sp() {
        return this.tryGetRuleContext(0, SpContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_bitElem; }
    // @Override
    enterRule(listener) {
        if (listener.enterBitElem) {
            listener.enterBitElem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBitElem) {
            listener.exitBitElem(this);
        }
    }
}
exports.BitElemContext = BitElemContext;
class ResourceContext extends ParserRuleContext_1.ParserRuleContext {
    bitElem() {
        return this.getRuleContext(0, BitElemContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_resource; }
    // @Override
    enterRule(listener) {
        if (listener.enterResource) {
            listener.enterResource(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResource) {
            listener.exitResource(this);
        }
    }
}
exports.ResourceContext = ResourceContext;
class GapContext extends ParserRuleContext_1.ParserRuleContext {
    single_gap(i) {
        if (i === undefined) {
            return this.getRuleContexts(Single_gapContext);
        }
        else {
            return this.getRuleContext(i, Single_gapContext);
        }
    }
    instruction(i) {
        if (i === undefined) {
            return this.getRuleContexts(InstructionContext);
        }
        else {
            return this.getRuleContext(i, InstructionContext);
        }
    }
    hint(i) {
        if (i === undefined) {
            return this.getRuleContexts(HintContext);
        }
        else {
            return this.getRuleContext(i, HintContext);
        }
    }
    item(i) {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }
        else {
            return this.getRuleContext(i, ItemContext);
        }
    }
    example(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExampleContext);
        }
        else {
            return this.getRuleContext(i, ExampleContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_gap; }
    // @Override
    enterRule(listener) {
        if (listener.enterGap) {
            listener.enterGap(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGap) {
            listener.exitGap(this);
        }
    }
}
exports.GapContext = GapContext;
class Single_gapContext extends ParserRuleContext_1.ParserRuleContext {
    OPU() { return this.getToken(flashcardParser.OPU, 0); }
    clnsp() {
        return this.getRuleContext(0, ClnspContext);
    }
    NUMERIC() { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
    STRING() { return this.tryGetToken(flashcardParser.STRING, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_single_gap; }
    // @Override
    enterRule(listener) {
        if (listener.enterSingle_gap) {
            listener.enterSingle_gap(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSingle_gap) {
            listener.exitSingle_gap(this);
        }
    }
}
exports.Single_gapContext = Single_gapContext;
class Bullet_itemContext extends ParserRuleContext_1.ParserRuleContext {
    OPBUL() { return this.getToken(flashcardParser.OPBUL, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    atpoint() {
        return this.tryGetRuleContext(0, AtpointContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_bullet_item; }
    // @Override
    enterRule(listener) {
        if (listener.enterBullet_item) {
            listener.enterBullet_item(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBullet_item) {
            listener.exitBullet_item(this);
        }
    }
}
exports.Bullet_itemContext = Bullet_itemContext;
class AtpointContext extends ParserRuleContext_1.ParserRuleContext {
    AtPoints() { return this.getToken(flashcardParser.AtPoints, 0); }
    NUMERIC() { return this.getToken(flashcardParser.NUMERIC, 0); }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_atpoint; }
    // @Override
    enterRule(listener) {
        if (listener.enterAtpoint) {
            listener.enterAtpoint(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAtpoint) {
            listener.exitAtpoint(this);
        }
    }
}
exports.AtpointContext = AtpointContext;
class FormatContext extends ParserRuleContext_1.ParserRuleContext {
    resource_format(i) {
        if (i === undefined) {
            return this.getRuleContexts(Resource_formatContext);
        }
        else {
            return this.getRuleContext(i, Resource_formatContext);
        }
    }
    ColonText(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.ColonText);
        }
        else {
            return this.getToken(flashcardParser.ColonText, i);
        }
    }
    ColonJson(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.ColonJson);
        }
        else {
            return this.getToken(flashcardParser.ColonJson, i);
        }
    }
    resource_format_extra(i) {
        if (i === undefined) {
            return this.getRuleContexts(Resource_format_extraContext);
        }
        else {
            return this.getRuleContext(i, Resource_format_extraContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterFormat) {
            listener.enterFormat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFormat) {
            listener.exitFormat(this);
        }
    }
}
exports.FormatContext = FormatContext;
class Resource_formatContext extends ParserRuleContext_1.ParserRuleContext {
    BitmarkMinus() { return this.tryGetToken(flashcardParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(flashcardParser.BitmarkPlus, 0); }
    Prosemirror() { return this.tryGetToken(flashcardParser.Prosemirror, 0); }
    Placeholder() { return this.tryGetToken(flashcardParser.Placeholder, 0); }
    ColonJson() { return this.tryGetToken(flashcardParser.ColonJson, 0); }
    AmpArticle() { return this.tryGetToken(flashcardParser.AmpArticle, 0); }
    AmpDocument() { return this.tryGetToken(flashcardParser.AmpDocument, 0); }
    AmpWebsite() { return this.tryGetToken(flashcardParser.AmpWebsite, 0); }
    AmpStillImageFilm() { return this.tryGetToken(flashcardParser.AmpStillImageFilm, 0); }
    AmpAudioLink() { return this.tryGetToken(flashcardParser.AmpAudioLink, 0); }
    AmpImageLink() { return this.tryGetToken(flashcardParser.AmpImageLink, 0); }
    AmpVideoLink() { return this.tryGetToken(flashcardParser.AmpVideoLink, 0); }
    AmpArticleLink() { return this.tryGetToken(flashcardParser.AmpArticleLink, 0); }
    AmpDocumentLink() { return this.tryGetToken(flashcardParser.AmpDocumentLink, 0); }
    AmpAppLink() { return this.tryGetToken(flashcardParser.AmpAppLink, 0); }
    AmpWebsiteLink() { return this.tryGetToken(flashcardParser.AmpWebsiteLink, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(flashcardParser.AmpStillImageFilmLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(flashcardParser.AmpVideoEmbed, 0); }
    AmpAudioEmbed() { return this.tryGetToken(flashcardParser.AmpAudioEmbed, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(flashcardParser.AmpDocumentEmbed, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(flashcardParser.AmpStillImageFilmEmbed, 0); }
    AmpDocumentDownload() { return this.tryGetToken(flashcardParser.AmpDocumentDownload, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_resource_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterResource_format) {
            listener.enterResource_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResource_format) {
            listener.exitResource_format(this);
        }
    }
}
exports.Resource_formatContext = Resource_formatContext;
class Resource_format_extraContext extends ParserRuleContext_1.ParserRuleContext {
    image_format() {
        return this.tryGetRuleContext(0, Image_formatContext);
    }
    audio_format() {
        return this.tryGetRuleContext(0, Audio_formatContext);
    }
    video_format() {
        return this.tryGetRuleContext(0, Video_formatContext);
    }
    article_format() {
        return this.tryGetRuleContext(0, Article_formatContext);
    }
    document_format() {
        return this.tryGetRuleContext(0, Document_formatContext);
    }
    app_format() {
        return this.tryGetRuleContext(0, App_formatContext);
    }
    website_format() {
        return this.tryGetRuleContext(0, Website_formatContext);
    }
    stillimagefilm_format() {
        return this.tryGetRuleContext(0, Stillimagefilm_formatContext);
    }
    AmpPdf() { return this.tryGetToken(flashcardParser.AmpPdf, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_resource_format_extra; }
    // @Override
    enterRule(listener) {
        if (listener.enterResource_format_extra) {
            listener.enterResource_format_extra(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResource_format_extra) {
            listener.exitResource_format_extra(this);
        }
    }
}
exports.Resource_format_extraContext = Resource_format_extraContext;
class Format2Context extends ParserRuleContext_1.ParserRuleContext {
    BitmarkMinus() { return this.tryGetToken(flashcardParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(flashcardParser.BitmarkPlus, 0); }
    ColonText() { return this.tryGetToken(flashcardParser.ColonText, 0); }
    Placeholder() { return this.tryGetToken(flashcardParser.Placeholder, 0); }
    ColonJson() { return this.tryGetToken(flashcardParser.ColonJson, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_format2; }
    // @Override
    enterRule(listener) {
        if (listener.enterFormat2) {
            listener.enterFormat2(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFormat2) {
            listener.exitFormat2(this);
        }
    }
}
exports.Format2Context = Format2Context;
class Image_formatContext extends ParserRuleContext_1.ParserRuleContext {
    AmpImage() { return this.tryGetToken(flashcardParser.AmpImage, 0); }
    Image_type() { return this.tryGetToken(flashcardParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(flashcardParser.DotArticleAtt, 0); }
    AmpImageLink() { return this.tryGetToken(flashcardParser.AmpImageLink, 0); }
    AmpImageZoom() { return this.tryGetToken(flashcardParser.AmpImageZoom, 0); }
    AmpImageWAudio() { return this.tryGetToken(flashcardParser.AmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_image_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterImage_format) {
            listener.enterImage_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImage_format) {
            listener.exitImage_format(this);
        }
    }
}
exports.Image_formatContext = Image_formatContext;
class Video_formatContext extends ParserRuleContext_1.ParserRuleContext {
    AmpVideo() { return this.tryGetToken(flashcardParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(flashcardParser.AmpVideoLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(flashcardParser.AmpVideoEmbed, 0); }
    COLON() { return this.tryGetToken(flashcardParser.COLON, 0); }
    Video_type() { return this.tryGetToken(flashcardParser.Video_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_video_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterVideo_format) {
            listener.enterVideo_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVideo_format) {
            listener.exitVideo_format(this);
        }
    }
}
exports.Video_formatContext = Video_formatContext;
class Article_formatContext extends ParserRuleContext_1.ParserRuleContext {
    AmpArticle() { return this.tryGetToken(flashcardParser.AmpArticle, 0); }
    AmpArticleLink() { return this.tryGetToken(flashcardParser.AmpArticleLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_article_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterArticle_format) {
            listener.enterArticle_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArticle_format) {
            listener.exitArticle_format(this);
        }
    }
}
exports.Article_formatContext = Article_formatContext;
class Document_formatContext extends ParserRuleContext_1.ParserRuleContext {
    AmpDocument() { return this.tryGetToken(flashcardParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(flashcardParser.AmpDocumentLink, 0); }
    AmpDocumentDownload() { return this.tryGetToken(flashcardParser.AmpDocumentDownload, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(flashcardParser.AmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_document_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterDocument_format) {
            listener.enterDocument_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDocument_format) {
            listener.exitDocument_format(this);
        }
    }
}
exports.Document_formatContext = Document_formatContext;
class App_formatContext extends ParserRuleContext_1.ParserRuleContext {
    AmpApp() { return this.tryGetToken(flashcardParser.AmpApp, 0); }
    AmpAppLink() { return this.tryGetToken(flashcardParser.AmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_app_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterApp_format) {
            listener.enterApp_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitApp_format) {
            listener.exitApp_format(this);
        }
    }
}
exports.App_formatContext = App_formatContext;
class Website_formatContext extends ParserRuleContext_1.ParserRuleContext {
    AmpWebsite() { return this.tryGetToken(flashcardParser.AmpWebsite, 0); }
    AmpWebsiteLink() { return this.tryGetToken(flashcardParser.AmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_website_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterWebsite_format) {
            listener.enterWebsite_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWebsite_format) {
            listener.exitWebsite_format(this);
        }
    }
}
exports.Website_formatContext = Website_formatContext;
class Stillimagefilm_formatContext extends ParserRuleContext_1.ParserRuleContext {
    AmpStillImageFilm() { return this.tryGetToken(flashcardParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(flashcardParser.AmpStillImageFilmLink, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(flashcardParser.AmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_stillimagefilm_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterStillimagefilm_format) {
            listener.enterStillimagefilm_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStillimagefilm_format) {
            listener.exitStillimagefilm_format(this);
        }
    }
}
exports.Stillimagefilm_formatContext = Stillimagefilm_formatContext;
class Op_article_formatContext extends ParserRuleContext_1.ParserRuleContext {
    OpAmpArticleLink() { return this.tryGetToken(flashcardParser.OpAmpArticleLink, 0); }
    OpAmpArticle() { return this.tryGetToken(flashcardParser.OpAmpArticle, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_op_article_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterOp_article_format) {
            listener.enterOp_article_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOp_article_format) {
            listener.exitOp_article_format(this);
        }
    }
}
exports.Op_article_formatContext = Op_article_formatContext;
class Op_document_formatContext extends ParserRuleContext_1.ParserRuleContext {
    OpAmpDocumentLink() { return this.tryGetToken(flashcardParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(flashcardParser.OpAmpDocument, 0); }
    OpAmpDocumentDownload() { return this.tryGetToken(flashcardParser.OpAmpDocumentDownload, 0); }
    OpAmpDocumentEmbed() { return this.tryGetToken(flashcardParser.OpAmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_op_document_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterOp_document_format) {
            listener.enterOp_document_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOp_document_format) {
            listener.exitOp_document_format(this);
        }
    }
}
exports.Op_document_formatContext = Op_document_formatContext;
class Op_app_formatContext extends ParserRuleContext_1.ParserRuleContext {
    OpAmpApp() { return this.tryGetToken(flashcardParser.OpAmpApp, 0); }
    OpAmpAppLink() { return this.tryGetToken(flashcardParser.OpAmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_op_app_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterOp_app_format) {
            listener.enterOp_app_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOp_app_format) {
            listener.exitOp_app_format(this);
        }
    }
}
exports.Op_app_formatContext = Op_app_formatContext;
class Op_website_formatContext extends ParserRuleContext_1.ParserRuleContext {
    OpAmpWebsite() { return this.tryGetToken(flashcardParser.OpAmpWebsite, 0); }
    OpAmpWebsiteLink() { return this.tryGetToken(flashcardParser.OpAmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_op_website_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterOp_website_format) {
            listener.enterOp_website_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOp_website_format) {
            listener.exitOp_website_format(this);
        }
    }
}
exports.Op_website_formatContext = Op_website_formatContext;
class Op_video_formatContext extends ParserRuleContext_1.ParserRuleContext {
    OpAmpVideo() { return this.tryGetToken(flashcardParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(flashcardParser.COLON, 0); }
    Video_type() { return this.tryGetToken(flashcardParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(flashcardParser.OpAmpVideoLink, 0); }
    OpAmpVideoEmbed() { return this.tryGetToken(flashcardParser.OpAmpVideoEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_op_video_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterOp_video_format) {
            listener.enterOp_video_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOp_video_format) {
            listener.exitOp_video_format(this);
        }
    }
}
exports.Op_video_formatContext = Op_video_formatContext;
class Op_stillimagefilm_formatContext extends ParserRuleContext_1.ParserRuleContext {
    OpAmpStillImageFilm() { return this.tryGetToken(flashcardParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(flashcardParser.OpAmpStillImageFilmLink, 0); }
    OpAmpStillImageFilmEmbed() { return this.tryGetToken(flashcardParser.OpAmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_op_stillimagefilm_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterOp_stillimagefilm_format) {
            listener.enterOp_stillimagefilm_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOp_stillimagefilm_format) {
            listener.exitOp_stillimagefilm_format(this);
        }
    }
}
exports.Op_stillimagefilm_formatContext = Op_stillimagefilm_formatContext;
class ArticlebitContext extends ParserRuleContext_1.ParserRuleContext {
    op_article_format() {
        return this.tryGetRuleContext(0, Op_article_formatContext);
    }
    COLON() { return this.tryGetToken(flashcardParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.tryGetToken(flashcardParser.CL, 0); }
    ArticleText() { return this.tryGetToken(flashcardParser.ArticleText, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_articlebit; }
    // @Override
    enterRule(listener) {
        if (listener.enterArticlebit) {
            listener.enterArticlebit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArticlebit) {
            listener.exitArticlebit(this);
        }
    }
}
exports.ArticlebitContext = ArticlebitContext;
class DocumentbitContext extends ParserRuleContext_1.ParserRuleContext {
    op_document_format() {
        return this.getRuleContext(0, Op_document_formatContext);
    }
    COLON() { return this.getToken(flashcardParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.CL);
        }
        else {
            return this.getToken(flashcardParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(flashcardParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_documentbit; }
    // @Override
    enterRule(listener) {
        if (listener.enterDocumentbit) {
            listener.enterDocumentbit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDocumentbit) {
            listener.exitDocumentbit(this);
        }
    }
}
exports.DocumentbitContext = DocumentbitContext;
class WebsitebitContext extends ParserRuleContext_1.ParserRuleContext {
    op_website_format() {
        return this.getRuleContext(0, Op_website_formatContext);
    }
    COLON() { return this.getToken(flashcardParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.CL);
        }
        else {
            return this.getToken(flashcardParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(flashcardParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_websitebit; }
    // @Override
    enterRule(listener) {
        if (listener.enterWebsitebit) {
            listener.enterWebsitebit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWebsitebit) {
            listener.exitWebsitebit(this);
        }
    }
}
exports.WebsitebitContext = WebsitebitContext;
class AppbitContext extends ParserRuleContext_1.ParserRuleContext {
    op_app_format() {
        return this.getRuleContext(0, Op_app_formatContext);
    }
    COLON() { return this.getToken(flashcardParser.COLON, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.CL);
        }
        else {
            return this.getToken(flashcardParser.CL, i);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(flashcardParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_appbit; }
    // @Override
    enterRule(listener) {
        if (listener.enterAppbit) {
            listener.enterAppbit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAppbit) {
            listener.exitAppbit(this);
        }
    }
}
exports.AppbitContext = AppbitContext;
class StillimagefilmbitContext extends ParserRuleContext_1.ParserRuleContext {
    stillimg_one() {
        return this.getRuleContext(0, Stillimg_oneContext);
    }
    resource_chained(i) {
        if (i === undefined) {
            return this.getRuleContexts(Resource_chainedContext);
        }
        else {
            return this.getRuleContext(i, Resource_chainedContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_stillimagefilmbit; }
    // @Override
    enterRule(listener) {
        if (listener.enterStillimagefilmbit) {
            listener.enterStillimagefilmbit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStillimagefilmbit) {
            listener.exitStillimagefilmbit(this);
        }
    }
}
exports.StillimagefilmbitContext = StillimagefilmbitContext;
class Stillimg_oneContext extends ParserRuleContext_1.ParserRuleContext {
    op_stillimagefilm_format() {
        return this.getRuleContext(0, Op_stillimagefilm_formatContext);
    }
    COLON() { return this.getToken(flashcardParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.S);
        }
        else {
            return this.getToken(flashcardParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_stillimg_one; }
    // @Override
    enterRule(listener) {
        if (listener.enterStillimg_one) {
            listener.enterStillimg_one(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStillimg_one) {
            listener.exitStillimg_one(this);
        }
    }
}
exports.Stillimg_oneContext = Stillimg_oneContext;
class VideobitContext extends ParserRuleContext_1.ParserRuleContext {
    video_one() {
        return this.getRuleContext(0, Video_oneContext);
    }
    resource_chained(i) {
        if (i === undefined) {
            return this.getRuleContexts(Resource_chainedContext);
        }
        else {
            return this.getRuleContext(i, Resource_chainedContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_videobit; }
    // @Override
    enterRule(listener) {
        if (listener.enterVideobit) {
            listener.enterVideobit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVideobit) {
            listener.exitVideobit(this);
        }
    }
}
exports.VideobitContext = VideobitContext;
class Video_oneContext extends ParserRuleContext_1.ParserRuleContext {
    op_video_format() {
        return this.getRuleContext(0, Op_video_formatContext);
    }
    COLON() { return this.getToken(flashcardParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.CL);
        }
        else {
            return this.getToken(flashcardParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(flashcardParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_video_one; }
    // @Override
    enterRule(listener) {
        if (listener.enterVideo_one) {
            listener.enterVideo_one(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVideo_one) {
            listener.exitVideo_one(this);
        }
    }
}
exports.Video_oneContext = Video_oneContext;
class ImagebitContext extends ParserRuleContext_1.ParserRuleContext {
    image_one() {
        return this.getRuleContext(0, Image_oneContext);
    }
    image_chained(i) {
        if (i === undefined) {
            return this.getRuleContexts(Image_chainedContext);
        }
        else {
            return this.getRuleContext(i, Image_chainedContext);
        }
    }
    NL() { return this.tryGetToken(flashcardParser.NL, 0); }
    ShowInIndex() { return this.tryGetToken(flashcardParser.ShowInIndex, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_imagebit; }
    // @Override
    enterRule(listener) {
        if (listener.enterImagebit) {
            listener.enterImagebit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImagebit) {
            listener.exitImagebit(this);
        }
    }
}
exports.ImagebitContext = ImagebitContext;
class Image_oneContext extends ParserRuleContext_1.ParserRuleContext {
    op_image_format() {
        return this.getRuleContext(0, Op_image_formatContext);
    }
    COLON() { return this.getToken(flashcardParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.S);
        }
        else {
            return this.getToken(flashcardParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_image_one; }
    // @Override
    enterRule(listener) {
        if (listener.enterImage_one) {
            listener.enterImage_one(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImage_one) {
            listener.exitImage_one(this);
        }
    }
}
exports.Image_oneContext = Image_oneContext;
class Op_image_formatContext extends ParserRuleContext_1.ParserRuleContext {
    OpAmpImage() { return this.tryGetToken(flashcardParser.OpAmpImage, 0); }
    Image_type() { return this.tryGetToken(flashcardParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(flashcardParser.DotArticleAtt, 0); }
    OpAmpImageLink() { return this.tryGetToken(flashcardParser.OpAmpImageLink, 0); }
    OpAmpImageZoom() { return this.tryGetToken(flashcardParser.OpAmpImageZoom, 0); }
    OpAmpImageWAudio() { return this.tryGetToken(flashcardParser.OpAmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_op_image_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterOp_image_format) {
            listener.enterOp_image_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOp_image_format) {
            listener.exitOp_image_format(this);
        }
    }
}
exports.Op_image_formatContext = Op_image_formatContext;
class Image_chainedContext extends ParserRuleContext_1.ParserRuleContext {
    AtSrc() { return this.tryGetToken(flashcardParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(flashcardParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(flashcardParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(flashcardParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(flashcardParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(flashcardParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(flashcardParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(flashcardParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(flashcardParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_image_chained; }
    // @Override
    enterRule(listener) {
        if (listener.enterImage_chained) {
            listener.enterImage_chained(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImage_chained) {
            listener.exitImage_chained(this);
        }
    }
}
exports.Image_chainedContext = Image_chainedContext;
class Image_chained4matchContext extends ParserRuleContext_1.ParserRuleContext {
    AtSrc() { return this.tryGetToken(flashcardParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(flashcardParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(flashcardParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(flashcardParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(flashcardParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(flashcardParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(flashcardParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(flashcardParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(flashcardParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_image_chained4match; }
    // @Override
    enterRule(listener) {
        if (listener.enterImage_chained4match) {
            listener.enterImage_chained4match(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImage_chained4match) {
            listener.exitImage_chained4match(this);
        }
    }
}
exports.Image_chained4matchContext = Image_chained4matchContext;
class AudiobitContext extends ParserRuleContext_1.ParserRuleContext {
    audio_one() {
        return this.getRuleContext(0, Audio_oneContext);
    }
    resource_chained(i) {
        if (i === undefined) {
            return this.getRuleContexts(Resource_chainedContext);
        }
        else {
            return this.getRuleContext(i, Resource_chainedContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_audiobit; }
    // @Override
    enterRule(listener) {
        if (listener.enterAudiobit) {
            listener.enterAudiobit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAudiobit) {
            listener.exitAudiobit(this);
        }
    }
}
exports.AudiobitContext = AudiobitContext;
class Audio_oneContext extends ParserRuleContext_1.ParserRuleContext {
    op_audio_format() {
        return this.getRuleContext(0, Op_audio_formatContext);
    }
    COLON() { return this.getToken(flashcardParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.CL);
        }
        else {
            return this.getToken(flashcardParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(flashcardParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_audio_one; }
    // @Override
    enterRule(listener) {
        if (listener.enterAudio_one) {
            listener.enterAudio_one(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAudio_one) {
            listener.exitAudio_one(this);
        }
    }
}
exports.Audio_oneContext = Audio_oneContext;
class Audio_formatContext extends ParserRuleContext_1.ParserRuleContext {
    AmpAudio() { return this.tryGetToken(flashcardParser.AmpAudio, 0); }
    COLON() { return this.tryGetToken(flashcardParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(flashcardParser.Audio_type, 0); }
    AmpAudioLink() { return this.tryGetToken(flashcardParser.AmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_audio_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterAudio_format) {
            listener.enterAudio_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAudio_format) {
            listener.exitAudio_format(this);
        }
    }
}
exports.Audio_formatContext = Audio_formatContext;
class Op_audio_formatContext extends ParserRuleContext_1.ParserRuleContext {
    OpAmpAudio() { return this.tryGetToken(flashcardParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(flashcardParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(flashcardParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(flashcardParser.OpAmpAudioLink, 0); }
    OpAmpAudioEmbed() { return this.tryGetToken(flashcardParser.OpAmpAudioEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_op_audio_format; }
    // @Override
    enterRule(listener) {
        if (listener.enterOp_audio_format) {
            listener.enterOp_audio_format(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOp_audio_format) {
            listener.exitOp_audio_format(this);
        }
    }
}
exports.Op_audio_formatContext = Op_audio_formatContext;
class Resource_chainedContext extends ParserRuleContext_1.ParserRuleContext {
    COLON() { return this.tryGetToken(flashcardParser.COLON, 0); }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    OPA() { return this.tryGetToken(flashcardParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtSrc() { return this.tryGetToken(flashcardParser.AtSrc, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.S);
        }
        else {
            return this.getToken(flashcardParser.S, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    NUMERIC() { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(flashcardParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(flashcardParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(flashcardParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(flashcardParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(flashcardParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(flashcardParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(flashcardParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_resource_chained; }
    // @Override
    enterRule(listener) {
        if (listener.enterResource_chained) {
            listener.enterResource_chained(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResource_chained) {
            listener.exitResource_chained(this);
        }
    }
}
exports.Resource_chainedContext = Resource_chainedContext;
class TelephoneContext extends ParserRuleContext_1.ParserRuleContext {
    TEL() { return this.getToken(flashcardParser.TEL, 0); }
    PLUS() { return this.getToken(flashcardParser.PLUS, 0); }
    NUMERIC() { return this.getToken(flashcardParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_telephone; }
    // @Override
    enterRule(listener) {
        if (listener.enterTelephone) {
            listener.enterTelephone(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTelephone) {
            listener.exitTelephone(this);
        }
    }
}
exports.TelephoneContext = TelephoneContext;
class UrlContext extends ParserRuleContext_1.ParserRuleContext {
    URL() { return this.getToken(flashcardParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_url; }
    // @Override
    enterRule(listener) {
        if (listener.enterUrl) {
            listener.enterUrl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUrl) {
            listener.exitUrl(this);
        }
    }
}
exports.UrlContext = UrlContext;
class ItemContext extends ParserRuleContext_1.ParserRuleContext {
    OPC() { return this.getToken(flashcardParser.OPC, 0); }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.S);
        }
        else {
            return this.getToken(flashcardParser.S, i);
        }
    }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.COLON);
        }
        else {
            return this.getToken(flashcardParser.COLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_item; }
    // @Override
    enterRule(listener) {
        if (listener.enterItem) {
            listener.enterItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitItem) {
            listener.exitItem(this);
        }
    }
}
exports.ItemContext = ItemContext;
class LeadContext extends ParserRuleContext_1.ParserRuleContext {
    OPC() { return this.getToken(flashcardParser.OPC, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.COLON);
        }
        else {
            return this.getToken(flashcardParser.COLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_lead; }
    // @Override
    enterRule(listener) {
        if (listener.enterLead) {
            listener.enterLead(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLead) {
            listener.exitLead(this);
        }
    }
}
exports.LeadContext = LeadContext;
class AnglerefContext extends ParserRuleContext_1.ParserRuleContext {
    OPRANGLES() { return this.tryGetToken(flashcardParser.OPRANGLES, 0); }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(flashcardParser.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_angleref; }
    // @Override
    enterRule(listener) {
        if (listener.enterAngleref) {
            listener.enterAngleref(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAngleref) {
            listener.exitAngleref(this);
        }
    }
}
exports.AnglerefContext = AnglerefContext;
class ExampleContext extends ParserRuleContext_1.ParserRuleContext {
    AtExamplecl() { return this.tryGetToken(flashcardParser.AtExamplecl, 0); }
    AtExampleWithStr() { return this.tryGetToken(flashcardParser.AtExampleWithStr, 0); }
    AtExamplecol() { return this.tryGetToken(flashcardParser.AtExamplecol, 0); }
    EOF() { return this.tryGetToken(flashcardParser.EOF, 0); }
    SENTENCE() { return this.tryGetToken(flashcardParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_example; }
    // @Override
    enterRule(listener) {
        if (listener.enterExample) {
            listener.enterExample(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExample) {
            listener.exitExample(this);
        }
    }
}
exports.ExampleContext = ExampleContext;
class Bracketed_textContext extends ParserRuleContext_1.ParserRuleContext {
    BracEnclose() { return this.getToken(flashcardParser.BracEnclose, 0); }
    CL() { return this.tryGetToken(flashcardParser.CL, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.S);
        }
        else {
            return this.getToken(flashcardParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(flashcardParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_bracketed_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterBracketed_text) {
            listener.enterBracketed_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBracketed_text) {
            listener.exitBracketed_text(this);
        }
    }
}
exports.Bracketed_textContext = Bracketed_textContext;
class ReferenceContext extends ParserRuleContext_1.ParserRuleContext {
    AtReference() { return this.getToken(flashcardParser.AtReference, 0); }
    CL() { return this.tryGetToken(flashcardParser.CL, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.COLON);
        }
        else {
            return this.getToken(flashcardParser.COLON, i);
        }
    }
    URL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.URL);
        }
        else {
            return this.getToken(flashcardParser.URL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(flashcardParser.EOF, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.S);
        }
        else {
            return this.getToken(flashcardParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_reference; }
    // @Override
    enterRule(listener) {
        if (listener.enterReference) {
            listener.enterReference(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReference) {
            listener.exitReference(this);
        }
    }
}
exports.ReferenceContext = ReferenceContext;
class ProgressContext extends ParserRuleContext_1.ParserRuleContext {
    AtProgress() { return this.getToken(flashcardParser.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_progress; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgress) {
            listener.enterProgress(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgress) {
            listener.exitProgress(this);
        }
    }
}
exports.ProgressContext = ProgressContext;
class DatepropContext extends ParserRuleContext_1.ParserRuleContext {
    AtDate() { return this.getToken(flashcardParser.AtDate, 0); }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.COLON);
        }
        else {
            return this.getToken(flashcardParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    dateprop_chained() {
        return this.tryGetRuleContext(0, Dateprop_chainedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_dateprop; }
    // @Override
    enterRule(listener) {
        if (listener.enterDateprop) {
            listener.enterDateprop(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateprop) {
            listener.exitDateprop(this);
        }
    }
}
exports.DatepropContext = DatepropContext;
class Dateprop_chainedContext extends ParserRuleContext_1.ParserRuleContext {
    AtDate() { return this.getToken(flashcardParser.AtDate, 0); }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.COLON);
        }
        else {
            return this.getToken(flashcardParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_dateprop_chained; }
    // @Override
    enterRule(listener) {
        if (listener.enterDateprop_chained) {
            listener.enterDateprop_chained(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateprop_chained) {
            listener.exitDateprop_chained(this);
        }
    }
}
exports.Dateprop_chainedContext = Dateprop_chainedContext;
class InstructionContext extends ParserRuleContext_1.ParserRuleContext {
    OPB() { return this.getToken(flashcardParser.OPB, 0); }
    CL() { return this.tryGetToken(flashcardParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.S);
        }
        else {
            return this.getToken(flashcardParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(flashcardParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_instruction; }
    // @Override
    enterRule(listener) {
        if (listener.enterInstruction) {
            listener.enterInstruction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstruction) {
            listener.exitInstruction(this);
        }
    }
}
exports.InstructionContext = InstructionContext;
class HintContext extends ParserRuleContext_1.ParserRuleContext {
    OPQ() { return this.getToken(flashcardParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.CL);
        }
        else {
            return this.getToken(flashcardParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_hint; }
    // @Override
    enterRule(listener) {
        if (listener.enterHint) {
            listener.enterHint(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHint) {
            listener.exitHint(this);
        }
    }
}
exports.HintContext = HintContext;
class TitleContext extends ParserRuleContext_1.ParserRuleContext {
    OPHASH() { return this.getToken(flashcardParser.OPHASH, 0); }
    CL() { return this.tryGetToken(flashcardParser.CL, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(flashcardParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_title; }
    // @Override
    enterRule(listener) {
        if (listener.enterTitle) {
            listener.enterTitle(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTitle) {
            listener.exitTitle(this);
        }
    }
}
exports.TitleContext = TitleContext;
class Bool_labelContext extends ParserRuleContext_1.ParserRuleContext {
    AtLabeltrue() { return this.tryGetToken(flashcardParser.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    AtLabelfalse() { return this.tryGetToken(flashcardParser.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_bool_label; }
    // @Override
    enterRule(listener) {
        if (listener.enterBool_label) {
            listener.enterBool_label(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBool_label) {
            listener.exitBool_label(this);
        }
    }
}
exports.Bool_labelContext = Bool_labelContext;
class Progress_pointsContext extends ParserRuleContext_1.ParserRuleContext {
    AtProgressPoints() { return this.getToken(flashcardParser.AtProgressPoints, 0); }
    COLON() { return this.getToken(flashcardParser.COLON, 0); }
    NUMERIC() { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_progress_points; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgress_points) {
            listener.enterProgress_points(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgress_points) {
            listener.exitProgress_points(this);
        }
    }
}
exports.Progress_pointsContext = Progress_pointsContext;
class IstrackedContext extends ParserRuleContext_1.ParserRuleContext {
    OpAtIsTracked() { return this.getToken(flashcardParser.OpAtIsTracked, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_istracked; }
    // @Override
    enterRule(listener) {
        if (listener.enterIstracked) {
            listener.enterIstracked(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIstracked) {
            listener.exitIstracked(this);
        }
    }
}
exports.IstrackedContext = IstrackedContext;
class IsinfoonlyContext extends ParserRuleContext_1.ParserRuleContext {
    OpAtIsInfoOnly() { return this.getToken(flashcardParser.OpAtIsInfoOnly, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_isinfoonly; }
    // @Override
    enterRule(listener) {
        if (listener.enterIsinfoonly) {
            listener.enterIsinfoonly(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIsinfoonly) {
            listener.exitIsinfoonly(this);
        }
    }
}
exports.IsinfoonlyContext = IsinfoonlyContext;
class AtdefContext extends ParserRuleContext_1.ParserRuleContext {
    atdef_(i) {
        if (i === undefined) {
            return this.getRuleContexts(Atdef_Context);
        }
        else {
            return this.getRuleContext(i, Atdef_Context);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_atdef; }
    // @Override
    enterRule(listener) {
        if (listener.enterAtdef) {
            listener.enterAtdef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAtdef) {
            listener.exitAtdef(this);
        }
    }
}
exports.AtdefContext = AtdefContext;
class Atdef_Context extends ParserRuleContext_1.ParserRuleContext {
    OPA() { return this.tryGetToken(flashcardParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.tryGetToken(flashcardParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.COLON);
        }
        else {
            return this.getToken(flashcardParser.COLON, i);
        }
    }
    DBLCOLON() { return this.tryGetToken(flashcardParser.DBLCOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    OpAtCopyright() { return this.tryGetToken(flashcardParser.OpAtCopyright, 0); }
    AtSampleSolution() { return this.tryGetToken(flashcardParser.AtSampleSolution, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_atdef_; }
    // @Override
    enterRule(listener) {
        if (listener.enterAtdef_) {
            listener.enterAtdef_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAtdef_) {
            listener.exitAtdef_(this);
        }
    }
}
exports.Atdef_Context = Atdef_Context;
class DollaransContext extends ParserRuleContext_1.ParserRuleContext {
    OPDOLL() { return this.getToken(flashcardParser.OPDOLL, 0); }
    CL() { return this.tryGetToken(flashcardParser.CL, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.COLON);
        }
        else {
            return this.getToken(flashcardParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(flashcardParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_dollarans; }
    // @Override
    enterRule(listener) {
        if (listener.enterDollarans) {
            listener.enterDollarans(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDollarans) {
            listener.exitDollarans(this);
        }
    }
}
exports.DollaransContext = DollaransContext;
class AnchorContext extends ParserRuleContext_1.ParserRuleContext {
    OPDANGLE() { return this.getToken(flashcardParser.OPDANGLE, 0); }
    CL() { return this.getToken(flashcardParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_anchor; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnchor) {
            listener.enterAnchor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnchor) {
            listener.exitAnchor(this);
        }
    }
}
exports.AnchorContext = AnchorContext;
class DcolonContext extends ParserRuleContext_1.ParserRuleContext {
    DBLCOLON() { return this.getToken(flashcardParser.DBLCOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_dcolon; }
    // @Override
    enterRule(listener) {
        if (listener.enterDcolon) {
            listener.enterDcolon(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDcolon) {
            listener.exitDcolon(this);
        }
    }
}
exports.DcolonContext = DcolonContext;
class LinesContext extends ParserRuleContext_1.ParserRuleContext {
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_lines; }
    // @Override
    enterRule(listener) {
        if (listener.enterLines) {
            listener.enterLines(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLines) {
            listener.exitLines(this);
        }
    }
}
exports.LinesContext = LinesContext;
class S_and_wContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.tryGetToken(flashcardParser.STRING, 0); }
    NUMERIC() { return this.tryGetToken(flashcardParser.NUMERIC, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.S);
        }
        else {
            return this.getToken(flashcardParser.S, i);
        }
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    OPS() { return this.tryGetToken(flashcardParser.OPS, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    CL() { return this.tryGetToken(flashcardParser.CL, 0); }
    COLON() { return this.tryGetToken(flashcardParser.COLON, 0); }
    AMP() { return this.tryGetToken(flashcardParser.AMP, 0); }
    URL() { return this.tryGetToken(flashcardParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_s_and_w; }
    // @Override
    enterRule(listener) {
        if (listener.enterS_and_w) {
            listener.enterS_and_w(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitS_and_w) {
            listener.exitS_and_w(this);
        }
    }
}
exports.S_and_wContext = S_and_wContext;
class ClnspContext extends ParserRuleContext_1.ParserRuleContext {
    CL() { return this.getToken(flashcardParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_clnsp; }
    // @Override
    enterRule(listener) {
        if (listener.enterClnsp) {
            listener.enterClnsp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClnsp) {
            listener.exitClnsp(this);
        }
    }
}
exports.ClnspContext = ClnspContext;
class SsplContext extends ParserRuleContext_1.ParserRuleContext {
    SSPL() { return this.tryGetToken(flashcardParser.SSPL, 0); }
    SSPL2() { return this.tryGetToken(flashcardParser.SSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_sspl; }
    // @Override
    enterRule(listener) {
        if (listener.enterSspl) {
            listener.enterSspl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSspl) {
            listener.exitSspl(this);
        }
    }
}
exports.SsplContext = SsplContext;
class WordsContext extends ParserRuleContext_1.ParserRuleContext {
    SENTENCE(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.SENTENCE);
        }
        else {
            return this.getToken(flashcardParser.SENTENCE, i);
        }
    }
    NOTBITMARK(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NOTBITMARK);
        }
        else {
            return this.getToken(flashcardParser.NOTBITMARK, i);
        }
    }
    BARSTRING(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.BARSTRING);
        }
        else {
            return this.getToken(flashcardParser.BARSTRING, i);
        }
    }
    ELIPSIS(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.ELIPSIS);
        }
        else {
            return this.getToken(flashcardParser.ELIPSIS, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.AMP);
        }
        else {
            return this.getToken(flashcardParser.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.Greater);
        }
        else {
            return this.getToken(flashcardParser.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.Less);
        }
        else {
            return this.getToken(flashcardParser.Less, i);
        }
    }
    RightArrow(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.RightArrow);
        }
        else {
            return this.getToken(flashcardParser.RightArrow, i);
        }
    }
    RightAngle(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.RightAngle);
        }
        else {
            return this.getToken(flashcardParser.RightAngle, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_words; }
    // @Override
    enterRule(listener) {
        if (listener.enterWords) {
            listener.enterWords(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWords) {
            listener.exitWords(this);
        }
    }
}
exports.WordsContext = WordsContext;
class SpContext extends ParserRuleContext_1.ParserRuleContext {
    S() { return this.getToken(flashcardParser.S, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return flashcardParser.RULE_sp; }
    // @Override
    enterRule(listener) {
        if (listener.enterSp) {
            listener.enterSp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSp) {
            listener.exitSp(this);
        }
    }
}
exports.SpContext = SpContext;
