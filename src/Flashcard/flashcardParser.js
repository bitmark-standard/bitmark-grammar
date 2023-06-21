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
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 209;
                this.match(flashcardParser.BitFlash1);
                this.state = 210;
                this.format();
                this.state = 211;
                this.match(flashcardParser.CL);
                this.state = 212;
                this.match(flashcardParser.NL);
                this.state = 213;
                this.side();
                this.state = 214;
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
                this.state = 215;
                this.side();
                this.state = 219;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 216;
                                this.match(flashcardParser.NL);
                            }
                        }
                    }
                    this.state = 221;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                }
                this.state = 235;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                    case 1:
                        {
                            this.state = 222;
                            this.resource();
                            this.state = 232;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 226;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === flashcardParser.NL) {
                                                {
                                                    {
                                                        this.state = 223;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                                this.state = 228;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 229;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 234;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                            }
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
    flashcard() {
        let _localctx = new FlashcardContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, flashcardParser.RULE_flashcard);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 237;
                this.match(flashcardParser.BitFlash);
                this.state = 238;
                this.format();
                this.state = 239;
                this.match(flashcardParser.CL);
                this.state = 243;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.NL) {
                    {
                        {
                            this.state = 240;
                            this.match(flashcardParser.NL);
                        }
                    }
                    this.state = 245;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 246;
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
                this.state = 247;
                this.side();
                this.state = 248;
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
                this.state = 249;
                this.side();
                this.state = 257;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 250;
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
                                this.state = 251;
                                this.side();
                                this.state = 252;
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
                                this.state = 253;
                                this.side();
                            }
                        }
                    }
                    this.state = 259;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                }
                this.state = 260;
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
                this.state = 264;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 261;
                                this.match(flashcardParser.NL);
                            }
                        }
                    }
                    this.state = 266;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                }
                this.state = 280;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 267;
                            this.resource();
                            this.state = 277;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 271;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === flashcardParser.NL) {
                                                {
                                                    {
                                                        this.state = 268;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                                this.state = 273;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 274;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 279;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                            }
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
    flashcard_set() {
        let _localctx = new Flashcard_setContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, flashcardParser.RULE_flashcard_set);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 282;
                this.match(flashcardParser.BitFlashcardset);
                this.state = 283;
                this.format();
                this.state = 284;
                this.match(flashcardParser.CL);
                this.state = 288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.NL) {
                    {
                        {
                            this.state = 285;
                            this.match(flashcardParser.NL);
                        }
                    }
                    this.state = 290;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 296;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 291;
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
                            this.state = 292;
                            this.side();
                            this.state = 293;
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
                            this.state = 294;
                            this.side();
                        }
                        break;
                }
                this.state = 312;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 298;
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
                                this.state = 299;
                                this.side();
                                this.state = 300;
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
                                this.state = 301;
                                this.side();
                                this.state = 307;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === flashcardParser.NL) {
                                    {
                                        {
                                            this.state = 302;
                                            this.match(flashcardParser.NL);
                                            this.state = 303;
                                            this.match(flashcardParser.OR);
                                            this.state = 304;
                                            this.side();
                                        }
                                    }
                                    this.state = 309;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                    }
                    this.state = 314;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                }
                this.state = 315;
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
                this.state = 319;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 316;
                                this.match(flashcardParser.NL);
                            }
                        }
                    }
                    this.state = 321;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                }
                this.state = 335;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                    case 1:
                        {
                            this.state = 322;
                            this.resource();
                            this.state = 332;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 326;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === flashcardParser.NL) {
                                                {
                                                    {
                                                        this.state = 323;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                                this.state = 328;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 329;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 334;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                            }
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
    flashcard_language_set() {
        let _localctx = new Flashcard_language_setContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, flashcardParser.RULE_flashcard_language_set);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 337;
                this.match(flashcardParser.BitFlashcardlangset);
                this.state = 338;
                this.format();
                this.state = 339;
                this.match(flashcardParser.CL);
                this.state = 343;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.NL) {
                    {
                        {
                            this.state = 340;
                            this.match(flashcardParser.NL);
                        }
                    }
                    this.state = 345;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 346;
                this.sidex_NL();
                this.state = 358;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 347;
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
                                    this.state = 348;
                                    this.sidex();
                                    {
                                        this.state = 349;
                                        this.match(flashcardParser.NL);
                                        this.state = 350;
                                        this.sidex_NL();
                                    }
                                    this.state = 354;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 352;
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
                                                this.state = 353;
                                                this.sidex_NL();
                                            }
                                        }
                                        this.state = 356;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === flashcardParser.EQ || _la === flashcardParser.EQ2);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 360;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 362;
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
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 363;
                                this.match(flashcardParser.NL);
                            }
                        }
                    }
                    this.state = 368;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                }
                this.state = 382;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                    case 1:
                        {
                            this.state = 369;
                            this.resource();
                            this.state = 379;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 373;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === flashcardParser.NL) {
                                                {
                                                    {
                                                        this.state = 370;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                                this.state = 375;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 376;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 381;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                            }
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
    flashcard_language_1() {
        let _localctx = new Flashcard_language_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 14, flashcardParser.RULE_flashcard_language_1);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 384;
                this.match(flashcardParser.BitFlashcardlang1);
                this.state = 385;
                this.format();
                this.state = 386;
                this.match(flashcardParser.CL);
                this.state = 390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.NL) {
                    {
                        {
                            this.state = 387;
                            this.match(flashcardParser.NL);
                        }
                    }
                    this.state = 392;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 393;
                this.sidex_NL();
                this.state = 394;
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
                this.state = 395;
                this.sidex();
                {
                    this.state = 396;
                    this.match(flashcardParser.NL);
                    this.state = 397;
                    this.sidex_NL();
                }
                this.state = 401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 399;
                            this.match(flashcardParser.OR);
                            this.state = 400;
                            this.sidex_NL();
                        }
                    }
                    this.state = 403;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === flashcardParser.OR);
                this.state = 408;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 405;
                                this.match(flashcardParser.NL);
                            }
                        }
                    }
                    this.state = 410;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                }
                this.state = 424;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                    case 1:
                        {
                            this.state = 411;
                            this.resource();
                            this.state = 421;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 415;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === flashcardParser.NL) {
                                                {
                                                    {
                                                        this.state = 412;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                                this.state = 417;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 418;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 423;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                            }
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
    vocab() {
        let _localctx = new VocabContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, flashcardParser.RULE_vocab);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 426;
                this.match(flashcardParser.BitVocabulary);
                this.state = 427;
                this.format();
                this.state = 428;
                this.match(flashcardParser.CL);
                this.state = 432;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.NL) {
                    {
                        {
                            this.state = 429;
                            this.match(flashcardParser.NL);
                        }
                    }
                    this.state = 434;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 444;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (flashcardParser.AtExampleWithStr - 66)) | (1 << (flashcardParser.AtExamplecol - 66)) | (1 << (flashcardParser.AtExamplecl - 66)) | (1 << (flashcardParser.AtSampleSolution - 66)) | (1 << (flashcardParser.AtLabeltrue - 66)) | (1 << (flashcardParser.AtLabelfalse - 66)) | (1 << (flashcardParser.OpAtCopyright - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (flashcardParser.OpAmpAudio - 100)) | (1 << (flashcardParser.OpAmpImage - 100)) | (1 << (flashcardParser.OpAmpImageZoom - 100)) | (1 << (flashcardParser.OpAmpImageWAudio - 100)) | (1 << (flashcardParser.OpAmpVideo - 100)) | (1 << (flashcardParser.OpAmpArticle - 100)) | (1 << (flashcardParser.OpAmpDocument - 100)) | (1 << (flashcardParser.OpAmpApp - 100)) | (1 << (flashcardParser.OpAmpWebsite - 100)) | (1 << (flashcardParser.OpAmpStillImageFilm - 100)) | (1 << (flashcardParser.OpAmpAudioLink - 100)) | (1 << (flashcardParser.OpAmpImageLink - 100)) | (1 << (flashcardParser.OpAmpVideoLink - 100)) | (1 << (flashcardParser.OpAmpArticleLink - 100)) | (1 << (flashcardParser.OpAmpDocumentLink - 100)) | (1 << (flashcardParser.OpAmpDocumentDownload - 100)) | (1 << (flashcardParser.OpAmpAppLink - 100)) | (1 << (flashcardParser.OpAmpWebsiteLink - 100)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 100)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 136)) | (1 << (flashcardParser.OpAmpAudioEmbed - 136)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 136)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 136)) | (1 << (flashcardParser.URL - 136)) | (1 << (flashcardParser.LIST_LINE - 136)))) !== 0)) {
                    {
                        {
                            this.state = 435;
                            this.bitElem();
                            this.state = 439;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === flashcardParser.NL) {
                                {
                                    {
                                        this.state = 436;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                                this.state = 441;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 446;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 464;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 447;
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
                                    this.state = 449;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 448;
                                                this.vside();
                                            }
                                        }
                                        this.state = 451;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (flashcardParser.AtExampleWithStr - 66)) | (1 << (flashcardParser.AtExamplecol - 66)) | (1 << (flashcardParser.AtExamplecl - 66)) | (1 << (flashcardParser.AtSampleSolution - 66)) | (1 << (flashcardParser.AtLabeltrue - 66)) | (1 << (flashcardParser.AtLabelfalse - 66)) | (1 << (flashcardParser.OpAtCopyright - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (flashcardParser.OpAmpAudio - 100)) | (1 << (flashcardParser.OpAmpImage - 100)) | (1 << (flashcardParser.OpAmpImageZoom - 100)) | (1 << (flashcardParser.OpAmpImageWAudio - 100)) | (1 << (flashcardParser.OpAmpVideo - 100)) | (1 << (flashcardParser.OpAmpArticle - 100)) | (1 << (flashcardParser.OpAmpDocument - 100)) | (1 << (flashcardParser.OpAmpApp - 100)) | (1 << (flashcardParser.OpAmpWebsite - 100)) | (1 << (flashcardParser.OpAmpStillImageFilm - 100)) | (1 << (flashcardParser.OpAmpAudioLink - 100)) | (1 << (flashcardParser.OpAmpImageLink - 100)) | (1 << (flashcardParser.OpAmpVideoLink - 100)) | (1 << (flashcardParser.OpAmpArticleLink - 100)) | (1 << (flashcardParser.OpAmpDocumentLink - 100)) | (1 << (flashcardParser.OpAmpDocumentDownload - 100)) | (1 << (flashcardParser.OpAmpAppLink - 100)) | (1 << (flashcardParser.OpAmpWebsiteLink - 100)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 100)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 136)) | (1 << (flashcardParser.OpAmpAudioEmbed - 136)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 136)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 136)) | (1 << (flashcardParser.URL - 136)) | (1 << (flashcardParser.LIST_LINE - 136)))) !== 0));
                                    this.state = 461;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === flashcardParser.EQ || _la === flashcardParser.EQ2) {
                                        {
                                            {
                                                this.state = 453;
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
                                                this.state = 455;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                do {
                                                    {
                                                        {
                                                            this.state = 454;
                                                            this.vside();
                                                        }
                                                    }
                                                    this.state = 457;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (flashcardParser.AtExampleWithStr - 66)) | (1 << (flashcardParser.AtExamplecol - 66)) | (1 << (flashcardParser.AtExamplecl - 66)) | (1 << (flashcardParser.AtSampleSolution - 66)) | (1 << (flashcardParser.AtLabeltrue - 66)) | (1 << (flashcardParser.AtLabelfalse - 66)) | (1 << (flashcardParser.OpAtCopyright - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (flashcardParser.OpAmpAudio - 100)) | (1 << (flashcardParser.OpAmpImage - 100)) | (1 << (flashcardParser.OpAmpImageZoom - 100)) | (1 << (flashcardParser.OpAmpImageWAudio - 100)) | (1 << (flashcardParser.OpAmpVideo - 100)) | (1 << (flashcardParser.OpAmpArticle - 100)) | (1 << (flashcardParser.OpAmpDocument - 100)) | (1 << (flashcardParser.OpAmpApp - 100)) | (1 << (flashcardParser.OpAmpWebsite - 100)) | (1 << (flashcardParser.OpAmpStillImageFilm - 100)) | (1 << (flashcardParser.OpAmpAudioLink - 100)) | (1 << (flashcardParser.OpAmpImageLink - 100)) | (1 << (flashcardParser.OpAmpVideoLink - 100)) | (1 << (flashcardParser.OpAmpArticleLink - 100)) | (1 << (flashcardParser.OpAmpDocumentLink - 100)) | (1 << (flashcardParser.OpAmpDocumentDownload - 100)) | (1 << (flashcardParser.OpAmpAppLink - 100)) | (1 << (flashcardParser.OpAmpWebsiteLink - 100)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 100)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 136)) | (1 << (flashcardParser.OpAmpAudioEmbed - 136)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 136)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 136)) | (1 << (flashcardParser.URL - 136)) | (1 << (flashcardParser.LIST_LINE - 136)))) !== 0));
                                            }
                                        }
                                        this.state = 463;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 466;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 468;
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
                this.state = 472;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 469;
                                this.match(flashcardParser.NL);
                            }
                        }
                    }
                    this.state = 474;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                }
                this.state = 488;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                    case 1:
                        {
                            this.state = 475;
                            this.resource();
                            this.state = 485;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 479;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === flashcardParser.NL) {
                                                {
                                                    {
                                                        this.state = 476;
                                                        this.match(flashcardParser.NL);
                                                    }
                                                }
                                                this.state = 481;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 482;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 487;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                            }
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
    vocab_1() {
        let _localctx = new Vocab_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 18, flashcardParser.RULE_vocab_1);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 490;
                this.match(flashcardParser.BitVocabulary_1);
                this.state = 491;
                this.format();
                this.state = 492;
                this.match(flashcardParser.CL);
                this.state = 496;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.NL) {
                    {
                        {
                            this.state = 493;
                            this.match(flashcardParser.NL);
                        }
                    }
                    this.state = 498;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 508;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.AtReference - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (flashcardParser.AtExampleWithStr - 66)) | (1 << (flashcardParser.AtExamplecol - 66)) | (1 << (flashcardParser.AtExamplecl - 66)) | (1 << (flashcardParser.AtSampleSolution - 66)) | (1 << (flashcardParser.AtLabeltrue - 66)) | (1 << (flashcardParser.AtLabelfalse - 66)) | (1 << (flashcardParser.OpAtCopyright - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (flashcardParser.OpAmpAudio - 100)) | (1 << (flashcardParser.OpAmpImage - 100)) | (1 << (flashcardParser.OpAmpImageZoom - 100)) | (1 << (flashcardParser.OpAmpImageWAudio - 100)) | (1 << (flashcardParser.OpAmpVideo - 100)) | (1 << (flashcardParser.OpAmpArticle - 100)) | (1 << (flashcardParser.OpAmpDocument - 100)) | (1 << (flashcardParser.OpAmpApp - 100)) | (1 << (flashcardParser.OpAmpWebsite - 100)) | (1 << (flashcardParser.OpAmpStillImageFilm - 100)) | (1 << (flashcardParser.OpAmpAudioLink - 100)) | (1 << (flashcardParser.OpAmpImageLink - 100)) | (1 << (flashcardParser.OpAmpVideoLink - 100)) | (1 << (flashcardParser.OpAmpArticleLink - 100)) | (1 << (flashcardParser.OpAmpDocumentLink - 100)) | (1 << (flashcardParser.OpAmpDocumentDownload - 100)) | (1 << (flashcardParser.OpAmpAppLink - 100)) | (1 << (flashcardParser.OpAmpWebsiteLink - 100)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 100)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (flashcardParser.OpAmpVideoEmbed - 136)) | (1 << (flashcardParser.OpAmpAudioEmbed - 136)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 136)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 136)) | (1 << (flashcardParser.URL - 136)) | (1 << (flashcardParser.LIST_LINE - 136)))) !== 0)) {
                    {
                        {
                            this.state = 499;
                            this.bitElem();
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
                        }
                    }
                    this.state = 510;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 511;
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
                this.state = 513;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 512;
                                    this.vside();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 515;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 525;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 517;
                                this.match(flashcardParser.OR);
                                this.state = 519;
                                this._errHandler.sync(this);
                                _alt = 1;
                                do {
                                    switch (_alt) {
                                        case 1:
                                            {
                                                {
                                                    this.state = 518;
                                                    this.vside();
                                                }
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 521;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            }
                        }
                    }
                    this.state = 527;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                }
                this.state = 542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.OR) {
                    {
                        this.state = 528;
                        this.match(flashcardParser.OR);
                        this.state = 529;
                        this.resource();
                        this.state = 539;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 533;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === flashcardParser.NL) {
                                            {
                                                {
                                                    this.state = 530;
                                                    this.match(flashcardParser.NL);
                                                }
                                            }
                                            this.state = 535;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 536;
                                        this.resource();
                                    }
                                }
                            }
                            this.state = 541;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
                        }
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
    sx() {
        let _localctx = new SxContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, flashcardParser.RULE_sx);
        try {
            this.state = 549;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OPA:
                case flashcardParser.AtSampleSolution:
                case flashcardParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 544;
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
                        this.state = 545;
                        this.s_and_w();
                    }
                    break;
                case flashcardParser.OPB:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 546;
                        this.instruction();
                    }
                    break;
                case flashcardParser.OpAmpImage:
                case flashcardParser.OpAmpImageZoom:
                case flashcardParser.OpAmpImageWAudio:
                case flashcardParser.OpAmpImageLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 547;
                        this.imagebit();
                    }
                    break;
                case flashcardParser.OpAmpAudio:
                case flashcardParser.OpAmpAudioLink:
                case flashcardParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 548;
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
                this.state = 551;
                this.sx();
                this.state = 558;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 553;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === flashcardParser.NL) {
                                    {
                                        this.state = 552;
                                        this.match(flashcardParser.NL);
                                    }
                                }
                                this.state = 555;
                                this.sx();
                            }
                        }
                    }
                    this.state = 560;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
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
                this.state = 561;
                this.bitElem();
                this.state = 565;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 562;
                                this.match(flashcardParser.NL);
                            }
                        }
                    }
                    this.state = 567;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
                this.state = 568;
                this.sidex();
                this.state = 573;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.OR) {
                    {
                        {
                            this.state = 569;
                            this.match(flashcardParser.OR);
                            this.state = 570;
                            this.sidex();
                        }
                    }
                    this.state = 575;
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
                this.state = 576;
                this.sidex_NL();
                this.state = 581;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.OR) {
                    {
                        {
                            this.state = 577;
                            this.match(flashcardParser.OR);
                            this.state = 578;
                            this.sidex_NL();
                        }
                    }
                    this.state = 583;
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
                this.state = 584;
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
            this.state = 609;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 586;
                        this.match(flashcardParser.LIST_LINE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 587;
                        this.match(flashcardParser.NOTBITMARK);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 588;
                        this.gap();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 589;
                        this.atdef();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 590;
                        this.reference();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 591;
                        this.item();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 592;
                        this.title();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 593;
                        this.instruction();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 594;
                        this.hint();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 595;
                        this.s_and_w();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 596;
                        this.example();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 597;
                        this.bool_label();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 598;
                        this.imagebit();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 599;
                        this.audiobit();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 600;
                        this.videobit();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 601;
                        this.articlebit();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 602;
                        this.documentbit();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 603;
                        this.appbit();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 604;
                        this.websitebit();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 605;
                        this.stillimagefilmbit();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 606;
                        this.angleref();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 607;
                        this.anchor();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 608;
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
                this.state = 611;
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
                this.state = 613;
                this.single_gap();
                this.state = 621;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 619;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case flashcardParser.OPU:
                                    {
                                        this.state = 614;
                                        this.single_gap();
                                    }
                                    break;
                                case flashcardParser.OPB:
                                    {
                                        this.state = 615;
                                        this.instruction();
                                    }
                                    break;
                                case flashcardParser.OPQ:
                                    {
                                        this.state = 616;
                                        this.hint();
                                    }
                                    break;
                                case flashcardParser.OPC:
                                    {
                                        this.state = 617;
                                        this.item();
                                    }
                                    break;
                                case flashcardParser.AtExampleWithStr:
                                case flashcardParser.AtExamplecol:
                                case flashcardParser.AtExamplecl:
                                    {
                                        this.state = 618;
                                        this.example();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 623;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
                this.state = 624;
                this.match(flashcardParser.OPU);
                this.state = 628;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                    case 1:
                        {
                            this.state = 625;
                            this.match(flashcardParser.NUMERIC);
                        }
                        break;
                    case 2:
                        {
                            this.state = 626;
                            this.match(flashcardParser.STRING);
                        }
                        break;
                    case 3:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                }
                this.state = 633;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                    {
                        {
                            this.state = 630;
                            this.s_and_w();
                        }
                    }
                    this.state = 635;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 636;
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
                this.state = 638;
                this.match(flashcardParser.OPBUL);
                this.state = 639;
                this.s_and_w();
                this.state = 640;
                this.match(flashcardParser.CL);
                this.state = 642;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.AtPoints) {
                    {
                        this.state = 641;
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
                this.state = 644;
                this.match(flashcardParser.AtPoints);
                this.state = 645;
                this.match(flashcardParser.NUMERIC);
                this.state = 646;
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
                this.state = 651;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 648;
                                this.resource_format();
                            }
                        }
                    }
                    this.state = 653;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                }
                this.state = 659;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (flashcardParser.AmpAudio - 89)) | (1 << (flashcardParser.AmpImage - 89)) | (1 << (flashcardParser.AmpImageZoom - 89)) | (1 << (flashcardParser.AmpImageWAudio - 89)) | (1 << (flashcardParser.AmpVideo - 89)) | (1 << (flashcardParser.AmpArticle - 89)) | (1 << (flashcardParser.AmpDocument - 89)) | (1 << (flashcardParser.AmpApp - 89)) | (1 << (flashcardParser.AmpWebsite - 89)) | (1 << (flashcardParser.AmpStillImageFilm - 89)) | (1 << (flashcardParser.AmpPdf - 89)) | (1 << (flashcardParser.AmpAudioLink - 89)) | (1 << (flashcardParser.AmpImageLink - 89)) | (1 << (flashcardParser.AmpVideoLink - 89)) | (1 << (flashcardParser.AmpArticleLink - 89)) | (1 << (flashcardParser.AmpDocumentLink - 89)) | (1 << (flashcardParser.AmpDocumentDownload - 89)) | (1 << (flashcardParser.AmpAppLink - 89)) | (1 << (flashcardParser.AmpWebsiteLink - 89)) | (1 << (flashcardParser.AmpStillImageFilmLink - 89)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (flashcardParser.AmpVideoEmbed - 131)) | (1 << (flashcardParser.AmpDocumentEmbed - 131)) | (1 << (flashcardParser.AmpStillImageFilmEmbed - 131)) | (1 << (flashcardParser.ColonText - 131)) | (1 << (flashcardParser.ColonJson - 131)))) !== 0)) {
                    {
                        this.state = 657;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case flashcardParser.ColonText:
                                {
                                    this.state = 654;
                                    this.match(flashcardParser.ColonText);
                                }
                                break;
                            case flashcardParser.ColonJson:
                                {
                                    this.state = 655;
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
                                    this.state = 656;
                                    this.resource_format_extra();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 661;
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
                this.state = 662;
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
            this.state = 673;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AmpImage:
                case flashcardParser.AmpImageZoom:
                case flashcardParser.AmpImageWAudio:
                case flashcardParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 664;
                        this.image_format();
                    }
                    break;
                case flashcardParser.AmpAudio:
                case flashcardParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 665;
                        this.audio_format();
                    }
                    break;
                case flashcardParser.AmpVideo:
                case flashcardParser.AmpVideoLink:
                case flashcardParser.AmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 666;
                        this.video_format();
                    }
                    break;
                case flashcardParser.AmpArticle:
                case flashcardParser.AmpArticleLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 667;
                        this.article_format();
                    }
                    break;
                case flashcardParser.AmpDocument:
                case flashcardParser.AmpDocumentLink:
                case flashcardParser.AmpDocumentDownload:
                case flashcardParser.AmpDocumentEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 668;
                        this.document_format();
                    }
                    break;
                case flashcardParser.AmpApp:
                case flashcardParser.AmpAppLink:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 669;
                        this.app_format();
                    }
                    break;
                case flashcardParser.AmpWebsite:
                case flashcardParser.AmpWebsiteLink:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 670;
                        this.website_format();
                    }
                    break;
                case flashcardParser.AmpStillImageFilm:
                case flashcardParser.AmpStillImageFilmLink:
                case flashcardParser.AmpStillImageFilmEmbed:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 671;
                        this.stillimagefilm_format();
                    }
                    break;
                case flashcardParser.AmpPdf:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 672;
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
            this.state = 680;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.BitmarkMinus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 675;
                        this.match(flashcardParser.BitmarkMinus);
                    }
                    break;
                case flashcardParser.BitmarkPlus:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 676;
                        this.match(flashcardParser.BitmarkPlus);
                    }
                    break;
                case flashcardParser.ColonText:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 677;
                        this.match(flashcardParser.ColonText);
                    }
                    break;
                case flashcardParser.ColonJson:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 678;
                        this.match(flashcardParser.ColonJson);
                    }
                    break;
                case flashcardParser.EOF:
                    this.enterOuterAlt(_localctx, 5);
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
            this.state = 696;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 682;
                        this.match(flashcardParser.AmpImage);
                        this.state = 685;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case flashcardParser.Image_type:
                                {
                                    {
                                        this.state = 683;
                                        this.match(flashcardParser.Image_type);
                                    }
                                }
                                break;
                            case flashcardParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 684;
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
                        this.state = 687;
                        this.match(flashcardParser.AmpImageLink);
                        this.state = 689;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.Image_type) {
                            {
                                this.state = 688;
                                this.match(flashcardParser.Image_type);
                            }
                        }
                    }
                    break;
                case flashcardParser.AmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 691;
                        this.match(flashcardParser.AmpImageZoom);
                        this.state = 693;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.Image_type) {
                            {
                                this.state = 692;
                                this.match(flashcardParser.Image_type);
                            }
                        }
                    }
                    break;
                case flashcardParser.AmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 695;
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
                this.state = 698;
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
                this.state = 701;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.COLON) {
                    {
                        this.state = 699;
                        this.match(flashcardParser.COLON);
                        this.state = 700;
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
                this.state = 703;
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
                this.state = 705;
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
                this.state = 707;
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
                this.state = 709;
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
                this.state = 711;
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
                this.state = 713;
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
                this.state = 715;
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
                this.state = 717;
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
                this.state = 719;
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
            this.state = 736;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OpAmpVideo:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 721;
                        this.match(flashcardParser.OpAmpVideo);
                        this.state = 724;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                            case 1:
                                {
                                    this.state = 722;
                                    this.match(flashcardParser.COLON);
                                    this.state = 723;
                                    this.match(flashcardParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case flashcardParser.OpAmpVideoLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 726;
                        this.match(flashcardParser.OpAmpVideoLink);
                        this.state = 729;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
                            case 1:
                                {
                                    this.state = 727;
                                    this.match(flashcardParser.COLON);
                                    this.state = 728;
                                    this.match(flashcardParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case flashcardParser.OpAmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 731;
                        this.match(flashcardParser.OpAmpVideoEmbed);
                        this.state = 734;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 81, this._ctx)) {
                            case 1:
                                {
                                    this.state = 732;
                                    this.match(flashcardParser.COLON);
                                    this.state = 733;
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
                this.state = 738;
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
            this.state = 746;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OpAmpArticle:
                case flashcardParser.OpAmpArticleLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 740;
                        this.op_article_format();
                        this.state = 741;
                        this.match(flashcardParser.COLON);
                        this.state = 742;
                        this.url();
                        this.state = 743;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.ArticleText:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 745;
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
                this.state = 748;
                this.op_document_format();
                this.state = 749;
                this.match(flashcardParser.COLON);
                this.state = 750;
                this.url();
                this.state = 751;
                this.match(flashcardParser.CL);
                this.state = 756;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.OPATALT) {
                    {
                        this.state = 752;
                        this.match(flashcardParser.OPATALT);
                        this.state = 753;
                        this.words();
                        this.state = 754;
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
                this.state = 758;
                this.op_website_format();
                this.state = 759;
                this.match(flashcardParser.COLON);
                this.state = 760;
                this.url();
                this.state = 761;
                this.match(flashcardParser.CL);
                this.state = 766;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.OPATALT) {
                    {
                        this.state = 762;
                        this.match(flashcardParser.OPATALT);
                        this.state = 763;
                        this.words();
                        this.state = 764;
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
                this.state = 768;
                this.op_app_format();
                this.state = 769;
                this.match(flashcardParser.COLON);
                this.state = 772;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case flashcardParser.URL:
                        {
                            this.state = 770;
                            this.url();
                        }
                        break;
                    case flashcardParser.TEL:
                        {
                            this.state = 771;
                            this.telephone();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 774;
                this.match(flashcardParser.CL);
                this.state = 779;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.OPATALT) {
                    {
                        this.state = 775;
                        this.match(flashcardParser.OPATALT);
                        this.state = 776;
                        this.words();
                        this.state = 777;
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
                this.state = 781;
                this.stillimg_one();
                this.state = 785;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 782;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 787;
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
    stillimg_one() {
        let _localctx = new Stillimg_oneContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, flashcardParser.RULE_stillimg_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 788;
                this.op_stillimagefilm_format();
                this.state = 789;
                this.match(flashcardParser.COLON);
                this.state = 793;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.S) {
                    {
                        {
                            this.state = 790;
                            this.match(flashcardParser.S);
                        }
                    }
                    this.state = 795;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 796;
                this.url();
                this.state = 797;
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
                this.state = 799;
                this.video_one();
                this.state = 803;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 800;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 805;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
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
                this.state = 806;
                this.op_video_format();
                this.state = 807;
                this.match(flashcardParser.COLON);
                this.state = 808;
                this.url();
                this.state = 809;
                this.match(flashcardParser.CL);
                this.state = 814;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                    case 1:
                        {
                            this.state = 810;
                            this.match(flashcardParser.OPATALT);
                            this.state = 811;
                            this.words();
                            this.state = 812;
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
                this.state = 816;
                this.image_one();
                this.state = 820;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 817;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 822;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                }
                this.state = 825;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                    case 1:
                        {
                            this.state = 823;
                            this.match(flashcardParser.NL);
                            this.state = 824;
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
                this.state = 827;
                this.op_image_format();
                this.state = 828;
                this.match(flashcardParser.COLON);
                this.state = 832;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === flashcardParser.S) {
                    {
                        {
                            this.state = 829;
                            this.match(flashcardParser.S);
                        }
                    }
                    this.state = 834;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 835;
                this.url();
                this.state = 836;
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
            this.state = 852;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OpAmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 838;
                        this.match(flashcardParser.OpAmpImage);
                        this.state = 841;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case flashcardParser.Image_type:
                                {
                                    {
                                        this.state = 839;
                                        this.match(flashcardParser.Image_type);
                                    }
                                }
                                break;
                            case flashcardParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 840;
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
                        this.state = 843;
                        this.match(flashcardParser.OpAmpImageLink);
                        this.state = 845;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.Image_type) {
                            {
                                this.state = 844;
                                this.match(flashcardParser.Image_type);
                            }
                        }
                    }
                    break;
                case flashcardParser.OpAmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 847;
                        this.match(flashcardParser.OpAmpImageZoom);
                        this.state = 849;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.Image_type) {
                            {
                                this.state = 848;
                                this.match(flashcardParser.Image_type);
                            }
                        }
                    }
                    break;
                case flashcardParser.OpAmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 851;
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
            this.state = 871;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 854;
                        this.match(flashcardParser.AtSrc);
                        this.state = 855;
                        this.match(flashcardParser.COLON);
                        this.state = 856;
                        this.url();
                        this.state = 857;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.AtWidth:
                case flashcardParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 859;
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
                        this.state = 860;
                        this.match(flashcardParser.COLON);
                        this.state = 861;
                        this.match(flashcardParser.NUMERIC);
                        this.state = 862;
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
                        this.state = 863;
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
                        this.state = 867;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 864;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 869;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
                        }
                        this.state = 870;
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
            this.state = 890;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 873;
                        this.match(flashcardParser.AtSrc);
                        this.state = 874;
                        this.match(flashcardParser.COLON);
                        this.state = 875;
                        this.url();
                        this.state = 876;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.AtWidth:
                case flashcardParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 878;
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
                        this.state = 879;
                        this.match(flashcardParser.COLON);
                        this.state = 880;
                        this.match(flashcardParser.NUMERIC);
                        this.state = 881;
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
                        this.state = 882;
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
                        this.state = 886;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 883;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 888;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
                        }
                        this.state = 889;
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
                this.state = 892;
                this.audio_one();
                this.state = 896;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 893;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 898;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
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
                this.state = 899;
                this.op_audio_format();
                this.state = 900;
                this.match(flashcardParser.COLON);
                this.state = 901;
                this.url();
                this.state = 902;
                this.match(flashcardParser.CL);
                this.state = 907;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                    case 1:
                        {
                            this.state = 903;
                            this.match(flashcardParser.OPATALT);
                            this.state = 904;
                            this.words();
                            this.state = 905;
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
            this.state = 919;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 909;
                        this.match(flashcardParser.AmpAudio);
                        this.state = 912;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.COLON) {
                            {
                                this.state = 910;
                                this.match(flashcardParser.COLON);
                                this.state = 911;
                                this.match(flashcardParser.Audio_type);
                            }
                        }
                    }
                    break;
                case flashcardParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 914;
                        this.match(flashcardParser.AmpAudioLink);
                        this.state = 917;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.COLON) {
                            {
                                this.state = 915;
                                this.match(flashcardParser.COLON);
                                this.state = 916;
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
            this.state = 936;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OpAmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 921;
                        this.match(flashcardParser.OpAmpAudio);
                        this.state = 924;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                            case 1:
                                {
                                    this.state = 922;
                                    this.match(flashcardParser.COLON);
                                    this.state = 923;
                                    this.match(flashcardParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case flashcardParser.OpAmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 926;
                        this.match(flashcardParser.OpAmpAudioLink);
                        this.state = 929;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                            case 1:
                                {
                                    this.state = 927;
                                    this.match(flashcardParser.COLON);
                                    this.state = 928;
                                    this.match(flashcardParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case flashcardParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 931;
                        this.match(flashcardParser.OpAmpAudioEmbed);
                        this.state = 934;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                            case 1:
                                {
                                    this.state = 932;
                                    this.match(flashcardParser.COLON);
                                    this.state = 933;
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
            this.state = 969;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OPA:
                case flashcardParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 941;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case flashcardParser.OPA:
                                {
                                    this.state = 938;
                                    this.match(flashcardParser.OPA);
                                    this.state = 939;
                                    this.s_and_w();
                                }
                                break;
                            case flashcardParser.AtSrc:
                                {
                                    this.state = 940;
                                    this.match(flashcardParser.AtSrc);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 943;
                        this.match(flashcardParser.COLON);
                        this.state = 947;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 944;
                                        this.match(flashcardParser.S);
                                    }
                                }
                            }
                            this.state = 949;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                        }
                        this.state = 952;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 952;
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
                                            this.state = 950;
                                            this.s_and_w();
                                        }
                                        break;
                                    case flashcardParser.NL:
                                        {
                                            this.state = 951;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 954;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                        this.state = 956;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.AtWidth:
                case flashcardParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 957;
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
                        this.state = 958;
                        this.match(flashcardParser.COLON);
                        this.state = 959;
                        this.match(flashcardParser.NUMERIC);
                        this.state = 960;
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
                        this.state = 961;
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
                        this.state = 965;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 962;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 967;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                        }
                        this.state = 968;
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
                this.state = 971;
                this.match(flashcardParser.TEL);
                this.state = 972;
                this.match(flashcardParser.PLUS);
                this.state = 973;
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
                this.state = 975;
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
            this.state = 1007;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 977;
                        this.match(flashcardParser.OPC);
                        this.state = 978;
                        this.match(flashcardParser.CL);
                        this.state = 986;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                            case 1:
                                {
                                    this.state = 982;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === flashcardParser.S) {
                                        {
                                            {
                                                this.state = 979;
                                                this.match(flashcardParser.S);
                                            }
                                        }
                                        this.state = 984;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 985;
                                    this.lead();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 988;
                        this.match(flashcardParser.OPC);
                        this.state = 989;
                        this.s_and_w();
                        this.state = 994;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 992;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 990;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 991;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 996;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 997;
                        this.match(flashcardParser.CL);
                        this.state = 1005;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1001;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === flashcardParser.S) {
                                        {
                                            {
                                                this.state = 998;
                                                this.match(flashcardParser.S);
                                            }
                                        }
                                        this.state = 1003;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1004;
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
                this.state = 1009;
                this.match(flashcardParser.OPC);
                this.state = 1010;
                this.s_and_w();
                this.state = 1015;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                    {
                        this.state = 1013;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1011;
                                    this.match(flashcardParser.COLON);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1012;
                                    this.s_and_w();
                                }
                                break;
                        }
                    }
                    this.state = 1017;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1018;
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
            this.state = 1030;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OPRANGLES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1020;
                        this.match(flashcardParser.OPRANGLES);
                        this.state = 1022;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1021;
                                this.s_and_w();
                            }
                        }
                        this.state = 1024;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.OPRANGLEL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1025;
                        this.match(flashcardParser.OPRANGLEL);
                        this.state = 1027;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1026;
                                this.s_and_w();
                            }
                        }
                        this.state = 1029;
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
            this.state = 1039;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AtExamplecl:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1032;
                        this.match(flashcardParser.AtExamplecl);
                    }
                    break;
                case flashcardParser.AtExampleWithStr:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1033;
                        this.match(flashcardParser.AtExampleWithStr);
                    }
                    break;
                case flashcardParser.AtExamplecol:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1034;
                        this.match(flashcardParser.AtExamplecol);
                        this.state = 1036;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === flashcardParser.SENTENCE) {
                            {
                                this.state = 1035;
                                this.match(flashcardParser.SENTENCE);
                            }
                        }
                        this.state = 1038;
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
            this.state = 1080;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1041;
                        this.match(flashcardParser.BracEnclose);
                        this.state = 1043;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1042;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1066;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                {
                                    this.state = 1045;
                                    this.s_and_w();
                                    this.state = 1055;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1046;
                                                    this.match(flashcardParser.NL);
                                                    this.state = 1050;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1047;
                                                                    this.match(flashcardParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1052;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 1057;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                                    }
                                    this.state = 1061;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === flashcardParser.NL) {
                                        {
                                            {
                                                this.state = 1058;
                                                this.match(flashcardParser.NL);
                                            }
                                        }
                                        this.state = 1063;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 1068;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1069;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1070;
                        this.match(flashcardParser.BracEnclose);
                        this.state = 1076;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1074;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1071;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1072;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1073;
                                            this.match(flashcardParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1078;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1079;
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
            this.state = 1104;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1082;
                        this.match(flashcardParser.AtReference);
                        this.state = 1087;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1087;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1083;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1084;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1085;
                                            this.match(flashcardParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1086;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1089;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                        this.state = 1091;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1092;
                        this.match(flashcardParser.AtReference);
                        this.state = 1100;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1098;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1093;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1094;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1095;
                                            this.match(flashcardParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1096;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 1097;
                                            this.match(flashcardParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1102;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1103;
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
                this.state = 1106;
                this.match(flashcardParser.AtProgress);
                this.state = 1107;
                this.s_and_w();
                this.state = 1108;
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
                this.state = 1110;
                this.match(flashcardParser.AtDate);
                this.state = 1114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1114;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1111;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1112;
                                    this.match(flashcardParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1113;
                                    this.match(flashcardParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1116;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                this.state = 1118;
                this.match(flashcardParser.CL);
                this.state = 1120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === flashcardParser.AtDate) {
                    {
                        this.state = 1119;
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
                this.state = 1122;
                this.match(flashcardParser.AtDate);
                this.state = 1126;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1126;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1123;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1124;
                                    this.match(flashcardParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1125;
                                    this.match(flashcardParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1128;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                this.state = 1130;
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
            this.state = 1178;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1132;
                        this.match(flashcardParser.OPB);
                        this.state = 1136;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.NL) {
                            {
                                {
                                    this.state = 1133;
                                    this.match(flashcardParser.NL);
                                }
                            }
                            this.state = 1138;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1140;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1139;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1163;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                {
                                    this.state = 1142;
                                    this.s_and_w();
                                    this.state = 1152;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1143;
                                                    this.match(flashcardParser.NL);
                                                    this.state = 1147;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1144;
                                                                    this.match(flashcardParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1149;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 1154;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                                    }
                                    this.state = 1158;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === flashcardParser.NL) {
                                        {
                                            {
                                                this.state = 1155;
                                                this.match(flashcardParser.NL);
                                            }
                                        }
                                        this.state = 1160;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 1165;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1166;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1167;
                        this.match(flashcardParser.OPB);
                        this.state = 1171;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.NL) {
                            {
                                {
                                    this.state = 1168;
                                    this.match(flashcardParser.NL);
                                }
                            }
                            this.state = 1173;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1175;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1174;
                                this.s_and_w();
                            }
                        }
                        this.state = 1177;
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
                this.state = 1180;
                this.match(flashcardParser.OPQ);
                this.state = 1182;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1181;
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
                    this.state = 1184;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.OPDOT) | (1 << flashcardParser.S) | (1 << flashcardParser.BitFlash1) | (1 << flashcardParser.BitFlash) | (1 << flashcardParser.BitFlashcardset) | (1 << flashcardParser.BitFlashcardlangset) | (1 << flashcardParser.BitFlashcardlang1) | (1 << flashcardParser.BitVocabulary) | (1 << flashcardParser.BitVocabulary_1) | (1 << flashcardParser.OPDOLL) | (1 << flashcardParser.OPBUL) | (1 << flashcardParser.OPESC) | (1 << flashcardParser.OPRANGLES) | (1 << flashcardParser.OPRANGLEL) | (1 << flashcardParser.OPDANGLE) | (1 << flashcardParser.OPU) | (1 << flashcardParser.OPB) | (1 << flashcardParser.OPQ) | (1 << flashcardParser.OPA) | (1 << flashcardParser.OPP) | (1 << flashcardParser.OPM) | (1 << flashcardParser.OPS) | (1 << flashcardParser.OPR) | (1 << flashcardParser.OPC) | (1 << flashcardParser.OPHASH) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP) | (1 << flashcardParser.DBLCOLON) | (1 << flashcardParser.PLUS) | (1 << flashcardParser.DotAt))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.DBLEQ - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.EQ - 32)) | (1 << (flashcardParser.EQ2 - 32)) | (1 << (flashcardParser.OR - 32)) | (1 << (flashcardParser.HSPL - 32)) | (1 << (flashcardParser.HSPL2 - 32)) | (1 << (flashcardParser.SSPL - 32)) | (1 << (flashcardParser.SSPL2 - 32)) | (1 << (flashcardParser.COMMENT - 32)) | (1 << (flashcardParser.DCANY - 32)) | (1 << (flashcardParser.Image_type - 32)) | (1 << (flashcardParser.Audio_type - 32)) | (1 << (flashcardParser.Video_type - 32)) | (1 << (flashcardParser.ArticleText - 32)) | (1 << (flashcardParser.NOTCL - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)) | (1 << (flashcardParser.OPAT - 32)) | (1 << (flashcardParser.AtProgress - 32)) | (1 << (flashcardParser.AtReference - 32)) | (1 << (flashcardParser.AtWidth - 32)) | (1 << (flashcardParser.AtHeight - 32)) | (1 << (flashcardParser.AtProgressPoints - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (flashcardParser.AtShortanswer - 64)) | (1 << (flashcardParser.AtLonganswer - 64)) | (1 << (flashcardParser.AtExampleWithStr - 64)) | (1 << (flashcardParser.AtExamplecol - 64)) | (1 << (flashcardParser.AtExamplecl - 64)) | (1 << (flashcardParser.AtSampleSolution - 64)) | (1 << (flashcardParser.AtPartialAnswerS - 64)) | (1 << (flashcardParser.AtPartialAnswer - 64)) | (1 << (flashcardParser.AtLabeltrue - 64)) | (1 << (flashcardParser.AtLabelfalse - 64)) | (1 << (flashcardParser.AtPoints - 64)) | (1 << (flashcardParser.AtSrc - 64)) | (1 << (flashcardParser.AtPartner - 64)) | (1 << (flashcardParser.OPATALT - 64)) | (1 << (flashcardParser.OPAMARK - 64)) | (1 << (flashcardParser.ShowInIndex - 64)) | (1 << (flashcardParser.OpAtCaption - 64)) | (1 << (flashcardParser.OpAtLicense - 64)) | (1 << (flashcardParser.OpAtCopyright - 64)) | (1 << (flashcardParser.OpAtSearch - 64)) | (1 << (flashcardParser.OpAtIsTracked - 64)) | (1 << (flashcardParser.OpAtIsInfoOnly - 64)) | (1 << (flashcardParser.AtDate - 64)) | (1 << (flashcardParser.Http - 64)) | (1 << (flashcardParser.Https - 64)) | (1 << (flashcardParser.AmpAudio - 64)) | (1 << (flashcardParser.AmpImage - 64)) | (1 << (flashcardParser.AmpImageZoom - 64)) | (1 << (flashcardParser.AmpImageWAudio - 64)) | (1 << (flashcardParser.AmpVideo - 64)) | (1 << (flashcardParser.AmpArticle - 64)) | (1 << (flashcardParser.AmpDocument - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (flashcardParser.AmpApp - 96)) | (1 << (flashcardParser.AmpWebsite - 96)) | (1 << (flashcardParser.AmpStillImageFilm - 96)) | (1 << (flashcardParser.AmpPdf - 96)) | (1 << (flashcardParser.OpAmpAudio - 96)) | (1 << (flashcardParser.OpAmpImage - 96)) | (1 << (flashcardParser.OpAmpImageZoom - 96)) | (1 << (flashcardParser.OpAmpImageWAudio - 96)) | (1 << (flashcardParser.OpAmpVideo - 96)) | (1 << (flashcardParser.OpAmpArticle - 96)) | (1 << (flashcardParser.OpAmpArticleAtt - 96)) | (1 << (flashcardParser.OpAmpDocument - 96)) | (1 << (flashcardParser.OpAmpApp - 96)) | (1 << (flashcardParser.OpAmpWebsite - 96)) | (1 << (flashcardParser.OpAmpStillImageFilm - 96)) | (1 << (flashcardParser.BracEnclose - 96)) | (1 << (flashcardParser.AmpAudioLink - 96)) | (1 << (flashcardParser.AmpImageLink - 96)) | (1 << (flashcardParser.AmpVideoLink - 96)) | (1 << (flashcardParser.AmpArticleLink - 96)) | (1 << (flashcardParser.AmpDocumentLink - 96)) | (1 << (flashcardParser.AmpDocumentDownload - 96)) | (1 << (flashcardParser.AmpAppLink - 96)) | (1 << (flashcardParser.AmpWebsiteLink - 96)) | (1 << (flashcardParser.AmpStillImageFilmLink - 96)) | (1 << (flashcardParser.OpAmpAudioLink - 96)) | (1 << (flashcardParser.OpAmpImageLink - 96)) | (1 << (flashcardParser.OpAmpVideoLink - 96)) | (1 << (flashcardParser.OpAmpArticleLink - 96)) | (1 << (flashcardParser.OpAmpDocumentLink - 96)) | (1 << (flashcardParser.OpAmpDocumentDownload - 96)) | (1 << (flashcardParser.OpAmpAppLink - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (flashcardParser.OpAmpWebsiteLink - 128)) | (1 << (flashcardParser.OpAmpStillImageFilmLink - 128)) | (1 << (flashcardParser.AmpImageEmbed - 128)) | (1 << (flashcardParser.AmpVideoEmbed - 128)) | (1 << (flashcardParser.AmpAudioEmbed - 128)) | (1 << (flashcardParser.AmpDocumentEmbed - 128)) | (1 << (flashcardParser.AmpStillImageFilmEmbed - 128)) | (1 << (flashcardParser.OpAmpImageEmbed - 128)) | (1 << (flashcardParser.OpAmpVideoEmbed - 128)) | (1 << (flashcardParser.OpAmpAudioEmbed - 128)) | (1 << (flashcardParser.OpAmpDocumentEmbed - 128)) | (1 << (flashcardParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (flashcardParser.BitmarkMinus - 128)) | (1 << (flashcardParser.BitmarkPlus - 128)) | (1 << (flashcardParser.ColonText - 128)) | (1 << (flashcardParser.ColonJson - 128)) | (1 << (flashcardParser.Prosemirror - 128)) | (1 << (flashcardParser.Placeholder - 128)) | (1 << (flashcardParser.BASIC - 128)) | (1 << (flashcardParser.JPG - 128)) | (1 << (flashcardParser.PNG - 128)) | (1 << (flashcardParser.GIF - 128)) | (1 << (flashcardParser.SVG - 128)) | (1 << (flashcardParser.MP2 - 128)) | (1 << (flashcardParser.MP3 - 128)) | (1 << (flashcardParser.MP4 - 128)) | (1 << (flashcardParser.FLV - 128)) | (1 << (flashcardParser.WMV - 128)) | (1 << (flashcardParser.MPEG - 128)) | (1 << (flashcardParser.MPG - 128)) | (1 << (flashcardParser.TEL - 128)) | (1 << (flashcardParser.DotArticleAtt - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (flashcardParser.STAR - 160)) | (1 << (flashcardParser.URL - 160)) | (1 << (flashcardParser.LIST_LINE - 160)) | (1 << (flashcardParser.ENCLBARS - 160)))) !== 0));
                this.state = 1186;
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
            this.state = 1200;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 162, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1188;
                        this.match(flashcardParser.OPHASH);
                        this.state = 1191;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1191;
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
                                            this.state = 1189;
                                            this.s_and_w();
                                        }
                                        break;
                                    case flashcardParser.NL:
                                        {
                                            this.state = 1190;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 1193;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                        this.state = 1195;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1196;
                        this.match(flashcardParser.OPHASH);
                        this.state = 1197;
                        this.s_and_w();
                        this.state = 1198;
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
            this.state = 1210;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.AtLabeltrue:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1202;
                        this.match(flashcardParser.AtLabeltrue);
                        this.state = 1203;
                        this.s_and_w();
                        this.state = 1204;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.AtLabelfalse:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1206;
                        this.match(flashcardParser.AtLabelfalse);
                        this.state = 1207;
                        this.s_and_w();
                        this.state = 1208;
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
            this.state = 1221;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1212;
                        this.match(flashcardParser.AtProgressPoints);
                        this.state = 1213;
                        this.match(flashcardParser.COLON);
                        this.state = 1214;
                        this.match(flashcardParser.NUMERIC);
                        this.state = 1215;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1216;
                        this.match(flashcardParser.AtProgressPoints);
                        this.state = 1217;
                        this.match(flashcardParser.COLON);
                        this.state = 1218;
                        this.s_and_w();
                        this.state = 1219;
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
                this.state = 1223;
                this.match(flashcardParser.OpAtIsTracked);
                this.state = 1224;
                this.s_and_w();
                this.state = 1225;
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
                this.state = 1227;
                this.match(flashcardParser.OpAtIsInfoOnly);
                this.state = 1228;
                this.s_and_w();
                this.state = 1229;
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
                this.state = 1231;
                this.atdef_();
                this.state = 1241;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1235;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === flashcardParser.NL) {
                                    {
                                        {
                                            this.state = 1232;
                                            this.match(flashcardParser.NL);
                                        }
                                    }
                                    this.state = 1237;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1238;
                                this.atdef_();
                            }
                        }
                    }
                    this.state = 1243;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
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
            this.state = 1267;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case flashcardParser.OPA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1244;
                        this.match(flashcardParser.OPA);
                        this.state = 1245;
                        this.s_and_w();
                        this.state = 1246;
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
                        this.state = 1247;
                        this.s_and_w();
                        this.state = 1253;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1251;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 167, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1248;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1249;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1250;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 1255;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1256;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1258;
                        this.match(flashcardParser.OpAtCopyright);
                        this.state = 1262;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1259;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1264;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
                        }
                        this.state = 1265;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case flashcardParser.AtSampleSolution:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1266;
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
            this.state = 1288;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 175, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1269;
                        this.match(flashcardParser.OPDOLL);
                        this.state = 1273;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1273;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1270;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1271;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1272;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1275;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL);
                        this.state = 1277;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1278;
                        this.match(flashcardParser.OPDOLL);
                        this.state = 1284;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NL - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                            {
                                this.state = 1282;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1279;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1280;
                                            this.match(flashcardParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1281;
                                            this.match(flashcardParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1286;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1287;
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
                this.state = 1290;
                this.match(flashcardParser.OPDANGLE);
                this.state = 1292;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << flashcardParser.S) | (1 << flashcardParser.OPS) | (1 << flashcardParser.COLON) | (1 << flashcardParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (flashcardParser.Greater - 32)) | (1 << (flashcardParser.Less - 32)) | (1 << (flashcardParser.RightAngle - 32)) | (1 << (flashcardParser.RightArrow - 32)) | (1 << (flashcardParser.NUMERIC - 32)) | (1 << (flashcardParser.STRING - 32)) | (1 << (flashcardParser.NOTBITMARK - 32)) | (1 << (flashcardParser.ELIPSIS - 32)) | (1 << (flashcardParser.SENTENCE - 32)) | (1 << (flashcardParser.BARSTRING - 32)))) !== 0) || _la === flashcardParser.URL) {
                    {
                        this.state = 1291;
                        this.s_and_w();
                    }
                }
                this.state = 1294;
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
                this.state = 1296;
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
                this.state = 1302;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1298;
                            this.s_and_w();
                            this.state = 1300;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === flashcardParser.NL) {
                                {
                                    this.state = 1299;
                                    this.match(flashcardParser.NL);
                                }
                            }
                        }
                    }
                    this.state = 1304;
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
            this.state = 1350;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1306;
                        this.match(flashcardParser.STRING);
                        this.state = 1313;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 180, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1308;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1307;
                                                this.match(flashcardParser.S);
                                            }
                                        }
                                        this.state = 1310;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === flashcardParser.S);
                                    this.state = 1312;
                                    this.match(flashcardParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1315;
                        this.words();
                        this.state = 1322;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 182, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1317;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1316;
                                                this.match(flashcardParser.S);
                                            }
                                        }
                                        this.state = 1319;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === flashcardParser.S);
                                    this.state = 1321;
                                    this.match(flashcardParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1324;
                        this.match(flashcardParser.OPS);
                        this.state = 1325;
                        this.s_and_w();
                        this.state = 1326;
                        this.match(flashcardParser.CL);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1328;
                        this.match(flashcardParser.NUMERIC);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1332;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === flashcardParser.S) {
                            {
                                {
                                    this.state = 1329;
                                    this.match(flashcardParser.S);
                                }
                            }
                            this.state = 1334;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1335;
                        this.match(flashcardParser.COLON);
                        this.state = 1339;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1336;
                                        this.match(flashcardParser.S);
                                    }
                                }
                            }
                            this.state = 1341;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1342;
                        this.match(flashcardParser.AMP);
                        this.state = 1346;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1343;
                                        this.match(flashcardParser.S);
                                    }
                                }
                            }
                            this.state = 1348;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1349;
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
                this.state = 1352;
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
                this.state = 1354;
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
                this.state = 1367;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1367;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case flashcardParser.SENTENCE:
                                        {
                                            this.state = 1356;
                                            this.match(flashcardParser.SENTENCE);
                                        }
                                        break;
                                    case flashcardParser.NOTBITMARK:
                                        {
                                            this.state = 1357;
                                            this.match(flashcardParser.NOTBITMARK);
                                        }
                                        break;
                                    case flashcardParser.BARSTRING:
                                        {
                                            this.state = 1358;
                                            this.match(flashcardParser.BARSTRING);
                                        }
                                        break;
                                    case flashcardParser.ELIPSIS:
                                        {
                                            this.state = 1359;
                                            this.match(flashcardParser.ELIPSIS);
                                        }
                                        break;
                                    case flashcardParser.AMP:
                                        {
                                            this.state = 1360;
                                            this.match(flashcardParser.AMP);
                                        }
                                        break;
                                    case flashcardParser.Greater:
                                        {
                                            this.state = 1361;
                                            this.match(flashcardParser.Greater);
                                            this.state = 1362;
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
                                            this.state = 1363;
                                            this.match(flashcardParser.Less);
                                            this.state = 1364;
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
                                            this.state = 1365;
                                            this.match(flashcardParser.RightArrow);
                                        }
                                        break;
                                    case flashcardParser.RightAngle:
                                        {
                                            this.state = 1366;
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
                    this.state = 1369;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
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
                this.state = 1371;
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
flashcardParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA5\u0560\x04" +
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
    "\x03\x04\x05\x04\xD2\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
    "\x05\x03\x05\x03\x05\x07\x05\xDC\n\x05\f\x05\x0E\x05\xDF\v\x05\x03\x05" +
    "\x03\x05\x07\x05\xE3\n\x05\f\x05\x0E\x05\xE6\v\x05\x03\x05\x07\x05\xE9" +
    "\n\x05\f\x05\x0E\x05\xEC\v\x05\x05\x05\xEE\n\x05\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x07\x06\xF4\n\x06\f\x06\x0E\x06\xF7\v\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0102\n\x06" +
    "\f\x06\x0E\x06\u0105\v\x06\x03\x06\x03\x06\x07\x06\u0109\n\x06\f\x06\x0E" +
    "\x06\u010C\v\x06\x03\x06\x03\x06\x07\x06\u0110\n\x06\f\x06\x0E\x06\u0113" +
    "\v\x06\x03\x06\x07\x06\u0116\n\x06\f\x06\x0E\x06\u0119\v\x06\x05\x06\u011B" +
    "\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u0121\n\x07\f\x07\x0E\x07" +
    "\u0124\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u012B\n\x07" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u0134" +
    "\n\x07\f\x07\x0E\x07\u0137\v\x07\x07\x07\u0139\n\x07\f\x07\x0E\x07\u013C" +
    "\v\x07\x03\x07\x03\x07\x07\x07\u0140\n\x07\f\x07\x0E\x07\u0143\v\x07\x03" +
    "\x07\x03\x07\x07\x07\u0147\n\x07\f\x07\x0E\x07\u014A\v\x07\x03\x07\x07" +
    "\x07\u014D\n\x07\f\x07\x0E\x07\u0150\v\x07\x05\x07\u0152\n\x07\x03\b\x03" +
    "\b\x03\b\x03\b\x07\b\u0158\n\b\f\b\x0E\b\u015B\v\b\x03\b\x03\b\x03\b\x03" +
    "\b\x03\b\x03\b\x03\b\x03\b\x06\b\u0165\n\b\r\b\x0E\b\u0166\x06\b\u0169" +
    "\n\b\r\b\x0E\b\u016A\x03\b\x03\b\x07\b\u016F\n\b\f\b\x0E\b\u0172\v\b\x03" +
    "\b\x03\b\x07\b\u0176\n\b\f\b\x0E\b\u0179\v\b\x03\b\x07\b\u017C\n\b\f\b" +
    "\x0E\b\u017F\v\b\x05\b\u0181\n\b\x03\t\x03\t\x03\t\x03\t\x07\t\u0187\n" +
    "\t\f\t\x0E\t\u018A\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
    "\x06\t\u0194\n\t\r\t\x0E\t\u0195\x03\t\x07\t\u0199\n\t\f\t\x0E\t\u019C" +
    "\v\t\x03\t\x03\t\x07\t\u01A0\n\t\f\t\x0E\t\u01A3\v\t\x03\t\x07\t\u01A6" +
    "\n\t\f\t\x0E\t\u01A9\v\t\x05\t\u01AB\n\t\x03\n\x03\n\x03\n\x03\n\x07\n" +
    "\u01B1\n\n\f\n\x0E\n\u01B4\v\n\x03\n\x03\n\x07\n\u01B8\n\n\f\n\x0E\n\u01BB" +
    "\v\n\x07\n\u01BD\n\n\f\n\x0E\n\u01C0\v\n\x03\n\x03\n\x06\n\u01C4\n\n\r" +
    "\n\x0E\n\u01C5\x03\n\x03\n\x06\n\u01CA\n\n\r\n\x0E\n\u01CB\x07\n\u01CE" +
    "\n\n\f\n\x0E\n\u01D1\v\n\x06\n\u01D3\n\n\r\n\x0E\n\u01D4\x03\n\x03\n\x07" +
    "\n\u01D9\n\n\f\n\x0E\n\u01DC\v\n\x03\n\x03\n\x07\n\u01E0\n\n\f\n\x0E\n" +
    "\u01E3\v\n\x03\n\x07\n\u01E6\n\n\f\n\x0E\n\u01E9\v\n\x05\n\u01EB\n\n\x03" +
    "\v\x03\v\x03\v\x03\v\x07\v\u01F1\n\v\f\v\x0E\v\u01F4\v\v\x03\v\x03\v\x07" +
    "\v\u01F8\n\v\f\v\x0E\v\u01FB\v\v\x07\v\u01FD\n\v\f\v\x0E\v\u0200\v\v\x03" +
    "\v\x03\v\x06\v\u0204\n\v\r\v\x0E\v\u0205\x03\v\x03\v\x06\v\u020A\n\v\r" +
    "\v\x0E\v\u020B\x07\v\u020E\n\v\f\v\x0E\v\u0211\v\v\x03\v\x03\v\x03\v\x07" +
    "\v\u0216\n\v\f\v\x0E\v\u0219\v\v\x03\v\x07\v\u021C\n\v\f\v\x0E\v\u021F" +
    "\v\v\x05\v\u0221\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0228\n\f\x03" +
    "\r\x03\r\x05\r\u022C\n\r\x03\r\x07\r\u022F\n\r\f\r\x0E\r\u0232\v\r\x03" +
    "\x0E\x03\x0E\x07\x0E\u0236\n\x0E\f\x0E\x0E\x0E\u0239\v\x0E\x03\x0F\x03" +
    "\x0F\x03\x0F\x07\x0F\u023E\n\x0F\f\x0F\x0E\x0F\u0241\v\x0F\x03\x10\x03" +
    "\x10\x03\x10\x07\x10\u0246\n\x10\f\x10\x0E\x10\u0249\v\x10\x03\x11\x03" +
    "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0264\n\x12\x03\x13" +
    "\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u026E" +
    "\n\x14\f\x14\x0E\x14\u0271\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15" +
    "\u0277\n\x15\x03\x15\x07\x15\u027A\n\x15\f\x15\x0E\x15\u027D\v\x15\x03" +
    "\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0285\n\x16\x03\x17" +
    "\x03\x17\x03\x17\x03\x17\x03\x18\x07\x18\u028C\n\x18\f\x18\x0E\x18\u028F" +
    "\v\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0294\n\x18\f\x18\x0E\x18\u0297" +
    "\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
    "\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02A4\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
    "\x1B\x03\x1B\x05\x1B\u02AB\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u02B0" +
    "\n\x1C\x03\x1C\x03\x1C\x05\x1C\u02B4\n\x1C\x03\x1C\x03\x1C\x05\x1C\u02B8" +
    "\n\x1C\x03\x1C\x05\x1C\u02BB\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02C0" +
    "\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"" +
    "\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x05\'\u02D7" +
    "\n\'\x03\'\x03\'\x03\'\x05\'\u02DC\n\'\x03\'\x03\'\x03\'\x05\'\u02E1\n" +
    "\'\x05\'\u02E3\n\'\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u02ED" +
    "\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u02F7\n*\x03+\x03+\x03" +
    "+\x03+\x03+\x03+\x03+\x03+\x05+\u0301\n+\x03,\x03,\x03,\x03,\x05,\u0307" +
    "\n,\x03,\x03,\x03,\x03,\x03,\x05,\u030E\n,\x03-\x03-\x07-\u0312\n-\f-" +
    "\x0E-\u0315\v-\x03.\x03.\x03.\x07.\u031A\n.\f.\x0E.\u031D\v.\x03.\x03" +
    ".\x03.\x03/\x03/\x07/\u0324\n/\f/\x0E/\u0327\v/\x030\x030\x030\x030\x03" +
    "0\x030\x030\x030\x050\u0331\n0\x031\x031\x071\u0335\n1\f1\x0E1\u0338\v" +
    "1\x031\x031\x051\u033C\n1\x032\x032\x032\x072\u0341\n2\f2\x0E2\u0344\v" +
    "2\x032\x032\x032\x033\x033\x033\x053\u034C\n3\x033\x033\x053\u0350\n3" +
    "\x033\x033\x053\u0354\n3\x033\x053\u0357\n3\x034\x034\x034\x034\x034\x03" +
    "4\x034\x034\x034\x034\x034\x074\u0364\n4\f4\x0E4\u0367\v4\x034\x054\u036A" +
    "\n4\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x075\u0377" +
    "\n5\f5\x0E5\u037A\v5\x035\x055\u037D\n5\x036\x036\x076\u0381\n6\f6\x0E" +
    "6\u0384\v6\x037\x037\x037\x037\x037\x037\x037\x037\x057\u038E\n7\x038" +
    "\x038\x038\x058\u0393\n8\x038\x038\x038\x058\u0398\n8\x058\u039A\n8\x03" +
    "9\x039\x039\x059\u039F\n9\x039\x039\x039\x059\u03A4\n9\x039\x039\x039" +
    "\x059\u03A9\n9\x059\u03AB\n9\x03:\x03:\x03:\x05:\u03B0\n:\x03:\x03:\x07" +
    ":\u03B4\n:\f:\x0E:\u03B7\v:\x03:\x03:\x06:\u03BB\n:\r:\x0E:\u03BC\x03" +
    ":\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u03C6\n:\f:\x0E:\u03C9\v:\x03:\x05" +
    ":\u03CC\n:\x03;\x03;\x03;\x03;\x03<\x03<\x03=\x03=\x03=\x07=\u03D7\n=" +
    "\f=\x0E=\u03DA\v=\x03=\x05=\u03DD\n=\x03=\x03=\x03=\x03=\x07=\u03E3\n" +
    "=\f=\x0E=\u03E6\v=\x03=\x03=\x07=\u03EA\n=\f=\x0E=\u03ED\v=\x03=\x05=" +
    "\u03F0\n=\x05=\u03F2\n=\x03>\x03>\x03>\x03>\x07>\u03F8\n>\f>\x0E>\u03FB" +
    "\v>\x03>\x03>\x03?\x03?\x05?\u0401\n?\x03?\x03?\x03?\x05?\u0406\n?\x03" +
    "?\x05?\u0409\n?\x03@\x03@\x03@\x03@\x05@\u040F\n@\x03@\x05@\u0412\n@\x03" +
    "A\x03A\x05A\u0416\nA\x03A\x03A\x03A\x07A\u041B\nA\fA\x0EA\u041E\vA\x07" +
    "A\u0420\nA\fA\x0EA\u0423\vA\x03A\x07A\u0426\nA\fA\x0EA\u0429\vA\x07A\u042B" +
    "\nA\fA\x0EA\u042E\vA\x03A\x03A\x03A\x03A\x03A\x07A\u0435\nA\fA\x0EA\u0438" +
    "\vA\x03A\x05A\u043B\nA\x03B\x03B\x03B\x03B\x03B\x06B\u0442\nB\rB\x0EB" +
    "\u0443\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u044D\nB\fB\x0EB\u0450" +
    "\vB\x03B\x05B\u0453\nB\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x06D\u045D" +
    "\nD\rD\x0ED\u045E\x03D\x03D\x05D\u0463\nD\x03E\x03E\x03E\x03E\x06E\u0469" +
    "\nE\rE\x0EE\u046A\x03E\x03E\x03F\x03F\x07F\u0471\nF\fF\x0EF\u0474\vF\x03" +
    "F\x05F\u0477\nF\x03F\x03F\x03F\x07F\u047C\nF\fF\x0EF\u047F\vF\x07F\u0481" +
    "\nF\fF\x0EF\u0484\vF\x03F\x07F\u0487\nF\fF\x0EF\u048A\vF\x07F\u048C\n" +
    "F\fF\x0EF\u048F\vF\x03F\x03F\x03F\x07F\u0494\nF\fF\x0EF\u0497\vF\x03F" +
    "\x05F\u049A\nF\x03F\x05F\u049D\nF\x03G\x03G\x06G\u04A1\nG\rG\x0EG\u04A2" +
    "\x03G\x03G\x03H\x03H\x03H\x06H\u04AA\nH\rH\x0EH\u04AB\x03H\x03H\x03H\x03" +
    "H\x03H\x05H\u04B3\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u04BD" +
    "\nI\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u04C8\nJ\x03K\x03" +
    "K\x03K\x03K\x03L\x03L\x03L\x03L\x03M\x03M\x07M\u04D4\nM\fM\x0EM\u04D7" +
    "\vM\x03M\x07M\u04DA\nM\fM\x0EM\u04DD\vM\x03N\x03N\x03N\x03N\x03N\x03N" +
    "\x03N\x07N\u04E6\nN\fN\x0EN\u04E9\vN\x03N\x03N\x03N\x03N\x07N\u04EF\n" +
    "N\fN\x0EN\u04F2\vN\x03N\x03N\x05N\u04F6\nN\x03O\x03O\x03O\x03O\x06O\u04FC" +
    "\nO\rO\x0EO\u04FD\x03O\x03O\x03O\x03O\x03O\x07O\u0505\nO\fO\x0EO\u0508" +
    "\vO\x03O\x05O\u050B\nO\x03P\x03P\x05P\u050F\nP\x03P\x03P\x03Q\x03Q\x03" +
    "R\x03R\x05R\u0517\nR\x06R\u0519\nR\rR\x0ER\u051A\x03S\x03S\x06S\u051F" +
    "\nS\rS\x0ES\u0520\x03S\x05S\u0524\nS\x03S\x03S\x06S\u0528\nS\rS\x0ES\u0529" +
    "\x03S\x05S\u052D\nS\x03S\x03S\x03S\x03S\x03S\x03S\x07S\u0535\nS\fS\x0E" +
    "S\u0538\vS\x03S\x03S\x07S\u053C\nS\fS\x0ES\u053F\vS\x03S\x03S\x07S\u0543" +
    "\nS\fS\x0ES\u0546\vS\x03S\x05S\u0549\nS\x03T\x03T\x03U\x03U\x03V\x03V" +
    "\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x06V\u055A\nV\rV\x0EV\u055B" +
    "\x03W\x03W\x03W\x06\u0365\u0378\u03C7\u04F0\x02\x02X\x02\x02\x04\x02\x06" +
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
    "\x02,-\x03\x02\"\"\x03\x02##\x02\u0615\x02\xBB\x03\x02\x02\x02\x04\xCA" +
    "\x03\x02\x02\x02\x06\xD1\x03\x02\x02\x02\b\xD3\x03\x02\x02\x02\n\xEF\x03" +
    "\x02\x02\x02\f\u011C\x03\x02\x02\x02\x0E\u0153\x03\x02\x02\x02\x10\u0182" +
    "\x03\x02\x02\x02\x12\u01AC\x03\x02\x02\x02\x14\u01EC\x03\x02\x02\x02\x16" +
    "\u0227\x03\x02\x02\x02\x18\u0229\x03\x02\x02\x02\x1A\u0233\x03\x02\x02" +
    "\x02\x1C\u023A\x03\x02\x02\x02\x1E\u0242\x03\x02\x02\x02 \u024A\x03\x02" +
    "\x02\x02\"\u0263\x03\x02\x02\x02$\u0265\x03\x02\x02\x02&\u0267\x03\x02" +
    "\x02\x02(\u0272\x03\x02\x02\x02*\u0280\x03\x02\x02\x02,\u0286\x03\x02" +
    "\x02\x02.\u028D\x03\x02\x02\x020\u0298\x03\x02\x02\x022\u02A3\x03\x02" +
    "\x02\x024\u02AA\x03\x02\x02\x026\u02BA\x03\x02\x02\x028\u02BC\x03\x02" +
    "\x02\x02:\u02C1\x03\x02\x02\x02<\u02C3\x03\x02\x02\x02>\u02C5\x03\x02" +
    "\x02\x02@\u02C7\x03\x02\x02\x02B\u02C9\x03\x02\x02\x02D\u02CB\x03\x02" +
    "\x02\x02F\u02CD\x03\x02\x02\x02H\u02CF\x03\x02\x02\x02J\u02D1\x03\x02" +
    "\x02\x02L\u02E2\x03\x02\x02\x02N\u02E4\x03\x02\x02\x02P\u02EC\x03\x02" +
    "\x02\x02R\u02EE\x03\x02\x02\x02T\u02F8\x03\x02\x02\x02V\u0302\x03\x02" +
    "\x02\x02X\u030F\x03\x02\x02\x02Z\u0316\x03\x02\x02\x02\\\u0321\x03\x02" +
    "\x02\x02^\u0328\x03\x02\x02\x02`\u0332\x03\x02\x02\x02b\u033D\x03\x02" +
    "\x02\x02d\u0356\x03\x02\x02\x02f\u0369\x03\x02\x02\x02h\u037C\x03\x02" +
    "\x02\x02j\u037E\x03\x02\x02\x02l\u0385\x03\x02\x02\x02n\u0399\x03\x02" +
    "\x02\x02p\u03AA\x03\x02\x02\x02r\u03CB\x03\x02\x02\x02t\u03CD\x03\x02" +
    "\x02\x02v\u03D1\x03\x02\x02\x02x\u03F1\x03\x02\x02\x02z\u03F3\x03\x02" +
    "\x02\x02|\u0408\x03\x02\x02\x02~\u0411\x03\x02\x02\x02\x80\u043A\x03\x02" +
    "\x02\x02\x82\u0452\x03\x02\x02\x02\x84\u0454\x03\x02\x02\x02\x86\u0458" +
    "\x03\x02\x02\x02\x88\u0464\x03\x02\x02\x02\x8A\u049C\x03\x02\x02\x02\x8C" +
    "\u049E\x03\x02\x02\x02\x8E\u04B2\x03\x02\x02\x02\x90\u04BC\x03\x02\x02" +
    "\x02\x92\u04C7\x03\x02\x02\x02\x94\u04C9\x03\x02\x02\x02\x96\u04CD\x03" +
    "\x02\x02\x02\x98\u04D1\x03\x02\x02\x02\x9A\u04F5\x03\x02\x02\x02\x9C\u050A" +
    "\x03\x02\x02\x02\x9E\u050C\x03\x02\x02\x02\xA0\u0512\x03\x02\x02\x02\xA2" +
    "\u0518\x03\x02\x02\x02\xA4\u0548\x03\x02\x02\x02\xA6\u054A\x03\x02\x02" +
    "\x02\xA8\u054C\x03\x02\x02\x02\xAA\u0559\x03\x02\x02\x02\xAC\u055D\x03" +
    "\x02\x02\x02\xAE\xB8\x05\x04\x03\x02\xAF\xB1\x07\x04\x02\x02\xB0\xAF\x03" +
    "\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03" +
    "\x02\x02\x02\xB3\xB5\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB7\x07" +
    "7\x02\x02\xB6\xB2\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03" +
    "\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03" +
    "\x02\x02\x02\xBB\xAE\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBB\x03" +
    "\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC2\x03\x02\x02\x02\xBF\xC1\x07" +
    "7\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03" +
    "\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC2\x03" +
    "\x02\x02\x02\xC5\xC6\x07\x02\x02\x03\xC6\x03\x03\x02\x02\x02\xC7\xCB\x05" +
    "\x06\x04\x02\xC8\xCB\x05\x12\n\x02\xC9\xCB\x05\x14\v\x02\xCA\xC7\x03\x02" +
    "\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB\x05\x03\x02" +
    "\x02\x02\xCC\xD2\x05\n\x06\x02\xCD\xD2\x05\b\x05\x02\xCE\xD2\x05\f\x07" +
    "\x02\xCF\xD2\x05\x0E\b\x02\xD0\xD2\x05\x10\t\x02\xD1\xCC\x03\x02\x02\x02" +
    "\xD1\xCD\x03\x02\x02\x02\xD1\xCE\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02" +
    "\xD1\xD0\x03\x02\x02\x02\xD2\x07\x03\x02\x02\x02\xD3\xD4\x07\x05\x02\x02" +
    "\xD4\xD5\x05.\x18\x02\xD5\xD6\x07\x1C\x02\x02\xD6\xD7\x077\x02\x02\xD7" +
    "\xD8\x05\x1C\x0F\x02\xD8\xD9\t\x02\x02\x02\xD9\xDD\x05\x1C\x0F\x02\xDA" +
    "\xDC\x077\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD" +
    "\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xED\x03\x02\x02\x02\xDF" +
    "\xDD\x03\x02\x02\x02\xE0\xEA\x05$\x13\x02\xE1\xE3\x077\x02\x02\xE2\xE1" +
    "\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5" +
    "\x03\x02\x02\x02\xE5\xE7\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xE9" +
    "\x05$\x13\x02\xE8\xE4\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8" +
    "\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA" +
    "\x03\x02\x02\x02\xED\xE0\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\t" +
    "\x03\x02\x02\x02\xEF\xF0\x07\x06\x02\x02\xF0\xF1\x05.\x18\x02\xF1\xF5" +
    "\x07\x1C\x02\x02\xF2\xF4\x077\x02\x02\xF3\xF2\x03\x02\x02\x02\xF4\xF7" +
    "\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8" +
    "\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xF9\t\x03\x02\x02\xF9\xFA" +
    "\x05\x1C\x0F\x02\xFA\xFB\t\x02\x02\x02\xFB\u0103\x05\x1C\x0F\x02\xFC\xFD" +
    "\t\x03\x02\x02\xFD\xFE\x05\x1C\x0F\x02\xFE\xFF\t\x02\x02\x02\xFF\u0100" +
    "\x05\x1C\x0F\x02\u0100\u0102\x03\x02\x02\x02\u0101\xFC\x03\x02\x02\x02" +
    "\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03" +
    "\x02\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106" +
    "\u010A\t\x03\x02\x02\u0107\u0109\x077\x02\x02\u0108\u0107\x03\x02\x02" +
    "\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A\u010B" +
    "\x03\x02\x02\x02\u010B\u011A\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02" +
    "\u010D\u0117\x05$\x13\x02\u010E\u0110\x077\x02\x02\u010F\u010E\x03\x02" +
    "\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111" +
    "\u0112\x03\x02\x02\x02\u0112\u0114\x03\x02\x02\x02\u0113\u0111\x03\x02" +
    "\x02\x02\u0114\u0116\x05$\x13\x02\u0115\u0111\x03\x02\x02\x02\u0116\u0119" +
    "\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02" +
    "\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u011A\u010D\x03" +
    "\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\v\x03\x02\x02\x02\u011C" +
    "\u011D\x07\x07\x02\x02\u011D\u011E\x05.\x18\x02\u011E\u0122\x07\x1C\x02" +
    "\x02\u011F\u0121\x077\x02\x02\u0120\u011F\x03\x02\x02\x02\u0121\u0124" +
    "\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02" +
    "\u0123\u012A\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u0126\t" +
    "\x03\x02\x02\u0126\u0127\x05\x1C\x0F\x02\u0127\u0128\t\x02\x02\x02\u0128" +
    "\u0129\x05\x1C\x0F\x02\u0129\u012B\x03\x02\x02\x02\u012A\u0125\x03\x02" +
    "\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u013A\x03\x02\x02\x02\u012C" +
    "\u012D\t\x03\x02\x02\u012D\u012E\x05\x1C\x0F\x02\u012E\u012F\t\x02\x02" +
    "\x02\u012F\u0135\x05\x1C\x0F\x02\u0130\u0131\x077\x02\x02\u0131\u0132" +
    "\x07)\x02\x02\u0132\u0134\x05\x1C\x0F\x02\u0133\u0130\x03\x02\x02\x02" +
    "\u0134\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03" +
    "\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138" +
    "\u012C\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02" +
    "\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C" +
    "\u013A\x03\x02\x02\x02\u013D\u0141\t\x03\x02\x02\u013E\u0140\x077\x02" +
    "\x02\u013F\u013E\x03\x02\x02\x02\u0140\u0143\x03\x02\x02\x02\u0141\u013F" +
    "\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0151\x03\x02\x02\x02" +
    "\u0143\u0141\x03\x02\x02\x02\u0144\u014E\x05$\x13\x02\u0145\u0147\x07" +
    "7\x02\x02\u0146\u0145\x03\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148" +
    "\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014B\x03\x02" +
    "\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B\u014D\x05$\x13\x02\u014C\u0148" +
    "\x03\x02\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02" +
    "\u014E\u014F\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u014E";
flashcardParser._serializedATNSegment1 = "\x03\x02\x02\x02\u0151\u0144\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02" +
    "\u0152\r\x03\x02\x02\x02\u0153\u0154\x07\b\x02\x02\u0154\u0155\x05.\x18" +
    "\x02\u0155\u0159\x07\x1C\x02\x02\u0156\u0158\x077\x02\x02\u0157\u0156" +
    "\x03\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02" +
    "\u0159\u015A\x03\x02\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B\u0159\x03" +
    "\x02\x02\x02\u015C\u0168\x05\x1A\x0E\x02\u015D\u015E\t\x03\x02\x02\u015E" +
    "\u015F\x05\x18\r\x02\u015F\u0160\x077\x02\x02\u0160\u0161\x05\x1A\x0E" +
    "\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0163\t\x02\x02\x02\u0163\u0165" +
    "\x05\x1A\x0E\x02\u0164\u0162\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02" +
    "\u0166\u0164\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x03" +
    "\x02\x02\x02\u0168\u015D\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A" +
    "\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x03\x02" +
    "\x02\x02\u016C\u0170\t\x03\x02\x02\u016D\u016F\x077\x02\x02\u016E\u016D" +
    "\x03\x02\x02\x02\u016F\u0172\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02" +
    "\u0170\u0171\x03\x02\x02\x02\u0171\u0180\x03\x02\x02\x02\u0172\u0170\x03" +
    "\x02\x02\x02\u0173\u017D\x05$\x13\x02\u0174\u0176\x077\x02\x02\u0175\u0174" +
    "\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02" +
    "\u0177\u0178\x03\x02\x02\x02\u0178\u017A\x03\x02\x02\x02\u0179\u0177\x03" +
    "\x02\x02\x02\u017A\u017C\x05$\x13\x02\u017B\u0177\x03\x02\x02\x02\u017C" +
    "\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02" +
    "\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180" +
    "\u0173\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\x0F\x03\x02\x02" +
    "\x02\u0182\u0183\x07\t\x02\x02\u0183\u0184\x05.\x18\x02\u0184\u0188\x07" +
    "\x1C\x02\x02\u0185\u0187\x077\x02\x02\u0186\u0185\x03\x02\x02\x02\u0187" +
    "\u018A\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02" +
    "\x02\x02\u0189\u018B\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B" +
    "\u018C\x05\x1A\x0E\x02\u018C\u018D\t\x02\x02\x02\u018D\u018E\x05\x18\r" +
    "\x02\u018E\u018F\x077\x02\x02\u018F\u0190\x05\x1A\x0E\x02\u0190\u0193" +
    "\x03\x02\x02\x02\u0191\u0192\x07)\x02\x02\u0192\u0194\x05\x1A\x0E\x02" +
    "\u0193\u0191\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0193\x03" +
    "\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u019A\x03\x02\x02\x02\u0197" +
    "\u0199\x077\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199\u019C\x03\x02\x02" +
    "\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u01AA" +
    "\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D\u01A7\x05$\x13\x02" +
    "\u019E\u01A0\x077\x02\x02\u019F\u019E\x03\x02\x02\x02\u01A0\u01A3\x03" +
    "\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2" +
    "\u01A4\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A4\u01A6\x05$\x13" +
    "\x02\u01A5\u01A1\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7\u01A5" +
    "\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02" +
    "\u01A9\u01A7\x03\x02\x02\x02\u01AA\u019D\x03\x02\x02\x02\u01AA\u01AB\x03" +
    "\x02\x02\x02\u01AB\x11\x03\x02\x02\x02\u01AC\u01AD\x07\n\x02\x02\u01AD" +
    "\u01AE\x05.\x18\x02\u01AE\u01B2\x07\x1C\x02\x02\u01AF\u01B1\x077\x02\x02" +
    "\u01B0\u01AF\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03" +
    "\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01BE\x03\x02\x02\x02\u01B4" +
    "\u01B2\x03\x02\x02\x02\u01B5\u01B9\x05\"\x12\x02\u01B6\u01B8\x077\x02" +
    "\x02\u01B7\u01B6\x03\x02\x02\x02\u01B8\u01BB\x03\x02\x02\x02\u01B9\u01B7" +
    "\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02" +
    "\u01BB\u01B9\x03\x02\x02\x02\u01BC\u01B5\x03\x02\x02\x02\u01BD\u01C0\x03" +
    "\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF" +
    "\u01D2\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C3\t\x03\x02" +
    "\x02\u01C2\u01C4\x05 \x11\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4\u01C5" +
    "\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02" +
    "\u01C6\u01CF\x03\x02\x02\x02\u01C7\u01C9\t\x02\x02\x02\u01C8\u01CA\x05" +
    " \x11\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
    "\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CE\x03\x02" +
    "\x02\x02\u01CD\u01C7\x03\x02\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF" +
    "\u01CD\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D3\x03\x02" +
    "\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D2\u01C1\x03\x02\x02\x02\u01D3" +
    "\u01D4\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02" +
    "\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01DA\t\x03\x02\x02\u01D7\u01D9" +
    "\x077\x02\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02" +
    "\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01EA\x03" +
    "\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01E7\x05$\x13\x02\u01DE" +
    "\u01E0\x077\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01E0\u01E3\x03\x02\x02" +
    "\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E4" +
    "\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E4\u01E6\x05$\x13\x02" +
    "\u01E5\u01E1\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03" +
    "\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9" +
    "\u01E7\x03\x02\x02\x02\u01EA\u01DD\x03\x02\x02\x02\u01EA\u01EB\x03\x02" +
    "\x02\x02\u01EB\x13\x03\x02\x02\x02\u01EC\u01ED\x07\v\x02\x02\u01ED\u01EE" +
    "\x05.\x18\x02\u01EE\u01F2\x07\x1C\x02\x02\u01EF\u01F1\x077\x02\x02\u01F0" +
    "\u01EF\x03\x02\x02\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03\x02" +
    "\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01FE\x03\x02\x02\x02\u01F4" +
    "\u01F2\x03\x02\x02\x02\u01F5\u01F9\x05\"\x12\x02\u01F6\u01F8\x077\x02" +
    "\x02\u01F7\u01F6\x03\x02\x02\x02\u01F8\u01FB\x03\x02\x02\x02\u01F9\u01F7" +
    "\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FD\x03\x02\x02\x02" +
    "\u01FB\u01F9\x03\x02\x02\x02\u01FC\u01F5\x03\x02\x02\x02\u01FD\u0200\x03" +
    "\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF" +
    "\u0201\x03\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0201\u0203\t\x02\x02" +
    "\x02\u0202\u0204\x05 \x11\x02\u0203\u0202\x03\x02\x02\x02\u0204\u0205" +
    "\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02" +
    "\u0206\u020F\x03\x02\x02\x02\u0207\u0209\x07)\x02\x02\u0208\u020A\x05" +
    " \x11\x02\u0209\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B" +
    "\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020E\x03\x02" +
    "\x02\x02\u020D\u0207\x03\x02\x02\x02\u020E\u0211\x03\x02\x02\x02\u020F" +
    "\u020D\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0220\x03\x02" +
    "\x02\x02\u0211\u020F\x03\x02\x02\x02\u0212\u0213\x07)\x02\x02\u0213\u021D" +
    "\x05$\x13\x02\u0214\u0216\x077\x02\x02\u0215\u0214\x03\x02\x02\x02\u0216" +
    "\u0219\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02" +
    "\x02\x02\u0218\u021A\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A" +
    "\u021C\x05$\x13\x02\u021B\u0217\x03\x02\x02\x02\u021C\u021F\x03\x02\x02" +
    "\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u0221" +
    "\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02\u0220\u0212\x03\x02\x02\x02" +
    "\u0220\u0221\x03\x02\x02\x02\u0221\x15\x03\x02\x02\x02\u0222\u0228\x05" +
    "\x98M\x02\u0223\u0228\x05\xA4S\x02\u0224\u0228\x05\x8AF\x02\u0225\u0228" +
    "\x05`1\x02\u0226\u0228\x05j6\x02\u0227\u0222\x03\x02\x02\x02\u0227\u0223" +
    "\x03\x02\x02\x02\u0227\u0224\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02" +
    "\u0227\u0226\x03\x02\x02\x02\u0228\x17\x03\x02\x02\x02\u0229\u0230\x05" +
    "\x16\f\x02\u022A\u022C\x077\x02\x02\u022B\u022A\x03\x02\x02\x02\u022B" +
    "\u022C\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022F\x05\x16" +
    "\f\x02\u022E\u022B\x03\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230\u022E" +
    "\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\x19\x03\x02\x02\x02" +
    "\u0232\u0230\x03\x02\x02\x02\u0233\u0237\x05\"\x12\x02\u0234\u0236\x07" +
    "7\x02\x02\u0235\u0234\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237" +
    "\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\x1B\x03\x02\x02" +
    "\x02\u0239\u0237\x03\x02\x02\x02\u023A\u023F\x05\x18\r\x02\u023B\u023C" +
    "\x07)\x02\x02\u023C\u023E\x05\x18\r\x02\u023D\u023B\x03\x02\x02\x02\u023E" +
    "\u0241\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F\u0240\x03\x02" +
    "\x02\x02\u0240\x1D\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0242\u0247" +
    "\x05\x1A\x0E\x02\u0243\u0244\x07)\x02\x02\u0244\u0246\x05\x1A\x0E\x02" +
    "\u0245\u0243\x03\x02\x02\x02\u0246\u0249\x03\x02\x02\x02\u0247\u0245\x03" +
    "\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248\x1F\x03\x02\x02\x02\u0249" +
    "\u0247\x03\x02\x02\x02\u024A\u024B\x05\x1A\x0E\x02\u024B!\x03\x02\x02" +
    "\x02\u024C\u0264\x07\xA4\x02\x02\u024D\u0264\x078\x02\x02\u024E\u0264" +
    "\x05&\x14\x02\u024F\u0264\x05\x98M\x02\u0250\u0264\x05\x82B\x02\u0251" +
    "\u0264\x05x=\x02\u0252\u0264\x05\x8EH\x02\u0253\u0264\x05\x8AF\x02\u0254" +
    "\u0264\x05\x8CG\x02\u0255\u0264\x05\xA4S\x02\u0256\u0264\x05~@\x02\u0257" +
    "\u0264\x05\x90I\x02\u0258\u0264\x05`1\x02\u0259\u0264\x05j6\x02\u025A" +
    "\u0264\x05\\/\x02\u025B\u0264\x05P)\x02\u025C\u0264\x05R*\x02\u025D\u0264" +
    "\x05V,\x02\u025E\u0264\x05T+\x02\u025F\u0264\x05X-\x02\u0260\u0264\x05" +
    "|?\x02\u0261\u0264\x05\x9EP\x02\u0262\u0264\x05\xACW\x02\u0263\u024C\x03" +
    "\x02\x02\x02\u0263\u024D\x03\x02\x02\x02\u0263\u024E\x03\x02\x02\x02\u0263" +
    "\u024F\x03\x02\x02\x02\u0263\u0250\x03\x02\x02\x02\u0263\u0251\x03\x02" +
    "\x02\x02\u0263\u0252\x03\x02\x02\x02\u0263\u0253\x03\x02\x02\x02\u0263" +
    "\u0254\x03\x02\x02\x02\u0263\u0255\x03\x02\x02\x02\u0263\u0256\x03\x02" +
    "\x02\x02\u0263\u0257\x03\x02\x02\x02\u0263\u0258\x03\x02\x02\x02\u0263" +
    "\u0259\x03\x02\x02\x02\u0263\u025A\x03\x02\x02\x02\u0263\u025B\x03\x02" +
    "\x02\x02\u0263\u025C\x03\x02\x02\x02\u0263\u025D\x03\x02\x02\x02\u0263" +
    "\u025E\x03\x02\x02\x02\u0263\u025F\x03\x02\x02\x02\u0263\u0260\x03\x02" +
    "\x02\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0262\x03\x02\x02\x02\u0264" +
    "#\x03\x02\x02\x02\u0265\u0266\x05\"\x12\x02\u0266%\x03\x02\x02\x02\u0267" +
    "\u026F\x05(\x15\x02\u0268\u026E\x05(\x15\x02\u0269\u026E\x05\x8AF\x02" +
    "\u026A\u026E\x05\x8CG\x02\u026B\u026E\x05x=\x02\u026C\u026E\x05~@\x02" +
    "\u026D\u0268\x03\x02\x02\x02\u026D\u0269\x03\x02\x02\x02\u026D\u026A\x03" +
    "\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026C\x03\x02\x02\x02\u026E" +
    "\u0271\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02" +
    "\x02\x02\u0270\'\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0272\u0276" +
    "\x07\x12\x02\x02\u0273\u0277\x075\x02\x02\u0274\u0277\x076\x02\x02\u0275" +
    "\u0277\x03\x02\x02\x02\u0276\u0273\x03\x02\x02\x02\u0276\u0274\x03\x02" +
    "\x02\x02\u0276\u0275\x03\x02\x02\x02\u0277\u027B\x03\x02\x02\x02\u0278" +
    "\u027A\x05\xA4S\x02\u0279\u0278\x03\x02\x02\x02\u027A\u027D\x03\x02\x02" +
    "\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027E" +
    "\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027E\u027F\x05\xA6T\x02" +
    "\u027F)\x03\x02\x02\x02\u0280\u0281\x07\r\x02\x02\u0281\u0282\x05\xA4" +
    "S\x02\u0282\u0284\x07\x1C\x02\x02\u0283\u0285\x05,\x17\x02\u0284\u0283" +
    "\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285+\x03\x02\x02\x02\u0286" +
    "\u0287\x07L\x02\x02\u0287\u0288\x075\x02\x02\u0288\u0289\x07\x1C\x02\x02" +
    "\u0289-\x03\x02\x02\x02\u028A\u028C\x050\x19\x02\u028B\u028A\x03\x02\x02" +
    "\x02\u028C\u028F\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E" +
    "\x03\x02\x02\x02\u028E\u0295\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02" +
    "\u0290\u0294\x07\x90\x02\x02\u0291\u0294\x07\x91\x02\x02\u0292\u0294\x05" +
    "2\x1A\x02\u0293\u0290\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0293" +
    "\u0292\x03\x02\x02\x02\u0294\u0297\x03\x02\x02\x02\u0295\u0293\x03\x02" +
    "\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296/\x03\x02\x02\x02\u0297\u0295" +
    "\x03\x02\x02\x02\u0298\u0299\t\x04\x02\x02\u02991\x03\x02\x02\x02\u029A" +
    "\u02A4\x056\x1C\x02\u029B\u02A4\x05n8\x02\u029C\u02A4\x058\x1D\x02\u029D" +
    "\u02A4\x05:\x1E\x02\u029E\u02A4\x05<\x1F\x02\u029F\u02A4\x05> \x02\u02A0" +
    "\u02A4\x05@!\x02\u02A1\u02A4\x05B\"\x02\u02A2\u02A4\x07e\x02\x02\u02A3" +
    "\u029A\x03\x02\x02\x02\u02A3\u029B\x03\x02\x02\x02\u02A3\u029C\x03\x02" +
    "\x02\x02\u02A3\u029D\x03\x02\x02\x02\u02A3\u029E\x03\x02\x02\x02\u02A3" +
    "\u029F\x03\x02\x02\x02\u02A3\u02A0\x03\x02\x02\x02\u02A3\u02A1\x03\x02" +
    "\x02\x02\u02A3\u02A2\x03\x02\x02\x02\u02A43\x03\x02\x02\x02\u02A5\u02AB" +
    "\x07\x8E\x02\x02\u02A6\u02AB\x07\x8F\x02\x02\u02A7\u02AB\x07\x90\x02\x02" +
    "\u02A8\u02AB\x07\x91\x02\x02\u02A9\u02AB\x03\x02\x02\x02\u02AA\u02A5\x03" +
    "\x02\x02\x02\u02AA\u02A6\x03\x02\x02\x02\u02AA\u02A7\x03\x02\x02\x02\u02AA" +
    "\u02A8\x03\x02\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02AB5\x03\x02\x02" +
    "\x02\u02AC\u02AF\x07\\\x02\x02\u02AD\u02B0\x070\x02\x02\u02AE\u02B0\x07" +
    "\xA1\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02AF\u02AE\x03\x02\x02\x02\u02AF" +
    "\u02B0\x03\x02\x02\x02\u02B0\u02BB\x03\x02\x02\x02\u02B1\u02B3\x07s\x02" +
    "\x02\u02B2\u02B4\x070\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B3\u02B4" +
    "\x03\x02\x02\x02\u02B4\u02BB\x03\x02\x02\x02\u02B5\u02B7\x07]\x02\x02" +
    "\u02B6\u02B8\x070\x02\x02\u02B7\u02B6\x03\x02\x02\x02\u02B7\u02B8\x03" +
    "\x02\x02\x02\u02B8\u02BB\x03\x02\x02\x02\u02B9\u02BB\x07^\x02\x02\u02BA" +
    "\u02AC\x03\x02\x02\x02\u02BA\u02B1\x03\x02\x02\x02\u02BA\u02B5\x03\x02" +
    "\x02\x02\u02BA\u02B9\x03\x02\x02\x02\u02BB7\x03\x02\x02\x02\u02BC\u02BF" +
    "\t\x05\x02\x02\u02BD\u02BE\x07\x1D\x02\x02\u02BE\u02C0\x072\x02\x02\u02BF" +
    "\u02BD\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C09\x03\x02\x02" +
    "\x02\u02C1\u02C2\t\x06\x02\x02\u02C2;\x03\x02\x02\x02\u02C3\u02C4\t\x07" +
    "\x02\x02\u02C4=\x03\x02\x02\x02\u02C5\u02C6\t\b\x02\x02\u02C6?\x03\x02" +
    "\x02\x02\u02C7\u02C8\t\t\x02\x02\u02C8A\x03\x02\x02\x02\u02C9\u02CA\t" +
    "\n\x02\x02\u02CAC\x03\x02\x02\x02\u02CB\u02CC\t\v\x02\x02\u02CCE\x03\x02" +
    "\x02\x02\u02CD\u02CE\t\f\x02\x02\u02CEG\x03\x02\x02\x02\u02CF\u02D0\t" +
    "\r\x02\x02\u02D0I\x03\x02\x02\x02\u02D1\u02D2\t\x0E\x02\x02\u02D2K\x03" +
    "\x02\x02\x02\u02D3\u02D6\x07j\x02\x02\u02D4\u02D5\x07\x1D\x02\x02\u02D5" +
    "\u02D7\x072\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02" +
    "\x02\u02D7\u02E3\x03\x02\x02\x02\u02D8\u02DB\x07}\x02\x02\u02D9\u02DA" +
    "\x07\x1D\x02\x02\u02DA\u02DC\x072\x02\x02\u02DB\u02D9\x03\x02\x02\x02" +
    "\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02E3\x03\x02\x02\x02\u02DD\u02E0\x07" +
    "\x8A\x02\x02\u02DE\u02DF\x07\x1D\x02\x02\u02DF\u02E1\x072\x02\x02\u02E0" +
    "\u02DE\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1\u02E3\x03\x02" +
    "\x02\x02\u02E2\u02D3\x03\x02\x02\x02\u02E2\u02D8\x03\x02\x02\x02\u02E2" +
    "\u02DD\x03\x02\x02\x02\u02E3M\x03\x02\x02\x02\u02E4\u02E5\t\x0F\x02\x02" +
    "\u02E5O\x03\x02\x02\x02\u02E6\u02E7\x05D#\x02\u02E7\u02E8\x07\x1D\x02" +
    "\x02\u02E8\u02E9\x05v<\x02\u02E9\u02EA\x07\x1C\x02\x02\u02EA\u02ED\x03" +
    "\x02\x02\x02\u02EB\u02ED\x073\x02\x02\u02EC\u02E6\x03\x02\x02\x02\u02EC" +
    "\u02EB\x03\x02\x02\x02\u02EDQ\x03\x02\x02\x02\u02EE\u02EF\x05F$\x02\u02EF" +
    "\u02F0\x07\x1D\x02\x02\u02F0\u02F1\x05v<\x02\u02F1\u02F6\x07\x1C\x02\x02" +
    "\u02F2\u02F3\x07O\x02\x02\u02F3\u02F4\x05\xAAV\x02\u02F4\u02F5\x07\x1C" +
    "\x02\x02\u02F5\u02F7\x03\x02\x02\x02\u02F6\u02F2\x03\x02\x02\x02\u02F6" +
    "\u02F7\x03\x02\x02\x02\u02F7S\x03\x02\x02\x02\u02F8\u02F9\x05J&\x02\u02F9" +
    "\u02FA\x07\x1D\x02\x02\u02FA\u02FB\x05v<\x02\u02FB\u0300\x07\x1C\x02\x02" +
    "\u02FC\u02FD\x07O\x02\x02\u02FD\u02FE\x05\xAAV\x02\u02FE\u02FF\x07\x1C" +
    "\x02\x02\u02FF\u0301\x03\x02\x02\x02\u0300\u02FC\x03\x02\x02\x02\u0300" +
    "\u0301\x03\x02\x02\x02\u0301U\x03\x02\x02\x02\u0302\u0303\x05H%\x02\u0303" +
    "\u0306\x07\x1D\x02\x02\u0304\u0307\x05v<\x02\u0305\u0307\x05t;\x02\u0306" +
    "\u0304\x03\x02\x02\x02\u0306\u0305\x03\x02\x02\x02\u0307\u0308\x03\x02" +
    "\x02\x02\u0308\u030D\x07\x1C\x02\x02\u0309\u030A\x07O\x02\x02\u030A\u030B" +
    "\x05\xAAV\x02\u030B\u030C\x07\x1C\x02\x02\u030C\u030E\x03\x02\x02\x02" +
    "\u030D\u0309\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030EW\x03\x02" +
    "\x02\x02\u030F\u0313\x05Z.\x02\u0310\u0312\x05r:\x02\u0311\u0310\x03\x02" +
    "\x02\x02\u0312\u0315\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0313" +
    "\u0314\x03\x02\x02\x02\u0314Y\x03\x02\x02\x02\u0315\u0313\x03\x02\x02" +
    "\x02\u0316\u0317\x05N(\x02\u0317\u031B\x07\x1D\x02\x02\u0318\u031A\x07" +
    "\x04\x02\x02\u0319\u0318\x03\x02\x02\x02\u031A\u031D\x03\x02\x02\x02\u031B" +
    "\u0319\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u031E\x03\x02" +
    "\x02\x02\u031D\u031B\x03\x02\x02\x02\u031E\u031F\x05v<\x02\u031F\u0320" +
    "\x07\x1C\x02\x02\u0320[\x03\x02\x02\x02\u0321\u0325\x05^0\x02\u0322\u0324" +
    "\x05r:\x02\u0323\u0322\x03\x02\x02\x02\u0324\u0327\x03\x02\x02\x02\u0325" +
    "\u0323\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326]\x03\x02\x02" +
    "\x02\u0327\u0325\x03\x02\x02\x02\u0328\u0329\x05L\'\x02\u0329\u032A\x07" +
    "\x1D\x02\x02\u032A\u032B\x05v<\x02\u032B\u0330\x07\x1C\x02\x02\u032C\u032D" +
    "\x07O\x02\x02\u032D\u032E\x05\xAAV\x02\u032E\u032F\x07\x1C\x02\x02\u032F" +
    "\u0331\x03\x02\x02\x02\u0330\u032C\x03\x02\x02\x02\u0330\u0331\x03\x02" +
    "\x02\x02\u0331_\x03\x02\x02\x02\u0332\u0336\x05b2\x02\u0333\u0335\x05" +
    "f4\x02\u0334\u0333\x03\x02\x02\x02\u0335\u0338\x03\x02\x02\x02\u0336\u0334" +
    "\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u033B\x03\x02\x02\x02" +
    "\u0338\u0336\x03\x02\x02\x02\u0339\u033A\x077\x02\x02\u033A\u033C\x07" +
    "Q\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C" +
    "a\x03\x02\x02\x02\u033D\u033E\x05d3\x02\u033E\u0342\x07\x1D\x02\x02\u033F" +
    "\u0341\x07\x04\x02\x02\u0340\u033F\x03\x02\x02\x02\u0341\u0344\x03\x02" +
    "\x02\x02\u0342\u0340\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343" +
    "\u0345\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02\u0345\u0346\x05v<\x02" +
    "\u0346\u0347\x07\x1C\x02\x02\u0347c\x03\x02\x02\x02\u0348\u034B\x07g\x02" +
    "\x02\u0349\u034C\x070\x02\x02\u034A\u034C\x07\xA1\x02\x02\u034B\u0349" +
    "\x03\x02\x02\x02\u034B\u034A\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02" +
    "\u034C\u0357\x03\x02\x02\x02\u034D\u034F\x07|\x02\x02\u034E\u0350\x07" +
    "0\x02\x02\u034F\u034E\x03\x02\x02\x02\u034F\u0350\x03\x02\x02\x02\u0350" +
    "\u0357\x03\x02\x02\x02\u0351\u0353\x07h\x02\x02\u0352\u0354\x070\x02\x02" +
    "\u0353\u0352\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\u0357\x03" +
    "\x02\x02\x02\u0355\u0357\x07i\x02\x02\u0356\u0348\x03\x02\x02\x02\u0356" +
    "\u034D\x03\x02\x02\x02\u0356\u0351\x03\x02\x02\x02\u0356\u0355\x03\x02" +
    "\x02\x02\u0357e\x03\x02\x02\x02\u0358\u0359\x07M\x02\x02\u0359\u035A\x07" +
    "\x1D\x02\x02\u035A\u035B\x05v<\x02\u035B\u035C\x07\x1C\x02\x02\u035C\u036A" +
    "\x03\x02\x02\x02\u035D\u035E\t\x10\x02\x02\u035E\u035F\x07\x1D\x02\x02" +
    "\u035F\u0360\x075\x02\x02\u0360\u036A\x07\x1C\x02\x02\u0361\u0365\t\x11" +
    "\x02\x02\u0362\u0364\v\x02\x02\x02\u0363\u0362\x03\x02\x02\x02\u0364\u0367" +
    "\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0365\u0363\x03\x02\x02\x02" +
    "\u0366\u0368\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0368\u036A\x07" +
    "\x1C\x02\x02\u0369\u0358\x03\x02\x02\x02\u0369\u035D\x03\x02\x02\x02\u0369" +
    "\u0361\x03\x02\x02\x02\u036Ag\x03\x02\x02\x02\u036B\u036C\x07M\x02\x02" +
    "\u036C\u036D\x07\x1D\x02\x02\u036D\u036E\x05v<\x02\u036E\u036F\x07\x1C" +
    "\x02\x02\u036F\u037D\x03\x02\x02\x02\u0370\u0371\t\x10\x02\x02\u0371\u0372" +
    "\x07\x1D\x02\x02\u0372\u0373\x075\x02\x02\u0373\u037D\x07\x1C\x02\x02" +
    "\u0374\u0378\t\x11\x02\x02\u0375\u0377\v\x02\x02\x02\u0376\u0375\x03\x02" +
    "\x02\x02\u0377\u037A\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0378" +
    "\u0376\x03\x02\x02\x02\u0379\u037B\x03\x02\x02\x02\u037A\u0378\x03\x02" +
    "\x02\x02\u037B\u037D\x07\x1C\x02\x02\u037C\u036B\x03\x02\x02\x02\u037C" +
    "\u0370\x03\x02\x02\x02\u037C\u0374\x03\x02\x02\x02\u037Di\x03\x02\x02" +
    "\x02\u037E\u0382\x05l7\x02\u037F\u0381\x05r:\x02\u0380\u037F\x03\x02\x02" +
    "\x02\u0381\u0384\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0382\u0383" +
    "\x03\x02\x02\x02\u0383k\x03\x02\x02\x02\u0384\u0382\x03\x02\x02\x02\u0385" +
    "\u0386\x05p9\x02\u0386\u0387\x07\x1D\x02\x02\u0387\u0388\x05v<\x02\u0388" +
    "\u038D\x07\x1C\x02\x02\u0389\u038A\x07O\x02\x02\u038A\u038B\x05\xAAV\x02" +
    "\u038B\u038C\x07\x1C\x02\x02\u038C\u038E\x03\x02\x02\x02\u038D\u0389\x03" +
    "\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038Em\x03\x02\x02\x02\u038F" +
    "\u0392\x07[\x02\x02\u0390\u0391\x07\x1D\x02\x02\u0391\u0393\x071\x02\x02" +
    "\u0392\u0390\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u039A\x03" +
    "\x02\x02\x02\u0394\u0397\x07r\x02\x02\u0395\u0396\x07\x1D\x02\x02\u0396" +
    "\u0398\x071\x02\x02\u0397\u0395\x03\x02\x02\x02\u0397\u0398\x03\x02\x02" +
    "\x02\u0398\u039A\x03\x02\x02\x02\u0399\u038F\x03\x02\x02\x02\u0399\u0394" +
    "\x03\x02\x02\x02\u039Ao\x03\x02\x02\x02\u039B\u039E\x07f\x02\x02\u039C" +
    "\u039D\x07\x1D\x02\x02\u039D\u039F\x071\x02\x02\u039E\u039C\x03\x02\x02" +
    "\x02\u039E\u039F\x03\x02\x02\x02\u039F\u03AB\x03\x02\x02\x02\u03A0\u03A3" +
    "\x07{\x02\x02\u03A1\u03A2\x07\x1D\x02\x02\u03A2\u03A4\x071\x02\x02\u03A3" +
    "\u03A1\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03AB\x03\x02" +
    "\x02\x02\u03A5\u03A8\x07\x8B\x02\x02\u03A6\u03A7\x07\x1D\x02\x02\u03A7" +
    "\u03A9\x071\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02" +
    "\x02\u03A9\u03AB\x03\x02\x02\x02\u03AA\u039B\x03\x02\x02\x02\u03AA\u03A0" +
    "\x03\x02\x02\x02\u03AA\u03A5\x03\x02\x02\x02\u03ABq\x03\x02\x02\x02\u03AC" +
    "\u03AD\x07\x15\x02\x02\u03AD\u03B0\x05\xA4S\x02\u03AE\u03B0\x07M\x02\x02" +
    "\u03AF\u03AC\x03\x02\x02\x02\u03AF\u03AE\x03\x02\x02\x02\u03B0\u03B1\x03" +
    "\x02\x02\x02\u03B1\u03B5\x07\x1D\x02\x02\u03B2\u03B4\x07\x04\x02\x02\u03B3" +
    "\u03B2\x03\x02\x02\x02\u03B4\u03B7\x03\x02\x02\x02\u03B5\u03B3\x03\x02" +
    "\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03BA\x03\x02\x02\x02\u03B7" +
    "\u03B5\x03\x02\x02\x02\u03B8\u03BB\x05\xA4S\x02\u03B9\u03BB\x077\x02\x02" +
    "\u03BA\u03B8\x03\x02\x02\x02\u03BA\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03" +
    "\x02\x02\x02\u03BC\u03BA\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD" +
    "\u03BE\x03\x02\x02\x02\u03BE\u03CC\x07\x1C\x02\x02\u03BF\u03C0\t\x10\x02" +
    "\x02\u03C0\u03C1\x07\x1D\x02\x02\u03C1\u03C2\x075\x02\x02\u03C2\u03CC" +
    "\x07\x1C\x02\x02\u03C3\u03C7\t\x11\x02\x02\u03C4\u03C6\v\x02\x02\x02\u03C5" +
    "\u03C4\x03\x02\x02\x02\u03C6\u03C9\x03\x02\x02\x02\u03C7\u03C8\x03\x02" +
    "\x02\x02\u03C7\u03C5\x03\x02\x02\x02\u03C8\u03CA\x03\x02\x02\x02\u03C9" +
    "\u03C7\x03\x02\x02\x02\u03CA\u03CC\x07\x1C\x02\x02\u03CB\u03AF\x03\x02" +
    "\x02\x02\u03CB\u03BF\x03\x02\x02\x02\u03CB\u03C3\x03\x02\x02\x02\u03CC" +
    "s\x03\x02\x02\x02\u03CD\u03CE\x07\xA0\x02\x02\u03CE\u03CF\x07 \x02\x02" +
    "\u03CF\u03D0\x075\x02\x02\u03D0u\x03\x02\x02\x02\u03D1\u03D2\x07\xA3\x02" +
    "\x02\u03D2w\x03\x02\x02\x02\u03D3\u03D4\x07\x1A\x02\x02\u03D4\u03DC\x07" +
    "\x1C\x02\x02\u03D5\u03D7\x07\x04\x02\x02\u03D6\u03D5\x03\x02\x02\x02\u03D7" +
    "\u03DA\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D8\u03D9\x03\x02" +
    "\x02\x02\u03D9\u03DB\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DB" +
    "\u03DD\x05z>\x02\u03DC\u03D8\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02" +
    "\u03DD\u03F2\x03\x02\x02\x02\u03DE\u03DF\x07\x1A\x02\x02\u03DF\u03E4\x05" +
    "\xA4S\x02\u03E0\u03E3\x07\x1D\x02\x02\u03E1\u03E3\x05\xA4S\x02\u03E2\u03E0" +
    "\x03\x02\x02\x02\u03E2\u03E1\x03\x02\x02\x02\u03E3\u03E6\x03\x02\x02\x02" +
    "\u03E4\u03E2\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E7\x03" +
    "\x02\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E7\u03EF\x07\x1C\x02\x02\u03E8" +
    "\u03EA\x07\x04\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03EA\u03ED\x03\x02" +
    "\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC" +
    "\u03EE\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE\u03F0\x05z>\x02" +
    "\u03EF\u03EB\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F2\x03" +
    "\x02\x02\x02\u03F1\u03D3\x03\x02\x02\x02\u03F1\u03DE\x03\x02\x02\x02\u03F2" +
    "y\x03\x02\x02\x02\u03F3\u03F4\x07\x1A\x02\x02\u03F4\u03F9\x05\xA4S\x02" +
    "\u03F5\u03F8\x07\x1D\x02\x02\u03F6\u03F8\x05\xA4S\x02\u03F7\u03F5\x03" +
    "\x02\x02\x02\u03F7\u03F6\x03\x02\x02\x02\u03F8\u03FB\x03\x02";
flashcardParser._serializedATNSegment2 = "\x02\x02\u03F9\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA" +
    "\u03FC\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FC\u03FD\x07\x1C" +
    "\x02\x02\u03FD{\x03\x02\x02\x02\u03FE\u0400\x07\x0F\x02\x02\u03FF\u0401" +
    "\x05\xA4S\x02\u0400\u03FF\x03\x02\x02\x02\u0400\u0401\x03\x02\x02\x02" +
    "\u0401\u0402\x03\x02\x02\x02\u0402\u0409\x07\x1C\x02\x02\u0403\u0405\x07" +
    "\x10\x02\x02\u0404\u0406\x05\xA4S\x02\u0405\u0404\x03\x02\x02\x02\u0405" +
    "\u0406\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02\u0407\u0409\x07\x1C" +
    "\x02\x02\u0408\u03FE\x03\x02\x02\x02\u0408\u0403\x03\x02\x02\x02\u0409" +
    "}\x03\x02\x02\x02\u040A\u0412\x07F\x02\x02\u040B\u0412\x07D\x02\x02\u040C" +
    "\u040E\x07E\x02\x02\u040D\u040F\x07:\x02\x02\u040E\u040D\x03\x02\x02\x02" +
    "\u040E\u040F\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0412\x07" +
    "\x02\x02\x03\u0411\u040A\x03\x02\x02\x02\u0411\u040B\x03\x02\x02\x02\u0411" +
    "\u040C\x03\x02\x02\x02\u0412\x7F\x03\x02\x02\x02\u0413\u0415\x07q\x02" +
    "\x02\u0414\u0416\x05\xA4S\x02\u0415\u0414\x03\x02\x02\x02\u0415\u0416" +
    "\x03\x02\x02\x02\u0416\u042C\x03\x02\x02\x02\u0417\u0421\x05\xA4S\x02" +
    "\u0418\u041C\x077\x02\x02\u0419\u041B\x07\x04\x02\x02\u041A\u0419\x03" +
    "\x02\x02\x02\u041B\u041E\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02\u041C" +
    "\u041D\x03\x02\x02\x02\u041D\u0420\x03\x02\x02\x02\u041E\u041C\x03\x02" +
    "\x02\x02\u041F\u0418\x03\x02\x02\x02\u0420\u0423\x03\x02\x02\x02\u0421" +
    "\u041F\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422\u0427\x03\x02" +
    "\x02\x02\u0423\u0421\x03\x02\x02\x02\u0424\u0426\x077\x02\x02\u0425\u0424" +
    "\x03\x02\x02\x02\u0426\u0429\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02" +
    "\u0427\u0428\x03\x02\x02\x02\u0428\u042B\x03\x02\x02\x02\u0429\u0427\x03" +
    "\x02\x02\x02\u042A\u0417\x03\x02\x02\x02\u042B\u042E\x03\x02\x02\x02\u042C" +
    "\u042A\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042F\x03\x02" +
    "\x02\x02\u042E\u042C\x03\x02\x02\x02\u042F\u043B\x07\x1C\x02\x02\u0430" +
    "\u0436\x07q\x02\x02\u0431\u0435\x05\xA4S\x02\u0432\u0435\x077\x02\x02" +
    "\u0433\u0435\x07\x04\x02\x02\u0434\u0431\x03\x02\x02\x02\u0434\u0432\x03" +
    "\x02\x02\x02\u0434\u0433\x03\x02\x02\x02\u0435\u0438\x03\x02\x02\x02\u0436" +
    "\u0434\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\u0439\x03\x02" +
    "\x02\x02\u0438\u0436\x03\x02\x02\x02\u0439\u043B\x07\x02\x02\x03\u043A" +
    "\u0413\x03\x02\x02\x02\u043A\u0430\x03\x02\x02\x02\u043B\x81\x03\x02\x02" +
    "\x02\u043C\u0441\x07>\x02\x02\u043D\u0442\x05\xA4S\x02\u043E\u0442\x07" +
    "\x1D\x02\x02\u043F\u0442\x07\xA3\x02\x02\u0440\u0442\x077\x02\x02\u0441" +
    "\u043D\x03\x02\x02\x02\u0441\u043E\x03\x02\x02\x02\u0441\u043F\x03\x02" +
    "\x02\x02\u0441\u0440\x03\x02\x02\x02\u0442\u0443\x03\x02\x02\x02\u0443" +
    "\u0441\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0445\x03\x02" +
    "\x02\x02\u0445\u0453\x07\x1C\x02\x02\u0446\u044E\x07>\x02\x02\u0447\u044D" +
    "\x05\xA4S\x02\u0448\u044D\x07\x1D\x02\x02\u0449\u044D\x07\xA3\x02\x02" +
    "\u044A\u044D\x077\x02\x02\u044B\u044D\x07\x04\x02\x02\u044C\u0447\x03" +
    "\x02\x02\x02\u044C\u0448\x03\x02\x02\x02\u044C\u0449\x03\x02\x02\x02\u044C" +
    "\u044A\x03\x02\x02\x02\u044C\u044B\x03\x02\x02\x02\u044D\u0450\x03\x02" +
    "\x02\x02\u044E\u044C\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F" +
    "\u0451\x03\x02\x02\x02\u0450\u044E\x03\x02\x02\x02\u0451\u0453\x07\x02" +
    "\x02\x03\u0452\u043C\x03\x02\x02\x02\u0452\u0446\x03\x02\x02\x02\u0453" +
    "\x83\x03\x02\x02\x02\u0454\u0455\x07=\x02\x02\u0455\u0456\x05\xA4S\x02" +
    "\u0456\u0457\x07\x1C\x02\x02\u0457\x85\x03\x02\x02\x02\u0458\u045C\x07" +
    "X\x02\x02\u0459\u045D\x05\xA4S\x02\u045A\u045D\x07\x1D\x02\x02\u045B\u045D" +
    "\x077\x02\x02\u045C\u0459\x03\x02\x02\x02\u045C\u045A\x03\x02\x02\x02" +
    "\u045C\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u045C\x03" +
    "\x02\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460" +
    "\u0462\x07\x1C\x02\x02\u0461\u0463\x05\x88E\x02\u0462\u0461\x03\x02\x02" +
    "\x02\u0462\u0463\x03\x02\x02\x02\u0463\x87\x03\x02\x02\x02\u0464\u0468" +
    "\x07X\x02\x02\u0465\u0469\x05\xA4S\x02\u0466\u0469\x07\x1D\x02\x02\u0467" +
    "\u0469\x077\x02\x02\u0468\u0465\x03\x02\x02\x02\u0468\u0466\x03\x02\x02" +
    "\x02\u0468\u0467\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\u0468" +
    "\x03\x02\x02\x02\u046A\u046B\x03\x02\x02\x02\u046B\u046C\x03\x02\x02\x02" +
    "\u046C\u046D\x07\x1C\x02\x02\u046D\x89\x03\x02\x02\x02\u046E\u0472\x07" +
    "\x13\x02\x02\u046F\u0471\x077\x02\x02\u0470\u046F\x03\x02\x02\x02\u0471" +
    "\u0474\x03\x02\x02\x02\u0472\u0470\x03\x02\x02\x02\u0472\u0473\x03\x02" +
    "\x02\x02\u0473\u0476\x03\x02\x02\x02\u0474\u0472\x03\x02\x02\x02\u0475" +
    "\u0477\x05\xA4S\x02\u0476\u0475\x03\x02\x02\x02\u0476\u0477\x03\x02\x02" +
    "\x02\u0477\u048D\x03\x02\x02\x02\u0478\u0482\x05\xA4S\x02\u0479\u047D" +
    "\x077\x02\x02\u047A\u047C\x07\x04\x02\x02\u047B\u047A\x03\x02\x02\x02" +
    "\u047C\u047F\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02\u047D\u047E\x03" +
    "\x02\x02\x02\u047E\u0481\x03\x02\x02\x02\u047F\u047D\x03\x02\x02\x02\u0480" +
    "\u0479\x03\x02\x02\x02\u0481\u0484\x03\x02\x02\x02\u0482\u0480\x03\x02" +
    "\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483\u0488\x03\x02\x02\x02\u0484" +
    "\u0482\x03\x02\x02\x02\u0485\u0487\x077\x02\x02\u0486\u0485\x03\x02\x02" +
    "\x02\u0487\u048A\x03\x02\x02\x02\u0488\u0486\x03\x02\x02\x02\u0488\u0489" +
    "\x03\x02\x02\x02\u0489\u048C\x03\x02\x02\x02\u048A\u0488\x03\x02\x02\x02" +
    "\u048B\u0478\x03\x02\x02\x02\u048C\u048F\x03\x02\x02\x02\u048D\u048B\x03" +
    "\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E\u0490\x03\x02\x02\x02\u048F" +
    "\u048D\x03\x02\x02\x02\u0490\u049D\x07\x1C\x02\x02\u0491\u0495\x07\x13" +
    "\x02\x02\u0492\u0494\x077\x02\x02\u0493\u0492\x03\x02\x02\x02\u0494\u0497" +
    "\x03\x02\x02\x02\u0495\u0493\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02" +
    "\u0496\u0499\x03\x02\x02\x02\u0497\u0495\x03\x02\x02\x02\u0498\u049A\x05" +
    "\xA4S\x02\u0499\u0498\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A" +
    "\u049B\x03\x02\x02\x02\u049B\u049D\x07\x02\x02\x03\u049C\u046E\x03\x02" +
    "\x02\x02\u049C\u0491\x03\x02\x02\x02\u049D\x8B\x03\x02\x02\x02\u049E\u04A0" +
    "\x07\x14\x02\x02\u049F\u04A1\n\x12\x02\x02\u04A0\u049F\x03\x02\x02\x02" +
    "\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A2\u04A3\x03" +
    "\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4\u04A5\x07\x1C\x02\x02\u04A5" +
    "\x8D\x03\x02\x02\x02\u04A6\u04A9\x07\x1B\x02\x02\u04A7\u04AA\x05\xA4S" +
    "\x02\u04A8\u04AA\x077\x02\x02\u04A9\u04A7\x03\x02\x02\x02\u04A9\u04A8" +
    "\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04A9\x03\x02\x02\x02" +
    "\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AD\x03\x02\x02\x02\u04AD\u04B3\x07" +
    "\x1C\x02\x02\u04AE\u04AF\x07\x1B\x02\x02\u04AF\u04B0\x05\xA4S\x02\u04B0" +
    "\u04B1\x07\x02\x02\x03\u04B1\u04B3\x03\x02\x02\x02\u04B2\u04A6\x03\x02" +
    "\x02\x02\u04B2\u04AE\x03\x02\x02\x02\u04B3\x8F\x03\x02\x02\x02\u04B4\u04B5" +
    "\x07J\x02\x02\u04B5\u04B6\x05\xA4S\x02\u04B6\u04B7\x07\x1C\x02\x02\u04B7" +
    "\u04BD\x03\x02\x02\x02\u04B8\u04B9\x07K\x02\x02\u04B9\u04BA\x05\xA4S\x02" +
    "\u04BA\u04BB\x07\x1C\x02\x02\u04BB\u04BD\x03\x02\x02\x02\u04BC\u04B4\x03" +
    "\x02\x02\x02\u04BC\u04B8\x03\x02\x02\x02\u04BD\x91\x03\x02\x02\x02\u04BE" +
    "\u04BF\x07A\x02\x02\u04BF\u04C0\x07\x1D\x02\x02\u04C0\u04C1\x075\x02\x02" +
    "\u04C1\u04C8\x07\x1C\x02\x02\u04C2\u04C3\x07A\x02\x02\u04C3\u04C4\x07" +
    "\x1D\x02\x02\u04C4\u04C5\x05\xA4S\x02\u04C5\u04C6\x07\x1C\x02\x02\u04C6" +
    "\u04C8\x03\x02\x02\x02\u04C7\u04BE\x03\x02\x02\x02\u04C7\u04C2\x03\x02" +
    "\x02\x02\u04C8\x93\x03\x02\x02\x02\u04C9\u04CA\x07V\x02\x02\u04CA\u04CB" +
    "\x05\xA4S\x02\u04CB\u04CC\x07\x1C\x02\x02\u04CC\x95\x03\x02\x02\x02\u04CD" +
    "\u04CE\x07W\x02\x02\u04CE\u04CF\x05\xA4S\x02\u04CF\u04D0\x07\x1C\x02\x02" +
    "\u04D0\x97\x03\x02\x02\x02\u04D1\u04DB\x05\x9AN\x02\u04D2\u04D4\x077\x02" +
    "\x02\u04D3\u04D2\x03\x02\x02\x02\u04D4\u04D7\x03\x02\x02\x02\u04D5\u04D3" +
    "\x03\x02\x02\x02\u04D5\u04D6\x03\x02\x02\x02\u04D6\u04D8\x03\x02\x02\x02" +
    "\u04D7\u04D5\x03\x02\x02\x02\u04D8\u04DA\x05\x9AN\x02\u04D9\u04D5\x03" +
    "\x02\x02\x02\u04DA\u04DD\x03\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DB" +
    "\u04DC\x03\x02\x02\x02\u04DC\x99\x03\x02\x02\x02\u04DD\u04DB\x03\x02\x02" +
    "\x02\u04DE\u04DF\x07\x15\x02\x02\u04DF\u04E0\x05\xA4S\x02\u04E0\u04E1" +
    "\t\x13\x02\x02\u04E1\u04E7\x05\xA4S\x02\u04E2\u04E6\x077\x02\x02\u04E3" +
    "\u04E6\x07\x1D\x02\x02\u04E4\u04E6\x05\xA4S\x02\u04E5\u04E2\x03\x02\x02" +
    "\x02\u04E5\u04E3\x03\x02\x02\x02\u04E5\u04E4\x03\x02\x02\x02\u04E6\u04E9" +
    "\x03\x02\x02\x02\u04E7\u04E5\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02" +
    "\u04E8\u04EA\x03\x02\x02\x02\u04E9\u04E7\x03\x02\x02\x02\u04EA\u04EB\x07" +
    "\x1C\x02\x02\u04EB\u04F6\x03\x02\x02\x02\u04EC\u04F0\x07T\x02\x02\u04ED" +
    "\u04EF\v\x02\x02\x02\u04EE\u04ED\x03\x02\x02\x02\u04EF\u04F2\x03\x02\x02" +
    "\x02\u04F0\u04F1\x03\x02\x02\x02\u04F0\u04EE\x03\x02\x02\x02\u04F1\u04F3" +
    "\x03\x02\x02\x02\u04F2\u04F0\x03\x02\x02\x02\u04F3\u04F6\x07\x1C\x02\x02" +
    "\u04F4\u04F6\x07G\x02\x02\u04F5\u04DE\x03\x02\x02\x02\u04F5\u04EC\x03" +
    "\x02\x02\x02\u04F5\u04F4\x03\x02\x02\x02\u04F6\x9B\x03\x02\x02\x02\u04F7" +
    "\u04FB\x07\f\x02\x02\u04F8\u04FC\x05\xA4S\x02\u04F9\u04FC\x07\x1D\x02" +
    "\x02\u04FA\u04FC\x077\x02\x02\u04FB\u04F8\x03\x02\x02\x02\u04FB\u04F9" +
    "\x03\x02\x02\x02\u04FB\u04FA\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02" +
    "\u04FD\u04FB\x03\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u04FF\x03" +
    "\x02\x02\x02\u04FF\u050B\x07\x1C\x02\x02\u0500\u0506\x07\f\x02\x02\u0501" +
    "\u0505\x05\xA4S\x02\u0502\u0505\x07\x1D\x02\x02\u0503\u0505\x077\x02\x02" +
    "\u0504\u0501\x03\x02\x02\x02\u0504\u0502\x03\x02\x02\x02\u0504\u0503\x03" +
    "\x02\x02\x02\u0505\u0508\x03\x02\x02\x02\u0506\u0504\x03\x02\x02\x02\u0506" +
    "\u0507\x03\x02\x02\x02\u0507\u0509\x03\x02\x02\x02\u0508\u0506\x03\x02" +
    "\x02\x02\u0509\u050B\x07\x02\x02\x03\u050A\u04F7\x03\x02\x02\x02\u050A" +
    "\u0500\x03\x02\x02\x02\u050B\x9D\x03\x02\x02\x02\u050C\u050E\x07\x11\x02" +
    "\x02\u050D\u050F\x05\xA4S\x02\u050E\u050D\x03\x02\x02\x02\u050E\u050F" +
    "\x03\x02\x02\x02\u050F\u0510\x03\x02\x02\x02\u0510\u0511\x07\x1C\x02\x02" +
    "\u0511\x9F\x03\x02\x02\x02\u0512\u0513\x07\x1F\x02\x02\u0513\xA1\x03\x02" +
    "\x02\x02\u0514\u0516\x05\xA4S\x02\u0515\u0517\x077\x02\x02\u0516\u0515" +
    "\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517\u0519\x03\x02\x02\x02" +
    "\u0518\u0514\x03\x02\x02\x02\u0519\u051A\x03\x02\x02\x02\u051A\u0518\x03" +
    "\x02\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B\xA3\x03\x02\x02\x02\u051C" +
    "\u0523\x076\x02\x02\u051D\u051F\x07\x04\x02\x02\u051E\u051D\x03\x02\x02" +
    "\x02\u051F\u0520\x03\x02\x02\x02\u0520\u051E\x03\x02\x02\x02\u0520\u0521" +
    "\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522\u0524\x075\x02\x02" +
    "\u0523\u051E\x03\x02\x02\x02\u0523\u0524\x03\x02\x02\x02\u0524\u0549\x03" +
    "\x02\x02\x02\u0525\u052C\x05\xAAV\x02\u0526\u0528\x07\x04\x02\x02\u0527" +
    "\u0526\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02\u0529\u0527\x03\x02" +
    "\x02\x02\u0529\u052A\x03\x02\x02\x02\u052A\u052B\x03\x02\x02\x02\u052B" +
    "\u052D\x075\x02\x02\u052C\u0527\x03\x02\x02\x02\u052C\u052D\x03\x02\x02" +
    "\x02\u052D\u0549\x03\x02\x02\x02\u052E\u052F\x07\x18\x02\x02\u052F\u0530" +
    "\x05\xA4S\x02\u0530\u0531\x07\x1C\x02\x02\u0531\u0549\x03\x02\x02\x02" +
    "\u0532\u0549\x075\x02\x02\u0533\u0535\x07\x04\x02\x02\u0534\u0533\x03" +
    "\x02\x02\x02\u0535\u0538\x03\x02\x02\x02\u0536\u0534\x03\x02\x02\x02\u0536" +
    "\u0537\x03\x02\x02\x02\u0537\u0539\x03\x02\x02\x02\u0538\u0536\x03\x02" +
    "\x02\x02\u0539\u053D\x07\x1D\x02\x02\u053A\u053C\x07\x04\x02\x02\u053B" +
    "\u053A\x03\x02\x02\x02\u053C\u053F\x03\x02\x02\x02\u053D\u053B\x03\x02" +
    "\x02\x02\u053D\u053E\x03\x02\x02\x02\u053E\u0549\x03\x02\x02\x02\u053F" +
    "\u053D\x03\x02\x02\x02\u0540\u0544\x07\x1E\x02\x02\u0541\u0543\x07\x04" +
    "\x02\x02\u0542\u0541\x03\x02\x02\x02\u0543\u0546\x03\x02\x02\x02\u0544" +
    "\u0542\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545\u0549\x03\x02" +
    "\x02\x02\u0546\u0544\x03\x02\x02\x02\u0547\u0549\x07\xA3\x02\x02\u0548" +
    "\u051C\x03\x02\x02\x02\u0548\u0525\x03\x02\x02\x02\u0548\u052E\x03\x02" +
    "\x02\x02\u0548\u0532\x03\x02\x02\x02\u0548\u0536\x03\x02\x02\x02\u0548" +
    "\u0540\x03\x02\x02\x02\u0548\u0547\x03\x02\x02\x02\u0549\xA5\x03\x02\x02" +
    "\x02\u054A\u054B\x07\x1C\x02\x02\u054B\xA7\x03\x02\x02\x02\u054C\u054D" +
    "\t\x14\x02\x02\u054D\xA9\x03\x02\x02\x02\u054E\u055A\x07:\x02\x02\u054F" +
    "\u055A\x078\x02\x02\u0550\u055A\x07;\x02\x02\u0551\u055A\x079\x02\x02" +
    "\u0552\u055A\x07\x1E\x02\x02\u0553\u0554\x07\"\x02\x02\u0554\u055A\n\x15" +
    "\x02\x02\u0555\u0556\x07#\x02\x02\u0556\u055A\n\x16\x02\x02\u0557\u055A" +
    "\x07&\x02\x02\u0558\u055A\x07%\x02\x02\u0559\u054E\x03\x02\x02\x02\u0559" +
    "\u054F\x03\x02\x02\x02\u0559\u0550\x03\x02\x02\x02\u0559\u0551\x03\x02" +
    "\x02\x02\u0559\u0552\x03\x02\x02\x02\u0559\u0553\x03\x02\x02\x02\u0559" +
    "\u0555\x03\x02\x02\x02\u0559\u0557\x03\x02\x02\x02\u0559\u0558\x03\x02" +
    "\x02\x02\u055A\u055B\x03\x02\x02\x02\u055B\u0559\x03\x02\x02\x02\u055B" +
    "\u055C\x03\x02\x02\x02\u055C\xAB\x03\x02\x02\x02\u055D\u055E\x07\x04\x02" +
    "\x02\u055E\xAD\x03\x02\x02\x02\xBF\xB2\xB8\xBD\xC2\xCA\xD1\xDD\xE4\xEA" +
    "\xED\xF5\u0103\u010A\u0111\u0117\u011A\u0122\u012A\u0135\u013A\u0141\u0148" +
    "\u014E\u0151\u0159\u0166\u016A\u0170\u0177\u017D\u0180\u0188\u0195\u019A" +
    "\u01A1\u01A7\u01AA\u01B2\u01B9\u01BE\u01C5\u01CB\u01CF\u01D4\u01DA\u01E1" +
    "\u01E7\u01EA\u01F2\u01F9\u01FE\u0205\u020B\u020F\u0217\u021D\u0220\u0227" +
    "\u022B\u0230\u0237\u023F\u0247\u0263\u026D\u026F\u0276\u027B\u0284\u028D" +
    "\u0293\u0295\u02A3\u02AA\u02AF\u02B3\u02B7\u02BA\u02BF\u02D6\u02DB\u02E0" +
    "\u02E2\u02EC\u02F6\u0300\u0306\u030D\u0313\u031B\u0325\u0330\u0336\u033B" +
    "\u0342\u034B\u034F\u0353\u0356\u0365\u0369\u0378\u037C\u0382\u038D\u0392" +
    "\u0397\u0399\u039E\u03A3\u03A8\u03AA\u03AF\u03B5\u03BA\u03BC\u03C7\u03CB" +
    "\u03D8\u03DC\u03E2\u03E4\u03EB\u03EF\u03F1\u03F7\u03F9\u0400\u0405\u0408" +
    "\u040E\u0411\u0415\u041C\u0421\u0427\u042C\u0434\u0436\u043A\u0441\u0443" +
    "\u044C\u044E\u0452\u045C\u045E\u0462\u0468\u046A\u0472\u0476\u047D\u0482" +
    "\u0488\u048D\u0495\u0499\u049C\u04A2\u04A9\u04AB\u04B2\u04BC\u04C7\u04D5" +
    "\u04DB\u04E5\u04E7\u04F0\u04F5\u04FB\u04FD\u0504\u0506\u050A\u050E\u0516" +
    "\u051A\u0520\u0523\u0529\u052C\u0536\u053D\u0544\u0548\u0559\u055B";
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
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
    sidex_NL(i) {
        if (i === undefined) {
            return this.getRuleContexts(Sidex_NLContext);
        }
        else {
            return this.getRuleContext(i, Sidex_NLContext);
        }
    }
    sidex() {
        return this.getRuleContext(0, SidexContext);
    }
    EQ() { return this.tryGetToken(flashcardParser.EQ, 0); }
    EQ2() { return this.tryGetToken(flashcardParser.EQ2, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(flashcardParser.NL);
        }
        else {
            return this.getToken(flashcardParser.NL, i);
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
    EQ() { return this.tryGetToken(flashcardParser.EQ, 0); }
    EQ2() { return this.tryGetToken(flashcardParser.EQ2, 0); }
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
