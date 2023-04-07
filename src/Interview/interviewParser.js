"use strict";
// Generated from ./Interview/interviewParser.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.S_and_wContext = exports.LinesContext = exports.DcolonContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.Single_gapContext = exports.GapContext = exports.Footer_textContext = exports.Footer_resourceContext = exports.Interview_footerContext = exports.BitElemContext = exports.Ml_exampleContext = exports.Value_titleContext = exports.Key_titleContext = exports.HeadingContext = exports.AnswerContext = exports.QueryContext = exports.Mark_textContext = exports.PartansContext = exports.ShortansContext = exports.LongansContext = exports.Interview_answerContext = exports.Interview_textContext = exports.Interview_sometextContext = exports.Interview_qanda__Context = exports.Interview_qandaContext = exports.McrmiscContext = exports.Mcrsep_endContext = exports.McrsepContext = exports.Interview_instruction_groupedContext = exports.InterviewContext = exports.InterviewsContext = exports.Bitmark_Context = exports.BitmarkContext = exports.interviewParser = void 0;
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
class interviewParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(interviewParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return interviewParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "interviewParser.g4"; }
    // @Override
    get ruleNames() { return interviewParser.ruleNames; }
    // @Override
    get serializedATN() { return interviewParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    bitmark() {
        let _localctx = new BitmarkContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, interviewParser.RULE_bitmark);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 201;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 188;
                            this.bitmark_();
                            this.state = 198;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 192;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === interviewParser.S) {
                                                {
                                                    {
                                                        this.state = 189;
                                                        this.match(interviewParser.S);
                                                    }
                                                }
                                                this.state = 194;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 195;
                                            this.match(interviewParser.NL);
                                        }
                                    }
                                }
                                this.state = 200;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            }
                        }
                    }
                    this.state = 203;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === interviewParser.BitInterview || _la === interviewParser.BitInterviewinstgrp);
                this.state = 208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === interviewParser.NL) {
                    {
                        {
                            this.state = 205;
                            this.match(interviewParser.NL);
                        }
                    }
                    this.state = 210;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 211;
                this.match(interviewParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 2, interviewParser.RULE_bitmark_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 213;
                this.interviews();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interviews() {
        let _localctx = new InterviewsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, interviewParser.RULE_interviews);
        try {
            this.state = 217;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.BitInterview:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 215;
                        this.interview();
                    }
                    break;
                case interviewParser.BitInterviewinstgrp:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 216;
                        this.interview_instruction_grouped();
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
    interview() {
        let _localctx = new InterviewContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, interviewParser.RULE_interview);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 219;
                this.match(interviewParser.BitInterview);
                this.state = 220;
                this.format();
                this.state = 221;
                this.match(interviewParser.CL);
                this.state = 225;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 222;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                    this.state = 227;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                }
                this.state = 237;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 228;
                                this.bitElem();
                                this.state = 232;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 229;
                                                this.match(interviewParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 234;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 239;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                }
                this.state = 256;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 240;
                                    this.mcrsep();
                                    this.state = 244;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 241;
                                                    this.match(interviewParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 246;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                                    }
                                    this.state = 254;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 247;
                                                this.interview_qanda();
                                                this.state = 251;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                    if (_alt === 1) {
                                                        {
                                                            {
                                                                this.state = 248;
                                                                this.match(interviewParser.NL);
                                                            }
                                                        }
                                                    }
                                                    this.state = 253;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                                }
                                            }
                                            break;
                                    }
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 258;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 260;
                this.mcrsep_end();
                this.state = 264;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 261;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                    this.state = 266;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                }
                this.state = 268;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                    case 1:
                        {
                            this.state = 267;
                            this.interview_footer();
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
    interview_instruction_grouped() {
        let _localctx = new Interview_instruction_groupedContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, interviewParser.RULE_interview_instruction_grouped);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
                this.match(interviewParser.BitInterviewinstgrp);
                this.state = 271;
                this.format();
                this.state = 272;
                this.match(interviewParser.CL);
                this.state = 276;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 273;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                    this.state = 278;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                }
                this.state = 288;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 279;
                                this.bitElem();
                                this.state = 283;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 280;
                                                this.match(interviewParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 285;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 290;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                }
                this.state = 301;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 291;
                                this.mcrsep();
                                {
                                    this.state = 292;
                                    this.interview_qanda();
                                    this.state = 296;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 293;
                                                    this.match(interviewParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 298;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                                    }
                                }
                            }
                        }
                    }
                    this.state = 303;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                }
                this.state = 304;
                this.mcrsep_end();
                this.state = 308;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 305;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                    this.state = 310;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                }
                this.state = 312;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                    case 1:
                        {
                            this.state = 311;
                            this.interview_footer();
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
        this.enterRule(_localctx, 10, interviewParser.RULE_mcrsep);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 316;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.HSPL:
                    case interviewParser.HSPL2:
                        {
                            this.state = 314;
                            _la = this._input.LA(1);
                            if (!(_la === interviewParser.HSPL || _la === interviewParser.HSPL2)) {
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
                    case interviewParser.NL:
                        {
                            this.state = 315;
                            this.match(interviewParser.NL);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
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
        this.enterRule(_localctx, 12, interviewParser.RULE_mcrsep_end);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 318;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.HSPL || _la === interviewParser.HSPL2)) {
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
    mcrmisc() {
        let _localctx = new McrmiscContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, interviewParser.RULE_mcrmisc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 320;
                this.interview_qanda();
                this.state = 321;
                this.match(interviewParser.NL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interview_qanda() {
        let _localctx = new Interview_qandaContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, interviewParser.RULE_interview_qanda);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 323;
                this.interview_qanda__();
                this.state = 332;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 325;
                                this._errHandler.sync(this);
                                _alt = 1;
                                do {
                                    switch (_alt) {
                                        case 1:
                                            {
                                                {
                                                    this.state = 324;
                                                    this.match(interviewParser.NL);
                                                }
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 327;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                this.state = 329;
                                this.interview_qanda__();
                            }
                        }
                    }
                    this.state = 334;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
    interview_qanda__() {
        let _localctx = new Interview_qanda__Context(this._ctx, this.state);
        this.enterRule(_localctx, 18, interviewParser.RULE_interview_qanda__);
        let _la;
        try {
            let _alt;
            this.state = 418;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 336;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.OPC) {
                            {
                                this.state = 335;
                                this.item();
                            }
                        }
                        this.state = 338;
                        this.interview_text();
                        this.state = 342;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 339;
                                        this.match(interviewParser.S);
                                    }
                                }
                            }
                            this.state = 344;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                        }
                        this.state = 357;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 355;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 345;
                                                this.instruction();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 346;
                                                this.example();
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 347;
                                                this.shortans();
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 348;
                                                this.longans();
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 349;
                                                this.dollarans();
                                            }
                                            break;
                                        case 6:
                                            {
                                                this.state = 350;
                                                this.partans();
                                            }
                                            break;
                                        case 7:
                                            {
                                                this.state = 351;
                                                this.single_gap();
                                            }
                                            break;
                                        case 8:
                                            {
                                                this.state = 352;
                                                this.mark_text();
                                            }
                                            break;
                                        case 9:
                                            {
                                                this.state = 353;
                                                this.hint();
                                            }
                                            break;
                                        case 10:
                                            {
                                                this.state = 354;
                                                this.interview_sometext();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 359;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                        }
                        this.state = 380;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                            case 1:
                                {
                                    this.state = 360;
                                    this.match(interviewParser.NL);
                                    this.state = 362;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (interviewParser.AMP - 23)) | (1 << (interviewParser.Greater - 23)) | (1 << (interviewParser.Less - 23)) | (1 << (interviewParser.RightAngle - 23)) | (1 << (interviewParser.RightArrow - 23)) | (1 << (interviewParser.STRING - 23)) | (1 << (interviewParser.NOTBITMARK - 23)) | (1 << (interviewParser.SENTENCE - 23)) | (1 << (interviewParser.BARSTRING - 23)))) !== 0)) {
                                        {
                                            this.state = 361;
                                            this.interview_answer();
                                        }
                                    }
                                    this.state = 367;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.S) {
                                        {
                                            {
                                                this.state = 364;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 369;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 377;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.OPDOLL || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (interviewParser.AtShortanswer - 57)) | (1 << (interviewParser.AtLonganswer - 57)) | (1 << (interviewParser.AtExampleWithStr - 57)) | (1 << (interviewParser.AtExamplecol - 57)) | (1 << (interviewParser.AtExamplecl - 57)) | (1 << (interviewParser.AtPartialAnswerS - 57)) | (1 << (interviewParser.AtPartialAnswer - 57)))) !== 0)) {
                                        {
                                            this.state = 375;
                                            this._errHandler.sync(this);
                                            switch (this._input.LA(1)) {
                                                case interviewParser.AtExampleWithStr:
                                                case interviewParser.AtExamplecol:
                                                case interviewParser.AtExamplecl:
                                                    {
                                                        this.state = 370;
                                                        this.example();
                                                    }
                                                    break;
                                                case interviewParser.AtShortanswer:
                                                    {
                                                        this.state = 371;
                                                        this.shortans();
                                                    }
                                                    break;
                                                case interviewParser.AtLonganswer:
                                                    {
                                                        this.state = 372;
                                                        this.longans();
                                                    }
                                                    break;
                                                case interviewParser.OPDOLL:
                                                    {
                                                        this.state = 373;
                                                        this.dollarans();
                                                    }
                                                    break;
                                                case interviewParser.AtPartialAnswerS:
                                                case interviewParser.AtPartialAnswer:
                                                    {
                                                        this.state = 374;
                                                        this.partans();
                                                    }
                                                    break;
                                                default:
                                                    throw new NoViableAltException_1.NoViableAltException(this);
                                            }
                                        }
                                        this.state = 379;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 392;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 392;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 382;
                                                    this.instruction();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 383;
                                                    this.example();
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 384;
                                                    this.shortans();
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 385;
                                                    this.longans();
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 386;
                                                    this.dollarans();
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 387;
                                                    this.partans();
                                                }
                                                break;
                                            case 7:
                                                {
                                                    this.state = 388;
                                                    this.single_gap();
                                                }
                                                break;
                                            case 8:
                                                {
                                                    this.state = 389;
                                                    this.mark_text();
                                                }
                                                break;
                                            case 9:
                                                {
                                                    this.state = 390;
                                                    this.hint();
                                                }
                                                break;
                                            case 10:
                                                {
                                                    this.state = 391;
                                                    this.interview_sometext();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 394;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 416;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                            case 1:
                                {
                                    this.state = 396;
                                    this.match(interviewParser.NL);
                                    this.state = 398;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (interviewParser.AMP - 23)) | (1 << (interviewParser.Greater - 23)) | (1 << (interviewParser.Less - 23)) | (1 << (interviewParser.RightAngle - 23)) | (1 << (interviewParser.RightArrow - 23)) | (1 << (interviewParser.STRING - 23)) | (1 << (interviewParser.NOTBITMARK - 23)) | (1 << (interviewParser.SENTENCE - 23)) | (1 << (interviewParser.BARSTRING - 23)))) !== 0)) {
                                        {
                                            this.state = 397;
                                            this.interview_answer();
                                        }
                                    }
                                    this.state = 403;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.S) {
                                        {
                                            {
                                                this.state = 400;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 405;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 413;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.OPDOLL || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (interviewParser.AtShortanswer - 57)) | (1 << (interviewParser.AtLonganswer - 57)) | (1 << (interviewParser.AtExampleWithStr - 57)) | (1 << (interviewParser.AtExamplecol - 57)) | (1 << (interviewParser.AtExamplecl - 57)) | (1 << (interviewParser.AtPartialAnswerS - 57)) | (1 << (interviewParser.AtPartialAnswer - 57)))) !== 0)) {
                                        {
                                            this.state = 411;
                                            this._errHandler.sync(this);
                                            switch (this._input.LA(1)) {
                                                case interviewParser.AtExampleWithStr:
                                                case interviewParser.AtExamplecol:
                                                case interviewParser.AtExamplecl:
                                                    {
                                                        this.state = 406;
                                                        this.example();
                                                    }
                                                    break;
                                                case interviewParser.AtShortanswer:
                                                    {
                                                        this.state = 407;
                                                        this.shortans();
                                                    }
                                                    break;
                                                case interviewParser.AtLonganswer:
                                                    {
                                                        this.state = 408;
                                                        this.longans();
                                                    }
                                                    break;
                                                case interviewParser.OPDOLL:
                                                    {
                                                        this.state = 409;
                                                        this.dollarans();
                                                    }
                                                    break;
                                                case interviewParser.AtPartialAnswerS:
                                                case interviewParser.AtPartialAnswer:
                                                    {
                                                        this.state = 410;
                                                        this.partans();
                                                    }
                                                    break;
                                                default:
                                                    throw new NoViableAltException_1.NoViableAltException(this);
                                            }
                                        }
                                        this.state = 415;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
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
    interview_sometext() {
        let _localctx = new Interview_sometextContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, interviewParser.RULE_interview_sometext);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 421;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 420;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 423;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
    interview_text() {
        let _localctx = new Interview_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, interviewParser.RULE_interview_text);
        try {
            let _alt;
            this.state = 444;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AMP:
                case interviewParser.Greater:
                case interviewParser.Less:
                case interviewParser.RightAngle:
                case interviewParser.RightArrow:
                case interviewParser.STRING:
                case interviewParser.NOTBITMARK:
                case interviewParser.SENTENCE:
                case interviewParser.BARSTRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 427;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                            case 1:
                                {
                                    this.state = 425;
                                    this.match(interviewParser.STRING);
                                    this.state = 426;
                                    this.match(interviewParser.CL);
                                }
                                break;
                        }
                        this.state = 439;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 429;
                                            this.words();
                                            this.state = 431;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 430;
                                                        this.match(interviewParser.COLON);
                                                    }
                                                    break;
                                            }
                                            this.state = 436;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 433;
                                                            this.match(interviewParser.NL);
                                                        }
                                                    }
                                                }
                                                this.state = 438;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 441;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case interviewParser.LIST_LINE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 443;
                        this.match(interviewParser.LIST_LINE);
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
    interview_answer() {
        let _localctx = new Interview_answerContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, interviewParser.RULE_interview_answer);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 450;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 446;
                            this.words();
                            this.state = 448;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.COLON) {
                                {
                                    this.state = 447;
                                    this.match(interviewParser.COLON);
                                }
                            }
                        }
                    }
                    this.state = 452;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (interviewParser.AMP - 23)) | (1 << (interviewParser.Greater - 23)) | (1 << (interviewParser.Less - 23)) | (1 << (interviewParser.RightAngle - 23)) | (1 << (interviewParser.RightArrow - 23)) | (1 << (interviewParser.STRING - 23)) | (1 << (interviewParser.NOTBITMARK - 23)) | (1 << (interviewParser.SENTENCE - 23)) | (1 << (interviewParser.BARSTRING - 23)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    longans() {
        let _localctx = new LongansContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, interviewParser.RULE_longans);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 454;
                this.match(interviewParser.AtLonganswer);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    shortans() {
        let _localctx = new ShortansContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, interviewParser.RULE_shortans);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 456;
                this.match(interviewParser.AtShortanswer);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    partans() {
        let _localctx = new PartansContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, interviewParser.RULE_partans);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 458;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.AtPartialAnswerS || _la === interviewParser.AtPartialAnswer)) {
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
    mark_text() {
        let _localctx = new Mark_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, interviewParser.RULE_mark_text);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 460;
                this.match(interviewParser.OPS);
                this.state = 464;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1 + 1) {
                        {
                            {
                                this.state = 461;
                                this.matchWildcard();
                            }
                        }
                    }
                    this.state = 466;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                }
                this.state = 467;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query() {
        let _localctx = new QueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, interviewParser.RULE_query);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 470;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 469;
                            this.s_and_w();
                        }
                    }
                    this.state = 472;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                this.state = 475;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.AtExamplecl) {
                    {
                        this.state = 474;
                        this.match(interviewParser.AtExamplecl);
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
    answer() {
        let _localctx = new AnswerContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, interviewParser.RULE_answer);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 478;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 477;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 480;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 488;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.OR) {
                    {
                        this.state = 482;
                        this.match(interviewParser.OR);
                        this.state = 484;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 483;
                                            this.s_and_w();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 486;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                }
                this.state = 497;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.S || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (interviewParser.AtExampleWithStr - 59)) | (1 << (interviewParser.AtExamplecol - 59)) | (1 << (interviewParser.AtExamplecl - 59)))) !== 0)) {
                    {
                        this.state = 493;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === interviewParser.S) {
                            {
                                {
                                    this.state = 490;
                                    this.match(interviewParser.S);
                                }
                            }
                            this.state = 495;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 496;
                        this.example();
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
    heading() {
        let _localctx = new HeadingContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, interviewParser.RULE_heading);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 499;
                this.key_title();
                this.state = 501;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 500;
                            this.match(interviewParser.NL);
                        }
                    }
                    this.state = 503;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === interviewParser.NL);
                this.state = 505;
                this.value_title();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    key_title() {
        let _localctx = new Key_titleContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, interviewParser.RULE_key_title);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 507;
                this.match(interviewParser.OPHASH);
                this.state = 509;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 508;
                            this.s_and_w();
                        }
                    }
                    this.state = 511;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                this.state = 513;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value_title() {
        let _localctx = new Value_titleContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, interviewParser.RULE_value_title);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 515;
                this.match(interviewParser.OPHASH);
                this.state = 517;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 516;
                            this.s_and_w();
                        }
                    }
                    this.state = 519;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                this.state = 521;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ml_example() {
        let _localctx = new Ml_exampleContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, interviewParser.RULE_ml_example);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 523;
                this.match(interviewParser.AtExamplecol);
                this.state = 531;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                    {
                        this.state = 525;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                            case 1:
                                {
                                    this.state = 524;
                                    this.match(interviewParser.NL);
                                }
                                break;
                        }
                        this.state = 527;
                        this.lines();
                        this.state = 529;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.NL) {
                            {
                                this.state = 528;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                }
                this.state = 533;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 46, interviewParser.RULE_bitElem);
        try {
            this.state = 557;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 535;
                        this.match(interviewParser.NOTBITMARK);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 536;
                        this.item();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 537;
                        this.atdef();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 538;
                        this.reference();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 539;
                        this.title();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 540;
                        this.instruction();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 541;
                        this.hint();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 542;
                        this.gap();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 543;
                        this.s_and_w();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 544;
                        this.example();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 545;
                        this.bool_label();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 546;
                        this.imagebit();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 547;
                        this.audiobit();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 548;
                        this.videobit();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 549;
                        this.articlebit();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 550;
                        this.documentbit();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 551;
                        this.appbit();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 552;
                        this.websitebit();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 553;
                        this.stillimagefilmbit();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 554;
                        this.angleref();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 555;
                        this.anchor();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 556;
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
    interview_footer() {
        let _localctx = new Interview_footerContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, interviewParser.RULE_interview_footer);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 562;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 559;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                    this.state = 564;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                }
                this.state = 565;
                this.footer_resource();
                this.state = 569;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 566;
                                this.footer_resource();
                            }
                        }
                    }
                    this.state = 571;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                }
                this.state = 575;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 572;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                    this.state = 577;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
    footer_resource() {
        let _localctx = new Footer_resourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, interviewParser.RULE_footer_resource);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 588;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.S:
                    case interviewParser.OPS:
                    case interviewParser.COLON:
                    case interviewParser.AMP:
                    case interviewParser.DBLCOLON:
                    case interviewParser.Greater:
                    case interviewParser.Less:
                    case interviewParser.RightAngle:
                    case interviewParser.RightArrow:
                    case interviewParser.DBLEQ:
                    case interviewParser.NUMERIC:
                    case interviewParser.STRING:
                    case interviewParser.NL:
                    case interviewParser.NOTBITMARK:
                    case interviewParser.SENTENCE:
                    case interviewParser.BARSTRING:
                    case interviewParser.URL:
                    case interviewParser.LIST_LINE:
                        {
                            this.state = 578;
                            this.footer_text();
                        }
                        break;
                    case interviewParser.OpAmpImage:
                    case interviewParser.OpAmpImageZoom:
                    case interviewParser.OpAmpImageWAudio:
                    case interviewParser.OpAmpImageLink:
                        {
                            this.state = 579;
                            this.imagebit();
                        }
                        break;
                    case interviewParser.OpAmpAudio:
                    case interviewParser.OpAmpAudioLink:
                    case interviewParser.OpAmpAudioEmbed:
                        {
                            this.state = 580;
                            this.audiobit();
                        }
                        break;
                    case interviewParser.OpAmpVideo:
                    case interviewParser.OpAmpVideoLink:
                    case interviewParser.OpAmpVideoEmbed:
                        {
                            this.state = 581;
                            this.videobit();
                        }
                        break;
                    case interviewParser.ArticleText:
                    case interviewParser.OpAmpArticle:
                    case interviewParser.OpAmpArticleLink:
                        {
                            this.state = 582;
                            this.articlebit();
                        }
                        break;
                    case interviewParser.OpAmpDocument:
                    case interviewParser.OpAmpDocumentLink:
                    case interviewParser.OpAmpDocumentEmbed:
                        {
                            this.state = 583;
                            this.documentbit();
                        }
                        break;
                    case interviewParser.OpAmpApp:
                    case interviewParser.OpAmpAppLink:
                        {
                            this.state = 584;
                            this.appbit();
                        }
                        break;
                    case interviewParser.OpAmpWebsite:
                    case interviewParser.OpAmpWebsiteLink:
                        {
                            this.state = 585;
                            this.websitebit();
                        }
                        break;
                    case interviewParser.AtReference:
                        {
                            this.state = 586;
                            this.reference();
                        }
                        break;
                    case interviewParser.OPQ:
                        {
                            this.state = 587;
                            this.hint();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 593;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 590;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                    this.state = 595;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
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
    footer_text() {
        let _localctx = new Footer_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, interviewParser.RULE_footer_text);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 598;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 598;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case interviewParser.LIST_LINE:
                                        {
                                            this.state = 596;
                                            this.match(interviewParser.LIST_LINE);
                                        }
                                        break;
                                    case interviewParser.S:
                                    case interviewParser.OPS:
                                    case interviewParser.COLON:
                                    case interviewParser.AMP:
                                    case interviewParser.DBLCOLON:
                                    case interviewParser.Greater:
                                    case interviewParser.Less:
                                    case interviewParser.RightAngle:
                                    case interviewParser.RightArrow:
                                    case interviewParser.DBLEQ:
                                    case interviewParser.NUMERIC:
                                    case interviewParser.STRING:
                                    case interviewParser.NL:
                                    case interviewParser.NOTBITMARK:
                                    case interviewParser.SENTENCE:
                                    case interviewParser.BARSTRING:
                                    case interviewParser.URL:
                                        {
                                            this.state = 597;
                                            this.s_and_w();
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
                    this.state = 600;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
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
    gap() {
        let _localctx = new GapContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, interviewParser.RULE_gap);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 602;
                this.single_gap();
                this.state = 610;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 608;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.OPU:
                                    {
                                        this.state = 603;
                                        this.single_gap();
                                    }
                                    break;
                                case interviewParser.OPB:
                                    {
                                        this.state = 604;
                                        this.instruction();
                                    }
                                    break;
                                case interviewParser.OPQ:
                                    {
                                        this.state = 605;
                                        this.hint();
                                    }
                                    break;
                                case interviewParser.OPC:
                                    {
                                        this.state = 606;
                                        this.item();
                                    }
                                    break;
                                case interviewParser.AtExampleWithStr:
                                case interviewParser.AtExamplecol:
                                case interviewParser.AtExamplecl:
                                    {
                                        this.state = 607;
                                        this.example();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 612;
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
    single_gap() {
        let _localctx = new Single_gapContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, interviewParser.RULE_single_gap);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 613;
                this.match(interviewParser.OPU);
                this.state = 617;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                    case 1:
                        {
                            this.state = 614;
                            this.match(interviewParser.NUMERIC);
                        }
                        break;
                    case 2:
                        {
                            this.state = 615;
                            this.match(interviewParser.STRING);
                        }
                        break;
                    case 3:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                }
                this.state = 622;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                    {
                        {
                            this.state = 619;
                            this.s_and_w();
                        }
                    }
                    this.state = 624;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 625;
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
    atpoint() {
        let _localctx = new AtpointContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, interviewParser.RULE_atpoint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 627;
                this.match(interviewParser.AtPoints);
                this.state = 628;
                this.match(interviewParser.NUMERIC);
                this.state = 629;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 60, interviewParser.RULE_format);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 634;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 631;
                                this.resource_format();
                            }
                        }
                    }
                    this.state = 636;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                }
                this.state = 642;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (interviewParser.AmpAudio - 81)) | (1 << (interviewParser.AmpImage - 81)) | (1 << (interviewParser.AmpImageZoom - 81)) | (1 << (interviewParser.AmpImageWAudio - 81)) | (1 << (interviewParser.AmpVideo - 81)) | (1 << (interviewParser.AmpArticle - 81)) | (1 << (interviewParser.AmpDocument - 81)) | (1 << (interviewParser.AmpApp - 81)) | (1 << (interviewParser.AmpWebsite - 81)) | (1 << (interviewParser.AmpStillImageFilm - 81)) | (1 << (interviewParser.AmpPdf - 81)) | (1 << (interviewParser.AmpAudioLink - 81)) | (1 << (interviewParser.AmpImageLink - 81)) | (1 << (interviewParser.AmpVideoLink - 81)) | (1 << (interviewParser.AmpArticleLink - 81)) | (1 << (interviewParser.AmpDocumentLink - 81)) | (1 << (interviewParser.AmpAppLink - 81)) | (1 << (interviewParser.AmpWebsiteLink - 81)) | (1 << (interviewParser.AmpStillImageFilmLink - 81)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (interviewParser.AmpVideoEmbed - 121)) | (1 << (interviewParser.AmpDocumentEmbed - 121)) | (1 << (interviewParser.AmpStillImageFilmEmbed - 121)) | (1 << (interviewParser.ColonText - 121)) | (1 << (interviewParser.ColonJson - 121)))) !== 0)) {
                    {
                        this.state = 640;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case interviewParser.ColonText:
                                {
                                    this.state = 637;
                                    this.match(interviewParser.ColonText);
                                }
                                break;
                            case interviewParser.ColonJson:
                                {
                                    this.state = 638;
                                    this.match(interviewParser.ColonJson);
                                }
                                break;
                            case interviewParser.AmpAudio:
                            case interviewParser.AmpImage:
                            case interviewParser.AmpImageZoom:
                            case interviewParser.AmpImageWAudio:
                            case interviewParser.AmpVideo:
                            case interviewParser.AmpArticle:
                            case interviewParser.AmpDocument:
                            case interviewParser.AmpApp:
                            case interviewParser.AmpWebsite:
                            case interviewParser.AmpStillImageFilm:
                            case interviewParser.AmpPdf:
                            case interviewParser.AmpAudioLink:
                            case interviewParser.AmpImageLink:
                            case interviewParser.AmpVideoLink:
                            case interviewParser.AmpArticleLink:
                            case interviewParser.AmpDocumentLink:
                            case interviewParser.AmpAppLink:
                            case interviewParser.AmpWebsiteLink:
                            case interviewParser.AmpStillImageFilmLink:
                            case interviewParser.AmpVideoEmbed:
                            case interviewParser.AmpDocumentEmbed:
                            case interviewParser.AmpStillImageFilmEmbed:
                                {
                                    this.state = 639;
                                    this.resource_format_extra();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 644;
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
        this.enterRule(_localctx, 62, interviewParser.RULE_resource_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 645;
                _la = this._input.LA(1);
                if (!(((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (interviewParser.AmpArticle - 86)) | (1 << (interviewParser.AmpDocument - 86)) | (1 << (interviewParser.AmpWebsite - 86)) | (1 << (interviewParser.AmpStillImageFilm - 86)) | (1 << (interviewParser.AmpAudioLink - 86)) | (1 << (interviewParser.AmpImageLink - 86)) | (1 << (interviewParser.AmpVideoLink - 86)) | (1 << (interviewParser.AmpArticleLink - 86)) | (1 << (interviewParser.AmpDocumentLink - 86)) | (1 << (interviewParser.AmpAppLink - 86)) | (1 << (interviewParser.AmpWebsiteLink - 86)) | (1 << (interviewParser.AmpStillImageFilmLink - 86)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (interviewParser.AmpVideoEmbed - 121)) | (1 << (interviewParser.AmpAudioEmbed - 121)) | (1 << (interviewParser.AmpDocumentEmbed - 121)) | (1 << (interviewParser.AmpStillImageFilmEmbed - 121)) | (1 << (interviewParser.BitmarkMinus - 121)) | (1 << (interviewParser.BitmarkPlus - 121)) | (1 << (interviewParser.ColonJson - 121)) | (1 << (interviewParser.Prosemirror - 121)) | (1 << (interviewParser.Placeholder - 121)))) !== 0))) {
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
        this.enterRule(_localctx, 64, interviewParser.RULE_resource_format_extra);
        try {
            this.state = 656;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AmpImage:
                case interviewParser.AmpImageZoom:
                case interviewParser.AmpImageWAudio:
                case interviewParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 647;
                        this.image_format();
                    }
                    break;
                case interviewParser.AmpAudio:
                case interviewParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 648;
                        this.audio_format();
                    }
                    break;
                case interviewParser.AmpVideo:
                case interviewParser.AmpVideoLink:
                case interviewParser.AmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 649;
                        this.video_format();
                    }
                    break;
                case interviewParser.AmpArticle:
                case interviewParser.AmpArticleLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 650;
                        this.article_format();
                    }
                    break;
                case interviewParser.AmpDocument:
                case interviewParser.AmpDocumentLink:
                case interviewParser.AmpDocumentEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 651;
                        this.document_format();
                    }
                    break;
                case interviewParser.AmpApp:
                case interviewParser.AmpAppLink:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 652;
                        this.app_format();
                    }
                    break;
                case interviewParser.AmpWebsite:
                case interviewParser.AmpWebsiteLink:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 653;
                        this.website_format();
                    }
                    break;
                case interviewParser.AmpStillImageFilm:
                case interviewParser.AmpStillImageFilmLink:
                case interviewParser.AmpStillImageFilmEmbed:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 654;
                        this.stillimagefilm_format();
                    }
                    break;
                case interviewParser.AmpPdf:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 655;
                        this.match(interviewParser.AmpPdf);
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
        this.enterRule(_localctx, 66, interviewParser.RULE_format2);
        try {
            this.state = 663;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.BitmarkMinus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 658;
                        this.match(interviewParser.BitmarkMinus);
                    }
                    break;
                case interviewParser.BitmarkPlus:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 659;
                        this.match(interviewParser.BitmarkPlus);
                    }
                    break;
                case interviewParser.ColonText:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 660;
                        this.match(interviewParser.ColonText);
                    }
                    break;
                case interviewParser.ColonJson:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 661;
                        this.match(interviewParser.ColonJson);
                    }
                    break;
                case interviewParser.EOF:
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
        this.enterRule(_localctx, 68, interviewParser.RULE_image_format);
        let _la;
        try {
            this.state = 679;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 665;
                        this.match(interviewParser.AmpImage);
                        this.state = 668;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case interviewParser.Image_type:
                                {
                                    {
                                        this.state = 666;
                                        this.match(interviewParser.Image_type);
                                    }
                                }
                                break;
                            case interviewParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 667;
                                        this.match(interviewParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case interviewParser.CL:
                            case interviewParser.AmpAudio:
                            case interviewParser.AmpImage:
                            case interviewParser.AmpImageZoom:
                            case interviewParser.AmpImageWAudio:
                            case interviewParser.AmpVideo:
                            case interviewParser.AmpArticle:
                            case interviewParser.AmpDocument:
                            case interviewParser.AmpApp:
                            case interviewParser.AmpWebsite:
                            case interviewParser.AmpStillImageFilm:
                            case interviewParser.AmpPdf:
                            case interviewParser.AmpAudioLink:
                            case interviewParser.AmpImageLink:
                            case interviewParser.AmpVideoLink:
                            case interviewParser.AmpArticleLink:
                            case interviewParser.AmpDocumentLink:
                            case interviewParser.AmpAppLink:
                            case interviewParser.AmpWebsiteLink:
                            case interviewParser.AmpStillImageFilmLink:
                            case interviewParser.AmpVideoEmbed:
                            case interviewParser.AmpDocumentEmbed:
                            case interviewParser.AmpStillImageFilmEmbed:
                            case interviewParser.ColonText:
                            case interviewParser.ColonJson:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case interviewParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 670;
                        this.match(interviewParser.AmpImageLink);
                        this.state = 672;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.Image_type) {
                            {
                                this.state = 671;
                                this.match(interviewParser.Image_type);
                            }
                        }
                    }
                    break;
                case interviewParser.AmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 674;
                        this.match(interviewParser.AmpImageZoom);
                        this.state = 676;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.Image_type) {
                            {
                                this.state = 675;
                                this.match(interviewParser.Image_type);
                            }
                        }
                    }
                    break;
                case interviewParser.AmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 678;
                        this.match(interviewParser.AmpImageWAudio);
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
        this.enterRule(_localctx, 70, interviewParser.RULE_video_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 681;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.AmpVideo || _la === interviewParser.AmpVideoLink || _la === interviewParser.AmpVideoEmbed)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 684;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.COLON) {
                    {
                        this.state = 682;
                        this.match(interviewParser.COLON);
                        this.state = 683;
                        this.match(interviewParser.Video_type);
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
        this.enterRule(_localctx, 72, interviewParser.RULE_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 686;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.AmpArticle || _la === interviewParser.AmpArticleLink)) {
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
        this.enterRule(_localctx, 74, interviewParser.RULE_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 688;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.AmpDocument || _la === interviewParser.AmpDocumentLink || _la === interviewParser.AmpDocumentEmbed)) {
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
        this.enterRule(_localctx, 76, interviewParser.RULE_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 690;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.AmpApp || _la === interviewParser.AmpAppLink)) {
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
        this.enterRule(_localctx, 78, interviewParser.RULE_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 692;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.AmpWebsite || _la === interviewParser.AmpWebsiteLink)) {
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
        this.enterRule(_localctx, 80, interviewParser.RULE_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 694;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.AmpStillImageFilm || _la === interviewParser.AmpStillImageFilmLink || _la === interviewParser.AmpStillImageFilmEmbed)) {
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
        this.enterRule(_localctx, 82, interviewParser.RULE_op_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 696;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.OpAmpArticle || _la === interviewParser.OpAmpArticleLink)) {
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
        this.enterRule(_localctx, 84, interviewParser.RULE_op_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 698;
                _la = this._input.LA(1);
                if (!(((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (interviewParser.OpAmpDocument - 99)) | (1 << (interviewParser.OpAmpDocumentLink - 99)) | (1 << (interviewParser.OpAmpDocumentEmbed - 99)))) !== 0))) {
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
        this.enterRule(_localctx, 86, interviewParser.RULE_op_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 700;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.OpAmpApp || _la === interviewParser.OpAmpAppLink)) {
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
        this.enterRule(_localctx, 88, interviewParser.RULE_op_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 702;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.OpAmpWebsite || _la === interviewParser.OpAmpWebsiteLink)) {
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
        this.enterRule(_localctx, 90, interviewParser.RULE_op_video_format);
        try {
            this.state = 719;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OpAmpVideo:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 704;
                        this.match(interviewParser.OpAmpVideo);
                        this.state = 707;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                            case 1:
                                {
                                    this.state = 705;
                                    this.match(interviewParser.COLON);
                                    this.state = 706;
                                    this.match(interviewParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case interviewParser.OpAmpVideoLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 709;
                        this.match(interviewParser.OpAmpVideoLink);
                        this.state = 712;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
                            case 1:
                                {
                                    this.state = 710;
                                    this.match(interviewParser.COLON);
                                    this.state = 711;
                                    this.match(interviewParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case interviewParser.OpAmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 714;
                        this.match(interviewParser.OpAmpVideoEmbed);
                        this.state = 717;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                            case 1:
                                {
                                    this.state = 715;
                                    this.match(interviewParser.COLON);
                                    this.state = 716;
                                    this.match(interviewParser.Video_type);
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
        this.enterRule(_localctx, 92, interviewParser.RULE_op_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 721;
                _la = this._input.LA(1);
                if (!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (interviewParser.OpAmpStillImageFilm - 102)) | (1 << (interviewParser.OpAmpStillImageFilmLink - 102)) | (1 << (interviewParser.OpAmpStillImageFilmEmbed - 102)))) !== 0))) {
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
        this.enterRule(_localctx, 94, interviewParser.RULE_articlebit);
        try {
            this.state = 729;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OpAmpArticle:
                case interviewParser.OpAmpArticleLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 723;
                        this.op_article_format();
                        this.state = 724;
                        this.match(interviewParser.COLON);
                        this.state = 725;
                        this.url();
                        this.state = 726;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.ArticleText:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 728;
                        this.match(interviewParser.ArticleText);
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
        this.enterRule(_localctx, 96, interviewParser.RULE_documentbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 731;
                this.op_document_format();
                this.state = 732;
                this.match(interviewParser.COLON);
                this.state = 733;
                this.url();
                this.state = 734;
                this.match(interviewParser.CL);
                this.state = 739;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.OPATALT) {
                    {
                        this.state = 735;
                        this.match(interviewParser.OPATALT);
                        this.state = 736;
                        this.words();
                        this.state = 737;
                        this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 98, interviewParser.RULE_websitebit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 741;
                this.op_website_format();
                this.state = 742;
                this.match(interviewParser.COLON);
                this.state = 743;
                this.url();
                this.state = 744;
                this.match(interviewParser.CL);
                this.state = 749;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.OPATALT) {
                    {
                        this.state = 745;
                        this.match(interviewParser.OPATALT);
                        this.state = 746;
                        this.words();
                        this.state = 747;
                        this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 100, interviewParser.RULE_appbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 751;
                this.op_app_format();
                this.state = 752;
                this.match(interviewParser.COLON);
                this.state = 755;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.URL:
                        {
                            this.state = 753;
                            this.url();
                        }
                        break;
                    case interviewParser.TEL:
                        {
                            this.state = 754;
                            this.telephone();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 757;
                this.match(interviewParser.CL);
                this.state = 762;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.OPATALT) {
                    {
                        this.state = 758;
                        this.match(interviewParser.OPATALT);
                        this.state = 759;
                        this.words();
                        this.state = 760;
                        this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 102, interviewParser.RULE_stillimagefilmbit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 764;
                this.stillimg_one();
                this.state = 768;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 765;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 770;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
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
        this.enterRule(_localctx, 104, interviewParser.RULE_stillimg_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 771;
                this.op_stillimagefilm_format();
                this.state = 772;
                this.match(interviewParser.COLON);
                this.state = 776;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === interviewParser.S) {
                    {
                        {
                            this.state = 773;
                            this.match(interviewParser.S);
                        }
                    }
                    this.state = 778;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 779;
                this.url();
                this.state = 780;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 106, interviewParser.RULE_videobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 782;
                this.video_one();
                this.state = 786;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 783;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 788;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
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
        this.enterRule(_localctx, 108, interviewParser.RULE_video_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 789;
                this.op_video_format();
                this.state = 790;
                this.match(interviewParser.COLON);
                this.state = 791;
                this.url();
                this.state = 792;
                this.match(interviewParser.CL);
                this.state = 797;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                    case 1:
                        {
                            this.state = 793;
                            this.match(interviewParser.OPATALT);
                            this.state = 794;
                            this.words();
                            this.state = 795;
                            this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 110, interviewParser.RULE_imagebit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 799;
                this.image_one();
                this.state = 803;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 800;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 805;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                }
                this.state = 808;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                    case 1:
                        {
                            this.state = 806;
                            this.match(interviewParser.NL);
                            this.state = 807;
                            this.match(interviewParser.ShowInIndex);
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
        this.enterRule(_localctx, 112, interviewParser.RULE_image_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 810;
                this.op_image_format();
                this.state = 811;
                this.match(interviewParser.COLON);
                this.state = 815;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === interviewParser.S) {
                    {
                        {
                            this.state = 812;
                            this.match(interviewParser.S);
                        }
                    }
                    this.state = 817;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 818;
                this.url();
                this.state = 819;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 114, interviewParser.RULE_op_image_format);
        let _la;
        try {
            this.state = 835;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OpAmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 821;
                        this.match(interviewParser.OpAmpImage);
                        this.state = 824;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case interviewParser.Image_type:
                                {
                                    {
                                        this.state = 822;
                                        this.match(interviewParser.Image_type);
                                    }
                                }
                                break;
                            case interviewParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 823;
                                        this.match(interviewParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case interviewParser.COLON:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case interviewParser.OpAmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 826;
                        this.match(interviewParser.OpAmpImageLink);
                        this.state = 828;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.Image_type) {
                            {
                                this.state = 827;
                                this.match(interviewParser.Image_type);
                            }
                        }
                    }
                    break;
                case interviewParser.OpAmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 830;
                        this.match(interviewParser.OpAmpImageZoom);
                        this.state = 832;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.Image_type) {
                            {
                                this.state = 831;
                                this.match(interviewParser.Image_type);
                            }
                        }
                    }
                    break;
                case interviewParser.OpAmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 834;
                        this.match(interviewParser.OpAmpImageWAudio);
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
        this.enterRule(_localctx, 116, interviewParser.RULE_image_chained);
        let _la;
        try {
            let _alt;
            this.state = 854;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 837;
                        this.match(interviewParser.AtSrc);
                        this.state = 838;
                        this.match(interviewParser.COLON);
                        this.state = 839;
                        this.url();
                        this.state = 840;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.AtWidth:
                case interviewParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 842;
                        _la = this._input.LA(1);
                        if (!(_la === interviewParser.AtWidth || _la === interviewParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 843;
                        this.match(interviewParser.COLON);
                        this.state = 844;
                        this.match(interviewParser.NUMERIC);
                        this.state = 845;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.OPATALT:
                case interviewParser.OpAtCaption:
                case interviewParser.OpAtLicense:
                case interviewParser.OpAtCopyright:
                case interviewParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 846;
                        _la = this._input.LA(1);
                        if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (interviewParser.OPATALT - 69)) | (1 << (interviewParser.OpAtCaption - 69)) | (1 << (interviewParser.OpAtLicense - 69)) | (1 << (interviewParser.OpAtCopyright - 69)) | (1 << (interviewParser.OpAtSearch - 69)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 850;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 847;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 852;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                        }
                        this.state = 853;
                        this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 118, interviewParser.RULE_image_chained4match);
        let _la;
        try {
            let _alt;
            this.state = 873;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 856;
                        this.match(interviewParser.AtSrc);
                        this.state = 857;
                        this.match(interviewParser.COLON);
                        this.state = 858;
                        this.url();
                        this.state = 859;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.AtWidth:
                case interviewParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 861;
                        _la = this._input.LA(1);
                        if (!(_la === interviewParser.AtWidth || _la === interviewParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 862;
                        this.match(interviewParser.COLON);
                        this.state = 863;
                        this.match(interviewParser.NUMERIC);
                        this.state = 864;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.OPATALT:
                case interviewParser.OpAtCaption:
                case interviewParser.OpAtLicense:
                case interviewParser.OpAtCopyright:
                case interviewParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 865;
                        _la = this._input.LA(1);
                        if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (interviewParser.OPATALT - 69)) | (1 << (interviewParser.OpAtCaption - 69)) | (1 << (interviewParser.OpAtLicense - 69)) | (1 << (interviewParser.OpAtCopyright - 69)) | (1 << (interviewParser.OpAtSearch - 69)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 869;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 866;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 871;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                        }
                        this.state = 872;
                        this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 120, interviewParser.RULE_audiobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 875;
                this.audio_one();
                this.state = 879;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 876;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 881;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
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
        this.enterRule(_localctx, 122, interviewParser.RULE_audio_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 882;
                this.op_audio_format();
                this.state = 883;
                this.match(interviewParser.COLON);
                this.state = 884;
                this.url();
                this.state = 885;
                this.match(interviewParser.CL);
                this.state = 890;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                    case 1:
                        {
                            this.state = 886;
                            this.match(interviewParser.OPATALT);
                            this.state = 887;
                            this.words();
                            this.state = 888;
                            this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 124, interviewParser.RULE_audio_format);
        let _la;
        try {
            this.state = 902;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 892;
                        this.match(interviewParser.AmpAudio);
                        this.state = 895;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.COLON) {
                            {
                                this.state = 893;
                                this.match(interviewParser.COLON);
                                this.state = 894;
                                this.match(interviewParser.Audio_type);
                            }
                        }
                    }
                    break;
                case interviewParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 897;
                        this.match(interviewParser.AmpAudioLink);
                        this.state = 900;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.COLON) {
                            {
                                this.state = 898;
                                this.match(interviewParser.COLON);
                                this.state = 899;
                                this.match(interviewParser.Audio_type);
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
        this.enterRule(_localctx, 126, interviewParser.RULE_op_audio_format);
        try {
            this.state = 919;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OpAmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 904;
                        this.match(interviewParser.OpAmpAudio);
                        this.state = 907;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                            case 1:
                                {
                                    this.state = 905;
                                    this.match(interviewParser.COLON);
                                    this.state = 906;
                                    this.match(interviewParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case interviewParser.OpAmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 909;
                        this.match(interviewParser.OpAmpAudioLink);
                        this.state = 912;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
                            case 1:
                                {
                                    this.state = 910;
                                    this.match(interviewParser.COLON);
                                    this.state = 911;
                                    this.match(interviewParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case interviewParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 914;
                        this.match(interviewParser.OpAmpAudioEmbed);
                        this.state = 917;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                            case 1:
                                {
                                    this.state = 915;
                                    this.match(interviewParser.COLON);
                                    this.state = 916;
                                    this.match(interviewParser.Audio_type);
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
        this.enterRule(_localctx, 128, interviewParser.RULE_resource_chained);
        let _la;
        try {
            let _alt;
            this.state = 952;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OPA:
                case interviewParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 924;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case interviewParser.OPA:
                                {
                                    this.state = 921;
                                    this.match(interviewParser.OPA);
                                    this.state = 922;
                                    this.s_and_w();
                                }
                                break;
                            case interviewParser.AtSrc:
                                {
                                    this.state = 923;
                                    this.match(interviewParser.AtSrc);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 926;
                        this.match(interviewParser.COLON);
                        this.state = 930;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 927;
                                        this.match(interviewParser.S);
                                    }
                                }
                            }
                            this.state = 932;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
                        }
                        this.state = 935;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 935;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 933;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 934;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 937;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                        this.state = 939;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.AtWidth:
                case interviewParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 940;
                        _la = this._input.LA(1);
                        if (!(_la === interviewParser.AtWidth || _la === interviewParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 941;
                        this.match(interviewParser.COLON);
                        this.state = 942;
                        this.match(interviewParser.NUMERIC);
                        this.state = 943;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.OPATALT:
                case interviewParser.OpAtCaption:
                case interviewParser.OpAtLicense:
                case interviewParser.OpAtCopyright:
                case interviewParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 944;
                        _la = this._input.LA(1);
                        if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (interviewParser.OPATALT - 69)) | (1 << (interviewParser.OpAtCaption - 69)) | (1 << (interviewParser.OpAtLicense - 69)) | (1 << (interviewParser.OpAtCopyright - 69)) | (1 << (interviewParser.OpAtSearch - 69)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 948;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 945;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 950;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
                        }
                        this.state = 951;
                        this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 130, interviewParser.RULE_telephone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 954;
                this.match(interviewParser.TEL);
                this.state = 955;
                this.match(interviewParser.PLUS);
                this.state = 956;
                this.match(interviewParser.NUMERIC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 132, interviewParser.RULE_url);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 958;
                this.match(interviewParser.URL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 134, interviewParser.RULE_item);
        let _la;
        try {
            this.state = 990;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 960;
                        this.match(interviewParser.OPC);
                        this.state = 961;
                        this.match(interviewParser.CL);
                        this.state = 969;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                            case 1:
                                {
                                    this.state = 965;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.S) {
                                        {
                                            {
                                                this.state = 962;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 967;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 968;
                                    this.lead();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 971;
                        this.match(interviewParser.OPC);
                        this.state = 972;
                        this.s_and_w();
                        this.state = 977;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (interviewParser.COLON - 22)) | (1 << (interviewParser.AMP - 22)) | (1 << (interviewParser.Greater - 22)) | (1 << (interviewParser.Less - 22)) | (1 << (interviewParser.RightAngle - 22)) | (1 << (interviewParser.RightArrow - 22)) | (1 << (interviewParser.STRING - 22)) | (1 << (interviewParser.NOTBITMARK - 22)) | (1 << (interviewParser.SENTENCE - 22)) | (1 << (interviewParser.BARSTRING - 22)))) !== 0)) {
                            {
                                this.state = 975;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case interviewParser.COLON:
                                        {
                                            this.state = 973;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case interviewParser.AMP:
                                    case interviewParser.Greater:
                                    case interviewParser.Less:
                                    case interviewParser.RightAngle:
                                    case interviewParser.RightArrow:
                                    case interviewParser.STRING:
                                    case interviewParser.NOTBITMARK:
                                    case interviewParser.SENTENCE:
                                    case interviewParser.BARSTRING:
                                        {
                                            this.state = 974;
                                            this.words();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 979;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 980;
                        this.match(interviewParser.CL);
                        this.state = 988;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                            case 1:
                                {
                                    this.state = 984;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.S) {
                                        {
                                            {
                                                this.state = 981;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 986;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 987;
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
        this.enterRule(_localctx, 136, interviewParser.RULE_lead);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 992;
                this.match(interviewParser.OPC);
                this.state = 993;
                this.s_and_w();
                this.state = 998;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (interviewParser.COLON - 22)) | (1 << (interviewParser.AMP - 22)) | (1 << (interviewParser.Greater - 22)) | (1 << (interviewParser.Less - 22)) | (1 << (interviewParser.RightAngle - 22)) | (1 << (interviewParser.RightArrow - 22)) | (1 << (interviewParser.STRING - 22)) | (1 << (interviewParser.NOTBITMARK - 22)) | (1 << (interviewParser.SENTENCE - 22)) | (1 << (interviewParser.BARSTRING - 22)))) !== 0)) {
                    {
                        this.state = 996;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case interviewParser.COLON:
                                {
                                    this.state = 994;
                                    this.match(interviewParser.COLON);
                                }
                                break;
                            case interviewParser.AMP:
                            case interviewParser.Greater:
                            case interviewParser.Less:
                            case interviewParser.RightAngle:
                            case interviewParser.RightArrow:
                            case interviewParser.STRING:
                            case interviewParser.NOTBITMARK:
                            case interviewParser.SENTENCE:
                            case interviewParser.BARSTRING:
                                {
                                    this.state = 995;
                                    this.words();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 1000;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1001;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 138, interviewParser.RULE_angleref);
        let _la;
        try {
            this.state = 1013;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OPRANGLES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1003;
                        this.match(interviewParser.OPRANGLES);
                        this.state = 1005;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1004;
                                this.s_and_w();
                            }
                        }
                        this.state = 1007;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.OPRANGLEL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1008;
                        this.match(interviewParser.OPRANGLEL);
                        this.state = 1010;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1009;
                                this.s_and_w();
                            }
                        }
                        this.state = 1012;
                        this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 140, interviewParser.RULE_example);
        let _la;
        try {
            this.state = 1022;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AtExamplecl:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1015;
                        this.match(interviewParser.AtExamplecl);
                    }
                    break;
                case interviewParser.AtExampleWithStr:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1016;
                        this.match(interviewParser.AtExampleWithStr);
                    }
                    break;
                case interviewParser.AtExamplecol:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1017;
                        this.match(interviewParser.AtExamplecol);
                        this.state = 1019;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.SENTENCE) {
                            {
                                this.state = 1018;
                                this.match(interviewParser.SENTENCE);
                            }
                        }
                        this.state = 1021;
                        this.match(interviewParser.EOF);
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
        this.enterRule(_localctx, 142, interviewParser.RULE_bracketed_text);
        let _la;
        try {
            let _alt;
            this.state = 1063;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1024;
                        this.match(interviewParser.BracEnclose);
                        this.state = 1026;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1025;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1049;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                {
                                    this.state = 1028;
                                    this.s_and_w();
                                    this.state = 1038;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1029;
                                                    this.match(interviewParser.NL);
                                                    this.state = 1033;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1030;
                                                                    this.match(interviewParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1035;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 1040;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                                    }
                                    this.state = 1044;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1041;
                                                    this.match(interviewParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1046;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                                    }
                                }
                            }
                            this.state = 1051;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1052;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1053;
                        this.match(interviewParser.BracEnclose);
                        this.state = 1059;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1057;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1054;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1055;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1056;
                                            this.match(interviewParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1061;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1062;
                        this.match(interviewParser.EOF);
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
        this.enterRule(_localctx, 144, interviewParser.RULE_reference);
        let _la;
        try {
            this.state = 1087;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1065;
                        this.match(interviewParser.AtReference);
                        this.state = 1070;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1070;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1066;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1067;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1068;
                                            this.match(interviewParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1069;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1072;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                        this.state = 1074;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1075;
                        this.match(interviewParser.AtReference);
                        this.state = 1083;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1081;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1076;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1077;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1078;
                                            this.match(interviewParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1079;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 1080;
                                            this.match(interviewParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1085;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1086;
                        this.match(interviewParser.EOF);
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
        this.enterRule(_localctx, 146, interviewParser.RULE_progress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1089;
                this.match(interviewParser.AtProgress);
                this.state = 1090;
                this.s_and_w();
                this.state = 1091;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 148, interviewParser.RULE_dateprop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1093;
                this.match(interviewParser.AtDate);
                this.state = 1097;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1097;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1094;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1095;
                                    this.match(interviewParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1096;
                                    this.match(interviewParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1099;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                this.state = 1101;
                this.match(interviewParser.CL);
                this.state = 1103;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.AtDate) {
                    {
                        this.state = 1102;
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
        this.enterRule(_localctx, 150, interviewParser.RULE_dateprop_chained);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1105;
                this.match(interviewParser.AtDate);
                this.state = 1109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1109;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1106;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1107;
                                    this.match(interviewParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1108;
                                    this.match(interviewParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1111;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                this.state = 1113;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 152, interviewParser.RULE_instruction);
        let _la;
        try {
            let _alt;
            this.state = 1161;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1115;
                        this.match(interviewParser.OPB);
                        this.state = 1119;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1116;
                                        this.match(interviewParser.NL);
                                    }
                                }
                            }
                            this.state = 1121;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                        }
                        this.state = 1123;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1122;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1146;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                {
                                    this.state = 1125;
                                    this.s_and_w();
                                    this.state = 1135;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1126;
                                                    this.match(interviewParser.NL);
                                                    this.state = 1130;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1127;
                                                                    this.match(interviewParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1132;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 1137;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                                    }
                                    this.state = 1141;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1138;
                                                    this.match(interviewParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1143;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
                                    }
                                }
                            }
                            this.state = 1148;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1149;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1150;
                        this.match(interviewParser.OPB);
                        this.state = 1154;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1151;
                                        this.match(interviewParser.NL);
                                    }
                                }
                            }
                            this.state = 1156;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                        }
                        this.state = 1158;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1157;
                                this.s_and_w();
                            }
                        }
                        this.state = 1160;
                        this.match(interviewParser.EOF);
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
        this.enterRule(_localctx, 154, interviewParser.RULE_hint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1163;
                this.match(interviewParser.OPQ);
                this.state = 1165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1164;
                            _la = this._input.LA(1);
                            if (_la <= 0 || (_la === interviewParser.CL)) {
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
                    this.state = 1167;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.OPDOT) | (1 << interviewParser.S) | (1 << interviewParser.BitInterview) | (1 << interviewParser.BitInterviewinstgrp) | (1 << interviewParser.OPDOLL) | (1 << interviewParser.OPBUL) | (1 << interviewParser.OPESC) | (1 << interviewParser.OPRANGLES) | (1 << interviewParser.OPRANGLEL) | (1 << interviewParser.OPDANGLE) | (1 << interviewParser.OPU) | (1 << interviewParser.OPB) | (1 << interviewParser.OPQ) | (1 << interviewParser.OPA) | (1 << interviewParser.OPP) | (1 << interviewParser.OPM) | (1 << interviewParser.OPS) | (1 << interviewParser.OPR) | (1 << interviewParser.OPC) | (1 << interviewParser.OPHASH) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.PLUS) | (1 << interviewParser.DotAt) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.OR - 32)) | (1 << (interviewParser.HSPL - 32)) | (1 << (interviewParser.HSPL2 - 32)) | (1 << (interviewParser.SSPL - 32)) | (1 << (interviewParser.SSPL2 - 32)) | (1 << (interviewParser.BULLET - 32)) | (1 << (interviewParser.COMMENT - 32)) | (1 << (interviewParser.DCANY - 32)) | (1 << (interviewParser.Image_type - 32)) | (1 << (interviewParser.Audio_type - 32)) | (1 << (interviewParser.Video_type - 32)) | (1 << (interviewParser.ArticleText - 32)) | (1 << (interviewParser.NOTCL - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)) | (1 << (interviewParser.OPAT - 32)) | (1 << (interviewParser.AtProgress - 32)) | (1 << (interviewParser.AtReference - 32)) | (1 << (interviewParser.AtWidth - 32)) | (1 << (interviewParser.AtHeight - 32)) | (1 << (interviewParser.AtProgressPoints - 32)) | (1 << (interviewParser.AtShortanswer - 32)) | (1 << (interviewParser.AtLonganswer - 32)) | (1 << (interviewParser.AtExampleWithStr - 32)) | (1 << (interviewParser.AtExamplecol - 32)) | (1 << (interviewParser.AtExamplecl - 32)) | (1 << (interviewParser.AtPartialAnswerS - 32)) | (1 << (interviewParser.AtPartialAnswer - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (interviewParser.AtLabeltrue - 64)) | (1 << (interviewParser.AtLabelfalse - 64)) | (1 << (interviewParser.AtPoints - 64)) | (1 << (interviewParser.AtSrc - 64)) | (1 << (interviewParser.AtPartner - 64)) | (1 << (interviewParser.OPATALT - 64)) | (1 << (interviewParser.OPAMARK - 64)) | (1 << (interviewParser.ShowInIndex - 64)) | (1 << (interviewParser.OpAtCaption - 64)) | (1 << (interviewParser.OpAtLicense - 64)) | (1 << (interviewParser.OpAtCopyright - 64)) | (1 << (interviewParser.OpAtSearch - 64)) | (1 << (interviewParser.OpAtIsTracked - 64)) | (1 << (interviewParser.OpAtIsInfoOnly - 64)) | (1 << (interviewParser.AtDate - 64)) | (1 << (interviewParser.Http - 64)) | (1 << (interviewParser.Https - 64)) | (1 << (interviewParser.AmpAudio - 64)) | (1 << (interviewParser.AmpImage - 64)) | (1 << (interviewParser.AmpImageZoom - 64)) | (1 << (interviewParser.AmpImageWAudio - 64)) | (1 << (interviewParser.AmpVideo - 64)) | (1 << (interviewParser.AmpArticle - 64)) | (1 << (interviewParser.AmpDocument - 64)) | (1 << (interviewParser.AmpApp - 64)) | (1 << (interviewParser.AmpWebsite - 64)) | (1 << (interviewParser.AmpStillImageFilm - 64)) | (1 << (interviewParser.AmpPdf - 64)) | (1 << (interviewParser.OpAmpAudio - 64)) | (1 << (interviewParser.OpAmpImage - 64)) | (1 << (interviewParser.OpAmpImageZoom - 64)) | (1 << (interviewParser.OpAmpImageWAudio - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (interviewParser.OpAmpVideo - 96)) | (1 << (interviewParser.OpAmpArticle - 96)) | (1 << (interviewParser.OpAmpArticleAtt - 96)) | (1 << (interviewParser.OpAmpDocument - 96)) | (1 << (interviewParser.OpAmpApp - 96)) | (1 << (interviewParser.OpAmpWebsite - 96)) | (1 << (interviewParser.OpAmpStillImageFilm - 96)) | (1 << (interviewParser.BracEnclose - 96)) | (1 << (interviewParser.AmpAudioLink - 96)) | (1 << (interviewParser.AmpImageLink - 96)) | (1 << (interviewParser.AmpVideoLink - 96)) | (1 << (interviewParser.AmpArticleLink - 96)) | (1 << (interviewParser.AmpDocumentLink - 96)) | (1 << (interviewParser.AmpAppLink - 96)) | (1 << (interviewParser.AmpWebsiteLink - 96)) | (1 << (interviewParser.AmpStillImageFilmLink - 96)) | (1 << (interviewParser.OpAmpAudioLink - 96)) | (1 << (interviewParser.OpAmpImageLink - 96)) | (1 << (interviewParser.OpAmpVideoLink - 96)) | (1 << (interviewParser.OpAmpArticleLink - 96)) | (1 << (interviewParser.OpAmpDocumentLink - 96)) | (1 << (interviewParser.OpAmpAppLink - 96)) | (1 << (interviewParser.OpAmpWebsiteLink - 96)) | (1 << (interviewParser.OpAmpStillImageFilmLink - 96)) | (1 << (interviewParser.AmpImageEmbed - 96)) | (1 << (interviewParser.AmpVideoEmbed - 96)) | (1 << (interviewParser.AmpAudioEmbed - 96)) | (1 << (interviewParser.AmpDocumentEmbed - 96)) | (1 << (interviewParser.AmpStillImageFilmEmbed - 96)) | (1 << (interviewParser.OpAmpImageEmbed - 96)) | (1 << (interviewParser.OpAmpVideoEmbed - 96)) | (1 << (interviewParser.OpAmpAudioEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (interviewParser.OpAmpDocumentEmbed - 128)) | (1 << (interviewParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (interviewParser.BitmarkMinus - 128)) | (1 << (interviewParser.BitmarkPlus - 128)) | (1 << (interviewParser.ColonText - 128)) | (1 << (interviewParser.ColonJson - 128)) | (1 << (interviewParser.Prosemirror - 128)) | (1 << (interviewParser.Placeholder - 128)) | (1 << (interviewParser.BASIC - 128)) | (1 << (interviewParser.JPG - 128)) | (1 << (interviewParser.PNG - 128)) | (1 << (interviewParser.GIF - 128)) | (1 << (interviewParser.SVG - 128)) | (1 << (interviewParser.MP2 - 128)) | (1 << (interviewParser.MP3 - 128)) | (1 << (interviewParser.MP4 - 128)) | (1 << (interviewParser.FLV - 128)) | (1 << (interviewParser.WMV - 128)) | (1 << (interviewParser.MPEG - 128)) | (1 << (interviewParser.MPG - 128)) | (1 << (interviewParser.TEL - 128)) | (1 << (interviewParser.DotArticleAtt - 128)) | (1 << (interviewParser.STAR - 128)) | (1 << (interviewParser.URL - 128)) | (1 << (interviewParser.LIST_LINE - 128)) | (1 << (interviewParser.ENCLBARS - 128)))) !== 0));
                this.state = 1169;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 156, interviewParser.RULE_title);
        let _la;
        try {
            this.state = 1183;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1171;
                        this.match(interviewParser.OPHASH);
                        this.state = 1174;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1174;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1172;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1173;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1176;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                        this.state = 1178;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1179;
                        this.match(interviewParser.OPHASH);
                        this.state = 1180;
                        this.s_and_w();
                        this.state = 1181;
                        this.match(interviewParser.EOF);
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
        this.enterRule(_localctx, 158, interviewParser.RULE_bool_label);
        try {
            this.state = 1193;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AtLabeltrue:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1185;
                        this.match(interviewParser.AtLabeltrue);
                        this.state = 1186;
                        this.s_and_w();
                        this.state = 1187;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.AtLabelfalse:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1189;
                        this.match(interviewParser.AtLabelfalse);
                        this.state = 1190;
                        this.s_and_w();
                        this.state = 1191;
                        this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 160, interviewParser.RULE_progress_points);
        try {
            this.state = 1204;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1195;
                        this.match(interviewParser.AtProgressPoints);
                        this.state = 1196;
                        this.match(interviewParser.COLON);
                        this.state = 1197;
                        this.match(interviewParser.NUMERIC);
                        this.state = 1198;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1199;
                        this.match(interviewParser.AtProgressPoints);
                        this.state = 1200;
                        this.match(interviewParser.COLON);
                        this.state = 1201;
                        this.s_and_w();
                        this.state = 1202;
                        this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 162, interviewParser.RULE_istracked);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1206;
                this.match(interviewParser.OpAtIsTracked);
                this.state = 1207;
                this.s_and_w();
                this.state = 1208;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 164, interviewParser.RULE_isinfoonly);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1210;
                this.match(interviewParser.OpAtIsInfoOnly);
                this.state = 1211;
                this.s_and_w();
                this.state = 1212;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 166, interviewParser.RULE_atdef);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1214;
                this.atdef_();
                this.state = 1224;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1218;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === interviewParser.NL) {
                                    {
                                        {
                                            this.state = 1215;
                                            this.match(interviewParser.NL);
                                        }
                                    }
                                    this.state = 1220;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1221;
                                this.atdef_();
                            }
                        }
                    }
                    this.state = 1226;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
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
        this.enterRule(_localctx, 168, interviewParser.RULE_atdef_);
        let _la;
        try {
            let _alt;
            this.state = 1249;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OPA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1227;
                        this.match(interviewParser.OPA);
                        this.state = 1228;
                        this.s_and_w();
                        this.state = 1229;
                        _la = this._input.LA(1);
                        if (!(_la === interviewParser.COLON || _la === interviewParser.DBLCOLON)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1230;
                        this.s_and_w();
                        this.state = 1236;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1234;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1231;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1232;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1233;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 1238;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1239;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1241;
                        this.match(interviewParser.OpAtCopyright);
                        this.state = 1245;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1242;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1247;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
                        }
                        this.state = 1248;
                        this.match(interviewParser.CL);
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
        this.enterRule(_localctx, 170, interviewParser.RULE_dollarans);
        let _la;
        try {
            this.state = 1270;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1251;
                        this.match(interviewParser.OPDOLL);
                        this.state = 1255;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1255;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 177, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1252;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1253;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1254;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1257;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                        this.state = 1259;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1260;
                        this.match(interviewParser.OPDOLL);
                        this.state = 1266;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1264;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1261;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1262;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1263;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1268;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1269;
                        this.match(interviewParser.EOF);
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
        this.enterRule(_localctx, 172, interviewParser.RULE_anchor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1272;
                this.match(interviewParser.OPDANGLE);
                this.state = 1274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                    {
                        this.state = 1273;
                        this.s_and_w();
                    }
                }
                this.state = 1276;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 174, interviewParser.RULE_dcolon);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1278;
                this.match(interviewParser.DBLCOLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 176, interviewParser.RULE_lines);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1284;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1280;
                                    this.s_and_w();
                                    this.state = 1282;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1281;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                    }
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1286;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
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
    s_and_w() {
        let _localctx = new S_and_wContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, interviewParser.RULE_s_and_w);
        let _la;
        try {
            let _alt;
            this.state = 1335;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1288;
                        this.match(interviewParser.STRING);
                        this.state = 1295;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1290;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1289;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 1292;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === interviewParser.S);
                                    this.state = 1294;
                                    this.match(interviewParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1297;
                        this.words();
                        this.state = 1304;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 188, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1299;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1298;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 1301;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === interviewParser.S);
                                    this.state = 1303;
                                    this.match(interviewParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1306;
                        this.match(interviewParser.NUMERIC);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1307;
                        this.match(interviewParser.OPS);
                        this.state = 1308;
                        this.s_and_w();
                        this.state = 1309;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1311;
                        this.match(interviewParser.NL);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1315;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === interviewParser.S) {
                            {
                                {
                                    this.state = 1312;
                                    this.match(interviewParser.S);
                                }
                            }
                            this.state = 1317;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1318;
                        this.match(interviewParser.COLON);
                        this.state = 1322;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1319;
                                        this.match(interviewParser.S);
                                    }
                                }
                            }
                            this.state = 1324;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1325;
                        this.match(interviewParser.AMP);
                        this.state = 1329;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1326;
                                        this.match(interviewParser.S);
                                    }
                                }
                            }
                            this.state = 1331;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
                        }
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1332;
                        this.match(interviewParser.DBLCOLON);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1333;
                        this.match(interviewParser.DBLEQ);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1334;
                        this.match(interviewParser.URL);
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
        this.enterRule(_localctx, 180, interviewParser.RULE_clnsp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1337;
                this.match(interviewParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 182, interviewParser.RULE_sspl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1339;
                _la = this._input.LA(1);
                if (!(_la === interviewParser.SSPL || _la === interviewParser.SSPL2)) {
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
        this.enterRule(_localctx, 184, interviewParser.RULE_words);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1352;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1352;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case interviewParser.STRING:
                                        {
                                            this.state = 1341;
                                            this.match(interviewParser.STRING);
                                        }
                                        break;
                                    case interviewParser.SENTENCE:
                                        {
                                            this.state = 1342;
                                            this.match(interviewParser.SENTENCE);
                                        }
                                        break;
                                    case interviewParser.NOTBITMARK:
                                        {
                                            this.state = 1343;
                                            this.match(interviewParser.NOTBITMARK);
                                        }
                                        break;
                                    case interviewParser.BARSTRING:
                                        {
                                            this.state = 1344;
                                            this.match(interviewParser.BARSTRING);
                                        }
                                        break;
                                    case interviewParser.AMP:
                                        {
                                            this.state = 1345;
                                            this.match(interviewParser.AMP);
                                        }
                                        break;
                                    case interviewParser.Greater:
                                        {
                                            this.state = 1346;
                                            this.match(interviewParser.Greater);
                                            this.state = 1347;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === interviewParser.Greater)) {
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
                                    case interviewParser.Less:
                                        {
                                            this.state = 1348;
                                            this.match(interviewParser.Less);
                                            this.state = 1349;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === interviewParser.Less)) {
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
                                    case interviewParser.RightArrow:
                                        {
                                            this.state = 1350;
                                            this.match(interviewParser.RightArrow);
                                        }
                                        break;
                                    case interviewParser.RightAngle:
                                        {
                                            this.state = 1351;
                                            this.match(interviewParser.RightAngle);
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
                    this.state = 1354;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
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
        this.enterRule(_localctx, 186, interviewParser.RULE_sp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1356;
                this.match(interviewParser.S);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
        if (!interviewParser.__ATN) {
            interviewParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(interviewParser._serializedATN));
        }
        return interviewParser.__ATN;
    }
}
exports.interviewParser = interviewParser;
interviewParser.OPDOT = 1;
interviewParser.S = 2;
interviewParser.BitInterview = 3;
interviewParser.BitInterviewinstgrp = 4;
interviewParser.OPDOLL = 5;
interviewParser.OPBUL = 6;
interviewParser.OPESC = 7;
interviewParser.OPRANGLES = 8;
interviewParser.OPRANGLEL = 9;
interviewParser.OPDANGLE = 10;
interviewParser.OPU = 11;
interviewParser.OPB = 12;
interviewParser.OPQ = 13;
interviewParser.OPA = 14;
interviewParser.OPP = 15;
interviewParser.OPM = 16;
interviewParser.OPS = 17;
interviewParser.OPR = 18;
interviewParser.OPC = 19;
interviewParser.OPHASH = 20;
interviewParser.CL = 21;
interviewParser.COLON = 22;
interviewParser.AMP = 23;
interviewParser.DBLCOLON = 24;
interviewParser.PLUS = 25;
interviewParser.DotAt = 26;
interviewParser.Greater = 27;
interviewParser.Less = 28;
interviewParser.RightAngle = 29;
interviewParser.RightArrow = 30;
interviewParser.DBLEQ = 31;
interviewParser.OR = 32;
interviewParser.HSPL = 33;
interviewParser.HSPL2 = 34;
interviewParser.SSPL = 35;
interviewParser.SSPL2 = 36;
interviewParser.BULLET = 37;
interviewParser.COMMENT = 38;
interviewParser.DCANY = 39;
interviewParser.Image_type = 40;
interviewParser.Audio_type = 41;
interviewParser.Video_type = 42;
interviewParser.ArticleText = 43;
interviewParser.NOTCL = 44;
interviewParser.NUMERIC = 45;
interviewParser.STRING = 46;
interviewParser.NL = 47;
interviewParser.NOTBITMARK = 48;
interviewParser.SENTENCE = 49;
interviewParser.BARSTRING = 50;
interviewParser.OPAT = 51;
interviewParser.AtProgress = 52;
interviewParser.AtReference = 53;
interviewParser.AtWidth = 54;
interviewParser.AtHeight = 55;
interviewParser.AtProgressPoints = 56;
interviewParser.AtShortanswer = 57;
interviewParser.AtLonganswer = 58;
interviewParser.AtExampleWithStr = 59;
interviewParser.AtExamplecol = 60;
interviewParser.AtExamplecl = 61;
interviewParser.AtPartialAnswerS = 62;
interviewParser.AtPartialAnswer = 63;
interviewParser.AtLabeltrue = 64;
interviewParser.AtLabelfalse = 65;
interviewParser.AtPoints = 66;
interviewParser.AtSrc = 67;
interviewParser.AtPartner = 68;
interviewParser.OPATALT = 69;
interviewParser.OPAMARK = 70;
interviewParser.ShowInIndex = 71;
interviewParser.OpAtCaption = 72;
interviewParser.OpAtLicense = 73;
interviewParser.OpAtCopyright = 74;
interviewParser.OpAtSearch = 75;
interviewParser.OpAtIsTracked = 76;
interviewParser.OpAtIsInfoOnly = 77;
interviewParser.AtDate = 78;
interviewParser.Http = 79;
interviewParser.Https = 80;
interviewParser.AmpAudio = 81;
interviewParser.AmpImage = 82;
interviewParser.AmpImageZoom = 83;
interviewParser.AmpImageWAudio = 84;
interviewParser.AmpVideo = 85;
interviewParser.AmpArticle = 86;
interviewParser.AmpDocument = 87;
interviewParser.AmpApp = 88;
interviewParser.AmpWebsite = 89;
interviewParser.AmpStillImageFilm = 90;
interviewParser.AmpPdf = 91;
interviewParser.OpAmpAudio = 92;
interviewParser.OpAmpImage = 93;
interviewParser.OpAmpImageZoom = 94;
interviewParser.OpAmpImageWAudio = 95;
interviewParser.OpAmpVideo = 96;
interviewParser.OpAmpArticle = 97;
interviewParser.OpAmpArticleAtt = 98;
interviewParser.OpAmpDocument = 99;
interviewParser.OpAmpApp = 100;
interviewParser.OpAmpWebsite = 101;
interviewParser.OpAmpStillImageFilm = 102;
interviewParser.BracEnclose = 103;
interviewParser.AmpAudioLink = 104;
interviewParser.AmpImageLink = 105;
interviewParser.AmpVideoLink = 106;
interviewParser.AmpArticleLink = 107;
interviewParser.AmpDocumentLink = 108;
interviewParser.AmpAppLink = 109;
interviewParser.AmpWebsiteLink = 110;
interviewParser.AmpStillImageFilmLink = 111;
interviewParser.OpAmpAudioLink = 112;
interviewParser.OpAmpImageLink = 113;
interviewParser.OpAmpVideoLink = 114;
interviewParser.OpAmpArticleLink = 115;
interviewParser.OpAmpDocumentLink = 116;
interviewParser.OpAmpAppLink = 117;
interviewParser.OpAmpWebsiteLink = 118;
interviewParser.OpAmpStillImageFilmLink = 119;
interviewParser.AmpImageEmbed = 120;
interviewParser.AmpVideoEmbed = 121;
interviewParser.AmpAudioEmbed = 122;
interviewParser.AmpDocumentEmbed = 123;
interviewParser.AmpStillImageFilmEmbed = 124;
interviewParser.OpAmpImageEmbed = 125;
interviewParser.OpAmpVideoEmbed = 126;
interviewParser.OpAmpAudioEmbed = 127;
interviewParser.OpAmpDocumentEmbed = 128;
interviewParser.OpAmpStillImageFilmEmbed = 129;
interviewParser.BitmarkMinus = 130;
interviewParser.BitmarkPlus = 131;
interviewParser.ColonText = 132;
interviewParser.ColonJson = 133;
interviewParser.Prosemirror = 134;
interviewParser.Placeholder = 135;
interviewParser.BASIC = 136;
interviewParser.JPG = 137;
interviewParser.PNG = 138;
interviewParser.GIF = 139;
interviewParser.SVG = 140;
interviewParser.MP2 = 141;
interviewParser.MP3 = 142;
interviewParser.MP4 = 143;
interviewParser.FLV = 144;
interviewParser.WMV = 145;
interviewParser.MPEG = 146;
interviewParser.MPG = 147;
interviewParser.TEL = 148;
interviewParser.DotArticleAtt = 149;
interviewParser.STAR = 150;
interviewParser.URL = 151;
interviewParser.LIST_LINE = 152;
interviewParser.ENCLBARS = 153;
interviewParser.RULE_bitmark = 0;
interviewParser.RULE_bitmark_ = 1;
interviewParser.RULE_interviews = 2;
interviewParser.RULE_interview = 3;
interviewParser.RULE_interview_instruction_grouped = 4;
interviewParser.RULE_mcrsep = 5;
interviewParser.RULE_mcrsep_end = 6;
interviewParser.RULE_mcrmisc = 7;
interviewParser.RULE_interview_qanda = 8;
interviewParser.RULE_interview_qanda__ = 9;
interviewParser.RULE_interview_sometext = 10;
interviewParser.RULE_interview_text = 11;
interviewParser.RULE_interview_answer = 12;
interviewParser.RULE_longans = 13;
interviewParser.RULE_shortans = 14;
interviewParser.RULE_partans = 15;
interviewParser.RULE_mark_text = 16;
interviewParser.RULE_query = 17;
interviewParser.RULE_answer = 18;
interviewParser.RULE_heading = 19;
interviewParser.RULE_key_title = 20;
interviewParser.RULE_value_title = 21;
interviewParser.RULE_ml_example = 22;
interviewParser.RULE_bitElem = 23;
interviewParser.RULE_interview_footer = 24;
interviewParser.RULE_footer_resource = 25;
interviewParser.RULE_footer_text = 26;
interviewParser.RULE_gap = 27;
interviewParser.RULE_single_gap = 28;
interviewParser.RULE_atpoint = 29;
interviewParser.RULE_format = 30;
interviewParser.RULE_resource_format = 31;
interviewParser.RULE_resource_format_extra = 32;
interviewParser.RULE_format2 = 33;
interviewParser.RULE_image_format = 34;
interviewParser.RULE_video_format = 35;
interviewParser.RULE_article_format = 36;
interviewParser.RULE_document_format = 37;
interviewParser.RULE_app_format = 38;
interviewParser.RULE_website_format = 39;
interviewParser.RULE_stillimagefilm_format = 40;
interviewParser.RULE_op_article_format = 41;
interviewParser.RULE_op_document_format = 42;
interviewParser.RULE_op_app_format = 43;
interviewParser.RULE_op_website_format = 44;
interviewParser.RULE_op_video_format = 45;
interviewParser.RULE_op_stillimagefilm_format = 46;
interviewParser.RULE_articlebit = 47;
interviewParser.RULE_documentbit = 48;
interviewParser.RULE_websitebit = 49;
interviewParser.RULE_appbit = 50;
interviewParser.RULE_stillimagefilmbit = 51;
interviewParser.RULE_stillimg_one = 52;
interviewParser.RULE_videobit = 53;
interviewParser.RULE_video_one = 54;
interviewParser.RULE_imagebit = 55;
interviewParser.RULE_image_one = 56;
interviewParser.RULE_op_image_format = 57;
interviewParser.RULE_image_chained = 58;
interviewParser.RULE_image_chained4match = 59;
interviewParser.RULE_audiobit = 60;
interviewParser.RULE_audio_one = 61;
interviewParser.RULE_audio_format = 62;
interviewParser.RULE_op_audio_format = 63;
interviewParser.RULE_resource_chained = 64;
interviewParser.RULE_telephone = 65;
interviewParser.RULE_url = 66;
interviewParser.RULE_item = 67;
interviewParser.RULE_lead = 68;
interviewParser.RULE_angleref = 69;
interviewParser.RULE_example = 70;
interviewParser.RULE_bracketed_text = 71;
interviewParser.RULE_reference = 72;
interviewParser.RULE_progress = 73;
interviewParser.RULE_dateprop = 74;
interviewParser.RULE_dateprop_chained = 75;
interviewParser.RULE_instruction = 76;
interviewParser.RULE_hint = 77;
interviewParser.RULE_title = 78;
interviewParser.RULE_bool_label = 79;
interviewParser.RULE_progress_points = 80;
interviewParser.RULE_istracked = 81;
interviewParser.RULE_isinfoonly = 82;
interviewParser.RULE_atdef = 83;
interviewParser.RULE_atdef_ = 84;
interviewParser.RULE_dollarans = 85;
interviewParser.RULE_anchor = 86;
interviewParser.RULE_dcolon = 87;
interviewParser.RULE_lines = 88;
interviewParser.RULE_s_and_w = 89;
interviewParser.RULE_clnsp = 90;
interviewParser.RULE_sspl = 91;
interviewParser.RULE_words = 92;
interviewParser.RULE_sp = 93;
// tslint:disable:no-trailing-whitespace
interviewParser.ruleNames = [
    "bitmark", "bitmark_", "interviews", "interview", "interview_instruction_grouped",
    "mcrsep", "mcrsep_end", "mcrmisc", "interview_qanda", "interview_qanda__",
    "interview_sometext", "interview_text", "interview_answer", "longans",
    "shortans", "partans", "mark_text", "query", "answer", "heading", "key_title",
    "value_title", "ml_example", "bitElem", "interview_footer", "footer_resource",
    "footer_text", "gap", "single_gap", "atpoint", "format", "resource_format",
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
interviewParser._LITERAL_NAMES = [
    undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
    "'[^'", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'[#'",
    "']'", "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'", "'\u25BA'",
    "'\u2192'", "'=='", undefined, undefined, undefined, undefined, undefined,
    "'\u2022'", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "'[@'", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "'http://'", "'https://'", "'&audio'", "'&image'", "'&image-zoom'", "'&image-with-audio'",
    "'&video'", "'&article'", "'&document'", "'&app'", "'&website'", "'&still-image-film'",
    "'&pdf'", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'&audio-link'",
    "'&image-link'", "'&video-link'", "'&article-link'", "'&document-link'",
    "'&app-link'", "'&website-link'", "'&still-image-film-link'", undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "'&image-embed'", "'&video-embed'", "'&daudio-embed'", "'&document-embed'",
    "'&still-image-film-embed'", undefined, undefined, undefined, undefined,
    undefined, "':bitmark--'", "':bitmark++'", "':text'", "':json'", "':prosemirror'",
    "':placeholder'", "':basic'", "':jpg'", "':png'", "':gif'", "':svg'",
    "':mp2'", "':mp3'", "':mp4'", "':flv'", "':wmv'", "':mpeg'", "':mpg'",
    "'tel:'", "'.article-attachment'", "'*'",
];
interviewParser._SYMBOLIC_NAMES = [
    undefined, "OPDOT", "S", "BitInterview", "BitInterviewinstgrp", "OPDOLL",
    "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB",
    "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", "OPHASH", "CL", "COLON",
    "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", "Less", "RightAngle", "RightArrow",
    "DBLEQ", "OR", "HSPL", "HSPL2", "SSPL", "SSPL2", "BULLET", "COMMENT",
    "DCANY", "Image_type", "Audio_type", "Video_type", "ArticleText", "NOTCL",
    "NUMERIC", "STRING", "NL", "NOTBITMARK", "SENTENCE", "BARSTRING", "OPAT",
    "AtProgress", "AtReference", "AtWidth", "AtHeight", "AtProgressPoints",
    "AtShortanswer", "AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl",
    "AtPartialAnswerS", "AtPartialAnswer", "AtLabeltrue", "AtLabelfalse",
    "AtPoints", "AtSrc", "AtPartner", "OPATALT", "OPAMARK", "ShowInIndex",
    "OpAtCaption", "OpAtLicense", "OpAtCopyright", "OpAtSearch", "OpAtIsTracked",
    "OpAtIsInfoOnly", "AtDate", "Http", "Https", "AmpAudio", "AmpImage", "AmpImageZoom",
    "AmpImageWAudio", "AmpVideo", "AmpArticle", "AmpDocument", "AmpApp", "AmpWebsite",
    "AmpStillImageFilm", "AmpPdf", "OpAmpAudio", "OpAmpImage", "OpAmpImageZoom",
    "OpAmpImageWAudio", "OpAmpVideo", "OpAmpArticle", "OpAmpArticleAtt", "OpAmpDocument",
    "OpAmpApp", "OpAmpWebsite", "OpAmpStillImageFilm", "BracEnclose", "AmpAudioLink",
    "AmpImageLink", "AmpVideoLink", "AmpArticleLink", "AmpDocumentLink", "AmpAppLink",
    "AmpWebsiteLink", "AmpStillImageFilmLink", "OpAmpAudioLink", "OpAmpImageLink",
    "OpAmpVideoLink", "OpAmpArticleLink", "OpAmpDocumentLink", "OpAmpAppLink",
    "OpAmpWebsiteLink", "OpAmpStillImageFilmLink", "AmpImageEmbed", "AmpVideoEmbed",
    "AmpAudioEmbed", "AmpDocumentEmbed", "AmpStillImageFilmEmbed", "OpAmpImageEmbed",
    "OpAmpVideoEmbed", "OpAmpAudioEmbed", "OpAmpDocumentEmbed", "OpAmpStillImageFilmEmbed",
    "BitmarkMinus", "BitmarkPlus", "ColonText", "ColonJson", "Prosemirror",
    "Placeholder", "BASIC", "JPG", "PNG", "GIF", "SVG", "MP2", "MP3", "MP4",
    "FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE",
    "ENCLBARS",
];
interviewParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(interviewParser._LITERAL_NAMES, interviewParser._SYMBOLIC_NAMES, []);
interviewParser._serializedATNSegments = 3;
interviewParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9B\u0551\x04" +
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
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x03\x02" +
    "\x03\x02\x07\x02\xC1\n\x02\f\x02\x0E\x02\xC4\v\x02\x03\x02\x07\x02\xC7" +
    "\n\x02\f\x02\x0E\x02\xCA\v\x02\x06\x02\xCC\n\x02\r\x02\x0E\x02\xCD\x03" +
    "\x02\x07\x02\xD1\n\x02\f\x02\x0E\x02\xD4\v\x02\x03\x02\x03\x02\x03\x03" +
    "\x03\x03\x03\x04\x03\x04\x05\x04\xDC\n\x04\x03\x05\x03\x05\x03\x05\x03" +
    "\x05\x07\x05\xE2\n\x05\f\x05\x0E\x05\xE5\v\x05\x03\x05\x03\x05\x07\x05" +
    "\xE9\n\x05\f\x05\x0E\x05\xEC\v\x05\x07\x05\xEE\n\x05\f\x05\x0E\x05\xF1" +
    "\v\x05\x03\x05\x03\x05\x07\x05\xF5\n\x05\f\x05\x0E\x05\xF8\v\x05\x03\x05" +
    "\x03\x05\x07\x05\xFC\n\x05\f\x05\x0E\x05\xFF\v\x05\x05\x05\u0101\n\x05" +
    "\x06\x05\u0103\n\x05\r\x05\x0E\x05\u0104\x03\x05\x03\x05\x07\x05\u0109" +
    "\n\x05\f\x05\x0E\x05\u010C\v\x05\x03\x05\x05\x05\u010F\n\x05\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x07\x06\u0115\n\x06\f\x06\x0E\x06\u0118\v\x06\x03" +
    "\x06\x03\x06\x07\x06\u011C\n\x06\f\x06\x0E\x06\u011F\v\x06\x07\x06\u0121" +
    "\n\x06\f\x06\x0E\x06\u0124\v\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0129" +
    "\n\x06\f\x06\x0E\x06\u012C\v\x06\x07\x06\u012E\n\x06\f\x06\x0E\x06\u0131" +
    "\v\x06\x03\x06\x03\x06\x07\x06\u0135\n\x06\f\x06\x0E\x06\u0138\v\x06\x03" +
    "\x06\x05\x06\u013B\n\x06\x03\x07\x03\x07\x05\x07\u013F\n\x07\x03\b\x03" +
    "\b\x03\t\x03\t\x03\t\x03\n\x03\n\x06\n\u0148\n\n\r\n\x0E\n\u0149\x03\n" +
    "\x07\n\u014D\n\n\f\n\x0E\n\u0150\v\n\x03\v\x05\v\u0153\n\v\x03\v\x03\v" +
    "\x07\v\u0157\n\v\f\v\x0E\v\u015A\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0166\n\v\f\v\x0E\v\u0169\v\v\x03\v\x03" +
    "\v\x05\v\u016D\n\v\x03\v\x07\v\u0170\n\v\f\v\x0E\v\u0173\v\v\x03\v\x03" +
    "\v\x03\v\x03\v\x03\v\x07\v\u017A\n\v\f\v\x0E\v\u017D\v\v\x05\v\u017F\n" +
    "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x06\v\u018B" +
    "\n\v\r\v\x0E\v\u018C\x03\v\x03\v\x05\v\u0191\n\v\x03\v\x07\v\u0194\n\v" +
    "\f\v\x0E\v\u0197\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u019E\n\v\f\v" +
    "\x0E\v\u01A1\v\v\x05\v\u01A3\n\v\x05\v\u01A5\n\v\x03\f\x06\f\u01A8\n\f" +
    "\r\f\x0E\f\u01A9\x03\r\x03\r\x05\r\u01AE\n\r\x03\r\x03\r\x05\r\u01B2\n" +
    "\r\x03\r\x07\r\u01B5\n\r\f\r\x0E\r\u01B8\v\r\x06\r\u01BA\n\r\r\r\x0E\r" +
    "\u01BB\x03\r\x05\r\u01BF\n\r\x03\x0E\x03\x0E\x05\x0E\u01C3\n\x0E\x06\x0E" +
    "\u01C5\n\x0E\r\x0E\x0E\x0E\u01C6\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11" +
    "\x03\x11\x03\x12\x03\x12\x07\x12\u01D1\n\x12\f\x12\x0E\x12\u01D4\v\x12" +
    "\x03\x12\x03\x12\x03\x13\x06\x13\u01D9\n\x13\r\x13\x0E\x13\u01DA\x03\x13" +
    "\x05\x13\u01DE\n\x13\x03\x14\x06\x14\u01E1\n\x14\r\x14\x0E\x14\u01E2\x03" +
    "\x14\x03\x14\x06\x14\u01E7\n\x14\r\x14\x0E\x14\u01E8\x05\x14\u01EB\n\x14" +
    "\x03\x14\x07\x14\u01EE\n\x14\f\x14\x0E\x14\u01F1\v\x14\x03\x14\x05\x14" +
    "\u01F4\n\x14\x03\x15\x03\x15\x06\x15\u01F8\n\x15\r\x15\x0E\x15\u01F9\x03" +
    "\x15\x03\x15\x03\x16\x03\x16\x06\x16\u0200\n\x16\r\x16\x0E\x16\u0201\x03" +
    "\x16\x03\x16\x03\x17\x03\x17\x06\x17\u0208\n\x17\r\x17\x0E\x17\u0209\x03" +
    "\x17\x03\x17\x03\x18\x03\x18\x05\x18\u0210\n\x18\x03\x18\x03\x18\x05\x18" +
    "\u0214\n\x18\x05\x18\u0216\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
    "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
    "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
    "\x03\x19\x05\x19\u0230\n\x19\x03\x1A\x07\x1A\u0233\n\x1A\f\x1A\x0E\x1A" +
    "\u0236\v\x1A\x03\x1A\x03\x1A\x07\x1A\u023A\n\x1A\f\x1A\x0E\x1A\u023D\v" +
    "\x1A\x03\x1A\x07\x1A\u0240\n\x1A\f\x1A\x0E\x1A\u0243\v\x1A\x03\x1B\x03" +
    "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05" +
    "\x1B\u024F\n\x1B\x03\x1B\x07\x1B\u0252\n\x1B\f\x1B\x0E\x1B\u0255\v\x1B" +
    "\x03\x1C\x03\x1C\x06\x1C\u0259\n\x1C\r\x1C\x0E\x1C\u025A\x03\x1D\x03\x1D" +
    "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0263\n\x1D\f\x1D\x0E\x1D\u0266" +
    "\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u026C\n\x1E\x03\x1E\x07" +
    "\x1E\u026F\n\x1E\f\x1E\x0E\x1E\u0272\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
    "\x1F\x03\x1F\x03\x1F\x03 \x07 \u027B\n \f \x0E \u027E\v \x03 \x03 \x03" +
    " \x07 \u0283\n \f \x0E \u0286\v \x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03" +
    "\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0293\n\"\x03#\x03#\x03#\x03#\x03#\x05" +
    "#\u029A\n#\x03$\x03$\x03$\x05$\u029F\n$\x03$\x03$\x05$\u02A3\n$\x03$\x03" +
    "$\x05$\u02A7\n$\x03$\x05$\u02AA\n$\x03%\x03%\x03%\x05%\u02AF\n%\x03&\x03" +
    "&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03" +
    "-\x03.\x03.\x03/\x03/\x03/\x05/\u02C6\n/\x03/\x03/\x03/\x05/\u02CB\n/" +
    "\x03/\x03/\x03/\x05/\u02D0\n/\x05/\u02D2\n/\x030\x030\x031\x031\x031\x03" +
    "1\x031\x031\x051\u02DC\n1\x032\x032\x032\x032\x032\x032\x032\x032\x05" +
    "2\u02E6\n2\x033\x033\x033\x033\x033\x033\x033\x033\x053\u02F0\n3\x034" +
    "\x034\x034\x034\x054\u02F6\n4\x034\x034\x034\x034\x034\x054\u02FD\n4\x03" +
    "5\x035\x075\u0301\n5\f5\x0E5\u0304\v5\x036\x036\x036\x076\u0309\n6\f6" +
    "\x0E6\u030C\v6\x036\x036\x036\x037\x037\x077\u0313\n7\f7\x0E7\u0316\v" +
    "7\x038\x038\x038\x038\x038\x038\x038\x038\x058\u0320\n8\x039\x039\x07" +
    "9\u0324\n9\f9\x0E9\u0327\v9\x039\x039\x059\u032B\n9\x03:\x03:\x03:\x07" +
    ":\u0330\n:\f:\x0E:\u0333\v:\x03:\x03:\x03:\x03;\x03;\x03;\x05;\u033B\n" +
    ";\x03;\x03;\x05;\u033F\n;\x03;\x03;\x05;\u0343\n;\x03;\x05;\u0346\n;\x03" +
    "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x07<\u0353\n<\f<\x0E" +
    "<\u0356\v<\x03<\x05<\u0359\n<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=" +
    "\x03=\x03=\x03=\x07=\u0366\n=\f=\x0E=\u0369\v=\x03=\x05=\u036C\n=\x03" +
    ">\x03>\x07>\u0370\n>\f>\x0E>\u0373\v>\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
    "?\x03?\x05?\u037D\n?\x03@\x03@\x03@\x05@\u0382\n@\x03@\x03@\x03@\x05@" +
    "\u0387\n@\x05@\u0389\n@\x03A\x03A\x03A\x05A\u038E\nA\x03A\x03A\x03A\x05" +
    "A\u0393\nA\x03A\x03A\x03A\x05A\u0398\nA\x05A\u039A\nA\x03B\x03B\x03B\x05" +
    "B\u039F\nB\x03B\x03B\x07B\u03A3\nB\fB\x0EB\u03A6\vB\x03B\x03B\x06B\u03AA" +
    "\nB\rB\x0EB\u03AB\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u03B5\nB\fB" +
    "\x0EB\u03B8\vB\x03B\x05B\u03BB\nB\x03C\x03C\x03C\x03C\x03D\x03D\x03E\x03" +
    "E\x03E\x07E\u03C6\nE\fE\x0EE\u03C9\vE\x03E\x05E\u03CC\nE\x03E\x03E\x03" +
    "E\x03E\x07E\u03D2\nE\fE\x0EE\u03D5\vE\x03E\x03E\x07E\u03D9\nE\fE\x0EE" +
    "\u03DC\vE\x03E\x05E\u03DF\nE\x05E\u03E1\nE\x03F\x03F\x03F\x03F\x07F\u03E7" +
    "\nF\fF\x0EF\u03EA\vF\x03F\x03F\x03G\x03G\x05G\u03F0\nG\x03G\x03G\x03G" +
    "\x05G\u03F5\nG\x03G\x05G\u03F8\nG\x03H\x03H\x03H\x03H\x05H\u03FE\nH\x03" +
    "H\x05H\u0401\nH\x03I\x03I\x05I\u0405\nI\x03I\x03I\x03I\x07I\u040A\nI\f" +
    "I\x0EI\u040D\vI\x07I\u040F\nI\fI\x0EI\u0412\vI\x03I\x07I\u0415\nI\fI\x0E" +
    "I\u0418\vI\x07I\u041A\nI\fI\x0EI\u041D\vI\x03I\x03I\x03I\x03I\x03I\x07" +
    "I\u0424\nI\fI\x0EI\u0427\vI\x03I\x05I\u042A\nI\x03J\x03J\x03J\x03J\x03" +
    "J\x06J\u0431\nJ\rJ\x0EJ\u0432\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x07J" +
    "\u043C\nJ\fJ\x0EJ\u043F\vJ\x03J\x05J\u0442\nJ\x03K\x03K\x03K\x03K\x03" +
    "L\x03L\x03L\x03L\x06L\u044C\nL\rL\x0EL\u044D\x03L\x03L\x05L\u0452\nL\x03" +
    "M\x03M\x03M\x03M\x06M\u0458\nM\rM\x0EM\u0459\x03M\x03M\x03N\x03N\x07N" +
    "\u0460\nN\fN\x0EN\u0463\vN\x03N\x05N\u0466\nN\x03N\x03N\x03N\x07N\u046B" +
    "\nN\fN\x0EN\u046E\vN\x07N\u0470\nN\fN\x0EN\u0473\vN\x03N\x07N\u0476\n" +
    "N\fN\x0EN\u0479\vN\x07N\u047B\nN\fN\x0EN\u047E\vN\x03N\x03N\x03N\x07N" +
    "\u0483\nN\fN\x0EN\u0486\vN\x03N\x05N\u0489\nN\x03N\x05N\u048C\nN\x03O" +
    "\x03O\x06O\u0490\nO\rO\x0EO\u0491\x03O\x03O\x03P\x03P\x03P\x06P\u0499" +
    "\nP\rP\x0EP\u049A\x03P\x03P\x03P\x03P\x03P\x05P\u04A2\nP\x03Q\x03Q\x03" +
    "Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u04AC\nQ\x03R\x03R\x03R\x03R\x03R\x03" +
    "R\x03R\x03R\x03R\x05R\u04B7\nR\x03S\x03S\x03S\x03S\x03T\x03T\x03T\x03" +
    "T\x03U\x03U\x07U\u04C3\nU\fU\x0EU\u04C6\vU\x03U\x07U\u04C9\nU\fU\x0EU" +
    "\u04CC\vU\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x07V\u04D5\nV\fV\x0EV\u04D8" +
    "\vV\x03V\x03V\x03V\x03V\x07V\u04DE\nV\fV\x0EV\u04E1\vV\x03V\x05V\u04E4" +
    "\nV\x03W\x03W\x03W\x03W\x06W\u04EA\nW\rW\x0EW\u04EB\x03W\x03W\x03W\x03" +
    "W\x03W\x07W\u04F3\nW\fW\x0EW\u04F6\vW\x03W\x05W\u04F9\nW\x03X\x03X\x05" +
    "X\u04FD\nX\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x05Z\u0505\nZ\x06Z\u0507\nZ\r" +
    "Z\x0EZ\u0508\x03[\x03[\x06[\u050D\n[\r[\x0E[\u050E\x03[\x05[\u0512\n[" +
    "\x03[\x03[\x06[\u0516\n[\r[\x0E[\u0517\x03[\x05[\u051B\n[\x03[\x03[\x03" +
    "[\x03[\x03[\x03[\x03[\x07[\u0524\n[\f[\x0E[\u0527\v[\x03[\x03[\x07[\u052B" +
    "\n[\f[\x0E[\u052E\v[\x03[\x03[\x07[\u0532\n[\f[\x0E[\u0535\v[\x03[\x03" +
    "[\x03[\x05[\u053A\n[\x03\\\x03\\\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03" +
    "^\x03^\x03^\x03^\x03^\x03^\x06^\u054B\n^\r^\x0E^\u054C\x03_\x03_\x03_" +
    "\x07\u01D2\u0354\u0367\u03B6\u04DF\x02\x02`\x02\x02\x04\x02\x06\x02\b" +
    "\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
    "\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
    "6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
    "R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
    "n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
    "\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
    "\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
    "\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
    "\xBC\x02\x02\x17\x03\x02#$\x03\x02@A\b\x02XY[\\jq{~\x84\x85\x87\x89\x05" +
    "\x02WWll{{\x04\x02XXmm\x05\x02YYnn}}\x04\x02ZZoo\x04\x02[[pp\x05\x02\\" +
    "\\qq~~\x04\x02ccuu\x05\x02eevv\x82\x82\x04\x02ffww\x04\x02ggxx\x05\x02" +
    "hhyy\x83\x83\x03\x0289\x04\x02GGJM\x03\x02\x17\x17\x04\x02\x18\x18\x1A" +
    "\x1A\x03\x02%&\x03\x02\x1D\x1D\x03\x02\x1E\x1E\x02\u061C\x02\xCB\x03\x02" +
    "\x02\x02\x04\xD7\x03\x02\x02\x02\x06\xDB\x03\x02\x02\x02\b\xDD\x03\x02" +
    "\x02\x02\n\u0110\x03\x02\x02\x02\f\u013E\x03\x02\x02\x02\x0E\u0140\x03" +
    "\x02\x02\x02\x10\u0142\x03\x02\x02\x02\x12\u0145\x03\x02\x02\x02\x14\u01A4" +
    "\x03\x02\x02\x02\x16\u01A7\x03\x02\x02\x02\x18\u01BE\x03\x02\x02\x02\x1A" +
    "\u01C4\x03\x02\x02\x02\x1C\u01C8\x03\x02\x02\x02\x1E\u01CA\x03\x02\x02" +
    "\x02 \u01CC\x03\x02\x02\x02\"\u01CE\x03\x02\x02\x02$\u01D8\x03\x02\x02" +
    "\x02&\u01E0\x03\x02\x02\x02(\u01F5\x03\x02\x02\x02*\u01FD\x03\x02\x02" +
    "\x02,\u0205\x03\x02\x02\x02.\u020D\x03\x02\x02\x020\u022F\x03\x02\x02" +
    "\x022\u0234\x03\x02\x02\x024\u024E\x03\x02\x02\x026\u0258\x03\x02\x02" +
    "\x028\u025C\x03\x02\x02\x02:\u0267\x03\x02\x02\x02<\u0275\x03\x02\x02" +
    "\x02>\u027C\x03\x02\x02\x02@\u0287\x03\x02\x02\x02B\u0292\x03\x02\x02" +
    "\x02D\u0299\x03\x02\x02\x02F\u02A9\x03\x02\x02\x02H\u02AB\x03\x02\x02" +
    "\x02J\u02B0\x03\x02\x02\x02L\u02B2\x03\x02\x02\x02N\u02B4\x03\x02\x02" +
    "\x02P\u02B6\x03\x02\x02\x02R\u02B8\x03\x02\x02\x02T\u02BA\x03\x02\x02" +
    "\x02V\u02BC\x03\x02\x02\x02X\u02BE\x03\x02\x02\x02Z\u02C0\x03\x02\x02" +
    "\x02\\\u02D1\x03\x02\x02\x02^\u02D3\x03\x02\x02\x02`\u02DB\x03\x02\x02" +
    "\x02b\u02DD\x03\x02\x02\x02d\u02E7\x03\x02\x02\x02f\u02F1\x03\x02\x02" +
    "\x02h\u02FE\x03\x02\x02\x02j\u0305\x03\x02\x02\x02l\u0310\x03\x02\x02" +
    "\x02n\u0317\x03\x02\x02\x02p\u0321\x03\x02\x02\x02r\u032C\x03\x02\x02" +
    "\x02t\u0345\x03\x02\x02\x02v\u0358\x03\x02\x02\x02x\u036B\x03\x02\x02" +
    "\x02z\u036D\x03\x02\x02\x02|\u0374\x03\x02\x02\x02~\u0388\x03\x02\x02" +
    "\x02\x80\u0399\x03\x02\x02\x02\x82\u03BA\x03\x02\x02\x02\x84\u03BC\x03" +
    "\x02\x02\x02\x86\u03C0\x03\x02\x02\x02\x88\u03E0\x03\x02\x02\x02\x8A\u03E2" +
    "\x03\x02\x02\x02\x8C\u03F7\x03\x02\x02\x02\x8E\u0400\x03\x02\x02\x02\x90" +
    "\u0429\x03\x02\x02\x02\x92\u0441\x03\x02\x02\x02\x94\u0443\x03\x02\x02" +
    "\x02\x96\u0447\x03\x02\x02\x02\x98\u0453\x03\x02\x02\x02\x9A\u048B\x03" +
    "\x02\x02\x02\x9C\u048D\x03\x02\x02\x02\x9E\u04A1\x03\x02\x02\x02\xA0\u04AB" +
    "\x03\x02\x02\x02\xA2\u04B6\x03\x02\x02\x02\xA4\u04B8\x03\x02\x02\x02\xA6" +
    "\u04BC\x03\x02\x02\x02\xA8\u04C0\x03\x02\x02\x02\xAA\u04E3\x03\x02\x02" +
    "\x02\xAC\u04F8\x03\x02\x02\x02\xAE\u04FA\x03\x02\x02\x02\xB0\u0500\x03" +
    "\x02\x02\x02\xB2\u0506\x03\x02\x02\x02\xB4\u0539\x03\x02\x02\x02\xB6\u053B" +
    "\x03\x02\x02\x02\xB8\u053D\x03\x02\x02\x02\xBA\u054A\x03\x02\x02\x02\xBC" +
    "\u054E\x03\x02\x02\x02\xBE\xC8\x05\x04\x03\x02\xBF\xC1\x07\x04\x02\x02" +
    "\xC0\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02" +
    "\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02" +
    "\xC5\xC7\x071\x02\x02\xC6\xC2\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02" +
    "\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02" +
    "\xCA\xC8\x03\x02\x02\x02\xCB\xBE\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02" +
    "\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD2\x03\x02\x02\x02" +
    "\xCF\xD1\x071\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02" +
    "\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD5\x03\x02\x02\x02" +
    "\xD4\xD2\x03\x02\x02\x02\xD5\xD6\x07\x02\x02\x03\xD6\x03\x03\x02\x02\x02" +
    "\xD7\xD8\x05\x06\x04\x02\xD8\x05\x03\x02\x02\x02\xD9\xDC\x05\b\x05\x02" +
    "\xDA\xDC\x05\n\x06\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02" +
    "\xDC\x07\x03\x02\x02\x02\xDD\xDE\x07\x05\x02\x02\xDE\xDF\x05> \x02\xDF" +
    "\xE3\x07\x17\x02\x02\xE0\xE2\x071\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2" +
    "\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4" +
    "\xEF\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xEA\x050\x19\x02\xE7" +
    "\xE9\x071\x02\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA" +
    "\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC" +
    "\xEA\x03\x02\x02\x02\xED\xE6\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF" +
    "\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\u0102\x03\x02\x02\x02" +
    "\xF1\xEF\x03\x02\x02\x02\xF2\xF6\x05\f\x07\x02\xF3\xF5\x071\x02\x02\xF4" +
    "\xF3\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6" +
    "\xF7\x03\x02\x02\x02\xF7\u0100\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02" +
    "\xF9\xFD\x05\x12\n\x02\xFA\xFC\x071\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC" +
    "\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE" +
    "\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\xF9\x03\x02\x02\x02" +
    "\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102\xF2\x03" +
    "\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104" +
    "\u0105\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u010A\x05\x0E" +
    "\b\x02\u0107\u0109\x071\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010C" +
    "\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02" +
    "\u010B\u010E\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u010F\x05" +
    "2\x1A\x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
    "\t\x03\x02\x02\x02\u0110\u0111\x07\x06\x02\x02\u0111\u0112\x05> \x02\u0112" +
    "\u0116\x07\x17\x02\x02\u0113\u0115\x071\x02\x02\u0114\u0113\x03\x02\x02" +
    "\x02\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117" +
    "\x03\x02\x02\x02\u0117\u0122\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02" +
    "\u0119\u011D\x050\x19\x02\u011A\u011C\x071\x02\x02\u011B\u011A\x03\x02" +
    "\x02\x02\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D" +
    "\u011E\x03\x02\x02\x02\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02" +
    "\x02\x02\u0120\u0119\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122" +
    "\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u012F\x03\x02" +
    "\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u0126\x05\f\x07\x02\u0126\u012A" +
    "\x05\x12\n\x02\u0127\u0129\x071\x02\x02\u0128\u0127\x03\x02\x02\x02\u0129" +
    "\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02" +
    "\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D" +
    "\u0125\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F\u012D\x03\x02" +
    "\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0132\x03\x02\x02\x02\u0131" +
    "\u012F\x03\x02\x02\x02\u0132\u0136\x05\x0E\b\x02\u0133\u0135\x071\x02" +
    "\x02\u0134\u0133\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134" +
    "\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02" +
    "\u0138\u0136\x03\x02\x02\x02\u0139\u013B\x052\x1A\x02\u013A\u0139\x03" +
    "\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\v\x03\x02\x02\x02\u013C" +
    "\u013F\t\x02\x02\x02\u013D\u013F\x071\x02\x02\u013E\u013C\x03\x02\x02" +
    "\x02\u013E\u013D\x03\x02\x02\x02\u013F\r\x03\x02\x02\x02\u0140\u0141\t" +
    "\x02\x02\x02\u0141\x0F\x03\x02\x02\x02\u0142\u0143\x05\x12\n\x02\u0143" +
    "\u0144\x071\x02\x02\u0144\x11\x03\x02\x02\x02\u0145\u014E\x05\x14\v\x02" +
    "\u0146\u0148\x071\x02\x02\u0147\u0146\x03\x02\x02\x02\u0148\u0149\x03" +
    "\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A" +
    "\u014B\x03\x02\x02\x02\u014B\u014D\x05\x14\v\x02\u014C\u0147\x03\x02\x02" +
    "\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F" +
    "\x03\x02\x02\x02\u014F\x13\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02" +
    "\u0151\u0153\x05\x88E\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03" +
    "\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0158\x05\x18\r\x02\u0155" +
    "\u0157\x07\x04\x02\x02\u0156\u0155\x03\x02\x02\x02\u0157\u015A\x03\x02" +
    "\x02\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
    "\u0167\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B\u0166\x05\x9A" +
    "N\x02\u015C\u0166\x05\x8E";
interviewParser._serializedATNSegment1 = "H\x02\u015D\u0166\x05\x1E\x10\x02\u015E\u0166\x05\x1C\x0F\x02\u015F\u0166" +
    "\x05\xACW\x02\u0160\u0166\x05 \x11\x02\u0161\u0166\x05:\x1E\x02\u0162" +
    "\u0166\x05\"\x12\x02\u0163\u0166\x05\x9CO\x02\u0164\u0166\x05\x16\f\x02" +
    "\u0165\u015B\x03\x02\x02\x02\u0165\u015C\x03\x02\x02\x02\u0165\u015D\x03" +
    "\x02\x02\x02\u0165\u015E\x03\x02\x02\x02\u0165\u015F\x03\x02\x02\x02\u0165" +
    "\u0160\x03\x02\x02\x02\u0165\u0161\x03\x02\x02\x02\u0165\u0162\x03\x02" +
    "\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0164\x03\x02\x02\x02\u0166" +
    "\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02" +
    "\x02\x02\u0168\u017E\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A" +
    "\u016C\x071\x02\x02\u016B\u016D\x05\x1A\x0E\x02\u016C\u016B\x03\x02\x02" +
    "\x02\u016C\u016D\x03\x02\x02\x02\u016D\u0171\x03\x02\x02\x02\u016E\u0170" +
    "\x07\x04\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\u0173\x03\x02\x02\x02" +
    "\u0171\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u017B\x03" +
    "\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0174\u017A\x05\x8EH\x02\u0175" +
    "\u017A\x05\x1E\x10\x02\u0176\u017A\x05\x1C\x0F\x02\u0177\u017A\x05\xAC" +
    "W\x02\u0178\u017A\x05 \x11\x02\u0179\u0174\x03\x02\x02\x02\u0179\u0175" +
    "\x03\x02\x02\x02\u0179\u0176\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02" +
    "\u0179\u0178\x03\x02\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B\u0179\x03" +
    "\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D" +
    "\u017B\x03\x02\x02\x02\u017E\u016A\x03\x02\x02\x02\u017E\u017F\x03\x02" +
    "\x02\x02\u017F\u01A5\x03\x02\x02\x02\u0180\u018B\x05\x9AN\x02\u0181\u018B" +
    "\x05\x8EH\x02\u0182\u018B\x05\x1E\x10\x02\u0183\u018B\x05\x1C\x0F\x02" +
    "\u0184\u018B\x05\xACW\x02\u0185\u018B\x05 \x11\x02\u0186\u018B\x05:\x1E" +
    "\x02\u0187\u018B\x05\"\x12\x02\u0188\u018B\x05\x9CO\x02\u0189\u018B\x05" +
    "\x16\f\x02\u018A\u0180\x03\x02\x02\x02\u018A\u0181\x03\x02\x02\x02\u018A" +
    "\u0182\x03\x02\x02\x02\u018A\u0183\x03\x02\x02\x02\u018A\u0184\x03\x02" +
    "\x02\x02\u018A\u0185\x03\x02\x02\x02\u018A\u0186\x03\x02\x02\x02\u018A" +
    "\u0187\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u0189\x03\x02" +
    "\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C" +
    "\u018D\x03\x02\x02\x02\u018D\u01A2\x03\x02\x02\x02\u018E\u0190\x071\x02" +
    "\x02\u018F\u0191\x05\x1A\x0E\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191" +
    "\x03\x02\x02\x02\u0191\u0195\x03\x02\x02\x02\u0192\u0194\x07\x04\x02\x02" +
    "\u0193\u0192\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03" +
    "\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u019F\x03\x02\x02\x02\u0197" +
    "\u0195\x03\x02\x02\x02\u0198\u019E\x05\x8EH\x02\u0199\u019E\x05\x1E\x10" +
    "\x02\u019A\u019E\x05\x1C\x0F\x02\u019B\u019E\x05\xACW\x02\u019C\u019E" +
    "\x05 \x11\x02\u019D\u0198\x03\x02\x02\x02\u019D\u0199\x03\x02\x02\x02" +
    "\u019D\u019A\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019C\x03" +
    "\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F" +
    "\u01A0\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02" +
    "\x02\x02\u01A2\u018E\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3" +
    "\u01A5\x03\x02\x02\x02\u01A4\u0152\x03\x02\x02\x02\u01A4\u018A\x03\x02" +
    "\x02\x02\u01A5\x15\x03\x02\x02\x02\u01A6\u01A8\x05\xB4[\x02\u01A7\u01A6" +
    "\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02" +
    "\u01A9\u01AA\x03\x02\x02\x02\u01AA\x17\x03\x02\x02\x02\u01AB\u01AC\x07" +
    "0\x02\x02\u01AC\u01AE\x07\x17\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD" +
    "\u01AE\x03\x02\x02\x02\u01AE\u01B9\x03\x02\x02\x02\u01AF\u01B1\x05\xBA" +
    "^\x02\u01B0\u01B2\x07\x18\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B1\u01B2" +
    "\x03\x02\x02\x02\u01B2\u01B6\x03\x02\x02\x02\u01B3\u01B5\x071\x02\x02" +
    "\u01B4\u01B3\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6\u01B4\x03" +
    "\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8" +
    "\u01B6\x03\x02\x02\x02\u01B9\u01AF\x03\x02\x02\x02\u01BA\u01BB\x03\x02" +
    "\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC" +
    "\u01BF\x03\x02\x02\x02\u01BD\u01BF\x07\x9A\x02\x02\u01BE\u01AD\x03\x02" +
    "\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BF\x19\x03\x02\x02\x02\u01C0\u01C2" +
    "\x05\xBA^\x02\u01C1\u01C3\x07\x18\x02\x02\u01C2\u01C1\x03\x02\x02\x02" +
    "\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C0\x03" +
    "\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6" +
    "\u01C7\x03\x02\x02\x02\u01C7\x1B\x03\x02\x02\x02\u01C8\u01C9\x07<\x02" +
    "\x02\u01C9\x1D\x03\x02\x02\x02\u01CA\u01CB\x07;\x02\x02\u01CB\x1F\x03" +
    "\x02\x02\x02\u01CC\u01CD\t\x03\x02\x02\u01CD!\x03\x02\x02\x02\u01CE\u01D2" +
    "\x07\x13\x02\x02\u01CF\u01D1\v\x02\x02\x02\u01D0\u01CF\x03\x02\x02\x02" +
    "\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D2\u01D0\x03" +
    "\x02\x02\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5" +
    "\u01D6\x07\x17\x02\x02\u01D6#\x03\x02\x02\x02\u01D7\u01D9\x05\xB4[\x02" +
    "\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01D8\x03" +
    "\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC" +
    "\u01DE\x07?\x02\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02" +
    "\x02\u01DE%\x03\x02\x02\x02\u01DF\u01E1\x05\xB4[\x02\u01E0\u01DF\x03\x02" +
    "\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2" +
    "\u01E3\x03\x02\x02\x02\u01E3\u01EA\x03\x02\x02\x02\u01E4\u01E6\x07\"\x02" +
    "\x02\u01E5\u01E7\x05\xB4[\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7\u01E8" +
    "\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02" +
    "\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E4\x03\x02\x02\x02\u01EA\u01EB\x03" +
    "\x02\x02\x02\u01EB\u01F3\x03\x02\x02\x02\u01EC\u01EE\x07\x04\x02\x02\u01ED" +
    "\u01EC\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02" +
    "\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1" +
    "\u01EF\x03\x02\x02\x02\u01F2\u01F4\x05\x8EH\x02\u01F3\u01EF\x03\x02\x02" +
    "\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\'\x03\x02\x02\x02\u01F5\u01F7\x05" +
    "*\x16\x02\u01F6\u01F8\x071\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F8\u01F9" +
    "\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
    "\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x05,\x17\x02\u01FC)\x03\x02\x02" +
    "\x02\u01FD\u01FF\x07\x16\x02\x02\u01FE\u0200\x05\xB4[\x02\u01FF\u01FE" +
    "\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02" +
    "\u0201\u0202\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x07" +
    "\x17\x02\x02\u0204+\x03\x02\x02\x02\u0205\u0207\x07\x16\x02\x02\u0206" +
    "\u0208\x05\xB4[\x02\u0207\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02" +
    "\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020B" +
    "\x03\x02\x02\x02\u020B\u020C\x07\x17\x02\x02\u020C-\x03\x02\x02\x02\u020D" +
    "\u0215\x07>\x02\x02\u020E\u0210\x071\x02\x02\u020F\u020E\x03\x02\x02\x02" +
    "\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x05" +
    "\xB2Z\x02\u0212\u0214\x071\x02\x02\u0213\u0212\x03\x02\x02\x02\u0213\u0214" +
    "\x03\x02\x02\x02\u0214\u0216\x03\x02\x02\x02\u0215\u020F\x03\x02\x02\x02" +
    "\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x07" +
    "\x17\x02\x02\u0218/\x03\x02\x02\x02\u0219\u0230\x072\x02\x02\u021A\u0230" +
    "\x05\x88E\x02\u021B\u0230\x05\xA8U\x02\u021C\u0230\x05\x92J\x02\u021D" +
    "\u0230\x05\x9EP\x02\u021E\u0230\x05\x9AN\x02\u021F\u0230\x05\x9CO\x02" +
    "\u0220\u0230\x058\x1D\x02\u0221\u0230\x05\xB4[\x02\u0222\u0230\x05\x8E" +
    "H\x02\u0223\u0230\x05\xA0Q\x02\u0224\u0230\x05p9\x02\u0225\u0230\x05z" +
    ">\x02\u0226\u0230\x05l7\x02\u0227\u0230\x05`1\x02\u0228\u0230\x05b2\x02" +
    "\u0229\u0230\x05f4\x02\u022A\u0230\x05d3\x02\u022B\u0230\x05h5\x02\u022C" +
    "\u0230\x05\x8CG\x02\u022D\u0230\x05\xAEX\x02\u022E\u0230\x05\xBC_\x02" +
    "\u022F\u0219\x03\x02\x02\x02\u022F\u021A\x03\x02\x02\x02\u022F\u021B\x03" +
    "\x02\x02\x02\u022F\u021C\x03\x02\x02\x02\u022F\u021D\x03\x02\x02\x02\u022F" +
    "\u021E\x03\x02\x02\x02\u022F\u021F\x03\x02\x02\x02\u022F\u0220\x03\x02" +
    "\x02\x02\u022F\u0221\x03\x02\x02\x02\u022F\u0222\x03\x02\x02\x02\u022F" +
    "\u0223\x03\x02\x02\x02\u022F\u0224\x03\x02\x02\x02\u022F\u0225\x03\x02" +
    "\x02\x02\u022F\u0226\x03\x02\x02\x02\u022F\u0227\x03\x02\x02\x02\u022F" +
    "\u0228\x03\x02\x02\x02\u022F\u0229\x03\x02\x02\x02\u022F\u022A\x03\x02" +
    "\x02\x02\u022F\u022B\x03\x02\x02\x02\u022F\u022C\x03\x02\x02\x02\u022F" +
    "\u022D\x03\x02\x02\x02\u022F\u022E\x03\x02\x02\x02\u02301\x03\x02\x02" +
    "\x02\u0231\u0233\x071\x02\x02\u0232\u0231\x03\x02\x02\x02\u0233\u0236" +
    "\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02" +
    "\u0235\u0237\x03\x02\x02\x02\u0236\u0234\x03\x02\x02\x02\u0237\u023B\x05" +
    "4\x1B\x02\u0238\u023A\x054\x1B\x02\u0239\u0238\x03\x02\x02\x02\u023A\u023D" +
    "\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02" +
    "\u023C\u0241\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E\u0240\x07" +
    "1\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241" +
    "\u023F\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u02423\x03\x02\x02" +
    "\x02\u0243\u0241\x03\x02\x02\x02\u0244\u024F\x056\x1C\x02\u0245\u024F" +
    "\x05p9\x02\u0246\u024F\x05z>\x02\u0247\u024F\x05l7\x02\u0248\u024F\x05" +
    "`1\x02\u0249\u024F\x05b2\x02\u024A\u024F\x05f4\x02\u024B\u024F\x05d3\x02" +
    "\u024C\u024F\x05\x92J\x02\u024D\u024F\x05\x9CO\x02\u024E\u0244\x03\x02" +
    "\x02\x02\u024E\u0245\x03\x02\x02\x02\u024E\u0246\x03\x02\x02\x02\u024E" +
    "\u0247\x03\x02\x02\x02\u024E\u0248\x03\x02\x02\x02\u024E\u0249\x03\x02" +
    "\x02\x02\u024E\u024A\x03\x02\x02\x02\u024E\u024B\x03\x02\x02\x02\u024E" +
    "\u024C\x03\x02\x02\x02\u024E\u024D\x03\x02\x02\x02\u024F\u0253\x03\x02" +
    "\x02\x02\u0250\u0252\x071\x02\x02\u0251\u0250\x03\x02\x02\x02\u0252\u0255" +
    "\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02" +
    "\u02545\x03\x02\x02\x02\u0255\u0253\x03\x02\x02\x02\u0256\u0259\x07\x9A" +
    "\x02\x02\u0257\u0259\x05\xB4[\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0257" +
    "\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u0258\x03\x02\x02\x02" +
    "\u025A\u025B\x03\x02\x02\x02\u025B7\x03\x02\x02\x02\u025C\u0264\x05:\x1E" +
    "\x02\u025D\u0263\x05:\x1E\x02\u025E\u0263\x05\x9AN\x02\u025F\u0263\x05" +
    "\x9CO\x02\u0260\u0263\x05\x88E\x02\u0261\u0263\x05\x8EH\x02\u0262\u025D" +
    "\x03\x02\x02\x02\u0262\u025E\x03\x02\x02\x02\u0262\u025F\x03\x02\x02\x02" +
    "\u0262\u0260\x03\x02\x02\x02\u0262\u0261\x03\x02\x02\x02\u0263\u0266\x03" +
    "\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265" +
    "9\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0267\u026B\x07\r\x02\x02" +
    "\u0268\u026C\x07/\x02\x02\u0269\u026C\x070\x02\x02\u026A\u026C\x03\x02" +
    "\x02\x02\u026B\u0268\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B" +
    "\u026A\x03\x02\x02\x02\u026C\u0270\x03\x02\x02\x02\u026D\u026F\x05\xB4" +
    "[\x02\u026E\u026D\x03\x02\x02\x02\u026F\u0272\x03\x02\x02\x02\u0270\u026E" +
    "\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0273\x03\x02\x02\x02" +
    "\u0272\u0270\x03\x02\x02\x02\u0273\u0274\x05\xB6\\\x02\u0274;\x03\x02" +
    "\x02\x02\u0275\u0276\x07D\x02\x02\u0276\u0277\x07/\x02\x02\u0277\u0278" +
    "\x07\x17\x02\x02\u0278=\x03\x02\x02\x02\u0279\u027B\x05@!\x02\u027A\u0279" +
    "\x03\x02\x02\x02\u027B\u027E\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02" +
    "\u027C\u027D\x03\x02\x02\x02\u027D\u0284\x03\x02\x02\x02\u027E\u027C\x03" +
    "\x02\x02\x02\u027F\u0283\x07\x86\x02\x02\u0280\u0283\x07\x87\x02\x02\u0281" +
    "\u0283\x05B\"\x02\u0282\u027F\x03\x02\x02\x02\u0282\u0280\x03\x02\x02" +
    "\x02\u0282\u0281\x03\x02\x02\x02\u0283\u0286\x03\x02\x02\x02\u0284\u0282" +
    "\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285?\x03\x02\x02\x02\u0286" +
    "\u0284\x03\x02\x02\x02\u0287\u0288\t\x04\x02\x02\u0288A\x03\x02\x02\x02" +
    "\u0289\u0293\x05F$\x02\u028A\u0293\x05~@\x02\u028B\u0293\x05H%\x02\u028C" +
    "\u0293\x05J&\x02\u028D\u0293\x05L\'\x02\u028E\u0293\x05N(\x02\u028F\u0293" +
    "\x05P)\x02\u0290\u0293\x05R*\x02\u0291\u0293\x07]\x02\x02\u0292\u0289" +
    "\x03\x02\x02\x02\u0292\u028A\x03\x02\x02\x02\u0292\u028B\x03\x02\x02\x02" +
    "\u0292\u028C\x03\x02\x02\x02\u0292\u028D\x03\x02\x02\x02\u0292\u028E\x03" +
    "\x02\x02\x02\u0292\u028F\x03\x02\x02\x02\u0292\u0290\x03\x02\x02\x02\u0292" +
    "\u0291\x03\x02\x02\x02\u0293C\x03\x02\x02\x02\u0294\u029A\x07\x84\x02" +
    "\x02\u0295\u029A\x07\x85\x02\x02\u0296\u029A\x07\x86\x02\x02\u0297\u029A" +
    "\x07\x87\x02\x02\u0298\u029A\x03\x02\x02\x02\u0299\u0294\x03\x02\x02\x02" +
    "\u0299\u0295\x03\x02\x02\x02\u0299\u0296\x03\x02\x02\x02\u0299\u0297\x03" +
    "\x02\x02\x02\u0299\u0298\x03\x02\x02\x02\u029AE\x03\x02\x02\x02\u029B" +
    "\u029E\x07T\x02\x02\u029C\u029F\x07*\x02\x02\u029D\u029F\x07\x97\x02\x02" +
    "\u029E\u029C\x03\x02\x02\x02\u029E\u029D\x03\x02\x02\x02\u029E\u029F\x03" +
    "\x02\x02\x02\u029F\u02AA\x03\x02\x02\x02\u02A0\u02A2\x07k\x02\x02\u02A1" +
    "\u02A3\x07*\x02\x02\u02A2\u02A1\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02" +
    "\x02\u02A3\u02AA\x03\x02\x02\x02\u02A4\u02A6\x07U\x02\x02\u02A5\u02A7" +
    "\x07*\x02\x02\u02A6\u02A5\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02" +
    "\u02A7\u02AA\x03\x02\x02\x02\u02A8\u02AA\x07V\x02\x02\u02A9\u029B\x03" +
    "\x02\x02\x02\u02A9\u02A0\x03\x02\x02\x02\u02A9\u02A4\x03\x02\x02\x02\u02A9" +
    "\u02A8\x03\x02\x02\x02\u02AAG\x03\x02\x02\x02\u02AB\u02AE\t\x05\x02\x02" +
    "\u02AC\u02AD\x07\x18\x02\x02\u02AD\u02AF\x07,\x02\x02\u02AE\u02AC\x03" +
    "\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AFI\x03\x02\x02\x02\u02B0" +
    "\u02B1\t\x06\x02\x02\u02B1K\x03\x02\x02\x02\u02B2\u02B3\t\x07\x02\x02" +
    "\u02B3M\x03\x02\x02\x02\u02B4\u02B5\t\b\x02\x02\u02B5O\x03\x02\x02\x02" +
    "\u02B6\u02B7\t\t\x02\x02\u02B7Q\x03\x02\x02\x02\u02B8\u02B9\t\n\x02\x02" +
    "\u02B9S\x03\x02\x02\x02\u02BA\u02BB\t\v\x02\x02\u02BBU\x03\x02\x02\x02" +
    "\u02BC\u02BD\t\f\x02\x02\u02BDW\x03\x02\x02\x02\u02BE\u02BF\t\r\x02\x02" +
    "\u02BFY\x03\x02\x02\x02\u02C0\u02C1\t\x0E\x02\x02\u02C1[\x03\x02\x02\x02" +
    "\u02C2\u02C5\x07b\x02\x02\u02C3\u02C4\x07\x18\x02\x02\u02C4\u02C6\x07" +
    ",\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6" +
    "\u02D2\x03\x02\x02\x02\u02C7\u02CA\x07t\x02\x02\u02C8\u02C9\x07\x18\x02" +
    "\x02\u02C9\u02CB\x07,\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02CB" +
    "\x03\x02\x02\x02\u02CB\u02D2\x03\x02\x02\x02\u02CC\u02CF\x07\x80\x02\x02" +
    "\u02CD\u02CE\x07\x18\x02\x02\u02CE\u02D0\x07,\x02\x02\u02CF\u02CD\x03" +
    "\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D2\x03\x02\x02\x02\u02D1" +
    "\u02C2\x03\x02\x02\x02\u02D1\u02C7\x03\x02\x02\x02\u02D1\u02CC\x03\x02" +
    "\x02\x02\u02D2]\x03\x02\x02\x02\u02D3\u02D4\t\x0F\x02\x02\u02D4_\x03\x02" +
    "\x02\x02\u02D5\u02D6\x05T+\x02\u02D6\u02D7\x07\x18\x02\x02\u02D7\u02D8" +
    "\x05\x86D\x02\u02D8\u02D9\x07\x17\x02\x02\u02D9\u02DC\x03\x02\x02\x02" +
    "\u02DA\u02DC\x07-\x02\x02\u02DB\u02D5\x03\x02\x02\x02\u02DB\u02DA\x03" +
    "\x02\x02\x02\u02DCa\x03\x02\x02\x02\u02DD\u02DE\x05V,\x02\u02DE\u02DF" +
    "\x07\x18\x02\x02\u02DF\u02E0\x05\x86D\x02\u02E0\u02E5\x07\x17\x02\x02" +
    "\u02E1\u02E2\x07G\x02\x02\u02E2\u02E3\x05\xBA^\x02\u02E3\u02E4\x07\x17" +
    "\x02\x02\u02E4\u02E6\x03\x02\x02\x02\u02E5\u02E1\x03\x02\x02\x02\u02E5" +
    "\u02E6\x03\x02\x02\x02\u02E6c\x03\x02\x02\x02\u02E7\u02E8\x05Z.\x02\u02E8" +
    "\u02E9\x07\x18\x02\x02\u02E9\u02EA\x05\x86D\x02\u02EA\u02EF\x07\x17\x02" +
    "\x02\u02EB\u02EC\x07G\x02\x02\u02EC\u02ED\x05\xBA^\x02\u02ED\u02EE\x07" +
    "\x17\x02\x02\u02EE\u02F0\x03\x02\x02\x02\u02EF\u02EB\x03\x02\x02\x02\u02EF" +
    "\u02F0\x03\x02\x02\x02\u02F0e\x03\x02\x02\x02\u02F1\u02F2\x05X-\x02\u02F2" +
    "\u02F5\x07\x18\x02\x02\u02F3\u02F6\x05\x86D\x02\u02F4\u02F6\x05\x84C\x02" +
    "\u02F5\u02F3\x03\x02\x02\x02\u02F5\u02F4\x03\x02\x02\x02\u02F6\u02F7\x03" +
    "\x02\x02\x02\u02F7\u02FC\x07\x17\x02\x02\u02F8\u02F9\x07G\x02\x02\u02F9" +
    "\u02FA\x05\xBA^\x02\u02FA\u02FB\x07\x17\x02\x02\u02FB\u02FD\x03\x02\x02" +
    "\x02\u02FC\u02F8\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FDg\x03" +
    "\x02\x02\x02\u02FE\u0302\x05j6\x02\u02FF\u0301\x05\x82B\x02\u0300\u02FF" +
    "\x03\x02\x02\x02\u0301\u0304\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02" +
    "\u0302\u0303\x03\x02\x02\x02\u0303i\x03\x02\x02\x02\u0304\u0302\x03\x02" +
    "\x02\x02\u0305\u0306\x05^0\x02\u0306\u030A\x07\x18\x02\x02\u0307\u0309" +
    "\x07\x04\x02\x02\u0308\u0307\x03\x02\x02\x02\u0309\u030C\x03\x02\x02\x02" +
    "\u030A\u0308\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030D\x03" +
    "\x02\x02\x02\u030C\u030A\x03\x02\x02\x02\u030D\u030E\x05\x86D\x02\u030E" +
    "\u030F\x07\x17\x02\x02\u030Fk\x03\x02\x02\x02\u0310\u0314\x05n8\x02\u0311" +
    "\u0313\x05\x82B\x02\u0312\u0311\x03\x02\x02\x02\u0313\u0316\x03\x02\x02" +
    "\x02\u0314\u0312\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315m\x03" +
    "\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0317\u0318\x05\\/\x02\u0318" +
    "\u0319\x07\x18\x02\x02\u0319\u031A\x05\x86D\x02\u031A\u031F\x07\x17\x02" +
    "\x02\u031B\u031C\x07G\x02\x02\u031C\u031D\x05\xBA^\x02\u031D\u031E\x07" +
    "\x17\x02\x02\u031E\u0320\x03\x02\x02\x02\u031F\u031B\x03\x02\x02\x02\u031F" +
    "\u0320\x03\x02\x02\x02\u0320o\x03\x02\x02\x02\u0321\u0325\x05r:\x02\u0322" +
    "\u0324\x05v<\x02\u0323\u0322\x03\x02\x02\x02\u0324\u0327\x03\x02\x02\x02" +
    "\u0325\u0323\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u032A\x03" +
    "\x02\x02\x02\u0327\u0325\x03\x02\x02\x02\u0328\u0329\x071\x02\x02\u0329" +
    "\u032B\x07I\x02\x02\u032A\u0328\x03\x02\x02\x02\u032A\u032B\x03\x02\x02" +
    "\x02\u032Bq\x03\x02\x02\x02\u032C\u032D\x05t;\x02\u032D\u0331\x07\x18" +
    "\x02\x02\u032E\u0330\x07\x04\x02\x02\u032F\u032E\x03\x02\x02\x02\u0330" +
    "\u0333\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02" +
    "\x02\x02\u0332\u0334\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0334" +
    "\u0335\x05\x86D\x02\u0335\u0336\x07\x17\x02\x02\u0336s\x03\x02\x02\x02" +
    "\u0337\u033A\x07_\x02\x02\u0338\u033B\x07*\x02\x02\u0339\u033B\x07\x97" +
    "\x02\x02\u033A\u0338\x03\x02\x02\x02\u033A\u0339\x03\x02\x02\x02\u033A" +
    "\u033B\x03\x02\x02\x02\u033B\u0346\x03\x02\x02\x02\u033C\u033E\x07s\x02" +
    "\x02\u033D\u033F\x07*\x02\x02\u033E\u033D\x03\x02\x02\x02\u033E\u033F" +
    "\x03\x02\x02\x02\u033F\u0346\x03\x02\x02\x02\u0340\u0342\x07`\x02\x02" +
    "\u0341\u0343\x07*\x02\x02\u0342\u0341\x03\x02\x02\x02\u0342\u0343\x03" +
    "\x02\x02\x02\u0343\u0346\x03\x02\x02\x02\u0344\u0346\x07a\x02\x02\u0345" +
    "\u0337\x03\x02\x02\x02\u0345\u033C\x03\x02\x02\x02\u0345\u0340\x03\x02" +
    "\x02\x02\u0345\u0344\x03\x02\x02\x02\u0346u\x03\x02\x02\x02\u0347\u0348" +
    "\x07E\x02\x02\u0348\u0349\x07\x18\x02\x02\u0349\u034A\x05\x86D\x02\u034A" +
    "\u034B\x07\x17\x02\x02\u034B\u0359\x03\x02\x02\x02\u034C\u034D\t\x10\x02" +
    "\x02\u034D\u034E\x07\x18\x02\x02\u034E\u034F\x07/\x02\x02\u034F\u0359" +
    "\x07\x17\x02\x02\u0350\u0354\t\x11\x02\x02\u0351\u0353\v\x02\x02\x02\u0352" +
    "\u0351\x03\x02\x02\x02\u0353\u0356\x03\x02\x02\x02\u0354\u0355\x03\x02" +
    "\x02\x02\u0354\u0352\x03\x02\x02\x02\u0355\u0357\x03\x02\x02\x02\u0356" +
    "\u0354\x03\x02\x02\x02\u0357\u0359\x07\x17\x02\x02\u0358\u0347\x03\x02" +
    "\x02\x02\u0358\u034C\x03\x02\x02\x02\u0358\u0350\x03\x02\x02\x02\u0359" +
    "w\x03\x02\x02\x02\u035A\u035B\x07E\x02\x02\u035B\u035C\x07\x18\x02\x02" +
    "\u035C\u035D\x05\x86D\x02\u035D\u035E\x07\x17\x02\x02\u035E\u036C\x03" +
    "\x02\x02\x02\u035F\u0360\t\x10\x02\x02\u0360\u0361\x07\x18\x02\x02\u0361" +
    "\u0362\x07/\x02\x02\u0362\u036C\x07\x17\x02\x02\u0363\u0367\t\x11\x02" +
    "\x02\u0364\u0366\v\x02\x02\x02\u0365\u0364\x03\x02\x02\x02\u0366\u0369" +
    "\x03\x02\x02\x02\u0367\u0368\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02" +
    "\u0368\u036A\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02\u036A\u036C\x07" +
    "\x17\x02\x02\u036B\u035A\x03\x02\x02\x02\u036B\u035F\x03\x02\x02\x02\u036B" +
    "\u0363\x03\x02\x02\x02\u036Cy\x03\x02\x02\x02\u036D\u0371\x05|?\x02\u036E" +
    "\u0370\x05\x82B\x02\u036F\u036E\x03\x02\x02\x02\u0370\u0373\x03\x02\x02" +
    "\x02\u0371\u036F\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372{\x03" +
    "\x02\x02\x02\u0373\u0371\x03\x02\x02\x02\u0374\u0375\x05\x80A\x02\u0375" +
    "\u0376\x07\x18\x02\x02\u0376\u0377\x05\x86D\x02\u0377\u037C\x07\x17\x02" +
    "\x02\u0378\u0379\x07G\x02\x02\u0379\u037A\x05\xBA^\x02\u037A\u037B\x07" +
    "\x17\x02\x02\u037B\u037D\x03\x02\x02\x02\u037C\u0378\x03\x02\x02\x02\u037C" +
    "\u037D\x03\x02\x02\x02\u037D}\x03\x02\x02\x02\u037E\u0381\x07S\x02\x02" +
    "\u037F\u0380\x07\x18\x02\x02\u0380\u0382\x07+\x02\x02\u0381\u037F\x03" +
    "\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\u0389\x03\x02\x02\x02\u0383" +
    "\u0386\x07j\x02\x02\u0384\u0385\x07\x18\x02\x02\u0385\u0387\x07+\x02\x02" +
    "\u0386\u0384\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0389\x03" +
    "\x02\x02\x02\u0388\u037E\x03\x02\x02\x02\u0388\u0383\x03\x02\x02\x02\u0389" +
    "\x7F\x03\x02\x02\x02\u038A\u038D\x07^\x02\x02\u038B\u038C\x07\x18\x02" +
    "\x02\u038C\u038E\x07+\x02\x02\u038D\u038B\x03\x02\x02\x02\u038D\u038E" +
    "\x03\x02\x02\x02\u038E\u039A\x03\x02\x02\x02\u038F\u0392\x07r\x02\x02" +
    "\u0390\u0391\x07\x18\x02\x02\u0391\u0393\x07+\x02\x02\u0392\u0390\x03" +
    "\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u039A\x03\x02\x02\x02\u0394" +
    "\u0397\x07\x81\x02\x02\u0395\u0396\x07\x18\x02\x02\u0396\u0398\x07+\x02" +
    "\x02\u0397\u0395\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u039A" +
    "\x03\x02\x02\x02\u0399\u038A\x03\x02\x02\x02\u0399\u038F\x03\x02\x02\x02" +
    "\u0399\u0394\x03\x02\x02\x02\u039A\x81\x03\x02\x02\x02\u039B\u039C\x07" +
    "\x10\x02\x02\u039C\u039F\x05\xB4[\x02\u039D\u039F\x07E\x02\x02\u039E\u039B" +
    "\x03\x02\x02\x02\u039E\u039D\x03\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02" +
    "\u03A0\u03A4\x07\x18\x02\x02\u03A1\u03A3\x07\x04\x02\x02\u03A2\u03A1\x03" +
    "\x02\x02\x02\u03A3\u03A6\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A4" +
    "\u03A5\x03\x02\x02\x02\u03A5\u03A9\x03\x02\x02\x02\u03A6\u03A4\x03\x02" +
    "\x02\x02\u03A7\u03AA\x05\xB4[\x02\u03A8\u03AA\x071\x02\x02\u03A9\u03A7" +
    "\x03\x02\x02\x02\u03A9\u03A8\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02" +
    "\u03AB\u03A9\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AD\x03" +
    "\x02\x02\x02\u03AD\u03BB\x07\x17\x02\x02\u03AE\u03AF\t\x10\x02\x02\u03AF" +
    "\u03B0\x07\x18\x02\x02\u03B0\u03B1\x07/\x02\x02\u03B1\u03BB\x07\x17\x02" +
    "\x02\u03B2\u03B6\t\x11\x02\x02\u03B3\u03B5\v\x02\x02\x02\u03B4\u03B3\x03" +
    "\x02\x02\x02\u03B5\u03B8\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B6" +
    "\u03B4\x03\x02\x02\x02\u03B7\u03B9\x03\x02\x02\x02\u03B8\u03B6\x03\x02" +
    "\x02\x02\u03B9\u03BB\x07\x17\x02\x02\u03BA\u039E\x03\x02\x02\x02\u03BA" +
    "\u03AE\x03\x02\x02\x02\u03BA\u03B2\x03\x02\x02\x02\u03BB\x83\x03\x02\x02" +
    "\x02\u03BC\u03BD\x07\x96\x02\x02\u03BD\u03BE\x07\x1B\x02\x02\u03BE\u03BF" +
    "\x07/\x02\x02\u03BF\x85\x03\x02\x02\x02\u03C0\u03C1\x07\x99\x02\x02\u03C1" +
    "\x87\x03\x02\x02\x02\u03C2\u03C3\x07\x15\x02\x02\u03C3\u03CB\x07\x17\x02" +
    "\x02\u03C4\u03C6\x07\x04\x02\x02\u03C5\u03C4\x03\x02\x02\x02\u03C6\u03C9" +
    "\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02" +
    "\u03C8\u03CA\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03CA\u03CC\x05" +
    "\x8AF\x02\u03CB\u03C7\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC" +
    "\u03E1\x03\x02\x02\x02\u03CD\u03CE\x07\x15\x02\x02\u03CE\u03D3\x05\xB4" +
    "[\x02\u03CF\u03D2\x07\x18\x02\x02\u03D0\u03D2\x05\xBA^\x02\u03D1\u03CF" +
    "\x03\x02\x02\x02\u03D1\u03D0\x03\x02\x02\x02\u03D2\u03D5\x03\x02\x02\x02" +
    "\u03D3\u03D1\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4\u03D6\x03" +
    "\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D6\u03DE\x07\x17\x02\x02\u03D7" +
    "\u03D9\x07\x04\x02\x02\u03D8\u03D7\x03\x02\x02\x02\u03D9\u03DC\x03\x02" +
    "\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB" +
    "\u03DD\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DD\u03DF\x05\x8A" +
    "F\x02\u03DE\u03DA\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF\u03E1" +
    "\x03\x02\x02\x02\u03E0\u03C2\x03\x02\x02\x02\u03E0\u03CD\x03\x02\x02\x02" +
    "\u03E1\x89\x03\x02\x02\x02\u03E2\u03E3\x07\x15\x02\x02\u03E3\u03E8\x05" +
    "\xB4[\x02\u03E4\u03E7\x07\x18\x02\x02\u03E5\u03E7\x05\xBA^\x02\u03E6\u03E4" +
    "\x03\x02\x02\x02\u03E6\u03E5\x03\x02\x02\x02\u03E7\u03EA\x03\x02\x02\x02";
interviewParser._serializedATNSegment2 = "\u03E8\u03E6\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9\u03EB\x03" +
    "\x02\x02\x02\u03EA\u03E8\x03\x02\x02\x02\u03EB\u03EC\x07\x17\x02\x02\u03EC" +
    "\x8B\x03\x02\x02\x02\u03ED\u03EF\x07\n\x02\x02\u03EE\u03F0\x05\xB4[\x02" +
    "\u03EF\u03EE\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F1\x03" +
    "\x02\x02\x02\u03F1\u03F8\x07\x17\x02\x02\u03F2\u03F4\x07\v\x02\x02\u03F3" +
    "\u03F5\x05\xB4[\x02\u03F4\u03F3\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02" +
    "\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F8\x07\x17\x02\x02\u03F7\u03ED" +
    "\x03\x02\x02\x02\u03F7\u03F2\x03\x02\x02\x02\u03F8\x8D\x03\x02\x02\x02" +
    "\u03F9\u0401\x07?\x02\x02\u03FA\u0401\x07=\x02\x02\u03FB\u03FD\x07>\x02" +
    "\x02\u03FC\u03FE\x073\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FD\u03FE" +
    "\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\u0401\x07\x02\x02\x03" +
    "\u0400\u03F9\x03\x02\x02\x02\u0400\u03FA\x03\x02\x02\x02\u0400\u03FB\x03" +
    "\x02\x02\x02\u0401\x8F\x03\x02\x02\x02\u0402\u0404\x07i\x02\x02\u0403" +
    "\u0405\x05\xB4[\x02\u0404\u0403\x03\x02\x02\x02\u0404\u0405\x03\x02\x02" +
    "\x02\u0405\u041B\x03\x02\x02\x02\u0406\u0410\x05\xB4[\x02\u0407\u040B" +
    "\x071\x02\x02\u0408\u040A\x07\x04\x02\x02\u0409\u0408\x03\x02\x02\x02" +
    "\u040A\u040D\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040B\u040C\x03" +
    "\x02\x02\x02\u040C\u040F\x03\x02\x02\x02\u040D\u040B\x03\x02\x02\x02\u040E" +
    "\u0407\x03\x02\x02\x02\u040F\u0412\x03\x02\x02\x02\u0410\u040E\x03\x02" +
    "\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411\u0416\x03\x02\x02\x02\u0412" +
    "\u0410\x03\x02\x02\x02\u0413\u0415\x071\x02\x02\u0414\u0413\x03\x02\x02" +
    "\x02\u0415\u0418\x03\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0416\u0417" +
    "\x03\x02\x02\x02\u0417\u041A\x03\x02\x02\x02\u0418\u0416\x03\x02\x02\x02" +
    "\u0419\u0406\x03\x02\x02\x02\u041A\u041D\x03\x02\x02\x02\u041B\u0419\x03" +
    "\x02\x02\x02\u041B\u041C\x03\x02\x02\x02\u041C\u041E\x03\x02\x02\x02\u041D" +
    "\u041B\x03\x02\x02\x02\u041E\u042A\x07\x17\x02\x02\u041F\u0425\x07i\x02" +
    "\x02\u0420\u0424\x05\xB4[\x02\u0421\u0424\x071\x02\x02\u0422\u0424\x07" +
    "\x04\x02\x02\u0423\u0420\x03\x02\x02\x02\u0423\u0421\x03\x02\x02\x02\u0423" +
    "\u0422\x03\x02\x02\x02\u0424\u0427\x03\x02\x02\x02\u0425\u0423\x03\x02" +
    "\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u0428\x03\x02\x02\x02\u0427" +
    "\u0425\x03\x02\x02\x02\u0428\u042A\x07\x02\x02\x03\u0429\u0402\x03\x02" +
    "\x02\x02\u0429\u041F\x03\x02\x02\x02\u042A\x91\x03\x02\x02\x02\u042B\u0430" +
    "\x077\x02\x02\u042C\u0431\x05\xB4[\x02\u042D\u0431\x07\x18\x02\x02\u042E" +
    "\u0431\x07\x99\x02\x02\u042F\u0431\x071\x02\x02\u0430\u042C\x03\x02\x02" +
    "\x02\u0430\u042D\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u042F" +
    "\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02" +
    "\u0432\u0433\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0442\x07" +
    "\x17\x02\x02\u0435\u043D\x077\x02\x02\u0436\u043C\x05\xB4[\x02\u0437\u043C" +
    "\x07\x18\x02\x02\u0438\u043C\x07\x99\x02\x02\u0439\u043C\x071\x02\x02" +
    "\u043A\u043C\x07\x04\x02\x02\u043B\u0436\x03\x02\x02\x02\u043B\u0437\x03" +
    "\x02\x02\x02\u043B\u0438\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043B" +
    "\u043A\x03\x02\x02\x02\u043C\u043F\x03\x02\x02\x02\u043D\u043B\x03\x02" +
    "\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E\u0440\x03\x02\x02\x02\u043F" +
    "\u043D\x03\x02\x02\x02\u0440\u0442\x07\x02\x02\x03\u0441\u042B\x03\x02" +
    "\x02\x02\u0441\u0435\x03\x02\x02\x02\u0442\x93\x03\x02\x02\x02\u0443\u0444" +
    "\x076\x02\x02\u0444\u0445\x05\xB4[\x02\u0445\u0446\x07\x17\x02\x02\u0446" +
    "\x95\x03\x02\x02\x02\u0447\u044B\x07P\x02\x02\u0448\u044C\x05\xB4[\x02" +
    "\u0449\u044C\x07\x18\x02\x02\u044A\u044C\x071\x02\x02\u044B\u0448\x03" +
    "\x02\x02\x02\u044B\u0449\x03\x02\x02\x02\u044B\u044A\x03\x02\x02\x02\u044C" +
    "\u044D\x03\x02\x02\x02\u044D\u044B\x03\x02\x02\x02\u044D\u044E\x03\x02" +
    "\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F\u0451\x07\x17\x02\x02\u0450" +
    "\u0452\x05\x98M\x02\u0451\u0450\x03\x02\x02\x02\u0451\u0452\x03\x02\x02" +
    "\x02\u0452\x97\x03\x02\x02\x02\u0453\u0457\x07P\x02\x02\u0454\u0458\x05" +
    "\xB4[\x02\u0455\u0458\x07\x18\x02\x02\u0456\u0458\x071\x02\x02\u0457\u0454" +
    "\x03\x02\x02\x02\u0457\u0455\x03\x02\x02\x02\u0457\u0456\x03\x02\x02\x02" +
    "\u0458\u0459\x03\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u0459\u045A\x03" +
    "\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u045C\x07\x17\x02\x02\u045C" +
    "\x99\x03\x02\x02\x02\u045D\u0461\x07\x0E\x02\x02\u045E\u0460\x071\x02" +
    "\x02\u045F\u045E\x03\x02\x02\x02\u0460\u0463\x03\x02\x02\x02\u0461\u045F" +
    "\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0465\x03\x02\x02\x02" +
    "\u0463\u0461\x03\x02\x02\x02\u0464\u0466\x05\xB4[\x02\u0465\u0464\x03" +
    "\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466\u047C\x03\x02\x02\x02\u0467" +
    "\u0471\x05\xB4[\x02\u0468\u046C\x071\x02\x02\u0469\u046B\x07\x04\x02\x02" +
    "\u046A\u0469\x03\x02\x02\x02\u046B\u046E\x03\x02\x02\x02\u046C\u046A\x03" +
    "\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u0470\x03\x02\x02\x02\u046E" +
    "\u046C\x03\x02\x02\x02\u046F\u0468\x03\x02\x02\x02\u0470\u0473\x03\x02" +
    "\x02\x02\u0471\u046F\x03\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472" +
    "\u0477\x03\x02\x02\x02\u0473\u0471\x03\x02\x02\x02\u0474\u0476\x071\x02" +
    "\x02\u0475\u0474\x03\x02\x02\x02\u0476\u0479\x03\x02\x02\x02\u0477\u0475" +
    "\x03\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u047B\x03\x02\x02\x02" +
    "\u0479\u0477\x03\x02\x02\x02\u047A\u0467\x03\x02\x02\x02\u047B\u047E\x03" +
    "\x02\x02\x02\u047C\u047A\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D" +
    "\u047F\x03\x02\x02\x02\u047E\u047C\x03\x02\x02\x02\u047F\u048C\x07\x17" +
    "\x02\x02\u0480\u0484\x07\x0E\x02\x02\u0481\u0483\x071\x02\x02\u0482\u0481" +
    "\x03\x02\x02\x02\u0483\u0486\x03\x02\x02\x02\u0484\u0482\x03\x02\x02\x02" +
    "\u0484\u0485\x03\x02\x02\x02\u0485\u0488\x03\x02\x02\x02\u0486\u0484\x03" +
    "\x02\x02\x02\u0487\u0489\x05\xB4[\x02\u0488\u0487\x03\x02\x02\x02\u0488" +
    "\u0489\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u048C\x07\x02" +
    "\x02\x03\u048B\u045D\x03\x02\x02\x02\u048B\u0480\x03\x02\x02\x02\u048C" +
    "\x9B\x03\x02\x02\x02\u048D\u048F\x07\x0F\x02\x02\u048E\u0490\n\x12\x02" +
    "\x02\u048F\u048E\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u048F" +
    "\x03\x02\x02\x02\u0491\u0492\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02" +
    "\u0493\u0494\x07\x17\x02\x02\u0494\x9D\x03\x02\x02\x02\u0495\u0498\x07" +
    "\x16\x02\x02\u0496\u0499\x05\xB4[\x02\u0497\u0499\x071\x02\x02\u0498\u0496" +
    "\x03\x02\x02\x02\u0498\u0497\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02" +
    "\u049A\u0498\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u049C\x03" +
    "\x02\x02\x02\u049C\u04A2\x07\x17\x02\x02\u049D\u049E\x07\x16\x02\x02\u049E" +
    "\u049F\x05\xB4[\x02\u049F\u04A0\x07\x02\x02\x03\u04A0\u04A2\x03\x02\x02" +
    "\x02\u04A1\u0495\x03\x02\x02\x02\u04A1\u049D\x03\x02\x02\x02\u04A2\x9F" +
    "\x03\x02\x02\x02\u04A3\u04A4\x07B\x02\x02\u04A4\u04A5\x05\xB4[\x02\u04A5" +
    "\u04A6\x07\x17\x02\x02\u04A6\u04AC\x03\x02\x02\x02\u04A7\u04A8\x07C\x02" +
    "\x02\u04A8\u04A9\x05\xB4[\x02\u04A9\u04AA\x07\x17\x02\x02\u04AA\u04AC" +
    "\x03\x02\x02\x02\u04AB\u04A3\x03\x02\x02\x02\u04AB\u04A7\x03\x02\x02\x02" +
    "\u04AC\xA1\x03\x02\x02\x02\u04AD\u04AE\x07:\x02\x02\u04AE\u04AF\x07\x18" +
    "\x02\x02\u04AF\u04B0\x07/\x02\x02\u04B0\u04B7\x07\x17\x02\x02\u04B1\u04B2" +
    "\x07:\x02\x02\u04B2\u04B3\x07\x18\x02\x02\u04B3\u04B4\x05\xB4[\x02\u04B4" +
    "\u04B5\x07\x17\x02\x02\u04B5\u04B7\x03\x02\x02\x02\u04B6\u04AD\x03\x02" +
    "\x02\x02\u04B6\u04B1\x03\x02\x02\x02\u04B7\xA3\x03\x02\x02\x02\u04B8\u04B9" +
    "\x07N\x02\x02\u04B9\u04BA\x05\xB4[\x02\u04BA\u04BB\x07\x17\x02\x02\u04BB" +
    "\xA5\x03\x02\x02\x02\u04BC\u04BD\x07O\x02\x02\u04BD\u04BE\x05\xB4[\x02" +
    "\u04BE\u04BF\x07\x17\x02\x02\u04BF\xA7\x03\x02\x02\x02\u04C0\u04CA\x05" +
    "\xAAV\x02\u04C1\u04C3\x071\x02\x02\u04C2\u04C1\x03\x02\x02\x02\u04C3\u04C6" +
    "\x03\x02\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02" +
    "\u04C5\u04C7\x03\x02\x02\x02\u04C6\u04C4\x03\x02\x02\x02\u04C7\u04C9\x05" +
    "\xAAV\x02\u04C8\u04C4\x03\x02\x02\x02\u04C9\u04CC\x03\x02\x02\x02\u04CA" +
    "\u04C8\x03\x02\x02\x02\u04CA\u04CB\x03\x02\x02\x02\u04CB\xA9\x03\x02\x02" +
    "\x02\u04CC\u04CA\x03\x02\x02\x02\u04CD\u04CE\x07\x10\x02\x02\u04CE\u04CF" +
    "\x05\xB4[\x02\u04CF\u04D0\t\x13\x02\x02\u04D0\u04D6\x05\xB4[\x02\u04D1" +
    "\u04D5\x071\x02\x02\u04D2\u04D5\x07\x18\x02\x02\u04D3\u04D5\x05\xB4[\x02" +
    "\u04D4\u04D1\x03\x02\x02\x02\u04D4\u04D2\x03\x02\x02\x02\u04D4\u04D3\x03" +
    "\x02\x02\x02\u04D5\u04D8\x03\x02\x02\x02\u04D6\u04D4\x03\x02\x02\x02\u04D6" +
    "\u04D7\x03\x02\x02\x02\u04D7\u04D9\x03\x02\x02\x02\u04D8\u04D6\x03\x02" +
    "\x02\x02\u04D9\u04DA\x07\x17\x02\x02\u04DA\u04E4\x03\x02\x02\x02\u04DB" +
    "\u04DF\x07L\x02\x02\u04DC\u04DE\v\x02\x02\x02\u04DD\u04DC\x03\x02\x02" +
    "\x02\u04DE\u04E1\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04DF\u04DD" +
    "\x03\x02\x02\x02\u04E0\u04E2\x03\x02\x02\x02\u04E1\u04DF\x03\x02\x02\x02" +
    "\u04E2\u04E4\x07\x17\x02\x02\u04E3\u04CD\x03\x02\x02\x02\u04E3\u04DB\x03" +
    "\x02\x02\x02\u04E4\xAB\x03\x02\x02\x02\u04E5\u04E9\x07\x07\x02\x02\u04E6" +
    "\u04EA\x05\xB4[\x02\u04E7\u04EA\x07\x18\x02\x02\u04E8\u04EA\x071\x02\x02" +
    "\u04E9\u04E6\x03\x02\x02\x02\u04E9\u04E7\x03\x02\x02\x02\u04E9\u04E8\x03" +
    "\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EB" +
    "\u04EC\x03\x02\x02\x02\u04EC\u04ED\x03\x02\x02\x02\u04ED\u04F9\x07\x17" +
    "\x02\x02\u04EE\u04F4\x07\x07\x02\x02\u04EF\u04F3\x05\xB4[\x02\u04F0\u04F3" +
    "\x07\x18\x02\x02\u04F1\u04F3\x071\x02\x02\u04F2\u04EF\x03\x02\x02\x02" +
    "\u04F2\u04F0\x03\x02\x02\x02\u04F2\u04F1\x03\x02\x02\x02\u04F3\u04F6\x03" +
    "\x02\x02\x02\u04F4\u04F2\x03\x02\x02\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5" +
    "\u04F7\x03\x02\x02\x02\u04F6\u04F4\x03\x02\x02\x02\u04F7\u04F9\x07\x02" +
    "\x02\x03\u04F8\u04E5\x03\x02\x02\x02\u04F8\u04EE\x03\x02\x02\x02\u04F9" +
    "\xAD\x03\x02\x02\x02\u04FA\u04FC\x07\f\x02\x02\u04FB\u04FD\x05\xB4[\x02" +
    "\u04FC\u04FB\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD\u04FE\x03" +
    "\x02\x02\x02\u04FE\u04FF\x07\x17\x02\x02\u04FF\xAF\x03\x02\x02\x02\u0500" +
    "\u0501\x07\x1A\x02\x02\u0501\xB1\x03\x02\x02\x02\u0502\u0504\x05\xB4[" +
    "\x02\u0503\u0505\x071\x02\x02\u0504\u0503\x03\x02\x02\x02\u0504\u0505" +
    "\x03\x02\x02\x02\u0505\u0507\x03\x02\x02\x02\u0506\u0502\x03\x02\x02\x02" +
    "\u0507\u0508\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02\u0508\u0509\x03" +
    "\x02\x02\x02\u0509\xB3\x03\x02\x02\x02\u050A\u0511\x070\x02\x02\u050B" +
    "\u050D\x07\x04\x02\x02\u050C\u050B\x03\x02\x02\x02\u050D\u050E\x03\x02" +
    "\x02\x02\u050E\u050C\x03\x02\x02\x02\u050E\u050F\x03\x02\x02\x02\u050F" +
    "\u0510\x03\x02\x02\x02\u0510\u0512\x07/\x02\x02\u0511\u050C\x03\x02\x02" +
    "\x02\u0511\u0512\x03\x02\x02\x02\u0512\u053A\x03\x02\x02\x02\u0513\u051A" +
    "\x05\xBA^\x02\u0514\u0516\x07\x04\x02\x02\u0515\u0514\x03\x02\x02\x02" +
    "\u0516\u0517\x03\x02\x02\x02\u0517\u0515\x03\x02\x02\x02\u0517\u0518\x03" +
    "\x02\x02\x02\u0518\u0519\x03\x02\x02\x02\u0519\u051B\x07/\x02\x02\u051A" +
    "\u0515\x03\x02\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B\u053A\x03\x02" +
    "\x02\x02\u051C\u053A\x07/\x02\x02\u051D\u051E\x07\x13\x02\x02\u051E\u051F" +
    "\x05\xB4[\x02\u051F\u0520\x07\x17\x02\x02\u0520\u053A\x03\x02\x02\x02" +
    "\u0521\u053A\x071\x02\x02\u0522\u0524\x07\x04\x02\x02\u0523\u0522\x03" +
    "\x02\x02\x02\u0524\u0527\x03\x02\x02\x02\u0525\u0523\x03\x02\x02\x02\u0525" +
    "\u0526\x03\x02\x02\x02\u0526\u0528\x03\x02\x02\x02\u0527\u0525\x03\x02" +
    "\x02\x02\u0528\u052C\x07\x18\x02\x02\u0529\u052B\x07\x04\x02\x02\u052A" +
    "\u0529\x03\x02\x02\x02\u052B\u052E\x03\x02\x02\x02\u052C\u052A\x03\x02" +
    "\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D\u053A\x03\x02\x02\x02\u052E" +
    "\u052C\x03\x02\x02\x02\u052F\u0533\x07\x19\x02\x02\u0530\u0532\x07\x04" +
    "\x02\x02\u0531\u0530\x03\x02\x02\x02\u0532\u0535\x03\x02\x02\x02\u0533" +
    "\u0531\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02\u0534\u053A\x03\x02" +
    "\x02\x02\u0535\u0533\x03\x02\x02\x02\u0536\u053A\x07\x1A\x02\x02\u0537" +
    "\u053A\x07!\x02\x02\u0538\u053A\x07\x99\x02\x02\u0539\u050A\x03\x02\x02" +
    "\x02\u0539\u0513\x03\x02\x02\x02\u0539\u051C\x03\x02\x02\x02\u0539\u051D" +
    "\x03\x02\x02\x02\u0539\u0521\x03\x02\x02\x02\u0539\u0525\x03\x02\x02\x02" +
    "\u0539\u052F\x03\x02\x02\x02\u0539\u0536\x03\x02\x02\x02\u0539\u0537\x03" +
    "\x02\x02\x02\u0539\u0538\x03\x02\x02\x02\u053A\xB5\x03\x02\x02\x02\u053B" +
    "\u053C\x07\x17\x02\x02\u053C\xB7\x03\x02\x02\x02\u053D\u053E\t\x14\x02" +
    "\x02\u053E\xB9\x03\x02\x02\x02\u053F\u054B\x070\x02\x02\u0540\u054B\x07" +
    "3\x02\x02\u0541\u054B\x072\x02\x02\u0542\u054B\x074\x02\x02\u0543\u054B" +
    "\x07\x19\x02\x02\u0544\u0545\x07\x1D\x02\x02\u0545\u054B\n\x15\x02\x02" +
    "\u0546\u0547\x07\x1E\x02\x02\u0547\u054B\n\x16\x02\x02\u0548\u054B\x07" +
    " \x02\x02\u0549\u054B\x07\x1F\x02\x02\u054A\u053F\x03\x02\x02\x02\u054A" +
    "\u0540\x03\x02\x02\x02\u054A\u0541\x03\x02\x02\x02\u054A\u0542\x03\x02" +
    "\x02\x02\u054A\u0543\x03\x02\x02\x02\u054A\u0544\x03\x02\x02\x02\u054A" +
    "\u0546\x03\x02\x02\x02\u054A\u0548\x03\x02\x02\x02\u054A\u0549\x03\x02" +
    "\x02\x02\u054B\u054C\x03\x02\x02\x02\u054C\u054A\x03\x02\x02\x02\u054C" +
    "\u054D\x03\x02\x02\x02\u054D\xBB\x03\x02\x02\x02\u054E\u054F\x07\x04\x02" +
    "\x02\u054F\xBD\x03\x02\x02\x02\xC5\xC2\xC8\xCD\xD2\xDB\xE3\xEA\xEF\xF6" +
    "\xFD\u0100\u0104\u010A\u010E\u0116\u011D\u0122\u012A\u012F\u0136\u013A" +
    "\u013E\u0149\u014E\u0152\u0158\u0165\u0167\u016C\u0171\u0179\u017B\u017E" +
    "\u018A\u018C\u0190\u0195\u019D\u019F\u01A2\u01A4\u01A9\u01AD\u01B1\u01B6" +
    "\u01BB\u01BE\u01C2\u01C6\u01D2\u01DA\u01DD\u01E2\u01E8\u01EA\u01EF\u01F3" +
    "\u01F9\u0201\u0209\u020F\u0213\u0215\u022F\u0234\u023B\u0241\u024E\u0253" +
    "\u0258\u025A\u0262\u0264\u026B\u0270\u027C\u0282\u0284\u0292\u0299\u029E" +
    "\u02A2\u02A6\u02A9\u02AE\u02C5\u02CA\u02CF\u02D1\u02DB\u02E5\u02EF\u02F5" +
    "\u02FC\u0302\u030A\u0314\u031F\u0325\u032A\u0331\u033A\u033E\u0342\u0345" +
    "\u0354\u0358\u0367\u036B\u0371\u037C\u0381\u0386\u0388\u038D\u0392\u0397" +
    "\u0399\u039E\u03A4\u03A9\u03AB\u03B6\u03BA\u03C7\u03CB\u03D1\u03D3\u03DA" +
    "\u03DE\u03E0\u03E6\u03E8\u03EF\u03F4\u03F7\u03FD\u0400\u0404\u040B\u0410" +
    "\u0416\u041B\u0423\u0425\u0429\u0430\u0432\u043B\u043D\u0441\u044B\u044D" +
    "\u0451\u0457\u0459\u0461\u0465\u046C\u0471\u0477\u047C\u0484\u0488\u048B" +
    "\u0491\u0498\u049A\u04A1\u04AB\u04B6\u04C4\u04CA\u04D4\u04D6\u04DF\u04E3" +
    "\u04E9\u04EB\u04F2\u04F4\u04F8\u04FC\u0504\u0508\u050E\u0511\u0517\u051A" +
    "\u0525\u052C\u0533\u0539\u054A\u054C";
interviewParser._serializedATN = Utils.join([
    interviewParser._serializedATNSegment0,
    interviewParser._serializedATNSegment1,
    interviewParser._serializedATNSegment2,
], "");
class BitmarkContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(interviewParser.EOF, 0); }
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
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_bitmark; }
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
    interviews() {
        return this.getRuleContext(0, InterviewsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_bitmark_; }
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
class InterviewsContext extends ParserRuleContext_1.ParserRuleContext {
    interview() {
        return this.tryGetRuleContext(0, InterviewContext);
    }
    interview_instruction_grouped() {
        return this.tryGetRuleContext(0, Interview_instruction_groupedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interviews; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterviews) {
            listener.enterInterviews(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterviews) {
            listener.exitInterviews(this);
        }
    }
}
exports.InterviewsContext = InterviewsContext;
class InterviewContext extends ParserRuleContext_1.ParserRuleContext {
    BitInterview() { return this.getToken(interviewParser.BitInterview, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    mcrsep_end() {
        return this.getRuleContext(0, Mcrsep_endContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
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
    mcrsep(i) {
        if (i === undefined) {
            return this.getRuleContexts(McrsepContext);
        }
        else {
            return this.getRuleContext(i, McrsepContext);
        }
    }
    interview_footer() {
        return this.tryGetRuleContext(0, Interview_footerContext);
    }
    interview_qanda(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_qandaContext);
        }
        else {
            return this.getRuleContext(i, Interview_qandaContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview) {
            listener.enterInterview(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview) {
            listener.exitInterview(this);
        }
    }
}
exports.InterviewContext = InterviewContext;
class Interview_instruction_groupedContext extends ParserRuleContext_1.ParserRuleContext {
    BitInterviewinstgrp() { return this.getToken(interviewParser.BitInterviewinstgrp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    mcrsep_end() {
        return this.getRuleContext(0, Mcrsep_endContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
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
    mcrsep(i) {
        if (i === undefined) {
            return this.getRuleContexts(McrsepContext);
        }
        else {
            return this.getRuleContext(i, McrsepContext);
        }
    }
    interview_footer() {
        return this.tryGetRuleContext(0, Interview_footerContext);
    }
    interview_qanda(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_qandaContext);
        }
        else {
            return this.getRuleContext(i, Interview_qandaContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_instruction_grouped; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_instruction_grouped) {
            listener.enterInterview_instruction_grouped(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_instruction_grouped) {
            listener.exitInterview_instruction_grouped(this);
        }
    }
}
exports.Interview_instruction_groupedContext = Interview_instruction_groupedContext;
class McrsepContext extends ParserRuleContext_1.ParserRuleContext {
    NL() { return this.tryGetToken(interviewParser.NL, 0); }
    HSPL() { return this.tryGetToken(interviewParser.HSPL, 0); }
    HSPL2() { return this.tryGetToken(interviewParser.HSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_mcrsep; }
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
    HSPL() { return this.tryGetToken(interviewParser.HSPL, 0); }
    HSPL2() { return this.tryGetToken(interviewParser.HSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_mcrsep_end; }
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
class McrmiscContext extends ParserRuleContext_1.ParserRuleContext {
    interview_qanda() {
        return this.getRuleContext(0, Interview_qandaContext);
    }
    NL() { return this.getToken(interviewParser.NL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_mcrmisc; }
    // @Override
    enterRule(listener) {
        if (listener.enterMcrmisc) {
            listener.enterMcrmisc(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMcrmisc) {
            listener.exitMcrmisc(this);
        }
    }
}
exports.McrmiscContext = McrmiscContext;
class Interview_qandaContext extends ParserRuleContext_1.ParserRuleContext {
    interview_qanda__(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_qanda__Context);
        }
        else {
            return this.getRuleContext(i, Interview_qanda__Context);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_qanda; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_qanda) {
            listener.enterInterview_qanda(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_qanda) {
            listener.exitInterview_qanda(this);
        }
    }
}
exports.Interview_qandaContext = Interview_qandaContext;
class Interview_qanda__Context extends ParserRuleContext_1.ParserRuleContext {
    interview_text() {
        return this.tryGetRuleContext(0, Interview_textContext);
    }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
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
    example(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExampleContext);
        }
        else {
            return this.getRuleContext(i, ExampleContext);
        }
    }
    shortans(i) {
        if (i === undefined) {
            return this.getRuleContexts(ShortansContext);
        }
        else {
            return this.getRuleContext(i, ShortansContext);
        }
    }
    longans(i) {
        if (i === undefined) {
            return this.getRuleContexts(LongansContext);
        }
        else {
            return this.getRuleContext(i, LongansContext);
        }
    }
    dollarans(i) {
        if (i === undefined) {
            return this.getRuleContexts(DollaransContext);
        }
        else {
            return this.getRuleContext(i, DollaransContext);
        }
    }
    partans(i) {
        if (i === undefined) {
            return this.getRuleContexts(PartansContext);
        }
        else {
            return this.getRuleContext(i, PartansContext);
        }
    }
    single_gap(i) {
        if (i === undefined) {
            return this.getRuleContexts(Single_gapContext);
        }
        else {
            return this.getRuleContext(i, Single_gapContext);
        }
    }
    mark_text(i) {
        if (i === undefined) {
            return this.getRuleContexts(Mark_textContext);
        }
        else {
            return this.getRuleContext(i, Mark_textContext);
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
    interview_sometext(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_sometextContext);
        }
        else {
            return this.getRuleContext(i, Interview_sometextContext);
        }
    }
    NL() { return this.tryGetToken(interviewParser.NL, 0); }
    interview_answer() {
        return this.tryGetRuleContext(0, Interview_answerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_qanda__; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_qanda__) {
            listener.enterInterview_qanda__(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_qanda__) {
            listener.exitInterview_qanda__(this);
        }
    }
}
exports.Interview_qanda__Context = Interview_qanda__Context;
class Interview_sometextContext extends ParserRuleContext_1.ParserRuleContext {
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
    get ruleIndex() { return interviewParser.RULE_interview_sometext; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_sometext) {
            listener.enterInterview_sometext(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_sometext) {
            listener.exitInterview_sometext(this);
        }
    }
}
exports.Interview_sometextContext = Interview_sometextContext;
class Interview_textContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.tryGetToken(interviewParser.STRING, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
    words(i) {
        if (i === undefined) {
            return this.getRuleContexts(WordsContext);
        }
        else {
            return this.getRuleContext(i, WordsContext);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    LIST_LINE() { return this.tryGetToken(interviewParser.LIST_LINE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_text) {
            listener.enterInterview_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_text) {
            listener.exitInterview_text(this);
        }
    }
}
exports.Interview_textContext = Interview_textContext;
class Interview_answerContext extends ParserRuleContext_1.ParserRuleContext {
    words(i) {
        if (i === undefined) {
            return this.getRuleContexts(WordsContext);
        }
        else {
            return this.getRuleContext(i, WordsContext);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_answer; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_answer) {
            listener.enterInterview_answer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_answer) {
            listener.exitInterview_answer(this);
        }
    }
}
exports.Interview_answerContext = Interview_answerContext;
class LongansContext extends ParserRuleContext_1.ParserRuleContext {
    AtLonganswer() { return this.getToken(interviewParser.AtLonganswer, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_longans; }
    // @Override
    enterRule(listener) {
        if (listener.enterLongans) {
            listener.enterLongans(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLongans) {
            listener.exitLongans(this);
        }
    }
}
exports.LongansContext = LongansContext;
class ShortansContext extends ParserRuleContext_1.ParserRuleContext {
    AtShortanswer() { return this.getToken(interviewParser.AtShortanswer, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_shortans; }
    // @Override
    enterRule(listener) {
        if (listener.enterShortans) {
            listener.enterShortans(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitShortans) {
            listener.exitShortans(this);
        }
    }
}
exports.ShortansContext = ShortansContext;
class PartansContext extends ParserRuleContext_1.ParserRuleContext {
    AtPartialAnswer() { return this.tryGetToken(interviewParser.AtPartialAnswer, 0); }
    AtPartialAnswerS() { return this.tryGetToken(interviewParser.AtPartialAnswerS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_partans; }
    // @Override
    enterRule(listener) {
        if (listener.enterPartans) {
            listener.enterPartans(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPartans) {
            listener.exitPartans(this);
        }
    }
}
exports.PartansContext = PartansContext;
class Mark_textContext extends ParserRuleContext_1.ParserRuleContext {
    OPS() { return this.getToken(interviewParser.OPS, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_mark_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterMark_text) {
            listener.enterMark_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMark_text) {
            listener.exitMark_text(this);
        }
    }
}
exports.Mark_textContext = Mark_textContext;
class QueryContext extends ParserRuleContext_1.ParserRuleContext {
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtExamplecl() { return this.tryGetToken(interviewParser.AtExamplecl, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_query; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery) {
            listener.enterQuery(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery) {
            listener.exitQuery(this);
        }
    }
}
exports.QueryContext = QueryContext;
class AnswerContext extends ParserRuleContext_1.ParserRuleContext {
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    OR() { return this.tryGetToken(interviewParser.OR, 0); }
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_answer; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnswer) {
            listener.enterAnswer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnswer) {
            listener.exitAnswer(this);
        }
    }
}
exports.AnswerContext = AnswerContext;
class HeadingContext extends ParserRuleContext_1.ParserRuleContext {
    key_title() {
        return this.getRuleContext(0, Key_titleContext);
    }
    value_title() {
        return this.getRuleContext(0, Value_titleContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_heading; }
    // @Override
    enterRule(listener) {
        if (listener.enterHeading) {
            listener.enterHeading(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHeading) {
            listener.exitHeading(this);
        }
    }
}
exports.HeadingContext = HeadingContext;
class Key_titleContext extends ParserRuleContext_1.ParserRuleContext {
    OPHASH() { return this.getToken(interviewParser.OPHASH, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
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
    get ruleIndex() { return interviewParser.RULE_key_title; }
    // @Override
    enterRule(listener) {
        if (listener.enterKey_title) {
            listener.enterKey_title(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitKey_title) {
            listener.exitKey_title(this);
        }
    }
}
exports.Key_titleContext = Key_titleContext;
class Value_titleContext extends ParserRuleContext_1.ParserRuleContext {
    OPHASH() { return this.getToken(interviewParser.OPHASH, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
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
    get ruleIndex() { return interviewParser.RULE_value_title; }
    // @Override
    enterRule(listener) {
        if (listener.enterValue_title) {
            listener.enterValue_title(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue_title) {
            listener.exitValue_title(this);
        }
    }
}
exports.Value_titleContext = Value_titleContext;
class Ml_exampleContext extends ParserRuleContext_1.ParserRuleContext {
    AtExamplecol() { return this.getToken(interviewParser.AtExamplecol, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    lines() {
        return this.tryGetRuleContext(0, LinesContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_ml_example; }
    // @Override
    enterRule(listener) {
        if (listener.enterMl_example) {
            listener.enterMl_example(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMl_example) {
            listener.exitMl_example(this);
        }
    }
}
exports.Ml_exampleContext = Ml_exampleContext;
class BitElemContext extends ParserRuleContext_1.ParserRuleContext {
    NOTBITMARK() { return this.tryGetToken(interviewParser.NOTBITMARK, 0); }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    atdef() {
        return this.tryGetRuleContext(0, AtdefContext);
    }
    reference() {
        return this.tryGetRuleContext(0, ReferenceContext);
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
    gap() {
        return this.tryGetRuleContext(0, GapContext);
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
    get ruleIndex() { return interviewParser.RULE_bitElem; }
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
class Interview_footerContext extends ParserRuleContext_1.ParserRuleContext {
    footer_resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(Footer_resourceContext);
        }
        else {
            return this.getRuleContext(i, Footer_resourceContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_footer; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_footer) {
            listener.enterInterview_footer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_footer) {
            listener.exitInterview_footer(this);
        }
    }
}
exports.Interview_footerContext = Interview_footerContext;
class Footer_resourceContext extends ParserRuleContext_1.ParserRuleContext {
    footer_text() {
        return this.tryGetRuleContext(0, Footer_textContext);
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
    reference() {
        return this.tryGetRuleContext(0, ReferenceContext);
    }
    hint() {
        return this.tryGetRuleContext(0, HintContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_footer_resource; }
    // @Override
    enterRule(listener) {
        if (listener.enterFooter_resource) {
            listener.enterFooter_resource(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFooter_resource) {
            listener.exitFooter_resource(this);
        }
    }
}
exports.Footer_resourceContext = Footer_resourceContext;
class Footer_textContext extends ParserRuleContext_1.ParserRuleContext {
    LIST_LINE(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.LIST_LINE);
        }
        else {
            return this.getToken(interviewParser.LIST_LINE, i);
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_footer_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterFooter_text) {
            listener.enterFooter_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFooter_text) {
            listener.exitFooter_text(this);
        }
    }
}
exports.Footer_textContext = Footer_textContext;
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
    get ruleIndex() { return interviewParser.RULE_gap; }
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
    OPU() { return this.getToken(interviewParser.OPU, 0); }
    clnsp() {
        return this.getRuleContext(0, ClnspContext);
    }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    STRING() { return this.tryGetToken(interviewParser.STRING, 0); }
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
    get ruleIndex() { return interviewParser.RULE_single_gap; }
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
class AtpointContext extends ParserRuleContext_1.ParserRuleContext {
    AtPoints() { return this.getToken(interviewParser.AtPoints, 0); }
    NUMERIC() { return this.getToken(interviewParser.NUMERIC, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_atpoint; }
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
            return this.getTokens(interviewParser.ColonText);
        }
        else {
            return this.getToken(interviewParser.ColonText, i);
        }
    }
    ColonJson(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.ColonJson);
        }
        else {
            return this.getToken(interviewParser.ColonJson, i);
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
    get ruleIndex() { return interviewParser.RULE_format; }
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
    BitmarkMinus() { return this.tryGetToken(interviewParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(interviewParser.BitmarkPlus, 0); }
    Prosemirror() { return this.tryGetToken(interviewParser.Prosemirror, 0); }
    Placeholder() { return this.tryGetToken(interviewParser.Placeholder, 0); }
    ColonJson() { return this.tryGetToken(interviewParser.ColonJson, 0); }
    AmpArticle() { return this.tryGetToken(interviewParser.AmpArticle, 0); }
    AmpDocument() { return this.tryGetToken(interviewParser.AmpDocument, 0); }
    AmpWebsite() { return this.tryGetToken(interviewParser.AmpWebsite, 0); }
    AmpStillImageFilm() { return this.tryGetToken(interviewParser.AmpStillImageFilm, 0); }
    AmpAudioLink() { return this.tryGetToken(interviewParser.AmpAudioLink, 0); }
    AmpImageLink() { return this.tryGetToken(interviewParser.AmpImageLink, 0); }
    AmpVideoLink() { return this.tryGetToken(interviewParser.AmpVideoLink, 0); }
    AmpArticleLink() { return this.tryGetToken(interviewParser.AmpArticleLink, 0); }
    AmpDocumentLink() { return this.tryGetToken(interviewParser.AmpDocumentLink, 0); }
    AmpAppLink() { return this.tryGetToken(interviewParser.AmpAppLink, 0); }
    AmpWebsiteLink() { return this.tryGetToken(interviewParser.AmpWebsiteLink, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(interviewParser.AmpStillImageFilmLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(interviewParser.AmpVideoEmbed, 0); }
    AmpAudioEmbed() { return this.tryGetToken(interviewParser.AmpAudioEmbed, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(interviewParser.AmpDocumentEmbed, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(interviewParser.AmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_resource_format; }
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
    AmpPdf() { return this.tryGetToken(interviewParser.AmpPdf, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_resource_format_extra; }
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
    BitmarkMinus() { return this.tryGetToken(interviewParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(interviewParser.BitmarkPlus, 0); }
    ColonText() { return this.tryGetToken(interviewParser.ColonText, 0); }
    ColonJson() { return this.tryGetToken(interviewParser.ColonJson, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_format2; }
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
    AmpImage() { return this.tryGetToken(interviewParser.AmpImage, 0); }
    Image_type() { return this.tryGetToken(interviewParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(interviewParser.DotArticleAtt, 0); }
    AmpImageLink() { return this.tryGetToken(interviewParser.AmpImageLink, 0); }
    AmpImageZoom() { return this.tryGetToken(interviewParser.AmpImageZoom, 0); }
    AmpImageWAudio() { return this.tryGetToken(interviewParser.AmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_image_format; }
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
    AmpVideo() { return this.tryGetToken(interviewParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(interviewParser.AmpVideoLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(interviewParser.AmpVideoEmbed, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    Video_type() { return this.tryGetToken(interviewParser.Video_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_video_format; }
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
    AmpArticle() { return this.tryGetToken(interviewParser.AmpArticle, 0); }
    AmpArticleLink() { return this.tryGetToken(interviewParser.AmpArticleLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_article_format; }
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
    AmpDocument() { return this.tryGetToken(interviewParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(interviewParser.AmpDocumentLink, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(interviewParser.AmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_document_format; }
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
    AmpApp() { return this.tryGetToken(interviewParser.AmpApp, 0); }
    AmpAppLink() { return this.tryGetToken(interviewParser.AmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_app_format; }
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
    AmpWebsite() { return this.tryGetToken(interviewParser.AmpWebsite, 0); }
    AmpWebsiteLink() { return this.tryGetToken(interviewParser.AmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_website_format; }
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
    AmpStillImageFilm() { return this.tryGetToken(interviewParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(interviewParser.AmpStillImageFilmLink, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(interviewParser.AmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_stillimagefilm_format; }
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
    OpAmpArticleLink() { return this.tryGetToken(interviewParser.OpAmpArticleLink, 0); }
    OpAmpArticle() { return this.tryGetToken(interviewParser.OpAmpArticle, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_article_format; }
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
    OpAmpDocumentLink() { return this.tryGetToken(interviewParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(interviewParser.OpAmpDocument, 0); }
    OpAmpDocumentEmbed() { return this.tryGetToken(interviewParser.OpAmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_document_format; }
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
    OpAmpApp() { return this.tryGetToken(interviewParser.OpAmpApp, 0); }
    OpAmpAppLink() { return this.tryGetToken(interviewParser.OpAmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_app_format; }
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
    OpAmpWebsite() { return this.tryGetToken(interviewParser.OpAmpWebsite, 0); }
    OpAmpWebsiteLink() { return this.tryGetToken(interviewParser.OpAmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_website_format; }
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
    OpAmpVideo() { return this.tryGetToken(interviewParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    Video_type() { return this.tryGetToken(interviewParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(interviewParser.OpAmpVideoLink, 0); }
    OpAmpVideoEmbed() { return this.tryGetToken(interviewParser.OpAmpVideoEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_video_format; }
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
    OpAmpStillImageFilm() { return this.tryGetToken(interviewParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(interviewParser.OpAmpStillImageFilmLink, 0); }
    OpAmpStillImageFilmEmbed() { return this.tryGetToken(interviewParser.OpAmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_stillimagefilm_format; }
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
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
    ArticleText() { return this.tryGetToken(interviewParser.ArticleText, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_articlebit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_documentbit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_websitebit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_appbit; }
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
    get ruleIndex() { return interviewParser.RULE_stillimagefilmbit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_stillimg_one; }
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
    get ruleIndex() { return interviewParser.RULE_videobit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_video_one; }
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
    NL() { return this.tryGetToken(interviewParser.NL, 0); }
    ShowInIndex() { return this.tryGetToken(interviewParser.ShowInIndex, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_imagebit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_image_one; }
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
    OpAmpImage() { return this.tryGetToken(interviewParser.OpAmpImage, 0); }
    Image_type() { return this.tryGetToken(interviewParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(interviewParser.DotArticleAtt, 0); }
    OpAmpImageLink() { return this.tryGetToken(interviewParser.OpAmpImageLink, 0); }
    OpAmpImageZoom() { return this.tryGetToken(interviewParser.OpAmpImageZoom, 0); }
    OpAmpImageWAudio() { return this.tryGetToken(interviewParser.OpAmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_image_format; }
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
    AtSrc() { return this.tryGetToken(interviewParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(interviewParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(interviewParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(interviewParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(interviewParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(interviewParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_image_chained; }
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
    AtSrc() { return this.tryGetToken(interviewParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(interviewParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(interviewParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(interviewParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(interviewParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(interviewParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_image_chained4match; }
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
    get ruleIndex() { return interviewParser.RULE_audiobit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_audio_one; }
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
    AmpAudio() { return this.tryGetToken(interviewParser.AmpAudio, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(interviewParser.Audio_type, 0); }
    AmpAudioLink() { return this.tryGetToken(interviewParser.AmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_audio_format; }
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
    OpAmpAudio() { return this.tryGetToken(interviewParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(interviewParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(interviewParser.OpAmpAudioLink, 0); }
    OpAmpAudioEmbed() { return this.tryGetToken(interviewParser.OpAmpAudioEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_audio_format; }
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
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    OPA() { return this.tryGetToken(interviewParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtSrc() { return this.tryGetToken(interviewParser.AtSrc, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(interviewParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(interviewParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(interviewParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(interviewParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(interviewParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_resource_chained; }
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
    TEL() { return this.getToken(interviewParser.TEL, 0); }
    PLUS() { return this.getToken(interviewParser.PLUS, 0); }
    NUMERIC() { return this.getToken(interviewParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_telephone; }
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
    URL() { return this.getToken(interviewParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_url; }
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
    OPC() { return this.getToken(interviewParser.OPC, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
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
    get ruleIndex() { return interviewParser.RULE_item; }
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
    OPC() { return this.getToken(interviewParser.OPC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
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
    get ruleIndex() { return interviewParser.RULE_lead; }
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
    OPRANGLES() { return this.tryGetToken(interviewParser.OPRANGLES, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(interviewParser.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_angleref; }
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
    AtExamplecl() { return this.tryGetToken(interviewParser.AtExamplecl, 0); }
    AtExampleWithStr() { return this.tryGetToken(interviewParser.AtExampleWithStr, 0); }
    AtExamplecol() { return this.tryGetToken(interviewParser.AtExamplecol, 0); }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    SENTENCE() { return this.tryGetToken(interviewParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_example; }
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
    BracEnclose() { return this.getToken(interviewParser.BracEnclose, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_bracketed_text; }
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
    AtReference() { return this.getToken(interviewParser.AtReference, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    URL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.URL);
        }
        else {
            return this.getToken(interviewParser.URL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_reference; }
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
    AtProgress() { return this.getToken(interviewParser.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_progress; }
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
    AtDate() { return this.getToken(interviewParser.AtDate, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    dateprop_chained() {
        return this.tryGetRuleContext(0, Dateprop_chainedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_dateprop; }
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
    AtDate() { return this.getToken(interviewParser.AtDate, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_dateprop_chained; }
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
    OPB() { return this.getToken(interviewParser.OPB, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
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
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_instruction; }
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
    OPQ() { return this.getToken(interviewParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_hint; }
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
    OPHASH() { return this.getToken(interviewParser.OPHASH, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_title; }
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
    AtLabeltrue() { return this.tryGetToken(interviewParser.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    AtLabelfalse() { return this.tryGetToken(interviewParser.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_bool_label; }
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
    AtProgressPoints() { return this.getToken(interviewParser.AtProgressPoints, 0); }
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_progress_points; }
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
    OpAtIsTracked() { return this.getToken(interviewParser.OpAtIsTracked, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_istracked; }
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
    OpAtIsInfoOnly() { return this.getToken(interviewParser.OpAtIsInfoOnly, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_isinfoonly; }
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
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_atdef; }
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
    OPA() { return this.tryGetToken(interviewParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    DBLCOLON() { return this.tryGetToken(interviewParser.DBLCOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    OpAtCopyright() { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_atdef_; }
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
    OPDOLL() { return this.getToken(interviewParser.OPDOLL, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_dollarans; }
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
    OPDANGLE() { return this.getToken(interviewParser.OPDANGLE, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_anchor; }
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
    DBLCOLON() { return this.getToken(interviewParser.DBLCOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_dcolon; }
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
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_lines; }
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
    STRING() { return this.tryGetToken(interviewParser.STRING, 0); }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    OPS() { return this.tryGetToken(interviewParser.OPS, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
    NL() { return this.tryGetToken(interviewParser.NL, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    AMP() { return this.tryGetToken(interviewParser.AMP, 0); }
    DBLCOLON() { return this.tryGetToken(interviewParser.DBLCOLON, 0); }
    DBLEQ() { return this.tryGetToken(interviewParser.DBLEQ, 0); }
    URL() { return this.tryGetToken(interviewParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_s_and_w; }
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
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_clnsp; }
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
    SSPL() { return this.tryGetToken(interviewParser.SSPL, 0); }
    SSPL2() { return this.tryGetToken(interviewParser.SSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_sspl; }
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
    STRING(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.STRING);
        }
        else {
            return this.getToken(interviewParser.STRING, i);
        }
    }
    SENTENCE(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.SENTENCE);
        }
        else {
            return this.getToken(interviewParser.SENTENCE, i);
        }
    }
    NOTBITMARK(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NOTBITMARK);
        }
        else {
            return this.getToken(interviewParser.NOTBITMARK, i);
        }
    }
    BARSTRING(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.BARSTRING);
        }
        else {
            return this.getToken(interviewParser.BARSTRING, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.AMP);
        }
        else {
            return this.getToken(interviewParser.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.Greater);
        }
        else {
            return this.getToken(interviewParser.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.Less);
        }
        else {
            return this.getToken(interviewParser.Less, i);
        }
    }
    RightArrow(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.RightArrow);
        }
        else {
            return this.getToken(interviewParser.RightArrow, i);
        }
    }
    RightAngle(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.RightAngle);
        }
        else {
            return this.getToken(interviewParser.RightAngle, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_words; }
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
    S() { return this.getToken(interviewParser.S, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_sp; }
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
