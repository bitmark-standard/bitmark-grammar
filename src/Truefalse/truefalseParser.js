"use strict";
// Generated from ./Truefalse/truefalseParser.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.Bracket_escapedContext = exports.DclinesContext = exports.S_and_wContext = exports.LinesContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.Bullet_itemContext = exports.Single_gapContext = exports.GapContext = exports.ResourceContext = exports.BitElemContext = exports.Choice_starContext = exports.Choice_minusContext = exports.Choice_plusContext = exports.CminusContext = exports.CplusContext = exports.ChoicesContext = exports.TfmiscContext = exports.Mcrsep_endContext = exports.McrsepContext = exports.True_falseContext = exports.True_false_1Context = exports.TruefalsesContext = exports.Bitmark_Context = exports.BitmarkContext = exports.truefalseParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
let truefalseParser = /** @class */ (() => {
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
        // @RuleVersion(0)
        bitmark() {
            let _localctx = new BitmarkContext(this._ctx, this.state);
            this.enterRule(_localctx, 0, truefalseParser.RULE_bitmark);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 183;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 170;
                                this.bitmark_();
                                this.state = 180;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 174;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === truefalseParser.S) {
                                                    {
                                                        {
                                                            this.state = 171;
                                                            this.match(truefalseParser.S);
                                                        }
                                                    }
                                                    this.state = 176;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 177;
                                                this.match(truefalseParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 182;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                }
                            }
                        }
                        this.state = 185;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === truefalseParser.BitTruefalse1 || _la === truefalseParser.BitTruefalse);
                    this.state = 190;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === truefalseParser.NL) {
                        {
                            {
                                this.state = 187;
                                this.match(truefalseParser.NL);
                            }
                        }
                        this.state = 192;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 193;
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
                    this.state = 195;
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
                this.state = 199;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.BitTruefalse1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 197;
                            this.true_false_1();
                        }
                        break;
                    case truefalseParser.BitTruefalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 198;
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
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 201;
                    this.match(truefalseParser.BitTruefalse1);
                    this.state = 202;
                    this.format();
                    this.state = 203;
                    this.match(truefalseParser.CL);
                    this.state = 205;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 204;
                                this.match(truefalseParser.NL);
                            }
                        }
                        this.state = 207;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === truefalseParser.NL);
                    this.state = 218;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 209;
                                    this.bitElem();
                                    this.state = 213;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === truefalseParser.NL) {
                                        {
                                            {
                                                this.state = 210;
                                                this.match(truefalseParser.NL);
                                            }
                                        }
                                        this.state = 215;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                        }
                        this.state = 220;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                    }
                    this.state = 221;
                    this.choices();
                    this.state = 225;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 222;
                                    this.match(truefalseParser.NL);
                                }
                            }
                        }
                        this.state = 227;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                    }
                    this.state = 241;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                        case 1:
                            {
                                this.state = 228;
                                this.resource();
                                this.state = 238;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
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
                                                this.state = 235;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 240;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
        true_false() {
            let _localctx = new True_falseContext(this._ctx, this.state);
            this.enterRule(_localctx, 8, truefalseParser.RULE_true_false);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 243;
                    this.match(truefalseParser.BitTruefalse);
                    this.state = 244;
                    this.format();
                    this.state = 245;
                    this.match(truefalseParser.CL);
                    this.state = 249;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === truefalseParser.NL) {
                        {
                            {
                                this.state = 246;
                                this.match(truefalseParser.NL);
                            }
                        }
                        this.state = 251;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 261;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 252;
                                    this.bitElem();
                                    this.state = 256;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === truefalseParser.NL) {
                                        {
                                            {
                                                this.state = 253;
                                                this.match(truefalseParser.NL);
                                            }
                                        }
                                        this.state = 258;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                        }
                        this.state = 263;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                    }
                    this.state = 274;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 265;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === truefalseParser.HSPL || _la === truefalseParser.HSPL2) {
                                            {
                                                this.state = 264;
                                                this.mcrsep();
                                            }
                                        }
                                        this.state = 270;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 267;
                                                        this.tfmisc();
                                                    }
                                                }
                                            }
                                            this.state = 272;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                                        }
                                        this.state = 273;
                                        this.choices();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 276;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 278;
                    this.mcrsep_end();
                    this.state = 282;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 279;
                                    this.match(truefalseParser.NL);
                                }
                            }
                        }
                        this.state = 284;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                    }
                    this.state = 298;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                        case 1:
                            {
                                this.state = 285;
                                this.resource();
                                this.state = 295;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 289;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === truefalseParser.NL) {
                                                    {
                                                        {
                                                            this.state = 286;
                                                            this.match(truefalseParser.NL);
                                                        }
                                                    }
                                                    this.state = 291;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 292;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 297;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
        mcrsep() {
            let _localctx = new McrsepContext(this._ctx, this.state);
            this.enterRule(_localctx, 10, truefalseParser.RULE_mcrsep);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 300;
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
                    this.state = 302;
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
                        this.state = 304;
                        this.bitElem();
                        this.state = 308;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === truefalseParser.NL) {
                            {
                                {
                                    this.state = 305;
                                    this.match(truefalseParser.NL);
                                }
                            }
                            this.state = 310;
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
                    this.state = 313;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                        case 1:
                            {
                                this.state = 311;
                                this.cplus();
                            }
                            break;
                        case 2:
                            {
                                this.state = 312;
                                this.cminus();
                            }
                            break;
                    }
                    this.state = 330;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 316;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === truefalseParser.NL) {
                                        {
                                            this.state = 315;
                                            this.match(truefalseParser.NL);
                                        }
                                    }
                                    this.state = 321;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === truefalseParser.S) {
                                        {
                                            {
                                                this.state = 318;
                                                this.match(truefalseParser.S);
                                            }
                                        }
                                        this.state = 323;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 326;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 324;
                                                this.cplus();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 325;
                                                this.cminus();
                                            }
                                            break;
                                    }
                                }
                            }
                        }
                        this.state = 332;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
                    this.state = 333;
                    this.choice_plus();
                    this.state = 335;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                        case 1:
                            {
                                this.state = 334;
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
                    this.state = 337;
                    this.choice_minus();
                    this.state = 339;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                        case 1:
                            {
                                this.state = 338;
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
                    this.state = 342;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPC) {
                        {
                            this.state = 341;
                            this.item();
                        }
                    }
                    this.state = 344;
                    this.match(truefalseParser.OPP);
                    this.state = 347;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 347;
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
                                case truefalseParser.SENTENCE:
                                case truefalseParser.URL:
                                    {
                                        this.state = 345;
                                        this.s_and_w();
                                    }
                                    break;
                                case truefalseParser.NL:
                                    {
                                        this.state = 346;
                                        this.match(truefalseParser.NL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 349;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                    this.state = 351;
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
                    this.state = 354;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPC) {
                        {
                            this.state = 353;
                            this.item();
                        }
                    }
                    this.state = 356;
                    this.match(truefalseParser.OPM);
                    this.state = 359;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 359;
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
                                case truefalseParser.SENTENCE:
                                case truefalseParser.URL:
                                    {
                                        this.state = 357;
                                        this.s_and_w();
                                    }
                                    break;
                                case truefalseParser.NL:
                                    {
                                        this.state = 358;
                                        this.match(truefalseParser.NL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 361;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                    this.state = 363;
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
                    this.state = 366;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPC) {
                        {
                            this.state = 365;
                            this.item();
                        }
                    }
                    this.state = 368;
                    this.match(truefalseParser.OPR);
                    this.state = 371;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 371;
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
                                case truefalseParser.SENTENCE:
                                case truefalseParser.URL:
                                    {
                                        this.state = 369;
                                        this.s_and_w();
                                    }
                                    break;
                                case truefalseParser.NL:
                                    {
                                        this.state = 370;
                                        this.match(truefalseParser.NL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 373;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                    this.state = 375;
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
                this.state = 400;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 377;
                            this.match(truefalseParser.LIST_LINE);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 378;
                            this.dclines();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 379;
                            this.gap();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 380;
                            this.atdef();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 381;
                            this.reference();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 382;
                            this.item();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 383;
                            this.title();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 384;
                            this.instruction();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 385;
                            this.hint();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 386;
                            this.s_and_w();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 387;
                            this.example();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 388;
                            this.bool_label();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 389;
                            this.imagebit();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 390;
                            this.audiobit();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 391;
                            this.videobit();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 392;
                            this.articlebit();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 393;
                            this.documentbit();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 394;
                            this.appbit();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 395;
                            this.websitebit();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 396;
                            this.stillimagefilmbit();
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 397;
                            this.angleref();
                        }
                        break;
                    case 22:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 398;
                            this.anchor();
                        }
                        break;
                    case 23:
                        this.enterOuterAlt(_localctx, 23);
                        {
                            this.state = 399;
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
                    this.state = 402;
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
                    this.state = 404;
                    this.single_gap();
                    this.state = 412;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 410;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case truefalseParser.OPU:
                                        {
                                            this.state = 405;
                                            this.single_gap();
                                        }
                                        break;
                                    case truefalseParser.OPB:
                                        {
                                            this.state = 406;
                                            this.instruction();
                                        }
                                        break;
                                    case truefalseParser.OPQ:
                                        {
                                            this.state = 407;
                                            this.hint();
                                        }
                                        break;
                                    case truefalseParser.OPC:
                                        {
                                            this.state = 408;
                                            this.item();
                                        }
                                        break;
                                    case truefalseParser.AtExampleWithStr:
                                    case truefalseParser.AtExamplecol:
                                    case truefalseParser.AtExamplecl:
                                        {
                                            this.state = 409;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 414;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
                    this.state = 415;
                    this.match(truefalseParser.OPU);
                    this.state = 419;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                        case 1:
                            {
                                this.state = 416;
                                this.match(truefalseParser.NUMERIC);
                            }
                            break;
                        case 2:
                            {
                                this.state = 417;
                                this.match(truefalseParser.STRING);
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 424;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                        {
                            {
                                this.state = 421;
                                this.s_and_w();
                            }
                        }
                        this.state = 426;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 427;
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
                    this.state = 429;
                    this.match(truefalseParser.OPBUL);
                    this.state = 430;
                    this.s_and_w();
                    this.state = 431;
                    this.match(truefalseParser.CL);
                    this.state = 433;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.AtPoints) {
                        {
                            this.state = 432;
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
                    this.state = 435;
                    this.match(truefalseParser.AtPoints);
                    this.state = 436;
                    this.match(truefalseParser.NUMERIC);
                    this.state = 437;
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
                    this.state = 442;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 439;
                                    this.resource_format();
                                }
                            }
                        }
                        this.state = 444;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                    }
                    this.state = 449;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (truefalseParser.AmpAudio - 77)) | (1 << (truefalseParser.AmpImage - 77)) | (1 << (truefalseParser.AmpImageZoom - 77)) | (1 << (truefalseParser.AmpImageWAudio - 77)) | (1 << (truefalseParser.AmpVideo - 77)) | (1 << (truefalseParser.AmpArticle - 77)) | (1 << (truefalseParser.AmpDocument - 77)) | (1 << (truefalseParser.AmpApp - 77)) | (1 << (truefalseParser.AmpWebsite - 77)) | (1 << (truefalseParser.AmpStillImageFilm - 77)) | (1 << (truefalseParser.AmpPdf - 77)) | (1 << (truefalseParser.AmpAudioLink - 77)) | (1 << (truefalseParser.AmpImageLink - 77)) | (1 << (truefalseParser.AmpVideoLink - 77)) | (1 << (truefalseParser.AmpArticleLink - 77)) | (1 << (truefalseParser.AmpDocumentLink - 77)) | (1 << (truefalseParser.AmpAppLink - 77)) | (1 << (truefalseParser.AmpWebsiteLink - 77)) | (1 << (truefalseParser.AmpStillImageFilmLink - 77)))) !== 0) || _la === truefalseParser.ColonText) {
                        {
                            this.state = 447;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.ColonText:
                                    {
                                        this.state = 445;
                                        this.match(truefalseParser.ColonText);
                                    }
                                    break;
                                case truefalseParser.AmpAudio:
                                case truefalseParser.AmpImage:
                                case truefalseParser.AmpImageZoom:
                                case truefalseParser.AmpImageWAudio:
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
                                case truefalseParser.AmpAppLink:
                                case truefalseParser.AmpWebsiteLink:
                                case truefalseParser.AmpStillImageFilmLink:
                                    {
                                        this.state = 446;
                                        this.resource_format_extra();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 451;
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
                    this.state = 452;
                    _la = this._input.LA(1);
                    if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (truefalseParser.AmpArticle - 82)) | (1 << (truefalseParser.AmpDocument - 82)) | (1 << (truefalseParser.AmpWebsite - 82)) | (1 << (truefalseParser.AmpStillImageFilm - 82)) | (1 << (truefalseParser.AmpAudioLink - 82)) | (1 << (truefalseParser.AmpImageLink - 82)) | (1 << (truefalseParser.AmpVideoLink - 82)) | (1 << (truefalseParser.AmpArticleLink - 82)) | (1 << (truefalseParser.AmpDocumentLink - 82)) | (1 << (truefalseParser.AmpAppLink - 82)) | (1 << (truefalseParser.AmpWebsiteLink - 82)) | (1 << (truefalseParser.AmpStillImageFilmLink - 82)))) !== 0) || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & ((1 << (truefalseParser.BitmarkMinus - 116)) | (1 << (truefalseParser.BitmarkPlus - 116)) | (1 << (truefalseParser.Prosemirror - 116)) | (1 << (truefalseParser.Placeholder - 116)))) !== 0))) {
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
                this.state = 463;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AmpImage:
                    case truefalseParser.AmpImageZoom:
                    case truefalseParser.AmpImageWAudio:
                    case truefalseParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 454;
                            this.image_format();
                        }
                        break;
                    case truefalseParser.AmpAudio:
                    case truefalseParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 455;
                            this.audio_format();
                        }
                        break;
                    case truefalseParser.AmpVideo:
                    case truefalseParser.AmpVideoLink:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 456;
                            this.video_format();
                        }
                        break;
                    case truefalseParser.AmpArticle:
                    case truefalseParser.AmpArticleLink:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 457;
                            this.article_format();
                        }
                        break;
                    case truefalseParser.AmpDocument:
                    case truefalseParser.AmpDocumentLink:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 458;
                            this.document_format();
                        }
                        break;
                    case truefalseParser.AmpApp:
                    case truefalseParser.AmpAppLink:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 459;
                            this.app_format();
                        }
                        break;
                    case truefalseParser.AmpWebsite:
                    case truefalseParser.AmpWebsiteLink:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 460;
                            this.website_format();
                        }
                        break;
                    case truefalseParser.AmpStillImageFilm:
                    case truefalseParser.AmpStillImageFilmLink:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 461;
                            this.stillimagefilm_format();
                        }
                        break;
                    case truefalseParser.AmpPdf:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 462;
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
                this.state = 469;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.BitmarkMinus:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 465;
                            this.match(truefalseParser.BitmarkMinus);
                        }
                        break;
                    case truefalseParser.BitmarkPlus:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 466;
                            this.match(truefalseParser.BitmarkPlus);
                        }
                        break;
                    case truefalseParser.ColonText:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 467;
                            this.match(truefalseParser.ColonText);
                        }
                        break;
                    case truefalseParser.EOF:
                        this.enterOuterAlt(_localctx, 4);
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
                this.state = 485;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 471;
                            this.match(truefalseParser.AmpImage);
                            this.state = 474;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.Image_type:
                                    {
                                        {
                                            this.state = 472;
                                            this.match(truefalseParser.Image_type);
                                        }
                                    }
                                    break;
                                case truefalseParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 473;
                                            this.match(truefalseParser.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case truefalseParser.CL:
                                case truefalseParser.AmpAudio:
                                case truefalseParser.AmpImage:
                                case truefalseParser.AmpImageZoom:
                                case truefalseParser.AmpImageWAudio:
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
                                case truefalseParser.AmpAppLink:
                                case truefalseParser.AmpWebsiteLink:
                                case truefalseParser.AmpStillImageFilmLink:
                                case truefalseParser.ColonText:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case truefalseParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 476;
                            this.match(truefalseParser.AmpImageLink);
                            this.state = 478;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.Image_type) {
                                {
                                    this.state = 477;
                                    this.match(truefalseParser.Image_type);
                                }
                            }
                        }
                        break;
                    case truefalseParser.AmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 480;
                            this.match(truefalseParser.AmpImageZoom);
                            this.state = 482;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.Image_type) {
                                {
                                    this.state = 481;
                                    this.match(truefalseParser.Image_type);
                                }
                            }
                        }
                        break;
                    case truefalseParser.AmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 484;
                            this.match(truefalseParser.AmpImageWAudio);
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
                    this.state = 487;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.AmpVideo || _la === truefalseParser.AmpVideoLink)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 490;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.COLON) {
                        {
                            this.state = 488;
                            this.match(truefalseParser.COLON);
                            this.state = 489;
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
                    this.state = 492;
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
                    this.state = 494;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.AmpDocument || _la === truefalseParser.AmpDocumentLink)) {
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
                    this.state = 496;
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
                    this.state = 498;
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
                    this.state = 500;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.AmpStillImageFilm || _la === truefalseParser.AmpStillImageFilmLink)) {
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
                    this.state = 502;
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
                    this.state = 504;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.OpAmpDocument || _la === truefalseParser.OpAmpDocumentLink)) {
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
                    this.state = 506;
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
                    this.state = 508;
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
                this.state = 520;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OpAmpVideo:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 510;
                            this.match(truefalseParser.OpAmpVideo);
                            this.state = 513;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 511;
                                        this.match(truefalseParser.COLON);
                                        this.state = 512;
                                        this.match(truefalseParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case truefalseParser.OpAmpVideoLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 515;
                            this.match(truefalseParser.OpAmpVideoLink);
                            this.state = 518;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 516;
                                        this.match(truefalseParser.COLON);
                                        this.state = 517;
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
                    this.state = 522;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.OpAmpStillImageFilm || _la === truefalseParser.OpAmpStillImageFilmLink)) {
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
                this.state = 530;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OpAmpArticle:
                    case truefalseParser.OpAmpArticleLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 524;
                            this.op_article_format();
                            this.state = 525;
                            this.match(truefalseParser.COLON);
                            this.state = 526;
                            this.url();
                            this.state = 527;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.ArticleText:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 529;
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
                    this.state = 532;
                    this.op_document_format();
                    this.state = 533;
                    this.match(truefalseParser.COLON);
                    this.state = 534;
                    this.url();
                    this.state = 535;
                    this.match(truefalseParser.CL);
                    this.state = 540;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPATALT) {
                        {
                            this.state = 536;
                            this.match(truefalseParser.OPATALT);
                            this.state = 537;
                            this.words();
                            this.state = 538;
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
                    this.state = 542;
                    this.op_website_format();
                    this.state = 543;
                    this.match(truefalseParser.COLON);
                    this.state = 544;
                    this.url();
                    this.state = 545;
                    this.match(truefalseParser.CL);
                    this.state = 550;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPATALT) {
                        {
                            this.state = 546;
                            this.match(truefalseParser.OPATALT);
                            this.state = 547;
                            this.words();
                            this.state = 548;
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
                    this.state = 552;
                    this.op_app_format();
                    this.state = 553;
                    this.match(truefalseParser.COLON);
                    this.state = 556;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case truefalseParser.URL:
                            {
                                this.state = 554;
                                this.url();
                            }
                            break;
                        case truefalseParser.TEL:
                            {
                                this.state = 555;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 558;
                    this.match(truefalseParser.CL);
                    this.state = 563;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPATALT) {
                        {
                            this.state = 559;
                            this.match(truefalseParser.OPATALT);
                            this.state = 560;
                            this.words();
                            this.state = 561;
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
                    this.state = 565;
                    this.stillimg_one();
                    this.state = 569;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 566;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 571;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
                    this.state = 572;
                    this.op_stillimagefilm_format();
                    this.state = 573;
                    this.match(truefalseParser.COLON);
                    this.state = 577;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === truefalseParser.S) {
                        {
                            {
                                this.state = 574;
                                this.match(truefalseParser.S);
                            }
                        }
                        this.state = 579;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 580;
                    this.url();
                    this.state = 581;
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
                    this.state = 583;
                    this.video_one();
                    this.state = 587;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 584;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 589;
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
        video_one() {
            let _localctx = new Video_oneContext(this._ctx, this.state);
            this.enterRule(_localctx, 88, truefalseParser.RULE_video_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 590;
                    this.op_video_format();
                    this.state = 591;
                    this.match(truefalseParser.COLON);
                    this.state = 592;
                    this.url();
                    this.state = 593;
                    this.match(truefalseParser.CL);
                    this.state = 598;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                        case 1:
                            {
                                this.state = 594;
                                this.match(truefalseParser.OPATALT);
                                this.state = 595;
                                this.words();
                                this.state = 596;
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
                    this.state = 600;
                    this.image_one();
                    this.state = 604;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 601;
                                    this.image_chained();
                                }
                            }
                        }
                        this.state = 606;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                    }
                    this.state = 609;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                        case 1:
                            {
                                this.state = 607;
                                this.match(truefalseParser.NL);
                                this.state = 608;
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
                    this.state = 611;
                    this.op_image_format();
                    this.state = 612;
                    this.match(truefalseParser.COLON);
                    this.state = 616;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === truefalseParser.S) {
                        {
                            {
                                this.state = 613;
                                this.match(truefalseParser.S);
                            }
                        }
                        this.state = 618;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 619;
                    this.url();
                    this.state = 620;
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
                this.state = 636;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OpAmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 622;
                            this.match(truefalseParser.OpAmpImage);
                            this.state = 625;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.Image_type:
                                    {
                                        {
                                            this.state = 623;
                                            this.match(truefalseParser.Image_type);
                                        }
                                    }
                                    break;
                                case truefalseParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 624;
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
                            this.state = 627;
                            this.match(truefalseParser.OpAmpImageLink);
                            this.state = 629;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.Image_type) {
                                {
                                    this.state = 628;
                                    this.match(truefalseParser.Image_type);
                                }
                            }
                        }
                        break;
                    case truefalseParser.OpAmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 631;
                            this.match(truefalseParser.OpAmpImageZoom);
                            this.state = 633;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.Image_type) {
                                {
                                    this.state = 632;
                                    this.match(truefalseParser.Image_type);
                                }
                            }
                        }
                        break;
                    case truefalseParser.OpAmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 635;
                            this.match(truefalseParser.OpAmpImageWAudio);
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
                this.state = 655;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 638;
                            this.match(truefalseParser.AtSrc);
                            this.state = 639;
                            this.match(truefalseParser.COLON);
                            this.state = 640;
                            this.url();
                            this.state = 641;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.AtWidth:
                    case truefalseParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 643;
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
                            this.state = 644;
                            this.match(truefalseParser.COLON);
                            this.state = 645;
                            this.match(truefalseParser.NUMERIC);
                            this.state = 646;
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
                            this.state = 647;
                            _la = this._input.LA(1);
                            if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (truefalseParser.OPATALT - 65)) | (1 << (truefalseParser.OpAtCaption - 65)) | (1 << (truefalseParser.OpAtLicense - 65)) | (1 << (truefalseParser.OpAtCopyright - 65)) | (1 << (truefalseParser.OpAtSearch - 65)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 651;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 648;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 653;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                            }
                            this.state = 654;
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
                this.state = 674;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 657;
                            this.match(truefalseParser.AtSrc);
                            this.state = 658;
                            this.match(truefalseParser.COLON);
                            this.state = 659;
                            this.url();
                            this.state = 660;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.AtWidth:
                    case truefalseParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 662;
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
                            this.state = 663;
                            this.match(truefalseParser.COLON);
                            this.state = 664;
                            this.match(truefalseParser.NUMERIC);
                            this.state = 665;
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
                            this.state = 666;
                            _la = this._input.LA(1);
                            if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (truefalseParser.OPATALT - 65)) | (1 << (truefalseParser.OpAtCaption - 65)) | (1 << (truefalseParser.OpAtLicense - 65)) | (1 << (truefalseParser.OpAtCopyright - 65)) | (1 << (truefalseParser.OpAtSearch - 65)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 670;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 667;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 672;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                            }
                            this.state = 673;
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
                    this.state = 676;
                    this.audio_one();
                    this.state = 680;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 677;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 682;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
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
                    this.state = 683;
                    this.op_audio_format();
                    this.state = 684;
                    this.match(truefalseParser.COLON);
                    this.state = 685;
                    this.url();
                    this.state = 686;
                    this.match(truefalseParser.CL);
                    this.state = 691;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                        case 1:
                            {
                                this.state = 687;
                                this.match(truefalseParser.OPATALT);
                                this.state = 688;
                                this.words();
                                this.state = 689;
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
                this.state = 703;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 693;
                            this.match(truefalseParser.AmpAudio);
                            this.state = 696;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.COLON) {
                                {
                                    this.state = 694;
                                    this.match(truefalseParser.COLON);
                                    this.state = 695;
                                    this.match(truefalseParser.Audio_type);
                                }
                            }
                        }
                        break;
                    case truefalseParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 698;
                            this.match(truefalseParser.AmpAudioLink);
                            this.state = 701;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.COLON) {
                                {
                                    this.state = 699;
                                    this.match(truefalseParser.COLON);
                                    this.state = 700;
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
                this.state = 715;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OpAmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 705;
                            this.match(truefalseParser.OpAmpAudio);
                            this.state = 708;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 706;
                                        this.match(truefalseParser.COLON);
                                        this.state = 707;
                                        this.match(truefalseParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case truefalseParser.OpAmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 710;
                            this.match(truefalseParser.OpAmpAudioLink);
                            this.state = 713;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 711;
                                        this.match(truefalseParser.COLON);
                                        this.state = 712;
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
                this.state = 748;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OPA:
                    case truefalseParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 720;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.OPA:
                                    {
                                        this.state = 717;
                                        this.match(truefalseParser.OPA);
                                        this.state = 718;
                                        this.s_and_w();
                                    }
                                    break;
                                case truefalseParser.AtSrc:
                                    {
                                        this.state = 719;
                                        this.match(truefalseParser.AtSrc);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 722;
                            this.match(truefalseParser.COLON);
                            this.state = 726;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 723;
                                            this.match(truefalseParser.S);
                                        }
                                    }
                                }
                                this.state = 728;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                            }
                            this.state = 731;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 731;
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
                                        case truefalseParser.SENTENCE:
                                        case truefalseParser.URL:
                                            {
                                                this.state = 729;
                                                this.s_and_w();
                                            }
                                            break;
                                        case truefalseParser.NL:
                                            {
                                                this.state = 730;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 733;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                            this.state = 735;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.AtWidth:
                    case truefalseParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 736;
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
                            this.state = 737;
                            this.match(truefalseParser.COLON);
                            this.state = 738;
                            this.match(truefalseParser.NUMERIC);
                            this.state = 739;
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
                            this.state = 740;
                            _la = this._input.LA(1);
                            if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (truefalseParser.OPATALT - 65)) | (1 << (truefalseParser.OpAtCaption - 65)) | (1 << (truefalseParser.OpAtLicense - 65)) | (1 << (truefalseParser.OpAtCopyright - 65)) | (1 << (truefalseParser.OpAtSearch - 65)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 744;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 741;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 746;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                            }
                            this.state = 747;
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
                    this.state = 750;
                    this.match(truefalseParser.TEL);
                    this.state = 751;
                    this.match(truefalseParser.PLUS);
                    this.state = 752;
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
                    this.state = 754;
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
                this.state = 786;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 756;
                            this.match(truefalseParser.OPC);
                            this.state = 757;
                            this.match(truefalseParser.CL);
                            this.state = 765;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 761;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.S) {
                                            {
                                                {
                                                    this.state = 758;
                                                    this.match(truefalseParser.S);
                                                }
                                            }
                                            this.state = 763;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 764;
                                        this.lead();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 767;
                            this.match(truefalseParser.OPC);
                            this.state = 768;
                            this.s_and_w();
                            this.state = 773;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (truefalseParser.COLON - 26)) | (1 << (truefalseParser.AMP - 26)) | (1 << (truefalseParser.Greater - 26)) | (1 << (truefalseParser.Less - 26)) | (1 << (truefalseParser.RightAngle - 26)) | (1 << (truefalseParser.RightArrow - 26)) | (1 << (truefalseParser.SENTENCE - 26)))) !== 0)) {
                                {
                                    this.state = 771;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case truefalseParser.COLON:
                                            {
                                                this.state = 769;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case truefalseParser.AMP:
                                        case truefalseParser.Greater:
                                        case truefalseParser.Less:
                                        case truefalseParser.RightAngle:
                                        case truefalseParser.RightArrow:
                                        case truefalseParser.SENTENCE:
                                            {
                                                this.state = 770;
                                                this.words();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 775;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 776;
                            this.match(truefalseParser.CL);
                            this.state = 784;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 780;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.S) {
                                            {
                                                {
                                                    this.state = 777;
                                                    this.match(truefalseParser.S);
                                                }
                                            }
                                            this.state = 782;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 783;
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
            this.enterRule(_localctx, 116, truefalseParser.RULE_lead);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 788;
                    this.match(truefalseParser.OPC);
                    this.state = 789;
                    this.s_and_w();
                    this.state = 794;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (truefalseParser.COLON - 26)) | (1 << (truefalseParser.AMP - 26)) | (1 << (truefalseParser.Greater - 26)) | (1 << (truefalseParser.Less - 26)) | (1 << (truefalseParser.RightAngle - 26)) | (1 << (truefalseParser.RightArrow - 26)) | (1 << (truefalseParser.SENTENCE - 26)))) !== 0)) {
                        {
                            this.state = 792;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.COLON:
                                    {
                                        this.state = 790;
                                        this.match(truefalseParser.COLON);
                                    }
                                    break;
                                case truefalseParser.AMP:
                                case truefalseParser.Greater:
                                case truefalseParser.Less:
                                case truefalseParser.RightAngle:
                                case truefalseParser.RightArrow:
                                case truefalseParser.SENTENCE:
                                    {
                                        this.state = 791;
                                        this.words();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 796;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 797;
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
        angleref() {
            let _localctx = new AnglerefContext(this._ctx, this.state);
            this.enterRule(_localctx, 118, truefalseParser.RULE_angleref);
            let _la;
            try {
                this.state = 809;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 799;
                            this.match(truefalseParser.OPRANGLES);
                            this.state = 801;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 800;
                                    this.s_and_w();
                                }
                            }
                            this.state = 803;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 804;
                            this.match(truefalseParser.OPRANGLEL);
                            this.state = 806;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 805;
                                    this.s_and_w();
                                }
                            }
                            this.state = 808;
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
                this.state = 818;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 811;
                            this.match(truefalseParser.AtExamplecl);
                        }
                        break;
                    case truefalseParser.AtExampleWithStr:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 812;
                            this.match(truefalseParser.AtExampleWithStr);
                        }
                        break;
                    case truefalseParser.AtExamplecol:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 813;
                            this.match(truefalseParser.AtExamplecol);
                            this.state = 815;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.SENTENCE) {
                                {
                                    this.state = 814;
                                    this.match(truefalseParser.SENTENCE);
                                }
                            }
                            this.state = 817;
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
                this.state = 859;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 820;
                            this.match(truefalseParser.BracEnclose);
                            this.state = 822;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 821;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 845;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    {
                                        this.state = 824;
                                        this.s_and_w();
                                        this.state = 834;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 825;
                                                        this.match(truefalseParser.NL);
                                                        this.state = 829;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 826;
                                                                        this.match(truefalseParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 831;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 836;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                                        }
                                        this.state = 840;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.NL) {
                                            {
                                                {
                                                    this.state = 837;
                                                    this.match(truefalseParser.NL);
                                                }
                                            }
                                            this.state = 842;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 847;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 848;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 849;
                            this.match(truefalseParser.BracEnclose);
                            this.state = 855;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 853;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 850;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 851;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 852;
                                                this.match(truefalseParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 857;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 858;
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
                this.state = 883;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 861;
                            this.match(truefalseParser.AtReference);
                            this.state = 866;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 866;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 862;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 863;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 864;
                                                this.match(truefalseParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 865;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 868;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                            this.state = 870;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 871;
                            this.match(truefalseParser.AtReference);
                            this.state = 879;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 877;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 872;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 873;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 874;
                                                this.match(truefalseParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 875;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 876;
                                                this.match(truefalseParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 881;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 882;
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
                    this.state = 885;
                    this.match(truefalseParser.AtProgress);
                    this.state = 886;
                    this.s_and_w();
                    this.state = 887;
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
                    this.state = 889;
                    this.match(truefalseParser.AtDate);
                    this.state = 893;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 893;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 890;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 891;
                                        this.match(truefalseParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 892;
                                        this.match(truefalseParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 895;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                    this.state = 897;
                    this.match(truefalseParser.CL);
                    this.state = 899;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.AtDate) {
                        {
                            this.state = 898;
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
                    this.state = 901;
                    this.match(truefalseParser.AtDate);
                    this.state = 905;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 905;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 902;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 903;
                                        this.match(truefalseParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 904;
                                        this.match(truefalseParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 907;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                    this.state = 909;
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
                this.state = 957;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 911;
                            this.match(truefalseParser.OPB);
                            this.state = 915;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === truefalseParser.NL) {
                                {
                                    {
                                        this.state = 912;
                                        this.match(truefalseParser.NL);
                                    }
                                }
                                this.state = 917;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 919;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 918;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 942;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    {
                                        this.state = 921;
                                        this.s_and_w();
                                        this.state = 931;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 922;
                                                        this.match(truefalseParser.NL);
                                                        this.state = 926;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 923;
                                                                        this.match(truefalseParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 928;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 933;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                                        }
                                        this.state = 937;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.NL) {
                                            {
                                                {
                                                    this.state = 934;
                                                    this.match(truefalseParser.NL);
                                                }
                                            }
                                            this.state = 939;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 944;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 945;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 946;
                            this.match(truefalseParser.OPB);
                            this.state = 950;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === truefalseParser.NL) {
                                {
                                    {
                                        this.state = 947;
                                        this.match(truefalseParser.NL);
                                    }
                                }
                                this.state = 952;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 954;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 953;
                                    this.s_and_w();
                                }
                            }
                            this.state = 956;
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
                    this.state = 959;
                    this.match(truefalseParser.OPQ);
                    this.state = 961;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 960;
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
                        this.state = 963;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.OPDOT) | (1 << truefalseParser.S) | (1 << truefalseParser.BitTruefalse1) | (1 << truefalseParser.BitTruefalse) | (1 << truefalseParser.COMMENT) | (1 << truefalseParser.Image_type) | (1 << truefalseParser.Audio_type) | (1 << truefalseParser.Video_type) | (1 << truefalseParser.OPDOLL) | (1 << truefalseParser.OPBUL) | (1 << truefalseParser.OPESC) | (1 << truefalseParser.OPRANGLES) | (1 << truefalseParser.OPRANGLEL) | (1 << truefalseParser.OPDANGLE) | (1 << truefalseParser.OPU) | (1 << truefalseParser.OPB) | (1 << truefalseParser.OPQ) | (1 << truefalseParser.OPA) | (1 << truefalseParser.OPP) | (1 << truefalseParser.OPM) | (1 << truefalseParser.OPS) | (1 << truefalseParser.OPR) | (1 << truefalseParser.OPC) | (1 << truefalseParser.OPHASH) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.PLUS) | (1 << truefalseParser.DotAt) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.HSPL - 32)) | (1 << (truefalseParser.HSPL2 - 32)) | (1 << (truefalseParser.SSPL - 32)) | (1 << (truefalseParser.SSPL2 - 32)) | (1 << (truefalseParser.DCANY - 32)) | (1 << (truefalseParser.ArticleText - 32)) | (1 << (truefalseParser.NOTCL - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.BARSTRING - 32)) | (1 << (truefalseParser.OPAT - 32)) | (1 << (truefalseParser.AtProgress - 32)) | (1 << (truefalseParser.AtReference - 32)) | (1 << (truefalseParser.AtWidth - 32)) | (1 << (truefalseParser.AtHeight - 32)) | (1 << (truefalseParser.AtProgressPoints - 32)) | (1 << (truefalseParser.AtShortanswer - 32)) | (1 << (truefalseParser.AtLonganswer - 32)) | (1 << (truefalseParser.AtExampleWithStr - 32)) | (1 << (truefalseParser.AtExamplecol - 32)) | (1 << (truefalseParser.AtExamplecl - 32)) | (1 << (truefalseParser.AtPartialAnswerS - 32)) | (1 << (truefalseParser.AtPartialAnswer - 32)) | (1 << (truefalseParser.AtLabeltrue - 32)) | (1 << (truefalseParser.AtLabelfalse - 32)) | (1 << (truefalseParser.AtPoints - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (truefalseParser.AtSrc - 64)) | (1 << (truefalseParser.OPATALT - 64)) | (1 << (truefalseParser.OPAMARK - 64)) | (1 << (truefalseParser.ShowInIndex - 64)) | (1 << (truefalseParser.OpAtCaption - 64)) | (1 << (truefalseParser.OpAtLicense - 64)) | (1 << (truefalseParser.OpAtCopyright - 64)) | (1 << (truefalseParser.OpAtSearch - 64)) | (1 << (truefalseParser.OpAtIsTracked - 64)) | (1 << (truefalseParser.OpAtIsInfoOnly - 64)) | (1 << (truefalseParser.AtDate - 64)) | (1 << (truefalseParser.Http - 64)) | (1 << (truefalseParser.Https - 64)) | (1 << (truefalseParser.AmpAudio - 64)) | (1 << (truefalseParser.AmpImage - 64)) | (1 << (truefalseParser.AmpImageZoom - 64)) | (1 << (truefalseParser.AmpImageWAudio - 64)) | (1 << (truefalseParser.AmpVideo - 64)) | (1 << (truefalseParser.AmpArticle - 64)) | (1 << (truefalseParser.AmpDocument - 64)) | (1 << (truefalseParser.AmpApp - 64)) | (1 << (truefalseParser.AmpWebsite - 64)) | (1 << (truefalseParser.AmpStillImageFilm - 64)) | (1 << (truefalseParser.AmpPdf - 64)) | (1 << (truefalseParser.OpAmpAudio - 64)) | (1 << (truefalseParser.OpAmpImage - 64)) | (1 << (truefalseParser.OpAmpImageZoom - 64)) | (1 << (truefalseParser.OpAmpImageWAudio - 64)) | (1 << (truefalseParser.OpAmpVideo - 64)) | (1 << (truefalseParser.OpAmpArticle - 64)) | (1 << (truefalseParser.OpAmpArticleAtt - 64)) | (1 << (truefalseParser.OpAmpDocument - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (truefalseParser.OpAmpApp - 96)) | (1 << (truefalseParser.OpAmpWebsite - 96)) | (1 << (truefalseParser.OpAmpStillImageFilm - 96)) | (1 << (truefalseParser.BracEnclose - 96)) | (1 << (truefalseParser.AmpAudioLink - 96)) | (1 << (truefalseParser.AmpImageLink - 96)) | (1 << (truefalseParser.AmpVideoLink - 96)) | (1 << (truefalseParser.AmpArticleLink - 96)) | (1 << (truefalseParser.AmpDocumentLink - 96)) | (1 << (truefalseParser.AmpAppLink - 96)) | (1 << (truefalseParser.AmpWebsiteLink - 96)) | (1 << (truefalseParser.AmpStillImageFilmLink - 96)) | (1 << (truefalseParser.OpAmpAudioLink - 96)) | (1 << (truefalseParser.OpAmpImageLink - 96)) | (1 << (truefalseParser.OpAmpVideoLink - 96)) | (1 << (truefalseParser.OpAmpArticleLink - 96)) | (1 << (truefalseParser.OpAmpDocumentLink - 96)) | (1 << (truefalseParser.OpAmpAppLink - 96)) | (1 << (truefalseParser.OpAmpWebsiteLink - 96)) | (1 << (truefalseParser.OpAmpStillImageFilmLink - 96)) | (1 << (truefalseParser.BitmarkMinus - 96)) | (1 << (truefalseParser.BitmarkPlus - 96)) | (1 << (truefalseParser.ColonText - 96)) | (1 << (truefalseParser.Prosemirror - 96)) | (1 << (truefalseParser.Placeholder - 96)) | (1 << (truefalseParser.BASIC - 96)) | (1 << (truefalseParser.JPG - 96)) | (1 << (truefalseParser.PNG - 96)) | (1 << (truefalseParser.GIF - 96)) | (1 << (truefalseParser.SVG - 96)) | (1 << (truefalseParser.MP2 - 96)) | (1 << (truefalseParser.MP3 - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (truefalseParser.MP4 - 128)) | (1 << (truefalseParser.FLV - 128)) | (1 << (truefalseParser.WMV - 128)) | (1 << (truefalseParser.MPEG - 128)) | (1 << (truefalseParser.MPG - 128)) | (1 << (truefalseParser.TEL - 128)) | (1 << (truefalseParser.DotArticleAtt - 128)) | (1 << (truefalseParser.STAR - 128)) | (1 << (truefalseParser.URL - 128)) | (1 << (truefalseParser.LIST_LINE - 128)) | (1 << (truefalseParser.ENCLBARS - 128)))) !== 0));
                    this.state = 965;
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
                this.state = 979;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 967;
                            this.match(truefalseParser.OPHASH);
                            this.state = 970;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 970;
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
                                        case truefalseParser.SENTENCE:
                                        case truefalseParser.URL:
                                            {
                                                this.state = 968;
                                                this.s_and_w();
                                            }
                                            break;
                                        case truefalseParser.NL:
                                            {
                                                this.state = 969;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 972;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                            this.state = 974;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 975;
                            this.match(truefalseParser.OPHASH);
                            this.state = 976;
                            this.s_and_w();
                            this.state = 977;
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
                this.state = 989;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 981;
                            this.match(truefalseParser.AtLabeltrue);
                            this.state = 982;
                            this.s_and_w();
                            this.state = 983;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 985;
                            this.match(truefalseParser.AtLabelfalse);
                            this.state = 986;
                            this.s_and_w();
                            this.state = 987;
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
                this.state = 1000;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 991;
                            this.match(truefalseParser.AtProgressPoints);
                            this.state = 992;
                            this.match(truefalseParser.COLON);
                            this.state = 993;
                            this.match(truefalseParser.NUMERIC);
                            this.state = 994;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 995;
                            this.match(truefalseParser.AtProgressPoints);
                            this.state = 996;
                            this.match(truefalseParser.COLON);
                            this.state = 997;
                            this.s_and_w();
                            this.state = 998;
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
                    this.state = 1002;
                    this.match(truefalseParser.OpAtIsTracked);
                    this.state = 1003;
                    this.s_and_w();
                    this.state = 1004;
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
                    this.state = 1006;
                    this.match(truefalseParser.OpAtIsInfoOnly);
                    this.state = 1007;
                    this.s_and_w();
                    this.state = 1008;
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
                    this.state = 1010;
                    this.atdef_();
                    this.state = 1020;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1014;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === truefalseParser.NL) {
                                        {
                                            {
                                                this.state = 1011;
                                                this.match(truefalseParser.NL);
                                            }
                                        }
                                        this.state = 1016;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1017;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 1022;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
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
                this.state = 1045;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OPA:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1023;
                            this.match(truefalseParser.OPA);
                            this.state = 1024;
                            this.s_and_w();
                            this.state = 1025;
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
                            this.state = 1026;
                            this.s_and_w();
                            this.state = 1032;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 1030;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1027;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1028;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1029;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                                this.state = 1034;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1035;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1037;
                            this.match(truefalseParser.OpAtCopyright);
                            this.state = 1041;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1038;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1043;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                            }
                            this.state = 1044;
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
        dollarans() {
            let _localctx = new DollaransContext(this._ctx, this.state);
            this.enterRule(_localctx, 150, truefalseParser.RULE_dollarans);
            let _la;
            try {
                this.state = 1066;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 149, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1047;
                            this.match(truefalseParser.OPDOLL);
                            this.state = 1051;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1051;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1048;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1049;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1050;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1053;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                            this.state = 1055;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1056;
                            this.match(truefalseParser.OPDOLL);
                            this.state = 1062;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 1060;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1057;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1058;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1059;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1064;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1065;
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
                    this.state = 1068;
                    this.match(truefalseParser.OPDANGLE);
                    this.state = 1070;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                        {
                            this.state = 1069;
                            this.s_and_w();
                        }
                    }
                    this.state = 1072;
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
                    this.state = 1078;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1074;
                                this.s_and_w();
                                this.state = 1076;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === truefalseParser.NL) {
                                    {
                                        this.state = 1075;
                                        this.match(truefalseParser.NL);
                                    }
                                }
                            }
                        }
                        this.state = 1080;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
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
                this.state = 1128;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1082;
                            this.match(truefalseParser.STRING);
                            this.state = 1089;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1084;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1083;
                                                    this.match(truefalseParser.S);
                                                }
                                            }
                                            this.state = 1086;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === truefalseParser.S);
                                        this.state = 1088;
                                        this.match(truefalseParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1091;
                            this.words();
                            this.state = 1098;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1093;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1092;
                                                    this.match(truefalseParser.S);
                                                }
                                            }
                                            this.state = 1095;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === truefalseParser.S);
                                        this.state = 1097;
                                        this.match(truefalseParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1100;
                            this.match(truefalseParser.OPS);
                            this.state = 1101;
                            this.s_and_w();
                            this.state = 1102;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1104;
                            this.match(truefalseParser.NUMERIC);
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 1108;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === truefalseParser.S) {
                                {
                                    {
                                        this.state = 1105;
                                        this.match(truefalseParser.S);
                                    }
                                }
                                this.state = 1110;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1111;
                            this.match(truefalseParser.COLON);
                            this.state = 1115;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1112;
                                            this.match(truefalseParser.S);
                                        }
                                    }
                                }
                                this.state = 1117;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                            }
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 1118;
                            this.match(truefalseParser.AMP);
                            this.state = 1122;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1119;
                                            this.match(truefalseParser.S);
                                        }
                                    }
                                }
                                this.state = 1124;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1125;
                            this.match(truefalseParser.DBLCOLON);
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 1126;
                            this.match(truefalseParser.DBLEQ);
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 1127;
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
                    this.state = 1130;
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
        bracket_escaped() {
            let _localctx = new Bracket_escapedContext(this._ctx, this.state);
            this.enterRule(_localctx, 160, truefalseParser.RULE_bracket_escaped);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1132;
                    this.match(truefalseParser.OPESC);
                    this.state = 1133;
                    this.s_and_w();
                    this.state = 1134;
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
        clnsp() {
            let _localctx = new ClnspContext(this._ctx, this.state);
            this.enterRule(_localctx, 162, truefalseParser.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1136;
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
            this.enterRule(_localctx, 164, truefalseParser.RULE_sspl);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1138;
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
            this.enterRule(_localctx, 166, truefalseParser.RULE_words);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1148;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1148;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case truefalseParser.SENTENCE:
                                            {
                                                this.state = 1140;
                                                this.match(truefalseParser.SENTENCE);
                                            }
                                            break;
                                        case truefalseParser.AMP:
                                            {
                                                this.state = 1141;
                                                this.match(truefalseParser.AMP);
                                            }
                                            break;
                                        case truefalseParser.Greater:
                                            {
                                                this.state = 1142;
                                                this.match(truefalseParser.Greater);
                                                this.state = 1143;
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
                                                this.state = 1144;
                                                this.match(truefalseParser.Less);
                                                this.state = 1145;
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
                                                this.state = 1146;
                                                this.match(truefalseParser.RightArrow);
                                            }
                                            break;
                                        case truefalseParser.RightAngle:
                                            {
                                                this.state = 1147;
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
                        this.state = 1150;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
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
            this.enterRule(_localctx, 168, truefalseParser.RULE_sp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1152;
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
    truefalseParser.OPDOT = 1;
    truefalseParser.S = 2;
    truefalseParser.BitTruefalse1 = 3;
    truefalseParser.BitTruefalse = 4;
    truefalseParser.COMMENT = 5;
    truefalseParser.Image_type = 6;
    truefalseParser.Audio_type = 7;
    truefalseParser.Video_type = 8;
    truefalseParser.OPDOLL = 9;
    truefalseParser.OPBUL = 10;
    truefalseParser.OPESC = 11;
    truefalseParser.OPRANGLES = 12;
    truefalseParser.OPRANGLEL = 13;
    truefalseParser.OPDANGLE = 14;
    truefalseParser.OPU = 15;
    truefalseParser.OPB = 16;
    truefalseParser.OPQ = 17;
    truefalseParser.OPA = 18;
    truefalseParser.OPP = 19;
    truefalseParser.OPM = 20;
    truefalseParser.OPS = 21;
    truefalseParser.OPR = 22;
    truefalseParser.OPC = 23;
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
    truefalseParser.DCANY = 40;
    truefalseParser.ArticleText = 41;
    truefalseParser.NOTCL = 42;
    truefalseParser.NUMERIC = 43;
    truefalseParser.STRING = 44;
    truefalseParser.NL = 45;
    truefalseParser.SENTENCE = 46;
    truefalseParser.BARSTRING = 47;
    truefalseParser.OPAT = 48;
    truefalseParser.AtProgress = 49;
    truefalseParser.AtReference = 50;
    truefalseParser.AtWidth = 51;
    truefalseParser.AtHeight = 52;
    truefalseParser.AtProgressPoints = 53;
    truefalseParser.AtShortanswer = 54;
    truefalseParser.AtLonganswer = 55;
    truefalseParser.AtExampleWithStr = 56;
    truefalseParser.AtExamplecol = 57;
    truefalseParser.AtExamplecl = 58;
    truefalseParser.AtPartialAnswerS = 59;
    truefalseParser.AtPartialAnswer = 60;
    truefalseParser.AtLabeltrue = 61;
    truefalseParser.AtLabelfalse = 62;
    truefalseParser.AtPoints = 63;
    truefalseParser.AtSrc = 64;
    truefalseParser.OPATALT = 65;
    truefalseParser.OPAMARK = 66;
    truefalseParser.ShowInIndex = 67;
    truefalseParser.OpAtCaption = 68;
    truefalseParser.OpAtLicense = 69;
    truefalseParser.OpAtCopyright = 70;
    truefalseParser.OpAtSearch = 71;
    truefalseParser.OpAtIsTracked = 72;
    truefalseParser.OpAtIsInfoOnly = 73;
    truefalseParser.AtDate = 74;
    truefalseParser.Http = 75;
    truefalseParser.Https = 76;
    truefalseParser.AmpAudio = 77;
    truefalseParser.AmpImage = 78;
    truefalseParser.AmpImageZoom = 79;
    truefalseParser.AmpImageWAudio = 80;
    truefalseParser.AmpVideo = 81;
    truefalseParser.AmpArticle = 82;
    truefalseParser.AmpDocument = 83;
    truefalseParser.AmpApp = 84;
    truefalseParser.AmpWebsite = 85;
    truefalseParser.AmpStillImageFilm = 86;
    truefalseParser.AmpPdf = 87;
    truefalseParser.OpAmpAudio = 88;
    truefalseParser.OpAmpImage = 89;
    truefalseParser.OpAmpImageZoom = 90;
    truefalseParser.OpAmpImageWAudio = 91;
    truefalseParser.OpAmpVideo = 92;
    truefalseParser.OpAmpArticle = 93;
    truefalseParser.OpAmpArticleAtt = 94;
    truefalseParser.OpAmpDocument = 95;
    truefalseParser.OpAmpApp = 96;
    truefalseParser.OpAmpWebsite = 97;
    truefalseParser.OpAmpStillImageFilm = 98;
    truefalseParser.BracEnclose = 99;
    truefalseParser.AmpAudioLink = 100;
    truefalseParser.AmpImageLink = 101;
    truefalseParser.AmpVideoLink = 102;
    truefalseParser.AmpArticleLink = 103;
    truefalseParser.AmpDocumentLink = 104;
    truefalseParser.AmpAppLink = 105;
    truefalseParser.AmpWebsiteLink = 106;
    truefalseParser.AmpStillImageFilmLink = 107;
    truefalseParser.OpAmpAudioLink = 108;
    truefalseParser.OpAmpImageLink = 109;
    truefalseParser.OpAmpVideoLink = 110;
    truefalseParser.OpAmpArticleLink = 111;
    truefalseParser.OpAmpDocumentLink = 112;
    truefalseParser.OpAmpAppLink = 113;
    truefalseParser.OpAmpWebsiteLink = 114;
    truefalseParser.OpAmpStillImageFilmLink = 115;
    truefalseParser.BitmarkMinus = 116;
    truefalseParser.BitmarkPlus = 117;
    truefalseParser.ColonText = 118;
    truefalseParser.Prosemirror = 119;
    truefalseParser.Placeholder = 120;
    truefalseParser.BASIC = 121;
    truefalseParser.JPG = 122;
    truefalseParser.PNG = 123;
    truefalseParser.GIF = 124;
    truefalseParser.SVG = 125;
    truefalseParser.MP2 = 126;
    truefalseParser.MP3 = 127;
    truefalseParser.MP4 = 128;
    truefalseParser.FLV = 129;
    truefalseParser.WMV = 130;
    truefalseParser.MPEG = 131;
    truefalseParser.MPG = 132;
    truefalseParser.TEL = 133;
    truefalseParser.DotArticleAtt = 134;
    truefalseParser.STAR = 135;
    truefalseParser.URL = 136;
    truefalseParser.LIST_LINE = 137;
    truefalseParser.ENCLBARS = 138;
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
    truefalseParser.RULE_bracket_escaped = 80;
    truefalseParser.RULE_clnsp = 81;
    truefalseParser.RULE_sspl = 82;
    truefalseParser.RULE_words = 83;
    truefalseParser.RULE_sp = 84;
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
        "s_and_w", "dclines", "bracket_escaped", "clnsp", "sspl", "words", "sp",
    ];
    truefalseParser._LITERAL_NAMES = [
        undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'[^'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'[#'", "']'", "':'", "'&'", "'::'",
        "'+'", "'.@'", "'>'", "'<'", "'=='", "'\u25BA'", "'\u2192'", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'[@'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'http://'", "'https://'", "'&audio'",
        "'&image'", "'&image-zoom'", "'&imageWithAudio'", "'&video'", "'&article'",
        "'&document'", "'&app'", "'&website'", "'&stillImageFilm'", "'&pdf'",
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "'&audioLink'",
        "'&imageLink'", "'&videoLink'", "'&articleLink'", "'&documentLink'", "'&appLink'",
        "'&websiteLink'", "'&stillImageFilmLink'", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "':bitmark--'",
        "':bitmark++'", "':text'", "':prosemirror'", "':placeholder'", "':basic'",
        "':jpg'", "':png'", "':gif'", "':svg'", "':mp2'", "':mp3'", "':mp4'",
        "':flv'", "':wmv'", "':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'",
        "'*'",
    ];
    truefalseParser._SYMBOLIC_NAMES = [
        undefined, "OPDOT", "S", "BitTruefalse1", "BitTruefalse", "COMMENT", "Image_type",
        "Audio_type", "Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL",
        "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC",
        "OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater",
        "Less", "DBLEQ", "RightAngle", "RightArrow", "HSPL", "HSPL2", "SSPL",
        "SSPL2", "DCANY", "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", "SENTENCE",
        "BARSTRING", "OPAT", "AtProgress", "AtReference", "AtWidth", "AtHeight",
        "AtProgressPoints", "AtShortanswer", "AtLonganswer", "AtExampleWithStr",
        "AtExamplecol", "AtExamplecl", "AtPartialAnswerS", "AtPartialAnswer",
        "AtLabeltrue", "AtLabelfalse", "AtPoints", "AtSrc", "OPATALT", "OPAMARK",
        "ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright", "OpAtSearch",
        "OpAtIsTracked", "OpAtIsInfoOnly", "AtDate", "Http", "Https", "AmpAudio",
        "AmpImage", "AmpImageZoom", "AmpImageWAudio", "AmpVideo", "AmpArticle",
        "AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm", "AmpPdf",
        "OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", "OpAmpImageWAudio", "OpAmpVideo",
        "OpAmpArticle", "OpAmpArticleAtt", "OpAmpDocument", "OpAmpApp", "OpAmpWebsite",
        "OpAmpStillImageFilm", "BracEnclose", "AmpAudioLink", "AmpImageLink",
        "AmpVideoLink", "AmpArticleLink", "AmpDocumentLink", "AmpAppLink", "AmpWebsiteLink",
        "AmpStillImageFilmLink", "OpAmpAudioLink", "OpAmpImageLink", "OpAmpVideoLink",
        "OpAmpArticleLink", "OpAmpDocumentLink", "OpAmpAppLink", "OpAmpWebsiteLink",
        "OpAmpStillImageFilmLink", "BitmarkMinus", "BitmarkPlus", "ColonText",
        "Prosemirror", "Placeholder", "BASIC", "JPG", "PNG", "GIF", "SVG", "MP2",
        "MP3", "MP4", "FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt", "STAR",
        "URL", "LIST_LINE", "ENCLBARS",
    ];
    truefalseParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(truefalseParser._LITERAL_NAMES, truefalseParser._SYMBOLIC_NAMES, []);
    truefalseParser._serializedATNSegments = 3;
    truefalseParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x8C\u0485\x04" +
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
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x03\x02\x03" +
        "\x02\x07\x02\xAF\n\x02\f\x02\x0E\x02\xB2\v\x02\x03\x02\x07\x02\xB5\n\x02" +
        "\f\x02\x0E\x02\xB8\v\x02\x06\x02\xBA\n\x02\r\x02\x0E\x02\xBB\x03\x02\x07" +
        "\x02\xBF\n\x02\f\x02\x0E\x02\xC2\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
        "\x03\x04\x03\x04\x05\x04\xCA\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x06" +
        "\x05\xD0\n\x05\r\x05\x0E\x05\xD1\x03\x05\x03\x05\x07\x05\xD6\n\x05\f\x05" +
        "\x0E\x05\xD9\v\x05\x07\x05\xDB\n\x05\f\x05\x0E\x05\xDE\v\x05\x03\x05\x03" +
        "\x05\x07\x05\xE2\n\x05\f\x05\x0E\x05\xE5\v\x05\x03\x05\x03\x05\x07\x05" +
        "\xE9\n\x05\f\x05\x0E\x05\xEC\v\x05\x03\x05\x07\x05\xEF\n\x05\f\x05\x0E" +
        "\x05\xF2\v\x05\x05\x05\xF4\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
        "\xFA\n\x06\f\x06\x0E\x06\xFD\v\x06\x03\x06\x03\x06\x07\x06\u0101\n\x06" +
        "\f\x06\x0E\x06\u0104\v\x06\x07\x06\u0106\n\x06\f\x06\x0E\x06\u0109\v\x06" +
        "\x03\x06\x05\x06\u010C\n\x06\x03\x06\x07\x06\u010F\n\x06\f\x06\x0E\x06" +
        "\u0112\v\x06\x03\x06\x06\x06\u0115\n\x06\r\x06\x0E\x06\u0116\x03\x06\x03" +
        "\x06\x07\x06\u011B\n\x06\f\x06\x0E\x06\u011E\v\x06\x03\x06\x03\x06\x07" +
        "\x06\u0122\n\x06\f\x06\x0E\x06\u0125\v\x06\x03\x06\x07\x06\u0128\n\x06" +
        "\f\x06\x0E\x06\u012B\v\x06\x05\x06\u012D\n\x06\x03\x07\x03\x07\x03\b\x03" +
        "\b\x03\t\x03\t\x07\t\u0135\n\t\f\t\x0E\t\u0138\v\t\x03\n\x03\n\x05\n\u013C" +
        "\n\n\x03\n\x05\n\u013F\n\n\x03\n\x07\n\u0142\n\n\f\n\x0E\n\u0145\v\n\x03" +
        "\n\x03\n\x05\n\u0149\n\n\x07\n\u014B\n\n\f\n\x0E\n\u014E\v\n\x03\v\x03" +
        "\v\x05\v\u0152\n\v\x03\f\x03\f\x05\f\u0156\n\f\x03\r\x05\r\u0159\n\r\x03" +
        "\r\x03\r\x03\r\x06\r\u015E\n\r\r\r\x0E\r\u015F\x03\r\x03\r\x03\x0E\x05" +
        "\x0E\u0165\n\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\u016A\n\x0E\r\x0E\x0E" +
        "\x0E\u016B\x03\x0E\x03\x0E\x03\x0F\x05\x0F\u0171\n\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x06\x0F\u0176\n\x0F\r\x0F\x0E\x0F\u0177\x03\x0F\x03\x0F\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0193\n\x10\x03\x11\x03\x11\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u019D\n\x12\f\x12" +
        "\x0E\x12\u01A0\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01A6\n\x13" +
        "\x03\x13\x07\x13\u01A9\n\x13\f\x13\x0E\x13\u01AC\v\x13\x03\x13\x03\x13" +
        "\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u01B4\n\x14\x03\x15\x03\x15\x03" +
        "\x15\x03\x15\x03\x16\x07\x16\u01BB\n\x16\f\x16\x0E\x16\u01BE\v\x16\x03" +
        "\x16\x03\x16\x07\x16\u01C2\n\x16\f\x16\x0E\x16\u01C5\v\x16\x03\x17\x03" +
        "\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
        "\x18\x05\x18\u01D2\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01D8" +
        "\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01DD\n\x1A\x03\x1A\x03\x1A\x05" +
        "\x1A\u01E1\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01E5\n\x1A\x03\x1A\x05\x1A\u01E8" +
        "\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01ED\n\x1B\x03\x1C\x03\x1C\x03" +
        "\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"" +
        "\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x05%\u0204\n%\x03%\x03%\x03" +
        "%\x05%\u0209\n%\x05%\u020B\n%\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'" +
        "\x03\'\x05\'\u0215\n\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u021F" +
        "\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0229\n)\x03*\x03*\x03" +
        "*\x03*\x05*\u022F\n*\x03*\x03*\x03*\x03*\x03*\x05*\u0236\n*\x03+\x03+" +
        "\x07+\u023A\n+\f+\x0E+\u023D\v+\x03,\x03,\x03,\x07,\u0242\n,\f,\x0E,\u0245" +
        "\v,\x03,\x03,\x03,\x03-\x03-\x07-\u024C\n-\f-\x0E-\u024F\v-\x03.\x03." +
        "\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u0259\n.\x03/\x03/\x07/\u025D\n/\f" +
        "/\x0E/\u0260\v/\x03/\x03/\x05/\u0264\n/\x030\x030\x030\x070\u0269\n0\f" +
        "0\x0E0\u026C\v0\x030\x030\x030\x031\x031\x031\x051\u0274\n1\x031\x031" +
        "\x051\u0278\n1\x031\x031\x051\u027C\n1\x031\x051\u027F\n1\x032\x032\x03" +
        "2\x032\x032\x032\x032\x032\x032\x032\x032\x072\u028C\n2\f2\x0E2\u028F" +
        "\v2\x032\x052\u0292\n2\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
        "3\x033\x073\u029F\n3\f3\x0E3\u02A2\v3\x033\x053\u02A5\n3\x034\x034\x07" +
        "4\u02A9\n4\f4\x0E4\u02AC\v4\x035\x035\x035\x035\x035\x035\x035\x035\x05" +
        "5\u02B6\n5\x036\x036\x036\x056\u02BB\n6\x036\x036\x036\x056\u02C0\n6\x05" +
        "6\u02C2\n6\x037\x037\x037\x057\u02C7\n7\x037\x037\x037\x057\u02CC\n7\x05" +
        "7\u02CE\n7\x038\x038\x038\x058\u02D3\n8\x038\x038\x078\u02D7\n8\f8\x0E" +
        "8\u02DA\v8\x038\x038\x068\u02DE\n8\r8\x0E8\u02DF\x038\x038\x038\x038\x03" +
        "8\x038\x038\x078\u02E9\n8\f8\x0E8\u02EC\v8\x038\x058\u02EF\n8\x039\x03" +
        "9\x039\x039\x03:\x03:\x03;\x03;\x03;\x07;\u02FA\n;\f;\x0E;\u02FD\v;\x03" +
        ";\x05;\u0300\n;\x03;\x03;\x03;\x03;\x07;\u0306\n;\f;\x0E;\u0309\v;\x03" +
        ";\x03;\x07;\u030D\n;\f;\x0E;\u0310\v;\x03;\x05;\u0313\n;\x05;\u0315\n" +
        ";\x03<\x03<\x03<\x03<\x07<\u031B\n<\f<\x0E<\u031E\v<\x03<\x03<\x03=\x03" +
        "=\x05=\u0324\n=\x03=\x03=\x03=\x05=\u0329\n=\x03=\x05=\u032C\n=\x03>\x03" +
        ">\x03>\x03>\x05>\u0332\n>\x03>\x05>\u0335\n>\x03?\x03?\x05?\u0339\n?\x03" +
        "?\x03?\x03?\x07?\u033E\n?\f?\x0E?\u0341\v?\x07?\u0343\n?\f?\x0E?\u0346" +
        "\v?\x03?\x07?\u0349\n?\f?\x0E?\u034C\v?\x07?\u034E\n?\f?\x0E?\u0351\v" +
        "?\x03?\x03?\x03?\x03?\x03?\x07?\u0358\n?\f?\x0E?\u035B\v?\x03?\x05?\u035E" +
        "\n?\x03@\x03@\x03@\x03@\x03@\x06@\u0365\n@\r@\x0E@\u0366\x03@\x03@\x03" +
        "@\x03@\x03@\x03@\x03@\x07@\u0370\n@\f@\x0E@\u0373\v@\x03@\x05@\u0376\n" +
        "@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x06B\u0380\nB\rB\x0EB\u0381" +
        "\x03B\x03B\x05B\u0386\nB\x03C\x03C\x03C\x03C\x06C\u038C\nC\rC\x0EC\u038D" +
        "\x03C\x03C\x03D\x03D\x07D\u0394\nD\fD\x0ED\u0397\vD\x03D\x05D\u039A\n" +
        "D\x03D\x03D\x03D\x07D\u039F\nD\fD\x0ED\u03A2\vD\x07D\u03A4\nD\fD\x0ED" +
        "\u03A7\vD\x03D\x07D\u03AA\nD\fD\x0ED\u03AD\vD\x07D\u03AF\nD\fD\x0ED\u03B2" +
        "\vD\x03D\x03D\x03D\x07D\u03B7\nD\fD\x0ED\u03BA\vD\x03D\x05D\u03BD\nD\x03" +
        "D\x05D\u03C0\nD\x03E\x03E\x06E\u03C4\nE\rE\x0EE\u03C5\x03E\x03E\x03F\x03" +
        "F\x03F\x06F\u03CD\nF\rF\x0EF\u03CE\x03F\x03F\x03F\x03F\x03F\x05F\u03D6" +
        "\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u03E0\nG\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u03EB\nH\x03I\x03I\x03I\x03I\x03" +
        "J\x03J\x03J\x03J\x03K\x03K\x07K\u03F7\nK\fK\x0EK\u03FA\vK\x03K\x07K\u03FD" +
        "\nK\fK\x0EK\u0400\vK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x07L\u0409\nL" +
        "\fL\x0EL\u040C\vL\x03L\x03L\x03L\x03L\x07L\u0412\nL\fL\x0EL\u0415\vL\x03" +
        "L\x05L\u0418\nL\x03M\x03M\x03M\x03M\x06M\u041E\nM\rM\x0EM\u041F\x03M\x03" +
        "M\x03M\x03M\x03M\x07M\u0427\nM\fM\x0EM\u042A\vM\x03M\x05M\u042D\nM\x03" +
        "N\x03N\x05N\u0431\nN\x03N\x03N\x03O\x03O\x05O\u0437\nO\x06O\u0439\nO\r" +
        "O\x0EO\u043A\x03P\x03P\x06P\u043F\nP\rP\x0EP\u0440\x03P\x05P\u0444\nP" +
        "\x03P\x03P\x06P\u0448\nP\rP\x0EP\u0449\x03P\x05P\u044D\nP\x03P\x03P\x03" +
        "P\x03P\x03P\x03P\x07P\u0455\nP\fP\x0EP\u0458\vP\x03P\x03P\x07P\u045C\n" +
        "P\fP\x0EP\u045F\vP\x03P\x03P\x07P\u0463\nP\fP\x0EP\u0466\vP\x03P\x03P" +
        "\x03P\x05P\u046B\nP\x03Q\x03Q\x03R\x03R\x03R\x03R\x03S\x03S\x03T\x03T" +
        "\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x06U\u047F\nU\rU\x0EU\u0480\x03" +
        "V\x03V\x03V\x06\u028D\u02A0\u02EA\u0413\x02\x02W\x02\x02\x04\x02\x06\x02" +
        "\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
        "\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
        "4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
        "P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02" +
        "l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84" +
        "\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96" +
        "\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8" +
        "\x02\xAA\x02\x02\x16\x03\x02&\'\x07\x02TUWXfmvwyz\x04\x02SShh\x04\x02" +
        "TTii\x04\x02UUjj\x04\x02VVkk\x04\x02WWll\x04\x02XXmm\x04\x02__qq\x04\x02" +
        "aarr\x04\x02bbss\x04\x02cctt\x04\x02dduu\x03\x0256\x04\x02CCFI\x03\x02" +
        "\x1B\x1B\x04\x02\x1C\x1C\x1E\x1E\x03\x02()\x03\x02!!\x03\x02\"\"\x02\u0514" +
        "\x02\xB9\x03\x02\x02\x02\x04\xC5\x03\x02\x02\x02\x06\xC9\x03\x02\x02\x02" +
        "\b\xCB\x03\x02\x02\x02\n\xF5\x03\x02\x02\x02\f\u012E\x03\x02\x02\x02\x0E" +
        "\u0130\x03\x02\x02\x02\x10\u0132\x03\x02\x02\x02\x12\u013B\x03\x02\x02" +
        "\x02\x14\u014F\x03\x02\x02\x02\x16\u0153\x03\x02\x02\x02\x18\u0158\x03" +
        "\x02\x02\x02\x1A\u0164\x03\x02\x02\x02\x1C\u0170\x03\x02\x02\x02\x1E\u0192" +
        "\x03\x02\x02\x02 \u0194\x03\x02\x02\x02\"\u0196\x03\x02\x02\x02$\u01A1" +
        "\x03\x02\x02\x02&\u01AF\x03\x02\x02\x02(\u01B5\x03\x02\x02\x02*\u01BC" +
        "\x03\x02\x02\x02,\u01C6\x03\x02\x02\x02.\u01D1\x03\x02\x02\x020\u01D7" +
        "\x03\x02\x02\x022\u01E7\x03\x02\x02\x024\u01E9\x03\x02\x02\x026\u01EE" +
        "\x03\x02\x02\x028\u01F0\x03\x02\x02\x02:\u01F2\x03\x02\x02\x02<\u01F4" +
        "\x03\x02\x02\x02>\u01F6\x03\x02\x02\x02@\u01F8\x03\x02\x02\x02B\u01FA" +
        "\x03\x02\x02\x02D\u01FC\x03\x02\x02\x02F\u01FE\x03\x02\x02\x02H\u020A" +
        "\x03\x02\x02\x02J\u020C\x03\x02\x02\x02L\u0214\x03\x02\x02\x02N\u0216" +
        "\x03\x02\x02\x02P\u0220\x03\x02\x02\x02R\u022A\x03\x02\x02\x02T\u0237" +
        "\x03\x02\x02\x02V\u023E\x03\x02\x02\x02X\u0249\x03\x02\x02\x02Z\u0250" +
        "\x03\x02\x02\x02\\\u025A\x03\x02\x02\x02^\u0265\x03\x02\x02\x02`\u027E" +
        "\x03\x02\x02\x02b\u0291\x03\x02\x02\x02d\u02A4\x03\x02\x02\x02f\u02A6" +
        "\x03\x02\x02\x02h\u02AD\x03\x02\x02\x02j\u02C1\x03\x02\x02\x02l\u02CD" +
        "\x03\x02\x02\x02n\u02EE\x03\x02\x02\x02p\u02F0\x03\x02\x02\x02r\u02F4" +
        "\x03\x02\x02\x02t\u0314\x03\x02\x02\x02v\u0316\x03\x02\x02\x02x\u032B" +
        "\x03\x02\x02\x02z\u0334\x03\x02\x02\x02|\u035D\x03\x02\x02\x02~\u0375" +
        "\x03\x02\x02\x02\x80\u0377\x03\x02\x02\x02\x82\u037B\x03\x02\x02\x02\x84" +
        "\u0387\x03\x02\x02\x02\x86\u03BF\x03\x02\x02\x02\x88\u03C1\x03\x02\x02" +
        "\x02\x8A\u03D5\x03\x02\x02\x02\x8C\u03DF\x03\x02\x02\x02\x8E\u03EA\x03" +
        "\x02\x02\x02\x90\u03EC\x03\x02\x02\x02\x92\u03F0\x03\x02\x02\x02\x94\u03F4" +
        "\x03\x02\x02\x02\x96\u0417\x03\x02\x02\x02\x98\u042C\x03\x02\x02\x02\x9A" +
        "\u042E\x03\x02\x02\x02\x9C\u0438\x03\x02\x02\x02\x9E\u046A\x03\x02\x02" +
        "\x02\xA0\u046C\x03\x02\x02\x02\xA2\u046E\x03\x02\x02\x02\xA4\u0472\x03" +
        "\x02\x02\x02\xA6\u0474\x03\x02\x02\x02\xA8\u047E\x03\x02\x02\x02\xAA\u0482" +
        "\x03\x02\x02\x02\xAC\xB6\x05\x04\x03\x02\xAD\xAF\x07\x04\x02\x02\xAE\xAD" +
        "\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1" +
        "\x03\x02\x02\x02\xB1\xB3\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB5" +
        "\x07/\x02\x02\xB4\xB0\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4" +
        "\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6" +
        "\x03\x02\x02\x02\xB9\xAC\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xB9" +
        "\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xC0\x03\x02\x02\x02\xBD\xBF" +
        "\x07/\x02\x02\xBE\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE" +
        "\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xC0" +
        "\x03\x02\x02\x02\xC3\xC4\x07\x02\x02\x03\xC4\x03\x03\x02\x02\x02\xC5\xC6" +
        "\x05\x06\x04\x02\xC6\x05\x03\x02\x02\x02\xC7\xCA\x05\b\x05\x02\xC8\xCA" +
        "\x05\n\x06\x02\xC9\xC7\x03\x02\x02\x02\xC9\xC8\x03\x02\x02\x02\xCA\x07" +
        "\x03\x02\x02\x02\xCB\xCC\x07\x05\x02\x02\xCC\xCD\x05*\x16\x02\xCD\xCF" +
        "\x07\x1B\x02\x02\xCE\xD0\x07/\x02\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD1" +
        "\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xDC" +
        "\x03\x02\x02\x02\xD3\xD7\x05\x1E\x10\x02\xD4\xD6\x07/\x02\x02\xD5\xD4" +
        "\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8" +
        "\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xD3" +
        "\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD" +
        "\x03\x02\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE3" +
        "\x05\x12\n\x02\xE0\xE2\x07/\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE5\x03" +
        "\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xF3\x03" +
        "\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xF0\x05 \x11\x02\xE7\xE9\x07" +
        "/\x02\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03" +
        "\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xEA\x03" +
        "\x02\x02\x02\xED\xEF\x05 \x11\x02\xEE\xEA\x03\x02\x02\x02\xEF\xF2\x03" +
        "\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF4\x03" +
        "\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF3\xE6\x03\x02\x02\x02\xF3\xF4\x03" +
        "\x02\x02\x02\xF4\t\x03\x02\x02\x02\xF5\xF6\x07\x06\x02\x02\xF6\xF7\x05" +
        "*\x16\x02\xF7\xFB\x07\x1B\x02\x02\xF8\xFA\x07/\x02\x02\xF9\xF8\x03\x02" +
        "\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02" +
        "\x02\x02\xFC\u0107\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0102\x05" +
        "\x1E\x10\x02\xFF\u0101\x07/\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101\u0104" +
        "\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02" +
        "\u0103\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105\xFE\x03" +
        "\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107" +
        "\u0108\x03\x02\x02\x02\u0108\u0114\x03\x02\x02\x02\u0109\u0107\x03\x02" +
        "\x02\x02\u010A\u010C\x05\f\x07\x02\u010B\u010A\x03\x02\x02\x02\u010B\u010C" +
        "\x03\x02\x02\x02\u010C\u0110\x03\x02\x02\x02\u010D\u010F\x05\x10\t\x02" +
        "\u010E\u010D\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03" +
        "\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0113\x03\x02\x02\x02\u0112" +
        "\u0110\x03\x02\x02\x02\u0113\u0115\x05\x12\n\x02\u0114\u010B\x03\x02\x02" +
        "\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117" +
        "\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u011C\x05\x0E\b\x02" +
        "\u0119\u011B\x07/\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B\u011E\x03" +
        "\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D" +
        "\u012C\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0129\x05 \x11" +
        "\x02\u0120\u0122\x07/\x02\x02\u0121\u0120\x03\x02\x02\x02\u0122\u0125" +
        "\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02" +
        "\u0124\u0126\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0128\x05" +
        " \x11\x02\u0127\u0123\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129" +
        "\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012D\x03\x02" +
        "\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u011F\x03\x02\x02\x02\u012C" +
        "\u012D\x03\x02\x02\x02\u012D\v\x03\x02\x02\x02\u012E\u012F\t\x02\x02\x02" +
        "\u012F\r\x03\x02\x02\x02\u0130\u0131\t\x02\x02\x02\u0131\x0F\x03\x02\x02" +
        "\x02\u0132\u0136\x05\x1E\x10\x02\u0133\u0135\x07/\x02\x02\u0134\u0133" +
        "\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02" +
        "\u0136\u0137\x03\x02\x02\x02\u0137\x11\x03\x02\x02\x02\u0138\u0136\x03" +
        "\x02\x02\x02\u0139\u013C\x05\x14\v\x02\u013A\u013C\x05\x16\f\x02\u013B" +
        "\u0139\x03\x02\x02\x02\u013B\u013A\x03\x02\x02\x02\u013C\u014C\x03\x02" +
        "\x02\x02\u013D\u013F\x07/\x02\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F" +
        "\x03\x02\x02\x02\u013F\u0143\x03\x02\x02\x02\u0140\u0142\x07\x04\x02\x02" +
        "\u0141\u0140\x03\x02\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0141\x03" +
        "\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0148\x03\x02\x02\x02\u0145" +
        "\u0143\x03\x02\x02\x02\u0146\u0149\x05\x14\v\x02\u0147\u0149\x05\x16\f" +
        "\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149\u014B" +
        "\x03\x02\x02\x02\u014A\u013E\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02" +
        "\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\x13\x03" +
        "\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0151\x05\x18\r\x02\u0150" +
        "\u0152\x05z>\x02\u0151\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02" +
        "\u0152\x15\x03\x02\x02\x02\u0153\u0155\x05\x1A\x0E\x02\u0154\u0156\x05" +
        "z>\x02\u0155\u0154\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\x17" +
        "\x03\x02\x02\x02\u0157\u0159\x05t;\x02\u0158\u0157\x03\x02\x02\x02\u0158" +
        "\u0159\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015D\x07\x15" +
        "\x02\x02\u015B\u015E\x05\x9EP\x02\u015C\u015E\x07/\x02\x02\u015D\u015B" +
        "\x03\x02\x02\x02\u015D\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02" +
        "\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03" +
        "\x02\x02\x02\u0161\u0162\x07\x1B\x02\x02\u0162\x19\x03\x02\x02\x02\u0163" +
        "\u0165\x05t;\x02\u0164\u0163\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02" +
        "\u0165\u0166\x03\x02\x02\x02\u0166\u0169\x07\x16\x02\x02\u0167\u016A\x05" +
        "\x9EP\x02\u0168\u016A\x07/\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169\u0168" +
        "\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02" +
        "\u016B\u016C\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x07" +
        "\x1B\x02\x02\u016E\x1B\x03\x02\x02\x02\u016F\u0171\x05t;\x02\u0170\u016F" +
        "\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02" +
        "\u0172\u0175\x07\x18\x02\x02\u0173\u0176\x05\x9EP\x02\u0174\u0176\x07" +
        "/\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0174\x03\x02\x02\x02\u0176" +
        "\u0177\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02" +
        "\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x07\x1B\x02\x02\u017A" +
        "\x1D\x03\x02\x02\x02\u017B\u0193\x07\x8B\x02\x02\u017C\u0193\x05\xA0Q" +
        "\x02\u017D\u0193\x05\"\x12\x02\u017E\u0193\x05\x94K\x02\u017F\u0193\x05" +
        "~@\x02\u0180\u0193\x05t;\x02\u0181\u0193\x05\x8AF\x02\u0182\u0193\x05" +
        "\x86D\x02\u0183\u0193\x05\x88E\x02\u0184\u0193\x05\x9EP\x02\u0185\u0193" +
        "\x05z>\x02\u0186\u0193\x05\x8CG\x02\u0187\u0193\x05\\/\x02\u0188\u0193" +
        "\x05f4\x02\u0189\u0193\x05X-\x02\u018A\u0193\x05L\'\x02\u018B\u0193\x05" +
        "N(\x02\u018C\u0193\x05R*\x02\u018D\u0193\x05P)\x02\u018E\u0193\x05T+\x02" +
        "\u018F\u0193\x05x=\x02\u0190\u0193\x05\x9AN\x02\u0191\u0193\x05\xAAV\x02" +
        "\u0192\u017B\x03\x02\x02\x02\u0192\u017C\x03\x02\x02\x02\u0192\u017D\x03" +
        "\x02\x02\x02\u0192\u017E\x03\x02\x02\x02\u0192\u017F\x03\x02\x02\x02\u0192" +
        "\u0180\x03\x02\x02\x02\u0192\u0181\x03\x02";
    truefalseParser._serializedATNSegment1 = "\x02\x02\u0192\u0182\x03\x02\x02\x02\u0192\u0183\x03\x02\x02\x02\u0192" +
        "\u0184\x03\x02\x02\x02\u0192\u0185\x03\x02\x02\x02\u0192\u0186\x03\x02" +
        "\x02\x02\u0192\u0187\x03\x02\x02\x02\u0192\u0188\x03\x02\x02\x02\u0192" +
        "\u0189\x03\x02\x02\x02\u0192\u018A\x03\x02\x02\x02\u0192\u018B\x03\x02" +
        "\x02\x02\u0192\u018C\x03\x02\x02\x02\u0192\u018D\x03\x02\x02\x02\u0192" +
        "\u018E\x03\x02\x02\x02\u0192\u018F\x03\x02\x02\x02\u0192\u0190\x03\x02" +
        "\x02\x02\u0192\u0191\x03\x02\x02\x02\u0193\x1F\x03\x02\x02\x02\u0194\u0195" +
        "\x05\x1E\x10\x02\u0195!\x03\x02\x02\x02\u0196\u019E\x05$\x13\x02\u0197" +
        "\u019D\x05$\x13\x02\u0198\u019D\x05\x86D\x02\u0199\u019D\x05\x88E\x02" +
        "\u019A\u019D\x05t;\x02\u019B\u019D\x05z>\x02\u019C\u0197\x03\x02\x02\x02" +
        "\u019C\u0198\x03\x02\x02\x02\u019C\u0199\x03\x02\x02\x02\u019C\u019A\x03" +
        "\x02\x02\x02\u019C\u019B\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E" +
        "\u019C\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F#\x03\x02\x02" +
        "\x02\u01A0\u019E\x03\x02\x02\x02\u01A1\u01A5\x07\x11\x02\x02\u01A2\u01A6" +
        "\x07-\x02\x02\u01A3\u01A6\x07.\x02\x02\u01A4\u01A6\x03\x02\x02\x02\u01A5" +
        "\u01A2\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A4\x03\x02" +
        "\x02\x02\u01A6\u01AA\x03\x02\x02\x02\u01A7\u01A9\x05\x9EP\x02\u01A8\u01A7" +
        "\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02" +
        "\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01AD\x03\x02\x02\x02\u01AC\u01AA\x03" +
        "\x02\x02\x02\u01AD\u01AE\x05\xA4S\x02\u01AE%\x03\x02\x02\x02\u01AF\u01B0" +
        "\x07\f\x02\x02\u01B0\u01B1\x05\x9EP\x02\u01B1\u01B3\x07\x1B\x02\x02\u01B2" +
        "\u01B4\x05(\x15\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02" +
        "\x02\u01B4\'\x03\x02\x02\x02\u01B5\u01B6\x07A\x02\x02\u01B6\u01B7\x07" +
        "-\x02\x02\u01B7\u01B8\x07\x1B\x02\x02\u01B8)\x03\x02\x02\x02\u01B9\u01BB" +
        "\x05,\x17\x02\u01BA\u01B9\x03\x02\x02\x02\u01BB\u01BE\x03\x02\x02\x02" +
        "\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01C3\x03" +
        "\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF\u01C2\x07x\x02\x02\u01C0" +
        "\u01C2\x05.\x18\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C0\x03\x02\x02" +
        "\x02\u01C2\u01C5\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C4" +
        "\x03\x02\x02\x02\u01C4+\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C6" +
        "\u01C7\t\x03\x02\x02\u01C7-\x03\x02\x02\x02\u01C8\u01D2\x052\x1A\x02\u01C9" +
        "\u01D2\x05j6\x02\u01CA\u01D2\x054\x1B\x02\u01CB\u01D2\x056\x1C\x02\u01CC" +
        "\u01D2\x058\x1D\x02\u01CD\u01D2\x05:\x1E\x02\u01CE\u01D2\x05<\x1F\x02" +
        "\u01CF\u01D2\x05> \x02\u01D0\u01D2\x07Y\x02\x02\u01D1\u01C8\x03\x02\x02" +
        "\x02\u01D1\u01C9\x03\x02\x02\x02\u01D1\u01CA\x03\x02\x02\x02\u01D1\u01CB" +
        "\x03\x02\x02\x02\u01D1\u01CC\x03\x02\x02\x02\u01D1\u01CD\x03\x02\x02\x02" +
        "\u01D1\u01CE\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D0\x03" +
        "\x02\x02\x02\u01D2/\x03\x02\x02\x02\u01D3\u01D8\x07v\x02\x02\u01D4\u01D8" +
        "\x07w\x02\x02\u01D5\u01D8\x07x\x02\x02\u01D6\u01D8\x03\x02\x02\x02\u01D7" +
        "\u01D3\x03\x02\x02\x02\u01D7\u01D4\x03\x02\x02\x02\u01D7\u01D5\x03\x02" +
        "\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D81\x03\x02\x02\x02\u01D9\u01DC" +
        "\x07P\x02\x02\u01DA\u01DD\x07\b\x02\x02\u01DB\u01DD\x07\x88\x02\x02\u01DC" +
        "\u01DA\x03\x02\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DC\u01DD\x03\x02" +
        "\x02\x02\u01DD\u01E8\x03\x02\x02\x02\u01DE\u01E0\x07g\x02\x02\u01DF\u01E1" +
        "\x07\b\x02\x02\u01E0\u01DF\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02" +
        "\u01E1\u01E8\x03\x02\x02\x02\u01E2\u01E4\x07Q\x02\x02\u01E3\u01E5\x07" +
        "\b\x02\x02\u01E4\u01E3\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5" +
        "\u01E8\x03\x02\x02\x02\u01E6\u01E8\x07R\x02\x02\u01E7\u01D9\x03\x02\x02" +
        "\x02\u01E7\u01DE\x03\x02\x02\x02\u01E7\u01E2\x03\x02\x02\x02\u01E7\u01E6" +
        "\x03\x02\x02\x02\u01E83\x03\x02\x02\x02\u01E9\u01EC\t\x04\x02\x02\u01EA" +
        "\u01EB\x07\x1C\x02\x02\u01EB\u01ED\x07\n\x02\x02\u01EC\u01EA\x03\x02\x02" +
        "\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED5\x03\x02\x02\x02\u01EE\u01EF\t" +
        "\x05\x02\x02\u01EF7\x03\x02\x02\x02\u01F0\u01F1\t\x06\x02\x02\u01F19\x03" +
        "\x02\x02\x02\u01F2\u01F3\t\x07\x02\x02\u01F3;\x03\x02\x02\x02\u01F4\u01F5" +
        "\t\b\x02\x02\u01F5=\x03\x02\x02\x02\u01F6\u01F7\t\t\x02\x02\u01F7?\x03" +
        "\x02\x02\x02\u01F8\u01F9\t\n\x02\x02\u01F9A\x03\x02\x02\x02\u01FA\u01FB" +
        "\t\v\x02\x02\u01FBC\x03\x02\x02\x02\u01FC\u01FD\t\f\x02\x02\u01FDE\x03" +
        "\x02\x02\x02\u01FE\u01FF\t\r\x02\x02\u01FFG\x03\x02\x02\x02\u0200\u0203" +
        "\x07^\x02\x02\u0201\u0202\x07\x1C\x02\x02\u0202\u0204\x07\n\x02\x02\u0203" +
        "\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u020B\x03\x02" +
        "\x02\x02\u0205\u0208\x07p\x02\x02\u0206\u0207\x07\x1C\x02\x02\u0207\u0209" +
        "\x07\n\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02" +
        "\u0209\u020B\x03\x02\x02\x02\u020A\u0200\x03\x02\x02\x02\u020A\u0205\x03" +
        "\x02\x02\x02\u020BI\x03\x02\x02\x02\u020C\u020D\t\x0E\x02\x02\u020DK\x03" +
        "\x02\x02\x02\u020E\u020F\x05@!\x02\u020F\u0210\x07\x1C\x02\x02\u0210\u0211" +
        "\x05r:\x02\u0211\u0212\x07\x1B\x02\x02\u0212\u0215\x03\x02\x02\x02\u0213" +
        "\u0215\x07+\x02\x02\u0214\u020E\x03\x02\x02\x02\u0214\u0213\x03\x02\x02" +
        "\x02\u0215M\x03\x02\x02\x02\u0216\u0217\x05B\"\x02\u0217\u0218\x07\x1C" +
        "\x02\x02\u0218\u0219\x05r:\x02\u0219\u021E\x07\x1B\x02\x02\u021A\u021B" +
        "\x07C\x02\x02\u021B\u021C\x05\xA8U\x02\u021C\u021D\x07\x1B\x02\x02\u021D" +
        "\u021F\x03\x02\x02\x02\u021E\u021A\x03\x02\x02\x02\u021E\u021F\x03\x02" +
        "\x02\x02\u021FO\x03\x02\x02\x02\u0220\u0221\x05F$\x02\u0221\u0222\x07" +
        "\x1C\x02\x02\u0222\u0223\x05r:\x02\u0223\u0228\x07\x1B\x02\x02\u0224\u0225" +
        "\x07C\x02\x02\u0225\u0226\x05\xA8U\x02\u0226\u0227\x07\x1B\x02\x02\u0227" +
        "\u0229\x03\x02\x02\x02\u0228\u0224\x03\x02\x02\x02\u0228\u0229\x03\x02" +
        "\x02\x02\u0229Q\x03\x02\x02\x02\u022A\u022B\x05D#\x02\u022B\u022E\x07" +
        "\x1C\x02\x02\u022C\u022F\x05r:\x02\u022D\u022F\x05p9\x02\u022E\u022C\x03" +
        "\x02\x02\x02\u022E\u022D\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230" +
        "\u0235\x07\x1B\x02\x02\u0231\u0232\x07C\x02\x02\u0232\u0233\x05\xA8U\x02" +
        "\u0233\u0234\x07\x1B\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235\u0231\x03" +
        "\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236S\x03\x02\x02\x02\u0237" +
        "\u023B\x05V,\x02\u0238\u023A\x05n8\x02\u0239\u0238\x03\x02\x02\x02\u023A" +
        "\u023D\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02" +
        "\x02\x02\u023CU\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E\u023F" +
        "\x05J&\x02\u023F\u0243\x07\x1C\x02\x02\u0240\u0242\x07\x04\x02\x02\u0241" +
        "\u0240\x03\x02\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0241\x03\x02" +
        "\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0246\x03\x02\x02\x02\u0245" +
        "\u0243\x03\x02\x02\x02\u0246\u0247\x05r:\x02\u0247\u0248\x07\x1B\x02\x02" +
        "\u0248W\x03\x02\x02\x02\u0249\u024D\x05Z.\x02\u024A\u024C\x05n8\x02\u024B" +
        "\u024A\x03\x02\x02\x02\u024C\u024F\x03\x02\x02\x02\u024D\u024B\x03\x02" +
        "\x02\x02\u024D\u024E\x03\x02\x02\x02\u024EY\x03\x02\x02\x02\u024F\u024D" +
        "\x03\x02\x02\x02\u0250\u0251\x05H%\x02\u0251\u0252\x07\x1C\x02\x02\u0252" +
        "\u0253\x05r:\x02\u0253\u0258\x07\x1B\x02\x02\u0254\u0255\x07C\x02\x02" +
        "\u0255\u0256\x05\xA8U\x02\u0256\u0257\x07\x1B\x02\x02\u0257\u0259\x03" +
        "\x02\x02\x02\u0258\u0254\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259" +
        "[\x03\x02\x02\x02\u025A\u025E\x05^0\x02\u025B\u025D\x05b2\x02\u025C\u025B" +
        "\x03\x02\x02\x02\u025D\u0260\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02" +
        "\u025E\u025F\x03\x02\x02\x02\u025F\u0263\x03\x02\x02\x02\u0260\u025E\x03" +
        "\x02\x02\x02\u0261\u0262\x07/\x02\x02\u0262\u0264\x07E\x02\x02\u0263\u0261" +
        "\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264]\x03\x02\x02\x02\u0265" +
        "\u0266\x05`1\x02\u0266\u026A\x07\x1C\x02\x02\u0267\u0269\x07\x04\x02\x02" +
        "\u0268\u0267\x03\x02\x02\x02\u0269\u026C\x03\x02\x02\x02\u026A\u0268\x03" +
        "\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026D\x03\x02\x02\x02\u026C" +
        "\u026A\x03\x02\x02\x02\u026D\u026E\x05r:\x02\u026E\u026F\x07\x1B\x02\x02" +
        "\u026F_\x03\x02\x02\x02\u0270\u0273\x07[\x02\x02\u0271\u0274\x07\b\x02" +
        "\x02\u0272\u0274\x07\x88\x02\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0272" +
        "\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u027F\x03\x02\x02\x02" +
        "\u0275\u0277\x07o\x02\x02\u0276\u0278\x07\b\x02\x02\u0277\u0276\x03\x02" +
        "\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027F\x03\x02\x02\x02\u0279" +
        "\u027B\x07\\\x02\x02\u027A\u027C\x07\b\x02\x02\u027B\u027A\x03\x02\x02" +
        "\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D\u027F" +
        "\x07]\x02\x02\u027E\u0270\x03\x02\x02\x02\u027E\u0275\x03\x02\x02\x02" +
        "\u027E\u0279\x03\x02\x02\x02\u027E\u027D\x03\x02\x02\x02\u027Fa\x03\x02" +
        "\x02\x02\u0280\u0281\x07B\x02\x02\u0281\u0282\x07\x1C\x02\x02\u0282\u0283" +
        "\x05r:\x02\u0283\u0284\x07\x1B\x02\x02\u0284\u0292\x03\x02\x02\x02\u0285" +
        "\u0286\t\x0F\x02\x02\u0286\u0287\x07\x1C\x02\x02\u0287\u0288\x07-\x02" +
        "\x02\u0288\u0292\x07\x1B\x02\x02\u0289\u028D\t\x10\x02\x02\u028A\u028C" +
        "\v\x02\x02\x02\u028B\u028A\x03\x02\x02\x02\u028C\u028F\x03\x02\x02\x02" +
        "\u028D\u028E\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u0290\x03" +
        "\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u0290\u0292\x07\x1B\x02\x02\u0291" +
        "\u0280\x03\x02\x02\x02\u0291\u0285\x03\x02\x02\x02\u0291\u0289\x03\x02" +
        "\x02\x02\u0292c\x03\x02\x02\x02\u0293\u0294\x07B\x02\x02\u0294\u0295\x07" +
        "\x1C\x02\x02\u0295\u0296\x05r:\x02\u0296\u0297\x07\x1B\x02\x02\u0297\u02A5" +
        "\x03\x02\x02\x02\u0298\u0299\t\x0F\x02\x02\u0299\u029A\x07\x1C\x02\x02" +
        "\u029A\u029B\x07-\x02\x02\u029B\u02A5\x07\x1B\x02\x02\u029C\u02A0\t\x10" +
        "\x02\x02\u029D\u029F\v\x02\x02\x02\u029E\u029D\x03\x02\x02\x02\u029F\u02A2" +
        "\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02" +
        "\u02A1\u02A3\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A3\u02A5\x07" +
        "\x1B\x02\x02\u02A4\u0293\x03\x02\x02\x02\u02A4\u0298\x03\x02\x02\x02\u02A4" +
        "\u029C\x03\x02\x02\x02\u02A5e\x03\x02\x02\x02\u02A6\u02AA\x05h5\x02\u02A7" +
        "\u02A9\x05n8\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\u02AC\x03\x02\x02\x02" +
        "\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02ABg\x03\x02" +
        "\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02AE\x05l7\x02\u02AE\u02AF" +
        "\x07\x1C\x02\x02\u02AF\u02B0\x05r:\x02\u02B0\u02B5\x07\x1B\x02\x02\u02B1" +
        "\u02B2\x07C\x02\x02\u02B2\u02B3\x05\xA8U\x02\u02B3\u02B4\x07\x1B\x02\x02" +
        "\u02B4\u02B6\x03\x02\x02\x02\u02B5\u02B1\x03\x02\x02\x02\u02B5\u02B6\x03" +
        "\x02\x02\x02\u02B6i\x03\x02\x02\x02\u02B7\u02BA\x07O\x02\x02\u02B8\u02B9" +
        "\x07\x1C\x02\x02\u02B9\u02BB\x07\t\x02\x02\u02BA\u02B8\x03\x02\x02\x02" +
        "\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02C2\x03\x02\x02\x02\u02BC\u02BF\x07" +
        "f\x02\x02\u02BD\u02BE\x07\x1C\x02\x02\u02BE\u02C0\x07\t\x02\x02\u02BF" +
        "\u02BD\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C2\x03\x02" +
        "\x02\x02\u02C1\u02B7\x03\x02\x02\x02\u02C1\u02BC\x03\x02\x02\x02\u02C2" +
        "k\x03\x02\x02\x02\u02C3\u02C6\x07Z\x02\x02\u02C4\u02C5\x07\x1C\x02\x02" +
        "\u02C5\u02C7\x07\t\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6\u02C7\x03" +
        "\x02\x02\x02\u02C7\u02CE\x03\x02\x02\x02\u02C8\u02CB\x07n\x02\x02\u02C9" +
        "\u02CA\x07\x1C\x02\x02\u02CA\u02CC\x07\t\x02\x02\u02CB\u02C9\x03\x02\x02" +
        "\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CE\x03\x02\x02\x02\u02CD\u02C3" +
        "\x03\x02\x02\x02\u02CD\u02C8\x03\x02\x02\x02\u02CEm\x03\x02\x02\x02\u02CF" +
        "\u02D0\x07\x14\x02\x02\u02D0\u02D3\x05\x9EP\x02\u02D1\u02D3\x07B\x02\x02" +
        "\u02D2\u02CF\x03\x02\x02\x02\u02D2\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03" +
        "\x02\x02\x02\u02D4\u02D8\x07\x1C\x02\x02\u02D5\u02D7\x07\x04\x02\x02\u02D6" +
        "\u02D5\x03\x02\x02\x02\u02D7\u02DA\x03\x02\x02\x02\u02D8\u02D6\x03\x02" +
        "\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DD\x03\x02\x02\x02\u02DA" +
        "\u02D8\x03\x02\x02\x02\u02DB\u02DE\x05\x9EP\x02\u02DC\u02DE\x07/\x02\x02" +
        "\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03" +
        "\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0" +
        "\u02E1\x03\x02\x02\x02\u02E1\u02EF\x07\x1B\x02\x02\u02E2\u02E3\t\x0F\x02" +
        "\x02\u02E3\u02E4\x07\x1C\x02\x02\u02E4\u02E5\x07-\x02\x02\u02E5\u02EF" +
        "\x07\x1B\x02\x02\u02E6\u02EA\t\x10\x02\x02\u02E7\u02E9\v\x02\x02\x02\u02E8" +
        "\u02E7\x03\x02\x02\x02\u02E9\u02EC\x03\x02\x02\x02\u02EA\u02EB\x03\x02" +
        "\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02ED\x03\x02\x02\x02\u02EC" +
        "\u02EA\x03\x02\x02\x02\u02ED\u02EF\x07\x1B\x02\x02\u02EE\u02D2\x03\x02" +
        "\x02\x02\u02EE\u02E2\x03\x02\x02\x02\u02EE\u02E6\x03\x02\x02\x02\u02EF" +
        "o\x03\x02\x02\x02\u02F0\u02F1\x07\x87\x02\x02\u02F1\u02F2\x07\x1F\x02" +
        "\x02\u02F2\u02F3\x07-\x02\x02\u02F3q\x03\x02\x02\x02\u02F4\u02F5\x07\x8A" +
        "\x02\x02\u02F5s\x03\x02\x02\x02\u02F6\u02F7\x07\x19\x02\x02\u02F7\u02FF" +
        "\x07\x1B\x02\x02\u02F8\u02FA\x07\x04\x02\x02\u02F9\u02F8\x03\x02\x02\x02" +
        "\u02FA\u02FD\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FC\x03" +
        "\x02\x02\x02\u02FC\u02FE\x03\x02\x02\x02\u02FD\u02FB\x03\x02\x02\x02\u02FE" +
        "\u0300\x05v<\x02\u02FF\u02FB\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02" +
        "\u0300\u0315\x03\x02\x02\x02\u0301\u0302\x07\x19\x02\x02\u0302\u0307\x05" +
        "\x9EP\x02\u0303\u0306\x07\x1C\x02\x02\u0304\u0306\x05\xA8U\x02\u0305\u0303" +
        "\x03\x02\x02\x02\u0305\u0304\x03\x02\x02\x02\u0306\u0309\x03\x02\x02\x02" +
        "\u0307\u0305\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u030A\x03" +
        "\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u030A\u0312\x07\x1B\x02\x02\u030B" +
        "\u030D\x07\x04\x02\x02\u030C\u030B\x03\x02\x02\x02\u030D\u0310\x03\x02" +
        "\x02\x02\u030E\u030C\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F" +
        "\u0311\x03\x02\x02\x02\u0310\u030E\x03\x02\x02\x02\u0311\u0313\x05v<\x02" +
        "\u0312\u030E\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0315\x03" +
        "\x02\x02\x02\u0314\u02F6\x03\x02\x02\x02\u0314\u0301\x03\x02\x02\x02\u0315" +
        "u\x03\x02\x02\x02\u0316\u0317\x07\x19\x02\x02\u0317\u031C\x05\x9EP\x02" +
        "\u0318\u031B\x07\x1C\x02\x02\u0319\u031B\x05\xA8U\x02\u031A\u0318\x03" +
        "\x02\x02\x02\u031A\u0319\x03\x02\x02\x02\u031B\u031E\x03\x02\x02\x02\u031C" +
        "\u031A\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031F\x03\x02" +
        "\x02\x02\u031E\u031C\x03\x02\x02\x02\u031F\u0320\x07\x1B\x02\x02\u0320" +
        "w\x03\x02\x02\x02\u0321\u0323\x07\x0E\x02\x02\u0322\u0324\x05\x9EP\x02" +
        "\u0323\u0322\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02\u0324\u0325\x03" +
        "\x02\x02\x02\u0325\u032C\x07\x1B\x02\x02\u0326\u0328\x07\x0F\x02\x02\u0327" +
        "\u0329\x05\x9EP\x02\u0328\u0327\x03\x02\x02\x02\u0328\u0329\x03\x02\x02" +
        "\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032C\x07\x1B\x02\x02\u032B\u0321" +
        "\x03\x02\x02\x02\u032B\u0326\x03\x02\x02\x02\u032Cy\x03\x02\x02\x02\u032D" +
        "\u0335\x07<\x02\x02\u032E\u0335\x07:\x02\x02\u032F\u0331\x07;\x02\x02" +
        "\u0330\u0332\x070\x02\x02\u0331\u0330\x03\x02\x02\x02\u0331\u0332\x03" +
        "\x02\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0335\x07\x02\x02\x03\u0334" +
        "\u032D\x03\x02\x02\x02\u0334\u032E\x03\x02\x02\x02\u0334\u032F\x03\x02" +
        "\x02\x02\u0335{\x03\x02\x02\x02\u0336\u0338\x07e\x02\x02\u0337\u0339\x05" +
        "\x9EP\x02\u0338\u0337\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339" +
        "\u034F\x03\x02\x02\x02\u033A\u0344\x05\x9EP\x02\u033B\u033F\x07/\x02\x02" +
        "\u033C\u033E\x07\x04\x02\x02\u033D\u033C\x03\x02\x02\x02\u033E\u0341\x03" +
        "\x02\x02\x02\u033F\u033D\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340" +
        "\u0343\x03\x02\x02\x02\u0341\u033F\x03\x02\x02\x02\u0342\u033B\x03\x02" +
        "\x02\x02\u0343\u0346\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02\u0344" +
        "\u0345\x03\x02\x02\x02\u0345\u034A\x03\x02\x02\x02\u0346\u0344\x03\x02" +
        "\x02\x02\u0347\u0349\x07/\x02\x02\u0348\u0347\x03\x02\x02\x02\u0349\u034C" +
        "\x03\x02\x02\x02\u034A\u0348\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02" +
        "\u034B\u034E\x03\x02\x02\x02\u034C\u034A\x03\x02\x02\x02\u034D\u033A\x03" +
        "\x02\x02\x02\u034E\u0351\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u034F" +
        "\u0350\x03\x02\x02\x02\u0350\u0352\x03\x02\x02\x02\u0351\u034F\x03\x02" +
        "\x02\x02\u0352\u035E\x07\x1B\x02\x02\u0353\u0359\x07e\x02\x02\u0354\u0358" +
        "\x05\x9EP\x02\u0355\u0358\x07/\x02\x02\u0356\u0358\x07\x04\x02\x02\u0357" +
        "\u0354\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0357\u0356\x03\x02" +
        "\x02\x02\u0358\u035B\x03\x02\x02\x02\u0359\u0357\x03\x02\x02\x02\u0359" +
        "\u035A\x03\x02\x02\x02\u035A\u035C\x03\x02\x02\x02\u035B\u0359\x03\x02" +
        "\x02\x02\u035C\u035E\x07\x02\x02\x03\u035D\u0336\x03\x02\x02\x02\u035D" +
        "\u0353\x03\x02\x02\x02\u035E}\x03\x02\x02\x02\u035F\u0364\x074\x02\x02" +
        "\u0360\u0365\x05\x9EP\x02\u0361\u0365\x07\x1C\x02\x02\u0362\u0365\x07" +
        "\x8A\x02\x02\u0363\u0365\x07/\x02\x02\u0364\u0360\x03\x02\x02\x02\u0364" +
        "\u0361\x03\x02\x02\x02\u0364\u0362\x03\x02\x02\x02\u0364\u0363\x03\x02" +
        "\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02\u0366" +
        "\u0367\x03\x02\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368\u0376\x07\x1B" +
        "\x02\x02\u0369\u0371\x074\x02\x02\u036A\u0370\x05\x9EP\x02\u036B\u0370" +
        "\x07\x1C\x02\x02\u036C\u0370\x07\x8A\x02\x02\u036D\u0370\x07/\x02\x02" +
        "\u036E\u0370\x07\x04\x02\x02\u036F\u036A\x03\x02\x02\x02\u036F\u036B\x03" +
        "\x02\x02\x02\u036F\u036C\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u036F" +
        "\u036E\x03\x02\x02\x02\u0370\u0373\x03\x02\x02\x02\u0371\u036F\x03\x02" +
        "\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372\u0374\x03\x02\x02\x02\u0373" +
        "\u0371\x03\x02\x02\x02\u0374\u0376\x07\x02\x02\x03\u0375\u035F\x03\x02" +
        "\x02\x02\u0375\u0369\x03\x02\x02\x02\u0376\x7F\x03\x02\x02\x02\u0377\u0378" +
        "\x073\x02\x02\u0378\u0379\x05\x9EP\x02\u0379\u037A\x07\x1B\x02\x02\u037A" +
        "\x81\x03\x02\x02\x02\u037B\u037F\x07L\x02\x02\u037C\u0380\x05\x9EP\x02" +
        "\u037D\u0380\x07\x1C\x02\x02\u037E\u0380\x07/\x02\x02\u037F\u037C\x03" +
        "\x02\x02\x02\u037F\u037D\x03\x02\x02\x02\u037F\u037E\x03\x02\x02\x02\u0380" +
        "\u0381\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0381\u0382\x03\x02" +
        "\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u0385\x07\x1B\x02\x02\u0384" +
        "\u0386\x05\x84C\x02\u0385\u0384\x03\x02\x02\x02\u0385\u0386\x03\x02\x02" +
        "\x02\u0386\x83\x03\x02\x02\x02\u0387\u038B\x07L\x02\x02\u0388\u038C\x05" +
        "\x9EP\x02\u0389\u038C\x07\x1C\x02\x02\u038A\u038C\x07/\x02\x02\u038B\u0388" +
        "\x03\x02\x02\x02\u038B\u0389\x03\x02\x02\x02\u038B\u038A\x03\x02\x02\x02" +
        "\u038C\u038D\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02\u038D\u038E\x03" +
        "\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0390\x07\x1B\x02\x02\u0390" +
        "\x85\x03\x02\x02\x02\u0391\u0395\x07\x12\x02\x02\u0392\u0394\x07/\x02" +
        "\x02\u0393\u0392\x03\x02\x02\x02\u0394\u0397\x03\x02\x02\x02\u0395\u0393" +
        "\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u0399\x03\x02\x02\x02" +
        "\u0397\u0395\x03\x02\x02\x02\u0398\u039A\x05\x9EP\x02\u0399\u0398\x03" +
        "\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u03B0\x03\x02\x02\x02\u039B" +
        "\u03A5\x05\x9EP\x02\u039C\u03A0\x07/\x02\x02\u039D\u039F\x07\x04\x02\x02" +
        "\u039E\u039D\x03\x02\x02\x02\u039F\u03A2\x03\x02\x02\x02\u03A0\u039E\x03" +
        "\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A4\x03\x02\x02\x02\u03A2" +
        "\u03A0\x03\x02\x02\x02\u03A3\u039C\x03\x02\x02\x02\u03A4\u03A7\x03\x02" +
        "\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6" +
        "\u03AB\x03\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02\u03A8\u03AA\x07/\x02" +
        "\x02\u03A9\u03A8\x03\x02\x02\x02\u03AA\u03AD\x03\x02\x02\x02\u03AB\u03A9" +
        "\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AF\x03\x02\x02\x02" +
        "\u03AD\u03AB\x03\x02\x02\x02\u03AE\u039B\x03\x02\x02\x02\u03AF\u03B2\x03" +
        "\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1" +
        "\u03B3\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02\u03B3\u03C0\x07\x1B" +
        "\x02\x02\u03B4\u03B8\x07\x12\x02\x02\u03B5\u03B7\x07/\x02\x02\u03B6\u03B5" +
        "\x03\x02\x02\x02\u03B7\u03BA\x03\x02\x02\x02\u03B8\u03B6\x03\x02\x02\x02" +
        "\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BC\x03\x02\x02\x02\u03BA\u03B8\x03" +
        "\x02\x02\x02\u03BB\u03BD\x05\x9EP\x02\u03BC\u03BB\x03\x02\x02\x02\u03BC" +
        "\u03BD\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C0\x07\x02" +
        "\x02\x03\u03BF\u0391\x03\x02\x02\x02\u03BF\u03B4\x03\x02\x02\x02\u03C0" +
        "\x87\x03\x02\x02\x02\u03C1\u03C3\x07\x13\x02\x02\u03C2\u03C4\n\x11\x02" +
        "\x02\u03C3\u03C2\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C3" +
        "\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02" +
        "\u03C7\u03C8\x07\x1B\x02\x02\u03C8\x89\x03\x02\x02\x02\u03C9\u03CC\x07" +
        "\x1A\x02\x02\u03CA\u03CD\x05\x9EP\x02\u03CB\u03CD\x07/\x02\x02\u03CC\u03CA" +
        "\x03\x02\x02\x02\u03CC\u03CB\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02" +
        "\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D0\x03" +
        "\x02\x02\x02\u03D0\u03D6\x07\x1B\x02\x02\u03D1\u03D2\x07\x1A\x02\x02\u03D2" +
        "\u03D3\x05\x9EP\x02\u03D3\u03D4\x07\x02\x02\x03\u03D4\u03D6\x03\x02\x02" +
        "\x02\u03D5\u03C9\x03\x02\x02\x02\u03D5\u03D1\x03\x02\x02\x02\u03D6\x8B" +
        "\x03\x02\x02\x02\u03D7\u03D8\x07?\x02\x02\u03D8\u03D9\x05\x9EP\x02\u03D9" +
        "\u03DA\x07\x1B\x02\x02\u03DA\u03E0\x03\x02\x02\x02\u03DB\u03DC\x07@\x02" +
        "\x02\u03DC\u03DD\x05\x9EP\x02\u03DD\u03DE\x07\x1B\x02\x02\u03DE\u03E0" +
        "\x03\x02\x02\x02\u03DF\u03D7\x03\x02\x02\x02\u03DF\u03DB\x03\x02\x02\x02" +
        "\u03E0\x8D\x03\x02\x02\x02\u03E1\u03E2\x077\x02\x02\u03E2\u03E3\x07\x1C" +
        "\x02\x02\u03E3\u03E4\x07-\x02\x02\u03E4\u03EB\x07\x1B\x02\x02\u03E5\u03E6" +
        "\x077\x02\x02\u03E6\u03E7\x07\x1C\x02\x02\u03E7\u03E8\x05\x9EP\x02\u03E8" +
        "\u03E9\x07\x1B\x02\x02\u03E9\u03EB\x03\x02\x02\x02\u03EA\u03E1\x03\x02" +
        "\x02\x02\u03EA\u03E5\x03\x02\x02\x02\u03EB\x8F\x03\x02\x02\x02\u03EC\u03ED" +
        "\x07J\x02\x02\u03ED\u03EE\x05\x9EP\x02\u03EE\u03EF\x07\x1B\x02\x02\u03EF" +
        "\x91\x03\x02\x02\x02\u03F0\u03F1\x07K\x02\x02\u03F1\u03F2\x05\x9EP\x02" +
        "\u03F2\u03F3\x07\x1B\x02\x02\u03F3\x93\x03\x02\x02\x02\u03F4\u03FE\x05" +
        "\x96L\x02\u03F5\u03F7\x07/\x02\x02\u03F6\u03F5\x03\x02\x02\x02\u03F7\u03FA" +
        "\x03\x02\x02\x02\u03F8\u03F6\x03\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02" +
        "\u03F9\u03FB\x03\x02\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FB\u03FD\x05" +
        "\x96L\x02\u03FC\u03F8\x03\x02\x02\x02\u03FD\u0400\x03\x02\x02\x02\u03FE" +
        "\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\x95\x03\x02\x02" +
        "\x02\u0400\u03FE\x03\x02\x02\x02\u0401\u0402\x07\x14\x02\x02\u0402\u0403" +
        "\x05\x9EP\x02\u0403\u0404\t\x12\x02\x02\u0404\u040A\x05\x9EP\x02\u0405" +
        "\u0409\x07/\x02\x02\u0406\u0409\x07\x1C\x02\x02\u0407\u0409\x05\x9EP\x02" +
        "\u0408\u0405\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0408\u0407\x03" +
        "\x02\x02\x02\u0409\u040C\x03\x02\x02\x02\u040A\u0408\x03\x02\x02\x02\u040A" +
        "\u040B\x03\x02\x02\x02\u040B\u040D\x03\x02\x02\x02\u040C\u040A\x03\x02" +
        "\x02\x02\u040D\u040E\x07\x1B\x02\x02\u040E\u0418\x03\x02\x02\x02\u040F" +
        "\u0413\x07H\x02\x02\u0410\u0412\v\x02\x02\x02\u0411\u0410\x03\x02\x02" +
        "\x02\u0412\u0415\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0413\u0411" +
        "\x03\x02\x02\x02\u0414\u0416\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02" +
        "\u0416\u0418\x07\x1B\x02\x02\u0417\u0401\x03\x02\x02\x02\u0417\u040F\x03" +
        "\x02\x02\x02\u0418\x97\x03\x02\x02\x02\u0419\u041D\x07\v\x02\x02\u041A" +
        "\u041E\x05\x9EP\x02\u041B\u041E\x07\x1C\x02\x02\u041C\u041E\x07/\x02\x02" +
        "\u041D\u041A\x03\x02\x02\x02\u041D\u041B\x03\x02\x02\x02\u041D\u041C\x03" +
        "\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u041D\x03\x02\x02\x02\u041F" +
        "\u0420\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u042D\x07\x1B" +
        "\x02\x02\u0422\u0428\x07\v\x02\x02\u0423\u0427\x05\x9EP\x02\u0424\u0427" +
        "\x07\x1C\x02\x02\u0425\u0427\x07/\x02\x02\u0426\u0423\x03\x02\x02\x02" +
        "\u0426\u0424\x03\x02\x02\x02\u0426\u0425\x03\x02\x02\x02\u0427\u042A\x03" +
        "\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429" +
        "\u042B\x03\x02\x02\x02\u042A\u0428\x03\x02\x02\x02\u042B\u042D\x07\x02" +
        "\x02\x03\u042C\u0419\x03\x02\x02\x02\u042C\u0422\x03\x02\x02\x02\u042D" +
        "\x99\x03\x02\x02\x02\u042E\u0430\x07\x10\x02\x02\u042F\u0431\x05\x9EP" +
        "\x02\u0430\u042F\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431\u0432" +
        "\x03\x02\x02\x02\u0432\u0433\x07\x1B\x02\x02";
    truefalseParser._serializedATNSegment2 = "\u0433\x9B\x03\x02\x02\x02\u0434\u0436\x05\x9EP\x02\u0435\u0437\x07/\x02" +
        "\x02\u0436\u0435\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\u0439" +
        "\x03\x02\x02\x02\u0438\u0434\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02" +
        "\u043A\u0438\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\x9D\x03" +
        "\x02\x02\x02\u043C\u0443\x07.\x02\x02\u043D\u043F\x07\x04\x02\x02\u043E" +
        "\u043D\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u043E\x03\x02" +
        "\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442" +
        "\u0444\x07-\x02\x02\u0443\u043E\x03\x02\x02\x02\u0443\u0444\x03\x02\x02" +
        "\x02\u0444\u046B\x03\x02\x02\x02\u0445\u044C\x05\xA8U\x02\u0446\u0448" +
        "\x07\x04\x02\x02\u0447\u0446\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02" +
        "\u0449\u0447\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044B\x03" +
        "\x02\x02\x02\u044B\u044D\x07-\x02\x02\u044C\u0447\x03\x02\x02\x02\u044C" +
        "\u044D\x03\x02\x02\x02\u044D\u046B\x03\x02\x02\x02\u044E\u044F\x07\x17" +
        "\x02\x02\u044F\u0450\x05\x9EP\x02\u0450\u0451\x07\x1B\x02\x02\u0451\u046B" +
        "\x03\x02\x02\x02\u0452\u046B\x07-\x02\x02\u0453\u0455\x07\x04\x02\x02" +
        "\u0454\u0453\x03\x02\x02\x02\u0455\u0458\x03\x02\x02\x02\u0456\u0454\x03" +
        "\x02\x02\x02\u0456\u0457\x03\x02\x02\x02\u0457\u0459\x03\x02\x02\x02\u0458" +
        "\u0456\x03\x02\x02\x02\u0459\u045D\x07\x1C\x02\x02\u045A\u045C\x07\x04" +
        "\x02\x02\u045B\u045A\x03\x02\x02\x02\u045C\u045F\x03\x02\x02\x02\u045D" +
        "\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u046B\x03\x02" +
        "\x02\x02\u045F\u045D\x03\x02\x02\x02\u0460\u0464\x07\x1D\x02\x02\u0461" +
        "\u0463\x07\x04\x02\x02\u0462\u0461\x03\x02\x02\x02\u0463\u0466\x03\x02" +
        "\x02\x02\u0464\u0462\x03\x02\x02\x02\u0464\u0465\x03\x02\x02\x02\u0465" +
        "\u046B\x03\x02\x02\x02\u0466\u0464\x03\x02\x02\x02\u0467\u046B\x07\x1E" +
        "\x02\x02\u0468\u046B\x07#\x02\x02\u0469\u046B\x07\x8A\x02\x02\u046A\u043C" +
        "\x03\x02\x02\x02\u046A\u0445\x03\x02\x02\x02\u046A\u044E\x03\x02\x02\x02" +
        "\u046A\u0452\x03\x02\x02\x02\u046A\u0456\x03\x02\x02\x02\u046A\u0460\x03" +
        "\x02\x02\x02\u046A\u0467\x03\x02\x02\x02\u046A\u0468\x03\x02\x02\x02\u046A" +
        "\u0469\x03\x02\x02\x02\u046B\x9F\x03\x02\x02\x02\u046C\u046D\x07*\x02" +
        "\x02\u046D\xA1\x03\x02\x02\x02\u046E\u046F\x07\r\x02\x02\u046F\u0470\x05" +
        "\x9EP\x02\u0470\u0471\x07\x1B\x02\x02\u0471\xA3\x03\x02\x02\x02\u0472" +
        "\u0473\x07\x1B\x02\x02\u0473\xA5\x03\x02\x02\x02\u0474\u0475\t\x13\x02" +
        "\x02\u0475\xA7\x03\x02\x02\x02\u0476\u047F\x070\x02\x02\u0477\u047F\x07" +
        "\x1D\x02\x02\u0478\u0479\x07!\x02\x02\u0479\u047F\n\x14\x02\x02\u047A" +
        "\u047B\x07\"\x02\x02\u047B\u047F\n\x15\x02\x02\u047C\u047F\x07%\x02\x02" +
        "\u047D\u047F\x07$\x02\x02\u047E\u0476\x03\x02\x02\x02\u047E\u0477\x03" +
        "\x02\x02\x02\u047E\u0478\x03\x02\x02\x02\u047E\u047A\x03\x02\x02\x02\u047E" +
        "\u047C\x03\x02\x02\x02\u047E\u047D\x03\x02\x02\x02\u047F\u0480\x03\x02" +
        "\x02\x02\u0480\u047E\x03\x02\x02\x02\u0480\u0481\x03\x02\x02\x02\u0481" +
        "\xA9\x03\x02\x02\x02\u0482\u0483\x07\x04\x02\x02\u0483\xAB\x03\x02\x02" +
        "\x02\xA5\xB0\xB6\xBB\xC0\xC9\xD1\xD7\xDC\xE3\xEA\xF0\xF3\xFB\u0102\u0107" +
        "\u010B\u0110\u0116\u011C\u0123\u0129\u012C\u0136\u013B\u013E\u0143\u0148" +
        "\u014C\u0151\u0155\u0158\u015D\u015F\u0164\u0169\u016B\u0170\u0175\u0177" +
        "\u0192\u019C\u019E\u01A5\u01AA\u01B3\u01BC\u01C1\u01C3\u01D1\u01D7\u01DC" +
        "\u01E0\u01E4\u01E7\u01EC\u0203\u0208\u020A\u0214\u021E\u0228\u022E\u0235" +
        "\u023B\u0243\u024D\u0258\u025E\u0263\u026A\u0273\u0277\u027B\u027E\u028D" +
        "\u0291\u02A0\u02A4\u02AA\u02B5\u02BA\u02BF\u02C1\u02C6\u02CB\u02CD\u02D2" +
        "\u02D8\u02DD\u02DF\u02EA\u02EE\u02FB\u02FF\u0305\u0307\u030E\u0312\u0314" +
        "\u031A\u031C\u0323\u0328\u032B\u0331\u0334\u0338\u033F\u0344\u034A\u034F" +
        "\u0357\u0359\u035D\u0364\u0366\u036F\u0371\u0375\u037F\u0381\u0385\u038B" +
        "\u038D\u0395\u0399\u03A0\u03A5\u03AB\u03B0\u03B8\u03BC\u03BF\u03C5\u03CC" +
        "\u03CE\u03D5\u03DF\u03EA\u03F8\u03FE\u0408\u040A\u0413\u0417\u041D\u041F" +
        "\u0426\u0428\u042C\u0430\u0436\u043A\u0440\u0443\u0449\u044C\u0456\u045D" +
        "\u0464\u046A\u047E\u0480";
    truefalseParser._serializedATN = Utils.join([
        truefalseParser._serializedATNSegment0,
        truefalseParser._serializedATNSegment1,
        truefalseParser._serializedATNSegment2,
    ], "");
    return truefalseParser;
})();
exports.truefalseParser = truefalseParser;
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
    choices() {
        return this.getRuleContext(0, ChoicesContext);
    }
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
    mcrsep_end() {
        return this.getRuleContext(0, Mcrsep_endContext);
    }
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
    AmpImageWAudio() { return this.tryGetToken(truefalseParser.AmpImageWAudio, 0); }
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
    OpAmpImageWAudio() { return this.tryGetToken(truefalseParser.OpAmpImageWAudio, 0); }
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
    OPC() { return this.getToken(truefalseParser.OPC, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    words(i) {
        if (i === undefined) {
            return this.getRuleContexts(WordsContext);
        }
        else {
            return this.getRuleContext(i, WordsContext);
        }
    }
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
    OPC() { return this.getToken(truefalseParser.OPC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
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
    words(i) {
        if (i === undefined) {
            return this.getRuleContexts(WordsContext);
        }
        else {
            return this.getRuleContext(i, WordsContext);
        }
    }
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
    CL() { return this.getToken(truefalseParser.CL, 0); }
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
class Bracket_escapedContext extends ParserRuleContext_1.ParserRuleContext {
    OPESC() { return this.getToken(truefalseParser.OPESC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bracket_escaped; }
    // @Override
    enterRule(listener) {
        if (listener.enterBracket_escaped) {
            listener.enterBracket_escaped(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBracket_escaped) {
            listener.exitBracket_escaped(this);
        }
    }
}
exports.Bracket_escapedContext = Bracket_escapedContext;
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
