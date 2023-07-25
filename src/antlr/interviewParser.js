"use strict";
// Generated from ./antlr/interviewParser.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.S_and_wContext = exports.LinesContext = exports.DcolonContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.Single_gapContext = exports.GapContext = exports.Footer_textContext = exports.Footer_resourceContext = exports.Interview_footerContext = exports.BitElemContext = exports.Ml_exampleContext = exports.Value_titleContext = exports.Key_titleContext = exports.HeadingContext = exports.AnswerContext = exports.QueryContext = exports.Mark_textContext = exports.Sample_soln_propContext = exports.PartansContext = exports.ShortansContext = exports.LongansContext = exports.Interview_answerContext = exports.Interview_textContext = exports.Interview_sometextContext = exports.Interview_qanda__Context = exports.Interview_qandaContext = exports.McrmiscContext = exports.Mcrsep_endContext = exports.McrsepContext = exports.Interview_instruction_groupedContext = exports.InterviewContext = exports.InterviewsContext = exports.Bitmark_Context = exports.BitmarkContext = exports.interviewParser = void 0;
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
                this.state = 203;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 190;
                            this.bitmark_();
                            this.state = 200;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 194;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === interviewParser.S) {
                                                {
                                                    {
                                                        this.state = 191;
                                                        this.match(interviewParser.S);
                                                    }
                                                }
                                                this.state = 196;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 197;
                                            this.match(interviewParser.NL);
                                        }
                                    }
                                }
                                this.state = 202;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            }
                        }
                    }
                    this.state = 205;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === interviewParser.BitInterview || _la === interviewParser.BitInterviewinstgrp);
                this.state = 210;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === interviewParser.NL) {
                    {
                        {
                            this.state = 207;
                            this.match(interviewParser.NL);
                        }
                    }
                    this.state = 212;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 213;
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
                this.state = 215;
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
            this.state = 219;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.BitInterview:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 217;
                        this.interview();
                    }
                    break;
                case interviewParser.BitInterviewinstgrp:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 218;
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
            this.state = 293;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 221;
                        this.match(interviewParser.BitInterview);
                        this.state = 222;
                        this.format();
                        this.state = 223;
                        this.match(interviewParser.CL);
                        this.state = 227;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 224;
                                        this.match(interviewParser.NL);
                                    }
                                }
                            }
                            this.state = 229;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                        }
                        this.state = 239;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 230;
                                        this.bitElem();
                                        this.state = 234;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 231;
                                                        this.match(interviewParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 236;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 241;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 242;
                        this.match(interviewParser.BitInterview);
                        this.state = 243;
                        this.format();
                        this.state = 244;
                        this.match(interviewParser.CL);
                        this.state = 248;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 245;
                                        this.match(interviewParser.NL);
                                    }
                                }
                            }
                            this.state = 250;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                        }
                        this.state = 260;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 251;
                                        this.bitElem();
                                        this.state = 255;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 252;
                                                        this.match(interviewParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 257;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 262;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                        }
                        this.state = 279;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 263;
                                            this.mcrsep();
                                            this.state = 267;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 264;
                                                            this.match(interviewParser.NL);
                                                        }
                                                    }
                                                }
                                                this.state = 269;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                                            }
                                            this.state = 277;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 270;
                                                        this.interview_qanda();
                                                        this.state = 274;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 271;
                                                                        this.match(interviewParser.NL);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 276;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
                            this.state = 281;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 283;
                        this.mcrsep_end();
                        this.state = 287;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 284;
                                        this.match(interviewParser.NL);
                                    }
                                }
                            }
                            this.state = 289;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                        }
                        this.state = 291;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                            case 1:
                                {
                                    this.state = 290;
                                    this.interview_footer();
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
    interview_instruction_grouped() {
        let _localctx = new Interview_instruction_groupedContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, interviewParser.RULE_interview_instruction_grouped);
        try {
            let _alt;
            this.state = 360;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 295;
                        this.match(interviewParser.BitInterviewinstgrp);
                        this.state = 296;
                        this.format();
                        this.state = 297;
                        this.match(interviewParser.CL);
                        this.state = 301;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 298;
                                        this.match(interviewParser.NL);
                                    }
                                }
                            }
                            this.state = 303;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                        }
                        this.state = 313;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 304;
                                        this.bitElem();
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
                                    }
                                }
                            }
                            this.state = 315;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 316;
                        this.match(interviewParser.BitInterviewinstgrp);
                        this.state = 317;
                        this.format();
                        this.state = 318;
                        this.match(interviewParser.CL);
                        this.state = 322;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 319;
                                        this.match(interviewParser.NL);
                                    }
                                }
                            }
                            this.state = 324;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                        }
                        this.state = 334;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 325;
                                        this.bitElem();
                                        this.state = 329;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 326;
                                                        this.match(interviewParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 331;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                                        }
                                    }
                                }
                            }
                            this.state = 336;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                        }
                        this.state = 347;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 337;
                                        this.mcrsep();
                                        {
                                            this.state = 338;
                                            this.interview_qanda();
                                            this.state = 342;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 339;
                                                            this.match(interviewParser.NL);
                                                        }
                                                    }
                                                }
                                                this.state = 344;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                                            }
                                        }
                                    }
                                }
                            }
                            this.state = 349;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                        }
                        this.state = 350;
                        this.mcrsep_end();
                        this.state = 354;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 351;
                                        this.match(interviewParser.NL);
                                    }
                                }
                            }
                            this.state = 356;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                        }
                        this.state = 358;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                            case 1:
                                {
                                    this.state = 357;
                                    this.interview_footer();
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
        this.enterRule(_localctx, 10, interviewParser.RULE_mcrsep);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 364;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.HSPL:
                    case interviewParser.HSPL2:
                        {
                            this.state = 362;
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
                            this.state = 363;
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
                this.state = 366;
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
                this.state = 368;
                this.interview_qanda();
                this.state = 369;
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
                this.state = 371;
                this.interview_qanda__();
                this.state = 380;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 373;
                                this._errHandler.sync(this);
                                _alt = 1;
                                do {
                                    switch (_alt) {
                                        case 1:
                                            {
                                                {
                                                    this.state = 372;
                                                    this.match(interviewParser.NL);
                                                }
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 375;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                this.state = 377;
                                this.interview_qanda__();
                            }
                        }
                    }
                    this.state = 382;
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
    interview_qanda__() {
        let _localctx = new Interview_qanda__Context(this._ctx, this.state);
        this.enterRule(_localctx, 18, interviewParser.RULE_interview_qanda__);
        let _la;
        try {
            let _alt;
            this.state = 470;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 384;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.OPC) {
                            {
                                this.state = 383;
                                this.item();
                            }
                        }
                        this.state = 386;
                        this.interview_text();
                        this.state = 390;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 387;
                                        this.match(interviewParser.S);
                                    }
                                }
                            }
                            this.state = 392;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                        }
                        this.state = 406;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 404;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 393;
                                                this.item();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 394;
                                                this.instruction();
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 395;
                                                this.example();
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 396;
                                                this.shortans();
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 397;
                                                this.longans();
                                            }
                                            break;
                                        case 6:
                                            {
                                                this.state = 398;
                                                this.dollarans();
                                            }
                                            break;
                                        case 7:
                                            {
                                                this.state = 399;
                                                this.partans();
                                            }
                                            break;
                                        case 8:
                                            {
                                                this.state = 400;
                                                this.single_gap();
                                            }
                                            break;
                                        case 9:
                                            {
                                                this.state = 401;
                                                this.mark_text();
                                            }
                                            break;
                                        case 10:
                                            {
                                                this.state = 402;
                                                this.hint();
                                            }
                                            break;
                                        case 11:
                                            {
                                                this.state = 403;
                                                this.interview_sometext();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 408;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                        }
                        this.state = 430;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                            case 1:
                                {
                                    this.state = 409;
                                    this.match(interviewParser.NL);
                                    this.state = 411;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (interviewParser.AMP - 23)) | (1 << (interviewParser.Greater - 23)) | (1 << (interviewParser.Less - 23)) | (1 << (interviewParser.RightAngle - 23)) | (1 << (interviewParser.RightArrow - 23)) | (1 << (interviewParser.STRING - 23)) | (1 << (interviewParser.NOTBITMARK - 23)) | (1 << (interviewParser.ELIPSIS - 23)) | (1 << (interviewParser.SENTENCE - 23)) | (1 << (interviewParser.BARSTRING - 23)))) !== 0)) {
                                        {
                                            this.state = 410;
                                            this.interview_answer();
                                        }
                                    }
                                    this.state = 416;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.S) {
                                        {
                                            {
                                                this.state = 413;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 418;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 427;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.OPDOLL || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (interviewParser.AtShortanswer - 58)) | (1 << (interviewParser.AtLonganswer - 58)) | (1 << (interviewParser.AtExampleWithStr - 58)) | (1 << (interviewParser.AtExamplecol - 58)) | (1 << (interviewParser.AtExamplecl - 58)) | (1 << (interviewParser.AtSampleSolution - 58)) | (1 << (interviewParser.AtPartialAnswerS - 58)) | (1 << (interviewParser.AtPartialAnswer - 58)))) !== 0)) {
                                        {
                                            this.state = 425;
                                            this._errHandler.sync(this);
                                            switch (this._input.LA(1)) {
                                                case interviewParser.AtExampleWithStr:
                                                case interviewParser.AtExamplecol:
                                                case interviewParser.AtExamplecl:
                                                    {
                                                        this.state = 419;
                                                        this.example();
                                                    }
                                                    break;
                                                case interviewParser.AtShortanswer:
                                                    {
                                                        this.state = 420;
                                                        this.shortans();
                                                    }
                                                    break;
                                                case interviewParser.AtLonganswer:
                                                    {
                                                        this.state = 421;
                                                        this.longans();
                                                    }
                                                    break;
                                                case interviewParser.OPDOLL:
                                                    {
                                                        this.state = 422;
                                                        this.dollarans();
                                                    }
                                                    break;
                                                case interviewParser.AtPartialAnswerS:
                                                case interviewParser.AtPartialAnswer:
                                                    {
                                                        this.state = 423;
                                                        this.partans();
                                                    }
                                                    break;
                                                case interviewParser.AtSampleSolution:
                                                    {
                                                        this.state = 424;
                                                        this.sample_soln_prop();
                                                    }
                                                    break;
                                                default:
                                                    throw new NoViableAltException_1.NoViableAltException(this);
                                            }
                                        }
                                        this.state = 429;
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
                        this.state = 443;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 443;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 432;
                                                    this.item();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 433;
                                                    this.instruction();
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 434;
                                                    this.example();
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 435;
                                                    this.shortans();
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 436;
                                                    this.longans();
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 437;
                                                    this.dollarans();
                                                }
                                                break;
                                            case 7:
                                                {
                                                    this.state = 438;
                                                    this.partans();
                                                }
                                                break;
                                            case 8:
                                                {
                                                    this.state = 439;
                                                    this.single_gap();
                                                }
                                                break;
                                            case 9:
                                                {
                                                    this.state = 440;
                                                    this.mark_text();
                                                }
                                                break;
                                            case 10:
                                                {
                                                    this.state = 441;
                                                    this.hint();
                                                }
                                                break;
                                            case 11:
                                                {
                                                    this.state = 442;
                                                    this.interview_sometext();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 445;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 468;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                            case 1:
                                {
                                    this.state = 447;
                                    this.match(interviewParser.NL);
                                    this.state = 449;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (interviewParser.AMP - 23)) | (1 << (interviewParser.Greater - 23)) | (1 << (interviewParser.Less - 23)) | (1 << (interviewParser.RightAngle - 23)) | (1 << (interviewParser.RightArrow - 23)) | (1 << (interviewParser.STRING - 23)) | (1 << (interviewParser.NOTBITMARK - 23)) | (1 << (interviewParser.ELIPSIS - 23)) | (1 << (interviewParser.SENTENCE - 23)) | (1 << (interviewParser.BARSTRING - 23)))) !== 0)) {
                                        {
                                            this.state = 448;
                                            this.interview_answer();
                                        }
                                    }
                                    this.state = 454;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.S) {
                                        {
                                            {
                                                this.state = 451;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 456;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 465;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.OPDOLL || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (interviewParser.AtShortanswer - 58)) | (1 << (interviewParser.AtLonganswer - 58)) | (1 << (interviewParser.AtExampleWithStr - 58)) | (1 << (interviewParser.AtExamplecol - 58)) | (1 << (interviewParser.AtExamplecl - 58)) | (1 << (interviewParser.AtSampleSolution - 58)) | (1 << (interviewParser.AtPartialAnswerS - 58)) | (1 << (interviewParser.AtPartialAnswer - 58)))) !== 0)) {
                                        {
                                            this.state = 463;
                                            this._errHandler.sync(this);
                                            switch (this._input.LA(1)) {
                                                case interviewParser.AtExampleWithStr:
                                                case interviewParser.AtExamplecol:
                                                case interviewParser.AtExamplecl:
                                                    {
                                                        this.state = 457;
                                                        this.example();
                                                    }
                                                    break;
                                                case interviewParser.AtShortanswer:
                                                    {
                                                        this.state = 458;
                                                        this.shortans();
                                                    }
                                                    break;
                                                case interviewParser.AtLonganswer:
                                                    {
                                                        this.state = 459;
                                                        this.longans();
                                                    }
                                                    break;
                                                case interviewParser.OPDOLL:
                                                    {
                                                        this.state = 460;
                                                        this.dollarans();
                                                    }
                                                    break;
                                                case interviewParser.AtPartialAnswerS:
                                                case interviewParser.AtPartialAnswer:
                                                    {
                                                        this.state = 461;
                                                        this.partans();
                                                    }
                                                    break;
                                                case interviewParser.AtSampleSolution:
                                                    {
                                                        this.state = 462;
                                                        this.sample_soln_prop();
                                                    }
                                                    break;
                                                default:
                                                    throw new NoViableAltException_1.NoViableAltException(this);
                                            }
                                        }
                                        this.state = 467;
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
                this.state = 473;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 472;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 475;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
            this.state = 496;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AMP:
                case interviewParser.Greater:
                case interviewParser.Less:
                case interviewParser.RightAngle:
                case interviewParser.RightArrow:
                case interviewParser.STRING:
                case interviewParser.NOTBITMARK:
                case interviewParser.ELIPSIS:
                case interviewParser.SENTENCE:
                case interviewParser.BARSTRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 479;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                            case 1:
                                {
                                    this.state = 477;
                                    this.match(interviewParser.STRING);
                                    this.state = 478;
                                    this.match(interviewParser.CL);
                                }
                                break;
                        }
                        this.state = 491;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 481;
                                            this.words();
                                            this.state = 483;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 482;
                                                        this.match(interviewParser.COLON);
                                                    }
                                                    break;
                                            }
                                            this.state = 488;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 485;
                                                            this.match(interviewParser.NL);
                                                        }
                                                    }
                                                }
                                                this.state = 490;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 493;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case interviewParser.LIST_LINE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 495;
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
                this.state = 502;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 498;
                            this.words();
                            this.state = 500;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.COLON) {
                                {
                                    this.state = 499;
                                    this.match(interviewParser.COLON);
                                }
                            }
                        }
                    }
                    this.state = 504;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (interviewParser.AMP - 23)) | (1 << (interviewParser.Greater - 23)) | (1 << (interviewParser.Less - 23)) | (1 << (interviewParser.RightAngle - 23)) | (1 << (interviewParser.RightArrow - 23)) | (1 << (interviewParser.STRING - 23)) | (1 << (interviewParser.NOTBITMARK - 23)) | (1 << (interviewParser.ELIPSIS - 23)) | (1 << (interviewParser.SENTENCE - 23)) | (1 << (interviewParser.BARSTRING - 23)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
                this.state = 506;
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
                this.state = 508;
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
                this.state = 510;
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
    sample_soln_prop() {
        let _localctx = new Sample_soln_propContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, interviewParser.RULE_sample_soln_prop);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 512;
                this.match(interviewParser.AtSampleSolution);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 34, interviewParser.RULE_mark_text);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 514;
                this.match(interviewParser.OPS);
                this.state = 518;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
                while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1 + 1) {
                        {
                            {
                                this.state = 515;
                                this.matchWildcard();
                            }
                        }
                    }
                    this.state = 520;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
                }
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
    query() {
        let _localctx = new QueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, interviewParser.RULE_query);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 524;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 523;
                            this.s_and_w();
                        }
                    }
                    this.state = 526;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                this.state = 529;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.AtExamplecl) {
                    {
                        this.state = 528;
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
        this.enterRule(_localctx, 38, interviewParser.RULE_answer);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 532;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 531;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 534;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.OR) {
                    {
                        this.state = 536;
                        this.match(interviewParser.OR);
                        this.state = 538;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 537;
                                            this.s_and_w();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 540;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                }
                this.state = 551;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.S || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (interviewParser.AtExampleWithStr - 60)) | (1 << (interviewParser.AtExamplecol - 60)) | (1 << (interviewParser.AtExamplecl - 60)))) !== 0)) {
                    {
                        this.state = 547;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === interviewParser.S) {
                            {
                                {
                                    this.state = 544;
                                    this.match(interviewParser.S);
                                }
                            }
                            this.state = 549;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 550;
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
        this.enterRule(_localctx, 40, interviewParser.RULE_heading);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 553;
                this.key_title();
                this.state = 555;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 554;
                            this.match(interviewParser.NL);
                        }
                    }
                    this.state = 557;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === interviewParser.NL);
                this.state = 559;
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
        this.enterRule(_localctx, 42, interviewParser.RULE_key_title);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 561;
                this.match(interviewParser.OPHASH);
                this.state = 563;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 562;
                            this.s_and_w();
                        }
                    }
                    this.state = 565;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                this.state = 567;
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
        this.enterRule(_localctx, 44, interviewParser.RULE_value_title);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 569;
                this.match(interviewParser.OPHASH);
                this.state = 571;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 570;
                            this.s_and_w();
                        }
                    }
                    this.state = 573;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                this.state = 575;
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
        this.enterRule(_localctx, 46, interviewParser.RULE_ml_example);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 577;
                this.match(interviewParser.AtExamplecol);
                this.state = 585;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                    {
                        this.state = 579;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                            case 1:
                                {
                                    this.state = 578;
                                    this.match(interviewParser.NL);
                                }
                                break;
                        }
                        this.state = 581;
                        this.lines();
                        this.state = 583;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.NL) {
                            {
                                this.state = 582;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                }
                this.state = 587;
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
        this.enterRule(_localctx, 48, interviewParser.RULE_bitElem);
        try {
            this.state = 611;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 589;
                        this.match(interviewParser.NOTBITMARK);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 590;
                        this.item();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 591;
                        this.atdef();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 592;
                        this.reference();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 593;
                        this.title();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 594;
                        this.instruction();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 595;
                        this.hint();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 596;
                        this.gap();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 597;
                        this.s_and_w();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 598;
                        this.example();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 599;
                        this.bool_label();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 600;
                        this.imagebit();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 601;
                        this.audiobit();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 602;
                        this.videobit();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 603;
                        this.articlebit();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 604;
                        this.documentbit();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 605;
                        this.appbit();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 606;
                        this.websitebit();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 607;
                        this.stillimagefilmbit();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 608;
                        this.angleref();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 609;
                        this.anchor();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 610;
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
        this.enterRule(_localctx, 50, interviewParser.RULE_interview_footer);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 616;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 613;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                    this.state = 618;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                }
                this.state = 619;
                this.footer_resource();
                this.state = 623;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 620;
                                this.footer_resource();
                            }
                        }
                    }
                    this.state = 625;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
                }
                this.state = 629;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 626;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                    this.state = 631;
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
    footer_resource() {
        let _localctx = new Footer_resourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, interviewParser.RULE_footer_resource);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 642;
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
                    case interviewParser.ELIPSIS:
                    case interviewParser.SENTENCE:
                    case interviewParser.BARSTRING:
                    case interviewParser.URL:
                    case interviewParser.LIST_LINE:
                        {
                            this.state = 632;
                            this.footer_text();
                        }
                        break;
                    case interviewParser.OpAmpImage:
                    case interviewParser.OpAmpImageZoom:
                    case interviewParser.OpAmpImageWAudio:
                    case interviewParser.OpAmpImageLink:
                        {
                            this.state = 633;
                            this.imagebit();
                        }
                        break;
                    case interviewParser.OpAmpAudio:
                    case interviewParser.OpAmpAudioLink:
                    case interviewParser.OpAmpAudioEmbed:
                        {
                            this.state = 634;
                            this.audiobit();
                        }
                        break;
                    case interviewParser.OpAmpVideo:
                    case interviewParser.OpAmpVideoLink:
                    case interviewParser.OpAmpVideoEmbed:
                        {
                            this.state = 635;
                            this.videobit();
                        }
                        break;
                    case interviewParser.ArticleText:
                    case interviewParser.OpAmpArticle:
                    case interviewParser.OpAmpArticleLink:
                        {
                            this.state = 636;
                            this.articlebit();
                        }
                        break;
                    case interviewParser.OpAmpDocument:
                    case interviewParser.OpAmpDocumentLink:
                    case interviewParser.OpAmpDocumentDownload:
                    case interviewParser.OpAmpDocumentEmbed:
                        {
                            this.state = 637;
                            this.documentbit();
                        }
                        break;
                    case interviewParser.OpAmpApp:
                    case interviewParser.OpAmpAppLink:
                        {
                            this.state = 638;
                            this.appbit();
                        }
                        break;
                    case interviewParser.OpAmpWebsite:
                    case interviewParser.OpAmpWebsiteLink:
                        {
                            this.state = 639;
                            this.websitebit();
                        }
                        break;
                    case interviewParser.AtReference:
                        {
                            this.state = 640;
                            this.reference();
                        }
                        break;
                    case interviewParser.OPQ:
                        {
                            this.state = 641;
                            this.hint();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 647;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 644;
                                this.match(interviewParser.NL);
                            }
                        }
                    }
                    this.state = 649;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
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
        this.enterRule(_localctx, 54, interviewParser.RULE_footer_text);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 652;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 652;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case interviewParser.LIST_LINE:
                                        {
                                            this.state = 650;
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
                                    case interviewParser.ELIPSIS:
                                    case interviewParser.SENTENCE:
                                    case interviewParser.BARSTRING:
                                    case interviewParser.URL:
                                        {
                                            this.state = 651;
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
                    this.state = 654;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
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
        this.enterRule(_localctx, 56, interviewParser.RULE_gap);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 656;
                this.single_gap();
                this.state = 664;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 662;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.OPU:
                                    {
                                        this.state = 657;
                                        this.single_gap();
                                    }
                                    break;
                                case interviewParser.OPB:
                                    {
                                        this.state = 658;
                                        this.instruction();
                                    }
                                    break;
                                case interviewParser.OPQ:
                                    {
                                        this.state = 659;
                                        this.hint();
                                    }
                                    break;
                                case interviewParser.OPC:
                                    {
                                        this.state = 660;
                                        this.item();
                                    }
                                    break;
                                case interviewParser.AtExampleWithStr:
                                case interviewParser.AtExamplecol:
                                case interviewParser.AtExamplecl:
                                    {
                                        this.state = 661;
                                        this.example();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 666;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
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
        this.enterRule(_localctx, 58, interviewParser.RULE_single_gap);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 667;
                this.match(interviewParser.OPU);
                this.state = 671;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 81, this._ctx)) {
                    case 1:
                        {
                            this.state = 668;
                            this.match(interviewParser.NUMERIC);
                        }
                        break;
                    case 2:
                        {
                            this.state = 669;
                            this.match(interviewParser.STRING);
                        }
                        break;
                    case 3:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                }
                this.state = 676;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                    {
                        {
                            this.state = 673;
                            this.s_and_w();
                        }
                    }
                    this.state = 678;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 679;
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
        this.enterRule(_localctx, 60, interviewParser.RULE_atpoint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 681;
                this.match(interviewParser.AtPoints);
                this.state = 682;
                this.match(interviewParser.NUMERIC);
                this.state = 683;
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
        this.enterRule(_localctx, 62, interviewParser.RULE_format);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 688;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 685;
                                this.resource_format();
                            }
                        }
                    }
                    this.state = 690;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                }
                this.state = 696;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (interviewParser.AmpAudio - 83)) | (1 << (interviewParser.AmpImage - 83)) | (1 << (interviewParser.AmpImageZoom - 83)) | (1 << (interviewParser.AmpImageWAudio - 83)) | (1 << (interviewParser.AmpVideo - 83)) | (1 << (interviewParser.AmpArticle - 83)) | (1 << (interviewParser.AmpDocument - 83)) | (1 << (interviewParser.AmpApp - 83)) | (1 << (interviewParser.AmpWebsite - 83)) | (1 << (interviewParser.AmpStillImageFilm - 83)) | (1 << (interviewParser.AmpPdf - 83)) | (1 << (interviewParser.AmpAudioLink - 83)) | (1 << (interviewParser.AmpImageLink - 83)) | (1 << (interviewParser.AmpVideoLink - 83)) | (1 << (interviewParser.AmpArticleLink - 83)) | (1 << (interviewParser.AmpDocumentLink - 83)) | (1 << (interviewParser.AmpDocumentDownload - 83)) | (1 << (interviewParser.AmpAppLink - 83)) | (1 << (interviewParser.AmpWebsiteLink - 83)) | (1 << (interviewParser.AmpStillImageFilmLink - 83)))) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (interviewParser.AmpVideoEmbed - 125)) | (1 << (interviewParser.AmpDocumentEmbed - 125)) | (1 << (interviewParser.AmpStillImageFilmEmbed - 125)) | (1 << (interviewParser.ColonText - 125)) | (1 << (interviewParser.ColonJson - 125)))) !== 0)) {
                    {
                        this.state = 694;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case interviewParser.ColonText:
                                {
                                    this.state = 691;
                                    this.match(interviewParser.ColonText);
                                }
                                break;
                            case interviewParser.ColonJson:
                                {
                                    this.state = 692;
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
                            case interviewParser.AmpDocumentDownload:
                            case interviewParser.AmpAppLink:
                            case interviewParser.AmpWebsiteLink:
                            case interviewParser.AmpStillImageFilmLink:
                            case interviewParser.AmpVideoEmbed:
                            case interviewParser.AmpDocumentEmbed:
                            case interviewParser.AmpStillImageFilmEmbed:
                                {
                                    this.state = 693;
                                    this.resource_format_extra();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 698;
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
        this.enterRule(_localctx, 64, interviewParser.RULE_resource_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 699;
                _la = this._input.LA(1);
                if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (interviewParser.AmpArticle - 88)) | (1 << (interviewParser.AmpDocument - 88)) | (1 << (interviewParser.AmpWebsite - 88)) | (1 << (interviewParser.AmpStillImageFilm - 88)) | (1 << (interviewParser.AmpAudioLink - 88)) | (1 << (interviewParser.AmpImageLink - 88)) | (1 << (interviewParser.AmpVideoLink - 88)) | (1 << (interviewParser.AmpArticleLink - 88)) | (1 << (interviewParser.AmpDocumentLink - 88)) | (1 << (interviewParser.AmpDocumentDownload - 88)) | (1 << (interviewParser.AmpAppLink - 88)) | (1 << (interviewParser.AmpWebsiteLink - 88)) | (1 << (interviewParser.AmpStillImageFilmLink - 88)))) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (interviewParser.AmpVideoEmbed - 125)) | (1 << (interviewParser.AmpAudioEmbed - 125)) | (1 << (interviewParser.AmpDocumentEmbed - 125)) | (1 << (interviewParser.AmpStillImageFilmEmbed - 125)) | (1 << (interviewParser.BitmarkMinus - 125)) | (1 << (interviewParser.BitmarkPlus - 125)) | (1 << (interviewParser.ColonJson - 125)) | (1 << (interviewParser.Prosemirror - 125)) | (1 << (interviewParser.Placeholder - 125)))) !== 0))) {
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
        this.enterRule(_localctx, 66, interviewParser.RULE_resource_format_extra);
        try {
            this.state = 710;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AmpImage:
                case interviewParser.AmpImageZoom:
                case interviewParser.AmpImageWAudio:
                case interviewParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 701;
                        this.image_format();
                    }
                    break;
                case interviewParser.AmpAudio:
                case interviewParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 702;
                        this.audio_format();
                    }
                    break;
                case interviewParser.AmpVideo:
                case interviewParser.AmpVideoLink:
                case interviewParser.AmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 703;
                        this.video_format();
                    }
                    break;
                case interviewParser.AmpArticle:
                case interviewParser.AmpArticleLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 704;
                        this.article_format();
                    }
                    break;
                case interviewParser.AmpDocument:
                case interviewParser.AmpDocumentLink:
                case interviewParser.AmpDocumentDownload:
                case interviewParser.AmpDocumentEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 705;
                        this.document_format();
                    }
                    break;
                case interviewParser.AmpApp:
                case interviewParser.AmpAppLink:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 706;
                        this.app_format();
                    }
                    break;
                case interviewParser.AmpWebsite:
                case interviewParser.AmpWebsiteLink:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 707;
                        this.website_format();
                    }
                    break;
                case interviewParser.AmpStillImageFilm:
                case interviewParser.AmpStillImageFilmLink:
                case interviewParser.AmpStillImageFilmEmbed:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 708;
                        this.stillimagefilm_format();
                    }
                    break;
                case interviewParser.AmpPdf:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 709;
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
        this.enterRule(_localctx, 68, interviewParser.RULE_format2);
        try {
            this.state = 718;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.BitmarkMinus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 712;
                        this.match(interviewParser.BitmarkMinus);
                    }
                    break;
                case interviewParser.BitmarkPlus:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 713;
                        this.match(interviewParser.BitmarkPlus);
                    }
                    break;
                case interviewParser.ColonText:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 714;
                        this.match(interviewParser.ColonText);
                    }
                    break;
                case interviewParser.Placeholder:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 715;
                        this.match(interviewParser.Placeholder);
                    }
                    break;
                case interviewParser.ColonJson:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 716;
                        this.match(interviewParser.ColonJson);
                    }
                    break;
                case interviewParser.EOF:
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
        this.enterRule(_localctx, 70, interviewParser.RULE_image_format);
        let _la;
        try {
            this.state = 734;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 720;
                        this.match(interviewParser.AmpImage);
                        this.state = 723;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case interviewParser.Image_type:
                                {
                                    {
                                        this.state = 721;
                                        this.match(interviewParser.Image_type);
                                    }
                                }
                                break;
                            case interviewParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 722;
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
                            case interviewParser.AmpDocumentDownload:
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
                        this.state = 725;
                        this.match(interviewParser.AmpImageLink);
                        this.state = 727;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.Image_type) {
                            {
                                this.state = 726;
                                this.match(interviewParser.Image_type);
                            }
                        }
                    }
                    break;
                case interviewParser.AmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 729;
                        this.match(interviewParser.AmpImageZoom);
                        this.state = 731;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.Image_type) {
                            {
                                this.state = 730;
                                this.match(interviewParser.Image_type);
                            }
                        }
                    }
                    break;
                case interviewParser.AmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 733;
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
        this.enterRule(_localctx, 72, interviewParser.RULE_video_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 736;
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
                this.state = 739;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.COLON) {
                    {
                        this.state = 737;
                        this.match(interviewParser.COLON);
                        this.state = 738;
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
        this.enterRule(_localctx, 74, interviewParser.RULE_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 741;
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
        this.enterRule(_localctx, 76, interviewParser.RULE_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 743;
                _la = this._input.LA(1);
                if (!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (interviewParser.AmpDocument - 89)) | (1 << (interviewParser.AmpDocumentLink - 89)) | (1 << (interviewParser.AmpDocumentDownload - 89)))) !== 0) || _la === interviewParser.AmpDocumentEmbed)) {
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
        this.enterRule(_localctx, 78, interviewParser.RULE_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 745;
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
        this.enterRule(_localctx, 80, interviewParser.RULE_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 747;
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
        this.enterRule(_localctx, 82, interviewParser.RULE_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 749;
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
        this.enterRule(_localctx, 84, interviewParser.RULE_op_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 751;
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
        this.enterRule(_localctx, 86, interviewParser.RULE_op_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 753;
                _la = this._input.LA(1);
                if (!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (interviewParser.OpAmpDocument - 101)) | (1 << (interviewParser.OpAmpDocumentLink - 101)) | (1 << (interviewParser.OpAmpDocumentDownload - 101)) | (1 << (interviewParser.OpAmpDocumentEmbed - 101)))) !== 0))) {
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
        this.enterRule(_localctx, 88, interviewParser.RULE_op_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 755;
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
        this.enterRule(_localctx, 90, interviewParser.RULE_op_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 757;
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
        this.enterRule(_localctx, 92, interviewParser.RULE_op_video_format);
        try {
            this.state = 774;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OpAmpVideo:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 759;
                        this.match(interviewParser.OpAmpVideo);
                        this.state = 762;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                            case 1:
                                {
                                    this.state = 760;
                                    this.match(interviewParser.COLON);
                                    this.state = 761;
                                    this.match(interviewParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case interviewParser.OpAmpVideoLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 764;
                        this.match(interviewParser.OpAmpVideoLink);
                        this.state = 767;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                            case 1:
                                {
                                    this.state = 765;
                                    this.match(interviewParser.COLON);
                                    this.state = 766;
                                    this.match(interviewParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case interviewParser.OpAmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 769;
                        this.match(interviewParser.OpAmpVideoEmbed);
                        this.state = 772;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
                            case 1:
                                {
                                    this.state = 770;
                                    this.match(interviewParser.COLON);
                                    this.state = 771;
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
        this.enterRule(_localctx, 94, interviewParser.RULE_op_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 776;
                _la = this._input.LA(1);
                if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (interviewParser.OpAmpStillImageFilm - 104)) | (1 << (interviewParser.OpAmpStillImageFilmLink - 104)) | (1 << (interviewParser.OpAmpStillImageFilmEmbed - 104)))) !== 0))) {
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
        this.enterRule(_localctx, 96, interviewParser.RULE_articlebit);
        try {
            this.state = 784;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OpAmpArticle:
                case interviewParser.OpAmpArticleLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 778;
                        this.op_article_format();
                        this.state = 779;
                        this.match(interviewParser.COLON);
                        this.state = 780;
                        this.url();
                        this.state = 781;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.ArticleText:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 783;
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
        this.enterRule(_localctx, 98, interviewParser.RULE_documentbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 786;
                this.op_document_format();
                this.state = 787;
                this.match(interviewParser.COLON);
                this.state = 788;
                this.url();
                this.state = 789;
                this.match(interviewParser.CL);
                this.state = 794;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.OPATALT) {
                    {
                        this.state = 790;
                        this.match(interviewParser.OPATALT);
                        this.state = 791;
                        this.words();
                        this.state = 792;
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
        this.enterRule(_localctx, 100, interviewParser.RULE_websitebit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 796;
                this.op_website_format();
                this.state = 797;
                this.match(interviewParser.COLON);
                this.state = 798;
                this.url();
                this.state = 799;
                this.match(interviewParser.CL);
                this.state = 804;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.OPATALT) {
                    {
                        this.state = 800;
                        this.match(interviewParser.OPATALT);
                        this.state = 801;
                        this.words();
                        this.state = 802;
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
        this.enterRule(_localctx, 102, interviewParser.RULE_appbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 806;
                this.op_app_format();
                this.state = 807;
                this.match(interviewParser.COLON);
                this.state = 810;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.URL:
                        {
                            this.state = 808;
                            this.url();
                        }
                        break;
                    case interviewParser.TEL:
                        {
                            this.state = 809;
                            this.telephone();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 812;
                this.match(interviewParser.CL);
                this.state = 817;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.OPATALT) {
                    {
                        this.state = 813;
                        this.match(interviewParser.OPATALT);
                        this.state = 814;
                        this.words();
                        this.state = 815;
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
        this.enterRule(_localctx, 104, interviewParser.RULE_stillimagefilmbit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 819;
                this.stillimg_one();
                this.state = 823;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 820;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 825;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
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
        this.enterRule(_localctx, 106, interviewParser.RULE_stillimg_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 826;
                this.op_stillimagefilm_format();
                this.state = 827;
                this.match(interviewParser.COLON);
                this.state = 831;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === interviewParser.S) {
                    {
                        {
                            this.state = 828;
                            this.match(interviewParser.S);
                        }
                    }
                    this.state = 833;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 834;
                this.url();
                this.state = 835;
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
        this.enterRule(_localctx, 108, interviewParser.RULE_videobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 837;
                this.video_one();
                this.state = 841;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 838;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 843;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
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
        this.enterRule(_localctx, 110, interviewParser.RULE_video_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 844;
                this.op_video_format();
                this.state = 845;
                this.match(interviewParser.COLON);
                this.state = 846;
                this.url();
                this.state = 847;
                this.match(interviewParser.CL);
                this.state = 852;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                    case 1:
                        {
                            this.state = 848;
                            this.match(interviewParser.OPATALT);
                            this.state = 849;
                            this.words();
                            this.state = 850;
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
        this.enterRule(_localctx, 112, interviewParser.RULE_imagebit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 854;
                this.image_one();
                this.state = 858;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 855;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 860;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
                }
                this.state = 863;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                    case 1:
                        {
                            this.state = 861;
                            this.match(interviewParser.NL);
                            this.state = 862;
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
        this.enterRule(_localctx, 114, interviewParser.RULE_image_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 865;
                this.op_image_format();
                this.state = 866;
                this.match(interviewParser.COLON);
                this.state = 870;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === interviewParser.S) {
                    {
                        {
                            this.state = 867;
                            this.match(interviewParser.S);
                        }
                    }
                    this.state = 872;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 873;
                this.url();
                this.state = 874;
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
        this.enterRule(_localctx, 116, interviewParser.RULE_op_image_format);
        let _la;
        try {
            this.state = 890;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OpAmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 876;
                        this.match(interviewParser.OpAmpImage);
                        this.state = 879;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case interviewParser.Image_type:
                                {
                                    {
                                        this.state = 877;
                                        this.match(interviewParser.Image_type);
                                    }
                                }
                                break;
                            case interviewParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 878;
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
                        this.state = 881;
                        this.match(interviewParser.OpAmpImageLink);
                        this.state = 883;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.Image_type) {
                            {
                                this.state = 882;
                                this.match(interviewParser.Image_type);
                            }
                        }
                    }
                    break;
                case interviewParser.OpAmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 885;
                        this.match(interviewParser.OpAmpImageZoom);
                        this.state = 887;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.Image_type) {
                            {
                                this.state = 886;
                                this.match(interviewParser.Image_type);
                            }
                        }
                    }
                    break;
                case interviewParser.OpAmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 889;
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
        this.enterRule(_localctx, 118, interviewParser.RULE_image_chained);
        let _la;
        try {
            let _alt;
            this.state = 909;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 892;
                        this.match(interviewParser.AtSrc);
                        this.state = 893;
                        this.match(interviewParser.COLON);
                        this.state = 894;
                        this.url();
                        this.state = 895;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.AtWidth:
                case interviewParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 897;
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
                        this.state = 898;
                        this.match(interviewParser.COLON);
                        this.state = 899;
                        this.match(interviewParser.NUMERIC);
                        this.state = 900;
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
                        this.state = 901;
                        _la = this._input.LA(1);
                        if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (interviewParser.OPATALT - 71)) | (1 << (interviewParser.OpAtCaption - 71)) | (1 << (interviewParser.OpAtLicense - 71)) | (1 << (interviewParser.OpAtCopyright - 71)) | (1 << (interviewParser.OpAtSearch - 71)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 905;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 902;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 907;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                        }
                        this.state = 908;
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
        this.enterRule(_localctx, 120, interviewParser.RULE_image_chained4match);
        let _la;
        try {
            let _alt;
            this.state = 928;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 911;
                        this.match(interviewParser.AtSrc);
                        this.state = 912;
                        this.match(interviewParser.COLON);
                        this.state = 913;
                        this.url();
                        this.state = 914;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.AtWidth:
                case interviewParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 916;
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
                        this.state = 917;
                        this.match(interviewParser.COLON);
                        this.state = 918;
                        this.match(interviewParser.NUMERIC);
                        this.state = 919;
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
                        this.state = 920;
                        _la = this._input.LA(1);
                        if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (interviewParser.OPATALT - 71)) | (1 << (interviewParser.OpAtCaption - 71)) | (1 << (interviewParser.OpAtLicense - 71)) | (1 << (interviewParser.OpAtCopyright - 71)) | (1 << (interviewParser.OpAtSearch - 71)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 924;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 921;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 926;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
                        }
                        this.state = 927;
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
        this.enterRule(_localctx, 122, interviewParser.RULE_audiobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 930;
                this.audio_one();
                this.state = 934;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 931;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 936;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
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
        this.enterRule(_localctx, 124, interviewParser.RULE_audio_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 937;
                this.op_audio_format();
                this.state = 938;
                this.match(interviewParser.COLON);
                this.state = 939;
                this.url();
                this.state = 940;
                this.match(interviewParser.CL);
                this.state = 945;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
                    case 1:
                        {
                            this.state = 941;
                            this.match(interviewParser.OPATALT);
                            this.state = 942;
                            this.words();
                            this.state = 943;
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
        this.enterRule(_localctx, 126, interviewParser.RULE_audio_format);
        let _la;
        try {
            this.state = 957;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 947;
                        this.match(interviewParser.AmpAudio);
                        this.state = 950;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.COLON) {
                            {
                                this.state = 948;
                                this.match(interviewParser.COLON);
                                this.state = 949;
                                this.match(interviewParser.Audio_type);
                            }
                        }
                    }
                    break;
                case interviewParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 952;
                        this.match(interviewParser.AmpAudioLink);
                        this.state = 955;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.COLON) {
                            {
                                this.state = 953;
                                this.match(interviewParser.COLON);
                                this.state = 954;
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
        this.enterRule(_localctx, 128, interviewParser.RULE_op_audio_format);
        try {
            this.state = 974;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OpAmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 959;
                        this.match(interviewParser.OpAmpAudio);
                        this.state = 962;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                            case 1:
                                {
                                    this.state = 960;
                                    this.match(interviewParser.COLON);
                                    this.state = 961;
                                    this.match(interviewParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case interviewParser.OpAmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 964;
                        this.match(interviewParser.OpAmpAudioLink);
                        this.state = 967;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                            case 1:
                                {
                                    this.state = 965;
                                    this.match(interviewParser.COLON);
                                    this.state = 966;
                                    this.match(interviewParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case interviewParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 969;
                        this.match(interviewParser.OpAmpAudioEmbed);
                        this.state = 972;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                            case 1:
                                {
                                    this.state = 970;
                                    this.match(interviewParser.COLON);
                                    this.state = 971;
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
        this.enterRule(_localctx, 130, interviewParser.RULE_resource_chained);
        let _la;
        try {
            let _alt;
            this.state = 1007;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OPA:
                case interviewParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 979;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case interviewParser.OPA:
                                {
                                    this.state = 976;
                                    this.match(interviewParser.OPA);
                                    this.state = 977;
                                    this.s_and_w();
                                }
                                break;
                            case interviewParser.AtSrc:
                                {
                                    this.state = 978;
                                    this.match(interviewParser.AtSrc);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 981;
                        this.match(interviewParser.COLON);
                        this.state = 985;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 982;
                                        this.match(interviewParser.S);
                                    }
                                }
                            }
                            this.state = 987;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                        }
                        this.state = 990;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 990;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 128, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 988;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 989;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 992;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                        this.state = 994;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.AtWidth:
                case interviewParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 995;
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
                        this.state = 996;
                        this.match(interviewParser.COLON);
                        this.state = 997;
                        this.match(interviewParser.NUMERIC);
                        this.state = 998;
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
                        this.state = 999;
                        _la = this._input.LA(1);
                        if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (interviewParser.OPATALT - 71)) | (1 << (interviewParser.OpAtCaption - 71)) | (1 << (interviewParser.OpAtLicense - 71)) | (1 << (interviewParser.OpAtCopyright - 71)) | (1 << (interviewParser.OpAtSearch - 71)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1003;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1000;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1005;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                        }
                        this.state = 1006;
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
        this.enterRule(_localctx, 132, interviewParser.RULE_telephone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1009;
                this.match(interviewParser.TEL);
                this.state = 1010;
                this.match(interviewParser.PLUS);
                this.state = 1011;
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
        this.enterRule(_localctx, 134, interviewParser.RULE_url);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1013;
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
        this.enterRule(_localctx, 136, interviewParser.RULE_item);
        let _la;
        try {
            this.state = 1045;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1015;
                        this.match(interviewParser.OPC);
                        this.state = 1016;
                        this.match(interviewParser.CL);
                        this.state = 1024;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1020;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.S) {
                                        {
                                            {
                                                this.state = 1017;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 1022;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1023;
                                    this.lead();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1026;
                        this.match(interviewParser.OPC);
                        this.state = 1027;
                        this.s_and_w();
                        this.state = 1032;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1030;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 134, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1028;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case 2:
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
                        this.match(interviewParser.CL);
                        this.state = 1043;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1039;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.S) {
                                        {
                                            {
                                                this.state = 1036;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 1041;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1042;
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
        this.enterRule(_localctx, 138, interviewParser.RULE_lead);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1047;
                this.match(interviewParser.OPC);
                this.state = 1048;
                this.s_and_w();
                this.state = 1053;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                    {
                        this.state = 1051;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1049;
                                    this.match(interviewParser.COLON);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1050;
                                    this.s_and_w();
                                }
                                break;
                        }
                    }
                    this.state = 1055;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1056;
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
        this.enterRule(_localctx, 140, interviewParser.RULE_angleref);
        let _la;
        try {
            this.state = 1068;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OPRANGLES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1058;
                        this.match(interviewParser.OPRANGLES);
                        this.state = 1060;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1059;
                                this.s_and_w();
                            }
                        }
                        this.state = 1062;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.OPRANGLEL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1063;
                        this.match(interviewParser.OPRANGLEL);
                        this.state = 1065;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1064;
                                this.s_and_w();
                            }
                        }
                        this.state = 1067;
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
        this.enterRule(_localctx, 142, interviewParser.RULE_example);
        let _la;
        try {
            this.state = 1077;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AtExamplecl:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1070;
                        this.match(interviewParser.AtExamplecl);
                    }
                    break;
                case interviewParser.AtExampleWithStr:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1071;
                        this.match(interviewParser.AtExampleWithStr);
                    }
                    break;
                case interviewParser.AtExamplecol:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1072;
                        this.match(interviewParser.AtExamplecol);
                        this.state = 1074;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === interviewParser.SENTENCE) {
                            {
                                this.state = 1073;
                                this.match(interviewParser.SENTENCE);
                            }
                        }
                        this.state = 1076;
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
        this.enterRule(_localctx, 144, interviewParser.RULE_bracketed_text);
        let _la;
        try {
            let _alt;
            this.state = 1118;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1079;
                        this.match(interviewParser.BracEnclose);
                        this.state = 1081;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1080;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1104;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                {
                                    this.state = 1083;
                                    this.s_and_w();
                                    this.state = 1093;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1084;
                                                    this.match(interviewParser.NL);
                                                    this.state = 1088;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1085;
                                                                    this.match(interviewParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1090;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 1095;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
                                    }
                                    this.state = 1099;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1096;
                                                    this.match(interviewParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1101;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
                                    }
                                }
                            }
                            this.state = 1106;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1107;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1108;
                        this.match(interviewParser.BracEnclose);
                        this.state = 1114;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1112;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1109;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1110;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1111;
                                            this.match(interviewParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1116;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1117;
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
        this.enterRule(_localctx, 146, interviewParser.RULE_reference);
        let _la;
        try {
            this.state = 1142;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1120;
                        this.match(interviewParser.AtReference);
                        this.state = 1125;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1125;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1121;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1122;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1123;
                                            this.match(interviewParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1124;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1127;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                        this.state = 1129;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1130;
                        this.match(interviewParser.AtReference);
                        this.state = 1138;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1136;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1131;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1132;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1133;
                                            this.match(interviewParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1134;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 1135;
                                            this.match(interviewParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1140;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1141;
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
        this.enterRule(_localctx, 148, interviewParser.RULE_progress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1144;
                this.match(interviewParser.AtProgress);
                this.state = 1145;
                this.s_and_w();
                this.state = 1146;
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
        this.enterRule(_localctx, 150, interviewParser.RULE_dateprop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1148;
                this.match(interviewParser.AtDate);
                this.state = 1152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1152;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1149;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1150;
                                    this.match(interviewParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1151;
                                    this.match(interviewParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1154;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                this.state = 1156;
                this.match(interviewParser.CL);
                this.state = 1158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === interviewParser.AtDate) {
                    {
                        this.state = 1157;
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
        this.enterRule(_localctx, 152, interviewParser.RULE_dateprop_chained);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1160;
                this.match(interviewParser.AtDate);
                this.state = 1164;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1164;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 162, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1161;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1162;
                                    this.match(interviewParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1163;
                                    this.match(interviewParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1166;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                this.state = 1168;
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
        this.enterRule(_localctx, 154, interviewParser.RULE_instruction);
        let _la;
        try {
            let _alt;
            this.state = 1216;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1170;
                        this.match(interviewParser.OPB);
                        this.state = 1174;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1171;
                                        this.match(interviewParser.NL);
                                    }
                                }
                            }
                            this.state = 1176;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
                        }
                        this.state = 1178;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1177;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1195;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1189;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1180;
                                                        this.match(interviewParser.NL);
                                                        this.state = 1184;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 1181;
                                                                        this.match(interviewParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 1186;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 1191;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
                                        }
                                        this.state = 1192;
                                        this.s_and_w();
                                    }
                                }
                            }
                            this.state = 1197;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                        }
                        this.state = 1201;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === interviewParser.NL) {
                            {
                                {
                                    this.state = 1198;
                                    this.match(interviewParser.NL);
                                }
                            }
                            this.state = 1203;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1204;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1205;
                        this.match(interviewParser.OPB);
                        this.state = 1209;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1206;
                                        this.match(interviewParser.NL);
                                    }
                                }
                            }
                            this.state = 1211;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                        }
                        this.state = 1213;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1212;
                                this.s_and_w();
                            }
                        }
                        this.state = 1215;
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
        this.enterRule(_localctx, 156, interviewParser.RULE_hint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1218;
                this.match(interviewParser.OPQ);
                this.state = 1220;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1219;
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
                    this.state = 1222;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.OPDOT) | (1 << interviewParser.S) | (1 << interviewParser.BitInterview) | (1 << interviewParser.BitInterviewinstgrp) | (1 << interviewParser.OPDOLL) | (1 << interviewParser.OPBUL) | (1 << interviewParser.OPESC) | (1 << interviewParser.OPRANGLES) | (1 << interviewParser.OPRANGLEL) | (1 << interviewParser.OPDANGLE) | (1 << interviewParser.OPU) | (1 << interviewParser.OPB) | (1 << interviewParser.OPQ) | (1 << interviewParser.OPA) | (1 << interviewParser.OPP) | (1 << interviewParser.OPM) | (1 << interviewParser.OPS) | (1 << interviewParser.OPR) | (1 << interviewParser.OPC) | (1 << interviewParser.OPHASH) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.PLUS) | (1 << interviewParser.DotAt) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.OR - 32)) | (1 << (interviewParser.HSPL - 32)) | (1 << (interviewParser.HSPL2 - 32)) | (1 << (interviewParser.SSPL - 32)) | (1 << (interviewParser.SSPL2 - 32)) | (1 << (interviewParser.BULLET - 32)) | (1 << (interviewParser.COMMENT - 32)) | (1 << (interviewParser.DCANY - 32)) | (1 << (interviewParser.Image_type - 32)) | (1 << (interviewParser.Audio_type - 32)) | (1 << (interviewParser.Video_type - 32)) | (1 << (interviewParser.ArticleText - 32)) | (1 << (interviewParser.NOTCL - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.NOTBITMARK - 32)) | (1 << (interviewParser.ELIPSIS - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.BARSTRING - 32)) | (1 << (interviewParser.OPAT - 32)) | (1 << (interviewParser.AtProgress - 32)) | (1 << (interviewParser.AtReference - 32)) | (1 << (interviewParser.AtWidth - 32)) | (1 << (interviewParser.AtHeight - 32)) | (1 << (interviewParser.AtProgressPoints - 32)) | (1 << (interviewParser.AtShortanswer - 32)) | (1 << (interviewParser.AtLonganswer - 32)) | (1 << (interviewParser.AtExampleWithStr - 32)) | (1 << (interviewParser.AtExamplecol - 32)) | (1 << (interviewParser.AtExamplecl - 32)) | (1 << (interviewParser.AtSampleSolution - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (interviewParser.AtPartialAnswerS - 64)) | (1 << (interviewParser.AtPartialAnswer - 64)) | (1 << (interviewParser.AtLabeltrue - 64)) | (1 << (interviewParser.AtLabelfalse - 64)) | (1 << (interviewParser.AtPoints - 64)) | (1 << (interviewParser.AtSrc - 64)) | (1 << (interviewParser.AtPartner - 64)) | (1 << (interviewParser.OPATALT - 64)) | (1 << (interviewParser.OPAMARK - 64)) | (1 << (interviewParser.ShowInIndex - 64)) | (1 << (interviewParser.OpAtCaption - 64)) | (1 << (interviewParser.OpAtLicense - 64)) | (1 << (interviewParser.OpAtCopyright - 64)) | (1 << (interviewParser.OpAtSearch - 64)) | (1 << (interviewParser.OpAtIsTracked - 64)) | (1 << (interviewParser.OpAtIsInfoOnly - 64)) | (1 << (interviewParser.AtDate - 64)) | (1 << (interviewParser.Http - 64)) | (1 << (interviewParser.Https - 64)) | (1 << (interviewParser.AmpAudio - 64)) | (1 << (interviewParser.AmpImage - 64)) | (1 << (interviewParser.AmpImageZoom - 64)) | (1 << (interviewParser.AmpImageWAudio - 64)) | (1 << (interviewParser.AmpVideo - 64)) | (1 << (interviewParser.AmpArticle - 64)) | (1 << (interviewParser.AmpDocument - 64)) | (1 << (interviewParser.AmpApp - 64)) | (1 << (interviewParser.AmpWebsite - 64)) | (1 << (interviewParser.AmpStillImageFilm - 64)) | (1 << (interviewParser.AmpPdf - 64)) | (1 << (interviewParser.OpAmpAudio - 64)) | (1 << (interviewParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (interviewParser.OpAmpImageZoom - 96)) | (1 << (interviewParser.OpAmpImageWAudio - 96)) | (1 << (interviewParser.OpAmpVideo - 96)) | (1 << (interviewParser.OpAmpArticle - 96)) | (1 << (interviewParser.OpAmpArticleAtt - 96)) | (1 << (interviewParser.OpAmpDocument - 96)) | (1 << (interviewParser.OpAmpApp - 96)) | (1 << (interviewParser.OpAmpWebsite - 96)) | (1 << (interviewParser.OpAmpStillImageFilm - 96)) | (1 << (interviewParser.BracEnclose - 96)) | (1 << (interviewParser.AmpAudioLink - 96)) | (1 << (interviewParser.AmpImageLink - 96)) | (1 << (interviewParser.AmpVideoLink - 96)) | (1 << (interviewParser.AmpArticleLink - 96)) | (1 << (interviewParser.AmpDocumentLink - 96)) | (1 << (interviewParser.AmpDocumentDownload - 96)) | (1 << (interviewParser.AmpAppLink - 96)) | (1 << (interviewParser.AmpWebsiteLink - 96)) | (1 << (interviewParser.AmpStillImageFilmLink - 96)) | (1 << (interviewParser.OpAmpAudioLink - 96)) | (1 << (interviewParser.OpAmpImageLink - 96)) | (1 << (interviewParser.OpAmpVideoLink - 96)) | (1 << (interviewParser.OpAmpArticleLink - 96)) | (1 << (interviewParser.OpAmpDocumentLink - 96)) | (1 << (interviewParser.OpAmpDocumentDownload - 96)) | (1 << (interviewParser.OpAmpAppLink - 96)) | (1 << (interviewParser.OpAmpWebsiteLink - 96)) | (1 << (interviewParser.OpAmpStillImageFilmLink - 96)) | (1 << (interviewParser.AmpImageEmbed - 96)) | (1 << (interviewParser.AmpVideoEmbed - 96)) | (1 << (interviewParser.AmpAudioEmbed - 96)) | (1 << (interviewParser.AmpDocumentEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (interviewParser.AmpStillImageFilmEmbed - 128)) | (1 << (interviewParser.OpAmpImageEmbed - 128)) | (1 << (interviewParser.OpAmpVideoEmbed - 128)) | (1 << (interviewParser.OpAmpAudioEmbed - 128)) | (1 << (interviewParser.OpAmpDocumentEmbed - 128)) | (1 << (interviewParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (interviewParser.BitmarkMinus - 128)) | (1 << (interviewParser.BitmarkPlus - 128)) | (1 << (interviewParser.ColonText - 128)) | (1 << (interviewParser.ColonJson - 128)) | (1 << (interviewParser.Prosemirror - 128)) | (1 << (interviewParser.Placeholder - 128)) | (1 << (interviewParser.BASIC - 128)) | (1 << (interviewParser.JPG - 128)) | (1 << (interviewParser.PNG - 128)) | (1 << (interviewParser.GIF - 128)) | (1 << (interviewParser.SVG - 128)) | (1 << (interviewParser.MP2 - 128)) | (1 << (interviewParser.MP3 - 128)) | (1 << (interviewParser.MP4 - 128)) | (1 << (interviewParser.FLV - 128)) | (1 << (interviewParser.WMV - 128)) | (1 << (interviewParser.MPEG - 128)) | (1 << (interviewParser.MPG - 128)) | (1 << (interviewParser.TEL - 128)) | (1 << (interviewParser.DotArticleAtt - 128)) | (1 << (interviewParser.STAR - 128)) | (1 << (interviewParser.URL - 128)) | (1 << (interviewParser.LIST_LINE - 128)) | (1 << (interviewParser.ENCLBARS - 128)))) !== 0));
                this.state = 1224;
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
        this.enterRule(_localctx, 158, interviewParser.RULE_title);
        let _la;
        try {
            this.state = 1238;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1226;
                        this.match(interviewParser.OPHASH);
                        this.state = 1229;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1229;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 174, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1227;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1228;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1231;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                        this.state = 1233;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1234;
                        this.match(interviewParser.OPHASH);
                        this.state = 1235;
                        this.s_and_w();
                        this.state = 1236;
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
        this.enterRule(_localctx, 160, interviewParser.RULE_bool_label);
        try {
            this.state = 1248;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.AtLabeltrue:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1240;
                        this.match(interviewParser.AtLabeltrue);
                        this.state = 1241;
                        this.s_and_w();
                        this.state = 1242;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.AtLabelfalse:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1244;
                        this.match(interviewParser.AtLabelfalse);
                        this.state = 1245;
                        this.s_and_w();
                        this.state = 1246;
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
        this.enterRule(_localctx, 162, interviewParser.RULE_progress_points);
        try {
            this.state = 1259;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1250;
                        this.match(interviewParser.AtProgressPoints);
                        this.state = 1251;
                        this.match(interviewParser.COLON);
                        this.state = 1252;
                        this.match(interviewParser.NUMERIC);
                        this.state = 1253;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1254;
                        this.match(interviewParser.AtProgressPoints);
                        this.state = 1255;
                        this.match(interviewParser.COLON);
                        this.state = 1256;
                        this.s_and_w();
                        this.state = 1257;
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
        this.enterRule(_localctx, 164, interviewParser.RULE_istracked);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1261;
                this.match(interviewParser.OpAtIsTracked);
                this.state = 1262;
                this.s_and_w();
                this.state = 1263;
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
        this.enterRule(_localctx, 166, interviewParser.RULE_isinfoonly);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1265;
                this.match(interviewParser.OpAtIsInfoOnly);
                this.state = 1266;
                this.s_and_w();
                this.state = 1267;
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
        this.enterRule(_localctx, 168, interviewParser.RULE_atdef);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1269;
                this.atdef_();
                this.state = 1279;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1273;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === interviewParser.NL) {
                                    {
                                        {
                                            this.state = 1270;
                                            this.match(interviewParser.NL);
                                        }
                                    }
                                    this.state = 1275;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1276;
                                this.atdef_();
                            }
                        }
                    }
                    this.state = 1281;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
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
        this.enterRule(_localctx, 170, interviewParser.RULE_atdef_);
        let _la;
        try {
            let _alt;
            this.state = 1305;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case interviewParser.OPA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1282;
                        this.match(interviewParser.OPA);
                        this.state = 1283;
                        this.s_and_w();
                        this.state = 1284;
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
                        this.state = 1285;
                        this.s_and_w();
                        this.state = 1291;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1289;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1286;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1287;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1288;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 1293;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1294;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1296;
                        this.match(interviewParser.OpAtCopyright);
                        this.state = 1300;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1297;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1302;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
                        }
                        this.state = 1303;
                        this.match(interviewParser.CL);
                    }
                    break;
                case interviewParser.AtSampleSolution:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1304;
                        this.match(interviewParser.AtSampleSolution);
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
        this.enterRule(_localctx, 172, interviewParser.RULE_dollarans);
        let _la;
        try {
            this.state = 1326;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 189, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1307;
                        this.match(interviewParser.OPDOLL);
                        this.state = 1311;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1311;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 185, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1308;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1309;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1310;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1313;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL);
                        this.state = 1315;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1316;
                        this.match(interviewParser.OPDOLL);
                        this.state = 1322;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                            {
                                this.state = 1320;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 187, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1317;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1318;
                                            this.match(interviewParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1319;
                                            this.match(interviewParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1324;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1325;
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
        this.enterRule(_localctx, 174, interviewParser.RULE_anchor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1328;
                this.match(interviewParser.OPDANGLE);
                this.state = 1330;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater) | (1 << interviewParser.Less) | (1 << interviewParser.RightAngle) | (1 << interviewParser.RightArrow) | (1 << interviewParser.DBLEQ))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (interviewParser.NUMERIC - 45)) | (1 << (interviewParser.STRING - 45)) | (1 << (interviewParser.NL - 45)) | (1 << (interviewParser.NOTBITMARK - 45)) | (1 << (interviewParser.ELIPSIS - 45)) | (1 << (interviewParser.SENTENCE - 45)) | (1 << (interviewParser.BARSTRING - 45)))) !== 0) || _la === interviewParser.URL) {
                    {
                        this.state = 1329;
                        this.s_and_w();
                    }
                }
                this.state = 1332;
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
        this.enterRule(_localctx, 176, interviewParser.RULE_dcolon);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1334;
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
        this.enterRule(_localctx, 178, interviewParser.RULE_lines);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1340;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1336;
                                    this.s_and_w();
                                    this.state = 1338;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 191, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1337;
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
                    this.state = 1342;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
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
        this.enterRule(_localctx, 180, interviewParser.RULE_s_and_w);
        let _la;
        try {
            let _alt;
            this.state = 1391;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 200, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1344;
                        this.match(interviewParser.STRING);
                        this.state = 1351;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 194, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1346;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1345;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 1348;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === interviewParser.S);
                                    this.state = 1350;
                                    this.match(interviewParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1353;
                        this.words();
                        this.state = 1360;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 196, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1355;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1354;
                                                this.match(interviewParser.S);
                                            }
                                        }
                                        this.state = 1357;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === interviewParser.S);
                                    this.state = 1359;
                                    this.match(interviewParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1362;
                        this.match(interviewParser.NUMERIC);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1363;
                        this.match(interviewParser.OPS);
                        this.state = 1364;
                        this.s_and_w();
                        this.state = 1365;
                        this.match(interviewParser.CL);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1367;
                        this.match(interviewParser.NL);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1371;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === interviewParser.S) {
                            {
                                {
                                    this.state = 1368;
                                    this.match(interviewParser.S);
                                }
                            }
                            this.state = 1373;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1374;
                        this.match(interviewParser.COLON);
                        this.state = 1378;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1375;
                                        this.match(interviewParser.S);
                                    }
                                }
                            }
                            this.state = 1380;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1381;
                        this.match(interviewParser.AMP);
                        this.state = 1385;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1382;
                                        this.match(interviewParser.S);
                                    }
                                }
                            }
                            this.state = 1387;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
                        }
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1388;
                        this.match(interviewParser.DBLCOLON);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1389;
                        this.match(interviewParser.DBLEQ);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1390;
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
        this.enterRule(_localctx, 182, interviewParser.RULE_clnsp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1393;
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
        this.enterRule(_localctx, 184, interviewParser.RULE_sspl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1395;
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
        this.enterRule(_localctx, 186, interviewParser.RULE_words);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1409;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1409;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case interviewParser.STRING:
                                        {
                                            this.state = 1397;
                                            this.match(interviewParser.STRING);
                                        }
                                        break;
                                    case interviewParser.SENTENCE:
                                        {
                                            this.state = 1398;
                                            this.match(interviewParser.SENTENCE);
                                        }
                                        break;
                                    case interviewParser.NOTBITMARK:
                                        {
                                            this.state = 1399;
                                            this.match(interviewParser.NOTBITMARK);
                                        }
                                        break;
                                    case interviewParser.ELIPSIS:
                                        {
                                            this.state = 1400;
                                            this.match(interviewParser.ELIPSIS);
                                        }
                                        break;
                                    case interviewParser.BARSTRING:
                                        {
                                            this.state = 1401;
                                            this.match(interviewParser.BARSTRING);
                                        }
                                        break;
                                    case interviewParser.AMP:
                                        {
                                            this.state = 1402;
                                            this.match(interviewParser.AMP);
                                        }
                                        break;
                                    case interviewParser.Greater:
                                        {
                                            this.state = 1403;
                                            this.match(interviewParser.Greater);
                                            this.state = 1404;
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
                                            this.state = 1405;
                                            this.match(interviewParser.Less);
                                            this.state = 1406;
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
                                            this.state = 1407;
                                            this.match(interviewParser.RightArrow);
                                        }
                                        break;
                                    case interviewParser.RightAngle:
                                        {
                                            this.state = 1408;
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
                    this.state = 1411;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
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
        this.enterRule(_localctx, 188, interviewParser.RULE_sp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1413;
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
interviewParser.ELIPSIS = 49;
interviewParser.SENTENCE = 50;
interviewParser.BARSTRING = 51;
interviewParser.OPAT = 52;
interviewParser.AtProgress = 53;
interviewParser.AtReference = 54;
interviewParser.AtWidth = 55;
interviewParser.AtHeight = 56;
interviewParser.AtProgressPoints = 57;
interviewParser.AtShortanswer = 58;
interviewParser.AtLonganswer = 59;
interviewParser.AtExampleWithStr = 60;
interviewParser.AtExamplecol = 61;
interviewParser.AtExamplecl = 62;
interviewParser.AtSampleSolution = 63;
interviewParser.AtPartialAnswerS = 64;
interviewParser.AtPartialAnswer = 65;
interviewParser.AtLabeltrue = 66;
interviewParser.AtLabelfalse = 67;
interviewParser.AtPoints = 68;
interviewParser.AtSrc = 69;
interviewParser.AtPartner = 70;
interviewParser.OPATALT = 71;
interviewParser.OPAMARK = 72;
interviewParser.ShowInIndex = 73;
interviewParser.OpAtCaption = 74;
interviewParser.OpAtLicense = 75;
interviewParser.OpAtCopyright = 76;
interviewParser.OpAtSearch = 77;
interviewParser.OpAtIsTracked = 78;
interviewParser.OpAtIsInfoOnly = 79;
interviewParser.AtDate = 80;
interviewParser.Http = 81;
interviewParser.Https = 82;
interviewParser.AmpAudio = 83;
interviewParser.AmpImage = 84;
interviewParser.AmpImageZoom = 85;
interviewParser.AmpImageWAudio = 86;
interviewParser.AmpVideo = 87;
interviewParser.AmpArticle = 88;
interviewParser.AmpDocument = 89;
interviewParser.AmpApp = 90;
interviewParser.AmpWebsite = 91;
interviewParser.AmpStillImageFilm = 92;
interviewParser.AmpPdf = 93;
interviewParser.OpAmpAudio = 94;
interviewParser.OpAmpImage = 95;
interviewParser.OpAmpImageZoom = 96;
interviewParser.OpAmpImageWAudio = 97;
interviewParser.OpAmpVideo = 98;
interviewParser.OpAmpArticle = 99;
interviewParser.OpAmpArticleAtt = 100;
interviewParser.OpAmpDocument = 101;
interviewParser.OpAmpApp = 102;
interviewParser.OpAmpWebsite = 103;
interviewParser.OpAmpStillImageFilm = 104;
interviewParser.BracEnclose = 105;
interviewParser.AmpAudioLink = 106;
interviewParser.AmpImageLink = 107;
interviewParser.AmpVideoLink = 108;
interviewParser.AmpArticleLink = 109;
interviewParser.AmpDocumentLink = 110;
interviewParser.AmpDocumentDownload = 111;
interviewParser.AmpAppLink = 112;
interviewParser.AmpWebsiteLink = 113;
interviewParser.AmpStillImageFilmLink = 114;
interviewParser.OpAmpAudioLink = 115;
interviewParser.OpAmpImageLink = 116;
interviewParser.OpAmpVideoLink = 117;
interviewParser.OpAmpArticleLink = 118;
interviewParser.OpAmpDocumentLink = 119;
interviewParser.OpAmpDocumentDownload = 120;
interviewParser.OpAmpAppLink = 121;
interviewParser.OpAmpWebsiteLink = 122;
interviewParser.OpAmpStillImageFilmLink = 123;
interviewParser.AmpImageEmbed = 124;
interviewParser.AmpVideoEmbed = 125;
interviewParser.AmpAudioEmbed = 126;
interviewParser.AmpDocumentEmbed = 127;
interviewParser.AmpStillImageFilmEmbed = 128;
interviewParser.OpAmpImageEmbed = 129;
interviewParser.OpAmpVideoEmbed = 130;
interviewParser.OpAmpAudioEmbed = 131;
interviewParser.OpAmpDocumentEmbed = 132;
interviewParser.OpAmpStillImageFilmEmbed = 133;
interviewParser.BitmarkMinus = 134;
interviewParser.BitmarkPlus = 135;
interviewParser.ColonText = 136;
interviewParser.ColonJson = 137;
interviewParser.Prosemirror = 138;
interviewParser.Placeholder = 139;
interviewParser.BASIC = 140;
interviewParser.JPG = 141;
interviewParser.PNG = 142;
interviewParser.GIF = 143;
interviewParser.SVG = 144;
interviewParser.MP2 = 145;
interviewParser.MP3 = 146;
interviewParser.MP4 = 147;
interviewParser.FLV = 148;
interviewParser.WMV = 149;
interviewParser.MPEG = 150;
interviewParser.MPG = 151;
interviewParser.TEL = 152;
interviewParser.DotArticleAtt = 153;
interviewParser.STAR = 154;
interviewParser.URL = 155;
interviewParser.LIST_LINE = 156;
interviewParser.ENCLBARS = 157;
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
interviewParser.RULE_sample_soln_prop = 16;
interviewParser.RULE_mark_text = 17;
interviewParser.RULE_query = 18;
interviewParser.RULE_answer = 19;
interviewParser.RULE_heading = 20;
interviewParser.RULE_key_title = 21;
interviewParser.RULE_value_title = 22;
interviewParser.RULE_ml_example = 23;
interviewParser.RULE_bitElem = 24;
interviewParser.RULE_interview_footer = 25;
interviewParser.RULE_footer_resource = 26;
interviewParser.RULE_footer_text = 27;
interviewParser.RULE_gap = 28;
interviewParser.RULE_single_gap = 29;
interviewParser.RULE_atpoint = 30;
interviewParser.RULE_format = 31;
interviewParser.RULE_resource_format = 32;
interviewParser.RULE_resource_format_extra = 33;
interviewParser.RULE_format2 = 34;
interviewParser.RULE_image_format = 35;
interviewParser.RULE_video_format = 36;
interviewParser.RULE_article_format = 37;
interviewParser.RULE_document_format = 38;
interviewParser.RULE_app_format = 39;
interviewParser.RULE_website_format = 40;
interviewParser.RULE_stillimagefilm_format = 41;
interviewParser.RULE_op_article_format = 42;
interviewParser.RULE_op_document_format = 43;
interviewParser.RULE_op_app_format = 44;
interviewParser.RULE_op_website_format = 45;
interviewParser.RULE_op_video_format = 46;
interviewParser.RULE_op_stillimagefilm_format = 47;
interviewParser.RULE_articlebit = 48;
interviewParser.RULE_documentbit = 49;
interviewParser.RULE_websitebit = 50;
interviewParser.RULE_appbit = 51;
interviewParser.RULE_stillimagefilmbit = 52;
interviewParser.RULE_stillimg_one = 53;
interviewParser.RULE_videobit = 54;
interviewParser.RULE_video_one = 55;
interviewParser.RULE_imagebit = 56;
interviewParser.RULE_image_one = 57;
interviewParser.RULE_op_image_format = 58;
interviewParser.RULE_image_chained = 59;
interviewParser.RULE_image_chained4match = 60;
interviewParser.RULE_audiobit = 61;
interviewParser.RULE_audio_one = 62;
interviewParser.RULE_audio_format = 63;
interviewParser.RULE_op_audio_format = 64;
interviewParser.RULE_resource_chained = 65;
interviewParser.RULE_telephone = 66;
interviewParser.RULE_url = 67;
interviewParser.RULE_item = 68;
interviewParser.RULE_lead = 69;
interviewParser.RULE_angleref = 70;
interviewParser.RULE_example = 71;
interviewParser.RULE_bracketed_text = 72;
interviewParser.RULE_reference = 73;
interviewParser.RULE_progress = 74;
interviewParser.RULE_dateprop = 75;
interviewParser.RULE_dateprop_chained = 76;
interviewParser.RULE_instruction = 77;
interviewParser.RULE_hint = 78;
interviewParser.RULE_title = 79;
interviewParser.RULE_bool_label = 80;
interviewParser.RULE_progress_points = 81;
interviewParser.RULE_istracked = 82;
interviewParser.RULE_isinfoonly = 83;
interviewParser.RULE_atdef = 84;
interviewParser.RULE_atdef_ = 85;
interviewParser.RULE_dollarans = 86;
interviewParser.RULE_anchor = 87;
interviewParser.RULE_dcolon = 88;
interviewParser.RULE_lines = 89;
interviewParser.RULE_s_and_w = 90;
interviewParser.RULE_clnsp = 91;
interviewParser.RULE_sspl = 92;
interviewParser.RULE_words = 93;
interviewParser.RULE_sp = 94;
// tslint:disable:no-trailing-whitespace
interviewParser.ruleNames = [
    "bitmark", "bitmark_", "interviews", "interview", "interview_instruction_grouped",
    "mcrsep", "mcrsep_end", "mcrmisc", "interview_qanda", "interview_qanda__",
    "interview_sometext", "interview_text", "interview_answer", "longans",
    "shortans", "partans", "sample_soln_prop", "mark_text", "query", "answer",
    "heading", "key_title", "value_title", "ml_example", "bitElem", "interview_footer",
    "footer_resource", "footer_text", "gap", "single_gap", "atpoint", "format",
    "resource_format", "resource_format_extra", "format2", "image_format",
    "video_format", "article_format", "document_format", "app_format", "website_format",
    "stillimagefilm_format", "op_article_format", "op_document_format", "op_app_format",
    "op_website_format", "op_video_format", "op_stillimagefilm_format", "articlebit",
    "documentbit", "websitebit", "appbit", "stillimagefilmbit", "stillimg_one",
    "videobit", "video_one", "imagebit", "image_one", "op_image_format", "image_chained",
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
    undefined, "'[@'", undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "'http://'", "'https://'", "'&audio'", "'&image'",
    "'&image-zoom'", "'&image-with-audio'", "'&video'", "'&article'", "'&document'",
    "'&app'", "'&website'", "'&still-image-film'", "'&pdf'", undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "'&audio-link'", "'&image-link'", "'&video-link'",
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
interviewParser._SYMBOLIC_NAMES = [
    undefined, "OPDOT", "S", "BitInterview", "BitInterviewinstgrp", "OPDOLL",
    "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB",
    "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", "OPHASH", "CL", "COLON",
    "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", "Less", "RightAngle", "RightArrow",
    "DBLEQ", "OR", "HSPL", "HSPL2", "SSPL", "SSPL2", "BULLET", "COMMENT",
    "DCANY", "Image_type", "Audio_type", "Video_type", "ArticleText", "NOTCL",
    "NUMERIC", "STRING", "NL", "NOTBITMARK", "ELIPSIS", "SENTENCE", "BARSTRING",
    "OPAT", "AtProgress", "AtReference", "AtWidth", "AtHeight", "AtProgressPoints",
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
interviewParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(interviewParser._LITERAL_NAMES, interviewParser._SYMBOLIC_NAMES, []);
interviewParser._serializedATNSegments = 3;
interviewParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9F\u058A\x04" +
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
    "`\x03\x02\x03\x02\x07\x02\xC3\n\x02\f\x02\x0E\x02\xC6\v\x02\x03\x02\x07" +
    "\x02\xC9\n\x02\f\x02\x0E\x02\xCC\v\x02\x06\x02\xCE\n\x02\r\x02\x0E\x02" +
    "\xCF\x03\x02\x07\x02\xD3\n\x02\f\x02\x0E\x02\xD6\v\x02\x03\x02\x03\x02" +
    "\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\xDE\n\x04\x03\x05\x03\x05\x03" +
    "\x05\x03\x05\x07\x05\xE4\n\x05\f\x05\x0E\x05\xE7\v\x05\x03\x05\x03\x05" +
    "\x07\x05\xEB\n\x05\f\x05\x0E\x05\xEE\v\x05\x07\x05\xF0\n\x05\f\x05\x0E" +
    "\x05\xF3\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xF9\n\x05\f\x05" +
    "\x0E\x05\xFC\v\x05\x03\x05\x03\x05\x07\x05\u0100\n\x05\f\x05\x0E\x05\u0103" +
    "\v\x05\x07\x05\u0105\n\x05\f\x05\x0E\x05\u0108\v\x05\x03\x05\x03\x05\x07" +
    "\x05\u010C\n\x05\f\x05\x0E\x05\u010F\v\x05\x03\x05\x03\x05\x07\x05\u0113" +
    "\n\x05\f\x05\x0E\x05\u0116\v\x05\x05\x05\u0118\n\x05\x06\x05\u011A\n\x05" +
    "\r\x05\x0E\x05\u011B\x03\x05\x03\x05\x07\x05\u0120\n\x05\f\x05\x0E\x05" +
    "\u0123\v\x05\x03\x05\x05\x05\u0126\n\x05\x05\x05\u0128\n\x05\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x07\x06\u012E\n\x06\f\x06\x0E\x06\u0131\v\x06\x03" +
    "\x06\x03\x06\x07\x06\u0135\n\x06\f\x06\x0E\x06\u0138\v\x06\x07\x06\u013A" +
    "\n\x06\f\x06\x0E\x06\u013D\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
    "\u0143\n\x06\f\x06\x0E\x06\u0146\v\x06\x03\x06\x03\x06\x07\x06\u014A\n" +
    "\x06\f\x06\x0E\x06\u014D\v\x06\x07\x06\u014F\n\x06\f\x06\x0E\x06\u0152" +
    "\v\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0157\n\x06\f\x06\x0E\x06\u015A" +
    "\v\x06\x07\x06\u015C\n\x06\f\x06\x0E\x06\u015F\v\x06\x03\x06\x03\x06\x07" +
    "\x06\u0163\n\x06\f\x06\x0E\x06\u0166\v\x06\x03\x06\x05\x06\u0169\n\x06" +
    "\x05\x06\u016B\n\x06\x03\x07\x03\x07\x05\x07\u016F\n\x07\x03\b\x03\b\x03" +
    "\t\x03\t\x03\t\x03\n\x03\n\x06\n\u0178\n\n\r\n\x0E\n\u0179\x03\n\x07\n" +
    "\u017D\n\n\f\n\x0E\n\u0180\v\n\x03\v\x05\v\u0183\n\v\x03\v\x03\v\x07\v" +
    "\u0187\n\v\f\v\x0E\v\u018A\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0197\n\v\f\v\x0E\v\u019A\v\v\x03\v\x03" +
    "\v\x05\v\u019E\n\v\x03\v\x07\v\u01A1\n\v\f\v\x0E\v\u01A4\v\v\x03\v\x03" +
    "\v\x03\v\x03\v\x03\v\x03\v\x07\v\u01AC\n\v\f\v\x0E\v\u01AF\v\v\x05\v\u01B1" +
    "\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
    "\x06\v\u01BE\n\v\r\v\x0E\v\u01BF\x03\v\x03\v\x05\v\u01C4\n\v\x03\v\x07" +
    "\v\u01C7\n\v\f\v\x0E\v\u01CA\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07" +
    "\v\u01D2\n\v\f\v\x0E\v\u01D5\v\v\x05\v\u01D7\n\v\x05\v\u01D9\n\v\x03\f" +
    "\x06\f\u01DC\n\f\r\f\x0E\f\u01DD\x03\r\x03\r\x05\r\u01E2\n\r\x03\r\x03" +
    "\r\x05\r\u01E6\n\r\x03\r\x07\r\u01E9\n\r\f\r\x0E\r\u01EC\v\r\x06\r\u01EE" +
    "\n\r\r\r\x0E\r\u01EF\x03\r\x05\r\u01F3\n\r\x03\x0E\x03\x0E\x05\x0E\u01F7" +
    "\n\x0E\x06\x0E\u01F9\n\x0E\r\x0E\x0E\x0E\u01FA\x03\x0F\x03\x0F\x03\x10" +
    "\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13\u0207" +
    "\n\x13\f\x13\x0E\x13\u020A\v\x13\x03\x13\x03\x13\x03\x14\x06\x14\u020F" +
    "\n\x14\r\x14\x0E\x14\u0210\x03\x14\x05\x14\u0214\n\x14\x03\x15\x06\x15" +
    "\u0217\n\x15\r\x15\x0E\x15\u0218\x03\x15\x03\x15\x06\x15\u021D\n\x15\r" +
    "\x15\x0E\x15\u021E\x05\x15\u0221\n\x15\x03\x15\x07\x15\u0224\n\x15\f\x15" +
    "\x0E\x15\u0227\v\x15\x03\x15\x05\x15\u022A\n\x15\x03\x16\x03\x16\x06\x16" +
    "\u022E\n\x16\r\x16\x0E\x16\u022F\x03\x16\x03\x16\x03\x17\x03\x17\x06\x17" +
    "\u0236\n\x17\r\x17\x0E\x17\u0237\x03\x17\x03\x17\x03\x18\x03\x18\x06\x18" +
    "\u023E\n\x18\r\x18\x0E\x18\u023F\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19" +
    "\u0246\n\x19\x03\x19\x03\x19\x05\x19\u024A\n\x19\x05\x19\u024C\n\x19\x03" +
    "\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
    "\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
    "\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0266\n\x1A\x03\x1B" +
    "\x07\x1B\u0269\n\x1B\f\x1B\x0E\x1B\u026C\v\x1B\x03\x1B\x03\x1B\x07\x1B" +
    "\u0270\n\x1B\f\x1B\x0E\x1B\u0273\v\x1B\x03\x1B\x07\x1B\u0276\n\x1B\f\x1B" +
    "\x0E\x1B\u0279\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
    "\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0285\n\x1C\x03\x1C\x07\x1C\u0288" +
    "\n\x1C\f\x1C\x0E\x1C\u028B\v\x1C\x03\x1D\x03\x1D\x06\x1D\u028F\n\x1D\r" +
    "\x1D\x0E\x1D\u0290\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07" +
    "\x1E\u0299\n\x1E\f\x1E\x0E\x1E\u029C\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
    "\x1F\x05\x1F\u02A2\n\x1F\x03\x1F\x07\x1F\u02A5\n\x1F\f\x1F\x0E\x1F\u02A8" +
    "\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x07!\u02B1\n!\f!\x0E!" +
    "\u02B4\v!\x03!\x03!\x03!\x07!\u02B9\n!\f!\x0E!\u02BC\v!\x03\"\x03\"\x03" +
    "#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u02C9\n#\x03$\x03$\x03" +
    "$\x03$\x03$\x03$\x05$\u02D1\n$\x03%\x03%\x03%\x05%\u02D6\n%\x03%\x03%" +
    "\x05%\u02DA\n%\x03%\x03%\x05%\u02DE\n%\x03%\x05%\u02E1\n%\x03&\x03&\x03" +
    "&\x05&\u02E6\n&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03" +
    ",\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x030\x050\u02FD\n0\x03" +
    "0\x030\x030\x050\u0302\n0\x030\x030\x030\x050\u0307\n0\x050\u0309\n0\x03" +
    "1\x031\x032\x032\x032\x032\x032\x032\x052\u0313\n2\x033\x033\x033\x03" +
    "3\x033\x033\x033\x033\x053\u031D\n3\x034\x034\x034\x034\x034\x034\x03" +
    "4\x034\x054\u0327\n4\x035\x035\x035\x035\x055\u032D\n5\x035\x035\x035" +
    "\x035\x035\x055\u0334\n5\x036\x036\x076\u0338\n6\f6\x0E6\u033B\v6\x03" +
    "7\x037\x037\x077\u0340\n7\f7\x0E7\u0343\v7\x037\x037\x037\x038\x038\x07" +
    "8\u034A\n8\f8\x0E8\u034D\v8\x039\x039\x039\x039\x039\x039\x039\x039\x05" +
    "9\u0357\n9\x03:\x03:\x07:\u035B\n:\f:\x0E:\u035E\v:\x03:\x03:\x05:\u0362" +
    "\n:\x03;\x03;\x03;\x07;\u0367\n;\f;\x0E;\u036A\v;\x03;\x03;\x03;\x03<" +
    "\x03<\x03<\x05<\u0372\n<\x03<\x03<\x05<\u0376\n<\x03<\x03<\x05<\u037A" +
    "\n<\x03<\x05<\u037D\n<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03" +
    "=\x03=\x07=\u038A\n=\f=\x0E=\u038D\v=\x03=\x05=\u0390\n=\x03>\x03>\x03" +
    ">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x07>\u039D\n>\f>\x0E>\u03A0" +
    "\v>\x03>\x05>\u03A3\n>\x03?\x03?\x07?\u03A7\n?\f?\x0E?\u03AA\v?\x03@\x03" +
    "@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u03B4\n@\x03A\x03A\x03A\x05A\u03B9" +
    "\nA\x03A\x03A\x03A\x05A\u03BE\nA\x05A\u03C0\nA\x03B\x03B\x03B\x05B\u03C5" +
    "\nB\x03B\x03B\x03B\x05B\u03CA\nB\x03B\x03B\x03B\x05B\u03CF\nB\x05B\u03D1" +
    "\nB\x03C\x03C\x03C\x05C\u03D6\nC\x03C\x03C\x07C\u03DA\nC\fC\x0EC\u03DD" +
    "\vC\x03C\x03C\x06C\u03E1\nC\rC\x0EC\u03E2\x03C\x03C\x03C\x03C\x03C\x03" +
    "C\x03C\x07C\u03EC\nC\fC\x0EC\u03EF\vC\x03C\x05C\u03F2\nC\x03D\x03D\x03" +
    "D\x03D\x03E\x03E\x03F\x03F\x03F\x07F\u03FD\nF\fF\x0EF\u0400\vF\x03F\x05" +
    "F\u0403\nF\x03F\x03F\x03F\x03F\x07F\u0409\nF\fF\x0EF\u040C\vF\x03F\x03" +
    "F\x07F\u0410\nF\fF\x0EF\u0413\vF\x03F\x05F\u0416\nF\x05F\u0418\nF\x03" +
    "G\x03G\x03G\x03G\x07G\u041E\nG\fG\x0EG\u0421\vG\x03G\x03G\x03H\x03H\x05" +
    "H\u0427\nH\x03H\x03H\x03H\x05H\u042C\nH\x03H\x05H\u042F\nH\x03I\x03I\x03" +
    "I\x03I\x05I\u0435\nI\x03I\x05I\u0438\nI\x03J\x03J\x05J\u043C\nJ\x03J\x03" +
    "J\x03J\x07J\u0441\nJ\fJ\x0EJ\u0444\vJ\x07J\u0446\nJ\fJ\x0EJ\u0449\vJ\x03" +
    "J\x07J\u044C\nJ\fJ\x0EJ\u044F\vJ\x07J\u0451\nJ\fJ\x0EJ\u0454\vJ\x03J\x03" +
    "J\x03J\x03J\x03J\x07J\u045B\nJ\fJ\x0EJ\u045E\vJ\x03J\x05J\u0461\nJ\x03" +
    "K\x03K\x03K\x03K\x03K\x06K\u0468\nK\rK\x0EK\u0469\x03K\x03K\x03K\x03K" +
    "\x03K\x03K\x03K\x07K\u0473\nK\fK\x0EK\u0476\vK\x03K\x05K\u0479\nK\x03" +
    "L\x03L\x03L\x03L\x03M\x03M\x03M\x03M\x06M\u0483\nM\rM\x0EM\u0484\x03M" +
    "\x03M\x05M\u0489\nM\x03N\x03N\x03N\x03N\x06N\u048F\nN\rN\x0EN\u0490\x03" +
    "N\x03N\x03O\x03O\x07O\u0497\nO\fO\x0EO\u049A\vO\x03O\x05O\u049D\nO\x03" +
    "O\x03O\x07O\u04A1\nO\fO\x0EO\u04A4\vO\x07O\u04A6\nO\fO\x0EO\u04A9\vO\x03" +
    "O\x07O\u04AC\nO\fO\x0EO\u04AF\vO\x03O\x07O\u04B2\nO\fO\x0EO\u04B5\vO\x03" +
    "O\x03O\x03O\x07O\u04BA\nO\fO\x0EO\u04BD\vO\x03O\x05O\u04C0\nO\x03O\x05" +
    "O\u04C3\nO\x03P\x03P\x06P\u04C7\nP\rP\x0EP\u04C8\x03P\x03P\x03Q\x03Q\x03" +
    "Q\x06Q\u04D0\nQ\rQ\x0EQ\u04D1\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u04D9\nQ\x03" +
    "R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u04E3\nR\x03S\x03S\x03S\x03" +
    "S\x03S\x03S\x03S\x03S\x03S\x05S\u04EE\nS\x03T\x03T\x03T\x03T\x03U\x03" +
    "U\x03U\x03U\x03V\x03V\x07V\u04FA\nV\fV\x0EV\u04FD\vV\x03V\x07V\u0500\n" +
    "V\fV\x0EV\u0503\vV\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x07W\u050C\nW\f" +
    "W\x0EW\u050F\vW\x03W\x03W\x03W\x03W\x07W\u0515\nW\fW\x0EW\u0518\vW\x03" +
    "W\x03W\x05W\u051C\nW\x03X\x03X\x03X\x03X\x06X\u0522\nX\rX\x0EX\u0523\x03" +
    "X\x03X\x03X\x03X\x03X\x07X\u052B\nX\fX\x0EX\u052E\vX\x03X\x05X\u0531\n" +
    "X\x03Y\x03Y\x05Y\u0535\nY\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x05[\u053D\n[" +
    "\x06[\u053F\n[\r[\x0E[\u0540\x03\\\x03\\\x06\\\u0545\n\\\r\\\x0E\\\u0546" +
    "\x03\\\x05\\\u054A\n\\\x03\\\x03\\\x06\\\u054E\n\\\r\\\x0E\\\u054F\x03" +
    "\\\x05\\\u0553\n\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x07\\\u055C" +
    "\n\\\f\\\x0E\\\u055F\v\\\x03\\\x03\\\x07\\\u0563\n\\\f\\\x0E\\\u0566\v" +
    "\\\x03\\\x03\\\x07\\\u056A\n\\\f\\\x0E\\\u056D\v\\\x03\\\x03\\\x03\\\x05" +
    "\\\u0572\n\\\x03]\x03]\x03^\x03^\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
    "_\x03_\x03_\x03_\x03_\x06_\u0584\n_\r_\x0E_\u0585\x03`\x03`\x03`\x07\u0208" +
    "\u038B\u039E\u03ED\u0516\x02\x02a\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
    "\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
    "\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
    "8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
    "T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
    "p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
    "\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
    "\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
    "\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
    "\xBE\x02\x02\x17\x03\x02#$\x03\x02BC\b\x02Z[]^lt\x7F\x82\x88\x89\x8B\x8D" +
    "\x05\x02YYnn\x7F\x7F\x04\x02ZZoo\x05\x02[[pq\x81\x81\x04\x02\\\\rr\x04" +
    "\x02]]ss\x05\x02^^tt\x82\x82\x04\x02eexx\x05\x02ggyz\x86\x86\x04\x02h" +
    "h{{\x04\x02ii||\x05\x02jj}}\x87\x87\x03\x029:\x04\x02IILO\x03\x02\x17" +
    "\x17\x04\x02\x18\x18\x1A\x1A\x03\x02%&\x03\x02\x1D\x1D\x03\x02\x1E\x1E" +
    "\x02\u0663\x02\xCD\x03\x02\x02\x02\x04\xD9\x03\x02\x02\x02\x06\xDD\x03" +
    "\x02\x02\x02\b\u0127\x03\x02\x02\x02\n\u016A\x03\x02\x02\x02\f\u016E\x03" +
    "\x02\x02\x02\x0E\u0170\x03\x02\x02\x02\x10\u0172\x03\x02\x02\x02\x12\u0175" +
    "\x03\x02\x02\x02\x14\u01D8\x03\x02\x02\x02\x16\u01DB\x03\x02\x02\x02\x18" +
    "\u01F2\x03\x02\x02\x02\x1A\u01F8\x03\x02\x02\x02\x1C\u01FC\x03\x02\x02" +
    "\x02\x1E\u01FE\x03\x02\x02\x02 \u0200\x03\x02\x02\x02\"\u0202\x03\x02" +
    "\x02\x02$\u0204\x03\x02\x02\x02&\u020E\x03\x02\x02\x02(\u0216\x03\x02" +
    "\x02\x02*\u022B\x03\x02\x02\x02,\u0233\x03\x02\x02\x02.\u023B\x03\x02" +
    "\x02\x020\u0243\x03\x02\x02\x022\u0265\x03\x02\x02\x024\u026A\x03\x02" +
    "\x02\x026\u0284\x03\x02\x02\x028\u028E\x03\x02\x02\x02:\u0292\x03\x02" +
    "\x02\x02<\u029D\x03\x02\x02\x02>\u02AB\x03\x02\x02\x02@\u02B2\x03\x02" +
    "\x02\x02B\u02BD\x03\x02\x02\x02D\u02C8\x03\x02\x02\x02F\u02D0\x03\x02" +
    "\x02\x02H\u02E0\x03\x02\x02\x02J\u02E2\x03\x02\x02\x02L\u02E7\x03\x02" +
    "\x02\x02N\u02E9\x03\x02\x02\x02P\u02EB\x03\x02\x02\x02R\u02ED\x03\x02" +
    "\x02\x02T\u02EF\x03\x02\x02\x02V\u02F1\x03\x02\x02\x02X\u02F3\x03\x02" +
    "\x02\x02Z\u02F5\x03\x02\x02\x02\\\u02F7\x03\x02\x02\x02^\u0308\x03\x02" +
    "\x02\x02`\u030A\x03\x02\x02\x02b\u0312\x03\x02\x02\x02d\u0314\x03\x02" +
    "\x02\x02f\u031E\x03\x02\x02\x02h\u0328\x03\x02\x02\x02j\u0335\x03\x02" +
    "\x02\x02l\u033C\x03\x02\x02\x02n\u0347\x03\x02\x02\x02p\u034E\x03\x02" +
    "\x02\x02r\u0358\x03\x02\x02\x02t\u0363\x03\x02\x02\x02v\u037C\x03\x02" +
    "\x02\x02x\u038F\x03\x02\x02\x02z\u03A2\x03\x02\x02\x02|\u03A4\x03\x02" +
    "\x02\x02~\u03AB\x03\x02\x02\x02\x80\u03BF\x03\x02\x02\x02\x82\u03D0\x03" +
    "\x02\x02\x02\x84\u03F1\x03\x02\x02\x02\x86\u03F3\x03\x02\x02\x02\x88\u03F7" +
    "\x03\x02\x02\x02\x8A\u0417\x03\x02\x02\x02\x8C\u0419\x03\x02\x02\x02\x8E" +
    "\u042E\x03\x02\x02\x02\x90\u0437\x03\x02\x02\x02\x92\u0460\x03\x02\x02" +
    "\x02\x94\u0478\x03\x02\x02\x02\x96\u047A\x03\x02\x02\x02\x98\u047E\x03" +
    "\x02\x02\x02\x9A\u048A\x03\x02\x02\x02\x9C\u04C2\x03\x02\x02\x02\x9E\u04C4" +
    "\x03\x02\x02\x02\xA0\u04D8\x03\x02\x02\x02\xA2\u04E2\x03\x02\x02\x02\xA4" +
    "\u04ED\x03\x02\x02\x02\xA6\u04EF\x03\x02\x02\x02\xA8\u04F3\x03\x02\x02" +
    "\x02\xAA\u04F7\x03\x02\x02\x02\xAC\u051B\x03\x02\x02\x02\xAE\u0530\x03" +
    "\x02\x02\x02\xB0\u0532\x03\x02\x02\x02\xB2\u0538\x03\x02\x02\x02\xB4\u053E" +
    "\x03\x02\x02\x02\xB6\u0571\x03\x02\x02\x02\xB8\u0573\x03\x02\x02\x02\xBA" +
    "\u0575\x03\x02\x02\x02\xBC\u0583\x03\x02\x02\x02\xBE\u0587\x03\x02\x02" +
    "\x02\xC0\xCA\x05\x04\x03\x02\xC1\xC3\x07\x04\x02\x02\xC2\xC1\x03\x02\x02" +
    "\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02" +
    "\x02\xC5\xC7\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xC9\x071\x02" +
    "\x02\xC8\xC4\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02" +
    "\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02" +
    "\x02\xCD\xC0\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xCD\x03\x02\x02" +
    "\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD4\x03\x02\x02\x02\xD1\xD3\x071\x02" +
    "\x02\xD2\xD1\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02" +
    "\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD4\x03\x02\x02" +
    "\x02\xD7\xD8\x07\x02\x02\x03\xD8\x03\x03\x02\x02\x02\xD9\xDA\x05\x06\x04" +
    "\x02\xDA\x05\x03\x02\x02\x02\xDB\xDE\x05\b\x05\x02\xDC\xDE\x05\n\x06\x02" +
    "\xDD\xDB\x03\x02\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE\x07\x03\x02\x02\x02" +
    "\xDF\xE0\x07\x05\x02\x02\xE0\xE1\x05@!\x02\xE1\xE5\x07\x17\x02\x02\xE2" +
    "\xE4\x071\x02\x02\xE3\xE2\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5" +
    "\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xF1\x03\x02\x02\x02\xE7" +
    "\xE5\x03\x02\x02\x02\xE8\xEC\x052\x1A\x02\xE9\xEB\x071\x02\x02\xEA\xE9" +
    "\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED" +
    "\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xE8" +
    "\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2" +
    "\x03\x02\x02\x02\xF2\u0128\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF4" +
    "\xF5\x07\x05\x02\x02\xF5\xF6\x05@!\x02\xF6\xFA\x07\x17\x02\x02\xF7\xF9" +
    "\x071\x02\x02\xF8\xF7\x03\x02\x02\x02\xF9\xFC\x03\x02\x02\x02\xFA\xF8" +
    "\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\u0106\x03\x02\x02\x02\xFC" +
    "\xFA\x03\x02\x02\x02\xFD\u0101\x052\x1A\x02\xFE\u0100\x071\x02\x02\xFF" +
    "\xFE\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02" +
    "\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101" +
    "\x03\x02\x02\x02\u0104\xFD\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02" +
    "\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0119\x03" +
    "\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109\u010D\x05\f\x07\x02\u010A" +
    "\u010C\x071\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\u010F\x03\x02\x02" +
    "\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u0117" +
    "\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0114\x05\x12\n\x02" +
    "\u0111\u0113\x071\x02\x02\u0112\u0111\x03\x02\x02\x02\u0113\u0116\x03" +
    "\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115" +
    "\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0117\u0110\x03\x02" +
    "\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u011A\x03\x02\x02\x02\u0119" +
    "\u0109\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u0119\x03\x02" +
    "\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D" +
    "\u0121\x05\x0E\b\x02\u011E\u0120\x071\x02\x02\u011F\u011E\x03\x02\x02" +
    "\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122" +
    "\x03\x02\x02\x02\u0122\u0125\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02" +
    "\u0124\u0126\x054\x1B\x02\u0125\u0124\x03\x02\x02\x02\u0125\u0126\x03" +
    "\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127\xDF\x03\x02\x02\x02\u0127" +
    "\xF4\x03\x02\x02\x02\u0128\t\x03\x02\x02\x02\u0129\u012A\x07\x06\x02\x02" +
    "\u012A\u012B\x05@!\x02\u012B\u012F\x07\x17\x02\x02\u012C\u012E\x071\x02" +
    "\x02\u012D\u012C\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F\u012D" +
    "\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u013B\x03\x02\x02\x02" +
    "\u0131\u012F\x03\x02\x02\x02\u0132\u0136\x052\x1A\x02\u0133\u0135\x07" +
    "1\x02\x02\u0134\u0133\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136" +
    "\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u013A\x03\x02" +
    "\x02\x02\u0138\u0136\x03\x02\x02\x02\u0139\u0132\x03\x02\x02\x02\u013A" +
    "\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02" +
    "\x02\x02\u013C\u016B\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E" +
    "\u013F\x07\x06\x02\x02\u013F\u0140\x05@!\x02\u0140\u0144\x07\x17\x02\x02" +
    "\u0141\u0143\x071\x02\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0146\x03" +
    "\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145" +
    "\u0150\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147\u014B\x052\x1A" +
    "\x02\u0148\u014A\x071\x02\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014D" +
    "\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02";
interviewParser._serializedATNSegment1 = "\u014B\u014C\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03" +
    "\x02\x02\x02\u014E\u0147\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150" +
    "\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u015D\x03\x02" +
    "\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0154\x05\f\x07\x02\u0154\u0158" +
    "\x05\x12\n\x02\u0155\u0157\x071\x02\x02\u0156\u0155\x03\x02\x02\x02\u0157" +
    "\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02" +
    "\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B" +
    "\u0153\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02" +
    "\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160\x03\x02\x02\x02\u015F" +
    "\u015D\x03\x02\x02\x02\u0160\u0164\x05\x0E\b\x02\u0161\u0163\x071\x02" +
    "\x02\u0162\u0161\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162" +
    "\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02" +
    "\u0166\u0164\x03\x02\x02\x02\u0167\u0169\x054\x1B\x02\u0168\u0167\x03" +
    "\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A" +
    "\u0129\x03\x02\x02\x02\u016A\u013E\x03\x02\x02\x02\u016B\v\x03\x02\x02" +
    "\x02\u016C\u016F\t\x02\x02\x02\u016D\u016F\x071\x02\x02\u016E\u016C\x03" +
    "\x02\x02\x02\u016E\u016D\x03\x02\x02\x02\u016F\r\x03\x02\x02\x02\u0170" +
    "\u0171\t\x02\x02\x02\u0171\x0F\x03\x02\x02\x02\u0172\u0173\x05\x12\n\x02" +
    "\u0173\u0174\x071\x02\x02\u0174\x11\x03\x02\x02\x02\u0175\u017E\x05\x14" +
    "\v\x02\u0176\u0178\x071\x02\x02\u0177\u0176\x03\x02\x02\x02\u0178\u0179" +
    "\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02" +
    "\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x05\x14\v\x02\u017C\u0177\x03" +
    "\x02\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E" +
    "\u017F\x03\x02\x02\x02\u017F\x13\x03\x02\x02\x02\u0180\u017E\x03\x02\x02" +
    "\x02\u0181\u0183\x05\x8AF\x02\u0182\u0181\x03\x02\x02\x02\u0182\u0183" +
    "\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0188\x05\x18\r\x02" +
    "\u0185\u0187\x07\x04\x02\x02\u0186\u0185\x03\x02\x02\x02\u0187\u018A\x03" +
    "\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189" +
    "\u0198\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B\u0197\x05\x8A" +
    "F\x02\u018C\u0197\x05\x9CO\x02\u018D\u0197\x05\x90I\x02\u018E\u0197\x05" +
    "\x1E\x10\x02\u018F\u0197\x05\x1C\x0F\x02\u0190\u0197\x05\xAEX\x02\u0191" +
    "\u0197\x05 \x11\x02\u0192\u0197\x05<\x1F\x02\u0193\u0197\x05$\x13\x02" +
    "\u0194\u0197\x05\x9EP\x02\u0195\u0197\x05\x16\f\x02\u0196\u018B\x03\x02" +
    "\x02\x02\u0196\u018C\x03\x02\x02\x02\u0196\u018D\x03\x02\x02\x02\u0196" +
    "\u018E\x03\x02\x02\x02\u0196\u018F\x03\x02\x02\x02\u0196\u0190\x03\x02" +
    "\x02\x02\u0196\u0191\x03\x02\x02\x02\u0196\u0192\x03\x02\x02\x02\u0196" +
    "\u0193\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0195\x03\x02" +
    "\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198" +
    "\u0199\x03\x02\x02\x02\u0199\u01B0\x03\x02\x02\x02\u019A\u0198\x03\x02" +
    "\x02\x02\u019B\u019D\x071\x02\x02\u019C\u019E\x05\x1A\x0E\x02\u019D\u019C" +
    "\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A2\x03\x02\x02\x02" +
    "\u019F\u01A1\x07\x04\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A1\u01A4\x03" +
    "\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3" +
    "\u01AD\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01AC\x05\x90" +
    "I\x02\u01A6\u01AC\x05\x1E\x10\x02\u01A7\u01AC\x05\x1C\x0F\x02\u01A8\u01AC" +
    "\x05\xAEX\x02\u01A9\u01AC\x05 \x11\x02\u01AA\u01AC\x05\"\x12\x02\u01AB" +
    "\u01A5\x03\x02\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01A7\x03\x02" +
    "\x02\x02\u01AB\u01A8\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB" +
    "\u01AA\x03\x02\x02\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD\u01AB\x03\x02" +
    "\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B1\x03\x02\x02\x02\u01AF" +
    "\u01AD\x03\x02\x02\x02\u01B0\u019B\x03\x02\x02\x02\u01B0\u01B1\x03\x02" +
    "\x02\x02\u01B1\u01D9\x03\x02\x02\x02\u01B2\u01BE\x05\x8AF\x02\u01B3\u01BE" +
    "\x05\x9CO\x02\u01B4\u01BE\x05\x90I\x02\u01B5\u01BE\x05\x1E\x10\x02\u01B6" +
    "\u01BE\x05\x1C\x0F\x02\u01B7\u01BE\x05\xAEX\x02\u01B8\u01BE\x05 \x11\x02" +
    "\u01B9\u01BE\x05<\x1F\x02\u01BA\u01BE\x05$\x13\x02\u01BB\u01BE\x05\x9E" +
    "P\x02\u01BC\u01BE\x05\x16\f\x02\u01BD\u01B2\x03\x02\x02\x02\u01BD\u01B3" +
    "\x03\x02\x02\x02\u01BD\u01B4\x03\x02\x02\x02\u01BD\u01B5\x03\x02\x02\x02" +
    "\u01BD\u01B6\x03\x02\x02\x02\u01BD\u01B7\x03\x02\x02\x02\u01BD\u01B8\x03" +
    "\x02\x02\x02\u01BD\u01B9\x03\x02\x02\x02\u01BD\u01BA\x03\x02\x02\x02\u01BD" +
    "\u01BB\x03\x02\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02" +
    "\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0" +
    "\u01D6\x03\x02\x02\x02\u01C1\u01C3\x071\x02\x02\u01C2\u01C4\x05\x1A\x0E" +
    "\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C8" +
    "\x03\x02\x02\x02\u01C5\u01C7\x07\x04\x02\x02\u01C6\u01C5\x03\x02\x02\x02" +
    "\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03" +
    "\x02\x02\x02\u01C9\u01D3\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CB" +
    "\u01D2\x05\x90I\x02\u01CC\u01D2\x05\x1E\x10\x02\u01CD\u01D2\x05\x1C\x0F" +
    "\x02\u01CE\u01D2\x05\xAEX\x02\u01CF\u01D2\x05 \x11\x02\u01D0\u01D2\x05" +
    "\"\x12\x02\u01D1\u01CB\x03\x02\x02\x02\u01D1\u01CC\x03\x02\x02\x02\u01D1" +
    "\u01CD\x03\x02\x02\x02\u01D1\u01CE\x03\x02\x02\x02\u01D1\u01CF\x03\x02" +
    "\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3" +
    "\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D7\x03\x02" +
    "\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01C1\x03\x02\x02\x02\u01D6" +
    "\u01D7\x03\x02\x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8\u0182\x03\x02" +
    "\x02\x02\u01D8\u01BD\x03\x02\x02\x02\u01D9\x15\x03\x02\x02\x02\u01DA\u01DC" +
    "\x05\xB6\\\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02" +
    "\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\x17\x03" +
    "\x02\x02\x02\u01DF\u01E0\x070\x02\x02\u01E0\u01E2\x07\x17\x02\x02\u01E1" +
    "\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01ED\x03\x02" +
    "\x02\x02\u01E3\u01E5\x05\xBC_\x02\u01E4\u01E6\x07\x18\x02\x02\u01E5\u01E4" +
    "\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01EA\x03\x02\x02\x02" +
    "\u01E7\u01E9\x071\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EC\x03" +
    "\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB" +
    "\u01EE\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01E3\x03\x02" +
    "\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF" +
    "\u01F0\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01F3\x07\x9E" +
    "\x02\x02\u01F2\u01E1\x03\x02\x02\x02\u01F2\u01F1\x03\x02\x02\x02\u01F3" +
    "\x19\x03\x02\x02\x02\u01F4\u01F6\x05\xBC_\x02\u01F5\u01F7\x07\x18\x02" +
    "\x02\u01F6\u01F5\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F9" +
    "\x03\x02\x02\x02\u01F8\u01F4\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
    "\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\x1B\x03" +
    "\x02\x02\x02\u01FC\u01FD\x07=\x02\x02\u01FD\x1D\x03\x02\x02\x02\u01FE" +
    "\u01FF\x07<\x02\x02\u01FF\x1F\x03\x02\x02\x02\u0200\u0201\t\x03\x02\x02" +
    "\u0201!\x03\x02\x02\x02\u0202\u0203\x07A\x02\x02\u0203#\x03\x02\x02\x02" +
    "\u0204\u0208\x07\x13\x02\x02\u0205\u0207\v\x02\x02\x02\u0206\u0205\x03" +
    "\x02\x02\x02\u0207\u020A\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0208" +
    "\u0206\x03\x02\x02\x02\u0209\u020B\x03\x02\x02\x02\u020A\u0208\x03\x02" +
    "\x02\x02\u020B\u020C\x07\x17\x02\x02\u020C%\x03\x02\x02\x02\u020D\u020F" +
    "\x05\xB6\\\x02\u020E\u020D\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02" +
    "\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x03" +
    "\x02\x02\x02\u0212\u0214\x07@\x02\x02\u0213\u0212\x03\x02\x02\x02\u0213" +
    "\u0214\x03\x02\x02\x02\u0214\'\x03\x02\x02\x02\u0215\u0217\x05\xB6\\\x02" +
    "\u0216\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0216\x03" +
    "\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u0220\x03\x02\x02\x02\u021A" +
    "\u021C\x07\"\x02\x02\u021B\u021D\x05\xB6\\\x02\u021C\u021B\x03\x02\x02" +
    "\x02\u021D\u021E\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F" +
    "\x03\x02\x02\x02\u021F\u0221\x03\x02\x02\x02\u0220\u021A\x03\x02\x02\x02" +
    "\u0220\u0221\x03\x02\x02\x02\u0221\u0229\x03\x02\x02\x02\u0222\u0224\x07" +
    "\x04\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224\u0227\x03\x02\x02\x02\u0225" +
    "\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0228\x03\x02" +
    "\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228\u022A\x05\x90I\x02\u0229\u0225" +
    "\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A)\x03\x02\x02\x02\u022B" +
    "\u022D\x05,\x17\x02\u022C\u022E\x071\x02\x02\u022D\u022C\x03\x02\x02\x02" +
    "\u022E\u022F\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F\u0230\x03" +
    "\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0232\x05.\x18\x02\u0232" +
    "+\x03\x02\x02\x02\u0233\u0235\x07\x16\x02\x02\u0234\u0236\x05\xB6\\\x02" +
    "\u0235\u0234\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0235\x03" +
    "\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239" +
    "\u023A\x07\x17\x02\x02\u023A-\x03\x02\x02\x02\u023B\u023D\x07\x16\x02" +
    "\x02\u023C\u023E\x05\xB6\\\x02\u023D\u023C\x03\x02\x02\x02\u023E\u023F" +
    "\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02" +
    "\u0240\u0241\x03\x02\x02\x02\u0241\u0242\x07\x17\x02\x02\u0242/\x03\x02" +
    "\x02\x02\u0243\u024B\x07?\x02\x02\u0244\u0246\x071\x02\x02\u0245\u0244" +
    "\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02" +
    "\u0247\u0249\x05\xB4[\x02\u0248\u024A\x071\x02\x02\u0249\u0248\x03\x02" +
    "\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B" +
    "\u0245\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024D\x03\x02" +
    "\x02\x02\u024D\u024E\x07\x17\x02\x02\u024E1\x03\x02\x02\x02\u024F\u0266" +
    "\x072\x02\x02\u0250\u0266\x05\x8AF\x02\u0251\u0266\x05\xAAV\x02\u0252" +
    "\u0266\x05\x94K\x02\u0253\u0266\x05\xA0Q\x02\u0254\u0266\x05\x9CO\x02" +
    "\u0255\u0266\x05\x9EP\x02\u0256\u0266\x05:\x1E\x02\u0257\u0266\x05\xB6" +
    "\\\x02\u0258\u0266\x05\x90I\x02\u0259\u0266\x05\xA2R\x02\u025A\u0266\x05" +
    "r:\x02\u025B\u0266\x05|?\x02\u025C\u0266\x05n8\x02\u025D\u0266\x05b2\x02" +
    "\u025E\u0266\x05d3\x02\u025F\u0266\x05h5\x02\u0260\u0266\x05f4\x02\u0261" +
    "\u0266\x05j6\x02\u0262\u0266\x05\x8EH\x02\u0263\u0266\x05\xB0Y\x02\u0264" +
    "\u0266\x05\xBE`\x02\u0265\u024F\x03\x02\x02\x02\u0265\u0250\x03\x02\x02" +
    "\x02\u0265\u0251\x03\x02\x02\x02\u0265\u0252\x03\x02\x02\x02\u0265\u0253" +
    "\x03\x02\x02\x02\u0265\u0254\x03\x02\x02\x02\u0265\u0255\x03\x02\x02\x02" +
    "\u0265\u0256\x03\x02\x02\x02\u0265\u0257\x03\x02\x02\x02\u0265\u0258\x03" +
    "\x02\x02\x02\u0265\u0259\x03\x02\x02\x02\u0265\u025A\x03\x02\x02\x02\u0265" +
    "\u025B\x03\x02\x02\x02\u0265\u025C\x03\x02\x02\x02\u0265\u025D\x03\x02" +
    "\x02\x02\u0265\u025E\x03\x02\x02\x02\u0265\u025F\x03\x02\x02\x02\u0265" +
    "\u0260\x03\x02\x02\x02\u0265\u0261\x03\x02\x02\x02\u0265\u0262\x03\x02" +
    "\x02\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0264\x03\x02\x02\x02\u0266" +
    "3\x03\x02\x02\x02\u0267\u0269\x071\x02\x02\u0268\u0267\x03\x02\x02\x02" +
    "\u0269\u026C\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026A\u026B\x03" +
    "\x02\x02\x02\u026B\u026D\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026D" +
    "\u0271\x056\x1C\x02\u026E\u0270\x056\x1C\x02\u026F\u026E\x03\x02\x02\x02" +
    "\u0270\u0273\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0271\u0272\x03" +
    "\x02\x02\x02\u0272\u0277\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274" +
    "\u0276\x071\x02\x02\u0275\u0274\x03\x02\x02\x02\u0276\u0279\x03\x02\x02" +
    "\x02\u0277\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u02785\x03" +
    "\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u027A\u0285\x058\x1D\x02\u027B" +
    "\u0285\x05r:\x02\u027C\u0285\x05|?\x02\u027D\u0285\x05n8\x02\u027E\u0285" +
    "\x05b2\x02\u027F\u0285\x05d3\x02\u0280\u0285\x05h5\x02\u0281\u0285\x05" +
    "f4\x02\u0282\u0285\x05\x94K\x02\u0283\u0285\x05\x9EP\x02\u0284\u027A\x03" +
    "\x02\x02\x02\u0284\u027B\x03\x02\x02\x02\u0284\u027C\x03\x02\x02\x02\u0284" +
    "\u027D\x03\x02\x02\x02\u0284\u027E\x03\x02\x02\x02\u0284\u027F\x03\x02" +
    "\x02\x02\u0284\u0280\x03\x02\x02\x02\u0284\u0281\x03\x02\x02\x02\u0284" +
    "\u0282\x03\x02\x02\x02\u0284\u0283\x03\x02\x02\x02\u0285\u0289\x03\x02" +
    "\x02\x02\u0286\u0288\x071\x02\x02\u0287\u0286\x03\x02\x02\x02\u0288\u028B" +
    "\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02" +
    "\u028A7\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028C\u028F\x07\x9E" +
    "\x02\x02\u028D\u028F\x05\xB6\\\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028D" +
    "\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02" +
    "\u0290\u0291\x03\x02\x02\x02\u02919\x03\x02\x02\x02\u0292\u029A\x05<\x1F" +
    "\x02\u0293\u0299\x05<\x1F\x02\u0294\u0299\x05\x9CO\x02\u0295\u0299\x05" +
    "\x9EP\x02\u0296\u0299\x05\x8AF\x02\u0297\u0299\x05\x90I\x02\u0298\u0293" +
    "\x03\x02\x02\x02\u0298\u0294\x03\x02\x02\x02\u0298\u0295\x03\x02\x02\x02" +
    "\u0298\u0296\x03\x02\x02\x02\u0298\u0297\x03\x02\x02\x02\u0299\u029C\x03" +
    "\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B" +
    ";\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D\u02A1\x07\r\x02\x02" +
    "\u029E\u02A2\x07/\x02\x02\u029F\u02A2\x070\x02\x02\u02A0\u02A2\x03\x02" +
    "\x02\x02\u02A1\u029E\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1" +
    "\u02A0\x03\x02\x02\x02\u02A2\u02A6\x03\x02\x02\x02\u02A3\u02A5\x05\xB6" +
    "\\\x02\u02A4\u02A3\x03\x02\x02\x02\u02A5\u02A8\x03\x02\x02\x02\u02A6\u02A4" +
    "\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A9\x03\x02\x02\x02" +
    "\u02A8\u02A6\x03\x02\x02\x02\u02A9\u02AA\x05\xB8]\x02\u02AA=\x03\x02\x02" +
    "\x02\u02AB\u02AC\x07F\x02\x02\u02AC\u02AD\x07/\x02\x02\u02AD\u02AE\x07" +
    "\x17\x02\x02\u02AE?\x03\x02\x02\x02\u02AF\u02B1\x05B\"\x02\u02B0\u02AF" +
    "\x03\x02\x02\x02\u02B1\u02B4\x03\x02\x02\x02\u02B2\u02B0\x03\x02\x02\x02" +
    "\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02BA\x03\x02\x02\x02\u02B4\u02B2\x03" +
    "\x02\x02\x02\u02B5\u02B9\x07\x8A\x02\x02\u02B6\u02B9\x07\x8B\x02\x02\u02B7" +
    "\u02B9\x05D#\x02\u02B8\u02B5\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02" +
    "\u02B8\u02B7\x03\x02\x02\x02\u02B9\u02BC\x03\x02\x02\x02\u02BA\u02B8\x03" +
    "\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BBA\x03\x02\x02\x02\u02BC" +
    "\u02BA\x03\x02\x02\x02\u02BD\u02BE\t\x04\x02\x02\u02BEC\x03\x02\x02\x02" +
    "\u02BF\u02C9\x05H%\x02\u02C0\u02C9\x05\x80A\x02\u02C1\u02C9\x05J&\x02" +
    "\u02C2\u02C9\x05L\'\x02\u02C3\u02C9\x05N(\x02\u02C4\u02C9\x05P)\x02\u02C5" +
    "\u02C9\x05R*\x02\u02C6\u02C9\x05T+\x02\u02C7\u02C9\x07_\x02\x02\u02C8" +
    "\u02BF\x03\x02\x02\x02\u02C8\u02C0\x03\x02\x02\x02\u02C8\u02C1\x03\x02" +
    "\x02\x02\u02C8\u02C2\x03\x02\x02\x02\u02C8\u02C3\x03\x02\x02\x02\u02C8" +
    "\u02C4\x03\x02\x02\x02\u02C8\u02C5\x03\x02\x02\x02\u02C8\u02C6\x03\x02" +
    "\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C9E\x03\x02\x02\x02\u02CA\u02D1" +
    "\x07\x88\x02\x02\u02CB\u02D1\x07\x89\x02\x02\u02CC\u02D1\x07\x8A\x02\x02" +
    "\u02CD\u02D1\x07\x8D\x02\x02\u02CE\u02D1\x07\x8B\x02\x02\u02CF\u02D1\x03" +
    "\x02\x02\x02\u02D0\u02CA\x03\x02\x02\x02\u02D0\u02CB\x03\x02\x02\x02\u02D0" +
    "\u02CC\x03\x02\x02\x02\u02D0\u02CD\x03\x02\x02\x02\u02D0\u02CE\x03\x02" +
    "\x02\x02\u02D0\u02CF\x03\x02\x02\x02\u02D1G\x03\x02\x02\x02\u02D2\u02D5" +
    "\x07V\x02\x02\u02D3\u02D6\x07*\x02\x02\u02D4\u02D6\x07\x9B\x02\x02\u02D5" +
    "\u02D3\x03\x02\x02\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5\u02D6\x03\x02" +
    "\x02\x02\u02D6\u02E1\x03\x02\x02\x02\u02D7\u02D9\x07m\x02\x02\u02D8\u02DA" +
    "\x07*\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02" +
    "\u02DA\u02E1\x03\x02\x02\x02\u02DB\u02DD\x07W\x02\x02\u02DC\u02DE\x07" +
    "*\x02\x02\u02DD\u02DC\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE" +
    "\u02E1\x03\x02\x02\x02\u02DF\u02E1\x07X\x02\x02\u02E0\u02D2\x03\x02\x02" +
    "\x02\u02E0\u02D7\x03\x02\x02\x02\u02E0\u02DB\x03\x02\x02\x02\u02E0\u02DF" +
    "\x03\x02\x02\x02\u02E1I\x03\x02\x02\x02\u02E2\u02E5\t\x05\x02\x02\u02E3" +
    "\u02E4\x07\x18\x02\x02\u02E4\u02E6\x07,\x02\x02\u02E5\u02E3\x03\x02\x02" +
    "\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6K\x03\x02\x02\x02\u02E7\u02E8\t" +
    "\x06\x02\x02\u02E8M\x03\x02\x02\x02\u02E9\u02EA\t\x07\x02\x02\u02EAO\x03" +
    "\x02\x02\x02\u02EB\u02EC\t\b\x02\x02\u02ECQ\x03\x02\x02\x02\u02ED\u02EE" +
    "\t\t\x02\x02\u02EES\x03\x02\x02\x02\u02EF\u02F0\t\n\x02\x02\u02F0U\x03" +
    "\x02\x02\x02\u02F1\u02F2\t\v\x02\x02\u02F2W\x03\x02\x02\x02\u02F3\u02F4" +
    "\t\f\x02\x02\u02F4Y\x03\x02\x02\x02\u02F5\u02F6\t\r\x02\x02\u02F6[\x03" +
    "\x02\x02\x02\u02F7\u02F8\t\x0E\x02\x02\u02F8]\x03\x02\x02\x02\u02F9\u02FC" +
    "\x07d\x02\x02\u02FA\u02FB\x07\x18\x02\x02\u02FB\u02FD\x07,\x02\x02\u02FC" +
    "\u02FA\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u0309\x03\x02" +
    "\x02\x02\u02FE\u0301\x07w\x02\x02\u02FF\u0300\x07\x18\x02\x02\u0300\u0302" +
    "\x07,\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02" +
    "\u0302\u0309\x03\x02\x02\x02\u0303\u0306\x07\x84\x02\x02\u0304\u0305\x07" +
    "\x18\x02\x02\u0305\u0307\x07,\x02\x02\u0306\u0304\x03\x02\x02\x02\u0306" +
    "\u0307\x03\x02\x02\x02\u0307\u0309\x03\x02\x02\x02\u0308\u02F9\x03\x02" +
    "\x02\x02\u0308\u02FE\x03\x02\x02\x02\u0308\u0303\x03\x02\x02\x02\u0309" +
    "_\x03\x02\x02\x02\u030A\u030B\t\x0F\x02\x02\u030Ba\x03\x02\x02\x02\u030C" +
    "\u030D\x05V,\x02\u030D\u030E\x07\x18\x02\x02\u030E\u030F\x05\x88E\x02" +
    "\u030F\u0310\x07\x17\x02\x02\u0310\u0313\x03\x02\x02\x02\u0311\u0313\x07" +
    "-\x02\x02\u0312\u030C\x03\x02\x02\x02\u0312\u0311\x03\x02\x02\x02\u0313" +
    "c\x03\x02\x02\x02\u0314\u0315\x05X-\x02\u0315\u0316\x07\x18\x02\x02\u0316" +
    "\u0317\x05\x88E\x02\u0317\u031C\x07\x17\x02\x02\u0318\u0319\x07I\x02\x02" +
    "\u0319\u031A\x05\xBC_\x02\u031A\u031B\x07\x17\x02\x02\u031B\u031D\x03" +
    "\x02\x02\x02\u031C\u0318\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D" +
    "e\x03\x02\x02\x02\u031E\u031F\x05\\/\x02\u031F\u0320\x07\x18\x02\x02\u0320" +
    "\u0321\x05\x88E\x02\u0321\u0326\x07\x17\x02\x02\u0322\u0323\x07I\x02\x02" +
    "\u0323\u0324\x05\xBC_\x02\u0324\u0325\x07\x17\x02\x02\u0325\u0327\x03" +
    "\x02\x02\x02\u0326\u0322\x03\x02\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327" +
    "g\x03\x02\x02\x02\u0328\u0329\x05Z.\x02\u0329\u032C\x07\x18\x02\x02\u032A" +
    "\u032D\x05\x88E\x02\u032B\u032D\x05\x86D\x02\u032C\u032A\x03\x02\x02\x02" +
    "\u032C\u032B\x03\x02\x02\x02\u032D\u032E\x03\x02\x02\x02\u032E\u0333\x07" +
    "\x17\x02\x02\u032F\u0330\x07I\x02\x02\u0330\u0331\x05\xBC_\x02\u0331\u0332" +
    "\x07\x17\x02\x02\u0332\u0334\x03\x02\x02\x02\u0333\u032F\x03\x02\x02\x02" +
    "\u0333\u0334\x03\x02\x02\x02\u0334i\x03\x02\x02\x02\u0335\u0339\x05l7" +
    "\x02\u0336\u0338\x05\x84C\x02\u0337\u0336\x03\x02\x02\x02\u0338\u033B" +
    "\x03\x02\x02\x02\u0339\u0337\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02" +
    "\u033Ak\x03\x02\x02\x02\u033B\u0339\x03\x02\x02\x02\u033C\u033D\x05`1" +
    "\x02\u033D\u0341\x07\x18\x02\x02\u033E\u0340\x07\x04\x02\x02\u033F\u033E" +
    "\x03\x02\x02\x02\u0340\u0343\x03\x02\x02\x02\u0341\u033F\x03\x02\x02\x02" +
    "\u0341\u0342\x03\x02\x02\x02\u0342\u0344\x03\x02\x02\x02\u0343\u0341\x03" +
    "\x02\x02\x02\u0344\u0345\x05\x88E\x02\u0345\u0346\x07\x17\x02\x02\u0346" +
    "m\x03\x02\x02\x02\u0347\u034B\x05p9\x02\u0348\u034A\x05\x84C\x02\u0349" +
    "\u0348\x03\x02\x02\x02\u034A\u034D\x03\x02\x02\x02\u034B\u0349\x03\x02" +
    "\x02\x02\u034B\u034C\x03\x02\x02\x02\u034Co\x03\x02\x02\x02\u034D\u034B" +
    "\x03\x02\x02\x02\u034E\u034F\x05^0\x02\u034F\u0350\x07\x18\x02\x02\u0350" +
    "\u0351\x05\x88E\x02\u0351\u0356\x07\x17\x02\x02\u0352\u0353\x07I\x02\x02" +
    "\u0353\u0354\x05\xBC_\x02\u0354\u0355\x07\x17\x02\x02\u0355\u0357\x03" +
    "\x02\x02\x02\u0356\u0352\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357" +
    "q\x03\x02\x02\x02\u0358\u035C\x05t;\x02\u0359\u035B\x05x=\x02\u035A\u0359" +
    "\x03\x02\x02\x02\u035B\u035E\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02" +
    "\u035C\u035D\x03\x02\x02\x02\u035D\u0361\x03\x02\x02\x02\u035E\u035C\x03" +
    "\x02\x02\x02\u035F\u0360\x071\x02\x02\u0360\u0362\x07K\x02\x02\u0361\u035F" +
    "\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362s\x03\x02\x02\x02\u0363" +
    "\u0364\x05v<\x02\u0364\u0368\x07\x18\x02\x02\u0365\u0367\x07\x04\x02\x02" +
    "\u0366\u0365\x03\x02\x02\x02\u0367\u036A\x03\x02\x02\x02\u0368\u0366\x03" +
    "\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036B\x03\x02\x02\x02\u036A" +
    "\u0368\x03\x02\x02\x02\u036B\u036C\x05\x88E\x02\u036C\u036D\x07\x17\x02" +
    "\x02\u036Du\x03\x02\x02\x02\u036E\u0371\x07a\x02\x02\u036F\u0372\x07*" +
    "\x02\x02\u0370\u0372\x07\x9B\x02\x02\u0371\u036F\x03\x02\x02\x02\u0371" +
    "\u0370\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372\u037D\x03\x02" +
    "\x02\x02\u0373\u0375\x07v\x02\x02\u0374\u0376\x07*\x02\x02\u0375\u0374" +
    "\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u037D\x03\x02\x02\x02" +
    "\u0377\u0379\x07b\x02\x02\u0378\u037A\x07*\x02\x02\u0379\u0378\x03\x02" +
    "\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037D\x03\x02\x02\x02\u037B" +
    "\u037D\x07c\x02\x02\u037C\u036E\x03\x02\x02\x02\u037C\u0373\x03\x02\x02" +
    "\x02\u037C\u0377\x03\x02\x02\x02\u037C\u037B\x03\x02\x02\x02\u037Dw\x03" +
    "\x02\x02\x02\u037E\u037F\x07G\x02\x02\u037F\u0380\x07\x18\x02\x02\u0380" +
    "\u0381\x05\x88E\x02\u0381\u0382\x07\x17\x02\x02\u0382\u0390\x03\x02\x02" +
    "\x02\u0383\u0384\t\x10\x02\x02\u0384\u0385\x07\x18\x02\x02\u0385\u0386" +
    "\x07/\x02\x02\u0386\u0390\x07\x17\x02\x02\u0387\u038B\t\x11\x02\x02\u0388" +
    "\u038A\v\x02\x02\x02\u0389\u0388\x03\x02\x02\x02\u038A\u038D\x03\x02\x02" +
    "\x02\u038B\u038C\x03\x02\x02\x02\u038B\u0389\x03\x02\x02\x02\u038C\u038E" +
    "\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02\u038E\u0390\x07\x17\x02\x02" +
    "\u038F\u037E\x03\x02\x02\x02\u038F\u0383\x03\x02\x02\x02\u038F\u0387\x03" +
    "\x02\x02\x02\u0390y\x03\x02\x02\x02\u0391\u0392\x07G\x02\x02\u0392\u0393" +
    "\x07\x18\x02\x02\u0393\u0394\x05\x88E\x02\u0394\u0395\x07\x17\x02\x02" +
    "\u0395\u03A3\x03\x02\x02\x02\u0396\u0397\t\x10\x02\x02\u0397\u0398\x07" +
    "\x18\x02\x02\u0398\u0399\x07/\x02\x02\u0399\u03A3\x07\x17\x02\x02\u039A" +
    "\u039E\t\x11\x02\x02\u039B\u039D\v\x02\x02\x02\u039C\u039B\x03\x02\x02" +
    "\x02\u039D\u03A0\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039E\u039C" +
    "\x03\x02\x02\x02\u039F\u03A1\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02" +
    "\u03A1\u03A3\x07\x17\x02\x02\u03A2\u0391\x03\x02\x02\x02\u03A2\u0396\x03" +
    "\x02\x02\x02\u03A2\u039A\x03\x02\x02\x02\u03A3{\x03\x02\x02\x02\u03A4" +
    "\u03A8\x05~@\x02\u03A5\u03A7\x05\x84C\x02\u03A6\u03A5\x03\x02\x02\x02" +
    "\u03A7\u03AA\x03\x02\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8\u03A9\x03" +
    "\x02\x02\x02\u03A9}\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AB" +
    "\u03AC\x05\x82B\x02\u03AC\u03AD\x07\x18\x02\x02\u03AD\u03AE\x05\x88E\x02" +
    "\u03AE\u03B3\x07\x17\x02\x02\u03AF\u03B0\x07I\x02\x02\u03B0\u03B1\x05" +
    "\xBC_\x02\u03B1\u03B2\x07\x17\x02\x02\u03B2\u03B4\x03\x02\x02\x02\u03B3" +
    "\u03AF\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\x7F\x03\x02\x02" +
    "\x02\u03B5\u03B8\x07U\x02\x02\u03B6\u03B7\x07\x18\x02\x02\u03B7\u03B9" +
    "\x07+\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02" +
    "\u03B9\u03C0\x03\x02\x02\x02\u03BA\u03BD\x07l\x02\x02\u03BB\u03BC\x07" +
    "\x18\x02\x02\u03BC\u03BE\x07+\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD" +
    "\u03BE\x03\x02\x02\x02\u03BE\u03C0\x03\x02\x02\x02\u03BF\u03B5\x03\x02" +
    "\x02\x02\u03BF\u03BA\x03\x02\x02\x02\u03C0\x81\x03\x02\x02\x02\u03C1\u03C4" +
    "\x07`\x02\x02\u03C2\u03C3\x07\x18\x02\x02\u03C3\u03C5\x07+\x02\x02\u03C4" +
    "\u03C2\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03D1\x03\x02" +
    "\x02\x02\u03C6\u03C9\x07u\x02\x02\u03C7\u03C8\x07\x18\x02\x02\u03C8\u03CA" +
    "\x07+\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02" +
    "\u03CA\u03D1\x03\x02\x02\x02\u03CB\u03CE\x07\x85\x02\x02\u03CC\u03CD\x07" +
    "\x18\x02\x02\u03CD\u03CF\x07+\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE" +
    "\u03CF\x03\x02\x02\x02\u03CF\u03D1\x03\x02\x02\x02\u03D0\u03C1\x03\x02" +
    "\x02\x02\u03D0\u03C6\x03\x02\x02\x02\u03D0\u03CB\x03\x02\x02\x02\u03D1" +
    "\x83\x03\x02\x02\x02\u03D2\u03D3\x07\x10\x02\x02\u03D3\u03D6\x05\xB6\\" +
    "\x02\u03D4\u03D6\x07G\x02\x02\u03D5\u03D2";
interviewParser._serializedATNSegment2 = "\x03\x02\x02\x02\u03D5\u03D4\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02" +
    "\u03D7\u03DB\x07\x18\x02\x02\u03D8\u03DA\x07\x04\x02\x02\u03D9\u03D8\x03" +
    "\x02\x02\x02\u03DA\u03DD\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02\u03DB" +
    "\u03DC\x03\x02\x02\x02\u03DC\u03E0\x03\x02\x02\x02\u03DD\u03DB\x03\x02" +
    "\x02\x02\u03DE\u03E1\x05\xB6\\\x02\u03DF\u03E1\x071\x02\x02\u03E0\u03DE" +
    "\x03\x02\x02\x02\u03E0\u03DF\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02" +
    "\u03E2\u03E0\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E4\x03" +
    "\x02\x02\x02\u03E4\u03F2\x07\x17\x02\x02\u03E5\u03E6\t\x10\x02\x02\u03E6" +
    "\u03E7\x07\x18\x02\x02\u03E7\u03E8\x07/\x02\x02\u03E8\u03F2\x07\x17\x02" +
    "\x02\u03E9\u03ED\t\x11\x02\x02\u03EA\u03EC\v\x02\x02\x02\u03EB\u03EA\x03" +
    "\x02\x02\x02\u03EC\u03EF\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03ED" +
    "\u03EB\x03\x02\x02\x02\u03EE\u03F0\x03\x02\x02\x02\u03EF\u03ED\x03\x02" +
    "\x02\x02\u03F0\u03F2\x07\x17\x02\x02\u03F1\u03D5\x03\x02\x02\x02\u03F1" +
    "\u03E5\x03\x02\x02\x02\u03F1\u03E9\x03\x02\x02\x02\u03F2\x85\x03\x02\x02" +
    "\x02\u03F3\u03F4\x07\x9A\x02\x02\u03F4\u03F5\x07\x1B\x02\x02\u03F5\u03F6" +
    "\x07/\x02\x02\u03F6\x87\x03\x02\x02\x02\u03F7\u03F8\x07\x9D\x02\x02\u03F8" +
    "\x89\x03\x02\x02\x02\u03F9\u03FA\x07\x15\x02\x02\u03FA\u0402\x07\x17\x02" +
    "\x02\u03FB\u03FD\x07\x04\x02\x02\u03FC\u03FB\x03\x02\x02\x02\u03FD\u0400" +
    "\x03\x02\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02" +
    "\u03FF\u0401\x03\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0401\u0403\x05" +
    "\x8CG\x02\u0402\u03FE\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403" +
    "\u0418\x03\x02\x02\x02\u0404\u0405\x07\x15\x02\x02\u0405\u040A\x05\xB6" +
    "\\\x02\u0406\u0409\x07\x18\x02\x02\u0407\u0409\x05\xB6\\\x02\u0408\u0406" +
    "\x03\x02\x02\x02\u0408\u0407\x03\x02\x02\x02\u0409\u040C\x03\x02\x02\x02" +
    "\u040A\u0408\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B\u040D\x03" +
    "\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040D\u0415\x07\x17\x02\x02\u040E" +
    "\u0410\x07\x04\x02\x02\u040F\u040E\x03\x02\x02\x02\u0410\u0413\x03\x02" +
    "\x02\x02\u0411\u040F\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02\u0412" +
    "\u0414\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0414\u0416\x05\x8C" +
    "G\x02\u0415\u0411\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416\u0418" +
    "\x03\x02\x02\x02\u0417\u03F9\x03\x02\x02\x02\u0417\u0404\x03\x02\x02\x02" +
    "\u0418\x8B\x03\x02\x02\x02\u0419\u041A\x07\x15\x02\x02\u041A\u041F\x05" +
    "\xB6\\\x02\u041B\u041E\x07\x18\x02\x02\u041C\u041E\x05\xB6\\\x02\u041D" +
    "\u041B\x03\x02\x02\x02\u041D\u041C\x03\x02\x02\x02\u041E\u0421\x03\x02" +
    "\x02\x02\u041F\u041D\x03\x02\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420" +
    "\u0422\x03\x02\x02\x02\u0421\u041F\x03\x02\x02\x02\u0422\u0423\x07\x17" +
    "\x02\x02\u0423\x8D\x03\x02\x02\x02\u0424\u0426\x07\n\x02\x02\u0425\u0427" +
    "\x05\xB6\\\x02\u0426\u0425\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02" +
    "\u0427\u0428\x03\x02\x02\x02\u0428\u042F\x07\x17\x02\x02\u0429\u042B\x07" +
    "\v\x02\x02\u042A\u042C\x05\xB6\\\x02\u042B\u042A\x03\x02\x02\x02\u042B" +
    "\u042C\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042F\x07\x17" +
    "\x02\x02\u042E\u0424\x03\x02\x02\x02\u042E\u0429\x03\x02\x02\x02\u042F" +
    "\x8F\x03\x02\x02\x02\u0430\u0438\x07@\x02\x02\u0431\u0438\x07>\x02\x02" +
    "\u0432\u0434\x07?\x02\x02\u0433\u0435\x074\x02\x02\u0434\u0433\x03\x02" +
    "\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436" +
    "\u0438\x07\x02\x02\x03\u0437\u0430\x03\x02\x02\x02\u0437\u0431\x03\x02" +
    "\x02\x02\u0437\u0432\x03\x02\x02\x02\u0438\x91\x03\x02\x02\x02\u0439\u043B" +
    "\x07k\x02\x02\u043A\u043C\x05\xB6\\\x02\u043B\u043A\x03\x02\x02\x02\u043B" +
    "\u043C\x03\x02\x02\x02\u043C\u0452\x03\x02\x02\x02\u043D\u0447\x05\xB6" +
    "\\\x02\u043E\u0442\x071\x02\x02\u043F\u0441\x07\x04\x02\x02\u0440\u043F" +
    "\x03\x02\x02\x02\u0441\u0444\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02" +
    "\u0442\u0443\x03\x02\x02\x02\u0443\u0446\x03\x02\x02\x02\u0444\u0442\x03" +
    "\x02\x02\x02\u0445\u043E\x03\x02\x02\x02\u0446\u0449\x03\x02\x02\x02\u0447" +
    "\u0445\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448\u044D\x03\x02" +
    "\x02\x02\u0449\u0447\x03\x02\x02\x02\u044A\u044C\x071\x02\x02\u044B\u044A" +
    "\x03\x02\x02\x02\u044C\u044F\x03\x02\x02\x02\u044D\u044B\x03\x02\x02\x02" +
    "\u044D\u044E\x03\x02\x02\x02\u044E\u0451\x03\x02\x02\x02\u044F\u044D\x03" +
    "\x02\x02\x02\u0450\u043D\x03\x02\x02\x02\u0451\u0454\x03\x02\x02\x02\u0452" +
    "\u0450\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0455\x03\x02" +
    "\x02\x02\u0454\u0452\x03\x02\x02\x02\u0455\u0461\x07\x17\x02\x02\u0456" +
    "\u045C\x07k\x02\x02\u0457\u045B\x05\xB6\\\x02\u0458\u045B\x071\x02\x02" +
    "\u0459\u045B\x07\x04\x02\x02\u045A\u0457\x03\x02\x02\x02\u045A\u0458\x03" +
    "\x02\x02\x02\u045A\u0459\x03\x02\x02\x02\u045B\u045E\x03\x02\x02\x02\u045C" +
    "\u045A\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D\u045F\x03\x02" +
    "\x02\x02\u045E\u045C\x03\x02\x02\x02\u045F\u0461\x07\x02\x02\x03\u0460" +
    "\u0439\x03\x02\x02\x02\u0460\u0456\x03\x02\x02\x02\u0461\x93\x03\x02\x02" +
    "\x02\u0462\u0467\x078\x02\x02\u0463\u0468\x05\xB6\\\x02\u0464\u0468\x07" +
    "\x18\x02\x02\u0465\u0468\x07\x9D\x02\x02\u0466\u0468\x071\x02\x02\u0467" +
    "\u0463\x03\x02\x02\x02\u0467\u0464\x03\x02\x02\x02\u0467\u0465\x03\x02" +
    "\x02\x02\u0467\u0466\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469" +
    "\u0467\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\u046B\x03\x02" +
    "\x02\x02\u046B\u0479\x07\x17\x02\x02\u046C\u0474\x078\x02\x02\u046D\u0473" +
    "\x05\xB6\\\x02\u046E\u0473\x07\x18\x02\x02\u046F\u0473\x07\x9D\x02\x02" +
    "\u0470\u0473\x071\x02\x02\u0471\u0473\x07\x04\x02\x02\u0472\u046D\x03" +
    "\x02\x02\x02\u0472\u046E\x03\x02\x02\x02\u0472\u046F\x03\x02\x02\x02\u0472" +
    "\u0470\x03\x02\x02\x02\u0472\u0471\x03\x02\x02\x02\u0473\u0476\x03\x02" +
    "\x02\x02\u0474\u0472\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475" +
    "\u0477\x03\x02\x02\x02\u0476\u0474\x03\x02\x02\x02\u0477\u0479\x07\x02" +
    "\x02\x03\u0478\u0462\x03\x02\x02\x02\u0478\u046C\x03\x02\x02\x02\u0479" +
    "\x95\x03\x02\x02\x02\u047A\u047B\x077\x02\x02\u047B\u047C\x05\xB6\\\x02" +
    "\u047C\u047D\x07\x17\x02\x02\u047D\x97\x03\x02\x02\x02\u047E\u0482\x07" +
    "R\x02\x02\u047F\u0483\x05\xB6\\\x02\u0480\u0483\x07\x18\x02\x02\u0481" +
    "\u0483\x071\x02\x02\u0482\u047F\x03\x02\x02\x02\u0482\u0480\x03\x02\x02" +
    "\x02\u0482\u0481\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484\u0482" +
    "\x03\x02\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0486\x03\x02\x02\x02" +
    "\u0486\u0488\x07\x17\x02\x02\u0487\u0489\x05\x9AN\x02\u0488\u0487\x03" +
    "\x02\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\x99\x03\x02\x02\x02\u048A" +
    "\u048E\x07R\x02\x02\u048B\u048F\x05\xB6\\\x02\u048C\u048F\x07\x18\x02" +
    "\x02\u048D\u048F\x071\x02\x02\u048E\u048B\x03\x02\x02\x02\u048E\u048C" +
    "\x03\x02\x02\x02\u048E\u048D\x03\x02\x02\x02\u048F\u0490\x03\x02\x02\x02" +
    "\u0490\u048E\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0492\x03" +
    "\x02\x02\x02\u0492\u0493\x07\x17\x02\x02\u0493\x9B\x03\x02\x02\x02\u0494" +
    "\u0498\x07\x0E\x02\x02\u0495\u0497\x071\x02\x02\u0496\u0495\x03\x02\x02" +
    "\x02\u0497\u049A\x03\x02\x02\x02\u0498\u0496\x03\x02\x02\x02\u0498\u0499" +
    "\x03\x02\x02\x02\u0499\u049C\x03\x02\x02\x02\u049A\u0498\x03\x02\x02\x02" +
    "\u049B\u049D\x05\xB6\\\x02\u049C\u049B\x03\x02\x02\x02\u049C\u049D\x03" +
    "\x02\x02\x02\u049D\u04AD\x03\x02\x02\x02\u049E\u04A2\x071\x02\x02\u049F" +
    "\u04A1\x07\x04\x02\x02\u04A0\u049F\x03\x02\x02\x02\u04A1\u04A4\x03\x02" +
    "\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3" +
    "\u04A6\x03\x02\x02\x02\u04A4\u04A2\x03\x02\x02\x02\u04A5\u049E\x03\x02" +
    "\x02\x02\u04A6\u04A9\x03\x02\x02\x02\u04A7\u04A5\x03\x02\x02\x02\u04A7" +
    "\u04A8\x03\x02\x02\x02\u04A8\u04AA\x03\x02\x02\x02\u04A9\u04A7\x03\x02" +
    "\x02\x02\u04AA\u04AC\x05\xB6\\\x02\u04AB\u04A7\x03\x02\x02\x02\u04AC\u04AF" +
    "\x03\x02\x02\x02\u04AD\u04AB\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02" +
    "\u04AE\u04B3\x03\x02\x02\x02\u04AF\u04AD\x03\x02\x02\x02\u04B0\u04B2\x07" +
    "1\x02\x02\u04B1\u04B0\x03\x02\x02\x02\u04B2\u04B5\x03\x02\x02\x02\u04B3" +
    "\u04B1\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B6\x03\x02" +
    "\x02\x02\u04B5\u04B3\x03\x02\x02\x02\u04B6\u04C3\x07\x17\x02\x02\u04B7" +
    "\u04BB\x07\x0E\x02\x02\u04B8\u04BA\x071\x02\x02\u04B9\u04B8\x03\x02\x02" +
    "\x02\u04BA\u04BD\x03\x02\x02\x02\u04BB\u04B9\x03\x02\x02\x02\u04BB\u04BC" +
    "\x03\x02\x02\x02\u04BC\u04BF\x03\x02\x02\x02\u04BD\u04BB\x03\x02\x02\x02" +
    "\u04BE\u04C0\x05\xB6\\\x02\u04BF\u04BE\x03\x02\x02\x02\u04BF\u04C0\x03" +
    "\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C3\x07\x02\x02\x03\u04C2" +
    "\u0494\x03\x02\x02\x02\u04C2\u04B7\x03\x02\x02\x02\u04C3\x9D\x03\x02\x02" +
    "\x02\u04C4\u04C6\x07\x0F\x02\x02\u04C5\u04C7\n\x12\x02\x02\u04C6\u04C5" +
    "\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04C6\x03\x02\x02\x02" +
    "\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CB\x07" +
    "\x17\x02\x02\u04CB\x9F\x03\x02\x02\x02\u04CC\u04CF\x07\x16\x02\x02\u04CD" +
    "\u04D0\x05\xB6\\\x02\u04CE\u04D0\x071\x02\x02\u04CF\u04CD\x03\x02\x02" +
    "\x02\u04CF\u04CE\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02\u04D1\u04CF" +
    "\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2\u04D3\x03\x02\x02\x02" +
    "\u04D3\u04D9\x07\x17\x02\x02\u04D4\u04D5\x07\x16\x02\x02\u04D5\u04D6\x05" +
    "\xB6\\\x02\u04D6\u04D7\x07\x02\x02\x03\u04D7\u04D9\x03\x02\x02\x02\u04D8" +
    "\u04CC\x03\x02\x02\x02\u04D8\u04D4\x03\x02\x02\x02\u04D9\xA1\x03\x02\x02" +
    "\x02\u04DA\u04DB\x07D\x02\x02\u04DB\u04DC\x05\xB6\\\x02\u04DC\u04DD\x07" +
    "\x17\x02\x02\u04DD\u04E3\x03\x02\x02\x02\u04DE\u04DF\x07E\x02\x02\u04DF" +
    "\u04E0\x05\xB6\\\x02\u04E0\u04E1\x07\x17\x02\x02\u04E1\u04E3\x03\x02\x02" +
    "\x02\u04E2\u04DA\x03\x02\x02\x02\u04E2\u04DE\x03\x02\x02\x02\u04E3\xA3" +
    "\x03\x02\x02\x02\u04E4\u04E5\x07;\x02\x02\u04E5\u04E6\x07\x18\x02\x02" +
    "\u04E6\u04E7\x07/\x02\x02\u04E7\u04EE\x07\x17\x02\x02\u04E8\u04E9\x07" +
    ";\x02\x02\u04E9\u04EA\x07\x18\x02\x02\u04EA\u04EB\x05\xB6\\\x02\u04EB" +
    "\u04EC\x07\x17\x02\x02\u04EC\u04EE\x03\x02\x02\x02\u04ED\u04E4\x03\x02" +
    "\x02\x02\u04ED\u04E8\x03\x02\x02\x02\u04EE\xA5\x03\x02\x02\x02\u04EF\u04F0" +
    "\x07P\x02\x02\u04F0\u04F1\x05\xB6\\\x02\u04F1\u04F2\x07\x17\x02\x02\u04F2" +
    "\xA7\x03\x02\x02\x02\u04F3\u04F4\x07Q\x02\x02\u04F4\u04F5\x05\xB6\\\x02" +
    "\u04F5\u04F6\x07\x17\x02\x02\u04F6\xA9\x03\x02\x02\x02\u04F7\u0501\x05" +
    "\xACW\x02\u04F8\u04FA\x071\x02\x02\u04F9\u04F8\x03\x02\x02\x02\u04FA\u04FD" +
    "\x03\x02\x02\x02\u04FB\u04F9\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02" +
    "\u04FC\u04FE\x03\x02\x02\x02\u04FD\u04FB\x03\x02\x02\x02\u04FE\u0500\x05" +
    "\xACW\x02\u04FF\u04FB\x03\x02\x02\x02\u0500\u0503\x03\x02\x02\x02\u0501" +
    "\u04FF\x03\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\xAB\x03\x02\x02" +
    "\x02\u0503\u0501\x03\x02\x02\x02\u0504\u0505\x07\x10\x02\x02\u0505\u0506" +
    "\x05\xB6\\\x02\u0506\u0507\t\x13\x02\x02\u0507\u050D\x05\xB6\\\x02\u0508" +
    "\u050C\x071\x02\x02\u0509\u050C\x07\x18\x02\x02\u050A\u050C\x05\xB6\\" +
    "\x02\u050B\u0508\x03\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050B\u050A" +
    "\x03\x02\x02\x02\u050C\u050F\x03\x02\x02\x02\u050D\u050B\x03\x02\x02\x02" +
    "\u050D\u050E\x03\x02\x02\x02\u050E\u0510\x03\x02\x02\x02\u050F\u050D\x03" +
    "\x02\x02\x02\u0510\u0511\x07\x17\x02\x02\u0511\u051C\x03\x02\x02\x02\u0512" +
    "\u0516\x07N\x02\x02\u0513\u0515\v\x02\x02\x02\u0514\u0513\x03\x02\x02" +
    "\x02\u0515\u0518\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0516\u0514" +
    "\x03\x02\x02\x02\u0517\u0519\x03\x02\x02\x02\u0518\u0516\x03\x02\x02\x02" +
    "\u0519\u051C\x07\x17\x02\x02\u051A\u051C\x07A\x02\x02\u051B\u0504\x03" +
    "\x02\x02\x02\u051B\u0512\x03\x02\x02\x02\u051B\u051A\x03\x02\x02\x02\u051C" +
    "\xAD\x03\x02\x02\x02\u051D\u0521\x07\x07\x02\x02\u051E\u0522\x05\xB6\\" +
    "\x02\u051F\u0522\x07\x18\x02\x02\u0520\u0522\x071\x02\x02\u0521\u051E" +
    "\x03\x02\x02\x02\u0521\u051F\x03\x02\x02\x02\u0521\u0520\x03\x02\x02\x02" +
    "\u0522\u0523\x03\x02\x02\x02\u0523\u0521\x03\x02\x02\x02\u0523\u0524\x03" +
    "\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0531\x07\x17\x02\x02\u0526" +
    "\u052C\x07\x07\x02\x02\u0527\u052B\x05\xB6\\\x02\u0528\u052B\x07\x18\x02" +
    "\x02\u0529\u052B\x071\x02\x02\u052A\u0527\x03\x02\x02\x02\u052A\u0528" +
    "\x03\x02\x02\x02\u052A\u0529\x03\x02\x02\x02\u052B\u052E\x03\x02\x02\x02" +
    "\u052C\u052A\x03\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D\u052F\x03" +
    "\x02\x02\x02\u052E\u052C\x03\x02\x02\x02\u052F\u0531\x07\x02\x02\x03\u0530" +
    "\u051D\x03\x02\x02\x02\u0530\u0526\x03\x02\x02\x02\u0531\xAF\x03\x02\x02" +
    "\x02\u0532\u0534\x07\f\x02\x02\u0533\u0535\x05\xB6\\\x02\u0534\u0533\x03" +
    "\x02\x02\x02\u0534\u0535\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536" +
    "\u0537\x07\x17\x02\x02\u0537\xB1\x03\x02\x02\x02\u0538\u0539\x07\x1A\x02" +
    "\x02\u0539\xB3\x03\x02\x02\x02\u053A\u053C\x05\xB6\\\x02\u053B\u053D\x07" +
    "1\x02\x02\u053C\u053B\x03\x02\x02\x02\u053C\u053D\x03\x02\x02\x02\u053D" +
    "\u053F\x03\x02\x02\x02\u053E\u053A\x03\x02\x02\x02\u053F\u0540\x03\x02" +
    "\x02\x02\u0540\u053E\x03\x02\x02\x02\u0540\u0541\x03\x02\x02\x02\u0541" +
    "\xB5\x03\x02\x02\x02\u0542\u0549\x070\x02\x02\u0543\u0545\x07\x04\x02" +
    "\x02\u0544\u0543\x03\x02\x02\x02\u0545\u0546\x03\x02\x02\x02\u0546\u0544" +
    "\x03\x02\x02\x02\u0546\u0547\x03\x02\x02\x02\u0547\u0548\x03\x02\x02\x02" +
    "\u0548\u054A\x07/\x02\x02\u0549\u0544\x03\x02\x02\x02\u0549\u054A\x03" +
    "\x02\x02\x02\u054A\u0572\x03\x02\x02\x02\u054B\u0552\x05\xBC_\x02\u054C" +
    "\u054E\x07\x04\x02\x02\u054D\u054C\x03\x02\x02\x02\u054E\u054F\x03\x02" +
    "\x02\x02\u054F\u054D\x03\x02\x02\x02\u054F\u0550\x03\x02\x02\x02\u0550" +
    "\u0551\x03\x02\x02\x02\u0551\u0553\x07/\x02\x02\u0552\u054D\x03\x02\x02" +
    "\x02\u0552\u0553\x03\x02\x02\x02\u0553\u0572\x03\x02\x02\x02\u0554\u0572" +
    "\x07/\x02\x02\u0555\u0556\x07\x13\x02\x02\u0556\u0557\x05\xB6\\\x02\u0557" +
    "\u0558\x07\x17\x02\x02\u0558\u0572\x03\x02\x02\x02\u0559\u0572\x071\x02" +
    "\x02\u055A\u055C\x07\x04\x02\x02\u055B\u055A\x03\x02\x02\x02\u055C\u055F" +
    "\x03\x02\x02\x02\u055D\u055B\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02" +
    "\u055E\u0560\x03\x02\x02\x02\u055F\u055D\x03\x02\x02\x02\u0560\u0564\x07" +
    "\x18\x02\x02\u0561\u0563\x07\x04\x02\x02\u0562\u0561\x03\x02\x02\x02\u0563" +
    "\u0566\x03\x02\x02\x02\u0564\u0562\x03\x02\x02\x02\u0564\u0565\x03\x02" +
    "\x02\x02\u0565\u0572\x03\x02\x02\x02\u0566\u0564\x03\x02\x02\x02\u0567" +
    "\u056B\x07\x19\x02\x02\u0568\u056A\x07\x04\x02\x02\u0569\u0568\x03\x02" +
    "\x02\x02\u056A\u056D\x03\x02\x02\x02\u056B\u0569\x03\x02\x02\x02\u056B" +
    "\u056C\x03\x02\x02\x02\u056C\u0572\x03\x02\x02\x02\u056D\u056B\x03\x02" +
    "\x02\x02\u056E\u0572\x07\x1A\x02\x02\u056F\u0572\x07!\x02\x02\u0570\u0572" +
    "\x07\x9D\x02\x02\u0571\u0542\x03\x02\x02\x02\u0571\u054B\x03\x02\x02\x02" +
    "\u0571\u0554\x03\x02\x02\x02\u0571\u0555\x03\x02\x02\x02\u0571\u0559\x03" +
    "\x02\x02\x02\u0571\u055D\x03\x02\x02\x02\u0571\u0567\x03\x02\x02\x02\u0571" +
    "\u056E\x03\x02\x02\x02\u0571\u056F\x03\x02\x02\x02\u0571\u0570\x03\x02" +
    "\x02\x02\u0572\xB7\x03\x02\x02\x02\u0573\u0574\x07\x17\x02\x02\u0574\xB9" +
    "\x03\x02\x02\x02\u0575\u0576\t\x14\x02\x02\u0576\xBB\x03\x02\x02\x02\u0577" +
    "\u0584\x070\x02\x02\u0578\u0584\x074\x02\x02\u0579\u0584\x072\x02\x02" +
    "\u057A\u0584\x073\x02\x02\u057B\u0584\x075\x02\x02\u057C\u0584\x07\x19" +
    "\x02\x02\u057D\u057E\x07\x1D\x02\x02\u057E\u0584\n\x15\x02\x02\u057F\u0580" +
    "\x07\x1E\x02\x02\u0580\u0584\n\x16\x02\x02\u0581\u0584\x07 \x02\x02\u0582" +
    "\u0584\x07\x1F\x02\x02\u0583\u0577\x03\x02\x02\x02\u0583\u0578\x03\x02" +
    "\x02\x02\u0583\u0579\x03\x02\x02\x02\u0583\u057A\x03\x02\x02\x02\u0583" +
    "\u057B\x03\x02\x02\x02\u0583\u057C\x03\x02\x02\x02\u0583\u057D\x03\x02" +
    "\x02\x02\u0583\u057F\x03\x02\x02\x02\u0583\u0581\x03\x02\x02\x02\u0583" +
    "\u0582\x03\x02\x02\x02\u0584\u0585\x03\x02\x02\x02\u0585\u0583\x03\x02" +
    "\x02\x02\u0585\u0586\x03\x02\x02\x02\u0586\xBD\x03\x02\x02\x02\u0587\u0588" +
    "\x07\x04\x02\x02\u0588\xBF\x03\x02\x02\x02\xCD\xC4\xCA\xCF\xD4\xDD\xE5" +
    "\xEC\xF1\xFA\u0101\u0106\u010D\u0114\u0117\u011B\u0121\u0125\u0127\u012F" +
    "\u0136\u013B\u0144\u014B\u0150\u0158\u015D\u0164\u0168\u016A\u016E\u0179" +
    "\u017E\u0182\u0188\u0196\u0198\u019D\u01A2\u01AB\u01AD\u01B0\u01BD\u01BF" +
    "\u01C3\u01C8\u01D1\u01D3\u01D6\u01D8\u01DD\u01E1\u01E5\u01EA\u01EF\u01F2" +
    "\u01F6\u01FA\u0208\u0210\u0213\u0218\u021E\u0220\u0225\u0229\u022F\u0237" +
    "\u023F\u0245\u0249\u024B\u0265\u026A\u0271\u0277\u0284\u0289\u028E\u0290" +
    "\u0298\u029A\u02A1\u02A6\u02B2\u02B8\u02BA\u02C8\u02D0\u02D5\u02D9\u02DD" +
    "\u02E0\u02E5\u02FC\u0301\u0306\u0308\u0312\u031C\u0326\u032C\u0333\u0339" +
    "\u0341\u034B\u0356\u035C\u0361\u0368\u0371\u0375\u0379\u037C\u038B\u038F" +
    "\u039E\u03A2\u03A8\u03B3\u03B8\u03BD\u03BF\u03C4\u03C9\u03CE\u03D0\u03D5" +
    "\u03DB\u03E0\u03E2\u03ED\u03F1\u03FE\u0402\u0408\u040A\u0411\u0415\u0417" +
    "\u041D\u041F\u0426\u042B\u042E\u0434\u0437\u043B\u0442\u0447\u044D\u0452" +
    "\u045A\u045C\u0460\u0467\u0469\u0472\u0474\u0478\u0482\u0484\u0488\u048E" +
    "\u0490\u0498\u049C\u04A2\u04A7\u04AD\u04B3\u04BB\u04BF\u04C2\u04C8\u04CF" +
    "\u04D1\u04D8\u04E2\u04ED\u04FB\u0501\u050B\u050D\u0516\u051B\u0521\u0523" +
    "\u052A\u052C\u0530\u0534\u053C\u0540\u0546\u0549\u054F\u0552\u055D\u0564" +
    "\u056B\u0571\u0583\u0585";
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
    mcrsep_end() {
        return this.tryGetRuleContext(0, Mcrsep_endContext);
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
    mcrsep_end() {
        return this.tryGetRuleContext(0, Mcrsep_endContext);
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
    item(i) {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }
        else {
            return this.getRuleContext(i, ItemContext);
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
    sample_soln_prop(i) {
        if (i === undefined) {
            return this.getRuleContexts(Sample_soln_propContext);
        }
        else {
            return this.getRuleContext(i, Sample_soln_propContext);
        }
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
class Sample_soln_propContext extends ParserRuleContext_1.ParserRuleContext {
    AtSampleSolution() { return this.getToken(interviewParser.AtSampleSolution, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_sample_soln_prop; }
    // @Override
    enterRule(listener) {
        if (listener.enterSample_soln_prop) {
            listener.enterSample_soln_prop(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSample_soln_prop) {
            listener.exitSample_soln_prop(this);
        }
    }
}
exports.Sample_soln_propContext = Sample_soln_propContext;
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
    AmpDocumentDownload() { return this.tryGetToken(interviewParser.AmpDocumentDownload, 0); }
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
    Placeholder() { return this.tryGetToken(interviewParser.Placeholder, 0); }
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
    AmpDocumentDownload() { return this.tryGetToken(interviewParser.AmpDocumentDownload, 0); }
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
    OpAmpDocumentDownload() { return this.tryGetToken(interviewParser.OpAmpDocumentDownload, 0); }
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
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
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
    AtSampleSolution() { return this.tryGetToken(interviewParser.AtSampleSolution, 0); }
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
    ELIPSIS(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.ELIPSIS);
        }
        else {
            return this.getToken(interviewParser.ELIPSIS, i);
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
