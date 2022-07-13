"use strict";
// Generated from ./Interview/interviewParser.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.Bracket_escapedContext = exports.S_and_wContext = exports.LinesContext = exports.DcolonContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.Single_gapContext = exports.GapContext = exports.Footer_textContext = exports.Footer_resourceContext = exports.Interview_footerContext = exports.BitElemContext = exports.Ml_exampleContext = exports.Value_titleContext = exports.Key_titleContext = exports.HeadingContext = exports.AnswerContext = exports.QueryContext = exports.Mark_textContext = exports.PartansContext = exports.ShortansContext = exports.LongansContext = exports.Interview_answerContext = exports.Interview_textContext = exports.Interview_sometextContext = exports.Interview_qanda__Context = exports.Interview_qandaContext = exports.McrmiscContext = exports.Mcrsep_endContext = exports.McrsepContext = exports.Interview_instruction_groupedContext = exports.InterviewContext = exports.InterviewsContext = exports.Bitmark_Context = exports.BitmarkContext = exports.interviewParser = void 0;
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
let interviewParser = /** @class */ (() => {
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
                                        if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (interviewParser.AMP - 27)) | (1 << (interviewParser.Greater - 27)) | (1 << (interviewParser.Less - 27)) | (1 << (interviewParser.RightAngle - 27)) | (1 << (interviewParser.RightArrow - 27)) | (1 << (interviewParser.STRING - 27)) | (1 << (interviewParser.SENTENCE - 27)))) !== 0)) {
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
                                        while (_la === interviewParser.OPDOLL || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (interviewParser.AtShortanswer - 55)) | (1 << (interviewParser.AtLonganswer - 55)) | (1 << (interviewParser.AtExampleWithStr - 55)) | (1 << (interviewParser.AtExamplecol - 55)) | (1 << (interviewParser.AtExamplecl - 55)) | (1 << (interviewParser.AtPartialAnswerS - 55)) | (1 << (interviewParser.AtPartialAnswer - 55)))) !== 0)) {
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
                                        if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (interviewParser.AMP - 27)) | (1 << (interviewParser.Greater - 27)) | (1 << (interviewParser.Less - 27)) | (1 << (interviewParser.RightAngle - 27)) | (1 << (interviewParser.RightArrow - 27)) | (1 << (interviewParser.STRING - 27)) | (1 << (interviewParser.SENTENCE - 27)))) !== 0)) {
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
                                        while (_la === interviewParser.OPDOLL || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (interviewParser.AtShortanswer - 55)) | (1 << (interviewParser.AtLonganswer - 55)) | (1 << (interviewParser.AtExampleWithStr - 55)) | (1 << (interviewParser.AtExamplecol - 55)) | (1 << (interviewParser.AtExamplecl - 55)) | (1 << (interviewParser.AtPartialAnswerS - 55)) | (1 << (interviewParser.AtPartialAnswer - 55)))) !== 0)) {
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
                    case interviewParser.SENTENCE:
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
                    } while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (interviewParser.AMP - 27)) | (1 << (interviewParser.Greater - 27)) | (1 << (interviewParser.Less - 27)) | (1 << (interviewParser.RightAngle - 27)) | (1 << (interviewParser.RightArrow - 27)) | (1 << (interviewParser.STRING - 27)) | (1 << (interviewParser.SENTENCE - 27)))) !== 0));
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
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
                    if (_la === interviewParser.S || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (interviewParser.AtExampleWithStr - 57)) | (1 << (interviewParser.AtExamplecol - 57)) | (1 << (interviewParser.AtExamplecl - 57)))) !== 0)) {
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
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
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
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
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
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
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
                this.state = 556;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 535;
                            this.item();
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 536;
                            this.atdef();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 537;
                            this.reference();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 538;
                            this.title();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 539;
                            this.instruction();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 540;
                            this.hint();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 541;
                            this.gap();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 542;
                            this.s_and_w();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 543;
                            this.example();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 544;
                            this.bool_label();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 545;
                            this.imagebit();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 546;
                            this.audiobit();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 547;
                            this.videobit();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 548;
                            this.articlebit();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 549;
                            this.documentbit();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 550;
                            this.appbit();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 551;
                            this.websitebit();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 552;
                            this.stillimagefilmbit();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 553;
                            this.angleref();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 554;
                            this.anchor();
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 555;
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
                    this.state = 561;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 558;
                                    this.match(interviewParser.NL);
                                }
                            }
                        }
                        this.state = 563;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                    }
                    this.state = 564;
                    this.footer_resource();
                    this.state = 568;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 565;
                                    this.footer_resource();
                                }
                            }
                        }
                        this.state = 570;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                    }
                    this.state = 574;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 571;
                                    this.match(interviewParser.NL);
                                }
                            }
                        }
                        this.state = 576;
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
                    this.state = 587;
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
                        case interviewParser.SENTENCE:
                        case interviewParser.URL:
                        case interviewParser.LIST_LINE:
                            {
                                this.state = 577;
                                this.footer_text();
                            }
                            break;
                        case interviewParser.OpAmpImage:
                        case interviewParser.OpAmpImageZoom:
                        case interviewParser.OpAmpImageWAudio:
                        case interviewParser.OpAmpImageLink:
                            {
                                this.state = 578;
                                this.imagebit();
                            }
                            break;
                        case interviewParser.OpAmpAudio:
                        case interviewParser.OpAmpAudioLink:
                            {
                                this.state = 579;
                                this.audiobit();
                            }
                            break;
                        case interviewParser.OpAmpVideo:
                        case interviewParser.OpAmpVideoLink:
                            {
                                this.state = 580;
                                this.videobit();
                            }
                            break;
                        case interviewParser.ArticleText:
                        case interviewParser.OpAmpArticle:
                        case interviewParser.OpAmpArticleLink:
                            {
                                this.state = 581;
                                this.articlebit();
                            }
                            break;
                        case interviewParser.OpAmpDocument:
                        case interviewParser.OpAmpDocumentLink:
                            {
                                this.state = 582;
                                this.documentbit();
                            }
                            break;
                        case interviewParser.OpAmpApp:
                        case interviewParser.OpAmpAppLink:
                            {
                                this.state = 583;
                                this.appbit();
                            }
                            break;
                        case interviewParser.OpAmpWebsite:
                        case interviewParser.OpAmpWebsiteLink:
                            {
                                this.state = 584;
                                this.websitebit();
                            }
                            break;
                        case interviewParser.AtReference:
                            {
                                this.state = 585;
                                this.reference();
                            }
                            break;
                        case interviewParser.OPQ:
                            {
                                this.state = 586;
                                this.hint();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 592;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 589;
                                    this.match(interviewParser.NL);
                                }
                            }
                        }
                        this.state = 594;
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
                    this.state = 597;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 597;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case interviewParser.LIST_LINE:
                                            {
                                                this.state = 595;
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
                                        case interviewParser.SENTENCE:
                                        case interviewParser.URL:
                                            {
                                                this.state = 596;
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
                        this.state = 599;
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
                    this.state = 601;
                    this.single_gap();
                    this.state = 609;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 607;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case interviewParser.OPU:
                                        {
                                            this.state = 602;
                                            this.single_gap();
                                        }
                                        break;
                                    case interviewParser.OPB:
                                        {
                                            this.state = 603;
                                            this.instruction();
                                        }
                                        break;
                                    case interviewParser.OPQ:
                                        {
                                            this.state = 604;
                                            this.hint();
                                        }
                                        break;
                                    case interviewParser.OPC:
                                        {
                                            this.state = 605;
                                            this.item();
                                        }
                                        break;
                                    case interviewParser.AtExampleWithStr:
                                    case interviewParser.AtExamplecol:
                                    case interviewParser.AtExamplecl:
                                        {
                                            this.state = 606;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 611;
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
                    this.state = 612;
                    this.match(interviewParser.OPU);
                    this.state = 616;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                        case 1:
                            {
                                this.state = 613;
                                this.match(interviewParser.NUMERIC);
                            }
                            break;
                        case 2:
                            {
                                this.state = 614;
                                this.match(interviewParser.STRING);
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 621;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                        {
                            {
                                this.state = 618;
                                this.s_and_w();
                            }
                        }
                        this.state = 623;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 624;
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
                    this.state = 626;
                    this.match(interviewParser.AtPoints);
                    this.state = 627;
                    this.match(interviewParser.NUMERIC);
                    this.state = 628;
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
                    this.state = 633;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 630;
                                    this.resource_format();
                                }
                            }
                        }
                        this.state = 635;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                    }
                    this.state = 640;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (interviewParser.AmpAudio - 77)) | (1 << (interviewParser.AmpImage - 77)) | (1 << (interviewParser.AmpImageZoom - 77)) | (1 << (interviewParser.AmpImageWAudio - 77)) | (1 << (interviewParser.AmpVideo - 77)) | (1 << (interviewParser.AmpArticle - 77)) | (1 << (interviewParser.AmpDocument - 77)) | (1 << (interviewParser.AmpApp - 77)) | (1 << (interviewParser.AmpWebsite - 77)) | (1 << (interviewParser.AmpStillImageFilm - 77)) | (1 << (interviewParser.AmpPdf - 77)) | (1 << (interviewParser.AmpAudioLink - 77)) | (1 << (interviewParser.AmpImageLink - 77)) | (1 << (interviewParser.AmpVideoLink - 77)) | (1 << (interviewParser.AmpArticleLink - 77)) | (1 << (interviewParser.AmpDocumentLink - 77)) | (1 << (interviewParser.AmpAppLink - 77)) | (1 << (interviewParser.AmpWebsiteLink - 77)) | (1 << (interviewParser.AmpStillImageFilmLink - 77)))) !== 0) || _la === interviewParser.ColonText) {
                        {
                            this.state = 638;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.ColonText:
                                    {
                                        this.state = 636;
                                        this.match(interviewParser.ColonText);
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
                                    {
                                        this.state = 637;
                                        this.resource_format_extra();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 642;
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
                    this.state = 643;
                    _la = this._input.LA(1);
                    if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (interviewParser.AmpArticle - 82)) | (1 << (interviewParser.AmpDocument - 82)) | (1 << (interviewParser.AmpWebsite - 82)) | (1 << (interviewParser.AmpStillImageFilm - 82)) | (1 << (interviewParser.AmpAudioLink - 82)) | (1 << (interviewParser.AmpImageLink - 82)) | (1 << (interviewParser.AmpVideoLink - 82)) | (1 << (interviewParser.AmpArticleLink - 82)) | (1 << (interviewParser.AmpDocumentLink - 82)) | (1 << (interviewParser.AmpAppLink - 82)) | (1 << (interviewParser.AmpWebsiteLink - 82)) | (1 << (interviewParser.AmpStillImageFilmLink - 82)))) !== 0) || _la === interviewParser.BitmarkMinus || _la === interviewParser.BitmarkPlus)) {
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
                this.state = 654;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AmpImage:
                    case interviewParser.AmpImageZoom:
                    case interviewParser.AmpImageWAudio:
                    case interviewParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 645;
                            this.image_format();
                        }
                        break;
                    case interviewParser.AmpAudio:
                    case interviewParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 646;
                            this.audio_format();
                        }
                        break;
                    case interviewParser.AmpVideo:
                    case interviewParser.AmpVideoLink:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 647;
                            this.video_format();
                        }
                        break;
                    case interviewParser.AmpArticle:
                    case interviewParser.AmpArticleLink:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 648;
                            this.article_format();
                        }
                        break;
                    case interviewParser.AmpDocument:
                    case interviewParser.AmpDocumentLink:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 649;
                            this.document_format();
                        }
                        break;
                    case interviewParser.AmpApp:
                    case interviewParser.AmpAppLink:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 650;
                            this.app_format();
                        }
                        break;
                    case interviewParser.AmpWebsite:
                    case interviewParser.AmpWebsiteLink:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 651;
                            this.website_format();
                        }
                        break;
                    case interviewParser.AmpStillImageFilm:
                    case interviewParser.AmpStillImageFilmLink:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 652;
                            this.stillimagefilm_format();
                        }
                        break;
                    case interviewParser.AmpPdf:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 653;
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
        image_format() {
            let _localctx = new Image_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 66, interviewParser.RULE_image_format);
            let _la;
            try {
                this.state = 670;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 656;
                            this.match(interviewParser.AmpImage);
                            this.state = 659;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.Image_type:
                                    {
                                        {
                                            this.state = 657;
                                            this.match(interviewParser.Image_type);
                                        }
                                    }
                                    break;
                                case interviewParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 658;
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
                                case interviewParser.ColonText:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case interviewParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 661;
                            this.match(interviewParser.AmpImageLink);
                            this.state = 663;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.Image_type) {
                                {
                                    this.state = 662;
                                    this.match(interviewParser.Image_type);
                                }
                            }
                        }
                        break;
                    case interviewParser.AmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 665;
                            this.match(interviewParser.AmpImageZoom);
                            this.state = 667;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.Image_type) {
                                {
                                    this.state = 666;
                                    this.match(interviewParser.Image_type);
                                }
                            }
                        }
                        break;
                    case interviewParser.AmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 669;
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
            this.enterRule(_localctx, 68, interviewParser.RULE_video_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 672;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.AmpVideo || _la === interviewParser.AmpVideoLink)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 675;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.COLON) {
                        {
                            this.state = 673;
                            this.match(interviewParser.COLON);
                            this.state = 674;
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
            this.enterRule(_localctx, 70, interviewParser.RULE_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 677;
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
            this.enterRule(_localctx, 72, interviewParser.RULE_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 679;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.AmpDocument || _la === interviewParser.AmpDocumentLink)) {
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
            this.enterRule(_localctx, 74, interviewParser.RULE_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 681;
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
            this.enterRule(_localctx, 76, interviewParser.RULE_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 683;
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
            this.enterRule(_localctx, 78, interviewParser.RULE_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 685;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.AmpStillImageFilm || _la === interviewParser.AmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 80, interviewParser.RULE_op_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 687;
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
            this.enterRule(_localctx, 82, interviewParser.RULE_op_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 689;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.OpAmpDocument || _la === interviewParser.OpAmpDocumentLink)) {
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
            this.enterRule(_localctx, 84, interviewParser.RULE_op_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 691;
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
            this.enterRule(_localctx, 86, interviewParser.RULE_op_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 693;
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
            this.enterRule(_localctx, 88, interviewParser.RULE_op_video_format);
            try {
                this.state = 705;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OpAmpVideo:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 695;
                            this.match(interviewParser.OpAmpVideo);
                            this.state = 698;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 696;
                                        this.match(interviewParser.COLON);
                                        this.state = 697;
                                        this.match(interviewParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case interviewParser.OpAmpVideoLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 700;
                            this.match(interviewParser.OpAmpVideoLink);
                            this.state = 703;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 701;
                                        this.match(interviewParser.COLON);
                                        this.state = 702;
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
            this.enterRule(_localctx, 90, interviewParser.RULE_op_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 707;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.OpAmpStillImageFilm || _la === interviewParser.OpAmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 92, interviewParser.RULE_articlebit);
            try {
                this.state = 715;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OpAmpArticle:
                    case interviewParser.OpAmpArticleLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 709;
                            this.op_article_format();
                            this.state = 710;
                            this.match(interviewParser.COLON);
                            this.state = 711;
                            this.url();
                            this.state = 712;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.ArticleText:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 714;
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
            this.enterRule(_localctx, 94, interviewParser.RULE_documentbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 717;
                    this.op_document_format();
                    this.state = 718;
                    this.match(interviewParser.COLON);
                    this.state = 719;
                    this.url();
                    this.state = 720;
                    this.match(interviewParser.CL);
                    this.state = 725;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.OPATALT) {
                        {
                            this.state = 721;
                            this.match(interviewParser.OPATALT);
                            this.state = 722;
                            this.words();
                            this.state = 723;
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
            this.enterRule(_localctx, 96, interviewParser.RULE_websitebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 727;
                    this.op_website_format();
                    this.state = 728;
                    this.match(interviewParser.COLON);
                    this.state = 729;
                    this.url();
                    this.state = 730;
                    this.match(interviewParser.CL);
                    this.state = 735;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.OPATALT) {
                        {
                            this.state = 731;
                            this.match(interviewParser.OPATALT);
                            this.state = 732;
                            this.words();
                            this.state = 733;
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
            this.enterRule(_localctx, 98, interviewParser.RULE_appbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 737;
                    this.op_app_format();
                    this.state = 738;
                    this.match(interviewParser.COLON);
                    this.state = 741;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case interviewParser.URL:
                            {
                                this.state = 739;
                                this.url();
                            }
                            break;
                        case interviewParser.TEL:
                            {
                                this.state = 740;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 743;
                    this.match(interviewParser.CL);
                    this.state = 748;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.OPATALT) {
                        {
                            this.state = 744;
                            this.match(interviewParser.OPATALT);
                            this.state = 745;
                            this.words();
                            this.state = 746;
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
            this.enterRule(_localctx, 100, interviewParser.RULE_stillimagefilmbit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 750;
                    this.stillimg_one();
                    this.state = 754;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 751;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 756;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 102, interviewParser.RULE_stillimg_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 757;
                    this.op_stillimagefilm_format();
                    this.state = 758;
                    this.match(interviewParser.COLON);
                    this.state = 762;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === interviewParser.S) {
                        {
                            {
                                this.state = 759;
                                this.match(interviewParser.S);
                            }
                        }
                        this.state = 764;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 765;
                    this.url();
                    this.state = 766;
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
            this.enterRule(_localctx, 104, interviewParser.RULE_videobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 768;
                    this.video_one();
                    this.state = 772;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 769;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 774;
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
        video_one() {
            let _localctx = new Video_oneContext(this._ctx, this.state);
            this.enterRule(_localctx, 106, interviewParser.RULE_video_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 775;
                    this.op_video_format();
                    this.state = 776;
                    this.match(interviewParser.COLON);
                    this.state = 777;
                    this.url();
                    this.state = 778;
                    this.match(interviewParser.CL);
                    this.state = 783;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
                        case 1:
                            {
                                this.state = 779;
                                this.match(interviewParser.OPATALT);
                                this.state = 780;
                                this.words();
                                this.state = 781;
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
            this.enterRule(_localctx, 108, interviewParser.RULE_imagebit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 785;
                    this.image_one();
                    this.state = 789;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 786;
                                    this.image_chained();
                                }
                            }
                        }
                        this.state = 791;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                    }
                    this.state = 794;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                        case 1:
                            {
                                this.state = 792;
                                this.match(interviewParser.NL);
                                this.state = 793;
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
            this.enterRule(_localctx, 110, interviewParser.RULE_image_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 796;
                    this.op_image_format();
                    this.state = 797;
                    this.match(interviewParser.COLON);
                    this.state = 801;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === interviewParser.S) {
                        {
                            {
                                this.state = 798;
                                this.match(interviewParser.S);
                            }
                        }
                        this.state = 803;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 804;
                    this.url();
                    this.state = 805;
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
            this.enterRule(_localctx, 112, interviewParser.RULE_op_image_format);
            let _la;
            try {
                this.state = 821;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OpAmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 807;
                            this.match(interviewParser.OpAmpImage);
                            this.state = 810;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.Image_type:
                                    {
                                        {
                                            this.state = 808;
                                            this.match(interviewParser.Image_type);
                                        }
                                    }
                                    break;
                                case interviewParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 809;
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
                            this.state = 812;
                            this.match(interviewParser.OpAmpImageLink);
                            this.state = 814;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.Image_type) {
                                {
                                    this.state = 813;
                                    this.match(interviewParser.Image_type);
                                }
                            }
                        }
                        break;
                    case interviewParser.OpAmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 816;
                            this.match(interviewParser.OpAmpImageZoom);
                            this.state = 818;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.Image_type) {
                                {
                                    this.state = 817;
                                    this.match(interviewParser.Image_type);
                                }
                            }
                        }
                        break;
                    case interviewParser.OpAmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 820;
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
            this.enterRule(_localctx, 114, interviewParser.RULE_image_chained);
            let _la;
            try {
                let _alt;
                this.state = 840;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 823;
                            this.match(interviewParser.AtSrc);
                            this.state = 824;
                            this.match(interviewParser.COLON);
                            this.state = 825;
                            this.url();
                            this.state = 826;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.AtWidth:
                    case interviewParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 828;
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
                            this.state = 829;
                            this.match(interviewParser.COLON);
                            this.state = 830;
                            this.match(interviewParser.NUMERIC);
                            this.state = 831;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.OPATALT:
                    case interviewParser.OpAtCaption:
                    case interviewParser.OpAtLicense:
                    case interviewParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 832;
                            _la = this._input.LA(1);
                            if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (interviewParser.OPATALT - 66)) | (1 << (interviewParser.OpAtCaption - 66)) | (1 << (interviewParser.OpAtLicense - 66)) | (1 << (interviewParser.OpAtCopyright - 66)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 836;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 833;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 838;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                            }
                            this.state = 839;
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
            this.enterRule(_localctx, 116, interviewParser.RULE_image_chained4match);
            let _la;
            try {
                let _alt;
                this.state = 859;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 842;
                            this.match(interviewParser.AtSrc);
                            this.state = 843;
                            this.match(interviewParser.COLON);
                            this.state = 844;
                            this.url();
                            this.state = 845;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.AtWidth:
                    case interviewParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 847;
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
                            this.state = 848;
                            this.match(interviewParser.COLON);
                            this.state = 849;
                            this.match(interviewParser.NUMERIC);
                            this.state = 850;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.OPATALT:
                    case interviewParser.OpAtCaption:
                    case interviewParser.OpAtLicense:
                    case interviewParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 851;
                            _la = this._input.LA(1);
                            if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (interviewParser.OPATALT - 66)) | (1 << (interviewParser.OpAtCaption - 66)) | (1 << (interviewParser.OpAtLicense - 66)) | (1 << (interviewParser.OpAtCopyright - 66)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 855;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 852;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 857;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                            }
                            this.state = 858;
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
            this.enterRule(_localctx, 118, interviewParser.RULE_audiobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 861;
                    this.audio_one();
                    this.state = 865;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 862;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 867;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 120, interviewParser.RULE_audio_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 868;
                    this.op_audio_format();
                    this.state = 869;
                    this.match(interviewParser.COLON);
                    this.state = 870;
                    this.url();
                    this.state = 871;
                    this.match(interviewParser.CL);
                    this.state = 876;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                        case 1:
                            {
                                this.state = 872;
                                this.match(interviewParser.OPATALT);
                                this.state = 873;
                                this.words();
                                this.state = 874;
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
            this.enterRule(_localctx, 122, interviewParser.RULE_audio_format);
            let _la;
            try {
                this.state = 888;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 878;
                            this.match(interviewParser.AmpAudio);
                            this.state = 881;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.COLON) {
                                {
                                    this.state = 879;
                                    this.match(interviewParser.COLON);
                                    this.state = 880;
                                    this.match(interviewParser.Audio_type);
                                }
                            }
                        }
                        break;
                    case interviewParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 883;
                            this.match(interviewParser.AmpAudioLink);
                            this.state = 886;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.COLON) {
                                {
                                    this.state = 884;
                                    this.match(interviewParser.COLON);
                                    this.state = 885;
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
            this.enterRule(_localctx, 124, interviewParser.RULE_op_audio_format);
            try {
                this.state = 900;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OpAmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 890;
                            this.match(interviewParser.OpAmpAudio);
                            this.state = 893;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 891;
                                        this.match(interviewParser.COLON);
                                        this.state = 892;
                                        this.match(interviewParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case interviewParser.OpAmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 895;
                            this.match(interviewParser.OpAmpAudioLink);
                            this.state = 898;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 896;
                                        this.match(interviewParser.COLON);
                                        this.state = 897;
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
            this.enterRule(_localctx, 126, interviewParser.RULE_resource_chained);
            let _la;
            try {
                let _alt;
                this.state = 933;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OPA:
                    case interviewParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 905;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.OPA:
                                    {
                                        this.state = 902;
                                        this.match(interviewParser.OPA);
                                        this.state = 903;
                                        this.s_and_w();
                                    }
                                    break;
                                case interviewParser.AtSrc:
                                    {
                                        this.state = 904;
                                        this.match(interviewParser.AtSrc);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 907;
                            this.match(interviewParser.COLON);
                            this.state = 911;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 908;
                                            this.match(interviewParser.S);
                                        }
                                    }
                                }
                                this.state = 913;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                            }
                            this.state = 916;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 916;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 914;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 915;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 918;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                            this.state = 920;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.AtWidth:
                    case interviewParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 921;
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
                            this.state = 922;
                            this.match(interviewParser.COLON);
                            this.state = 923;
                            this.match(interviewParser.NUMERIC);
                            this.state = 924;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.OPATALT:
                    case interviewParser.OpAtCaption:
                    case interviewParser.OpAtLicense:
                    case interviewParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 925;
                            _la = this._input.LA(1);
                            if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (interviewParser.OPATALT - 66)) | (1 << (interviewParser.OpAtCaption - 66)) | (1 << (interviewParser.OpAtLicense - 66)) | (1 << (interviewParser.OpAtCopyright - 66)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 929;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 926;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 931;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
                            }
                            this.state = 932;
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
            this.enterRule(_localctx, 128, interviewParser.RULE_telephone);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 935;
                    this.match(interviewParser.TEL);
                    this.state = 936;
                    this.match(interviewParser.PLUS);
                    this.state = 937;
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
            this.enterRule(_localctx, 130, interviewParser.RULE_url);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 939;
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
            this.enterRule(_localctx, 132, interviewParser.RULE_item);
            let _la;
            try {
                this.state = 971;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 941;
                            this.match(interviewParser.OPC);
                            this.state = 942;
                            this.match(interviewParser.CL);
                            this.state = 950;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 946;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === interviewParser.S) {
                                            {
                                                {
                                                    this.state = 943;
                                                    this.match(interviewParser.S);
                                                }
                                            }
                                            this.state = 948;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 949;
                                        this.lead();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 952;
                            this.match(interviewParser.OPC);
                            this.state = 953;
                            this.s_and_w();
                            this.state = 958;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (interviewParser.COLON - 26)) | (1 << (interviewParser.AMP - 26)) | (1 << (interviewParser.Greater - 26)) | (1 << (interviewParser.Less - 26)) | (1 << (interviewParser.RightAngle - 26)) | (1 << (interviewParser.RightArrow - 26)) | (1 << (interviewParser.STRING - 26)) | (1 << (interviewParser.SENTENCE - 26)))) !== 0)) {
                                {
                                    this.state = 956;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case interviewParser.COLON:
                                            {
                                                this.state = 954;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case interviewParser.AMP:
                                        case interviewParser.Greater:
                                        case interviewParser.Less:
                                        case interviewParser.RightAngle:
                                        case interviewParser.RightArrow:
                                        case interviewParser.STRING:
                                        case interviewParser.SENTENCE:
                                            {
                                                this.state = 955;
                                                this.words();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 960;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 961;
                            this.match(interviewParser.CL);
                            this.state = 969;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
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
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 134, interviewParser.RULE_lead);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 973;
                    this.match(interviewParser.OPC);
                    this.state = 974;
                    this.s_and_w();
                    this.state = 979;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (interviewParser.COLON - 26)) | (1 << (interviewParser.AMP - 26)) | (1 << (interviewParser.Greater - 26)) | (1 << (interviewParser.Less - 26)) | (1 << (interviewParser.RightAngle - 26)) | (1 << (interviewParser.RightArrow - 26)) | (1 << (interviewParser.STRING - 26)) | (1 << (interviewParser.SENTENCE - 26)))) !== 0)) {
                        {
                            this.state = 977;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.COLON:
                                    {
                                        this.state = 975;
                                        this.match(interviewParser.COLON);
                                    }
                                    break;
                                case interviewParser.AMP:
                                case interviewParser.Greater:
                                case interviewParser.Less:
                                case interviewParser.RightAngle:
                                case interviewParser.RightArrow:
                                case interviewParser.STRING:
                                case interviewParser.SENTENCE:
                                    {
                                        this.state = 976;
                                        this.words();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 981;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 982;
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
            this.enterRule(_localctx, 136, interviewParser.RULE_angleref);
            let _la;
            try {
                this.state = 994;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 984;
                            this.match(interviewParser.OPRANGLES);
                            this.state = 986;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 985;
                                    this.s_and_w();
                                }
                            }
                            this.state = 988;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 989;
                            this.match(interviewParser.OPRANGLEL);
                            this.state = 991;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 990;
                                    this.s_and_w();
                                }
                            }
                            this.state = 993;
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
            this.enterRule(_localctx, 138, interviewParser.RULE_example);
            let _la;
            try {
                this.state = 1003;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 996;
                            this.match(interviewParser.AtExamplecl);
                        }
                        break;
                    case interviewParser.AtExampleWithStr:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 997;
                            this.match(interviewParser.AtExampleWithStr);
                        }
                        break;
                    case interviewParser.AtExamplecol:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 998;
                            this.match(interviewParser.AtExamplecol);
                            this.state = 1000;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.SENTENCE) {
                                {
                                    this.state = 999;
                                    this.match(interviewParser.SENTENCE);
                                }
                            }
                            this.state = 1002;
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
            this.enterRule(_localctx, 140, interviewParser.RULE_bracketed_text);
            let _la;
            try {
                let _alt;
                this.state = 1044;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1005;
                            this.match(interviewParser.BracEnclose);
                            this.state = 1007;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1006;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 1030;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    {
                                        this.state = 1009;
                                        this.s_and_w();
                                        this.state = 1019;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1010;
                                                        this.match(interviewParser.NL);
                                                        this.state = 1014;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 1011;
                                                                        this.match(interviewParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 1016;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 1021;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                                        }
                                        this.state = 1025;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1022;
                                                        this.match(interviewParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1027;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                                        }
                                    }
                                }
                                this.state = 1032;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1033;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1034;
                            this.match(interviewParser.BracEnclose);
                            this.state = 1040;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 1038;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1035;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1036;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1037;
                                                this.match(interviewParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1042;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1043;
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
            this.enterRule(_localctx, 142, interviewParser.RULE_reference);
            let _la;
            try {
                this.state = 1068;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1046;
                            this.match(interviewParser.AtReference);
                            this.state = 1051;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1051;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1047;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1048;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1049;
                                                this.match(interviewParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 1050;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1053;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                            this.state = 1055;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1056;
                            this.match(interviewParser.AtReference);
                            this.state = 1064;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 1062;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1057;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1058;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1059;
                                                this.match(interviewParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 1060;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 1061;
                                                this.match(interviewParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1066;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1067;
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
            this.enterRule(_localctx, 144, interviewParser.RULE_progress);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1070;
                    this.match(interviewParser.AtProgress);
                    this.state = 1071;
                    this.s_and_w();
                    this.state = 1072;
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
            this.enterRule(_localctx, 146, interviewParser.RULE_dateprop);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1074;
                    this.match(interviewParser.AtDate);
                    this.state = 1078;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 1078;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1075;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1076;
                                        this.match(interviewParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1077;
                                        this.match(interviewParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 1080;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                    this.state = 1082;
                    this.match(interviewParser.CL);
                    this.state = 1084;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.AtDate) {
                        {
                            this.state = 1083;
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
            this.enterRule(_localctx, 148, interviewParser.RULE_dateprop_chained);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1086;
                    this.match(interviewParser.AtDate);
                    this.state = 1090;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 1090;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1087;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1088;
                                        this.match(interviewParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1089;
                                        this.match(interviewParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 1092;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                    this.state = 1094;
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
            this.enterRule(_localctx, 150, interviewParser.RULE_instruction);
            let _la;
            try {
                let _alt;
                this.state = 1130;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1096;
                            this.match(interviewParser.OPB);
                            this.state = 1098;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1097;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 1121;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    {
                                        this.state = 1100;
                                        this.s_and_w();
                                        this.state = 1110;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1101;
                                                        this.match(interviewParser.NL);
                                                        this.state = 1105;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 1102;
                                                                        this.match(interviewParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 1107;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 1112;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
                                        }
                                        this.state = 1116;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1113;
                                                        this.match(interviewParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1118;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                                        }
                                    }
                                }
                                this.state = 1123;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1124;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1125;
                            this.match(interviewParser.OPB);
                            this.state = 1127;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 1126;
                                    this.s_and_w();
                                }
                            }
                            this.state = 1129;
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
            this.enterRule(_localctx, 152, interviewParser.RULE_hint);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1132;
                    this.match(interviewParser.OPQ);
                    this.state = 1134;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1133;
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
                        this.state = 1136;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.OPDOT) | (1 << interviewParser.S) | (1 << interviewParser.BitInterview) | (1 << interviewParser.BitInterviewinstgrp) | (1 << interviewParser.COMMENT) | (1 << interviewParser.Image_type) | (1 << interviewParser.Audio_type) | (1 << interviewParser.Video_type) | (1 << interviewParser.OPDOLL) | (1 << interviewParser.OPBUL) | (1 << interviewParser.OPESC) | (1 << interviewParser.OPRANGLES) | (1 << interviewParser.OPRANGLEL) | (1 << interviewParser.OPDANGLE) | (1 << interviewParser.OPU) | (1 << interviewParser.OPB) | (1 << interviewParser.OPQ) | (1 << interviewParser.OPA) | (1 << interviewParser.OPP) | (1 << interviewParser.OPM) | (1 << interviewParser.OPS) | (1 << interviewParser.OPR) | (1 << interviewParser.OPC) | (1 << interviewParser.OPHASH) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.PLUS) | (1 << interviewParser.DotAt) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.OR - 32)) | (1 << (interviewParser.HSPL - 32)) | (1 << (interviewParser.HSPL2 - 32)) | (1 << (interviewParser.SSPL - 32)) | (1 << (interviewParser.SSPL2 - 32)) | (1 << (interviewParser.BULLET - 32)) | (1 << (interviewParser.DCANY - 32)) | (1 << (interviewParser.ArticleText - 32)) | (1 << (interviewParser.NOTCL - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.OPAT - 32)) | (1 << (interviewParser.AtProgress - 32)) | (1 << (interviewParser.AtReference - 32)) | (1 << (interviewParser.AtWidth - 32)) | (1 << (interviewParser.AtHeight - 32)) | (1 << (interviewParser.AtProgressPoints - 32)) | (1 << (interviewParser.AtShortanswer - 32)) | (1 << (interviewParser.AtLonganswer - 32)) | (1 << (interviewParser.AtExampleWithStr - 32)) | (1 << (interviewParser.AtExamplecol - 32)) | (1 << (interviewParser.AtExamplecl - 32)) | (1 << (interviewParser.AtPartialAnswerS - 32)) | (1 << (interviewParser.AtPartialAnswer - 32)) | (1 << (interviewParser.AtLabeltrue - 32)) | (1 << (interviewParser.AtLabelfalse - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (interviewParser.AtPoints - 64)) | (1 << (interviewParser.AtSrc - 64)) | (1 << (interviewParser.OPATALT - 64)) | (1 << (interviewParser.OPAMARK - 64)) | (1 << (interviewParser.ShowInIndex - 64)) | (1 << (interviewParser.OpAtCaption - 64)) | (1 << (interviewParser.OpAtLicense - 64)) | (1 << (interviewParser.OpAtCopyright - 64)) | (1 << (interviewParser.OpAtIsTracked - 64)) | (1 << (interviewParser.OpAtIsInfoOnly - 64)) | (1 << (interviewParser.AtDate - 64)) | (1 << (interviewParser.Http - 64)) | (1 << (interviewParser.Https - 64)) | (1 << (interviewParser.AmpAudio - 64)) | (1 << (interviewParser.AmpImage - 64)) | (1 << (interviewParser.AmpImageZoom - 64)) | (1 << (interviewParser.AmpImageWAudio - 64)) | (1 << (interviewParser.AmpVideo - 64)) | (1 << (interviewParser.AmpArticle - 64)) | (1 << (interviewParser.AmpDocument - 64)) | (1 << (interviewParser.AmpApp - 64)) | (1 << (interviewParser.AmpWebsite - 64)) | (1 << (interviewParser.AmpStillImageFilm - 64)) | (1 << (interviewParser.AmpPdf - 64)) | (1 << (interviewParser.OpAmpAudio - 64)) | (1 << (interviewParser.OpAmpImage - 64)) | (1 << (interviewParser.OpAmpImageZoom - 64)) | (1 << (interviewParser.OpAmpImageWAudio - 64)) | (1 << (interviewParser.OpAmpVideo - 64)) | (1 << (interviewParser.OpAmpArticle - 64)) | (1 << (interviewParser.OpAmpArticleAtt - 64)) | (1 << (interviewParser.OpAmpDocument - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (interviewParser.OpAmpApp - 96)) | (1 << (interviewParser.OpAmpWebsite - 96)) | (1 << (interviewParser.OpAmpStillImageFilm - 96)) | (1 << (interviewParser.BracEnclose - 96)) | (1 << (interviewParser.AmpAudioLink - 96)) | (1 << (interviewParser.AmpImageLink - 96)) | (1 << (interviewParser.AmpVideoLink - 96)) | (1 << (interviewParser.AmpArticleLink - 96)) | (1 << (interviewParser.AmpDocumentLink - 96)) | (1 << (interviewParser.AmpAppLink - 96)) | (1 << (interviewParser.AmpWebsiteLink - 96)) | (1 << (interviewParser.AmpStillImageFilmLink - 96)) | (1 << (interviewParser.OpAmpAudioLink - 96)) | (1 << (interviewParser.OpAmpImageLink - 96)) | (1 << (interviewParser.OpAmpVideoLink - 96)) | (1 << (interviewParser.OpAmpArticleLink - 96)) | (1 << (interviewParser.OpAmpDocumentLink - 96)) | (1 << (interviewParser.OpAmpAppLink - 96)) | (1 << (interviewParser.OpAmpWebsiteLink - 96)) | (1 << (interviewParser.OpAmpStillImageFilmLink - 96)) | (1 << (interviewParser.BitmarkMinus - 96)) | (1 << (interviewParser.BitmarkPlus - 96)) | (1 << (interviewParser.ColonText - 96)) | (1 << (interviewParser.BASIC - 96)) | (1 << (interviewParser.JPG - 96)) | (1 << (interviewParser.PNG - 96)) | (1 << (interviewParser.GIF - 96)) | (1 << (interviewParser.SVG - 96)) | (1 << (interviewParser.MP2 - 96)) | (1 << (interviewParser.MP3 - 96)) | (1 << (interviewParser.MP4 - 96)) | (1 << (interviewParser.FLV - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (interviewParser.WMV - 128)) | (1 << (interviewParser.MPEG - 128)) | (1 << (interviewParser.MPG - 128)) | (1 << (interviewParser.TEL - 128)) | (1 << (interviewParser.DotArticleAtt - 128)) | (1 << (interviewParser.STAR - 128)) | (1 << (interviewParser.URL - 128)) | (1 << (interviewParser.LIST_LINE - 128)))) !== 0));
                    this.state = 1138;
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
            this.enterRule(_localctx, 154, interviewParser.RULE_title);
            let _la;
            try {
                this.state = 1152;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 163, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1140;
                            this.match(interviewParser.OPHASH);
                            this.state = 1143;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1143;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1141;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1142;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1145;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                            this.state = 1147;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1148;
                            this.match(interviewParser.OPHASH);
                            this.state = 1149;
                            this.s_and_w();
                            this.state = 1150;
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
            this.enterRule(_localctx, 156, interviewParser.RULE_bool_label);
            try {
                this.state = 1162;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1154;
                            this.match(interviewParser.AtLabeltrue);
                            this.state = 1155;
                            this.s_and_w();
                            this.state = 1156;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1158;
                            this.match(interviewParser.AtLabelfalse);
                            this.state = 1159;
                            this.s_and_w();
                            this.state = 1160;
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
            this.enterRule(_localctx, 158, interviewParser.RULE_progress_points);
            try {
                this.state = 1173;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1164;
                            this.match(interviewParser.AtProgressPoints);
                            this.state = 1165;
                            this.match(interviewParser.COLON);
                            this.state = 1166;
                            this.match(interviewParser.NUMERIC);
                            this.state = 1167;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1168;
                            this.match(interviewParser.AtProgressPoints);
                            this.state = 1169;
                            this.match(interviewParser.COLON);
                            this.state = 1170;
                            this.s_and_w();
                            this.state = 1171;
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
            this.enterRule(_localctx, 160, interviewParser.RULE_istracked);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1175;
                    this.match(interviewParser.OpAtIsTracked);
                    this.state = 1176;
                    this.s_and_w();
                    this.state = 1177;
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
            this.enterRule(_localctx, 162, interviewParser.RULE_isinfoonly);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1179;
                    this.match(interviewParser.OpAtIsInfoOnly);
                    this.state = 1180;
                    this.s_and_w();
                    this.state = 1181;
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
            this.enterRule(_localctx, 164, interviewParser.RULE_atdef);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1183;
                    this.atdef_();
                    this.state = 1193;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1187;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.NL) {
                                        {
                                            {
                                                this.state = 1184;
                                                this.match(interviewParser.NL);
                                            }
                                        }
                                        this.state = 1189;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1190;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 1195;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 166, interviewParser.RULE_atdef_);
            let _la;
            try {
                let _alt;
                this.state = 1218;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OPA:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1196;
                            this.match(interviewParser.OPA);
                            this.state = 1197;
                            this.s_and_w();
                            this.state = 1198;
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
                            this.state = 1199;
                            this.s_and_w();
                            this.state = 1205;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 1203;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1200;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1201;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1202;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                                this.state = 1207;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1208;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1210;
                            this.match(interviewParser.OpAtCopyright);
                            this.state = 1214;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1211;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1216;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                            }
                            this.state = 1217;
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
            this.enterRule(_localctx, 168, interviewParser.RULE_dollarans);
            let _la;
            try {
                this.state = 1239;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1220;
                            this.match(interviewParser.OPDOLL);
                            this.state = 1224;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1224;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1221;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1222;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1223;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1226;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                            this.state = 1228;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1229;
                            this.match(interviewParser.OPDOLL);
                            this.state = 1235;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 1233;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 174, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1230;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1231;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1232;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1237;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1238;
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
            this.enterRule(_localctx, 170, interviewParser.RULE_anchor);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1241;
                    this.match(interviewParser.OPDANGLE);
                    this.state = 1243;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                        {
                            this.state = 1242;
                            this.s_and_w();
                        }
                    }
                    this.state = 1245;
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
            this.enterRule(_localctx, 172, interviewParser.RULE_dcolon);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1247;
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
            this.enterRule(_localctx, 174, interviewParser.RULE_lines);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1253;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1249;
                                        this.s_and_w();
                                        this.state = 1251;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1250;
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
                        this.state = 1255;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
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
            this.enterRule(_localctx, 176, interviewParser.RULE_s_and_w);
            let _la;
            try {
                let _alt;
                this.state = 1304;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 187, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1257;
                            this.match(interviewParser.STRING);
                            this.state = 1264;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1259;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1258;
                                                    this.match(interviewParser.S);
                                                }
                                            }
                                            this.state = 1261;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === interviewParser.S);
                                        this.state = 1263;
                                        this.match(interviewParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1266;
                            this.words();
                            this.state = 1273;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1268;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1267;
                                                    this.match(interviewParser.S);
                                                }
                                            }
                                            this.state = 1270;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === interviewParser.S);
                                        this.state = 1272;
                                        this.match(interviewParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1275;
                            this.match(interviewParser.NUMERIC);
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1276;
                            this.match(interviewParser.OPS);
                            this.state = 1277;
                            this.s_and_w();
                            this.state = 1278;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 1280;
                            this.match(interviewParser.NL);
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 1284;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === interviewParser.S) {
                                {
                                    {
                                        this.state = 1281;
                                        this.match(interviewParser.S);
                                    }
                                }
                                this.state = 1286;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1287;
                            this.match(interviewParser.COLON);
                            this.state = 1291;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1288;
                                            this.match(interviewParser.S);
                                        }
                                    }
                                }
                                this.state = 1293;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1294;
                            this.match(interviewParser.AMP);
                            this.state = 1298;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1295;
                                            this.match(interviewParser.S);
                                        }
                                    }
                                }
                                this.state = 1300;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                            }
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 1301;
                            this.match(interviewParser.DBLCOLON);
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 1302;
                            this.match(interviewParser.DBLEQ);
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 1303;
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
        bracket_escaped() {
            let _localctx = new Bracket_escapedContext(this._ctx, this.state);
            this.enterRule(_localctx, 178, interviewParser.RULE_bracket_escaped);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1306;
                    this.match(interviewParser.OPESC);
                    this.state = 1307;
                    this.s_and_w();
                    this.state = 1308;
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
        clnsp() {
            let _localctx = new ClnspContext(this._ctx, this.state);
            this.enterRule(_localctx, 180, interviewParser.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1310;
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
                    this.state = 1312;
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
                    this.state = 1323;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1323;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case interviewParser.STRING:
                                            {
                                                this.state = 1314;
                                                this.match(interviewParser.STRING);
                                            }
                                            break;
                                        case interviewParser.SENTENCE:
                                            {
                                                this.state = 1315;
                                                this.match(interviewParser.SENTENCE);
                                            }
                                            break;
                                        case interviewParser.AMP:
                                            {
                                                this.state = 1316;
                                                this.match(interviewParser.AMP);
                                            }
                                            break;
                                        case interviewParser.Greater:
                                            {
                                                this.state = 1317;
                                                this.match(interviewParser.Greater);
                                                this.state = 1318;
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
                                                this.state = 1319;
                                                this.match(interviewParser.Less);
                                                this.state = 1320;
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
                                                this.state = 1321;
                                                this.match(interviewParser.RightArrow);
                                            }
                                            break;
                                        case interviewParser.RightAngle:
                                            {
                                                this.state = 1322;
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
                        this.state = 1325;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
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
                    this.state = 1327;
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
    interviewParser.OPDOT = 1;
    interviewParser.S = 2;
    interviewParser.BitInterview = 3;
    interviewParser.BitInterviewinstgrp = 4;
    interviewParser.COMMENT = 5;
    interviewParser.Image_type = 6;
    interviewParser.Audio_type = 7;
    interviewParser.Video_type = 8;
    interviewParser.OPDOLL = 9;
    interviewParser.OPBUL = 10;
    interviewParser.OPESC = 11;
    interviewParser.OPRANGLES = 12;
    interviewParser.OPRANGLEL = 13;
    interviewParser.OPDANGLE = 14;
    interviewParser.OPU = 15;
    interviewParser.OPB = 16;
    interviewParser.OPQ = 17;
    interviewParser.OPA = 18;
    interviewParser.OPP = 19;
    interviewParser.OPM = 20;
    interviewParser.OPS = 21;
    interviewParser.OPR = 22;
    interviewParser.OPC = 23;
    interviewParser.OPHASH = 24;
    interviewParser.CL = 25;
    interviewParser.COLON = 26;
    interviewParser.AMP = 27;
    interviewParser.DBLCOLON = 28;
    interviewParser.PLUS = 29;
    interviewParser.DotAt = 30;
    interviewParser.Greater = 31;
    interviewParser.Less = 32;
    interviewParser.RightAngle = 33;
    interviewParser.RightArrow = 34;
    interviewParser.DBLEQ = 35;
    interviewParser.OR = 36;
    interviewParser.HSPL = 37;
    interviewParser.HSPL2 = 38;
    interviewParser.SSPL = 39;
    interviewParser.SSPL2 = 40;
    interviewParser.BULLET = 41;
    interviewParser.DCANY = 42;
    interviewParser.ArticleText = 43;
    interviewParser.NOTCL = 44;
    interviewParser.NUMERIC = 45;
    interviewParser.STRING = 46;
    interviewParser.NL = 47;
    interviewParser.SENTENCE = 48;
    interviewParser.OPAT = 49;
    interviewParser.AtProgress = 50;
    interviewParser.AtReference = 51;
    interviewParser.AtWidth = 52;
    interviewParser.AtHeight = 53;
    interviewParser.AtProgressPoints = 54;
    interviewParser.AtShortanswer = 55;
    interviewParser.AtLonganswer = 56;
    interviewParser.AtExampleWithStr = 57;
    interviewParser.AtExamplecol = 58;
    interviewParser.AtExamplecl = 59;
    interviewParser.AtPartialAnswerS = 60;
    interviewParser.AtPartialAnswer = 61;
    interviewParser.AtLabeltrue = 62;
    interviewParser.AtLabelfalse = 63;
    interviewParser.AtPoints = 64;
    interviewParser.AtSrc = 65;
    interviewParser.OPATALT = 66;
    interviewParser.OPAMARK = 67;
    interviewParser.ShowInIndex = 68;
    interviewParser.OpAtCaption = 69;
    interviewParser.OpAtLicense = 70;
    interviewParser.OpAtCopyright = 71;
    interviewParser.OpAtIsTracked = 72;
    interviewParser.OpAtIsInfoOnly = 73;
    interviewParser.AtDate = 74;
    interviewParser.Http = 75;
    interviewParser.Https = 76;
    interviewParser.AmpAudio = 77;
    interviewParser.AmpImage = 78;
    interviewParser.AmpImageZoom = 79;
    interviewParser.AmpImageWAudio = 80;
    interviewParser.AmpVideo = 81;
    interviewParser.AmpArticle = 82;
    interviewParser.AmpDocument = 83;
    interviewParser.AmpApp = 84;
    interviewParser.AmpWebsite = 85;
    interviewParser.AmpStillImageFilm = 86;
    interviewParser.AmpPdf = 87;
    interviewParser.OpAmpAudio = 88;
    interviewParser.OpAmpImage = 89;
    interviewParser.OpAmpImageZoom = 90;
    interviewParser.OpAmpImageWAudio = 91;
    interviewParser.OpAmpVideo = 92;
    interviewParser.OpAmpArticle = 93;
    interviewParser.OpAmpArticleAtt = 94;
    interviewParser.OpAmpDocument = 95;
    interviewParser.OpAmpApp = 96;
    interviewParser.OpAmpWebsite = 97;
    interviewParser.OpAmpStillImageFilm = 98;
    interviewParser.BracEnclose = 99;
    interviewParser.AmpAudioLink = 100;
    interviewParser.AmpImageLink = 101;
    interviewParser.AmpVideoLink = 102;
    interviewParser.AmpArticleLink = 103;
    interviewParser.AmpDocumentLink = 104;
    interviewParser.AmpAppLink = 105;
    interviewParser.AmpWebsiteLink = 106;
    interviewParser.AmpStillImageFilmLink = 107;
    interviewParser.OpAmpAudioLink = 108;
    interviewParser.OpAmpImageLink = 109;
    interviewParser.OpAmpVideoLink = 110;
    interviewParser.OpAmpArticleLink = 111;
    interviewParser.OpAmpDocumentLink = 112;
    interviewParser.OpAmpAppLink = 113;
    interviewParser.OpAmpWebsiteLink = 114;
    interviewParser.OpAmpStillImageFilmLink = 115;
    interviewParser.BitmarkMinus = 116;
    interviewParser.BitmarkPlus = 117;
    interviewParser.ColonText = 118;
    interviewParser.BASIC = 119;
    interviewParser.JPG = 120;
    interviewParser.PNG = 121;
    interviewParser.GIF = 122;
    interviewParser.SVG = 123;
    interviewParser.MP2 = 124;
    interviewParser.MP3 = 125;
    interviewParser.MP4 = 126;
    interviewParser.FLV = 127;
    interviewParser.WMV = 128;
    interviewParser.MPEG = 129;
    interviewParser.MPG = 130;
    interviewParser.TEL = 131;
    interviewParser.DotArticleAtt = 132;
    interviewParser.STAR = 133;
    interviewParser.URL = 134;
    interviewParser.LIST_LINE = 135;
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
    interviewParser.RULE_image_format = 33;
    interviewParser.RULE_video_format = 34;
    interviewParser.RULE_article_format = 35;
    interviewParser.RULE_document_format = 36;
    interviewParser.RULE_app_format = 37;
    interviewParser.RULE_website_format = 38;
    interviewParser.RULE_stillimagefilm_format = 39;
    interviewParser.RULE_op_article_format = 40;
    interviewParser.RULE_op_document_format = 41;
    interviewParser.RULE_op_app_format = 42;
    interviewParser.RULE_op_website_format = 43;
    interviewParser.RULE_op_video_format = 44;
    interviewParser.RULE_op_stillimagefilm_format = 45;
    interviewParser.RULE_articlebit = 46;
    interviewParser.RULE_documentbit = 47;
    interviewParser.RULE_websitebit = 48;
    interviewParser.RULE_appbit = 49;
    interviewParser.RULE_stillimagefilmbit = 50;
    interviewParser.RULE_stillimg_one = 51;
    interviewParser.RULE_videobit = 52;
    interviewParser.RULE_video_one = 53;
    interviewParser.RULE_imagebit = 54;
    interviewParser.RULE_image_one = 55;
    interviewParser.RULE_op_image_format = 56;
    interviewParser.RULE_image_chained = 57;
    interviewParser.RULE_image_chained4match = 58;
    interviewParser.RULE_audiobit = 59;
    interviewParser.RULE_audio_one = 60;
    interviewParser.RULE_audio_format = 61;
    interviewParser.RULE_op_audio_format = 62;
    interviewParser.RULE_resource_chained = 63;
    interviewParser.RULE_telephone = 64;
    interviewParser.RULE_url = 65;
    interviewParser.RULE_item = 66;
    interviewParser.RULE_lead = 67;
    interviewParser.RULE_angleref = 68;
    interviewParser.RULE_example = 69;
    interviewParser.RULE_bracketed_text = 70;
    interviewParser.RULE_reference = 71;
    interviewParser.RULE_progress = 72;
    interviewParser.RULE_dateprop = 73;
    interviewParser.RULE_dateprop_chained = 74;
    interviewParser.RULE_instruction = 75;
    interviewParser.RULE_hint = 76;
    interviewParser.RULE_title = 77;
    interviewParser.RULE_bool_label = 78;
    interviewParser.RULE_progress_points = 79;
    interviewParser.RULE_istracked = 80;
    interviewParser.RULE_isinfoonly = 81;
    interviewParser.RULE_atdef = 82;
    interviewParser.RULE_atdef_ = 83;
    interviewParser.RULE_dollarans = 84;
    interviewParser.RULE_anchor = 85;
    interviewParser.RULE_dcolon = 86;
    interviewParser.RULE_lines = 87;
    interviewParser.RULE_s_and_w = 88;
    interviewParser.RULE_bracket_escaped = 89;
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
        "resource_format_extra", "image_format", "video_format", "article_format",
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
        "s_and_w", "bracket_escaped", "clnsp", "sspl", "words", "sp",
    ];
    interviewParser._LITERAL_NAMES = [
        undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'[^'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'[#'", "']'", "':'", "'&'", "'::'",
        "'+'", "'.@'", "'>'", "'<'", "'\u25BA'", "'\u2192'", "'=='", undefined,
        undefined, undefined, undefined, undefined, "'\u2022'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "'[@'", undefined,
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
        "':bitmark++'", "':text'", "':basic'", "':jpg'", "':png'", "':gif'", "':svg'",
        "':mp2'", "':mp3'", "':mp4'", "':flv'", "':wmv'", "':mpeg'", "':mpg'",
        "'tel:'", "'.article-attachment'", "'*'",
    ];
    interviewParser._SYMBOLIC_NAMES = [
        undefined, "OPDOT", "S", "BitInterview", "BitInterviewinstgrp", "COMMENT",
        "Image_type", "Audio_type", "Video_type", "OPDOLL", "OPBUL", "OPESC",
        "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP",
        "OPM", "OPS", "OPR", "OPC", "OPHASH", "CL", "COLON", "AMP", "DBLCOLON",
        "PLUS", "DotAt", "Greater", "Less", "RightAngle", "RightArrow", "DBLEQ",
        "OR", "HSPL", "HSPL2", "SSPL", "SSPL2", "BULLET", "DCANY", "ArticleText",
        "NOTCL", "NUMERIC", "STRING", "NL", "SENTENCE", "OPAT", "AtProgress",
        "AtReference", "AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer",
        "AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtPartialAnswerS",
        "AtPartialAnswer", "AtLabeltrue", "AtLabelfalse", "AtPoints", "AtSrc",
        "OPATALT", "OPAMARK", "ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright",
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
        "BASIC", "JPG", "PNG", "GIF", "SVG", "MP2", "MP3", "MP4", "FLV", "WMV",
        "MPEG", "MPG", "TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE",
    ];
    interviewParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(interviewParser._LITERAL_NAMES, interviewParser._SYMBOLIC_NAMES, []);
    interviewParser._serializedATNSegments = 3;
    interviewParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x89\u0534\x04" +
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
        "\x05\x19\u022F\n\x19\x03\x1A\x07\x1A\u0232\n\x1A\f\x1A\x0E\x1A\u0235\v" +
        "\x1A\x03\x1A\x03\x1A\x07\x1A\u0239\n\x1A\f\x1A\x0E\x1A\u023C\v\x1A\x03" +
        "\x1A\x07\x1A\u023F\n\x1A\f\x1A\x0E\x1A\u0242\v\x1A\x03\x1B\x03\x1B\x03" +
        "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u024E" +
        "\n\x1B\x03\x1B\x07\x1B\u0251\n\x1B\f\x1B\x0E\x1B\u0254\v\x1B\x03\x1C\x03" +
        "\x1C\x06\x1C\u0258\n\x1C\r\x1C\x0E\x1C\u0259\x03\x1D\x03\x1D\x03\x1D\x03" +
        "\x1D\x03\x1D\x03\x1D\x07\x1D\u0262\n\x1D\f\x1D\x0E\x1D\u0265\v\x1D\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u026B\n\x1E\x03\x1E\x07\x1E\u026E" +
        "\n\x1E\f\x1E\x0E\x1E\u0271\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
        "\x03\x1F\x03 \x07 \u027A\n \f \x0E \u027D\v \x03 \x03 \x07 \u0281\n \f" +
        " \x0E \u0284\v \x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
        "\"\x03\"\x05\"\u0291\n\"\x03#\x03#\x03#\x05#\u0296\n#\x03#\x03#\x05#\u029A" +
        "\n#\x03#\x03#\x05#\u029E\n#\x03#\x05#\u02A1\n#\x03$\x03$\x03$\x05$\u02A6" +
        "\n$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03" +
        "+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03.\x05.\u02BD\n.\x03.\x03.\x03" +
        ".\x05.\u02C2\n.\x05.\u02C4\n.\x03/\x03/\x030\x030\x030\x030\x030\x030" +
        "\x050\u02CE\n0\x031\x031\x031\x031\x031\x031\x031\x031\x051\u02D8\n1\x03" +
        "2\x032\x032\x032\x032\x032\x032\x032\x052\u02E2\n2\x033\x033\x033\x03" +
        "3\x053\u02E8\n3\x033\x033\x033\x033\x033\x053\u02EF\n3\x034\x034\x074" +
        "\u02F3\n4\f4\x0E4\u02F6\v4\x035\x035\x035\x075\u02FB\n5\f5\x0E5\u02FE" +
        "\v5\x035\x035\x035\x036\x036\x076\u0305\n6\f6\x0E6\u0308\v6\x037\x037" +
        "\x037\x037\x037\x037\x037\x037\x057\u0312\n7\x038\x038\x078\u0316\n8\f" +
        "8\x0E8\u0319\v8\x038\x038\x058\u031D\n8\x039\x039\x039\x079\u0322\n9\f" +
        "9\x0E9\u0325\v9\x039\x039\x039\x03:\x03:\x03:\x05:\u032D\n:\x03:\x03:" +
        "\x05:\u0331\n:\x03:\x03:\x05:\u0335\n:\x03:\x05:\u0338\n:\x03;\x03;\x03" +
        ";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x07;\u0345\n;\f;\x0E;\u0348" +
        "\v;\x03;\x05;\u034B\n;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
        "<\x03<\x07<\u0358\n<\f<\x0E<\u035B\v<\x03<\x05<\u035E\n<\x03=\x03=\x07" +
        "=\u0362\n=\f=\x0E=\u0365\v=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05" +
        ">\u036F\n>\x03?\x03?\x03?\x05?\u0374\n?\x03?\x03?\x03?\x05?\u0379\n?\x05" +
        "?\u037B\n?\x03@\x03@\x03@\x05@\u0380\n@\x03@\x03@\x03@\x05@\u0385\n@\x05" +
        "@\u0387\n@\x03A\x03A\x03A\x05A\u038C\nA\x03A\x03A\x07A\u0390\nA\fA\x0E" +
        "A\u0393\vA\x03A\x03A\x06A\u0397\nA\rA\x0EA\u0398\x03A\x03A\x03A\x03A\x03" +
        "A\x03A\x03A\x07A\u03A2\nA\fA\x0EA\u03A5\vA\x03A\x05A\u03A8\nA\x03B\x03" +
        "B\x03B\x03B\x03C\x03C\x03D\x03D\x03D\x07D\u03B3\nD\fD\x0ED\u03B6\vD\x03" +
        "D\x05D\u03B9\nD\x03D\x03D\x03D\x03D\x07D\u03BF\nD\fD\x0ED\u03C2\vD\x03" +
        "D\x03D\x07D\u03C6\nD\fD\x0ED\u03C9\vD\x03D\x05D\u03CC\nD\x05D\u03CE\n" +
        "D\x03E\x03E\x03E\x03E\x07E\u03D4\nE\fE\x0EE\u03D7\vE\x03E\x03E\x03F\x03" +
        "F\x05F\u03DD\nF\x03F\x03F\x03F\x05F\u03E2\nF\x03F\x05F\u03E5\nF\x03G\x03" +
        "G\x03G\x03G\x05G\u03EB\nG\x03G\x05G\u03EE\nG\x03H\x03H\x05H\u03F2\nH\x03" +
        "H\x03H\x03H\x07H\u03F7\nH\fH\x0EH\u03FA\vH\x07H\u03FC\nH\fH\x0EH\u03FF" +
        "\vH\x03H\x07H\u0402\nH\fH\x0EH\u0405\vH\x07H\u0407\nH\fH\x0EH\u040A\v" +
        "H\x03H\x03H\x03H\x03H\x03H\x07H\u0411\nH\fH\x0EH\u0414\vH\x03H\x05H\u0417" +
        "\nH\x03I\x03I\x03I\x03I\x03I\x06I\u041E\nI\rI\x0EI\u041F\x03I\x03I\x03" +
        "I\x03I\x03I\x03I\x03I\x07I\u0429\nI\fI\x0EI\u042C\vI\x03I\x05I\u042F\n" +
        "I\x03J\x03J\x03J\x03J\x03K\x03K\x03K\x03K\x06K\u0439\nK\rK\x0EK\u043A" +
        "\x03K\x03K\x05K\u043F\nK\x03L\x03L\x03L\x03L\x06L\u0445\nL\rL\x0EL\u0446" +
        "\x03L\x03L\x03M\x03M\x05M\u044D\nM\x03M\x03M\x03M\x07M\u0452\nM\fM\x0E" +
        "M\u0455\vM\x07M\u0457\nM\fM\x0EM\u045A\vM\x03M\x07M\u045D\nM\fM\x0EM\u0460" +
        "\vM\x07M\u0462\nM\fM\x0EM\u0465\vM\x03M\x03M\x03M\x05M\u046A\nM\x03M\x05" +
        "M\u046D\nM\x03N\x03N\x06N\u0471\nN\rN\x0EN\u0472\x03N\x03N\x03O\x03O\x03" +
        "O\x06O\u047A\nO\rO\x0EO\u047B\x03O\x03O\x03O\x03O\x03O\x05O\u0483\nO\x03" +
        "P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u048D\nP\x03Q\x03Q\x03Q\x03" +
        "Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u0498\nQ\x03R\x03R\x03R\x03R\x03S\x03" +
        "S\x03S\x03S\x03T\x03T\x07T\u04A4\nT\fT\x0ET\u04A7\vT\x03T\x07T\u04AA\n" +
        "T\fT\x0ET\u04AD\vT\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x07U\u04B6\nU\f" +
        "U\x0EU\u04B9\vU\x03U\x03U\x03U\x03U\x07U\u04BF\nU\fU\x0EU\u04C2\vU\x03" +
        "U\x05U\u04C5\nU\x03V\x03V\x03V\x03V\x06V\u04CB\nV\rV\x0EV\u04CC\x03V\x03" +
        "V\x03V\x03V\x03V\x07V\u04D4\nV\fV\x0EV\u04D7\vV\x03V\x05V\u04DA\nV\x03" +
        "W\x03W\x05W\u04DE\nW\x03W\x03W\x03X\x03X\x03Y\x03Y\x05Y\u04E6\nY\x06Y" +
        "\u04E8\nY\rY\x0EY\u04E9\x03Z\x03Z\x06Z\u04EE\nZ\rZ\x0EZ\u04EF\x03Z\x05" +
        "Z\u04F3\nZ\x03Z\x03Z\x06Z\u04F7\nZ\rZ\x0EZ\u04F8\x03Z\x05Z\u04FC\nZ\x03" +
        "Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x07Z\u0505\nZ\fZ\x0EZ\u0508\vZ\x03Z\x03" +
        "Z\x07Z\u050C\nZ\fZ\x0EZ\u050F\vZ\x03Z\x03Z\x07Z\u0513\nZ\fZ\x0EZ\u0516" +
        "\vZ\x03Z\x03Z\x03Z\x05Z\u051B\nZ\x03[\x03[\x03[\x03[\x03\\\x03\\\x03]" +
        "\x03]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x06^\u052E\n^\r^\x0E" +
        "^\u052F\x03_\x03_\x03_\x07\u01D2\u0346\u0359\u03A3\u04C0\x02\x02`\x02" +
        "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
        "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
        ",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
        "H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
        "d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
        "\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
        "\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
        "\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
        "\xB6\x02\xB8\x02\xBA\x02\xBC\x02\x02\x17\x03\x02\'(\x03\x02>?\x06\x02" +
        "TUWXfmvw\x04\x02SShh\x04\x02TTii\x04\x02UUjj\x04\x02VVkk\x04\x02WWll\x04" +
        "\x02XXmm\x04\x02__qq\x04\x02aarr\x04\x02bbss\x04\x02cctt\x04\x02dduu\x03" +
        "\x0267\x04\x02DDGI\x03\x02\x1B\x1B\x04\x02\x1C\x1C\x1E\x1E\x03\x02)*\x03" +
        "\x02!!\x03\x02\"\"\x02\u05F1\x02\xCB\x03\x02\x02\x02\x04\xD7\x03\x02\x02" +
        "\x02\x06\xDB\x03\x02\x02\x02\b\xDD\x03\x02\x02\x02\n\u0110\x03\x02\x02" +
        "\x02\f\u013E\x03\x02\x02\x02\x0E\u0140\x03\x02\x02\x02\x10\u0142\x03\x02" +
        "\x02\x02\x12\u0145\x03\x02\x02\x02\x14\u01A4\x03\x02\x02\x02\x16\u01A7" +
        "\x03\x02\x02\x02\x18\u01BE\x03\x02\x02\x02\x1A\u01C4\x03\x02\x02\x02\x1C" +
        "\u01C8\x03\x02\x02\x02\x1E\u01CA\x03\x02\x02\x02 \u01CC\x03\x02\x02\x02" +
        "\"\u01CE\x03\x02\x02\x02$\u01D8\x03\x02\x02\x02&\u01E0\x03\x02\x02\x02" +
        "(\u01F5\x03\x02\x02\x02*\u01FD\x03\x02\x02\x02,\u0205\x03\x02\x02\x02" +
        ".\u020D\x03\x02\x02\x020\u022E\x03\x02\x02\x022\u0233\x03\x02\x02\x02" +
        "4\u024D\x03\x02\x02\x026\u0257\x03\x02\x02\x028\u025B\x03\x02\x02\x02" +
        ":\u0266\x03\x02\x02\x02<\u0274\x03\x02\x02\x02>\u027B\x03\x02\x02\x02" +
        "@\u0285\x03\x02\x02\x02B\u0290\x03\x02\x02\x02D\u02A0\x03\x02\x02\x02" +
        "F\u02A2\x03\x02\x02\x02H\u02A7\x03\x02\x02\x02J\u02A9\x03\x02\x02\x02" +
        "L\u02AB\x03\x02\x02\x02N\u02AD\x03\x02\x02\x02P\u02AF\x03\x02\x02\x02" +
        "R\u02B1\x03\x02\x02\x02T\u02B3\x03\x02\x02\x02V\u02B5\x03\x02\x02\x02" +
        "X\u02B7\x03\x02\x02\x02Z\u02C3\x03\x02\x02\x02\\\u02C5\x03\x02\x02\x02" +
        "^\u02CD\x03\x02\x02\x02`\u02CF\x03\x02\x02\x02b\u02D9\x03\x02\x02\x02" +
        "d\u02E3\x03\x02\x02\x02f\u02F0\x03\x02\x02\x02h\u02F7\x03\x02\x02\x02" +
        "j\u0302\x03\x02\x02\x02l\u0309\x03\x02\x02\x02n\u0313\x03\x02\x02\x02" +
        "p\u031E\x03\x02\x02\x02r\u0337\x03\x02\x02\x02t\u034A\x03\x02\x02\x02" +
        "v\u035D\x03\x02\x02\x02x\u035F\x03\x02\x02\x02z\u0366\x03\x02\x02\x02" +
        "|\u037A\x03\x02\x02\x02~\u0386\x03\x02\x02\x02\x80\u03A7\x03\x02\x02\x02" +
        "\x82\u03A9\x03\x02\x02\x02\x84\u03AD\x03\x02\x02\x02\x86\u03CD\x03\x02" +
        "\x02\x02\x88\u03CF\x03\x02\x02\x02\x8A\u03E4\x03\x02\x02\x02\x8C\u03ED" +
        "\x03\x02\x02\x02\x8E\u0416\x03\x02\x02\x02\x90\u042E\x03\x02\x02\x02\x92" +
        "\u0430\x03\x02\x02\x02\x94\u0434\x03\x02\x02\x02\x96\u0440\x03\x02\x02" +
        "\x02\x98\u046C\x03\x02\x02\x02\x9A\u046E\x03\x02\x02\x02\x9C\u0482\x03" +
        "\x02\x02\x02\x9E\u048C\x03\x02\x02\x02\xA0\u0497\x03\x02\x02\x02\xA2\u0499" +
        "\x03\x02\x02\x02\xA4\u049D\x03\x02\x02\x02\xA6\u04A1\x03\x02\x02\x02\xA8" +
        "\u04C4\x03\x02\x02\x02\xAA\u04D9\x03\x02\x02\x02\xAC\u04DB\x03\x02\x02" +
        "\x02\xAE\u04E1\x03\x02\x02\x02\xB0\u04E7\x03\x02\x02\x02\xB2\u051A\x03" +
        "\x02\x02\x02\xB4\u051C\x03\x02\x02\x02\xB6\u0520\x03\x02\x02\x02\xB8\u0522" +
        "\x03\x02\x02\x02\xBA\u052D\x03\x02\x02\x02\xBC\u0531\x03\x02\x02\x02\xBE" +
        "\xC8\x05\x04\x03\x02\xBF\xC1\x07\x04\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1" +
        "\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3" +
        "\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC7\x071\x02\x02\xC6" +
        "\xC2\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8" +
        "\xC9\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB" +
        "\xBE\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD" +
        "\xCE\x03\x02\x02\x02\xCE\xD2\x03\x02\x02\x02\xCF\xD1\x071\x02\x02\xD0" +
        "\xCF\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2" +
        "\xD3\x03\x02\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5" +
        "\xD6\x07\x02\x02\x03\xD6\x03\x03\x02\x02\x02\xD7\xD8\x05\x06\x04\x02\xD8" +
        "\x05\x03\x02\x02\x02\xD9\xDC\x05\b\x05\x02\xDA\xDC\x05\n\x06\x02\xDB\xD9" +
        "\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\x07\x03\x02\x02\x02\xDD\xDE" +
        "\x07\x05\x02\x02\xDE\xDF\x05> \x02\xDF\xE3\x07\x1B\x02\x02\xE0\xE2\x07" +
        "1\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03" +
        "\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xEF\x03\x02\x02\x02\xE5\xE3\x03" +
        "\x02\x02\x02\xE6\xEA\x050\x19\x02\xE7\xE9\x071\x02\x02\xE8\xE7\x03\x02" +
        "\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02" +
        "\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xE6\x03\x02" +
        "\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02" +
        "\x02\x02\xF0\u0102\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF6\x05" +
        "\f\x07\x02\xF3\xF5\x071\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF8\x03\x02" +
        "\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\u0100\x03" +
        "\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFD\x05\x12\n\x02\xFA\xFC\x07" +
        "1\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03" +
        "\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD" +
        "\x03\x02\x02\x02\u0100\xF9\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02" +
        "\u0101\u0103\x03\x02\x02\x02\u0102\xF2\x03\x02\x02\x02\u0103\u0104\x03" +
        "\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105" +
        "\u0106\x03\x02\x02\x02\u0106\u010A\x05\x0E\b\x02\u0107\u0109\x071\x02" +
        "\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108" +
        "\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010E\x03\x02\x02\x02" +
        "\u010C\u010A\x03\x02\x02\x02\u010D\u010F\x052\x1A\x02\u010E\u010D\x03" +
        "\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\t\x03\x02\x02\x02\u0110" +
        "\u0111\x07\x06\x02\x02\u0111\u0112\x05> \x02\u0112\u0116\x07\x1B\x02\x02" +
        "\u0113\u0115\x071\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0118\x03" +
        "\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117" +
        "\u0122\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011D\x050\x19" +
        "\x02\u011A\u011C\x071\x02\x02\u011B\u011A\x03\x02\x02\x02\u011C\u011F" +
        "\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02" +
        "\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0119\x03" +
        "\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122" +
        "\u0123\x03\x02\x02\x02\u0123\u012F\x03\x02\x02\x02\u0124\u0122\x03\x02" +
        "\x02\x02\u0125\u0126\x05\f\x07\x02\u0126\u012A\x05\x12\n\x02\u0127\u0129" +
        "\x071\x02\x02\u0128\u0127\x03\x02\x02\x02\u0129\u012C\x03\x02\x02\x02" +
        "\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012E\x03" +
        "\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D\u0125\x03\x02\x02\x02\u012E" +
        "\u0131\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02" +
        "\x02\x02\u0130\u0132\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132" +
        "\u0136\x05\x0E\b\x02\u0133\u0135\x071\x02\x02\u0134\u0133\x03\x02\x02" +
        "\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0137" +
        "\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02" +
        "\u0139\u013B\x052\x1A\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03" +
        "\x02\x02\x02\u013B\v\x03\x02\x02\x02\u013C\u013F\t\x02\x02\x02\u013D\u013F" +
        "\x071\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013D\x03\x02\x02\x02" +
        "\u013F\r\x03\x02\x02\x02\u0140\u0141\t\x02\x02\x02\u0141\x0F\x03\x02\x02" +
        "\x02\u0142\u0143\x05\x12\n\x02\u0143\u0144\x071\x02\x02\u0144\x11\x03" +
        "\x02\x02\x02\u0145\u014E\x05\x14\v\x02\u0146\u0148\x071\x02\x02\u0147" +
        "\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u0147\x03\x02" +
        "\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B" +
        "\u014D\x05\x14\v\x02\u014C\u0147\x03\x02\x02\x02\u014D\u0150\x03\x02\x02" +
        "\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\x13" +
        "\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0153\x05\x86D\x02" +
        "\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x03" +
        "\x02\x02\x02\u0154\u0158\x05\x18\r\x02\u0155\u0157\x07\x04\x02\x02\u0156" +
        "\u0155\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02" +
        "\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u0167\x03\x02\x02\x02\u015A" +
        "\u0158\x03\x02\x02\x02\u015B\u0166\x05\x98M\x02\u015C\u0166\x05\x8CG\x02" +
        "\u015D\u0166\x05\x1E\x10\x02\u015E\u0166\x05\x1C\x0F\x02\u015F\u0166\x05" +
        "\xAAV\x02\u0160\u0166\x05 \x11\x02\u0161\u0166\x05:\x1E\x02\u0162\u0166" +
        "\x05\"\x12\x02\u0163\u0166\x05\x9AN\x02\u0164\u0166\x05\x16\f\x02\u0165" +
        "\u015B\x03\x02\x02\x02\u0165\u015C\x03\x02\x02\x02\u0165\u015D\x03\x02" +
        "\x02\x02\u0165\u015E\x03\x02\x02\x02\u0165\u015F\x03\x02\x02";
    interviewParser._serializedATNSegment1 = "\x02\u0165\u0160\x03\x02\x02\x02\u0165\u0161\x03\x02\x02\x02\u0165\u0162" +
        "\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0164\x03\x02\x02\x02" +
        "\u0166\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03" +
        "\x02\x02\x02\u0168\u017E\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A" +
        "\u016C\x071\x02\x02\u016B\u016D\x05\x1A\x0E\x02\u016C\u016B\x03\x02\x02" +
        "\x02\u016C\u016D\x03\x02\x02\x02\u016D\u0171\x03\x02\x02\x02\u016E\u0170" +
        "\x07\x04\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\u0173\x03\x02\x02\x02" +
        "\u0171\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u017B\x03" +
        "\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0174\u017A\x05\x8CG\x02\u0175" +
        "\u017A\x05\x1E\x10\x02\u0176\u017A\x05\x1C\x0F\x02\u0177\u017A\x05\xAA" +
        "V\x02\u0178\u017A\x05 \x11\x02\u0179\u0174\x03\x02\x02\x02\u0179\u0175" +
        "\x03\x02\x02\x02\u0179\u0176\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02" +
        "\u0179\u0178\x03\x02\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B\u0179\x03" +
        "\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D" +
        "\u017B\x03\x02\x02\x02\u017E\u016A\x03\x02\x02\x02\u017E\u017F\x03\x02" +
        "\x02\x02\u017F\u01A5\x03\x02\x02\x02\u0180\u018B\x05\x98M\x02\u0181\u018B" +
        "\x05\x8CG\x02\u0182\u018B\x05\x1E\x10\x02\u0183\u018B\x05\x1C\x0F\x02" +
        "\u0184\u018B\x05\xAAV\x02\u0185\u018B\x05 \x11\x02\u0186\u018B\x05:\x1E" +
        "\x02\u0187\u018B\x05\"\x12\x02\u0188\u018B\x05\x9AN\x02\u0189\u018B\x05" +
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
        "\u0195\x03\x02\x02\x02\u0198\u019E\x05\x8CG\x02\u0199\u019E\x05\x1E\x10" +
        "\x02\u019A\u019E\x05\x1C\x0F\x02\u019B\u019E\x05\xAAV\x02\u019C\u019E" +
        "\x05 \x11\x02\u019D\u0198\x03\x02\x02\x02\u019D\u0199\x03\x02\x02\x02" +
        "\u019D\u019A\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019C\x03" +
        "\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F" +
        "\u01A0\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02" +
        "\x02\x02\u01A2\u018E\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3" +
        "\u01A5\x03\x02\x02\x02\u01A4\u0152\x03\x02\x02\x02\u01A4\u018A\x03\x02" +
        "\x02\x02\u01A5\x15\x03\x02\x02\x02\u01A6\u01A8\x05\xB2Z\x02\u01A7\u01A6" +
        "\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02" +
        "\u01A9\u01AA\x03\x02\x02\x02\u01AA\x17\x03\x02\x02\x02\u01AB\u01AC\x07" +
        "0\x02\x02\u01AC\u01AE\x07\x1B\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD" +
        "\u01AE\x03\x02\x02\x02\u01AE\u01B9\x03\x02\x02\x02\u01AF\u01B1\x05\xBA" +
        "^\x02\u01B0\u01B2\x07\x1C\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B1\u01B2" +
        "\x03\x02\x02\x02\u01B2\u01B6\x03\x02\x02\x02\u01B3\u01B5\x071\x02\x02" +
        "\u01B4\u01B3\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6\u01B4\x03" +
        "\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8" +
        "\u01B6\x03\x02\x02\x02\u01B9\u01AF\x03\x02\x02\x02\u01BA\u01BB\x03\x02" +
        "\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC" +
        "\u01BF\x03\x02\x02\x02\u01BD\u01BF\x07\x89\x02\x02\u01BE\u01AD\x03\x02" +
        "\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BF\x19\x03\x02\x02\x02\u01C0\u01C2" +
        "\x05\xBA^\x02\u01C1\u01C3\x07\x1C\x02\x02\u01C2\u01C1\x03\x02\x02\x02" +
        "\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C0\x03" +
        "\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6" +
        "\u01C7\x03\x02\x02\x02\u01C7\x1B\x03\x02\x02\x02\u01C8\u01C9\x07:\x02" +
        "\x02\u01C9\x1D\x03\x02\x02\x02\u01CA\u01CB\x079\x02\x02\u01CB\x1F\x03" +
        "\x02\x02\x02\u01CC\u01CD\t\x03\x02\x02\u01CD!\x03\x02\x02\x02\u01CE\u01D2" +
        "\x07\x17\x02\x02\u01CF\u01D1\v\x02\x02\x02\u01D0\u01CF\x03\x02\x02\x02" +
        "\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D2\u01D0\x03" +
        "\x02\x02\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5" +
        "\u01D6\x07\x1B\x02\x02\u01D6#\x03\x02\x02\x02\u01D7\u01D9\x05\xB2Z\x02" +
        "\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01D8\x03" +
        "\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC" +
        "\u01DE\x07=\x02\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02" +
        "\x02\u01DE%\x03\x02\x02\x02\u01DF\u01E1\x05\xB2Z\x02\u01E0\u01DF\x03\x02" +
        "\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2" +
        "\u01E3\x03\x02\x02\x02\u01E3\u01EA\x03\x02\x02\x02\u01E4\u01E6\x07&\x02" +
        "\x02\u01E5\u01E7\x05\xB2Z\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7\u01E8" +
        "\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02" +
        "\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E4\x03\x02\x02\x02\u01EA\u01EB\x03" +
        "\x02\x02\x02\u01EB\u01F3\x03\x02\x02\x02\u01EC\u01EE\x07\x04\x02\x02\u01ED" +
        "\u01EC\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02" +
        "\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1" +
        "\u01EF\x03\x02\x02\x02\u01F2\u01F4\x05\x8CG\x02\u01F3\u01EF\x03\x02\x02" +
        "\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\'\x03\x02\x02\x02\u01F5\u01F7\x05" +
        "*\x16\x02\u01F6\u01F8\x071\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F8\u01F9" +
        "\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
        "\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x05,\x17\x02\u01FC)\x03\x02\x02" +
        "\x02\u01FD\u01FF\x07\x1A\x02\x02\u01FE\u0200\x05\xB2Z\x02\u01FF\u01FE" +
        "\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02" +
        "\u0201\u0202\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x07" +
        "\x1B\x02\x02\u0204+\x03\x02\x02\x02\u0205\u0207\x07\x1A\x02\x02\u0206" +
        "\u0208\x05\xB2Z\x02\u0207\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02" +
        "\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020B" +
        "\x03\x02\x02\x02\u020B\u020C\x07\x1B\x02\x02\u020C-\x03\x02\x02\x02\u020D" +
        "\u0215\x07<\x02\x02\u020E\u0210\x071\x02\x02\u020F\u020E\x03\x02\x02\x02" +
        "\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x05" +
        "\xB0Y\x02\u0212\u0214\x071\x02\x02\u0213\u0212\x03\x02\x02\x02\u0213\u0214" +
        "\x03\x02\x02\x02\u0214\u0216\x03\x02\x02\x02\u0215\u020F\x03\x02\x02\x02" +
        "\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x07" +
        "\x1B\x02\x02\u0218/\x03\x02\x02\x02\u0219\u022F\x05\x86D\x02\u021A\u022F" +
        "\x05\xA6T\x02\u021B\u022F\x05\x90I\x02\u021C\u022F\x05\x9CO\x02\u021D" +
        "\u022F\x05\x98M\x02\u021E\u022F\x05\x9AN\x02\u021F\u022F\x058\x1D\x02" +
        "\u0220\u022F\x05\xB2Z\x02\u0221\u022F\x05\x8CG\x02\u0222\u022F\x05\x9E" +
        "P\x02\u0223\u022F\x05n8\x02\u0224\u022F\x05x=\x02\u0225\u022F\x05j6\x02" +
        "\u0226\u022F\x05^0\x02\u0227\u022F\x05`1\x02\u0228\u022F\x05d3\x02\u0229" +
        "\u022F\x05b2\x02\u022A\u022F\x05f4\x02\u022B\u022F\x05\x8AF\x02\u022C" +
        "\u022F\x05\xACW\x02\u022D\u022F\x05\xBC_\x02\u022E\u0219\x03\x02\x02\x02" +
        "\u022E\u021A\x03\x02\x02\x02\u022E\u021B\x03\x02\x02\x02\u022E\u021C\x03" +
        "\x02\x02\x02\u022E\u021D\x03\x02\x02\x02\u022E\u021E\x03\x02\x02\x02\u022E" +
        "\u021F\x03\x02\x02\x02\u022E\u0220\x03\x02\x02\x02\u022E\u0221\x03\x02" +
        "\x02\x02\u022E\u0222\x03\x02\x02\x02\u022E\u0223\x03\x02\x02\x02\u022E" +
        "\u0224\x03\x02\x02\x02\u022E\u0225\x03\x02\x02\x02\u022E\u0226\x03\x02" +
        "\x02\x02\u022E\u0227\x03\x02\x02\x02\u022E\u0228\x03\x02\x02\x02\u022E" +
        "\u0229\x03\x02\x02\x02\u022E\u022A\x03\x02\x02\x02\u022E\u022B\x03\x02" +
        "\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022D\x03\x02\x02\x02\u022F" +
        "1\x03\x02\x02\x02\u0230\u0232\x071\x02\x02\u0231\u0230\x03\x02\x02\x02" +
        "\u0232\u0235\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0234\x03" +
        "\x02\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0236" +
        "\u023A\x054\x1B\x02\u0237\u0239\x054\x1B\x02\u0238\u0237\x03\x02\x02\x02" +
        "\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03" +
        "\x02\x02\x02\u023B\u0240\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D" +
        "\u023F\x071\x02\x02\u023E\u023D\x03\x02\x02\x02\u023F\u0242\x03\x02\x02" +
        "\x02\u0240\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u02413\x03" +
        "\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0243\u024E\x056\x1C\x02\u0244" +
        "\u024E\x05n8\x02\u0245\u024E\x05x=\x02\u0246\u024E\x05j6\x02\u0247\u024E" +
        "\x05^0\x02\u0248\u024E\x05`1\x02\u0249\u024E\x05d3\x02\u024A\u024E\x05" +
        "b2\x02\u024B\u024E\x05\x90I\x02\u024C\u024E\x05\x9AN\x02\u024D\u0243\x03" +
        "\x02\x02\x02\u024D\u0244\x03\x02\x02\x02\u024D\u0245\x03\x02\x02\x02\u024D" +
        "\u0246\x03\x02\x02\x02\u024D\u0247\x03\x02\x02\x02\u024D\u0248\x03\x02" +
        "\x02\x02\u024D\u0249\x03\x02\x02\x02\u024D\u024A\x03\x02\x02\x02\u024D" +
        "\u024B\x03\x02\x02\x02\u024D\u024C\x03\x02\x02\x02\u024E\u0252\x03\x02" +
        "\x02\x02\u024F\u0251\x071\x02\x02\u0250\u024F\x03\x02\x02\x02\u0251\u0254" +
        "\x03\x02\x02\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02" +
        "\u02535\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0255\u0258\x07\x89" +
        "\x02\x02\u0256\u0258\x05\xB2Z\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0256" +
        "\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02" +
        "\u0259\u025A\x03\x02\x02\x02\u025A7\x03\x02\x02\x02\u025B\u0263\x05:\x1E" +
        "\x02\u025C\u0262\x05:\x1E\x02\u025D\u0262\x05\x98M\x02\u025E\u0262\x05" +
        "\x9AN\x02\u025F\u0262\x05\x86D\x02\u0260\u0262\x05\x8CG\x02\u0261\u025C" +
        "\x03\x02\x02\x02\u0261\u025D\x03\x02\x02\x02\u0261\u025E\x03\x02\x02\x02" +
        "\u0261\u025F\x03\x02\x02\x02\u0261\u0260\x03\x02\x02\x02\u0262\u0265\x03" +
        "\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264" +
        "9\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266\u026A\x07\x11\x02" +
        "\x02\u0267\u026B\x07/\x02\x02\u0268\u026B\x070\x02\x02\u0269\u026B\x03" +
        "\x02\x02\x02\u026A\u0267\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026A" +
        "\u0269\x03\x02\x02\x02\u026B\u026F\x03\x02\x02\x02\u026C\u026E\x05\xB2" +
        "Z\x02\u026D\u026C\x03\x02\x02\x02\u026E\u0271\x03\x02\x02\x02\u026F\u026D" +
        "\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0272\x03\x02\x02\x02" +
        "\u0271\u026F\x03\x02\x02\x02\u0272\u0273\x05\xB6\\\x02\u0273;\x03\x02" +
        "\x02\x02\u0274\u0275\x07B\x02\x02\u0275\u0276\x07/\x02\x02\u0276\u0277" +
        "\x07\x1B\x02\x02\u0277=\x03\x02\x02\x02\u0278\u027A\x05@!\x02\u0279\u0278" +
        "\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02" +
        "\u027B\u027C\x03\x02\x02\x02\u027C\u0282\x03\x02\x02\x02\u027D\u027B\x03" +
        "\x02\x02\x02\u027E\u0281\x07x\x02\x02\u027F\u0281\x05B\"\x02\u0280\u027E" +
        "\x03\x02\x02\x02\u0280\u027F\x03\x02\x02\x02\u0281\u0284\x03\x02\x02\x02" +
        "\u0282\u0280\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283?\x03\x02" +
        "\x02\x02\u0284\u0282\x03\x02\x02\x02\u0285\u0286\t\x04\x02\x02\u0286A" +
        "\x03\x02\x02\x02\u0287\u0291\x05D#\x02\u0288\u0291\x05|?\x02\u0289\u0291" +
        "\x05F$\x02\u028A\u0291\x05H%\x02\u028B\u0291\x05J&\x02\u028C\u0291\x05" +
        "L\'\x02\u028D\u0291\x05N(\x02\u028E\u0291\x05P)\x02\u028F\u0291\x07Y\x02" +
        "\x02\u0290\u0287\x03\x02\x02\x02\u0290\u0288\x03\x02\x02\x02\u0290\u0289" +
        "\x03\x02\x02\x02\u0290\u028A\x03\x02\x02\x02\u0290\u028B\x03\x02\x02\x02" +
        "\u0290\u028C\x03\x02\x02\x02\u0290\u028D\x03\x02\x02\x02\u0290\u028E\x03" +
        "\x02\x02\x02\u0290\u028F\x03\x02\x02\x02\u0291C\x03\x02\x02\x02\u0292" +
        "\u0295\x07P\x02\x02\u0293\u0296\x07\b\x02\x02\u0294\u0296\x07\x86\x02" +
        "\x02\u0295\u0293\x03\x02\x02\x02\u0295\u0294\x03\x02\x02\x02\u0295\u0296" +
        "\x03\x02\x02\x02\u0296\u02A1\x03\x02\x02\x02\u0297\u0299\x07g\x02\x02" +
        "\u0298\u029A\x07\b\x02\x02\u0299\u0298\x03\x02\x02\x02\u0299\u029A\x03" +
        "\x02\x02\x02\u029A\u02A1\x03\x02\x02\x02\u029B\u029D\x07Q\x02\x02\u029C" +
        "\u029E\x07\b\x02\x02\u029D\u029C\x03\x02\x02\x02\u029D\u029E\x03\x02\x02" +
        "\x02\u029E\u02A1\x03\x02\x02\x02\u029F\u02A1\x07R\x02\x02\u02A0\u0292" +
        "\x03\x02\x02\x02\u02A0\u0297\x03\x02\x02\x02\u02A0\u029B\x03\x02\x02\x02" +
        "\u02A0\u029F\x03\x02\x02\x02\u02A1E\x03\x02\x02\x02\u02A2\u02A5\t\x05" +
        "\x02\x02\u02A3\u02A4\x07\x1C\x02\x02\u02A4\u02A6\x07\n\x02\x02\u02A5\u02A3" +
        "\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6G\x03\x02\x02\x02\u02A7" +
        "\u02A8\t\x06\x02\x02\u02A8I\x03\x02\x02\x02\u02A9\u02AA\t\x07\x02\x02" +
        "\u02AAK\x03\x02\x02\x02\u02AB\u02AC\t\b\x02\x02\u02ACM\x03\x02\x02\x02" +
        "\u02AD\u02AE\t\t\x02\x02\u02AEO\x03\x02\x02\x02\u02AF\u02B0\t\n\x02\x02" +
        "\u02B0Q\x03\x02\x02\x02\u02B1\u02B2\t\v\x02\x02\u02B2S\x03\x02\x02\x02" +
        "\u02B3\u02B4\t\f\x02\x02\u02B4U\x03\x02\x02\x02\u02B5\u02B6\t\r\x02\x02" +
        "\u02B6W\x03\x02\x02\x02\u02B7\u02B8\t\x0E\x02\x02\u02B8Y\x03\x02\x02\x02" +
        "\u02B9\u02BC\x07^\x02\x02\u02BA\u02BB\x07\x1C\x02\x02\u02BB\u02BD\x07" +
        "\n\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD" +
        "\u02C4\x03\x02\x02\x02\u02BE\u02C1\x07p\x02\x02\u02BF\u02C0\x07\x1C\x02" +
        "\x02\u02C0\u02C2\x07\n\x02\x02\u02C1\u02BF\x03\x02\x02\x02\u02C1\u02C2" +
        "\x03\x02\x02\x02\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02B9\x03\x02\x02\x02" +
        "\u02C3\u02BE\x03\x02\x02\x02\u02C4[\x03\x02\x02\x02\u02C5\u02C6\t\x0F" +
        "\x02\x02\u02C6]\x03\x02\x02\x02\u02C7\u02C8\x05R*\x02\u02C8\u02C9\x07" +
        "\x1C\x02\x02\u02C9\u02CA\x05\x84C\x02\u02CA\u02CB\x07\x1B\x02\x02\u02CB" +
        "\u02CE\x03\x02\x02\x02\u02CC\u02CE\x07-\x02\x02\u02CD\u02C7\x03\x02\x02" +
        "\x02\u02CD\u02CC\x03\x02\x02\x02\u02CE_\x03\x02\x02\x02\u02CF\u02D0\x05" +
        "T+\x02\u02D0\u02D1\x07\x1C\x02\x02\u02D1\u02D2\x05\x84C\x02\u02D2\u02D7" +
        "\x07\x1B\x02\x02\u02D3\u02D4\x07D\x02\x02\u02D4\u02D5\x05\xBA^\x02\u02D5" +
        "\u02D6\x07\x1B\x02\x02\u02D6\u02D8\x03\x02\x02\x02\u02D7\u02D3\x03\x02" +
        "\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8a\x03\x02\x02\x02\u02D9\u02DA" +
        "\x05X-\x02\u02DA\u02DB\x07\x1C\x02\x02\u02DB\u02DC\x05\x84C\x02\u02DC" +
        "\u02E1\x07\x1B\x02\x02\u02DD\u02DE\x07D\x02\x02\u02DE\u02DF\x05\xBA^\x02" +
        "\u02DF\u02E0\x07\x1B\x02\x02\u02E0\u02E2\x03\x02\x02\x02\u02E1\u02DD\x03" +
        "\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2c\x03\x02\x02\x02\u02E3" +
        "\u02E4\x05V,\x02\u02E4\u02E7\x07\x1C\x02\x02\u02E5\u02E8\x05\x84C\x02" +
        "\u02E6\u02E8\x05\x82B\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E6\x03" +
        "\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EE\x07\x1B\x02\x02\u02EA" +
        "\u02EB\x07D\x02\x02\u02EB\u02EC\x05\xBA^\x02\u02EC\u02ED\x07\x1B\x02\x02" +
        "\u02ED\u02EF\x03\x02\x02\x02\u02EE\u02EA\x03\x02\x02\x02\u02EE\u02EF\x03" +
        "\x02\x02\x02\u02EFe\x03\x02\x02\x02\u02F0\u02F4\x05h5\x02\u02F1\u02F3" +
        "\x05\x80A\x02\u02F2\u02F1\x03\x02\x02\x02\u02F3\u02F6\x03\x02\x02\x02" +
        "\u02F4\u02F2\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5g\x03\x02" +
        "\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F7\u02F8\x05\\/\x02\u02F8\u02FC" +
        "\x07\x1C\x02\x02\u02F9\u02FB\x07\x04\x02\x02\u02FA\u02F9\x03\x02\x02\x02" +
        "\u02FB\u02FE\x03\x02\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FC\u02FD\x03" +
        "\x02\x02\x02\u02FD\u02FF\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FF" +
        "\u0300\x05\x84C\x02\u0300\u0301\x07\x1B\x02\x02\u0301i\x03\x02\x02\x02" +
        "\u0302\u0306\x05l7\x02\u0303\u0305\x05\x80A\x02\u0304\u0303\x03\x02\x02" +
        "\x02\u0305\u0308\x03\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0306\u0307" +
        "\x03\x02\x02\x02\u0307k\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0309" +
        "\u030A\x05Z.\x02\u030A\u030B\x07\x1C\x02\x02\u030B\u030C\x05\x84C\x02" +
        "\u030C\u0311\x07\x1B\x02\x02\u030D\u030E\x07D\x02\x02\u030E\u030F\x05" +
        "\xBA^\x02\u030F\u0310\x07\x1B\x02\x02\u0310\u0312\x03\x02\x02\x02\u0311" +
        "\u030D\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312m\x03\x02\x02" +
        "\x02\u0313\u0317\x05p9\x02\u0314\u0316\x05t;\x02\u0315\u0314\x03\x02\x02" +
        "\x02\u0316\u0319\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0317\u0318" +
        "\x03\x02\x02\x02\u0318\u031C\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02" +
        "\u031A\u031B\x071\x02\x02\u031B\u031D\x07F\x02\x02\u031C\u031A\x03\x02" +
        "\x02\x02\u031C\u031D\x03\x02\x02\x02\u031Do\x03\x02\x02\x02\u031E\u031F" +
        "\x05r:\x02\u031F\u0323\x07\x1C\x02\x02\u0320\u0322\x07\x04\x02\x02\u0321" +
        "\u0320\x03\x02\x02\x02\u0322\u0325\x03\x02\x02\x02\u0323\u0321\x03\x02" +
        "\x02\x02\u0323\u0324\x03\x02\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325" +
        "\u0323\x03\x02\x02\x02\u0326\u0327\x05\x84C\x02\u0327\u0328\x07\x1B\x02" +
        "\x02\u0328q\x03\x02\x02\x02\u0329\u032C\x07[\x02\x02\u032A\u032D\x07\b" +
        "\x02\x02\u032B\u032D\x07\x86\x02\x02\u032C\u032A\x03\x02\x02\x02\u032C" +
        "\u032B\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D\u0338\x03\x02" +
        "\x02\x02\u032E\u0330\x07o\x02\x02\u032F\u0331\x07\b\x02\x02\u0330\u032F" +
        "\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0338\x03\x02\x02\x02" +
        "\u0332\u0334\x07\\\x02\x02\u0333\u0335\x07\b\x02\x02\u0334\u0333\x03\x02" +
        "\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\u0338\x03\x02\x02\x02\u0336" +
        "\u0338\x07]\x02\x02\u0337\u0329\x03\x02\x02\x02\u0337\u032E\x03\x02\x02" +
        "\x02\u0337\u0332\x03\x02\x02\x02\u0337\u0336\x03\x02\x02\x02\u0338s\x03" +
        "\x02\x02\x02\u0339\u033A\x07C\x02\x02\u033A\u033B\x07\x1C\x02\x02\u033B" +
        "\u033C\x05\x84C\x02\u033C\u033D\x07\x1B\x02\x02\u033D\u034B\x03\x02\x02" +
        "\x02\u033E\u033F\t\x10\x02\x02\u033F\u0340\x07\x1C\x02\x02\u0340\u0341" +
        "\x07/\x02\x02\u0341\u034B\x07\x1B\x02\x02\u0342\u0346\t\x11\x02\x02\u0343" +
        "\u0345\v\x02\x02\x02\u0344\u0343\x03\x02\x02\x02\u0345\u0348\x03\x02\x02" +
        "\x02\u0346\u0347\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02\u0347\u0349" +
        "\x03\x02\x02\x02\u0348\u0346\x03\x02\x02\x02\u0349\u034B\x07\x1B\x02\x02" +
        "\u034A\u0339\x03\x02\x02\x02\u034A\u033E\x03\x02\x02\x02\u034A\u0342\x03" +
        "\x02\x02\x02\u034Bu\x03\x02\x02\x02\u034C\u034D\x07C\x02\x02\u034D\u034E" +
        "\x07\x1C\x02\x02\u034E\u034F\x05\x84C\x02\u034F\u0350\x07\x1B\x02\x02" +
        "\u0350\u035E\x03\x02\x02\x02\u0351\u0352\t\x10\x02\x02\u0352\u0353\x07" +
        "\x1C\x02\x02\u0353\u0354\x07/\x02\x02\u0354\u035E\x07\x1B\x02\x02\u0355" +
        "\u0359\t\x11\x02\x02\u0356\u0358\v\x02\x02\x02\u0357\u0356\x03\x02\x02" +
        "\x02\u0358\u035B\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u0359\u0357" +
        "\x03\x02\x02\x02\u035A\u035C\x03\x02\x02\x02\u035B\u0359\x03\x02\x02\x02" +
        "\u035C\u035E\x07\x1B\x02\x02\u035D\u034C\x03\x02\x02\x02\u035D\u0351\x03" +
        "\x02\x02\x02\u035D\u0355\x03\x02\x02\x02\u035Ew\x03\x02\x02\x02\u035F" +
        "\u0363\x05z>\x02\u0360\u0362\x05\x80A\x02\u0361\u0360\x03\x02\x02\x02" +
        "\u0362\u0365\x03\x02\x02\x02\u0363\u0361\x03\x02\x02\x02\u0363\u0364\x03" +
        "\x02\x02\x02\u0364y\x03\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0366" +
        "\u0367\x05~@\x02\u0367\u0368\x07\x1C\x02\x02\u0368\u0369\x05\x84C\x02" +
        "\u0369\u036E\x07\x1B\x02\x02\u036A\u036B\x07D\x02\x02\u036B\u036C\x05" +
        "\xBA^\x02\u036C\u036D\x07\x1B\x02\x02\u036D\u036F\x03\x02\x02\x02\u036E" +
        "\u036A\x03\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F{\x03\x02\x02" +
        "\x02\u0370\u0373\x07O\x02\x02\u0371\u0372\x07\x1C\x02\x02\u0372\u0374" +
        "\x07\t\x02\x02\u0373\u0371\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02" +
        "\u0374\u037B\x03\x02\x02\x02\u0375\u0378\x07f\x02\x02\u0376\u0377\x07" +
        "\x1C\x02\x02\u0377\u0379\x07\t\x02\x02\u0378\u0376\x03\x02\x02\x02\u0378" +
        "\u0379\x03\x02\x02\x02\u0379\u037B\x03\x02\x02\x02\u037A\u0370\x03\x02" +
        "\x02\x02\u037A\u0375\x03\x02\x02\x02\u037B}\x03\x02\x02\x02\u037C\u037F" +
        "\x07Z\x02\x02\u037D\u037E\x07\x1C\x02\x02\u037E\u0380\x07\t\x02\x02\u037F" +
        "\u037D\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380\u0387\x03\x02" +
        "\x02\x02\u0381\u0384\x07n\x02\x02\u0382\u0383\x07\x1C\x02\x02\u0383\u0385" +
        "\x07\t\x02\x02\u0384\u0382\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02" +
        "\u0385\u0387\x03\x02\x02\x02\u0386\u037C\x03\x02\x02\x02\u0386\u0381\x03" +
        "\x02\x02\x02\u0387\x7F\x03\x02\x02\x02\u0388\u0389\x07\x14\x02\x02\u0389" +
        "\u038C\x05\xB2Z\x02\u038A\u038C\x07C\x02\x02\u038B\u0388\x03\x02\x02\x02" +
        "\u038B\u038A\x03\x02\x02\x02\u038C\u038D\x03\x02\x02\x02\u038D\u0391\x07" +
        "\x1C\x02\x02\u038E\u0390\x07\x04\x02\x02\u038F\u038E\x03\x02\x02\x02\u0390" +
        "\u0393\x03\x02\x02\x02\u0391\u038F\x03\x02\x02\x02\u0391\u0392\x03\x02" +
        "\x02\x02\u0392\u0396\x03\x02\x02\x02\u0393\u0391\x03\x02\x02\x02\u0394" +
        "\u0397\x05\xB2Z\x02\u0395\u0397\x071\x02\x02\u0396\u0394\x03\x02\x02\x02" +
        "\u0396\u0395\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u0396\x03" +
        "\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A" +
        "\u03A8\x07\x1B\x02\x02\u039B\u039C\t\x10\x02\x02\u039C\u039D\x07\x1C\x02" +
        "\x02\u039D\u039E\x07/\x02\x02\u039E\u03A8\x07\x1B\x02\x02\u039F\u03A3" +
        "\t\x11\x02\x02\u03A0\u03A2\v\x02\x02\x02\u03A1\u03A0\x03\x02\x02\x02\u03A2" +
        "\u03A5\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A3\u03A1\x03\x02" +
        "\x02\x02\u03A4\u03A6\x03\x02\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A6" +
        "\u03A8\x07\x1B\x02\x02\u03A7\u038B\x03\x02\x02\x02\u03A7\u039B\x03\x02" +
        "\x02\x02\u03A7\u039F\x03\x02\x02\x02\u03A8\x81\x03\x02\x02\x02\u03A9\u03AA" +
        "\x07\x85\x02\x02\u03AA\u03AB\x07\x1F\x02\x02\u03AB\u03AC\x07/\x02\x02" +
        "\u03AC\x83\x03\x02\x02\x02\u03AD\u03AE\x07\x88\x02\x02\u03AE\x85\x03\x02" +
        "\x02\x02\u03AF\u03B0\x07\x19\x02\x02\u03B0\u03B8\x07\x1B\x02\x02\u03B1" +
        "\u03B3\x07\x04\x02\x02\u03B2\u03B1\x03\x02\x02\x02\u03B3\u03B6\x03\x02" +
        "\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5" +
        "\u03B7\x03\x02\x02\x02\u03B6\u03B4\x03\x02\x02\x02\u03B7\u03B9\x05\x88" +
        "E\x02\u03B8\u03B4\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03CE" +
        "\x03\x02\x02\x02\u03BA\u03BB\x07\x19\x02\x02\u03BB\u03C0\x05\xB2Z\x02" +
        "\u03BC\u03BF\x07\x1C\x02\x02\u03BD\u03BF\x05\xBA^\x02\u03BE\u03BC\x03" +
        "\x02\x02\x02\u03BE\u03BD\x03\x02\x02\x02\u03BF\u03C2\x03\x02\x02\x02\u03C0" +
        "\u03BE\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C3\x03\x02" +
        "\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C3\u03CB\x07\x1B\x02\x02\u03C4" +
        "\u03C6\x07\x04\x02\x02\u03C5\u03C4\x03\x02\x02\x02\u03C6\u03C9\x03\x02" +
        "\x02\x02\u03C7\u03C5\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8" +
        "\u03CA\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03CA\u03CC\x05\x88" +
        "E\x02\u03CB\u03C7\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03CE" +
        "\x03\x02\x02\x02\u03CD\u03AF\x03\x02\x02\x02\u03CD\u03BA\x03\x02\x02\x02" +
        "\u03CE\x87\x03\x02\x02\x02\u03CF\u03D0\x07\x19\x02\x02\u03D0\u03D5\x05" +
        "\xB2Z\x02\u03D1\u03D4\x07\x1C\x02\x02\u03D2\u03D4\x05\xBA^\x02\u03D3\u03D1" +
        "\x03\x02\x02\x02\u03D3\u03D2\x03\x02\x02\x02\u03D4\u03D7\x03\x02\x02\x02" +
        "\u03D5\u03D3\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\u03D8\x03" +
        "\x02\x02\x02\u03D7\u03D5\x03\x02\x02\x02\u03D8\u03D9\x07\x1B\x02\x02\u03D9" +
        "\x89\x03\x02\x02\x02\u03DA\u03DC\x07\x0E\x02\x02\u03DB\u03DD\x05\xB2Z" +
        "\x02\u03DC\u03DB\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DE" +
        "\x03\x02\x02\x02\u03DE\u03E5\x07\x1B\x02\x02\u03DF\u03E1\x07\x0F\x02\x02" +
        "\u03E0\u03E2\x05\xB2Z\x02\u03E1\u03E0\x03\x02\x02\x02\u03E1\u03E2\x03" +
        "\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E5\x07\x1B\x02\x02\u03E4" +
        "\u03DA\x03\x02\x02\x02\u03E4\u03DF\x03\x02\x02\x02\u03E5\x8B\x03\x02\x02" +
        "\x02\u03E6\u03EE\x07=\x02\x02\u03E7\u03EE\x07;\x02\x02\u03E8\u03EA\x07" +
        "<\x02\x02\u03E9\u03EB\x072\x02\x02\u03EA\u03E9\x03\x02\x02\x02\u03EA\u03EB" +
        "\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03EE\x07\x02\x02\x03" +
        "\u03ED\u03E6\x03\x02\x02\x02\u03ED\u03E7\x03\x02\x02\x02\u03ED\u03E8\x03" +
        "\x02\x02\x02\u03EE\x8D\x03\x02\x02\x02\u03EF\u03F1\x07e\x02\x02\u03F0" +
        "\u03F2\x05\xB2Z\x02\u03F1\u03F0\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02" +
        "\x02\u03F2\u0408\x03\x02\x02\x02\u03F3\u03FD\x05\xB2Z\x02\u03F4\u03F8" +
        "\x071\x02\x02\u03F5\u03F7\x07\x04\x02\x02\u03F6\u03F5\x03\x02\x02\x02" +
        "\u03F7";
    interviewParser._serializedATNSegment2 = "\u03FA\x03\x02\x02\x02\u03F8\u03F6\x03\x02\x02\x02\u03F8\u03F9\x03\x02" +
        "\x02\x02\u03F9\u03FC\x03\x02\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FB" +
        "\u03F4\x03\x02\x02\x02\u03FC\u03FF\x03\x02\x02\x02\u03FD\u03FB\x03\x02" +
        "\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE\u0403\x03\x02\x02\x02\u03FF" +
        "\u03FD\x03\x02\x02\x02\u0400\u0402\x071\x02\x02\u0401\u0400\x03\x02\x02" +
        "\x02\u0402\u0405\x03\x02\x02\x02\u0403\u0401\x03\x02\x02\x02\u0403\u0404" +
        "\x03\x02\x02\x02\u0404\u0407\x03\x02\x02\x02\u0405\u0403\x03\x02\x02\x02" +
        "\u0406\u03F3\x03\x02\x02\x02\u0407\u040A\x03\x02\x02\x02\u0408\u0406\x03" +
        "\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409\u040B\x03\x02\x02\x02\u040A" +
        "\u0408\x03\x02\x02\x02\u040B\u0417\x07\x1B\x02\x02\u040C\u0412\x07e\x02" +
        "\x02\u040D\u0411\x05\xB2Z\x02\u040E\u0411\x071\x02\x02\u040F\u0411\x07" +
        "\x04\x02\x02\u0410\u040D\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0410" +
        "\u040F\x03\x02\x02\x02\u0411\u0414\x03\x02\x02\x02\u0412\u0410\x03\x02" +
        "\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0415\x03\x02\x02\x02\u0414" +
        "\u0412\x03\x02\x02\x02\u0415\u0417\x07\x02\x02\x03\u0416\u03EF\x03\x02" +
        "\x02\x02\u0416\u040C\x03\x02\x02\x02\u0417\x8F\x03\x02\x02\x02\u0418\u041D" +
        "\x075\x02\x02\u0419\u041E\x05\xB2Z\x02\u041A\u041E\x07\x1C\x02\x02\u041B" +
        "\u041E\x07\x88\x02\x02\u041C\u041E\x071\x02\x02\u041D\u0419\x03\x02\x02" +
        "\x02\u041D\u041A\x03\x02\x02\x02\u041D\u041B\x03\x02\x02\x02\u041D\u041C" +
        "\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u041D\x03\x02\x02\x02" +
        "\u041F\u0420\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u042F\x07" +
        "\x1B\x02\x02\u0422\u042A\x075\x02\x02\u0423\u0429\x05\xB2Z\x02\u0424\u0429" +
        "\x07\x1C\x02\x02\u0425\u0429\x07\x88\x02\x02\u0426\u0429\x071\x02\x02" +
        "\u0427\u0429\x07\x04\x02\x02\u0428\u0423\x03\x02\x02\x02\u0428\u0424\x03" +
        "\x02\x02\x02\u0428\u0425\x03\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0428" +
        "\u0427\x03\x02\x02\x02\u0429\u042C\x03\x02\x02\x02\u042A\u0428\x03\x02" +
        "\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042D\x03\x02\x02\x02\u042C" +
        "\u042A\x03\x02\x02\x02\u042D\u042F\x07\x02\x02\x03\u042E\u0418\x03\x02" +
        "\x02\x02\u042E\u0422\x03\x02\x02\x02\u042F\x91\x03\x02\x02\x02\u0430\u0431" +
        "\x074\x02\x02\u0431\u0432\x05\xB2Z\x02\u0432\u0433\x07\x1B\x02\x02\u0433" +
        "\x93\x03\x02\x02\x02\u0434\u0438\x07L\x02\x02\u0435\u0439\x05\xB2Z\x02" +
        "\u0436\u0439\x07\x1C\x02\x02\u0437\u0439\x071\x02\x02\u0438\u0435\x03" +
        "\x02\x02\x02\u0438\u0436\x03\x02\x02\x02\u0438\u0437\x03\x02\x02\x02\u0439" +
        "\u043A\x03\x02\x02\x02\u043A\u0438\x03\x02\x02\x02\u043A\u043B\x03\x02" +
        "\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043E\x07\x1B\x02\x02\u043D" +
        "\u043F\x05\x96L\x02\u043E\u043D\x03\x02\x02\x02\u043E\u043F\x03\x02\x02" +
        "\x02\u043F\x95\x03\x02\x02\x02\u0440\u0444\x07L\x02\x02\u0441\u0445\x05" +
        "\xB2Z\x02\u0442\u0445\x07\x1C\x02\x02\u0443\u0445\x071\x02\x02\u0444\u0441" +
        "\x03\x02\x02\x02\u0444\u0442\x03\x02\x02\x02\u0444\u0443\x03\x02\x02\x02" +
        "\u0445\u0446\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0446\u0447\x03" +
        "\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448\u0449\x07\x1B\x02\x02\u0449" +
        "\x97\x03\x02\x02\x02\u044A\u044C\x07\x12\x02\x02\u044B\u044D\x05\xB2Z" +
        "\x02\u044C\u044B\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D\u0463" +
        "\x03\x02\x02\x02\u044E\u0458\x05\xB2Z\x02\u044F\u0453\x071\x02\x02\u0450" +
        "\u0452\x07\x04\x02\x02\u0451\u0450\x03\x02\x02\x02\u0452\u0455\x03\x02" +
        "\x02\x02\u0453\u0451\x03\x02\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454" +
        "\u0457\x03\x02\x02\x02\u0455\u0453\x03\x02\x02\x02\u0456\u044F\x03\x02" +
        "\x02\x02\u0457\u045A\x03\x02\x02\x02\u0458\u0456\x03\x02\x02\x02\u0458" +
        "\u0459\x03\x02\x02\x02\u0459\u045E\x03\x02\x02\x02\u045A\u0458\x03\x02" +
        "\x02\x02\u045B\u045D\x071\x02\x02\u045C\u045B\x03\x02\x02\x02\u045D\u0460" +
        "\x03\x02\x02\x02\u045E\u045C\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02" +
        "\u045F\u0462\x03\x02\x02\x02\u0460\u045E\x03\x02\x02\x02\u0461\u044E\x03" +
        "\x02\x02\x02\u0462\u0465\x03\x02\x02\x02\u0463\u0461\x03\x02\x02\x02\u0463" +
        "\u0464\x03\x02\x02\x02\u0464\u0466\x03\x02\x02\x02\u0465\u0463\x03\x02" +
        "\x02\x02\u0466\u046D\x07\x1B\x02\x02\u0467\u0469\x07\x12\x02\x02\u0468" +
        "\u046A\x05\xB2Z\x02\u0469\u0468\x03\x02\x02\x02\u0469\u046A\x03\x02\x02" +
        "\x02\u046A\u046B\x03\x02\x02\x02\u046B\u046D\x07\x02\x02\x03\u046C\u044A" +
        "\x03\x02\x02\x02\u046C\u0467\x03\x02\x02\x02\u046D\x99\x03\x02\x02\x02" +
        "\u046E\u0470\x07\x13\x02\x02\u046F\u0471\n\x12\x02\x02\u0470\u046F\x03" +
        "\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0470\x03\x02\x02\x02\u0472" +
        "\u0473\x03\x02\x02\x02\u0473\u0474\x03\x02\x02\x02\u0474\u0475\x07\x1B" +
        "\x02\x02\u0475\x9B\x03\x02\x02\x02\u0476\u0479\x07\x1A\x02\x02\u0477\u047A" +
        "\x05\xB2Z\x02\u0478\u047A\x071\x02\x02\u0479\u0477\x03\x02\x02\x02\u0479" +
        "\u0478\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u0479\x03\x02" +
        "\x02\x02\u047B\u047C\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D" +
        "\u0483\x07\x1B\x02\x02\u047E\u047F\x07\x1A\x02\x02\u047F\u0480\x05\xB2" +
        "Z\x02\u0480\u0481\x07\x02\x02\x03\u0481\u0483\x03\x02\x02\x02\u0482\u0476" +
        "\x03\x02\x02\x02\u0482\u047E\x03\x02\x02\x02\u0483\x9D\x03\x02\x02\x02" +
        "\u0484\u0485\x07@\x02\x02\u0485\u0486\x05\xB2Z\x02\u0486\u0487\x07\x1B" +
        "\x02\x02\u0487\u048D\x03\x02\x02\x02\u0488\u0489\x07A\x02\x02\u0489\u048A" +
        "\x05\xB2Z\x02\u048A\u048B\x07\x1B\x02\x02\u048B\u048D\x03\x02\x02\x02" +
        "\u048C\u0484\x03\x02\x02\x02\u048C\u0488\x03\x02\x02\x02\u048D\x9F\x03" +
        "\x02\x02\x02\u048E\u048F\x078\x02\x02\u048F\u0490\x07\x1C\x02\x02\u0490" +
        "\u0491\x07/\x02\x02\u0491\u0498\x07\x1B\x02\x02\u0492\u0493\x078\x02\x02" +
        "\u0493\u0494\x07\x1C\x02\x02\u0494\u0495\x05\xB2Z\x02\u0495\u0496\x07" +
        "\x1B\x02\x02\u0496\u0498\x03\x02\x02\x02\u0497\u048E\x03\x02\x02\x02\u0497" +
        "\u0492\x03\x02\x02\x02\u0498\xA1\x03\x02\x02\x02\u0499\u049A\x07J\x02" +
        "\x02\u049A\u049B\x05\xB2Z\x02\u049B\u049C\x07\x1B\x02\x02\u049C\xA3\x03" +
        "\x02\x02\x02\u049D\u049E\x07K\x02\x02\u049E\u049F\x05\xB2Z\x02\u049F\u04A0" +
        "\x07\x1B\x02\x02\u04A0\xA5\x03\x02\x02\x02\u04A1\u04AB\x05\xA8U\x02\u04A2" +
        "\u04A4\x071\x02\x02\u04A3\u04A2\x03\x02\x02\x02\u04A4\u04A7\x03\x02\x02" +
        "\x02\u04A5\u04A3\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A8" +
        "\x03\x02\x02\x02\u04A7\u04A5\x03\x02\x02\x02\u04A8\u04AA\x05\xA8U\x02" +
        "\u04A9\u04A5\x03\x02\x02\x02\u04AA\u04AD\x03\x02\x02\x02\u04AB\u04A9\x03" +
        "\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\xA7\x03\x02\x02\x02\u04AD" +
        "\u04AB\x03\x02\x02\x02\u04AE\u04AF\x07\x14\x02\x02\u04AF\u04B0\x05\xB2" +
        "Z\x02\u04B0\u04B1\t\x13\x02\x02\u04B1\u04B7\x05\xB2Z\x02\u04B2\u04B6\x07" +
        "1\x02\x02\u04B3\u04B6\x07\x1C\x02\x02\u04B4\u04B6\x05\xB2Z\x02\u04B5\u04B2" +
        "\x03\x02\x02\x02\u04B5\u04B3\x03\x02\x02\x02\u04B5\u04B4\x03\x02\x02\x02" +
        "\u04B6\u04B9\x03\x02\x02\x02\u04B7\u04B5\x03\x02\x02\x02\u04B7\u04B8\x03" +
        "\x02\x02\x02\u04B8\u04BA\x03\x02\x02\x02\u04B9\u04B7\x03\x02\x02\x02\u04BA" +
        "\u04BB\x07\x1B\x02\x02\u04BB\u04C5\x03\x02\x02\x02\u04BC\u04C0\x07I\x02" +
        "\x02\u04BD\u04BF\v\x02\x02\x02\u04BE\u04BD\x03\x02\x02\x02\u04BF\u04C2" +
        "\x03\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02" +
        "\u04C1\u04C3\x03\x02\x02\x02\u04C2\u04C0\x03\x02\x02\x02\u04C3\u04C5\x07" +
        "\x1B\x02\x02\u04C4\u04AE\x03\x02\x02\x02\u04C4\u04BC\x03\x02\x02\x02\u04C5" +
        "\xA9\x03\x02\x02\x02\u04C6\u04CA\x07\v\x02\x02\u04C7\u04CB\x05\xB2Z\x02" +
        "\u04C8\u04CB\x07\x1C\x02\x02\u04C9\u04CB\x071\x02\x02\u04CA\u04C7\x03" +
        "\x02\x02\x02\u04CA\u04C8\x03\x02\x02\x02\u04CA\u04C9\x03\x02\x02\x02\u04CB" +
        "\u04CC\x03\x02\x02\x02\u04CC\u04CA\x03\x02\x02\x02\u04CC\u04CD\x03\x02" +
        "\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\u04DA\x07\x1B\x02\x02\u04CF" +
        "\u04D5\x07\v\x02\x02\u04D0\u04D4\x05\xB2Z\x02\u04D1\u04D4\x07\x1C\x02" +
        "\x02\u04D2\u04D4\x071\x02\x02\u04D3\u04D0\x03\x02\x02\x02\u04D3\u04D1" +
        "\x03\x02\x02\x02\u04D3\u04D2\x03\x02\x02\x02\u04D4\u04D7\x03\x02\x02\x02" +
        "\u04D5\u04D3\x03\x02\x02\x02\u04D5\u04D6\x03\x02\x02\x02\u04D6\u04D8\x03" +
        "\x02\x02\x02\u04D7\u04D5\x03\x02\x02\x02\u04D8\u04DA\x07\x02\x02\x03\u04D9" +
        "\u04C6\x03\x02\x02\x02\u04D9\u04CF\x03\x02\x02\x02\u04DA\xAB\x03\x02\x02" +
        "\x02\u04DB\u04DD\x07\x10\x02\x02\u04DC\u04DE\x05\xB2Z\x02\u04DD\u04DC" +
        "\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02" +
        "\u04DF\u04E0\x07\x1B\x02\x02\u04E0\xAD\x03\x02\x02\x02\u04E1\u04E2\x07" +
        "\x1E\x02\x02\u04E2\xAF\x03\x02\x02\x02\u04E3\u04E5\x05\xB2Z\x02\u04E4" +
        "\u04E6\x071\x02\x02\u04E5\u04E4\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02" +
        "\x02\u04E6\u04E8\x03\x02\x02\x02\u04E7\u04E3\x03\x02\x02\x02\u04E8\u04E9" +
        "\x03\x02\x02\x02\u04E9\u04E7\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02" +
        "\u04EA\xB1\x03\x02\x02\x02\u04EB\u04F2\x070\x02\x02\u04EC\u04EE\x07\x04" +
        "\x02\x02\u04ED\u04EC\x03\x02\x02\x02\u04EE\u04EF\x03\x02\x02\x02\u04EF" +
        "\u04ED\x03\x02\x02\x02\u04EF\u04F0\x03\x02\x02\x02\u04F0\u04F1\x03\x02" +
        "\x02\x02\u04F1\u04F3\x07/\x02\x02\u04F2\u04ED\x03\x02\x02\x02\u04F2\u04F3" +
        "\x03\x02\x02\x02\u04F3\u051B\x03\x02\x02\x02\u04F4\u04FB\x05\xBA^\x02" +
        "\u04F5\u04F7\x07\x04\x02\x02\u04F6\u04F5\x03\x02\x02\x02\u04F7\u04F8\x03" +
        "\x02\x02\x02\u04F8\u04F6\x03\x02\x02\x02\u04F8\u04F9\x03\x02\x02\x02\u04F9" +
        "\u04FA\x03\x02\x02\x02\u04FA\u04FC\x07/\x02\x02\u04FB\u04F6\x03\x02\x02" +
        "\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\u051B\x03\x02\x02\x02\u04FD\u051B" +
        "\x07/\x02\x02\u04FE\u04FF\x07\x17\x02\x02\u04FF\u0500\x05\xB2Z\x02\u0500" +
        "\u0501\x07\x1B\x02\x02\u0501\u051B\x03\x02\x02\x02\u0502\u051B\x071\x02" +
        "\x02\u0503\u0505\x07\x04\x02\x02\u0504\u0503\x03\x02\x02\x02\u0505\u0508" +
        "\x03\x02\x02\x02\u0506\u0504\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02" +
        "\u0507\u0509\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02\u0509\u050D\x07" +
        "\x1C\x02\x02\u050A\u050C\x07\x04\x02\x02\u050B\u050A\x03\x02\x02\x02\u050C" +
        "\u050F\x03\x02\x02\x02\u050D\u050B\x03\x02\x02\x02\u050D\u050E\x03\x02" +
        "\x02\x02\u050E\u051B\x03\x02\x02\x02\u050F\u050D\x03\x02\x02\x02\u0510" +
        "\u0514\x07\x1D\x02\x02\u0511\u0513\x07\x04\x02\x02\u0512\u0511\x03\x02" +
        "\x02\x02\u0513\u0516\x03\x02\x02\x02\u0514\u0512\x03\x02\x02\x02\u0514" +
        "\u0515\x03\x02\x02\x02\u0515\u051B\x03\x02\x02\x02\u0516\u0514\x03\x02" +
        "\x02\x02\u0517\u051B\x07\x1E\x02\x02\u0518\u051B\x07%\x02\x02\u0519\u051B" +
        "\x07\x88\x02\x02\u051A\u04EB\x03\x02\x02\x02\u051A\u04F4\x03\x02\x02\x02" +
        "\u051A\u04FD\x03\x02\x02\x02\u051A\u04FE\x03\x02\x02\x02\u051A\u0502\x03" +
        "\x02\x02\x02\u051A\u0506\x03\x02\x02\x02\u051A\u0510\x03\x02\x02\x02\u051A" +
        "\u0517\x03\x02\x02\x02\u051A\u0518\x03\x02\x02\x02\u051A\u0519\x03\x02" +
        "\x02\x02\u051B\xB3\x03\x02\x02\x02\u051C\u051D\x07\r\x02\x02\u051D\u051E" +
        "\x05\xB2Z\x02\u051E\u051F\x07\x1B\x02\x02\u051F\xB5\x03\x02\x02\x02\u0520" +
        "\u0521\x07\x1B\x02\x02\u0521\xB7\x03\x02\x02\x02\u0522\u0523\t\x14\x02" +
        "\x02\u0523\xB9\x03\x02\x02\x02\u0524\u052E\x070\x02\x02\u0525\u052E\x07" +
        "2\x02\x02\u0526\u052E\x07\x1D\x02\x02\u0527\u0528\x07!\x02\x02\u0528\u052E" +
        "\n\x15\x02\x02\u0529\u052A\x07\"\x02\x02\u052A\u052E\n\x16\x02\x02\u052B" +
        "\u052E\x07$\x02\x02\u052C\u052E\x07#\x02\x02\u052D\u0524\x03\x02\x02\x02" +
        "\u052D\u0525\x03\x02\x02\x02\u052D\u0526\x03\x02\x02\x02\u052D\u0527\x03" +
        "\x02\x02\x02\u052D\u0529\x03\x02\x02\x02\u052D\u052B\x03\x02\x02\x02\u052D" +
        "\u052C\x03\x02\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\u052D\x03\x02" +
        "\x02\x02\u052F\u0530\x03\x02\x02\x02\u0530\xBB\x03\x02\x02\x02\u0531\u0532" +
        "\x07\x04\x02\x02\u0532\xBD\x03\x02\x02\x02\xC0\xC2\xC8\xCD\xD2\xDB\xE3" +
        "\xEA\xEF\xF6\xFD\u0100\u0104\u010A\u010E\u0116\u011D\u0122\u012A\u012F" +
        "\u0136\u013A\u013E\u0149\u014E\u0152\u0158\u0165\u0167\u016C\u0171\u0179" +
        "\u017B\u017E\u018A\u018C\u0190\u0195\u019D\u019F\u01A2\u01A4\u01A9\u01AD" +
        "\u01B1\u01B6\u01BB\u01BE\u01C2\u01C6\u01D2\u01DA\u01DD\u01E2\u01E8\u01EA" +
        "\u01EF\u01F3\u01F9\u0201\u0209\u020F\u0213\u0215\u022E\u0233\u023A\u0240" +
        "\u024D\u0252\u0257\u0259\u0261\u0263\u026A\u026F\u027B\u0280\u0282\u0290" +
        "\u0295\u0299\u029D\u02A0\u02A5\u02BC\u02C1\u02C3\u02CD\u02D7\u02E1\u02E7" +
        "\u02EE\u02F4\u02FC\u0306\u0311\u0317\u031C\u0323\u032C\u0330\u0334\u0337" +
        "\u0346\u034A\u0359\u035D\u0363\u036E\u0373\u0378\u037A\u037F\u0384\u0386" +
        "\u038B\u0391\u0396\u0398\u03A3\u03A7\u03B4\u03B8\u03BE\u03C0\u03C7\u03CB" +
        "\u03CD\u03D3\u03D5\u03DC\u03E1\u03E4\u03EA\u03ED\u03F1\u03F8\u03FD\u0403" +
        "\u0408\u0410\u0412\u0416\u041D\u041F\u0428\u042A\u042E\u0438\u043A\u043E" +
        "\u0444\u0446\u044C\u0453\u0458\u045E\u0463\u0469\u046C\u0472\u0479\u047B" +
        "\u0482\u048C\u0497\u04A5\u04AB\u04B5\u04B7\u04C0\u04C4\u04CA\u04CC\u04D3" +
        "\u04D5\u04D9\u04DD\u04E5\u04E9\u04EF\u04F2\u04F8\u04FB\u0506\u050D\u0514" +
        "\u051A\u052D\u052F";
    interviewParser._serializedATN = Utils.join([
        interviewParser._serializedATNSegment0,
        interviewParser._serializedATNSegment1,
        interviewParser._serializedATNSegment2,
    ], "");
    return interviewParser;
})();
exports.interviewParser = interviewParser;
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
class Bracket_escapedContext extends ParserRuleContext_1.ParserRuleContext {
    OPESC() { return this.getToken(interviewParser.OPESC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_bracket_escaped; }
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
