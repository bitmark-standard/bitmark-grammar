"use strict";
// Generated from ./antlr/truefalseParser.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.DclinesContext = exports.S_and_wContext = exports.LinesContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.Bullet_itemContext = exports.Single_gapContext = exports.GapContext = exports.ResourceContext = exports.BitElemContext = exports.Choice_starContext = exports.Choice_minusContext = exports.Choice_plusContext = exports.CminusContext = exports.CplusContext = exports.ChoicesContext = exports.TfmiscContext = exports.Mcrsep_endContext = exports.McrsepContext = exports.True_falseContext = exports.True_false_1Context = exports.TruefalsesContext = exports.Bitmark_Context = exports.BitmarkContext = exports.truefalseParser = void 0;
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
class truefalseParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(truefalseParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return truefalseParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "truefalseParser.g4"; }
    // @Override
    get ruleNames() { return truefalseParser.ruleNames; }
    // @Override
    get serializedATN() { return truefalseParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    bitmark() {
        let _localctx = new BitmarkContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, truefalseParser.RULE_bitmark);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 168;
                            this.bitmark_();
                            this.state = 178;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 172;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === truefalseParser.S) {
                                                {
                                                    {
                                                        this.state = 169;
                                                        this.match(truefalseParser.S);
                                                    }
                                                }
                                                this.state = 174;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 175;
                                            this.match(truefalseParser.NL);
                                        }
                                    }
                                }
                                this.state = 180;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            }
                        }
                    }
                    this.state = 183;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === truefalseParser.BitTruefalse1 || _la === truefalseParser.BitTruefalse);
                this.state = 188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === truefalseParser.NL) {
                    {
                        {
                            this.state = 185;
                            this.match(truefalseParser.NL);
                        }
                    }
                    this.state = 190;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 191;
                this.match(truefalseParser.EOF);
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
        this.enterRule(_localctx, 2, truefalseParser.RULE_bitmark_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.truefalses();
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
    truefalses() {
        let _localctx = new TruefalsesContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, truefalseParser.RULE_truefalses);
        try {
            this.state = 197;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.BitTruefalse1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 195;
                        this.true_false_1();
                    }
                    break;
                case truefalseParser.BitTruefalse:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 196;
                        this.true_false();
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
    true_false_1() {
        let _localctx = new True_false_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 6, truefalseParser.RULE_true_false_1);
        let _la;
        try {
            let _alt;
            this.state = 262;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 199;
                        this.match(truefalseParser.BitTruefalse1);
                        this.state = 200;
                        this.format();
                        this.state = 201;
                        this.match(truefalseParser.CL);
                        this.state = 205;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 202;
                                        this.match(truefalseParser.NL);
                                    }
                                }
                            }
                            this.state = 207;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                        }
                        this.state = 217;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 208;
                                        this.bitElem();
                                        this.state = 212;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 209;
                                                        this.match(truefalseParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 214;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 219;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 220;
                        this.match(truefalseParser.BitTruefalse1);
                        this.state = 221;
                        this.format();
                        this.state = 222;
                        this.match(truefalseParser.CL);
                        this.state = 224;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 223;
                                    this.match(truefalseParser.NL);
                                }
                            }
                            this.state = 226;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === truefalseParser.NL);
                        this.state = 237;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 228;
                                        this.bitElem();
                                        this.state = 232;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.NL) {
                                            {
                                                {
                                                    this.state = 229;
                                                    this.match(truefalseParser.NL);
                                                }
                                            }
                                            this.state = 234;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                            }
                            this.state = 239;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                        }
                        this.state = 240;
                        this.choices();
                        this.state = 244;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 241;
                                        this.match(truefalseParser.NL);
                                    }
                                }
                            }
                            this.state = 246;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                        }
                        this.state = 260;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                            case 1:
                                {
                                    this.state = 247;
                                    this.resource();
                                    this.state = 257;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 251;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === truefalseParser.NL) {
                                                        {
                                                            {
                                                                this.state = 248;
                                                                this.match(truefalseParser.NL);
                                                            }
                                                        }
                                                        this.state = 253;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 254;
                                                    this.resource();
                                                }
                                            }
                                        }
                                        this.state = 259;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
    true_false() {
        let _localctx = new True_falseContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, truefalseParser.RULE_true_false);
        let _la;
        try {
            let _alt;
            this.state = 342;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 264;
                        this.match(truefalseParser.BitTruefalse);
                        this.state = 265;
                        this.format();
                        this.state = 266;
                        this.match(truefalseParser.CL);
                        this.state = 270;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 267;
                                        this.match(truefalseParser.NL);
                                    }
                                }
                            }
                            this.state = 272;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                        }
                        this.state = 282;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 273;
                                        this.bitElem();
                                        this.state = 277;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 274;
                                                        this.match(truefalseParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 279;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 284;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 285;
                        this.match(truefalseParser.BitTruefalse);
                        this.state = 286;
                        this.format();
                        this.state = 287;
                        this.match(truefalseParser.CL);
                        this.state = 291;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === truefalseParser.NL) {
                            {
                                {
                                    this.state = 288;
                                    this.match(truefalseParser.NL);
                                }
                            }
                            this.state = 293;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 303;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 294;
                                        this.bitElem();
                                        this.state = 298;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.NL) {
                                            {
                                                {
                                                    this.state = 295;
                                                    this.match(truefalseParser.NL);
                                                }
                                            }
                                            this.state = 300;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                            }
                            this.state = 305;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                        }
                        this.state = 316;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 307;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === truefalseParser.HSPL || _la === truefalseParser.HSPL2) {
                                                {
                                                    this.state = 306;
                                                    this.mcrsep();
                                                }
                                            }
                                            this.state = 312;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 309;
                                                            this.tfmisc();
                                                        }
                                                    }
                                                }
                                                this.state = 314;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                                            }
                                            this.state = 315;
                                            this.choices();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 318;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 320;
                        this.mcrsep_end();
                        this.state = 324;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 321;
                                        this.match(truefalseParser.NL);
                                    }
                                }
                            }
                            this.state = 326;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                        }
                        this.state = 340;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                            case 1:
                                {
                                    this.state = 327;
                                    this.resource();
                                    this.state = 337;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 331;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === truefalseParser.NL) {
                                                        {
                                                            {
                                                                this.state = 328;
                                                                this.match(truefalseParser.NL);
                                                            }
                                                        }
                                                        this.state = 333;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 334;
                                                    this.resource();
                                                }
                                            }
                                        }
                                        this.state = 339;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
    mcrsep() {
        let _localctx = new McrsepContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, truefalseParser.RULE_mcrsep);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 344;
                _la = this._input.LA(1);
                if (!(_la === truefalseParser.HSPL || _la === truefalseParser.HSPL2)) {
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
    mcrsep_end() {
        let _localctx = new Mcrsep_endContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, truefalseParser.RULE_mcrsep_end);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 346;
                _la = this._input.LA(1);
                if (!(_la === truefalseParser.HSPL || _la === truefalseParser.HSPL2)) {
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
    tfmisc() {
        let _localctx = new TfmiscContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, truefalseParser.RULE_tfmisc);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 348;
                    this.bitElem();
                    this.state = 352;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === truefalseParser.NL) {
                        {
                            {
                                this.state = 349;
                                this.match(truefalseParser.NL);
                            }
                        }
                        this.state = 354;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
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
    choices() {
        let _localctx = new ChoicesContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, truefalseParser.RULE_choices);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 357;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                    case 1:
                        {
                            this.state = 355;
                            this.cplus();
                        }
                        break;
                    case 2:
                        {
                            this.state = 356;
                            this.cminus();
                        }
                        break;
                }
                this.state = 374;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 360;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === truefalseParser.NL) {
                                    {
                                        this.state = 359;
                                        this.match(truefalseParser.NL);
                                    }
                                }
                                this.state = 365;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === truefalseParser.S) {
                                    {
                                        {
                                            this.state = 362;
                                            this.match(truefalseParser.S);
                                        }
                                    }
                                    this.state = 367;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 370;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 368;
                                            this.cplus();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 369;
                                            this.cminus();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 376;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
    cplus() {
        let _localctx = new CplusContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, truefalseParser.RULE_cplus);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.choice_plus();
                this.state = 379;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                    case 1:
                        {
                            this.state = 378;
                            this.example();
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
    cminus() {
        let _localctx = new CminusContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, truefalseParser.RULE_cminus);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 381;
                this.choice_minus();
                this.state = 383;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                    case 1:
                        {
                            this.state = 382;
                            this.example();
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
    choice_plus() {
        let _localctx = new Choice_plusContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, truefalseParser.RULE_choice_plus);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 386;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === truefalseParser.OPC || _la === truefalseParser.OPITEM) {
                    {
                        this.state = 385;
                        this.item();
                    }
                }
                this.state = 388;
                this.match(truefalseParser.OPP);
                this.state = 391;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 391;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case truefalseParser.S:
                            case truefalseParser.OPS:
                            case truefalseParser.COLON:
                            case truefalseParser.AMP:
                            case truefalseParser.DBLCOLON:
                            case truefalseParser.Greater:
                            case truefalseParser.Less:
                            case truefalseParser.DBLEQ:
                            case truefalseParser.RightAngle:
                            case truefalseParser.RightArrow:
                            case truefalseParser.NUMERIC:
                            case truefalseParser.STRING:
                            case truefalseParser.NOTBITMARK:
                            case truefalseParser.ELIPSIS:
                            case truefalseParser.SENTENCE:
                            case truefalseParser.BARSTRING:
                            case truefalseParser.URL:
                                {
                                    this.state = 389;
                                    this.s_and_w();
                                }
                                break;
                            case truefalseParser.NL:
                                {
                                    this.state = 390;
                                    this.match(truefalseParser.NL);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 393;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL);
                this.state = 395;
                this.match(truefalseParser.CL);
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
    choice_minus() {
        let _localctx = new Choice_minusContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, truefalseParser.RULE_choice_minus);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 398;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === truefalseParser.OPC || _la === truefalseParser.OPITEM) {
                    {
                        this.state = 397;
                        this.item();
                    }
                }
                this.state = 400;
                this.match(truefalseParser.OPM);
                this.state = 403;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 403;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case truefalseParser.S:
                            case truefalseParser.OPS:
                            case truefalseParser.COLON:
                            case truefalseParser.AMP:
                            case truefalseParser.DBLCOLON:
                            case truefalseParser.Greater:
                            case truefalseParser.Less:
                            case truefalseParser.DBLEQ:
                            case truefalseParser.RightAngle:
                            case truefalseParser.RightArrow:
                            case truefalseParser.NUMERIC:
                            case truefalseParser.STRING:
                            case truefalseParser.NOTBITMARK:
                            case truefalseParser.ELIPSIS:
                            case truefalseParser.SENTENCE:
                            case truefalseParser.BARSTRING:
                            case truefalseParser.URL:
                                {
                                    this.state = 401;
                                    this.s_and_w();
                                }
                                break;
                            case truefalseParser.NL:
                                {
                                    this.state = 402;
                                    this.match(truefalseParser.NL);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 405;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL);
                this.state = 407;
                this.match(truefalseParser.CL);
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
    choice_star() {
        let _localctx = new Choice_starContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, truefalseParser.RULE_choice_star);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === truefalseParser.OPC || _la === truefalseParser.OPITEM) {
                    {
                        this.state = 409;
                        this.item();
                    }
                }
                this.state = 412;
                this.match(truefalseParser.OPR);
                this.state = 415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 415;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case truefalseParser.S:
                            case truefalseParser.OPS:
                            case truefalseParser.COLON:
                            case truefalseParser.AMP:
                            case truefalseParser.DBLCOLON:
                            case truefalseParser.Greater:
                            case truefalseParser.Less:
                            case truefalseParser.DBLEQ:
                            case truefalseParser.RightAngle:
                            case truefalseParser.RightArrow:
                            case truefalseParser.NUMERIC:
                            case truefalseParser.STRING:
                            case truefalseParser.NOTBITMARK:
                            case truefalseParser.ELIPSIS:
                            case truefalseParser.SENTENCE:
                            case truefalseParser.BARSTRING:
                            case truefalseParser.URL:
                                {
                                    this.state = 413;
                                    this.s_and_w();
                                }
                                break;
                            case truefalseParser.NL:
                                {
                                    this.state = 414;
                                    this.match(truefalseParser.NL);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 417;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL);
                this.state = 419;
                this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 28, truefalseParser.RULE_bitElem);
        try {
            this.state = 445;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 421;
                        this.match(truefalseParser.LIST_LINE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 422;
                        this.match(truefalseParser.NOTBITMARK);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 423;
                        this.dclines();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 424;
                        this.gap();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 425;
                        this.atdef();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 426;
                        this.reference();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 427;
                        this.item();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 428;
                        this.title();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 429;
                        this.instruction();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 430;
                        this.hint();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 431;
                        this.s_and_w();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 432;
                        this.example();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 433;
                        this.bool_label();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 434;
                        this.imagebit();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 435;
                        this.audiobit();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 436;
                        this.videobit();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 437;
                        this.articlebit();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 438;
                        this.documentbit();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 439;
                        this.appbit();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 440;
                        this.websitebit();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 441;
                        this.stillimagefilmbit();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 442;
                        this.angleref();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 443;
                        this.anchor();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 444;
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
        this.enterRule(_localctx, 30, truefalseParser.RULE_resource);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 447;
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
        this.enterRule(_localctx, 32, truefalseParser.RULE_gap);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 449;
                this.single_gap();
                this.state = 457;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 455;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.OPU:
                                    {
                                        this.state = 450;
                                        this.single_gap();
                                    }
                                    break;
                                case truefalseParser.OPB:
                                    {
                                        this.state = 451;
                                        this.instruction();
                                    }
                                    break;
                                case truefalseParser.OPQ:
                                    {
                                        this.state = 452;
                                        this.hint();
                                    }
                                    break;
                                case truefalseParser.OPC:
                                case truefalseParser.OPITEM:
                                    {
                                        this.state = 453;
                                        this.item();
                                    }
                                    break;
                                case truefalseParser.AtExampleWithStr:
                                case truefalseParser.AtExamplecol:
                                case truefalseParser.AtExamplecl:
                                    {
                                        this.state = 454;
                                        this.example();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 459;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
        this.enterRule(_localctx, 34, truefalseParser.RULE_single_gap);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 460;
                this.match(truefalseParser.OPU);
                this.state = 464;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                    case 1:
                        {
                            this.state = 461;
                            this.match(truefalseParser.NUMERIC);
                        }
                        break;
                    case 2:
                        {
                            this.state = 462;
                            this.match(truefalseParser.STRING);
                        }
                        break;
                    case 3:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                }
                this.state = 469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                    {
                        {
                            this.state = 466;
                            this.s_and_w();
                        }
                    }
                    this.state = 471;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 472;
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
        this.enterRule(_localctx, 36, truefalseParser.RULE_bullet_item);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 474;
                this.match(truefalseParser.OPBUL);
                this.state = 475;
                this.s_and_w();
                this.state = 476;
                this.match(truefalseParser.CL);
                this.state = 478;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === truefalseParser.AtPoints) {
                    {
                        this.state = 477;
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
        this.enterRule(_localctx, 38, truefalseParser.RULE_atpoint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 480;
                this.match(truefalseParser.AtPoints);
                this.state = 481;
                this.match(truefalseParser.NUMERIC);
                this.state = 482;
                this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 40, truefalseParser.RULE_format);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 484;
                                this.resource_format();
                            }
                        }
                    }
                    this.state = 489;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                }
                this.state = 495;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (truefalseParser.AmpAudio - 85)) | (1 << (truefalseParser.AmpImage - 85)) | (1 << (truefalseParser.AmpImageZoom - 85)) | (1 << (truefalseParser.AmpVideo - 85)) | (1 << (truefalseParser.AmpArticle - 85)) | (1 << (truefalseParser.AmpDocument - 85)) | (1 << (truefalseParser.AmpApp - 85)) | (1 << (truefalseParser.AmpWebsite - 85)) | (1 << (truefalseParser.AmpStillImageFilm - 85)) | (1 << (truefalseParser.AmpPdf - 85)) | (1 << (truefalseParser.AmpAudioLink - 85)) | (1 << (truefalseParser.AmpImageLink - 85)) | (1 << (truefalseParser.AmpVideoLink - 85)) | (1 << (truefalseParser.AmpArticleLink - 85)) | (1 << (truefalseParser.AmpDocumentLink - 85)) | (1 << (truefalseParser.AmpDocumentDownload - 85)) | (1 << (truefalseParser.AmpAppLink - 85)) | (1 << (truefalseParser.AmpWebsiteLink - 85)) | (1 << (truefalseParser.AmpStillImageFilmLink - 85)))) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (truefalseParser.AmpVideoEmbed - 125)) | (1 << (truefalseParser.AmpDocumentEmbed - 125)) | (1 << (truefalseParser.AmpStillImageFilmEmbed - 125)) | (1 << (truefalseParser.ColonText - 125)) | (1 << (truefalseParser.ColonJson - 125)))) !== 0)) {
                    {
                        this.state = 493;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case truefalseParser.ColonText:
                                {
                                    this.state = 490;
                                    this.match(truefalseParser.ColonText);
                                }
                                break;
                            case truefalseParser.ColonJson:
                                {
                                    this.state = 491;
                                    this.match(truefalseParser.ColonJson);
                                }
                                break;
                            case truefalseParser.AmpAudio:
                            case truefalseParser.AmpImage:
                            case truefalseParser.AmpImageZoom:
                            case truefalseParser.AmpVideo:
                            case truefalseParser.AmpArticle:
                            case truefalseParser.AmpDocument:
                            case truefalseParser.AmpApp:
                            case truefalseParser.AmpWebsite:
                            case truefalseParser.AmpStillImageFilm:
                            case truefalseParser.AmpPdf:
                            case truefalseParser.AmpAudioLink:
                            case truefalseParser.AmpImageLink:
                            case truefalseParser.AmpVideoLink:
                            case truefalseParser.AmpArticleLink:
                            case truefalseParser.AmpDocumentLink:
                            case truefalseParser.AmpDocumentDownload:
                            case truefalseParser.AmpAppLink:
                            case truefalseParser.AmpWebsiteLink:
                            case truefalseParser.AmpStillImageFilmLink:
                            case truefalseParser.AmpVideoEmbed:
                            case truefalseParser.AmpDocumentEmbed:
                            case truefalseParser.AmpStillImageFilmEmbed:
                                {
                                    this.state = 492;
                                    this.resource_format_extra();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 497;
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
        this.enterRule(_localctx, 42, truefalseParser.RULE_resource_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 498;
                _la = this._input.LA(1);
                if (!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (truefalseParser.AmpArticle - 89)) | (1 << (truefalseParser.AmpDocument - 89)) | (1 << (truefalseParser.AmpWebsite - 89)) | (1 << (truefalseParser.AmpStillImageFilm - 89)) | (1 << (truefalseParser.AmpAudioLink - 89)) | (1 << (truefalseParser.AmpImageLink - 89)) | (1 << (truefalseParser.AmpVideoLink - 89)) | (1 << (truefalseParser.AmpArticleLink - 89)) | (1 << (truefalseParser.AmpDocumentLink - 89)) | (1 << (truefalseParser.AmpDocumentDownload - 89)) | (1 << (truefalseParser.AmpAppLink - 89)) | (1 << (truefalseParser.AmpWebsiteLink - 89)) | (1 << (truefalseParser.AmpStillImageFilmLink - 89)))) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (truefalseParser.AmpVideoEmbed - 125)) | (1 << (truefalseParser.AmpAudioEmbed - 125)) | (1 << (truefalseParser.AmpDocumentEmbed - 125)) | (1 << (truefalseParser.AmpStillImageFilmEmbed - 125)) | (1 << (truefalseParser.BitmarkMinus - 125)) | (1 << (truefalseParser.BitmarkPlus - 125)) | (1 << (truefalseParser.ColonJson - 125)) | (1 << (truefalseParser.Prosemirror - 125)) | (1 << (truefalseParser.Placeholder - 125)))) !== 0))) {
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
        this.enterRule(_localctx, 44, truefalseParser.RULE_resource_format_extra);
        try {
            this.state = 509;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.AmpImage:
                case truefalseParser.AmpImageZoom:
                case truefalseParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 500;
                        this.image_format();
                    }
                    break;
                case truefalseParser.AmpAudio:
                case truefalseParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 501;
                        this.audio_format();
                    }
                    break;
                case truefalseParser.AmpVideo:
                case truefalseParser.AmpVideoLink:
                case truefalseParser.AmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 502;
                        this.video_format();
                    }
                    break;
                case truefalseParser.AmpArticle:
                case truefalseParser.AmpArticleLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 503;
                        this.article_format();
                    }
                    break;
                case truefalseParser.AmpDocument:
                case truefalseParser.AmpDocumentLink:
                case truefalseParser.AmpDocumentDownload:
                case truefalseParser.AmpDocumentEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 504;
                        this.document_format();
                    }
                    break;
                case truefalseParser.AmpApp:
                case truefalseParser.AmpAppLink:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 505;
                        this.app_format();
                    }
                    break;
                case truefalseParser.AmpWebsite:
                case truefalseParser.AmpWebsiteLink:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 506;
                        this.website_format();
                    }
                    break;
                case truefalseParser.AmpStillImageFilm:
                case truefalseParser.AmpStillImageFilmLink:
                case truefalseParser.AmpStillImageFilmEmbed:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 507;
                        this.stillimagefilm_format();
                    }
                    break;
                case truefalseParser.AmpPdf:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 508;
                        this.match(truefalseParser.AmpPdf);
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
        this.enterRule(_localctx, 46, truefalseParser.RULE_format2);
        try {
            this.state = 517;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.BitmarkMinus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 511;
                        this.match(truefalseParser.BitmarkMinus);
                    }
                    break;
                case truefalseParser.BitmarkPlus:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 512;
                        this.match(truefalseParser.BitmarkPlus);
                    }
                    break;
                case truefalseParser.ColonText:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 513;
                        this.match(truefalseParser.ColonText);
                    }
                    break;
                case truefalseParser.Placeholder:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 514;
                        this.match(truefalseParser.Placeholder);
                    }
                    break;
                case truefalseParser.ColonJson:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 515;
                        this.match(truefalseParser.ColonJson);
                    }
                    break;
                case truefalseParser.EOF:
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
        this.enterRule(_localctx, 48, truefalseParser.RULE_image_format);
        let _la;
        try {
            this.state = 532;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.AmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 519;
                        this.match(truefalseParser.AmpImage);
                        this.state = 522;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case truefalseParser.Image_type:
                                {
                                    {
                                        this.state = 520;
                                        this.match(truefalseParser.Image_type);
                                    }
                                }
                                break;
                            case truefalseParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 521;
                                        this.match(truefalseParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case truefalseParser.CL:
                            case truefalseParser.AmpAudio:
                            case truefalseParser.AmpImage:
                            case truefalseParser.AmpImageZoom:
                            case truefalseParser.AmpVideo:
                            case truefalseParser.AmpArticle:
                            case truefalseParser.AmpDocument:
                            case truefalseParser.AmpApp:
                            case truefalseParser.AmpWebsite:
                            case truefalseParser.AmpStillImageFilm:
                            case truefalseParser.AmpPdf:
                            case truefalseParser.AmpAudioLink:
                            case truefalseParser.AmpImageLink:
                            case truefalseParser.AmpVideoLink:
                            case truefalseParser.AmpArticleLink:
                            case truefalseParser.AmpDocumentLink:
                            case truefalseParser.AmpDocumentDownload:
                            case truefalseParser.AmpAppLink:
                            case truefalseParser.AmpWebsiteLink:
                            case truefalseParser.AmpStillImageFilmLink:
                            case truefalseParser.AmpVideoEmbed:
                            case truefalseParser.AmpDocumentEmbed:
                            case truefalseParser.AmpStillImageFilmEmbed:
                            case truefalseParser.ColonText:
                            case truefalseParser.ColonJson:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case truefalseParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 524;
                        this.match(truefalseParser.AmpImageLink);
                        this.state = 526;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === truefalseParser.Image_type) {
                            {
                                this.state = 525;
                                this.match(truefalseParser.Image_type);
                            }
                        }
                    }
                    break;
                case truefalseParser.AmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 528;
                        this.match(truefalseParser.AmpImageZoom);
                        this.state = 530;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === truefalseParser.Image_type) {
                            {
                                this.state = 529;
                                this.match(truefalseParser.Image_type);
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
    video_format() {
        let _localctx = new Video_formatContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, truefalseParser.RULE_video_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 534;
                _la = this._input.LA(1);
                if (!(_la === truefalseParser.AmpVideo || _la === truefalseParser.AmpVideoLink || _la === truefalseParser.AmpVideoEmbed)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 537;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === truefalseParser.COLON) {
                    {
                        this.state = 535;
                        this.match(truefalseParser.COLON);
                        this.state = 536;
                        this.match(truefalseParser.Video_type);
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
        this.enterRule(_localctx, 52, truefalseParser.RULE_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 539;
                _la = this._input.LA(1);
                if (!(_la === truefalseParser.AmpArticle || _la === truefalseParser.AmpArticleLink)) {
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
        this.enterRule(_localctx, 54, truefalseParser.RULE_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 541;
                _la = this._input.LA(1);
                if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (truefalseParser.AmpDocument - 90)) | (1 << (truefalseParser.AmpDocumentLink - 90)) | (1 << (truefalseParser.AmpDocumentDownload - 90)))) !== 0) || _la === truefalseParser.AmpDocumentEmbed)) {
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
        this.enterRule(_localctx, 56, truefalseParser.RULE_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 543;
                _la = this._input.LA(1);
                if (!(_la === truefalseParser.AmpApp || _la === truefalseParser.AmpAppLink)) {
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
        this.enterRule(_localctx, 58, truefalseParser.RULE_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 545;
                _la = this._input.LA(1);
                if (!(_la === truefalseParser.AmpWebsite || _la === truefalseParser.AmpWebsiteLink)) {
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
        this.enterRule(_localctx, 60, truefalseParser.RULE_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 547;
                _la = this._input.LA(1);
                if (!(_la === truefalseParser.AmpStillImageFilm || _la === truefalseParser.AmpStillImageFilmLink || _la === truefalseParser.AmpStillImageFilmEmbed)) {
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
        this.enterRule(_localctx, 62, truefalseParser.RULE_op_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 549;
                _la = this._input.LA(1);
                if (!(_la === truefalseParser.OpAmpArticle || _la === truefalseParser.OpAmpArticleLink)) {
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
        this.enterRule(_localctx, 64, truefalseParser.RULE_op_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 551;
                _la = this._input.LA(1);
                if (!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (truefalseParser.OpAmpDocument - 101)) | (1 << (truefalseParser.OpAmpDocumentLink - 101)) | (1 << (truefalseParser.OpAmpDocumentDownload - 101)) | (1 << (truefalseParser.OpAmpDocumentEmbed - 101)))) !== 0))) {
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
        this.enterRule(_localctx, 66, truefalseParser.RULE_op_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 553;
                _la = this._input.LA(1);
                if (!(_la === truefalseParser.OpAmpApp || _la === truefalseParser.OpAmpAppLink)) {
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
        this.enterRule(_localctx, 68, truefalseParser.RULE_op_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 555;
                _la = this._input.LA(1);
                if (!(_la === truefalseParser.OpAmpWebsite || _la === truefalseParser.OpAmpWebsiteLink)) {
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
        this.enterRule(_localctx, 70, truefalseParser.RULE_op_video_format);
        try {
            this.state = 572;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.OpAmpVideo:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 557;
                        this.match(truefalseParser.OpAmpVideo);
                        this.state = 560;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                            case 1:
                                {
                                    this.state = 558;
                                    this.match(truefalseParser.COLON);
                                    this.state = 559;
                                    this.match(truefalseParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case truefalseParser.OpAmpVideoLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 562;
                        this.match(truefalseParser.OpAmpVideoLink);
                        this.state = 565;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                            case 1:
                                {
                                    this.state = 563;
                                    this.match(truefalseParser.COLON);
                                    this.state = 564;
                                    this.match(truefalseParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case truefalseParser.OpAmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 567;
                        this.match(truefalseParser.OpAmpVideoEmbed);
                        this.state = 570;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                            case 1:
                                {
                                    this.state = 568;
                                    this.match(truefalseParser.COLON);
                                    this.state = 569;
                                    this.match(truefalseParser.Video_type);
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
        this.enterRule(_localctx, 72, truefalseParser.RULE_op_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 574;
                _la = this._input.LA(1);
                if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (truefalseParser.OpAmpStillImageFilm - 104)) | (1 << (truefalseParser.OpAmpStillImageFilmLink - 104)) | (1 << (truefalseParser.OpAmpStillImageFilmEmbed - 104)))) !== 0))) {
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
        this.enterRule(_localctx, 74, truefalseParser.RULE_articlebit);
        try {
            this.state = 582;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.OpAmpArticle:
                case truefalseParser.OpAmpArticleLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 576;
                        this.op_article_format();
                        this.state = 577;
                        this.match(truefalseParser.COLON);
                        this.state = 578;
                        this.url();
                        this.state = 579;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.ArticleText:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 581;
                        this.match(truefalseParser.ArticleText);
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
        this.enterRule(_localctx, 76, truefalseParser.RULE_documentbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 584;
                this.op_document_format();
                this.state = 585;
                this.match(truefalseParser.COLON);
                this.state = 586;
                this.url();
                this.state = 587;
                this.match(truefalseParser.CL);
                this.state = 592;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === truefalseParser.OPATALT) {
                    {
                        this.state = 588;
                        this.match(truefalseParser.OPATALT);
                        this.state = 589;
                        this.words();
                        this.state = 590;
                        this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 78, truefalseParser.RULE_websitebit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 594;
                this.op_website_format();
                this.state = 595;
                this.match(truefalseParser.COLON);
                this.state = 596;
                this.url();
                this.state = 597;
                this.match(truefalseParser.CL);
                this.state = 602;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === truefalseParser.OPATALT) {
                    {
                        this.state = 598;
                        this.match(truefalseParser.OPATALT);
                        this.state = 599;
                        this.words();
                        this.state = 600;
                        this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 80, truefalseParser.RULE_appbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 604;
                this.op_app_format();
                this.state = 605;
                this.match(truefalseParser.COLON);
                this.state = 608;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.URL:
                        {
                            this.state = 606;
                            this.url();
                        }
                        break;
                    case truefalseParser.TEL:
                        {
                            this.state = 607;
                            this.telephone();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 610;
                this.match(truefalseParser.CL);
                this.state = 615;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === truefalseParser.OPATALT) {
                    {
                        this.state = 611;
                        this.match(truefalseParser.OPATALT);
                        this.state = 612;
                        this.words();
                        this.state = 613;
                        this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 82, truefalseParser.RULE_stillimagefilmbit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 617;
                this.stillimg_one();
                this.state = 621;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 618;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 623;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
        this.enterRule(_localctx, 84, truefalseParser.RULE_stillimg_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 624;
                this.op_stillimagefilm_format();
                this.state = 625;
                this.match(truefalseParser.COLON);
                this.state = 629;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === truefalseParser.S) {
                    {
                        {
                            this.state = 626;
                            this.match(truefalseParser.S);
                        }
                    }
                    this.state = 631;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 632;
                this.url();
                this.state = 633;
                this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 86, truefalseParser.RULE_videobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 635;
                this.video_one();
                this.state = 639;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 636;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 641;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
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
        this.enterRule(_localctx, 88, truefalseParser.RULE_video_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 642;
                this.op_video_format();
                this.state = 643;
                this.match(truefalseParser.COLON);
                this.state = 644;
                this.url();
                this.state = 645;
                this.match(truefalseParser.CL);
                this.state = 650;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                    case 1:
                        {
                            this.state = 646;
                            this.match(truefalseParser.OPATALT);
                            this.state = 647;
                            this.words();
                            this.state = 648;
                            this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 90, truefalseParser.RULE_imagebit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 652;
                this.image_one();
                this.state = 656;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 653;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 658;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                }
                this.state = 661;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                    case 1:
                        {
                            this.state = 659;
                            this.match(truefalseParser.NL);
                            this.state = 660;
                            this.match(truefalseParser.ShowInIndex);
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
        this.enterRule(_localctx, 92, truefalseParser.RULE_image_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 663;
                this.op_image_format();
                this.state = 664;
                this.match(truefalseParser.COLON);
                this.state = 668;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === truefalseParser.S) {
                    {
                        {
                            this.state = 665;
                            this.match(truefalseParser.S);
                        }
                    }
                    this.state = 670;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 671;
                this.url();
                this.state = 672;
                this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 94, truefalseParser.RULE_op_image_format);
        let _la;
        try {
            this.state = 687;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.OpAmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 674;
                        this.match(truefalseParser.OpAmpImage);
                        this.state = 677;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case truefalseParser.Image_type:
                                {
                                    {
                                        this.state = 675;
                                        this.match(truefalseParser.Image_type);
                                    }
                                }
                                break;
                            case truefalseParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 676;
                                        this.match(truefalseParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case truefalseParser.COLON:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case truefalseParser.OpAmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 679;
                        this.match(truefalseParser.OpAmpImageLink);
                        this.state = 681;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === truefalseParser.Image_type) {
                            {
                                this.state = 680;
                                this.match(truefalseParser.Image_type);
                            }
                        }
                    }
                    break;
                case truefalseParser.OpAmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 683;
                        this.match(truefalseParser.OpAmpImageZoom);
                        this.state = 685;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === truefalseParser.Image_type) {
                            {
                                this.state = 684;
                                this.match(truefalseParser.Image_type);
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
    image_chained() {
        let _localctx = new Image_chainedContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, truefalseParser.RULE_image_chained);
        let _la;
        try {
            let _alt;
            this.state = 706;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 689;
                        this.match(truefalseParser.AtSrc);
                        this.state = 690;
                        this.match(truefalseParser.COLON);
                        this.state = 691;
                        this.url();
                        this.state = 692;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.AtWidth:
                case truefalseParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 694;
                        _la = this._input.LA(1);
                        if (!(_la === truefalseParser.AtWidth || _la === truefalseParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 695;
                        this.match(truefalseParser.COLON);
                        this.state = 696;
                        this.match(truefalseParser.NUMERIC);
                        this.state = 697;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.OPATALT:
                case truefalseParser.OpAtCaption:
                case truefalseParser.OpAtLicense:
                case truefalseParser.OpAtCopyright:
                case truefalseParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 698;
                        _la = this._input.LA(1);
                        if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (truefalseParser.OPATALT - 73)) | (1 << (truefalseParser.OpAtCaption - 73)) | (1 << (truefalseParser.OpAtLicense - 73)) | (1 << (truefalseParser.OpAtCopyright - 73)) | (1 << (truefalseParser.OpAtSearch - 73)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 702;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 699;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 704;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                        }
                        this.state = 705;
                        this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 98, truefalseParser.RULE_image_chained4match);
        let _la;
        try {
            let _alt;
            this.state = 725;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 708;
                        this.match(truefalseParser.AtSrc);
                        this.state = 709;
                        this.match(truefalseParser.COLON);
                        this.state = 710;
                        this.url();
                        this.state = 711;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.AtWidth:
                case truefalseParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 713;
                        _la = this._input.LA(1);
                        if (!(_la === truefalseParser.AtWidth || _la === truefalseParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 714;
                        this.match(truefalseParser.COLON);
                        this.state = 715;
                        this.match(truefalseParser.NUMERIC);
                        this.state = 716;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.OPATALT:
                case truefalseParser.OpAtCaption:
                case truefalseParser.OpAtLicense:
                case truefalseParser.OpAtCopyright:
                case truefalseParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 717;
                        _la = this._input.LA(1);
                        if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (truefalseParser.OPATALT - 73)) | (1 << (truefalseParser.OpAtCaption - 73)) | (1 << (truefalseParser.OpAtLicense - 73)) | (1 << (truefalseParser.OpAtCopyright - 73)) | (1 << (truefalseParser.OpAtSearch - 73)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 721;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 718;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 723;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
                        }
                        this.state = 724;
                        this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 100, truefalseParser.RULE_audiobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 727;
                this.audio_one();
                this.state = 731;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 728;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 733;
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
    audio_one() {
        let _localctx = new Audio_oneContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, truefalseParser.RULE_audio_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 734;
                this.op_audio_format();
                this.state = 735;
                this.match(truefalseParser.COLON);
                this.state = 736;
                this.url();
                this.state = 737;
                this.match(truefalseParser.CL);
                this.state = 742;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                    case 1:
                        {
                            this.state = 738;
                            this.match(truefalseParser.OPATALT);
                            this.state = 739;
                            this.words();
                            this.state = 740;
                            this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 104, truefalseParser.RULE_audio_format);
        let _la;
        try {
            this.state = 754;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.AmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 744;
                        this.match(truefalseParser.AmpAudio);
                        this.state = 747;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === truefalseParser.COLON) {
                            {
                                this.state = 745;
                                this.match(truefalseParser.COLON);
                                this.state = 746;
                                this.match(truefalseParser.Audio_type);
                            }
                        }
                    }
                    break;
                case truefalseParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 749;
                        this.match(truefalseParser.AmpAudioLink);
                        this.state = 752;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === truefalseParser.COLON) {
                            {
                                this.state = 750;
                                this.match(truefalseParser.COLON);
                                this.state = 751;
                                this.match(truefalseParser.Audio_type);
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
        this.enterRule(_localctx, 106, truefalseParser.RULE_op_audio_format);
        try {
            this.state = 771;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.OpAmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 756;
                        this.match(truefalseParser.OpAmpAudio);
                        this.state = 759;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
                            case 1:
                                {
                                    this.state = 757;
                                    this.match(truefalseParser.COLON);
                                    this.state = 758;
                                    this.match(truefalseParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case truefalseParser.OpAmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 761;
                        this.match(truefalseParser.OpAmpAudioLink);
                        this.state = 764;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                            case 1:
                                {
                                    this.state = 762;
                                    this.match(truefalseParser.COLON);
                                    this.state = 763;
                                    this.match(truefalseParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case truefalseParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 766;
                        this.match(truefalseParser.OpAmpAudioEmbed);
                        this.state = 769;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                            case 1:
                                {
                                    this.state = 767;
                                    this.match(truefalseParser.COLON);
                                    this.state = 768;
                                    this.match(truefalseParser.Audio_type);
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
        this.enterRule(_localctx, 108, truefalseParser.RULE_resource_chained);
        let _la;
        try {
            let _alt;
            this.state = 804;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.OPA:
                case truefalseParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 776;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case truefalseParser.OPA:
                                {
                                    this.state = 773;
                                    this.match(truefalseParser.OPA);
                                    this.state = 774;
                                    this.s_and_w();
                                }
                                break;
                            case truefalseParser.AtSrc:
                                {
                                    this.state = 775;
                                    this.match(truefalseParser.AtSrc);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 778;
                        this.match(truefalseParser.COLON);
                        this.state = 782;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 779;
                                        this.match(truefalseParser.S);
                                    }
                                }
                            }
                            this.state = 784;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                        }
                        this.state = 787;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 787;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case truefalseParser.S:
                                    case truefalseParser.OPS:
                                    case truefalseParser.COLON:
                                    case truefalseParser.AMP:
                                    case truefalseParser.DBLCOLON:
                                    case truefalseParser.Greater:
                                    case truefalseParser.Less:
                                    case truefalseParser.DBLEQ:
                                    case truefalseParser.RightAngle:
                                    case truefalseParser.RightArrow:
                                    case truefalseParser.NUMERIC:
                                    case truefalseParser.STRING:
                                    case truefalseParser.NOTBITMARK:
                                    case truefalseParser.ELIPSIS:
                                    case truefalseParser.SENTENCE:
                                    case truefalseParser.BARSTRING:
                                    case truefalseParser.URL:
                                        {
                                            this.state = 785;
                                            this.s_and_w();
                                        }
                                        break;
                                    case truefalseParser.NL:
                                        {
                                            this.state = 786;
                                            this.match(truefalseParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 789;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL);
                        this.state = 791;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.AtWidth:
                case truefalseParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 792;
                        _la = this._input.LA(1);
                        if (!(_la === truefalseParser.AtWidth || _la === truefalseParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 793;
                        this.match(truefalseParser.COLON);
                        this.state = 794;
                        this.match(truefalseParser.NUMERIC);
                        this.state = 795;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.OPATALT:
                case truefalseParser.OpAtCaption:
                case truefalseParser.OpAtLicense:
                case truefalseParser.OpAtCopyright:
                case truefalseParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 796;
                        _la = this._input.LA(1);
                        if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (truefalseParser.OPATALT - 73)) | (1 << (truefalseParser.OpAtCaption - 73)) | (1 << (truefalseParser.OpAtLicense - 73)) | (1 << (truefalseParser.OpAtCopyright - 73)) | (1 << (truefalseParser.OpAtSearch - 73)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 800;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 797;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 802;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
                        }
                        this.state = 803;
                        this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 110, truefalseParser.RULE_telephone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 806;
                this.match(truefalseParser.TEL);
                this.state = 807;
                this.match(truefalseParser.PLUS);
                this.state = 808;
                this.match(truefalseParser.NUMERIC);
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
        this.enterRule(_localctx, 112, truefalseParser.RULE_url);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 810;
                this.match(truefalseParser.URL);
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
        this.enterRule(_localctx, 114, truefalseParser.RULE_item);
        let _la;
        try {
            let _alt;
            this.state = 850;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.OPITEM:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 812;
                        this.match(truefalseParser.OPITEM);
                        this.state = 817;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 815;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 813;
                                            this.match(truefalseParser.COLON);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 814;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 819;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 820;
                        this.match(truefalseParser.CL);
                        this.state = 830;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 824;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.S) {
                                            {
                                                {
                                                    this.state = 821;
                                                    this.match(truefalseParser.S);
                                                }
                                            }
                                            this.state = 826;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 827;
                                        this.lead();
                                    }
                                }
                            }
                            this.state = 832;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                        }
                    }
                    break;
                case truefalseParser.OPC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 833;
                        this.match(truefalseParser.OPC);
                        this.state = 835;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 834;
                                this.s_and_w();
                            }
                        }
                        this.state = 837;
                        this.match(truefalseParser.CL);
                        this.state = 847;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 841;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.S) {
                                            {
                                                {
                                                    this.state = 838;
                                                    this.match(truefalseParser.S);
                                                }
                                            }
                                            this.state = 843;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 844;
                                        this.lead();
                                    }
                                }
                            }
                            this.state = 849;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
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
    lead() {
        let _localctx = new LeadContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, truefalseParser.RULE_lead);
        let _la;
        try {
            this.state = 897;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.OPLEAD:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 852;
                        this.match(truefalseParser.OPLEAD);
                        this.state = 853;
                        this.s_and_w();
                        this.state = 858;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 856;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 854;
                                            this.match(truefalseParser.COLON);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 855;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 860;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 861;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.OPPAGENUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 863;
                        this.match(truefalseParser.OPPAGENUMBER);
                        this.state = 864;
                        this.s_and_w();
                        this.state = 869;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 867;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 865;
                                            this.match(truefalseParser.COLON);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 866;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 871;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 872;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.OPMARGINNUMBER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 874;
                        this.match(truefalseParser.OPMARGINNUMBER);
                        this.state = 875;
                        this.s_and_w();
                        this.state = 880;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 878;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 876;
                                            this.match(truefalseParser.COLON);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 877;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 882;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 883;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.OPC:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 885;
                        this.match(truefalseParser.OPC);
                        this.state = 887;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                            case 1:
                                {
                                    this.state = 886;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 893;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 891;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 889;
                                            this.match(truefalseParser.COLON);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 890;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 895;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 896;
                        this.match(truefalseParser.CL);
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
    angleref() {
        let _localctx = new AnglerefContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, truefalseParser.RULE_angleref);
        let _la;
        try {
            this.state = 909;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.OPRANGLES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 899;
                        this.match(truefalseParser.OPRANGLES);
                        this.state = 901;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 900;
                                this.s_and_w();
                            }
                        }
                        this.state = 903;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.OPRANGLEL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 904;
                        this.match(truefalseParser.OPRANGLEL);
                        this.state = 906;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 905;
                                this.s_and_w();
                            }
                        }
                        this.state = 908;
                        this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 120, truefalseParser.RULE_example);
        let _la;
        try {
            this.state = 918;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.AtExamplecl:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 911;
                        this.match(truefalseParser.AtExamplecl);
                    }
                    break;
                case truefalseParser.AtExampleWithStr:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 912;
                        this.match(truefalseParser.AtExampleWithStr);
                    }
                    break;
                case truefalseParser.AtExamplecol:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 913;
                        this.match(truefalseParser.AtExamplecol);
                        this.state = 915;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === truefalseParser.SENTENCE) {
                            {
                                this.state = 914;
                                this.match(truefalseParser.SENTENCE);
                            }
                        }
                        this.state = 917;
                        this.match(truefalseParser.EOF);
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
        this.enterRule(_localctx, 122, truefalseParser.RULE_bracketed_text);
        let _la;
        try {
            let _alt;
            this.state = 959;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 920;
                        this.match(truefalseParser.BracEnclose);
                        this.state = 922;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                            case 1:
                                {
                                    this.state = 921;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 945;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                {
                                    this.state = 924;
                                    this.s_and_w();
                                    this.state = 934;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 925;
                                                    this.match(truefalseParser.NL);
                                                    this.state = 929;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 926;
                                                                    this.match(truefalseParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 931;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 936;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                                    }
                                    this.state = 940;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === truefalseParser.NL) {
                                        {
                                            {
                                                this.state = 937;
                                                this.match(truefalseParser.NL);
                                            }
                                        }
                                        this.state = 942;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 947;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 948;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 949;
                        this.match(truefalseParser.BracEnclose);
                        this.state = 955;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 953;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 950;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 951;
                                            this.match(truefalseParser.NL);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 952;
                                            this.match(truefalseParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 957;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 958;
                        this.match(truefalseParser.EOF);
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
        this.enterRule(_localctx, 124, truefalseParser.RULE_reference);
        let _la;
        try {
            this.state = 983;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 961;
                        this.match(truefalseParser.AtReference);
                        this.state = 966;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 966;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 962;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 963;
                                            this.match(truefalseParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 964;
                                            this.match(truefalseParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 965;
                                            this.match(truefalseParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 968;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL);
                        this.state = 970;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 971;
                        this.match(truefalseParser.AtReference);
                        this.state = 979;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 977;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 972;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 973;
                                            this.match(truefalseParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 974;
                                            this.match(truefalseParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 975;
                                            this.match(truefalseParser.NL);
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 976;
                                            this.match(truefalseParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 981;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 982;
                        this.match(truefalseParser.EOF);
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
        this.enterRule(_localctx, 126, truefalseParser.RULE_progress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 985;
                this.match(truefalseParser.AtProgress);
                this.state = 986;
                this.s_and_w();
                this.state = 987;
                this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 128, truefalseParser.RULE_dateprop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 989;
                this.match(truefalseParser.AtDate);
                this.state = 993;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 993;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                            case 1:
                                {
                                    this.state = 990;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 991;
                                    this.match(truefalseParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 992;
                                    this.match(truefalseParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 995;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL);
                this.state = 997;
                this.match(truefalseParser.CL);
                this.state = 999;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === truefalseParser.AtDate) {
                    {
                        this.state = 998;
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
        this.enterRule(_localctx, 130, truefalseParser.RULE_dateprop_chained);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1001;
                this.match(truefalseParser.AtDate);
                this.state = 1005;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1005;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1002;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1003;
                                    this.match(truefalseParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1004;
                                    this.match(truefalseParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1007;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL);
                this.state = 1009;
                this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 132, truefalseParser.RULE_instruction);
        let _la;
        try {
            let _alt;
            this.state = 1057;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1011;
                        this.match(truefalseParser.OPB);
                        this.state = 1015;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1012;
                                        this.match(truefalseParser.NL);
                                    }
                                }
                            }
                            this.state = 1017;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                        }
                        this.state = 1019;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1018;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1036;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1030;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.NL) {
                                            {
                                                {
                                                    this.state = 1021;
                                                    this.match(truefalseParser.NL);
                                                    this.state = 1025;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1022;
                                                                    this.match(truefalseParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1027;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
                                                    }
                                                }
                                            }
                                            this.state = 1032;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 1033;
                                        this.s_and_w();
                                    }
                                }
                            }
                            this.state = 1038;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
                        }
                        this.state = 1042;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === truefalseParser.NL) {
                            {
                                {
                                    this.state = 1039;
                                    this.match(truefalseParser.NL);
                                }
                            }
                            this.state = 1044;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1045;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1046;
                        this.match(truefalseParser.OPB);
                        this.state = 1050;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === truefalseParser.NL) {
                            {
                                {
                                    this.state = 1047;
                                    this.match(truefalseParser.NL);
                                }
                            }
                            this.state = 1052;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1054;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 1053;
                                this.s_and_w();
                            }
                        }
                        this.state = 1056;
                        this.match(truefalseParser.EOF);
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
        this.enterRule(_localctx, 134, truefalseParser.RULE_hint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1059;
                this.match(truefalseParser.OPQ);
                this.state = 1061;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1060;
                            _la = this._input.LA(1);
                            if (_la <= 0 || (_la === truefalseParser.CL)) {
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
                    this.state = 1063;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.OPDOT) | (1 << truefalseParser.S) | (1 << truefalseParser.BitTruefalse1) | (1 << truefalseParser.BitTruefalse) | (1 << truefalseParser.OPDOLL) | (1 << truefalseParser.OPBUL) | (1 << truefalseParser.OPESC) | (1 << truefalseParser.OPRANGLES) | (1 << truefalseParser.OPRANGLEL) | (1 << truefalseParser.OPDANGLE) | (1 << truefalseParser.OPU) | (1 << truefalseParser.OPB) | (1 << truefalseParser.OPQ) | (1 << truefalseParser.OPA) | (1 << truefalseParser.OPP) | (1 << truefalseParser.OPM) | (1 << truefalseParser.OPS) | (1 << truefalseParser.OPR) | (1 << truefalseParser.OPC) | (1 << truefalseParser.OPITEM) | (1 << truefalseParser.OPLEAD) | (1 << truefalseParser.OPPAGENUMBER) | (1 << truefalseParser.OPMARGINNUMBER) | (1 << truefalseParser.OPHASH) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.PLUS) | (1 << truefalseParser.DotAt) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.HSPL - 32)) | (1 << (truefalseParser.HSPL2 - 32)) | (1 << (truefalseParser.SSPL - 32)) | (1 << (truefalseParser.SSPL2 - 32)) | (1 << (truefalseParser.COMMENT - 32)) | (1 << (truefalseParser.DCANY - 32)) | (1 << (truefalseParser.Image_type - 32)) | (1 << (truefalseParser.Audio_type - 32)) | (1 << (truefalseParser.Video_type - 32)) | (1 << (truefalseParser.ArticleText - 32)) | (1 << (truefalseParser.NOTCL - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)) | (1 << (truefalseParser.OPAT - 32)) | (1 << (truefalseParser.AtProgress - 32)) | (1 << (truefalseParser.AtReference - 32)) | (1 << (truefalseParser.AtWidth - 32)) | (1 << (truefalseParser.AtHeight - 32)) | (1 << (truefalseParser.AtProgressPoints - 32)) | (1 << (truefalseParser.AtShortanswer - 32)) | (1 << (truefalseParser.AtLonganswer - 32)) | (1 << (truefalseParser.AtExampleWithStr - 32)) | (1 << (truefalseParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (truefalseParser.AtExamplecl - 64)) | (1 << (truefalseParser.AtSampleSolution - 64)) | (1 << (truefalseParser.AtPartialAnswerS - 64)) | (1 << (truefalseParser.AtPartialAnswer - 64)) | (1 << (truefalseParser.AtLabeltrue - 64)) | (1 << (truefalseParser.AtLabelfalse - 64)) | (1 << (truefalseParser.AtPoints - 64)) | (1 << (truefalseParser.AtSrc - 64)) | (1 << (truefalseParser.AtPartner - 64)) | (1 << (truefalseParser.OPATALT - 64)) | (1 << (truefalseParser.OPAMARK - 64)) | (1 << (truefalseParser.ShowInIndex - 64)) | (1 << (truefalseParser.OpAtCaption - 64)) | (1 << (truefalseParser.OpAtLicense - 64)) | (1 << (truefalseParser.OpAtCopyright - 64)) | (1 << (truefalseParser.OpAtSearch - 64)) | (1 << (truefalseParser.OpAtIsTracked - 64)) | (1 << (truefalseParser.OpAtIsInfoOnly - 64)) | (1 << (truefalseParser.AtDate - 64)) | (1 << (truefalseParser.Http - 64)) | (1 << (truefalseParser.Https - 64)) | (1 << (truefalseParser.AmpAudio - 64)) | (1 << (truefalseParser.AmpImage - 64)) | (1 << (truefalseParser.AmpImageZoom - 64)) | (1 << (truefalseParser.AmpVideo - 64)) | (1 << (truefalseParser.AmpArticle - 64)) | (1 << (truefalseParser.AmpDocument - 64)) | (1 << (truefalseParser.AmpApp - 64)) | (1 << (truefalseParser.AmpWebsite - 64)) | (1 << (truefalseParser.AmpStillImageFilm - 64)) | (1 << (truefalseParser.AmpPdf - 64)) | (1 << (truefalseParser.OpAmpAudio - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (truefalseParser.OpAmpImage - 96)) | (1 << (truefalseParser.OpAmpImageZoom - 96)) | (1 << (truefalseParser.OpAmpVideo - 96)) | (1 << (truefalseParser.OpAmpArticle - 96)) | (1 << (truefalseParser.OpAmpArticleAtt - 96)) | (1 << (truefalseParser.OpAmpDocument - 96)) | (1 << (truefalseParser.OpAmpApp - 96)) | (1 << (truefalseParser.OpAmpWebsite - 96)) | (1 << (truefalseParser.OpAmpStillImageFilm - 96)) | (1 << (truefalseParser.BracEnclose - 96)) | (1 << (truefalseParser.AmpAudioLink - 96)) | (1 << (truefalseParser.AmpImageLink - 96)) | (1 << (truefalseParser.AmpVideoLink - 96)) | (1 << (truefalseParser.AmpArticleLink - 96)) | (1 << (truefalseParser.AmpDocumentLink - 96)) | (1 << (truefalseParser.AmpDocumentDownload - 96)) | (1 << (truefalseParser.AmpAppLink - 96)) | (1 << (truefalseParser.AmpWebsiteLink - 96)) | (1 << (truefalseParser.AmpStillImageFilmLink - 96)) | (1 << (truefalseParser.OpAmpAudioLink - 96)) | (1 << (truefalseParser.OpAmpImageLink - 96)) | (1 << (truefalseParser.OpAmpVideoLink - 96)) | (1 << (truefalseParser.OpAmpArticleLink - 96)) | (1 << (truefalseParser.OpAmpDocumentLink - 96)) | (1 << (truefalseParser.OpAmpDocumentDownload - 96)) | (1 << (truefalseParser.OpAmpAppLink - 96)) | (1 << (truefalseParser.OpAmpWebsiteLink - 96)) | (1 << (truefalseParser.OpAmpStillImageFilmLink - 96)) | (1 << (truefalseParser.AmpImageEmbed - 96)) | (1 << (truefalseParser.AmpVideoEmbed - 96)) | (1 << (truefalseParser.AmpAudioEmbed - 96)) | (1 << (truefalseParser.AmpDocumentEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (truefalseParser.AmpStillImageFilmEmbed - 128)) | (1 << (truefalseParser.OpAmpImageEmbed - 128)) | (1 << (truefalseParser.OpAmpVideoEmbed - 128)) | (1 << (truefalseParser.OpAmpAudioEmbed - 128)) | (1 << (truefalseParser.OpAmpDocumentEmbed - 128)) | (1 << (truefalseParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (truefalseParser.BitmarkMinus - 128)) | (1 << (truefalseParser.BitmarkPlus - 128)) | (1 << (truefalseParser.ColonText - 128)) | (1 << (truefalseParser.ColonJson - 128)) | (1 << (truefalseParser.Prosemirror - 128)) | (1 << (truefalseParser.Placeholder - 128)) | (1 << (truefalseParser.BASIC - 128)) | (1 << (truefalseParser.JPG - 128)) | (1 << (truefalseParser.PNG - 128)) | (1 << (truefalseParser.GIF - 128)) | (1 << (truefalseParser.SVG - 128)) | (1 << (truefalseParser.MP2 - 128)) | (1 << (truefalseParser.MP3 - 128)) | (1 << (truefalseParser.MP4 - 128)) | (1 << (truefalseParser.FLV - 128)) | (1 << (truefalseParser.WMV - 128)) | (1 << (truefalseParser.MPEG - 128)) | (1 << (truefalseParser.MPG - 128)) | (1 << (truefalseParser.TEL - 128)) | (1 << (truefalseParser.DotArticleAtt - 128)) | (1 << (truefalseParser.STAR - 128)) | (1 << (truefalseParser.URL - 128)) | (1 << (truefalseParser.LIST_LINE - 128)) | (1 << (truefalseParser.ENCLBARS - 128)))) !== 0));
                this.state = 1065;
                this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 136, truefalseParser.RULE_title);
        let _la;
        try {
            this.state = 1079;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1067;
                        this.match(truefalseParser.OPHASH);
                        this.state = 1070;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1070;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case truefalseParser.S:
                                    case truefalseParser.OPS:
                                    case truefalseParser.COLON:
                                    case truefalseParser.AMP:
                                    case truefalseParser.DBLCOLON:
                                    case truefalseParser.Greater:
                                    case truefalseParser.Less:
                                    case truefalseParser.DBLEQ:
                                    case truefalseParser.RightAngle:
                                    case truefalseParser.RightArrow:
                                    case truefalseParser.NUMERIC:
                                    case truefalseParser.STRING:
                                    case truefalseParser.NOTBITMARK:
                                    case truefalseParser.ELIPSIS:
                                    case truefalseParser.SENTENCE:
                                    case truefalseParser.BARSTRING:
                                    case truefalseParser.URL:
                                        {
                                            this.state = 1068;
                                            this.s_and_w();
                                        }
                                        break;
                                    case truefalseParser.NL:
                                        {
                                            this.state = 1069;
                                            this.match(truefalseParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 1072;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL);
                        this.state = 1074;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1075;
                        this.match(truefalseParser.OPHASH);
                        this.state = 1076;
                        this.s_and_w();
                        this.state = 1077;
                        this.match(truefalseParser.EOF);
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
        this.enterRule(_localctx, 138, truefalseParser.RULE_bool_label);
        try {
            this.state = 1089;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.AtLabeltrue:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1081;
                        this.match(truefalseParser.AtLabeltrue);
                        this.state = 1082;
                        this.s_and_w();
                        this.state = 1083;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.AtLabelfalse:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1085;
                        this.match(truefalseParser.AtLabelfalse);
                        this.state = 1086;
                        this.s_and_w();
                        this.state = 1087;
                        this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 140, truefalseParser.RULE_progress_points);
        try {
            this.state = 1100;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1091;
                        this.match(truefalseParser.AtProgressPoints);
                        this.state = 1092;
                        this.match(truefalseParser.COLON);
                        this.state = 1093;
                        this.match(truefalseParser.NUMERIC);
                        this.state = 1094;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1095;
                        this.match(truefalseParser.AtProgressPoints);
                        this.state = 1096;
                        this.match(truefalseParser.COLON);
                        this.state = 1097;
                        this.s_and_w();
                        this.state = 1098;
                        this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 142, truefalseParser.RULE_istracked);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1102;
                this.match(truefalseParser.OpAtIsTracked);
                this.state = 1103;
                this.s_and_w();
                this.state = 1104;
                this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 144, truefalseParser.RULE_isinfoonly);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1106;
                this.match(truefalseParser.OpAtIsInfoOnly);
                this.state = 1107;
                this.s_and_w();
                this.state = 1108;
                this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 146, truefalseParser.RULE_atdef);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1110;
                this.atdef_();
                this.state = 1120;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1114;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === truefalseParser.NL) {
                                    {
                                        {
                                            this.state = 1111;
                                            this.match(truefalseParser.NL);
                                        }
                                    }
                                    this.state = 1116;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1117;
                                this.atdef_();
                            }
                        }
                    }
                    this.state = 1122;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
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
        this.enterRule(_localctx, 148, truefalseParser.RULE_atdef_);
        let _la;
        try {
            let _alt;
            this.state = 1146;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case truefalseParser.OPA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1123;
                        this.match(truefalseParser.OPA);
                        this.state = 1124;
                        this.s_and_w();
                        this.state = 1125;
                        _la = this._input.LA(1);
                        if (!(_la === truefalseParser.COLON || _la === truefalseParser.DBLCOLON)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1126;
                        this.s_and_w();
                        this.state = 1132;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 1130;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1127;
                                            this.match(truefalseParser.NL);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1128;
                                            this.match(truefalseParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1129;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 1134;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1135;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1137;
                        this.match(truefalseParser.OpAtCopyright);
                        this.state = 1141;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1138;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1143;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                        }
                        this.state = 1144;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case truefalseParser.AtSampleSolution:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1145;
                        this.match(truefalseParser.AtSampleSolution);
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
        this.enterRule(_localctx, 150, truefalseParser.RULE_dollarans);
        let _la;
        try {
            this.state = 1167;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1148;
                        this.match(truefalseParser.OPDOLL);
                        this.state = 1152;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1152;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1149;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1150;
                                            this.match(truefalseParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1151;
                                            this.match(truefalseParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1154;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL);
                        this.state = 1156;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1157;
                        this.match(truefalseParser.OPDOLL);
                        this.state = 1163;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                            {
                                this.state = 1161;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1158;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1159;
                                            this.match(truefalseParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1160;
                                            this.match(truefalseParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1165;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1166;
                        this.match(truefalseParser.EOF);
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
        this.enterRule(_localctx, 152, truefalseParser.RULE_anchor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1169;
                this.match(truefalseParser.OPDANGLE);
                this.state = 1171;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL) {
                    {
                        this.state = 1170;
                        this.s_and_w();
                    }
                }
                this.state = 1173;
                this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 154, truefalseParser.RULE_lines);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1175;
                            this.s_and_w();
                            this.state = 1177;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.NL) {
                                {
                                    this.state = 1176;
                                    this.match(truefalseParser.NL);
                                }
                            }
                        }
                    }
                    this.state = 1181;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NOTBITMARK - 32)) | (1 << (truefalseParser.ELIPSIS - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)))) !== 0) || _la === truefalseParser.URL);
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
        this.enterRule(_localctx, 156, truefalseParser.RULE_s_and_w);
        let _la;
        try {
            let _alt;
            this.state = 1229;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1183;
                        this.match(truefalseParser.STRING);
                        this.state = 1190;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1185;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1184;
                                                this.match(truefalseParser.S);
                                            }
                                        }
                                        this.state = 1187;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === truefalseParser.S);
                                    this.state = 1189;
                                    this.match(truefalseParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1192;
                        this.words();
                        this.state = 1199;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 175, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1194;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1193;
                                                this.match(truefalseParser.S);
                                            }
                                        }
                                        this.state = 1196;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === truefalseParser.S);
                                    this.state = 1198;
                                    this.match(truefalseParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1201;
                        this.match(truefalseParser.OPS);
                        this.state = 1202;
                        this.s_and_w();
                        this.state = 1203;
                        this.match(truefalseParser.CL);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1205;
                        this.match(truefalseParser.NUMERIC);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1209;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === truefalseParser.S) {
                            {
                                {
                                    this.state = 1206;
                                    this.match(truefalseParser.S);
                                }
                            }
                            this.state = 1211;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1212;
                        this.match(truefalseParser.COLON);
                        this.state = 1216;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1213;
                                        this.match(truefalseParser.S);
                                    }
                                }
                            }
                            this.state = 1218;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1219;
                        this.match(truefalseParser.AMP);
                        this.state = 1223;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1220;
                                        this.match(truefalseParser.S);
                                    }
                                }
                            }
                            this.state = 1225;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1226;
                        this.match(truefalseParser.DBLCOLON);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1227;
                        this.match(truefalseParser.DBLEQ);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1228;
                        this.match(truefalseParser.URL);
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
    dclines() {
        let _localctx = new DclinesContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, truefalseParser.RULE_dclines);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1231;
                this.match(truefalseParser.DCANY);
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
        this.enterRule(_localctx, 160, truefalseParser.RULE_clnsp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1233;
                this.match(truefalseParser.CL);
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
        this.enterRule(_localctx, 162, truefalseParser.RULE_sspl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1235;
                _la = this._input.LA(1);
                if (!(_la === truefalseParser.SSPL || _la === truefalseParser.SSPL2)) {
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
        this.enterRule(_localctx, 164, truefalseParser.RULE_words);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1248;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1248;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case truefalseParser.SENTENCE:
                                        {
                                            this.state = 1237;
                                            this.match(truefalseParser.SENTENCE);
                                        }
                                        break;
                                    case truefalseParser.NOTBITMARK:
                                        {
                                            this.state = 1238;
                                            this.match(truefalseParser.NOTBITMARK);
                                        }
                                        break;
                                    case truefalseParser.BARSTRING:
                                        {
                                            this.state = 1239;
                                            this.match(truefalseParser.BARSTRING);
                                        }
                                        break;
                                    case truefalseParser.ELIPSIS:
                                        {
                                            this.state = 1240;
                                            this.match(truefalseParser.ELIPSIS);
                                        }
                                        break;
                                    case truefalseParser.AMP:
                                        {
                                            this.state = 1241;
                                            this.match(truefalseParser.AMP);
                                        }
                                        break;
                                    case truefalseParser.Greater:
                                        {
                                            this.state = 1242;
                                            this.match(truefalseParser.Greater);
                                            this.state = 1243;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === truefalseParser.Greater)) {
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
                                    case truefalseParser.Less:
                                        {
                                            this.state = 1244;
                                            this.match(truefalseParser.Less);
                                            this.state = 1245;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === truefalseParser.Less)) {
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
                                    case truefalseParser.RightArrow:
                                        {
                                            this.state = 1246;
                                            this.match(truefalseParser.RightArrow);
                                        }
                                        break;
                                    case truefalseParser.RightAngle:
                                        {
                                            this.state = 1247;
                                            this.match(truefalseParser.RightAngle);
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
                    this.state = 1250;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
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
        this.enterRule(_localctx, 166, truefalseParser.RULE_sp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1252;
                this.match(truefalseParser.S);
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
        if (!truefalseParser.__ATN) {
            truefalseParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(truefalseParser._serializedATN));
        }
        return truefalseParser.__ATN;
    }
}
exports.truefalseParser = truefalseParser;
truefalseParser.OPDOT = 1;
truefalseParser.S = 2;
truefalseParser.BitTruefalse1 = 3;
truefalseParser.BitTruefalse = 4;
truefalseParser.OPDOLL = 5;
truefalseParser.OPBUL = 6;
truefalseParser.OPESC = 7;
truefalseParser.OPRANGLES = 8;
truefalseParser.OPRANGLEL = 9;
truefalseParser.OPDANGLE = 10;
truefalseParser.OPU = 11;
truefalseParser.OPB = 12;
truefalseParser.OPQ = 13;
truefalseParser.OPA = 14;
truefalseParser.OPP = 15;
truefalseParser.OPM = 16;
truefalseParser.OPS = 17;
truefalseParser.OPR = 18;
truefalseParser.OPC = 19;
truefalseParser.OPITEM = 20;
truefalseParser.OPLEAD = 21;
truefalseParser.OPPAGENUMBER = 22;
truefalseParser.OPMARGINNUMBER = 23;
truefalseParser.OPHASH = 24;
truefalseParser.CL = 25;
truefalseParser.COLON = 26;
truefalseParser.AMP = 27;
truefalseParser.DBLCOLON = 28;
truefalseParser.PLUS = 29;
truefalseParser.DotAt = 30;
truefalseParser.Greater = 31;
truefalseParser.Less = 32;
truefalseParser.DBLEQ = 33;
truefalseParser.RightAngle = 34;
truefalseParser.RightArrow = 35;
truefalseParser.HSPL = 36;
truefalseParser.HSPL2 = 37;
truefalseParser.SSPL = 38;
truefalseParser.SSPL2 = 39;
truefalseParser.COMMENT = 40;
truefalseParser.DCANY = 41;
truefalseParser.Image_type = 42;
truefalseParser.Audio_type = 43;
truefalseParser.Video_type = 44;
truefalseParser.ArticleText = 45;
truefalseParser.NOTCL = 46;
truefalseParser.NUMERIC = 47;
truefalseParser.STRING = 48;
truefalseParser.NL = 49;
truefalseParser.NOTBITMARK = 50;
truefalseParser.ELIPSIS = 51;
truefalseParser.SENTENCE = 52;
truefalseParser.BARSTRING = 53;
truefalseParser.OPAT = 54;
truefalseParser.AtProgress = 55;
truefalseParser.AtReference = 56;
truefalseParser.AtWidth = 57;
truefalseParser.AtHeight = 58;
truefalseParser.AtProgressPoints = 59;
truefalseParser.AtShortanswer = 60;
truefalseParser.AtLonganswer = 61;
truefalseParser.AtExampleWithStr = 62;
truefalseParser.AtExamplecol = 63;
truefalseParser.AtExamplecl = 64;
truefalseParser.AtSampleSolution = 65;
truefalseParser.AtPartialAnswerS = 66;
truefalseParser.AtPartialAnswer = 67;
truefalseParser.AtLabeltrue = 68;
truefalseParser.AtLabelfalse = 69;
truefalseParser.AtPoints = 70;
truefalseParser.AtSrc = 71;
truefalseParser.AtPartner = 72;
truefalseParser.OPATALT = 73;
truefalseParser.OPAMARK = 74;
truefalseParser.ShowInIndex = 75;
truefalseParser.OpAtCaption = 76;
truefalseParser.OpAtLicense = 77;
truefalseParser.OpAtCopyright = 78;
truefalseParser.OpAtSearch = 79;
truefalseParser.OpAtIsTracked = 80;
truefalseParser.OpAtIsInfoOnly = 81;
truefalseParser.AtDate = 82;
truefalseParser.Http = 83;
truefalseParser.Https = 84;
truefalseParser.AmpAudio = 85;
truefalseParser.AmpImage = 86;
truefalseParser.AmpImageZoom = 87;
truefalseParser.AmpVideo = 88;
truefalseParser.AmpArticle = 89;
truefalseParser.AmpDocument = 90;
truefalseParser.AmpApp = 91;
truefalseParser.AmpWebsite = 92;
truefalseParser.AmpStillImageFilm = 93;
truefalseParser.AmpPdf = 94;
truefalseParser.OpAmpAudio = 95;
truefalseParser.OpAmpImage = 96;
truefalseParser.OpAmpImageZoom = 97;
truefalseParser.OpAmpVideo = 98;
truefalseParser.OpAmpArticle = 99;
truefalseParser.OpAmpArticleAtt = 100;
truefalseParser.OpAmpDocument = 101;
truefalseParser.OpAmpApp = 102;
truefalseParser.OpAmpWebsite = 103;
truefalseParser.OpAmpStillImageFilm = 104;
truefalseParser.BracEnclose = 105;
truefalseParser.AmpAudioLink = 106;
truefalseParser.AmpImageLink = 107;
truefalseParser.AmpVideoLink = 108;
truefalseParser.AmpArticleLink = 109;
truefalseParser.AmpDocumentLink = 110;
truefalseParser.AmpDocumentDownload = 111;
truefalseParser.AmpAppLink = 112;
truefalseParser.AmpWebsiteLink = 113;
truefalseParser.AmpStillImageFilmLink = 114;
truefalseParser.OpAmpAudioLink = 115;
truefalseParser.OpAmpImageLink = 116;
truefalseParser.OpAmpVideoLink = 117;
truefalseParser.OpAmpArticleLink = 118;
truefalseParser.OpAmpDocumentLink = 119;
truefalseParser.OpAmpDocumentDownload = 120;
truefalseParser.OpAmpAppLink = 121;
truefalseParser.OpAmpWebsiteLink = 122;
truefalseParser.OpAmpStillImageFilmLink = 123;
truefalseParser.AmpImageEmbed = 124;
truefalseParser.AmpVideoEmbed = 125;
truefalseParser.AmpAudioEmbed = 126;
truefalseParser.AmpDocumentEmbed = 127;
truefalseParser.AmpStillImageFilmEmbed = 128;
truefalseParser.OpAmpImageEmbed = 129;
truefalseParser.OpAmpVideoEmbed = 130;
truefalseParser.OpAmpAudioEmbed = 131;
truefalseParser.OpAmpDocumentEmbed = 132;
truefalseParser.OpAmpStillImageFilmEmbed = 133;
truefalseParser.BitmarkMinus = 134;
truefalseParser.BitmarkPlus = 135;
truefalseParser.ColonText = 136;
truefalseParser.ColonJson = 137;
truefalseParser.Prosemirror = 138;
truefalseParser.Placeholder = 139;
truefalseParser.BASIC = 140;
truefalseParser.JPG = 141;
truefalseParser.PNG = 142;
truefalseParser.GIF = 143;
truefalseParser.SVG = 144;
truefalseParser.MP2 = 145;
truefalseParser.MP3 = 146;
truefalseParser.MP4 = 147;
truefalseParser.FLV = 148;
truefalseParser.WMV = 149;
truefalseParser.MPEG = 150;
truefalseParser.MPG = 151;
truefalseParser.TEL = 152;
truefalseParser.DotArticleAtt = 153;
truefalseParser.STAR = 154;
truefalseParser.URL = 155;
truefalseParser.LIST_LINE = 156;
truefalseParser.ENCLBARS = 157;
truefalseParser.RULE_bitmark = 0;
truefalseParser.RULE_bitmark_ = 1;
truefalseParser.RULE_truefalses = 2;
truefalseParser.RULE_true_false_1 = 3;
truefalseParser.RULE_true_false = 4;
truefalseParser.RULE_mcrsep = 5;
truefalseParser.RULE_mcrsep_end = 6;
truefalseParser.RULE_tfmisc = 7;
truefalseParser.RULE_choices = 8;
truefalseParser.RULE_cplus = 9;
truefalseParser.RULE_cminus = 10;
truefalseParser.RULE_choice_plus = 11;
truefalseParser.RULE_choice_minus = 12;
truefalseParser.RULE_choice_star = 13;
truefalseParser.RULE_bitElem = 14;
truefalseParser.RULE_resource = 15;
truefalseParser.RULE_gap = 16;
truefalseParser.RULE_single_gap = 17;
truefalseParser.RULE_bullet_item = 18;
truefalseParser.RULE_atpoint = 19;
truefalseParser.RULE_format = 20;
truefalseParser.RULE_resource_format = 21;
truefalseParser.RULE_resource_format_extra = 22;
truefalseParser.RULE_format2 = 23;
truefalseParser.RULE_image_format = 24;
truefalseParser.RULE_video_format = 25;
truefalseParser.RULE_article_format = 26;
truefalseParser.RULE_document_format = 27;
truefalseParser.RULE_app_format = 28;
truefalseParser.RULE_website_format = 29;
truefalseParser.RULE_stillimagefilm_format = 30;
truefalseParser.RULE_op_article_format = 31;
truefalseParser.RULE_op_document_format = 32;
truefalseParser.RULE_op_app_format = 33;
truefalseParser.RULE_op_website_format = 34;
truefalseParser.RULE_op_video_format = 35;
truefalseParser.RULE_op_stillimagefilm_format = 36;
truefalseParser.RULE_articlebit = 37;
truefalseParser.RULE_documentbit = 38;
truefalseParser.RULE_websitebit = 39;
truefalseParser.RULE_appbit = 40;
truefalseParser.RULE_stillimagefilmbit = 41;
truefalseParser.RULE_stillimg_one = 42;
truefalseParser.RULE_videobit = 43;
truefalseParser.RULE_video_one = 44;
truefalseParser.RULE_imagebit = 45;
truefalseParser.RULE_image_one = 46;
truefalseParser.RULE_op_image_format = 47;
truefalseParser.RULE_image_chained = 48;
truefalseParser.RULE_image_chained4match = 49;
truefalseParser.RULE_audiobit = 50;
truefalseParser.RULE_audio_one = 51;
truefalseParser.RULE_audio_format = 52;
truefalseParser.RULE_op_audio_format = 53;
truefalseParser.RULE_resource_chained = 54;
truefalseParser.RULE_telephone = 55;
truefalseParser.RULE_url = 56;
truefalseParser.RULE_item = 57;
truefalseParser.RULE_lead = 58;
truefalseParser.RULE_angleref = 59;
truefalseParser.RULE_example = 60;
truefalseParser.RULE_bracketed_text = 61;
truefalseParser.RULE_reference = 62;
truefalseParser.RULE_progress = 63;
truefalseParser.RULE_dateprop = 64;
truefalseParser.RULE_dateprop_chained = 65;
truefalseParser.RULE_instruction = 66;
truefalseParser.RULE_hint = 67;
truefalseParser.RULE_title = 68;
truefalseParser.RULE_bool_label = 69;
truefalseParser.RULE_progress_points = 70;
truefalseParser.RULE_istracked = 71;
truefalseParser.RULE_isinfoonly = 72;
truefalseParser.RULE_atdef = 73;
truefalseParser.RULE_atdef_ = 74;
truefalseParser.RULE_dollarans = 75;
truefalseParser.RULE_anchor = 76;
truefalseParser.RULE_lines = 77;
truefalseParser.RULE_s_and_w = 78;
truefalseParser.RULE_dclines = 79;
truefalseParser.RULE_clnsp = 80;
truefalseParser.RULE_sspl = 81;
truefalseParser.RULE_words = 82;
truefalseParser.RULE_sp = 83;
// tslint:disable:no-trailing-whitespace
truefalseParser.ruleNames = [
    "bitmark", "bitmark_", "truefalses", "true_false_1", "true_false", "mcrsep",
    "mcrsep_end", "tfmisc", "choices", "cplus", "cminus", "choice_plus", "choice_minus",
    "choice_star", "bitElem", "resource", "gap", "single_gap", "bullet_item",
    "atpoint", "format", "resource_format", "resource_format_extra", "format2",
    "image_format", "video_format", "article_format", "document_format", "app_format",
    "website_format", "stillimagefilm_format", "op_article_format", "op_document_format",
    "op_app_format", "op_website_format", "op_video_format", "op_stillimagefilm_format",
    "articlebit", "documentbit", "websitebit", "appbit", "stillimagefilmbit",
    "stillimg_one", "videobit", "video_one", "imagebit", "image_one", "op_image_format",
    "image_chained", "image_chained4match", "audiobit", "audio_one", "audio_format",
    "op_audio_format", "resource_chained", "telephone", "url", "item", "lead",
    "angleref", "example", "bracketed_text", "reference", "progress", "dateprop",
    "dateprop_chained", "instruction", "hint", "title", "bool_label", "progress_points",
    "istracked", "isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "lines",
    "s_and_w", "dclines", "clnsp", "sspl", "words", "sp",
];
truefalseParser._LITERAL_NAMES = [
    undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
    "'[^'", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "'[#'", "']'", "':'", "'&'", "'::'",
    "'+'", "'.@'", "'>'", "'<'", "'=='", "'\u25BA'", "'\u2192'", undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "'[@'", undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'http://'", "'https://'",
    "'&audio'", "'&image'", "'&image-zoom'", "'&video'", "'&article'", "'&document'",
    "'&app'", "'&website'", "'&still-image-film'", "'&pdf'", undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "'&audio-link'", "'&image-link'", "'&video-link'",
    "'&article-link'", "'&document-link'", "'&document-download'", "'&app-link'",
    "'&website-link'", "'&still-image-film-link'", undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'&image-embed'",
    "'&video-embed'", "'&daudio-embed'", "'&document-embed'", "'&still-image-film-embed'",
    undefined, undefined, undefined, undefined, undefined, "':bitmark--'",
    "':bitmark++'", "':text'", "':json'", "':prosemirror'", "':placeholder'",
    "':basic'", "':jpg'", "':png'", "':gif'", "':svg'", "':mp2'", "':mp3'",
    "':mp4'", "':flv'", "':wmv'", "':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'",
    "'*'",
];
truefalseParser._SYMBOLIC_NAMES = [
    undefined, "OPDOT", "S", "BitTruefalse1", "BitTruefalse", "OPDOLL", "OPBUL",
    "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", "OPQ", "OPA",
    "OPP", "OPM", "OPS", "OPR", "OPC", "OPITEM", "OPLEAD", "OPPAGENUMBER",
    "OPMARGINNUMBER", "OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS",
    "DotAt", "Greater", "Less", "DBLEQ", "RightAngle", "RightArrow", "HSPL",
    "HSPL2", "SSPL", "SSPL2", "COMMENT", "DCANY", "Image_type", "Audio_type",
    "Video_type", "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", "NOTBITMARK",
    "ELIPSIS", "SENTENCE", "BARSTRING", "OPAT", "AtProgress", "AtReference",
    "AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer", "AtLonganswer",
    "AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtSampleSolution",
    "AtPartialAnswerS", "AtPartialAnswer", "AtLabeltrue", "AtLabelfalse",
    "AtPoints", "AtSrc", "AtPartner", "OPATALT", "OPAMARK", "ShowInIndex",
    "OpAtCaption", "OpAtLicense", "OpAtCopyright", "OpAtSearch", "OpAtIsTracked",
    "OpAtIsInfoOnly", "AtDate", "Http", "Https", "AmpAudio", "AmpImage", "AmpImageZoom",
    "AmpVideo", "AmpArticle", "AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm",
    "AmpPdf", "OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", "OpAmpVideo",
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
truefalseParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(truefalseParser._LITERAL_NAMES, truefalseParser._SYMBOLIC_NAMES, []);
truefalseParser._serializedATNSegments = 3;
truefalseParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9F\u04E9\x04" +
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
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x03\x02\x03\x02\x07" +
    "\x02\xAD\n\x02\f\x02\x0E\x02\xB0\v\x02\x03\x02\x07\x02\xB3\n\x02\f\x02" +
    "\x0E\x02\xB6\v\x02\x06\x02\xB8\n\x02\r\x02\x0E\x02\xB9\x03\x02\x07\x02" +
    "\xBD\n\x02\f\x02\x0E\x02\xC0\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
    "\x04\x03\x04\x05\x04\xC8\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
    "\xCE\n\x05\f\x05\x0E\x05\xD1\v\x05\x03\x05\x03\x05\x07\x05\xD5\n\x05\f" +
    "\x05\x0E\x05\xD8\v\x05\x07\x05\xDA\n\x05\f\x05\x0E\x05\xDD\v\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x06\x05\xE3\n\x05\r\x05\x0E\x05\xE4\x03\x05\x03" +
    "\x05\x07\x05\xE9\n\x05\f\x05\x0E\x05\xEC\v\x05\x07\x05\xEE\n\x05\f\x05" +
    "\x0E\x05\xF1\v\x05\x03\x05\x03\x05\x07\x05\xF5\n\x05\f\x05\x0E\x05\xF8" +
    "\v\x05\x03\x05\x03\x05\x07\x05\xFC\n\x05\f\x05\x0E\x05\xFF\v\x05\x03\x05" +
    "\x07\x05\u0102\n\x05\f\x05\x0E\x05\u0105\v\x05\x05\x05\u0107\n\x05\x05" +
    "\x05\u0109\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u010F\n\x06\f" +
    "\x06\x0E\x06\u0112\v\x06\x03\x06\x03\x06\x07\x06\u0116\n\x06\f\x06\x0E" +
    "\x06\u0119\v\x06\x07\x06\u011B\n\x06\f\x06\x0E\x06\u011E\v\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x07\x06\u0124\n\x06\f\x06\x0E\x06\u0127\v\x06" +
    "\x03\x06\x03\x06\x07\x06\u012B\n\x06\f\x06\x0E\x06\u012E\v\x06\x07\x06" +
    "\u0130\n\x06\f\x06\x0E\x06\u0133\v\x06\x03\x06\x05\x06\u0136\n\x06\x03" +
    "\x06\x07\x06\u0139\n\x06\f\x06\x0E\x06\u013C\v\x06\x03\x06\x06\x06\u013F" +
    "\n\x06\r\x06\x0E\x06\u0140\x03\x06\x03\x06\x07\x06\u0145\n\x06\f\x06\x0E" +
    "\x06\u0148\v\x06\x03\x06\x03\x06\x07\x06\u014C\n\x06\f\x06\x0E\x06\u014F" +
    "\v\x06\x03\x06\x07\x06\u0152\n\x06\f\x06\x0E\x06\u0155\v\x06\x05\x06\u0157" +
    "\n\x06\x05\x06\u0159\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x07" +
    "\t\u0161\n\t\f\t\x0E\t\u0164\v\t\x03\n\x03\n\x05\n\u0168\n\n\x03\n\x05" +
    "\n\u016B\n\n\x03\n\x07\n\u016E\n\n\f\n\x0E\n\u0171\v\n\x03\n\x03\n\x05" +
    "\n\u0175\n\n\x07\n\u0177\n\n\f\n\x0E\n\u017A\v\n\x03\v\x03\v\x05\v\u017E" +
    "\n\v\x03\f\x03\f\x05\f\u0182\n\f\x03\r\x05\r\u0185\n\r\x03\r\x03\r\x03" +
    "\r\x06\r\u018A\n\r\r\r\x0E\r\u018B\x03\r\x03\r\x03\x0E\x05\x0E\u0191\n" +
    "\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\u0196\n\x0E\r\x0E\x0E\x0E\u0197\x03" +
    "\x0E\x03\x0E\x03\x0F\x05\x0F\u019D\n\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F" +
    "\u01A2\n\x0F\r\x0F\x0E\x0F\u01A3\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x03\x10\x03\x10\x05\x10\u01C0\n\x10\x03\x11\x03\x11\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u01CA\n\x12\f\x12\x0E\x12" +
    "\u01CD\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01D3\n\x13\x03\x13" +
    "\x07\x13\u01D6\n\x13\f\x13\x0E\x13\u01D9\v\x13\x03\x13\x03\x13\x03\x14" +
    "\x03\x14\x03\x14\x03\x14\x05\x14\u01E1\n\x14\x03\x15\x03\x15\x03\x15\x03" +
    "\x15\x03\x16\x07\x16\u01E8\n\x16\f\x16\x0E\x16\u01EB\v\x16\x03\x16\x03" +
    "\x16\x03\x16\x07\x16\u01F0\n\x16\f\x16\x0E\x16\u01F3\v\x16\x03\x17\x03" +
    "\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
    "\x18\x05\x18\u0200\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
    "\x05\x19\u0208\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u020D\n\x1A\x03\x1A" +
    "\x03\x1A\x05\x1A\u0211\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0215\n\x1A\x05\x1A" +
    "\u0217\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u021C\n\x1B\x03\x1C\x03\x1C" +
    "\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03" +
    "\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x05%\u0233\n%\x03%\x03%\x03" +
    "%\x05%\u0238\n%\x03%\x03%\x03%\x05%\u023D\n%\x05%\u023F\n%\x03&\x03&\x03" +
    "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0249\n\'\x03(\x03(\x03(\x03(\x03" +
    "(\x03(\x03(\x03(\x05(\u0253\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
    ")\x05)\u025D\n)\x03*\x03*\x03*\x03*\x05*\u0263\n*\x03*\x03*\x03*\x03*" +
    "\x03*\x05*\u026A\n*\x03+\x03+\x07+\u026E\n+\f+\x0E+\u0271\v+\x03,\x03" +
    ",\x03,\x07,\u0276\n,\f,\x0E,\u0279\v,\x03,\x03,\x03,\x03-\x03-\x07-\u0280" +
    "\n-\f-\x0E-\u0283\v-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u028D" +
    "\n.\x03/\x03/\x07/\u0291\n/\f/\x0E/\u0294\v/\x03/\x03/\x05/\u0298\n/\x03" +
    "0\x030\x030\x070\u029D\n0\f0\x0E0\u02A0\v0\x030\x030\x030\x031\x031\x03" +
    "1\x051\u02A8\n1\x031\x031\x051\u02AC\n1\x031\x031\x051\u02B0\n1\x051\u02B2" +
    "\n1\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x072\u02BF" +
    "\n2\f2\x0E2\u02C2\v2\x032\x052\u02C5\n2\x033\x033\x033\x033\x033\x033" +
    "\x033\x033\x033\x033\x033\x073\u02D2\n3\f3\x0E3\u02D5\v3\x033\x053\u02D8" +
    "\n3\x034\x034\x074\u02DC\n4\f4\x0E4\u02DF\v4\x035\x035\x035\x035\x035" +
    "\x035\x035\x035\x055\u02E9\n5\x036\x036\x036\x056\u02EE\n6\x036\x036\x03" +
    "6\x056\u02F3\n6\x056\u02F5\n6\x037\x037\x037\x057\u02FA\n7\x037\x037\x03" +
    "7\x057\u02FF\n7\x037\x037\x037\x057\u0304\n7\x057\u0306\n7\x038\x038\x03" +
    "8\x058\u030B\n8\x038\x038\x078\u030F\n8\f8\x0E8\u0312\v8\x038\x038\x06" +
    "8\u0316\n8\r8\x0E8\u0317\x038\x038\x038\x038\x038\x038\x038\x078\u0321" +
    "\n8\f8\x0E8\u0324\v8\x038\x058\u0327\n8\x039\x039\x039\x039\x03:\x03:" +
    "\x03;\x03;\x03;\x07;\u0332\n;\f;\x0E;\u0335\v;\x03;\x03;\x07;\u0339\n" +
    ";\f;\x0E;\u033C\v;\x03;\x07;\u033F\n;\f;\x0E;\u0342\v;\x03;\x03;\x05;" +
    "\u0346\n;\x03;\x03;\x07;\u034A\n;\f;\x0E;\u034D\v;\x03;\x07;\u0350\n;" +
    "\f;\x0E;\u0353\v;\x05;\u0355\n;\x03<\x03<\x03<\x03<\x07<\u035B\n<\f<\x0E" +
    "<\u035E\v<\x03<\x03<\x03<\x03<\x03<\x03<\x07<\u0366\n<\f<\x0E<\u0369\v" +
    "<\x03<\x03<\x03<\x03<\x03<\x03<\x07<\u0371\n<\f<\x0E<\u0374\v<\x03<\x03" +
    "<\x03<\x03<\x05<\u037A\n<\x03<\x03<\x07<\u037E\n<\f<\x0E<\u0381\v<\x03" +
    "<\x05<\u0384\n<\x03=\x03=\x05=\u0388\n=\x03=\x03=\x03=\x05=\u038D\n=\x03" +
    "=\x05=\u0390\n=\x03>\x03>\x03>\x03>\x05>\u0396\n>\x03>\x05>\u0399\n>\x03" +
    "?\x03?\x05?\u039D\n?\x03?\x03?\x03?\x07?\u03A2\n?\f?\x0E?\u03A5\v?\x07" +
    "?\u03A7\n?\f?\x0E?\u03AA\v?\x03?\x07?\u03AD\n?\f?\x0E?\u03B0\v?\x07?\u03B2" +
    "\n?\f?\x0E?\u03B5\v?\x03?\x03?\x03?\x03?\x03?\x07?\u03BC\n?\f?\x0E?\u03BF" +
    "\v?\x03?\x05?\u03C2\n?\x03@\x03@\x03@\x03@\x03@\x06@\u03C9\n@\r@\x0E@" +
    "\u03CA\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u03D4\n@\f@\x0E@\u03D7" +
    "\v@\x03@\x05@\u03DA\n@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x06B\u03E4" +
    "\nB\rB\x0EB\u03E5\x03B\x03B\x05B\u03EA\nB\x03C\x03C\x03C\x03C\x06C\u03F0" +
    "\nC\rC\x0EC\u03F1\x03C\x03C\x03D\x03D\x07D\u03F8\nD\fD\x0ED\u03FB\vD\x03" +
    "D\x05D\u03FE\nD\x03D\x03D\x07D\u0402\nD\fD\x0ED\u0405\vD\x07D\u0407\n" +
    "D\fD\x0ED\u040A\vD\x03D\x07D\u040D\nD\fD\x0ED\u0410\vD\x03D\x07D\u0413" +
    "\nD\fD\x0ED\u0416\vD\x03D\x03D\x03D\x07D\u041B\nD\fD\x0ED\u041E\vD\x03" +
    "D\x05D\u0421\nD\x03D\x05D\u0424\nD\x03E\x03E\x06E\u0428\nE\rE\x0EE\u0429" +
    "\x03E\x03E\x03F\x03F\x03F\x06F\u0431\nF\rF\x0EF\u0432\x03F\x03F\x03F\x03" +
    "F\x03F\x05F\u043A\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u0444" +
    "\nG\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u044F\nH\x03I\x03" +
    "I\x03I\x03I\x03J\x03J\x03J\x03J\x03K\x03K\x07K\u045B\nK\fK\x0EK\u045E" +
    "\vK\x03K\x07K\u0461\nK\fK\x0EK\u0464\vK\x03L\x03L\x03L\x03L\x03L\x03L" +
    "\x03L\x07L\u046D\nL\fL\x0EL\u0470\vL\x03L\x03L\x03L\x03L\x07L\u0476\n" +
    "L\fL\x0EL\u0479\vL\x03L\x03L\x05L\u047D\nL\x03M\x03M\x03M\x03M\x06M\u0483" +
    "\nM\rM\x0EM\u0484\x03M\x03M\x03M\x03M\x03M\x07M\u048C\nM\fM\x0EM\u048F" +
    "\vM\x03M\x05M\u0492\nM\x03N\x03N\x05N\u0496\nN\x03N\x03N\x03O\x03O\x05" +
    "O\u049C\nO\x06O\u049E\nO\rO\x0EO\u049F\x03P\x03P\x06P\u04A4\nP\rP\x0E" +
    "P\u04A5\x03P\x05P\u04A9\nP\x03P\x03P\x06P\u04AD\nP\rP\x0EP\u04AE\x03P" +
    "\x05P\u04B2\nP\x03P\x03P\x03P\x03P\x03P\x03P\x07P\u04BA\nP\fP\x0EP\u04BD" +
    "\vP\x03P\x03P\x07P\u04C1\nP\fP\x0EP\u04C4\vP\x03P\x03P\x07P\u04C8\nP\f" +
    "P\x0EP\u04CB\vP\x03P\x03P\x03P\x05P\u04D0\nP\x03Q\x03Q\x03R\x03R\x03S" +
    "\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x06T\u04E3" +
    "\nT\rT\x0ET\u04E4\x03U\x03U\x03U\x06\u02C0\u02D3\u0322\u0477\x02\x02V" +
    "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
    "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
    "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
    "F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
    "b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
    "~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
    "\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
    "\xA2\x02\xA4\x02\xA6\x02\xA8\x02\x02\x16\x03\x02&\'\b\x02[\\^_lt\x7F\x82" +
    "\x88\x89\x8B\x8D\x05\x02ZZnn\x7F\x7F\x04\x02[[oo\x05\x02\\\\pq\x81\x81" +
    "\x04\x02]]rr\x04\x02^^ss\x05\x02__tt\x82\x82\x04\x02eexx\x05\x02ggyz\x86" +
    "\x86\x04\x02hh{{\x04\x02ii||\x05\x02jj}}\x87\x87\x03\x02;<\x04\x02KKN" +
    "Q\x03\x02\x1B\x1B\x04\x02\x1C\x1C\x1E\x1E\x03\x02()\x03\x02!!\x03\x02" +
    "\"\"\x02\u0596\x02\xB7\x03\x02\x02\x02\x04\xC3\x03\x02\x02\x02\x06\xC7" +
    "\x03\x02\x02\x02\b\u0108\x03\x02\x02\x02\n\u0158\x03\x02\x02\x02\f\u015A" +
    "\x03\x02\x02\x02\x0E\u015C\x03\x02\x02\x02\x10\u015E\x03\x02\x02\x02\x12" +
    "\u0167\x03\x02\x02\x02\x14\u017B\x03\x02\x02\x02\x16\u017F\x03\x02\x02" +
    "\x02\x18\u0184\x03\x02\x02\x02\x1A\u0190\x03\x02\x02\x02\x1C\u019C\x03" +
    "\x02\x02\x02\x1E\u01BF\x03\x02\x02\x02 \u01C1\x03\x02\x02\x02\"\u01C3" +
    "\x03\x02\x02\x02$\u01CE\x03\x02\x02\x02&\u01DC\x03\x02\x02\x02(\u01E2" +
    "\x03\x02\x02\x02*\u01E9\x03\x02\x02\x02,\u01F4\x03\x02\x02\x02.\u01FF" +
    "\x03\x02\x02\x020\u0207\x03\x02\x02\x022\u0216\x03\x02\x02\x024\u0218" +
    "\x03\x02\x02\x026\u021D\x03\x02\x02\x028\u021F\x03\x02\x02\x02:\u0221" +
    "\x03\x02\x02\x02<\u0223\x03\x02\x02\x02>\u0225\x03\x02\x02\x02@\u0227" +
    "\x03\x02\x02\x02B\u0229\x03\x02\x02\x02D\u022B\x03\x02\x02\x02F\u022D" +
    "\x03\x02\x02\x02H\u023E\x03\x02\x02\x02J\u0240\x03\x02\x02\x02L\u0248" +
    "\x03\x02\x02\x02N\u024A\x03\x02\x02\x02P\u0254\x03\x02\x02\x02R\u025E" +
    "\x03\x02\x02\x02T\u026B\x03\x02\x02\x02V\u0272\x03\x02\x02\x02X\u027D" +
    "\x03\x02\x02\x02Z\u0284\x03\x02\x02\x02\\\u028E\x03\x02\x02\x02^\u0299" +
    "\x03\x02\x02\x02`\u02B1\x03\x02\x02\x02b\u02C4\x03\x02\x02\x02d\u02D7" +
    "\x03\x02\x02\x02f\u02D9\x03\x02\x02\x02h\u02E0\x03\x02\x02\x02j\u02F4" +
    "\x03\x02\x02\x02l\u0305\x03\x02\x02\x02n\u0326\x03\x02\x02\x02p\u0328" +
    "\x03\x02\x02\x02r\u032C\x03\x02\x02\x02t\u0354\x03\x02\x02\x02v\u0383" +
    "\x03\x02\x02\x02x\u038F\x03\x02\x02\x02z\u0398\x03\x02\x02\x02|\u03C1" +
    "\x03\x02\x02\x02~\u03D9\x03\x02\x02\x02\x80\u03DB\x03\x02\x02\x02\x82" +
    "\u03DF\x03\x02\x02\x02\x84\u03EB\x03\x02\x02\x02\x86\u0423\x03\x02\x02" +
    "\x02\x88\u0425\x03\x02\x02\x02\x8A\u0439\x03\x02\x02\x02\x8C\u0443\x03" +
    "\x02\x02\x02\x8E\u044E\x03\x02\x02\x02\x90\u0450\x03\x02\x02\x02\x92\u0454" +
    "\x03\x02\x02\x02\x94\u0458\x03\x02\x02\x02\x96\u047C\x03\x02\x02\x02\x98" +
    "\u0491\x03\x02\x02\x02\x9A\u0493\x03\x02\x02\x02\x9C\u049D\x03\x02\x02" +
    "\x02\x9E\u04CF\x03\x02\x02\x02\xA0\u04D1\x03\x02\x02\x02\xA2\u04D3\x03" +
    "\x02\x02\x02\xA4\u04D5\x03\x02\x02\x02\xA6\u04E2\x03\x02\x02\x02\xA8\u04E6" +
    "\x03\x02\x02\x02\xAA\xB4\x05\x04\x03\x02\xAB\xAD\x07\x04\x02\x02\xAC\xAB" +
    "\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF" +
    "\x03\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB3" +
    "\x073\x02\x02\xB2\xAE\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2" +
    "\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4" +
    "\x03\x02\x02\x02\xB7\xAA\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xB7" +
    "\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBE\x03\x02\x02\x02\xBB\xBD" +
    "\x073\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC" +
    "\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBE" +
    "\x03\x02\x02\x02\xC1\xC2\x07\x02\x02\x03\xC2\x03\x03\x02\x02\x02\xC3\xC4" +
    "\x05\x06\x04\x02\xC4\x05\x03\x02\x02\x02\xC5\xC8\x05\b\x05\x02\xC6\xC8" +
    "\x05\n\x06\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\x07" +
    "\x03\x02\x02\x02\xC9\xCA\x07\x05\x02\x02\xCA\xCB\x05*\x16\x02\xCB\xCF" +
    "\x07\x1B\x02\x02\xCC\xCE\x073\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\xD1" +
    "\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xDB" +
    "\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD6\x05\x1E\x10\x02\xD3\xD5" +
    "\x073\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4" +
    "\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6" +
    "\x03\x02\x02\x02\xD9\xD2\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9" +
    "\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\u0109\x03\x02\x02\x02\xDD" +
    "\xDB\x03\x02\x02\x02\xDE\xDF\x07\x05\x02\x02\xDF\xE0\x05*\x16\x02\xE0" +
    "\xE2\x07\x1B\x02\x02\xE1\xE3\x073\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3" +
    "\xE4\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5" +
    "\xEF\x03\x02\x02\x02\xE6\xEA\x05\x1E\x10\x02\xE7\xE9\x073\x02\x02\xE8" +
    "\xE7\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA" +
    "\xEB\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED" +
    "\xE6\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF" +
    "\xF0\x03\x02\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2" +
    "\xF6\x05\x12\n\x02\xF3\xF5\x073\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF8" +
    "\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\u0106" +
    "\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\u0103\x05 \x11\x02\xFA\xFC" +
    "\x073\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB" +
    "\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF" +
    "\xFD\x03\x02\x02\x02\u0100\u0102\x05 \x11\x02\u0101\xFD\x03\x02\x02\x02" +
    "\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03" +
    "\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106" +
    "\xF9\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0109\x03\x02\x02" +
    "\x02\u0108\xC9\x03\x02\x02\x02\u0108\xDE\x03\x02\x02\x02\u0109\t\x03\x02" +
    "\x02\x02\u010A\u010B\x07\x06\x02\x02\u010B\u010C\x05*\x16\x02\u010C\u0110" +
    "\x07\x1B\x02\x02\u010D\u010F\x073\x02\x02\u010E\u010D\x03\x02\x02\x02" +
    "\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03" +
    "\x02\x02\x02\u0111\u011C\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113" +
    "\u0117\x05\x1E\x10\x02\u0114\u0116\x073\x02\x02\u0115\u0114\x03\x02\x02" +
    "\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118" +
    "\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02" +
    "\u011A\u0113\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A\x03" +
    "\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u0159\x03\x02\x02\x02\u011E" +
    "\u011C\x03\x02\x02\x02\u011F\u0120\x07\x06\x02\x02\u0120\u0121\x05*\x16" +
    "\x02\u0121\u0125\x07\x1B\x02\x02\u0122\u0124\x073\x02\x02\u0123\u0122" +
    "\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02" +
    "\u0125\u0126\x03\x02\x02\x02\u0126\u0131\x03\x02\x02\x02\u0127\u0125\x03" +
    "\x02\x02\x02\u0128\u012C\x05\x1E\x10\x02\u0129\u012B\x073\x02\x02\u012A" +
    "\u0129\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02" +
    "\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E" +
    "\u012C\x03\x02\x02\x02\u012F\u0128\x03\x02\x02\x02\u0130\u0133\x03\x02" +
    "\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
    "\u013E\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0136\x05\f\x07" +
    "\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u013A" +
    "\x03\x02\x02\x02\u0137\u0139\x05\x10\t\x02\u0138\u0137\x03\x02\x02\x02" +
    "\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03" +
    "\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D" +
    "\u013F\x05\x12\n\x02\u013E\u0135\x03\x02\x02\x02\u013F\u0140\x03\x02\x02" +
    "\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142" +
    "\x03\x02\x02\x02\u0142\u0146\x05\x0E\b\x02\u0143\u0145\x073\x02\x02\u0144" +
    "\u0143\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0144\x03\x02" +
    "\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0156\x03\x02\x02\x02\u0148" +
    "\u0146\x03\x02\x02\x02\u0149\u0153\x05 \x11\x02\u014A\u014C\x073\x02\x02" +
    "\u014B\u014A\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03" +
    "\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0150\x03\x02\x02\x02\u014F" +
    "\u014D\x03\x02\x02\x02\u0150\u0152\x05 \x11\x02\u0151\u014D\x03\x02\x02" +
    "\x02\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154" +
    "\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02" +
    "\u0156\u0149\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0159\x03" +
    "\x02\x02\x02\u0158\u010A\x03\x02\x02\x02\u0158\u011F\x03\x02\x02\x02\u0159" +
    "\v\x03\x02\x02\x02\u015A\u015B\t\x02\x02\x02\u015B\r\x03\x02\x02\x02\u015C" +
    "\u015D\t\x02\x02\x02\u015D\x0F\x03\x02\x02\x02\u015E\u0162\x05\x1E\x10" +
    "\x02\u015F\u0161\x073\x02\x02\u0160\u015F\x03\x02\x02\x02\u0161\u0164" +
    "\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02" +
    "\u0163\x11\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0165\u0168\x05" +
    "\x14\v\x02\u0166\u0168\x05\x16\f\x02\u0167\u0165\x03\x02\x02\x02\u0167" +
    "\u0166\x03\x02\x02\x02\u0168\u0178\x03\x02\x02\x02\u0169\u016B\x073\x02" +
    "\x02\u016A\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016F" +
    "\x03\x02\x02\x02\u016C\u016E\x07\x04\x02\x02\u016D\u016C\x03\x02\x02\x02" +
    "\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03" +
    "\x02\x02\x02\u0170\u0174\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0172" +
    "\u0175\x05\x14\v\x02\u0173\u0175\x05\x16\f\x02\u0174\u0172\x03\x02\x02" +
    "\x02\u0174";
truefalseParser._serializedATNSegment1 = "\u0173\x03\x02\x02\x02\u0175\u0177\x03\x02\x02\x02\u0176\u016A\x03\x02" +
    "\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178" +
    "\u0179\x03\x02\x02\x02\u0179\x13\x03\x02\x02\x02\u017A\u0178\x03\x02\x02" +
    "\x02\u017B\u017D\x05\x18\r\x02\u017C\u017E\x05z>\x02\u017D\u017C\x03\x02" +
    "\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\x15\x03\x02\x02\x02\u017F\u0181" +
    "\x05\x1A\x0E\x02\u0180\u0182\x05z>\x02\u0181\u0180\x03\x02\x02\x02\u0181" +
    "\u0182\x03\x02\x02\x02\u0182\x17\x03\x02\x02\x02\u0183\u0185\x05t;\x02" +
    "\u0184\u0183\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x03" +
    "\x02\x02\x02\u0186\u0189\x07\x11\x02\x02\u0187\u018A\x05\x9EP\x02\u0188" +
    "\u018A\x073\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u0188\x03\x02\x02" +
    "\x02\u018A\u018B\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C" +
    "\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018E\x07\x1B\x02\x02" +
    "\u018E\x19\x03\x02\x02\x02\u018F\u0191\x05t;\x02\u0190\u018F\x03\x02\x02" +
    "\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0195" +
    "\x07\x12\x02\x02\u0193\u0196\x05\x9EP\x02\u0194\u0196\x073\x02\x02\u0195" +
    "\u0193\x03\x02\x02\x02\u0195\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02" +
    "\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
    "\u0199\x03\x02\x02\x02\u0199\u019A\x07\x1B\x02\x02\u019A\x1B\x03\x02\x02" +
    "\x02\u019B\u019D\x05t;\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03" +
    "\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A1\x07\x14\x02\x02\u019F" +
    "\u01A2\x05\x9EP\x02\u01A0\u01A2\x073\x02\x02\u01A1\u019F\x03\x02\x02\x02" +
    "\u01A1\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A1\x03" +
    "\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
    "\u01A6\x07\x1B\x02\x02\u01A6\x1D\x03\x02\x02\x02\u01A7\u01C0\x07\x9E\x02" +
    "\x02\u01A8\u01C0\x074\x02\x02\u01A9\u01C0\x05\xA0Q\x02\u01AA\u01C0\x05" +
    "\"\x12\x02\u01AB\u01C0\x05\x94K\x02\u01AC\u01C0\x05~@\x02\u01AD\u01C0" +
    "\x05t;\x02\u01AE\u01C0\x05\x8AF\x02\u01AF\u01C0\x05\x86D\x02\u01B0\u01C0" +
    "\x05\x88E\x02\u01B1\u01C0\x05\x9EP\x02\u01B2\u01C0\x05z>\x02\u01B3\u01C0" +
    "\x05\x8CG\x02\u01B4\u01C0\x05\\/\x02\u01B5\u01C0\x05f4\x02\u01B6\u01C0" +
    "\x05X-\x02\u01B7\u01C0\x05L\'\x02\u01B8\u01C0\x05N(\x02\u01B9\u01C0\x05" +
    "R*\x02\u01BA\u01C0\x05P)\x02\u01BB\u01C0\x05T+\x02\u01BC\u01C0\x05x=\x02" +
    "\u01BD\u01C0\x05\x9AN\x02\u01BE\u01C0\x05\xA8U\x02\u01BF\u01A7\x03\x02" +
    "\x02\x02\u01BF\u01A8\x03\x02\x02\x02\u01BF\u01A9\x03\x02\x02\x02\u01BF" +
    "\u01AA\x03\x02\x02\x02\u01BF\u01AB\x03\x02\x02\x02\u01BF\u01AC\x03\x02" +
    "\x02\x02\u01BF\u01AD\x03\x02\x02\x02\u01BF\u01AE\x03\x02\x02\x02\u01BF" +
    "\u01AF\x03\x02\x02\x02\u01BF\u01B0\x03\x02\x02\x02\u01BF\u01B1\x03\x02" +
    "\x02\x02\u01BF\u01B2\x03\x02\x02\x02\u01BF\u01B3\x03\x02\x02\x02\u01BF" +
    "\u01B4\x03\x02\x02\x02\u01BF\u01B5\x03\x02\x02\x02\u01BF\u01B6\x03\x02" +
    "\x02\x02\u01BF\u01B7\x03\x02\x02\x02\u01BF\u01B8\x03\x02\x02\x02\u01BF" +
    "\u01B9\x03\x02\x02\x02\u01BF\u01BA\x03\x02\x02\x02\u01BF\u01BB\x03\x02" +
    "\x02\x02\u01BF\u01BC\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF" +
    "\u01BE\x03\x02\x02\x02\u01C0\x1F\x03\x02\x02\x02\u01C1\u01C2\x05\x1E\x10" +
    "\x02\u01C2!\x03\x02\x02\x02\u01C3\u01CB\x05$\x13\x02\u01C4\u01CA\x05$" +
    "\x13\x02\u01C5\u01CA\x05\x86D\x02\u01C6\u01CA\x05\x88E\x02\u01C7\u01CA" +
    "\x05t;\x02\u01C8\u01CA\x05z>\x02\u01C9\u01C4\x03\x02\x02\x02\u01C9\u01C5" +
    "\x03\x02\x02\x02\u01C9\u01C6\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02" +
    "\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB\u01C9\x03" +
    "\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC#\x03\x02\x02\x02\u01CD" +
    "\u01CB\x03\x02\x02\x02\u01CE\u01D2\x07\r\x02\x02\u01CF\u01D3\x071\x02" +
    "\x02\u01D0\u01D3\x072\x02\x02\u01D1\u01D3\x03\x02\x02\x02\u01D2\u01CF" +
    "\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D1\x03\x02\x02\x02" +
    "\u01D3\u01D7\x03\x02\x02\x02\u01D4\u01D6\x05\x9EP\x02\u01D5\u01D4\x03" +
    "\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7" +
    "\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03\x02\x02\x02\u01D9\u01D7\x03\x02" +
    "\x02\x02\u01DA\u01DB\x05\xA2R\x02\u01DB%\x03\x02\x02\x02\u01DC\u01DD\x07" +
    "\b\x02\x02\u01DD\u01DE\x05\x9EP\x02\u01DE\u01E0\x07\x1B\x02\x02\u01DF" +
    "\u01E1\x05(\x15\x02\u01E0\u01DF\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02" +
    "\x02\u01E1\'\x03\x02\x02\x02\u01E2\u01E3\x07H\x02\x02\u01E3\u01E4\x07" +
    "1\x02\x02\u01E4\u01E5\x07\x1B\x02\x02\u01E5)\x03\x02\x02\x02\u01E6\u01E8" +
    "\x05,\x17\x02\u01E7\u01E6\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02" +
    "\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01F1\x03" +
    "\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EC\u01F0\x07\x8A\x02\x02\u01ED" +
    "\u01F0\x07\x8B\x02\x02\u01EE\u01F0\x05.\x18\x02\u01EF\u01EC\x03\x02\x02" +
    "\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F3" +
    "\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02" +
    "\u01F2+\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4\u01F5\t\x03" +
    "\x02\x02\u01F5-\x03\x02\x02\x02\u01F6\u0200\x052\x1A\x02\u01F7\u0200\x05" +
    "j6\x02\u01F8\u0200\x054\x1B\x02\u01F9\u0200\x056\x1C\x02\u01FA\u0200\x05" +
    "8\x1D\x02\u01FB\u0200\x05:\x1E\x02\u01FC\u0200\x05<\x1F\x02\u01FD\u0200" +
    "\x05> \x02\u01FE\u0200\x07`\x02\x02\u01FF\u01F6\x03\x02\x02\x02\u01FF" +
    "\u01F7\x03\x02\x02\x02\u01FF\u01F8\x03\x02\x02\x02\u01FF\u01F9\x03\x02" +
    "\x02\x02\u01FF\u01FA\x03\x02\x02\x02\u01FF\u01FB\x03\x02\x02\x02\u01FF" +
    "\u01FC\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF\u01FE\x03\x02" +
    "\x02\x02\u0200/\x03\x02\x02\x02\u0201\u0208\x07\x88\x02\x02\u0202\u0208" +
    "\x07\x89\x02\x02\u0203\u0208\x07\x8A\x02\x02\u0204\u0208\x07\x8D\x02\x02" +
    "\u0205\u0208\x07\x8B\x02\x02\u0206\u0208\x03\x02\x02\x02\u0207\u0201\x03" +
    "\x02\x02\x02\u0207\u0202\x03\x02\x02\x02\u0207\u0203\x03\x02\x02\x02\u0207" +
    "\u0204\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0207\u0206\x03\x02" +
    "\x02\x02\u02081\x03\x02\x02\x02\u0209\u020C\x07X\x02\x02\u020A\u020D\x07" +
    ",\x02\x02\u020B\u020D\x07\x9B\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C" +
    "\u020B\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u0217\x03\x02" +
    "\x02\x02\u020E\u0210\x07m\x02\x02\u020F\u0211\x07,\x02\x02\u0210\u020F" +
    "\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0217\x03\x02\x02\x02" +
    "\u0212\u0214\x07Y\x02\x02\u0213\u0215\x07,\x02\x02\u0214\u0213\x03\x02" +
    "\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0217\x03\x02\x02\x02\u0216" +
    "\u0209\x03\x02\x02\x02\u0216\u020E\x03\x02\x02\x02\u0216\u0212\x03\x02" +
    "\x02\x02\u02173\x03\x02\x02\x02\u0218\u021B\t\x04\x02\x02\u0219\u021A" +
    "\x07\x1C\x02\x02\u021A\u021C\x07.\x02\x02\u021B\u0219\x03\x02\x02\x02" +
    "\u021B\u021C\x03\x02\x02\x02\u021C5\x03\x02\x02\x02\u021D\u021E\t\x05" +
    "\x02\x02\u021E7\x03\x02\x02\x02\u021F\u0220\t\x06\x02\x02\u02209\x03\x02" +
    "\x02\x02\u0221\u0222\t\x07\x02\x02\u0222;\x03\x02\x02\x02\u0223\u0224" +
    "\t\b\x02\x02\u0224=\x03\x02\x02\x02\u0225\u0226\t\t\x02\x02\u0226?\x03" +
    "\x02\x02\x02\u0227\u0228\t\n\x02\x02\u0228A\x03\x02\x02\x02\u0229\u022A" +
    "\t\v\x02\x02\u022AC\x03\x02\x02\x02\u022B\u022C\t\f\x02\x02\u022CE\x03" +
    "\x02\x02\x02\u022D\u022E\t\r\x02\x02\u022EG\x03\x02\x02\x02\u022F\u0232" +
    "\x07d\x02\x02\u0230\u0231\x07\x1C\x02\x02\u0231\u0233\x07.\x02\x02\u0232" +
    "\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u023F\x03\x02" +
    "\x02\x02\u0234\u0237\x07w\x02\x02\u0235\u0236\x07\x1C\x02\x02\u0236\u0238" +
    "\x07.\x02\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02" +
    "\u0238\u023F\x03\x02\x02\x02\u0239\u023C\x07\x84\x02\x02\u023A\u023B\x07" +
    "\x1C\x02\x02\u023B\u023D\x07.\x02\x02\u023C\u023A\x03\x02\x02\x02\u023C" +
    "\u023D\x03\x02\x02\x02\u023D\u023F\x03\x02\x02\x02\u023E\u022F\x03\x02" +
    "\x02\x02\u023E\u0234\x03\x02\x02\x02\u023E\u0239\x03\x02\x02\x02\u023F" +
    "I\x03\x02\x02\x02\u0240\u0241\t\x0E\x02\x02\u0241K\x03\x02\x02\x02\u0242" +
    "\u0243\x05@!\x02\u0243\u0244\x07\x1C\x02\x02\u0244\u0245\x05r:\x02\u0245" +
    "\u0246\x07\x1B\x02\x02\u0246\u0249\x03\x02\x02\x02\u0247\u0249\x07/\x02" +
    "\x02\u0248\u0242\x03\x02\x02\x02\u0248\u0247\x03\x02\x02\x02\u0249M\x03" +
    "\x02\x02\x02\u024A\u024B\x05B\"\x02\u024B\u024C\x07\x1C\x02\x02\u024C" +
    "\u024D\x05r:\x02\u024D\u0252\x07\x1B\x02\x02\u024E\u024F\x07K\x02\x02" +
    "\u024F\u0250\x05\xA6T\x02\u0250\u0251\x07\x1B\x02\x02\u0251\u0253\x03" +
    "\x02\x02\x02\u0252\u024E\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253" +
    "O\x03\x02\x02\x02\u0254\u0255\x05F$\x02\u0255\u0256\x07\x1C\x02\x02\u0256" +
    "\u0257\x05r:\x02\u0257\u025C\x07\x1B\x02\x02\u0258\u0259\x07K\x02\x02" +
    "\u0259\u025A\x05\xA6T\x02\u025A\u025B\x07\x1B\x02\x02\u025B\u025D\x03" +
    "\x02\x02\x02\u025C\u0258\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D" +
    "Q\x03\x02\x02\x02\u025E\u025F\x05D#\x02\u025F\u0262\x07\x1C\x02\x02\u0260" +
    "\u0263\x05r:\x02\u0261\u0263\x05p9\x02\u0262\u0260\x03\x02\x02\x02\u0262" +
    "\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0269\x07\x1B" +
    "\x02\x02\u0265\u0266\x07K\x02\x02\u0266\u0267\x05\xA6T\x02\u0267\u0268" +
    "\x07\x1B\x02\x02\u0268\u026A\x03\x02\x02\x02\u0269\u0265\x03\x02\x02\x02" +
    "\u0269\u026A\x03\x02\x02\x02\u026AS\x03\x02\x02\x02\u026B\u026F\x05V," +
    "\x02\u026C\u026E\x05n8\x02\u026D\u026C\x03\x02\x02\x02\u026E\u0271\x03" +
    "\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270" +
    "U\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0272\u0273\x05J&\x02\u0273" +
    "\u0277\x07\x1C\x02\x02\u0274\u0276\x07\x04\x02\x02\u0275\u0274\x03\x02" +
    "\x02\x02\u0276\u0279\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02\u0277" +
    "\u0278\x03\x02\x02\x02\u0278\u027A\x03\x02\x02\x02\u0279\u0277\x03\x02" +
    "\x02\x02\u027A\u027B\x05r:\x02\u027B\u027C\x07\x1B\x02\x02\u027CW\x03" +
    "\x02\x02\x02\u027D\u0281\x05Z.\x02\u027E\u0280\x05n8\x02\u027F\u027E\x03" +
    "\x02\x02\x02\u0280\u0283\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281" +
    "\u0282\x03\x02\x02\x02\u0282Y\x03\x02\x02\x02\u0283\u0281\x03\x02\x02" +
    "\x02\u0284\u0285\x05H%\x02\u0285\u0286\x07\x1C\x02\x02\u0286\u0287\x05" +
    "r:\x02\u0287\u028C\x07\x1B\x02\x02\u0288\u0289\x07K\x02\x02\u0289\u028A" +
    "\x05\xA6T\x02\u028A\u028B\x07\x1B\x02\x02\u028B\u028D\x03\x02\x02\x02" +
    "\u028C\u0288\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D[\x03\x02" +
    "\x02\x02\u028E\u0292\x05^0\x02\u028F\u0291\x05b2\x02\u0290\u028F\x03\x02" +
    "\x02\x02\u0291\u0294\x03\x02\x02\x02\u0292\u0290\x03\x02\x02\x02\u0292" +
    "\u0293\x03\x02\x02\x02\u0293\u0297\x03\x02\x02\x02\u0294\u0292\x03\x02" +
    "\x02\x02\u0295\u0296\x073\x02\x02\u0296\u0298\x07M\x02\x02\u0297\u0295" +
    "\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298]\x03\x02\x02\x02\u0299" +
    "\u029A\x05`1\x02\u029A\u029E\x07\x1C\x02\x02\u029B\u029D\x07\x04\x02\x02" +
    "\u029C\u029B\x03\x02\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E\u029C\x03" +
    "\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A1\x03\x02\x02\x02\u02A0" +
    "\u029E\x03\x02\x02\x02\u02A1\u02A2\x05r:\x02\u02A2\u02A3\x07\x1B\x02\x02" +
    "\u02A3_\x03\x02\x02\x02\u02A4\u02A7\x07b\x02\x02\u02A5\u02A8\x07,\x02" +
    "\x02\u02A6\u02A8\x07\x9B\x02\x02\u02A7\u02A5\x03\x02\x02\x02\u02A7\u02A6" +
    "\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02B2\x03\x02\x02\x02" +
    "\u02A9\u02AB\x07v\x02\x02\u02AA\u02AC\x07,\x02\x02\u02AB\u02AA\x03\x02" +
    "\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02B2\x03\x02\x02\x02\u02AD" +
    "\u02AF\x07c\x02\x02\u02AE\u02B0\x07,\x02\x02\u02AF\u02AE\x03\x02\x02\x02" +
    "\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B2\x03\x02\x02\x02\u02B1\u02A4\x03" +
    "\x02\x02\x02\u02B1\u02A9\x03\x02\x02\x02\u02B1\u02AD\x03\x02\x02\x02\u02B2" +
    "a\x03\x02\x02\x02\u02B3\u02B4\x07I\x02\x02\u02B4\u02B5\x07\x1C\x02\x02" +
    "\u02B5\u02B6\x05r:\x02\u02B6\u02B7\x07\x1B\x02\x02\u02B7\u02C5\x03\x02" +
    "\x02\x02\u02B8\u02B9\t\x0F\x02\x02\u02B9\u02BA\x07\x1C\x02\x02\u02BA\u02BB" +
    "\x071\x02\x02\u02BB\u02C5\x07\x1B\x02\x02\u02BC\u02C0\t\x10\x02\x02\u02BD" +
    "\u02BF\v\x02\x02\x02\u02BE\u02BD\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02" +
    "\x02\u02C0\u02C1\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C1\u02C3" +
    "\x03\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02C5\x07\x1B\x02\x02" +
    "\u02C4\u02B3\x03\x02\x02\x02\u02C4\u02B8\x03\x02\x02\x02\u02C4\u02BC\x03" +
    "\x02\x02\x02\u02C5c\x03\x02\x02\x02\u02C6\u02C7\x07I\x02\x02\u02C7\u02C8" +
    "\x07\x1C\x02\x02\u02C8\u02C9\x05r:\x02\u02C9\u02CA\x07\x1B\x02\x02\u02CA" +
    "\u02D8\x03\x02\x02\x02\u02CB\u02CC\t\x0F\x02\x02\u02CC\u02CD\x07\x1C\x02" +
    "\x02\u02CD\u02CE\x071\x02\x02\u02CE\u02D8\x07\x1B\x02\x02\u02CF\u02D3" +
    "\t\x10\x02\x02\u02D0\u02D2\v\x02\x02\x02\u02D1\u02D0\x03\x02\x02\x02\u02D2" +
    "\u02D5\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D3\u02D1\x03\x02" +
    "\x02\x02\u02D4\u02D6\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6" +
    "\u02D8\x07\x1B\x02\x02\u02D7\u02C6\x03\x02\x02\x02\u02D7\u02CB\x03\x02" +
    "\x02\x02\u02D7\u02CF\x03\x02\x02\x02\u02D8e\x03\x02\x02\x02\u02D9\u02DD" +
    "\x05h5\x02\u02DA\u02DC\x05n8\x02\u02DB\u02DA\x03\x02\x02\x02\u02DC\u02DF" +
    "\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02" +
    "\u02DEg\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E1\x05l7" +
    "\x02\u02E1\u02E2\x07\x1C\x02\x02\u02E2\u02E3\x05r:\x02\u02E3\u02E8\x07" +
    "\x1B\x02\x02\u02E4\u02E5\x07K\x02\x02\u02E5\u02E6\x05\xA6T\x02\u02E6\u02E7" +
    "\x07\x1B\x02\x02\u02E7\u02E9\x03\x02\x02\x02\u02E8\u02E4\x03\x02\x02\x02" +
    "\u02E8\u02E9\x03\x02\x02\x02\u02E9i\x03\x02\x02\x02\u02EA\u02ED\x07W\x02" +
    "\x02\u02EB\u02EC\x07\x1C\x02\x02\u02EC\u02EE\x07-\x02\x02\u02ED\u02EB" +
    "\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02F5\x03\x02\x02\x02" +
    "\u02EF\u02F2\x07l\x02\x02\u02F0\u02F1\x07\x1C\x02\x02\u02F1\u02F3\x07" +
    "-\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3" +
    "\u02F5\x03\x02\x02\x02\u02F4\u02EA\x03\x02\x02\x02\u02F4\u02EF\x03\x02" +
    "\x02\x02\u02F5k\x03\x02\x02\x02\u02F6\u02F9\x07a\x02\x02\u02F7\u02F8\x07" +
    "\x1C\x02\x02\u02F8\u02FA\x07-\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02F9" +
    "\u02FA\x03\x02\x02\x02\u02FA\u0306\x03\x02\x02\x02\u02FB\u02FE\x07u\x02" +
    "\x02\u02FC\u02FD\x07\x1C\x02\x02\u02FD\u02FF\x07-\x02\x02\u02FE\u02FC" +
    "\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0306\x03\x02\x02\x02" +
    "\u0300\u0303\x07\x85\x02\x02\u0301\u0302\x07\x1C\x02\x02\u0302\u0304\x07" +
    "-\x02\x02\u0303\u0301\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304" +
    "\u0306\x03\x02\x02\x02\u0305\u02F6\x03\x02\x02\x02\u0305\u02FB\x03\x02" +
    "\x02\x02\u0305\u0300\x03\x02\x02\x02\u0306m\x03\x02\x02\x02\u0307\u0308" +
    "\x07\x10\x02\x02\u0308\u030B\x05\x9EP\x02\u0309\u030B\x07I\x02\x02\u030A" +
    "\u0307\x03\x02\x02\x02\u030A\u0309\x03\x02\x02\x02\u030B\u030C\x03\x02" +
    "\x02\x02\u030C\u0310\x07\x1C\x02\x02\u030D\u030F\x07\x04\x02\x02\u030E" +
    "\u030D\x03\x02\x02\x02\u030F\u0312\x03\x02\x02\x02\u0310\u030E\x03\x02" +
    "\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0315\x03\x02\x02\x02\u0312" +
    "\u0310\x03\x02\x02\x02\u0313\u0316\x05\x9EP\x02\u0314\u0316\x073\x02\x02" +
    "\u0315\u0313\x03\x02\x02\x02\u0315\u0314\x03\x02\x02\x02\u0316\u0317\x03" +
    "\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318" +
    "\u0319\x03\x02\x02\x02\u0319\u0327\x07\x1B\x02\x02\u031A\u031B\t\x0F\x02" +
    "\x02\u031B\u031C\x07\x1C\x02\x02\u031C\u031D\x071\x02\x02\u031D\u0327" +
    "\x07\x1B\x02\x02\u031E\u0322\t\x10\x02\x02\u031F\u0321\v\x02\x02\x02\u0320" +
    "\u031F\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02\u0322\u0323\x03\x02" +
    "\x02\x02\u0322\u0320\x03\x02\x02\x02\u0323\u0325\x03\x02\x02\x02\u0324" +
    "\u0322\x03\x02\x02\x02\u0325\u0327\x07\x1B\x02\x02\u0326\u030A\x03\x02" +
    "\x02\x02\u0326\u031A\x03\x02\x02\x02\u0326\u031E\x03\x02\x02\x02\u0327" +
    "o\x03\x02\x02\x02\u0328\u0329\x07\x9A\x02\x02\u0329\u032A\x07\x1F\x02" +
    "\x02\u032A\u032B\x071\x02\x02\u032Bq\x03\x02\x02\x02\u032C\u032D\x07\x9D" +
    "\x02\x02\u032Ds\x03\x02\x02\x02\u032E\u0333\x07\x16\x02\x02\u032F\u0332" +
    "\x07\x1C\x02\x02\u0330\u0332\x05\x9EP\x02\u0331\u032F\x03\x02\x02\x02" +
    "\u0331\u0330\x03\x02\x02\x02\u0332\u0335\x03\x02\x02\x02\u0333\u0331\x03" +
    "\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u0336\x03\x02\x02\x02\u0335" +
    "\u0333\x03\x02\x02\x02\u0336\u0340\x07\x1B\x02\x02\u0337\u0339\x07\x04" +
    "\x02\x02\u0338\u0337\x03\x02\x02\x02\u0339\u033C\x03\x02\x02\x02\u033A" +
    "\u0338\x03\x02\x02\x02\u033A\u033B\x03\x02\x02\x02\u033B\u033D\x03\x02" +
    "\x02\x02\u033C\u033A\x03\x02\x02\x02\u033D\u033F\x05v<\x02\u033E\u033A" +
    "\x03\x02\x02\x02\u033F\u0342\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02" +
    "\u0340\u0341\x03\x02\x02\x02\u0341\u0355\x03\x02\x02\x02\u0342\u0340\x03" +
    "\x02\x02\x02\u0343\u0345\x07\x15\x02\x02\u0344\u0346\x05\x9EP\x02\u0345" +
    "\u0344\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0347\x03\x02" +
    "\x02\x02\u0347\u0351\x07\x1B\x02\x02\u0348\u034A\x07\x04\x02\x02\u0349" +
    "\u0348\x03\x02\x02\x02\u034A\u034D\x03\x02\x02\x02\u034B\u0349\x03\x02" +
    "\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u034E\x03\x02\x02\x02\u034D" +
    "\u034B\x03\x02\x02\x02\u034E\u0350\x05v<\x02\u034F\u034B\x03\x02\x02\x02" +
    "\u0350\u0353\x03\x02\x02\x02\u0351\u034F\x03\x02\x02\x02\u0351\u0352\x03" +
    "\x02\x02\x02\u0352\u0355\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0354" +
    "\u032E\x03\x02\x02\x02\u0354\u0343\x03\x02\x02\x02\u0355u\x03\x02\x02" +
    "\x02\u0356\u0357\x07\x17\x02\x02\u0357\u035C\x05\x9EP\x02\u0358\u035B" +
    "\x07\x1C\x02\x02\u0359\u035B\x05\x9EP\x02\u035A\u0358\x03\x02\x02\x02" +
    "\u035A\u0359\x03\x02\x02\x02\u035B\u035E\x03\x02\x02\x02\u035C\u035A\x03" +
    "\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035F\x03\x02\x02\x02\u035E" +
    "\u035C\x03\x02\x02\x02\u035F\u0360\x07\x1B\x02\x02\u0360\u0384\x03\x02" +
    "\x02\x02\u0361\u0362\x07\x18\x02\x02\u0362\u0367\x05\x9EP\x02\u0363\u0366" +
    "\x07\x1C\x02\x02\u0364\u0366\x05\x9EP\x02\u0365\u0363\x03\x02\x02\x02" +
    "\u0365\u0364\x03\x02\x02\x02\u0366\u0369\x03\x02\x02\x02\u0367\u0365\x03" +
    "\x02\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368\u036A\x03\x02\x02\x02\u0369" +
    "\u0367\x03\x02\x02\x02\u036A\u036B\x07\x1B\x02\x02\u036B\u0384\x03\x02" +
    "\x02\x02\u036C\u036D\x07\x19\x02\x02\u036D\u0372\x05\x9EP\x02\u036E\u0371" +
    "\x07\x1C\x02\x02\u036F\u0371\x05\x9EP\x02\u0370\u036E\x03\x02\x02\x02" +
    "\u0370\u036F\x03\x02\x02\x02\u0371\u0374\x03\x02\x02\x02\u0372\u0370\x03" +
    "\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373\u0375\x03\x02\x02\x02\u0374" +
    "\u0372\x03\x02\x02\x02\u0375\u0376\x07\x1B\x02\x02\u0376\u0384\x03\x02" +
    "\x02\x02\u0377\u0379\x07\x15\x02\x02\u0378\u037A\x05\x9EP\x02\u0379\u0378" +
    "\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037F\x03\x02\x02\x02" +
    "\u037B\u037E\x07\x1C\x02\x02\u037C\u037E\x05\x9EP\x02\u037D\u037B\x03" +
    "\x02\x02\x02\u037D\u037C\x03\x02\x02\x02\u037E\u0381\x03\x02\x02\x02\u037F" +
    "\u037D\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380\u0382\x03\x02" +
    "\x02\x02\u0381\u037F\x03\x02\x02\x02\u0382\u0384\x07\x1B\x02\x02\u0383" +
    "\u0356\x03\x02\x02\x02\u0383\u0361\x03\x02\x02\x02\u0383\u036C\x03\x02" +
    "\x02\x02\u0383\u0377\x03\x02\x02\x02\u0384w\x03\x02\x02\x02\u0385\u0387" +
    "\x07\n\x02\x02\u0386\u0388\x05\x9EP\x02\u0387\u0386\x03\x02\x02\x02\u0387" +
    "\u0388\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\u0390\x07\x1B" +
    "\x02\x02\u038A\u038C\x07\v\x02\x02\u038B\u038D\x05\x9EP\x02\u038C\u038B" +
    "\x03\x02\x02\x02\u038C\u038D\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02" +
    "\u038E\u0390\x07\x1B\x02\x02\u038F\u0385\x03\x02\x02\x02\u038F\u038A\x03" +
    "\x02\x02\x02\u0390y\x03\x02\x02\x02\u0391\u0399\x07B\x02\x02\u0392\u0399" +
    "\x07@\x02\x02\u0393\u0395\x07A\x02\x02\u0394\u0396\x076\x02\x02\u0395" +
    "\u0394\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u0397\x03\x02" +
    "\x02\x02\u0397\u0399\x07\x02\x02\x03\u0398\u0391\x03\x02\x02\x02\u0398" +
    "\u0392\x03\x02\x02\x02\u0398\u0393\x03\x02\x02\x02\u0399{\x03\x02\x02" +
    "\x02\u039A\u039C\x07k\x02\x02\u039B\u039D\x05\x9EP\x02\u039C\u039B\x03" +
    "\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u03B3\x03\x02\x02\x02\u039E" +
    "\u03A8\x05\x9EP\x02\u039F\u03A3\x073\x02\x02\u03A0\u03A2\x07\x04\x02\x02" +
    "\u03A1\u03A0\x03\x02\x02\x02\u03A2\u03A5\x03\x02\x02\x02\u03A3\u03A1\x03" +
    "\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A7\x03\x02\x02\x02\u03A5" +
    "\u03A3\x03\x02\x02\x02\u03A6\u039F\x03\x02\x02\x02\u03A7\u03AA\x03\x02" +
    "\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9" +
    "\u03AE\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AB\u03AD\x073\x02" +
    "\x02\u03AC\u03AB\x03\x02\x02\x02\u03AD\u03B0\x03\x02\x02\x02\u03AE\u03AC" +
    "\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02" +
    "\u03B0\u03AE\x03\x02\x02\x02\u03B1\u039E\x03\x02\x02\x02\u03B2\u03B5\x03" +
    "\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4" +
    "\u03B6\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6\u03C2\x07\x1B" +
    "\x02\x02\u03B7\u03BD\x07k\x02\x02\u03B8\u03BC\x05\x9EP\x02\u03B9\u03BC" +
    "\x073\x02\x02\u03BA\u03BC\x07\x04\x02\x02\u03BB\u03B8\x03\x02\x02\x02" +
    "\u03BB\u03B9\x03\x02\x02\x02\u03BB\u03BA\x03\x02\x02\x02\u03BC\u03BF\x03" +
    "\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE" +
    "\u03C0\x03\x02\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03C2\x07\x02" +
    "\x02\x03\u03C1\u039A\x03\x02\x02\x02\u03C1\u03B7\x03\x02\x02\x02\u03C2" +
    "}\x03\x02\x02\x02\u03C3\u03C8\x07:\x02\x02\u03C4\u03C9\x05\x9EP\x02\u03C5" +
    "\u03C9\x07\x1C\x02\x02\u03C6\u03C9\x07\x9D\x02\x02\u03C7\u03C9\x073\x02" +
    "\x02\u03C8\u03C4\x03\x02\x02\x02\u03C8\u03C5\x03\x02\x02\x02\u03C8\u03C6" +
    "\x03\x02\x02\x02\u03C8\u03C7\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02" +
    "\u03CA\u03C8\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CC\x03" +
    "\x02\x02\x02\u03CC\u03DA\x07\x1B\x02\x02\u03CD\u03D5\x07:\x02\x02\u03CE" +
    "\u03D4\x05\x9EP\x02\u03CF\u03D4\x07\x1C\x02\x02\u03D0\u03D4\x07\x9D\x02" +
    "\x02\u03D1\u03D4\x073\x02\x02\u03D2\u03D4\x07\x04\x02\x02\u03D3\u03CE" +
    "\x03\x02\x02\x02\u03D3\u03CF\x03\x02\x02\x02\u03D3\u03D0\x03\x02\x02\x02" +
    "\u03D3\u03D1\x03\x02\x02\x02\u03D3\u03D2\x03\x02\x02\x02\u03D4\u03D7\x03" +
    "\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6" +
    "\u03D8\x03\x02\x02\x02\u03D7\u03D5\x03\x02\x02\x02\u03D8\u03DA\x07\x02" +
    "\x02\x03\u03D9\u03C3\x03\x02\x02\x02\u03D9\u03CD\x03\x02\x02\x02\u03DA" +
    "\x7F\x03\x02\x02\x02\u03DB\u03DC\x079\x02\x02\u03DC\u03DD\x05\x9EP\x02" +
    "\u03DD\u03DE\x07\x1B\x02\x02\u03DE\x81\x03\x02\x02\x02\u03DF\u03E3\x07" +
    "T\x02\x02\u03E0\u03E4\x05\x9EP\x02\u03E1\u03E4\x07\x1C\x02\x02\u03E2\u03E4" +
    "\x073\x02\x02\u03E3\u03E0\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02" +
    "\u03E3\u03E2\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E3\x03" +
    "\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7" +
    "\u03E9\x07\x1B\x02\x02\u03E8\u03EA\x05\x84C\x02\u03E9\u03E8\x03\x02\x02" +
    "\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA\x83\x03\x02\x02\x02\u03EB\u03EF" +
    "\x07T\x02\x02\u03EC\u03F0\x05\x9EP\x02\u03ED\u03F0\x07\x1C\x02\x02\u03EE" +
    "\u03F0\x073\x02\x02\u03EF\u03EC\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02" +
    "\x02\u03EF\u03EE\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03EF" +
    "\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02" +
    "\u03F3\u03F4\x07\x1B\x02\x02\u03F4\x85\x03\x02\x02\x02\u03F5\u03F9\x07" +
    "\x0E\x02\x02\u03F6\u03F8\x073\x02\x02\u03F7\u03F6\x03\x02\x02\x02\u03F8" +
    "\u03FB\x03\x02\x02\x02\u03F9\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02" +
    "\x02\x02\u03FA\u03FD\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FC" +
    "\u03FE\x05\x9EP\x02\u03FD\u03FC\x03\x02\x02\x02\u03FD\u03FE\x03\x02\x02" +
    "\x02\u03FE\u040E\x03\x02\x02\x02\u03FF\u0403\x073\x02\x02\u0400\u0402" +
    "\x07\x04\x02\x02\u0401\u0400\x03\x02\x02\x02\u0402\u0405\x03\x02\x02\x02" +
    "\u0403\u0401\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404\u0407\x03" +
    "\x02\x02\x02\u0405\u0403\x03\x02\x02\x02\u0406\u03FF\x03\x02\x02\x02\u0407" +
    "\u040A\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0408\u0409\x03\x02" +
    "\x02\x02\u0409\u040B\x03\x02\x02\x02\u040A\u0408\x03\x02\x02\x02\u040B" +
    "\u040D\x05";
truefalseParser._serializedATNSegment2 = "\x9EP\x02\u040C\u0408\x03\x02\x02\x02\u040D\u0410\x03\x02\x02\x02\u040E" +
    "\u040C\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F\u0414\x03\x02" +
    "\x02\x02\u0410\u040E\x03\x02\x02\x02\u0411\u0413\x073\x02\x02\u0412\u0411" +
    "\x03\x02\x02\x02\u0413\u0416\x03\x02\x02\x02\u0414\u0412\x03\x02\x02\x02" +
    "\u0414\u0415\x03\x02\x02\x02\u0415\u0417\x03\x02\x02\x02\u0416\u0414\x03" +
    "\x02\x02\x02\u0417\u0424\x07\x1B\x02\x02\u0418\u041C\x07\x0E\x02\x02\u0419" +
    "\u041B\x073\x02\x02\u041A\u0419\x03\x02\x02\x02\u041B\u041E\x03\x02\x02" +
    "\x02\u041C\u041A\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D\u0420" +
    "\x03\x02\x02\x02\u041E\u041C\x03\x02\x02\x02\u041F\u0421\x05\x9EP\x02" +
    "\u0420\u041F\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0422\x03" +
    "\x02\x02\x02\u0422\u0424\x07\x02\x02\x03\u0423\u03F5\x03\x02\x02\x02\u0423" +
    "\u0418\x03\x02\x02\x02\u0424\x87\x03\x02\x02\x02\u0425\u0427\x07\x0F\x02" +
    "\x02\u0426\u0428\n\x11\x02\x02\u0427\u0426\x03\x02\x02\x02\u0428\u0429" +
    "\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02" +
    "\u042A\u042B\x03\x02\x02\x02\u042B\u042C\x07\x1B\x02\x02\u042C\x89\x03" +
    "\x02\x02\x02\u042D\u0430\x07\x1A\x02\x02\u042E\u0431\x05\x9EP\x02\u042F" +
    "\u0431\x073\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u042F\x03\x02\x02" +
    "\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0432\u0433" +
    "\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u043A\x07\x1B\x02\x02" +
    "\u0435\u0436\x07\x1A\x02\x02\u0436\u0437\x05\x9EP\x02\u0437\u0438\x07" +
    "\x02\x02\x03\u0438\u043A\x03\x02\x02\x02\u0439\u042D\x03\x02\x02\x02\u0439" +
    "\u0435\x03\x02\x02\x02\u043A\x8B\x03\x02\x02\x02\u043B\u043C\x07F\x02" +
    "\x02\u043C\u043D\x05\x9EP\x02\u043D\u043E\x07\x1B\x02\x02\u043E\u0444" +
    "\x03\x02\x02\x02\u043F\u0440\x07G\x02\x02\u0440\u0441\x05\x9EP\x02\u0441" +
    "\u0442\x07\x1B\x02\x02\u0442\u0444\x03\x02\x02\x02\u0443\u043B\x03\x02" +
    "\x02\x02\u0443\u043F\x03\x02\x02\x02\u0444\x8D\x03\x02\x02\x02\u0445\u0446" +
    "\x07=\x02\x02\u0446\u0447\x07\x1C\x02\x02\u0447\u0448\x071\x02\x02\u0448" +
    "\u044F\x07\x1B\x02\x02\u0449\u044A\x07=\x02\x02\u044A\u044B\x07\x1C\x02" +
    "\x02\u044B\u044C\x05\x9EP\x02\u044C\u044D\x07\x1B\x02\x02\u044D\u044F" +
    "\x03\x02\x02\x02\u044E\u0445\x03\x02\x02\x02\u044E\u0449\x03\x02\x02\x02" +
    "\u044F\x8F\x03\x02\x02\x02\u0450\u0451\x07R\x02\x02\u0451\u0452\x05\x9E" +
    "P\x02\u0452\u0453\x07\x1B\x02\x02\u0453\x91\x03\x02\x02\x02\u0454\u0455" +
    "\x07S\x02\x02\u0455\u0456\x05\x9EP\x02\u0456\u0457\x07\x1B\x02\x02\u0457" +
    "\x93\x03\x02\x02\x02\u0458\u0462\x05\x96L\x02\u0459\u045B\x073\x02\x02" +
    "\u045A\u0459\x03\x02\x02\x02\u045B\u045E\x03\x02\x02\x02\u045C\u045A\x03" +
    "\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D\u045F\x03\x02\x02\x02\u045E" +
    "\u045C\x03\x02\x02\x02\u045F\u0461\x05\x96L\x02\u0460\u045C\x03\x02\x02" +
    "\x02\u0461\u0464\x03\x02\x02\x02\u0462\u0460\x03\x02\x02\x02\u0462\u0463" +
    "\x03\x02\x02\x02\u0463\x95\x03\x02\x02\x02\u0464\u0462\x03\x02\x02\x02" +
    "\u0465\u0466\x07\x10\x02\x02\u0466\u0467\x05\x9EP\x02\u0467\u0468\t\x12" +
    "\x02\x02\u0468\u046E\x05\x9EP\x02\u0469\u046D\x073\x02\x02\u046A\u046D" +
    "\x07\x1C\x02\x02\u046B\u046D\x05\x9EP\x02\u046C\u0469\x03\x02\x02\x02" +
    "\u046C\u046A\x03\x02\x02\x02\u046C\u046B\x03\x02\x02\x02\u046D\u0470\x03" +
    "\x02\x02\x02\u046E\u046C\x03\x02\x02\x02\u046E\u046F\x03\x02\x02\x02\u046F" +
    "\u0471\x03\x02\x02\x02\u0470\u046E\x03\x02\x02\x02\u0471\u0472\x07\x1B" +
    "\x02\x02\u0472\u047D\x03\x02\x02\x02\u0473\u0477\x07P\x02\x02\u0474\u0476" +
    "\v\x02\x02\x02\u0475\u0474\x03\x02\x02\x02\u0476\u0479\x03\x02\x02\x02" +
    "\u0477\u0478\x03\x02\x02\x02\u0477\u0475\x03\x02\x02\x02\u0478\u047A\x03" +
    "\x02\x02\x02\u0479\u0477\x03\x02\x02\x02\u047A\u047D\x07\x1B\x02\x02\u047B" +
    "\u047D\x07C\x02\x02\u047C\u0465\x03\x02\x02\x02\u047C\u0473\x03\x02\x02" +
    "\x02\u047C\u047B\x03\x02\x02\x02\u047D\x97\x03\x02\x02\x02\u047E\u0482" +
    "\x07\x07\x02\x02\u047F\u0483\x05\x9EP\x02\u0480\u0483\x07\x1C\x02\x02" +
    "\u0481\u0483\x073\x02\x02\u0482\u047F\x03\x02\x02\x02\u0482\u0480\x03" +
    "\x02\x02\x02\u0482\u0481\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484" +
    "\u0482\x03\x02\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0486\x03\x02" +
    "\x02\x02\u0486\u0492\x07\x1B\x02\x02\u0487\u048D\x07\x07\x02\x02\u0488" +
    "\u048C\x05\x9EP\x02\u0489\u048C\x07\x1C\x02\x02\u048A\u048C\x073\x02\x02" +
    "\u048B\u0488\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048B\u048A\x03" +
    "\x02\x02\x02\u048C\u048F\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048D" +
    "\u048E\x03\x02\x02\x02\u048E\u0490\x03\x02\x02\x02\u048F\u048D\x03\x02" +
    "\x02\x02\u0490\u0492\x07\x02\x02\x03\u0491\u047E\x03\x02\x02\x02\u0491" +
    "\u0487\x03\x02\x02\x02\u0492\x99\x03\x02\x02\x02\u0493\u0495\x07\f\x02" +
    "\x02\u0494\u0496\x05\x9EP\x02\u0495\u0494\x03\x02\x02\x02\u0495\u0496" +
    "\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u0498\x07\x1B\x02\x02" +
    "\u0498\x9B\x03\x02\x02\x02\u0499\u049B\x05\x9EP\x02\u049A\u049C\x073\x02" +
    "\x02\u049B\u049A\x03\x02\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\u049E" +
    "\x03\x02\x02\x02\u049D\u0499\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02" +
    "\u049F\u049D\x03\x02\x02\x02\u049F\u04A0\x03\x02\x02\x02\u04A0\x9D\x03" +
    "\x02\x02\x02\u04A1\u04A8\x072\x02\x02\u04A2\u04A4\x07\x04\x02\x02\u04A3" +
    "\u04A2\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04A3\x03\x02" +
    "\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7" +
    "\u04A9\x071\x02\x02\u04A8\u04A3\x03\x02\x02\x02\u04A8\u04A9\x03\x02\x02" +
    "\x02\u04A9\u04D0\x03\x02\x02\x02\u04AA\u04B1\x05\xA6T\x02\u04AB\u04AD" +
    "\x07\x04\x02\x02\u04AC\u04AB\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02" +
    "\u04AE\u04AC\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF\u04B0\x03" +
    "\x02\x02\x02\u04B0\u04B2\x071\x02\x02\u04B1\u04AC\x03\x02\x02\x02\u04B1" +
    "\u04B2\x03\x02\x02\x02\u04B2\u04D0\x03\x02\x02\x02\u04B3\u04B4\x07\x13" +
    "\x02\x02\u04B4\u04B5\x05\x9EP\x02\u04B5\u04B6\x07\x1B\x02\x02\u04B6\u04D0" +
    "\x03\x02\x02\x02\u04B7\u04D0\x071\x02\x02\u04B8\u04BA\x07\x04\x02\x02" +
    "\u04B9\u04B8\x03\x02\x02\x02\u04BA\u04BD\x03\x02\x02\x02\u04BB\u04B9\x03" +
    "\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02\u04BC\u04BE\x03\x02\x02\x02\u04BD" +
    "\u04BB\x03\x02\x02\x02\u04BE\u04C2\x07\x1C\x02\x02\u04BF\u04C1\x07\x04" +
    "\x02\x02\u04C0\u04BF\x03\x02\x02\x02\u04C1\u04C4\x03\x02\x02\x02\u04C2" +
    "\u04C0\x03\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3\u04D0\x03\x02" +
    "\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C5\u04C9\x07\x1D\x02\x02\u04C6" +
    "\u04C8\x07\x04\x02\x02\u04C7\u04C6\x03\x02\x02\x02\u04C8\u04CB\x03\x02" +
    "\x02\x02\u04C9\u04C7\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA" +
    "\u04D0\x03\x02\x02\x02\u04CB\u04C9\x03\x02\x02\x02\u04CC\u04D0\x07\x1E" +
    "\x02\x02\u04CD\u04D0\x07#\x02\x02\u04CE\u04D0\x07\x9D\x02\x02\u04CF\u04A1" +
    "\x03\x02\x02\x02\u04CF\u04AA\x03\x02\x02\x02\u04CF\u04B3\x03\x02\x02\x02" +
    "\u04CF\u04B7\x03\x02\x02\x02\u04CF\u04BB\x03\x02\x02\x02\u04CF\u04C5\x03" +
    "\x02\x02\x02\u04CF\u04CC\x03\x02\x02\x02\u04CF\u04CD\x03\x02\x02\x02\u04CF" +
    "\u04CE\x03\x02\x02\x02\u04D0\x9F\x03\x02\x02\x02\u04D1\u04D2\x07+\x02" +
    "\x02\u04D2\xA1\x03\x02\x02\x02\u04D3\u04D4\x07\x1B\x02\x02\u04D4\xA3\x03" +
    "\x02\x02\x02\u04D5\u04D6\t\x13\x02\x02\u04D6\xA5\x03\x02\x02\x02\u04D7" +
    "\u04E3\x076\x02\x02\u04D8\u04E3\x074\x02\x02\u04D9\u04E3\x077\x02\x02" +
    "\u04DA\u04E3\x075\x02\x02\u04DB\u04E3\x07\x1D\x02\x02\u04DC\u04DD\x07" +
    "!\x02\x02\u04DD\u04E3\n\x14\x02\x02\u04DE\u04DF\x07\"\x02\x02\u04DF\u04E3" +
    "\n\x15\x02\x02\u04E0\u04E3\x07%\x02\x02\u04E1\u04E3\x07$\x02\x02\u04E2" +
    "\u04D7\x03\x02\x02\x02\u04E2\u04D8\x03\x02\x02\x02\u04E2\u04D9\x03\x02" +
    "\x02\x02\u04E2\u04DA\x03\x02\x02\x02\u04E2\u04DB\x03\x02\x02\x02\u04E2" +
    "\u04DC\x03\x02\x02\x02\u04E2\u04DE\x03\x02\x02\x02\u04E2\u04E0\x03\x02" +
    "\x02\x02\u04E2\u04E1\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E4" +
    "\u04E2\x03\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\xA7\x03\x02\x02" +
    "\x02\u04E6\u04E7\x07\x04\x02\x02\u04E7\xA9\x03\x02\x02\x02\xB8\xAE\xB4" +
    "\xB9\xBE\xC7\xCF\xD6\xDB\xE4\xEA\xEF\xF6\xFD\u0103\u0106\u0108\u0110\u0117" +
    "\u011C\u0125\u012C\u0131\u0135\u013A\u0140\u0146\u014D\u0153\u0156\u0158" +
    "\u0162\u0167\u016A\u016F\u0174\u0178\u017D\u0181\u0184\u0189\u018B\u0190" +
    "\u0195\u0197\u019C\u01A1\u01A3\u01BF\u01C9\u01CB\u01D2\u01D7\u01E0\u01E9" +
    "\u01EF\u01F1\u01FF\u0207\u020C\u0210\u0214\u0216\u021B\u0232\u0237\u023C" +
    "\u023E\u0248\u0252\u025C\u0262\u0269\u026F\u0277\u0281\u028C\u0292\u0297" +
    "\u029E\u02A7\u02AB\u02AF\u02B1\u02C0\u02C4\u02D3\u02D7\u02DD\u02E8\u02ED" +
    "\u02F2\u02F4\u02F9\u02FE\u0303\u0305\u030A\u0310\u0315\u0317\u0322\u0326" +
    "\u0331\u0333\u033A\u0340\u0345\u034B\u0351\u0354\u035A\u035C\u0365\u0367" +
    "\u0370\u0372\u0379\u037D\u037F\u0383\u0387\u038C\u038F\u0395\u0398\u039C" +
    "\u03A3\u03A8\u03AE\u03B3\u03BB\u03BD\u03C1\u03C8\u03CA\u03D3\u03D5\u03D9" +
    "\u03E3\u03E5\u03E9\u03EF\u03F1\u03F9\u03FD\u0403\u0408\u040E\u0414\u041C" +
    "\u0420\u0423\u0429\u0430\u0432\u0439\u0443\u044E\u045C\u0462\u046C\u046E" +
    "\u0477\u047C\u0482\u0484\u048B\u048D\u0491\u0495\u049B\u049F\u04A5\u04A8" +
    "\u04AE\u04B1\u04BB\u04C2\u04C9\u04CF\u04E2\u04E4";
truefalseParser._serializedATN = Utils.join([
    truefalseParser._serializedATNSegment0,
    truefalseParser._serializedATNSegment1,
    truefalseParser._serializedATNSegment2,
], "");
class BitmarkContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(truefalseParser.EOF, 0); }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bitmark; }
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
    truefalses() {
        return this.getRuleContext(0, TruefalsesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bitmark_; }
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
class TruefalsesContext extends ParserRuleContext_1.ParserRuleContext {
    true_false_1() {
        return this.tryGetRuleContext(0, True_false_1Context);
    }
    true_false() {
        return this.tryGetRuleContext(0, True_falseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_truefalses; }
    // @Override
    enterRule(listener) {
        if (listener.enterTruefalses) {
            listener.enterTruefalses(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTruefalses) {
            listener.exitTruefalses(this);
        }
    }
}
exports.TruefalsesContext = TruefalsesContext;
class True_false_1Context extends ParserRuleContext_1.ParserRuleContext {
    BitTruefalse1() { return this.getToken(truefalseParser.BitTruefalse1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
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
    choices() {
        return this.tryGetRuleContext(0, ChoicesContext);
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
    get ruleIndex() { return truefalseParser.RULE_true_false_1; }
    // @Override
    enterRule(listener) {
        if (listener.enterTrue_false_1) {
            listener.enterTrue_false_1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTrue_false_1) {
            listener.exitTrue_false_1(this);
        }
    }
}
exports.True_false_1Context = True_false_1Context;
class True_falseContext extends ParserRuleContext_1.ParserRuleContext {
    BitTruefalse() { return this.getToken(truefalseParser.BitTruefalse, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
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
    mcrsep_end() {
        return this.tryGetRuleContext(0, Mcrsep_endContext);
    }
    choices(i) {
        if (i === undefined) {
            return this.getRuleContexts(ChoicesContext);
        }
        else {
            return this.getRuleContext(i, ChoicesContext);
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
    mcrsep(i) {
        if (i === undefined) {
            return this.getRuleContexts(McrsepContext);
        }
        else {
            return this.getRuleContext(i, McrsepContext);
        }
    }
    tfmisc(i) {
        if (i === undefined) {
            return this.getRuleContexts(TfmiscContext);
        }
        else {
            return this.getRuleContext(i, TfmiscContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_true_false; }
    // @Override
    enterRule(listener) {
        if (listener.enterTrue_false) {
            listener.enterTrue_false(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTrue_false) {
            listener.exitTrue_false(this);
        }
    }
}
exports.True_falseContext = True_falseContext;
class McrsepContext extends ParserRuleContext_1.ParserRuleContext {
    HSPL() { return this.tryGetToken(truefalseParser.HSPL, 0); }
    HSPL2() { return this.tryGetToken(truefalseParser.HSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_mcrsep; }
    // @Override
    enterRule(listener) {
        if (listener.enterMcrsep) {
            listener.enterMcrsep(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMcrsep) {
            listener.exitMcrsep(this);
        }
    }
}
exports.McrsepContext = McrsepContext;
class Mcrsep_endContext extends ParserRuleContext_1.ParserRuleContext {
    HSPL() { return this.tryGetToken(truefalseParser.HSPL, 0); }
    HSPL2() { return this.tryGetToken(truefalseParser.HSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_mcrsep_end; }
    // @Override
    enterRule(listener) {
        if (listener.enterMcrsep_end) {
            listener.enterMcrsep_end(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMcrsep_end) {
            listener.exitMcrsep_end(this);
        }
    }
}
exports.Mcrsep_endContext = Mcrsep_endContext;
class TfmiscContext extends ParserRuleContext_1.ParserRuleContext {
    bitElem() {
        return this.tryGetRuleContext(0, BitElemContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_tfmisc; }
    // @Override
    enterRule(listener) {
        if (listener.enterTfmisc) {
            listener.enterTfmisc(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTfmisc) {
            listener.exitTfmisc(this);
        }
    }
}
exports.TfmiscContext = TfmiscContext;
class ChoicesContext extends ParserRuleContext_1.ParserRuleContext {
    cplus(i) {
        if (i === undefined) {
            return this.getRuleContexts(CplusContext);
        }
        else {
            return this.getRuleContext(i, CplusContext);
        }
    }
    cminus(i) {
        if (i === undefined) {
            return this.getRuleContexts(CminusContext);
        }
        else {
            return this.getRuleContext(i, CminusContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_choices; }
    // @Override
    enterRule(listener) {
        if (listener.enterChoices) {
            listener.enterChoices(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChoices) {
            listener.exitChoices(this);
        }
    }
}
exports.ChoicesContext = ChoicesContext;
class CplusContext extends ParserRuleContext_1.ParserRuleContext {
    choice_plus() {
        return this.getRuleContext(0, Choice_plusContext);
    }
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_cplus; }
    // @Override
    enterRule(listener) {
        if (listener.enterCplus) {
            listener.enterCplus(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCplus) {
            listener.exitCplus(this);
        }
    }
}
exports.CplusContext = CplusContext;
class CminusContext extends ParserRuleContext_1.ParserRuleContext {
    choice_minus() {
        return this.getRuleContext(0, Choice_minusContext);
    }
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_cminus; }
    // @Override
    enterRule(listener) {
        if (listener.enterCminus) {
            listener.enterCminus(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCminus) {
            listener.exitCminus(this);
        }
    }
}
exports.CminusContext = CminusContext;
class Choice_plusContext extends ParserRuleContext_1.ParserRuleContext {
    OPP() { return this.getToken(truefalseParser.OPP, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_choice_plus; }
    // @Override
    enterRule(listener) {
        if (listener.enterChoice_plus) {
            listener.enterChoice_plus(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChoice_plus) {
            listener.exitChoice_plus(this);
        }
    }
}
exports.Choice_plusContext = Choice_plusContext;
class Choice_minusContext extends ParserRuleContext_1.ParserRuleContext {
    OPM() { return this.getToken(truefalseParser.OPM, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_choice_minus; }
    // @Override
    enterRule(listener) {
        if (listener.enterChoice_minus) {
            listener.enterChoice_minus(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChoice_minus) {
            listener.exitChoice_minus(this);
        }
    }
}
exports.Choice_minusContext = Choice_minusContext;
class Choice_starContext extends ParserRuleContext_1.ParserRuleContext {
    OPR() { return this.getToken(truefalseParser.OPR, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_choice_star; }
    // @Override
    enterRule(listener) {
        if (listener.enterChoice_star) {
            listener.enterChoice_star(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChoice_star) {
            listener.exitChoice_star(this);
        }
    }
}
exports.Choice_starContext = Choice_starContext;
class BitElemContext extends ParserRuleContext_1.ParserRuleContext {
    LIST_LINE() { return this.tryGetToken(truefalseParser.LIST_LINE, 0); }
    NOTBITMARK() { return this.tryGetToken(truefalseParser.NOTBITMARK, 0); }
    dclines() {
        return this.tryGetRuleContext(0, DclinesContext);
    }
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
    get ruleIndex() { return truefalseParser.RULE_bitElem; }
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
    get ruleIndex() { return truefalseParser.RULE_resource; }
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
    get ruleIndex() { return truefalseParser.RULE_gap; }
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
    OPU() { return this.getToken(truefalseParser.OPU, 0); }
    clnsp() {
        return this.getRuleContext(0, ClnspContext);
    }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    STRING() { return this.tryGetToken(truefalseParser.STRING, 0); }
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
    get ruleIndex() { return truefalseParser.RULE_single_gap; }
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
    OPBUL() { return this.getToken(truefalseParser.OPBUL, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    atpoint() {
        return this.tryGetRuleContext(0, AtpointContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bullet_item; }
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
    AtPoints() { return this.getToken(truefalseParser.AtPoints, 0); }
    NUMERIC() { return this.getToken(truefalseParser.NUMERIC, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_atpoint; }
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
            return this.getTokens(truefalseParser.ColonText);
        }
        else {
            return this.getToken(truefalseParser.ColonText, i);
        }
    }
    ColonJson(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.ColonJson);
        }
        else {
            return this.getToken(truefalseParser.ColonJson, i);
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
    get ruleIndex() { return truefalseParser.RULE_format; }
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
    BitmarkMinus() { return this.tryGetToken(truefalseParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(truefalseParser.BitmarkPlus, 0); }
    Prosemirror() { return this.tryGetToken(truefalseParser.Prosemirror, 0); }
    Placeholder() { return this.tryGetToken(truefalseParser.Placeholder, 0); }
    ColonJson() { return this.tryGetToken(truefalseParser.ColonJson, 0); }
    AmpArticle() { return this.tryGetToken(truefalseParser.AmpArticle, 0); }
    AmpDocument() { return this.tryGetToken(truefalseParser.AmpDocument, 0); }
    AmpWebsite() { return this.tryGetToken(truefalseParser.AmpWebsite, 0); }
    AmpStillImageFilm() { return this.tryGetToken(truefalseParser.AmpStillImageFilm, 0); }
    AmpAudioLink() { return this.tryGetToken(truefalseParser.AmpAudioLink, 0); }
    AmpImageLink() { return this.tryGetToken(truefalseParser.AmpImageLink, 0); }
    AmpVideoLink() { return this.tryGetToken(truefalseParser.AmpVideoLink, 0); }
    AmpArticleLink() { return this.tryGetToken(truefalseParser.AmpArticleLink, 0); }
    AmpDocumentLink() { return this.tryGetToken(truefalseParser.AmpDocumentLink, 0); }
    AmpAppLink() { return this.tryGetToken(truefalseParser.AmpAppLink, 0); }
    AmpWebsiteLink() { return this.tryGetToken(truefalseParser.AmpWebsiteLink, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(truefalseParser.AmpStillImageFilmLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(truefalseParser.AmpVideoEmbed, 0); }
    AmpAudioEmbed() { return this.tryGetToken(truefalseParser.AmpAudioEmbed, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(truefalseParser.AmpDocumentEmbed, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(truefalseParser.AmpStillImageFilmEmbed, 0); }
    AmpDocumentDownload() { return this.tryGetToken(truefalseParser.AmpDocumentDownload, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_resource_format; }
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
    AmpPdf() { return this.tryGetToken(truefalseParser.AmpPdf, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_resource_format_extra; }
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
    BitmarkMinus() { return this.tryGetToken(truefalseParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(truefalseParser.BitmarkPlus, 0); }
    ColonText() { return this.tryGetToken(truefalseParser.ColonText, 0); }
    Placeholder() { return this.tryGetToken(truefalseParser.Placeholder, 0); }
    ColonJson() { return this.tryGetToken(truefalseParser.ColonJson, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_format2; }
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
    AmpImage() { return this.tryGetToken(truefalseParser.AmpImage, 0); }
    Image_type() { return this.tryGetToken(truefalseParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(truefalseParser.DotArticleAtt, 0); }
    AmpImageLink() { return this.tryGetToken(truefalseParser.AmpImageLink, 0); }
    AmpImageZoom() { return this.tryGetToken(truefalseParser.AmpImageZoom, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_image_format; }
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
    AmpVideo() { return this.tryGetToken(truefalseParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(truefalseParser.AmpVideoLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(truefalseParser.AmpVideoEmbed, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    Video_type() { return this.tryGetToken(truefalseParser.Video_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_video_format; }
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
    AmpArticle() { return this.tryGetToken(truefalseParser.AmpArticle, 0); }
    AmpArticleLink() { return this.tryGetToken(truefalseParser.AmpArticleLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_article_format; }
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
    AmpDocument() { return this.tryGetToken(truefalseParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(truefalseParser.AmpDocumentLink, 0); }
    AmpDocumentDownload() { return this.tryGetToken(truefalseParser.AmpDocumentDownload, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(truefalseParser.AmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_document_format; }
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
    AmpApp() { return this.tryGetToken(truefalseParser.AmpApp, 0); }
    AmpAppLink() { return this.tryGetToken(truefalseParser.AmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_app_format; }
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
    AmpWebsite() { return this.tryGetToken(truefalseParser.AmpWebsite, 0); }
    AmpWebsiteLink() { return this.tryGetToken(truefalseParser.AmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_website_format; }
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
    AmpStillImageFilm() { return this.tryGetToken(truefalseParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(truefalseParser.AmpStillImageFilmLink, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(truefalseParser.AmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_stillimagefilm_format; }
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
    OpAmpArticleLink() { return this.tryGetToken(truefalseParser.OpAmpArticleLink, 0); }
    OpAmpArticle() { return this.tryGetToken(truefalseParser.OpAmpArticle, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_article_format; }
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
    OpAmpDocumentLink() { return this.tryGetToken(truefalseParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(truefalseParser.OpAmpDocument, 0); }
    OpAmpDocumentDownload() { return this.tryGetToken(truefalseParser.OpAmpDocumentDownload, 0); }
    OpAmpDocumentEmbed() { return this.tryGetToken(truefalseParser.OpAmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_document_format; }
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
    OpAmpApp() { return this.tryGetToken(truefalseParser.OpAmpApp, 0); }
    OpAmpAppLink() { return this.tryGetToken(truefalseParser.OpAmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_app_format; }
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
    OpAmpWebsite() { return this.tryGetToken(truefalseParser.OpAmpWebsite, 0); }
    OpAmpWebsiteLink() { return this.tryGetToken(truefalseParser.OpAmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_website_format; }
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
    OpAmpVideo() { return this.tryGetToken(truefalseParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    Video_type() { return this.tryGetToken(truefalseParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(truefalseParser.OpAmpVideoLink, 0); }
    OpAmpVideoEmbed() { return this.tryGetToken(truefalseParser.OpAmpVideoEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_video_format; }
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
    OpAmpStillImageFilm() { return this.tryGetToken(truefalseParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(truefalseParser.OpAmpStillImageFilmLink, 0); }
    OpAmpStillImageFilmEmbed() { return this.tryGetToken(truefalseParser.OpAmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_stillimagefilm_format; }
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
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
    ArticleText() { return this.tryGetToken(truefalseParser.ArticleText, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_articlebit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_documentbit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_websitebit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_appbit; }
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
    get ruleIndex() { return truefalseParser.RULE_stillimagefilmbit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_stillimg_one; }
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
    get ruleIndex() { return truefalseParser.RULE_videobit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_video_one; }
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
    NL() { return this.tryGetToken(truefalseParser.NL, 0); }
    ShowInIndex() { return this.tryGetToken(truefalseParser.ShowInIndex, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_imagebit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_image_one; }
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
    OpAmpImage() { return this.tryGetToken(truefalseParser.OpAmpImage, 0); }
    Image_type() { return this.tryGetToken(truefalseParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(truefalseParser.DotArticleAtt, 0); }
    OpAmpImageLink() { return this.tryGetToken(truefalseParser.OpAmpImageLink, 0); }
    OpAmpImageZoom() { return this.tryGetToken(truefalseParser.OpAmpImageZoom, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_image_format; }
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
    AtSrc() { return this.tryGetToken(truefalseParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(truefalseParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(truefalseParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(truefalseParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(truefalseParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(truefalseParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_image_chained; }
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
    AtSrc() { return this.tryGetToken(truefalseParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(truefalseParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(truefalseParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(truefalseParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(truefalseParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(truefalseParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_image_chained4match; }
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
    get ruleIndex() { return truefalseParser.RULE_audiobit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_audio_one; }
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
    AmpAudio() { return this.tryGetToken(truefalseParser.AmpAudio, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(truefalseParser.Audio_type, 0); }
    AmpAudioLink() { return this.tryGetToken(truefalseParser.AmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_audio_format; }
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
    OpAmpAudio() { return this.tryGetToken(truefalseParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(truefalseParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(truefalseParser.OpAmpAudioLink, 0); }
    OpAmpAudioEmbed() { return this.tryGetToken(truefalseParser.OpAmpAudioEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_audio_format; }
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
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    OPA() { return this.tryGetToken(truefalseParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtSrc() { return this.tryGetToken(truefalseParser.AtSrc, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(truefalseParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(truefalseParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(truefalseParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(truefalseParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(truefalseParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_resource_chained; }
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
    TEL() { return this.getToken(truefalseParser.TEL, 0); }
    PLUS() { return this.getToken(truefalseParser.PLUS, 0); }
    NUMERIC() { return this.getToken(truefalseParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_telephone; }
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
    URL() { return this.getToken(truefalseParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_url; }
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
    OPITEM() { return this.tryGetToken(truefalseParser.OPITEM, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
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
    lead(i) {
        if (i === undefined) {
            return this.getRuleContexts(LeadContext);
        }
        else {
            return this.getRuleContext(i, LeadContext);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    OPC() { return this.tryGetToken(truefalseParser.OPC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_item; }
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
    OPLEAD() { return this.tryGetToken(truefalseParser.OPLEAD, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    OPPAGENUMBER() { return this.tryGetToken(truefalseParser.OPPAGENUMBER, 0); }
    OPMARGINNUMBER() { return this.tryGetToken(truefalseParser.OPMARGINNUMBER, 0); }
    OPC() { return this.tryGetToken(truefalseParser.OPC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_lead; }
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
    OPRANGLES() { return this.tryGetToken(truefalseParser.OPRANGLES, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(truefalseParser.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_angleref; }
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
    AtExamplecl() { return this.tryGetToken(truefalseParser.AtExamplecl, 0); }
    AtExampleWithStr() { return this.tryGetToken(truefalseParser.AtExampleWithStr, 0); }
    AtExamplecol() { return this.tryGetToken(truefalseParser.AtExamplecol, 0); }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    SENTENCE() { return this.tryGetToken(truefalseParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_example; }
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
    BracEnclose() { return this.getToken(truefalseParser.BracEnclose, 0); }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bracketed_text; }
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
    AtReference() { return this.getToken(truefalseParser.AtReference, 0); }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    URL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.URL);
        }
        else {
            return this.getToken(truefalseParser.URL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_reference; }
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
    AtProgress() { return this.getToken(truefalseParser.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_progress; }
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
    AtDate() { return this.getToken(truefalseParser.AtDate, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    dateprop_chained() {
        return this.tryGetRuleContext(0, Dateprop_chainedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_dateprop; }
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
    AtDate() { return this.getToken(truefalseParser.AtDate, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_dateprop_chained; }
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
    OPB() { return this.getToken(truefalseParser.OPB, 0); }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
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
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_instruction; }
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
    OPQ() { return this.getToken(truefalseParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_hint; }
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
    OPHASH() { return this.getToken(truefalseParser.OPHASH, 0); }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_title; }
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
    AtLabeltrue() { return this.tryGetToken(truefalseParser.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    AtLabelfalse() { return this.tryGetToken(truefalseParser.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bool_label; }
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
    AtProgressPoints() { return this.getToken(truefalseParser.AtProgressPoints, 0); }
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_progress_points; }
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
    OpAtIsTracked() { return this.getToken(truefalseParser.OpAtIsTracked, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_istracked; }
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
    OpAtIsInfoOnly() { return this.getToken(truefalseParser.OpAtIsInfoOnly, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_isinfoonly; }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_atdef; }
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
    OPA() { return this.tryGetToken(truefalseParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    DBLCOLON() { return this.tryGetToken(truefalseParser.DBLCOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    OpAtCopyright() { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
    AtSampleSolution() { return this.tryGetToken(truefalseParser.AtSampleSolution, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_atdef_; }
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
    OPDOLL() { return this.getToken(truefalseParser.OPDOLL, 0); }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_dollarans; }
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
    OPDANGLE() { return this.getToken(truefalseParser.OPDANGLE, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_anchor; }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_lines; }
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
    STRING() { return this.tryGetToken(truefalseParser.STRING, 0); }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    OPS() { return this.tryGetToken(truefalseParser.OPS, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    AMP() { return this.tryGetToken(truefalseParser.AMP, 0); }
    DBLCOLON() { return this.tryGetToken(truefalseParser.DBLCOLON, 0); }
    DBLEQ() { return this.tryGetToken(truefalseParser.DBLEQ, 0); }
    URL() { return this.tryGetToken(truefalseParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_s_and_w; }
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
class DclinesContext extends ParserRuleContext_1.ParserRuleContext {
    DCANY() { return this.getToken(truefalseParser.DCANY, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_dclines; }
    // @Override
    enterRule(listener) {
        if (listener.enterDclines) {
            listener.enterDclines(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDclines) {
            listener.exitDclines(this);
        }
    }
}
exports.DclinesContext = DclinesContext;
class ClnspContext extends ParserRuleContext_1.ParserRuleContext {
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_clnsp; }
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
    SSPL() { return this.tryGetToken(truefalseParser.SSPL, 0); }
    SSPL2() { return this.tryGetToken(truefalseParser.SSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_sspl; }
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
            return this.getTokens(truefalseParser.SENTENCE);
        }
        else {
            return this.getToken(truefalseParser.SENTENCE, i);
        }
    }
    NOTBITMARK(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NOTBITMARK);
        }
        else {
            return this.getToken(truefalseParser.NOTBITMARK, i);
        }
    }
    BARSTRING(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.BARSTRING);
        }
        else {
            return this.getToken(truefalseParser.BARSTRING, i);
        }
    }
    ELIPSIS(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.ELIPSIS);
        }
        else {
            return this.getToken(truefalseParser.ELIPSIS, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.AMP);
        }
        else {
            return this.getToken(truefalseParser.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.Greater);
        }
        else {
            return this.getToken(truefalseParser.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.Less);
        }
        else {
            return this.getToken(truefalseParser.Less, i);
        }
    }
    RightArrow(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.RightArrow);
        }
        else {
            return this.getToken(truefalseParser.RightArrow, i);
        }
    }
    RightAngle(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.RightAngle);
        }
        else {
            return this.getToken(truefalseParser.RightAngle, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_words; }
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
    S() { return this.getToken(truefalseParser.S, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_sp; }
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
