"use strict";
// Generated from ./antlr/clozeParser.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.StringContext = exports.NumericContext = exports.Listline_Context = exports.NlContext = exports.ClnspContext = exports.ClContext = exports.OpcContext = exports.OprContext = exports.OpsContext = exports.OpmContext = exports.OppContext = exports.OpaContext = exports.OpqContext = exports.OpbContext = exports.OpuContext = exports.DclinesContext = exports.S_and_wContext = exports.LinesContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.PimagebitContext = exports.Choice_starContext = exports.Choice_minusContext = exports.Choice_plusContext = exports.Inline_choicesContext = exports.Choice_headContext = exports.Headed_inline_choicesContext = exports.Cloze_and_multiple_choice_textContext = exports.Single_gapContext = exports.GapContext = exports.Cloze_solution_groupedContext = exports.Cloze_instruction_groupedContext = exports.ClozeContext = exports.ResourceContext = exports.BitElemContext = exports.ClozesContext = exports.Bitmark_Context = exports.BitmarkContext = exports.clozeParser = void 0;
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
class clozeParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(clozeParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return clozeParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "clozeParser.g4"; }
    // @Override
    get ruleNames() { return clozeParser.ruleNames; }
    // @Override
    get serializedATN() { return clozeParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    bitmark() {
        let _localctx = new BitmarkContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, clozeParser.RULE_bitmark);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 192;
                            this.bitmark_();
                            this.state = 202;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === clozeParser.S || _la === clozeParser.NL) {
                                {
                                    {
                                        this.state = 196;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === clozeParser.S) {
                                            {
                                                {
                                                    this.state = 193;
                                                    this.match(clozeParser.S);
                                                }
                                            }
                                            this.state = 198;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 199;
                                        this.nl();
                                    }
                                }
                                this.state = 204;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 207;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.BitCloze) | (1 << clozeParser.BitClozeinstgrp) | (1 << clozeParser.BitClozesolgrp) | (1 << clozeParser.BitClozeandmulti))) !== 0));
                this.state = 209;
                this.match(clozeParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 2, clozeParser.RULE_bitmark_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this.clozes();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    clozes() {
        let _localctx = new ClozesContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, clozeParser.RULE_clozes);
        try {
            this.state = 217;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.BitCloze:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 213;
                        this.cloze();
                    }
                    break;
                case clozeParser.BitClozeinstgrp:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 214;
                        this.cloze_instruction_grouped();
                    }
                    break;
                case clozeParser.BitClozesolgrp:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 215;
                        this.cloze_solution_grouped();
                    }
                    break;
                case clozeParser.BitClozeandmulti:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 216;
                        this.cloze_and_multiple_choice_text();
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
    bitElem() {
        let _localctx = new BitElemContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, clozeParser.RULE_bitElem);
        try {
            let _alt;
            this.state = 260;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 219;
                        this.match(clozeParser.LIST_LINE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 220;
                        this.match(clozeParser.NOTBITMARK);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 221;
                        this.dclines();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 222;
                        this.gap();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 223;
                        this.atdef();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 224;
                        this.reference();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 225;
                        this.item();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 226;
                        this.instruction();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 227;
                        this.hint();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 228;
                        this.s_and_w();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 229;
                        this.example();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 230;
                        this.bool_label();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 231;
                        this.imagebit();
                        this.state = 235;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 232;
                                        this.nl();
                                    }
                                }
                            }
                            this.state = 237;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                        }
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 238;
                        this.audiobit();
                        this.state = 242;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 239;
                                        this.nl();
                                    }
                                }
                            }
                            this.state = 244;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                        }
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 245;
                        this.videobit();
                        this.state = 249;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 246;
                                        this.nl();
                                    }
                                }
                            }
                            this.state = 251;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                        }
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 252;
                        this.articlebit();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 253;
                        this.documentbit();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 254;
                        this.appbit();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 255;
                        this.websitebit();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 256;
                        this.stillimagefilmbit();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 257;
                        this.angleref();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 258;
                        this.anchor();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 259;
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
        this.enterRule(_localctx, 8, clozeParser.RULE_resource);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 262;
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
    cloze() {
        let _localctx = new ClozeContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, clozeParser.RULE_cloze);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 264;
                this.match(clozeParser.BitCloze);
                this.state = 265;
                this.format();
                this.state = 266;
                this.match(clozeParser.CL);
                this.state = 270;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 267;
                                this.nl();
                            }
                        }
                    }
                    this.state = 272;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                }
                this.state = 282;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 273;
                                this.bitElem();
                                this.state = 277;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 274;
                                                this.nl();
                                            }
                                        }
                                    }
                                    this.state = 279;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 284;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
    cloze_instruction_grouped() {
        let _localctx = new Cloze_instruction_groupedContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, clozeParser.RULE_cloze_instruction_grouped);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 285;
                this.match(clozeParser.BitClozeinstgrp);
                this.state = 286;
                this.format();
                this.state = 287;
                this.match(clozeParser.CL);
                this.state = 289;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                    case 1:
                        {
                            this.state = 288;
                            this.nl();
                        }
                        break;
                }
                this.state = 300;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 291;
                                this.bitElem();
                                this.state = 295;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 292;
                                                this.nl();
                                            }
                                        }
                                    }
                                    this.state = 297;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 302;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                }
                this.state = 306;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 303;
                                this.match(clozeParser.NL);
                            }
                        }
                    }
                    this.state = 308;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                }
                this.state = 322;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 309;
                            this.resource();
                            this.state = 319;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 313;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === clozeParser.NL) {
                                                {
                                                    {
                                                        this.state = 310;
                                                        this.match(clozeParser.NL);
                                                    }
                                                }
                                                this.state = 315;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 316;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 321;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
    cloze_solution_grouped() {
        let _localctx = new Cloze_solution_groupedContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, clozeParser.RULE_cloze_solution_grouped);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 324;
                this.match(clozeParser.BitClozesolgrp);
                this.state = 325;
                this.format();
                this.state = 326;
                this.match(clozeParser.CL);
                this.state = 328;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 327;
                            this.nl();
                        }
                        break;
                }
                this.state = 339;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 330;
                                this.bitElem();
                                this.state = 334;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 331;
                                                this.nl();
                                            }
                                        }
                                    }
                                    this.state = 336;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 341;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                }
                this.state = 345;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 342;
                                this.match(clozeParser.NL);
                            }
                        }
                    }
                    this.state = 347;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                }
                this.state = 361;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                    case 1:
                        {
                            this.state = 348;
                            this.resource();
                            this.state = 358;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 352;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === clozeParser.NL) {
                                                {
                                                    {
                                                        this.state = 349;
                                                        this.match(clozeParser.NL);
                                                    }
                                                }
                                                this.state = 354;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 355;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 360;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
    gap() {
        let _localctx = new GapContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, clozeParser.RULE_gap);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 363;
                this.single_gap();
                this.state = 371;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 369;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case clozeParser.OPU:
                                    {
                                        this.state = 364;
                                        this.single_gap();
                                    }
                                    break;
                                case clozeParser.OPB:
                                    {
                                        this.state = 365;
                                        this.instruction();
                                    }
                                    break;
                                case clozeParser.OPQ:
                                    {
                                        this.state = 366;
                                        this.hint();
                                    }
                                    break;
                                case clozeParser.OPC:
                                    {
                                        this.state = 367;
                                        this.item();
                                    }
                                    break;
                                case clozeParser.AtExampleWithStr:
                                case clozeParser.AtExamplecol:
                                case clozeParser.AtExamplecl:
                                    {
                                        this.state = 368;
                                        this.example();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 373;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
        this.enterRule(_localctx, 18, clozeParser.RULE_single_gap);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                this.match(clozeParser.OPU);
                this.state = 378;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 375;
                            this.numeric();
                        }
                        break;
                    case 2:
                        {
                            this.state = 376;
                            this.string();
                        }
                        break;
                    case 3:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                }
                this.state = 383;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 380;
                                this.s_and_w();
                            }
                        }
                    }
                    this.state = 385;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                }
                this.state = 386;
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
    cloze_and_multiple_choice_text() {
        let _localctx = new Cloze_and_multiple_choice_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, clozeParser.RULE_cloze_and_multiple_choice_text);
        let _la;
        try {
            let _alt;
            this.state = 451;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 388;
                        this.match(clozeParser.BitClozeandmulti);
                        this.state = 389;
                        this.format();
                        this.state = 390;
                        this.match(clozeParser.CL);
                        this.state = 400;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 391;
                                        this.bitElem();
                                        this.state = 395;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 392;
                                                        this.nl();
                                                    }
                                                }
                                            }
                                            this.state = 397;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 402;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 403;
                        this.match(clozeParser.BitClozeandmulti);
                        this.state = 404;
                        this.format();
                        this.state = 405;
                        this.match(clozeParser.CL);
                        this.state = 409;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === clozeParser.NL) {
                            {
                                {
                                    this.state = 406;
                                    this.nl();
                                }
                            }
                            this.state = 411;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 426;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 426;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 412;
                                                    this.bitElem();
                                                    this.state = 416;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 413;
                                                                    this.nl();
                                                                }
                                                            }
                                                        }
                                                        this.state = 418;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                                                    }
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 419;
                                                    this.headed_inline_choices();
                                                    this.state = 423;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 420;
                                                                    this.nl();
                                                                }
                                                            }
                                                        }
                                                        this.state = 425;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                                                    }
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 428;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 433;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 430;
                                        this.match(clozeParser.NL);
                                    }
                                }
                            }
                            this.state = 435;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        }
                        this.state = 449;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                            case 1:
                                {
                                    this.state = 436;
                                    this.resource();
                                    this.state = 446;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 440;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === clozeParser.NL) {
                                                        {
                                                            {
                                                                this.state = 437;
                                                                this.match(clozeParser.NL);
                                                            }
                                                        }
                                                        this.state = 442;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 443;
                                                    this.resource();
                                                }
                                            }
                                        }
                                        this.state = 448;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
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
    headed_inline_choices() {
        let _localctx = new Headed_inline_choicesContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, clozeParser.RULE_headed_inline_choices);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 454;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPS) {
                    {
                        this.state = 453;
                        this.choice_head();
                    }
                }
                this.state = 456;
                this.inline_choices();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    choice_head() {
        let _localctx = new Choice_headContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, clozeParser.RULE_choice_head);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 458;
                this.match(clozeParser.OPS);
                this.state = 459;
                this.s_and_w();
                this.state = 460;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    inline_choices() {
        let _localctx = new Inline_choicesContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, clozeParser.RULE_inline_choices);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 465;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                    case 1:
                        {
                            this.state = 462;
                            this.choice_plus();
                        }
                        break;
                    case 2:
                        {
                            this.state = 463;
                            this.choice_minus();
                        }
                        break;
                    case 3:
                        {
                            this.state = 464;
                            this.choice_star();
                        }
                        break;
                }
                this.state = 472;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 470;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 467;
                                        this.choice_plus();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 468;
                                        this.choice_minus();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 469;
                                        this.choice_star();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 474;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
        this.enterRule(_localctx, 28, clozeParser.RULE_choice_plus);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 476;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPC) {
                    {
                        this.state = 475;
                        this.item();
                    }
                }
                this.state = 478;
                this.match(clozeParser.OPP);
                this.state = 480;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 479;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 482;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 484;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 30, clozeParser.RULE_choice_minus);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPC) {
                    {
                        this.state = 486;
                        this.item();
                    }
                }
                this.state = 489;
                this.match(clozeParser.OPM);
                this.state = 491;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 490;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 493;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 495;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 32, clozeParser.RULE_choice_star);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPC) {
                    {
                        this.state = 497;
                        this.item();
                    }
                }
                this.state = 500;
                this.match(clozeParser.OPR);
                this.state = 502;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 501;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 504;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 506;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pimagebit() {
        let _localctx = new PimagebitContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, clozeParser.RULE_pimagebit);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 508;
                this.image_one();
                this.state = 512;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 509;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 514;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                }
                this.state = 519;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPATALT) {
                    {
                        this.state = 515;
                        this.match(clozeParser.OPATALT);
                        this.state = 516;
                        this.words();
                        this.state = 517;
                        this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 36, clozeParser.RULE_atpoint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 521;
                this.match(clozeParser.AtPoints);
                this.state = 522;
                this.match(clozeParser.NUMERIC);
                this.state = 523;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 38, clozeParser.RULE_format);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 528;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 525;
                                this.resource_format();
                            }
                        }
                    }
                    this.state = 530;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                }
                this.state = 536;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (clozeParser.AmpAudio - 82)) | (1 << (clozeParser.AmpImage - 82)) | (1 << (clozeParser.AmpImageZoom - 82)) | (1 << (clozeParser.AmpVideo - 82)) | (1 << (clozeParser.AmpArticle - 82)) | (1 << (clozeParser.AmpDocument - 82)) | (1 << (clozeParser.AmpApp - 82)) | (1 << (clozeParser.AmpWebsite - 82)) | (1 << (clozeParser.AmpStillImageFilm - 82)) | (1 << (clozeParser.AmpPdf - 82)) | (1 << (clozeParser.AmpAudioLink - 82)) | (1 << (clozeParser.AmpImageLink - 82)) | (1 << (clozeParser.AmpVideoLink - 82)) | (1 << (clozeParser.AmpArticleLink - 82)) | (1 << (clozeParser.AmpDocumentLink - 82)) | (1 << (clozeParser.AmpDocumentDownload - 82)) | (1 << (clozeParser.AmpAppLink - 82)) | (1 << (clozeParser.AmpWebsiteLink - 82)) | (1 << (clozeParser.AmpStillImageFilmLink - 82)))) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (clozeParser.AmpVideoEmbed - 122)) | (1 << (clozeParser.AmpDocumentEmbed - 122)) | (1 << (clozeParser.AmpStillImageFilmEmbed - 122)) | (1 << (clozeParser.ColonText - 122)) | (1 << (clozeParser.ColonJson - 122)))) !== 0)) {
                    {
                        this.state = 534;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case clozeParser.ColonText:
                                {
                                    this.state = 531;
                                    this.match(clozeParser.ColonText);
                                }
                                break;
                            case clozeParser.ColonJson:
                                {
                                    this.state = 532;
                                    this.match(clozeParser.ColonJson);
                                }
                                break;
                            case clozeParser.AmpAudio:
                            case clozeParser.AmpImage:
                            case clozeParser.AmpImageZoom:
                            case clozeParser.AmpVideo:
                            case clozeParser.AmpArticle:
                            case clozeParser.AmpDocument:
                            case clozeParser.AmpApp:
                            case clozeParser.AmpWebsite:
                            case clozeParser.AmpStillImageFilm:
                            case clozeParser.AmpPdf:
                            case clozeParser.AmpAudioLink:
                            case clozeParser.AmpImageLink:
                            case clozeParser.AmpVideoLink:
                            case clozeParser.AmpArticleLink:
                            case clozeParser.AmpDocumentLink:
                            case clozeParser.AmpDocumentDownload:
                            case clozeParser.AmpAppLink:
                            case clozeParser.AmpWebsiteLink:
                            case clozeParser.AmpStillImageFilmLink:
                            case clozeParser.AmpVideoEmbed:
                            case clozeParser.AmpDocumentEmbed:
                            case clozeParser.AmpStillImageFilmEmbed:
                                {
                                    this.state = 533;
                                    this.resource_format_extra();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 538;
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
        this.enterRule(_localctx, 40, clozeParser.RULE_resource_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 539;
                _la = this._input.LA(1);
                if (!(((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (clozeParser.AmpArticle - 86)) | (1 << (clozeParser.AmpDocument - 86)) | (1 << (clozeParser.AmpWebsite - 86)) | (1 << (clozeParser.AmpStillImageFilm - 86)) | (1 << (clozeParser.AmpAudioLink - 86)) | (1 << (clozeParser.AmpImageLink - 86)) | (1 << (clozeParser.AmpVideoLink - 86)) | (1 << (clozeParser.AmpArticleLink - 86)) | (1 << (clozeParser.AmpDocumentLink - 86)) | (1 << (clozeParser.AmpDocumentDownload - 86)) | (1 << (clozeParser.AmpAppLink - 86)) | (1 << (clozeParser.AmpWebsiteLink - 86)) | (1 << (clozeParser.AmpStillImageFilmLink - 86)))) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (clozeParser.AmpVideoEmbed - 122)) | (1 << (clozeParser.AmpAudioEmbed - 122)) | (1 << (clozeParser.AmpDocumentEmbed - 122)) | (1 << (clozeParser.AmpStillImageFilmEmbed - 122)) | (1 << (clozeParser.BitmarkMinus - 122)) | (1 << (clozeParser.BitmarkPlus - 122)) | (1 << (clozeParser.ColonJson - 122)) | (1 << (clozeParser.Prosemirror - 122)) | (1 << (clozeParser.Placeholder - 122)))) !== 0))) {
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
        this.enterRule(_localctx, 42, clozeParser.RULE_resource_format_extra);
        try {
            this.state = 550;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AmpImage:
                case clozeParser.AmpImageZoom:
                case clozeParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 541;
                        this.image_format();
                    }
                    break;
                case clozeParser.AmpAudio:
                case clozeParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 542;
                        this.audio_format();
                    }
                    break;
                case clozeParser.AmpVideo:
                case clozeParser.AmpVideoLink:
                case clozeParser.AmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 543;
                        this.video_format();
                    }
                    break;
                case clozeParser.AmpArticle:
                case clozeParser.AmpArticleLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 544;
                        this.article_format();
                    }
                    break;
                case clozeParser.AmpDocument:
                case clozeParser.AmpDocumentLink:
                case clozeParser.AmpDocumentDownload:
                case clozeParser.AmpDocumentEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 545;
                        this.document_format();
                    }
                    break;
                case clozeParser.AmpApp:
                case clozeParser.AmpAppLink:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 546;
                        this.app_format();
                    }
                    break;
                case clozeParser.AmpWebsite:
                case clozeParser.AmpWebsiteLink:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 547;
                        this.website_format();
                    }
                    break;
                case clozeParser.AmpStillImageFilm:
                case clozeParser.AmpStillImageFilmLink:
                case clozeParser.AmpStillImageFilmEmbed:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 548;
                        this.stillimagefilm_format();
                    }
                    break;
                case clozeParser.AmpPdf:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 549;
                        this.match(clozeParser.AmpPdf);
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
        this.enterRule(_localctx, 44, clozeParser.RULE_format2);
        try {
            this.state = 558;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.BitmarkMinus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 552;
                        this.match(clozeParser.BitmarkMinus);
                    }
                    break;
                case clozeParser.BitmarkPlus:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 553;
                        this.match(clozeParser.BitmarkPlus);
                    }
                    break;
                case clozeParser.ColonText:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 554;
                        this.match(clozeParser.ColonText);
                    }
                    break;
                case clozeParser.Placeholder:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 555;
                        this.match(clozeParser.Placeholder);
                    }
                    break;
                case clozeParser.ColonJson:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 556;
                        this.match(clozeParser.ColonJson);
                    }
                    break;
                case clozeParser.EOF:
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
        this.enterRule(_localctx, 46, clozeParser.RULE_image_format);
        let _la;
        try {
            this.state = 573;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 560;
                        this.match(clozeParser.AmpImage);
                        this.state = 563;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case clozeParser.Image_type:
                                {
                                    {
                                        this.state = 561;
                                        this.match(clozeParser.Image_type);
                                    }
                                }
                                break;
                            case clozeParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 562;
                                        this.match(clozeParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case clozeParser.CL:
                            case clozeParser.AmpAudio:
                            case clozeParser.AmpImage:
                            case clozeParser.AmpImageZoom:
                            case clozeParser.AmpVideo:
                            case clozeParser.AmpArticle:
                            case clozeParser.AmpDocument:
                            case clozeParser.AmpApp:
                            case clozeParser.AmpWebsite:
                            case clozeParser.AmpStillImageFilm:
                            case clozeParser.AmpPdf:
                            case clozeParser.AmpAudioLink:
                            case clozeParser.AmpImageLink:
                            case clozeParser.AmpVideoLink:
                            case clozeParser.AmpArticleLink:
                            case clozeParser.AmpDocumentLink:
                            case clozeParser.AmpDocumentDownload:
                            case clozeParser.AmpAppLink:
                            case clozeParser.AmpWebsiteLink:
                            case clozeParser.AmpStillImageFilmLink:
                            case clozeParser.AmpVideoEmbed:
                            case clozeParser.AmpDocumentEmbed:
                            case clozeParser.AmpStillImageFilmEmbed:
                            case clozeParser.ColonText:
                            case clozeParser.ColonJson:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case clozeParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 565;
                        this.match(clozeParser.AmpImageLink);
                        this.state = 567;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.Image_type) {
                            {
                                this.state = 566;
                                this.match(clozeParser.Image_type);
                            }
                        }
                    }
                    break;
                case clozeParser.AmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 569;
                        this.match(clozeParser.AmpImageZoom);
                        this.state = 571;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.Image_type) {
                            {
                                this.state = 570;
                                this.match(clozeParser.Image_type);
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
        this.enterRule(_localctx, 48, clozeParser.RULE_video_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 575;
                _la = this._input.LA(1);
                if (!(_la === clozeParser.AmpVideo || _la === clozeParser.AmpVideoLink || _la === clozeParser.AmpVideoEmbed)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 578;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.COLON) {
                    {
                        this.state = 576;
                        this.match(clozeParser.COLON);
                        this.state = 577;
                        this.match(clozeParser.Video_type);
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
        this.enterRule(_localctx, 50, clozeParser.RULE_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 580;
                _la = this._input.LA(1);
                if (!(_la === clozeParser.AmpArticle || _la === clozeParser.AmpArticleLink)) {
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
        this.enterRule(_localctx, 52, clozeParser.RULE_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 582;
                _la = this._input.LA(1);
                if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (clozeParser.AmpDocument - 87)) | (1 << (clozeParser.AmpDocumentLink - 87)) | (1 << (clozeParser.AmpDocumentDownload - 87)))) !== 0) || _la === clozeParser.AmpDocumentEmbed)) {
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
        this.enterRule(_localctx, 54, clozeParser.RULE_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 584;
                _la = this._input.LA(1);
                if (!(_la === clozeParser.AmpApp || _la === clozeParser.AmpAppLink)) {
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
        this.enterRule(_localctx, 56, clozeParser.RULE_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 586;
                _la = this._input.LA(1);
                if (!(_la === clozeParser.AmpWebsite || _la === clozeParser.AmpWebsiteLink)) {
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
        this.enterRule(_localctx, 58, clozeParser.RULE_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 588;
                _la = this._input.LA(1);
                if (!(_la === clozeParser.AmpStillImageFilm || _la === clozeParser.AmpStillImageFilmLink || _la === clozeParser.AmpStillImageFilmEmbed)) {
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
        this.enterRule(_localctx, 60, clozeParser.RULE_op_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 590;
                _la = this._input.LA(1);
                if (!(_la === clozeParser.OpAmpArticle || _la === clozeParser.OpAmpArticleLink)) {
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
        this.enterRule(_localctx, 62, clozeParser.RULE_op_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 592;
                _la = this._input.LA(1);
                if (!(((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (clozeParser.OpAmpDocument - 98)) | (1 << (clozeParser.OpAmpDocumentLink - 98)) | (1 << (clozeParser.OpAmpDocumentDownload - 98)) | (1 << (clozeParser.OpAmpDocumentEmbed - 98)))) !== 0))) {
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
        this.enterRule(_localctx, 64, clozeParser.RULE_op_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 594;
                _la = this._input.LA(1);
                if (!(_la === clozeParser.OpAmpApp || _la === clozeParser.OpAmpAppLink)) {
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
        this.enterRule(_localctx, 66, clozeParser.RULE_op_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 596;
                _la = this._input.LA(1);
                if (!(_la === clozeParser.OpAmpWebsite || _la === clozeParser.OpAmpWebsiteLink)) {
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
        this.enterRule(_localctx, 68, clozeParser.RULE_op_video_format);
        try {
            this.state = 613;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OpAmpVideo:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 598;
                        this.match(clozeParser.OpAmpVideo);
                        this.state = 601;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                            case 1:
                                {
                                    this.state = 599;
                                    this.match(clozeParser.COLON);
                                    this.state = 600;
                                    this.match(clozeParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case clozeParser.OpAmpVideoLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 603;
                        this.match(clozeParser.OpAmpVideoLink);
                        this.state = 606;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                            case 1:
                                {
                                    this.state = 604;
                                    this.match(clozeParser.COLON);
                                    this.state = 605;
                                    this.match(clozeParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case clozeParser.OpAmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 608;
                        this.match(clozeParser.OpAmpVideoEmbed);
                        this.state = 611;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                            case 1:
                                {
                                    this.state = 609;
                                    this.match(clozeParser.COLON);
                                    this.state = 610;
                                    this.match(clozeParser.Video_type);
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
        this.enterRule(_localctx, 70, clozeParser.RULE_op_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 615;
                _la = this._input.LA(1);
                if (!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (clozeParser.OpAmpStillImageFilm - 101)) | (1 << (clozeParser.OpAmpStillImageFilmLink - 101)) | (1 << (clozeParser.OpAmpStillImageFilmEmbed - 101)))) !== 0))) {
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
        this.enterRule(_localctx, 72, clozeParser.RULE_articlebit);
        try {
            this.state = 623;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OpAmpArticle:
                case clozeParser.OpAmpArticleLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 617;
                        this.op_article_format();
                        this.state = 618;
                        this.match(clozeParser.COLON);
                        this.state = 619;
                        this.url();
                        this.state = 620;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.ArticleText:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 622;
                        this.match(clozeParser.ArticleText);
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
        this.enterRule(_localctx, 74, clozeParser.RULE_documentbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 625;
                this.op_document_format();
                this.state = 626;
                this.match(clozeParser.COLON);
                this.state = 627;
                this.url();
                this.state = 628;
                this.match(clozeParser.CL);
                this.state = 633;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPATALT) {
                    {
                        this.state = 629;
                        this.match(clozeParser.OPATALT);
                        this.state = 630;
                        this.words();
                        this.state = 631;
                        this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 76, clozeParser.RULE_websitebit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 635;
                this.op_website_format();
                this.state = 636;
                this.match(clozeParser.COLON);
                this.state = 637;
                this.url();
                this.state = 638;
                this.match(clozeParser.CL);
                this.state = 643;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPATALT) {
                    {
                        this.state = 639;
                        this.match(clozeParser.OPATALT);
                        this.state = 640;
                        this.words();
                        this.state = 641;
                        this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 78, clozeParser.RULE_appbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 645;
                this.op_app_format();
                this.state = 646;
                this.match(clozeParser.COLON);
                this.state = 649;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case clozeParser.URL:
                        {
                            this.state = 647;
                            this.url();
                        }
                        break;
                    case clozeParser.TEL:
                        {
                            this.state = 648;
                            this.telephone();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 651;
                this.match(clozeParser.CL);
                this.state = 656;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPATALT) {
                    {
                        this.state = 652;
                        this.match(clozeParser.OPATALT);
                        this.state = 653;
                        this.words();
                        this.state = 654;
                        this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 80, clozeParser.RULE_stillimagefilmbit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 658;
                this.stillimg_one();
                this.state = 662;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 659;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 664;
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
        this.enterRule(_localctx, 82, clozeParser.RULE_stillimg_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 665;
                this.op_stillimagefilm_format();
                this.state = 666;
                this.match(clozeParser.COLON);
                this.state = 670;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === clozeParser.S) {
                    {
                        {
                            this.state = 667;
                            this.match(clozeParser.S);
                        }
                    }
                    this.state = 672;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 673;
                this.url();
                this.state = 674;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 84, clozeParser.RULE_videobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 676;
                this.video_one();
                this.state = 680;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
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
        this.enterRule(_localctx, 86, clozeParser.RULE_video_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 683;
                this.op_video_format();
                this.state = 684;
                this.match(clozeParser.COLON);
                this.state = 685;
                this.url();
                this.state = 686;
                this.match(clozeParser.CL);
                this.state = 691;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                    case 1:
                        {
                            this.state = 687;
                            this.match(clozeParser.OPATALT);
                            this.state = 688;
                            this.words();
                            this.state = 689;
                            this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 88, clozeParser.RULE_imagebit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 693;
                this.image_one();
                this.state = 697;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 694;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 699;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                }
                this.state = 702;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                    case 1:
                        {
                            this.state = 700;
                            this.match(clozeParser.NL);
                            this.state = 701;
                            this.match(clozeParser.ShowInIndex);
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
        this.enterRule(_localctx, 90, clozeParser.RULE_image_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 704;
                this.op_image_format();
                this.state = 705;
                this.match(clozeParser.COLON);
                this.state = 709;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === clozeParser.S) {
                    {
                        {
                            this.state = 706;
                            this.match(clozeParser.S);
                        }
                    }
                    this.state = 711;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 712;
                this.url();
                this.state = 713;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 92, clozeParser.RULE_op_image_format);
        let _la;
        try {
            this.state = 729;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OpAmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 715;
                        this.match(clozeParser.OpAmpImage);
                        this.state = 718;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case clozeParser.Image_type:
                                {
                                    {
                                        this.state = 716;
                                        this.match(clozeParser.Image_type);
                                    }
                                }
                                break;
                            case clozeParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 717;
                                        this.match(clozeParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case clozeParser.COLON:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case clozeParser.OpAmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 720;
                        this.match(clozeParser.OpAmpImageLink);
                        this.state = 722;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.Image_type) {
                            {
                                this.state = 721;
                                this.match(clozeParser.Image_type);
                            }
                        }
                    }
                    break;
                case clozeParser.OpAmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 724;
                        this.match(clozeParser.OpAmpImageZoom);
                        this.state = 726;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.Image_type) {
                            {
                                this.state = 725;
                                this.match(clozeParser.Image_type);
                            }
                        }
                    }
                    break;
                case clozeParser.OpAmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 728;
                        this.match(clozeParser.OpAmpImageWAudio);
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
        this.enterRule(_localctx, 94, clozeParser.RULE_image_chained);
        let _la;
        try {
            let _alt;
            this.state = 748;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 731;
                        this.match(clozeParser.AtSrc);
                        this.state = 732;
                        this.match(clozeParser.COLON);
                        this.state = 733;
                        this.url();
                        this.state = 734;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.AtWidth:
                case clozeParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 736;
                        _la = this._input.LA(1);
                        if (!(_la === clozeParser.AtWidth || _la === clozeParser.AtHeight)) {
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
                        this.match(clozeParser.COLON);
                        this.state = 738;
                        this.match(clozeParser.NUMERIC);
                        this.state = 739;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.OPATALT:
                case clozeParser.OpAtCaption:
                case clozeParser.OpAtLicense:
                case clozeParser.OpAtCopyright:
                case clozeParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 740;
                        _la = this._input.LA(1);
                        if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (clozeParser.OPATALT - 70)) | (1 << (clozeParser.OpAtCaption - 70)) | (1 << (clozeParser.OpAtLicense - 70)) | (1 << (clozeParser.OpAtCopyright - 70)) | (1 << (clozeParser.OpAtSearch - 70)))) !== 0))) {
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
                        _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
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
                            _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                        }
                        this.state = 747;
                        this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 96, clozeParser.RULE_image_chained4match);
        let _la;
        try {
            let _alt;
            this.state = 767;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 750;
                        this.match(clozeParser.AtSrc);
                        this.state = 751;
                        this.match(clozeParser.COLON);
                        this.state = 752;
                        this.url();
                        this.state = 753;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.AtWidth:
                case clozeParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 755;
                        _la = this._input.LA(1);
                        if (!(_la === clozeParser.AtWidth || _la === clozeParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 756;
                        this.match(clozeParser.COLON);
                        this.state = 757;
                        this.match(clozeParser.NUMERIC);
                        this.state = 758;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.OPATALT:
                case clozeParser.OpAtCaption:
                case clozeParser.OpAtLicense:
                case clozeParser.OpAtCopyright:
                case clozeParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 759;
                        _la = this._input.LA(1);
                        if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (clozeParser.OPATALT - 70)) | (1 << (clozeParser.OpAtCaption - 70)) | (1 << (clozeParser.OpAtLicense - 70)) | (1 << (clozeParser.OpAtCopyright - 70)) | (1 << (clozeParser.OpAtSearch - 70)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 763;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 760;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 765;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
                        }
                        this.state = 766;
                        this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 98, clozeParser.RULE_audiobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 769;
                this.audio_one();
                this.state = 773;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 770;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 775;
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
        this.enterRule(_localctx, 100, clozeParser.RULE_audio_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 776;
                this.op_audio_format();
                this.state = 777;
                this.match(clozeParser.COLON);
                this.state = 778;
                this.url();
                this.state = 779;
                this.match(clozeParser.CL);
                this.state = 784;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                    case 1:
                        {
                            this.state = 780;
                            this.match(clozeParser.OPATALT);
                            this.state = 781;
                            this.words();
                            this.state = 782;
                            this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 102, clozeParser.RULE_audio_format);
        let _la;
        try {
            this.state = 796;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 786;
                        this.match(clozeParser.AmpAudio);
                        this.state = 789;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.COLON) {
                            {
                                this.state = 787;
                                this.match(clozeParser.COLON);
                                this.state = 788;
                                this.match(clozeParser.Audio_type);
                            }
                        }
                    }
                    break;
                case clozeParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 791;
                        this.match(clozeParser.AmpAudioLink);
                        this.state = 794;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.COLON) {
                            {
                                this.state = 792;
                                this.match(clozeParser.COLON);
                                this.state = 793;
                                this.match(clozeParser.Audio_type);
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
        this.enterRule(_localctx, 104, clozeParser.RULE_op_audio_format);
        try {
            this.state = 813;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OpAmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 798;
                        this.match(clozeParser.OpAmpAudio);
                        this.state = 801;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
                            case 1:
                                {
                                    this.state = 799;
                                    this.match(clozeParser.COLON);
                                    this.state = 800;
                                    this.match(clozeParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case clozeParser.OpAmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 803;
                        this.match(clozeParser.OpAmpAudioLink);
                        this.state = 806;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                            case 1:
                                {
                                    this.state = 804;
                                    this.match(clozeParser.COLON);
                                    this.state = 805;
                                    this.match(clozeParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case clozeParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 808;
                        this.match(clozeParser.OpAmpAudioEmbed);
                        this.state = 811;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                            case 1:
                                {
                                    this.state = 809;
                                    this.match(clozeParser.COLON);
                                    this.state = 810;
                                    this.match(clozeParser.Audio_type);
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
        this.enterRule(_localctx, 106, clozeParser.RULE_resource_chained);
        let _la;
        try {
            let _alt;
            this.state = 846;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OPA:
                case clozeParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 818;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case clozeParser.OPA:
                                {
                                    this.state = 815;
                                    this.match(clozeParser.OPA);
                                    this.state = 816;
                                    this.s_and_w();
                                }
                                break;
                            case clozeParser.AtSrc:
                                {
                                    this.state = 817;
                                    this.match(clozeParser.AtSrc);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 820;
                        this.match(clozeParser.COLON);
                        this.state = 824;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 821;
                                        this.match(clozeParser.S);
                                    }
                                }
                            }
                            this.state = 826;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                        }
                        this.state = 829;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 829;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case clozeParser.S:
                                            case clozeParser.OPS:
                                            case clozeParser.CL:
                                            case clozeParser.COLON:
                                            case clozeParser.AMP:
                                            case clozeParser.Greater:
                                            case clozeParser.Less:
                                            case clozeParser.DBLEQ:
                                            case clozeParser.RightAngle:
                                            case clozeParser.RightArrow:
                                            case clozeParser.OP_N_ETC:
                                            case clozeParser.NUMERIC:
                                            case clozeParser.STRING:
                                            case clozeParser.NOTBITMARK:
                                            case clozeParser.ELIPSIS:
                                            case clozeParser.SENTENCE:
                                            case clozeParser.BARSTRING:
                                            case clozeParser.URL:
                                                {
                                                    this.state = 827;
                                                    this.s_and_w();
                                                }
                                                break;
                                            case clozeParser.NL:
                                                {
                                                    this.state = 828;
                                                    this.match(clozeParser.NL);
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
                            this.state = 831;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 833;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.AtWidth:
                case clozeParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 834;
                        _la = this._input.LA(1);
                        if (!(_la === clozeParser.AtWidth || _la === clozeParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 835;
                        this.match(clozeParser.COLON);
                        this.state = 836;
                        this.match(clozeParser.NUMERIC);
                        this.state = 837;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.OPATALT:
                case clozeParser.OpAtCaption:
                case clozeParser.OpAtLicense:
                case clozeParser.OpAtCopyright:
                case clozeParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 838;
                        _la = this._input.LA(1);
                        if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (clozeParser.OPATALT - 70)) | (1 << (clozeParser.OpAtCaption - 70)) | (1 << (clozeParser.OpAtLicense - 70)) | (1 << (clozeParser.OpAtCopyright - 70)) | (1 << (clozeParser.OpAtSearch - 70)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 842;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 839;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 844;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
                        }
                        this.state = 845;
                        this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 108, clozeParser.RULE_telephone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 848;
                this.match(clozeParser.TEL);
                this.state = 849;
                this.match(clozeParser.PLUS);
                this.state = 850;
                this.match(clozeParser.NUMERIC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 110, clozeParser.RULE_url);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 852;
                this.match(clozeParser.URL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 112, clozeParser.RULE_item);
        let _la;
        try {
            let _alt;
            this.state = 884;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 854;
                        this.match(clozeParser.OPC);
                        this.state = 855;
                        this.match(clozeParser.CL);
                        this.state = 863;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                            case 1:
                                {
                                    this.state = 859;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === clozeParser.S) {
                                        {
                                            {
                                                this.state = 856;
                                                this.match(clozeParser.S);
                                            }
                                        }
                                        this.state = 861;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 862;
                                    this.lead();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 865;
                        this.match(clozeParser.OPC);
                        this.state = 866;
                        this.s_and_w();
                        this.state = 871;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 869;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 867;
                                                this.match(clozeParser.COLON);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 868;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 873;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                        }
                        this.state = 874;
                        this.match(clozeParser.CL);
                        this.state = 882;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                            case 1:
                                {
                                    this.state = 878;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === clozeParser.S) {
                                        {
                                            {
                                                this.state = 875;
                                                this.match(clozeParser.S);
                                            }
                                        }
                                        this.state = 880;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 881;
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
        this.enterRule(_localctx, 114, clozeParser.RULE_lead);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 886;
                this.match(clozeParser.OPC);
                this.state = 887;
                this.s_and_w();
                this.state = 892;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 890;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 888;
                                        this.match(clozeParser.COLON);
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 889;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 894;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
                }
                this.state = 895;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 116, clozeParser.RULE_angleref);
        try {
            this.state = 907;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OPRANGLES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 897;
                        this.match(clozeParser.OPRANGLES);
                        this.state = 899;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                            case 1:
                                {
                                    this.state = 898;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 901;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.OPRANGLEL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 902;
                        this.match(clozeParser.OPRANGLEL);
                        this.state = 904;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                            case 1:
                                {
                                    this.state = 903;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 906;
                        this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 118, clozeParser.RULE_example);
        let _la;
        try {
            this.state = 916;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AtExamplecl:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 909;
                        this.match(clozeParser.AtExamplecl);
                    }
                    break;
                case clozeParser.AtExampleWithStr:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 910;
                        this.match(clozeParser.AtExampleWithStr);
                    }
                    break;
                case clozeParser.AtExamplecol:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 911;
                        this.match(clozeParser.AtExamplecol);
                        this.state = 913;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.SENTENCE) {
                            {
                                this.state = 912;
                                this.match(clozeParser.SENTENCE);
                            }
                        }
                        this.state = 915;
                        this.match(clozeParser.EOF);
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
        this.enterRule(_localctx, 120, clozeParser.RULE_bracketed_text);
        let _la;
        try {
            let _alt;
            this.state = 957;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 918;
                        this.match(clozeParser.BracEnclose);
                        this.state = 920;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                            case 1:
                                {
                                    this.state = 919;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 943;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 922;
                                        this.s_and_w();
                                        this.state = 932;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 923;
                                                        this.match(clozeParser.NL);
                                                        this.state = 927;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 924;
                                                                        this.match(clozeParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 929;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 934;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                                        }
                                        this.state = 938;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === clozeParser.NL) {
                                            {
                                                {
                                                    this.state = 935;
                                                    this.match(clozeParser.NL);
                                                }
                                            }
                                            this.state = 940;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                            }
                            this.state = 945;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                        }
                        this.state = 946;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 947;
                        this.match(clozeParser.BracEnclose);
                        this.state = 953;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NL - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
                            {
                                this.state = 951;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 948;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 949;
                                            this.match(clozeParser.NL);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 950;
                                            this.match(clozeParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 955;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 956;
                        this.match(clozeParser.EOF);
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
        this.enterRule(_localctx, 122, clozeParser.RULE_reference);
        let _la;
        try {
            let _alt;
            this.state = 981;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 128, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 959;
                        this.match(clozeParser.AtReference);
                        this.state = 964;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 964;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 960;
                                                    this.s_and_w();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 961;
                                                    this.match(clozeParser.COLON);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 962;
                                                    this.match(clozeParser.URL);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 963;
                                                    this.match(clozeParser.NL);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 966;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 968;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 969;
                        this.match(clozeParser.AtReference);
                        this.state = 977;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NL - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
                            {
                                this.state = 975;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 970;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 971;
                                            this.match(clozeParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 972;
                                            this.match(clozeParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 973;
                                            this.match(clozeParser.NL);
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 974;
                                            this.match(clozeParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 979;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 980;
                        this.match(clozeParser.EOF);
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
        this.enterRule(_localctx, 124, clozeParser.RULE_progress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 983;
                this.match(clozeParser.AtProgress);
                this.state = 984;
                this.s_and_w();
                this.state = 985;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 126, clozeParser.RULE_dateprop);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 987;
                this.match(clozeParser.AtDate);
                this.state = 991;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 991;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 988;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 989;
                                            this.match(clozeParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 990;
                                            this.match(clozeParser.NL);
                                        }
                                        break;
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 993;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 995;
                this.match(clozeParser.CL);
                this.state = 997;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.AtDate) {
                    {
                        this.state = 996;
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
        this.enterRule(_localctx, 128, clozeParser.RULE_dateprop_chained);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 999;
                this.match(clozeParser.AtDate);
                this.state = 1003;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1003;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1000;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1001;
                                            this.match(clozeParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1002;
                                            this.match(clozeParser.NL);
                                        }
                                        break;
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1005;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 1007;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 130, clozeParser.RULE_instruction);
        let _la;
        try {
            let _alt;
            this.state = 1055;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1009;
                        this.match(clozeParser.OPB);
                        this.state = 1013;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1010;
                                        this.match(clozeParser.NL);
                                    }
                                }
                            }
                            this.state = 1015;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                        }
                        this.state = 1017;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1016;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1034;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1028;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === clozeParser.NL) {
                                            {
                                                {
                                                    this.state = 1019;
                                                    this.match(clozeParser.NL);
                                                    this.state = 1023;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1020;
                                                                    this.match(clozeParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1025;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                                    }
                                                }
                                            }
                                            this.state = 1030;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 1031;
                                        this.s_and_w();
                                    }
                                }
                            }
                            this.state = 1036;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                        }
                        this.state = 1040;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === clozeParser.NL) {
                            {
                                {
                                    this.state = 1037;
                                    this.match(clozeParser.NL);
                                }
                            }
                            this.state = 1042;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1043;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1044;
                        this.match(clozeParser.OPB);
                        this.state = 1048;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === clozeParser.NL) {
                            {
                                {
                                    this.state = 1045;
                                    this.match(clozeParser.NL);
                                }
                            }
                            this.state = 1050;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1052;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
                            {
                                this.state = 1051;
                                this.s_and_w();
                            }
                        }
                        this.state = 1054;
                        this.match(clozeParser.EOF);
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
        this.enterRule(_localctx, 132, clozeParser.RULE_hint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1057;
                this.match(clozeParser.OPQ);
                this.state = 1059;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1058;
                            _la = this._input.LA(1);
                            if (_la <= 0 || (_la === clozeParser.CL)) {
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
                    this.state = 1061;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPDOT) | (1 << clozeParser.BitCloze) | (1 << clozeParser.BitClozeinstgrp) | (1 << clozeParser.BitClozesolgrp) | (1 << clozeParser.BitClozeandmulti) | (1 << clozeParser.OPSP) | (1 << clozeParser.OPDOLL) | (1 << clozeParser.OPBUL) | (1 << clozeParser.OPESC) | (1 << clozeParser.OPRANGLES) | (1 << clozeParser.OPRANGLEL) | (1 << clozeParser.OPDANGLE) | (1 << clozeParser.OPU) | (1 << clozeParser.OPB) | (1 << clozeParser.OPQ) | (1 << clozeParser.OPA) | (1 << clozeParser.OPP) | (1 << clozeParser.OPM) | (1 << clozeParser.OPS) | (1 << clozeParser.OPR) | (1 << clozeParser.OPC) | (1 << clozeParser.OPHASH) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.DBLCOLON) | (1 << clozeParser.PLUS) | (1 << clozeParser.DotAt) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.UNSCO - 32)) | (1 << (clozeParser.COMMENT - 32)) | (1 << (clozeParser.DCANY - 32)) | (1 << (clozeParser.Image_type - 32)) | (1 << (clozeParser.Audio_type - 32)) | (1 << (clozeParser.Video_type - 32)) | (1 << (clozeParser.ArticleText - 32)) | (1 << (clozeParser.NOTCL - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NL - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)) | (1 << (clozeParser.OPAT - 32)) | (1 << (clozeParser.AtProgress - 32)) | (1 << (clozeParser.AtReference - 32)) | (1 << (clozeParser.AtWidth - 32)) | (1 << (clozeParser.AtHeight - 32)) | (1 << (clozeParser.AtProgressPoints - 32)) | (1 << (clozeParser.AtShortanswer - 32)) | (1 << (clozeParser.AtLonganswer - 32)) | (1 << (clozeParser.AtExampleWithStr - 32)) | (1 << (clozeParser.AtExamplecol - 32)) | (1 << (clozeParser.AtExamplecl - 32)) | (1 << (clozeParser.AtSampleSolution - 32)) | (1 << (clozeParser.AtPartialAnswerS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (clozeParser.AtPartialAnswer - 64)) | (1 << (clozeParser.AtLabeltrue - 64)) | (1 << (clozeParser.AtLabelfalse - 64)) | (1 << (clozeParser.AtPoints - 64)) | (1 << (clozeParser.AtSrc - 64)) | (1 << (clozeParser.AtPartner - 64)) | (1 << (clozeParser.OPATALT - 64)) | (1 << (clozeParser.OPAMARK - 64)) | (1 << (clozeParser.ShowInIndex - 64)) | (1 << (clozeParser.OpAtCaption - 64)) | (1 << (clozeParser.OpAtLicense - 64)) | (1 << (clozeParser.OpAtCopyright - 64)) | (1 << (clozeParser.OpAtSearch - 64)) | (1 << (clozeParser.OpAtIsTracked - 64)) | (1 << (clozeParser.OpAtIsInfoOnly - 64)) | (1 << (clozeParser.AtDate - 64)) | (1 << (clozeParser.Http - 64)) | (1 << (clozeParser.Https - 64)) | (1 << (clozeParser.AmpAudio - 64)) | (1 << (clozeParser.AmpImage - 64)) | (1 << (clozeParser.AmpImageZoom - 64)) | (1 << (clozeParser.AmpVideo - 64)) | (1 << (clozeParser.AmpArticle - 64)) | (1 << (clozeParser.AmpDocument - 64)) | (1 << (clozeParser.AmpApp - 64)) | (1 << (clozeParser.AmpWebsite - 64)) | (1 << (clozeParser.AmpStillImageFilm - 64)) | (1 << (clozeParser.AmpPdf - 64)) | (1 << (clozeParser.OpAmpAudio - 64)) | (1 << (clozeParser.OpAmpImage - 64)) | (1 << (clozeParser.OpAmpImageZoom - 64)) | (1 << (clozeParser.OpAmpVideo - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (clozeParser.OpAmpArticle - 96)) | (1 << (clozeParser.OpAmpArticleAtt - 96)) | (1 << (clozeParser.OpAmpDocument - 96)) | (1 << (clozeParser.OpAmpApp - 96)) | (1 << (clozeParser.OpAmpWebsite - 96)) | (1 << (clozeParser.OpAmpStillImageFilm - 96)) | (1 << (clozeParser.BracEnclose - 96)) | (1 << (clozeParser.AmpAudioLink - 96)) | (1 << (clozeParser.AmpImageLink - 96)) | (1 << (clozeParser.AmpVideoLink - 96)) | (1 << (clozeParser.AmpArticleLink - 96)) | (1 << (clozeParser.AmpDocumentLink - 96)) | (1 << (clozeParser.AmpDocumentDownload - 96)) | (1 << (clozeParser.AmpAppLink - 96)) | (1 << (clozeParser.AmpWebsiteLink - 96)) | (1 << (clozeParser.AmpStillImageFilmLink - 96)) | (1 << (clozeParser.OpAmpAudioLink - 96)) | (1 << (clozeParser.OpAmpImageLink - 96)) | (1 << (clozeParser.OpAmpVideoLink - 96)) | (1 << (clozeParser.OpAmpArticleLink - 96)) | (1 << (clozeParser.OpAmpDocumentLink - 96)) | (1 << (clozeParser.OpAmpDocumentDownload - 96)) | (1 << (clozeParser.OpAmpAppLink - 96)) | (1 << (clozeParser.OpAmpWebsiteLink - 96)) | (1 << (clozeParser.OpAmpStillImageFilmLink - 96)) | (1 << (clozeParser.AmpImageEmbed - 96)) | (1 << (clozeParser.AmpVideoEmbed - 96)) | (1 << (clozeParser.AmpAudioEmbed - 96)) | (1 << (clozeParser.AmpDocumentEmbed - 96)) | (1 << (clozeParser.AmpStillImageFilmEmbed - 96)) | (1 << (clozeParser.OpAmpImageEmbed - 96)) | (1 << (clozeParser.OpAmpVideoEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (clozeParser.OpAmpAudioEmbed - 128)) | (1 << (clozeParser.OpAmpDocumentEmbed - 128)) | (1 << (clozeParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (clozeParser.BitmarkMinus - 128)) | (1 << (clozeParser.BitmarkPlus - 128)) | (1 << (clozeParser.ColonText - 128)) | (1 << (clozeParser.ColonJson - 128)) | (1 << (clozeParser.Prosemirror - 128)) | (1 << (clozeParser.Placeholder - 128)) | (1 << (clozeParser.BASIC - 128)) | (1 << (clozeParser.JPG - 128)) | (1 << (clozeParser.PNG - 128)) | (1 << (clozeParser.GIF - 128)) | (1 << (clozeParser.SVG - 128)) | (1 << (clozeParser.MP2 - 128)) | (1 << (clozeParser.MP3 - 128)) | (1 << (clozeParser.MP4 - 128)) | (1 << (clozeParser.FLV - 128)) | (1 << (clozeParser.WMV - 128)) | (1 << (clozeParser.MPEG - 128)) | (1 << (clozeParser.MPG - 128)) | (1 << (clozeParser.TEL - 128)) | (1 << (clozeParser.DotArticleAtt - 128)) | (1 << (clozeParser.STAR - 128)) | (1 << (clozeParser.URL - 128)) | (1 << (clozeParser.LIST_LINE - 128)) | (1 << (clozeParser.ENCLBARS - 128)) | (1 << (clozeParser.OpAmpImageWAudio - 128)))) !== 0));
                this.state = 1063;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 134, clozeParser.RULE_title);
        try {
            let _alt;
            this.state = 1077;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1065;
                        this.match(clozeParser.OPHASH);
                        this.state = 1068;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 1068;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case clozeParser.S:
                                            case clozeParser.OPS:
                                            case clozeParser.CL:
                                            case clozeParser.COLON:
                                            case clozeParser.AMP:
                                            case clozeParser.Greater:
                                            case clozeParser.Less:
                                            case clozeParser.DBLEQ:
                                            case clozeParser.RightAngle:
                                            case clozeParser.RightArrow:
                                            case clozeParser.OP_N_ETC:
                                            case clozeParser.NUMERIC:
                                            case clozeParser.STRING:
                                            case clozeParser.NOTBITMARK:
                                            case clozeParser.ELIPSIS:
                                            case clozeParser.SENTENCE:
                                            case clozeParser.BARSTRING:
                                            case clozeParser.URL:
                                                {
                                                    this.state = 1066;
                                                    this.s_and_w();
                                                }
                                                break;
                                            case clozeParser.NL:
                                                {
                                                    this.state = 1067;
                                                    this.match(clozeParser.NL);
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
                            this.state = 1070;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 1072;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1073;
                        this.match(clozeParser.OPHASH);
                        this.state = 1074;
                        this.s_and_w();
                        this.state = 1075;
                        this.match(clozeParser.EOF);
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
        this.enterRule(_localctx, 136, clozeParser.RULE_bool_label);
        try {
            this.state = 1087;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AtLabeltrue:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1079;
                        this.match(clozeParser.AtLabeltrue);
                        this.state = 1080;
                        this.s_and_w();
                        this.state = 1081;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.AtLabelfalse:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1083;
                        this.match(clozeParser.AtLabelfalse);
                        this.state = 1084;
                        this.s_and_w();
                        this.state = 1085;
                        this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 138, clozeParser.RULE_progress_points);
        try {
            this.state = 1098;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1089;
                        this.match(clozeParser.AtProgressPoints);
                        this.state = 1090;
                        this.match(clozeParser.COLON);
                        this.state = 1091;
                        this.match(clozeParser.NUMERIC);
                        this.state = 1092;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1093;
                        this.match(clozeParser.AtProgressPoints);
                        this.state = 1094;
                        this.match(clozeParser.COLON);
                        this.state = 1095;
                        this.s_and_w();
                        this.state = 1096;
                        this.match(clozeParser.CL);
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
        this.enterRule(_localctx, 140, clozeParser.RULE_istracked);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1100;
                this.match(clozeParser.OpAtIsTracked);
                this.state = 1101;
                this.s_and_w();
                this.state = 1102;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 142, clozeParser.RULE_isinfoonly);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1104;
                this.match(clozeParser.OpAtIsInfoOnly);
                this.state = 1105;
                this.s_and_w();
                this.state = 1106;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 144, clozeParser.RULE_atdef);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1108;
                this.atdef_();
                this.state = 1118;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1112;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === clozeParser.NL) {
                                    {
                                        {
                                            this.state = 1109;
                                            this.match(clozeParser.NL);
                                        }
                                    }
                                    this.state = 1114;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1115;
                                this.atdef_();
                            }
                        }
                    }
                    this.state = 1120;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
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
        this.enterRule(_localctx, 146, clozeParser.RULE_atdef_);
        let _la;
        try {
            let _alt;
            this.state = 1144;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OPA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1121;
                        this.match(clozeParser.OPA);
                        this.state = 1122;
                        this.s_and_w();
                        this.state = 1123;
                        _la = this._input.LA(1);
                        if (!(_la === clozeParser.COLON || _la === clozeParser.DBLCOLON)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1124;
                        this.s_and_w();
                        this.state = 1130;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 1128;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1125;
                                                this.match(clozeParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1126;
                                                this.match(clozeParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1127;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 1132;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                        }
                        this.state = 1133;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1135;
                        this.match(clozeParser.OpAtCopyright);
                        this.state = 1139;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1136;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1141;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                        }
                        this.state = 1142;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.AtSampleSolution:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1143;
                        this.match(clozeParser.AtSampleSolution);
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
        this.enterRule(_localctx, 148, clozeParser.RULE_dollarans);
        let _la;
        try {
            let _alt;
            this.state = 1165;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1146;
                        this.match(clozeParser.OPDOLL);
                        this.state = 1150;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 1150;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1147;
                                                    this.s_and_w();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1148;
                                                    this.match(clozeParser.COLON);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1149;
                                                    this.match(clozeParser.NL);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1152;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 1154;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1155;
                        this.match(clozeParser.OPDOLL);
                        this.state = 1161;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NL - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
                            {
                                this.state = 1159;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1156;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1157;
                                            this.match(clozeParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1158;
                                            this.match(clozeParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1163;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1164;
                        this.match(clozeParser.EOF);
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
        this.enterRule(_localctx, 150, clozeParser.RULE_anchor);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1167;
                this.match(clozeParser.OPDANGLE);
                this.state = 1169;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
                    case 1:
                        {
                            this.state = 1168;
                            this.s_and_w();
                        }
                        break;
                }
                this.state = 1171;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 152, clozeParser.RULE_lines);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1177;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1173;
                            this.s_and_w();
                            this.state = 1175;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === clozeParser.NL) {
                                {
                                    this.state = 1174;
                                    this.nl();
                                }
                            }
                        }
                    }
                    this.state = 1179;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON) | (1 << clozeParser.AMP) | (1 << clozeParser.Greater) | (1 << clozeParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 154, clozeParser.RULE_s_and_w);
        let _la;
        try {
            let _alt;
            this.state = 1228;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1181;
                        this.match(clozeParser.STRING);
                        this.state = 1188;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1183;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1182;
                                                this.match(clozeParser.S);
                                            }
                                        }
                                        this.state = 1185;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === clozeParser.S);
                                    this.state = 1187;
                                    this.numeric();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1190;
                        this.words();
                        this.state = 1197;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1192;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1191;
                                                this.match(clozeParser.S);
                                            }
                                        }
                                        this.state = 1194;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === clozeParser.S);
                                    this.state = 1196;
                                    this.numeric();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1199;
                        this.match(clozeParser.OPS);
                        this.state = 1200;
                        this.s_and_w();
                        this.state = 1201;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1203;
                        this.match(clozeParser.NUMERIC);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1207;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === clozeParser.S) {
                            {
                                {
                                    this.state = 1204;
                                    this.match(clozeParser.S);
                                }
                            }
                            this.state = 1209;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1210;
                        this.match(clozeParser.COLON);
                        this.state = 1214;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1211;
                                        this.match(clozeParser.S);
                                    }
                                }
                            }
                            this.state = 1216;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1217;
                        this.match(clozeParser.AMP);
                        this.state = 1221;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1218;
                                        this.match(clozeParser.S);
                                    }
                                }
                            }
                            this.state = 1223;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1224;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1225;
                        this.match(clozeParser.OP_N_ETC);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1226;
                        this.match(clozeParser.DBLEQ);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1227;
                        this.match(clozeParser.URL);
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
        this.enterRule(_localctx, 156, clozeParser.RULE_dclines);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1230;
                this.match(clozeParser.DCANY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    opu() {
        let _localctx = new OpuContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, clozeParser.RULE_opu);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1232;
                this.match(clozeParser.OPU);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    opb() {
        let _localctx = new OpbContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, clozeParser.RULE_opb);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1234;
                this.match(clozeParser.OPB);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    opq() {
        let _localctx = new OpqContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, clozeParser.RULE_opq);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1236;
                this.match(clozeParser.OPQ);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    opa() {
        let _localctx = new OpaContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, clozeParser.RULE_opa);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1238;
                this.match(clozeParser.OPA);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    opp() {
        let _localctx = new OppContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, clozeParser.RULE_opp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1240;
                this.match(clozeParser.OPP);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    opm() {
        let _localctx = new OpmContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, clozeParser.RULE_opm);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1242;
                this.match(clozeParser.OPM);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ops() {
        let _localctx = new OpsContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, clozeParser.RULE_ops);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1244;
                this.match(clozeParser.OPS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    opr() {
        let _localctx = new OprContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, clozeParser.RULE_opr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1246;
                this.match(clozeParser.OPR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    opc() {
        let _localctx = new OpcContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, clozeParser.RULE_opc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1248;
                this.match(clozeParser.OPC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    cl() {
        let _localctx = new ClContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, clozeParser.RULE_cl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1250;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 178, clozeParser.RULE_clnsp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1252;
                this.match(clozeParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    nl() {
        let _localctx = new NlContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, clozeParser.RULE_nl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1254;
                this.match(clozeParser.NL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    listline_() {
        let _localctx = new Listline_Context(this._ctx, this.state);
        this.enterRule(_localctx, 182, clozeParser.RULE_listline_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1256;
                this.match(clozeParser.LIST_LINE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    numeric() {
        let _localctx = new NumericContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, clozeParser.RULE_numeric);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1258;
                this.match(clozeParser.NUMERIC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    string() {
        let _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, clozeParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1260;
                this.match(clozeParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 188, clozeParser.RULE_words);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1273;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1273;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case clozeParser.SENTENCE:
                                        {
                                            this.state = 1262;
                                            this.match(clozeParser.SENTENCE);
                                        }
                                        break;
                                    case clozeParser.NOTBITMARK:
                                        {
                                            this.state = 1263;
                                            this.match(clozeParser.NOTBITMARK);
                                        }
                                        break;
                                    case clozeParser.BARSTRING:
                                        {
                                            this.state = 1264;
                                            this.match(clozeParser.BARSTRING);
                                        }
                                        break;
                                    case clozeParser.ELIPSIS:
                                        {
                                            this.state = 1265;
                                            this.match(clozeParser.ELIPSIS);
                                        }
                                        break;
                                    case clozeParser.AMP:
                                        {
                                            this.state = 1266;
                                            this.match(clozeParser.AMP);
                                        }
                                        break;
                                    case clozeParser.Greater:
                                        {
                                            this.state = 1267;
                                            this.match(clozeParser.Greater);
                                            this.state = 1268;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === clozeParser.Greater)) {
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
                                    case clozeParser.Less:
                                        {
                                            this.state = 1269;
                                            this.match(clozeParser.Less);
                                            this.state = 1270;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === clozeParser.Less)) {
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
                                    case clozeParser.RightArrow:
                                        {
                                            this.state = 1271;
                                            this.match(clozeParser.RightArrow);
                                        }
                                        break;
                                    case clozeParser.RightAngle:
                                        {
                                            this.state = 1272;
                                            this.match(clozeParser.RightAngle);
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
                    this.state = 1275;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
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
        this.enterRule(_localctx, 190, clozeParser.RULE_sp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1277;
                this.match(clozeParser.S);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
        if (!clozeParser.__ATN) {
            clozeParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(clozeParser._serializedATN));
        }
        return clozeParser.__ATN;
    }
}
exports.clozeParser = clozeParser;
clozeParser.S = 1;
clozeParser.OPDOT = 2;
clozeParser.BitCloze = 3;
clozeParser.BitClozeinstgrp = 4;
clozeParser.BitClozesolgrp = 5;
clozeParser.BitClozeandmulti = 6;
clozeParser.OPSP = 7;
clozeParser.OPDOLL = 8;
clozeParser.OPBUL = 9;
clozeParser.OPESC = 10;
clozeParser.OPRANGLES = 11;
clozeParser.OPRANGLEL = 12;
clozeParser.OPDANGLE = 13;
clozeParser.OPU = 14;
clozeParser.OPB = 15;
clozeParser.OPQ = 16;
clozeParser.OPA = 17;
clozeParser.OPP = 18;
clozeParser.OPM = 19;
clozeParser.OPS = 20;
clozeParser.OPR = 21;
clozeParser.OPC = 22;
clozeParser.OPHASH = 23;
clozeParser.CL = 24;
clozeParser.COLON = 25;
clozeParser.AMP = 26;
clozeParser.DBLCOLON = 27;
clozeParser.PLUS = 28;
clozeParser.DotAt = 29;
clozeParser.Greater = 30;
clozeParser.Less = 31;
clozeParser.DBLEQ = 32;
clozeParser.RightAngle = 33;
clozeParser.RightArrow = 34;
clozeParser.OP_N_ETC = 35;
clozeParser.UNSCO = 36;
clozeParser.COMMENT = 37;
clozeParser.DCANY = 38;
clozeParser.Image_type = 39;
clozeParser.Audio_type = 40;
clozeParser.Video_type = 41;
clozeParser.ArticleText = 42;
clozeParser.NOTCL = 43;
clozeParser.NUMERIC = 44;
clozeParser.STRING = 45;
clozeParser.NL = 46;
clozeParser.NOTBITMARK = 47;
clozeParser.ELIPSIS = 48;
clozeParser.SENTENCE = 49;
clozeParser.BARSTRING = 50;
clozeParser.OPAT = 51;
clozeParser.AtProgress = 52;
clozeParser.AtReference = 53;
clozeParser.AtWidth = 54;
clozeParser.AtHeight = 55;
clozeParser.AtProgressPoints = 56;
clozeParser.AtShortanswer = 57;
clozeParser.AtLonganswer = 58;
clozeParser.AtExampleWithStr = 59;
clozeParser.AtExamplecol = 60;
clozeParser.AtExamplecl = 61;
clozeParser.AtSampleSolution = 62;
clozeParser.AtPartialAnswerS = 63;
clozeParser.AtPartialAnswer = 64;
clozeParser.AtLabeltrue = 65;
clozeParser.AtLabelfalse = 66;
clozeParser.AtPoints = 67;
clozeParser.AtSrc = 68;
clozeParser.AtPartner = 69;
clozeParser.OPATALT = 70;
clozeParser.OPAMARK = 71;
clozeParser.ShowInIndex = 72;
clozeParser.OpAtCaption = 73;
clozeParser.OpAtLicense = 74;
clozeParser.OpAtCopyright = 75;
clozeParser.OpAtSearch = 76;
clozeParser.OpAtIsTracked = 77;
clozeParser.OpAtIsInfoOnly = 78;
clozeParser.AtDate = 79;
clozeParser.Http = 80;
clozeParser.Https = 81;
clozeParser.AmpAudio = 82;
clozeParser.AmpImage = 83;
clozeParser.AmpImageZoom = 84;
clozeParser.AmpVideo = 85;
clozeParser.AmpArticle = 86;
clozeParser.AmpDocument = 87;
clozeParser.AmpApp = 88;
clozeParser.AmpWebsite = 89;
clozeParser.AmpStillImageFilm = 90;
clozeParser.AmpPdf = 91;
clozeParser.OpAmpAudio = 92;
clozeParser.OpAmpImage = 93;
clozeParser.OpAmpImageZoom = 94;
clozeParser.OpAmpVideo = 95;
clozeParser.OpAmpArticle = 96;
clozeParser.OpAmpArticleAtt = 97;
clozeParser.OpAmpDocument = 98;
clozeParser.OpAmpApp = 99;
clozeParser.OpAmpWebsite = 100;
clozeParser.OpAmpStillImageFilm = 101;
clozeParser.BracEnclose = 102;
clozeParser.AmpAudioLink = 103;
clozeParser.AmpImageLink = 104;
clozeParser.AmpVideoLink = 105;
clozeParser.AmpArticleLink = 106;
clozeParser.AmpDocumentLink = 107;
clozeParser.AmpDocumentDownload = 108;
clozeParser.AmpAppLink = 109;
clozeParser.AmpWebsiteLink = 110;
clozeParser.AmpStillImageFilmLink = 111;
clozeParser.OpAmpAudioLink = 112;
clozeParser.OpAmpImageLink = 113;
clozeParser.OpAmpVideoLink = 114;
clozeParser.OpAmpArticleLink = 115;
clozeParser.OpAmpDocumentLink = 116;
clozeParser.OpAmpDocumentDownload = 117;
clozeParser.OpAmpAppLink = 118;
clozeParser.OpAmpWebsiteLink = 119;
clozeParser.OpAmpStillImageFilmLink = 120;
clozeParser.AmpImageEmbed = 121;
clozeParser.AmpVideoEmbed = 122;
clozeParser.AmpAudioEmbed = 123;
clozeParser.AmpDocumentEmbed = 124;
clozeParser.AmpStillImageFilmEmbed = 125;
clozeParser.OpAmpImageEmbed = 126;
clozeParser.OpAmpVideoEmbed = 127;
clozeParser.OpAmpAudioEmbed = 128;
clozeParser.OpAmpDocumentEmbed = 129;
clozeParser.OpAmpStillImageFilmEmbed = 130;
clozeParser.BitmarkMinus = 131;
clozeParser.BitmarkPlus = 132;
clozeParser.ColonText = 133;
clozeParser.ColonJson = 134;
clozeParser.Prosemirror = 135;
clozeParser.Placeholder = 136;
clozeParser.BASIC = 137;
clozeParser.JPG = 138;
clozeParser.PNG = 139;
clozeParser.GIF = 140;
clozeParser.SVG = 141;
clozeParser.MP2 = 142;
clozeParser.MP3 = 143;
clozeParser.MP4 = 144;
clozeParser.FLV = 145;
clozeParser.WMV = 146;
clozeParser.MPEG = 147;
clozeParser.MPG = 148;
clozeParser.TEL = 149;
clozeParser.DotArticleAtt = 150;
clozeParser.STAR = 151;
clozeParser.URL = 152;
clozeParser.LIST_LINE = 153;
clozeParser.ENCLBARS = 154;
clozeParser.OpAmpImageWAudio = 155;
clozeParser.RULE_bitmark = 0;
clozeParser.RULE_bitmark_ = 1;
clozeParser.RULE_clozes = 2;
clozeParser.RULE_bitElem = 3;
clozeParser.RULE_resource = 4;
clozeParser.RULE_cloze = 5;
clozeParser.RULE_cloze_instruction_grouped = 6;
clozeParser.RULE_cloze_solution_grouped = 7;
clozeParser.RULE_gap = 8;
clozeParser.RULE_single_gap = 9;
clozeParser.RULE_cloze_and_multiple_choice_text = 10;
clozeParser.RULE_headed_inline_choices = 11;
clozeParser.RULE_choice_head = 12;
clozeParser.RULE_inline_choices = 13;
clozeParser.RULE_choice_plus = 14;
clozeParser.RULE_choice_minus = 15;
clozeParser.RULE_choice_star = 16;
clozeParser.RULE_pimagebit = 17;
clozeParser.RULE_atpoint = 18;
clozeParser.RULE_format = 19;
clozeParser.RULE_resource_format = 20;
clozeParser.RULE_resource_format_extra = 21;
clozeParser.RULE_format2 = 22;
clozeParser.RULE_image_format = 23;
clozeParser.RULE_video_format = 24;
clozeParser.RULE_article_format = 25;
clozeParser.RULE_document_format = 26;
clozeParser.RULE_app_format = 27;
clozeParser.RULE_website_format = 28;
clozeParser.RULE_stillimagefilm_format = 29;
clozeParser.RULE_op_article_format = 30;
clozeParser.RULE_op_document_format = 31;
clozeParser.RULE_op_app_format = 32;
clozeParser.RULE_op_website_format = 33;
clozeParser.RULE_op_video_format = 34;
clozeParser.RULE_op_stillimagefilm_format = 35;
clozeParser.RULE_articlebit = 36;
clozeParser.RULE_documentbit = 37;
clozeParser.RULE_websitebit = 38;
clozeParser.RULE_appbit = 39;
clozeParser.RULE_stillimagefilmbit = 40;
clozeParser.RULE_stillimg_one = 41;
clozeParser.RULE_videobit = 42;
clozeParser.RULE_video_one = 43;
clozeParser.RULE_imagebit = 44;
clozeParser.RULE_image_one = 45;
clozeParser.RULE_op_image_format = 46;
clozeParser.RULE_image_chained = 47;
clozeParser.RULE_image_chained4match = 48;
clozeParser.RULE_audiobit = 49;
clozeParser.RULE_audio_one = 50;
clozeParser.RULE_audio_format = 51;
clozeParser.RULE_op_audio_format = 52;
clozeParser.RULE_resource_chained = 53;
clozeParser.RULE_telephone = 54;
clozeParser.RULE_url = 55;
clozeParser.RULE_item = 56;
clozeParser.RULE_lead = 57;
clozeParser.RULE_angleref = 58;
clozeParser.RULE_example = 59;
clozeParser.RULE_bracketed_text = 60;
clozeParser.RULE_reference = 61;
clozeParser.RULE_progress = 62;
clozeParser.RULE_dateprop = 63;
clozeParser.RULE_dateprop_chained = 64;
clozeParser.RULE_instruction = 65;
clozeParser.RULE_hint = 66;
clozeParser.RULE_title = 67;
clozeParser.RULE_bool_label = 68;
clozeParser.RULE_progress_points = 69;
clozeParser.RULE_istracked = 70;
clozeParser.RULE_isinfoonly = 71;
clozeParser.RULE_atdef = 72;
clozeParser.RULE_atdef_ = 73;
clozeParser.RULE_dollarans = 74;
clozeParser.RULE_anchor = 75;
clozeParser.RULE_lines = 76;
clozeParser.RULE_s_and_w = 77;
clozeParser.RULE_dclines = 78;
clozeParser.RULE_opu = 79;
clozeParser.RULE_opb = 80;
clozeParser.RULE_opq = 81;
clozeParser.RULE_opa = 82;
clozeParser.RULE_opp = 83;
clozeParser.RULE_opm = 84;
clozeParser.RULE_ops = 85;
clozeParser.RULE_opr = 86;
clozeParser.RULE_opc = 87;
clozeParser.RULE_cl = 88;
clozeParser.RULE_clnsp = 89;
clozeParser.RULE_nl = 90;
clozeParser.RULE_listline_ = 91;
clozeParser.RULE_numeric = 92;
clozeParser.RULE_string = 93;
clozeParser.RULE_words = 94;
clozeParser.RULE_sp = 95;
// tslint:disable:no-trailing-whitespace
clozeParser.ruleNames = [
    "bitmark", "bitmark_", "clozes", "bitElem", "resource", "cloze", "cloze_instruction_grouped",
    "cloze_solution_grouped", "gap", "single_gap", "cloze_and_multiple_choice_text",
    "headed_inline_choices", "choice_head", "inline_choices", "choice_plus",
    "choice_minus", "choice_star", "pimagebit", "atpoint", "format", "resource_format",
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
    "isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "lines", "s_and_w",
    "dclines", "opu", "opb", "opq", "opa", "opp", "opm", "ops", "opr", "opc",
    "cl", "clnsp", "nl", "listline_", "numeric", "string", "words", "sp",
];
clozeParser._LITERAL_NAMES = [
    undefined, undefined, "'[.'", undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "'[^'", undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "'[#'", undefined, "':'", "'&'", "'::'", "'+'",
    "'.@'", "'>'", "'<'", "'=='", "'\u25BA'", "'\u2192'", undefined, "'_'",
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "'[@'", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "'http://'", "'https://'", "'&audio'", "'&image'", "'&image-zoom'",
    "'&video'", "'&article'", "'&document'", "'&app'", "'&website'", "'&still-image-film'",
    "'&pdf'", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, "'&audio-link'",
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
clozeParser._SYMBOLIC_NAMES = [
    undefined, "S", "OPDOT", "BitCloze", "BitClozeinstgrp", "BitClozesolgrp",
    "BitClozeandmulti", "OPSP", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL",
    "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC",
    "OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater",
    "Less", "DBLEQ", "RightAngle", "RightArrow", "OP_N_ETC", "UNSCO", "COMMENT",
    "DCANY", "Image_type", "Audio_type", "Video_type", "ArticleText", "NOTCL",
    "NUMERIC", "STRING", "NL", "NOTBITMARK", "ELIPSIS", "SENTENCE", "BARSTRING",
    "OPAT", "AtProgress", "AtReference", "AtWidth", "AtHeight", "AtProgressPoints",
    "AtShortanswer", "AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl",
    "AtSampleSolution", "AtPartialAnswerS", "AtPartialAnswer", "AtLabeltrue",
    "AtLabelfalse", "AtPoints", "AtSrc", "AtPartner", "OPATALT", "OPAMARK",
    "ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright", "OpAtSearch",
    "OpAtIsTracked", "OpAtIsInfoOnly", "AtDate", "Http", "Https", "AmpAudio",
    "AmpImage", "AmpImageZoom", "AmpVideo", "AmpArticle", "AmpDocument", "AmpApp",
    "AmpWebsite", "AmpStillImageFilm", "AmpPdf", "OpAmpAudio", "OpAmpImage",
    "OpAmpImageZoom", "OpAmpVideo", "OpAmpArticle", "OpAmpArticleAtt", "OpAmpDocument",
    "OpAmpApp", "OpAmpWebsite", "OpAmpStillImageFilm", "BracEnclose", "AmpAudioLink",
    "AmpImageLink", "AmpVideoLink", "AmpArticleLink", "AmpDocumentLink", "AmpDocumentDownload",
    "AmpAppLink", "AmpWebsiteLink", "AmpStillImageFilmLink", "OpAmpAudioLink",
    "OpAmpImageLink", "OpAmpVideoLink", "OpAmpArticleLink", "OpAmpDocumentLink",
    "OpAmpDocumentDownload", "OpAmpAppLink", "OpAmpWebsiteLink", "OpAmpStillImageFilmLink",
    "AmpImageEmbed", "AmpVideoEmbed", "AmpAudioEmbed", "AmpDocumentEmbed",
    "AmpStillImageFilmEmbed", "OpAmpImageEmbed", "OpAmpVideoEmbed", "OpAmpAudioEmbed",
    "OpAmpDocumentEmbed", "OpAmpStillImageFilmEmbed", "BitmarkMinus", "BitmarkPlus",
    "ColonText", "ColonJson", "Prosemirror", "Placeholder", "BASIC", "JPG",
    "PNG", "GIF", "SVG", "MP2", "MP3", "MP4", "FLV", "WMV", "MPEG", "MPG",
    "TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE", "ENCLBARS", "OpAmpImageWAudio",
];
clozeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(clozeParser._LITERAL_NAMES, clozeParser._SYMBOLIC_NAMES, []);
clozeParser._serializedATNSegments = 3;
clozeParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9D\u0502\x04" +
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
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
    "`\x04a\ta\x03\x02\x03\x02\x07\x02\xC5\n\x02\f\x02\x0E\x02\xC8\v\x02\x03" +
    "\x02\x07\x02\xCB\n\x02\f\x02\x0E\x02\xCE\v\x02\x06\x02\xD0\n\x02\r\x02" +
    "\x0E\x02\xD1\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x05\x04\xDC\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
    "\xEC\n\x05\f\x05\x0E\x05\xEF\v\x05\x03\x05\x03\x05\x07\x05\xF3\n\x05\f" +
    "\x05\x0E\x05\xF6\v\x05\x03\x05\x03\x05\x07\x05\xFA\n\x05\f\x05\x0E\x05" +
    "\xFD\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
    "\x05\x05\x05\u0107\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
    "\x07\x07\u010F\n\x07\f\x07\x0E\x07\u0112\v\x07\x03\x07\x03\x07\x07\x07" +
    "\u0116\n\x07\f\x07\x0E\x07\u0119\v\x07\x07\x07\u011B\n\x07\f\x07\x0E\x07" +
    "\u011E\v\x07\x03\b\x03\b\x03\b\x03\b\x05\b\u0124\n\b\x03\b\x03\b\x07\b" +
    "\u0128\n\b\f\b\x0E\b\u012B\v\b\x07\b\u012D\n\b\f\b\x0E\b\u0130\v\b\x03" +
    "\b\x07\b\u0133\n\b\f\b\x0E\b\u0136\v\b\x03\b\x03\b\x07\b\u013A\n\b\f\b" +
    "\x0E\b\u013D\v\b\x03\b\x07\b\u0140\n\b\f\b\x0E\b\u0143\v\b\x05\b\u0145" +
    "\n\b\x03\t\x03\t\x03\t\x03\t\x05\t\u014B\n\t\x03\t\x03\t\x07\t\u014F\n" +
    "\t\f\t\x0E\t\u0152\v\t\x07\t\u0154\n\t\f\t\x0E\t\u0157\v\t\x03\t\x07\t" +
    "\u015A\n\t\f\t\x0E\t\u015D\v\t\x03\t\x03\t\x07\t\u0161\n\t\f\t\x0E\t\u0164" +
    "\v\t\x03\t\x07\t\u0167\n\t\f\t\x0E\t\u016A\v\t\x05\t\u016C\n\t\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0174\n\n\f\n\x0E\n\u0177\v\n\x03\v\x03" +
    "\v\x03\v\x03\v\x05\v\u017D\n\v\x03\v\x07\v\u0180\n\v\f\v\x0E\v\u0183\v" +
    "\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u018C\n\f\f\f\x0E\f" +
    "\u018F\v\f\x07\f\u0191\n\f\f\f\x0E\f\u0194\v\f\x03\f\x03\f\x03\f\x03\f" +
    "\x07\f\u019A\n\f\f\f\x0E\f\u019D\v\f\x03\f\x03\f\x07\f\u01A1\n\f\f\f\x0E" +
    "\f\u01A4\v\f\x03\f\x03\f\x07\f\u01A8\n\f\f\f\x0E\f\u01AB\v\f\x06\f\u01AD" +
    "\n\f\r\f\x0E\f\u01AE\x03\f\x07\f\u01B2\n\f\f\f\x0E\f\u01B5\v\f\x03\f\x03" +
    "\f\x07\f\u01B9\n\f\f\f\x0E\f\u01BC\v\f\x03\f\x07\f\u01BF\n\f\f\f\x0E\f" +
    "\u01C2\v\f\x05\f\u01C4\n\f\x05\f\u01C6\n\f\x03\r\x05\r\u01C9\n\r\x03\r" +
    "\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
    "\u01D4\n\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01D9\n\x0F\f\x0F\x0E\x0F" +
    "\u01DC\v\x0F\x03\x10\x05\x10\u01DF\n\x10\x03\x10\x03\x10\x06\x10\u01E3" +
    "\n\x10\r\x10\x0E\x10\u01E4\x03\x10\x03\x10\x03\x11\x05\x11\u01EA\n\x11" +
    "\x03\x11\x03\x11\x06\x11\u01EE\n\x11\r\x11\x0E\x11\u01EF\x03\x11\x03\x11" +
    "\x03\x12\x05\x12\u01F5\n\x12\x03\x12\x03\x12\x06\x12\u01F9\n\x12\r\x12" +
    "\x0E\x12\u01FA\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13\u0201\n\x13\f\x13" +
    "\x0E\x13\u0204\v\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u020A\n\x13" +
    "\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x07\x15\u0211\n\x15\f\x15\x0E" +
    "\x15\u0214\v\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0219\n\x15\f\x15\x0E" +
    "\x15\u021C\v\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
    "\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0229\n\x17\x03\x18\x03\x18\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0231\n\x18\x03\x19\x03\x19\x03\x19" +
    "\x05\x19\u0236\n\x19\x03\x19\x03\x19\x05\x19\u023A\n\x19\x03\x19\x03\x19" +
    "\x05\x19\u023E\n\x19\x05\x19\u0240\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
    "\u0245\n\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
    "\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03" +
    "$\x03$\x05$\u025C\n$\x03$\x03$\x03$\x05$\u0261\n$\x03$\x03$\x03$\x05$" +
    "\u0266\n$\x05$\u0268\n$\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0272" +
    "\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u027C\n\'\x03" +
    "(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0286\n(\x03)\x03)\x03)\x03" +
    ")\x05)\u028C\n)\x03)\x03)\x03)\x03)\x03)\x05)\u0293\n)\x03*\x03*\x07*" +
    "\u0297\n*\f*\x0E*\u029A\v*\x03+\x03+\x03+\x07+\u029F\n+\f+\x0E+\u02A2" +
    "\v+\x03+\x03+\x03+\x03,\x03,\x07,\u02A9\n,\f,\x0E,\u02AC\v,\x03-\x03-" +
    "\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u02B6\n-\x03.\x03.\x07.\u02BA\n.\f" +
    ".\x0E.\u02BD\v.\x03.\x03.\x05.\u02C1\n.\x03/\x03/\x03/\x07/\u02C6\n/\f" +
    "/\x0E/\u02C9\v/\x03/\x03/\x03/\x030\x030\x030\x050\u02D1\n0\x030\x030" +
    "\x050\u02D5\n0\x030\x030\x050\u02D9\n0\x030\x050\u02DC\n0\x031\x031\x03" +
    "1\x031\x031\x031\x031\x031\x031\x031\x031\x071\u02E9\n1\f1\x0E1\u02EC" +
    "\v1\x031\x051\u02EF\n1\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
    "2\x032\x072\u02FC\n2\f2\x0E2\u02FF\v2\x032\x052\u0302\n2\x033\x033\x07" +
    "3\u0306\n3\f3\x0E3\u0309\v3\x034\x034\x034\x034\x034\x034\x034\x034\x05" +
    "4\u0313\n4\x035\x035\x035\x055\u0318\n5\x035\x035\x035\x055\u031D\n5\x05" +
    "5\u031F\n5\x036\x036\x036\x056\u0324\n6\x036\x036\x036\x056\u0329\n6\x03" +
    "6\x036\x036\x056\u032E\n6\x056\u0330\n6\x037\x037\x037\x057\u0335\n7\x03" +
    "7\x037\x077\u0339\n7\f7\x0E7\u033C\v7\x037\x037\x067\u0340\n7\r7\x0E7" +
    "\u0341\x037\x037\x037\x037\x037\x037\x037\x077\u034B\n7\f7\x0E7\u034E" +
    "\v7\x037\x057\u0351\n7\x038\x038\x038\x038\x039\x039\x03:\x03:\x03:\x07" +
    ":\u035C\n:\f:\x0E:\u035F\v:\x03:\x05:\u0362\n:\x03:\x03:\x03:\x03:\x07" +
    ":\u0368\n:\f:\x0E:\u036B\v:\x03:\x03:\x07:\u036F\n:\f:\x0E:\u0372\v:\x03" +
    ":\x05:\u0375\n:\x05:\u0377\n:\x03;\x03;\x03;\x03;\x07;\u037D\n;\f;\x0E" +
    ";\u0380\v;\x03;\x03;\x03<\x03<\x05<\u0386\n<\x03<\x03<\x03<\x05<\u038B" +
    "\n<\x03<\x05<\u038E\n<\x03=\x03=\x03=\x03=\x05=\u0394\n=\x03=\x05=\u0397" +
    "\n=\x03>\x03>\x05>\u039B\n>\x03>\x03>\x03>\x07>\u03A0\n>\f>\x0E>\u03A3" +
    "\v>\x07>\u03A5\n>\f>\x0E>\u03A8\v>\x03>\x07>\u03AB\n>\f>\x0E>\u03AE\v" +
    ">\x07>\u03B0\n>\f>\x0E>\u03B3\v>\x03>\x03>\x03>\x03>\x03>\x07>\u03BA\n" +
    ">\f>\x0E>\u03BD\v>\x03>\x05>\u03C0\n>\x03?\x03?\x03?\x03?\x03?\x06?\u03C7" +
    "\n?\r?\x0E?\u03C8\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x07?\u03D2\n?\f?" +
    "\x0E?\u03D5\v?\x03?\x05?\u03D8\n?\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03" +
    "A\x06A\u03E2\nA\rA\x0EA\u03E3\x03A\x03A\x05A\u03E8\nA\x03B\x03B\x03B\x03" +
    "B\x06B\u03EE\nB\rB\x0EB\u03EF\x03B\x03B\x03C\x03C\x07C\u03F6\nC\fC\x0E" +
    "C\u03F9\vC\x03C\x05C\u03FC\nC\x03C\x03C\x07C\u0400\nC\fC\x0EC\u0403\v" +
    "C\x07C\u0405\nC\fC\x0EC\u0408\vC\x03C\x07C\u040B\nC\fC\x0EC\u040E\vC\x03" +
    "C\x07C\u0411\nC\fC\x0EC\u0414\vC\x03C\x03C\x03C\x07C\u0419\nC\fC\x0EC" +
    "\u041C\vC\x03C\x05C\u041F\nC\x03C\x05C\u0422\nC\x03D\x03D\x06D\u0426\n" +
    "D\rD\x0ED\u0427\x03D\x03D\x03E\x03E\x03E\x06E\u042F\nE\rE\x0EE\u0430\x03" +
    "E\x03E\x03E\x03E\x03E\x05E\u0438\nE\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
    "F\x03F\x05F\u0442\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05" +
    "G\u044D\nG\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03J\x03J\x07J\u0459" +
    "\nJ\fJ\x0EJ\u045C\vJ\x03J\x07J\u045F\nJ\fJ\x0EJ\u0462\vJ\x03K\x03K\x03" +
    "K\x03K\x03K\x03K\x03K\x07K\u046B\nK\fK\x0EK\u046E\vK\x03K\x03K\x03K\x03" +
    "K\x07K\u0474\nK\fK\x0EK\u0477\vK\x03K\x03K\x05K\u047B\nK\x03L\x03L\x03" +
    "L\x03L\x06L\u0481\nL\rL\x0EL\u0482\x03L\x03L\x03L\x03L\x03L\x07L\u048A" +
    "\nL\fL\x0EL\u048D\vL\x03L\x05L\u0490\nL\x03M\x03M\x05M\u0494\nM\x03M\x03" +
    "M\x03N\x03N\x05N\u049A\nN\x06N\u049C\nN\rN\x0EN\u049D\x03O\x03O\x06O\u04A2" +
    "\nO\rO\x0EO\u04A3\x03O\x05O\u04A7\nO\x03O\x03O\x06O\u04AB\nO\rO\x0EO\u04AC" +
    "\x03O\x05O\u04B0\nO\x03O\x03O\x03O\x03O\x03O\x03O\x07O\u04B8\nO\fO\x0E" +
    "O\u04BB\vO\x03O\x03O\x07O\u04BF\nO\fO\x0EO\u04C2\vO\x03O\x03O\x07O\u04C6" +
    "\nO\fO\x0EO\u04C9\vO\x03O\x03O\x03O\x03O\x05O\u04CF\nO\x03P\x03P\x03Q" +
    "\x03Q\x03R\x03R\x03S\x03S\x03T\x03T\x03U\x03U\x03V\x03V\x03W\x03W\x03" +
    "X\x03X\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03]\x03]\x03^\x03^\x03" +
    "_\x03_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x06`\u04FC" +
    "\n`\r`\x0E`\u04FD\x03a\x03a\x03a\x06\u02EA\u02FD\u034C\u0475\x02\x02b" +
    "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
    "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
    "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
    "F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
    "b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
    "~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
    "\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
    "\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02" +
    "\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\x02\x14\b\x02" +
    "XY[\\iq|\x7F\x85\x86\x88\x8A\x05\x02WWkk||\x04\x02XXll\x05\x02YYmn~~\x04" +
    "\x02ZZoo\x04\x02[[pp\x05\x02\\\\qq\x7F\x7F\x04\x02bbuu\x05\x02ddvw\x83" +
    "\x83\x04\x02eexx\x04\x02ffyy\x05\x02ggzz\x84\x84\x03\x0289\x04\x02HHK" +
    "N\x03\x02\x1A\x1A\x04\x02\x1B\x1B\x1D\x1D\x03\x02  \x03\x02!!\x02\u059D" +
    "\x02\xCF\x03\x02\x02\x02\x04\xD5\x03\x02\x02\x02\x06\xDB\x03\x02\x02\x02" +
    "\b\u0106\x03\x02\x02\x02\n\u0108\x03\x02\x02\x02\f\u010A\x03\x02\x02\x02" +
    "\x0E\u011F\x03\x02\x02\x02\x10\u0146\x03\x02\x02\x02\x12\u016D\x03\x02" +
    "\x02\x02\x14\u0178\x03\x02\x02\x02\x16\u01C5\x03\x02\x02\x02\x18\u01C8" +
    "\x03\x02\x02\x02\x1A\u01CC\x03\x02\x02\x02\x1C\u01D3\x03\x02\x02\x02\x1E" +
    "\u01DE\x03\x02\x02\x02 \u01E9\x03\x02\x02\x02\"\u01F4\x03\x02\x02\x02" +
    "$\u01FE\x03\x02\x02\x02&\u020B\x03\x02\x02\x02(\u0212\x03\x02\x02\x02" +
    "*\u021D\x03\x02\x02\x02,\u0228\x03\x02\x02\x02.\u0230\x03\x02\x02\x02" +
    "0\u023F\x03\x02\x02\x022\u0241\x03\x02\x02\x024\u0246\x03\x02\x02\x02" +
    "6\u0248\x03\x02\x02\x028\u024A\x03\x02\x02\x02:\u024C\x03\x02\x02\x02" +
    "<\u024E\x03\x02\x02\x02>\u0250\x03\x02\x02\x02@\u0252\x03\x02\x02\x02" +
    "B\u0254\x03\x02\x02\x02D\u0256\x03\x02\x02\x02F\u0267\x03\x02\x02\x02" +
    "H\u0269\x03\x02\x02\x02J\u0271\x03\x02\x02\x02L\u0273\x03\x02\x02\x02" +
    "N\u027D\x03\x02\x02\x02P\u0287\x03\x02\x02\x02R\u0294\x03\x02\x02\x02" +
    "T\u029B\x03\x02\x02\x02V\u02A6\x03\x02\x02\x02X\u02AD\x03\x02\x02\x02" +
    "Z\u02B7\x03\x02\x02\x02\\\u02C2\x03\x02\x02\x02^\u02DB\x03\x02\x02\x02" +
    "`\u02EE\x03\x02\x02\x02b\u0301\x03\x02\x02\x02d\u0303\x03\x02\x02\x02" +
    "f\u030A\x03\x02\x02\x02h\u031E\x03\x02\x02\x02j\u032F\x03\x02\x02\x02" +
    "l\u0350\x03\x02\x02\x02n\u0352\x03\x02\x02\x02p\u0356\x03\x02\x02\x02" +
    "r\u0376\x03\x02\x02\x02t\u0378\x03\x02\x02\x02v\u038D\x03\x02\x02\x02" +
    "x\u0396\x03\x02\x02\x02z\u03BF\x03\x02\x02\x02|\u03D7\x03\x02\x02\x02" +
    "~\u03D9\x03\x02\x02\x02\x80\u03DD\x03\x02\x02\x02\x82\u03E9\x03\x02\x02" +
    "\x02\x84\u0421\x03\x02\x02\x02\x86\u0423\x03\x02\x02\x02\x88\u0437\x03" +
    "\x02\x02\x02\x8A\u0441\x03\x02\x02\x02\x8C\u044C\x03\x02\x02\x02\x8E\u044E" +
    "\x03\x02\x02\x02\x90\u0452\x03\x02\x02\x02\x92\u0456\x03\x02\x02\x02\x94" +
    "\u047A\x03\x02\x02\x02\x96\u048F\x03\x02\x02\x02\x98\u0491\x03\x02\x02" +
    "\x02\x9A\u049B\x03\x02\x02\x02\x9C\u04CE\x03\x02\x02\x02\x9E\u04D0\x03" +
    "\x02\x02\x02\xA0\u04D2\x03\x02\x02\x02\xA2\u04D4\x03\x02\x02\x02\xA4\u04D6" +
    "\x03\x02\x02\x02\xA6\u04D8\x03\x02\x02\x02\xA8\u04DA\x03\x02\x02\x02\xAA" +
    "\u04DC\x03\x02\x02\x02\xAC\u04DE\x03\x02\x02\x02\xAE\u04E0\x03\x02\x02" +
    "\x02\xB0\u04E2\x03\x02\x02\x02\xB2\u04E4\x03\x02\x02\x02\xB4\u04E6\x03" +
    "\x02\x02\x02\xB6\u04E8\x03\x02\x02\x02\xB8\u04EA\x03\x02\x02\x02\xBA\u04EC" +
    "\x03\x02\x02\x02\xBC\u04EE\x03\x02\x02\x02\xBE\u04FB\x03\x02\x02\x02\xC0" +
    "\u04FF\x03\x02\x02\x02\xC2\xCC\x05\x04\x03\x02\xC3\xC5\x07\x03\x02\x02" +
    "\xC4\xC3\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02" +
    "\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02" +
    "\xC9\xCB\x05\xB6\\\x02\xCA\xC6\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02" +
    "\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xD0\x03\x02\x02\x02" +
    "\xCE\xCC\x03\x02\x02\x02\xCF\xC2\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02" +
    "\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02" +
    "\xD3\xD4\x07\x02\x02\x03\xD4\x03\x03\x02\x02\x02\xD5\xD6\x05\x06\x04\x02" +
    "\xD6\x05\x03\x02\x02\x02\xD7\xDC\x05\f\x07\x02\xD8\xDC\x05\x0E\b\x02\xD9" +
    "\xDC\x05\x10\t\x02\xDA\xDC\x05\x16\f\x02\xDB\xD7\x03\x02\x02\x02\xDB\xD8" +
    "\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\x07" +
    "\x03\x02\x02\x02\xDD\u0107\x07\x9B\x02\x02\xDE\u0107\x071\x02\x02\xDF" +
    "\u0107\x05\x9EP\x02\xE0\u0107\x05\x12\n\x02\xE1\u0107\x05\x92J\x02\xE2" +
    "\u0107\x05|?\x02\xE3\u0107\x05r:\x02\xE4\u0107\x05\x84C\x02\xE5\u0107" +
    "\x05\x86D\x02\xE6\u0107\x05\x9CO\x02\xE7\u0107\x05x=\x02\xE8\u0107\x05" +
    "\x8AF\x02\xE9\xED\x05Z.\x02\xEA\xEC\x05\xB6\\\x02\xEB\xEA\x03\x02\x02" +
    "\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02" +
    "\x02\xEE\u0107\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF4\x05d3\x02" +
    "\xF1\xF3\x05\xB6\\\x02\xF2\xF1\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02" +
    "\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\u0107\x03\x02\x02" +
    "\x02\xF6\xF4\x03\x02\x02\x02\xF7\xFB\x05V,\x02\xF8\xFA\x05\xB6\\\x02\xF9" +
    "\xF8\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB" +
    "\xFC\x03\x02\x02\x02\xFC\u0107\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02" +
    "\xFE\u0107\x05J&\x02\xFF\u0107\x05L\'\x02\u0100\u0107\x05P)\x02\u0101" +
    "\u0107\x05N(\x02\u0102\u0107\x05R*\x02\u0103\u0107\x05v<\x02\u0104\u0107" +
    "\x05\x98M\x02\u0105\u0107\x05\xC0a\x02\u0106\xDD\x03\x02\x02\x02\u0106" +
    "\xDE\x03\x02\x02\x02\u0106\xDF\x03\x02\x02\x02\u0106\xE0\x03\x02\x02\x02" +
    "\u0106\xE1\x03\x02\x02\x02\u0106\xE2\x03\x02\x02\x02\u0106\xE3\x03\x02" +
    "\x02\x02\u0106\xE4\x03\x02\x02\x02\u0106\xE5\x03\x02\x02\x02\u0106\xE6" +
    "\x03\x02\x02\x02\u0106\xE7\x03\x02\x02\x02\u0106\xE8\x03\x02\x02\x02\u0106" +
    "\xE9\x03\x02\x02\x02\u0106\xF0\x03\x02\x02\x02\u0106\xF7\x03\x02\x02\x02" +
    "\u0106\xFE\x03\x02\x02\x02\u0106\xFF\x03\x02\x02\x02\u0106\u0100\x03\x02" +
    "\x02\x02\u0106\u0101\x03\x02\x02\x02\u0106\u0102\x03\x02\x02\x02\u0106" +
    "\u0103\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0105\x03\x02" +
    "\x02\x02\u0107\t\x03\x02\x02\x02\u0108\u0109\x05\b\x05\x02\u0109\v\x03" +
    "\x02\x02\x02\u010A\u010B\x07\x05\x02\x02\u010B\u010C\x05(\x15\x02\u010C" +
    "\u0110\x07\x1A\x02\x02\u010D\u010F\x05\xB6\\\x02\u010E\u010D\x03\x02\x02" +
    "\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111" +
    "\x03\x02\x02\x02\u0111\u011C\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02" +
    "\u0113\u0117\x05\b\x05\x02\u0114\u0116\x05\xB6\\\x02\u0115\u0114\x03\x02" +
    "\x02\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117" +
    "\u0118\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02" +
    "\x02\x02\u011A\u0113\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C" +
    "\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\r\x03\x02\x02" +
    "\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0120\x07\x06\x02\x02\u0120\u0121" +
    "\x05(\x15\x02\u0121\u0123\x07\x1A\x02\x02\u0122\u0124\x05\xB6\\\x02\u0123" +
    "\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u012E\x03\x02" +
    "\x02\x02\u0125\u0129\x05\b\x05\x02\u0126\u0128\x05\xB6\\\x02\u0127\u0126" +
    "\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02" +
    "\u0129\u012A\x03\x02\x02\x02\u012A\u012D\x03\x02\x02\x02\u012B\u0129\x03" +
    "\x02\x02\x02\u012C\u0125\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E" +
    "\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0134\x03\x02" +
    "\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0133\x070\x02\x02\u0132\u0131" +
    "\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02" +
    "\u0134\u0135\x03\x02\x02\x02\u0135\u0144\x03\x02\x02\x02\u0136\u0134\x03" +
    "\x02\x02\x02\u0137\u0141\x05\n\x06\x02\u0138\u013A\x070\x02\x02\u0139" +
    "\u0138\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02" +
    "\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D" +
    "\u013B\x03\x02\x02\x02\u013E\u0140\x05\n\x06\x02\u013F\u013B\x03\x02\x02" +
    "\x02\u0140\u0143\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142" +
    "\x03\x02\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02" +
    "\u0144\u0137\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\x0F\x03" +
    "\x02\x02\x02\u0146\u0147\x07\x07\x02\x02\u0147\u0148\x05(\x15\x02\u0148" +
    "\u014A\x07\x1A\x02\x02\u0149\u014B\x05\xB6\\\x02\u014A\u0149\x03\x02\x02" +
    "\x02\u014A\u014B\x03\x02\x02\x02\u014B\u0155\x03\x02\x02\x02\u014C\u0150" +
    "\x05\b\x05\x02\u014D\u014F\x05\xB6\\\x02\u014E\u014D\x03\x02\x02\x02\u014F" +
    "\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02" +
    "\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153" +
    "\u014C\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02" +
    "\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u015B\x03\x02\x02\x02\u0157" +
    "\u0155\x03\x02\x02\x02\u0158\u015A\x070\x02\x02\u0159\u0158\x03\x02\x02" +
    "\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C" +
    "\x03\x02\x02\x02\u015C\u016B\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02" +
    "\u015E\u0168\x05\n\x06\x02\u015F\u0161\x070\x02\x02\u0160\u015F\x03\x02" +
    "\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162" +
    "\u0163\x03\x02\x02\x02\u0163\u0165\x03\x02\x02\x02\u0164\u0162\x03\x02" +
    "\x02\x02\u0165\u0167\x05\n\x06\x02\u0166\u0162\x03\x02\x02\x02\u0167\u016A" +
    "\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02" +
    "\u0169\u016C\x03\x02\x02\x02\u016A\u0168";
clozeParser._serializedATNSegment1 = "\x03\x02\x02\x02\u016B\u015E\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02" +
    "\u016C\x11\x03\x02\x02\x02\u016D\u0175\x05\x14\v\x02\u016E\u0174\x05\x14" +
    "\v\x02\u016F\u0174\x05\x84C\x02\u0170\u0174\x05\x86D\x02\u0171\u0174\x05" +
    "r:\x02\u0172\u0174\x05x=\x02\u0173\u016E\x03\x02\x02\x02\u0173\u016F\x03" +
    "\x02\x02\x02\u0173\u0170\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173" +
    "\u0172\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02" +
    "\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\x13\x03\x02\x02\x02\u0177\u0175" +
    "\x03\x02\x02\x02\u0178\u017C\x07\x10\x02\x02\u0179\u017D\x05\xBA^\x02" +
    "\u017A\u017D\x05\xBC_\x02\u017B\u017D\x03\x02\x02\x02\u017C\u0179\x03" +
    "\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017B\x03\x02\x02\x02\u017D" +
    "\u0181\x03\x02\x02\x02\u017E\u0180\x05\x9CO\x02\u017F\u017E\x03\x02\x02" +
    "\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0182" +
    "\x03\x02\x02\x02\u0182\u0184\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02" +
    "\u0184\u0185\x05\xB4[\x02\u0185\x15\x03\x02\x02\x02\u0186\u0187\x07\b" +
    "\x02\x02\u0187\u0188\x05(\x15\x02\u0188\u0192\x07\x1A\x02\x02\u0189\u018D" +
    "\x05\b\x05\x02\u018A\u018C\x05\xB6\\\x02\u018B\u018A\x03\x02\x02\x02\u018C" +
    "\u018F\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02" +
    "\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u0190" +
    "\u0189\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02" +
    "\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u01C6\x03\x02\x02\x02\u0194" +
    "\u0192\x03\x02\x02\x02\u0195\u0196\x07\b\x02\x02\u0196\u0197\x05(\x15" +
    "\x02\u0197\u019B\x07\x1A\x02\x02\u0198\u019A\x05\xB6\\\x02\u0199\u0198" +
    "\x03\x02\x02\x02\u019A\u019D\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02" +
    "\u019B\u019C\x03\x02\x02\x02\u019C\u01AC\x03\x02\x02\x02\u019D\u019B\x03" +
    "\x02\x02\x02\u019E\u01A2\x05\b\x05\x02\u019F\u01A1\x05\xB6\\\x02\u01A0" +
    "\u019F\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03\x02" +
    "\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01AD\x03\x02\x02\x02\u01A4" +
    "\u01A2\x03\x02\x02\x02\u01A5\u01A9\x05\x18\r\x02\u01A6\u01A8\x05\xB6\\" +
    "\x02\u01A7\u01A6\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7" +
    "\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AD\x03\x02\x02\x02" +
    "\u01AB\u01A9\x03\x02\x02\x02\u01AC\u019E\x03\x02\x02\x02\u01AC\u01A5\x03" +
    "\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE" +
    "\u01AF\x03\x02\x02\x02\u01AF\u01B3\x03\x02\x02\x02\u01B0\u01B2\x070\x02" +
    "\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1" +
    "\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01C3\x03\x02\x02\x02" +
    "\u01B5\u01B3\x03\x02\x02\x02\u01B6\u01C0\x05\n\x06\x02\u01B7\u01B9\x07" +
    "0\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA" +
    "\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BD\x03\x02" +
    "\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01BF\x05\n\x06\x02\u01BE\u01BA" +
    "\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02" +
    "\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03" +
    "\x02\x02\x02\u01C3\u01B6\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4" +
    "\u01C6\x03\x02\x02\x02\u01C5\u0186\x03\x02\x02\x02\u01C5\u0195\x03\x02" +
    "\x02\x02\u01C6\x17\x03\x02\x02\x02\u01C7\u01C9\x05\x1A\x0E\x02\u01C8\u01C7" +
    "\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02" +
    "\u01CA\u01CB\x05\x1C\x0F\x02\u01CB\x19\x03\x02\x02\x02\u01CC\u01CD\x07" +
    "\x16\x02\x02\u01CD\u01CE\x05\x9CO\x02\u01CE\u01CF\x07\x1A\x02\x02\u01CF" +
    "\x1B\x03\x02\x02\x02\u01D0\u01D4\x05\x1E\x10\x02\u01D1\u01D4\x05 \x11" +
    "\x02\u01D2\u01D4\x05\"\x12\x02\u01D3\u01D0\x03\x02\x02\x02\u01D3\u01D1" +
    "\x03\x02\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4\u01DA\x03\x02\x02\x02" +
    "\u01D5\u01D9\x05\x1E\x10\x02\u01D6\u01D9\x05 \x11\x02\u01D7\u01D9\x05" +
    "\"\x12\x02\u01D8\u01D5\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8" +
    "\u01D7\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02" +
    "\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\x1D\x03\x02\x02\x02\u01DC\u01DA" +
    "\x03\x02\x02\x02\u01DD\u01DF\x05r:\x02\u01DE\u01DD\x03\x02\x02\x02\u01DE" +
    "\u01DF\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E2\x07\x14" +
    "\x02\x02\u01E1\u01E3\x05\x9CO\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E4" +
    "\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02" +
    "\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x07\x1A\x02\x02\u01E7\x1F\x03" +
    "\x02\x02\x02\u01E8\u01EA\x05r:\x02\u01E9\u01E8\x03\x02\x02\x02\u01E9\u01EA" +
    "\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED\x07\x15\x02\x02" +
    "\u01EC\u01EE\x05\x9CO\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03" +
    "\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0" +
    "\u01F1\x03\x02\x02\x02\u01F1\u01F2\x07\x1A\x02\x02\u01F2!\x03\x02\x02" +
    "\x02\u01F3\u01F5\x05r:\x02\u01F4\u01F3\x03\x02\x02\x02\u01F4\u01F5\x03" +
    "\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F8\x07\x17\x02\x02\u01F7" +
    "\u01F9\x05\x9CO\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02" +
    "\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC" +
    "\x03\x02\x02\x02\u01FC\u01FD\x07\x1A\x02\x02\u01FD#\x03\x02\x02\x02\u01FE" +
    "\u0202\x05\\/\x02\u01FF\u0201\x05`1\x02\u0200\u01FF\x03\x02\x02\x02\u0201" +
    "\u0204\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202\u0203\x03\x02" +
    "\x02\x02\u0203\u0209\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0205" +
    "\u0206\x07H\x02\x02\u0206\u0207\x05\xBE`\x02\u0207\u0208\x07\x1A\x02\x02" +
    "\u0208\u020A\x03\x02\x02\x02\u0209\u0205\x03\x02\x02\x02\u0209\u020A\x03" +
    "\x02\x02\x02\u020A%\x03\x02\x02\x02\u020B\u020C\x07E\x02\x02\u020C\u020D" +
    "\x07.\x02\x02\u020D\u020E\x07\x1A\x02\x02\u020E\'\x03\x02\x02\x02\u020F" +
    "\u0211\x05*\x16\x02\u0210\u020F\x03\x02\x02\x02\u0211\u0214\x03\x02\x02" +
    "\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u021A" +
    "\x03\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0219\x07\x87\x02\x02" +
    "\u0216\u0219\x07\x88\x02\x02\u0217\u0219\x05,\x17\x02\u0218\u0215\x03" +
    "\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0217\x03\x02\x02\x02\u0219" +
    "\u021C\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02" +
    "\x02\x02\u021B)\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u021E" +
    "\t\x02\x02\x02\u021E+\x03\x02\x02\x02\u021F\u0229\x050\x19\x02\u0220\u0229" +
    "\x05h5\x02\u0221\u0229\x052\x1A\x02\u0222\u0229\x054\x1B\x02\u0223\u0229" +
    "\x056\x1C\x02\u0224\u0229\x058\x1D\x02\u0225\u0229\x05:\x1E\x02\u0226" +
    "\u0229\x05<\x1F\x02\u0227\u0229\x07]\x02\x02\u0228\u021F\x03\x02\x02\x02" +
    "\u0228\u0220\x03\x02\x02\x02\u0228\u0221\x03\x02\x02\x02\u0228\u0222\x03" +
    "\x02\x02\x02\u0228\u0223\x03\x02\x02\x02\u0228\u0224\x03\x02\x02\x02\u0228" +
    "\u0225\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0227\x03\x02" +
    "\x02\x02\u0229-\x03\x02\x02\x02\u022A\u0231\x07\x85\x02\x02\u022B\u0231" +
    "\x07\x86\x02\x02\u022C\u0231\x07\x87\x02\x02\u022D\u0231\x07\x8A\x02\x02" +
    "\u022E\u0231\x07\x88\x02\x02\u022F\u0231\x03\x02\x02\x02\u0230\u022A\x03" +
    "\x02\x02\x02\u0230\u022B\x03\x02\x02\x02\u0230\u022C\x03\x02\x02\x02\u0230" +
    "\u022D\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0230\u022F\x03\x02" +
    "\x02\x02\u0231/\x03\x02\x02\x02\u0232\u0235\x07U\x02\x02\u0233\u0236\x07" +
    ")\x02\x02\u0234\u0236\x07\x98\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235" +
    "\u0234\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0240\x03\x02" +
    "\x02\x02\u0237\u0239\x07j\x02\x02\u0238\u023A\x07)\x02\x02\u0239\u0238" +
    "\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u0240\x03\x02\x02\x02" +
    "\u023B\u023D\x07V\x02\x02\u023C\u023E\x07)\x02\x02\u023D\u023C\x03\x02" +
    "\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u0240\x03\x02\x02\x02\u023F" +
    "\u0232\x03\x02\x02\x02\u023F\u0237\x03\x02\x02\x02\u023F\u023B\x03\x02" +
    "\x02\x02\u02401\x03\x02\x02\x02\u0241\u0244\t\x03\x02\x02\u0242\u0243" +
    "\x07\x1B\x02\x02\u0243\u0245\x07+\x02\x02\u0244\u0242\x03\x02\x02\x02" +
    "\u0244\u0245\x03\x02\x02\x02\u02453\x03\x02\x02\x02\u0246\u0247\t\x04" +
    "\x02\x02\u02475\x03\x02\x02\x02\u0248\u0249\t\x05\x02\x02\u02497\x03\x02" +
    "\x02\x02\u024A\u024B\t\x06\x02\x02\u024B9\x03\x02\x02\x02\u024C\u024D" +
    "\t\x07\x02\x02\u024D;\x03\x02\x02\x02\u024E\u024F\t\b\x02\x02\u024F=\x03" +
    "\x02\x02\x02\u0250\u0251\t\t\x02\x02\u0251?\x03\x02\x02\x02\u0252\u0253" +
    "\t\n\x02\x02\u0253A\x03\x02\x02\x02\u0254\u0255\t\v\x02\x02\u0255C\x03" +
    "\x02\x02\x02\u0256\u0257\t\f\x02\x02\u0257E\x03\x02\x02\x02\u0258\u025B" +
    "\x07a\x02\x02\u0259\u025A\x07\x1B\x02\x02\u025A\u025C\x07+\x02\x02\u025B" +
    "\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u0268\x03\x02" +
    "\x02\x02\u025D\u0260\x07t\x02\x02\u025E\u025F\x07\x1B\x02\x02\u025F\u0261" +
    "\x07+\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02" +
    "\u0261\u0268\x03\x02\x02\x02\u0262\u0265\x07\x81\x02\x02\u0263\u0264\x07" +
    "\x1B\x02\x02\u0264\u0266\x07+\x02\x02\u0265\u0263\x03\x02\x02\x02\u0265" +
    "\u0266\x03\x02\x02\x02\u0266\u0268\x03\x02\x02\x02\u0267\u0258\x03\x02" +
    "\x02\x02\u0267\u025D\x03\x02\x02\x02\u0267\u0262\x03\x02\x02\x02\u0268" +
    "G\x03\x02\x02\x02\u0269\u026A\t\r\x02\x02\u026AI\x03\x02\x02\x02\u026B" +
    "\u026C\x05> \x02\u026C\u026D\x07\x1B\x02\x02\u026D\u026E\x05p9\x02\u026E" +
    "\u026F\x07\x1A\x02\x02\u026F\u0272\x03\x02\x02\x02\u0270\u0272\x07,\x02" +
    "\x02\u0271\u026B\x03\x02\x02\x02\u0271\u0270\x03\x02\x02\x02\u0272K\x03" +
    "\x02\x02\x02\u0273\u0274\x05@!\x02\u0274\u0275\x07\x1B\x02\x02\u0275\u0276" +
    "\x05p9\x02\u0276\u027B\x07\x1A\x02\x02\u0277\u0278\x07H\x02\x02\u0278" +
    "\u0279\x05\xBE`\x02\u0279\u027A\x07\x1A\x02\x02\u027A\u027C\x03\x02\x02" +
    "\x02\u027B\u0277\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027CM\x03" +
    "\x02\x02\x02\u027D\u027E\x05D#\x02\u027E\u027F\x07\x1B\x02\x02\u027F\u0280" +
    "\x05p9\x02\u0280\u0285\x07\x1A\x02\x02\u0281\u0282\x07H\x02\x02\u0282" +
    "\u0283\x05\xBE`\x02\u0283\u0284\x07\x1A\x02\x02\u0284\u0286\x03\x02\x02" +
    "\x02\u0285\u0281\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286O\x03" +
    "\x02\x02\x02\u0287\u0288\x05B\"\x02\u0288\u028B\x07\x1B\x02\x02\u0289" +
    "\u028C\x05p9\x02\u028A\u028C\x05n8\x02\u028B\u0289\x03\x02\x02\x02\u028B" +
    "\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u0292\x07\x1A" +
    "\x02\x02\u028E\u028F\x07H\x02\x02\u028F\u0290\x05\xBE`\x02\u0290\u0291" +
    "\x07\x1A\x02\x02\u0291\u0293\x03\x02\x02\x02\u0292\u028E\x03\x02\x02\x02" +
    "\u0292\u0293\x03\x02\x02\x02\u0293Q\x03\x02\x02\x02\u0294\u0298\x05T+" +
    "\x02\u0295\u0297\x05l7\x02\u0296\u0295\x03\x02\x02\x02\u0297\u029A\x03" +
    "\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299" +
    "S\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029B\u029C\x05H%\x02\u029C" +
    "\u02A0\x07\x1B\x02\x02\u029D\u029F\x07\x03\x02\x02\u029E\u029D\x03\x02" +
    "\x02\x02\u029F\u02A2\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A0" +
    "\u02A1\x03\x02\x02\x02\u02A1\u02A3\x03\x02\x02\x02\u02A2\u02A0\x03\x02" +
    "\x02\x02\u02A3\u02A4\x05p9\x02\u02A4\u02A5\x07\x1A\x02\x02\u02A5U\x03" +
    "\x02\x02\x02\u02A6\u02AA\x05X-\x02\u02A7\u02A9\x05l7\x02\u02A8\u02A7\x03" +
    "\x02\x02\x02\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA" +
    "\u02AB\x03\x02\x02\x02\u02ABW\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02" +
    "\x02\u02AD\u02AE\x05F$\x02\u02AE\u02AF\x07\x1B\x02\x02\u02AF\u02B0\x05" +
    "p9\x02\u02B0\u02B5\x07\x1A\x02\x02\u02B1\u02B2\x07H\x02\x02\u02B2\u02B3" +
    "\x05\xBE`\x02\u02B3\u02B4\x07\x1A\x02\x02\u02B4\u02B6\x03\x02\x02\x02" +
    "\u02B5\u02B1\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6Y\x03\x02" +
    "\x02\x02\u02B7\u02BB\x05\\/\x02\u02B8\u02BA\x05`1\x02\u02B9\u02B8\x03" +
    "\x02\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB" +
    "\u02BC\x03\x02\x02\x02\u02BC\u02C0\x03\x02\x02\x02\u02BD\u02BB\x03\x02" +
    "\x02\x02\u02BE\u02BF\x070\x02\x02\u02BF\u02C1\x07J\x02\x02\u02C0\u02BE" +
    "\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1[\x03\x02\x02\x02\u02C2" +
    "\u02C3\x05^0\x02\u02C3\u02C7\x07\x1B\x02\x02\u02C4\u02C6\x07\x03\x02\x02" +
    "\u02C5\u02C4\x03\x02\x02\x02\u02C6\u02C9\x03\x02\x02\x02\u02C7\u02C5\x03" +
    "\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02CA\x03\x02\x02\x02\u02C9" +
    "\u02C7\x03\x02\x02\x02\u02CA\u02CB\x05p9\x02\u02CB\u02CC\x07\x1A\x02\x02" +
    "\u02CC]\x03\x02\x02\x02\u02CD\u02D0\x07_\x02\x02\u02CE\u02D1\x07)\x02" +
    "\x02\u02CF\u02D1\x07\x98\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02CF" +
    "\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02DC\x03\x02\x02\x02" +
    "\u02D2\u02D4\x07s\x02\x02\u02D3\u02D5\x07)\x02\x02\u02D4\u02D3\x03\x02" +
    "\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02DC\x03\x02\x02\x02\u02D6" +
    "\u02D8\x07`\x02\x02\u02D7\u02D9\x07)\x02\x02\u02D8\u02D7\x03\x02\x02\x02" +
    "\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DC\x03\x02\x02\x02\u02DA\u02DC\x07" +
    "\x9D\x02\x02\u02DB\u02CD\x03\x02\x02\x02\u02DB\u02D2\x03\x02\x02\x02\u02DB" +
    "\u02D6\x03\x02\x02\x02\u02DB\u02DA\x03\x02\x02\x02\u02DC_\x03\x02\x02" +
    "\x02\u02DD\u02DE\x07F\x02\x02\u02DE\u02DF\x07\x1B\x02\x02\u02DF\u02E0" +
    "\x05p9\x02\u02E0\u02E1\x07\x1A\x02\x02\u02E1\u02EF\x03\x02\x02\x02\u02E2" +
    "\u02E3\t\x0E\x02\x02\u02E3\u02E4\x07\x1B\x02\x02\u02E4\u02E5\x07.\x02" +
    "\x02\u02E5\u02EF\x07\x1A\x02\x02\u02E6\u02EA\t\x0F\x02\x02\u02E7\u02E9" +
    "\v\x02\x02\x02\u02E8\u02E7\x03\x02\x02\x02\u02E9\u02EC\x03\x02\x02\x02" +
    "\u02EA\u02EB\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02ED\x03" +
    "\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED\u02EF\x07\x1A\x02\x02\u02EE" +
    "\u02DD\x03\x02\x02\x02\u02EE\u02E2\x03\x02\x02\x02\u02EE\u02E6\x03\x02" +
    "\x02\x02\u02EFa\x03\x02\x02\x02\u02F0\u02F1\x07F\x02\x02\u02F1\u02F2\x07" +
    "\x1B\x02\x02\u02F2\u02F3\x05p9\x02\u02F3\u02F4\x07\x1A\x02\x02\u02F4\u0302" +
    "\x03\x02\x02\x02\u02F5\u02F6\t\x0E\x02\x02\u02F6\u02F7\x07\x1B\x02\x02" +
    "\u02F7\u02F8\x07.\x02\x02\u02F8\u0302\x07\x1A\x02\x02\u02F9\u02FD\t\x0F" +
    "\x02\x02\u02FA\u02FC\v\x02\x02\x02\u02FB\u02FA\x03\x02\x02\x02\u02FC\u02FF" +
    "\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FD\u02FB\x03\x02\x02\x02" +
    "\u02FE\u0300\x03\x02\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u0300\u0302\x07" +
    "\x1A\x02\x02\u0301\u02F0\x03\x02\x02\x02\u0301\u02F5\x03\x02\x02\x02\u0301" +
    "\u02F9\x03\x02\x02\x02\u0302c\x03\x02\x02\x02\u0303\u0307\x05f4\x02\u0304" +
    "\u0306\x05l7\x02\u0305\u0304\x03\x02\x02\x02\u0306\u0309\x03\x02\x02\x02" +
    "\u0307\u0305\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308e\x03\x02" +
    "\x02\x02\u0309\u0307\x03\x02\x02\x02\u030A\u030B\x05j6\x02\u030B\u030C" +
    "\x07\x1B\x02\x02\u030C\u030D\x05p9\x02\u030D\u0312\x07\x1A\x02\x02\u030E" +
    "\u030F\x07H\x02\x02\u030F\u0310\x05\xBE`\x02\u0310\u0311\x07\x1A\x02\x02" +
    "\u0311\u0313\x03\x02\x02\x02\u0312\u030E\x03\x02\x02\x02\u0312\u0313\x03" +
    "\x02\x02\x02\u0313g\x03\x02\x02\x02\u0314\u0317\x07T\x02\x02\u0315\u0316" +
    "\x07\x1B\x02\x02\u0316\u0318\x07*\x02\x02\u0317\u0315\x03\x02\x02\x02" +
    "\u0317\u0318\x03\x02\x02\x02\u0318\u031F\x03\x02\x02\x02\u0319\u031C\x07" +
    "i\x02\x02\u031A\u031B\x07\x1B\x02\x02\u031B\u031D\x07*\x02\x02\u031C\u031A" +
    "\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031F\x03\x02\x02\x02" +
    "\u031E\u0314\x03\x02\x02\x02\u031E\u0319\x03\x02\x02\x02\u031Fi\x03\x02" +
    "\x02\x02\u0320\u0323\x07^\x02\x02\u0321\u0322\x07\x1B\x02\x02\u0322\u0324" +
    "\x07*\x02\x02\u0323\u0321\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02" +
    "\u0324\u0330\x03\x02\x02\x02\u0325\u0328\x07r\x02\x02\u0326\u0327\x07" +
    "\x1B\x02\x02\u0327\u0329\x07*\x02\x02\u0328\u0326\x03\x02\x02\x02\u0328" +
    "\u0329\x03\x02\x02\x02\u0329\u0330\x03\x02\x02\x02\u032A\u032D\x07\x82" +
    "\x02\x02\u032B\u032C\x07\x1B\x02\x02\u032C\u032E\x07*\x02\x02\u032D\u032B" +
    "\x03\x02\x02\x02\u032D\u032E\x03\x02\x02\x02\u032E\u0330\x03\x02\x02\x02" +
    "\u032F\u0320\x03\x02\x02\x02\u032F\u0325\x03\x02\x02\x02\u032F\u032A\x03" +
    "\x02\x02\x02\u0330k\x03\x02\x02\x02\u0331\u0332\x07\x13\x02\x02\u0332" +
    "\u0335\x05\x9CO\x02\u0333\u0335\x07F\x02\x02\u0334\u0331\x03\x02\x02\x02" +
    "\u0334\u0333\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u033A\x07" +
    "\x1B\x02\x02\u0337\u0339\x07\x03\x02\x02\u0338\u0337\x03\x02\x02\x02\u0339" +
    "\u033C\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033A\u033B\x03\x02" +
    "\x02\x02\u033B\u033F\x03\x02\x02\x02\u033C\u033A\x03\x02\x02\x02\u033D" +
    "\u0340\x05\x9CO\x02\u033E\u0340\x070\x02\x02\u033F\u033D\x03\x02\x02\x02" +
    "\u033F\u033E\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u033F\x03" +
    "\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343" +
    "\u0351\x07\x1A\x02\x02\u0344\u0345\t\x0E\x02\x02\u0345\u0346\x07\x1B\x02" +
    "\x02\u0346\u0347\x07.\x02\x02\u0347\u0351\x07\x1A\x02\x02\u0348\u034C" +
    "\t\x0F\x02\x02\u0349\u034B\v\x02\x02\x02\u034A\u0349\x03\x02\x02\x02\u034B" +
    "\u034E\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034C\u034A\x03\x02" +
    "\x02\x02\u034D\u034F\x03\x02\x02\x02\u034E\u034C\x03\x02\x02\x02\u034F" +
    "\u0351\x07\x1A\x02\x02\u0350\u0334\x03\x02\x02\x02\u0350\u0344\x03\x02" +
    "\x02\x02\u0350\u0348\x03\x02\x02\x02\u0351m\x03\x02\x02\x02\u0352\u0353" +
    "\x07\x97\x02\x02\u0353\u0354\x07\x1E\x02\x02\u0354\u0355\x07.\x02\x02" +
    "\u0355o\x03\x02\x02\x02\u0356\u0357\x07\x9A\x02\x02\u0357q\x03\x02\x02" +
    "\x02\u0358\u0359\x07\x18\x02\x02\u0359\u0361\x07\x1A\x02\x02\u035A\u035C" +
    "\x07\x03\x02\x02\u035B\u035A\x03\x02\x02\x02\u035C\u035F\x03\x02\x02\x02" +
    "\u035D\u035B\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u0360\x03" +
    "\x02\x02\x02\u035F\u035D\x03\x02\x02\x02\u0360\u0362\x05t;\x02\u0361\u035D" +
    "\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0377\x03\x02\x02\x02" +
    "\u0363\u0364\x07\x18\x02\x02\u0364\u0369\x05\x9CO\x02\u0365\u0368\x07" +
    "\x1B\x02\x02\u0366\u0368\x05\x9CO\x02\u0367\u0365\x03\x02\x02\x02\u0367" +
    "\u0366\x03\x02\x02\x02\u0368\u036B\x03\x02\x02\x02\u0369\u0367\x03\x02" +
    "\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036C\x03\x02\x02\x02\u036B" +
    "\u0369\x03\x02\x02\x02\u036C\u0374\x07\x1A\x02\x02\u036D\u036F\x07\x03" +
    "\x02\x02\u036E\u036D\x03\x02\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370" +
    "\u036E\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0373\x03\x02" +
    "\x02\x02\u0372\u0370\x03\x02\x02\x02\u0373\u0375\x05t;\x02\u0374\u0370" +
    "\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375\u0377\x03\x02\x02\x02" +
    "\u0376\u0358\x03\x02\x02\x02\u0376\u0363\x03\x02\x02\x02\u0377s\x03\x02" +
    "\x02\x02\u0378\u0379\x07\x18\x02\x02\u0379\u037E\x05\x9CO\x02\u037A\u037D" +
    "\x07\x1B\x02\x02\u037B\u037D\x05\x9CO\x02\u037C\u037A\x03\x02\x02\x02" +
    "\u037C\u037B\x03\x02\x02\x02\u037D\u0380\x03\x02\x02\x02\u037E\u037C\x03" +
    "\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0381\x03\x02\x02\x02\u0380" +
    "\u037E\x03\x02\x02\x02\u0381\u0382\x07\x1A\x02\x02\u0382u\x03\x02\x02" +
    "\x02\u0383\u0385\x07\r\x02\x02\u0384\u0386\x05\x9CO\x02\u0385\u0384\x03" +
    "\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387" +
    "\u038E\x07\x1A\x02\x02\u0388\u038A\x07\x0E\x02\x02\u0389\u038B\x05\x9C" +
    "O\x02\u038A\u0389\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038C" +
    "\x03\x02\x02\x02\u038C\u038E\x07\x1A\x02\x02\u038D\u0383\x03\x02\x02\x02" +
    "\u038D\u0388\x03\x02\x02\x02\u038Ew\x03\x02\x02\x02\u038F\u0397\x07?\x02" +
    "\x02\u0390\u0397\x07=\x02\x02\u0391\u0393\x07>\x02\x02\u0392\u0394\x07" +
    "3\x02\x02\u0393\u0392\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394" +
    "\u0395\x03\x02\x02\x02\u0395\u0397\x07\x02\x02\x03\u0396\u038F\x03\x02" +
    "\x02\x02\u0396\u0390\x03\x02\x02\x02\u0396\u0391\x03\x02\x02\x02\u0397" +
    "y\x03\x02\x02\x02\u0398\u039A\x07h\x02\x02\u0399\u039B\x05\x9CO\x02\u039A" +
    "\u0399\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039B\u03B1\x03\x02" +
    "\x02\x02\u039C\u03A6\x05\x9CO\x02\u039D\u03A1\x070\x02\x02\u039E\u03A0" +
    "\x07\x03\x02\x02\u039F\u039E\x03\x02\x02\x02\u03A0\u03A3\x03\x02\x02\x02" +
    "\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A5\x03" +
    "\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A4\u039D\x03\x02\x02\x02\u03A5" +
    "\u03A8\x03\x02\x02\x02\u03A6\u03A4\x03\x02\x02\x02\u03A6\u03A7\x03\x02" +
    "\x02\x02\u03A7\u03AC\x03\x02\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A9" +
    "\u03AB\x070\x02\x02\u03AA\u03A9\x03\x02\x02\x02\u03AB\u03AE\x03\x02\x02" +
    "\x02\u03AC\u03AA\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03B0" +
    "\x03\x02\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AF\u039C\x03\x02\x02\x02" +
    "\u03B0\u03B3\x03\x02\x02\x02\u03B1\u03AF\x03\x02\x02\x02\u03B1\u03B2\x03" +
    "\x02\x02\x02\u03B2\u03B4\x03\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B4" +
    "\u03C0\x07\x1A\x02\x02\u03B5\u03BB\x07h\x02\x02\u03B6\u03BA\x05\x9CO\x02" +
    "\u03B7\u03BA\x070\x02\x02\u03B8\u03BA\x07\x03\x02\x02\u03B9\u03B6\x03" +
    "\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9\u03B8\x03\x02\x02\x02\u03BA" +
    "\u03BD\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03\x02" +
    "\x02\x02\u03BC\u03BE\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BE" +
    "\u03C0\x07\x02\x02\x03\u03BF\u0398\x03\x02\x02\x02\u03BF\u03B5\x03\x02" +
    "\x02\x02\u03C0{\x03\x02\x02\x02\u03C1\u03C6\x077\x02\x02\u03C2\u03C7\x05" +
    "\x9CO\x02\u03C3\u03C7\x07\x1B\x02\x02\u03C4\u03C7\x07\x9A\x02\x02\u03C5" +
    "\u03C7\x070\x02\x02\u03C6\u03C2\x03\x02\x02\x02\u03C6\u03C3\x03\x02\x02" +
    "\x02\u03C6\u03C4\x03\x02\x02\x02\u03C6\u03C5\x03\x02\x02\x02\u03C7\u03C8" +
    "\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02" +
    "\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03D8\x07\x1A\x02\x02\u03CB\u03D3\x07" +
    "7\x02\x02\u03CC\u03D2\x05\x9CO\x02\u03CD\u03D2\x07\x1B\x02\x02\u03CE\u03D2" +
    "\x07\x9A\x02\x02\u03CF\u03D2\x070\x02\x02\u03D0\u03D2\x07\x03\x02\x02" +
    "\u03D1\u03CC\x03\x02\x02\x02\u03D1\u03CD\x03\x02\x02\x02\u03D1\u03CE\x03" +
    "\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1\u03D0\x03\x02\x02\x02\u03D2" +
    "\u03D5\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D3\u03D4\x03\x02" +
    "\x02\x02\u03D4\u03D6\x03\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D6" +
    "\u03D8\x07\x02\x02\x03\u03D7\u03C1\x03\x02\x02\x02\u03D7\u03CB\x03\x02" +
    "\x02\x02\u03D8}\x03\x02\x02\x02\u03D9\u03DA\x076\x02\x02\u03DA\u03DB\x05" +
    "\x9CO\x02\u03DB\u03DC\x07\x1A\x02\x02\u03DC\x7F\x03\x02\x02\x02\u03DD" +
    "\u03E1\x07Q\x02\x02\u03DE\u03E2\x05\x9CO\x02\u03DF\u03E2\x07\x1B\x02\x02" +
    "\u03E0\u03E2\x070\x02\x02\u03E1\u03DE\x03\x02\x02\x02\u03E1\u03DF\x03" +
    "\x02\x02\x02\u03E1\u03E0\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3" +
    "\u03E1\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5\x03\x02" +
    "\x02\x02\u03E5\u03E7\x07\x1A\x02\x02\u03E6\u03E8\x05\x82B\x02\u03E7\u03E6" +
    "\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\x81\x03\x02\x02\x02" +
    "\u03E9\u03ED\x07Q\x02\x02\u03EA\u03EE\x05\x9CO\x02\u03EB\u03EE\x07\x1B" +
    "\x02\x02\u03EC\u03EE\x070\x02\x02\u03ED\u03EA\x03\x02\x02\x02\u03ED\u03EB" +
    "\x03\x02\x02\x02\u03ED\u03EC\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02" +
    "\u03EF\u03ED\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F1\x03" +
    "\x02\x02\x02\u03F1\u03F2\x07\x1A\x02\x02\u03F2\x83\x03\x02\x02\x02\u03F3" +
    "\u03F7\x07\x11\x02\x02\u03F4\u03F6\x070\x02\x02\u03F5\u03F4\x03\x02\x02" +
    "\x02\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F7\u03F8" +
    "\x03\x02\x02\x02\u03F8\u03FB\x03\x02\x02\x02\u03F9\u03F7\x03\x02\x02\x02" +
    "\u03FA\u03FC\x05\x9CO\x02\u03FB\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03" +
    "\x02\x02\x02\u03FC\u040C\x03\x02\x02\x02\u03FD\u0401\x070\x02\x02\u03FE" +
    "\u0400\x07\x03\x02\x02\u03FF\u03FE\x03\x02\x02\x02\u0400\u0403\x03\x02" +
    "\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402" +
    "\u0405\x03\x02\x02\x02\u0403\u0401\x03\x02\x02\x02\u0404\u03FD\x03\x02" +
    "\x02\x02\u0405\u0408\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0406" +
    "\u0407\x03\x02\x02\x02\u0407\u0409\x03\x02\x02\x02\u0408\u0406\x03\x02" +
    "\x02\x02\u0409\u040B\x05\x9CO\x02\u040A\u0406\x03\x02\x02\x02\u040B\u040E" +
    "\x03\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040C\u040D\x03\x02\x02\x02" +
    "\u040D\u0412\x03\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040F\u0411\x07" +
    "0\x02\x02\u0410\u040F\x03\x02\x02\x02\u0411\u0414\x03\x02\x02\x02\u0412" +
    "\u0410\x03\x02\x02\x02\u0412\u0413\x03\x02";
clozeParser._serializedATNSegment2 = "\x02\x02\u0413\u0415\x03\x02\x02\x02\u0414\u0412\x03\x02\x02\x02\u0415" +
    "\u0422\x07\x1A\x02\x02\u0416\u041A\x07\x11\x02\x02\u0417\u0419\x070\x02" +
    "\x02\u0418\u0417\x03\x02\x02\x02\u0419\u041C\x03\x02\x02\x02\u041A\u0418" +
    "\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B\u041E\x03\x02\x02\x02" +
    "\u041C\u041A\x03\x02\x02\x02\u041D\u041F\x05\x9CO\x02\u041E\u041D\x03" +
    "\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420" +
    "\u0422\x07\x02\x02\x03\u0421\u03F3\x03\x02\x02\x02\u0421\u0416\x03\x02" +
    "\x02\x02\u0422\x85\x03\x02\x02\x02\u0423\u0425\x07\x12\x02\x02\u0424\u0426" +
    "\n\x10\x02\x02\u0425\u0424\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02" +
    "\u0427\u0425\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02\u0428\u0429\x03" +
    "\x02\x02\x02\u0429\u042A\x07\x1A\x02\x02\u042A\x87\x03\x02\x02\x02\u042B" +
    "\u042E\x07\x19\x02\x02\u042C\u042F\x05\x9CO\x02\u042D\u042F\x070\x02\x02" +
    "\u042E\u042C\x03\x02\x02\x02\u042E\u042D\x03\x02\x02\x02\u042F\u0430\x03" +
    "\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431" +
    "\u0432\x03\x02\x02\x02\u0432\u0438\x07\x1A\x02\x02\u0433\u0434\x07\x19" +
    "\x02\x02\u0434\u0435\x05\x9CO\x02\u0435\u0436\x07\x02\x02\x03\u0436\u0438" +
    "\x03\x02\x02\x02\u0437\u042B\x03\x02\x02\x02\u0437\u0433\x03\x02\x02\x02" +
    "\u0438\x89\x03\x02\x02\x02\u0439\u043A\x07C\x02\x02\u043A\u043B\x05\x9C" +
    "O\x02\u043B\u043C\x07\x1A\x02\x02\u043C\u0442\x03\x02\x02\x02\u043D\u043E" +
    "\x07D\x02\x02\u043E\u043F\x05\x9CO\x02\u043F\u0440\x07\x1A\x02\x02\u0440" +
    "\u0442\x03\x02\x02\x02\u0441\u0439\x03\x02\x02\x02\u0441\u043D\x03\x02" +
    "\x02\x02\u0442\x8B\x03\x02\x02\x02\u0443\u0444\x07:\x02\x02\u0444\u0445" +
    "\x07\x1B\x02\x02\u0445\u0446\x07.\x02\x02\u0446\u044D\x07\x1A\x02\x02" +
    "\u0447\u0448\x07:\x02\x02\u0448\u0449\x07\x1B\x02\x02\u0449\u044A\x05" +
    "\x9CO\x02\u044A\u044B\x07\x1A\x02\x02\u044B\u044D\x03\x02\x02\x02\u044C" +
    "\u0443\x03\x02\x02\x02\u044C\u0447\x03\x02\x02\x02\u044D\x8D\x03\x02\x02" +
    "\x02\u044E\u044F\x07O\x02\x02\u044F\u0450\x05\x9CO\x02\u0450\u0451\x07" +
    "\x1A\x02\x02\u0451\x8F\x03\x02\x02\x02\u0452\u0453\x07P\x02\x02\u0453" +
    "\u0454\x05\x9CO\x02\u0454\u0455\x07\x1A\x02\x02\u0455\x91\x03\x02\x02" +
    "\x02\u0456\u0460\x05\x94K\x02\u0457\u0459\x070\x02\x02\u0458\u0457\x03" +
    "\x02\x02\x02\u0459\u045C\x03\x02\x02\x02\u045A\u0458\x03\x02\x02\x02\u045A" +
    "\u045B\x03\x02\x02\x02\u045B\u045D\x03\x02\x02\x02\u045C\u045A\x03\x02" +
    "\x02\x02\u045D\u045F\x05\x94K\x02\u045E\u045A\x03\x02\x02\x02\u045F\u0462" +
    "\x03\x02\x02\x02\u0460\u045E\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02" +
    "\u0461\x93\x03\x02\x02\x02\u0462\u0460\x03\x02\x02\x02\u0463\u0464\x07" +
    "\x13\x02\x02\u0464\u0465\x05\x9CO\x02\u0465\u0466\t\x11\x02\x02\u0466" +
    "\u046C\x05\x9CO\x02\u0467\u046B\x070\x02\x02\u0468\u046B\x07\x1B\x02\x02" +
    "\u0469\u046B\x05\x9CO\x02\u046A\u0467\x03\x02\x02\x02\u046A\u0468\x03" +
    "\x02\x02\x02\u046A\u0469\x03\x02\x02\x02\u046B\u046E\x03\x02\x02\x02\u046C" +
    "\u046A\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046F\x03\x02" +
    "\x02\x02\u046E\u046C\x03\x02\x02\x02\u046F\u0470\x07\x1A\x02\x02\u0470" +
    "\u047B\x03\x02\x02\x02\u0471\u0475\x07M\x02\x02\u0472\u0474\v\x02\x02" +
    "\x02\u0473\u0472\x03\x02\x02\x02\u0474\u0477\x03\x02\x02\x02\u0475\u0476" +
    "\x03\x02\x02\x02\u0475\u0473\x03\x02\x02\x02\u0476\u0478\x03\x02\x02\x02" +
    "\u0477\u0475\x03\x02\x02\x02\u0478\u047B\x07\x1A\x02\x02\u0479\u047B\x07" +
    "@\x02\x02\u047A\u0463\x03\x02\x02\x02\u047A\u0471\x03\x02\x02\x02\u047A" +
    "\u0479\x03\x02\x02\x02\u047B\x95\x03\x02\x02\x02\u047C\u0480\x07\n\x02" +
    "\x02\u047D\u0481\x05\x9CO\x02\u047E\u0481\x07\x1B\x02\x02\u047F\u0481" +
    "\x070\x02\x02\u0480\u047D\x03\x02\x02\x02\u0480\u047E\x03\x02\x02\x02" +
    "\u0480\u047F\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482\u0480\x03" +
    "\x02\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484" +
    "\u0490\x07\x1A\x02\x02\u0485\u048B\x07\n\x02\x02\u0486\u048A\x05\x9CO" +
    "\x02\u0487\u048A\x07\x1B\x02\x02\u0488\u048A\x070\x02\x02\u0489\u0486" +
    "\x03\x02\x02\x02\u0489\u0487\x03\x02\x02\x02\u0489\u0488\x03\x02\x02\x02" +
    "\u048A\u048D\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048B\u048C\x03" +
    "\x02\x02\x02\u048C\u048E\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048E" +
    "\u0490\x07\x02\x02\x03\u048F\u047C\x03\x02\x02\x02\u048F\u0485\x03\x02" +
    "\x02\x02\u0490\x97\x03\x02\x02\x02\u0491\u0493\x07\x0F\x02\x02\u0492\u0494" +
    "\x05\x9CO\x02\u0493\u0492\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02" +
    "\u0494\u0495\x03\x02\x02\x02\u0495\u0496\x07\x1A\x02\x02\u0496\x99\x03" +
    "\x02\x02\x02\u0497\u0499\x05\x9CO\x02\u0498\u049A\x05\xB6\\\x02\u0499" +
    "\u0498\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049C\x03\x02" +
    "\x02\x02\u049B\u0497\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02\u049D" +
    "\u049B\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\x9B\x03\x02\x02" +
    "\x02\u049F\u04A6\x07/\x02\x02\u04A0\u04A2\x07\x03\x02\x02\u04A1\u04A0" +
    "\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A1\x03\x02\x02\x02" +
    "\u04A3\u04A4\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04A7\x05" +
    "\xBA^\x02\u04A6\u04A1\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7" +
    "\u04CF\x03\x02\x02\x02\u04A8\u04AF\x05\xBE`\x02\u04A9\u04AB\x07\x03\x02" +
    "\x02\u04AA\u04A9\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AA" +
    "\x03\x02\x02\x02\u04AC\u04AD\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02" +
    "\u04AE\u04B0\x05\xBA^\x02\u04AF\u04AA\x03\x02\x02\x02\u04AF\u04B0\x03" +
    "\x02\x02\x02\u04B0\u04CF\x03\x02\x02\x02\u04B1\u04B2\x07\x16\x02\x02\u04B2" +
    "\u04B3\x05\x9CO\x02\u04B3\u04B4\x07\x1A\x02\x02\u04B4\u04CF\x03\x02\x02" +
    "\x02\u04B5\u04CF\x07.\x02\x02\u04B6\u04B8\x07\x03\x02\x02\u04B7\u04B6" +
    "\x03\x02\x02\x02\u04B8\u04BB\x03\x02\x02\x02\u04B9\u04B7\x03\x02\x02\x02" +
    "\u04B9\u04BA\x03\x02\x02\x02\u04BA\u04BC\x03\x02\x02\x02\u04BB\u04B9\x03" +
    "\x02\x02\x02\u04BC\u04C0\x07\x1B\x02\x02\u04BD\u04BF\x07\x03\x02\x02\u04BE" +
    "\u04BD\x03\x02\x02\x02\u04BF\u04C2\x03\x02\x02\x02\u04C0\u04BE\x03\x02" +
    "\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04CF\x03\x02\x02\x02\u04C2" +
    "\u04C0\x03\x02\x02\x02\u04C3\u04C7\x07\x1C\x02\x02\u04C4\u04C6\x07\x03" +
    "\x02\x02\u04C5\u04C4\x03\x02\x02\x02\u04C6\u04C9\x03\x02\x02\x02\u04C7" +
    "\u04C5\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04CF\x03\x02" +
    "\x02\x02\u04C9\u04C7\x03\x02\x02\x02\u04CA\u04CF\x07\x1A\x02\x02\u04CB" +
    "\u04CF\x07%\x02\x02\u04CC\u04CF\x07\"\x02\x02\u04CD\u04CF\x07\x9A\x02" +
    "\x02\u04CE\u049F\x03\x02\x02\x02\u04CE\u04A8\x03\x02\x02\x02\u04CE\u04B1" +
    "\x03\x02\x02\x02\u04CE\u04B5\x03\x02\x02\x02\u04CE\u04B9\x03\x02\x02\x02" +
    "\u04CE\u04C3\x03\x02\x02\x02\u04CE\u04CA\x03\x02\x02\x02\u04CE\u04CB\x03" +
    "\x02\x02\x02\u04CE\u04CC\x03\x02\x02\x02\u04CE\u04CD\x03\x02\x02\x02\u04CF" +
    "\x9D\x03\x02\x02\x02\u04D0\u04D1\x07(\x02\x02\u04D1\x9F\x03\x02\x02\x02" +
    "\u04D2\u04D3\x07\x10\x02\x02\u04D3\xA1\x03\x02\x02\x02\u04D4\u04D5\x07" +
    "\x11\x02\x02\u04D5\xA3\x03\x02\x02\x02\u04D6\u04D7\x07\x12\x02\x02\u04D7" +
    "\xA5\x03\x02\x02\x02\u04D8\u04D9\x07\x13\x02\x02\u04D9\xA7\x03\x02\x02" +
    "\x02\u04DA\u04DB\x07\x14\x02\x02\u04DB\xA9\x03\x02\x02\x02\u04DC\u04DD" +
    "\x07\x15\x02\x02\u04DD\xAB\x03\x02\x02\x02\u04DE\u04DF\x07\x16\x02\x02" +
    "\u04DF\xAD\x03\x02\x02\x02\u04E0\u04E1\x07\x17\x02\x02\u04E1\xAF\x03\x02" +
    "\x02\x02\u04E2\u04E3\x07\x18\x02\x02\u04E3\xB1\x03\x02\x02\x02\u04E4\u04E5" +
    "\x07\x1A\x02\x02\u04E5\xB3\x03\x02\x02\x02\u04E6\u04E7\x07\x1A\x02\x02" +
    "\u04E7\xB5\x03\x02\x02\x02\u04E8\u04E9\x070\x02\x02\u04E9\xB7\x03\x02" +
    "\x02\x02\u04EA\u04EB\x07\x9B\x02\x02\u04EB\xB9\x03\x02\x02\x02\u04EC\u04ED" +
    "\x07.\x02\x02\u04ED\xBB\x03\x02\x02\x02\u04EE\u04EF\x07/\x02\x02\u04EF" +
    "\xBD\x03\x02\x02\x02\u04F0\u04FC\x073\x02\x02\u04F1\u04FC\x071\x02\x02" +
    "\u04F2\u04FC\x074\x02\x02\u04F3\u04FC\x072\x02\x02\u04F4\u04FC\x07\x1C" +
    "\x02\x02\u04F5\u04F6\x07 \x02\x02\u04F6\u04FC\n\x12\x02\x02\u04F7\u04F8" +
    "\x07!\x02\x02\u04F8\u04FC\n\x13\x02\x02\u04F9\u04FC\x07$\x02\x02\u04FA" +
    "\u04FC\x07#\x02\x02\u04FB\u04F0\x03\x02\x02\x02\u04FB\u04F1\x03\x02\x02" +
    "\x02\u04FB\u04F2\x03\x02\x02\x02\u04FB\u04F3\x03\x02\x02\x02\u04FB\u04F4" +
    "\x03\x02\x02\x02\u04FB\u04F5\x03\x02\x02\x02\u04FB\u04F7\x03\x02\x02\x02" +
    "\u04FB\u04F9\x03\x02\x02\x02\u04FB\u04FA\x03\x02\x02\x02\u04FC\u04FD\x03" +
    "\x02\x02\x02\u04FD\u04FB\x03\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE" +
    "\xBF\x03\x02\x02\x02\u04FF\u0500\x07\x03\x02\x02\u0500\xC1\x03\x02\x02" +
    "\x02\xAF\xC6\xCC\xD1\xDB\xED\xF4\xFB\u0106\u0110\u0117\u011C\u0123\u0129" +
    "\u012E\u0134\u013B\u0141\u0144\u014A\u0150\u0155\u015B\u0162\u0168\u016B" +
    "\u0173\u0175\u017C\u0181\u018D\u0192\u019B\u01A2\u01A9\u01AC\u01AE\u01B3" +
    "\u01BA\u01C0\u01C3\u01C5\u01C8\u01D3\u01D8\u01DA\u01DE\u01E4\u01E9\u01EF" +
    "\u01F4\u01FA\u0202\u0209\u0212\u0218\u021A\u0228\u0230\u0235\u0239\u023D" +
    "\u023F\u0244\u025B\u0260\u0265\u0267\u0271\u027B\u0285\u028B\u0292\u0298" +
    "\u02A0\u02AA\u02B5\u02BB\u02C0\u02C7\u02D0\u02D4\u02D8\u02DB\u02EA\u02EE" +
    "\u02FD\u0301\u0307\u0312\u0317\u031C\u031E\u0323\u0328\u032D\u032F\u0334" +
    "\u033A\u033F\u0341\u034C\u0350\u035D\u0361\u0367\u0369\u0370\u0374\u0376" +
    "\u037C\u037E\u0385\u038A\u038D\u0393\u0396\u039A\u03A1\u03A6\u03AC\u03B1" +
    "\u03B9\u03BB\u03BF\u03C6\u03C8\u03D1\u03D3\u03D7\u03E1\u03E3\u03E7\u03ED" +
    "\u03EF\u03F7\u03FB\u0401\u0406\u040C\u0412\u041A\u041E\u0421\u0427\u042E" +
    "\u0430\u0437\u0441\u044C\u045A\u0460\u046A\u046C\u0475\u047A\u0480\u0482" +
    "\u0489\u048B\u048F\u0493\u0499\u049D\u04A3\u04A6\u04AC\u04AF\u04B9\u04C0" +
    "\u04C7\u04CE\u04FB\u04FD";
clozeParser._serializedATN = Utils.join([
    clozeParser._serializedATNSegment0,
    clozeParser._serializedATNSegment1,
    clozeParser._serializedATNSegment2,
], "");
class BitmarkContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(clozeParser.EOF, 0); }
    bitmark_(i) {
        if (i === undefined) {
            return this.getRuleContexts(Bitmark_Context);
        }
        else {
            return this.getRuleContext(i, Bitmark_Context);
        }
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.S);
        }
        else {
            return this.getToken(clozeParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_bitmark; }
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
    clozes() {
        return this.getRuleContext(0, ClozesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_bitmark_; }
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
class ClozesContext extends ParserRuleContext_1.ParserRuleContext {
    cloze() {
        return this.tryGetRuleContext(0, ClozeContext);
    }
    cloze_instruction_grouped() {
        return this.tryGetRuleContext(0, Cloze_instruction_groupedContext);
    }
    cloze_solution_grouped() {
        return this.tryGetRuleContext(0, Cloze_solution_groupedContext);
    }
    cloze_and_multiple_choice_text() {
        return this.tryGetRuleContext(0, Cloze_and_multiple_choice_textContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_clozes; }
    // @Override
    enterRule(listener) {
        if (listener.enterClozes) {
            listener.enterClozes(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClozes) {
            listener.exitClozes(this);
        }
    }
}
exports.ClozesContext = ClozesContext;
class BitElemContext extends ParserRuleContext_1.ParserRuleContext {
    LIST_LINE() { return this.tryGetToken(clozeParser.LIST_LINE, 0); }
    NOTBITMARK() { return this.tryGetToken(clozeParser.NOTBITMARK, 0); }
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
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
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
    get ruleIndex() { return clozeParser.RULE_bitElem; }
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
    get ruleIndex() { return clozeParser.RULE_resource; }
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
class ClozeContext extends ParserRuleContext_1.ParserRuleContext {
    BitCloze() { return this.getToken(clozeParser.BitCloze, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_cloze; }
    // @Override
    enterRule(listener) {
        if (listener.enterCloze) {
            listener.enterCloze(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCloze) {
            listener.exitCloze(this);
        }
    }
}
exports.ClozeContext = ClozeContext;
class Cloze_instruction_groupedContext extends ParserRuleContext_1.ParserRuleContext {
    BitClozeinstgrp() { return this.getToken(clozeParser.BitClozeinstgrp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
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
    get ruleIndex() { return clozeParser.RULE_cloze_instruction_grouped; }
    // @Override
    enterRule(listener) {
        if (listener.enterCloze_instruction_grouped) {
            listener.enterCloze_instruction_grouped(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCloze_instruction_grouped) {
            listener.exitCloze_instruction_grouped(this);
        }
    }
}
exports.Cloze_instruction_groupedContext = Cloze_instruction_groupedContext;
class Cloze_solution_groupedContext extends ParserRuleContext_1.ParserRuleContext {
    BitClozesolgrp() { return this.getToken(clozeParser.BitClozesolgrp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
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
    get ruleIndex() { return clozeParser.RULE_cloze_solution_grouped; }
    // @Override
    enterRule(listener) {
        if (listener.enterCloze_solution_grouped) {
            listener.enterCloze_solution_grouped(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCloze_solution_grouped) {
            listener.exitCloze_solution_grouped(this);
        }
    }
}
exports.Cloze_solution_groupedContext = Cloze_solution_groupedContext;
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
    get ruleIndex() { return clozeParser.RULE_gap; }
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
    OPU() { return this.getToken(clozeParser.OPU, 0); }
    clnsp() {
        return this.getRuleContext(0, ClnspContext);
    }
    numeric() {
        return this.tryGetRuleContext(0, NumericContext);
    }
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
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
    get ruleIndex() { return clozeParser.RULE_single_gap; }
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
class Cloze_and_multiple_choice_textContext extends ParserRuleContext_1.ParserRuleContext {
    BitClozeandmulti() { return this.getToken(clozeParser.BitClozeandmulti, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    headed_inline_choices(i) {
        if (i === undefined) {
            return this.getRuleContexts(Headed_inline_choicesContext);
        }
        else {
            return this.getRuleContext(i, Headed_inline_choicesContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
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
    get ruleIndex() { return clozeParser.RULE_cloze_and_multiple_choice_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterCloze_and_multiple_choice_text) {
            listener.enterCloze_and_multiple_choice_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCloze_and_multiple_choice_text) {
            listener.exitCloze_and_multiple_choice_text(this);
        }
    }
}
exports.Cloze_and_multiple_choice_textContext = Cloze_and_multiple_choice_textContext;
class Headed_inline_choicesContext extends ParserRuleContext_1.ParserRuleContext {
    inline_choices() {
        return this.getRuleContext(0, Inline_choicesContext);
    }
    choice_head() {
        return this.tryGetRuleContext(0, Choice_headContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_headed_inline_choices; }
    // @Override
    enterRule(listener) {
        if (listener.enterHeaded_inline_choices) {
            listener.enterHeaded_inline_choices(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHeaded_inline_choices) {
            listener.exitHeaded_inline_choices(this);
        }
    }
}
exports.Headed_inline_choicesContext = Headed_inline_choicesContext;
class Choice_headContext extends ParserRuleContext_1.ParserRuleContext {
    OPS() { return this.getToken(clozeParser.OPS, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_choice_head; }
    // @Override
    enterRule(listener) {
        if (listener.enterChoice_head) {
            listener.enterChoice_head(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChoice_head) {
            listener.exitChoice_head(this);
        }
    }
}
exports.Choice_headContext = Choice_headContext;
class Inline_choicesContext extends ParserRuleContext_1.ParserRuleContext {
    choice_plus(i) {
        if (i === undefined) {
            return this.getRuleContexts(Choice_plusContext);
        }
        else {
            return this.getRuleContext(i, Choice_plusContext);
        }
    }
    choice_minus(i) {
        if (i === undefined) {
            return this.getRuleContexts(Choice_minusContext);
        }
        else {
            return this.getRuleContext(i, Choice_minusContext);
        }
    }
    choice_star(i) {
        if (i === undefined) {
            return this.getRuleContexts(Choice_starContext);
        }
        else {
            return this.getRuleContext(i, Choice_starContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_inline_choices; }
    // @Override
    enterRule(listener) {
        if (listener.enterInline_choices) {
            listener.enterInline_choices(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInline_choices) {
            listener.exitInline_choices(this);
        }
    }
}
exports.Inline_choicesContext = Inline_choicesContext;
class Choice_plusContext extends ParserRuleContext_1.ParserRuleContext {
    OPP() { return this.getToken(clozeParser.OPP, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_choice_plus; }
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
    OPM() { return this.getToken(clozeParser.OPM, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_choice_minus; }
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
    OPR() { return this.getToken(clozeParser.OPR, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_choice_star; }
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
class PimagebitContext extends ParserRuleContext_1.ParserRuleContext {
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
    OPATALT() { return this.tryGetToken(clozeParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    CL() { return this.tryGetToken(clozeParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_pimagebit; }
    // @Override
    enterRule(listener) {
        if (listener.enterPimagebit) {
            listener.enterPimagebit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPimagebit) {
            listener.exitPimagebit(this);
        }
    }
}
exports.PimagebitContext = PimagebitContext;
class AtpointContext extends ParserRuleContext_1.ParserRuleContext {
    AtPoints() { return this.getToken(clozeParser.AtPoints, 0); }
    NUMERIC() { return this.getToken(clozeParser.NUMERIC, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_atpoint; }
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
            return this.getTokens(clozeParser.ColonText);
        }
        else {
            return this.getToken(clozeParser.ColonText, i);
        }
    }
    ColonJson(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.ColonJson);
        }
        else {
            return this.getToken(clozeParser.ColonJson, i);
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
    get ruleIndex() { return clozeParser.RULE_format; }
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
    BitmarkMinus() { return this.tryGetToken(clozeParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(clozeParser.BitmarkPlus, 0); }
    Prosemirror() { return this.tryGetToken(clozeParser.Prosemirror, 0); }
    Placeholder() { return this.tryGetToken(clozeParser.Placeholder, 0); }
    ColonJson() { return this.tryGetToken(clozeParser.ColonJson, 0); }
    AmpArticle() { return this.tryGetToken(clozeParser.AmpArticle, 0); }
    AmpDocument() { return this.tryGetToken(clozeParser.AmpDocument, 0); }
    AmpWebsite() { return this.tryGetToken(clozeParser.AmpWebsite, 0); }
    AmpStillImageFilm() { return this.tryGetToken(clozeParser.AmpStillImageFilm, 0); }
    AmpAudioLink() { return this.tryGetToken(clozeParser.AmpAudioLink, 0); }
    AmpImageLink() { return this.tryGetToken(clozeParser.AmpImageLink, 0); }
    AmpVideoLink() { return this.tryGetToken(clozeParser.AmpVideoLink, 0); }
    AmpArticleLink() { return this.tryGetToken(clozeParser.AmpArticleLink, 0); }
    AmpDocumentLink() { return this.tryGetToken(clozeParser.AmpDocumentLink, 0); }
    AmpAppLink() { return this.tryGetToken(clozeParser.AmpAppLink, 0); }
    AmpWebsiteLink() { return this.tryGetToken(clozeParser.AmpWebsiteLink, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(clozeParser.AmpStillImageFilmLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(clozeParser.AmpVideoEmbed, 0); }
    AmpAudioEmbed() { return this.tryGetToken(clozeParser.AmpAudioEmbed, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(clozeParser.AmpDocumentEmbed, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(clozeParser.AmpStillImageFilmEmbed, 0); }
    AmpDocumentDownload() { return this.tryGetToken(clozeParser.AmpDocumentDownload, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_resource_format; }
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
    AmpPdf() { return this.tryGetToken(clozeParser.AmpPdf, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_resource_format_extra; }
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
    BitmarkMinus() { return this.tryGetToken(clozeParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(clozeParser.BitmarkPlus, 0); }
    ColonText() { return this.tryGetToken(clozeParser.ColonText, 0); }
    Placeholder() { return this.tryGetToken(clozeParser.Placeholder, 0); }
    ColonJson() { return this.tryGetToken(clozeParser.ColonJson, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_format2; }
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
    AmpImage() { return this.tryGetToken(clozeParser.AmpImage, 0); }
    Image_type() { return this.tryGetToken(clozeParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(clozeParser.DotArticleAtt, 0); }
    AmpImageLink() { return this.tryGetToken(clozeParser.AmpImageLink, 0); }
    AmpImageZoom() { return this.tryGetToken(clozeParser.AmpImageZoom, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_image_format; }
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
    AmpVideo() { return this.tryGetToken(clozeParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(clozeParser.AmpVideoLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(clozeParser.AmpVideoEmbed, 0); }
    COLON() { return this.tryGetToken(clozeParser.COLON, 0); }
    Video_type() { return this.tryGetToken(clozeParser.Video_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_video_format; }
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
    AmpArticle() { return this.tryGetToken(clozeParser.AmpArticle, 0); }
    AmpArticleLink() { return this.tryGetToken(clozeParser.AmpArticleLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_article_format; }
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
    AmpDocument() { return this.tryGetToken(clozeParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(clozeParser.AmpDocumentLink, 0); }
    AmpDocumentDownload() { return this.tryGetToken(clozeParser.AmpDocumentDownload, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(clozeParser.AmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_document_format; }
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
    AmpApp() { return this.tryGetToken(clozeParser.AmpApp, 0); }
    AmpAppLink() { return this.tryGetToken(clozeParser.AmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_app_format; }
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
    AmpWebsite() { return this.tryGetToken(clozeParser.AmpWebsite, 0); }
    AmpWebsiteLink() { return this.tryGetToken(clozeParser.AmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_website_format; }
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
    AmpStillImageFilm() { return this.tryGetToken(clozeParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(clozeParser.AmpStillImageFilmLink, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(clozeParser.AmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_stillimagefilm_format; }
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
    OpAmpArticleLink() { return this.tryGetToken(clozeParser.OpAmpArticleLink, 0); }
    OpAmpArticle() { return this.tryGetToken(clozeParser.OpAmpArticle, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_op_article_format; }
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
    OpAmpDocumentLink() { return this.tryGetToken(clozeParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(clozeParser.OpAmpDocument, 0); }
    OpAmpDocumentDownload() { return this.tryGetToken(clozeParser.OpAmpDocumentDownload, 0); }
    OpAmpDocumentEmbed() { return this.tryGetToken(clozeParser.OpAmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_op_document_format; }
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
    OpAmpApp() { return this.tryGetToken(clozeParser.OpAmpApp, 0); }
    OpAmpAppLink() { return this.tryGetToken(clozeParser.OpAmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_op_app_format; }
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
    OpAmpWebsite() { return this.tryGetToken(clozeParser.OpAmpWebsite, 0); }
    OpAmpWebsiteLink() { return this.tryGetToken(clozeParser.OpAmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_op_website_format; }
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
    OpAmpVideo() { return this.tryGetToken(clozeParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(clozeParser.COLON, 0); }
    Video_type() { return this.tryGetToken(clozeParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(clozeParser.OpAmpVideoLink, 0); }
    OpAmpVideoEmbed() { return this.tryGetToken(clozeParser.OpAmpVideoEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_op_video_format; }
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
    OpAmpStillImageFilm() { return this.tryGetToken(clozeParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(clozeParser.OpAmpStillImageFilmLink, 0); }
    OpAmpStillImageFilmEmbed() { return this.tryGetToken(clozeParser.OpAmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_op_stillimagefilm_format; }
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
    COLON() { return this.tryGetToken(clozeParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.tryGetToken(clozeParser.CL, 0); }
    ArticleText() { return this.tryGetToken(clozeParser.ArticleText, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_articlebit; }
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
    COLON() { return this.getToken(clozeParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.CL);
        }
        else {
            return this.getToken(clozeParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(clozeParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_documentbit; }
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
    COLON() { return this.getToken(clozeParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.CL);
        }
        else {
            return this.getToken(clozeParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(clozeParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_websitebit; }
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
    COLON() { return this.getToken(clozeParser.COLON, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.CL);
        }
        else {
            return this.getToken(clozeParser.CL, i);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(clozeParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_appbit; }
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
    get ruleIndex() { return clozeParser.RULE_stillimagefilmbit; }
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
    COLON() { return this.getToken(clozeParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.S);
        }
        else {
            return this.getToken(clozeParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_stillimg_one; }
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
    get ruleIndex() { return clozeParser.RULE_videobit; }
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
    COLON() { return this.getToken(clozeParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.CL);
        }
        else {
            return this.getToken(clozeParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(clozeParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_video_one; }
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
    NL() { return this.tryGetToken(clozeParser.NL, 0); }
    ShowInIndex() { return this.tryGetToken(clozeParser.ShowInIndex, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_imagebit; }
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
    COLON() { return this.getToken(clozeParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.S);
        }
        else {
            return this.getToken(clozeParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_image_one; }
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
    OpAmpImage() { return this.tryGetToken(clozeParser.OpAmpImage, 0); }
    Image_type() { return this.tryGetToken(clozeParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(clozeParser.DotArticleAtt, 0); }
    OpAmpImageLink() { return this.tryGetToken(clozeParser.OpAmpImageLink, 0); }
    OpAmpImageZoom() { return this.tryGetToken(clozeParser.OpAmpImageZoom, 0); }
    OpAmpImageWAudio() { return this.tryGetToken(clozeParser.OpAmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_op_image_format; }
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
    AtSrc() { return this.tryGetToken(clozeParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(clozeParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(clozeParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(clozeParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(clozeParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(clozeParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(clozeParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(clozeParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(clozeParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(clozeParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_image_chained; }
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
    AtSrc() { return this.tryGetToken(clozeParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(clozeParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(clozeParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(clozeParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(clozeParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(clozeParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(clozeParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(clozeParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(clozeParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(clozeParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_image_chained4match; }
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
    get ruleIndex() { return clozeParser.RULE_audiobit; }
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
    COLON() { return this.getToken(clozeParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.CL);
        }
        else {
            return this.getToken(clozeParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(clozeParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_audio_one; }
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
    AmpAudio() { return this.tryGetToken(clozeParser.AmpAudio, 0); }
    COLON() { return this.tryGetToken(clozeParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(clozeParser.Audio_type, 0); }
    AmpAudioLink() { return this.tryGetToken(clozeParser.AmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_audio_format; }
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
    OpAmpAudio() { return this.tryGetToken(clozeParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(clozeParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(clozeParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(clozeParser.OpAmpAudioLink, 0); }
    OpAmpAudioEmbed() { return this.tryGetToken(clozeParser.OpAmpAudioEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_op_audio_format; }
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
    COLON() { return this.tryGetToken(clozeParser.COLON, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
    OPA() { return this.tryGetToken(clozeParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtSrc() { return this.tryGetToken(clozeParser.AtSrc, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.S);
        }
        else {
            return this.getToken(clozeParser.S, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
        }
    }
    NUMERIC() { return this.tryGetToken(clozeParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(clozeParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(clozeParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(clozeParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(clozeParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(clozeParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(clozeParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(clozeParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_resource_chained; }
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
    TEL() { return this.getToken(clozeParser.TEL, 0); }
    PLUS() { return this.getToken(clozeParser.PLUS, 0); }
    NUMERIC() { return this.getToken(clozeParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_telephone; }
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
    URL() { return this.getToken(clozeParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_url; }
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
    OPC() { return this.getToken(clozeParser.OPC, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.S);
        }
        else {
            return this.getToken(clozeParser.S, i);
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
            return this.getTokens(clozeParser.COLON);
        }
        else {
            return this.getToken(clozeParser.COLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_item; }
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
    OPC() { return this.getToken(clozeParser.OPC, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.COLON);
        }
        else {
            return this.getToken(clozeParser.COLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_lead; }
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
    OPRANGLES() { return this.tryGetToken(clozeParser.OPRANGLES, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(clozeParser.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_angleref; }
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
    AtExamplecl() { return this.tryGetToken(clozeParser.AtExamplecl, 0); }
    AtExampleWithStr() { return this.tryGetToken(clozeParser.AtExampleWithStr, 0); }
    AtExamplecol() { return this.tryGetToken(clozeParser.AtExamplecol, 0); }
    EOF() { return this.tryGetToken(clozeParser.EOF, 0); }
    SENTENCE() { return this.tryGetToken(clozeParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_example; }
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
    BracEnclose() { return this.getToken(clozeParser.BracEnclose, 0); }
    CL() { return this.tryGetToken(clozeParser.CL, 0); }
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
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.S);
        }
        else {
            return this.getToken(clozeParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(clozeParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_bracketed_text; }
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
    AtReference() { return this.getToken(clozeParser.AtReference, 0); }
    CL() { return this.tryGetToken(clozeParser.CL, 0); }
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
            return this.getTokens(clozeParser.COLON);
        }
        else {
            return this.getToken(clozeParser.COLON, i);
        }
    }
    URL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.URL);
        }
        else {
            return this.getToken(clozeParser.URL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(clozeParser.EOF, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.S);
        }
        else {
            return this.getToken(clozeParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_reference; }
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
    AtProgress() { return this.getToken(clozeParser.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_progress; }
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
    AtDate() { return this.getToken(clozeParser.AtDate, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
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
            return this.getTokens(clozeParser.COLON);
        }
        else {
            return this.getToken(clozeParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
        }
    }
    dateprop_chained() {
        return this.tryGetRuleContext(0, Dateprop_chainedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_dateprop; }
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
    AtDate() { return this.getToken(clozeParser.AtDate, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
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
            return this.getTokens(clozeParser.COLON);
        }
        else {
            return this.getToken(clozeParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_dateprop_chained; }
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
    OPB() { return this.getToken(clozeParser.OPB, 0); }
    CL() { return this.tryGetToken(clozeParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
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
            return this.getTokens(clozeParser.S);
        }
        else {
            return this.getToken(clozeParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(clozeParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_instruction; }
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
    OPQ() { return this.getToken(clozeParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.CL);
        }
        else {
            return this.getToken(clozeParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_hint; }
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
    OPHASH() { return this.getToken(clozeParser.OPHASH, 0); }
    CL() { return this.tryGetToken(clozeParser.CL, 0); }
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
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(clozeParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_title; }
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
    AtLabeltrue() { return this.tryGetToken(clozeParser.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    AtLabelfalse() { return this.tryGetToken(clozeParser.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_bool_label; }
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
    AtProgressPoints() { return this.getToken(clozeParser.AtProgressPoints, 0); }
    COLON() { return this.getToken(clozeParser.COLON, 0); }
    NUMERIC() { return this.tryGetToken(clozeParser.NUMERIC, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_progress_points; }
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
    OpAtIsTracked() { return this.getToken(clozeParser.OpAtIsTracked, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_istracked; }
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
    OpAtIsInfoOnly() { return this.getToken(clozeParser.OpAtIsInfoOnly, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(clozeParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_isinfoonly; }
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
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_atdef; }
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
    OPA() { return this.tryGetToken(clozeParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.tryGetToken(clozeParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.COLON);
        }
        else {
            return this.getToken(clozeParser.COLON, i);
        }
    }
    DBLCOLON() { return this.tryGetToken(clozeParser.DBLCOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
        }
    }
    OpAtCopyright() { return this.tryGetToken(clozeParser.OpAtCopyright, 0); }
    AtSampleSolution() { return this.tryGetToken(clozeParser.AtSampleSolution, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_atdef_; }
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
    OPDOLL() { return this.getToken(clozeParser.OPDOLL, 0); }
    CL() { return this.tryGetToken(clozeParser.CL, 0); }
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
            return this.getTokens(clozeParser.COLON);
        }
        else {
            return this.getToken(clozeParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.NL);
        }
        else {
            return this.getToken(clozeParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(clozeParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_dollarans; }
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
    OPDANGLE() { return this.getToken(clozeParser.OPDANGLE, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_anchor; }
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
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_lines; }
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
    STRING() { return this.tryGetToken(clozeParser.STRING, 0); }
    numeric() {
        return this.tryGetRuleContext(0, NumericContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.S);
        }
        else {
            return this.getToken(clozeParser.S, i);
        }
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    OPS() { return this.tryGetToken(clozeParser.OPS, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    CL() { return this.tryGetToken(clozeParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(clozeParser.NUMERIC, 0); }
    COLON() { return this.tryGetToken(clozeParser.COLON, 0); }
    AMP() { return this.tryGetToken(clozeParser.AMP, 0); }
    OP_N_ETC() { return this.tryGetToken(clozeParser.OP_N_ETC, 0); }
    DBLEQ() { return this.tryGetToken(clozeParser.DBLEQ, 0); }
    URL() { return this.tryGetToken(clozeParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_s_and_w; }
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
    DCANY() { return this.getToken(clozeParser.DCANY, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_dclines; }
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
class OpuContext extends ParserRuleContext_1.ParserRuleContext {
    OPU() { return this.getToken(clozeParser.OPU, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_opu; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpu) {
            listener.enterOpu(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpu) {
            listener.exitOpu(this);
        }
    }
}
exports.OpuContext = OpuContext;
class OpbContext extends ParserRuleContext_1.ParserRuleContext {
    OPB() { return this.getToken(clozeParser.OPB, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_opb; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpb) {
            listener.enterOpb(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpb) {
            listener.exitOpb(this);
        }
    }
}
exports.OpbContext = OpbContext;
class OpqContext extends ParserRuleContext_1.ParserRuleContext {
    OPQ() { return this.getToken(clozeParser.OPQ, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_opq; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpq) {
            listener.enterOpq(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpq) {
            listener.exitOpq(this);
        }
    }
}
exports.OpqContext = OpqContext;
class OpaContext extends ParserRuleContext_1.ParserRuleContext {
    OPA() { return this.getToken(clozeParser.OPA, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_opa; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpa) {
            listener.enterOpa(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpa) {
            listener.exitOpa(this);
        }
    }
}
exports.OpaContext = OpaContext;
class OppContext extends ParserRuleContext_1.ParserRuleContext {
    OPP() { return this.getToken(clozeParser.OPP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_opp; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpp) {
            listener.enterOpp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpp) {
            listener.exitOpp(this);
        }
    }
}
exports.OppContext = OppContext;
class OpmContext extends ParserRuleContext_1.ParserRuleContext {
    OPM() { return this.getToken(clozeParser.OPM, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_opm; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpm) {
            listener.enterOpm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpm) {
            listener.exitOpm(this);
        }
    }
}
exports.OpmContext = OpmContext;
class OpsContext extends ParserRuleContext_1.ParserRuleContext {
    OPS() { return this.getToken(clozeParser.OPS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_ops; }
    // @Override
    enterRule(listener) {
        if (listener.enterOps) {
            listener.enterOps(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOps) {
            listener.exitOps(this);
        }
    }
}
exports.OpsContext = OpsContext;
class OprContext extends ParserRuleContext_1.ParserRuleContext {
    OPR() { return this.getToken(clozeParser.OPR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_opr; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpr) {
            listener.enterOpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpr) {
            listener.exitOpr(this);
        }
    }
}
exports.OprContext = OprContext;
class OpcContext extends ParserRuleContext_1.ParserRuleContext {
    OPC() { return this.getToken(clozeParser.OPC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_opc; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpc) {
            listener.enterOpc(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpc) {
            listener.exitOpc(this);
        }
    }
}
exports.OpcContext = OpcContext;
class ClContext extends ParserRuleContext_1.ParserRuleContext {
    CL() { return this.getToken(clozeParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_cl; }
    // @Override
    enterRule(listener) {
        if (listener.enterCl) {
            listener.enterCl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCl) {
            listener.exitCl(this);
        }
    }
}
exports.ClContext = ClContext;
class ClnspContext extends ParserRuleContext_1.ParserRuleContext {
    CL() { return this.getToken(clozeParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_clnsp; }
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
class NlContext extends ParserRuleContext_1.ParserRuleContext {
    NL() { return this.getToken(clozeParser.NL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_nl; }
    // @Override
    enterRule(listener) {
        if (listener.enterNl) {
            listener.enterNl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNl) {
            listener.exitNl(this);
        }
    }
}
exports.NlContext = NlContext;
class Listline_Context extends ParserRuleContext_1.ParserRuleContext {
    LIST_LINE() { return this.getToken(clozeParser.LIST_LINE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_listline_; }
    // @Override
    enterRule(listener) {
        if (listener.enterListline_) {
            listener.enterListline_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitListline_) {
            listener.exitListline_(this);
        }
    }
}
exports.Listline_Context = Listline_Context;
class NumericContext extends ParserRuleContext_1.ParserRuleContext {
    NUMERIC() { return this.getToken(clozeParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_numeric; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumeric) {
            listener.enterNumeric(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumeric) {
            listener.exitNumeric(this);
        }
    }
}
exports.NumericContext = NumericContext;
class StringContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(clozeParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_string; }
    // @Override
    enterRule(listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    }
}
exports.StringContext = StringContext;
class WordsContext extends ParserRuleContext_1.ParserRuleContext {
    SENTENCE(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.SENTENCE);
        }
        else {
            return this.getToken(clozeParser.SENTENCE, i);
        }
    }
    NOTBITMARK(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.NOTBITMARK);
        }
        else {
            return this.getToken(clozeParser.NOTBITMARK, i);
        }
    }
    BARSTRING(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.BARSTRING);
        }
        else {
            return this.getToken(clozeParser.BARSTRING, i);
        }
    }
    ELIPSIS(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.ELIPSIS);
        }
        else {
            return this.getToken(clozeParser.ELIPSIS, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.AMP);
        }
        else {
            return this.getToken(clozeParser.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.Greater);
        }
        else {
            return this.getToken(clozeParser.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.Less);
        }
        else {
            return this.getToken(clozeParser.Less, i);
        }
    }
    RightArrow(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.RightArrow);
        }
        else {
            return this.getToken(clozeParser.RightArrow, i);
        }
    }
    RightAngle(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.RightAngle);
        }
        else {
            return this.getToken(clozeParser.RightAngle, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_words; }
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
    S() { return this.getToken(clozeParser.S, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return clozeParser.RULE_sp; }
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
