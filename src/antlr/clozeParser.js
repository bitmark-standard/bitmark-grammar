"use strict";
// Generated from ./antlr/clozeParser.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.StringContext = exports.NumericContext = exports.Listline_Context = exports.NlContext = exports.ClnspContext = exports.ClContext = exports.OpcContext = exports.OprContext = exports.OpsContext = exports.OpmContext = exports.OppContext = exports.OpaContext = exports.OpqContext = exports.OpbContext = exports.OpuContext = exports.DclinesContext = exports.S_and_wContext = exports.LinesContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.PimagebitContext = exports.Choice_starContext = exports.Choice_minusContext = exports.Choice_plusContext = exports.Inline_choicesContext = exports.Choice_headContext = exports.Headed_inline_choicesContext = exports.Cloze_and_multiple_choice_textContext = exports.Gap_text_instruction_groupedContext = exports.Gap_textContext = exports.Single_gapContext = exports.GapContext = exports.Cloze_solution_groupedContext = exports.Cloze_instruction_groupedContext = exports.ClozeContext = exports.ResourceContext = exports.BitElemContext = exports.ClozesContext = exports.Bitmark_Context = exports.BitmarkContext = exports.clozeParser = void 0;
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
                this.state = 209;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 196;
                            this.bitmark_();
                            this.state = 206;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === clozeParser.S || _la === clozeParser.NL) {
                                {
                                    {
                                        this.state = 200;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === clozeParser.S) {
                                            {
                                                {
                                                    this.state = 197;
                                                    this.match(clozeParser.S);
                                                }
                                            }
                                            this.state = 202;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 203;
                                        this.nl();
                                    }
                                }
                                this.state = 208;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 211;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.BitCloze) | (1 << clozeParser.BitClozeinstgrp) | (1 << clozeParser.BitClozesolgrp) | (1 << clozeParser.BitClozeandmulti) | (1 << clozeParser.BitGapText) | (1 << clozeParser.BitGapTextInstructionGrouped))) !== 0));
                this.state = 213;
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
                this.state = 215;
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
            this.state = 223;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.BitCloze:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 217;
                        this.cloze();
                    }
                    break;
                case clozeParser.BitClozeinstgrp:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 218;
                        this.cloze_instruction_grouped();
                    }
                    break;
                case clozeParser.BitClozesolgrp:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 219;
                        this.cloze_solution_grouped();
                    }
                    break;
                case clozeParser.BitClozeandmulti:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 220;
                        this.cloze_and_multiple_choice_text();
                    }
                    break;
                case clozeParser.BitGapText:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 221;
                        this.gap_text();
                    }
                    break;
                case clozeParser.BitGapTextInstructionGrouped:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 222;
                        this.gap_text_instruction_grouped();
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
            this.state = 267;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 225;
                        this.match(clozeParser.LIST_LINE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 226;
                        this.match(clozeParser.NOTBITMARK);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 227;
                        this.dclines();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 228;
                        this.gap();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 229;
                        this.atdef();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 230;
                        this.reference();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 231;
                        this.item();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 232;
                        this.lead();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 233;
                        this.instruction();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 234;
                        this.hint();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 235;
                        this.s_and_w();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 236;
                        this.example();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 237;
                        this.bool_label();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 238;
                        this.imagebit();
                        this.state = 242;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
                            _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                        }
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 245;
                        this.audiobit();
                        this.state = 249;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
                            _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                        }
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 252;
                        this.videobit();
                        this.state = 256;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 253;
                                        this.nl();
                                    }
                                }
                            }
                            this.state = 258;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                        }
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 259;
                        this.articlebit();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 260;
                        this.documentbit();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 261;
                        this.appbit();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 262;
                        this.websitebit();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 263;
                        this.stillimagefilmbit();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 264;
                        this.angleref();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 265;
                        this.anchor();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 266;
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
                this.state = 269;
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
                this.state = 271;
                this.match(clozeParser.BitCloze);
                this.state = 272;
                this.format();
                this.state = 273;
                this.match(clozeParser.CL);
                this.state = 277;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                }
                this.state = 289;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 280;
                                this.bitElem();
                                this.state = 284;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 281;
                                                this.nl();
                                            }
                                        }
                                    }
                                    this.state = 286;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 291;
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
                this.state = 292;
                this.match(clozeParser.BitClozeinstgrp);
                this.state = 293;
                this.format();
                this.state = 294;
                this.match(clozeParser.CL);
                this.state = 296;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                    case 1:
                        {
                            this.state = 295;
                            this.nl();
                        }
                        break;
                }
                this.state = 307;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 298;
                                this.bitElem();
                                this.state = 302;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 299;
                                                this.nl();
                                            }
                                        }
                                    }
                                    this.state = 304;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 309;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                }
                this.state = 313;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 310;
                                this.match(clozeParser.NL);
                            }
                        }
                    }
                    this.state = 315;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                }
                this.state = 329;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 316;
                            this.resource();
                            this.state = 326;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 320;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === clozeParser.NL) {
                                                {
                                                    {
                                                        this.state = 317;
                                                        this.match(clozeParser.NL);
                                                    }
                                                }
                                                this.state = 322;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 323;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 328;
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
                this.state = 331;
                this.match(clozeParser.BitClozesolgrp);
                this.state = 332;
                this.format();
                this.state = 333;
                this.match(clozeParser.CL);
                this.state = 335;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 334;
                            this.nl();
                        }
                        break;
                }
                this.state = 346;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 337;
                                this.bitElem();
                                this.state = 341;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 338;
                                                this.nl();
                                            }
                                        }
                                    }
                                    this.state = 343;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 348;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                }
                this.state = 352;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 349;
                                this.match(clozeParser.NL);
                            }
                        }
                    }
                    this.state = 354;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                }
                this.state = 368;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                    case 1:
                        {
                            this.state = 355;
                            this.resource();
                            this.state = 365;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 359;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === clozeParser.NL) {
                                                {
                                                    {
                                                        this.state = 356;
                                                        this.match(clozeParser.NL);
                                                    }
                                                }
                                                this.state = 361;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 362;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 367;
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
                this.state = 370;
                this.single_gap();
                this.state = 378;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 376;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case clozeParser.OPU:
                                    {
                                        this.state = 371;
                                        this.single_gap();
                                    }
                                    break;
                                case clozeParser.OPB:
                                    {
                                        this.state = 372;
                                        this.instruction();
                                    }
                                    break;
                                case clozeParser.OPQ:
                                    {
                                        this.state = 373;
                                        this.hint();
                                    }
                                    break;
                                case clozeParser.OPC:
                                case clozeParser.OPITEM:
                                    {
                                        this.state = 374;
                                        this.item();
                                    }
                                    break;
                                case clozeParser.AtExampleWithStr:
                                case clozeParser.AtExamplecol:
                                case clozeParser.AtExamplecl:
                                    {
                                        this.state = 375;
                                        this.example();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 380;
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
                this.state = 381;
                this.match(clozeParser.OPU);
                this.state = 385;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 382;
                            this.numeric();
                        }
                        break;
                    case 2:
                        {
                            this.state = 383;
                            this.string();
                        }
                        break;
                    case 3:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                }
                this.state = 390;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 387;
                                this.s_and_w();
                            }
                        }
                    }
                    this.state = 392;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                }
                this.state = 393;
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
    gap_text() {
        let _localctx = new Gap_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, clozeParser.RULE_gap_text);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 395;
                this.match(clozeParser.BitGapText);
                this.state = 396;
                this.format();
                this.state = 397;
                this.match(clozeParser.CL);
                this.state = 401;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 398;
                                this.nl();
                            }
                        }
                    }
                    this.state = 403;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                }
                this.state = 413;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 404;
                                this.bitElem();
                                this.state = 408;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 405;
                                                this.nl();
                                            }
                                        }
                                    }
                                    this.state = 410;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 415;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
    gap_text_instruction_grouped() {
        let _localctx = new Gap_text_instruction_groupedContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, clozeParser.RULE_gap_text_instruction_grouped);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 416;
                this.match(clozeParser.BitGapTextInstructionGrouped);
                this.state = 417;
                this.format();
                this.state = 418;
                this.match(clozeParser.CL);
                this.state = 420;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                    case 1:
                        {
                            this.state = 419;
                            this.nl();
                        }
                        break;
                }
                this.state = 431;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 422;
                                this.bitElem();
                                this.state = 426;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 423;
                                                this.nl();
                                            }
                                        }
                                    }
                                    this.state = 428;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 433;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                }
                this.state = 437;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 434;
                                this.match(clozeParser.NL);
                            }
                        }
                    }
                    this.state = 439;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                }
                this.state = 453;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                    case 1:
                        {
                            this.state = 440;
                            this.resource();
                            this.state = 450;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 444;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === clozeParser.NL) {
                                                {
                                                    {
                                                        this.state = 441;
                                                        this.match(clozeParser.NL);
                                                    }
                                                }
                                                this.state = 446;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 447;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 452;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
    cloze_and_multiple_choice_text() {
        let _localctx = new Cloze_and_multiple_choice_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, clozeParser.RULE_cloze_and_multiple_choice_text);
        let _la;
        try {
            let _alt;
            this.state = 518;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 455;
                        this.match(clozeParser.BitClozeandmulti);
                        this.state = 456;
                        this.format();
                        this.state = 457;
                        this.match(clozeParser.CL);
                        this.state = 467;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 458;
                                        this.bitElem();
                                        this.state = 462;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 459;
                                                        this.nl();
                                                    }
                                                }
                                            }
                                            this.state = 464;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 469;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 470;
                        this.match(clozeParser.BitClozeandmulti);
                        this.state = 471;
                        this.format();
                        this.state = 472;
                        this.match(clozeParser.CL);
                        this.state = 476;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === clozeParser.NL) {
                            {
                                {
                                    this.state = 473;
                                    this.nl();
                                }
                            }
                            this.state = 478;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 493;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 493;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 479;
                                                    this.bitElem();
                                                    this.state = 483;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 480;
                                                                    this.nl();
                                                                }
                                                            }
                                                        }
                                                        this.state = 485;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                                                    }
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 486;
                                                    this.headed_inline_choices();
                                                    this.state = 490;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 487;
                                                                    this.nl();
                                                                }
                                                            }
                                                        }
                                                        this.state = 492;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                                                    }
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 495;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 500;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 497;
                                        this.match(clozeParser.NL);
                                    }
                                }
                            }
                            this.state = 502;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                        }
                        this.state = 516;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                            case 1:
                                {
                                    this.state = 503;
                                    this.resource();
                                    this.state = 513;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 507;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === clozeParser.NL) {
                                                        {
                                                            {
                                                                this.state = 504;
                                                                this.match(clozeParser.NL);
                                                            }
                                                        }
                                                        this.state = 509;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 510;
                                                    this.resource();
                                                }
                                            }
                                        }
                                        this.state = 515;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
        this.enterRule(_localctx, 26, clozeParser.RULE_headed_inline_choices);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPS) {
                    {
                        this.state = 520;
                        this.choice_head();
                    }
                }
                this.state = 523;
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
        this.enterRule(_localctx, 28, clozeParser.RULE_choice_head);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 525;
                this.match(clozeParser.OPS);
                this.state = 526;
                this.s_and_w();
                this.state = 527;
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
        this.enterRule(_localctx, 30, clozeParser.RULE_inline_choices);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 532;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                    case 1:
                        {
                            this.state = 529;
                            this.choice_plus();
                        }
                        break;
                    case 2:
                        {
                            this.state = 530;
                            this.choice_minus();
                        }
                        break;
                    case 3:
                        {
                            this.state = 531;
                            this.choice_star();
                        }
                        break;
                }
                this.state = 539;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 537;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 534;
                                        this.choice_plus();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 535;
                                        this.choice_minus();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 536;
                                        this.choice_star();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 541;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
        this.enterRule(_localctx, 32, clozeParser.RULE_choice_plus);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 543;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPC || _la === clozeParser.OPITEM) {
                    {
                        this.state = 542;
                        this.item();
                    }
                }
                this.state = 545;
                this.match(clozeParser.OPP);
                this.state = 547;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 546;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 549;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 551;
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
        this.enterRule(_localctx, 34, clozeParser.RULE_choice_minus);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 554;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPC || _la === clozeParser.OPITEM) {
                    {
                        this.state = 553;
                        this.item();
                    }
                }
                this.state = 556;
                this.match(clozeParser.OPM);
                this.state = 558;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 557;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 560;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 562;
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
        this.enterRule(_localctx, 36, clozeParser.RULE_choice_star);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 565;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPC || _la === clozeParser.OPITEM) {
                    {
                        this.state = 564;
                        this.item();
                    }
                }
                this.state = 567;
                this.match(clozeParser.OPR);
                this.state = 569;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 568;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 571;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 573;
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
        this.enterRule(_localctx, 38, clozeParser.RULE_pimagebit);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 575;
                this.image_one();
                this.state = 579;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 576;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 581;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                }
                this.state = 586;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPATALT) {
                    {
                        this.state = 582;
                        this.match(clozeParser.OPATALT);
                        this.state = 583;
                        this.words();
                        this.state = 584;
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
        this.enterRule(_localctx, 40, clozeParser.RULE_atpoint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 588;
                this.match(clozeParser.AtPoints);
                this.state = 589;
                this.match(clozeParser.NUMERIC);
                this.state = 590;
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
        this.enterRule(_localctx, 42, clozeParser.RULE_format);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 595;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 592;
                                this.resource_format();
                            }
                        }
                    }
                    this.state = 597;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                }
                this.state = 603;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (clozeParser.AmpAudio - 88)) | (1 << (clozeParser.AmpImage - 88)) | (1 << (clozeParser.AmpImageZoom - 88)) | (1 << (clozeParser.AmpVideo - 88)) | (1 << (clozeParser.AmpArticle - 88)) | (1 << (clozeParser.AmpDocument - 88)) | (1 << (clozeParser.AmpApp - 88)) | (1 << (clozeParser.AmpWebsite - 88)) | (1 << (clozeParser.AmpStillImageFilm - 88)) | (1 << (clozeParser.AmpPdf - 88)) | (1 << (clozeParser.AmpAudioLink - 88)) | (1 << (clozeParser.AmpImageLink - 88)) | (1 << (clozeParser.AmpVideoLink - 88)) | (1 << (clozeParser.AmpArticleLink - 88)) | (1 << (clozeParser.AmpDocumentLink - 88)) | (1 << (clozeParser.AmpDocumentDownload - 88)) | (1 << (clozeParser.AmpAppLink - 88)) | (1 << (clozeParser.AmpWebsiteLink - 88)) | (1 << (clozeParser.AmpStillImageFilmLink - 88)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (clozeParser.AmpVideoEmbed - 128)) | (1 << (clozeParser.AmpDocumentEmbed - 128)) | (1 << (clozeParser.AmpStillImageFilmEmbed - 128)) | (1 << (clozeParser.ColonText - 128)) | (1 << (clozeParser.ColonJson - 128)))) !== 0)) {
                    {
                        this.state = 601;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case clozeParser.ColonText:
                                {
                                    this.state = 598;
                                    this.match(clozeParser.ColonText);
                                }
                                break;
                            case clozeParser.ColonJson:
                                {
                                    this.state = 599;
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
                                    this.state = 600;
                                    this.resource_format_extra();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 605;
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
        this.enterRule(_localctx, 44, clozeParser.RULE_resource_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 606;
                _la = this._input.LA(1);
                if (!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (clozeParser.AmpArticle - 92)) | (1 << (clozeParser.AmpDocument - 92)) | (1 << (clozeParser.AmpWebsite - 92)) | (1 << (clozeParser.AmpStillImageFilm - 92)) | (1 << (clozeParser.AmpAudioLink - 92)) | (1 << (clozeParser.AmpImageLink - 92)) | (1 << (clozeParser.AmpVideoLink - 92)) | (1 << (clozeParser.AmpArticleLink - 92)) | (1 << (clozeParser.AmpDocumentLink - 92)) | (1 << (clozeParser.AmpDocumentDownload - 92)) | (1 << (clozeParser.AmpAppLink - 92)) | (1 << (clozeParser.AmpWebsiteLink - 92)) | (1 << (clozeParser.AmpStillImageFilmLink - 92)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (clozeParser.AmpVideoEmbed - 128)) | (1 << (clozeParser.AmpAudioEmbed - 128)) | (1 << (clozeParser.AmpDocumentEmbed - 128)) | (1 << (clozeParser.AmpStillImageFilmEmbed - 128)) | (1 << (clozeParser.BitmarkMinus - 128)) | (1 << (clozeParser.BitmarkPlus - 128)) | (1 << (clozeParser.ColonJson - 128)) | (1 << (clozeParser.Prosemirror - 128)) | (1 << (clozeParser.Placeholder - 128)))) !== 0))) {
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
        this.enterRule(_localctx, 46, clozeParser.RULE_resource_format_extra);
        try {
            this.state = 617;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AmpImage:
                case clozeParser.AmpImageZoom:
                case clozeParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 608;
                        this.image_format();
                    }
                    break;
                case clozeParser.AmpAudio:
                case clozeParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 609;
                        this.audio_format();
                    }
                    break;
                case clozeParser.AmpVideo:
                case clozeParser.AmpVideoLink:
                case clozeParser.AmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 610;
                        this.video_format();
                    }
                    break;
                case clozeParser.AmpArticle:
                case clozeParser.AmpArticleLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 611;
                        this.article_format();
                    }
                    break;
                case clozeParser.AmpDocument:
                case clozeParser.AmpDocumentLink:
                case clozeParser.AmpDocumentDownload:
                case clozeParser.AmpDocumentEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 612;
                        this.document_format();
                    }
                    break;
                case clozeParser.AmpApp:
                case clozeParser.AmpAppLink:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 613;
                        this.app_format();
                    }
                    break;
                case clozeParser.AmpWebsite:
                case clozeParser.AmpWebsiteLink:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 614;
                        this.website_format();
                    }
                    break;
                case clozeParser.AmpStillImageFilm:
                case clozeParser.AmpStillImageFilmLink:
                case clozeParser.AmpStillImageFilmEmbed:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 615;
                        this.stillimagefilm_format();
                    }
                    break;
                case clozeParser.AmpPdf:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 616;
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
        this.enterRule(_localctx, 48, clozeParser.RULE_format2);
        try {
            this.state = 625;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.BitmarkMinus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 619;
                        this.match(clozeParser.BitmarkMinus);
                    }
                    break;
                case clozeParser.BitmarkPlus:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 620;
                        this.match(clozeParser.BitmarkPlus);
                    }
                    break;
                case clozeParser.ColonText:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 621;
                        this.match(clozeParser.ColonText);
                    }
                    break;
                case clozeParser.Placeholder:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 622;
                        this.match(clozeParser.Placeholder);
                    }
                    break;
                case clozeParser.ColonJson:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 623;
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
        this.enterRule(_localctx, 50, clozeParser.RULE_image_format);
        let _la;
        try {
            this.state = 640;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 627;
                        this.match(clozeParser.AmpImage);
                        this.state = 630;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case clozeParser.Image_type:
                                {
                                    {
                                        this.state = 628;
                                        this.match(clozeParser.Image_type);
                                    }
                                }
                                break;
                            case clozeParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 629;
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
                        this.state = 632;
                        this.match(clozeParser.AmpImageLink);
                        this.state = 634;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.Image_type) {
                            {
                                this.state = 633;
                                this.match(clozeParser.Image_type);
                            }
                        }
                    }
                    break;
                case clozeParser.AmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 636;
                        this.match(clozeParser.AmpImageZoom);
                        this.state = 638;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.Image_type) {
                            {
                                this.state = 637;
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
        this.enterRule(_localctx, 52, clozeParser.RULE_video_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 642;
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
                this.state = 645;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.COLON) {
                    {
                        this.state = 643;
                        this.match(clozeParser.COLON);
                        this.state = 644;
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
        this.enterRule(_localctx, 54, clozeParser.RULE_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 647;
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
        this.enterRule(_localctx, 56, clozeParser.RULE_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 649;
                _la = this._input.LA(1);
                if (!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (clozeParser.AmpDocument - 93)) | (1 << (clozeParser.AmpDocumentLink - 93)) | (1 << (clozeParser.AmpDocumentDownload - 93)))) !== 0) || _la === clozeParser.AmpDocumentEmbed)) {
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
        this.enterRule(_localctx, 58, clozeParser.RULE_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 651;
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
        this.enterRule(_localctx, 60, clozeParser.RULE_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 653;
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
        this.enterRule(_localctx, 62, clozeParser.RULE_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 655;
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
        this.enterRule(_localctx, 64, clozeParser.RULE_op_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 657;
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
        this.enterRule(_localctx, 66, clozeParser.RULE_op_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 659;
                _la = this._input.LA(1);
                if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (clozeParser.OpAmpDocument - 104)) | (1 << (clozeParser.OpAmpDocumentLink - 104)) | (1 << (clozeParser.OpAmpDocumentDownload - 104)) | (1 << (clozeParser.OpAmpDocumentEmbed - 104)))) !== 0))) {
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
        this.enterRule(_localctx, 68, clozeParser.RULE_op_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 661;
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
        this.enterRule(_localctx, 70, clozeParser.RULE_op_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 663;
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
        this.enterRule(_localctx, 72, clozeParser.RULE_op_video_format);
        try {
            this.state = 680;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OpAmpVideo:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 665;
                        this.match(clozeParser.OpAmpVideo);
                        this.state = 668;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                            case 1:
                                {
                                    this.state = 666;
                                    this.match(clozeParser.COLON);
                                    this.state = 667;
                                    this.match(clozeParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case clozeParser.OpAmpVideoLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 670;
                        this.match(clozeParser.OpAmpVideoLink);
                        this.state = 673;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                            case 1:
                                {
                                    this.state = 671;
                                    this.match(clozeParser.COLON);
                                    this.state = 672;
                                    this.match(clozeParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case clozeParser.OpAmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 675;
                        this.match(clozeParser.OpAmpVideoEmbed);
                        this.state = 678;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                            case 1:
                                {
                                    this.state = 676;
                                    this.match(clozeParser.COLON);
                                    this.state = 677;
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
        this.enterRule(_localctx, 74, clozeParser.RULE_op_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 682;
                _la = this._input.LA(1);
                if (!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (clozeParser.OpAmpStillImageFilm - 107)) | (1 << (clozeParser.OpAmpStillImageFilmLink - 107)) | (1 << (clozeParser.OpAmpStillImageFilmEmbed - 107)))) !== 0))) {
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
        this.enterRule(_localctx, 76, clozeParser.RULE_articlebit);
        try {
            this.state = 690;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OpAmpArticle:
                case clozeParser.OpAmpArticleLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 684;
                        this.op_article_format();
                        this.state = 685;
                        this.match(clozeParser.COLON);
                        this.state = 686;
                        this.url();
                        this.state = 687;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.ArticleText:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 689;
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
        this.enterRule(_localctx, 78, clozeParser.RULE_documentbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 692;
                this.op_document_format();
                this.state = 693;
                this.match(clozeParser.COLON);
                this.state = 694;
                this.url();
                this.state = 695;
                this.match(clozeParser.CL);
                this.state = 700;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPATALT) {
                    {
                        this.state = 696;
                        this.match(clozeParser.OPATALT);
                        this.state = 697;
                        this.words();
                        this.state = 698;
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
        this.enterRule(_localctx, 80, clozeParser.RULE_websitebit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 702;
                this.op_website_format();
                this.state = 703;
                this.match(clozeParser.COLON);
                this.state = 704;
                this.url();
                this.state = 705;
                this.match(clozeParser.CL);
                this.state = 710;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPATALT) {
                    {
                        this.state = 706;
                        this.match(clozeParser.OPATALT);
                        this.state = 707;
                        this.words();
                        this.state = 708;
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
        this.enterRule(_localctx, 82, clozeParser.RULE_appbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 712;
                this.op_app_format();
                this.state = 713;
                this.match(clozeParser.COLON);
                this.state = 716;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case clozeParser.URL:
                        {
                            this.state = 714;
                            this.url();
                        }
                        break;
                    case clozeParser.TEL:
                        {
                            this.state = 715;
                            this.telephone();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 718;
                this.match(clozeParser.CL);
                this.state = 723;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.OPATALT) {
                    {
                        this.state = 719;
                        this.match(clozeParser.OPATALT);
                        this.state = 720;
                        this.words();
                        this.state = 721;
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
        this.enterRule(_localctx, 84, clozeParser.RULE_stillimagefilmbit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 725;
                this.stillimg_one();
                this.state = 729;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 726;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 731;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
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
        this.enterRule(_localctx, 86, clozeParser.RULE_stillimg_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 732;
                this.op_stillimagefilm_format();
                this.state = 733;
                this.match(clozeParser.COLON);
                this.state = 737;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === clozeParser.S) {
                    {
                        {
                            this.state = 734;
                            this.match(clozeParser.S);
                        }
                    }
                    this.state = 739;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 740;
                this.url();
                this.state = 741;
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
        this.enterRule(_localctx, 88, clozeParser.RULE_videobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 743;
                this.video_one();
                this.state = 747;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 744;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 749;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
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
        this.enterRule(_localctx, 90, clozeParser.RULE_video_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 750;
                this.op_video_format();
                this.state = 751;
                this.match(clozeParser.COLON);
                this.state = 752;
                this.url();
                this.state = 753;
                this.match(clozeParser.CL);
                this.state = 758;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                    case 1:
                        {
                            this.state = 754;
                            this.match(clozeParser.OPATALT);
                            this.state = 755;
                            this.words();
                            this.state = 756;
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
        this.enterRule(_localctx, 92, clozeParser.RULE_imagebit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 760;
                this.image_one();
                this.state = 764;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 761;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 766;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                }
                this.state = 769;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                    case 1:
                        {
                            this.state = 767;
                            this.match(clozeParser.NL);
                            this.state = 768;
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
        this.enterRule(_localctx, 94, clozeParser.RULE_image_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 771;
                this.op_image_format();
                this.state = 772;
                this.match(clozeParser.COLON);
                this.state = 776;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === clozeParser.S) {
                    {
                        {
                            this.state = 773;
                            this.match(clozeParser.S);
                        }
                    }
                    this.state = 778;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 779;
                this.url();
                this.state = 780;
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
        this.enterRule(_localctx, 96, clozeParser.RULE_op_image_format);
        let _la;
        try {
            this.state = 795;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OpAmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 782;
                        this.match(clozeParser.OpAmpImage);
                        this.state = 785;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case clozeParser.Image_type:
                                {
                                    {
                                        this.state = 783;
                                        this.match(clozeParser.Image_type);
                                    }
                                }
                                break;
                            case clozeParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 784;
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
                        this.state = 787;
                        this.match(clozeParser.OpAmpImageLink);
                        this.state = 789;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.Image_type) {
                            {
                                this.state = 788;
                                this.match(clozeParser.Image_type);
                            }
                        }
                    }
                    break;
                case clozeParser.OpAmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 791;
                        this.match(clozeParser.OpAmpImageZoom);
                        this.state = 793;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.Image_type) {
                            {
                                this.state = 792;
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
    image_chained() {
        let _localctx = new Image_chainedContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, clozeParser.RULE_image_chained);
        let _la;
        try {
            let _alt;
            this.state = 814;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 797;
                        this.match(clozeParser.AtSrc);
                        this.state = 798;
                        this.match(clozeParser.COLON);
                        this.state = 799;
                        this.url();
                        this.state = 800;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.AtWidth:
                case clozeParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 802;
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
                        this.state = 803;
                        this.match(clozeParser.COLON);
                        this.state = 804;
                        this.match(clozeParser.NUMERIC);
                        this.state = 805;
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
                        this.state = 806;
                        _la = this._input.LA(1);
                        if (!(((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (clozeParser.OPATALT - 76)) | (1 << (clozeParser.OpAtCaption - 76)) | (1 << (clozeParser.OpAtLicense - 76)) | (1 << (clozeParser.OpAtCopyright - 76)) | (1 << (clozeParser.OpAtSearch - 76)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 810;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 807;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 812;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                        }
                        this.state = 813;
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
        this.enterRule(_localctx, 100, clozeParser.RULE_image_chained4match);
        let _la;
        try {
            let _alt;
            this.state = 833;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 816;
                        this.match(clozeParser.AtSrc);
                        this.state = 817;
                        this.match(clozeParser.COLON);
                        this.state = 818;
                        this.url();
                        this.state = 819;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.AtWidth:
                case clozeParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 821;
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
                        this.state = 822;
                        this.match(clozeParser.COLON);
                        this.state = 823;
                        this.match(clozeParser.NUMERIC);
                        this.state = 824;
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
                        this.state = 825;
                        _la = this._input.LA(1);
                        if (!(((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (clozeParser.OPATALT - 76)) | (1 << (clozeParser.OpAtCaption - 76)) | (1 << (clozeParser.OpAtLicense - 76)) | (1 << (clozeParser.OpAtCopyright - 76)) | (1 << (clozeParser.OpAtSearch - 76)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 829;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 826;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 831;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                        }
                        this.state = 832;
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
        this.enterRule(_localctx, 102, clozeParser.RULE_audiobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 835;
                this.audio_one();
                this.state = 839;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 836;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 841;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
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
        this.enterRule(_localctx, 104, clozeParser.RULE_audio_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 842;
                this.op_audio_format();
                this.state = 843;
                this.match(clozeParser.COLON);
                this.state = 844;
                this.url();
                this.state = 845;
                this.match(clozeParser.CL);
                this.state = 850;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                    case 1:
                        {
                            this.state = 846;
                            this.match(clozeParser.OPATALT);
                            this.state = 847;
                            this.words();
                            this.state = 848;
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
        this.enterRule(_localctx, 106, clozeParser.RULE_audio_format);
        let _la;
        try {
            this.state = 862;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 852;
                        this.match(clozeParser.AmpAudio);
                        this.state = 855;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.COLON) {
                            {
                                this.state = 853;
                                this.match(clozeParser.COLON);
                                this.state = 854;
                                this.match(clozeParser.Audio_type);
                            }
                        }
                    }
                    break;
                case clozeParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 857;
                        this.match(clozeParser.AmpAudioLink);
                        this.state = 860;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.COLON) {
                            {
                                this.state = 858;
                                this.match(clozeParser.COLON);
                                this.state = 859;
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
        this.enterRule(_localctx, 108, clozeParser.RULE_op_audio_format);
        try {
            this.state = 879;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OpAmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 864;
                        this.match(clozeParser.OpAmpAudio);
                        this.state = 867;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                            case 1:
                                {
                                    this.state = 865;
                                    this.match(clozeParser.COLON);
                                    this.state = 866;
                                    this.match(clozeParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case clozeParser.OpAmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 869;
                        this.match(clozeParser.OpAmpAudioLink);
                        this.state = 872;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                            case 1:
                                {
                                    this.state = 870;
                                    this.match(clozeParser.COLON);
                                    this.state = 871;
                                    this.match(clozeParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case clozeParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 874;
                        this.match(clozeParser.OpAmpAudioEmbed);
                        this.state = 877;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                            case 1:
                                {
                                    this.state = 875;
                                    this.match(clozeParser.COLON);
                                    this.state = 876;
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
        this.enterRule(_localctx, 110, clozeParser.RULE_resource_chained);
        let _la;
        try {
            let _alt;
            this.state = 912;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OPA:
                case clozeParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 884;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case clozeParser.OPA:
                                {
                                    this.state = 881;
                                    this.match(clozeParser.OPA);
                                    this.state = 882;
                                    this.s_and_w();
                                }
                                break;
                            case clozeParser.AtSrc:
                                {
                                    this.state = 883;
                                    this.match(clozeParser.AtSrc);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 886;
                        this.match(clozeParser.COLON);
                        this.state = 890;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 887;
                                        this.match(clozeParser.S);
                                    }
                                }
                            }
                            this.state = 892;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                        }
                        this.state = 895;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 895;
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
                                                    this.state = 893;
                                                    this.s_and_w();
                                                }
                                                break;
                                            case clozeParser.NL:
                                                {
                                                    this.state = 894;
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
                            this.state = 897;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 899;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.AtWidth:
                case clozeParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 900;
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
                        this.state = 901;
                        this.match(clozeParser.COLON);
                        this.state = 902;
                        this.match(clozeParser.NUMERIC);
                        this.state = 903;
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
                        this.state = 904;
                        _la = this._input.LA(1);
                        if (!(((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (clozeParser.OPATALT - 76)) | (1 << (clozeParser.OpAtCaption - 76)) | (1 << (clozeParser.OpAtLicense - 76)) | (1 << (clozeParser.OpAtCopyright - 76)) | (1 << (clozeParser.OpAtSearch - 76)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 908;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 905;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 910;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
                        }
                        this.state = 911;
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
        this.enterRule(_localctx, 112, clozeParser.RULE_telephone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 914;
                this.match(clozeParser.TEL);
                this.state = 915;
                this.match(clozeParser.PLUS);
                this.state = 916;
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
        this.enterRule(_localctx, 114, clozeParser.RULE_url);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 918;
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
        this.enterRule(_localctx, 116, clozeParser.RULE_item);
        let _la;
        try {
            let _alt;
            this.state = 958;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OPITEM:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 920;
                        this.match(clozeParser.OPITEM);
                        this.state = 925;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 923;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 921;
                                                this.match(clozeParser.COLON);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 922;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 927;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                        }
                        this.state = 928;
                        this.match(clozeParser.CL);
                        this.state = 938;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 932;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === clozeParser.S) {
                                            {
                                                {
                                                    this.state = 929;
                                                    this.match(clozeParser.S);
                                                }
                                            }
                                            this.state = 934;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 935;
                                        this.lead();
                                    }
                                }
                            }
                            this.state = 940;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
                        }
                    }
                    break;
                case clozeParser.OPC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 941;
                        this.match(clozeParser.OPC);
                        this.state = 943;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                            case 1:
                                {
                                    this.state = 942;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 945;
                        this.match(clozeParser.CL);
                        this.state = 955;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 949;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === clozeParser.S) {
                                            {
                                                {
                                                    this.state = 946;
                                                    this.match(clozeParser.S);
                                                }
                                            }
                                            this.state = 951;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 952;
                                        this.lead();
                                    }
                                }
                            }
                            this.state = 957;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
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
        this.enterRule(_localctx, 118, clozeParser.RULE_lead);
        try {
            let _alt;
            this.state = 1005;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OPLEAD:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 960;
                        this.match(clozeParser.OPLEAD);
                        this.state = 961;
                        this.s_and_w();
                        this.state = 966;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 964;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 962;
                                                this.match(clozeParser.COLON);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 963;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 968;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
                        }
                        this.state = 969;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.OPPAGENUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 971;
                        this.match(clozeParser.OPPAGENUMBER);
                        this.state = 972;
                        this.s_and_w();
                        this.state = 977;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 975;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 973;
                                                this.match(clozeParser.COLON);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 974;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 979;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
                        }
                        this.state = 980;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.OPMARGINNUMBER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 982;
                        this.match(clozeParser.OPMARGINNUMBER);
                        this.state = 983;
                        this.s_and_w();
                        this.state = 988;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 986;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 984;
                                                this.match(clozeParser.COLON);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 985;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 990;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                        }
                        this.state = 991;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.OPC:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 993;
                        this.match(clozeParser.OPC);
                        this.state = 995;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                            case 1:
                                {
                                    this.state = 994;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1001;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 999;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 997;
                                                this.match(clozeParser.COLON);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 998;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 1003;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                        }
                        this.state = 1004;
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
    angleref() {
        let _localctx = new AnglerefContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, clozeParser.RULE_angleref);
        try {
            this.state = 1017;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OPRANGLES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1007;
                        this.match(clozeParser.OPRANGLES);
                        this.state = 1009;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1008;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1011;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.OPRANGLEL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1012;
                        this.match(clozeParser.OPRANGLEL);
                        this.state = 1014;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1013;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1016;
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
        this.enterRule(_localctx, 122, clozeParser.RULE_example);
        let _la;
        try {
            this.state = 1026;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AtExamplecl:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1019;
                        this.match(clozeParser.AtExamplecl);
                    }
                    break;
                case clozeParser.AtExampleWithStr:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1020;
                        this.match(clozeParser.AtExampleWithStr);
                    }
                    break;
                case clozeParser.AtExamplecol:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1021;
                        this.match(clozeParser.AtExamplecol);
                        this.state = 1023;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === clozeParser.SENTENCE) {
                            {
                                this.state = 1022;
                                this.match(clozeParser.SENTENCE);
                            }
                        }
                        this.state = 1025;
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
        this.enterRule(_localctx, 124, clozeParser.RULE_bracketed_text);
        let _la;
        try {
            let _alt;
            this.state = 1067;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1028;
                        this.match(clozeParser.BracEnclose);
                        this.state = 1030;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1029;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1053;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1032;
                                        this.s_and_w();
                                        this.state = 1042;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1033;
                                                        this.match(clozeParser.NL);
                                                        this.state = 1037;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 1034;
                                                                        this.match(clozeParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 1039;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 1044;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                                        }
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
                                    }
                                }
                            }
                            this.state = 1055;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                        }
                        this.state = 1056;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1057;
                        this.match(clozeParser.BracEnclose);
                        this.state = 1063;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.AMP - 32)) | (1 << (clozeParser.Greater - 32)) | (1 << (clozeParser.Less - 32)) | (1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NL - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
                            {
                                this.state = 1061;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1058;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1059;
                                            this.match(clozeParser.NL);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1060;
                                            this.match(clozeParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1065;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1066;
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
        this.enterRule(_localctx, 126, clozeParser.RULE_reference);
        let _la;
        try {
            let _alt;
            this.state = 1091;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1069;
                        this.match(clozeParser.AtReference);
                        this.state = 1074;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 1074;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1070;
                                                    this.s_and_w();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1071;
                                                    this.match(clozeParser.COLON);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1072;
                                                    this.match(clozeParser.URL);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 1073;
                                                    this.match(clozeParser.NL);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1076;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 1078;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1079;
                        this.match(clozeParser.AtReference);
                        this.state = 1087;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.AMP - 32)) | (1 << (clozeParser.Greater - 32)) | (1 << (clozeParser.Less - 32)) | (1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NL - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
                            {
                                this.state = 1085;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1080;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1081;
                                            this.match(clozeParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1082;
                                            this.match(clozeParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1083;
                                            this.match(clozeParser.NL);
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 1084;
                                            this.match(clozeParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1089;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1090;
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
        this.enterRule(_localctx, 128, clozeParser.RULE_progress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1093;
                this.match(clozeParser.AtProgress);
                this.state = 1094;
                this.s_and_w();
                this.state = 1095;
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
        this.enterRule(_localctx, 130, clozeParser.RULE_dateprop);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1097;
                this.match(clozeParser.AtDate);
                this.state = 1101;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1101;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1098;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1099;
                                            this.match(clozeParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1100;
                                            this.match(clozeParser.NL);
                                        }
                                        break;
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1103;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 1105;
                this.match(clozeParser.CL);
                this.state = 1107;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clozeParser.AtDate) {
                    {
                        this.state = 1106;
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
        this.enterRule(_localctx, 132, clozeParser.RULE_dateprop_chained);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1109;
                this.match(clozeParser.AtDate);
                this.state = 1113;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1113;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1110;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1111;
                                            this.match(clozeParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1112;
                                            this.match(clozeParser.NL);
                                        }
                                        break;
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1115;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 1117;
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
        this.enterRule(_localctx, 134, clozeParser.RULE_instruction);
        let _la;
        try {
            let _alt;
            this.state = 1165;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1119;
                        this.match(clozeParser.OPB);
                        this.state = 1123;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1120;
                                        this.match(clozeParser.NL);
                                    }
                                }
                            }
                            this.state = 1125;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                        }
                        this.state = 1127;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1126;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1144;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1138;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === clozeParser.NL) {
                                            {
                                                {
                                                    this.state = 1129;
                                                    this.match(clozeParser.NL);
                                                    this.state = 1133;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1130;
                                                                    this.match(clozeParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1135;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
                                                    }
                                                }
                                            }
                                            this.state = 1140;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 1141;
                                        this.s_and_w();
                                    }
                                }
                            }
                            this.state = 1146;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
                        }
                        this.state = 1150;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === clozeParser.NL) {
                            {
                                {
                                    this.state = 1147;
                                    this.match(clozeParser.NL);
                                }
                            }
                            this.state = 1152;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1153;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1154;
                        this.match(clozeParser.OPB);
                        this.state = 1158;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === clozeParser.NL) {
                            {
                                {
                                    this.state = 1155;
                                    this.match(clozeParser.NL);
                                }
                            }
                            this.state = 1160;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1162;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.AMP - 32)) | (1 << (clozeParser.Greater - 32)) | (1 << (clozeParser.Less - 32)) | (1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
                            {
                                this.state = 1161;
                                this.s_and_w();
                            }
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
    hint() {
        let _localctx = new HintContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, clozeParser.RULE_hint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1167;
                this.match(clozeParser.OPQ);
                this.state = 1169;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1168;
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
                    this.state = 1171;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (clozeParser.S - 1)) | (1 << (clozeParser.OPDOT - 1)) | (1 << (clozeParser.BitCloze - 1)) | (1 << (clozeParser.BitClozeinstgrp - 1)) | (1 << (clozeParser.BitClozesolgrp - 1)) | (1 << (clozeParser.BitClozeandmulti - 1)) | (1 << (clozeParser.BitGapText - 1)) | (1 << (clozeParser.BitGapTextInstructionGrouped - 1)) | (1 << (clozeParser.OPSP - 1)) | (1 << (clozeParser.OPDOLL - 1)) | (1 << (clozeParser.OPBUL - 1)) | (1 << (clozeParser.OPESC - 1)) | (1 << (clozeParser.OPRANGLES - 1)) | (1 << (clozeParser.OPRANGLEL - 1)) | (1 << (clozeParser.OPDANGLE - 1)) | (1 << (clozeParser.OPU - 1)) | (1 << (clozeParser.OPB - 1)) | (1 << (clozeParser.OPQ - 1)) | (1 << (clozeParser.OPA - 1)) | (1 << (clozeParser.OPP - 1)) | (1 << (clozeParser.OPM - 1)) | (1 << (clozeParser.OPS - 1)) | (1 << (clozeParser.OPR - 1)) | (1 << (clozeParser.OPC - 1)) | (1 << (clozeParser.OPITEM - 1)) | (1 << (clozeParser.OPLEAD - 1)) | (1 << (clozeParser.OPPAGENUMBER - 1)) | (1 << (clozeParser.OPMARGINNUMBER - 1)) | (1 << (clozeParser.OPHASH - 1)) | (1 << (clozeParser.COLON - 1)) | (1 << (clozeParser.AMP - 1)))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (clozeParser.DBLCOLON - 33)) | (1 << (clozeParser.PLUS - 33)) | (1 << (clozeParser.DotAt - 33)) | (1 << (clozeParser.Greater - 33)) | (1 << (clozeParser.Less - 33)) | (1 << (clozeParser.DBLEQ - 33)) | (1 << (clozeParser.RightAngle - 33)) | (1 << (clozeParser.RightArrow - 33)) | (1 << (clozeParser.OP_N_ETC - 33)) | (1 << (clozeParser.UNSCO - 33)) | (1 << (clozeParser.COMMENT - 33)) | (1 << (clozeParser.DCANY - 33)) | (1 << (clozeParser.Image_type - 33)) | (1 << (clozeParser.Audio_type - 33)) | (1 << (clozeParser.Video_type - 33)) | (1 << (clozeParser.ArticleText - 33)) | (1 << (clozeParser.NOTCL - 33)) | (1 << (clozeParser.NUMERIC - 33)) | (1 << (clozeParser.STRING - 33)) | (1 << (clozeParser.NL - 33)) | (1 << (clozeParser.NOTBITMARK - 33)) | (1 << (clozeParser.ELIPSIS - 33)) | (1 << (clozeParser.SENTENCE - 33)) | (1 << (clozeParser.BARSTRING - 33)) | (1 << (clozeParser.OPAT - 33)) | (1 << (clozeParser.AtProgress - 33)) | (1 << (clozeParser.AtReference - 33)) | (1 << (clozeParser.AtWidth - 33)) | (1 << (clozeParser.AtHeight - 33)) | (1 << (clozeParser.AtProgressPoints - 33)) | (1 << (clozeParser.AtShortanswer - 33)) | (1 << (clozeParser.AtLonganswer - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (clozeParser.AtExampleWithStr - 65)) | (1 << (clozeParser.AtExamplecol - 65)) | (1 << (clozeParser.AtExamplecl - 65)) | (1 << (clozeParser.AtSampleSolution - 65)) | (1 << (clozeParser.AtPartialAnswerS - 65)) | (1 << (clozeParser.AtPartialAnswer - 65)) | (1 << (clozeParser.AtLabeltrue - 65)) | (1 << (clozeParser.AtLabelfalse - 65)) | (1 << (clozeParser.AtPoints - 65)) | (1 << (clozeParser.AtSrc - 65)) | (1 << (clozeParser.AtPartner - 65)) | (1 << (clozeParser.OPATALT - 65)) | (1 << (clozeParser.OPAMARK - 65)) | (1 << (clozeParser.ShowInIndex - 65)) | (1 << (clozeParser.OpAtCaption - 65)) | (1 << (clozeParser.OpAtLicense - 65)) | (1 << (clozeParser.OpAtCopyright - 65)) | (1 << (clozeParser.OpAtSearch - 65)) | (1 << (clozeParser.OpAtIsTracked - 65)) | (1 << (clozeParser.OpAtIsInfoOnly - 65)) | (1 << (clozeParser.AtDate - 65)) | (1 << (clozeParser.Http - 65)) | (1 << (clozeParser.Https - 65)) | (1 << (clozeParser.AmpAudio - 65)) | (1 << (clozeParser.AmpImage - 65)) | (1 << (clozeParser.AmpImageZoom - 65)) | (1 << (clozeParser.AmpVideo - 65)) | (1 << (clozeParser.AmpArticle - 65)) | (1 << (clozeParser.AmpDocument - 65)) | (1 << (clozeParser.AmpApp - 65)) | (1 << (clozeParser.AmpWebsite - 65)) | (1 << (clozeParser.AmpStillImageFilm - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (clozeParser.AmpPdf - 97)) | (1 << (clozeParser.OpAmpAudio - 97)) | (1 << (clozeParser.OpAmpImage - 97)) | (1 << (clozeParser.OpAmpImageZoom - 97)) | (1 << (clozeParser.OpAmpVideo - 97)) | (1 << (clozeParser.OpAmpArticle - 97)) | (1 << (clozeParser.OpAmpArticleAtt - 97)) | (1 << (clozeParser.OpAmpDocument - 97)) | (1 << (clozeParser.OpAmpApp - 97)) | (1 << (clozeParser.OpAmpWebsite - 97)) | (1 << (clozeParser.OpAmpStillImageFilm - 97)) | (1 << (clozeParser.BracEnclose - 97)) | (1 << (clozeParser.AmpAudioLink - 97)) | (1 << (clozeParser.AmpImageLink - 97)) | (1 << (clozeParser.AmpVideoLink - 97)) | (1 << (clozeParser.AmpArticleLink - 97)) | (1 << (clozeParser.AmpDocumentLink - 97)) | (1 << (clozeParser.AmpDocumentDownload - 97)) | (1 << (clozeParser.AmpAppLink - 97)) | (1 << (clozeParser.AmpWebsiteLink - 97)) | (1 << (clozeParser.AmpStillImageFilmLink - 97)) | (1 << (clozeParser.OpAmpAudioLink - 97)) | (1 << (clozeParser.OpAmpImageLink - 97)) | (1 << (clozeParser.OpAmpVideoLink - 97)) | (1 << (clozeParser.OpAmpArticleLink - 97)) | (1 << (clozeParser.OpAmpDocumentLink - 97)) | (1 << (clozeParser.OpAmpDocumentDownload - 97)) | (1 << (clozeParser.OpAmpAppLink - 97)) | (1 << (clozeParser.OpAmpWebsiteLink - 97)) | (1 << (clozeParser.OpAmpStillImageFilmLink - 97)) | (1 << (clozeParser.AmpImageEmbed - 97)) | (1 << (clozeParser.AmpVideoEmbed - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (clozeParser.AmpAudioEmbed - 129)) | (1 << (clozeParser.AmpDocumentEmbed - 129)) | (1 << (clozeParser.AmpStillImageFilmEmbed - 129)) | (1 << (clozeParser.OpAmpImageEmbed - 129)) | (1 << (clozeParser.OpAmpVideoEmbed - 129)) | (1 << (clozeParser.OpAmpAudioEmbed - 129)) | (1 << (clozeParser.OpAmpDocumentEmbed - 129)) | (1 << (clozeParser.OpAmpStillImageFilmEmbed - 129)) | (1 << (clozeParser.BitmarkMinus - 129)) | (1 << (clozeParser.BitmarkPlus - 129)) | (1 << (clozeParser.ColonText - 129)) | (1 << (clozeParser.ColonJson - 129)) | (1 << (clozeParser.Prosemirror - 129)) | (1 << (clozeParser.Placeholder - 129)) | (1 << (clozeParser.BASIC - 129)) | (1 << (clozeParser.JPG - 129)) | (1 << (clozeParser.PNG - 129)) | (1 << (clozeParser.GIF - 129)) | (1 << (clozeParser.SVG - 129)) | (1 << (clozeParser.MP2 - 129)) | (1 << (clozeParser.MP3 - 129)) | (1 << (clozeParser.MP4 - 129)) | (1 << (clozeParser.FLV - 129)) | (1 << (clozeParser.WMV - 129)) | (1 << (clozeParser.MPEG - 129)) | (1 << (clozeParser.MPG - 129)) | (1 << (clozeParser.TEL - 129)) | (1 << (clozeParser.DotArticleAtt - 129)) | (1 << (clozeParser.STAR - 129)) | (1 << (clozeParser.URL - 129)) | (1 << (clozeParser.LIST_LINE - 129)) | (1 << (clozeParser.ENCLBARS - 129)))) !== 0));
                this.state = 1173;
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
        this.enterRule(_localctx, 138, clozeParser.RULE_title);
        try {
            let _alt;
            this.state = 1187;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1175;
                        this.match(clozeParser.OPHASH);
                        this.state = 1178;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 1178;
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
                                                    this.state = 1176;
                                                    this.s_and_w();
                                                }
                                                break;
                                            case clozeParser.NL:
                                                {
                                                    this.state = 1177;
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
                            this.state = 1180;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 1182;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1183;
                        this.match(clozeParser.OPHASH);
                        this.state = 1184;
                        this.s_and_w();
                        this.state = 1185;
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
        this.enterRule(_localctx, 140, clozeParser.RULE_bool_label);
        try {
            this.state = 1197;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.AtLabeltrue:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1189;
                        this.match(clozeParser.AtLabeltrue);
                        this.state = 1190;
                        this.s_and_w();
                        this.state = 1191;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.AtLabelfalse:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1193;
                        this.match(clozeParser.AtLabelfalse);
                        this.state = 1194;
                        this.s_and_w();
                        this.state = 1195;
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
        this.enterRule(_localctx, 142, clozeParser.RULE_progress_points);
        try {
            this.state = 1208;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 167, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1199;
                        this.match(clozeParser.AtProgressPoints);
                        this.state = 1200;
                        this.match(clozeParser.COLON);
                        this.state = 1201;
                        this.match(clozeParser.NUMERIC);
                        this.state = 1202;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1203;
                        this.match(clozeParser.AtProgressPoints);
                        this.state = 1204;
                        this.match(clozeParser.COLON);
                        this.state = 1205;
                        this.s_and_w();
                        this.state = 1206;
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
        this.enterRule(_localctx, 144, clozeParser.RULE_istracked);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1210;
                this.match(clozeParser.OpAtIsTracked);
                this.state = 1211;
                this.s_and_w();
                this.state = 1212;
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
        this.enterRule(_localctx, 146, clozeParser.RULE_isinfoonly);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1214;
                this.match(clozeParser.OpAtIsInfoOnly);
                this.state = 1215;
                this.s_and_w();
                this.state = 1216;
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
        this.enterRule(_localctx, 148, clozeParser.RULE_atdef);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1218;
                this.atdef_();
                this.state = 1228;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1222;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === clozeParser.NL) {
                                    {
                                        {
                                            this.state = 1219;
                                            this.match(clozeParser.NL);
                                        }
                                    }
                                    this.state = 1224;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1225;
                                this.atdef_();
                            }
                        }
                    }
                    this.state = 1230;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
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
        this.enterRule(_localctx, 150, clozeParser.RULE_atdef_);
        let _la;
        try {
            let _alt;
            this.state = 1254;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case clozeParser.OPA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1231;
                        this.match(clozeParser.OPA);
                        this.state = 1232;
                        this.s_and_w();
                        this.state = 1233;
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
                        this.state = 1234;
                        this.s_and_w();
                        this.state = 1240;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 1238;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1235;
                                                this.match(clozeParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1236;
                                                this.match(clozeParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1237;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 1242;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                        }
                        this.state = 1243;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1245;
                        this.match(clozeParser.OpAtCopyright);
                        this.state = 1249;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1246;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1251;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
                        }
                        this.state = 1252;
                        this.match(clozeParser.CL);
                    }
                    break;
                case clozeParser.AtSampleSolution:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1253;
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
        this.enterRule(_localctx, 152, clozeParser.RULE_dollarans);
        let _la;
        try {
            let _alt;
            this.state = 1275;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1256;
                        this.match(clozeParser.OPDOLL);
                        this.state = 1260;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 1260;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 174, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1257;
                                                    this.s_and_w();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1258;
                                                    this.match(clozeParser.COLON);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1259;
                                                    this.match(clozeParser.NL);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1262;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 1264;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1265;
                        this.match(clozeParser.OPDOLL);
                        this.state = 1271;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.AMP - 32)) | (1 << (clozeParser.Greater - 32)) | (1 << (clozeParser.Less - 32)) | (1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NL - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL) {
                            {
                                this.state = 1269;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1266;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1267;
                                            this.match(clozeParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1268;
                                            this.match(clozeParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1273;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1274;
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
        this.enterRule(_localctx, 154, clozeParser.RULE_anchor);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1277;
                this.match(clozeParser.OPDANGLE);
                this.state = 1279;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
                    case 1:
                        {
                            this.state = 1278;
                            this.s_and_w();
                        }
                        break;
                }
                this.state = 1281;
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
        this.enterRule(_localctx, 156, clozeParser.RULE_lines);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1287;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1283;
                            this.s_and_w();
                            this.state = 1285;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === clozeParser.NL) {
                                {
                                    this.state = 1284;
                                    this.nl();
                                }
                            }
                        }
                    }
                    this.state = 1289;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << clozeParser.S) | (1 << clozeParser.OPS) | (1 << clozeParser.CL) | (1 << clozeParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (clozeParser.AMP - 32)) | (1 << (clozeParser.Greater - 32)) | (1 << (clozeParser.Less - 32)) | (1 << (clozeParser.DBLEQ - 32)) | (1 << (clozeParser.RightAngle - 32)) | (1 << (clozeParser.RightArrow - 32)) | (1 << (clozeParser.OP_N_ETC - 32)) | (1 << (clozeParser.NUMERIC - 32)) | (1 << (clozeParser.STRING - 32)) | (1 << (clozeParser.NOTBITMARK - 32)) | (1 << (clozeParser.ELIPSIS - 32)) | (1 << (clozeParser.SENTENCE - 32)) | (1 << (clozeParser.BARSTRING - 32)))) !== 0) || _la === clozeParser.URL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 158, clozeParser.RULE_s_and_w);
        let _la;
        try {
            let _alt;
            this.state = 1338;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 189, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1291;
                        this.match(clozeParser.STRING);
                        this.state = 1298;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1293;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1292;
                                                this.match(clozeParser.S);
                                            }
                                        }
                                        this.state = 1295;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === clozeParser.S);
                                    this.state = 1297;
                                    this.numeric();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1300;
                        this.words();
                        this.state = 1307;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 185, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1302;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1301;
                                                this.match(clozeParser.S);
                                            }
                                        }
                                        this.state = 1304;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === clozeParser.S);
                                    this.state = 1306;
                                    this.numeric();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1309;
                        this.match(clozeParser.OPS);
                        this.state = 1310;
                        this.s_and_w();
                        this.state = 1311;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1313;
                        this.match(clozeParser.NUMERIC);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1317;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === clozeParser.S) {
                            {
                                {
                                    this.state = 1314;
                                    this.match(clozeParser.S);
                                }
                            }
                            this.state = 1319;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1320;
                        this.match(clozeParser.COLON);
                        this.state = 1324;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1321;
                                        this.match(clozeParser.S);
                                    }
                                }
                            }
                            this.state = 1326;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1327;
                        this.match(clozeParser.AMP);
                        this.state = 1331;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1328;
                                        this.match(clozeParser.S);
                                    }
                                }
                            }
                            this.state = 1333;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1334;
                        this.match(clozeParser.CL);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1335;
                        this.match(clozeParser.OP_N_ETC);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1336;
                        this.match(clozeParser.DBLEQ);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1337;
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
        this.enterRule(_localctx, 160, clozeParser.RULE_dclines);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1340;
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
        this.enterRule(_localctx, 162, clozeParser.RULE_opu);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1342;
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
        this.enterRule(_localctx, 164, clozeParser.RULE_opb);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1344;
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
        this.enterRule(_localctx, 166, clozeParser.RULE_opq);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1346;
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
        this.enterRule(_localctx, 168, clozeParser.RULE_opa);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1348;
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
        this.enterRule(_localctx, 170, clozeParser.RULE_opp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1350;
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
        this.enterRule(_localctx, 172, clozeParser.RULE_opm);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1352;
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
        this.enterRule(_localctx, 174, clozeParser.RULE_ops);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1354;
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
        this.enterRule(_localctx, 176, clozeParser.RULE_opr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1356;
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
        this.enterRule(_localctx, 178, clozeParser.RULE_opc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1358;
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
        this.enterRule(_localctx, 180, clozeParser.RULE_cl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1360;
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
        this.enterRule(_localctx, 182, clozeParser.RULE_clnsp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1362;
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
        this.enterRule(_localctx, 184, clozeParser.RULE_nl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1364;
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
        this.enterRule(_localctx, 186, clozeParser.RULE_listline_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1366;
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
        this.enterRule(_localctx, 188, clozeParser.RULE_numeric);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1368;
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
        this.enterRule(_localctx, 190, clozeParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1370;
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
        this.enterRule(_localctx, 192, clozeParser.RULE_words);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1383;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1383;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case clozeParser.SENTENCE:
                                        {
                                            this.state = 1372;
                                            this.match(clozeParser.SENTENCE);
                                        }
                                        break;
                                    case clozeParser.NOTBITMARK:
                                        {
                                            this.state = 1373;
                                            this.match(clozeParser.NOTBITMARK);
                                        }
                                        break;
                                    case clozeParser.BARSTRING:
                                        {
                                            this.state = 1374;
                                            this.match(clozeParser.BARSTRING);
                                        }
                                        break;
                                    case clozeParser.ELIPSIS:
                                        {
                                            this.state = 1375;
                                            this.match(clozeParser.ELIPSIS);
                                        }
                                        break;
                                    case clozeParser.AMP:
                                        {
                                            this.state = 1376;
                                            this.match(clozeParser.AMP);
                                        }
                                        break;
                                    case clozeParser.Greater:
                                        {
                                            this.state = 1377;
                                            this.match(clozeParser.Greater);
                                            this.state = 1378;
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
                                            this.state = 1379;
                                            this.match(clozeParser.Less);
                                            this.state = 1380;
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
                                            this.state = 1381;
                                            this.match(clozeParser.RightArrow);
                                        }
                                        break;
                                    case clozeParser.RightAngle:
                                        {
                                            this.state = 1382;
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
                    this.state = 1385;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
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
        this.enterRule(_localctx, 194, clozeParser.RULE_sp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1387;
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
clozeParser.BitGapText = 7;
clozeParser.BitGapTextInstructionGrouped = 8;
clozeParser.OPSP = 9;
clozeParser.OPDOLL = 10;
clozeParser.OPBUL = 11;
clozeParser.OPESC = 12;
clozeParser.OPRANGLES = 13;
clozeParser.OPRANGLEL = 14;
clozeParser.OPDANGLE = 15;
clozeParser.OPU = 16;
clozeParser.OPB = 17;
clozeParser.OPQ = 18;
clozeParser.OPA = 19;
clozeParser.OPP = 20;
clozeParser.OPM = 21;
clozeParser.OPS = 22;
clozeParser.OPR = 23;
clozeParser.OPC = 24;
clozeParser.OPITEM = 25;
clozeParser.OPLEAD = 26;
clozeParser.OPPAGENUMBER = 27;
clozeParser.OPMARGINNUMBER = 28;
clozeParser.OPHASH = 29;
clozeParser.CL = 30;
clozeParser.COLON = 31;
clozeParser.AMP = 32;
clozeParser.DBLCOLON = 33;
clozeParser.PLUS = 34;
clozeParser.DotAt = 35;
clozeParser.Greater = 36;
clozeParser.Less = 37;
clozeParser.DBLEQ = 38;
clozeParser.RightAngle = 39;
clozeParser.RightArrow = 40;
clozeParser.OP_N_ETC = 41;
clozeParser.UNSCO = 42;
clozeParser.COMMENT = 43;
clozeParser.DCANY = 44;
clozeParser.Image_type = 45;
clozeParser.Audio_type = 46;
clozeParser.Video_type = 47;
clozeParser.ArticleText = 48;
clozeParser.NOTCL = 49;
clozeParser.NUMERIC = 50;
clozeParser.STRING = 51;
clozeParser.NL = 52;
clozeParser.NOTBITMARK = 53;
clozeParser.ELIPSIS = 54;
clozeParser.SENTENCE = 55;
clozeParser.BARSTRING = 56;
clozeParser.OPAT = 57;
clozeParser.AtProgress = 58;
clozeParser.AtReference = 59;
clozeParser.AtWidth = 60;
clozeParser.AtHeight = 61;
clozeParser.AtProgressPoints = 62;
clozeParser.AtShortanswer = 63;
clozeParser.AtLonganswer = 64;
clozeParser.AtExampleWithStr = 65;
clozeParser.AtExamplecol = 66;
clozeParser.AtExamplecl = 67;
clozeParser.AtSampleSolution = 68;
clozeParser.AtPartialAnswerS = 69;
clozeParser.AtPartialAnswer = 70;
clozeParser.AtLabeltrue = 71;
clozeParser.AtLabelfalse = 72;
clozeParser.AtPoints = 73;
clozeParser.AtSrc = 74;
clozeParser.AtPartner = 75;
clozeParser.OPATALT = 76;
clozeParser.OPAMARK = 77;
clozeParser.ShowInIndex = 78;
clozeParser.OpAtCaption = 79;
clozeParser.OpAtLicense = 80;
clozeParser.OpAtCopyright = 81;
clozeParser.OpAtSearch = 82;
clozeParser.OpAtIsTracked = 83;
clozeParser.OpAtIsInfoOnly = 84;
clozeParser.AtDate = 85;
clozeParser.Http = 86;
clozeParser.Https = 87;
clozeParser.AmpAudio = 88;
clozeParser.AmpImage = 89;
clozeParser.AmpImageZoom = 90;
clozeParser.AmpVideo = 91;
clozeParser.AmpArticle = 92;
clozeParser.AmpDocument = 93;
clozeParser.AmpApp = 94;
clozeParser.AmpWebsite = 95;
clozeParser.AmpStillImageFilm = 96;
clozeParser.AmpPdf = 97;
clozeParser.OpAmpAudio = 98;
clozeParser.OpAmpImage = 99;
clozeParser.OpAmpImageZoom = 100;
clozeParser.OpAmpVideo = 101;
clozeParser.OpAmpArticle = 102;
clozeParser.OpAmpArticleAtt = 103;
clozeParser.OpAmpDocument = 104;
clozeParser.OpAmpApp = 105;
clozeParser.OpAmpWebsite = 106;
clozeParser.OpAmpStillImageFilm = 107;
clozeParser.BracEnclose = 108;
clozeParser.AmpAudioLink = 109;
clozeParser.AmpImageLink = 110;
clozeParser.AmpVideoLink = 111;
clozeParser.AmpArticleLink = 112;
clozeParser.AmpDocumentLink = 113;
clozeParser.AmpDocumentDownload = 114;
clozeParser.AmpAppLink = 115;
clozeParser.AmpWebsiteLink = 116;
clozeParser.AmpStillImageFilmLink = 117;
clozeParser.OpAmpAudioLink = 118;
clozeParser.OpAmpImageLink = 119;
clozeParser.OpAmpVideoLink = 120;
clozeParser.OpAmpArticleLink = 121;
clozeParser.OpAmpDocumentLink = 122;
clozeParser.OpAmpDocumentDownload = 123;
clozeParser.OpAmpAppLink = 124;
clozeParser.OpAmpWebsiteLink = 125;
clozeParser.OpAmpStillImageFilmLink = 126;
clozeParser.AmpImageEmbed = 127;
clozeParser.AmpVideoEmbed = 128;
clozeParser.AmpAudioEmbed = 129;
clozeParser.AmpDocumentEmbed = 130;
clozeParser.AmpStillImageFilmEmbed = 131;
clozeParser.OpAmpImageEmbed = 132;
clozeParser.OpAmpVideoEmbed = 133;
clozeParser.OpAmpAudioEmbed = 134;
clozeParser.OpAmpDocumentEmbed = 135;
clozeParser.OpAmpStillImageFilmEmbed = 136;
clozeParser.BitmarkMinus = 137;
clozeParser.BitmarkPlus = 138;
clozeParser.ColonText = 139;
clozeParser.ColonJson = 140;
clozeParser.Prosemirror = 141;
clozeParser.Placeholder = 142;
clozeParser.BASIC = 143;
clozeParser.JPG = 144;
clozeParser.PNG = 145;
clozeParser.GIF = 146;
clozeParser.SVG = 147;
clozeParser.MP2 = 148;
clozeParser.MP3 = 149;
clozeParser.MP4 = 150;
clozeParser.FLV = 151;
clozeParser.WMV = 152;
clozeParser.MPEG = 153;
clozeParser.MPG = 154;
clozeParser.TEL = 155;
clozeParser.DotArticleAtt = 156;
clozeParser.STAR = 157;
clozeParser.URL = 158;
clozeParser.LIST_LINE = 159;
clozeParser.ENCLBARS = 160;
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
clozeParser.RULE_gap_text = 10;
clozeParser.RULE_gap_text_instruction_grouped = 11;
clozeParser.RULE_cloze_and_multiple_choice_text = 12;
clozeParser.RULE_headed_inline_choices = 13;
clozeParser.RULE_choice_head = 14;
clozeParser.RULE_inline_choices = 15;
clozeParser.RULE_choice_plus = 16;
clozeParser.RULE_choice_minus = 17;
clozeParser.RULE_choice_star = 18;
clozeParser.RULE_pimagebit = 19;
clozeParser.RULE_atpoint = 20;
clozeParser.RULE_format = 21;
clozeParser.RULE_resource_format = 22;
clozeParser.RULE_resource_format_extra = 23;
clozeParser.RULE_format2 = 24;
clozeParser.RULE_image_format = 25;
clozeParser.RULE_video_format = 26;
clozeParser.RULE_article_format = 27;
clozeParser.RULE_document_format = 28;
clozeParser.RULE_app_format = 29;
clozeParser.RULE_website_format = 30;
clozeParser.RULE_stillimagefilm_format = 31;
clozeParser.RULE_op_article_format = 32;
clozeParser.RULE_op_document_format = 33;
clozeParser.RULE_op_app_format = 34;
clozeParser.RULE_op_website_format = 35;
clozeParser.RULE_op_video_format = 36;
clozeParser.RULE_op_stillimagefilm_format = 37;
clozeParser.RULE_articlebit = 38;
clozeParser.RULE_documentbit = 39;
clozeParser.RULE_websitebit = 40;
clozeParser.RULE_appbit = 41;
clozeParser.RULE_stillimagefilmbit = 42;
clozeParser.RULE_stillimg_one = 43;
clozeParser.RULE_videobit = 44;
clozeParser.RULE_video_one = 45;
clozeParser.RULE_imagebit = 46;
clozeParser.RULE_image_one = 47;
clozeParser.RULE_op_image_format = 48;
clozeParser.RULE_image_chained = 49;
clozeParser.RULE_image_chained4match = 50;
clozeParser.RULE_audiobit = 51;
clozeParser.RULE_audio_one = 52;
clozeParser.RULE_audio_format = 53;
clozeParser.RULE_op_audio_format = 54;
clozeParser.RULE_resource_chained = 55;
clozeParser.RULE_telephone = 56;
clozeParser.RULE_url = 57;
clozeParser.RULE_item = 58;
clozeParser.RULE_lead = 59;
clozeParser.RULE_angleref = 60;
clozeParser.RULE_example = 61;
clozeParser.RULE_bracketed_text = 62;
clozeParser.RULE_reference = 63;
clozeParser.RULE_progress = 64;
clozeParser.RULE_dateprop = 65;
clozeParser.RULE_dateprop_chained = 66;
clozeParser.RULE_instruction = 67;
clozeParser.RULE_hint = 68;
clozeParser.RULE_title = 69;
clozeParser.RULE_bool_label = 70;
clozeParser.RULE_progress_points = 71;
clozeParser.RULE_istracked = 72;
clozeParser.RULE_isinfoonly = 73;
clozeParser.RULE_atdef = 74;
clozeParser.RULE_atdef_ = 75;
clozeParser.RULE_dollarans = 76;
clozeParser.RULE_anchor = 77;
clozeParser.RULE_lines = 78;
clozeParser.RULE_s_and_w = 79;
clozeParser.RULE_dclines = 80;
clozeParser.RULE_opu = 81;
clozeParser.RULE_opb = 82;
clozeParser.RULE_opq = 83;
clozeParser.RULE_opa = 84;
clozeParser.RULE_opp = 85;
clozeParser.RULE_opm = 86;
clozeParser.RULE_ops = 87;
clozeParser.RULE_opr = 88;
clozeParser.RULE_opc = 89;
clozeParser.RULE_cl = 90;
clozeParser.RULE_clnsp = 91;
clozeParser.RULE_nl = 92;
clozeParser.RULE_listline_ = 93;
clozeParser.RULE_numeric = 94;
clozeParser.RULE_string = 95;
clozeParser.RULE_words = 96;
clozeParser.RULE_sp = 97;
// tslint:disable:no-trailing-whitespace
clozeParser.ruleNames = [
    "bitmark", "bitmark_", "clozes", "bitElem", "resource", "cloze", "cloze_instruction_grouped",
    "cloze_solution_grouped", "gap", "single_gap", "gap_text", "gap_text_instruction_grouped",
    "cloze_and_multiple_choice_text", "headed_inline_choices", "choice_head",
    "inline_choices", "choice_plus", "choice_minus", "choice_star", "pimagebit",
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
    "s_and_w", "dclines", "opu", "opb", "opq", "opa", "opp", "opm", "ops",
    "opr", "opc", "cl", "clnsp", "nl", "listline_", "numeric", "string", "words",
    "sp",
];
clozeParser._LITERAL_NAMES = [
    undefined, undefined, "'[.'", undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, "'[^'", undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "'[#'", undefined, "':'", "'&'", "'::'", "'+'", "'.@'", "'>'",
    "'<'", "'=='", "'\u25BA'", "'\u2192'", undefined, "'_'", undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, "'[@'", undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'http://'",
    "'https://'", "'&audio'", "'&image'", "'&image-zoom'", "'&video'", "'&article'",
    "'&document'", "'&app'", "'&website'", "'&still-image-film'", "'&pdf'",
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'&audio-link'", "'&image-link'",
    "'&video-link'", "'&article-link'", "'&document-link'", "'&document-download'",
    "'&app-link'", "'&website-link'", "'&still-image-film-link'", undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "'&image-embed'", "'&video-embed'", "'&daudio-embed'", "'&document-embed'",
    "'&still-image-film-embed'", undefined, undefined, undefined, undefined,
    undefined, "':bitmark--'", "':bitmark++'", "':text'", "':json'", "':prosemirror'",
    "':placeholder'", "':basic'", "':jpg'", "':png'", "':gif'", "':svg'",
    "':mp2'", "':mp3'", "':mp4'", "':flv'", "':wmv'", "':mpeg'", "':mpg'",
    "'tel:'", "'.article-attachment'", "'*'",
];
clozeParser._SYMBOLIC_NAMES = [
    undefined, "S", "OPDOT", "BitCloze", "BitClozeinstgrp", "BitClozesolgrp",
    "BitClozeandmulti", "BitGapText", "BitGapTextInstructionGrouped", "OPSP",
    "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU",
    "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", "OPITEM", "OPLEAD",
    "OPPAGENUMBER", "OPMARGINNUMBER", "OPHASH", "CL", "COLON", "AMP", "DBLCOLON",
    "PLUS", "DotAt", "Greater", "Less", "DBLEQ", "RightAngle", "RightArrow",
    "OP_N_ETC", "UNSCO", "COMMENT", "DCANY", "Image_type", "Audio_type", "Video_type",
    "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", "NOTBITMARK", "ELIPSIS",
    "SENTENCE", "BARSTRING", "OPAT", "AtProgress", "AtReference", "AtWidth",
    "AtHeight", "AtProgressPoints", "AtShortanswer", "AtLonganswer", "AtExampleWithStr",
    "AtExamplecol", "AtExamplecl", "AtSampleSolution", "AtPartialAnswerS",
    "AtPartialAnswer", "AtLabeltrue", "AtLabelfalse", "AtPoints", "AtSrc",
    "AtPartner", "OPATALT", "OPAMARK", "ShowInIndex", "OpAtCaption", "OpAtLicense",
    "OpAtCopyright", "OpAtSearch", "OpAtIsTracked", "OpAtIsInfoOnly", "AtDate",
    "Http", "Https", "AmpAudio", "AmpImage", "AmpImageZoom", "AmpVideo", "AmpArticle",
    "AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm", "AmpPdf",
    "OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", "OpAmpVideo", "OpAmpArticle",
    "OpAmpArticleAtt", "OpAmpDocument", "OpAmpApp", "OpAmpWebsite", "OpAmpStillImageFilm",
    "BracEnclose", "AmpAudioLink", "AmpImageLink", "AmpVideoLink", "AmpArticleLink",
    "AmpDocumentLink", "AmpDocumentDownload", "AmpAppLink", "AmpWebsiteLink",
    "AmpStillImageFilmLink", "OpAmpAudioLink", "OpAmpImageLink", "OpAmpVideoLink",
    "OpAmpArticleLink", "OpAmpDocumentLink", "OpAmpDocumentDownload", "OpAmpAppLink",
    "OpAmpWebsiteLink", "OpAmpStillImageFilmLink", "AmpImageEmbed", "AmpVideoEmbed",
    "AmpAudioEmbed", "AmpDocumentEmbed", "AmpStillImageFilmEmbed", "OpAmpImageEmbed",
    "OpAmpVideoEmbed", "OpAmpAudioEmbed", "OpAmpDocumentEmbed", "OpAmpStillImageFilmEmbed",
    "BitmarkMinus", "BitmarkPlus", "ColonText", "ColonJson", "Prosemirror",
    "Placeholder", "BASIC", "JPG", "PNG", "GIF", "SVG", "MP2", "MP3", "MP4",
    "FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE",
    "ENCLBARS",
];
clozeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(clozeParser._LITERAL_NAMES, clozeParser._SYMBOLIC_NAMES, []);
clozeParser._serializedATNSegments = 3;
clozeParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA2\u0570\x04" +
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
    "`\x04a\ta\x04b\tb\x04c\tc\x03\x02\x03\x02\x07\x02\xC9\n\x02\f\x02\x0E" +
    "\x02\xCC\v\x02\x03\x02\x07\x02\xCF\n\x02\f\x02\x0E\x02\xD2\v\x02\x06\x02" +
    "\xD4\n\x02\r\x02\x0E\x02\xD5\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xE2\n\x04\x03\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xF3\n\x05\f\x05\x0E\x05\xF6\v" +
    "\x05\x03\x05\x03\x05\x07\x05\xFA\n\x05\f\x05\x0E\x05\xFD\v\x05\x03\x05" +
    "\x03\x05\x07\x05\u0101\n\x05\f\x05\x0E\x05\u0104\v\x05\x03\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u010E\n\x05\x03" +
    "\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u0116\n\x07\f\x07" +
    "\x0E\x07\u0119\v\x07\x03\x07\x03\x07\x07\x07\u011D\n\x07\f\x07\x0E\x07" +
    "\u0120\v\x07\x07\x07\u0122\n\x07\f\x07\x0E\x07\u0125\v\x07\x03\b\x03\b" +
    "\x03\b\x03\b\x05\b\u012B\n\b\x03\b\x03\b\x07\b\u012F\n\b\f\b\x0E\b\u0132" +
    "\v\b\x07\b\u0134\n\b\f\b\x0E\b\u0137\v\b\x03\b\x07\b\u013A\n\b\f\b\x0E" +
    "\b\u013D\v\b\x03\b\x03\b\x07\b\u0141\n\b\f\b\x0E\b\u0144\v\b\x03\b\x07" +
    "\b\u0147\n\b\f\b\x0E\b\u014A\v\b\x05\b\u014C\n\b\x03\t\x03\t\x03\t\x03" +
    "\t\x05\t\u0152\n\t\x03\t\x03\t\x07\t\u0156\n\t\f\t\x0E\t\u0159\v\t\x07" +
    "\t\u015B\n\t\f\t\x0E\t\u015E\v\t\x03\t\x07\t\u0161\n\t\f\t\x0E\t\u0164" +
    "\v\t\x03\t\x03\t\x07\t\u0168\n\t\f\t\x0E\t\u016B\v\t\x03\t\x07\t\u016E" +
    "\n\t\f\t\x0E\t\u0171\v\t\x05\t\u0173\n\t\x03\n\x03\n\x03\n\x03\n\x03\n" +
    "\x03\n\x07\n\u017B\n\n\f\n\x0E\n\u017E\v\n\x03\v\x03\v\x03\v\x03\v\x05" +
    "\v\u0184\n\v\x03\v\x07\v\u0187\n\v\f\v\x0E\v\u018A\v\v\x03\v\x03\v\x03" +
    "\f\x03\f\x03\f\x03\f\x07\f\u0192\n\f\f\f\x0E\f\u0195\v\f\x03\f\x03\f\x07" +
    "\f\u0199\n\f\f\f\x0E\f\u019C\v\f\x07\f\u019E\n\f\f\f\x0E\f\u01A1\v\f\x03" +
    "\r\x03\r\x03\r\x03\r\x05\r\u01A7\n\r\x03\r\x03\r\x07\r\u01AB\n\r\f\r\x0E" +
    "\r\u01AE\v\r\x07\r\u01B0\n\r\f\r\x0E\r\u01B3\v\r\x03\r\x07\r\u01B6\n\r" +
    "\f\r\x0E\r\u01B9\v\r\x03\r\x03\r\x07\r\u01BD\n\r\f\r\x0E\r\u01C0\v\r\x03" +
    "\r\x07\r\u01C3\n\r\f\r\x0E\r\u01C6\v\r\x05\r\u01C8\n\r\x03\x0E\x03\x0E" +
    "\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u01CF\n\x0E\f\x0E\x0E\x0E\u01D2\v\x0E" +
    "\x07\x0E\u01D4\n\x0E\f\x0E\x0E\x0E\u01D7\v\x0E\x03\x0E\x03\x0E\x03\x0E" +
    "\x03\x0E\x07\x0E\u01DD\n\x0E\f\x0E\x0E\x0E\u01E0\v\x0E\x03\x0E\x03\x0E" +
    "\x07\x0E\u01E4\n\x0E\f\x0E\x0E\x0E\u01E7\v\x0E\x03\x0E\x03\x0E\x07\x0E" +
    "\u01EB\n\x0E\f\x0E\x0E\x0E\u01EE\v\x0E\x06\x0E\u01F0\n\x0E\r\x0E\x0E\x0E" +
    "\u01F1\x03\x0E\x07\x0E\u01F5\n\x0E\f\x0E\x0E\x0E\u01F8\v\x0E\x03\x0E\x03" +
    "\x0E\x07\x0E\u01FC\n\x0E\f\x0E\x0E\x0E\u01FF\v\x0E\x03\x0E\x07\x0E\u0202" +
    "\n\x0E\f\x0E\x0E\x0E\u0205\v\x0E\x05\x0E\u0207\n\x0E\x05\x0E\u0209\n\x0E" +
    "\x03\x0F\x05\x0F\u020C\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
    "\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0217\n\x11\x03\x11\x03\x11\x03\x11" +
    "\x07\x11\u021C\n\x11\f\x11\x0E\x11\u021F\v\x11\x03\x12\x05\x12\u0222\n" +
    "\x12\x03\x12\x03\x12\x06\x12\u0226\n\x12\r\x12\x0E\x12\u0227\x03\x12\x03" +
    "\x12\x03\x13\x05\x13\u022D\n\x13\x03\x13\x03\x13\x06\x13\u0231\n\x13\r" +
    "\x13\x0E\x13\u0232\x03\x13\x03\x13\x03\x14\x05\x14\u0238\n\x14\x03\x14" +
    "\x03\x14\x06\x14\u023C\n\x14\r\x14\x0E\x14\u023D\x03\x14\x03\x14\x03\x15" +
    "\x03\x15\x07\x15\u0244\n\x15\f\x15\x0E\x15\u0247\v\x15\x03\x15\x03\x15" +
    "\x03\x15\x03\x15\x05\x15\u024D\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
    "\x17\x07\x17\u0254\n\x17\f\x17\x0E\x17\u0257\v\x17\x03\x17\x03\x17\x03" +
    "\x17\x07\x17\u025C\n\x17\f\x17\x0E\x17\u025F\v\x17\x03\x18\x03\x18\x03" +
    "\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05" +
    "\x19\u026C\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
    "\u0274\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0279\n\x1B\x03\x1B\x03\x1B" +
    "\x05\x1B\u027D\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0281\n\x1B\x05\x1B\u0283" +
    "\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0288\n\x1C\x03\x1D\x03\x1D\x03" +
    "\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03" +
    "#\x03$\x03$\x03%\x03%\x03&\x03&\x03&\x05&\u029F\n&\x03&\x03&\x03&\x05" +
    "&\u02A4\n&\x03&\x03&\x03&\x05&\u02A9\n&\x05&\u02AB\n&\x03\'\x03\'\x03" +
    "(\x03(\x03(\x03(\x03(\x03(\x05(\u02B5\n(\x03)\x03)\x03)\x03)\x03)\x03" +
    ")\x03)\x03)\x05)\u02BF\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05" +
    "*\u02C9\n*\x03+\x03+\x03+\x03+\x05+\u02CF\n+\x03+\x03+\x03+\x03+\x03+" +
    "\x05+\u02D6\n+\x03,\x03,\x07,\u02DA\n,\f,\x0E,\u02DD\v,\x03-\x03-\x03" +
    "-\x07-\u02E2\n-\f-\x0E-\u02E5\v-\x03-\x03-\x03-\x03.\x03.\x07.\u02EC\n" +
    ".\f.\x0E.\u02EF\v.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u02F9" +
    "\n/\x030\x030\x070\u02FD\n0\f0\x0E0\u0300\v0\x030\x030\x050\u0304\n0\x03" +
    "1\x031\x031\x071\u0309\n1\f1\x0E1\u030C\v1\x031\x031\x031\x032\x032\x03" +
    "2\x052\u0314\n2\x032\x032\x052\u0318\n2\x032\x032\x052\u031C\n2\x052\u031E" +
    "\n2\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x073\u032B" +
    "\n3\f3\x0E3\u032E\v3\x033\x053\u0331\n3\x034\x034\x034\x034\x034\x034" +
    "\x034\x034\x034\x034\x034\x074\u033E\n4\f4\x0E4\u0341\v4\x034\x054\u0344" +
    "\n4\x035\x035\x075\u0348\n5\f5\x0E5\u034B\v5\x036\x036\x036\x036\x036" +
    "\x036\x036\x036\x056\u0355\n6\x037\x037\x037\x057\u035A\n7\x037\x037\x03" +
    "7\x057\u035F\n7\x057\u0361\n7\x038\x038\x038\x058\u0366\n8\x038\x038\x03" +
    "8\x058\u036B\n8\x038\x038\x038\x058\u0370\n8\x058\u0372\n8\x039\x039\x03" +
    "9\x059\u0377\n9\x039\x039\x079\u037B\n9\f9\x0E9\u037E\v9\x039\x039\x06" +
    "9\u0382\n9\r9\x0E9\u0383\x039\x039\x039\x039\x039\x039\x039\x079\u038D" +
    "\n9\f9\x0E9\u0390\v9\x039\x059\u0393\n9\x03:\x03:\x03:\x03:\x03;\x03;" +
    "\x03<\x03<\x03<\x07<\u039E\n<\f<\x0E<\u03A1\v<\x03<\x03<\x07<\u03A5\n" +
    "<\f<\x0E<\u03A8\v<\x03<\x07<\u03AB\n<\f<\x0E<\u03AE\v<\x03<\x03<\x05<" +
    "\u03B2\n<\x03<\x03<\x07<\u03B6\n<\f<\x0E<\u03B9\v<\x03<\x07<\u03BC\n<" +
    "\f<\x0E<\u03BF\v<\x05<\u03C1\n<\x03=\x03=\x03=\x03=\x07=\u03C7\n=\f=\x0E" +
    "=\u03CA\v=\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u03D2\n=\f=\x0E=\u03D5\v" +
    "=\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u03DD\n=\f=\x0E=\u03E0\v=\x03=\x03" +
    "=\x03=\x03=\x05=\u03E6\n=\x03=\x03=\x07=\u03EA\n=\f=\x0E=\u03ED\v=\x03" +
    "=\x05=\u03F0\n=\x03>\x03>\x05>\u03F4\n>\x03>\x03>\x03>\x05>\u03F9\n>\x03" +
    ">\x05>\u03FC\n>\x03?\x03?\x03?\x03?\x05?\u0402\n?\x03?\x05?\u0405\n?\x03" +
    "@\x03@\x05@\u0409\n@\x03@\x03@\x03@\x07@\u040E\n@\f@\x0E@\u0411\v@\x07" +
    "@\u0413\n@\f@\x0E@\u0416\v@\x03@\x07@\u0419\n@\f@\x0E@\u041C\v@\x07@\u041E" +
    "\n@\f@\x0E@\u0421\v@\x03@\x03@\x03@\x03@\x03@\x07@\u0428\n@\f@\x0E@\u042B" +
    "\v@\x03@\x05@\u042E\n@\x03A\x03A\x03A\x03A\x03A\x06A\u0435\nA\rA\x0EA" +
    "\u0436\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x07A\u0440\nA\fA\x0EA\u0443" +
    "\vA\x03A\x05A\u0446\nA\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x06C\u0450" +
    "\nC\rC\x0EC\u0451\x03C\x03C\x05C\u0456\nC\x03D\x03D\x03D\x03D\x06D\u045C" +
    "\nD\rD\x0ED\u045D\x03D\x03D\x03E\x03E\x07E\u0464\nE\fE\x0EE\u0467\vE\x03" +
    "E\x05E\u046A\nE\x03E\x03E\x07E\u046E\nE\fE\x0EE\u0471\vE\x07E\u0473\n" +
    "E\fE\x0EE\u0476\vE\x03E\x07E\u0479\nE\fE\x0EE\u047C\vE\x03E\x07E\u047F" +
    "\nE\fE\x0EE\u0482\vE\x03E\x03E\x03E\x07E\u0487\nE\fE\x0EE\u048A\vE\x03" +
    "E\x05E\u048D\nE\x03E\x05E\u0490\nE\x03F\x03F\x06F\u0494\nF\rF\x0EF\u0495" +
    "\x03F\x03F\x03G\x03G\x03G\x06G\u049D\nG\rG\x0EG\u049E\x03G\x03G\x03G\x03" +
    "G\x03G\x05G\u04A6\nG\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u04B0" +
    "\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u04BB\nI\x03J\x03" +
    "J\x03J\x03J\x03K\x03K\x03K\x03K\x03L\x03L\x07L\u04C7\nL\fL\x0EL\u04CA" +
    "\vL\x03L\x07L\u04CD\nL\fL\x0EL\u04D0\vL\x03M\x03M\x03M\x03M\x03M\x03M" +
    "\x03M\x07M\u04D9\nM\fM\x0EM\u04DC\vM\x03M\x03M\x03M\x03M\x07M\u04E2\n" +
    "M\fM\x0EM\u04E5\vM\x03M\x03M\x05M\u04E9\nM\x03N\x03N\x03N\x03N\x06N\u04EF" +
    "\nN\rN\x0EN\u04F0\x03N\x03N\x03N\x03N\x03N\x07N\u04F8\nN\fN\x0EN\u04FB" +
    "\vN\x03N\x05N\u04FE\nN\x03O\x03O\x05O\u0502\nO\x03O\x03O\x03P\x03P\x05" +
    "P\u0508\nP\x06P\u050A\nP\rP\x0EP\u050B\x03Q\x03Q\x06Q\u0510\nQ\rQ\x0E" +
    "Q\u0511\x03Q\x05Q\u0515\nQ\x03Q\x03Q\x06Q\u0519\nQ\rQ\x0EQ\u051A\x03Q" +
    "\x05Q\u051E\nQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x07Q\u0526\nQ\fQ\x0EQ\u0529" +
    "\vQ\x03Q\x03Q\x07Q\u052D\nQ\fQ\x0EQ\u0530\vQ\x03Q\x03Q\x07Q\u0534\nQ\f" +
    "Q\x0EQ\u0537\vQ\x03Q\x03Q\x03Q\x03Q\x05Q\u053D\nQ\x03R\x03R\x03S\x03S" +
    "\x03T\x03T\x03U\x03U\x03V\x03V\x03W\x03W\x03X\x03X\x03Y\x03Y\x03Z\x03" +
    "Z\x03[\x03[\x03\\\x03\\\x03]\x03]\x03^\x03^\x03_\x03_\x03`\x03`\x03a\x03" +
    "a\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x06b\u056A\n" +
    "b\rb\x0Eb\u056B\x03c\x03c\x03c\x06\u032C\u033F\u038E\u04E3\x02\x02d\x02" +
    "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
    "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
    ",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
    "H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
    "d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
    "\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
    "\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
    "\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
    "\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\x02\x14" +
    "\b\x02^_abow\x82\x85\x8B\x8C\x8E\x90\x05\x02]]qq\x82\x82\x04\x02^^rr\x05" +
    "\x02__st\x84\x84\x04\x02``uu\x04\x02aavv\x05\x02bbww\x85\x85\x04\x02h" +
    "h{{\x05\x02jj|}\x89\x89\x04\x02kk~~\x04\x02ll\x7F\x7F\x05\x02mm\x80\x80" +
    "\x8A\x8A\x03\x02>?\x04\x02NNQT\x03\x02  \x04\x02!!##\x03\x02&&\x03\x02" +
    "\'\'\x02\u0620\x02\xD3\x03\x02\x02\x02\x04\xD9\x03\x02\x02\x02\x06\xE1" +
    "\x03\x02\x02\x02\b\u010D\x03\x02\x02\x02\n\u010F\x03\x02\x02\x02\f\u0111" +
    "\x03\x02\x02\x02\x0E\u0126\x03\x02\x02\x02\x10\u014D\x03\x02\x02\x02\x12" +
    "\u0174\x03\x02\x02\x02\x14\u017F\x03\x02\x02\x02\x16\u018D\x03\x02\x02" +
    "\x02\x18\u01A2\x03\x02\x02\x02\x1A\u0208\x03\x02\x02\x02\x1C\u020B\x03" +
    "\x02\x02\x02\x1E\u020F\x03\x02\x02\x02 \u0216\x03\x02\x02\x02\"\u0221" +
    "\x03\x02\x02\x02$\u022C\x03\x02\x02\x02&\u0237\x03\x02\x02\x02(\u0241" +
    "\x03\x02\x02\x02*\u024E\x03\x02\x02\x02,\u0255\x03\x02\x02\x02.\u0260" +
    "\x03\x02\x02\x020\u026B\x03\x02\x02\x022\u0273\x03\x02\x02\x024\u0282" +
    "\x03\x02\x02\x026\u0284\x03\x02\x02\x028\u0289\x03\x02\x02\x02:\u028B" +
    "\x03\x02\x02\x02<\u028D\x03\x02\x02\x02>\u028F\x03\x02\x02\x02@\u0291" +
    "\x03\x02\x02\x02B\u0293\x03\x02\x02\x02D\u0295\x03\x02\x02\x02F\u0297" +
    "\x03\x02\x02\x02H\u0299\x03\x02\x02\x02J\u02AA\x03\x02\x02\x02L\u02AC" +
    "\x03\x02\x02\x02N\u02B4\x03\x02\x02\x02P\u02B6\x03\x02\x02\x02R\u02C0" +
    "\x03\x02\x02\x02T\u02CA\x03\x02\x02\x02V\u02D7\x03\x02\x02\x02X\u02DE" +
    "\x03\x02\x02\x02Z\u02E9\x03\x02\x02\x02\\\u02F0\x03\x02\x02\x02^\u02FA" +
    "\x03\x02\x02\x02`\u0305\x03\x02\x02\x02b\u031D\x03\x02\x02\x02d\u0330" +
    "\x03\x02\x02\x02f\u0343\x03\x02\x02\x02h\u0345\x03\x02\x02\x02j\u034C" +
    "\x03\x02\x02\x02l\u0360\x03\x02\x02\x02n\u0371\x03\x02\x02\x02p\u0392" +
    "\x03\x02\x02\x02r\u0394\x03\x02\x02\x02t\u0398\x03\x02\x02\x02v\u03C0" +
    "\x03\x02\x02\x02x\u03EF\x03\x02\x02\x02z\u03FB\x03\x02\x02\x02|\u0404" +
    "\x03\x02\x02\x02~\u042D\x03\x02\x02\x02\x80\u0445\x03\x02\x02\x02\x82" +
    "\u0447\x03\x02\x02\x02\x84\u044B\x03\x02\x02\x02\x86\u0457\x03\x02\x02" +
    "\x02\x88\u048F\x03\x02\x02\x02\x8A\u0491\x03\x02\x02\x02\x8C\u04A5\x03" +
    "\x02\x02\x02\x8E\u04AF\x03\x02\x02\x02\x90\u04BA\x03\x02\x02\x02\x92\u04BC" +
    "\x03\x02\x02\x02\x94\u04C0\x03\x02\x02\x02\x96\u04C4\x03\x02\x02\x02\x98" +
    "\u04E8\x03\x02\x02\x02\x9A\u04FD\x03\x02\x02\x02\x9C\u04FF\x03\x02\x02" +
    "\x02\x9E\u0509\x03\x02\x02\x02\xA0\u053C\x03\x02\x02\x02\xA2\u053E\x03" +
    "\x02\x02\x02\xA4\u0540\x03\x02\x02\x02\xA6\u0542\x03\x02\x02\x02\xA8\u0544" +
    "\x03\x02\x02\x02\xAA\u0546\x03\x02\x02\x02\xAC\u0548\x03\x02\x02\x02\xAE" +
    "\u054A\x03\x02\x02\x02\xB0\u054C\x03\x02\x02\x02\xB2\u054E\x03\x02\x02" +
    "\x02\xB4\u0550\x03\x02\x02\x02\xB6\u0552\x03\x02\x02\x02\xB8\u0554\x03" +
    "\x02\x02\x02\xBA\u0556\x03\x02\x02\x02\xBC\u0558\x03\x02\x02\x02\xBE\u055A" +
    "\x03\x02\x02\x02\xC0\u055C\x03\x02\x02\x02\xC2\u0569\x03\x02\x02\x02\xC4" +
    "\u056D\x03\x02\x02\x02\xC6\xD0\x05\x04\x03\x02\xC7\xC9\x07\x03\x02\x02" +
    "\xC8\xC7\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02" +
    "\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02" +
    "\xCD\xCF\x05\xBA^\x02\xCE\xCA\x03\x02\x02\x02\xCF\xD2\x03\x02\x02\x02" +
    "\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02" +
    "\xD2\xD0\x03\x02\x02\x02\xD3\xC6\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02" +
    "\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02" +
    "\xD7\xD8\x07\x02\x02\x03\xD8\x03\x03\x02\x02\x02\xD9\xDA\x05\x06\x04\x02" +
    "\xDA\x05\x03\x02\x02\x02\xDB\xE2\x05\f\x07\x02\xDC\xE2\x05\x0E\b\x02\xDD" +
    "\xE2\x05\x10\t\x02\xDE\xE2\x05\x1A\x0E\x02\xDF\xE2\x05\x16\f\x02\xE0\xE2" +
    "\x05\x18\r\x02\xE1\xDB\x03\x02\x02\x02\xE1\xDC\x03\x02\x02\x02\xE1\xDD" +
    "\x03\x02\x02\x02\xE1\xDE\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE0" +
    "\x03\x02\x02\x02\xE2\x07\x03\x02\x02\x02\xE3\u010E\x07\xA1\x02\x02\xE4" +
    "\u010E\x077\x02\x02\xE5\u010E\x05\xA2R\x02\xE6\u010E\x05\x12\n\x02\xE7" +
    "\u010E\x05\x96L\x02\xE8\u010E\x05\x80A\x02\xE9\u010E\x05v<\x02\xEA\u010E" +
    "\x05x=\x02\xEB\u010E\x05\x88E\x02\xEC\u010E\x05\x8AF\x02\xED\u010E\x05" +
    "\xA0Q\x02\xEE\u010E\x05|?\x02\xEF\u010E\x05\x8EH\x02\xF0\xF4\x05^0\x02" +
    "\xF1\xF3\x05\xBA^\x02\xF2\xF1\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02" +
    "\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\u010E\x03\x02\x02" +
    "\x02\xF6\xF4\x03\x02\x02\x02\xF7\xFB\x05h5\x02\xF8\xFA\x05\xBA^\x02\xF9" +
    "\xF8\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB" +
    "\xFC\x03\x02\x02\x02\xFC\u010E\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02" +
    "\xFE\u0102\x05Z.\x02\xFF\u0101\x05\xBA^\x02\u0100\xFF\x03\x02\x02\x02" +
    "\u0101\u0104\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03" +
    "\x02\x02\x02\u0103\u010E\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105" +
    "\u010E\x05N(\x02\u0106\u010E\x05P)\x02\u0107\u010E\x05T+\x02\u0108\u010E" +
    "\x05R*\x02\u0109\u010E\x05V,\x02\u010A\u010E\x05z>\x02\u010B\u010E\x05" +
    "\x9CO\x02\u010C\u010E\x05\xC4c\x02\u010D\xE3\x03\x02\x02\x02\u010D\xE4" +
    "\x03\x02\x02\x02\u010D\xE5\x03\x02\x02\x02\u010D\xE6\x03\x02\x02\x02\u010D" +
    "\xE7\x03\x02\x02\x02\u010D\xE8\x03\x02\x02\x02\u010D\xE9\x03\x02\x02\x02" +
    "\u010D\xEA\x03\x02\x02\x02\u010D\xEB\x03\x02\x02\x02\u010D\xEC\x03\x02" +
    "\x02\x02\u010D\xED\x03\x02\x02\x02\u010D\xEE\x03\x02\x02\x02\u010D\xEF" +
    "\x03\x02\x02\x02\u010D\xF0\x03\x02\x02\x02\u010D\xF7\x03\x02\x02\x02\u010D" +
    "\xFE\x03\x02\x02\x02\u010D\u0105\x03\x02\x02\x02\u010D\u0106\x03\x02\x02" +
    "\x02\u010D\u0107\x03\x02\x02\x02\u010D\u0108\x03\x02\x02\x02\u010D\u0109" +
    "\x03\x02\x02\x02\u010D\u010A\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02" +
    "\u010D\u010C\x03\x02\x02\x02\u010E\t\x03\x02\x02\x02\u010F\u0110\x05\b" +
    "\x05\x02\u0110\v\x03\x02\x02\x02\u0111\u0112\x07\x05\x02\x02\u0112\u0113" +
    "\x05,\x17\x02\u0113\u0117\x07 \x02\x02\u0114\u0116\x05\xBA^\x02\u0115" +
    "\u0114\x03\x02\x02\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02" +
    "\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0123\x03\x02\x02\x02\u0119" +
    "\u0117\x03\x02\x02\x02\u011A\u011E\x05\b\x05\x02\u011B\u011D\x05\xBA^" +
    "\x02\u011C\u011B\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C" +
    "\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0122\x03\x02\x02\x02" +
    "\u0120\u011E\x03\x02\x02\x02\u0121\u011A\x03\x02\x02\x02\u0122\u0125\x03" +
    "\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
    "\r\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0127\x07\x06\x02" +
    "\x02\u0127\u0128\x05,\x17\x02\u0128\u012A\x07 \x02\x02\u0129\u012B\x05" +
    "\xBA^\x02\u012A\u0129\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B" +
    "\u0135\x03\x02\x02\x02\u012C\u0130\x05\b\x05\x02\u012D\u012F\x05\xBA^" +
    "\x02\u012E\u012D\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E" +
    "\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02" +
    "\u0132\u0130\x03\x02\x02\x02\u0133\u012C\x03\x02\x02\x02\u0134\u0137\x03" +
    "\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136" +
    "\u013B\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138\u013A\x076\x02" +
    "\x02\u0139\u0138\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139" +
    "\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u014B\x03\x02\x02\x02" +
    "\u013D\u013B\x03\x02\x02\x02\u013E\u0148\x05\n\x06\x02\u013F\u0141\x07" +
    "6\x02\x02\u0140\u013F\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142" +
    "\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0145\x03\x02" +
    "\x02\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0147\x05\n\x06\x02\u0146\u0142" +
    "\x03\x02\x02\x02\u0147";
clozeParser._serializedATNSegment1 = "\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02" +
    "\x02\x02\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B" +
    "\u013E\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\x0F\x03\x02\x02" +
    "\x02\u014D\u014E\x07\x07\x02\x02\u014E\u014F\x05,\x17\x02\u014F\u0151" +
    "\x07 \x02\x02\u0150\u0152\x05\xBA^\x02\u0151\u0150\x03\x02\x02\x02\u0151" +
    "\u0152\x03\x02\x02\x02\u0152\u015C\x03\x02\x02\x02\u0153\u0157\x05\b\x05" +
    "\x02\u0154\u0156\x05\xBA^\x02\u0155\u0154\x03\x02\x02\x02\u0156\u0159" +
    "\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02" +
    "\u0158\u015B\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u015A\u0153\x03" +
    "\x02\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C" +
    "\u015D\x03\x02\x02\x02\u015D\u0162\x03\x02\x02\x02\u015E\u015C\x03\x02" +
    "\x02\x02\u015F\u0161\x076\x02\x02\u0160\u015F\x03\x02\x02\x02\u0161\u0164" +
    "\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02" +
    "\u0163\u0172\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0165\u016F\x05" +
    "\n\x06\x02\u0166\u0168\x076\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168" +
    "\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02" +
    "\x02\x02\u016A\u016C\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C" +
    "\u016E\x05\n\x06\x02\u016D\u0169\x03\x02\x02\x02\u016E\u0171\x03\x02\x02" +
    "\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0173" +
    "\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0172\u0165\x03\x02\x02\x02" +
    "\u0172\u0173\x03\x02\x02\x02\u0173\x11\x03\x02\x02\x02\u0174\u017C\x05" +
    "\x14\v\x02\u0175\u017B\x05\x14\v\x02\u0176\u017B\x05\x88E\x02\u0177\u017B" +
    "\x05\x8AF\x02\u0178\u017B\x05v<\x02\u0179\u017B\x05|?\x02\u017A\u0175" +
    "\x03\x02\x02\x02\u017A\u0176\x03\x02\x02\x02\u017A\u0177\x03\x02\x02\x02" +
    "\u017A\u0178\x03\x02\x02\x02\u017A\u0179\x03\x02\x02\x02\u017B\u017E\x03" +
    "\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D" +
    "\x13\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0183\x07\x12\x02" +
    "\x02\u0180\u0184\x05\xBE`\x02\u0181\u0184\x05\xC0a\x02\u0182\u0184\x03" +
    "\x02\x02\x02\u0183\u0180\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183" +
    "\u0182\x03\x02\x02\x02\u0184\u0188\x03\x02\x02\x02\u0185\u0187\x05\xA0" +
    "Q\x02\u0186\u0185\x03\x02\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188\u0186" +
    "\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018B\x03\x02\x02\x02" +
    "\u018A\u0188\x03\x02\x02\x02\u018B\u018C\x05\xB8]\x02\u018C\x15\x03\x02" +
    "\x02\x02\u018D\u018E\x07\t\x02\x02\u018E\u018F\x05,\x17\x02\u018F\u0193" +
    "\x07 \x02\x02\u0190\u0192\x05\xBA^\x02\u0191\u0190\x03\x02\x02\x02\u0192" +
    "\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02" +
    "\x02\x02\u0194\u019F\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196" +
    "\u019A\x05\b\x05\x02\u0197\u0199\x05\xBA^\x02\u0198\u0197\x03\x02\x02" +
    "\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B" +
    "\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02" +
    "\u019D\u0196\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03" +
    "\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\x17\x03\x02\x02\x02\u01A1" +
    "\u019F\x03\x02\x02\x02\u01A2\u01A3\x07\n\x02\x02\u01A3\u01A4\x05,\x17" +
    "\x02\u01A4\u01A6\x07 \x02\x02\u01A5\u01A7\x05\xBA^\x02\u01A6\u01A5\x03" +
    "\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01B1\x03\x02\x02\x02\u01A8" +
    "\u01AC\x05\b\x05\x02\u01A9\u01AB\x05\xBA^\x02\u01AA\u01A9\x03\x02\x02" +
    "\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD" +
    "\x03\x02\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02" +
    "\u01AF\u01A8\x03\x02\x02\x02\u01B0\u01B3\x03\x02\x02\x02\u01B1\u01AF\x03" +
    "\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B7\x03\x02\x02\x02\u01B3" +
    "\u01B1\x03\x02\x02\x02\u01B4\u01B6\x076\x02\x02\u01B5\u01B4\x03\x02\x02" +
    "\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7\u01B8" +
    "\x03\x02\x02\x02\u01B8\u01C7\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02" +
    "\u01BA\u01C4\x05\n\x06\x02\u01BB\u01BD\x076\x02\x02\u01BC\u01BB\x03\x02" +
    "\x02\x02\u01BD\u01C0\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE" +
    "\u01BF\x03\x02\x02\x02\u01BF\u01C1\x03\x02\x02\x02\u01C0\u01BE\x03\x02" +
    "\x02\x02\u01C1\u01C3\x05\n\x06\x02\u01C2\u01BE\x03\x02\x02\x02\u01C3\u01C6" +
    "\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02" +
    "\u01C5\u01C8\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7\u01BA\x03" +
    "\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\x19\x03\x02\x02\x02\u01C9" +
    "\u01CA\x07\b\x02\x02\u01CA\u01CB\x05,\x17\x02\u01CB\u01D5\x07 \x02\x02" +
    "\u01CC\u01D0\x05\b\x05\x02\u01CD\u01CF\x05\xBA^\x02\u01CE\u01CD\x03\x02" +
    "\x02\x02\u01CF\u01D2\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0" +
    "\u01D1\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D0\x03\x02" +
    "\x02\x02\u01D3\u01CC\x03\x02\x02\x02\u01D4\u01D7\x03\x02\x02\x02\u01D5" +
    "\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u0209\x03\x02" +
    "\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D8\u01D9\x07\b\x02\x02\u01D9\u01DA" +
    "\x05,\x17\x02\u01DA\u01DE\x07 \x02\x02\u01DB\u01DD\x05\xBA^\x02\u01DC" +
    "\u01DB\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02" +
    "\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01EF\x03\x02\x02\x02\u01E0" +
    "\u01DE\x03\x02\x02\x02\u01E1\u01E5\x05\b\x05\x02\u01E2\u01E4\x05\xBA^" +
    "\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4\u01E7\x03\x02\x02\x02\u01E5\u01E3" +
    "\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01F0\x03\x02\x02\x02" +
    "\u01E7\u01E5\x03\x02\x02\x02\u01E8\u01EC\x05\x1C\x0F\x02\u01E9\u01EB\x05" +
    "\xBA^\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC" +
    "\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01F0\x03\x02" +
    "\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01E1\x03\x02\x02\x02\u01EF" +
    "\u01E8\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01EF\x03\x02" +
    "\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F6\x03\x02\x02\x02\u01F3" +
    "\u01F5\x076\x02\x02\u01F4\u01F3\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02" +
    "\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u0206" +
    "\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u0203\x05\n\x06\x02" +
    "\u01FA\u01FC\x076\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC\u01FF\x03" +
    "\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE" +
    "\u0200\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u0202\x05\n\x06" +
    "\x02\u0201\u01FD\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201" +
    "\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0207\x03\x02\x02\x02" +
    "\u0205\u0203\x03\x02\x02\x02\u0206\u01F9\x03\x02\x02\x02\u0206\u0207\x03" +
    "\x02\x02\x02\u0207\u0209\x03\x02\x02\x02\u0208\u01C9\x03\x02\x02\x02\u0208" +
    "\u01D8\x03\x02\x02\x02\u0209\x1B\x03\x02\x02\x02\u020A\u020C\x05\x1E\x10" +
    "\x02\u020B\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D" +
    "\x03\x02\x02\x02\u020D\u020E\x05 \x11\x02\u020E\x1D\x03\x02\x02\x02\u020F" +
    "\u0210\x07\x18\x02\x02\u0210\u0211\x05\xA0Q\x02\u0211\u0212\x07 \x02\x02" +
    "\u0212\x1F\x03\x02\x02\x02\u0213\u0217\x05\"\x12\x02\u0214\u0217\x05$" +
    "\x13\x02\u0215\u0217\x05&\x14\x02\u0216\u0213\x03\x02\x02\x02\u0216\u0214" +
    "\x03\x02\x02\x02\u0216\u0215\x03\x02\x02\x02\u0217\u021D\x03\x02\x02\x02" +
    "\u0218\u021C\x05\"\x12\x02\u0219\u021C\x05$\x13\x02\u021A\u021C\x05&\x14" +
    "\x02\u021B\u0218\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021A" +
    "\x03\x02\x02\x02\u021C\u021F\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02" +
    "\u021D\u021E\x03\x02\x02\x02\u021E!\x03\x02\x02\x02\u021F\u021D\x03\x02" +
    "\x02\x02\u0220\u0222\x05v<\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222" +
    "\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0225\x07\x16\x02\x02" +
    "\u0224\u0226\x05\xA0Q\x02\u0225\u0224\x03\x02\x02\x02\u0226\u0227\x03" +
    "\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228" +
    "\u0229\x03\x02\x02\x02\u0229\u022A\x07 \x02\x02\u022A#\x03\x02\x02\x02" +
    "\u022B\u022D\x05v<\x02\u022C\u022B\x03\x02\x02\x02\u022C\u022D\x03\x02" +
    "\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u0230\x07\x17\x02\x02\u022F" +
    "\u0231\x05\xA0Q\x02\u0230\u022F\x03\x02\x02\x02\u0231\u0232\x03\x02\x02" +
    "\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0234" +
    "\x03\x02\x02\x02\u0234\u0235\x07 \x02\x02\u0235%\x03\x02\x02\x02\u0236" +
    "\u0238\x05v<\x02\u0237\u0236\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02" +
    "\u0238\u0239\x03\x02\x02\x02\u0239\u023B\x07\x19\x02\x02\u023A\u023C\x05" +
    "\xA0Q\x02\u023B\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D" +
    "\u023B\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F\x03\x02" +
    "\x02\x02\u023F\u0240\x07 \x02\x02\u0240\'\x03\x02\x02\x02\u0241\u0245" +
    "\x05`1\x02\u0242\u0244\x05d3\x02\u0243\u0242\x03\x02\x02\x02\u0244\u0247" +
    "\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02" +
    "\u0246\u024C\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0248\u0249\x07" +
    "N\x02\x02\u0249\u024A\x05\xC2b\x02\u024A\u024B\x07 \x02\x02\u024B\u024D" +
    "\x03\x02\x02\x02\u024C\u0248\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02" +
    "\u024D)\x03\x02\x02\x02\u024E\u024F\x07K\x02\x02\u024F\u0250\x074\x02" +
    "\x02\u0250\u0251\x07 \x02\x02\u0251+\x03\x02\x02\x02\u0252\u0254\x05." +
    "\x18\x02\u0253\u0252\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255" +
    "\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u025D\x03\x02" +
    "\x02\x02\u0257\u0255\x03\x02\x02\x02\u0258\u025C\x07\x8D\x02\x02\u0259" +
    "\u025C\x07\x8E\x02\x02\u025A\u025C\x050\x19\x02\u025B\u0258\x03\x02\x02" +
    "\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025A\x03\x02\x02\x02\u025C\u025F" +
    "\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02" +
    "\u025E-\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02\u0260\u0261\t\x02" +
    "\x02\x02\u0261/\x03\x02\x02\x02\u0262\u026C\x054\x1B\x02\u0263\u026C\x05" +
    "l7\x02\u0264\u026C\x056\x1C\x02\u0265\u026C\x058\x1D\x02\u0266\u026C\x05" +
    ":\x1E\x02\u0267\u026C\x05<\x1F\x02\u0268\u026C\x05> \x02\u0269\u026C\x05" +
    "@!\x02\u026A\u026C\x07c\x02\x02\u026B\u0262\x03\x02\x02\x02\u026B\u0263" +
    "\x03\x02\x02\x02\u026B\u0264\x03\x02\x02\x02\u026B\u0265\x03\x02\x02\x02" +
    "\u026B\u0266\x03\x02\x02\x02\u026B\u0267\x03\x02\x02\x02\u026B\u0268\x03" +
    "\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026A\x03\x02\x02\x02\u026C" +
    "1\x03\x02\x02\x02\u026D\u0274\x07\x8B\x02\x02\u026E\u0274\x07\x8C\x02" +
    "\x02\u026F\u0274\x07\x8D\x02\x02\u0270\u0274\x07\x90\x02\x02\u0271\u0274" +
    "\x07\x8E\x02\x02\u0272\u0274\x03\x02\x02\x02\u0273\u026D\x03\x02\x02\x02" +
    "\u0273\u026E\x03\x02\x02\x02\u0273\u026F\x03\x02\x02\x02\u0273\u0270\x03" +
    "\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0272\x03\x02\x02\x02\u0274" +
    "3\x03\x02\x02\x02\u0275\u0278\x07[\x02\x02\u0276\u0279\x07/\x02\x02\u0277" +
    "\u0279\x07\x9E\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0277\x03\x02" +
    "\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u0283\x03\x02\x02\x02\u027A" +
    "\u027C\x07p\x02\x02\u027B\u027D\x07/\x02\x02\u027C\u027B\x03\x02\x02\x02" +
    "\u027C\u027D\x03\x02\x02\x02\u027D\u0283\x03\x02\x02\x02\u027E\u0280\x07" +
    "\\\x02\x02\u027F\u0281\x07/\x02\x02\u0280\u027F\x03\x02\x02\x02\u0280" +
    "\u0281\x03\x02\x02\x02\u0281\u0283\x03\x02\x02\x02\u0282\u0275\x03\x02" +
    "\x02\x02\u0282\u027A\x03\x02\x02\x02\u0282\u027E\x03\x02\x02\x02\u0283" +
    "5\x03\x02\x02\x02\u0284\u0287\t\x03\x02\x02\u0285\u0286\x07!\x02\x02\u0286" +
    "\u0288\x071\x02\x02\u0287\u0285\x03\x02\x02\x02\u0287\u0288\x03\x02\x02" +
    "\x02\u02887\x03\x02\x02\x02\u0289\u028A\t\x04\x02\x02\u028A9\x03\x02\x02" +
    "\x02\u028B\u028C\t\x05\x02\x02\u028C;\x03\x02\x02\x02\u028D\u028E\t\x06" +
    "\x02\x02\u028E=\x03\x02\x02\x02\u028F\u0290\t\x07\x02\x02\u0290?\x03\x02" +
    "\x02\x02\u0291\u0292\t\b\x02\x02\u0292A\x03\x02\x02\x02\u0293\u0294\t" +
    "\t\x02\x02\u0294C\x03\x02\x02\x02\u0295\u0296\t\n\x02\x02\u0296E\x03\x02" +
    "\x02\x02\u0297\u0298\t\v\x02\x02\u0298G\x03\x02\x02\x02\u0299\u029A\t" +
    "\f\x02\x02\u029AI\x03\x02\x02\x02\u029B\u029E\x07g\x02\x02\u029C\u029D" +
    "\x07!\x02\x02\u029D\u029F\x071\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E" +
    "\u029F\x03\x02\x02\x02\u029F\u02AB\x03\x02\x02\x02\u02A0\u02A3\x07z\x02" +
    "\x02\u02A1\u02A2\x07!\x02\x02\u02A2\u02A4\x071\x02\x02\u02A3\u02A1\x03" +
    "\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02AB\x03\x02\x02\x02\u02A5" +
    "\u02A8\x07\x87\x02\x02\u02A6\u02A7\x07!\x02\x02\u02A7\u02A9\x071\x02\x02" +
    "\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AB\x03" +
    "\x02\x02\x02\u02AA\u029B\x03\x02\x02\x02\u02AA\u02A0\x03\x02\x02\x02\u02AA" +
    "\u02A5\x03\x02\x02\x02\u02ABK\x03\x02\x02\x02\u02AC\u02AD\t\r\x02\x02" +
    "\u02ADM\x03\x02\x02\x02\u02AE\u02AF\x05B\"\x02\u02AF\u02B0\x07!\x02\x02" +
    "\u02B0\u02B1\x05t;\x02\u02B1\u02B2\x07 \x02\x02\u02B2\u02B5\x03\x02\x02" +
    "\x02\u02B3\u02B5\x072\x02\x02\u02B4\u02AE\x03\x02\x02\x02\u02B4\u02B3" +
    "\x03\x02\x02\x02\u02B5O\x03\x02\x02\x02\u02B6\u02B7\x05D#\x02\u02B7\u02B8" +
    "\x07!\x02\x02\u02B8\u02B9\x05t;\x02\u02B9\u02BE\x07 \x02\x02\u02BA\u02BB" +
    "\x07N\x02\x02\u02BB\u02BC\x05\xC2b\x02\u02BC\u02BD\x07 \x02\x02\u02BD" +
    "\u02BF\x03\x02\x02\x02\u02BE\u02BA\x03\x02\x02\x02\u02BE\u02BF\x03\x02" +
    "\x02\x02\u02BFQ\x03\x02\x02\x02\u02C0\u02C1\x05H%\x02\u02C1\u02C2\x07" +
    "!\x02\x02\u02C2\u02C3\x05t;\x02\u02C3\u02C8\x07 \x02\x02\u02C4\u02C5\x07" +
    "N\x02\x02\u02C5\u02C6\x05\xC2b\x02\u02C6\u02C7\x07 \x02\x02\u02C7\u02C9" +
    "\x03\x02\x02\x02\u02C8\u02C4\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02" +
    "\u02C9S\x03\x02\x02\x02\u02CA\u02CB\x05F$\x02\u02CB\u02CE\x07!\x02\x02" +
    "\u02CC\u02CF\x05t;\x02\u02CD\u02CF\x05r:\x02\u02CE\u02CC\x03\x02\x02\x02" +
    "\u02CE\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D5\x07" +
    " \x02\x02\u02D1\u02D2\x07N\x02\x02\u02D2\u02D3\x05\xC2b\x02\u02D3\u02D4" +
    "\x07 \x02\x02\u02D4\u02D6\x03\x02\x02\x02\u02D5\u02D1\x03\x02\x02\x02" +
    "\u02D5\u02D6\x03\x02\x02\x02\u02D6U\x03\x02\x02\x02\u02D7\u02DB\x05X-" +
    "\x02\u02D8\u02DA\x05p9\x02\u02D9\u02D8\x03\x02\x02\x02\u02DA\u02DD\x03" +
    "\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC" +
    "W\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DE\u02DF\x05L\'\x02\u02DF" +
    "\u02E3\x07!\x02\x02\u02E0\u02E2\x07\x03\x02\x02\u02E1\u02E0\x03\x02\x02" +
    "\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E4" +
    "\x03\x02\x02\x02\u02E4\u02E6\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02" +
    "\u02E6\u02E7\x05t;\x02\u02E7\u02E8\x07 \x02\x02\u02E8Y\x03\x02\x02\x02" +
    "\u02E9\u02ED\x05\\/\x02\u02EA\u02EC\x05p9\x02\u02EB\u02EA\x03\x02\x02" +
    "\x02\u02EC\u02EF\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EE" +
    "\x03\x02\x02\x02\u02EE[\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02F0" +
    "\u02F1\x05J&\x02\u02F1\u02F2\x07!\x02\x02\u02F2\u02F3\x05t;\x02\u02F3" +
    "\u02F8\x07 \x02\x02\u02F4\u02F5\x07N\x02\x02\u02F5\u02F6\x05\xC2b\x02" +
    "\u02F6\u02F7\x07 \x02\x02\u02F7\u02F9\x03\x02\x02\x02\u02F8\u02F4\x03" +
    "\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9]\x03\x02\x02\x02\u02FA" +
    "\u02FE\x05`1\x02\u02FB\u02FD\x05d3\x02\u02FC\u02FB\x03\x02\x02\x02\u02FD" +
    "\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03\x02" +
    "\x02\x02\u02FF\u0303\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0301" +
    "\u0302\x076\x02\x02\u0302\u0304\x07P\x02\x02\u0303\u0301\x03\x02\x02\x02" +
    "\u0303\u0304\x03\x02\x02\x02\u0304_\x03\x02\x02\x02\u0305\u0306\x05b2" +
    "\x02\u0306\u030A\x07!\x02\x02\u0307\u0309\x07\x03\x02\x02\u0308\u0307" +
    "\x03\x02\x02\x02\u0309\u030C\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02" +
    "\u030A\u030B\x03\x02\x02\x02\u030B\u030D\x03\x02\x02\x02\u030C\u030A\x03" +
    "\x02\x02\x02\u030D\u030E\x05t;\x02\u030E\u030F\x07 \x02\x02\u030Fa\x03" +
    "\x02\x02\x02\u0310\u0313\x07e\x02\x02\u0311\u0314\x07/\x02\x02\u0312\u0314" +
    "\x07\x9E\x02\x02\u0313\u0311\x03\x02\x02\x02\u0313\u0312\x03\x02\x02\x02" +
    "\u0313\u0314\x03\x02\x02\x02\u0314\u031E\x03\x02\x02\x02\u0315\u0317\x07" +
    "y\x02\x02\u0316\u0318\x07/\x02\x02\u0317\u0316\x03\x02\x02\x02\u0317\u0318" +
    "\x03\x02\x02\x02\u0318\u031E\x03\x02\x02\x02\u0319\u031B\x07f\x02\x02" +
    "\u031A\u031C\x07/\x02\x02\u031B\u031A\x03\x02\x02\x02\u031B\u031C\x03" +
    "\x02\x02\x02\u031C\u031E\x03\x02\x02\x02\u031D\u0310\x03\x02\x02\x02\u031D" +
    "\u0315\x03\x02\x02\x02\u031D\u0319\x03\x02\x02\x02\u031Ec\x03\x02\x02" +
    "\x02\u031F\u0320\x07L\x02\x02\u0320\u0321\x07!\x02\x02\u0321\u0322\x05" +
    "t;\x02\u0322\u0323\x07 \x02\x02\u0323\u0331\x03\x02\x02\x02\u0324\u0325" +
    "\t\x0E\x02\x02\u0325\u0326\x07!\x02\x02\u0326\u0327\x074\x02\x02\u0327" +
    "\u0331\x07 \x02\x02\u0328\u032C\t\x0F\x02\x02\u0329\u032B\v\x02\x02\x02" +
    "\u032A\u0329\x03\x02\x02\x02\u032B\u032E\x03\x02\x02\x02\u032C\u032D\x03" +
    "\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032D\u032F\x03\x02\x02\x02\u032E" +
    "\u032C\x03\x02\x02\x02\u032F\u0331\x07 \x02\x02\u0330\u031F\x03\x02\x02" +
    "\x02\u0330\u0324\x03\x02\x02\x02\u0330\u0328\x03\x02\x02\x02\u0331e\x03" +
    "\x02\x02\x02\u0332\u0333\x07L\x02\x02\u0333\u0334\x07!\x02\x02\u0334\u0335" +
    "\x05t;\x02\u0335\u0336\x07 \x02\x02\u0336\u0344\x03\x02\x02\x02\u0337" +
    "\u0338\t\x0E\x02\x02\u0338\u0339\x07!\x02\x02\u0339\u033A\x074\x02\x02" +
    "\u033A\u0344\x07 \x02\x02\u033B\u033F\t\x0F\x02\x02\u033C\u033E\v\x02" +
    "\x02\x02\u033D\u033C\x03\x02\x02\x02\u033E\u0341\x03\x02\x02\x02\u033F" +
    "\u0340\x03\x02\x02\x02\u033F\u033D\x03\x02\x02\x02\u0340\u0342\x03\x02" +
    "\x02\x02\u0341\u033F\x03\x02\x02\x02\u0342\u0344\x07 \x02\x02\u0343\u0332" +
    "\x03\x02\x02\x02\u0343\u0337\x03\x02\x02\x02\u0343\u033B\x03\x02\x02\x02" +
    "\u0344g\x03\x02\x02\x02\u0345\u0349\x05j6\x02\u0346\u0348\x05p9\x02\u0347" +
    "\u0346\x03\x02\x02\x02\u0348\u034B\x03\x02\x02\x02\u0349\u0347\x03\x02" +
    "\x02\x02\u0349\u034A\x03\x02\x02\x02\u034Ai\x03\x02\x02\x02\u034B\u0349" +
    "\x03\x02\x02\x02\u034C\u034D\x05n8\x02\u034D\u034E\x07!\x02\x02\u034E" +
    "\u034F\x05t;\x02\u034F\u0354\x07 \x02\x02\u0350\u0351\x07N\x02\x02\u0351" +
    "\u0352\x05\xC2b\x02\u0352\u0353\x07 \x02\x02\u0353\u0355\x03\x02\x02\x02" +
    "\u0354\u0350\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355k\x03\x02" +
    "\x02\x02\u0356\u0359\x07Z\x02\x02\u0357\u0358\x07!\x02\x02\u0358\u035A" +
    "\x070\x02\x02\u0359\u0357\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02" +
    "\u035A\u0361\x03\x02\x02\x02\u035B\u035E\x07o\x02\x02\u035C\u035D\x07" +
    "!\x02\x02\u035D\u035F\x070\x02\x02\u035E\u035C\x03\x02\x02\x02\u035E\u035F" +
    "\x03\x02\x02\x02\u035F\u0361\x03\x02\x02\x02\u0360\u0356\x03\x02\x02\x02" +
    "\u0360\u035B\x03\x02\x02\x02\u0361m\x03\x02\x02\x02\u0362\u0365\x07d\x02" +
    "\x02\u0363\u0364\x07!\x02\x02\u0364\u0366\x070\x02\x02\u0365\u0363\x03" +
    "\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0372\x03\x02\x02\x02\u0367" +
    "\u036A\x07x\x02\x02\u0368\u0369\x07!\x02\x02\u0369\u036B\x070\x02\x02" +
    "\u036A\u0368\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B\u0372\x03" +
    "\x02\x02\x02\u036C\u036F\x07\x88\x02\x02\u036D\u036E\x07!\x02\x02\u036E" +
    "\u0370\x070\x02\x02\u036F\u036D\x03\x02\x02\x02\u036F\u0370\x03\x02\x02" +
    "\x02\u0370\u0372\x03\x02\x02\x02\u0371\u0362\x03\x02\x02\x02\u0371\u0367" +
    "\x03\x02\x02\x02\u0371\u036C\x03\x02\x02\x02\u0372o\x03\x02\x02\x02\u0373" +
    "\u0374\x07\x15\x02\x02\u0374\u0377\x05\xA0Q\x02\u0375\u0377\x07L\x02\x02" +
    "\u0376\u0373\x03\x02\x02\x02\u0376\u0375\x03\x02\x02\x02\u0377\u0378\x03" +
    "\x02\x02\x02\u0378\u037C\x07!\x02\x02\u0379\u037B\x07\x03\x02\x02\u037A" +
    "\u0379\x03\x02\x02\x02\u037B\u037E\x03\x02\x02\x02\u037C\u037A\x03\x02" +
    "\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u0381\x03\x02\x02\x02\u037E" +
    "\u037C\x03\x02\x02\x02\u037F\u0382\x05\xA0Q\x02\u0380\u0382\x076\x02\x02" +
    "\u0381\u037F\x03\x02\x02\x02\u0381\u0380\x03\x02\x02\x02\u0382\u0383\x03" +
    "\x02\x02\x02\u0383\u0381\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384" +
    "\u0385\x03\x02\x02\x02\u0385\u0393\x07 \x02\x02\u0386\u0387\t\x0E\x02" +
    "\x02\u0387\u0388\x07!\x02\x02\u0388\u0389\x074\x02\x02\u0389\u0393\x07" +
    " \x02\x02\u038A\u038E\t\x0F\x02\x02\u038B\u038D\v\x02\x02\x02\u038C\u038B" +
    "\x03\x02\x02\x02\u038D\u0390\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02" +
    "\u038E\u038C\x03\x02\x02\x02\u038F\u0391\x03\x02\x02\x02\u0390\u038E\x03" +
    "\x02\x02\x02\u0391\u0393\x07 \x02\x02\u0392\u0376\x03\x02\x02\x02\u0392" +
    "\u0386\x03\x02\x02\x02\u0392\u038A\x03\x02\x02\x02\u0393q\x03\x02\x02" +
    "\x02\u0394\u0395\x07\x9D\x02\x02\u0395\u0396\x07$\x02\x02\u0396\u0397" +
    "\x074\x02\x02\u0397s\x03\x02\x02\x02\u0398\u0399\x07\xA0\x02\x02\u0399" +
    "u\x03\x02\x02\x02\u039A\u039F\x07\x1B\x02\x02\u039B\u039E\x07!\x02\x02" +
    "\u039C\u039E\x05\xA0Q\x02\u039D\u039B\x03\x02\x02\x02\u039D\u039C\x03" +
    "\x02\x02\x02\u039E\u03A1\x03\x02\x02\x02\u039F\u039D\x03\x02\x02\x02\u039F" +
    "\u03A0\x03\x02\x02\x02\u03A0\u03A2\x03\x02\x02\x02\u03A1\u039F\x03\x02" +
    "\x02\x02\u03A2\u03AC\x07 \x02\x02\u03A3\u03A5\x07\x03\x02\x02\u03A4\u03A3" +
    "\x03\x02\x02\x02\u03A5\u03A8\x03\x02\x02\x02\u03A6\u03A4\x03\x02\x02\x02" +
    "\u03A6\u03A7\x03\x02\x02\x02\u03A7\u03A9\x03\x02\x02\x02\u03A8\u03A6\x03" +
    "\x02\x02\x02\u03A9\u03AB\x05x=\x02\u03AA\u03A6\x03\x02\x02\x02\u03AB\u03AE" +
    "\x03\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02" +
    "\u03AD\u03C1\x03\x02\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AF\u03B1\x07" +
    "\x1A\x02\x02\u03B0\u03B2\x05\xA0Q\x02\u03B1\u03B0\x03\x02\x02\x02\u03B1" +
    "\u03B2\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03BD\x07 \x02" +
    "\x02\u03B4\u03B6\x07\x03\x02\x02\u03B5\u03B4\x03\x02\x02\x02\u03B6\u03B9" +
    "\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02" +
    "\u03B8\u03BA\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03BA\u03BC\x05" +
    "x=\x02\u03BB\u03B7\x03\x02\x02\x02\u03BC\u03BF\x03\x02\x02\x02\u03BD\u03BB" +
    "\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C1\x03\x02\x02\x02" +
    "\u03BF\u03BD\x03\x02\x02\x02\u03C0\u039A\x03\x02\x02\x02\u03C0\u03AF\x03" +
    "\x02\x02\x02\u03C1w\x03\x02\x02\x02\u03C2\u03C3\x07\x1C\x02\x02\u03C3" +
    "\u03C8\x05\xA0Q\x02\u03C4\u03C7\x07!\x02\x02\u03C5\u03C7\x05\xA0Q\x02" +
    "\u03C6\u03C4\x03\x02\x02\x02\u03C6\u03C5\x03\x02\x02\x02\u03C7\u03CA\x03" +
    "\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9" +
    "\u03CB\x03\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02\u03CB\u03CC\x07 \x02" +
    "\x02\u03CC\u03F0\x03\x02\x02\x02\u03CD\u03CE\x07\x1D\x02\x02\u03CE\u03D3" +
    "\x05\xA0Q\x02\u03CF\u03D2\x07!\x02\x02\u03D0\u03D2\x05\xA0Q\x02\u03D1" +
    "\u03CF\x03\x02\x02\x02\u03D1\u03D0\x03\x02\x02\x02\u03D2\u03D5\x03\x02" +
    "\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4" +
    "\u03D6\x03\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D6\u03D7\x07 \x02" +
    "\x02\u03D7\u03F0\x03\x02\x02\x02\u03D8\u03D9\x07\x1E\x02\x02\u03D9\u03DE" +
    "\x05\xA0Q\x02\u03DA\u03DD\x07!\x02\x02\u03DB\u03DD\x05\xA0Q\x02\u03DC" +
    "\u03DA\x03\x02\x02\x02\u03DC\u03DB\x03\x02\x02\x02\u03DD\u03E0\x03\x02" +
    "\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF" +
    "\u03E1\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E1\u03E2\x07 \x02" +
    "\x02\u03E2\u03F0\x03\x02\x02\x02\u03E3\u03E5\x07\x1A\x02\x02\u03E4\u03E6" +
    "\x05\xA0Q\x02\u03E5\u03E4\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02" +
    "\u03E6\u03EB\x03\x02\x02\x02\u03E7\u03EA\x07!\x02\x02\u03E8\u03EA\x05" +
    "\xA0Q\x02\u03E9\u03E7\x03\x02\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03EA" +
    "\u03ED\x03\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EB\u03EC\x03\x02" +
    "\x02\x02\u03EC\u03EE\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE" +
    "\u03F0\x07 \x02\x02\u03EF\u03C2\x03\x02\x02\x02\u03EF\u03CD\x03\x02\x02" +
    "\x02\u03EF\u03D8\x03\x02\x02\x02\u03EF\u03E3\x03\x02\x02\x02\u03F0y\x03" +
    "\x02\x02\x02\u03F1\u03F3\x07\x0F\x02\x02\u03F2\u03F4\x05\xA0Q\x02\u03F3" +
    "\u03F2\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F5\x03\x02" +
    "\x02\x02\u03F5\u03FC\x07 \x02\x02\u03F6\u03F8\x07\x10\x02\x02\u03F7\u03F9" +
    "\x05\xA0Q\x02\u03F8\u03F7\x03";
clozeParser._serializedATNSegment2 = "\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA" +
    "\u03FC\x07 \x02\x02\u03FB\u03F1\x03\x02\x02\x02\u03FB\u03F6\x03\x02\x02" +
    "\x02\u03FC{\x03\x02\x02\x02\u03FD\u0405\x07E\x02\x02\u03FE\u0405\x07C" +
    "\x02\x02\u03FF\u0401\x07D\x02\x02\u0400\u0402\x079\x02\x02\u0401\u0400" +
    "\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02" +
    "\u0403\u0405\x07\x02\x02\x03\u0404\u03FD\x03\x02\x02\x02\u0404\u03FE\x03" +
    "\x02\x02\x02\u0404\u03FF\x03\x02\x02\x02\u0405}\x03\x02\x02\x02\u0406" +
    "\u0408\x07n\x02\x02\u0407\u0409\x05\xA0Q\x02\u0408\u0407\x03\x02\x02\x02" +
    "\u0408\u0409\x03\x02\x02\x02\u0409\u041F\x03\x02\x02\x02\u040A\u0414\x05" +
    "\xA0Q\x02\u040B\u040F\x076\x02\x02\u040C\u040E\x07\x03\x02\x02\u040D\u040C" +
    "\x03\x02\x02\x02\u040E\u0411\x03\x02\x02\x02\u040F\u040D\x03\x02\x02\x02" +
    "\u040F\u0410\x03\x02\x02\x02\u0410\u0413\x03\x02\x02\x02\u0411\u040F\x03" +
    "\x02\x02\x02\u0412\u040B\x03\x02\x02\x02\u0413\u0416\x03\x02\x02\x02\u0414" +
    "\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u041A\x03\x02" +
    "\x02\x02\u0416\u0414\x03\x02\x02\x02\u0417\u0419\x076\x02\x02\u0418\u0417" +
    "\x03\x02\x02\x02\u0419\u041C\x03\x02\x02\x02\u041A\u0418\x03\x02\x02\x02" +
    "\u041A\u041B\x03\x02\x02\x02\u041B\u041E\x03\x02\x02\x02\u041C\u041A\x03" +
    "\x02\x02\x02\u041D\u040A\x03\x02\x02\x02\u041E\u0421\x03\x02\x02\x02\u041F" +
    "\u041D\x03\x02\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\u0422\x03\x02" +
    "\x02\x02\u0421\u041F\x03\x02\x02\x02\u0422\u042E\x07 \x02\x02\u0423\u0429" +
    "\x07n\x02\x02\u0424\u0428\x05\xA0Q\x02\u0425\u0428\x076\x02\x02\u0426" +
    "\u0428\x07\x03\x02\x02\u0427\u0424\x03\x02\x02\x02\u0427\u0425\x03\x02" +
    "\x02\x02\u0427\u0426\x03\x02\x02\x02\u0428\u042B\x03\x02\x02\x02\u0429" +
    "\u0427\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02\u042A\u042C\x03\x02" +
    "\x02\x02\u042B\u0429\x03\x02\x02\x02\u042C\u042E\x07\x02\x02\x03\u042D" +
    "\u0406\x03\x02\x02\x02\u042D\u0423\x03\x02\x02\x02\u042E\x7F\x03\x02\x02" +
    "\x02\u042F\u0434\x07=\x02\x02\u0430\u0435\x05\xA0Q\x02\u0431\u0435\x07" +
    "!\x02\x02\u0432\u0435\x07\xA0\x02\x02\u0433\u0435\x076\x02\x02\u0434\u0430" +
    "\x03\x02\x02\x02\u0434\u0431\x03\x02\x02\x02\u0434\u0432\x03\x02\x02\x02" +
    "\u0434\u0433\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436\u0434\x03" +
    "\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438" +
    "\u0446\x07 \x02\x02\u0439\u0441\x07=\x02\x02\u043A\u0440\x05\xA0Q\x02" +
    "\u043B\u0440\x07!\x02\x02\u043C\u0440\x07\xA0\x02\x02\u043D\u0440\x07" +
    "6\x02\x02\u043E\u0440\x07\x03\x02\x02\u043F\u043A\x03\x02\x02\x02\u043F" +
    "\u043B\x03\x02\x02\x02\u043F\u043C\x03\x02\x02\x02\u043F\u043D\x03\x02" +
    "\x02\x02\u043F\u043E\x03\x02\x02\x02\u0440\u0443\x03\x02\x02\x02\u0441" +
    "\u043F\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442\u0444\x03\x02" +
    "\x02\x02\u0443\u0441\x03\x02\x02\x02\u0444\u0446\x07\x02\x02\x03\u0445" +
    "\u042F\x03\x02\x02\x02\u0445\u0439\x03\x02\x02\x02\u0446\x81\x03\x02\x02" +
    "\x02\u0447\u0448\x07<\x02\x02\u0448\u0449\x05\xA0Q\x02\u0449\u044A\x07" +
    " \x02\x02\u044A\x83\x03\x02\x02\x02\u044B\u044F\x07W\x02\x02\u044C\u0450" +
    "\x05\xA0Q\x02\u044D\u0450\x07!\x02\x02\u044E\u0450\x076\x02\x02\u044F" +
    "\u044C\x03\x02\x02\x02\u044F\u044D\x03\x02\x02\x02\u044F\u044E\x03\x02" +
    "\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u044F\x03\x02\x02\x02\u0451" +
    "\u0452\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0455\x07 \x02" +
    "\x02\u0454\u0456\x05\x86D\x02\u0455\u0454\x03\x02\x02\x02\u0455\u0456" +
    "\x03\x02\x02\x02\u0456\x85\x03\x02\x02\x02\u0457\u045B\x07W\x02\x02\u0458" +
    "\u045C\x05\xA0Q\x02\u0459\u045C\x07!\x02\x02\u045A\u045C\x076\x02\x02" +
    "\u045B\u0458\x03\x02\x02\x02\u045B\u0459\x03\x02\x02\x02\u045B\u045A\x03" +
    "\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045D" +
    "\u045E\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F\u0460\x07 \x02" +
    "\x02\u0460\x87\x03\x02\x02\x02\u0461\u0465\x07\x13\x02\x02\u0462\u0464" +
    "\x076\x02\x02\u0463\u0462\x03\x02\x02\x02\u0464\u0467\x03\x02\x02\x02" +
    "\u0465\u0463\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466\u0469\x03" +
    "\x02\x02\x02\u0467\u0465\x03\x02\x02\x02\u0468\u046A\x05\xA0Q\x02\u0469" +
    "\u0468\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\u047A\x03\x02" +
    "\x02\x02\u046B\u046F\x076\x02\x02\u046C\u046E\x07\x03\x02\x02\u046D\u046C" +
    "\x03\x02\x02\x02\u046E\u0471\x03\x02\x02\x02\u046F\u046D\x03\x02\x02\x02" +
    "\u046F\u0470\x03\x02\x02\x02\u0470\u0473\x03\x02\x02\x02\u0471\u046F\x03" +
    "\x02\x02\x02\u0472\u046B\x03\x02\x02\x02\u0473\u0476\x03\x02\x02\x02\u0474" +
    "\u0472\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475\u0477\x03\x02" +
    "\x02\x02\u0476\u0474\x03\x02\x02\x02\u0477\u0479\x05\xA0Q\x02\u0478\u0474" +
    "\x03\x02\x02\x02\u0479\u047C\x03\x02\x02\x02\u047A\u0478\x03\x02\x02\x02" +
    "\u047A\u047B\x03\x02\x02\x02\u047B\u0480\x03\x02\x02\x02\u047C\u047A\x03" +
    "\x02\x02\x02\u047D\u047F\x076\x02\x02\u047E\u047D\x03\x02\x02\x02\u047F" +
    "\u0482\x03\x02\x02\x02\u0480\u047E\x03\x02\x02\x02\u0480\u0481\x03\x02" +
    "\x02\x02\u0481\u0483\x03\x02\x02\x02\u0482\u0480\x03\x02\x02\x02\u0483" +
    "\u0490\x07 \x02\x02\u0484\u0488\x07\x13\x02\x02\u0485\u0487\x076\x02\x02" +
    "\u0486\u0485\x03\x02\x02\x02\u0487\u048A\x03\x02\x02\x02\u0488\u0486\x03" +
    "\x02\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\u048C\x03\x02\x02\x02\u048A" +
    "\u0488\x03\x02\x02\x02\u048B\u048D\x05\xA0Q\x02\u048C\u048B\x03\x02\x02" +
    "\x02\u048C\u048D\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E\u0490" +
    "\x07\x02\x02\x03\u048F\u0461\x03\x02\x02\x02\u048F\u0484\x03\x02\x02\x02" +
    "\u0490\x89\x03\x02\x02\x02\u0491\u0493\x07\x14\x02\x02\u0492\u0494\n\x10" +
    "\x02\x02\u0493\u0492\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495" +
    "\u0493\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u0497\x03\x02" +
    "\x02\x02\u0497\u0498\x07 \x02\x02\u0498\x8B\x03\x02\x02\x02\u0499\u049C" +
    "\x07\x1F\x02\x02\u049A\u049D\x05\xA0Q\x02\u049B\u049D\x076\x02\x02\u049C" +
    "\u049A\x03\x02\x02\x02\u049C\u049B\x03\x02\x02\x02\u049D\u049E\x03\x02" +
    "\x02\x02\u049E\u049C\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F" +
    "\u04A0\x03\x02\x02\x02\u04A0\u04A6\x07 \x02\x02\u04A1\u04A2\x07\x1F\x02" +
    "\x02\u04A2\u04A3\x05\xA0Q\x02\u04A3\u04A4\x07\x02\x02\x03\u04A4\u04A6" +
    "\x03\x02\x02\x02\u04A5\u0499\x03\x02\x02\x02\u04A5\u04A1\x03\x02\x02\x02" +
    "\u04A6\x8D\x03\x02\x02\x02\u04A7\u04A8\x07I\x02\x02\u04A8\u04A9\x05\xA0" +
    "Q\x02\u04A9\u04AA\x07 \x02\x02\u04AA\u04B0\x03\x02\x02\x02\u04AB\u04AC" +
    "\x07J\x02\x02\u04AC\u04AD\x05\xA0Q\x02\u04AD\u04AE\x07 \x02\x02\u04AE" +
    "\u04B0\x03\x02\x02\x02\u04AF\u04A7\x03\x02\x02\x02\u04AF\u04AB\x03\x02" +
    "\x02\x02\u04B0\x8F\x03\x02\x02\x02\u04B1\u04B2\x07@\x02\x02\u04B2\u04B3" +
    "\x07!\x02\x02\u04B3\u04B4\x074\x02\x02\u04B4\u04BB\x07 \x02\x02\u04B5" +
    "\u04B6\x07@\x02\x02\u04B6\u04B7\x07!\x02\x02\u04B7\u04B8\x05\xA0Q\x02" +
    "\u04B8\u04B9\x07 \x02\x02\u04B9\u04BB\x03\x02\x02\x02\u04BA\u04B1\x03" +
    "\x02\x02\x02\u04BA\u04B5\x03\x02\x02\x02\u04BB\x91\x03\x02\x02\x02\u04BC" +
    "\u04BD\x07U\x02\x02\u04BD\u04BE\x05\xA0Q\x02\u04BE\u04BF\x07 \x02\x02" +
    "\u04BF\x93\x03\x02\x02\x02\u04C0\u04C1\x07V\x02\x02\u04C1\u04C2\x05\xA0" +
    "Q\x02\u04C2\u04C3\x07 \x02\x02\u04C3\x95\x03\x02\x02\x02\u04C4\u04CE\x05" +
    "\x98M\x02\u04C5\u04C7\x076\x02\x02\u04C6\u04C5\x03\x02\x02\x02\u04C7\u04CA" +
    "\x03\x02\x02\x02\u04C8\u04C6\x03\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02" +
    "\u04C9\u04CB\x03\x02\x02\x02\u04CA\u04C8\x03\x02\x02\x02\u04CB\u04CD\x05" +
    "\x98M\x02\u04CC\u04C8\x03\x02\x02\x02\u04CD\u04D0\x03\x02\x02\x02\u04CE" +
    "\u04CC\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF\x97\x03\x02\x02" +
    "\x02\u04D0\u04CE\x03\x02\x02\x02\u04D1\u04D2\x07\x15\x02\x02\u04D2\u04D3" +
    "\x05\xA0Q\x02\u04D3\u04D4\t\x11\x02\x02\u04D4\u04DA\x05\xA0Q\x02\u04D5" +
    "\u04D9\x076\x02\x02\u04D6\u04D9\x07!\x02\x02\u04D7\u04D9\x05\xA0Q\x02" +
    "\u04D8\u04D5\x03\x02\x02\x02\u04D8\u04D6\x03\x02\x02\x02\u04D8\u04D7\x03" +
    "\x02\x02\x02\u04D9\u04DC\x03\x02\x02\x02\u04DA\u04D8\x03\x02\x02\x02\u04DA" +
    "\u04DB\x03\x02\x02\x02\u04DB\u04DD\x03\x02\x02\x02\u04DC\u04DA\x03\x02" +
    "\x02\x02\u04DD\u04DE\x07 \x02\x02\u04DE\u04E9\x03\x02\x02\x02\u04DF\u04E3" +
    "\x07S\x02\x02\u04E0\u04E2\v\x02\x02\x02\u04E1\u04E0\x03\x02\x02\x02\u04E2" +
    "\u04E5\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E3\u04E1\x03\x02" +
    "\x02\x02\u04E4\u04E6\x03\x02\x02\x02\u04E5\u04E3\x03\x02\x02\x02\u04E6" +
    "\u04E9\x07 \x02\x02\u04E7\u04E9\x07F\x02\x02\u04E8\u04D1\x03\x02\x02\x02" +
    "\u04E8\u04DF\x03\x02\x02\x02\u04E8\u04E7\x03\x02\x02\x02\u04E9\x99\x03" +
    "\x02\x02\x02\u04EA\u04EE\x07\f\x02\x02\u04EB\u04EF\x05\xA0Q\x02\u04EC" +
    "\u04EF\x07!\x02\x02\u04ED\u04EF\x076\x02\x02\u04EE\u04EB\x03\x02\x02\x02" +
    "\u04EE\u04EC\x03\x02\x02\x02\u04EE\u04ED\x03\x02\x02\x02\u04EF\u04F0\x03" +
    "\x02\x02\x02\u04F0\u04EE\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1" +
    "\u04F2\x03\x02\x02\x02\u04F2\u04FE\x07 \x02\x02\u04F3\u04F9\x07\f\x02" +
    "\x02\u04F4\u04F8\x05\xA0Q\x02\u04F5\u04F8\x07!\x02\x02\u04F6\u04F8\x07" +
    "6\x02\x02\u04F7\u04F4\x03\x02\x02\x02\u04F7\u04F5\x03\x02\x02\x02\u04F7" +
    "\u04F6\x03\x02\x02\x02\u04F8\u04FB\x03\x02\x02\x02\u04F9\u04F7\x03\x02" +
    "\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA\u04FC\x03\x02\x02\x02\u04FB" +
    "\u04F9\x03\x02\x02\x02\u04FC\u04FE\x07\x02\x02\x03\u04FD\u04EA\x03\x02" +
    "\x02\x02\u04FD\u04F3\x03\x02\x02\x02\u04FE\x9B\x03\x02\x02\x02\u04FF\u0501" +
    "\x07\x11\x02\x02\u0500\u0502\x05\xA0Q\x02\u0501\u0500\x03\x02\x02\x02" +
    "\u0501\u0502\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503\u0504\x07" +
    " \x02\x02\u0504\x9D\x03\x02\x02\x02\u0505\u0507\x05\xA0Q\x02\u0506\u0508" +
    "\x05\xBA^\x02\u0507\u0506\x03\x02\x02\x02\u0507\u0508\x03\x02\x02\x02" +
    "\u0508\u050A\x03\x02\x02\x02\u0509\u0505\x03\x02\x02\x02\u050A\u050B\x03" +
    "\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02\u050C" +
    "\x9F\x03\x02\x02\x02\u050D\u0514\x075\x02\x02\u050E\u0510\x07\x03\x02" +
    "\x02\u050F\u050E\x03\x02\x02\x02\u0510\u0511\x03\x02\x02\x02\u0511\u050F" +
    "\x03\x02\x02\x02\u0511\u0512\x03\x02\x02\x02\u0512\u0513\x03\x02\x02\x02" +
    "\u0513\u0515\x05\xBE`\x02\u0514\u050F\x03\x02\x02\x02\u0514\u0515\x03" +
    "\x02\x02\x02\u0515\u053D\x03\x02\x02\x02\u0516\u051D\x05\xC2b\x02\u0517" +
    "\u0519\x07\x03\x02\x02\u0518\u0517\x03\x02\x02\x02\u0519\u051A\x03\x02" +
    "\x02\x02\u051A\u0518\x03\x02\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B" +
    "\u051C\x03\x02\x02\x02\u051C\u051E\x05\xBE`\x02\u051D\u0518\x03\x02\x02" +
    "\x02\u051D\u051E\x03\x02\x02\x02\u051E\u053D\x03\x02\x02\x02\u051F\u0520" +
    "\x07\x18\x02\x02\u0520\u0521\x05\xA0Q\x02\u0521\u0522\x07 \x02\x02\u0522" +
    "\u053D\x03\x02\x02\x02\u0523\u053D\x074\x02\x02\u0524\u0526\x07\x03\x02" +
    "\x02\u0525\u0524\x03\x02\x02\x02\u0526\u0529\x03\x02\x02\x02\u0527\u0525" +
    "\x03\x02\x02\x02\u0527\u0528\x03\x02\x02\x02\u0528\u052A\x03\x02\x02\x02" +
    "\u0529\u0527\x03\x02\x02\x02\u052A\u052E\x07!\x02\x02\u052B\u052D\x07" +
    "\x03\x02\x02\u052C\u052B\x03\x02\x02\x02\u052D\u0530\x03\x02\x02\x02\u052E" +
    "\u052C\x03\x02\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\u053D\x03\x02" +
    "\x02\x02\u0530\u052E\x03\x02\x02\x02\u0531\u0535\x07\"\x02\x02\u0532\u0534" +
    "\x07\x03\x02\x02\u0533\u0532\x03\x02\x02\x02\u0534\u0537\x03\x02\x02\x02" +
    "\u0535\u0533\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536\u053D\x03" +
    "\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0538\u053D\x07 \x02\x02\u0539" +
    "\u053D\x07+\x02\x02\u053A\u053D\x07(\x02\x02\u053B\u053D\x07\xA0\x02\x02" +
    "\u053C\u050D\x03\x02\x02\x02\u053C\u0516\x03\x02\x02\x02\u053C\u051F\x03" +
    "\x02\x02\x02\u053C\u0523\x03\x02\x02\x02\u053C\u0527\x03\x02\x02\x02\u053C" +
    "\u0531\x03\x02\x02\x02\u053C\u0538\x03\x02\x02\x02\u053C\u0539\x03\x02" +
    "\x02\x02\u053C\u053A\x03\x02\x02\x02\u053C\u053B\x03\x02\x02\x02\u053D" +
    "\xA1\x03\x02\x02\x02\u053E\u053F\x07.\x02\x02\u053F\xA3\x03\x02\x02\x02" +
    "\u0540\u0541\x07\x12\x02\x02\u0541\xA5\x03\x02\x02\x02\u0542\u0543\x07" +
    "\x13\x02\x02\u0543\xA7\x03\x02\x02\x02\u0544\u0545\x07\x14\x02\x02\u0545" +
    "\xA9\x03\x02\x02\x02\u0546\u0547\x07\x15\x02\x02\u0547\xAB\x03\x02\x02" +
    "\x02\u0548\u0549\x07\x16\x02\x02\u0549\xAD\x03\x02\x02\x02\u054A\u054B" +
    "\x07\x17\x02\x02\u054B\xAF\x03\x02\x02\x02\u054C\u054D\x07\x18\x02\x02" +
    "\u054D\xB1\x03\x02\x02\x02\u054E\u054F\x07\x19\x02\x02\u054F\xB3\x03\x02" +
    "\x02\x02\u0550\u0551\x07\x1A\x02\x02\u0551\xB5\x03\x02\x02\x02\u0552\u0553" +
    "\x07 \x02\x02\u0553\xB7\x03\x02\x02\x02\u0554\u0555\x07 \x02\x02\u0555" +
    "\xB9\x03\x02\x02\x02\u0556\u0557\x076\x02\x02\u0557\xBB\x03\x02\x02\x02" +
    "\u0558\u0559\x07\xA1\x02\x02\u0559\xBD\x03\x02\x02\x02\u055A\u055B\x07" +
    "4\x02\x02\u055B\xBF\x03\x02\x02\x02\u055C\u055D\x075\x02\x02\u055D\xC1" +
    "\x03\x02\x02\x02\u055E\u056A\x079\x02\x02\u055F\u056A\x077\x02\x02\u0560" +
    "\u056A\x07:\x02\x02\u0561\u056A\x078\x02\x02\u0562\u056A\x07\"\x02\x02" +
    "\u0563\u0564\x07&\x02\x02\u0564\u056A\n\x12\x02\x02\u0565\u0566\x07\'" +
    "\x02\x02\u0566\u056A\n\x13\x02\x02\u0567\u056A\x07*\x02\x02\u0568\u056A" +
    "\x07)\x02\x02\u0569\u055E\x03\x02\x02\x02\u0569\u055F\x03\x02\x02\x02" +
    "\u0569\u0560\x03\x02\x02\x02\u0569\u0561\x03\x02\x02\x02\u0569\u0562\x03" +
    "\x02\x02\x02\u0569\u0563\x03\x02\x02\x02\u0569\u0565\x03\x02\x02\x02\u0569" +
    "\u0567\x03\x02\x02\x02\u0569\u0568\x03\x02\x02\x02\u056A\u056B\x03\x02" +
    "\x02\x02\u056B\u0569\x03\x02\x02\x02\u056B\u056C\x03\x02\x02\x02\u056C" +
    "\xC3\x03\x02\x02\x02\u056D\u056E\x07\x03\x02\x02\u056E\xC5\x03\x02\x02" +
    "\x02\xC2\xCA\xD0\xD5\xE1\xF4\xFB\u0102\u010D\u0117\u011E\u0123\u012A\u0130" +
    "\u0135\u013B\u0142\u0148\u014B\u0151\u0157\u015C\u0162\u0169\u016F\u0172" +
    "\u017A\u017C\u0183\u0188\u0193\u019A\u019F\u01A6\u01AC\u01B1\u01B7\u01BE" +
    "\u01C4\u01C7\u01D0\u01D5\u01DE\u01E5\u01EC\u01EF\u01F1\u01F6\u01FD\u0203" +
    "\u0206\u0208\u020B\u0216\u021B\u021D\u0221\u0227\u022C\u0232\u0237\u023D" +
    "\u0245\u024C\u0255\u025B\u025D\u026B\u0273\u0278\u027C\u0280\u0282\u0287" +
    "\u029E\u02A3\u02A8\u02AA\u02B4\u02BE\u02C8\u02CE\u02D5\u02DB\u02E3\u02ED" +
    "\u02F8\u02FE\u0303\u030A\u0313\u0317\u031B\u031D\u032C\u0330\u033F\u0343" +
    "\u0349\u0354\u0359\u035E\u0360\u0365\u036A\u036F\u0371\u0376\u037C\u0381" +
    "\u0383\u038E\u0392\u039D\u039F\u03A6\u03AC\u03B1\u03B7\u03BD\u03C0\u03C6" +
    "\u03C8\u03D1\u03D3\u03DC\u03DE\u03E5\u03E9\u03EB\u03EF\u03F3\u03F8\u03FB" +
    "\u0401\u0404\u0408\u040F\u0414\u041A\u041F\u0427\u0429\u042D\u0434\u0436" +
    "\u043F\u0441\u0445\u044F\u0451\u0455\u045B\u045D\u0465\u0469\u046F\u0474" +
    "\u047A\u0480\u0488\u048C\u048F\u0495\u049C\u049E\u04A5\u04AF\u04BA\u04C8" +
    "\u04CE\u04D8\u04DA\u04E3\u04E8\u04EE\u04F0\u04F7\u04F9\u04FD\u0501\u0507" +
    "\u050B\u0511\u0514\u051A\u051D\u0527\u052E\u0535\u053C\u0569\u056B";
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
    gap_text() {
        return this.tryGetRuleContext(0, Gap_textContext);
    }
    gap_text_instruction_grouped() {
        return this.tryGetRuleContext(0, Gap_text_instruction_groupedContext);
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
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
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
class Gap_textContext extends ParserRuleContext_1.ParserRuleContext {
    BitGapText() { return this.getToken(clozeParser.BitGapText, 0); }
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
    get ruleIndex() { return clozeParser.RULE_gap_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterGap_text) {
            listener.enterGap_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGap_text) {
            listener.exitGap_text(this);
        }
    }
}
exports.Gap_textContext = Gap_textContext;
class Gap_text_instruction_groupedContext extends ParserRuleContext_1.ParserRuleContext {
    BitGapTextInstructionGrouped() { return this.getToken(clozeParser.BitGapTextInstructionGrouped, 0); }
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
    get ruleIndex() { return clozeParser.RULE_gap_text_instruction_grouped; }
    // @Override
    enterRule(listener) {
        if (listener.enterGap_text_instruction_grouped) {
            listener.enterGap_text_instruction_grouped(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGap_text_instruction_grouped) {
            listener.exitGap_text_instruction_grouped(this);
        }
    }
}
exports.Gap_text_instruction_groupedContext = Gap_text_instruction_groupedContext;
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
    OPITEM() { return this.tryGetToken(clozeParser.OPITEM, 0); }
    CL() { return this.getToken(clozeParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(clozeParser.COLON);
        }
        else {
            return this.getToken(clozeParser.COLON, i);
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
            return this.getTokens(clozeParser.S);
        }
        else {
            return this.getToken(clozeParser.S, i);
        }
    }
    OPC() { return this.tryGetToken(clozeParser.OPC, 0); }
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
    OPLEAD() { return this.tryGetToken(clozeParser.OPLEAD, 0); }
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
    OPPAGENUMBER() { return this.tryGetToken(clozeParser.OPPAGENUMBER, 0); }
    OPMARGINNUMBER() { return this.tryGetToken(clozeParser.OPMARGINNUMBER, 0); }
    OPC() { return this.tryGetToken(clozeParser.OPC, 0); }
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
