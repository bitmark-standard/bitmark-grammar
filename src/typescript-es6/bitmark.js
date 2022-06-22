// Generated from ./typescript//bitmark.g4 by ANTLR 4.7.3-SNAPSHOT
import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Token } from "antlr4ts/Token";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import * as Utils from "antlr4ts/misc/Utils";
let bitmark = /** @class */ (() => {
    class bitmark extends Parser {
        constructor(input) {
            super(input);
            this._interp = new ParserATNSimulator(bitmark._ATN, this);
        }
        // @Override
        // @NotNull
        get vocabulary() {
            return bitmark.VOCABULARY;
        }
        // tslint:enable:no-trailing-whitespace
        // @Override
        get grammarFileName() { return "bitmark.g4"; }
        // @Override
        get ruleNames() { return bitmark.ruleNames; }
        // @Override
        get serializedATN() { return bitmark._serializedATN; }
        // @RuleVersion(0)
        bitmark() {
            let _localctx = new BitmarkContext(this._ctx, this.state);
            this.enterRule(_localctx, 0, bitmark.RULE_bitmark);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 358;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 348;
                                this.bitmark_();
                                this.state = 355;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 350;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                if (_la === bitmark.SP) {
                                                    {
                                                        this.state = 349;
                                                        this.sp();
                                                    }
                                                }
                                                this.state = 352;
                                                this.nl();
                                            }
                                        }
                                    }
                                    this.state = 357;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                }
                            }
                        }
                        this.state = 360;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmark.BitBook) | (1 << bitmark.BitChapter) | (1 << bitmark.BitToc) | (1 << bitmark.BitSummary) | (1 << bitmark.BitIntlink) | (1 << bitmark.BitAlias) | (1 << bitmark.BitGroups) | (1 << bitmark.BitGroupt) | (1 << bitmark.BitCloze) | (1 << bitmark.BitClozeinstgrp) | (1 << bitmark.BitClozesolgrp) | (1 << bitmark.BitMultichoice1) | (1 << bitmark.BitMultichoice) | (1 << bitmark.BitMultiresp1) | (1 << bitmark.BitMultiresp) | (1 << bitmark.BitMultichoisetext) | (1 << bitmark.BitClozeandmulti) | (1 << bitmark.BitEssay) | (1 << bitmark.BitArticleattach) | (1 << bitmark.BitInterview) | (1 << bitmark.BitInterviewinstgrp) | (1 << bitmark.BitMatch) | (1 << bitmark.BitMatchall) | (1 << bitmark.BitMatchrev) | (1 << bitmark.BitMatchallrev) | (1 << bitmark.BitMatchpic) | (1 << bitmark.BitMatchaudio) | (1 << bitmark.BitMatchsolgrp) | (1 << bitmark.BitTruefalse1) | (1 << bitmark.BitTruefalse) | (1 << bitmark.BitSequence))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmark.BitCorrection - 32)) | (1 << (bitmark.BitMark - 32)) | (1 << (bitmark.BitDocup - 32)) | (1 << (bitmark.BitTakepic - 32)) | (1 << (bitmark.BitRecaud - 32)) | (1 << (bitmark.BitPrepnote - 32)) | (1 << (bitmark.BitAssign - 32)) | (1 << (bitmark.BitFlash1 - 32)) | (1 << (bitmark.BitFlash - 32)) | (1 << (bitmark.BitArticle - 32)) | (1 << (bitmark.BitChat - 32)) | (1 << (bitmark.BitConv - 32)) | (1 << (bitmark.BitBotint - 32)) | (1 << (bitmark.BitSelfassess - 32)) | (1 << (bitmark.BitRating - 32)) | (1 << (bitmark.BitSurvey - 32)) | (1 << (bitmark.BitSurvey1 - 32)) | (1 << (bitmark.BitSurveyanon - 32)) | (1 << (bitmark.BitSurveyanon1 - 32)) | (1 << (bitmark.OPESC - 32)) | (1 << (bitmark.OPDANGLE - 32)) | (1 << (bitmark.OPQ - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (bitmark.OPS - 65)) | (1 << (bitmark.COLON - 65)) | (1 << (bitmark.AMP - 65)) | (1 << (bitmark.Greater - 65)) | (1 << (bitmark.Less - 65)) | (1 << (bitmark.LIST_LINE - 65)) | (1 << (bitmark.EMP1 - 65)) | (1 << (bitmark.EMP2 - 65)) | (1 << (bitmark.EMP3 - 65)) | (1 << (bitmark.NOTE - 65)) | (1 << (bitmark.REM - 65)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (bitmark.NUMERIC - 99)) | (1 << (bitmark.STRING - 99)) | (1 << (bitmark.SP - 99)) | (1 << (bitmark.SENTENCE - 99)) | (1 << (bitmark.AtReference - 99)))) !== 0));
                    this.state = 362;
                    this.match(bitmark.EOF);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 2, bitmark.RULE_bitmark_);
            try {
                this.state = 366;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 364;
                            this.bit();
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 365;
                            this.lines();
                        }
                        break;
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        bit() {
            let _localctx = new BitContext(this._ctx, this.state);
            this.enterRule(_localctx, 4, bitmark.RULE_bit);
            try {
                this.state = 424;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.BitBook:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 368;
                            this.book();
                        }
                        break;
                    case bitmark.BitChapter:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 369;
                            this.chapter();
                        }
                        break;
                    case bitmark.LIST_LINE:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 370;
                            this.listline_();
                        }
                        break;
                    case bitmark.EMP1:
                    case bitmark.EMP2:
                    case bitmark.EMP3:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 371;
                            this.titlestar_();
                        }
                        break;
                    case bitmark.REM:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 372;
                            this.remark_();
                        }
                        break;
                    case bitmark.AtReference:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 373;
                            this.reference();
                        }
                        break;
                    case bitmark.BitSummary:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 374;
                            this.summary();
                        }
                        break;
                    case bitmark.BitToc:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 375;
                            this.toc();
                        }
                        break;
                    case bitmark.BitAlias:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 376;
                            this.bit_alias();
                        }
                        break;
                    case bitmark.BitIntlink:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 377;
                            this.internal_link();
                        }
                        break;
                    case bitmark.OPDANGLE:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 378;
                            this.anchor();
                        }
                        break;
                    case bitmark.BitGroups:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 379;
                            this.group_born();
                        }
                        break;
                    case bitmark.BitGroupt:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 380;
                            this.group_died();
                        }
                        break;
                    case bitmark.BitCloze:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 381;
                            this.cloze();
                        }
                        break;
                    case bitmark.BitClozeinstgrp:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 382;
                            this.cloze_instruction_grouped();
                        }
                        break;
                    case bitmark.BitClozesolgrp:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 383;
                            this.cloze_solution_grouped();
                        }
                        break;
                    case bitmark.BitClozeandmulti:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 384;
                            this.cloze_and_multiple_choice_text();
                        }
                        break;
                    case bitmark.BitMultichoice:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 385;
                            this.multiple_choice();
                        }
                        break;
                    case bitmark.BitMultichoice1:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 386;
                            this.multiple_choice_1();
                        }
                        break;
                    case bitmark.BitMultichoisetext:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 387;
                            this.multiple_choice_text();
                        }
                        break;
                    case bitmark.BitMultiresp:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 388;
                            this.multiple_response();
                        }
                        break;
                    case bitmark.BitMultiresp1:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 389;
                            this.multiple_response_1();
                        }
                        break;
                    case bitmark.BitEssay:
                        this.enterOuterAlt(_localctx, 23);
                        {
                            this.state = 390;
                            this.essay();
                        }
                        break;
                    case bitmark.BitInterview:
                        this.enterOuterAlt(_localctx, 24);
                        {
                            this.state = 391;
                            this.interview();
                        }
                        break;
                    case bitmark.BitInterviewinstgrp:
                        this.enterOuterAlt(_localctx, 25);
                        {
                            this.state = 392;
                            this.interview_instruction_grouped();
                        }
                        break;
                    case bitmark.BitMatch:
                        this.enterOuterAlt(_localctx, 26);
                        {
                            this.state = 393;
                            this.match_();
                        }
                        break;
                    case bitmark.BitMatchall:
                        this.enterOuterAlt(_localctx, 27);
                        {
                            this.state = 394;
                            this.match_all();
                        }
                        break;
                    case bitmark.BitMatchallrev:
                        this.enterOuterAlt(_localctx, 28);
                        {
                            this.state = 395;
                            this.match_all_reverse();
                        }
                        break;
                    case bitmark.BitMatchrev:
                        this.enterOuterAlt(_localctx, 29);
                        {
                            this.state = 396;
                            this.match_reverse();
                        }
                        break;
                    case bitmark.BitMatchpic:
                        this.enterOuterAlt(_localctx, 30);
                        {
                            this.state = 397;
                            this.match_picture();
                        }
                        break;
                    case bitmark.BitMatchaudio:
                        this.enterOuterAlt(_localctx, 31);
                        {
                            this.state = 398;
                            this.match_audio();
                        }
                        break;
                    case bitmark.BitMatchsolgrp:
                        this.enterOuterAlt(_localctx, 32);
                        {
                            this.state = 399;
                            this.match_solution_grouped();
                        }
                        break;
                    case bitmark.BitTruefalse1:
                        this.enterOuterAlt(_localctx, 33);
                        {
                            this.state = 400;
                            this.true_false_1();
                        }
                        break;
                    case bitmark.BitTruefalse:
                        this.enterOuterAlt(_localctx, 34);
                        {
                            this.state = 401;
                            this.true_false();
                        }
                        break;
                    case bitmark.BitSequence:
                        this.enterOuterAlt(_localctx, 35);
                        {
                            this.state = 402;
                            this.sequence();
                        }
                        break;
                    case bitmark.BitCorrection:
                        this.enterOuterAlt(_localctx, 36);
                        {
                            this.state = 403;
                            this.correction();
                        }
                        break;
                    case bitmark.BitMark:
                        this.enterOuterAlt(_localctx, 37);
                        {
                            this.state = 404;
                            this.mark_();
                        }
                        break;
                    case bitmark.BitDocup:
                        this.enterOuterAlt(_localctx, 38);
                        {
                            this.state = 405;
                            this.document_upload();
                        }
                        break;
                    case bitmark.BitTakepic:
                        this.enterOuterAlt(_localctx, 39);
                        {
                            this.state = 406;
                            this.take_picture();
                        }
                        break;
                    case bitmark.BitRecaud:
                        this.enterOuterAlt(_localctx, 40);
                        {
                            this.state = 407;
                            this.record_audio();
                        }
                        break;
                    case bitmark.BitPrepnote:
                        this.enterOuterAlt(_localctx, 41);
                        {
                            this.state = 408;
                            this.preparation_note();
                        }
                        break;
                    case bitmark.BitAssign:
                        this.enterOuterAlt(_localctx, 42);
                        {
                            this.state = 409;
                            this.assignment();
                        }
                        break;
                    case bitmark.BitArticle:
                        this.enterOuterAlt(_localctx, 43);
                        {
                            this.state = 410;
                            this.article();
                        }
                        break;
                    case bitmark.BitArticleattach:
                        this.enterOuterAlt(_localctx, 44);
                        {
                            this.state = 411;
                            this.article_attachment();
                        }
                        break;
                    case bitmark.BitFlash:
                        this.enterOuterAlt(_localctx, 45);
                        {
                            this.state = 412;
                            this.flashcard();
                        }
                        break;
                    case bitmark.BitFlash1:
                        this.enterOuterAlt(_localctx, 46);
                        {
                            this.state = 413;
                            this.flashcard_1();
                        }
                        break;
                    case bitmark.BitChat:
                        this.enterOuterAlt(_localctx, 47);
                        {
                            this.state = 414;
                            this.chat();
                        }
                        break;
                    case bitmark.BitConv:
                        this.enterOuterAlt(_localctx, 48);
                        {
                            this.state = 415;
                            this.conversation();
                        }
                        break;
                    case bitmark.BitBotint:
                        this.enterOuterAlt(_localctx, 49);
                        {
                            this.state = 416;
                            this.bot_interview();
                        }
                        break;
                    case bitmark.BitSelfassess:
                        this.enterOuterAlt(_localctx, 50);
                        {
                            this.state = 417;
                            this.self_assessment();
                        }
                        break;
                    case bitmark.BitRating:
                        this.enterOuterAlt(_localctx, 51);
                        {
                            this.state = 418;
                            this.rating();
                        }
                        break;
                    case bitmark.BitSurvey:
                        this.enterOuterAlt(_localctx, 52);
                        {
                            this.state = 419;
                            this.survey();
                        }
                        break;
                    case bitmark.BitSurvey1:
                        this.enterOuterAlt(_localctx, 53);
                        {
                            this.state = 420;
                            this.survey_1();
                        }
                        break;
                    case bitmark.BitSurveyanon:
                        this.enterOuterAlt(_localctx, 54);
                        {
                            this.state = 421;
                            this.survey_anonymous();
                        }
                        break;
                    case bitmark.BitSurveyanon1:
                        this.enterOuterAlt(_localctx, 55);
                        {
                            this.state = 422;
                            this.survey_anonymous_1();
                        }
                        break;
                    case bitmark.OPQ:
                        this.enterOuterAlt(_localctx, 56);
                        {
                            this.state = 423;
                            this.hint();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        book() {
            let _localctx = new BookContext(this._ctx, this.state);
            this.enterRule(_localctx, 6, bitmark.RULE_book);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 426;
                    this.match(bitmark.BitBook);
                    this.state = 428;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.ColonCollection || _la === bitmark.ColonBook) {
                        {
                            this.state = 427;
                            _la = this._input.LA(1);
                            if (!(_la === bitmark.ColonCollection || _la === bitmark.ColonBook)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 431;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.SP) {
                        {
                            this.state = 430;
                            this.sp();
                        }
                    }
                    this.state = 433;
                    this.cl();
                    this.state = 437;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 434;
                                    this.nl();
                                }
                            }
                        }
                        this.state = 439;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                    }
                    this.state = 440;
                    this.title_etc();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        chapter() {
            let _localctx = new ChapterContext(this._ctx, this.state);
            this.enterRule(_localctx, 8, bitmark.RULE_chapter);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 442;
                    this.match(bitmark.BitChapter);
                    this.state = 450;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.COLON) {
                        {
                            this.state = 443;
                            this.match(bitmark.COLON);
                            this.state = 446;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 446;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 444;
                                                        this.s_and_w();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 445;
                                                        this.match(bitmark.COLON);
                                                    }
                                                    break;
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                                this.state = 448;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                        }
                    }
                    this.state = 453;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.SP) {
                        {
                            this.state = 452;
                            this.sp();
                        }
                    }
                    this.state = 455;
                    this.cl();
                    this.state = 456;
                    this.title_etc();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 10, bitmark.RULE_title);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 458;
                    this.match(bitmark.OPHASH);
                    this.state = 460;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 459;
                                this.s_and_w();
                            }
                        }
                        this.state = 462;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                    this.state = 464;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        subtitle() {
            let _localctx = new SubtitleContext(this._ctx, this.state);
            this.enterRule(_localctx, 12, bitmark.RULE_subtitle);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 466;
                    this.match(bitmark.OPHASH2);
                    this.state = 468;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 467;
                                this.s_and_w();
                            }
                        }
                        this.state = 470;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                    this.state = 472;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 14, bitmark.RULE_progress);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 474;
                    this.match(bitmark.AtProgress);
                    this.state = 475;
                    this.s_and_w();
                    this.state = 476;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 16, bitmark.RULE_reference);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 478;
                    this.match(bitmark.AtReference);
                    this.state = 482;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 482;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 479;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 480;
                                        this.match(bitmark.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 481;
                                        this.nl();
                                    }
                                    break;
                            }
                        }
                        this.state = 484;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.NL - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                    this.state = 486;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        toc() {
            let _localctx = new TocContext(this._ctx, this.state);
            this.enterRule(_localctx, 18, bitmark.RULE_toc);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 488;
                    this.match(bitmark.BitToc);
                    this.state = 490;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0)) {
                        {
                            this.state = 489;
                            this.s_and_w();
                        }
                    }
                    this.state = 492;
                    this.cl();
                    this.state = 493;
                    this.nl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        summary() {
            let _localctx = new SummaryContext(this._ctx, this.state);
            this.enterRule(_localctx, 20, bitmark.RULE_summary);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 495;
                    this.match(bitmark.BitSummary);
                    this.state = 497;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.SP) {
                        {
                            this.state = 496;
                            this.sp();
                        }
                    }
                    this.state = 499;
                    this.cl();
                    this.state = 503;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 500;
                                    this.nl();
                                }
                            }
                        }
                        this.state = 505;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                    }
                    this.state = 506;
                    this.title_etc();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        internal_link() {
            let _localctx = new Internal_linkContext(this._ctx, this.state);
            this.enterRule(_localctx, 22, bitmark.RULE_internal_link);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 508;
                    this.match(bitmark.BitIntlink);
                    this.state = 509;
                    this.cl();
                    this.state = 519;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 513;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmark.NL) {
                                        {
                                            {
                                                this.state = 510;
                                                this.nl();
                                            }
                                        }
                                        this.state = 515;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 516;
                                    this.bitElem();
                                }
                            }
                        }
                        this.state = 521;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        bit_alias() {
            let _localctx = new Bit_aliasContext(this._ctx, this.state);
            this.enterRule(_localctx, 24, bitmark.RULE_bit_alias);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 522;
                    this.match(bitmark.BitAlias);
                    this.state = 523;
                    this.cl();
                    this.state = 524;
                    this.alias();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        title_etc() {
            let _localctx = new Title_etcContext(this._ctx, this.state);
            this.enterRule(_localctx, 26, bitmark.RULE_title_etc);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 543;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 527;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === bitmark.NL) {
                                        {
                                            this.state = 526;
                                            this.nl();
                                        }
                                    }
                                    this.state = 537;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmark.OPHASH:
                                            {
                                                this.state = 529;
                                                this.title();
                                            }
                                            break;
                                        case bitmark.OPHASH2:
                                            {
                                                this.state = 530;
                                                this.subtitle();
                                            }
                                            break;
                                        case bitmark.OPA:
                                            {
                                                this.state = 531;
                                                this.atdef();
                                            }
                                            break;
                                        case bitmark.OPC:
                                            {
                                                this.state = 532;
                                                this.item();
                                            }
                                            break;
                                        case bitmark.OPB:
                                            {
                                                this.state = 533;
                                                this.instruction();
                                            }
                                            break;
                                        case bitmark.OPRANGLES:
                                        case bitmark.OPRANGLEL:
                                            {
                                                this.state = 534;
                                                this.alias();
                                            }
                                            break;
                                        case bitmark.OPDANGLE:
                                            {
                                                this.state = 535;
                                                this.anchor();
                                            }
                                            break;
                                        case bitmark.AtProgress:
                                            {
                                                this.state = 536;
                                                this.progress();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                    this.state = 539;
                                    this.nl();
                                }
                            }
                        }
                        this.state = 545;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        group_born() {
            let _localctx = new Group_bornContext(this._ctx, this.state);
            this.enterRule(_localctx, 28, bitmark.RULE_group_born);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 546;
                    this.match(bitmark.BitGroups);
                    this.state = 547;
                    this.cl();
                    {
                        this.state = 548;
                        this.opr();
                        this.state = 549;
                        this.s_and_w();
                        this.state = 550;
                        this.cl();
                    }
                    this.state = 552;
                    this.nl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        group_died() {
            let _localctx = new Group_diedContext(this._ctx, this.state);
            this.enterRule(_localctx, 30, bitmark.RULE_group_died);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 554;
                    this.match(bitmark.BitGroupt);
                    this.state = 555;
                    this.cl();
                    {
                        this.state = 556;
                        this.opr();
                        this.state = 557;
                        this.s_and_w();
                        this.state = 558;
                        this.cl();
                    }
                    this.state = 560;
                    this.nl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 32, bitmark.RULE_cloze);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 562;
                    this.match(bitmark.BitCloze);
                    this.state = 563;
                    this.format();
                    this.state = 564;
                    this.cl();
                    this.state = 568;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 565;
                                this.nl();
                            }
                        }
                        this.state = 570;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 578;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 571;
                                        this.bitElem();
                                        this.state = 575;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 572;
                                                        this.nl();
                                                    }
                                                }
                                            }
                                            this.state = 577;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 580;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 34, bitmark.RULE_bitElem);
            try {
                let _alt;
                this.state = 627;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 582;
                            this.titlestar_();
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 583;
                            this.note_();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 584;
                            this.remark_();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 585;
                            this.help_();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 586;
                            this.highlight_();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 587;
                            this.annotate_();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 588;
                            this.annotate_image_();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 589;
                            this.ins_();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 590;
                            this.del_();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 591;
                            this.listline_();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 592;
                            this.gap();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 593;
                            this.atdef();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 594;
                            this.reference();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 595;
                            this.item();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 596;
                            this.instruction();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 597;
                            this.hint();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 598;
                            this.s_and_w();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 599;
                            this.example();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 600;
                            this.bool_label();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 601;
                            this.imagebit();
                            this.state = 605;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 602;
                                            this.nl();
                                        }
                                    }
                                }
                                this.state = 607;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                            }
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 608;
                            this.audiobit();
                            this.state = 612;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 609;
                                            this.nl();
                                        }
                                    }
                                }
                                this.state = 614;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                            }
                        }
                        break;
                    case 22:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 615;
                            this.videobit();
                            this.state = 619;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 616;
                                            this.nl();
                                        }
                                    }
                                }
                                this.state = 621;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                            }
                        }
                        break;
                    case 23:
                        this.enterOuterAlt(_localctx, 23);
                        {
                            this.state = 622;
                            this.articlebit();
                        }
                        break;
                    case 24:
                        this.enterOuterAlt(_localctx, 24);
                        {
                            this.state = 623;
                            this.documentbit();
                        }
                        break;
                    case 25:
                        this.enterOuterAlt(_localctx, 25);
                        {
                            this.state = 624;
                            this.appbit();
                        }
                        break;
                    case 26:
                        this.enterOuterAlt(_localctx, 26);
                        {
                            this.state = 625;
                            this.alias();
                        }
                        break;
                    case 27:
                        this.enterOuterAlt(_localctx, 27);
                        {
                            this.state = 626;
                            this.sp();
                        }
                        break;
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 36, bitmark.RULE_cloze_instruction_grouped);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 629;
                    this.match(bitmark.BitClozeinstgrp);
                    this.state = 630;
                    this.format();
                    this.state = 631;
                    this.cl();
                    this.state = 633;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                        case 1:
                            {
                                this.state = 632;
                                this.nl();
                            }
                            break;
                    }
                    this.state = 638;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                        case 1:
                            {
                                this.state = 635;
                                this.item();
                                this.state = 636;
                                this.nl();
                            }
                            break;
                    }
                    this.state = 641;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                        case 1:
                            {
                                this.state = 640;
                                this.instruction();
                            }
                            break;
                    }
                    this.state = 646;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 643;
                                    this.nl();
                                }
                            }
                        }
                        this.state = 648;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                    }
                    this.state = 658;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    {
                                        this.state = 649;
                                        this.bitElem();
                                        this.state = 653;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 650;
                                                        this.nl();
                                                    }
                                                }
                                            }
                                            this.state = 655;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                                        }
                                    }
                                }
                            }
                        }
                        this.state = 660;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 38, bitmark.RULE_cloze_solution_grouped);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 661;
                    this.match(bitmark.BitClozesolgrp);
                    this.state = 662;
                    this.format();
                    this.state = 663;
                    this.cl();
                    this.state = 665;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                        case 1:
                            {
                                this.state = 664;
                                this.nl();
                            }
                            break;
                    }
                    this.state = 670;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                        case 1:
                            {
                                this.state = 667;
                                this.item();
                                this.state = 668;
                                this.nl();
                            }
                            break;
                    }
                    this.state = 673;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                        case 1:
                            {
                                this.state = 672;
                                this.instruction();
                            }
                            break;
                    }
                    this.state = 678;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 675;
                                    this.nl();
                                }
                            }
                        }
                        this.state = 680;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                    }
                    this.state = 690;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    {
                                        this.state = 681;
                                        this.bitElem();
                                        this.state = 685;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 682;
                                                        this.nl();
                                                    }
                                                }
                                            }
                                            this.state = 687;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                                        }
                                    }
                                }
                            }
                        }
                        this.state = 692;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 40, bitmark.RULE_gap);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 693;
                    this.single_gap();
                    this.state = 700;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 698;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case bitmark.OPU:
                                        {
                                            this.state = 694;
                                            this.single_gap();
                                        }
                                        break;
                                    case bitmark.OPB:
                                        {
                                            this.state = 695;
                                            this.instruction();
                                        }
                                        break;
                                    case bitmark.OPQ:
                                        {
                                            this.state = 696;
                                            this.hint();
                                        }
                                        break;
                                    case bitmark.AtExamplecol:
                                    case bitmark.AtExamplecl:
                                        {
                                            this.state = 697;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 702;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 42, bitmark.RULE_single_gap);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 703;
                    this.match(bitmark.OPU);
                    this.state = 707;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                        case 1:
                            {
                                this.state = 704;
                                this.numeric();
                            }
                            break;
                        case 2:
                            {
                                this.state = 705;
                                this.string();
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 712;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0)) {
                        {
                            {
                                this.state = 709;
                                this.s_and_w();
                            }
                        }
                        this.state = 714;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 715;
                    this.clnsp();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 44, bitmark.RULE_instruction);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 717;
                    this.match(bitmark.OPB);
                    this.state = 719;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                        case 1:
                            {
                                this.state = 718;
                                this.s_and_w();
                            }
                            break;
                    }
                    this.state = 738;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0)) {
                        {
                            {
                                this.state = 721;
                                this.s_and_w();
                                this.state = 727;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 722;
                                                this.nl();
                                                this.state = 723;
                                                this.sp();
                                            }
                                        }
                                    }
                                    this.state = 729;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                                }
                                this.state = 733;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmark.NL) {
                                    {
                                        {
                                            this.state = 730;
                                            this.nl();
                                        }
                                    }
                                    this.state = 735;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 740;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 741;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 46, bitmark.RULE_hint);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 743;
                    this.match(bitmark.OPQ);
                    this.state = 745;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 744;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === bitmark.CL)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 747;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmark.BitBook) | (1 << bitmark.BitChapter) | (1 << bitmark.BitToc) | (1 << bitmark.BitSummary) | (1 << bitmark.BitIntlink) | (1 << bitmark.BitAlias) | (1 << bitmark.BitGroups) | (1 << bitmark.BitGroupt) | (1 << bitmark.BitCloze) | (1 << bitmark.BitClozeinstgrp) | (1 << bitmark.BitClozesolgrp) | (1 << bitmark.BitMultichoice1) | (1 << bitmark.BitMultichoice) | (1 << bitmark.BitMultiresp1) | (1 << bitmark.BitMultiresp) | (1 << bitmark.BitMultichoisetext) | (1 << bitmark.BitClozeandmulti) | (1 << bitmark.BitEssay) | (1 << bitmark.BitArticleattach) | (1 << bitmark.BitInterview) | (1 << bitmark.BitInterviewinstgrp) | (1 << bitmark.BitMatch) | (1 << bitmark.BitMatchall) | (1 << bitmark.BitMatchrev) | (1 << bitmark.BitMatchallrev) | (1 << bitmark.BitMatchpic) | (1 << bitmark.BitMatchaudio) | (1 << bitmark.BitMatchsolgrp) | (1 << bitmark.BitTruefalse1) | (1 << bitmark.BitTruefalse) | (1 << bitmark.BitSequence))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmark.BitCorrection - 32)) | (1 << (bitmark.BitMark - 32)) | (1 << (bitmark.BitDocup - 32)) | (1 << (bitmark.BitTakepic - 32)) | (1 << (bitmark.BitRecaud - 32)) | (1 << (bitmark.BitPrepnote - 32)) | (1 << (bitmark.BitAssign - 32)) | (1 << (bitmark.BitFlash1 - 32)) | (1 << (bitmark.BitFlash - 32)) | (1 << (bitmark.BitArticle - 32)) | (1 << (bitmark.BitChat - 32)) | (1 << (bitmark.BitConv - 32)) | (1 << (bitmark.BitBotint - 32)) | (1 << (bitmark.BitSelfassess - 32)) | (1 << (bitmark.BitRating - 32)) | (1 << (bitmark.BitSurvey - 32)) | (1 << (bitmark.BitSurvey1 - 32)) | (1 << (bitmark.BitSurveyanon - 32)) | (1 << (bitmark.BitSurveyanon1 - 32)) | (1 << (bitmark.OPDOLL - 32)) | (1 << (bitmark.OPBUL - 32)) | (1 << (bitmark.OPESC - 32)) | (1 << (bitmark.OPAMP - 32)) | (1 << (bitmark.OPRANGLES - 32)) | (1 << (bitmark.OPRANGLEL - 32)) | (1 << (bitmark.OPDANGLE - 32)) | (1 << (bitmark.OPD - 32)) | (1 << (bitmark.OPU - 32)) | (1 << (bitmark.OPB - 32)) | (1 << (bitmark.OPQ - 32)) | (1 << (bitmark.OPA - 32)) | (1 << (bitmark.OPP - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmark.OPM - 64)) | (1 << (bitmark.OPS - 64)) | (1 << (bitmark.OPR - 64)) | (1 << (bitmark.OPC - 64)) | (1 << (bitmark.OPHASH - 64)) | (1 << (bitmark.OPHASH2 - 64)) | (1 << (bitmark.OP - 64)) | (1 << (bitmark.COLON - 64)) | (1 << (bitmark.AMP - 64)) | (1 << (bitmark.DBLCOLON - 64)) | (1 << (bitmark.PLUS - 64)) | (1 << (bitmark.DotAt - 64)) | (1 << (bitmark.Greater - 64)) | (1 << (bitmark.Less - 64)) | (1 << (bitmark.EQ - 64)) | (1 << (bitmark.EQ2 - 64)) | (1 << (bitmark.OR - 64)) | (1 << (bitmark.HSPL - 64)) | (1 << (bitmark.HSPL2 - 64)) | (1 << (bitmark.SSPL - 64)) | (1 << (bitmark.SSPL2 - 64)) | (1 << (bitmark.LIST_LINE - 64)) | (1 << (bitmark.EMP1 - 64)) | (1 << (bitmark.EMP2 - 64)) | (1 << (bitmark.EMP3 - 64)) | (1 << (bitmark.NOTE - 64)) | (1 << (bitmark.INS - 64)) | (1 << (bitmark.DEL - 64)) | (1 << (bitmark.REM - 64)) | (1 << (bitmark.HELP - 64)) | (1 << (bitmark.HIGH - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmark.ANNO - 96)) | (1 << (bitmark.ANNO_IM - 96)) | (1 << (bitmark.NOTCL - 96)) | (1 << (bitmark.NUMERIC - 96)) | (1 << (bitmark.STRING - 96)) | (1 << (bitmark.SP - 96)) | (1 << (bitmark.NL - 96)) | (1 << (bitmark.SENTENCE - 96)) | (1 << (bitmark.COMMENT - 96)) | (1 << (bitmark.AtProgress - 96)) | (1 << (bitmark.AtReference - 96)) | (1 << (bitmark.AtExamplecol - 96)) | (1 << (bitmark.AtExamplecl - 96)) | (1 << (bitmark.AtLonganswer - 96)) | (1 << (bitmark.AtShortanswer - 96)) | (1 << (bitmark.AtLabeltrue - 96)) | (1 << (bitmark.AtLabelfalse - 96)) | (1 << (bitmark.AtPoints - 96)) | (1 << (bitmark.Http - 96)) | (1 << (bitmark.Https - 96)) | (1 << (bitmark.ColonCollection - 96)) | (1 << (bitmark.ColonBook - 96)) | (1 << (bitmark.AmpArticleAtt - 96)) | (1 << (bitmark.AmpArticle - 96)) | (1 << (bitmark.BitmarkMinus - 96)) | (1 << (bitmark.BitmarkPlus - 96)) | (1 << (bitmark.ColonText - 96)) | (1 << (bitmark.Image - 96)) | (1 << (bitmark.ImageOnline - 96)) | (1 << (bitmark.ImageZoom - 96)) | (1 << (bitmark.ImageWAudio - 96)) | (1 << (bitmark.Audio - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmark.AudioOnline - 128)) | (1 << (bitmark.Video - 128)) | (1 << (bitmark.VideoOnline - 128)) | (1 << (bitmark.Article - 128)) | (1 << (bitmark.ArticleOnline - 128)) | (1 << (bitmark.ArticleAttachmt - 128)) | (1 << (bitmark.Document - 128)) | (1 << (bitmark.DocumentOnline - 128)) | (1 << (bitmark.App - 128)) | (1 << (bitmark.BASIC - 128)) | (1 << (bitmark.JPG - 128)) | (1 << (bitmark.PNG - 128)) | (1 << (bitmark.GIF - 128)) | (1 << (bitmark.SVG - 128)) | (1 << (bitmark.MP2 - 128)) | (1 << (bitmark.MP3 - 128)) | (1 << (bitmark.MP4 - 128)) | (1 << (bitmark.FLV - 128)) | (1 << (bitmark.WMV - 128)) | (1 << (bitmark.MPEG - 128)) | (1 << (bitmark.MPG - 128)) | (1 << (bitmark.TEL - 128)) | (1 << (bitmark.OPATALT - 128)) | (1 << (bitmark.OPAMARK - 128)) | (1 << (bitmark.DotArticleAtt - 128)) | (1 << (bitmark.ShowInIndex - 128)))) !== 0));
                    this.state = 749;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 48, bitmark.RULE_choices);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 754;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                        case 1:
                            {
                                this.state = 751;
                                this.choice_plus();
                            }
                            break;
                        case 2:
                            {
                                this.state = 752;
                                this.choice_minus();
                            }
                            break;
                        case 3:
                            {
                                this.state = 753;
                                this.choice_star();
                            }
                            break;
                    }
                    this.state = 770;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 757;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === bitmark.NL) {
                                        {
                                            this.state = 756;
                                            this.nl();
                                        }
                                    }
                                    this.state = 760;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === bitmark.SP) {
                                        {
                                            this.state = 759;
                                            this.sp();
                                        }
                                    }
                                    this.state = 766;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 762;
                                                this.choice_plus();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 763;
                                                this.choice_minus();
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 764;
                                                this.choice_star();
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 765;
                                                this.example();
                                            }
                                            break;
                                    }
                                }
                            }
                        }
                        this.state = 772;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 50, bitmark.RULE_choice_plus);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 774;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPC) {
                        {
                            this.state = 773;
                            this.item();
                        }
                    }
                    this.state = 776;
                    this.match(bitmark.OPP);
                    this.state = 778;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 777;
                                this.s_and_w();
                            }
                        }
                        this.state = 780;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                    this.state = 782;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 52, bitmark.RULE_choice_minus);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 785;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPC) {
                        {
                            this.state = 784;
                            this.item();
                        }
                    }
                    this.state = 787;
                    this.match(bitmark.OPM);
                    this.state = 789;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 788;
                                this.s_and_w();
                            }
                        }
                        this.state = 791;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                    this.state = 793;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 54, bitmark.RULE_choice_star);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 796;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPC) {
                        {
                            this.state = 795;
                            this.item();
                        }
                    }
                    this.state = 798;
                    this.match(bitmark.OPR);
                    this.state = 800;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 799;
                                this.s_and_w();
                            }
                        }
                        this.state = 802;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                    this.state = 804;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        multiple_choice_1() {
            let _localctx = new Multiple_choice_1Context(this._ctx, this.state);
            this.enterRule(_localctx, 56, bitmark.RULE_multiple_choice_1);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 806;
                    this.match(bitmark.BitMultichoice1);
                    this.state = 807;
                    this.format();
                    this.state = 808;
                    this.cl();
                    this.state = 809;
                    this.nl();
                    this.state = 819;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 810;
                                    this.bitElem();
                                    this.state = 814;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmark.NL) {
                                        {
                                            {
                                                this.state = 811;
                                                this.nl();
                                            }
                                        }
                                        this.state = 816;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                        }
                        this.state = 821;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                    }
                    this.state = 822;
                    this.choices();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        multiple_choice() {
            let _localctx = new Multiple_choiceContext(this._ctx, this.state);
            this.enterRule(_localctx, 58, bitmark.RULE_multiple_choice);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 824;
                    this.match(bitmark.BitMultichoice);
                    this.state = 825;
                    this.format();
                    this.state = 826;
                    this.cl();
                    this.state = 827;
                    this.nl();
                    this.state = 834;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 828;
                                    this.bitElem();
                                    this.state = 830;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 829;
                                                this.nl();
                                            }
                                            break;
                                    }
                                }
                            }
                        }
                        this.state = 836;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                    }
                    this.state = 850;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 839;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case bitmark.HSPL:
                                            case bitmark.HSPL2:
                                                {
                                                    this.state = 837;
                                                    this.hspl();
                                                }
                                                break;
                                            case bitmark.NL:
                                                {
                                                    this.state = 838;
                                                    this.nl();
                                                }
                                                break;
                                            case bitmark.OPESC:
                                            case bitmark.OPAMP:
                                            case bitmark.OPRANGLES:
                                            case bitmark.OPRANGLEL:
                                            case bitmark.OPU:
                                            case bitmark.OPB:
                                            case bitmark.OPQ:
                                            case bitmark.OPA:
                                            case bitmark.OPP:
                                            case bitmark.OPM:
                                            case bitmark.OPS:
                                            case bitmark.OPR:
                                            case bitmark.OPC:
                                            case bitmark.COLON:
                                            case bitmark.AMP:
                                            case bitmark.Greater:
                                            case bitmark.Less:
                                            case bitmark.LIST_LINE:
                                            case bitmark.EMP1:
                                            case bitmark.EMP2:
                                            case bitmark.EMP3:
                                            case bitmark.NOTE:
                                            case bitmark.INS:
                                            case bitmark.DEL:
                                            case bitmark.REM:
                                            case bitmark.HELP:
                                            case bitmark.HIGH:
                                            case bitmark.ANNO:
                                            case bitmark.ANNO_IM:
                                            case bitmark.NUMERIC:
                                            case bitmark.STRING:
                                            case bitmark.SP:
                                            case bitmark.SENTENCE:
                                            case bitmark.AtReference:
                                            case bitmark.AtExamplecol:
                                            case bitmark.AtExamplecl:
                                            case bitmark.AtLabeltrue:
                                            case bitmark.AtLabelfalse:
                                                break;
                                            default:
                                                break;
                                        }
                                        this.state = 847;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 842;
                                                    this._errHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                                                        case 1:
                                                            {
                                                                this.state = 841;
                                                                this.item();
                                                            }
                                                            break;
                                                    }
                                                    this.state = 844;
                                                    this.bitElem();
                                                    this.state = 845;
                                                    this.nl();
                                                }
                                                break;
                                        }
                                        this.state = 849;
                                        this.choices();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 852;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 856;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case bitmark.HSPL:
                        case bitmark.HSPL2:
                            {
                                this.state = 854;
                                this.hspl();
                            }
                            break;
                        case bitmark.NL:
                            {
                                this.state = 855;
                                this.nl();
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 861;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                        case 1:
                            {
                                this.state = 858;
                                this.bitElem();
                                this.state = 859;
                                this.nl();
                            }
                            break;
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        multiple_response_1() {
            let _localctx = new Multiple_response_1Context(this._ctx, this.state);
            this.enterRule(_localctx, 60, bitmark.RULE_multiple_response_1);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 863;
                    this.match(bitmark.BitMultiresp1);
                    this.state = 864;
                    this.format();
                    this.state = 865;
                    this.cl();
                    this.state = 866;
                    this.nl();
                    this.state = 871;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 867;
                                        this.bitElem();
                                        this.state = 869;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === bitmark.NL) {
                                            {
                                                this.state = 868;
                                                this.nl();
                                            }
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 873;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 875;
                    this.choices();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        multiple_response() {
            let _localctx = new Multiple_responseContext(this._ctx, this.state);
            this.enterRule(_localctx, 62, bitmark.RULE_multiple_response);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 877;
                    this.match(bitmark.BitMultiresp);
                    this.state = 878;
                    this.format();
                    this.state = 879;
                    this.cl();
                    this.state = 880;
                    this.nl();
                    this.state = 890;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 881;
                                    this.bitElem();
                                    this.state = 885;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 882;
                                                    this.nl();
                                                }
                                            }
                                        }
                                        this.state = 887;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 892;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                    }
                    this.state = 912;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 895;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case bitmark.HSPL:
                                            case bitmark.HSPL2:
                                                {
                                                    this.state = 893;
                                                    this.hspl();
                                                }
                                                break;
                                            case bitmark.NL:
                                                {
                                                    this.state = 894;
                                                    this.nl();
                                                }
                                                break;
                                            case bitmark.OPESC:
                                            case bitmark.OPAMP:
                                            case bitmark.OPRANGLES:
                                            case bitmark.OPRANGLEL:
                                            case bitmark.OPU:
                                            case bitmark.OPB:
                                            case bitmark.OPQ:
                                            case bitmark.OPA:
                                            case bitmark.OPP:
                                            case bitmark.OPM:
                                            case bitmark.OPS:
                                            case bitmark.OPR:
                                            case bitmark.OPC:
                                            case bitmark.COLON:
                                            case bitmark.AMP:
                                            case bitmark.Greater:
                                            case bitmark.Less:
                                            case bitmark.LIST_LINE:
                                            case bitmark.EMP1:
                                            case bitmark.EMP2:
                                            case bitmark.EMP3:
                                            case bitmark.NOTE:
                                            case bitmark.INS:
                                            case bitmark.DEL:
                                            case bitmark.REM:
                                            case bitmark.HELP:
                                            case bitmark.HIGH:
                                            case bitmark.ANNO:
                                            case bitmark.ANNO_IM:
                                            case bitmark.NUMERIC:
                                            case bitmark.STRING:
                                            case bitmark.SP:
                                            case bitmark.SENTENCE:
                                            case bitmark.AtReference:
                                            case bitmark.AtExamplecol:
                                            case bitmark.AtExamplecl:
                                            case bitmark.AtLabeltrue:
                                            case bitmark.AtLabelfalse:
                                                break;
                                            default:
                                                break;
                                        }
                                        this.state = 903;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 898;
                                                    this._errHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                                                        case 1:
                                                            {
                                                                this.state = 897;
                                                                this.item();
                                                            }
                                                            break;
                                                    }
                                                    this.state = 900;
                                                    this.bitElem();
                                                    this.state = 901;
                                                    this.nl();
                                                }
                                                break;
                                        }
                                        this.state = 905;
                                        this.choices();
                                        this.state = 909;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 906;
                                                        this.nl();
                                                    }
                                                }
                                            }
                                            this.state = 911;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 914;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 918;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                        case 1:
                            {
                                this.state = 916;
                                this.hspl();
                            }
                            break;
                        case 2:
                            {
                                this.state = 917;
                                this.nl();
                            }
                            break;
                    }
                    this.state = 923;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                        case 1:
                            {
                                this.state = 920;
                                this.bitElem();
                                this.state = 921;
                                this.nl();
                            }
                            break;
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        multiple_choice_text() {
            let _localctx = new Multiple_choice_textContext(this._ctx, this.state);
            this.enterRule(_localctx, 64, bitmark.RULE_multiple_choice_text);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 925;
                    this.match(bitmark.BitMultichoisetext);
                    this.state = 926;
                    this.format();
                    this.state = 927;
                    this.cl();
                    this.state = 928;
                    this.nl();
                    this.state = 938;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 929;
                                    this.bitElem();
                                    this.state = 933;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 930;
                                                    this.nl();
                                                }
                                            }
                                        }
                                        this.state = 935;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 940;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
                    }
                    this.state = 961;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 952;
                                    this._errHandler.sync(this);
                                    _alt = 1;
                                    do {
                                        switch (_alt) {
                                            case 1:
                                                {
                                                    this.state = 952;
                                                    this._errHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                                                        case 1:
                                                            {
                                                                {
                                                                    this.state = 942;
                                                                    this._errHandler.sync(this);
                                                                    _la = this._input.LA(1);
                                                                    if (_la === bitmark.SP) {
                                                                        {
                                                                            this.state = 941;
                                                                            this.sp();
                                                                        }
                                                                    }
                                                                    this.state = 944;
                                                                    this.nl();
                                                                }
                                                            }
                                                            break;
                                                        case 2:
                                                            {
                                                                this.state = 945;
                                                                this.s_and_w();
                                                            }
                                                            break;
                                                        case 3:
                                                            {
                                                                this.state = 947;
                                                                this._errHandler.sync(this);
                                                                _alt = 1;
                                                                do {
                                                                    switch (_alt) {
                                                                        case 1:
                                                                            {
                                                                                {
                                                                                    this.state = 946;
                                                                                    this.sp();
                                                                                }
                                                                            }
                                                                            break;
                                                                        default:
                                                                            throw new NoViableAltException(this);
                                                                    }
                                                                    this.state = 949;
                                                                    this._errHandler.sync(this);
                                                                    _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                                                                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                                                            }
                                                            break;
                                                        case 4:
                                                            {
                                                                this.state = 951;
                                                                this.headed_inline_choices();
                                                            }
                                                            break;
                                                    }
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException(this);
                                        }
                                        this.state = 954;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
                                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                                    this.state = 957;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === bitmark.AtExamplecol || _la === bitmark.AtExamplecl) {
                                        {
                                            this.state = 956;
                                            this.example();
                                        }
                                    }
                                }
                            }
                        }
                        this.state = 963;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 66, bitmark.RULE_headed_inline_choices);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 965;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPS) {
                        {
                            this.state = 964;
                            this.choice_head();
                        }
                    }
                    this.state = 967;
                    this.inline_choices();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        headed_choices() {
            let _localctx = new Headed_choicesContext(this._ctx, this.state);
            this.enterRule(_localctx, 68, bitmark.RULE_headed_choices);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 970;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPS) {
                        {
                            this.state = 969;
                            this.choice_head();
                        }
                    }
                    this.state = 972;
                    this.choices();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 70, bitmark.RULE_choice_head);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 974;
                    this.match(bitmark.OPS);
                    this.state = 975;
                    this.s_and_w();
                    this.state = 976;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 72, bitmark.RULE_inline_choices);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 981;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                        case 1:
                            {
                                this.state = 978;
                                this.choice_plus();
                            }
                            break;
                        case 2:
                            {
                                this.state = 979;
                                this.choice_minus();
                            }
                            break;
                        case 3:
                            {
                                this.state = 980;
                                this.choice_star();
                            }
                            break;
                    }
                    this.state = 988;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 986;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 983;
                                            this.choice_plus();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 984;
                                            this.choice_minus();
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 985;
                                            this.choice_star();
                                        }
                                        break;
                                }
                            }
                        }
                        this.state = 990;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 74, bitmark.RULE_cloze_and_multiple_choice_text);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 991;
                    this.match(bitmark.BitClozeandmulti);
                    this.state = 992;
                    this.format();
                    this.state = 993;
                    this.cl();
                    this.state = 997;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 994;
                                this.nl();
                            }
                        }
                        this.state = 999;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1014;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1014;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1000;
                                                this.bitElem();
                                                this.state = 1004;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                    if (_alt === 1) {
                                                        {
                                                            {
                                                                this.state = 1001;
                                                                this.nl();
                                                            }
                                                        }
                                                    }
                                                    this.state = 1006;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                                                }
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1007;
                                                this.inline_choices();
                                                this.state = 1011;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
                                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                    if (_alt === 1) {
                                                        {
                                                            {
                                                                this.state = 1008;
                                                                this.nl();
                                                            }
                                                        }
                                                    }
                                                    this.state = 1013;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
                                                }
                                            }
                                            break;
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1016;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        essay() {
            let _localctx = new EssayContext(this._ctx, this.state);
            this.enterRule(_localctx, 76, bitmark.RULE_essay);
            let _la;
            try {
                let _alt;
                this.state = 1075;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1018;
                            this.match(bitmark.BitEssay);
                            this.state = 1019;
                            this.format();
                            this.state = 1020;
                            this.cl();
                            this.state = 1021;
                            this.nl();
                            this.state = 1031;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1022;
                                            this.bitElem();
                                            this.state = 1026;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 1023;
                                                            this.nl();
                                                        }
                                                    }
                                                }
                                                this.state = 1028;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                                            }
                                        }
                                    }
                                }
                                this.state = 1033;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                            }
                            this.state = 1046;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1037;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === bitmark.NL) {
                                                {
                                                    {
                                                        this.state = 1034;
                                                        this.nl();
                                                    }
                                                }
                                                this.state = 1039;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 1042;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 1040;
                                                        this.ml_example();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 1041;
                                                        this.bitElem();
                                                    }
                                                    break;
                                            }
                                        }
                                    }
                                }
                                this.state = 1048;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
                            }
                            this.state = 1052;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1049;
                                            this.nl();
                                        }
                                    }
                                }
                                this.state = 1054;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1055;
                            this.match(bitmark.BitEssay);
                            this.state = 1056;
                            this.match(bitmark.AmpArticleAtt);
                            this.state = 1057;
                            this.format();
                            this.state = 1058;
                            this.cl();
                            this.state = 1059;
                            this.nl();
                            this.state = 1069;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1060;
                                            this.bitElem();
                                            this.state = 1064;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 1061;
                                                            this.nl();
                                                        }
                                                    }
                                                }
                                                this.state = 1066;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                                            }
                                        }
                                    }
                                }
                                this.state = 1071;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                            }
                            this.state = 1073;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1072;
                                        this.article_attachment();
                                    }
                                    break;
                            }
                        }
                        break;
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        article_attachment() {
            let _localctx = new Article_attachmentContext(this._ctx, this.state);
            this.enterRule(_localctx, 78, bitmark.RULE_article_attachment);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1077;
                    this.match(bitmark.BitArticleattach);
                    this.state = 1078;
                    this.format();
                    this.state = 1079;
                    this.cl();
                    this.state = 1081;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1080;
                                        this.nl();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1083;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 1097;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPP - 53)) | (1 << (bitmark.OPM - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPR - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 1087;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1085;
                                            this.bitElem();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1086;
                                            this.headed_choices();
                                        }
                                        break;
                                }
                                this.state = 1092;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1089;
                                                this.nl();
                                            }
                                        }
                                    }
                                    this.state = 1094;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                                }
                            }
                        }
                        this.state = 1099;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1101;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1100;
                                        this.nl();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1103;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 1109;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 1107;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case bitmark.AMP:
                                    case bitmark.Greater:
                                    case bitmark.Less:
                                    case bitmark.SENTENCE:
                                        {
                                            this.state = 1105;
                                            this.words();
                                        }
                                        break;
                                    case bitmark.OPP:
                                    case bitmark.OPM:
                                    case bitmark.OPS:
                                    case bitmark.OPR:
                                    case bitmark.OPC:
                                        {
                                            this.state = 1106;
                                            this.headed_choices();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 1111;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 80, bitmark.RULE_ml_example);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1112;
                    this.match(bitmark.AtExamplecol);
                    this.state = 1114;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.NL) {
                        {
                            this.state = 1113;
                            this.nl();
                        }
                    }
                    this.state = 1116;
                    this.lines();
                    this.state = 1118;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.NL) {
                        {
                            this.state = 1117;
                            this.nl();
                        }
                    }
                    this.state = 1120;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 82, bitmark.RULE_example);
            try {
                this.state = 1127;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1122;
                            this.match(bitmark.AtExamplecl);
                        }
                        break;
                    case bitmark.AtExamplecol:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1123;
                            this.match(bitmark.AtExamplecol);
                            this.state = 1124;
                            this.words();
                            this.state = 1125;
                            this.cl();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 84, bitmark.RULE_interview);
            let _la;
            try {
                let _alt;
                this.state = 1229;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1129;
                            this.match(bitmark.BitInterview);
                            this.state = 1130;
                            this.format();
                            this.state = 1131;
                            this.cl();
                            this.state = 1135;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmark.NL) {
                                {
                                    {
                                        this.state = 1132;
                                        this.nl();
                                    }
                                }
                                this.state = 1137;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1147;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                                {
                                    {
                                        this.state = 1138;
                                        this.bitElem();
                                        this.state = 1142;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmark.NL) {
                                            {
                                                {
                                                    this.state = 1139;
                                                    this.nl();
                                                }
                                            }
                                            this.state = 1144;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 1149;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1171;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1150;
                                            this.hspl();
                                            this.state = 1166;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (bitmark.OPDOLL - 51)) | (1 << (bitmark.OPESC - 51)) | (1 << (bitmark.OPAMP - 51)) | (1 << (bitmark.OPRANGLES - 51)) | (1 << (bitmark.OPRANGLEL - 51)) | (1 << (bitmark.OPU - 51)) | (1 << (bitmark.OPB - 51)) | (1 << (bitmark.OPQ - 51)) | (1 << (bitmark.OPA - 51)) | (1 << (bitmark.OPS - 51)) | (1 << (bitmark.OPC - 51)) | (1 << (bitmark.COLON - 51)) | (1 << (bitmark.AMP - 51)) | (1 << (bitmark.Greater - 51)) | (1 << (bitmark.Less - 51)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.NL - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLonganswer - 86)) | (1 << (bitmark.AtShortanswer - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                                                {
                                                    {
                                                        this.state = 1154;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                        while (_la === bitmark.NL) {
                                                            {
                                                                {
                                                                    this.state = 1151;
                                                                    this.nl();
                                                                }
                                                            }
                                                            this.state = 1156;
                                                            this._errHandler.sync(this);
                                                            _la = this._input.LA(1);
                                                        }
                                                        this.state = 1157;
                                                        this.interview_answer();
                                                        this.state = 1161;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 1158;
                                                                        this.nl();
                                                                    }
                                                                }
                                                            }
                                                            this.state = 1163;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                                                        }
                                                    }
                                                }
                                                this.state = 1168;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                        }
                                    }
                                }
                                this.state = 1173;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                            }
                            this.state = 1174;
                            this.hspl();
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1176;
                            this.match(bitmark.BitInterview);
                            this.state = 1177;
                            this.format();
                            this.state = 1178;
                            this.cl();
                            this.state = 1182;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmark.NL) {
                                {
                                    {
                                        this.state = 1179;
                                        this.nl();
                                    }
                                }
                                this.state = 1184;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1194;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                                {
                                    {
                                        this.state = 1185;
                                        this.bitElem();
                                        this.state = 1189;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmark.NL) {
                                            {
                                                {
                                                    this.state = 1186;
                                                    this.nl();
                                                }
                                            }
                                            this.state = 1191;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 1196;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1224;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1197;
                                            this.hspl();
                                            this.state = 1219;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (bitmark.OPDOLL - 51)) | (1 << (bitmark.OPESC - 51)) | (1 << (bitmark.OPAMP - 51)) | (1 << (bitmark.OPRANGLES - 51)) | (1 << (bitmark.OPRANGLEL - 51)) | (1 << (bitmark.OPU - 51)) | (1 << (bitmark.OPB - 51)) | (1 << (bitmark.OPQ - 51)) | (1 << (bitmark.OPA - 51)) | (1 << (bitmark.OPS - 51)) | (1 << (bitmark.OPC - 51)) | (1 << (bitmark.COLON - 51)) | (1 << (bitmark.AMP - 51)) | (1 << (bitmark.Greater - 51)) | (1 << (bitmark.Less - 51)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.NL - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLonganswer - 86)) | (1 << (bitmark.AtShortanswer - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                                                {
                                                    {
                                                        this.state = 1201;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                        while (_la === bitmark.NL) {
                                                            {
                                                                {
                                                                    this.state = 1198;
                                                                    this.nl();
                                                                }
                                                            }
                                                            this.state = 1203;
                                                            this._errHandler.sync(this);
                                                            _la = this._input.LA(1);
                                                        }
                                                        this.state = 1204;
                                                        this.interview_question();
                                                        this.state = 1205;
                                                        this.eq();
                                                        this.state = 1213;
                                                        this._errHandler.sync(this);
                                                        _alt = 1;
                                                        do {
                                                            switch (_alt) {
                                                                case 1:
                                                                    {
                                                                        {
                                                                            this.state = 1206;
                                                                            this.interview_answer();
                                                                            this.state = 1210;
                                                                            this._errHandler.sync(this);
                                                                            _alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
                                                                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                                                if (_alt === 1) {
                                                                                    {
                                                                                        {
                                                                                            this.state = 1207;
                                                                                            this.nl();
                                                                                        }
                                                                                    }
                                                                                }
                                                                                this.state = 1212;
                                                                                this._errHandler.sync(this);
                                                                                _alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
                                                                            }
                                                                        }
                                                                    }
                                                                    break;
                                                                default:
                                                                    throw new NoViableAltException(this);
                                                            }
                                                            this.state = 1215;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                                                        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                                                    }
                                                }
                                                this.state = 1221;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                        }
                                    }
                                }
                                this.state = 1226;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                            }
                            this.state = 1227;
                            this.hspl();
                        }
                        break;
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        interview_question() {
            let _localctx = new Interview_questionContext(this._ctx, this.state);
            this.enterRule(_localctx, 86, bitmark.RULE_interview_question);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1231;
                    this.interview_answer__();
                    this.state = 1237;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 1232;
                                this.nl();
                                this.state = 1233;
                                this.interview_answer();
                            }
                        }
                        this.state = 1239;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 88, bitmark.RULE_interview_answer);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1240;
                    this.interview_answer__();
                    this.state = 1246;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1241;
                                    this.nl();
                                    this.state = 1242;
                                    this.interview_answer();
                                }
                            }
                        }
                        this.state = 1248;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        interview_answer__() {
            let _localctx = new Interview_answer__Context(this._ctx, this.state);
            this.enterRule(_localctx, 90, bitmark.RULE_interview_answer__);
            try {
                let _alt;
                this.state = 1262;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.OPESC:
                    case bitmark.OPAMP:
                    case bitmark.OPRANGLES:
                    case bitmark.OPRANGLEL:
                    case bitmark.OPU:
                    case bitmark.OPB:
                    case bitmark.OPQ:
                    case bitmark.OPA:
                    case bitmark.OPS:
                    case bitmark.OPC:
                    case bitmark.COLON:
                    case bitmark.AMP:
                    case bitmark.Greater:
                    case bitmark.Less:
                    case bitmark.LIST_LINE:
                    case bitmark.EMP1:
                    case bitmark.EMP2:
                    case bitmark.EMP3:
                    case bitmark.NOTE:
                    case bitmark.INS:
                    case bitmark.DEL:
                    case bitmark.REM:
                    case bitmark.HELP:
                    case bitmark.HIGH:
                    case bitmark.ANNO:
                    case bitmark.ANNO_IM:
                    case bitmark.NUMERIC:
                    case bitmark.STRING:
                    case bitmark.SP:
                    case bitmark.SENTENCE:
                    case bitmark.AtReference:
                    case bitmark.AtExamplecol:
                    case bitmark.AtExamplecl:
                    case bitmark.AtLabeltrue:
                    case bitmark.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1251;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 1251;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 1249;
                                                        this.bitElem();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 1250;
                                                        this.ml_example();
                                                    }
                                                    break;
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                                this.state = 1253;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                            this.state = 1257;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1255;
                                        this.shortans();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1256;
                                        this.longans();
                                    }
                                    break;
                            }
                        }
                        break;
                    case bitmark.AtShortanswer:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1259;
                            this.shortans();
                        }
                        break;
                    case bitmark.AtLonganswer:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1260;
                            this.longans();
                        }
                        break;
                    case bitmark.OPDOLL:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1261;
                            this.dollarans();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 92, bitmark.RULE_longans);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1264;
                    this.match(bitmark.AtLonganswer);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 94, bitmark.RULE_shortans);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1266;
                    this.match(bitmark.AtShortanswer);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 96, bitmark.RULE_dollarans);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1268;
                    this.match(bitmark.OPDOLL);
                    this.state = 1271;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 1271;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1269;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1270;
                                        this.match(bitmark.COLON);
                                    }
                                    break;
                            }
                        }
                        this.state = 1273;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                    this.state = 1275;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 98, bitmark.RULE_interview_instruction_grouped);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1277;
                    this.match(bitmark.BitInterviewinstgrp);
                    this.state = 1278;
                    this.format();
                    this.state = 1279;
                    this.cl();
                    this.state = 1283;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1280;
                                    this.nl();
                                }
                            }
                        }
                        this.state = 1285;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                    }
                    this.state = 1292;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1287;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === bitmark.NL) {
                                        {
                                            this.state = 1286;
                                            this.nl();
                                        }
                                    }
                                    this.state = 1289;
                                    this.bitElem();
                                }
                            }
                        }
                        this.state = 1294;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
                    }
                    this.state = 1298;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 1295;
                                this.nl();
                            }
                        }
                        this.state = 1300;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1306;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1301;
                                    this.hspl();
                                    this.state = 1302;
                                    this.interview_answer();
                                }
                            }
                        }
                        this.state = 1308;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
                    }
                    this.state = 1309;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 100, bitmark.RULE_query);
            let _la;
            try {
                this.state = 1320;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.OPESC:
                    case bitmark.OPS:
                    case bitmark.COLON:
                    case bitmark.AMP:
                    case bitmark.Greater:
                    case bitmark.Less:
                    case bitmark.EMP1:
                    case bitmark.EMP2:
                    case bitmark.EMP3:
                    case bitmark.NOTE:
                    case bitmark.REM:
                    case bitmark.NUMERIC:
                    case bitmark.STRING:
                    case bitmark.SP:
                    case bitmark.SENTENCE:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1312;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1311;
                                        this.s_and_w();
                                    }
                                }
                                this.state = 1314;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                            this.state = 1317;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.AtExamplecl) {
                                {
                                    this.state = 1316;
                                    this.match(bitmark.AtExamplecl);
                                }
                            }
                        }
                        break;
                    case bitmark.LIST_LINE:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1319;
                            this.listline_();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 102, bitmark.RULE_answer);
            let _la;
            try {
                let _alt;
                this.state = 1342;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.OPESC:
                    case bitmark.OPS:
                    case bitmark.COLON:
                    case bitmark.AMP:
                    case bitmark.Greater:
                    case bitmark.Less:
                    case bitmark.EMP1:
                    case bitmark.EMP2:
                    case bitmark.EMP3:
                    case bitmark.NOTE:
                    case bitmark.REM:
                    case bitmark.NUMERIC:
                    case bitmark.STRING:
                    case bitmark.SP:
                    case bitmark.SENTENCE:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1323;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 1322;
                                                this.s_and_w();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                                this.state = 1325;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                            this.state = 1333;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.OR) {
                                {
                                    this.state = 1327;
                                    this.or();
                                    this.state = 1329;
                                    this._errHandler.sync(this);
                                    _alt = 1;
                                    do {
                                        switch (_alt) {
                                            case 1:
                                                {
                                                    {
                                                        this.state = 1328;
                                                        this.s_and_w();
                                                    }
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException(this);
                                        }
                                        this.state = 1331;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
                                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                                }
                            }
                            this.state = 1339;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (bitmark.SP - 101)) | (1 << (bitmark.AtExamplecol - 101)) | (1 << (bitmark.AtExamplecl - 101)))) !== 0)) {
                                {
                                    this.state = 1336;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === bitmark.SP) {
                                        {
                                            this.state = 1335;
                                            this.sp();
                                        }
                                    }
                                    this.state = 1338;
                                    this.example();
                                }
                            }
                        }
                        break;
                    case bitmark.LIST_LINE:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1341;
                            this.listline_();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 104, bitmark.RULE_heading);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1344;
                    this.key_title();
                    this.state = 1345;
                    this.eq();
                    this.state = 1346;
                    this.value_title();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 106, bitmark.RULE_key_title);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1348;
                    this.match(bitmark.OPHASH);
                    this.state = 1350;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1349;
                                this.s_and_w();
                            }
                        }
                        this.state = 1352;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                    this.state = 1354;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 108, bitmark.RULE_value_title);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1356;
                    this.match(bitmark.OPHASH);
                    this.state = 1358;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1357;
                                this.s_and_w();
                            }
                        }
                        this.state = 1360;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                    this.state = 1362;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        pair() {
            let _localctx = new PairContext(this._ctx, this.state);
            this.enterRule(_localctx, 110, bitmark.RULE_pair);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    {
                        this.state = 1364;
                        this.hspl();
                        this.state = 1365;
                        this.pquery();
                        this.state = 1366;
                        this.eq();
                        this.state = 1367;
                        this.panswer();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        pairs() {
            let _localctx = new PairsContext(this._ctx, this.state);
            this.enterRule(_localctx, 112, bitmark.RULE_pairs);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1370;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1369;
                                        this.pair();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1372;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        pair_image() {
            let _localctx = new Pair_imageContext(this._ctx, this.state);
            this.enterRule(_localctx, 114, bitmark.RULE_pair_image);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    {
                        this.state = 1374;
                        this.hspl();
                        this.state = 1375;
                        this.pimagebit();
                        this.state = 1376;
                        this.eq();
                        this.state = 1377;
                        this.panswer();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        pair_images() {
            let _localctx = new Pair_imagesContext(this._ctx, this.state);
            this.enterRule(_localctx, 116, bitmark.RULE_pair_images);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1380;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1379;
                                        this.pair_image();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1382;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        pair_audio() {
            let _localctx = new Pair_audioContext(this._ctx, this.state);
            this.enterRule(_localctx, 118, bitmark.RULE_pair_audio);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1389;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1384;
                                        this.hspl();
                                        this.state = 1385;
                                        this.paudiobit();
                                        this.state = 1386;
                                        this.eq();
                                        this.state = 1387;
                                        this.panswer();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1391;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        pair_audios() {
            let _localctx = new Pair_audiosContext(this._ctx, this.state);
            this.enterRule(_localctx, 120, bitmark.RULE_pair_audios);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1394;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1393;
                                this.pair_audio();
                            }
                        }
                        this.state = 1396;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmark.HSPL || _la === bitmark.HSPL2);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        pquery() {
            let _localctx = new PqueryContext(this._ctx, this.state);
            this.enterRule(_localctx, 122, bitmark.RULE_pquery);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1398;
                    this.pquery__();
                    this.state = 1404;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 1399;
                                this.nl();
                                this.state = 1400;
                                this.pquery__();
                            }
                        }
                        this.state = 1406;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        pquery__() {
            let _localctx = new Pquery__Context(this._ctx, this.state);
            this.enterRule(_localctx, 124, bitmark.RULE_pquery__);
            let _la;
            try {
                this.state = 1420;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1408;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.OPC) {
                                {
                                    this.state = 1407;
                                    this.item();
                                }
                            }
                            this.state = 1411;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1410;
                                        this.s_and_w();
                                    }
                                }
                                this.state = 1413;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                            this.state = 1416;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.AtExamplecol || _la === bitmark.AtExamplecl) {
                                {
                                    this.state = 1415;
                                    this.example();
                                }
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1418;
                            this.titlestar_();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1419;
                            this.listline_();
                        }
                        break;
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        panswer() {
            let _localctx = new PanswerContext(this._ctx, this.state);
            this.enterRule(_localctx, 126, bitmark.RULE_panswer);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1422;
                    this.panswer__();
                    this.state = 1428;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.OR) {
                        {
                            {
                                this.state = 1423;
                                this.or();
                                this.state = 1424;
                                this.panswer__();
                            }
                        }
                        this.state = 1430;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        panswer__() {
            let _localctx = new Panswer__Context(this._ctx, this.state);
            this.enterRule(_localctx, 128, bitmark.RULE_panswer__);
            let _la;
            try {
                this.state = 1458;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1432;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.OPC) {
                                {
                                    this.state = 1431;
                                    this.item();
                                }
                            }
                            this.state = 1434;
                            this.s_and_w();
                            this.state = 1439;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (bitmark.SP - 101)) | (1 << (bitmark.AtExamplecol - 101)) | (1 << (bitmark.AtExamplecl - 101)))) !== 0)) {
                                {
                                    this.state = 1436;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === bitmark.SP) {
                                        {
                                            this.state = 1435;
                                            this.sp();
                                        }
                                    }
                                    this.state = 1438;
                                    this.example();
                                }
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1441;
                            this.titlestar_();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1442;
                            this.listline_();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1443;
                            this.example();
                            this.state = 1445;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0)) {
                                {
                                    this.state = 1444;
                                    this.s_and_w();
                                }
                            }
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 1447;
                            this.opdoll();
                            this.state = 1450;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1450;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmark.OPESC:
                                        case bitmark.OPS:
                                        case bitmark.COLON:
                                        case bitmark.AMP:
                                        case bitmark.Greater:
                                        case bitmark.Less:
                                        case bitmark.EMP1:
                                        case bitmark.EMP2:
                                        case bitmark.EMP3:
                                        case bitmark.NOTE:
                                        case bitmark.REM:
                                        case bitmark.NUMERIC:
                                        case bitmark.STRING:
                                        case bitmark.SP:
                                        case bitmark.SENTENCE:
                                            {
                                                this.state = 1448;
                                                this.s_and_w();
                                            }
                                            break;
                                        case bitmark.NL:
                                            {
                                                this.state = 1449;
                                                this.nl();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 1452;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.NL - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0));
                            this.state = 1454;
                            this.cl();
                            this.state = 1456;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.AtExamplecol || _la === bitmark.AtExamplecl) {
                                {
                                    this.state = 1455;
                                    this.example();
                                }
                            }
                        }
                        break;
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 130, bitmark.RULE_pimagebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1460;
                    this.match(bitmark.OPAMP);
                    this.state = 1461;
                    this.image_format();
                    this.state = 1463;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.DotAt) {
                        {
                            this.state = 1462;
                            this.resolution();
                        }
                    }
                    this.state = 1465;
                    this.match(bitmark.DBLCOLON);
                    this.state = 1466;
                    this.url();
                    this.state = 1467;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        paudiobit() {
            let _localctx = new PaudiobitContext(this._ctx, this.state);
            this.enterRule(_localctx, 132, bitmark.RULE_paudiobit);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1469;
                    this.match(bitmark.OPAMP);
                    this.state = 1470;
                    this.audio_format();
                    this.state = 1471;
                    this.match(bitmark.DBLCOLON);
                    this.state = 1472;
                    this.url();
                    this.state = 1473;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        match_() {
            let _localctx = new Match_Context(this._ctx, this.state);
            this.enterRule(_localctx, 134, bitmark.RULE_match_);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1475;
                    this.match(bitmark.BitMatch);
                    this.state = 1476;
                    this.format();
                    this.state = 1477;
                    this.cl();
                    this.state = 1478;
                    this.nl();
                    this.state = 1488;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 1479;
                                this.bitElem();
                                this.state = 1483;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmark.NL) {
                                    {
                                        {
                                            this.state = 1480;
                                            this.nl();
                                        }
                                    }
                                    this.state = 1485;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1490;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1494;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                        case 1:
                            {
                                this.state = 1491;
                                this.hspl();
                                this.state = 1492;
                                this.heading();
                            }
                            break;
                    }
                    this.state = 1496;
                    this.pairs();
                    this.state = 1497;
                    this.hspl();
                    this.state = 1501;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1498;
                                    this.nl();
                                }
                            }
                        }
                        this.state = 1503;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
                    }
                    this.state = 1507;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1504;
                                    this.bitElem();
                                }
                            }
                        }
                        this.state = 1509;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        match_all() {
            let _localctx = new Match_allContext(this._ctx, this.state);
            this.enterRule(_localctx, 136, bitmark.RULE_match_all);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1510;
                    this.match(bitmark.BitMatchall);
                    this.state = 1511;
                    this.format();
                    this.state = 1512;
                    this.cl();
                    this.state = 1513;
                    this.nl();
                    this.state = 1523;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 1514;
                                this.bitElem();
                                this.state = 1518;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmark.NL) {
                                    {
                                        {
                                            this.state = 1515;
                                            this.nl();
                                        }
                                    }
                                    this.state = 1520;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1525;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1529;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 188, this._ctx)) {
                        case 1:
                            {
                                this.state = 1526;
                                this.hspl();
                                this.state = 1527;
                                this.heading();
                            }
                            break;
                    }
                    this.state = 1531;
                    this.pairs();
                    this.state = 1532;
                    this.hspl();
                    this.state = 1536;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1533;
                                    this.nl();
                                }
                            }
                        }
                        this.state = 1538;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                    }
                    this.state = 1542;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1539;
                                    this.bitElem();
                                }
                            }
                        }
                        this.state = 1544;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        match_reverse() {
            let _localctx = new Match_reverseContext(this._ctx, this.state);
            this.enterRule(_localctx, 138, bitmark.RULE_match_reverse);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1545;
                    this.match(bitmark.BitMatchrev);
                    this.state = 1546;
                    this.format();
                    this.state = 1547;
                    this.cl();
                    this.state = 1548;
                    this.nl();
                    this.state = 1555;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 1549;
                                this.bitElem();
                                this.state = 1551;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === bitmark.NL) {
                                    {
                                        this.state = 1550;
                                        this.nl();
                                    }
                                }
                            }
                        }
                        this.state = 1557;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1561;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 193, this._ctx)) {
                        case 1:
                            {
                                this.state = 1558;
                                this.hspl();
                                this.state = 1559;
                                this.heading();
                            }
                            break;
                    }
                    this.state = 1563;
                    this.pairs();
                    this.state = 1564;
                    this.hspl();
                    this.state = 1568;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1565;
                                    this.nl();
                                }
                            }
                        }
                        this.state = 1570;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
                    }
                    this.state = 1574;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1571;
                                    this.bitElem();
                                }
                            }
                        }
                        this.state = 1576;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        match_all_reverse() {
            let _localctx = new Match_all_reverseContext(this._ctx, this.state);
            this.enterRule(_localctx, 140, bitmark.RULE_match_all_reverse);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1577;
                    this.match(bitmark.BitMatchallrev);
                    this.state = 1578;
                    this.format();
                    this.state = 1579;
                    this.cl();
                    this.state = 1580;
                    this.nl();
                    this.state = 1587;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 1581;
                                this.bitElem();
                                this.state = 1583;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === bitmark.NL) {
                                    {
                                        this.state = 1582;
                                        this.nl();
                                    }
                                }
                            }
                        }
                        this.state = 1589;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1593;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 198, this._ctx)) {
                        case 1:
                            {
                                this.state = 1590;
                                this.hspl();
                                this.state = 1591;
                                this.heading();
                            }
                            break;
                    }
                    this.state = 1595;
                    this.pairs();
                    this.state = 1596;
                    this.hspl();
                    this.state = 1600;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1597;
                                    this.nl();
                                }
                            }
                        }
                        this.state = 1602;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
                    }
                    this.state = 1606;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1603;
                                    this.bitElem();
                                }
                            }
                        }
                        this.state = 1608;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        match_picture() {
            let _localctx = new Match_pictureContext(this._ctx, this.state);
            this.enterRule(_localctx, 142, bitmark.RULE_match_picture);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1609;
                    this.match(bitmark.BitMatchpic);
                    this.state = 1610;
                    this.format();
                    this.state = 1611;
                    this.cl();
                    this.state = 1612;
                    this.nl();
                    this.state = 1619;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 1613;
                                this.bitElem();
                                this.state = 1615;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === bitmark.NL) {
                                    {
                                        this.state = 1614;
                                        this.nl();
                                    }
                                }
                            }
                        }
                        this.state = 1621;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1625;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 203, this._ctx)) {
                        case 1:
                            {
                                this.state = 1622;
                                this.hspl();
                                this.state = 1623;
                                this.heading();
                            }
                            break;
                    }
                    this.state = 1627;
                    this.pair_images();
                    this.state = 1628;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        match_audio() {
            let _localctx = new Match_audioContext(this._ctx, this.state);
            this.enterRule(_localctx, 144, bitmark.RULE_match_audio);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1630;
                    this.match(bitmark.BitMatchaudio);
                    this.state = 1631;
                    this.format();
                    this.state = 1632;
                    this.cl();
                    this.state = 1633;
                    this.nl();
                    this.state = 1640;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 1634;
                                this.bitElem();
                                this.state = 1636;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === bitmark.NL) {
                                    {
                                        this.state = 1635;
                                        this.nl();
                                    }
                                }
                            }
                        }
                        this.state = 1642;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1646;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 206, this._ctx)) {
                        case 1:
                            {
                                this.state = 1643;
                                this.hspl();
                                this.state = 1644;
                                this.heading();
                            }
                            break;
                    }
                    this.state = 1648;
                    this.pair_audio();
                    this.state = 1649;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        match_solution_grouped() {
            let _localctx = new Match_solution_groupedContext(this._ctx, this.state);
            this.enterRule(_localctx, 146, bitmark.RULE_match_solution_grouped);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1651;
                    this.match(bitmark.BitMatchsolgrp);
                    this.state = 1652;
                    this.format();
                    this.state = 1653;
                    this.cl();
                    this.state = 1654;
                    this.nl();
                    this.state = 1661;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 1655;
                                this.bitElem();
                                this.state = 1657;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === bitmark.NL) {
                                    {
                                        this.state = 1656;
                                        this.nl();
                                    }
                                }
                            }
                        }
                        this.state = 1663;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1667;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 209, this._ctx)) {
                        case 1:
                            {
                                this.state = 1664;
                                this.hspl();
                                this.state = 1665;
                                this.heading();
                            }
                            break;
                    }
                    this.state = 1669;
                    this.pairs();
                    this.state = 1670;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 148, bitmark.RULE_true_false_1);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1672;
                    this.match(bitmark.BitTruefalse1);
                    this.state = 1673;
                    this.format();
                    this.state = 1674;
                    this.cl();
                    this.state = 1676;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1675;
                                this.nl();
                            }
                        }
                        this.state = 1678;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmark.NL);
                    this.state = 1686;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1680;
                                    this.bitElem();
                                    this.state = 1682;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === bitmark.NL) {
                                        {
                                            this.state = 1681;
                                            this.nl();
                                        }
                                    }
                                }
                            }
                        }
                        this.state = 1688;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
                    }
                    this.state = 1689;
                    this.choices();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 150, bitmark.RULE_true_false);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1691;
                    this.match(bitmark.BitTruefalse);
                    this.state = 1692;
                    this.format();
                    this.state = 1693;
                    this.cl();
                    this.state = 1697;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 1694;
                                this.nl();
                            }
                        }
                        this.state = 1699;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1701;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 214, this._ctx)) {
                        case 1:
                            {
                                this.state = 1700;
                                this.hspl();
                            }
                            break;
                    }
                    this.state = 1712;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1703;
                                    this.bitElem();
                                    this.state = 1707;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmark.NL) {
                                        {
                                            {
                                                this.state = 1704;
                                                this.nl();
                                            }
                                        }
                                        this.state = 1709;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                        }
                        this.state = 1714;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
                    }
                    this.state = 1722;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1716;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === bitmark.HSPL || _la === bitmark.HSPL2) {
                                            {
                                                this.state = 1715;
                                                this.hspl();
                                            }
                                        }
                                        this.state = 1719;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)))) !== 0)) {
                                            {
                                                this.state = 1718;
                                                this.titlestar_();
                                            }
                                        }
                                        this.state = 1721;
                                        this.choices();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1724;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 1727;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.HSPL || _la === bitmark.HSPL2) {
                        {
                            this.state = 1726;
                            this.hspl();
                        }
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 152, bitmark.RULE_bool_label);
            try {
                this.state = 1737;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1729;
                            this.match(bitmark.AtLabeltrue);
                            this.state = 1730;
                            this.s_and_w();
                            this.state = 1731;
                            this.cl();
                        }
                        break;
                    case bitmark.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1733;
                            this.match(bitmark.AtLabelfalse);
                            this.state = 1734;
                            this.s_and_w();
                            this.state = 1735;
                            this.cl();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        sequence() {
            let _localctx = new SequenceContext(this._ctx, this.state);
            this.enterRule(_localctx, 154, bitmark.RULE_sequence);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1739;
                    this.match(bitmark.BitSequence);
                    this.state = 1740;
                    this.format();
                    this.state = 1741;
                    this.cl();
                    this.state = 1745;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 1742;
                                this.nl();
                            }
                        }
                        this.state = 1747;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1757;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 1748;
                                this.bitElem();
                                this.state = 1752;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmark.NL) {
                                    {
                                        {
                                            this.state = 1749;
                                            this.nl();
                                        }
                                    }
                                    this.state = 1754;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1759;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1776;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1760;
                                        this.sspl();
                                        this.state = 1773;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.NL - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                                            {
                                                {
                                                    this.state = 1764;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === bitmark.NL) {
                                                        {
                                                            {
                                                                this.state = 1761;
                                                                this.nl();
                                                            }
                                                        }
                                                        this.state = 1766;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 1769;
                                                    this._errHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this._input, 226, this._ctx)) {
                                                        case 1:
                                                            {
                                                                this.state = 1767;
                                                                this.s_and_w();
                                                            }
                                                            break;
                                                        case 2:
                                                            {
                                                                this.state = 1768;
                                                                this.bitElem();
                                                            }
                                                            break;
                                                    }
                                                }
                                            }
                                            this.state = 1775;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1778;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 1780;
                    this.sspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        correction() {
            let _localctx = new CorrectionContext(this._ctx, this.state);
            this.enterRule(_localctx, 156, bitmark.RULE_correction);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1782;
                    this.match(bitmark.BitCorrection);
                    this.state = 1783;
                    this.format();
                    this.state = 1784;
                    this.cl();
                    this.state = 1785;
                    this.nl();
                    this.state = 1795;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 1786;
                                this.bitElem();
                                this.state = 1790;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmark.NL) {
                                    {
                                        {
                                            this.state = 1787;
                                            this.nl();
                                        }
                                    }
                                    this.state = 1792;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1797;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1799;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1798;
                                this.corrs();
                            }
                        }
                        this.state = 1801;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmark.OPP || _la === bitmark.OPM);
                    this.state = 1803;
                    this.nl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        corrs() {
            let _localctx = new CorrsContext(this._ctx, this.state);
            this.enterRule(_localctx, 158, bitmark.RULE_corrs);
            try {
                let _alt;
                this.state = 1825;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.OPM:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1805;
                            this.match(bitmark.OPM);
                            this.state = 1809;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1806;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1811;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
                            }
                            this.state = 1812;
                            this.cl();
                            this.state = 1813;
                            this.nl();
                        }
                        break;
                    case bitmark.OPP:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1815;
                            this.match(bitmark.OPP);
                            this.state = 1819;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1816;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1821;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
                            }
                            this.state = 1822;
                            this.cl();
                            this.state = 1823;
                            this.nl();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        mark_() {
            let _localctx = new Mark_Context(this._ctx, this.state);
            this.enterRule(_localctx, 160, bitmark.RULE_mark_);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1827;
                    this.match(bitmark.BitMark);
                    this.state = 1828;
                    this.format();
                    this.state = 1829;
                    this.cl();
                    this.state = 1830;
                    this.nl();
                    this.state = 1843;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1833;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 235, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1831;
                                                this.bitElem();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1832;
                                                this.mark_text();
                                            }
                                            break;
                                    }
                                    this.state = 1838;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1835;
                                                    this.nl();
                                                }
                                            }
                                        }
                                        this.state = 1840;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1845;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 162, bitmark.RULE_mark_text);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1846;
                    this.match(bitmark.OPS);
                    this.state = 1847;
                    this.s_and_w();
                    this.state = 1848;
                    this.cl();
                    this.state = 1850;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPAMARK) {
                        {
                            this.state = 1849;
                            this.mark_color();
                        }
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        mark_color() {
            let _localctx = new Mark_colorContext(this._ctx, this.state);
            this.enterRule(_localctx, 164, bitmark.RULE_mark_color);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1852;
                    this.match(bitmark.OPAMARK);
                    this.state = 1853;
                    this.string();
                    this.state = 1854;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        document_upload() {
            let _localctx = new Document_uploadContext(this._ctx, this.state);
            this.enterRule(_localctx, 166, bitmark.RULE_document_upload);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1856;
                    this.match(bitmark.BitDocup);
                    this.state = 1863;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.COLON) {
                        {
                            this.state = 1857;
                            this.match(bitmark.COLON);
                            this.state = 1861;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 239, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1858;
                                        this.audio_type();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1859;
                                        this.image_type();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1860;
                                        this.video_type();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1865;
                    this.cl();
                    this.state = 1866;
                    this.nl();
                    this.state = 1876;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1867;
                                    this.bitElem();
                                    this.state = 1871;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 241, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1868;
                                                    this.nl();
                                                }
                                            }
                                        }
                                        this.state = 1873;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 241, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1878;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        take_picture() {
            let _localctx = new Take_pictureContext(this._ctx, this.state);
            this.enterRule(_localctx, 168, bitmark.RULE_take_picture);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1879;
                    this.match(bitmark.BitTakepic);
                    this.state = 1880;
                    this.format();
                    this.state = 1881;
                    this.cl();
                    this.state = 1882;
                    this.nl();
                    this.state = 1892;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 244, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1883;
                                    this.bitElem();
                                    this.state = 1887;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1884;
                                                    this.nl();
                                                }
                                            }
                                        }
                                        this.state = 1889;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1894;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 244, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        record_audio() {
            let _localctx = new Record_audioContext(this._ctx, this.state);
            this.enterRule(_localctx, 170, bitmark.RULE_record_audio);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1895;
                    this.match(bitmark.BitRecaud);
                    this.state = 1896;
                    this.format();
                    this.state = 1897;
                    this.cl();
                    this.state = 1898;
                    this.nl();
                    this.state = 1908;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1899;
                                    this.bitElem();
                                    this.state = 1903;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1900;
                                                    this.nl();
                                                }
                                            }
                                        }
                                        this.state = 1905;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1910;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        preparation_note() {
            let _localctx = new Preparation_noteContext(this._ctx, this.state);
            this.enterRule(_localctx, 172, bitmark.RULE_preparation_note);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1911;
                    this.match(bitmark.BitPrepnote);
                    this.state = 1912;
                    this.format();
                    this.state = 1913;
                    this.cl();
                    this.state = 1917;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 247, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1914;
                                    this.nl();
                                }
                            }
                        }
                        this.state = 1919;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 247, this._ctx);
                    }
                    this.state = 1923;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPB) {
                        {
                            this.state = 1920;
                            this.instruction();
                            this.state = 1921;
                            this.nl();
                        }
                    }
                    this.state = 1926;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 249, this._ctx)) {
                        case 1:
                            {
                                this.state = 1925;
                                this.lines();
                            }
                            break;
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        assignment() {
            let _localctx = new AssignmentContext(this._ctx, this.state);
            this.enterRule(_localctx, 174, bitmark.RULE_assignment);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1928;
                    this.match(bitmark.BitAssign);
                    this.state = 1929;
                    this.format();
                    this.state = 1930;
                    this.cl();
                    this.state = 1931;
                    this.nl();
                    this.state = 1941;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1932;
                                    this.bitElem();
                                    this.state = 1936;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 250, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1933;
                                                    this.nl();
                                                }
                                            }
                                        }
                                        this.state = 1938;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 250, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1943;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
                    }
                    this.state = 1945;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 252, this._ctx)) {
                        case 1:
                            {
                                this.state = 1944;
                                this.lines();
                            }
                            break;
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 176, bitmark.RULE_flashcard_1);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1947;
                    this.match(bitmark.BitFlash1);
                    this.state = 1948;
                    this.format();
                    this.state = 1949;
                    this.cl();
                    this.state = 1950;
                    this.nl();
                    this.state = 1951;
                    this.side();
                    this.state = 1952;
                    this.eq();
                    this.state = 1953;
                    this.side();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 178, bitmark.RULE_flashcard);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1955;
                    this.match(bitmark.BitFlash);
                    this.state = 1956;
                    this.format();
                    this.state = 1957;
                    this.cl();
                    this.state = 1961;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 1958;
                                this.nl();
                            }
                        }
                        this.state = 1963;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1964;
                    this.hspl();
                    this.state = 1965;
                    this.side();
                    this.state = 1966;
                    this.eq();
                    this.state = 1967;
                    this.side();
                    this.state = 1975;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 254, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1968;
                                    this.hspl();
                                    this.state = 1969;
                                    this.side();
                                    this.state = 1970;
                                    this.eq();
                                    this.state = 1971;
                                    this.side();
                                }
                            }
                        }
                        this.state = 1977;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 254, this._ctx);
                    }
                    this.state = 1978;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 180, bitmark.RULE_sidex);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1984;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1984;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmark.OPA:
                                            {
                                                this.state = 1980;
                                                this.atdef();
                                            }
                                            break;
                                        case bitmark.OPESC:
                                        case bitmark.OPS:
                                        case bitmark.COLON:
                                        case bitmark.AMP:
                                        case bitmark.Greater:
                                        case bitmark.Less:
                                        case bitmark.EMP1:
                                        case bitmark.EMP2:
                                        case bitmark.EMP3:
                                        case bitmark.NOTE:
                                        case bitmark.REM:
                                        case bitmark.NUMERIC:
                                        case bitmark.STRING:
                                        case bitmark.SP:
                                        case bitmark.SENTENCE:
                                            {
                                                this.state = 1981;
                                                this.s_and_w();
                                            }
                                            break;
                                        case bitmark.OPB:
                                            {
                                                this.state = 1982;
                                                this.instruction();
                                            }
                                            break;
                                        case bitmark.OPAMP:
                                            {
                                                this.state = 1983;
                                                this.audiobit();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1986;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 256, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 182, bitmark.RULE_side);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1988;
                    this.sidex();
                    this.state = 1994;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.OR) {
                        {
                            {
                                this.state = 1989;
                                this.or();
                                this.state = 1990;
                                this.sidex();
                            }
                        }
                        this.state = 1996;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 184, bitmark.RULE_atdef);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1997;
                    this.atdef_();
                    this.state = 2007;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2001;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmark.NL) {
                                        {
                                            {
                                                this.state = 1998;
                                                this.nl();
                                            }
                                        }
                                        this.state = 2003;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 2004;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 2009;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 186, bitmark.RULE_atdef_);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2010;
                    this.match(bitmark.OPA);
                    this.state = 2011;
                    this.s_and_w();
                    this.state = 2012;
                    this.match(bitmark.COLON);
                    this.state = 2013;
                    this.s_and_w();
                    this.state = 2019;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 2014;
                                this.nl();
                                this.state = 2015;
                                this.s_and_w();
                            }
                        }
                        this.state = 2021;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2022;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        article() {
            let _localctx = new ArticleContext(this._ctx, this.state);
            this.enterRule(_localctx, 188, bitmark.RULE_article);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2024;
                    this.match(bitmark.BitArticle);
                    this.state = 2025;
                    this.format();
                    this.state = 2026;
                    this.cl();
                    this.state = 2030;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 2027;
                                this.nl();
                            }
                        }
                        this.state = 2032;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2040;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2033;
                                        this.bitElem();
                                        this.state = 2037;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 262, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 2034;
                                                        this.nl();
                                                    }
                                                }
                                            }
                                            this.state = 2039;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 262, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2042;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 263, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        chat() {
            let _localctx = new ChatContext(this._ctx, this.state);
            this.enterRule(_localctx, 190, bitmark.RULE_chat);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2044;
                    this.match(bitmark.BitChat);
                    this.state = 2045;
                    this.format();
                    this.state = 2046;
                    this.cl();
                    this.state = 2047;
                    this.hspl();
                    this.state = 2048;
                    this.initiator();
                    this.state = 2049;
                    this.hspl();
                    this.state = 2050;
                    this.partner();
                    this.state = 2061;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2051;
                                        this.hspl();
                                        this.state = 2052;
                                        this.chat_initiator();
                                        this.state = 2058;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmark.SSPL || _la === bitmark.SSPL2) {
                                            {
                                                {
                                                    this.state = 2053;
                                                    this.sspl();
                                                    this.state = 2054;
                                                    this.chat_partner();
                                                }
                                            }
                                            this.state = 2060;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2063;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2065;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        initiator() {
            let _localctx = new InitiatorContext(this._ctx, this.state);
            this.enterRule(_localctx, 192, bitmark.RULE_initiator);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2067;
                    this.name_text();
                    this.state = 2071;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.NL) {
                        {
                            this.state = 2068;
                            this.nl();
                            this.state = 2069;
                            this.imagebit();
                        }
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        partner() {
            let _localctx = new PartnerContext(this._ctx, this.state);
            this.enterRule(_localctx, 194, bitmark.RULE_partner);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2073;
                    this.name_text();
                    this.state = 2077;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.NL) {
                        {
                            this.state = 2074;
                            this.nl();
                            this.state = 2075;
                            this.imagebit();
                        }
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        name_text() {
            let _localctx = new Name_textContext(this._ctx, this.state);
            this.enterRule(_localctx, 196, bitmark.RULE_name_text);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2079;
                    this.match(bitmark.OPHASH);
                    this.state = 2080;
                    this.s_and_w();
                    this.state = 2081;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        chat_initiator() {
            let _localctx = new Chat_initiatorContext(this._ctx, this.state);
            this.enterRule(_localctx, 198, bitmark.RULE_chat_initiator);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2083;
                    this.s_and_w();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        chat_partner() {
            let _localctx = new Chat_partnerContext(this._ctx, this.state);
            this.enterRule(_localctx, 200, bitmark.RULE_chat_partner);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2085;
                    this.s_and_w();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        conversation() {
            let _localctx = new ConversationContext(this._ctx, this.state);
            this.enterRule(_localctx, 202, bitmark.RULE_conversation);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2087;
                    this.match(bitmark.BitConv);
                    this.state = 2088;
                    this.format();
                    this.state = 2089;
                    this.cl();
                    this.state = 2090;
                    this.hspl();
                    this.state = 2091;
                    this.initiator();
                    this.state = 2092;
                    this.hspl();
                    this.state = 2093;
                    this.partner();
                    this.state = 2104;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2094;
                                        this.hspl();
                                        this.state = 2095;
                                        this.chat_initiator();
                                        this.state = 2101;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmark.SSPL || _la === bitmark.SSPL2) {
                                            {
                                                {
                                                    this.state = 2096;
                                                    this.sspl();
                                                    this.state = 2097;
                                                    this.chat_partner();
                                                }
                                            }
                                            this.state = 2103;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2106;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 269, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2108;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        bot_interview() {
            let _localctx = new Bot_interviewContext(this._ctx, this.state);
            this.enterRule(_localctx, 204, bitmark.RULE_bot_interview);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2110;
                    this.match(bitmark.BitBotint);
                    this.state = 2111;
                    this.format();
                    this.state = 2112;
                    this.cl();
                    this.state = 2123;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2113;
                                        this.hspl();
                                        this.state = 2114;
                                        this.bot_choice();
                                        this.state = 2120;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmark.SSPL || _la === bitmark.SSPL2) {
                                            {
                                                {
                                                    this.state = 2115;
                                                    this.sspl();
                                                    this.state = 2116;
                                                    this.bot_choice();
                                                }
                                            }
                                            this.state = 2122;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2125;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 271, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2127;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        bot_choice() {
            let _localctx = new Bot_choiceContext(this._ctx, this.state);
            this.enterRule(_localctx, 206, bitmark.RULE_bot_choice);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2136;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 2136;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 272, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2129;
                                        this.words();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 2130;
                                        this.instruction();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 2131;
                                        this.audiobit();
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 2132;
                                        this.gap();
                                    }
                                    break;
                                case 5:
                                    {
                                        this.state = 2133;
                                        this.choice_plus();
                                    }
                                    break;
                                case 6:
                                    {
                                        this.state = 2134;
                                        this.choice_minus();
                                    }
                                    break;
                                case 7:
                                    {
                                        this.state = 2135;
                                        this.choice_star();
                                    }
                                    break;
                            }
                        }
                        this.state = 2138;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (bitmark.OPAMP - 54)) | (1 << (bitmark.OPU - 54)) | (1 << (bitmark.OPB - 54)) | (1 << (bitmark.OPP - 54)) | (1 << (bitmark.OPM - 54)) | (1 << (bitmark.OPR - 54)) | (1 << (bitmark.OPC - 54)) | (1 << (bitmark.AMP - 54)) | (1 << (bitmark.Greater - 54)) | (1 << (bitmark.Less - 54)))) !== 0) || _la === bitmark.SENTENCE);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        self_assessment() {
            let _localctx = new Self_assessmentContext(this._ctx, this.state);
            this.enterRule(_localctx, 208, bitmark.RULE_self_assessment);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2140;
                    this.match(bitmark.BitSelfassess);
                    this.state = 2141;
                    this.format();
                    this.state = 2142;
                    this.cl();
                    this.state = 2146;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 2143;
                                this.nl();
                            }
                        }
                        this.state = 2148;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2158;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 2149;
                                this.bitElem();
                                this.state = 2153;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmark.NL) {
                                    {
                                        {
                                            this.state = 2150;
                                            this.nl();
                                        }
                                    }
                                    this.state = 2155;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2160;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2170;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2161;
                                        this.hspl();
                                        this.state = 2162;
                                        this.s_and_w();
                                        this.state = 2166;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2163;
                                                    this.nl();
                                                    this.state = 2164;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2168;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmark.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2172;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 278, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2174;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        rating() {
            let _localctx = new RatingContext(this._ctx, this.state);
            this.enterRule(_localctx, 210, bitmark.RULE_rating);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2176;
                    this.match(bitmark.BitRating);
                    this.state = 2177;
                    this.format();
                    this.state = 2178;
                    this.cl();
                    this.state = 2182;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 2179;
                                this.nl();
                            }
                        }
                        this.state = 2184;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2194;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 2185;
                                this.bitElem();
                                this.state = 2189;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmark.NL) {
                                    {
                                        {
                                            this.state = 2186;
                                            this.nl();
                                        }
                                    }
                                    this.state = 2191;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2196;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2206;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2197;
                                        this.hspl();
                                        this.state = 2198;
                                        this.s_and_w();
                                        this.state = 2202;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2199;
                                                    this.nl();
                                                    this.state = 2200;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2204;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmark.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2208;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 283, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2210;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 212, bitmark.RULE_bullet_item);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2212;
                    this.match(bitmark.OPBUL);
                    this.state = 2213;
                    this.s_and_w();
                    this.state = 2214;
                    this.cl();
                    this.state = 2216;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.AtPoints) {
                        {
                            this.state = 2215;
                            this.atpoint();
                        }
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        survey() {
            let _localctx = new SurveyContext(this._ctx, this.state);
            this.enterRule(_localctx, 214, bitmark.RULE_survey);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2218;
                    this.match(bitmark.BitSurvey);
                    this.state = 2219;
                    this.format();
                    this.state = 2220;
                    this.cl();
                    this.state = 2224;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 2221;
                                this.nl();
                            }
                        }
                        this.state = 2226;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2236;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 2227;
                                this.bitElem();
                                this.state = 2231;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmark.NL) {
                                    {
                                        {
                                            this.state = 2228;
                                            this.nl();
                                        }
                                    }
                                    this.state = 2233;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2238;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2248;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2239;
                                        this.hspl();
                                        this.state = 2240;
                                        this.s_and_w();
                                        this.state = 2244;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2241;
                                                    this.nl();
                                                    this.state = 2242;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2246;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmark.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2250;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 289, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2252;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        survey_1() {
            let _localctx = new Survey_1Context(this._ctx, this.state);
            this.enterRule(_localctx, 216, bitmark.RULE_survey_1);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2254;
                    this.match(bitmark.BitSurvey1);
                    this.state = 2255;
                    this.format();
                    this.state = 2256;
                    this.cl();
                    this.state = 2260;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 2257;
                                this.nl();
                            }
                        }
                        this.state = 2262;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2272;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 2263;
                                this.bitElem();
                                this.state = 2267;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmark.NL) {
                                    {
                                        {
                                            this.state = 2264;
                                            this.nl();
                                        }
                                    }
                                    this.state = 2269;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2274;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2284;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2275;
                                        this.hspl();
                                        this.state = 2276;
                                        this.s_and_w();
                                        this.state = 2280;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2277;
                                                    this.nl();
                                                    this.state = 2278;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2282;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmark.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2286;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 294, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2288;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        survey_anonymous() {
            let _localctx = new Survey_anonymousContext(this._ctx, this.state);
            this.enterRule(_localctx, 218, bitmark.RULE_survey_anonymous);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2290;
                    this.match(bitmark.BitSurveyanon);
                    this.state = 2291;
                    this.format();
                    this.state = 2292;
                    this.cl();
                    this.state = 2296;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 2293;
                                this.nl();
                            }
                        }
                        this.state = 2298;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2308;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 2299;
                                this.bitElem();
                                this.state = 2303;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmark.NL) {
                                    {
                                        {
                                            this.state = 2300;
                                            this.nl();
                                        }
                                    }
                                    this.state = 2305;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2310;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2320;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2311;
                                        this.hspl();
                                        this.state = 2312;
                                        this.s_and_w();
                                        this.state = 2316;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2313;
                                                    this.nl();
                                                    this.state = 2314;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2318;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmark.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2322;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 299, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2324;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        survey_anonymous_1() {
            let _localctx = new Survey_anonymous_1Context(this._ctx, this.state);
            this.enterRule(_localctx, 220, bitmark.RULE_survey_anonymous_1);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2326;
                    this.match(bitmark.BitSurveyanon1);
                    this.state = 2327;
                    this.format();
                    this.state = 2328;
                    this.cl();
                    this.state = 2332;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.NL) {
                        {
                            {
                                this.state = 2329;
                                this.nl();
                            }
                        }
                        this.state = 2334;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2344;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPAMP - 53)) | (1 << (bitmark.OPRANGLES - 53)) | (1 << (bitmark.OPRANGLEL - 53)) | (1 << (bitmark.OPU - 53)) | (1 << (bitmark.OPB - 53)) | (1 << (bitmark.OPQ - 53)) | (1 << (bitmark.OPA - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.OPC - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (bitmark.LIST_LINE - 86)) | (1 << (bitmark.EMP1 - 86)) | (1 << (bitmark.EMP2 - 86)) | (1 << (bitmark.EMP3 - 86)) | (1 << (bitmark.NOTE - 86)) | (1 << (bitmark.INS - 86)) | (1 << (bitmark.DEL - 86)) | (1 << (bitmark.REM - 86)) | (1 << (bitmark.HELP - 86)) | (1 << (bitmark.HIGH - 86)) | (1 << (bitmark.ANNO - 86)) | (1 << (bitmark.ANNO_IM - 86)) | (1 << (bitmark.NUMERIC - 86)) | (1 << (bitmark.STRING - 86)) | (1 << (bitmark.SP - 86)) | (1 << (bitmark.SENTENCE - 86)) | (1 << (bitmark.AtReference - 86)) | (1 << (bitmark.AtExamplecol - 86)) | (1 << (bitmark.AtExamplecl - 86)) | (1 << (bitmark.AtLabeltrue - 86)) | (1 << (bitmark.AtLabelfalse - 86)))) !== 0)) {
                        {
                            {
                                this.state = 2335;
                                this.bitElem();
                                this.state = 2339;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmark.NL) {
                                    {
                                        {
                                            this.state = 2336;
                                            this.nl();
                                        }
                                    }
                                    this.state = 2341;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2346;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2356;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2347;
                                        this.hspl();
                                        this.state = 2348;
                                        this.s_and_w();
                                        this.state = 2352;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2349;
                                                    this.nl();
                                                    this.state = 2350;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2354;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmark.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2358;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2360;
                    this.hspl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 222, bitmark.RULE_atpoint);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2362;
                    this.match(bitmark.AtPoints);
                    this.state = 2363;
                    this.numeric();
                    this.state = 2364;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 224, bitmark.RULE_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2369;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (bitmark.AmpArticle - 119)) | (1 << (bitmark.BitmarkMinus - 119)) | (1 << (bitmark.BitmarkPlus - 119)))) !== 0)) {
                        {
                            {
                                this.state = 2366;
                                _la = this._input.LA(1);
                                if (!(((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (bitmark.AmpArticle - 119)) | (1 << (bitmark.BitmarkMinus - 119)) | (1 << (bitmark.BitmarkPlus - 119)))) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 2371;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2383;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmark.AMP || _la === bitmark.ColonText) {
                        {
                            this.state = 2381;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 306, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2372;
                                        this.match(bitmark.ColonText);
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 2373;
                                        this.match(bitmark.AMP);
                                        this.state = 2374;
                                        this.image_format();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 2375;
                                        this.match(bitmark.AMP);
                                        this.state = 2376;
                                        this.audio_format();
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 2377;
                                        this.match(bitmark.AMP);
                                        this.state = 2378;
                                        this.video_format();
                                    }
                                    break;
                                case 5:
                                    {
                                        this.state = 2379;
                                        this.match(bitmark.AMP);
                                        this.state = 2380;
                                        this.article_format();
                                    }
                                    break;
                            }
                        }
                        this.state = 2385;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 226, bitmark.RULE_image_format);
            let _la;
            try {
                this.state = 2403;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.Image:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2386;
                            this.match(bitmark.Image);
                            this.state = 2390;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmark.COLON:
                                    {
                                        {
                                            this.state = 2387;
                                            this.match(bitmark.COLON);
                                            this.state = 2388;
                                            this.image_type();
                                        }
                                    }
                                    break;
                                case bitmark.DotArticleAtt:
                                    {
                                        {
                                            this.state = 2389;
                                            this.match(bitmark.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case bitmark.CL:
                                case bitmark.AMP:
                                case bitmark.DBLCOLON:
                                case bitmark.DotAt:
                                case bitmark.ColonText:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case bitmark.ImageOnline:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2392;
                            this.match(bitmark.ImageOnline);
                            this.state = 2395;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.COLON) {
                                {
                                    this.state = 2393;
                                    this.match(bitmark.COLON);
                                    this.state = 2394;
                                    this.image_type();
                                }
                            }
                        }
                        break;
                    case bitmark.ImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2397;
                            this.match(bitmark.ImageZoom);
                            this.state = 2400;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.COLON) {
                                {
                                    this.state = 2398;
                                    this.match(bitmark.COLON);
                                    this.state = 2399;
                                    this.image_type();
                                }
                            }
                        }
                        break;
                    case bitmark.ImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 2402;
                            this.match(bitmark.ImageWAudio);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        image_type() {
            let _localctx = new Image_typeContext(this._ctx, this.state);
            this.enterRule(_localctx, 228, bitmark.RULE_image_type);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2405;
                    _la = this._input.LA(1);
                    if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (bitmark.BASIC - 137)) | (1 << (bitmark.JPG - 137)) | (1 << (bitmark.PNG - 137)) | (1 << (bitmark.GIF - 137)) | (1 << (bitmark.SVG - 137)))) !== 0))) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 230, bitmark.RULE_audio_format);
            let _la;
            try {
                this.state = 2417;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.Audio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2407;
                            this.match(bitmark.Audio);
                            this.state = 2410;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.COLON) {
                                {
                                    this.state = 2408;
                                    this.match(bitmark.COLON);
                                    this.state = 2409;
                                    this.audio_type();
                                }
                            }
                        }
                        break;
                    case bitmark.AudioOnline:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2412;
                            this.match(bitmark.AudioOnline);
                            this.state = 2415;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.COLON) {
                                {
                                    this.state = 2413;
                                    this.match(bitmark.COLON);
                                    this.state = 2414;
                                    this.audio_type();
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        audio_type() {
            let _localctx = new Audio_typeContext(this._ctx, this.state);
            this.enterRule(_localctx, 232, bitmark.RULE_audio_type);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2419;
                    _la = this._input.LA(1);
                    if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (bitmark.BASIC - 137)) | (1 << (bitmark.MP3 - 137)) | (1 << (bitmark.MP4 - 137)))) !== 0))) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 234, bitmark.RULE_video_format);
            let _la;
            try {
                this.state = 2431;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.Video:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2421;
                            this.match(bitmark.Video);
                            this.state = 2424;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.COLON) {
                                {
                                    this.state = 2422;
                                    this.match(bitmark.COLON);
                                    this.state = 2423;
                                    this.video_type();
                                }
                            }
                        }
                        break;
                    case bitmark.VideoOnline:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2426;
                            this.match(bitmark.VideoOnline);
                            this.state = 2429;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.COLON) {
                                {
                                    this.state = 2427;
                                    this.match(bitmark.COLON);
                                    this.state = 2428;
                                    this.video_type();
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        video_type() {
            let _localctx = new Video_typeContext(this._ctx, this.state);
            this.enterRule(_localctx, 236, bitmark.RULE_video_type);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2433;
                    _la = this._input.LA(1);
                    if (!(((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (bitmark.GIF - 140)) | (1 << (bitmark.MP2 - 140)) | (1 << (bitmark.MP4 - 140)) | (1 << (bitmark.FLV - 140)) | (1 << (bitmark.WMV - 140)) | (1 << (bitmark.MPEG - 140)) | (1 << (bitmark.MPG - 140)))) !== 0))) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 238, bitmark.RULE_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2435;
                    _la = this._input.LA(1);
                    if (!(((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmark.Article - 131)) | (1 << (bitmark.ArticleOnline - 131)) | (1 << (bitmark.ArticleAttachmt - 131)))) !== 0))) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 240, bitmark.RULE_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2437;
                    _la = this._input.LA(1);
                    if (!(_la === bitmark.Document || _la === bitmark.DocumentOnline)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 242, bitmark.RULE_app_format);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2439;
                    this.match(bitmark.App);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 244, bitmark.RULE_imagebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2441;
                    this.match(bitmark.OPAMP);
                    this.state = 2442;
                    this.image_format();
                    this.state = 2444;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.DotAt) {
                        {
                            this.state = 2443;
                            this.resolution();
                        }
                    }
                    this.state = 2446;
                    this.match(bitmark.DBLCOLON);
                    this.state = 2447;
                    this.url();
                    this.state = 2448;
                    this.cl();
                    this.state = 2451;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 319, this._ctx)) {
                        case 1:
                            {
                                this.state = 2449;
                                this.match(bitmark.NL);
                                this.state = 2450;
                                this.match(bitmark.ShowInIndex);
                            }
                            break;
                    }
                    this.state = 2457;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPATALT) {
                        {
                            this.state = 2453;
                            this.match(bitmark.OPATALT);
                            this.state = 2454;
                            this.words();
                            this.state = 2455;
                            this.cl();
                        }
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 246, bitmark.RULE_audiobit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2459;
                    this.match(bitmark.OPAMP);
                    this.state = 2460;
                    this.audio_format();
                    this.state = 2461;
                    this.match(bitmark.DBLCOLON);
                    this.state = 2462;
                    this.url();
                    this.state = 2463;
                    this.cl();
                    this.state = 2468;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPATALT) {
                        {
                            this.state = 2464;
                            this.match(bitmark.OPATALT);
                            this.state = 2465;
                            this.words();
                            this.state = 2466;
                            this.cl();
                        }
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 248, bitmark.RULE_videobit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2470;
                    this.match(bitmark.OPAMP);
                    this.state = 2471;
                    this.video_format();
                    this.state = 2472;
                    this.match(bitmark.DBLCOLON);
                    this.state = 2473;
                    this.url();
                    this.state = 2474;
                    this.cl();
                    this.state = 2479;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPATALT) {
                        {
                            this.state = 2475;
                            this.match(bitmark.OPATALT);
                            this.state = 2476;
                            this.words();
                            this.state = 2477;
                            this.cl();
                        }
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 250, bitmark.RULE_articlebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2481;
                    this.match(bitmark.OPAMP);
                    this.state = 2482;
                    this.article_format();
                    this.state = 2483;
                    this.match(bitmark.DBLCOLON);
                    this.state = 2484;
                    this.url();
                    this.state = 2485;
                    this.cl();
                    this.state = 2490;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPATALT) {
                        {
                            this.state = 2486;
                            this.match(bitmark.OPATALT);
                            this.state = 2487;
                            this.words();
                            this.state = 2488;
                            this.cl();
                        }
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 252, bitmark.RULE_documentbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2492;
                    this.match(bitmark.OPAMP);
                    this.state = 2493;
                    this.document_format();
                    this.state = 2494;
                    this.match(bitmark.DBLCOLON);
                    this.state = 2495;
                    this.url();
                    this.state = 2496;
                    this.cl();
                    this.state = 2501;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPATALT) {
                        {
                            this.state = 2497;
                            this.match(bitmark.OPATALT);
                            this.state = 2498;
                            this.words();
                            this.state = 2499;
                            this.cl();
                        }
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 254, bitmark.RULE_appbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2503;
                    this.match(bitmark.OPAMP);
                    this.state = 2504;
                    this.app_format();
                    this.state = 2505;
                    this.match(bitmark.DBLCOLON);
                    this.state = 2508;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case bitmark.Http:
                        case bitmark.Https:
                            {
                                this.state = 2506;
                                this.url();
                            }
                            break;
                        case bitmark.TEL:
                            {
                                this.state = 2507;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 2510;
                    this.cl();
                    this.state = 2515;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmark.OPATALT) {
                        {
                            this.state = 2511;
                            this.match(bitmark.OPATALT);
                            this.state = 2512;
                            this.words();
                            this.state = 2513;
                            this.cl();
                        }
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 256, bitmark.RULE_telephone);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2517;
                    this.match(bitmark.TEL);
                    this.state = 2518;
                    this.match(bitmark.PLUS);
                    this.state = 2519;
                    this.numeric();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        resolution() {
            let _localctx = new ResolutionContext(this._ctx, this.state);
            this.enterRule(_localctx, 258, bitmark.RULE_resolution);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2521;
                    this.match(bitmark.DotAt);
                    this.state = 2523;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 2522;
                                this.match(bitmark.NUMERIC);
                            }
                        }
                        this.state = 2525;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmark.NUMERIC);
                    this.state = 2527;
                    this.match(bitmark.DBLCOLON);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 260, bitmark.RULE_url);
            let _la;
            try {
                this.state = 2541;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.Http:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2529;
                            this.match(bitmark.Http);
                            this.state = 2531;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 2530;
                                        _la = this._input.LA(1);
                                        if (_la <= 0 || (_la === bitmark.CL)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                    }
                                }
                                this.state = 2533;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmark.BitBook) | (1 << bitmark.BitChapter) | (1 << bitmark.BitToc) | (1 << bitmark.BitSummary) | (1 << bitmark.BitIntlink) | (1 << bitmark.BitAlias) | (1 << bitmark.BitGroups) | (1 << bitmark.BitGroupt) | (1 << bitmark.BitCloze) | (1 << bitmark.BitClozeinstgrp) | (1 << bitmark.BitClozesolgrp) | (1 << bitmark.BitMultichoice1) | (1 << bitmark.BitMultichoice) | (1 << bitmark.BitMultiresp1) | (1 << bitmark.BitMultiresp) | (1 << bitmark.BitMultichoisetext) | (1 << bitmark.BitClozeandmulti) | (1 << bitmark.BitEssay) | (1 << bitmark.BitArticleattach) | (1 << bitmark.BitInterview) | (1 << bitmark.BitInterviewinstgrp) | (1 << bitmark.BitMatch) | (1 << bitmark.BitMatchall) | (1 << bitmark.BitMatchrev) | (1 << bitmark.BitMatchallrev) | (1 << bitmark.BitMatchpic) | (1 << bitmark.BitMatchaudio) | (1 << bitmark.BitMatchsolgrp) | (1 << bitmark.BitTruefalse1) | (1 << bitmark.BitTruefalse) | (1 << bitmark.BitSequence))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmark.BitCorrection - 32)) | (1 << (bitmark.BitMark - 32)) | (1 << (bitmark.BitDocup - 32)) | (1 << (bitmark.BitTakepic - 32)) | (1 << (bitmark.BitRecaud - 32)) | (1 << (bitmark.BitPrepnote - 32)) | (1 << (bitmark.BitAssign - 32)) | (1 << (bitmark.BitFlash1 - 32)) | (1 << (bitmark.BitFlash - 32)) | (1 << (bitmark.BitArticle - 32)) | (1 << (bitmark.BitChat - 32)) | (1 << (bitmark.BitConv - 32)) | (1 << (bitmark.BitBotint - 32)) | (1 << (bitmark.BitSelfassess - 32)) | (1 << (bitmark.BitRating - 32)) | (1 << (bitmark.BitSurvey - 32)) | (1 << (bitmark.BitSurvey1 - 32)) | (1 << (bitmark.BitSurveyanon - 32)) | (1 << (bitmark.BitSurveyanon1 - 32)) | (1 << (bitmark.OPDOLL - 32)) | (1 << (bitmark.OPBUL - 32)) | (1 << (bitmark.OPESC - 32)) | (1 << (bitmark.OPAMP - 32)) | (1 << (bitmark.OPRANGLES - 32)) | (1 << (bitmark.OPRANGLEL - 32)) | (1 << (bitmark.OPDANGLE - 32)) | (1 << (bitmark.OPD - 32)) | (1 << (bitmark.OPU - 32)) | (1 << (bitmark.OPB - 32)) | (1 << (bitmark.OPQ - 32)) | (1 << (bitmark.OPA - 32)) | (1 << (bitmark.OPP - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmark.OPM - 64)) | (1 << (bitmark.OPS - 64)) | (1 << (bitmark.OPR - 64)) | (1 << (bitmark.OPC - 64)) | (1 << (bitmark.OPHASH - 64)) | (1 << (bitmark.OPHASH2 - 64)) | (1 << (bitmark.OP - 64)) | (1 << (bitmark.COLON - 64)) | (1 << (bitmark.AMP - 64)) | (1 << (bitmark.DBLCOLON - 64)) | (1 << (bitmark.PLUS - 64)) | (1 << (bitmark.DotAt - 64)) | (1 << (bitmark.Greater - 64)) | (1 << (bitmark.Less - 64)) | (1 << (bitmark.EQ - 64)) | (1 << (bitmark.EQ2 - 64)) | (1 << (bitmark.OR - 64)) | (1 << (bitmark.HSPL - 64)) | (1 << (bitmark.HSPL2 - 64)) | (1 << (bitmark.SSPL - 64)) | (1 << (bitmark.SSPL2 - 64)) | (1 << (bitmark.LIST_LINE - 64)) | (1 << (bitmark.EMP1 - 64)) | (1 << (bitmark.EMP2 - 64)) | (1 << (bitmark.EMP3 - 64)) | (1 << (bitmark.NOTE - 64)) | (1 << (bitmark.INS - 64)) | (1 << (bitmark.DEL - 64)) | (1 << (bitmark.REM - 64)) | (1 << (bitmark.HELP - 64)) | (1 << (bitmark.HIGH - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmark.ANNO - 96)) | (1 << (bitmark.ANNO_IM - 96)) | (1 << (bitmark.NOTCL - 96)) | (1 << (bitmark.NUMERIC - 96)) | (1 << (bitmark.STRING - 96)) | (1 << (bitmark.SP - 96)) | (1 << (bitmark.NL - 96)) | (1 << (bitmark.SENTENCE - 96)) | (1 << (bitmark.COMMENT - 96)) | (1 << (bitmark.AtProgress - 96)) | (1 << (bitmark.AtReference - 96)) | (1 << (bitmark.AtExamplecol - 96)) | (1 << (bitmark.AtExamplecl - 96)) | (1 << (bitmark.AtLonganswer - 96)) | (1 << (bitmark.AtShortanswer - 96)) | (1 << (bitmark.AtLabeltrue - 96)) | (1 << (bitmark.AtLabelfalse - 96)) | (1 << (bitmark.AtPoints - 96)) | (1 << (bitmark.Http - 96)) | (1 << (bitmark.Https - 96)) | (1 << (bitmark.ColonCollection - 96)) | (1 << (bitmark.ColonBook - 96)) | (1 << (bitmark.AmpArticleAtt - 96)) | (1 << (bitmark.AmpArticle - 96)) | (1 << (bitmark.BitmarkMinus - 96)) | (1 << (bitmark.BitmarkPlus - 96)) | (1 << (bitmark.ColonText - 96)) | (1 << (bitmark.Image - 96)) | (1 << (bitmark.ImageOnline - 96)) | (1 << (bitmark.ImageZoom - 96)) | (1 << (bitmark.ImageWAudio - 96)) | (1 << (bitmark.Audio - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmark.AudioOnline - 128)) | (1 << (bitmark.Video - 128)) | (1 << (bitmark.VideoOnline - 128)) | (1 << (bitmark.Article - 128)) | (1 << (bitmark.ArticleOnline - 128)) | (1 << (bitmark.ArticleAttachmt - 128)) | (1 << (bitmark.Document - 128)) | (1 << (bitmark.DocumentOnline - 128)) | (1 << (bitmark.App - 128)) | (1 << (bitmark.BASIC - 128)) | (1 << (bitmark.JPG - 128)) | (1 << (bitmark.PNG - 128)) | (1 << (bitmark.GIF - 128)) | (1 << (bitmark.SVG - 128)) | (1 << (bitmark.MP2 - 128)) | (1 << (bitmark.MP3 - 128)) | (1 << (bitmark.MP4 - 128)) | (1 << (bitmark.FLV - 128)) | (1 << (bitmark.WMV - 128)) | (1 << (bitmark.MPEG - 128)) | (1 << (bitmark.MPG - 128)) | (1 << (bitmark.TEL - 128)) | (1 << (bitmark.OPATALT - 128)) | (1 << (bitmark.OPAMARK - 128)) | (1 << (bitmark.DotArticleAtt - 128)) | (1 << (bitmark.ShowInIndex - 128)))) !== 0));
                        }
                        break;
                    case bitmark.Https:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2535;
                            this.match(bitmark.Https);
                            this.state = 2537;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 2536;
                                        _la = this._input.LA(1);
                                        if (_la <= 0 || (_la === bitmark.CL)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                    }
                                }
                                this.state = 2539;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmark.BitBook) | (1 << bitmark.BitChapter) | (1 << bitmark.BitToc) | (1 << bitmark.BitSummary) | (1 << bitmark.BitIntlink) | (1 << bitmark.BitAlias) | (1 << bitmark.BitGroups) | (1 << bitmark.BitGroupt) | (1 << bitmark.BitCloze) | (1 << bitmark.BitClozeinstgrp) | (1 << bitmark.BitClozesolgrp) | (1 << bitmark.BitMultichoice1) | (1 << bitmark.BitMultichoice) | (1 << bitmark.BitMultiresp1) | (1 << bitmark.BitMultiresp) | (1 << bitmark.BitMultichoisetext) | (1 << bitmark.BitClozeandmulti) | (1 << bitmark.BitEssay) | (1 << bitmark.BitArticleattach) | (1 << bitmark.BitInterview) | (1 << bitmark.BitInterviewinstgrp) | (1 << bitmark.BitMatch) | (1 << bitmark.BitMatchall) | (1 << bitmark.BitMatchrev) | (1 << bitmark.BitMatchallrev) | (1 << bitmark.BitMatchpic) | (1 << bitmark.BitMatchaudio) | (1 << bitmark.BitMatchsolgrp) | (1 << bitmark.BitTruefalse1) | (1 << bitmark.BitTruefalse) | (1 << bitmark.BitSequence))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmark.BitCorrection - 32)) | (1 << (bitmark.BitMark - 32)) | (1 << (bitmark.BitDocup - 32)) | (1 << (bitmark.BitTakepic - 32)) | (1 << (bitmark.BitRecaud - 32)) | (1 << (bitmark.BitPrepnote - 32)) | (1 << (bitmark.BitAssign - 32)) | (1 << (bitmark.BitFlash1 - 32)) | (1 << (bitmark.BitFlash - 32)) | (1 << (bitmark.BitArticle - 32)) | (1 << (bitmark.BitChat - 32)) | (1 << (bitmark.BitConv - 32)) | (1 << (bitmark.BitBotint - 32)) | (1 << (bitmark.BitSelfassess - 32)) | (1 << (bitmark.BitRating - 32)) | (1 << (bitmark.BitSurvey - 32)) | (1 << (bitmark.BitSurvey1 - 32)) | (1 << (bitmark.BitSurveyanon - 32)) | (1 << (bitmark.BitSurveyanon1 - 32)) | (1 << (bitmark.OPDOLL - 32)) | (1 << (bitmark.OPBUL - 32)) | (1 << (bitmark.OPESC - 32)) | (1 << (bitmark.OPAMP - 32)) | (1 << (bitmark.OPRANGLES - 32)) | (1 << (bitmark.OPRANGLEL - 32)) | (1 << (bitmark.OPDANGLE - 32)) | (1 << (bitmark.OPD - 32)) | (1 << (bitmark.OPU - 32)) | (1 << (bitmark.OPB - 32)) | (1 << (bitmark.OPQ - 32)) | (1 << (bitmark.OPA - 32)) | (1 << (bitmark.OPP - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmark.OPM - 64)) | (1 << (bitmark.OPS - 64)) | (1 << (bitmark.OPR - 64)) | (1 << (bitmark.OPC - 64)) | (1 << (bitmark.OPHASH - 64)) | (1 << (bitmark.OPHASH2 - 64)) | (1 << (bitmark.OP - 64)) | (1 << (bitmark.COLON - 64)) | (1 << (bitmark.AMP - 64)) | (1 << (bitmark.DBLCOLON - 64)) | (1 << (bitmark.PLUS - 64)) | (1 << (bitmark.DotAt - 64)) | (1 << (bitmark.Greater - 64)) | (1 << (bitmark.Less - 64)) | (1 << (bitmark.EQ - 64)) | (1 << (bitmark.EQ2 - 64)) | (1 << (bitmark.OR - 64)) | (1 << (bitmark.HSPL - 64)) | (1 << (bitmark.HSPL2 - 64)) | (1 << (bitmark.SSPL - 64)) | (1 << (bitmark.SSPL2 - 64)) | (1 << (bitmark.LIST_LINE - 64)) | (1 << (bitmark.EMP1 - 64)) | (1 << (bitmark.EMP2 - 64)) | (1 << (bitmark.EMP3 - 64)) | (1 << (bitmark.NOTE - 64)) | (1 << (bitmark.INS - 64)) | (1 << (bitmark.DEL - 64)) | (1 << (bitmark.REM - 64)) | (1 << (bitmark.HELP - 64)) | (1 << (bitmark.HIGH - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmark.ANNO - 96)) | (1 << (bitmark.ANNO_IM - 96)) | (1 << (bitmark.NOTCL - 96)) | (1 << (bitmark.NUMERIC - 96)) | (1 << (bitmark.STRING - 96)) | (1 << (bitmark.SP - 96)) | (1 << (bitmark.NL - 96)) | (1 << (bitmark.SENTENCE - 96)) | (1 << (bitmark.COMMENT - 96)) | (1 << (bitmark.AtProgress - 96)) | (1 << (bitmark.AtReference - 96)) | (1 << (bitmark.AtExamplecol - 96)) | (1 << (bitmark.AtExamplecl - 96)) | (1 << (bitmark.AtLonganswer - 96)) | (1 << (bitmark.AtShortanswer - 96)) | (1 << (bitmark.AtLabeltrue - 96)) | (1 << (bitmark.AtLabelfalse - 96)) | (1 << (bitmark.AtPoints - 96)) | (1 << (bitmark.Http - 96)) | (1 << (bitmark.Https - 96)) | (1 << (bitmark.ColonCollection - 96)) | (1 << (bitmark.ColonBook - 96)) | (1 << (bitmark.AmpArticleAtt - 96)) | (1 << (bitmark.AmpArticle - 96)) | (1 << (bitmark.BitmarkMinus - 96)) | (1 << (bitmark.BitmarkPlus - 96)) | (1 << (bitmark.ColonText - 96)) | (1 << (bitmark.Image - 96)) | (1 << (bitmark.ImageOnline - 96)) | (1 << (bitmark.ImageZoom - 96)) | (1 << (bitmark.ImageWAudio - 96)) | (1 << (bitmark.Audio - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmark.AudioOnline - 128)) | (1 << (bitmark.Video - 128)) | (1 << (bitmark.VideoOnline - 128)) | (1 << (bitmark.Article - 128)) | (1 << (bitmark.ArticleOnline - 128)) | (1 << (bitmark.ArticleAttachmt - 128)) | (1 << (bitmark.Document - 128)) | (1 << (bitmark.DocumentOnline - 128)) | (1 << (bitmark.App - 128)) | (1 << (bitmark.BASIC - 128)) | (1 << (bitmark.JPG - 128)) | (1 << (bitmark.PNG - 128)) | (1 << (bitmark.GIF - 128)) | (1 << (bitmark.SVG - 128)) | (1 << (bitmark.MP2 - 128)) | (1 << (bitmark.MP3 - 128)) | (1 << (bitmark.MP4 - 128)) | (1 << (bitmark.FLV - 128)) | (1 << (bitmark.WMV - 128)) | (1 << (bitmark.MPEG - 128)) | (1 << (bitmark.MPG - 128)) | (1 << (bitmark.TEL - 128)) | (1 << (bitmark.OPATALT - 128)) | (1 << (bitmark.OPAMARK - 128)) | (1 << (bitmark.DotArticleAtt - 128)) | (1 << (bitmark.ShowInIndex - 128)))) !== 0));
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 262, bitmark.RULE_lines);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2547;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2543;
                                        this.s_and_w();
                                        this.state = 2545;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 331, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 2544;
                                                    this.nl();
                                                }
                                                break;
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2549;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 332, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 264, bitmark.RULE_s_and_w);
            let _la;
            try {
                this.state = 2583;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 338, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2551;
                            this.note_();
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2552;
                            this.remark_();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2553;
                            this.string();
                            this.state = 2557;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 333, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2554;
                                        this.sp();
                                        this.state = 2555;
                                        this.numeric();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 2559;
                            this.words();
                            this.state = 2563;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 334, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2560;
                                        this.sp();
                                        this.state = 2561;
                                        this.numeric();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 2565;
                            this.titlestar_();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 2566;
                            this.ops();
                            this.state = 2567;
                            this.s_and_w();
                            this.state = 2568;
                            this.cl();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 2570;
                            this.numeric();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 2571;
                            this.bracket_escaped();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 2573;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmark.SP) {
                                {
                                    this.state = 2572;
                                    this.match(bitmark.SP);
                                }
                            }
                            this.state = 2575;
                            this.match(bitmark.COLON);
                            this.state = 2577;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 336, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2576;
                                        this.match(bitmark.SP);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 2579;
                            this.match(bitmark.AMP);
                            this.state = 2581;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 337, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2580;
                                        this.match(bitmark.SP);
                                    }
                                    break;
                            }
                        }
                        break;
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 266, bitmark.RULE_anchor);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2585;
                    this.match(bitmark.OPDANGLE);
                    this.state = 2587;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0)) {
                        {
                            this.state = 2586;
                            this.s_and_w();
                        }
                    }
                    this.state = 2589;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        alias() {
            let _localctx = new AliasContext(this._ctx, this.state);
            this.enterRule(_localctx, 268, bitmark.RULE_alias);
            let _la;
            try {
                this.state = 2601;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmark.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2591;
                            this.match(bitmark.OPRANGLES);
                            this.state = 2593;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0)) {
                                {
                                    this.state = 2592;
                                    this.s_and_w();
                                }
                            }
                            this.state = 2595;
                            this.cl();
                        }
                        break;
                    case bitmark.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2596;
                            this.match(bitmark.OPRANGLEL);
                            this.state = 2598;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (bitmark.OPESC - 53)) | (1 << (bitmark.OPS - 53)) | (1 << (bitmark.COLON - 53)) | (1 << (bitmark.AMP - 53)) | (1 << (bitmark.Greater - 53)) | (1 << (bitmark.Less - 53)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)) | (1 << (bitmark.NOTE - 87)) | (1 << (bitmark.REM - 87)) | (1 << (bitmark.NUMERIC - 87)) | (1 << (bitmark.STRING - 87)) | (1 << (bitmark.SP - 87)) | (1 << (bitmark.SENTENCE - 87)))) !== 0)) {
                                {
                                    this.state = 2597;
                                    this.s_and_w();
                                }
                            }
                            this.state = 2600;
                            this.cl();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 270, bitmark.RULE_item);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2603;
                    this.match(bitmark.OPC);
                    this.state = 2604;
                    this.s_and_w();
                    this.state = 2609;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (bitmark.COLON - 72)) | (1 << (bitmark.AMP - 72)) | (1 << (bitmark.Greater - 72)) | (1 << (bitmark.Less - 72)) | (1 << (bitmark.SENTENCE - 72)))) !== 0)) {
                        {
                            this.state = 2607;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmark.COLON:
                                    {
                                        this.state = 2605;
                                        this.match(bitmark.COLON);
                                    }
                                    break;
                                case bitmark.AMP:
                                case bitmark.Greater:
                                case bitmark.Less:
                                case bitmark.SENTENCE:
                                    {
                                        this.state = 2606;
                                        this.words();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 2611;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2612;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 272, bitmark.RULE_bracket_escaped);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2614;
                    this.match(bitmark.OPESC);
                    this.state = 2615;
                    this.s_and_w();
                    this.state = 2616;
                    this.cl();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        opdoll() {
            let _localctx = new OpdollContext(this._ctx, this.state);
            this.enterRule(_localctx, 274, bitmark.RULE_opdoll);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2618;
                    this.match(bitmark.OPDOLL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        opbul() {
            let _localctx = new OpbulContext(this._ctx, this.state);
            this.enterRule(_localctx, 276, bitmark.RULE_opbul);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2620;
                    this.match(bitmark.OPBUL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        opescape() {
            let _localctx = new OpescapeContext(this._ctx, this.state);
            this.enterRule(_localctx, 278, bitmark.RULE_opescape);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2622;
                    this.match(bitmark.OPESC);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        oprangle() {
            let _localctx = new OprangleContext(this._ctx, this.state);
            this.enterRule(_localctx, 280, bitmark.RULE_oprangle);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2624;
                    _la = this._input.LA(1);
                    if (!(_la === bitmark.OPRANGLES || _la === bitmark.OPRANGLEL)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        opdangle() {
            let _localctx = new OpdangleContext(this._ctx, this.state);
            this.enterRule(_localctx, 282, bitmark.RULE_opdangle);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2626;
                    this.match(bitmark.OPDANGLE);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        opd() {
            let _localctx = new OpdContext(this._ctx, this.state);
            this.enterRule(_localctx, 284, bitmark.RULE_opd);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2628;
                    this.match(bitmark.OPD);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 286, bitmark.RULE_opu);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2630;
                    this.match(bitmark.OPU);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 288, bitmark.RULE_opb);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2632;
                    this.match(bitmark.OPB);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 290, bitmark.RULE_opq);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2634;
                    this.match(bitmark.OPQ);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 292, bitmark.RULE_opa);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2636;
                    this.match(bitmark.OPA);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 294, bitmark.RULE_opp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2638;
                    this.match(bitmark.OPP);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 296, bitmark.RULE_opm);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2640;
                    this.match(bitmark.OPM);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 298, bitmark.RULE_ops);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2642;
                    this.match(bitmark.OPS);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 300, bitmark.RULE_opr);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2644;
                    this.match(bitmark.OPR);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 302, bitmark.RULE_opc);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2646;
                    this.match(bitmark.OPC);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        op() {
            let _localctx = new OpContext(this._ctx, this.state);
            this.enterRule(_localctx, 304, bitmark.RULE_op);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2648;
                    this.match(bitmark.OP);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 306, bitmark.RULE_cl);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2650;
                    this.match(bitmark.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 308, bitmark.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2652;
                    this.match(bitmark.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 310, bitmark.RULE_nl);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2654;
                    this.match(bitmark.NL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        or() {
            let _localctx = new OrContext(this._ctx, this.state);
            this.enterRule(_localctx, 312, bitmark.RULE_or);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2656;
                    this.match(bitmark.OR);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        eq() {
            let _localctx = new EqContext(this._ctx, this.state);
            this.enterRule(_localctx, 314, bitmark.RULE_eq);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2658;
                    _la = this._input.LA(1);
                    if (!(_la === bitmark.EQ || _la === bitmark.EQ2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        hspl() {
            let _localctx = new HsplContext(this._ctx, this.state);
            this.enterRule(_localctx, 316, bitmark.RULE_hspl);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2660;
                    _la = this._input.LA(1);
                    if (!(_la === bitmark.HSPL || _la === bitmark.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 318, bitmark.RULE_sspl);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2662;
                    _la = this._input.LA(1);
                    if (!(_la === bitmark.SSPL || _la === bitmark.SSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        titlestar_() {
            let _localctx = new Titlestar_Context(this._ctx, this.state);
            this.enterRule(_localctx, 320, bitmark.RULE_titlestar_);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2664;
                    _la = this._input.LA(1);
                    if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (bitmark.EMP1 - 87)) | (1 << (bitmark.EMP2 - 87)) | (1 << (bitmark.EMP3 - 87)))) !== 0))) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        ins_() {
            let _localctx = new Ins_Context(this._ctx, this.state);
            this.enterRule(_localctx, 322, bitmark.RULE_ins_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2666;
                    this.match(bitmark.INS);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        del_() {
            let _localctx = new Del_Context(this._ctx, this.state);
            this.enterRule(_localctx, 324, bitmark.RULE_del_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2668;
                    this.match(bitmark.DEL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        note_() {
            let _localctx = new Note_Context(this._ctx, this.state);
            this.enterRule(_localctx, 326, bitmark.RULE_note_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2670;
                    this.match(bitmark.NOTE);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        remark_() {
            let _localctx = new Remark_Context(this._ctx, this.state);
            this.enterRule(_localctx, 328, bitmark.RULE_remark_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2672;
                    this.match(bitmark.REM);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        help_() {
            let _localctx = new Help_Context(this._ctx, this.state);
            this.enterRule(_localctx, 330, bitmark.RULE_help_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2674;
                    this.match(bitmark.HELP);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        highlight_() {
            let _localctx = new Highlight_Context(this._ctx, this.state);
            this.enterRule(_localctx, 332, bitmark.RULE_highlight_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2676;
                    this.match(bitmark.HIGH);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        annotate_() {
            let _localctx = new Annotate_Context(this._ctx, this.state);
            this.enterRule(_localctx, 334, bitmark.RULE_annotate_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2678;
                    this.match(bitmark.ANNO);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        annotate_image_() {
            let _localctx = new Annotate_image_Context(this._ctx, this.state);
            this.enterRule(_localctx, 336, bitmark.RULE_annotate_image_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2680;
                    this.match(bitmark.ANNO_IM);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 338, bitmark.RULE_listline_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2682;
                    this.match(bitmark.LIST_LINE);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 340, bitmark.RULE_numeric);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2684;
                    this.match(bitmark.NUMERIC);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 342, bitmark.RULE_string);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2686;
                    this.match(bitmark.STRING);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 344, bitmark.RULE_words);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2694;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 2694;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmark.SENTENCE:
                                            {
                                                this.state = 2688;
                                                this.match(bitmark.SENTENCE);
                                            }
                                            break;
                                        case bitmark.AMP:
                                            {
                                                this.state = 2689;
                                                this.match(bitmark.AMP);
                                            }
                                            break;
                                        case bitmark.Greater:
                                            {
                                                this.state = 2690;
                                                this.match(bitmark.Greater);
                                                this.state = 2691;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === bitmark.Greater)) {
                                                    this._errHandler.recoverInline(this);
                                                }
                                                else {
                                                    if (this._input.LA(1) === Token.EOF) {
                                                        this.matchedEOF = true;
                                                    }
                                                    this._errHandler.reportMatch(this);
                                                    this.consume();
                                                }
                                            }
                                            break;
                                        case bitmark.Less:
                                            {
                                                this.state = 2692;
                                                this.match(bitmark.Less);
                                                this.state = 2693;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === bitmark.Less)) {
                                                    this._errHandler.recoverInline(this);
                                                }
                                                else {
                                                    if (this._input.LA(1) === Token.EOF) {
                                                        this.matchedEOF = true;
                                                    }
                                                    this._errHandler.reportMatch(this);
                                                    this.consume();
                                                }
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2696;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 346, bitmark.RULE_sp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2698;
                    this.match(bitmark.SP);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
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
            if (!bitmark.__ATN) {
                bitmark.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(bitmark._serializedATN));
            }
            return bitmark.__ATN;
        }
    }
    bitmark.BitBook = 1;
    bitmark.BitChapter = 2;
    bitmark.BitToc = 3;
    bitmark.BitSummary = 4;
    bitmark.BitIntlink = 5;
    bitmark.BitAlias = 6;
    bitmark.BitGroups = 7;
    bitmark.BitGroupt = 8;
    bitmark.BitCloze = 9;
    bitmark.BitClozeinstgrp = 10;
    bitmark.BitClozesolgrp = 11;
    bitmark.BitMultichoice1 = 12;
    bitmark.BitMultichoice = 13;
    bitmark.BitMultiresp1 = 14;
    bitmark.BitMultiresp = 15;
    bitmark.BitMultichoisetext = 16;
    bitmark.BitClozeandmulti = 17;
    bitmark.BitEssay = 18;
    bitmark.BitArticleattach = 19;
    bitmark.BitInterview = 20;
    bitmark.BitInterviewinstgrp = 21;
    bitmark.BitMatch = 22;
    bitmark.BitMatchall = 23;
    bitmark.BitMatchrev = 24;
    bitmark.BitMatchallrev = 25;
    bitmark.BitMatchpic = 26;
    bitmark.BitMatchaudio = 27;
    bitmark.BitMatchsolgrp = 28;
    bitmark.BitTruefalse1 = 29;
    bitmark.BitTruefalse = 30;
    bitmark.BitSequence = 31;
    bitmark.BitCorrection = 32;
    bitmark.BitMark = 33;
    bitmark.BitDocup = 34;
    bitmark.BitTakepic = 35;
    bitmark.BitRecaud = 36;
    bitmark.BitPrepnote = 37;
    bitmark.BitAssign = 38;
    bitmark.BitFlash1 = 39;
    bitmark.BitFlash = 40;
    bitmark.BitArticle = 41;
    bitmark.BitChat = 42;
    bitmark.BitConv = 43;
    bitmark.BitBotint = 44;
    bitmark.BitSelfassess = 45;
    bitmark.BitRating = 46;
    bitmark.BitSurvey = 47;
    bitmark.BitSurvey1 = 48;
    bitmark.BitSurveyanon = 49;
    bitmark.BitSurveyanon1 = 50;
    bitmark.OPDOLL = 51;
    bitmark.OPBUL = 52;
    bitmark.OPESC = 53;
    bitmark.OPAMP = 54;
    bitmark.OPRANGLES = 55;
    bitmark.OPRANGLEL = 56;
    bitmark.OPDANGLE = 57;
    bitmark.OPD = 58;
    bitmark.OPU = 59;
    bitmark.OPB = 60;
    bitmark.OPQ = 61;
    bitmark.OPA = 62;
    bitmark.OPP = 63;
    bitmark.OPM = 64;
    bitmark.OPS = 65;
    bitmark.OPR = 66;
    bitmark.OPC = 67;
    bitmark.OPHASH = 68;
    bitmark.OPHASH2 = 69;
    bitmark.OP = 70;
    bitmark.CL = 71;
    bitmark.COLON = 72;
    bitmark.AMP = 73;
    bitmark.DBLCOLON = 74;
    bitmark.PLUS = 75;
    bitmark.DotAt = 76;
    bitmark.Greater = 77;
    bitmark.Less = 78;
    bitmark.EQ = 79;
    bitmark.EQ2 = 80;
    bitmark.OR = 81;
    bitmark.HSPL = 82;
    bitmark.HSPL2 = 83;
    bitmark.SSPL = 84;
    bitmark.SSPL2 = 85;
    bitmark.LIST_LINE = 86;
    bitmark.EMP1 = 87;
    bitmark.EMP2 = 88;
    bitmark.EMP3 = 89;
    bitmark.NOTE = 90;
    bitmark.INS = 91;
    bitmark.DEL = 92;
    bitmark.REM = 93;
    bitmark.HELP = 94;
    bitmark.HIGH = 95;
    bitmark.ANNO = 96;
    bitmark.ANNO_IM = 97;
    bitmark.NOTCL = 98;
    bitmark.NUMERIC = 99;
    bitmark.STRING = 100;
    bitmark.SP = 101;
    bitmark.NL = 102;
    bitmark.SENTENCE = 103;
    bitmark.COMMENT = 104;
    bitmark.AtProgress = 105;
    bitmark.AtReference = 106;
    bitmark.AtExamplecol = 107;
    bitmark.AtExamplecl = 108;
    bitmark.AtLonganswer = 109;
    bitmark.AtShortanswer = 110;
    bitmark.AtLabeltrue = 111;
    bitmark.AtLabelfalse = 112;
    bitmark.AtPoints = 113;
    bitmark.Http = 114;
    bitmark.Https = 115;
    bitmark.ColonCollection = 116;
    bitmark.ColonBook = 117;
    bitmark.AmpArticleAtt = 118;
    bitmark.AmpArticle = 119;
    bitmark.BitmarkMinus = 120;
    bitmark.BitmarkPlus = 121;
    bitmark.ColonText = 122;
    bitmark.Image = 123;
    bitmark.ImageOnline = 124;
    bitmark.ImageZoom = 125;
    bitmark.ImageWAudio = 126;
    bitmark.Audio = 127;
    bitmark.AudioOnline = 128;
    bitmark.Video = 129;
    bitmark.VideoOnline = 130;
    bitmark.Article = 131;
    bitmark.ArticleOnline = 132;
    bitmark.ArticleAttachmt = 133;
    bitmark.Document = 134;
    bitmark.DocumentOnline = 135;
    bitmark.App = 136;
    bitmark.BASIC = 137;
    bitmark.JPG = 138;
    bitmark.PNG = 139;
    bitmark.GIF = 140;
    bitmark.SVG = 141;
    bitmark.MP2 = 142;
    bitmark.MP3 = 143;
    bitmark.MP4 = 144;
    bitmark.FLV = 145;
    bitmark.WMV = 146;
    bitmark.MPEG = 147;
    bitmark.MPG = 148;
    bitmark.TEL = 149;
    bitmark.OPATALT = 150;
    bitmark.OPAMARK = 151;
    bitmark.DotArticleAtt = 152;
    bitmark.ShowInIndex = 153;
    bitmark.RULE_bitmark = 0;
    bitmark.RULE_bitmark_ = 1;
    bitmark.RULE_bit = 2;
    bitmark.RULE_book = 3;
    bitmark.RULE_chapter = 4;
    bitmark.RULE_title = 5;
    bitmark.RULE_subtitle = 6;
    bitmark.RULE_progress = 7;
    bitmark.RULE_reference = 8;
    bitmark.RULE_toc = 9;
    bitmark.RULE_summary = 10;
    bitmark.RULE_internal_link = 11;
    bitmark.RULE_bit_alias = 12;
    bitmark.RULE_title_etc = 13;
    bitmark.RULE_group_born = 14;
    bitmark.RULE_group_died = 15;
    bitmark.RULE_cloze = 16;
    bitmark.RULE_bitElem = 17;
    bitmark.RULE_cloze_instruction_grouped = 18;
    bitmark.RULE_cloze_solution_grouped = 19;
    bitmark.RULE_gap = 20;
    bitmark.RULE_single_gap = 21;
    bitmark.RULE_instruction = 22;
    bitmark.RULE_hint = 23;
    bitmark.RULE_choices = 24;
    bitmark.RULE_choice_plus = 25;
    bitmark.RULE_choice_minus = 26;
    bitmark.RULE_choice_star = 27;
    bitmark.RULE_multiple_choice_1 = 28;
    bitmark.RULE_multiple_choice = 29;
    bitmark.RULE_multiple_response_1 = 30;
    bitmark.RULE_multiple_response = 31;
    bitmark.RULE_multiple_choice_text = 32;
    bitmark.RULE_headed_inline_choices = 33;
    bitmark.RULE_headed_choices = 34;
    bitmark.RULE_choice_head = 35;
    bitmark.RULE_inline_choices = 36;
    bitmark.RULE_cloze_and_multiple_choice_text = 37;
    bitmark.RULE_essay = 38;
    bitmark.RULE_article_attachment = 39;
    bitmark.RULE_ml_example = 40;
    bitmark.RULE_example = 41;
    bitmark.RULE_interview = 42;
    bitmark.RULE_interview_question = 43;
    bitmark.RULE_interview_answer = 44;
    bitmark.RULE_interview_answer__ = 45;
    bitmark.RULE_longans = 46;
    bitmark.RULE_shortans = 47;
    bitmark.RULE_dollarans = 48;
    bitmark.RULE_interview_instruction_grouped = 49;
    bitmark.RULE_query = 50;
    bitmark.RULE_answer = 51;
    bitmark.RULE_heading = 52;
    bitmark.RULE_key_title = 53;
    bitmark.RULE_value_title = 54;
    bitmark.RULE_pair = 55;
    bitmark.RULE_pairs = 56;
    bitmark.RULE_pair_image = 57;
    bitmark.RULE_pair_images = 58;
    bitmark.RULE_pair_audio = 59;
    bitmark.RULE_pair_audios = 60;
    bitmark.RULE_pquery = 61;
    bitmark.RULE_pquery__ = 62;
    bitmark.RULE_panswer = 63;
    bitmark.RULE_panswer__ = 64;
    bitmark.RULE_pimagebit = 65;
    bitmark.RULE_paudiobit = 66;
    bitmark.RULE_match_ = 67;
    bitmark.RULE_match_all = 68;
    bitmark.RULE_match_reverse = 69;
    bitmark.RULE_match_all_reverse = 70;
    bitmark.RULE_match_picture = 71;
    bitmark.RULE_match_audio = 72;
    bitmark.RULE_match_solution_grouped = 73;
    bitmark.RULE_true_false_1 = 74;
    bitmark.RULE_true_false = 75;
    bitmark.RULE_bool_label = 76;
    bitmark.RULE_sequence = 77;
    bitmark.RULE_correction = 78;
    bitmark.RULE_corrs = 79;
    bitmark.RULE_mark_ = 80;
    bitmark.RULE_mark_text = 81;
    bitmark.RULE_mark_color = 82;
    bitmark.RULE_document_upload = 83;
    bitmark.RULE_take_picture = 84;
    bitmark.RULE_record_audio = 85;
    bitmark.RULE_preparation_note = 86;
    bitmark.RULE_assignment = 87;
    bitmark.RULE_flashcard_1 = 88;
    bitmark.RULE_flashcard = 89;
    bitmark.RULE_sidex = 90;
    bitmark.RULE_side = 91;
    bitmark.RULE_atdef = 92;
    bitmark.RULE_atdef_ = 93;
    bitmark.RULE_article = 94;
    bitmark.RULE_chat = 95;
    bitmark.RULE_initiator = 96;
    bitmark.RULE_partner = 97;
    bitmark.RULE_name_text = 98;
    bitmark.RULE_chat_initiator = 99;
    bitmark.RULE_chat_partner = 100;
    bitmark.RULE_conversation = 101;
    bitmark.RULE_bot_interview = 102;
    bitmark.RULE_bot_choice = 103;
    bitmark.RULE_self_assessment = 104;
    bitmark.RULE_rating = 105;
    bitmark.RULE_bullet_item = 106;
    bitmark.RULE_survey = 107;
    bitmark.RULE_survey_1 = 108;
    bitmark.RULE_survey_anonymous = 109;
    bitmark.RULE_survey_anonymous_1 = 110;
    bitmark.RULE_atpoint = 111;
    bitmark.RULE_format = 112;
    bitmark.RULE_image_format = 113;
    bitmark.RULE_image_type = 114;
    bitmark.RULE_audio_format = 115;
    bitmark.RULE_audio_type = 116;
    bitmark.RULE_video_format = 117;
    bitmark.RULE_video_type = 118;
    bitmark.RULE_article_format = 119;
    bitmark.RULE_document_format = 120;
    bitmark.RULE_app_format = 121;
    bitmark.RULE_imagebit = 122;
    bitmark.RULE_audiobit = 123;
    bitmark.RULE_videobit = 124;
    bitmark.RULE_articlebit = 125;
    bitmark.RULE_documentbit = 126;
    bitmark.RULE_appbit = 127;
    bitmark.RULE_telephone = 128;
    bitmark.RULE_resolution = 129;
    bitmark.RULE_url = 130;
    bitmark.RULE_lines = 131;
    bitmark.RULE_s_and_w = 132;
    bitmark.RULE_anchor = 133;
    bitmark.RULE_alias = 134;
    bitmark.RULE_item = 135;
    bitmark.RULE_bracket_escaped = 136;
    bitmark.RULE_opdoll = 137;
    bitmark.RULE_opbul = 138;
    bitmark.RULE_opescape = 139;
    bitmark.RULE_oprangle = 140;
    bitmark.RULE_opdangle = 141;
    bitmark.RULE_opd = 142;
    bitmark.RULE_opu = 143;
    bitmark.RULE_opb = 144;
    bitmark.RULE_opq = 145;
    bitmark.RULE_opa = 146;
    bitmark.RULE_opp = 147;
    bitmark.RULE_opm = 148;
    bitmark.RULE_ops = 149;
    bitmark.RULE_opr = 150;
    bitmark.RULE_opc = 151;
    bitmark.RULE_op = 152;
    bitmark.RULE_cl = 153;
    bitmark.RULE_clnsp = 154;
    bitmark.RULE_nl = 155;
    bitmark.RULE_or = 156;
    bitmark.RULE_eq = 157;
    bitmark.RULE_hspl = 158;
    bitmark.RULE_sspl = 159;
    bitmark.RULE_titlestar_ = 160;
    bitmark.RULE_ins_ = 161;
    bitmark.RULE_del_ = 162;
    bitmark.RULE_note_ = 163;
    bitmark.RULE_remark_ = 164;
    bitmark.RULE_help_ = 165;
    bitmark.RULE_highlight_ = 166;
    bitmark.RULE_annotate_ = 167;
    bitmark.RULE_annotate_image_ = 168;
    bitmark.RULE_listline_ = 169;
    bitmark.RULE_numeric = 170;
    bitmark.RULE_string = 171;
    bitmark.RULE_words = 172;
    bitmark.RULE_sp = 173;
    // tslint:disable:no-trailing-whitespace
    bitmark.ruleNames = [
        "bitmark", "bitmark_", "bit", "book", "chapter", "title", "subtitle",
        "progress", "reference", "toc", "summary", "internal_link", "bit_alias",
        "title_etc", "group_born", "group_died", "cloze", "bitElem", "cloze_instruction_grouped",
        "cloze_solution_grouped", "gap", "single_gap", "instruction", "hint",
        "choices", "choice_plus", "choice_minus", "choice_star", "multiple_choice_1",
        "multiple_choice", "multiple_response_1", "multiple_response", "multiple_choice_text",
        "headed_inline_choices", "headed_choices", "choice_head", "inline_choices",
        "cloze_and_multiple_choice_text", "essay", "article_attachment", "ml_example",
        "example", "interview", "interview_question", "interview_answer", "interview_answer__",
        "longans", "shortans", "dollarans", "interview_instruction_grouped", "query",
        "answer", "heading", "key_title", "value_title", "pair", "pairs", "pair_image",
        "pair_images", "pair_audio", "pair_audios", "pquery", "pquery__", "panswer",
        "panswer__", "pimagebit", "paudiobit", "match_", "match_all", "match_reverse",
        "match_all_reverse", "match_picture", "match_audio", "match_solution_grouped",
        "true_false_1", "true_false", "bool_label", "sequence", "correction",
        "corrs", "mark_", "mark_text", "mark_color", "document_upload", "take_picture",
        "record_audio", "preparation_note", "assignment", "flashcard_1", "flashcard",
        "sidex", "side", "atdef", "atdef_", "article", "chat", "initiator", "partner",
        "name_text", "chat_initiator", "chat_partner", "conversation", "bot_interview",
        "bot_choice", "self_assessment", "rating", "bullet_item", "survey", "survey_1",
        "survey_anonymous", "survey_anonymous_1", "atpoint", "format", "image_format",
        "image_type", "audio_format", "audio_type", "video_format", "video_type",
        "article_format", "document_format", "app_format", "imagebit", "audiobit",
        "videobit", "articlebit", "documentbit", "appbit", "telephone", "resolution",
        "url", "lines", "s_and_w", "anchor", "alias", "item", "bracket_escaped",
        "opdoll", "opbul", "opescape", "oprangle", "opdangle", "opd", "opu", "opb",
        "opq", "opa", "opp", "opm", "ops", "opr", "opc", "op", "cl", "clnsp",
        "nl", "or", "eq", "hspl", "sspl", "titlestar_", "ins_", "del_", "note_",
        "remark_", "help_", "highlight_", "annotate_", "annotate_image_", "listline_",
        "numeric", "string", "words", "sp",
    ];
    bitmark._LITERAL_NAMES = [
        undefined, "'[.book'", "'[.chapter'", "'[.toc'", "'[.summary'", "'[.internal-link'",
        "'[.bit-alias'", "'[.group*'", "'[.group\u2020'", "'[.cloze'", "'[.cloze-instruction-grouped'",
        "'[.cloze-solution-grouped'", "'[.multiple-choice-1'", "'[.multiple-choice'",
        "'[.multiple-response-1'", "'[.multiple-response'", "'[.multiple-choice-text'",
        "'[.cloze-and-multiple-choice-text'", "'[.essay'", "'[.article-attachment'",
        "'[.interview'", "'[.interview-instruction-grouped'", "'[.match'", "'[.match-all'",
        "'[.match-reverse'", "'[.match-all-reverse'", "'[.match-picture'", "'[.match-audio'",
        "'[.match-solution-grouped'", "'[.true-false-1'", "'[.true-false'", "'[.sequence'",
        "'[.correction'", "'[.mark'", "'[.document-upload'", "'[.take-picture'",
        "'[.record-audio'", "'[.preparation-note'", "'[.assignment'", "'[.flashcard-1'",
        "'[.flashcard'", "'[.article'", "'[.chat'", "'[.conversation'", "'[.bot-interview'",
        "'[.self-assessment'", "'[.rating'", "'[.survey'", "'[.survey-1'", "'[.survey-anonymous'",
        "'[.survey-anonymous-1'", "'[$'", "'[\u2022'", "'[^'", "'[&'", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "'[#'", "'[##'",
        "'['", "']'", "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'\n'", undefined, undefined, "'[@progress:'", "'[@reference:'",
        "'[@example:'", "'[@example]'", "'[@longAnswer]'", "'[@shortAnswer]'",
        "'[@label-true:'", "'[@label-false:'", "'[@points:'", "'http://'", "'https://'",
        "':collection'", "':book'", "'&article-attachment'", "'&article'", "':bitmark--'",
        "':bitmark++'", "':text'", "'image'", "'image-online'", "'image-zoom'",
        "'ImageWithAudio'", "'audio'", "'audio-online'", "'video'", "'video-online'",
        "'article'", "'article-online'", "'article-attachment'", "'document'",
        "'document-online'", "'app'", "'basic'", "'jpg'", "'png'", "'gif'", "'svg'",
        "'mp2'", "'mp3'", "'mp4'", "'flv'", "'wmv'", "'mpeg'", "'mpg'", "'tel:'",
        "'[@alt:'", "'[@mark:'", "'.article-attachment'", "'[@showInIndex]'",
    ];
    bitmark._SYMBOLIC_NAMES = [
        undefined, "BitBook", "BitChapter", "BitToc", "BitSummary", "BitIntlink",
        "BitAlias", "BitGroups", "BitGroupt", "BitCloze", "BitClozeinstgrp", "BitClozesolgrp",
        "BitMultichoice1", "BitMultichoice", "BitMultiresp1", "BitMultiresp",
        "BitMultichoisetext", "BitClozeandmulti", "BitEssay", "BitArticleattach",
        "BitInterview", "BitInterviewinstgrp", "BitMatch", "BitMatchall", "BitMatchrev",
        "BitMatchallrev", "BitMatchpic", "BitMatchaudio", "BitMatchsolgrp", "BitTruefalse1",
        "BitTruefalse", "BitSequence", "BitCorrection", "BitMark", "BitDocup",
        "BitTakepic", "BitRecaud", "BitPrepnote", "BitAssign", "BitFlash1", "BitFlash",
        "BitArticle", "BitChat", "BitConv", "BitBotint", "BitSelfassess", "BitRating",
        "BitSurvey", "BitSurvey1", "BitSurveyanon", "BitSurveyanon1", "OPDOLL",
        "OPBUL", "OPESC", "OPAMP", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPD",
        "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", "OPHASH",
        "OPHASH2", "OP", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater",
        "Less", "EQ", "EQ2", "OR", "HSPL", "HSPL2", "SSPL", "SSPL2", "LIST_LINE",
        "EMP1", "EMP2", "EMP3", "NOTE", "INS", "DEL", "REM", "HELP", "HIGH", "ANNO",
        "ANNO_IM", "NOTCL", "NUMERIC", "STRING", "SP", "NL", "SENTENCE", "COMMENT",
        "AtProgress", "AtReference", "AtExamplecol", "AtExamplecl", "AtLonganswer",
        "AtShortanswer", "AtLabeltrue", "AtLabelfalse", "AtPoints", "Http", "Https",
        "ColonCollection", "ColonBook", "AmpArticleAtt", "AmpArticle", "BitmarkMinus",
        "BitmarkPlus", "ColonText", "Image", "ImageOnline", "ImageZoom", "ImageWAudio",
        "Audio", "AudioOnline", "Video", "VideoOnline", "Article", "ArticleOnline",
        "ArticleAttachmt", "Document", "DocumentOnline", "App", "BASIC", "JPG",
        "PNG", "GIF", "SVG", "MP2", "MP3", "MP4", "FLV", "WMV", "MPEG", "MPG",
        "TEL", "OPATALT", "OPAMARK", "DotArticleAtt", "ShowInIndex",
    ];
    bitmark.VOCABULARY = new VocabularyImpl(bitmark._LITERAL_NAMES, bitmark._SYMBOLIC_NAMES, []);
    bitmark._serializedATNSegments = 5;
    bitmark._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9B\u0A8F\x04" +
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
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
        "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
        "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
        "{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
        "\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
        "\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
        "\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
        "\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
        "\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
        "\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
        "\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
        "\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
        "\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
        "\x04\xAF\t\xAF\x03\x02\x03\x02\x05\x02\u0161\n\x02\x03\x02\x07\x02\u0164" +
        "\n\x02\f\x02\x0E\x02\u0167\v\x02\x06\x02\u0169\n\x02\r\x02\x0E\x02\u016A" +
        "\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u0171\n\x03\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
        "\x04\u01AB\n\x04\x03\x05\x03\x05\x05\x05\u01AF\n\x05\x03\x05\x05\x05\u01B2" +
        "\n\x05\x03\x05\x03\x05\x07\x05\u01B6\n\x05\f\x05\x0E\x05\u01B9\v\x05\x03" +
        "\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\u01C1\n\x06\r\x06" +
        "\x0E\x06\u01C2\x05\x06\u01C5\n\x06\x03\x06\x05\x06\u01C8\n\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x07\x03\x07\x06\x07\u01CF\n\x07\r\x07\x0E\x07\u01D0" +
        "\x03\x07\x03\x07\x03\b\x03\b\x06\b\u01D7\n\b\r\b\x0E\b\u01D8\x03\b\x03" +
        "\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x06\n\u01E5\n\n\r\n" +
        "\x0E\n\u01E6\x03\n\x03\n\x03\v\x03\v\x05\v\u01ED\n\v\x03\v\x03\v\x03\v" +
        "\x03\f\x03\f\x05\f\u01F4\n\f\x03\f\x03\f\x07\f\u01F8\n\f\f\f\x0E\f\u01FB" +
        "\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x07\r\u0202\n\r\f\r\x0E\r\u0205\v\r" +
        "\x03\r\x07\r\u0208\n\r\f\r\x0E\r\u020B\v\r\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0F\x05\x0F\u0212\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u021C\n\x0F\x03\x0F\x03\x0F\x07\x0F\u0220" +
        "\n\x0F\f\x0F\x0E\x0F\u0223\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
        "\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0239\n\x12\f" +
        "\x12\x0E\x12\u023C\v\x12\x03\x12\x03\x12\x07\x12\u0240\n\x12\f\x12\x0E" +
        "\x12\u0243\v\x12\x06\x12\u0245\n\x12\r\x12\x0E\x12\u0246\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x07\x13\u025E\n\x13\f\x13\x0E\x13\u0261\v\x13\x03\x13\x03\x13" +
        "\x07\x13\u0265\n\x13\f\x13\x0E\x13\u0268\v\x13\x03\x13\x03\x13\x07\x13" +
        "\u026C\n\x13\f\x13\x0E\x13\u026F\v\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x05\x13\u0276\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u027C" +
        "\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0281\n\x14\x03\x14\x05\x14\u0284" +
        "\n\x14\x03\x14\x07\x14\u0287\n\x14\f\x14\x0E\x14\u028A\v\x14\x03\x14\x03" +
        "\x14\x07\x14\u028E\n\x14\f\x14\x0E\x14\u0291\v\x14\x07\x14\u0293\n\x14" +
        "\f\x14\x0E\x14\u0296\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u029C" +
        "\n\x15\x03\x15\x03\x15\x03\x15\x05\x15\u02A1\n\x15\x03\x15\x05\x15\u02A4" +
        "\n\x15\x03\x15\x07\x15\u02A7\n\x15\f\x15\x0E\x15\u02AA\v\x15\x03\x15\x03" +
        "\x15\x07\x15\u02AE\n\x15\f\x15\x0E\x15\u02B1\v\x15\x07\x15\u02B3\n\x15" +
        "\f\x15\x0E\x15\u02B6\v\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07" +
        "\x16\u02BD\n\x16\f\x16\x0E\x16\u02C0\v\x16\x03\x17\x03\x17\x03\x17\x03" +
        "\x17\x05\x17\u02C6\n\x17\x03\x17\x07\x17\u02C9\n\x17\f\x17\x0E\x17\u02CC" +
        "\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u02D2\n\x18\x03\x18\x03" +
        "\x18\x03\x18\x03\x18\x07\x18\u02D8\n\x18\f\x18\x0E\x18\u02DB\v\x18\x03" +
        "\x18\x07\x18\u02DE\n\x18\f\x18\x0E\x18\u02E1\v\x18\x07\x18\u02E3\n\x18" +
        "\f\x18\x0E\x18\u02E6\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x06\x19\u02EC" +
        "\n\x19\r\x19\x0E\x19\u02ED\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x05" +
        "\x1A\u02F5\n\x1A\x03\x1A\x05\x1A\u02F8\n\x1A\x03\x1A\x05\x1A\u02FB\n\x1A" +
        "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0301\n\x1A\x07\x1A\u0303\n\x1A" +
        "\f\x1A\x0E\x1A\u0306\v\x1A\x03\x1B\x05\x1B\u0309\n\x1B\x03\x1B\x03\x1B" +
        "\x06\x1B\u030D\n\x1B\r\x1B\x0E\x1B\u030E\x03\x1B\x03\x1B\x03\x1C\x05\x1C" +
        "\u0314\n\x1C\x03\x1C\x03\x1C\x06\x1C\u0318\n\x1C\r\x1C\x0E\x1C\u0319\x03" +
        "\x1C\x03\x1C\x03\x1D\x05\x1D\u031F\n\x1D\x03\x1D\x03\x1D\x06\x1D\u0323" +
        "\n\x1D\r\x1D\x0E\x1D\u0324\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1E\x07\x1E\u032F\n\x1E\f\x1E\x0E\x1E\u0332\v\x1E\x07" +
        "\x1E\u0334\n\x1E\f\x1E\x0E\x1E\u0337\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0341\n\x1F\x07\x1F\u0343" +
        "\n\x1F\f\x1F\x0E\x1F\u0346\v\x1F\x03\x1F\x03\x1F\x05\x1F\u034A\n\x1F\x03" +
        "\x1F\x05\x1F\u034D\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0352\n\x1F\x03" +
        "\x1F\x06\x1F\u0355\n\x1F\r\x1F\x0E\x1F\u0356\x03\x1F\x03\x1F\x05\x1F\u035B" +
        "\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0360\n\x1F\x03 \x03 \x03 \x03" +
        " \x03 \x03 \x05 \u0368\n \x06 \u036A\n \r \x0E \u036B\x03 \x03 \x03!\x03" +
        "!\x03!\x03!\x03!\x03!\x07!\u0376\n!\f!\x0E!\u0379\v!\x07!\u037B\n!\f!" +
        "\x0E!\u037E\v!\x03!\x03!\x05!\u0382\n!\x03!\x05!\u0385\n!\x03!\x03!\x03" +
        "!\x05!\u038A\n!\x03!\x03!\x07!\u038E\n!\f!\x0E!\u0391\v!\x06!\u0393\n" +
        "!\r!\x0E!\u0394\x03!\x03!\x05!\u0399\n!\x03!\x03!\x03!\x05!\u039E\n!\x03" +
        "\"\x03\"\x03\"\x03\"\x03\"\x03\"\x07\"\u03A6\n\"\f\"\x0E\"\u03A9\v\"\x07" +
        "\"\u03AB\n\"\f\"\x0E\"\u03AE\v\"\x03\"\x05\"\u03B1\n\"\x03\"\x03\"\x03" +
        "\"\x06\"\u03B6\n\"\r\"\x0E\"\u03B7\x03\"\x06\"\u03BB\n\"\r\"\x0E\"\u03BC" +
        "\x03\"\x05\"\u03C0\n\"\x07\"\u03C2\n\"\f\"\x0E\"\u03C5\v\"\x03#\x05#\u03C8" +
        "\n#\x03#\x03#\x03$\x05$\u03CD\n$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03" +
        "&\x03&\x05&\u03D8\n&\x03&\x03&\x03&\x07&\u03DD\n&\f&\x0E&\u03E0\v&\x03" +
        "\'\x03\'\x03\'\x03\'\x07\'\u03E6\n\'\f\'\x0E\'\u03E9\v\'\x03\'\x03\'\x07" +
        "\'\u03ED\n\'\f\'\x0E\'\u03F0\v\'\x03\'\x03\'\x07\'\u03F4\n\'\f\'\x0E\'" +
        "\u03F7\v\'\x06\'\u03F9\n\'\r\'\x0E\'\u03FA\x03(\x03(\x03(\x03(\x03(\x03" +
        "(\x07(\u0403\n(\f(\x0E(\u0406\v(\x07(\u0408\n(\f(\x0E(\u040B\v(\x03(\x07" +
        "(\u040E\n(\f(\x0E(\u0411\v(\x03(\x03(\x05(\u0415\n(\x07(\u0417\n(\f(\x0E" +
        "(\u041A\v(\x03(\x07(\u041D\n(\f(\x0E(\u0420\v(\x03(\x03(\x03(\x03(\x03" +
        "(\x03(\x03(\x07(\u0429\n(\f(\x0E(\u042C\v(\x07(\u042E\n(\f(\x0E(\u0431" +
        "\v(\x03(\x05(\u0434\n(\x05(\u0436\n(\x03)\x03)\x03)\x03)\x06)\u043C\n" +
        ")\r)\x0E)\u043D\x03)\x03)\x05)\u0442\n)\x03)\x07)\u0445\n)\f)\x0E)\u0448" +
        "\v)\x07)\u044A\n)\f)\x0E)\u044D\v)\x03)\x06)\u0450\n)\r)\x0E)\u0451\x03" +
        ")\x03)\x07)\u0456\n)\f)\x0E)\u0459\v)\x03*\x03*\x05*\u045D\n*\x03*\x03" +
        "*\x05*\u0461\n*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x05+\u046A\n+\x03," +
        "\x03,\x03,\x03,\x07,\u0470\n,\f,\x0E,\u0473\v,\x03,\x03,\x07,\u0477\n" +
        ",\f,\x0E,\u047A\v,\x07,\u047C\n,\f,\x0E,\u047F\v,\x03,\x03,\x07,\u0483" +
        "\n,\f,\x0E,\u0486\v,\x03,\x03,\x07,\u048A\n,\f,\x0E,\u048D\v,\x07,\u048F" +
        "\n,\f,\x0E,\u0492\v,\x07,\u0494\n,\f,\x0E,\u0497\v,\x03,\x03,\x03,\x03" +
        ",\x03,\x03,\x07,\u049F\n,\f,\x0E,\u04A2\v,\x03,\x03,\x07,\u04A6\n,\f," +
        "\x0E,\u04A9\v,\x07,\u04AB\n,\f,\x0E,\u04AE\v,\x03,\x03,\x07,\u04B2\n," +
        "\f,\x0E,\u04B5\v,\x03,\x03,\x03,\x03,\x07,\u04BB\n,\f,\x0E,\u04BE\v,\x06" +
        ",\u04C0\n,\r,\x0E,\u04C1\x07,\u04C4\n,\f,\x0E,\u04C7\v,\x07,\u04C9\n," +
        "\f,\x0E,\u04CC\v,\x03,\x03,\x05,\u04D0\n,\x03-\x03-\x03-\x03-\x07-\u04D6" +
        "\n-\f-\x0E-\u04D9\v-\x03.\x03.\x03.\x03.\x07.\u04DF\n.\f.\x0E.\u04E2\v" +
        ".\x03/\x03/\x06/\u04E6\n/\r/\x0E/\u04E7\x03/\x03/\x05/\u04EC\n/\x03/\x03" +
        "/\x03/\x05/\u04F1\n/\x030\x030\x031\x031\x032\x032\x032\x062\u04FA\n2" +
        "\r2\x0E2\u04FB\x032\x032\x033\x033\x033\x033\x073\u0504\n3\f3\x0E3\u0507" +
        "\v3\x033\x053\u050A\n3\x033\x073\u050D\n3\f3\x0E3\u0510\v3\x033\x073\u0513" +
        "\n3\f3\x0E3\u0516\v3\x033\x033\x033\x073\u051B\n3\f3\x0E3\u051E\v3\x03" +
        "3\x033\x034\x064\u0523\n4\r4\x0E4\u0524\x034\x054\u0528\n4\x034\x054\u052B" +
        "\n4\x035\x065\u052E\n5\r5\x0E5\u052F\x035\x035\x065\u0534\n5\r5\x0E5\u0535" +
        "\x055\u0538\n5\x035\x055\u053B\n5\x035\x055\u053E\n5\x035\x055\u0541\n" +
        "5\x036\x036\x036\x036\x037\x037\x067\u0549\n7\r7\x0E7\u054A\x037\x037" +
        "\x038\x038\x068\u0551\n8\r8\x0E8\u0552\x038\x038\x039\x039\x039\x039\x03" +
        "9\x03:\x06:\u055D\n:\r:\x0E:\u055E\x03;\x03;\x03;\x03;\x03;\x03<\x06<" +
        "\u0567\n<\r<\x0E<\u0568\x03=\x03=\x03=\x03=\x03=\x06=\u0570\n=\r=\x0E" +
        "=\u0571\x03>\x06>\u0575\n>\r>\x0E>\u0576\x03?\x03?\x03?\x03?\x07?\u057D" +
        "\n?\f?\x0E?\u0580\v?\x03@\x05@\u0583\n@\x03@\x06@\u0586\n@\r@\x0E@\u0587" +
        "\x03@\x05@\u058B\n@\x03@\x03@\x05@\u058F\n@\x03A\x03A\x03A\x03A\x07A\u0595" +
        "\nA\fA\x0EA\u0598\vA\x03B\x05B\u059B\nB\x03B\x03B\x05B\u059F\nB\x03B\x05" +
        "B\u05A2\nB\x03B\x03B\x03B\x03B\x05B\u05A8\nB\x03B\x03B\x03B\x06B\u05AD" +
        "\nB\rB\x0EB\u05AE\x03B\x03B\x05B\u05B3\nB\x05B\u05B5\nB\x03C\x03C\x03" +
        "C\x05C\u05BA\nC\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
        "E\x03E\x03E\x03E\x03E\x03E\x07E\u05CC\nE\fE\x0EE\u05CF\vE\x07E\u05D1\n" +
        "E\fE\x0EE\u05D4\vE\x03E\x03E\x03E\x05E\u05D9\nE\x03E\x03E\x03E\x07E\u05DE" +
        "\nE\fE\x0EE\u05E1\vE\x03E\x07E\u05E4\nE\fE\x0EE\u05E7\vE\x03F\x03F\x03" +
        "F\x03F\x03F\x03F\x07F\u05EF\nF\fF\x0EF\u05F2\vF\x07F\u05F4\nF\fF\x0EF" +
        "\u05F7\vF\x03F\x03F\x03F\x05F\u05FC\nF\x03F\x03F\x03F\x07F\u0601\nF\f" +
        "F\x0EF\u0604\vF\x03F\x07F\u0607\nF\fF\x0EF\u060A\vF\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x05G\u0612\nG\x07G\u0614\nG\fG\x0EG\u0617\vG\x03G\x03G\x03" +
        "G\x05G\u061C\nG\x03G\x03G\x03G\x07G\u0621\nG\fG\x0EG\u0624\vG\x03G\x07" +
        "G\u0627\nG\fG\x0EG\u062A\vG\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0632\n" +
        "H\x07H\u0634\nH\fH\x0EH\u0637\vH\x03H\x03H\x03H\x05H\u063C\nH\x03H\x03" +
        "H\x03H\x07H\u0641\nH\fH\x0EH\u0644\vH\x03H\x07H\u0647\nH\fH\x0EH\u064A" +
        "\vH\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0652\nI\x07I\u0654\nI\fI\x0EI" +
        "\u0657\vI\x03I\x03I\x03I\x05I\u065C\nI\x03I\x03I\x03I\x03J\x03J\x03J\x03" +
        "J\x03J\x03J\x05J\u0667\nJ\x07J\u0669\nJ\fJ\x0EJ\u066C\vJ\x03J\x03J\x03" +
        "J\x05J\u0671\nJ\x03J\x03J\x03J\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u067C" +
        "\nK\x07K\u067E\nK\fK\x0EK\u0681\vK\x03K\x03K\x03K\x05K\u0686\nK\x03K\x03" +
        "K\x03K\x03L\x03L\x03L\x03L\x06L\u068F\nL\rL\x0EL\u0690\x03L\x03L\x05L" +
        "\u0695\nL\x07L\u0697\nL\fL\x0EL\u069A\vL\x03L\x03L\x03M\x03M\x03M\x03" +
        "M\x07M\u06A2\nM\fM\x0EM\u06A5\vM\x03M\x05M\u06A8\nM\x03M\x03M\x07M\u06AC" +
        "\nM\fM\x0EM\u06AF\vM\x07M\u06B1\nM\fM\x0EM\u06B4\vM\x03M\x05M\u06B7\n" +
        "M\x03M\x05M\u06BA\nM\x03M\x06M\u06BD\nM\rM\x0EM\u06BE\x03M\x05M\u06C2" +
        "\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u06CC\nN\x03O\x03O\x03" +
        "O\x03O\x07O\u06D2\nO\fO\x0EO\u06D5\vO\x03O\x03O\x07O\u06D9\nO\fO\x0EO" +
        "\u06DC\vO\x07O\u06DE\nO\fO\x0EO\u06E1\vO\x03O\x03O\x07O\u06E5\nO\fO\x0E" +
        "O\u06E8\vO\x03O\x03O\x05O\u06EC\nO\x07O\u06EE\nO\fO\x0EO\u06F1\vO\x06" +
        "O\u06F3\nO\rO\x0EO\u06F4\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x07P" +
        "\u06FF\nP\fP\x0EP\u0702\vP\x07P\u0704\nP\fP\x0EP\u0707\vP\x03P\x06P\u070A" +
        "\nP\rP\x0EP\u070B\x03P\x03P\x03Q\x03Q\x07Q\u0712\nQ\fQ\x0EQ\u0715\vQ\x03" +
        "Q\x03Q\x03Q\x03Q\x03Q\x07Q\u071C\nQ\fQ\x0EQ\u071F\vQ\x03Q\x03Q\x03Q\x05" +
        "Q\u0724\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u072C\nR\x03R\x07R\u072F" +
        "\nR\fR\x0ER\u0732\vR\x07R\u0734\nR\fR\x0ER\u0737\vR\x03S\x03S\x03S\x03" +
        "S\x05S\u073D\nS\x03T\x03T\x03T\x03T\x03U\x03U\x03U\x03U\x03U\x05U\u0748" +
        "\nU\x05U\u074A\nU\x03U\x03U\x03U\x03U\x07U\u0750\nU\fU\x0EU\u0753\vU\x07" +
        "U\u0755\nU\fU\x0EU\u0758\vU\x03V\x03V\x03V\x03V\x03V\x03V\x07V\u0760\n" +
        "V\fV\x0EV\u0763\vV\x07V\u0765\nV\fV\x0EV\u0768\vV\x03W\x03W\x03W\x03W" +
        "\x03W\x03W\x07W\u0770\nW\fW\x0EW\u0773\vW\x07W\u0775\nW\fW\x0EW\u0778" +
        "\vW\x03X\x03X\x03X\x03X\x07X\u077E\nX\fX\x0EX\u0781\vX\x03X\x03X\x03X" +
        "\x05X\u0786\nX\x03X\x05X\u0789\nX\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x07Y\u0791" +
        "\nY\fY\x0EY\u0794\vY\x07Y\u0796\nY\fY\x0EY\u0799\vY\x03Y\x05Y\u079C\n" +
        "Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03[\x03[\x03[\x03[\x07[\u07AA" +
        "\n[\f[\x0E[\u07AD\v[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x07" +
        "[\u07B8\n[\f[\x0E[\u07BB\v[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x06\\\u07C3" +
        "\n\\\r\\\x0E\\\u07C4\x03]\x03]\x03]\x03]\x07]\u07CB\n]\f]\x0E]\u07CE\v" +
        "]\x03^\x03^\x07^\u07D2\n^\f^\x0E^\u07D5\v^\x03^\x07^\u07D8\n^\f^\x0E^" +
        "\u07DB\v^\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x07_\u07E4\n_\f_\x0E_\u07E7" +
        "\v_\x03_\x03_\x03`\x03`\x03`\x03`\x07`\u07EF\n`\f`\x0E`\u07F2\v`\x03`" +
        "\x03`\x07`\u07F6\n`\f`\x0E`\u07F9\v`\x06`\u07FB\n`\r`\x0E`\u07FC\x03a" +
        "\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x07a\u080B\na" +
        "\fa\x0Ea\u080E\va\x06a\u0810\na\ra\x0Ea\u0811\x03a\x03a\x03b\x03b\x03" +
        "b\x03b\x05b\u081A\nb\x03c\x03c\x03c\x03c\x05c\u0820\nc\x03d\x03d\x03d" +
        "\x03d\x03e\x03e\x03f\x03f\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
        "g\x03g\x03g\x03g\x07g\u0836\ng\fg\x0Eg\u0839\vg\x06g\u083B\ng\rg\x0Eg" +
        "\u083C\x03g\x03g\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x07h\u0849\n" +
        "h\fh\x0Eh\u084C\vh\x06h\u084E\nh\rh\x0Eh\u084F\x03h\x03h\x03i\x03i\x03" +
        "i\x03i\x03i\x03i\x03i\x06i\u085B\ni\ri\x0Ei\u085C\x03j\x03j\x03j\x03j" +
        "\x07j\u0863\nj\fj\x0Ej\u0866\vj\x03j\x03j\x07j\u086A\nj\fj\x0Ej\u086D" +
        "\vj\x07j\u086F\nj\fj\x0Ej\u0872\vj\x03j\x03j\x03j\x03j\x03j\x06j\u0879" +
        "\nj\rj\x0Ej\u087A\x06j\u087D\nj\rj\x0Ej\u087E\x03j\x03j\x03k\x03k\x03" +
        "k\x03k\x07k\u0887\nk\fk\x0Ek\u088A\vk\x03k\x03k\x07k\u088E\nk\fk\x0Ek" +
        "\u0891\vk\x07k\u0893\nk\fk\x0Ek\u0896\vk\x03k\x03k\x03k\x03k\x03k\x06" +
        "k\u089D\nk\rk\x0Ek\u089E\x06k\u08A1\nk\rk\x0Ek\u08A2\x03k\x03k\x03l\x03" +
        "l\x03l\x03l\x05l\u08AB\nl\x03m\x03m\x03m\x03m\x07m\u08B1\nm\fm\x0Em\u08B4" +
        "\vm\x03m\x03m\x07m\u08B8\nm\fm\x0Em\u08BB\vm\x07m\u08BD\nm\fm\x0Em\u08C0" +
        "\vm\x03m\x03m\x03m\x03m\x03m\x06m\u08C7\nm\rm\x0Em\u08C8\x06m\u08CB\n" +
        "m\rm\x0Em\u08CC\x03m\x03m\x03n\x03n\x03n\x03n\x07n\u08D5\nn\fn\x0En\u08D8" +
        "\vn\x03n\x03n\x07";
    bitmark._serializedATNSegment1 = "n\u08DC\nn\fn\x0En\u08DF\vn\x07n\u08E1\nn\fn\x0En\u08E4\vn\x03n\x03n\x03" +
        "n\x03n\x03n\x06n\u08EB\nn\rn\x0En\u08EC\x06n\u08EF\nn\rn\x0En\u08F0\x03" +
        "n\x03n\x03o\x03o\x03o\x03o\x07o\u08F9\no\fo\x0Eo\u08FC\vo\x03o\x03o\x07" +
        "o\u0900\no\fo\x0Eo\u0903\vo\x07o\u0905\no\fo\x0Eo\u0908\vo\x03o\x03o\x03" +
        "o\x03o\x03o\x06o\u090F\no\ro\x0Eo\u0910\x06o\u0913\no\ro\x0Eo\u0914\x03" +
        "o\x03o\x03p\x03p\x03p\x03p\x07p\u091D\np\fp\x0Ep\u0920\vp\x03p\x03p\x07" +
        "p\u0924\np\fp\x0Ep\u0927\vp\x07p\u0929\np\fp\x0Ep\u092C\vp\x03p\x03p\x03" +
        "p\x03p\x03p\x06p\u0933\np\rp\x0Ep\u0934\x06p\u0937\np\rp\x0Ep\u0938\x03" +
        "p\x03p\x03q\x03q\x03q\x03q\x03r\x07r\u0942\nr\fr\x0Er\u0945\vr\x03r\x03" +
        "r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x07r\u0950\nr\fr\x0Er\u0953\vr\x03" +
        "s\x03s\x03s\x03s\x05s\u0959\ns\x03s\x03s\x03s\x05s\u095E\ns\x03s\x03s" +
        "\x03s\x05s\u0963\ns\x03s\x05s\u0966\ns\x03t\x03t\x03u\x03u\x03u\x05u\u096D" +
        "\nu\x03u\x03u\x03u\x05u\u0972\nu\x05u\u0974\nu\x03v\x03v\x03w\x03w\x03" +
        "w\x05w\u097B\nw\x03w\x03w\x03w\x05w\u0980\nw\x05w\u0982\nw\x03x\x03x\x03" +
        "y\x03y\x03z\x03z\x03{\x03{\x03|\x03|\x03|\x05|\u098F\n|\x03|\x03|\x03" +
        "|\x03|\x03|\x05|\u0996\n|\x03|\x03|\x03|\x03|\x05|\u099C\n|\x03}\x03}" +
        "\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x05}\u09A7\n}\x03~\x03~\x03~\x03~" +
        "\x03~\x03~\x03~\x03~\x03~\x05~\u09B2\n~\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
        "\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u09BD\n\x7F\x03\x80\x03" +
        "\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80\u09C8" +
        "\n\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u09CF\n\x81\x03" +
        "\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u09D6\n\x81\x03\x82\x03\x82" +
        "\x03\x82\x03\x82\x03\x83\x03\x83\x06\x83\u09DE\n\x83\r\x83\x0E\x83\u09DF" +
        "\x03\x83\x03\x83\x03\x84\x03\x84\x06\x84\u09E6\n\x84\r\x84\x0E\x84\u09E7" +
        "\x03\x84\x03\x84\x06\x84\u09EC\n\x84\r\x84\x0E\x84\u09ED\x05\x84\u09F0" +
        "\n\x84\x03\x85\x03\x85\x05\x85\u09F4\n\x85\x06\x85\u09F6\n\x85\r\x85\x0E" +
        "\x85\u09F7\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0A00" +
        "\n\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0A06\n\x86\x03\x86\x03" +
        "\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0A10\n\x86" +
        "\x03\x86\x03\x86\x05\x86\u0A14\n\x86\x03\x86\x03\x86\x05\x86\u0A18\n\x86" +
        "\x05\x86\u0A1A\n\x86\x03\x87\x03\x87\x05\x87\u0A1E\n\x87\x03\x87\x03\x87" +
        "\x03\x88\x03\x88\x05\x88\u0A24\n\x88\x03\x88\x03\x88\x03\x88\x05\x88\u0A29" +
        "\n\x88\x03\x88\x05\x88\u0A2C\n\x88\x03\x89\x03\x89\x03\x89\x03\x89\x07" +
        "\x89\u0A32\n\x89\f\x89\x0E\x89\u0A35\v\x89\x03\x89\x03\x89\x03\x8A\x03" +
        "\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03" +
        "\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x91\x03\x91\x03\x92\x03" +
        "\x92\x03\x93\x03\x93\x03\x94\x03\x94\x03\x95\x03\x95\x03\x96\x03\x96\x03" +
        "\x97\x03\x97\x03\x98\x03\x98\x03\x99\x03\x99\x03\x9A\x03\x9A\x03\x9B\x03" +
        "\x9B\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9F\x03\x9F\x03" +
        "\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA4\x03" +
        "\xA4\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03\xA8\x03\xA8\x03" +
        "\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAD\x03" +
        "\xAD\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x06\xAE\u0A89\n\xAE" +
        "\r\xAE\x0E\xAE\u0A8A\x03\xAF\x03\xAF\x03\xAF\x04\u0713\u071D\x02\x02\xB0" +
        "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
        "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
        "F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
        "b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
        "~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
        "\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
        "\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02" +
        "\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02" +
        "\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02" +
        "\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02" +
        "\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02" +
        "\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A" +
        "\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118" +
        "\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126" +
        "\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134" +
        "\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142" +
        "\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02\u0150" +
        "\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02\x02\x11" +
        "\x03\x02vw\x03\x02II\x03\x02y{\x03\x02\x8B\x8F\x04\x02\x8B\x8B\x91\x92" +
        "\x05\x02\x8E\x8E\x90\x90\x92\x96\x03\x02\x85\x87\x03\x02\x88\x89\x03\x02" +
        "9:\x03\x02QR\x03\x02TU\x03\x02VW\x03\x02Y[\x03\x02OO\x03\x02PP\x02\u0BBD" +
        "\x02\u0168\x03\x02\x02\x02\x04\u0170\x03\x02\x02\x02\x06\u01AA\x03\x02" +
        "\x02\x02\b\u01AC\x03\x02\x02\x02\n\u01BC\x03\x02\x02\x02\f\u01CC\x03\x02" +
        "\x02\x02\x0E\u01D4\x03\x02\x02\x02\x10\u01DC\x03\x02\x02\x02\x12\u01E0" +
        "\x03\x02\x02\x02\x14\u01EA\x03\x02\x02\x02\x16\u01F1\x03\x02\x02\x02\x18" +
        "\u01FE\x03\x02\x02\x02\x1A\u020C\x03\x02\x02\x02\x1C\u0221\x03\x02\x02" +
        "\x02\x1E\u0224\x03\x02\x02\x02 \u022C\x03\x02\x02\x02\"\u0234\x03\x02" +
        "\x02\x02$\u0275\x03\x02\x02\x02&\u0277\x03\x02\x02\x02(\u0297\x03\x02" +
        "\x02\x02*\u02B7\x03\x02\x02\x02,\u02C1\x03\x02\x02\x02.\u02CF\x03\x02" +
        "\x02\x020\u02E9\x03\x02\x02\x022\u02F4\x03\x02\x02\x024\u0308\x03\x02" +
        "\x02\x026\u0313\x03\x02\x02\x028\u031E\x03\x02\x02\x02:\u0328\x03\x02" +
        "\x02\x02<\u033A\x03\x02\x02\x02>\u0361\x03\x02\x02\x02@\u036F\x03\x02" +
        "\x02\x02B\u039F\x03\x02\x02\x02D\u03C7\x03\x02\x02\x02F\u03CC\x03\x02" +
        "\x02\x02H\u03D0\x03\x02\x02\x02J\u03D7\x03\x02\x02\x02L\u03E1\x03\x02" +
        "\x02\x02N\u0435\x03\x02\x02\x02P\u0437\x03\x02\x02\x02R\u045A\x03\x02" +
        "\x02\x02T\u0469\x03\x02\x02\x02V\u04CF\x03\x02\x02\x02X\u04D1\x03\x02" +
        "\x02\x02Z\u04DA\x03\x02\x02\x02\\\u04F0\x03\x02\x02\x02^\u04F2\x03\x02" +
        "\x02\x02`\u04F4\x03\x02\x02\x02b\u04F6\x03\x02\x02\x02d\u04FF\x03\x02" +
        "\x02\x02f\u052A\x03\x02\x02\x02h\u0540\x03\x02\x02\x02j\u0542\x03\x02" +
        "\x02\x02l\u0546\x03\x02\x02\x02n\u054E\x03\x02\x02\x02p\u0556\x03\x02" +
        "\x02\x02r\u055C\x03\x02\x02\x02t\u0560\x03\x02\x02\x02v\u0566\x03\x02" +
        "\x02\x02x\u056F\x03\x02\x02\x02z\u0574\x03\x02\x02\x02|\u0578\x03\x02" +
        "\x02\x02~\u058E\x03\x02\x02\x02\x80\u0590\x03\x02\x02\x02\x82\u05B4\x03" +
        "\x02\x02\x02\x84\u05B6\x03\x02\x02\x02\x86\u05BF\x03\x02\x02\x02\x88\u05C5" +
        "\x03\x02\x02\x02\x8A\u05E8\x03\x02\x02\x02\x8C\u060B\x03\x02\x02\x02\x8E" +
        "\u062B\x03\x02\x02\x02\x90\u064B\x03\x02\x02\x02\x92\u0660\x03\x02\x02" +
        "\x02\x94\u0675\x03\x02\x02\x02\x96\u068A\x03\x02\x02\x02\x98\u069D\x03" +
        "\x02\x02\x02\x9A\u06CB\x03\x02\x02\x02\x9C\u06CD\x03\x02\x02\x02\x9E\u06F8" +
        "\x03\x02\x02\x02\xA0\u0723\x03\x02\x02\x02\xA2\u0725\x03\x02\x02\x02\xA4" +
        "\u0738\x03\x02\x02\x02\xA6\u073E\x03\x02\x02\x02\xA8\u0742\x03\x02\x02" +
        "\x02\xAA\u0759\x03\x02\x02\x02\xAC\u0769\x03\x02\x02\x02\xAE\u0779\x03" +
        "\x02\x02\x02\xB0\u078A\x03\x02\x02\x02\xB2\u079D\x03\x02\x02\x02\xB4\u07A5" +
        "\x03\x02\x02\x02\xB6\u07C2\x03\x02\x02\x02\xB8\u07C6\x03\x02\x02\x02\xBA" +
        "\u07CF\x03\x02\x02\x02\xBC\u07DC\x03\x02\x02\x02\xBE\u07EA\x03\x02\x02" +
        "\x02\xC0\u07FE\x03\x02\x02\x02\xC2\u0815\x03\x02\x02\x02\xC4\u081B\x03" +
        "\x02\x02\x02\xC6\u0821\x03\x02\x02\x02\xC8\u0825\x03\x02\x02\x02\xCA\u0827" +
        "\x03\x02\x02\x02\xCC\u0829\x03\x02\x02\x02\xCE\u0840\x03\x02\x02\x02\xD0" +
        "\u085A\x03\x02\x02\x02\xD2\u085E\x03\x02\x02\x02\xD4\u0882\x03\x02\x02" +
        "\x02\xD6\u08A6\x03\x02\x02\x02\xD8\u08AC\x03\x02\x02\x02\xDA\u08D0\x03" +
        "\x02\x02\x02\xDC\u08F4\x03\x02\x02\x02\xDE\u0918\x03\x02\x02\x02\xE0\u093C" +
        "\x03\x02\x02\x02\xE2\u0943\x03\x02\x02\x02\xE4\u0965\x03\x02\x02\x02\xE6" +
        "\u0967\x03\x02\x02\x02\xE8\u0973\x03\x02\x02\x02\xEA\u0975\x03\x02\x02" +
        "\x02\xEC\u0981\x03\x02\x02\x02\xEE\u0983\x03\x02\x02\x02\xF0\u0985\x03" +
        "\x02\x02\x02\xF2\u0987\x03\x02\x02\x02\xF4\u0989\x03\x02\x02\x02\xF6\u098B" +
        "\x03\x02\x02\x02\xF8\u099D\x03\x02\x02\x02\xFA\u09A8\x03\x02\x02\x02\xFC" +
        "\u09B3\x03\x02\x02\x02\xFE\u09BE\x03\x02\x02\x02\u0100\u09C9\x03\x02\x02" +
        "\x02\u0102\u09D7\x03\x02\x02\x02\u0104\u09DB\x03\x02\x02\x02\u0106\u09EF" +
        "\x03\x02\x02\x02\u0108\u09F5\x03\x02\x02\x02\u010A\u0A19\x03\x02\x02\x02" +
        "\u010C\u0A1B\x03\x02\x02\x02\u010E\u0A2B\x03\x02\x02\x02\u0110\u0A2D\x03" +
        "\x02\x02\x02\u0112\u0A38\x03\x02\x02\x02\u0114\u0A3C\x03\x02\x02\x02\u0116" +
        "\u0A3E\x03\x02\x02\x02\u0118\u0A40\x03\x02\x02\x02\u011A\u0A42\x03\x02" +
        "\x02\x02\u011C\u0A44\x03\x02\x02\x02\u011E\u0A46\x03\x02\x02\x02\u0120" +
        "\u0A48\x03\x02\x02\x02\u0122\u0A4A\x03\x02\x02\x02\u0124\u0A4C\x03\x02" +
        "\x02\x02\u0126\u0A4E\x03\x02\x02\x02\u0128\u0A50\x03\x02\x02\x02\u012A" +
        "\u0A52\x03\x02\x02\x02\u012C\u0A54\x03\x02\x02\x02\u012E\u0A56\x03\x02" +
        "\x02\x02\u0130\u0A58\x03\x02\x02\x02\u0132\u0A5A\x03\x02\x02\x02\u0134" +
        "\u0A5C\x03\x02\x02\x02\u0136\u0A5E\x03\x02\x02\x02\u0138\u0A60\x03\x02" +
        "\x02\x02\u013A\u0A62\x03\x02\x02\x02\u013C\u0A64\x03\x02\x02\x02\u013E" +
        "\u0A66\x03\x02\x02\x02\u0140\u0A68\x03\x02\x02\x02\u0142\u0A6A\x03\x02" +
        "\x02\x02\u0144\u0A6C\x03\x02\x02\x02\u0146\u0A6E\x03\x02\x02\x02\u0148" +
        "\u0A70\x03\x02\x02\x02\u014A\u0A72\x03\x02\x02\x02\u014C\u0A74\x03\x02" +
        "\x02\x02\u014E\u0A76\x03\x02\x02\x02\u0150\u0A78\x03\x02\x02\x02\u0152" +
        "\u0A7A\x03\x02\x02\x02\u0154\u0A7C\x03\x02\x02\x02\u0156\u0A7E\x03\x02" +
        "\x02\x02\u0158\u0A80\x03\x02\x02\x02\u015A\u0A88\x03\x02\x02\x02\u015C" +
        "\u0A8C\x03\x02\x02\x02\u015E\u0165\x05\x04\x03\x02\u015F\u0161\x05\u015C" +
        "\xAF\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161" +
        "\u0162\x03\x02\x02\x02\u0162\u0164\x05\u0138\x9D\x02\u0163\u0160\x03\x02" +
        "\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165" +
        "\u0166\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02" +
        "\x02\x02\u0168\u015E\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A" +
        "\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x03\x02" +
        "\x02\x02\u016C\u016D\x07\x02\x02\x03\u016D\x03\x03\x02\x02\x02\u016E\u0171" +
        "\x05\x06\x04\x02\u016F\u0171\x05\u0108\x85\x02\u0170\u016E\x03\x02\x02" +
        "\x02\u0170\u016F\x03\x02\x02\x02\u0171\x05\x03\x02\x02\x02\u0172\u01AB" +
        "\x05\b\x05\x02\u0173\u01AB\x05\n\x06\x02\u0174\u01AB\x05\u0154\xAB\x02" +
        "\u0175\u01AB\x05\u0142\xA2\x02\u0176\u01AB\x05\u014A\xA6\x02\u0177\u01AB" +
        "\x05\x12\n\x02\u0178\u01AB\x05\x16\f\x02\u0179\u01AB\x05\x14\v\x02\u017A" +
        "\u01AB\x05\x1A\x0E\x02\u017B\u01AB\x05\x18\r\x02\u017C\u01AB\x05\u010C" +
        "\x87\x02\u017D\u01AB\x05\x1E\x10\x02\u017E\u01AB\x05 \x11\x02\u017F\u01AB" +
        "\x05\"\x12\x02\u0180\u01AB\x05&\x14\x02\u0181\u01AB\x05(\x15\x02\u0182" +
        "\u01AB\x05L\'\x02\u0183\u01AB\x05<\x1F\x02\u0184\u01AB\x05:\x1E\x02\u0185" +
        "\u01AB\x05B\"\x02\u0186\u01AB\x05@!\x02\u0187\u01AB\x05> \x02\u0188\u01AB" +
        "\x05N(\x02\u0189\u01AB\x05V,\x02\u018A\u01AB\x05d3\x02\u018B\u01AB\x05" +
        "\x88E\x02\u018C\u01AB\x05\x8AF\x02\u018D\u01AB\x05\x8EH\x02\u018E\u01AB" +
        "\x05\x8CG\x02\u018F\u01AB\x05\x90I\x02\u0190\u01AB\x05\x92J\x02\u0191" +
        "\u01AB\x05\x94K\x02\u0192\u01AB\x05\x96L\x02\u0193\u01AB\x05\x98M\x02" +
        "\u0194\u01AB\x05\x9CO\x02\u0195\u01AB\x05\x9EP\x02\u0196\u01AB\x05\xA2" +
        "R\x02\u0197\u01AB\x05\xA8U\x02\u0198\u01AB\x05\xAAV\x02\u0199\u01AB\x05" +
        "\xACW\x02\u019A\u01AB\x05\xAEX\x02\u019B\u01AB\x05\xB0Y\x02\u019C\u01AB" +
        "\x05\xBE`\x02\u019D\u01AB\x05P)\x02\u019E\u01AB\x05\xB4[\x02\u019F\u01AB" +
        "\x05\xB2Z\x02\u01A0\u01AB\x05\xC0a\x02\u01A1\u01AB\x05\xCCg\x02\u01A2" +
        "\u01AB\x05\xCEh\x02\u01A3\u01AB\x05\xD2j\x02\u01A4\u01AB\x05\xD4k\x02" +
        "\u01A5\u01AB\x05\xD8m\x02\u01A6\u01AB\x05\xDAn\x02\u01A7\u01AB\x05\xDC" +
        "o\x02\u01A8\u01AB\x05\xDEp\x02\u01A9\u01AB\x050\x19\x02\u01AA\u0172\x03" +
        "\x02\x02\x02\u01AA\u0173\x03\x02\x02\x02\u01AA\u0174\x03\x02\x02\x02\u01AA" +
        "\u0175\x03\x02\x02\x02\u01AA\u0176\x03\x02\x02\x02\u01AA\u0177\x03\x02" +
        "\x02\x02\u01AA\u0178\x03\x02\x02\x02\u01AA\u0179\x03\x02\x02\x02\u01AA" +
        "\u017A\x03\x02\x02\x02\u01AA\u017B\x03\x02\x02\x02\u01AA\u017C\x03\x02" +
        "\x02\x02\u01AA\u017D\x03\x02\x02\x02\u01AA\u017E\x03\x02\x02\x02\u01AA" +
        "\u017F\x03\x02\x02\x02\u01AA\u0180\x03\x02\x02\x02\u01AA\u0181\x03\x02" +
        "\x02\x02\u01AA\u0182\x03\x02\x02\x02\u01AA\u0183\x03\x02\x02\x02\u01AA" +
        "\u0184\x03\x02\x02\x02\u01AA\u0185\x03\x02\x02\x02\u01AA\u0186\x03\x02" +
        "\x02\x02\u01AA\u0187\x03\x02\x02\x02\u01AA\u0188\x03\x02\x02\x02\u01AA" +
        "\u0189\x03\x02\x02\x02\u01AA\u018A\x03\x02\x02\x02\u01AA\u018B\x03\x02" +
        "\x02\x02\u01AA\u018C\x03\x02\x02\x02\u01AA\u018D\x03\x02\x02\x02\u01AA" +
        "\u018E\x03\x02\x02\x02\u01AA\u018F\x03\x02\x02\x02\u01AA\u0190\x03\x02" +
        "\x02\x02\u01AA\u0191\x03\x02\x02\x02\u01AA\u0192\x03\x02\x02\x02\u01AA" +
        "\u0193\x03\x02\x02\x02\u01AA\u0194\x03\x02\x02\x02\u01AA\u0195\x03\x02" +
        "\x02\x02\u01AA\u0196\x03\x02\x02\x02\u01AA\u0197\x03\x02\x02\x02\u01AA" +
        "\u0198\x03\x02\x02\x02\u01AA\u0199\x03\x02\x02\x02\u01AA\u019A\x03\x02" +
        "\x02\x02\u01AA\u019B\x03\x02\x02\x02\u01AA\u019C\x03\x02\x02\x02\u01AA" +
        "\u019D\x03\x02\x02\x02\u01AA\u019E\x03\x02\x02\x02\u01AA\u019F\x03\x02" +
        "\x02\x02\u01AA\u01A0\x03\x02\x02\x02\u01AA\u01A1\x03\x02\x02\x02\u01AA" +
        "\u01A2\x03\x02\x02\x02\u01AA\u01A3\x03\x02\x02\x02\u01AA\u01A4\x03\x02" +
        "\x02\x02\u01AA\u01A5\x03\x02\x02\x02\u01AA\u01A6\x03\x02\x02\x02\u01AA" +
        "\u01A7\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01A9\x03\x02" +
        "\x02\x02\u01AB\x07\x03\x02\x02\x02\u01AC\u01AE\x07\x03\x02\x02\u01AD\u01AF" +
        "\t\x02\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02" +
        "\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01B2\x05\u015C\xAF\x02\u01B1\u01B0" +
        "\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02" +
        "\u01B3\u01B7\x05\u0134\x9B\x02\u01B4\u01B6\x05\u0138\x9D\x02\u01B5\u01B4" +
        "\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02" +
        "\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u01B7\x03" +
        "\x02\x02\x02\u01BA\u01BB\x05\x1C\x0F\x02\u01BB\t\x03\x02\x02\x02\u01BC" +
        "\u01C4\x07\x04\x02\x02\u01BD\u01C0\x07J\x02\x02\u01BE\u01C1\x05\u010A" +
        "\x86\x02\u01BF\u01C1\x07J\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01BF" +
        "\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02" +
        "\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01BD\x03" +
        "\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C7\x03\x02\x02\x02\u01C6" +
        "\u01C8\x05\u015C\xAF\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8\x03\x02" +
        "\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x05\u0134\x9B\x02\u01CA" +
        "\u01CB\x05\x1C\x0F\x02\u01CB\v\x03\x02\x02\x02\u01CC\u01CE\x07F\x02\x02" +
        "\u01CD\u01CF\x05\u010A\x86\x02\u01CE\u01CD\x03\x02\x02\x02\u01CF\u01D0" +
        "\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02" +
        "\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\x05\u0134\x9B\x02\u01D3\r\x03" +
        "\x02\x02\x02\u01D4\u01D6\x07G\x02\x02\u01D5\u01D7\x05\u010A\x86\x02\u01D6" +
        "\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D6\x03\x02" +
        "\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA" +
        "\u01DB\x05\u0134\x9B\x02\u01DB\x0F\x03\x02\x02\x02\u01DC\u01DD\x07k\x02" +
        "\x02\u01DD\u01DE\x05\u010A\x86\x02\u01DE\u01DF\x05\u0134\x9B\x02\u01DF" +
        "\x11\x03\x02\x02\x02\u01E0\u01E4\x07l\x02\x02\u01E1\u01E5\x05\u010A\x86" +
        "\x02\u01E2\u01E5\x07J\x02\x02\u01E3\u01E5\x05\u0138\x9D\x02\u01E4\u01E1" +
        "\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E3\x03\x02\x02\x02" +
        "\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03" +
        "\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01E9\x05\u0134\x9B\x02" +
        "\u01E9\x13\x03\x02\x02\x02\u01EA\u01EC\x07\x05\x02\x02\u01EB\u01ED\x05" +
        "\u010A\x86\x02\u01EC\u01EB\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02" +
        "\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x05\u0134\x9B\x02\u01EF\u01F0" +
        "\x05\u0138\x9D\x02\u01F0\x15\x03\x02\x02\x02\u01F1\u01F3\x07\x06\x02\x02" +
        "\u01F2\u01F4\x05\u015C\xAF\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4" +
        "\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F9\x05\u0134\x9B" +
        "\x02\u01F6\u01F8\x05\u0138\x9D\x02\u01F7\u01F6\x03\x02\x02\x02\u01F8\u01FB" +
        "\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
        "\u01FA\u01FC\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC\u01FD\x05" +
        "\x1C\x0F\x02\u01FD\x17\x03\x02\x02\x02\u01FE\u01FF\x07\x07\x02\x02\u01FF" +
        "\u0209\x05\u0134\x9B\x02\u0200\u0202\x05\u0138\x9D\x02\u0201\u0200\x03" +
        "\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203" +
        "\u0204\x03\x02\x02\x02\u0204\u0206\x03\x02\x02\x02\u0205\u0203\x03\x02" +
        "\x02\x02\u0206\u0208\x05$\x13\x02\u0207\u0203\x03\x02\x02\x02\u0208\u020B" +
        "\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02" +
        "\u020A\x19\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C\u020D\x07" +
        "\b\x02\x02\u020D\u020E\x05\u0134\x9B\x02\u020E\u020F\x05\u010E\x88\x02" +
        "\u020F\x1B\x03\x02\x02\x02\u0210\u0212\x05\u0138\x9D\x02\u0211\u0210\x03" +
        "\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u021B\x03\x02\x02\x02\u0213" +
        "\u021C\x05\f\x07\x02\u0214\u021C\x05\x0E\b\x02\u0215\u021C\x05\xBA^\x02" +
        "\u0216\u021C\x05\u0110\x89\x02\u0217\u021C\x05.\x18\x02\u0218\u021C\x05" +
        "\u010E\x88\x02\u0219\u021C\x05\u010C\x87\x02\u021A\u021C\x05\x10\t\x02" +
        "\u021B\u0213\x03\x02\x02\x02\u021B\u0214\x03\x02\x02\x02\u021B\u0215\x03" +
        "\x02\x02\x02\u021B\u0216\x03\x02\x02\x02\u021B\u0217\x03\x02\x02\x02\u021B" +
        "\u0218\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021A\x03\x02" +
        "\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x05\u0138\x9D\x02\u021E" +
        "\u0220\x03\x02\x02\x02\u021F\u0211\x03\x02\x02\x02\u0220\u0223\x03\x02" +
        "\x02\x02\u0221\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222" +
        "\x1D\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0224\u0225\x07\t\x02" +
        "\x02\u0225\u0226\x05\u0134\x9B\x02\u0226\u0227\x05\u012E\x98\x02\u0227" +
        "\u0228\x05\u010A\x86\x02\u0228\u0229\x05\u0134\x9B\x02\u0229\u022A\x03" +
        "\x02\x02\x02\u022A\u022B\x05\u0138\x9D\x02\u022B\x1F\x03\x02\x02\x02\u022C" +
        "\u022D\x07\n\x02\x02\u022D\u022E\x05\u0134\x9B\x02\u022E\u022F\x05\u012E" +
        "\x98\x02\u022F\u0230\x05\u010A\x86\x02\u0230\u0231\x05\u0134\x9B\x02\u0231" +
        "\u0232\x03\x02\x02\x02\u0232\u0233\x05\u0138\x9D\x02\u0233!\x03\x02\x02" +
        "\x02\u0234\u0235\x07\v\x02\x02\u0235\u0236\x05\xE2r\x02\u0236\u023A\x05" +
        "\u0134\x9B\x02\u0237\u0239\x05\u0138\x9D\x02\u0238\u0237\x03\x02\x02\x02" +
        "\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03" +
        "\x02\x02\x02\u023B\u0244\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D" +
        "\u0241\x05$\x13\x02\u023E\u0240\x05\u0138\x9D\x02\u023F\u023E\x03\x02" +
        "\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241" +
        "\u0242\x03\x02\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0241\x03\x02" +
        "\x02\x02\u0244\u023D\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246" +
        "\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247#\x03\x02\x02" +
        "\x02\u0248\u0276\x05\u0142\xA2\x02\u0249\u0276\x05\u0148\xA5\x02\u024A" +
        "\u0276\x05\u014A\xA6\x02\u024B\u0276\x05\u014C\xA7\x02\u024C\u0276\x05" +
        "\u014E\xA8\x02\u024D\u0276\x05\u0150\xA9\x02\u024E\u0276\x05\u0152\xAA" +
        "\x02\u024F\u0276\x05\u0144\xA3\x02\u0250\u0276\x05\u0146\xA4\x02\u0251" +
        "\u0276\x05\u0154\xAB\x02\u0252\u0276\x05*\x16\x02\u0253\u0276\x05\xBA" +
        "^\x02\u0254\u0276\x05\x12\n\x02\u0255\u0276\x05\u0110\x89\x02\u0256\u0276" +
        "\x05.\x18\x02\u0257\u0276\x050\x19\x02\u0258\u0276\x05\u010A\x86\x02\u0259" +
        "\u0276\x05T+\x02\u025A\u0276\x05\x9AN\x02\u025B\u025F\x05\xF6|\x02\u025C" +
        "\u025E\x05\u0138\x9D\x02\u025D\u025C\x03\x02\x02\x02\u025E\u0261\x03\x02" +
        "\x02\x02\u025F\u025D\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
        "\u0276\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0262\u0266\x05\xF8" +
        "}\x02\u0263\u0265\x05\u0138\x9D\x02\u0264\u0263\x03\x02\x02\x02\u0265" +
        "\u0268\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266\u0267\x03\x02" +
        "\x02\x02\u0267\u0276\x03\x02\x02\x02\u0268\u0266\x03\x02\x02\x02\u0269" +
        "\u026D\x05\xFA~\x02\u026A\u026C\x05\u0138\x9D\x02\u026B\u026A\x03\x02" +
        "\x02\x02\u026C\u026F\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D" +
        "\u026E\x03\x02\x02\x02\u026E\u0276\x03\x02\x02\x02\u026F\u026D\x03\x02" +
        "\x02\x02\u0270\u0276\x05\xFC\x7F\x02\u0271\u0276\x05\xFE\x80\x02\u0272" +
        "\u0276\x05\u0100\x81\x02\u0273\u0276\x05\u010E\x88\x02\u0274\u0276\x05" +
        "\u015C\xAF\x02\u0275\u0248\x03\x02\x02\x02\u0275\u0249\x03\x02\x02\x02" +
        "\u0275\u024A\x03\x02\x02\x02\u0275\u024B\x03\x02\x02\x02\u0275\u024C\x03" +
        "\x02\x02\x02\u0275\u024D\x03\x02\x02\x02\u0275\u024E\x03\x02\x02\x02\u0275" +
        "\u024F\x03\x02\x02\x02\u0275\u0250\x03\x02\x02\x02\u0275\u0251\x03\x02" +
        "\x02\x02\u0275\u0252\x03\x02\x02\x02\u0275\u0253\x03\x02\x02\x02\u0275" +
        "\u0254\x03\x02\x02\x02\u0275\u0255\x03\x02\x02\x02\u0275\u0256\x03\x02" +
        "\x02\x02\u0275\u0257\x03\x02\x02\x02\u0275\u0258\x03\x02\x02\x02\u0275" +
        "\u0259\x03\x02\x02\x02\u0275\u025A\x03\x02\x02\x02\u0275\u025B\x03\x02" +
        "\x02\x02\u0275\u0262\x03\x02\x02\x02\u0275\u0269\x03\x02\x02\x02\u0275" +
        "\u0270\x03\x02\x02\x02\u0275\u0271\x03\x02\x02\x02\u0275\u0272\x03\x02" +
        "\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0274\x03\x02\x02\x02\u0276" +
        "%\x03\x02\x02\x02\u0277\u0278\x07\f\x02\x02\u0278\u0279\x05\xE2r\x02\u0279" +
        "\u027B\x05\u0134\x9B\x02\u027A\u027C\x05\u0138\x9D\x02\u027B\u027A\x03" +
        "\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u0280\x03\x02\x02\x02\u027D" +
        "\u027E\x05\u0110\x89\x02\u027E\u027F\x05\u0138\x9D\x02\u027F\u0281\x03" +
        "\x02\x02\x02\u0280\u027D\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281" +
        "\u0283\x03\x02\x02\x02\u0282\u0284\x05.\x18\x02\u0283\u0282\x03\x02\x02" +
        "\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0288\x03\x02\x02\x02\u0285\u0287" +
        "\x05\u0138\x9D\x02\u0286\u0285\x03\x02\x02\x02\u0287\u028A\x03\x02\x02" +
        "\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u0294" +
        "\x03\x02\x02\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028F\x05$\x13\x02" +
        "\u028C\u028E\x05\u0138\x9D\x02\u028D\u028C\x03\x02\x02\x02\u028E\u0291" +
        "\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02" +
        "\u0290\u0293\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0292\u028B\x03" +
        "\x02\x02\x02";
    bitmark._serializedATNSegment2 = "\u0293\u0296\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03" +
        "\x02\x02\x02\u0295\'\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0297" +
        "\u0298\x07\r\x02\x02\u0298\u0299\x05\xE2r\x02\u0299\u029B\x05\u0134\x9B" +
        "\x02\u029A\u029C\x05\u0138\x9D\x02\u029B\u029A\x03\x02\x02\x02\u029B\u029C" +
        "\x03\x02\x02\x02\u029C\u02A0\x03\x02\x02\x02\u029D\u029E\x05\u0110\x89" +
        "\x02\u029E\u029F\x05\u0138\x9D\x02\u029F\u02A1\x03\x02\x02\x02\u02A0\u029D" +
        "\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A3\x03\x02\x02\x02" +
        "\u02A2\u02A4\x05.\x18\x02\u02A3\u02A2\x03\x02\x02\x02\u02A3\u02A4\x03" +
        "\x02\x02\x02\u02A4\u02A8\x03\x02\x02\x02\u02A5\u02A7\x05\u0138\x9D\x02" +
        "\u02A6\u02A5\x03\x02\x02\x02\u02A7\u02AA\x03\x02\x02\x02\u02A8\u02A6\x03" +
        "\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02B4\x03\x02\x02\x02\u02AA" +
        "\u02A8\x03\x02\x02\x02\u02AB\u02AF\x05$\x13\x02\u02AC\u02AE\x05\u0138" +
        "\x9D\x02\u02AD\u02AC\x03\x02\x02\x02\u02AE\u02B1\x03\x02\x02\x02\u02AF" +
        "\u02AD\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B3\x03\x02" +
        "\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B2\u02AB\x03\x02\x02\x02\u02B3" +
        "\u02B6\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02" +
        "\x02\x02\u02B5)\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02BE" +
        "\x05,\x17\x02\u02B8\u02BD\x05,\x17\x02\u02B9\u02BD\x05.\x18\x02\u02BA" +
        "\u02BD\x050\x19\x02\u02BB\u02BD\x05T+\x02\u02BC\u02B8\x03\x02\x02\x02" +
        "\u02BC\u02B9\x03\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BC\u02BB\x03" +
        "\x02\x02\x02\u02BD\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE" +
        "\u02BF\x03\x02\x02\x02\u02BF+\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02" +
        "\x02\u02C1\u02C5\x07=\x02\x02\u02C2\u02C6\x05\u0156\xAC\x02\u02C3\u02C6" +
        "\x05\u0158\xAD\x02\u02C4\u02C6\x03\x02\x02\x02\u02C5\u02C2\x03\x02\x02" +
        "\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C4\x03\x02\x02\x02\u02C6\u02CA" +
        "\x03\x02\x02\x02\u02C7\u02C9\x05\u010A\x86\x02\u02C8\u02C7\x03\x02\x02" +
        "\x02\u02C9\u02CC\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02CB" +
        "\x03\x02\x02\x02\u02CB\u02CD\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02" +
        "\u02CD\u02CE\x05\u0136\x9C\x02\u02CE-\x03\x02\x02\x02\u02CF\u02D1\x07" +
        ">\x02\x02\u02D0\u02D2\x05\u010A\x86\x02\u02D1\u02D0\x03\x02\x02\x02\u02D1" +
        "\u02D2\x03\x02\x02\x02\u02D2\u02E4\x03\x02\x02\x02\u02D3\u02D9\x05\u010A" +
        "\x86\x02\u02D4\u02D5\x05\u0138\x9D\x02\u02D5\u02D6\x05\u015C\xAF\x02\u02D6" +
        "\u02D8\x03\x02\x02\x02\u02D7\u02D4\x03\x02\x02\x02\u02D8\u02DB\x03\x02" +
        "\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA" +
        "\u02DF\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DC\u02DE\x05\u0138" +
        "\x9D\x02\u02DD\u02DC\x03\x02\x02\x02\u02DE\u02E1\x03\x02\x02\x02\u02DF" +
        "\u02DD\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E3\x03\x02" +
        "\x02\x02\u02E1\u02DF\x03\x02\x02\x02\u02E2\u02D3\x03\x02\x02\x02\u02E3" +
        "\u02E6\x03\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02\u02E4\u02E5\x03\x02" +
        "\x02\x02\u02E5\u02E7\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7" +
        "\u02E8\x05\u0134\x9B\x02\u02E8/\x03\x02\x02\x02\u02E9\u02EB\x07?\x02\x02" +
        "\u02EA\u02EC\n\x03\x02\x02\u02EB\u02EA\x03\x02\x02\x02\u02EC\u02ED\x03" +
        "\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE" +
        "\u02EF\x03\x02\x02\x02\u02EF\u02F0\x05\u0134\x9B\x02\u02F01\x03\x02\x02" +
        "\x02\u02F1\u02F5\x054\x1B\x02\u02F2\u02F5\x056\x1C\x02\u02F3\u02F5\x05" +
        "8\x1D\x02\u02F4\u02F1\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4" +
        "\u02F3\x03\x02\x02\x02\u02F5\u0304\x03\x02\x02\x02\u02F6\u02F8\x05\u0138" +
        "\x9D\x02\u02F7\u02F6\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8" +
        "\u02FA\x03\x02\x02\x02\u02F9\u02FB\x05\u015C\xAF\x02\u02FA\u02F9\x03\x02" +
        "\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u0300\x03\x02\x02\x02\u02FC" +
        "\u0301\x054\x1B\x02\u02FD\u0301\x056\x1C\x02\u02FE\u0301\x058\x1D\x02" +
        "\u02FF\u0301\x05T+\x02\u0300\u02FC\x03\x02\x02\x02\u0300\u02FD\x03\x02" +
        "\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0300\u02FF\x03\x02\x02\x02\u0301" +
        "\u0303\x03\x02\x02\x02\u0302\u02F7\x03\x02\x02\x02\u0303\u0306\x03\x02" +
        "\x02\x02\u0304\u0302\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305" +
        "3\x03\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0307\u0309\x05\u0110\x89" +
        "\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030A" +
        "\x03\x02\x02\x02\u030A\u030C\x07A\x02\x02\u030B\u030D\x05\u010A\x86\x02" +
        "\u030C\u030B\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u030C\x03" +
        "\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310" +
        "\u0311\x05\u0134\x9B\x02\u03115\x03\x02\x02\x02\u0312\u0314\x05\u0110" +
        "\x89\x02\u0313\u0312\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02\u0314" +
        "\u0315\x03\x02\x02\x02\u0315\u0317\x07B\x02\x02\u0316\u0318\x05\u010A" +
        "\x86\x02\u0317\u0316\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319" +
        "\u0317\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u031B\x03\x02" +
        "\x02\x02\u031B\u031C\x05\u0134\x9B\x02\u031C7\x03\x02\x02\x02\u031D\u031F" +
        "\x05\u0110\x89\x02\u031E\u031D\x03\x02\x02\x02\u031E\u031F\x03\x02\x02" +
        "\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0322\x07D\x02\x02\u0321\u0323" +
        "\x05\u010A\x86\x02\u0322\u0321\x03\x02\x02\x02\u0323\u0324\x03\x02\x02" +
        "\x02\u0324\u0322\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0326" +
        "\x03\x02\x02\x02\u0326\u0327\x05\u0134\x9B\x02\u03279\x03\x02\x02\x02" +
        "\u0328\u0329\x07\x0E\x02\x02\u0329\u032A\x05\xE2r\x02\u032A\u032B\x05" +
        "\u0134\x9B\x02\u032B\u0335\x05\u0138\x9D\x02\u032C\u0330\x05$\x13\x02" +
        "\u032D\u032F\x05\u0138\x9D\x02\u032E\u032D\x03\x02\x02\x02\u032F\u0332" +
        "\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02" +
        "\u0331\u0334\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02\u0333\u032C\x03" +
        "\x02\x02\x02\u0334\u0337\x03\x02\x02\x02\u0335\u0333\x03\x02\x02\x02\u0335" +
        "\u0336\x03\x02\x02\x02\u0336\u0338\x03\x02\x02\x02\u0337\u0335\x03\x02" +
        "\x02\x02\u0338\u0339\x052\x1A\x02\u0339;\x03\x02\x02\x02\u033A\u033B\x07" +
        "\x0F\x02\x02\u033B\u033C\x05\xE2r\x02\u033C\u033D\x05\u0134\x9B\x02\u033D" +
        "\u0344\x05\u0138\x9D\x02\u033E\u0340\x05$\x13\x02\u033F\u0341\x05\u0138" +
        "\x9D\x02\u0340\u033F\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341" +
        "\u0343\x03\x02\x02\x02\u0342\u033E\x03\x02\x02\x02\u0343\u0346\x03\x02" +
        "\x02\x02\u0344\u0342\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345" +
        "\u0354\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02\u0347\u034A\x05\u013E" +
        "\xA0\x02\u0348\u034A\x05\u0138\x9D\x02\u0349\u0347\x03\x02\x02\x02\u0349" +
        "\u0348\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\u0351\x03\x02" +
        "\x02\x02\u034B\u034D\x05\u0110\x89\x02\u034C\u034B\x03\x02\x02\x02\u034C" +
        "\u034D\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u034F\x05$\x13" +
        "\x02\u034F\u0350\x05\u0138\x9D\x02\u0350\u0352\x03\x02\x02\x02\u0351\u034C" +
        "\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02" +
        "\u0353\u0355\x052\x1A\x02\u0354\u0349\x03\x02\x02\x02\u0355\u0356\x03" +
        "\x02\x02\x02\u0356\u0354\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357" +
        "\u035A\x03\x02\x02\x02\u0358\u035B\x05\u013E\xA0\x02\u0359\u035B\x05\u0138" +
        "\x9D\x02\u035A\u0358\x03\x02\x02\x02\u035A\u0359\x03\x02\x02\x02\u035B" +
        "\u035F\x03\x02\x02\x02\u035C\u035D\x05$\x13\x02\u035D\u035E\x05\u0138" +
        "\x9D\x02\u035E\u0360\x03\x02\x02\x02\u035F\u035C\x03\x02\x02\x02\u035F" +
        "\u0360\x03\x02\x02\x02\u0360=\x03\x02\x02\x02\u0361\u0362\x07\x10\x02" +
        "\x02\u0362\u0363\x05\xE2r\x02\u0363\u0364\x05\u0134\x9B\x02\u0364\u0369" +
        "\x05\u0138\x9D\x02\u0365\u0367\x05$\x13\x02\u0366\u0368\x05\u0138\x9D" +
        "\x02\u0367\u0366\x03\x02\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368\u036A" +
        "\x03\x02\x02\x02\u0369\u0365\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02" +
        "\u036B\u0369\x03\x02\x02\x02\u036B\u036C\x03\x02\x02\x02\u036C\u036D\x03" +
        "\x02\x02\x02\u036D\u036E\x052\x1A\x02\u036E?\x03\x02\x02\x02\u036F\u0370" +
        "\x07\x11\x02\x02\u0370\u0371\x05\xE2r\x02\u0371\u0372\x05\u0134\x9B\x02" +
        "\u0372\u037C\x05\u0138\x9D\x02\u0373\u0377\x05$\x13\x02\u0374\u0376\x05" +
        "\u0138\x9D\x02\u0375\u0374\x03\x02\x02\x02\u0376\u0379\x03\x02\x02\x02" +
        "\u0377\u0375\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u037B\x03" +
        "\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u037A\u0373\x03\x02\x02\x02\u037B" +
        "\u037E\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037C\u037D\x03\x02" +
        "\x02\x02\u037D\u0392\x03\x02\x02\x02\u037E\u037C\x03\x02\x02\x02\u037F" +
        "\u0382\x05\u013E\xA0\x02\u0380\u0382\x05\u0138\x9D\x02\u0381\u037F\x03" +
        "\x02\x02\x02\u0381\u0380\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382" +
        "\u0389\x03\x02\x02\x02\u0383\u0385\x05\u0110\x89\x02\u0384\u0383\x03\x02" +
        "\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386" +
        "\u0387\x05$\x13\x02\u0387\u0388\x05\u0138\x9D\x02\u0388\u038A\x03\x02" +
        "\x02\x02\u0389\u0384\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A" +
        "\u038B\x03\x02\x02\x02\u038B\u038F\x052\x1A\x02\u038C\u038E\x05\u0138" +
        "\x9D\x02\u038D\u038C\x03\x02\x02\x02\u038E\u0391\x03\x02\x02\x02\u038F" +
        "\u038D\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\u0393\x03\x02" +
        "\x02\x02\u0391\u038F\x03\x02\x02\x02\u0392\u0381\x03\x02\x02\x02\u0393" +
        "\u0394\x03\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0394\u0395\x03\x02" +
        "\x02\x02\u0395\u0398\x03\x02\x02\x02\u0396\u0399\x05\u013E\xA0\x02\u0397" +
        "\u0399\x05\u0138\x9D\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0397\x03\x02" +
        "\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039D\x03\x02\x02\x02\u039A" +
        "\u039B\x05$\x13\x02\u039B\u039C\x05\u0138\x9D\x02\u039C\u039E\x03\x02" +
        "\x02\x02\u039D\u039A\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E" +
        "A\x03\x02\x02\x02\u039F\u03A0\x07\x12\x02\x02\u03A0\u03A1\x05\xE2r\x02" +
        "\u03A1\u03A2\x05\u0134\x9B\x02\u03A2\u03AC\x05\u0138\x9D\x02\u03A3\u03A7" +
        "\x05$\x13\x02\u03A4\u03A6\x05\u0138\x9D\x02\u03A5\u03A4\x03\x02\x02\x02" +
        "\u03A6\u03A9\x03\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03" +
        "\x02\x02\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03AA" +
        "\u03A3\x03\x02\x02\x02\u03AB\u03AE\x03\x02\x02\x02\u03AC\u03AA\x03\x02" +
        "\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03C3\x03\x02\x02\x02\u03AE" +
        "\u03AC\x03\x02\x02\x02\u03AF\u03B1\x05\u015C\xAF\x02\u03B0\u03AF\x03\x02" +
        "\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2" +
        "\u03BB\x05\u0138\x9D\x02\u03B3\u03BB\x05\u010A\x86\x02\u03B4\u03B6\x05" +
        "\u015C\xAF\x02\u03B5\u03B4\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02" +
        "\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\u03BB\x03" +
        "\x02\x02\x02\u03B9\u03BB\x05D#\x02\u03BA\u03B0\x03\x02\x02\x02\u03BA\u03B3" +
        "\x03\x02\x02\x02\u03BA\u03B5\x03\x02\x02\x02\u03BA\u03B9\x03\x02\x02\x02" +
        "\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BA\x03\x02\x02\x02\u03BC\u03BD\x03" +
        "\x02\x02\x02\u03BD\u03BF\x03\x02\x02\x02\u03BE\u03C0\x05T+\x02\u03BF\u03BE" +
        "\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03C2\x03\x02\x02\x02" +
        "\u03C1\u03BA\x03\x02\x02\x02\u03C2\u03C5\x03\x02\x02\x02\u03C3\u03C1\x03" +
        "\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4C\x03\x02\x02\x02\u03C5" +
        "\u03C3\x03\x02\x02\x02\u03C6\u03C8\x05H%\x02\u03C7\u03C6\x03\x02\x02\x02" +
        "\u03C7\u03C8\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x05" +
        "J&\x02\u03CAE\x03\x02\x02\x02\u03CB\u03CD\x05H%\x02\u03CC\u03CB\x03\x02" +
        "\x02\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE" +
        "\u03CF\x052\x1A\x02\u03CFG\x03\x02\x02\x02\u03D0\u03D1\x07C\x02\x02\u03D1" +
        "\u03D2\x05\u010A\x86\x02\u03D2\u03D3\x05\u0134\x9B\x02\u03D3I\x03\x02" +
        "\x02\x02\u03D4\u03D8\x054\x1B\x02\u03D5\u03D8\x056\x1C\x02\u03D6\u03D8" +
        "\x058\x1D\x02\u03D7\u03D4\x03\x02\x02\x02\u03D7\u03D5\x03\x02\x02\x02" +
        "\u03D7\u03D6\x03\x02\x02\x02\u03D8\u03DE\x03\x02\x02\x02\u03D9\u03DD\x05" +
        "4\x1B\x02\u03DA\u03DD\x056\x1C\x02\u03DB\u03DD\x058\x1D\x02\u03DC\u03D9" +
        "\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DB\x03\x02\x02\x02" +
        "\u03DD\u03E0\x03\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DF\x03" +
        "\x02\x02\x02\u03DFK\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E1" +
        "\u03E2\x07\x13\x02\x02\u03E2\u03E3\x05\xE2r\x02\u03E3\u03E7\x05\u0134" +
        "\x9B\x02\u03E4\u03E6\x05\u0138\x9D\x02\u03E5\u03E4\x03\x02\x02\x02\u03E6" +
        "\u03E9\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E8\x03\x02" +
        "\x02\x02\u03E8\u03F8\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03EA" +
        "\u03EE\x05$\x13\x02\u03EB\u03ED\x05\u0138\x9D\x02\u03EC\u03EB\x03\x02" +
        "\x02\x02\u03ED\u03F0\x03\x02\x02\x02\u03EE\u03EC\x03\x02\x02\x02\u03EE" +
        "\u03EF\x03\x02\x02\x02\u03EF\u03F9\x03\x02\x02\x02\u03F0\u03EE\x03\x02" +
        "\x02\x02\u03F1\u03F5\x05J&\x02\u03F2\u03F4\x05\u0138\x9D\x02\u03F3\u03F2" +
        "\x03\x02\x02\x02\u03F4\u03F7\x03\x02\x02\x02\u03F5\u03F3\x03\x02\x02\x02" +
        "\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F5\x03" +
        "\x02\x02\x02\u03F8\u03EA\x03\x02\x02\x02\u03F8\u03F1\x03\x02\x02\x02\u03F9" +
        "\u03FA\x03\x02\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FA\u03FB\x03\x02" +
        "\x02\x02\u03FBM\x03\x02\x02\x02\u03FC\u03FD\x07\x14\x02\x02\u03FD\u03FE" +
        "\x05\xE2r\x02\u03FE\u03FF\x05\u0134\x9B\x02\u03FF\u0409\x05\u0138\x9D" +
        "\x02\u0400\u0404\x05$\x13\x02\u0401\u0403\x05\u0138\x9D\x02\u0402\u0401" +
        "\x03\x02\x02\x02\u0403\u0406\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02" +
        "\u0404\u0405\x03\x02\x02\x02\u0405\u0408\x03\x02\x02\x02\u0406\u0404\x03" +
        "\x02\x02\x02\u0407\u0400\x03\x02\x02\x02\u0408\u040B\x03\x02\x02\x02\u0409" +
        "\u0407\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\u0418\x03\x02" +
        "\x02\x02\u040B\u0409\x03\x02\x02\x02\u040C\u040E\x05\u0138\x9D\x02\u040D" +
        "\u040C\x03\x02\x02\x02\u040E\u0411\x03\x02\x02\x02\u040F\u040D\x03\x02" +
        "\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0414\x03\x02\x02\x02\u0411" +
        "\u040F\x03\x02\x02\x02\u0412\u0415\x05R*\x02\u0413\u0415\x05$\x13\x02" +
        "\u0414\u0412\x03\x02\x02\x02\u0414\u0413\x03\x02\x02\x02\u0415\u0417\x03" +
        "\x02\x02\x02\u0416\u040F\x03\x02\x02\x02\u0417\u041A\x03\x02\x02\x02\u0418" +
        "\u0416\x03\x02\x02\x02\u0418\u0419\x03\x02\x02\x02\u0419\u041E\x03\x02" +
        "\x02\x02\u041A\u0418\x03\x02\x02\x02\u041B\u041D\x05\u0138\x9D\x02\u041C" +
        "\u041B\x03\x02\x02\x02\u041D\u0420\x03\x02\x02\x02\u041E\u041C\x03\x02" +
        "\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u0436\x03\x02\x02\x02\u0420" +
        "\u041E\x03\x02\x02\x02\u0421\u0422\x07\x14\x02\x02\u0422\u0423\x07x\x02" +
        "\x02\u0423\u0424\x05\xE2r\x02\u0424\u0425\x05\u0134\x9B\x02\u0425\u042F" +
        "\x05\u0138\x9D\x02\u0426\u042A\x05$\x13\x02\u0427\u0429\x05\u0138\x9D" +
        "\x02\u0428\u0427\x03\x02\x02\x02\u0429\u042C\x03\x02\x02\x02\u042A\u0428" +
        "\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042E\x03\x02\x02\x02" +
        "\u042C\u042A\x03\x02\x02\x02\u042D\u0426\x03\x02\x02\x02\u042E\u0431\x03" +
        "\x02\x02\x02\u042F\u042D\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430" +
        "\u0433\x03\x02\x02\x02\u0431\u042F\x03\x02\x02\x02\u0432\u0434\x05P)\x02" +
        "\u0433\u0432\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0436\x03" +
        "\x02\x02\x02\u0435\u03FC\x03\x02\x02\x02\u0435\u0421\x03\x02\x02\x02\u0436" +
        "O\x03\x02\x02\x02\u0437\u0438\x07\x15\x02\x02\u0438\u0439\x05\xE2r\x02" +
        "\u0439\u043B\x05\u0134\x9B\x02\u043A\u043C\x05\u0138\x9D\x02\u043B\u043A" +
        "\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043B\x03\x02\x02\x02" +
        "\u043D\u043E\x03\x02\x02\x02\u043E\u044B\x03\x02\x02\x02\u043F\u0442\x05" +
        "$\x13\x02\u0440\u0442\x05F$\x02\u0441\u043F\x03\x02\x02\x02\u0441\u0440" +
        "\x03\x02\x02\x02\u0442\u0446\x03\x02\x02\x02\u0443\u0445\x05\u0138\x9D" +
        "\x02\u0444\u0443\x03\x02\x02\x02\u0445\u0448\x03\x02\x02\x02\u0446\u0444" +
        "\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447\u044A\x03\x02\x02\x02" +
        "\u0448\u0446\x03\x02\x02\x02\u0449\u0441\x03\x02\x02\x02\u044A\u044D\x03" +
        "\x02\x02\x02\u044B\u0449\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C" +
        "\u044F\x03\x02\x02\x02\u044D\u044B\x03\x02\x02\x02\u044E\u0450\x05\u0138" +
        "\x9D\x02\u044F\u044E\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451" +
        "\u044F\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\u0457\x03\x02" +
        "\x02\x02\u0453\u0456\x05\u015A\xAE\x02\u0454\u0456\x05F$\x02\u0455\u0453" +
        "\x03\x02\x02\x02\u0455\u0454\x03\x02\x02\x02\u0456\u0459\x03\x02\x02\x02" +
        "\u0457\u0455\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458Q\x03\x02" +
        "\x02\x02\u0459\u0457\x03\x02\x02\x02\u045A\u045C\x07m\x02\x02\u045B\u045D" +
        "\x05\u0138\x9D\x02\u045C\u045B\x03\x02\x02\x02\u045C\u045D\x03\x02\x02" +
        "\x02\u045D\u045E\x03\x02\x02\x02\u045E\u0460\x05\u0108\x85\x02\u045F\u0461" +
        "\x05\u0138\x9D\x02\u0460\u045F\x03\x02\x02\x02\u0460\u0461\x03\x02\x02" +
        "\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0463\x05\u0134\x9B\x02\u0463S" +
        "\x03\x02\x02\x02\u0464\u046A\x07n\x02\x02\u0465\u0466\x07m\x02\x02\u0466" +
        "\u0467\x05\u015A\xAE\x02\u0467\u0468\x05\u0134\x9B\x02\u0468\u046A\x03" +
        "\x02\x02\x02\u0469\u0464\x03\x02\x02\x02\u0469\u0465\x03\x02\x02\x02\u046A" +
        "U\x03\x02\x02\x02\u046B\u046C\x07\x16\x02\x02\u046C\u046D\x05\xE2r\x02" +
        "\u046D\u0471\x05\u0134\x9B\x02\u046E\u0470\x05\u0138\x9D\x02\u046F\u046E" +
        "\x03\x02\x02\x02\u0470\u0473\x03\x02\x02\x02\u0471\u046F\x03\x02\x02\x02" +
        "\u0471\u0472\x03\x02\x02\x02\u0472\u047D\x03\x02\x02\x02\u0473\u0471\x03" +
        "\x02\x02\x02\u0474\u0478\x05$\x13\x02\u0475\u0477\x05\u0138\x9D\x02\u0476" +
        "\u0475\x03\x02\x02\x02\u0477\u047A\x03\x02\x02\x02\u0478\u0476\x03\x02" +
        "\x02\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047C\x03\x02\x02\x02\u047A" +
        "\u0478\x03\x02\x02\x02\u047B\u0474\x03\x02\x02\x02\u047C\u047F\x03\x02" +
        "\x02\x02\u047D\u047B\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E" +
        "\u0495\x03\x02\x02\x02\u047F\u047D\x03\x02\x02\x02\u0480\u0490\x05\u013E" +
        "\xA0\x02\u0481\u0483\x05\u0138\x9D\x02\u0482\u0481\x03\x02\x02\x02\u0483" +
        "\u0486\x03\x02\x02\x02\u0484\u0482\x03\x02\x02\x02\u0484\u0485\x03\x02" +
        "\x02\x02\u0485\u0487\x03\x02\x02\x02\u0486\u0484\x03\x02\x02\x02\u0487" +
        "\u048B\x05Z.\x02\u0488\u048A\x05\u0138\x9D\x02\u0489\u0488\x03\x02\x02" +
        "\x02\u048A\u048D\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048B\u048C" +
        "\x03\x02\x02\x02\u048C\u048F\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02" +
        "\u048E\u0484\x03\x02\x02\x02\u048F\u0492\x03\x02\x02\x02\u0490\u048E\x03" +
        "\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0494\x03\x02\x02\x02\u0492" +
        "\u0490\x03\x02\x02\x02\u0493\u0480\x03\x02\x02\x02\u0494\u0497\x03\x02" +
        "\x02\x02\u0495\u0493\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496" +
        "\u0498\x03\x02\x02\x02\u0497\u0495\x03\x02\x02\x02\u0498\u0499\x05\u013E" +
        "\xA0\x02\u0499\u04D0\x03\x02\x02\x02\u049A\u049B\x07\x16\x02\x02\u049B" +
        "\u049C\x05\xE2r\x02\u049C\u04A0\x05\u0134\x9B\x02\u049D\u049F\x05\u0138" +
        "\x9D\x02\u049E\u049D\x03\x02\x02\x02\u049F\u04A2\x03\x02\x02\x02\u04A0" +
        "\u049E\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1\u04AC\x03\x02" +
        "\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A3\u04A7\x05$\x13\x02\u04A4\u04A6" +
        "\x05\u0138\x9D\x02\u04A5\u04A4\x03\x02\x02\x02\u04A6\u04A9\x03\x02\x02" +
        "\x02\u04A7\u04A5\x03\x02\x02\x02\u04A7\u04A8\x03\x02\x02\x02\u04A8\u04AB" +
        "\x03\x02\x02\x02\u04A9\u04A7\x03\x02\x02\x02\u04AA\u04A3\x03\x02\x02\x02" +
        "\u04AB\u04AE\x03\x02\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AC\u04AD\x03" +
        "\x02\x02\x02\u04AD\u04CA\x03\x02\x02\x02\u04AE\u04AC\x03\x02\x02\x02\u04AF" +
        "\u04C5\x05\u013E\xA0\x02\u04B0\u04B2\x05\u0138\x9D\x02\u04B1\u04B0\x03" +
        "\x02\x02\x02\u04B2\u04B5\x03\x02\x02\x02\u04B3\u04B1\x03\x02\x02\x02\u04B3" +
        "\u04B4\x03\x02\x02\x02\u04B4\u04B6\x03\x02\x02\x02\u04B5\u04B3\x03\x02" +
        "\x02\x02\u04B6\u04B7\x05X-\x02\u04B7\u04BF\x05\u013C\x9F\x02\u04B8\u04BC" +
        "\x05Z.\x02\u04B9\u04BB\x05\u0138\x9D\x02\u04BA\u04B9\x03\x02\x02\x02\u04BB" +
        "\u04BE\x03\x02\x02\x02\u04BC\u04BA\x03\x02\x02\x02\u04BC\u04BD\x03\x02" +
        "\x02\x02\u04BD\u04C0\x03\x02\x02\x02\u04BE\u04BC\x03\x02\x02\x02\u04BF" +
        "\u04B8\x03\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04BF\x03\x02" +
        "\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2\u04C4\x03\x02\x02\x02\u04C3" +
        "\u04B3\x03\x02\x02\x02\u04C4\u04C7\x03\x02\x02\x02\u04C5\u04C3\x03\x02" +
        "\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C9\x03\x02\x02\x02\u04C7" +
        "\u04C5\x03\x02\x02\x02\u04C8\u04AF\x03\x02\x02\x02\u04C9\u04CC\x03\x02" +
        "\x02\x02\u04CA\u04C8\x03\x02\x02\x02\u04CA\u04CB\x03\x02\x02\x02\u04CB" +
        "\u04CD\x03\x02\x02\x02\u04CC\u04CA\x03\x02\x02\x02\u04CD\u04CE\x05\u013E" +
        "\xA0\x02\u04CE\u04D0\x03\x02\x02\x02\u04CF\u046B\x03\x02\x02\x02\u04CF" +
        "\u049A\x03\x02\x02\x02\u04D0W\x03\x02\x02\x02\u04D1\u04D7\x05\\/\x02\u04D2" +
        "\u04D3\x05\u0138\x9D\x02\u04D3\u04D4\x05Z.\x02\u04D4\u04D6\x03\x02\x02" +
        "\x02\u04D5\u04D2\x03\x02\x02\x02\u04D6\u04D9\x03\x02\x02\x02\u04D7\u04D5" +
        "\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8Y\x03\x02\x02\x02\u04D9" +
        "\u04D7\x03\x02\x02\x02\u04DA\u04E0\x05\\/\x02\u04DB\u04DC\x05\u0138\x9D" +
        "\x02\u04DC\u04DD\x05Z.\x02\u04DD\u04DF\x03\x02\x02\x02\u04DE\u04DB\x03" +
        "\x02\x02\x02\u04DF\u04E2\x03\x02\x02\x02\u04E0\u04DE\x03\x02\x02\x02\u04E0" +
        "\u04E1\x03\x02\x02\x02\u04E1[\x03\x02\x02\x02\u04E2\u04E0\x03\x02\x02" +
        "\x02\u04E3\u04E6\x05$\x13\x02\u04E4\u04E6\x05R*\x02\u04E5\u04E3\x03\x02" +
        "\x02\x02\u04E5\u04E4\x03\x02\x02\x02\u04E6\u04E7\x03\x02\x02\x02\u04E7" +
        "\u04E5\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02\u04E8\u04EB\x03\x02" +
        "\x02\x02\u04E9\u04EC\x05`1\x02\u04EA\u04EC\x05^0\x02\u04EB\u04E9\x03\x02" +
        "\x02\x02\u04EB\u04EA\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02\u04EC" +
        "\u04F1\x03\x02\x02\x02\u04ED\u04F1\x05`1\x02\u04EE\u04F1\x05^0\x02\u04EF" +
        "\u04F1\x05b2\x02\u04F0\u04E5\x03\x02\x02\x02\u04F0\u04ED\x03\x02\x02\x02" +
        "\u04F0\u04EE\x03\x02\x02\x02\u04F0\u04EF\x03\x02\x02\x02\u04F1]\x03\x02" +
        "\x02\x02\u04F2\u04F3\x07o\x02\x02\u04F3_\x03\x02\x02\x02\u04F4\u04F5\x07" +
        "p\x02\x02\u04F5a\x03\x02\x02\x02\u04F6\u04F9\x075\x02\x02\u04F7\u04FA" +
        "\x05\u010A\x86\x02\u04F8\u04FA\x07J\x02\x02\u04F9\u04F7\x03\x02\x02\x02" +
        "\u04F9\u04F8\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB\u04F9\x03" +
        "\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD" +
        "\u04FE\x05\u0134\x9B\x02\u04FEc\x03\x02\x02\x02\u04FF\u0500\x07\x17\x02" +
        "\x02\u0500\u0501\x05\xE2r\x02\u0501\u0505\x05\u0134\x9B\x02\u0502\u0504" +
        "\x05\u0138\x9D\x02\u0503\u0502\x03\x02\x02\x02\u0504\u0507\x03\x02\x02" +
        "\x02\u0505\u0503\x03\x02\x02\x02\u0505\u0506\x03\x02\x02\x02\u0506\u050E" +
        "\x03\x02\x02\x02\u0507\u0505\x03\x02\x02\x02\u0508\u050A\x05\u0138\x9D" +
        "\x02\u0509\u0508\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A\u050B" +
        "\x03\x02\x02\x02\u050B\u050D\x05$\x13\x02\u050C\u0509\x03\x02\x02\x02" +
        "\u050D\u0510\x03\x02\x02\x02\u050E\u050C\x03\x02\x02\x02\u050E\u050F\x03" +
        "\x02\x02\x02\u050F\u0514\x03\x02\x02\x02\u0510\u050E\x03\x02\x02\x02\u0511" +
        "\u0513\x05\u0138\x9D\x02\u0512\u0511\x03\x02\x02\x02\u0513\u0516\x03\x02" +
        "\x02\x02\u0514\u0512\x03\x02\x02\x02\u0514\u0515\x03\x02\x02\x02\u0515" +
        "\u051C\x03\x02\x02\x02\u0516\u0514\x03\x02\x02\x02\u0517\u0518\x05\u013E" +
        "\xA0\x02\u0518\u0519\x05Z.\x02\u0519\u051B\x03\x02\x02\x02\u051A\u0517" +
        "\x03\x02\x02\x02\u051B\u051E\x03\x02\x02\x02\u051C\u051A\x03\x02\x02\x02" +
        "\u051C\u051D\x03\x02\x02\x02\u051D\u051F\x03\x02\x02\x02\u051E\u051C\x03" +
        "\x02\x02\x02\u051F\u0520\x05\u013E\xA0\x02\u0520e\x03\x02\x02\x02\u0521" +
        "\u0523\x05\u010A\x86\x02\u0522\u0521\x03\x02\x02\x02\u0523\u0524\x03\x02" +
        "\x02\x02\u0524\u0522\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525" +
        "\u0527\x03\x02\x02\x02\u0526\u0528\x07n\x02\x02\u0527\u0526\x03\x02\x02" +
        "\x02\u0527\u0528\x03\x02\x02\x02\u0528\u052B\x03\x02\x02\x02\u0529\u052B" +
        "\x05\u0154\xAB\x02\u052A\u0522\x03\x02\x02\x02\u052A\u0529\x03\x02\x02" +
        "\x02\u052Bg\x03\x02\x02\x02\u052C\u052E\x05\u010A\x86\x02\u052D\u052C" +
        "\x03\x02\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\u052D\x03\x02\x02\x02" +
        "\u052F\u0530\x03\x02\x02\x02\u0530\u0537\x03\x02\x02\x02\u0531\u0533\x05" +
        "\u013A\x9E\x02\u0532\u0534\x05\u010A\x86\x02\u0533\u0532\x03\x02\x02\x02" +
        "\u0534\u0535\x03\x02\x02\x02\u0535\u0533\x03\x02\x02\x02\u0535\u0536\x03" +
        "\x02\x02\x02\u0536\u0538\x03\x02\x02\x02\u0537\u0531\x03\x02\x02\x02\u0537" +
        "\u0538\x03\x02\x02\x02\u0538\u053D\x03\x02\x02\x02\u0539\u053B\x05\u015C" +
        "\xAF\x02\u053A\u0539\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02\u053B" +
        "\u053C\x03\x02\x02\x02\u053C\u053E\x05T+\x02\u053D\u053A\x03\x02\x02\x02" +
        "\u053D\u053E\x03\x02\x02\x02\u053E\u0541\x03\x02\x02\x02\u053F\u0541\x05" +
        "\u0154\xAB\x02\u0540\u052D\x03\x02\x02\x02\u0540\u053F\x03\x02\x02\x02" +
        "\u0541i\x03\x02\x02\x02\u0542\u0543\x05l7\x02\u0543\u0544\x05\u013C\x9F" +
        "\x02\u0544\u0545\x05n8\x02\u0545k\x03\x02\x02\x02\u0546\u0548\x07F\x02" +
        "\x02\u0547\u0549\x05\u010A\x86\x02\u0548\u0547";
    bitmark._serializedATNSegment3 = "\x03\x02\x02\x02\u0549\u054A\x03\x02\x02\x02\u054A\u0548\x03\x02\x02\x02" +
        "\u054A\u054B\x03\x02\x02\x02\u054B\u054C\x03\x02\x02\x02\u054C\u054D\x05" +
        "\u0134\x9B\x02\u054Dm\x03\x02\x02\x02\u054E\u0550\x07F\x02\x02\u054F\u0551" +
        "\x05\u010A\x86\x02\u0550\u054F\x03\x02\x02\x02\u0551\u0552\x03\x02\x02" +
        "\x02\u0552\u0550\x03\x02\x02\x02\u0552\u0553\x03\x02\x02\x02\u0553\u0554" +
        "\x03\x02\x02\x02\u0554\u0555\x05\u0134\x9B\x02\u0555o\x03\x02\x02\x02" +
        "\u0556\u0557\x05\u013E\xA0\x02\u0557\u0558\x05|?\x02\u0558\u0559\x05\u013C" +
        "\x9F\x02\u0559\u055A\x05\x80A\x02\u055Aq\x03\x02\x02\x02\u055B\u055D\x05" +
        "p9\x02\u055C\u055B\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02\u055E\u055C" +
        "\x03\x02\x02\x02\u055E\u055F\x03\x02\x02\x02\u055Fs\x03\x02\x02\x02\u0560" +
        "\u0561\x05\u013E\xA0\x02\u0561\u0562\x05\x84C\x02\u0562\u0563\x05\u013C" +
        "\x9F\x02\u0563\u0564\x05\x80A\x02\u0564u\x03\x02\x02\x02\u0565\u0567\x05" +
        "t;\x02\u0566\u0565\x03\x02\x02\x02\u0567\u0568\x03\x02\x02\x02\u0568\u0566" +
        "\x03\x02\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569w\x03\x02\x02\x02\u056A" +
        "\u056B\x05\u013E\xA0\x02\u056B\u056C\x05\x86D\x02\u056C\u056D\x05\u013C" +
        "\x9F\x02\u056D\u056E\x05\x80A\x02\u056E\u0570\x03\x02\x02\x02\u056F\u056A" +
        "\x03\x02\x02\x02\u0570\u0571\x03\x02\x02\x02\u0571\u056F\x03\x02\x02\x02" +
        "\u0571\u0572\x03\x02\x02\x02\u0572y\x03\x02\x02\x02\u0573\u0575\x05x=" +
        "\x02\u0574\u0573\x03\x02\x02\x02\u0575\u0576\x03\x02\x02\x02\u0576\u0574" +
        "\x03\x02\x02\x02\u0576\u0577\x03\x02\x02\x02\u0577{\x03\x02\x02\x02\u0578" +
        "\u057E\x05~@\x02\u0579\u057A\x05\u0138\x9D\x02\u057A\u057B\x05~@\x02\u057B" +
        "\u057D\x03\x02\x02\x02\u057C\u0579\x03\x02\x02\x02\u057D\u0580\x03\x02" +
        "\x02\x02\u057E\u057C\x03\x02\x02\x02\u057E\u057F\x03\x02\x02\x02\u057F" +
        "}\x03\x02\x02\x02\u0580\u057E\x03\x02\x02\x02\u0581\u0583\x05\u0110\x89" +
        "\x02\u0582\u0581\x03\x02\x02\x02\u0582\u0583\x03\x02\x02\x02\u0583\u0585" +
        "\x03\x02\x02\x02\u0584\u0586\x05\u010A\x86\x02\u0585\u0584\x03\x02\x02" +
        "\x02\u0586\u0587\x03\x02\x02\x02\u0587\u0585\x03\x02\x02\x02\u0587\u0588" +
        "\x03\x02\x02\x02\u0588\u058A\x03\x02\x02\x02\u0589\u058B\x05T+\x02\u058A" +
        "\u0589\x03\x02\x02\x02\u058A\u058B\x03\x02\x02\x02\u058B\u058F\x03\x02" +
        "\x02\x02\u058C\u058F\x05\u0142\xA2\x02\u058D\u058F\x05\u0154\xAB\x02\u058E" +
        "\u0582\x03\x02\x02\x02\u058E\u058C\x03\x02\x02\x02\u058E\u058D\x03\x02" +
        "\x02\x02\u058F\x7F\x03\x02\x02\x02\u0590\u0596\x05\x82B\x02\u0591\u0592" +
        "\x05\u013A\x9E\x02\u0592\u0593\x05\x82B\x02\u0593\u0595\x03\x02\x02\x02" +
        "\u0594\u0591\x03\x02\x02\x02\u0595\u0598\x03\x02\x02\x02\u0596\u0594\x03" +
        "\x02\x02\x02\u0596\u0597\x03\x02\x02\x02\u0597\x81\x03\x02\x02\x02\u0598" +
        "\u0596\x03\x02\x02\x02\u0599\u059B\x05\u0110\x89\x02\u059A\u0599\x03\x02" +
        "\x02\x02\u059A\u059B\x03\x02\x02\x02\u059B\u059C\x03\x02\x02\x02\u059C" +
        "\u05A1\x05\u010A\x86\x02\u059D\u059F\x05\u015C\xAF\x02\u059E\u059D\x03" +
        "\x02\x02\x02\u059E\u059F\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0" +
        "\u05A2\x05T+\x02\u05A1\u059E\x03\x02\x02\x02\u05A1\u05A2\x03\x02\x02\x02" +
        "\u05A2\u05B5\x03\x02\x02\x02\u05A3\u05B5\x05\u0142\xA2\x02\u05A4\u05B5" +
        "\x05\u0154\xAB\x02\u05A5\u05A7\x05T+\x02\u05A6\u05A8\x05\u010A\x86\x02" +
        "\u05A7\u05A6\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8\u05B5\x03" +
        "\x02\x02\x02\u05A9\u05AC\x05\u0114\x8B\x02\u05AA\u05AD\x05\u010A\x86\x02" +
        "\u05AB\u05AD\x05\u0138\x9D\x02\u05AC\u05AA\x03\x02\x02\x02\u05AC\u05AB" +
        "\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02\u05AE\u05AC\x03\x02\x02\x02" +
        "\u05AE\u05AF\x03\x02\x02\x02\u05AF\u05B0\x03\x02\x02\x02\u05B0\u05B2\x05" +
        "\u0134\x9B\x02\u05B1\u05B3\x05T+\x02\u05B2\u05B1\x03\x02\x02\x02\u05B2" +
        "\u05B3\x03\x02\x02\x02\u05B3\u05B5\x03\x02\x02\x02\u05B4\u059A\x03\x02" +
        "\x02\x02\u05B4\u05A3\x03\x02\x02\x02\u05B4\u05A4\x03\x02\x02\x02\u05B4" +
        "\u05A5\x03\x02\x02\x02\u05B4\u05A9\x03\x02\x02\x02\u05B5\x83\x03\x02\x02" +
        "\x02\u05B6\u05B7\x078\x02\x02\u05B7\u05B9\x05\xE4s\x02\u05B8\u05BA\x05" +
        "\u0104\x83\x02\u05B9\u05B8\x03\x02\x02\x02\u05B9\u05BA\x03\x02\x02\x02" +
        "\u05BA\u05BB\x03\x02\x02\x02\u05BB\u05BC\x07L\x02\x02\u05BC\u05BD\x05" +
        "\u0106\x84\x02\u05BD\u05BE\x05\u0134\x9B\x02\u05BE\x85\x03\x02\x02\x02" +
        "\u05BF\u05C0\x078\x02\x02\u05C0\u05C1\x05\xE8u\x02\u05C1\u05C2\x07L\x02" +
        "\x02\u05C2\u05C3\x05\u0106\x84\x02\u05C3\u05C4\x05\u0134\x9B\x02\u05C4" +
        "\x87\x03\x02\x02\x02\u05C5\u05C6\x07\x18\x02\x02\u05C6\u05C7\x05\xE2r" +
        "\x02\u05C7\u05C8\x05\u0134\x9B\x02\u05C8\u05D2\x05\u0138\x9D\x02\u05C9" +
        "\u05CD\x05$\x13\x02\u05CA\u05CC\x05\u0138\x9D\x02\u05CB\u05CA\x03\x02" +
        "\x02\x02\u05CC\u05CF\x03\x02\x02\x02\u05CD\u05CB\x03\x02\x02\x02\u05CD" +
        "\u05CE\x03\x02\x02\x02\u05CE\u05D1\x03\x02\x02\x02\u05CF\u05CD\x03\x02" +
        "\x02\x02\u05D0\u05C9\x03\x02\x02\x02\u05D1\u05D4\x03\x02\x02\x02\u05D2" +
        "\u05D0\x03\x02\x02\x02\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05D8\x03\x02" +
        "\x02\x02\u05D4\u05D2\x03\x02\x02\x02\u05D5\u05D6\x05\u013E\xA0\x02\u05D6" +
        "\u05D7\x05j6\x02\u05D7\u05D9\x03\x02\x02\x02\u05D8\u05D5\x03\x02\x02\x02" +
        "\u05D8\u05D9\x03\x02\x02\x02\u05D9\u05DA\x03\x02\x02\x02\u05DA\u05DB\x05" +
        "r:\x02\u05DB\u05DF\x05\u013E\xA0\x02\u05DC\u05DE\x05\u0138\x9D\x02\u05DD" +
        "\u05DC\x03\x02\x02\x02\u05DE\u05E1\x03\x02\x02\x02\u05DF\u05DD\x03\x02" +
        "\x02\x02\u05DF\u05E0\x03\x02\x02\x02\u05E0\u05E5\x03\x02\x02\x02\u05E1" +
        "\u05DF\x03\x02\x02\x02\u05E2\u05E4\x05$\x13\x02\u05E3\u05E2\x03\x02\x02" +
        "\x02\u05E4\u05E7\x03\x02\x02\x02\u05E5\u05E3\x03\x02\x02\x02\u05E5\u05E6" +
        "\x03\x02\x02\x02\u05E6\x89\x03\x02\x02\x02\u05E7\u05E5\x03\x02\x02\x02" +
        "\u05E8\u05E9\x07\x19\x02\x02\u05E9\u05EA\x05\xE2r\x02\u05EA\u05EB\x05" +
        "\u0134\x9B\x02\u05EB\u05F5\x05\u0138\x9D\x02\u05EC\u05F0\x05$\x13\x02" +
        "\u05ED\u05EF\x05\u0138\x9D\x02\u05EE\u05ED\x03\x02\x02\x02\u05EF\u05F2" +
        "\x03\x02\x02\x02\u05F0\u05EE\x03\x02\x02\x02\u05F0\u05F1\x03\x02\x02\x02" +
        "\u05F1\u05F4\x03\x02\x02\x02\u05F2\u05F0\x03\x02\x02\x02\u05F3\u05EC\x03" +
        "\x02\x02\x02\u05F4\u05F7\x03\x02\x02\x02\u05F5\u05F3\x03\x02\x02\x02\u05F5" +
        "\u05F6\x03\x02\x02\x02\u05F6\u05FB\x03\x02\x02\x02\u05F7\u05F5\x03\x02" +
        "\x02\x02\u05F8\u05F9\x05\u013E\xA0\x02\u05F9\u05FA\x05j6\x02\u05FA\u05FC" +
        "\x03\x02\x02\x02\u05FB\u05F8\x03\x02\x02\x02\u05FB\u05FC\x03\x02\x02\x02" +
        "\u05FC\u05FD\x03\x02\x02\x02\u05FD\u05FE\x05r:\x02\u05FE\u0602\x05\u013E" +
        "\xA0\x02\u05FF\u0601\x05\u0138\x9D\x02\u0600\u05FF\x03\x02\x02\x02\u0601" +
        "\u0604\x03\x02\x02\x02\u0602\u0600\x03\x02\x02\x02\u0602\u0603\x03\x02" +
        "\x02\x02\u0603\u0608\x03\x02\x02\x02\u0604\u0602\x03\x02\x02\x02\u0605" +
        "\u0607\x05$\x13\x02\u0606\u0605\x03\x02\x02\x02\u0607\u060A\x03\x02\x02" +
        "\x02\u0608\u0606\x03\x02\x02\x02\u0608\u0609\x03\x02\x02\x02\u0609\x8B" +
        "\x03\x02\x02\x02\u060A\u0608\x03\x02\x02\x02\u060B\u060C\x07\x1A\x02\x02" +
        "\u060C\u060D\x05\xE2r\x02\u060D\u060E\x05\u0134\x9B\x02\u060E\u0615\x05" +
        "\u0138\x9D\x02\u060F\u0611\x05$\x13\x02\u0610\u0612\x05\u0138\x9D\x02" +
        "\u0611\u0610\x03\x02\x02\x02\u0611\u0612\x03\x02\x02\x02\u0612\u0614\x03" +
        "\x02\x02\x02\u0613\u060F\x03\x02\x02\x02\u0614\u0617\x03\x02\x02\x02\u0615" +
        "\u0613\x03\x02\x02\x02\u0615\u0616\x03\x02\x02\x02\u0616\u061B\x03\x02" +
        "\x02\x02\u0617\u0615\x03\x02\x02\x02\u0618\u0619\x05\u013E\xA0\x02\u0619" +
        "\u061A\x05j6\x02\u061A\u061C\x03\x02\x02\x02\u061B\u0618\x03\x02\x02\x02" +
        "\u061B\u061C\x03\x02\x02\x02\u061C\u061D\x03\x02\x02\x02\u061D\u061E\x05" +
        "r:\x02\u061E\u0622\x05\u013E\xA0\x02\u061F\u0621\x05\u0138\x9D\x02\u0620" +
        "\u061F\x03\x02\x02\x02\u0621\u0624\x03\x02\x02\x02\u0622\u0620\x03\x02" +
        "\x02\x02\u0622\u0623\x03\x02\x02\x02\u0623\u0628\x03\x02\x02\x02\u0624" +
        "\u0622\x03\x02\x02\x02\u0625\u0627\x05$\x13\x02\u0626\u0625\x03\x02\x02" +
        "\x02\u0627\u062A\x03\x02\x02\x02\u0628\u0626\x03\x02\x02\x02\u0628\u0629" +
        "\x03\x02\x02\x02\u0629\x8D\x03\x02\x02\x02\u062A\u0628\x03\x02\x02\x02" +
        "\u062B\u062C\x07\x1B\x02\x02\u062C\u062D\x05\xE2r\x02\u062D\u062E\x05" +
        "\u0134\x9B\x02\u062E\u0635\x05\u0138\x9D\x02\u062F\u0631\x05$\x13\x02" +
        "\u0630\u0632\x05\u0138\x9D\x02\u0631\u0630\x03\x02\x02\x02\u0631\u0632" +
        "\x03\x02\x02\x02\u0632\u0634\x03\x02\x02\x02\u0633\u062F\x03\x02\x02\x02" +
        "\u0634\u0637\x03\x02\x02\x02\u0635\u0633\x03\x02\x02\x02\u0635\u0636\x03" +
        "\x02\x02\x02\u0636\u063B\x03\x02\x02\x02\u0637\u0635\x03\x02\x02\x02\u0638" +
        "\u0639\x05\u013E\xA0\x02\u0639\u063A\x05j6\x02\u063A\u063C\x03\x02\x02" +
        "\x02\u063B\u0638\x03\x02\x02\x02\u063B\u063C\x03\x02\x02\x02\u063C\u063D" +
        "\x03\x02\x02\x02\u063D\u063E\x05r:\x02\u063E\u0642\x05\u013E\xA0\x02\u063F" +
        "\u0641\x05\u0138\x9D\x02\u0640\u063F\x03\x02\x02\x02\u0641\u0644\x03\x02" +
        "\x02\x02\u0642\u0640\x03\x02\x02\x02\u0642\u0643\x03\x02\x02\x02\u0643" +
        "\u0648\x03\x02\x02\x02\u0644\u0642\x03\x02\x02\x02\u0645\u0647\x05$\x13" +
        "\x02\u0646\u0645\x03\x02\x02\x02\u0647\u064A\x03\x02\x02\x02\u0648\u0646" +
        "\x03\x02\x02\x02\u0648\u0649\x03\x02\x02\x02\u0649\x8F\x03\x02\x02\x02" +
        "\u064A\u0648\x03\x02\x02\x02\u064B\u064C\x07\x1C\x02\x02\u064C\u064D\x05" +
        "\xE2r\x02\u064D\u064E\x05\u0134\x9B\x02\u064E\u0655\x05\u0138\x9D\x02" +
        "\u064F\u0651\x05$\x13\x02\u0650\u0652\x05\u0138\x9D\x02\u0651\u0650\x03" +
        "\x02\x02\x02\u0651\u0652\x03\x02\x02\x02\u0652\u0654\x03\x02\x02\x02\u0653" +
        "\u064F\x03\x02\x02\x02\u0654\u0657\x03\x02\x02\x02\u0655\u0653\x03\x02" +
        "\x02\x02\u0655\u0656\x03\x02\x02\x02\u0656\u065B\x03\x02\x02\x02\u0657" +
        "\u0655\x03\x02\x02\x02\u0658\u0659\x05\u013E\xA0\x02\u0659\u065A\x05j" +
        "6\x02\u065A\u065C\x03\x02\x02\x02\u065B\u0658\x03\x02\x02\x02\u065B\u065C" +
        "\x03\x02\x02\x02\u065C\u065D\x03\x02\x02\x02\u065D\u065E\x05v<\x02\u065E" +
        "\u065F\x05\u013E\xA0\x02\u065F\x91\x03\x02\x02\x02\u0660\u0661\x07\x1D" +
        "\x02\x02\u0661\u0662\x05\xE2r\x02\u0662\u0663\x05\u0134\x9B\x02\u0663" +
        "\u066A\x05\u0138\x9D\x02\u0664\u0666\x05$\x13\x02\u0665\u0667\x05\u0138" +
        "\x9D\x02\u0666\u0665\x03\x02\x02\x02\u0666\u0667\x03\x02\x02\x02\u0667" +
        "\u0669\x03\x02\x02\x02\u0668\u0664\x03\x02\x02\x02\u0669\u066C\x03\x02" +
        "\x02\x02\u066A\u0668\x03\x02\x02\x02\u066A\u066B\x03\x02\x02\x02\u066B" +
        "\u0670\x03\x02\x02\x02\u066C\u066A\x03\x02\x02\x02\u066D\u066E\x05\u013E" +
        "\xA0\x02\u066E\u066F\x05j6\x02\u066F\u0671\x03\x02\x02\x02\u0670\u066D" +
        "\x03\x02\x02\x02\u0670\u0671\x03\x02\x02\x02\u0671\u0672\x03\x02\x02\x02" +
        "\u0672\u0673\x05x=\x02\u0673\u0674\x05\u013E\xA0\x02\u0674\x93\x03\x02" +
        "\x02\x02\u0675\u0676\x07\x1E\x02\x02\u0676\u0677\x05\xE2r\x02\u0677\u0678" +
        "\x05\u0134\x9B\x02\u0678\u067F\x05\u0138\x9D\x02\u0679\u067B\x05$\x13" +
        "\x02\u067A\u067C\x05\u0138\x9D\x02\u067B\u067A\x03\x02\x02\x02\u067B\u067C" +
        "\x03\x02\x02\x02\u067C\u067E\x03\x02\x02\x02\u067D\u0679\x03\x02\x02\x02" +
        "\u067E\u0681\x03\x02\x02\x02\u067F\u067D\x03\x02\x02\x02\u067F\u0680\x03" +
        "\x02\x02\x02\u0680\u0685\x03\x02\x02\x02\u0681\u067F\x03\x02\x02\x02\u0682" +
        "\u0683\x05\u013E\xA0\x02\u0683\u0684\x05j6\x02\u0684\u0686\x03\x02\x02" +
        "\x02\u0685\u0682\x03\x02\x02\x02\u0685\u0686\x03\x02\x02\x02\u0686\u0687" +
        "\x03\x02\x02\x02\u0687\u0688\x05r:\x02\u0688\u0689\x05\u013E\xA0\x02\u0689" +
        "\x95\x03\x02\x02\x02\u068A\u068B\x07\x1F\x02\x02\u068B\u068C\x05\xE2r" +
        "\x02\u068C\u068E\x05\u0134\x9B\x02\u068D\u068F\x05\u0138\x9D\x02\u068E" +
        "\u068D\x03\x02\x02\x02\u068F\u0690\x03\x02\x02\x02\u0690\u068E\x03\x02" +
        "\x02\x02\u0690\u0691\x03\x02\x02\x02\u0691\u0698\x03\x02\x02\x02\u0692" +
        "\u0694\x05$\x13\x02\u0693\u0695\x05\u0138\x9D\x02\u0694\u0693\x03\x02" +
        "\x02\x02\u0694\u0695\x03\x02\x02\x02\u0695\u0697\x03\x02\x02\x02\u0696" +
        "\u0692\x03\x02\x02\x02\u0697\u069A\x03\x02\x02\x02\u0698\u0696\x03\x02" +
        "\x02\x02\u0698\u0699\x03\x02\x02\x02\u0699\u069B\x03\x02\x02\x02\u069A" +
        "\u0698\x03\x02\x02\x02\u069B\u069C\x052\x1A\x02\u069C\x97\x03\x02\x02" +
        "\x02\u069D\u069E\x07 \x02\x02\u069E\u069F\x05\xE2r\x02\u069F\u06A3\x05" +
        "\u0134\x9B\x02\u06A0\u06A2\x05\u0138\x9D\x02\u06A1\u06A0\x03\x02\x02\x02" +
        "\u06A2\u06A5\x03\x02\x02\x02\u06A3\u06A1\x03\x02\x02\x02\u06A3\u06A4\x03" +
        "\x02\x02\x02\u06A4\u06A7\x03\x02\x02\x02\u06A5\u06A3\x03\x02\x02\x02\u06A6" +
        "\u06A8\x05\u013E\xA0\x02\u06A7\u06A6\x03\x02\x02\x02\u06A7\u06A8\x03\x02" +
        "\x02\x02\u06A8\u06B2\x03\x02\x02\x02\u06A9\u06AD\x05$\x13\x02\u06AA\u06AC" +
        "\x05\u0138\x9D\x02\u06AB\u06AA\x03\x02\x02\x02\u06AC\u06AF\x03\x02\x02" +
        "\x02\u06AD\u06AB\x03\x02\x02\x02\u06AD\u06AE\x03\x02\x02\x02\u06AE\u06B1" +
        "\x03\x02\x02\x02\u06AF\u06AD\x03\x02\x02\x02\u06B0\u06A9\x03\x02\x02\x02" +
        "\u06B1\u06B4\x03\x02\x02\x02\u06B2\u06B0\x03\x02\x02\x02\u06B2\u06B3\x03" +
        "\x02\x02\x02\u06B3\u06BC\x03\x02\x02\x02\u06B4\u06B2\x03\x02\x02\x02\u06B5" +
        "\u06B7\x05\u013E\xA0\x02\u06B6\u06B5\x03\x02\x02\x02\u06B6\u06B7\x03\x02" +
        "\x02\x02\u06B7\u06B9\x03\x02\x02\x02\u06B8\u06BA\x05\u0142\xA2\x02\u06B9" +
        "\u06B8\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u06BB\x03\x02" +
        "\x02\x02\u06BB\u06BD\x052\x1A\x02\u06BC\u06B6\x03\x02\x02\x02\u06BD\u06BE" +
        "\x03\x02\x02\x02\u06BE\u06BC\x03\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02" +
        "\u06BF\u06C1\x03\x02\x02\x02\u06C0\u06C2\x05\u013E\xA0\x02\u06C1\u06C0" +
        "\x03\x02\x02\x02\u06C1\u06C2\x03\x02\x02\x02\u06C2\x99\x03\x02\x02\x02" +
        "\u06C3\u06C4\x07q\x02\x02\u06C4\u06C5\x05\u010A\x86\x02\u06C5\u06C6\x05" +
        "\u0134\x9B\x02\u06C6\u06CC\x03\x02\x02\x02\u06C7\u06C8\x07r\x02\x02\u06C8" +
        "\u06C9\x05\u010A\x86\x02\u06C9\u06CA\x05\u0134\x9B\x02\u06CA\u06CC\x03" +
        "\x02\x02\x02\u06CB\u06C3\x03\x02\x02\x02\u06CB\u06C7\x03\x02\x02\x02\u06CC" +
        "\x9B\x03\x02\x02\x02\u06CD\u06CE\x07!\x02\x02\u06CE\u06CF\x05\xE2r\x02" +
        "\u06CF\u06D3\x05\u0134\x9B\x02\u06D0\u06D2\x05\u0138\x9D\x02\u06D1\u06D0" +
        "\x03\x02\x02\x02\u06D2\u06D5\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02" +
        "\u06D3\u06D4\x03\x02\x02\x02\u06D4\u06DF\x03\x02\x02\x02\u06D5\u06D3\x03" +
        "\x02\x02\x02\u06D6\u06DA\x05$\x13\x02\u06D7\u06D9\x05\u0138\x9D\x02\u06D8" +
        "\u06D7\x03\x02\x02\x02\u06D9\u06DC\x03\x02\x02\x02\u06DA\u06D8\x03\x02" +
        "\x02\x02\u06DA\u06DB\x03\x02\x02\x02\u06DB\u06DE\x03\x02\x02\x02\u06DC" +
        "\u06DA\x03\x02\x02\x02\u06DD\u06D6\x03\x02\x02\x02\u06DE\u06E1\x03\x02" +
        "\x02\x02\u06DF\u06DD\x03\x02\x02\x02\u06DF\u06E0\x03\x02\x02\x02\u06E0" +
        "\u06F2\x03\x02\x02\x02\u06E1\u06DF\x03\x02\x02\x02\u06E2\u06EF\x05\u0140" +
        "\xA1\x02\u06E3\u06E5\x05\u0138\x9D\x02\u06E4\u06E3\x03\x02\x02\x02\u06E5" +
        "\u06E8\x03\x02\x02\x02\u06E6\u06E4\x03\x02\x02\x02\u06E6\u06E7\x03\x02" +
        "\x02\x02\u06E7\u06EB\x03\x02\x02\x02\u06E8\u06E6\x03\x02\x02\x02\u06E9" +
        "\u06EC\x05\u010A\x86\x02\u06EA\u06EC\x05$\x13\x02\u06EB\u06E9\x03\x02" +
        "\x02\x02\u06EB\u06EA\x03\x02\x02\x02\u06EC\u06EE\x03\x02\x02\x02\u06ED" +
        "\u06E6\x03\x02\x02\x02\u06EE\u06F1\x03\x02\x02\x02\u06EF\u06ED\x03\x02" +
        "\x02\x02\u06EF\u06F0\x03\x02\x02\x02\u06F0\u06F3\x03\x02\x02\x02\u06F1" +
        "\u06EF\x03\x02\x02\x02\u06F2\u06E2\x03\x02\x02\x02\u06F3\u06F4\x03\x02" +
        "\x02\x02\u06F4\u06F2\x03\x02\x02\x02\u06F4\u06F5\x03\x02\x02\x02\u06F5" +
        "\u06F6\x03\x02\x02\x02\u06F6\u06F7\x05\u0140\xA1\x02\u06F7\x9D\x03\x02" +
        "\x02\x02\u06F8\u06F9\x07\"\x02\x02\u06F9\u06FA\x05\xE2r\x02\u06FA\u06FB" +
        "\x05\u0134\x9B\x02\u06FB\u0705\x05\u0138\x9D\x02\u06FC\u0700\x05$\x13" +
        "\x02\u06FD\u06FF\x05\u0138\x9D\x02\u06FE\u06FD\x03\x02\x02\x02\u06FF\u0702" +
        "\x03\x02\x02\x02\u0700\u06FE\x03\x02\x02\x02\u0700\u0701\x03\x02\x02\x02" +
        "\u0701\u0704\x03\x02\x02\x02\u0702\u0700\x03\x02\x02\x02\u0703\u06FC\x03" +
        "\x02\x02\x02\u0704\u0707\x03\x02\x02\x02\u0705\u0703\x03\x02\x02\x02\u0705" +
        "\u0706\x03\x02\x02\x02\u0706\u0709\x03\x02\x02\x02\u0707\u0705\x03\x02" +
        "\x02\x02\u0708\u070A\x05\xA0Q\x02\u0709\u0708\x03\x02\x02\x02\u070A\u070B" +
        "\x03\x02\x02\x02\u070B\u0709\x03\x02\x02\x02\u070B\u070C\x03\x02\x02\x02" +
        "\u070C\u070D\x03\x02\x02\x02\u070D\u070E\x05\u0138\x9D\x02\u070E\x9F\x03" +
        "\x02\x02\x02\u070F\u0713\x07B\x02\x02\u0710\u0712\v\x02\x02\x02\u0711" +
        "\u0710\x03\x02\x02\x02\u0712\u0715\x03\x02\x02\x02\u0713\u0714\x03\x02" +
        "\x02\x02\u0713\u0711\x03\x02\x02\x02\u0714\u0716\x03\x02\x02\x02\u0715" +
        "\u0713\x03\x02\x02\x02\u0716\u0717\x05\u0134\x9B\x02\u0717\u0718\x05\u0138" +
        "\x9D\x02\u0718\u0724\x03\x02\x02\x02\u0719\u071D\x07A\x02\x02\u071A\u071C" +
        "\v\x02\x02\x02\u071B\u071A\x03\x02\x02\x02\u071C\u071F\x03\x02\x02\x02" +
        "\u071D\u071E\x03\x02\x02\x02\u071D\u071B\x03\x02\x02\x02\u071E\u0720\x03" +
        "\x02\x02\x02\u071F\u071D\x03\x02\x02\x02\u0720\u0721\x05\u0134\x9B\x02" +
        "\u0721\u0722\x05\u0138\x9D\x02\u0722\u0724\x03\x02\x02\x02\u0723\u070F" +
        "\x03\x02\x02\x02\u0723\u0719\x03\x02\x02\x02\u0724\xA1\x03\x02\x02\x02" +
        "\u0725\u0726\x07#\x02\x02\u0726\u0727\x05\xE2r\x02\u0727\u0728\x05\u0134" +
        "\x9B\x02\u0728\u0735\x05\u0138\x9D\x02\u0729\u072C\x05$\x13\x02\u072A" +
        "\u072C\x05\xA4S\x02\u072B\u0729\x03\x02\x02\x02\u072B\u072A\x03\x02\x02" +
        "\x02\u072C\u0730\x03\x02\x02\x02\u072D\u072F\x05\u0138\x9D\x02\u072E\u072D" +
        "\x03\x02\x02\x02\u072F\u0732\x03\x02\x02\x02\u0730\u072E\x03\x02\x02\x02" +
        "\u0730\u0731\x03\x02\x02\x02\u0731\u0734\x03\x02\x02\x02\u0732\u0730\x03" +
        "\x02\x02\x02\u0733\u072B\x03\x02\x02\x02\u0734\u0737\x03\x02\x02\x02\u0735" +
        "\u0733\x03\x02\x02\x02\u0735\u0736\x03\x02\x02\x02\u0736\xA3\x03\x02\x02" +
        "\x02\u0737\u0735\x03\x02\x02\x02\u0738\u0739\x07C\x02\x02\u0739\u073A" +
        "\x05\u010A\x86\x02\u073A\u073C\x05\u0134\x9B\x02\u073B\u073D\x05\xA6T" +
        "\x02\u073C\u073B\x03\x02\x02\x02\u073C\u073D\x03\x02\x02\x02\u073D\xA5" +
        "\x03\x02\x02\x02\u073E\u073F\x07\x99\x02\x02\u073F\u0740\x05\u0158\xAD" +
        "\x02\u0740\u0741\x05\u0134\x9B\x02\u0741\xA7\x03\x02\x02\x02\u0742\u0749" +
        "\x07$\x02\x02\u0743\u0747\x07J\x02\x02\u0744\u0748\x05\xEAv\x02\u0745" +
        "\u0748\x05\xE6t\x02\u0746\u0748\x05\xEEx\x02\u0747\u0744\x03\x02\x02\x02" +
        "\u0747\u0745\x03\x02\x02\x02\u0747\u0746\x03\x02\x02\x02\u0748\u074A\x03" +
        "\x02\x02\x02\u0749\u0743\x03\x02\x02\x02\u0749\u074A\x03\x02\x02\x02\u074A" +
        "\u074B\x03\x02\x02\x02\u074B\u074C\x05\u0134\x9B\x02\u074C\u0756\x05\u0138" +
        "\x9D\x02\u074D\u0751\x05$\x13\x02\u074E\u0750\x05\u0138\x9D\x02\u074F" +
        "\u074E\x03\x02\x02\x02\u0750\u0753\x03\x02\x02\x02\u0751\u074F\x03\x02" +
        "\x02\x02\u0751\u0752\x03\x02\x02\x02\u0752\u0755\x03\x02\x02\x02\u0753" +
        "\u0751\x03\x02\x02\x02\u0754\u074D\x03\x02\x02\x02\u0755\u0758\x03\x02" +
        "\x02\x02\u0756\u0754\x03\x02\x02\x02\u0756\u0757\x03\x02\x02\x02\u0757" +
        "\xA9\x03\x02\x02\x02\u0758\u0756\x03\x02\x02\x02\u0759\u075A\x07%\x02" +
        "\x02\u075A\u075B\x05\xE2r\x02\u075B\u075C\x05\u0134\x9B\x02\u075C\u0766" +
        "\x05\u0138\x9D\x02\u075D\u0761\x05$\x13\x02\u075E\u0760\x05\u0138\x9D" +
        "\x02\u075F\u075E\x03\x02\x02\x02\u0760\u0763\x03\x02\x02\x02\u0761\u075F" +
        "\x03\x02\x02\x02\u0761\u0762\x03\x02\x02\x02\u0762\u0765\x03\x02\x02\x02" +
        "\u0763\u0761\x03\x02\x02\x02\u0764\u075D\x03\x02\x02\x02\u0765\u0768\x03" +
        "\x02\x02\x02\u0766\u0764\x03\x02\x02\x02\u0766\u0767\x03\x02\x02\x02\u0767" +
        "\xAB\x03\x02\x02\x02\u0768\u0766\x03\x02\x02\x02\u0769\u076A\x07&\x02" +
        "\x02\u076A\u076B\x05\xE2r\x02\u076B\u076C\x05\u0134\x9B\x02\u076C\u0776" +
        "\x05\u0138\x9D\x02\u076D\u0771\x05$\x13\x02\u076E\u0770\x05\u0138\x9D" +
        "\x02\u076F\u076E\x03\x02\x02\x02\u0770\u0773\x03\x02\x02\x02\u0771\u076F" +
        "\x03\x02\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772\u0775\x03\x02\x02\x02" +
        "\u0773\u0771\x03\x02\x02\x02\u0774\u076D\x03\x02\x02\x02\u0775\u0778\x03" +
        "\x02\x02\x02\u0776\u0774\x03\x02\x02\x02\u0776\u0777\x03\x02\x02\x02\u0777" +
        "\xAD\x03\x02\x02\x02\u0778\u0776\x03\x02\x02\x02\u0779\u077A\x07\'\x02" +
        "\x02\u077A\u077B\x05\xE2r\x02\u077B\u077F\x05\u0134\x9B\x02\u077C\u077E" +
        "\x05\u0138\x9D\x02\u077D\u077C\x03\x02\x02\x02\u077E\u0781\x03\x02\x02" +
        "\x02\u077F\u077D\x03\x02\x02\x02\u077F\u0780\x03\x02\x02\x02\u0780\u0785" +
        "\x03\x02\x02\x02\u0781\u077F\x03\x02\x02\x02\u0782\u0783\x05.\x18\x02" +
        "\u0783\u0784\x05\u0138\x9D\x02\u0784\u0786\x03\x02\x02\x02\u0785\u0782" +
        "\x03\x02\x02\x02\u0785\u0786\x03\x02\x02\x02\u0786\u0788\x03\x02\x02\x02" +
        "\u0787\u0789\x05\u0108\x85\x02\u0788\u0787\x03\x02\x02\x02\u0788\u0789" +
        "\x03\x02\x02\x02\u0789\xAF\x03\x02\x02\x02\u078A\u078B\x07(\x02\x02\u078B" +
        "\u078C\x05\xE2r\x02\u078C\u078D\x05\u0134\x9B\x02\u078D\u0797\x05\u0138" +
        "\x9D\x02\u078E\u0792\x05$\x13\x02\u078F\u0791\x05\u0138\x9D\x02\u0790" +
        "\u078F\x03\x02\x02\x02\u0791\u0794\x03\x02\x02\x02\u0792\u0790\x03\x02" +
        "\x02\x02\u0792\u0793\x03\x02\x02\x02\u0793\u0796\x03\x02\x02\x02\u0794" +
        "\u0792\x03\x02\x02\x02\u0795\u078E\x03\x02\x02\x02\u0796\u0799\x03\x02" +
        "\x02\x02\u0797\u0795\x03\x02\x02\x02\u0797\u0798\x03\x02\x02\x02\u0798" +
        "\u079B\x03\x02\x02\x02\u0799\u0797\x03\x02\x02\x02\u079A\u079C\x05\u0108" +
        "\x85\x02\u079B\u079A\x03\x02\x02\x02\u079B\u079C\x03\x02\x02\x02\u079C" +
        "\xB1\x03\x02\x02\x02\u079D\u079E\x07)\x02\x02\u079E\u079F\x05\xE2r\x02" +
        "\u079F\u07A0\x05\u0134\x9B\x02\u07A0\u07A1\x05\u0138\x9D\x02\u07A1\u07A2" +
        "\x05\xB8]\x02\u07A2\u07A3\x05\u013C\x9F\x02\u07A3\u07A4\x05\xB8]\x02\u07A4" +
        "\xB3\x03\x02\x02\x02\u07A5\u07A6\x07*\x02\x02\u07A6\u07A7\x05\xE2r\x02" +
        "\u07A7\u07AB\x05\u0134\x9B\x02\u07A8\u07AA\x05\u0138\x9D\x02\u07A9\u07A8" +
        "\x03\x02\x02\x02\u07AA\u07AD\x03\x02\x02\x02\u07AB\u07A9\x03\x02\x02\x02" +
        "\u07AB\u07AC\x03\x02\x02\x02\u07AC\u07AE\x03\x02\x02\x02\u07AD\u07AB\x03" +
        "\x02\x02\x02\u07AE\u07AF\x05\u013E\xA0\x02\u07AF\u07B0\x05\xB8]\x02\u07B0" +
        "\u07B1\x05\u013C\x9F\x02\u07B1\u07B9\x05\xB8]\x02\u07B2\u07B3\x05\u013E" +
        "\xA0\x02\u07B3\u07B4\x05\xB8]\x02\u07B4\u07B5\x05\u013C\x9F\x02\u07B5" +
        "\u07B6\x05\xB8]\x02\u07B6\u07B8\x03\x02\x02\x02\u07B7\u07B2\x03\x02\x02" +
        "\x02\u07B8\u07BB\x03\x02\x02\x02\u07B9\u07B7\x03\x02\x02\x02\u07B9\u07BA" +
        "\x03\x02\x02\x02\u07BA\u07BC\x03\x02\x02\x02\u07BB\u07B9\x03\x02\x02\x02" +
        "\u07BC\u07BD\x05\u013E\xA0\x02\u07BD\xB5\x03\x02\x02\x02\u07BE\u07C3\x05" +
        "\xBA^\x02\u07BF\u07C3\x05\u010A\x86\x02\u07C0\u07C3\x05.\x18\x02\u07C1" +
        "\u07C3\x05\xF8}\x02\u07C2\u07BE\x03\x02\x02\x02\u07C2\u07BF\x03\x02\x02" +
        "\x02\u07C2\u07C0\x03\x02\x02\x02\u07C2\u07C1\x03\x02\x02\x02\u07C3\u07C4" +
        "\x03\x02\x02\x02\u07C4\u07C2\x03\x02\x02\x02\u07C4\u07C5\x03\x02\x02\x02" +
        "\u07C5\xB7\x03\x02\x02\x02\u07C6\u07CC\x05\xB6\\\x02\u07C7\u07C8\x05\u013A" +
        "\x9E\x02\u07C8\u07C9\x05\xB6\\\x02\u07C9\u07CB\x03\x02\x02\x02\u07CA\u07C7" +
        "\x03\x02\x02\x02\u07CB\u07CE\x03\x02\x02\x02\u07CC\u07CA\x03\x02\x02\x02" +
        "\u07CC\u07CD\x03\x02\x02\x02\u07CD\xB9\x03\x02\x02\x02\u07CE\u07CC\x03" +
        "\x02\x02\x02\u07CF\u07D9\x05\xBC_\x02\u07D0\u07D2\x05\u0138\x9D\x02\u07D1" +
        "\u07D0\x03\x02\x02\x02\u07D2\u07D5\x03\x02\x02\x02\u07D3\u07D1\x03\x02" +
        "\x02\x02\u07D3\u07D4\x03\x02\x02\x02\u07D4\u07D6\x03\x02\x02\x02\u07D5" +
        "\u07D3\x03\x02\x02\x02\u07D6\u07D8\x05\xBC_\x02\u07D7\u07D3\x03\x02\x02" +
        "\x02\u07D8\u07DB\x03\x02\x02\x02\u07D9\u07D7\x03\x02\x02\x02\u07D9\u07DA" +
        "\x03\x02\x02\x02\u07DA\xBB\x03\x02\x02\x02\u07DB\u07D9\x03\x02\x02\x02" +
        "\u07DC\u07DD\x07@\x02\x02\u07DD\u07DE\x05\u010A\x86\x02\u07DE\u07DF\x07" +
        "J\x02\x02\u07DF\u07E5\x05\u010A\x86\x02\u07E0\u07E1\x05\u0138\x9D\x02" +
        "\u07E1\u07E2\x05\u010A\x86\x02\u07E2\u07E4\x03\x02\x02\x02\u07E3\u07E0" +
        "\x03\x02\x02\x02\u07E4\u07E7\x03\x02\x02\x02\u07E5\u07E3\x03\x02\x02\x02" +
        "\u07E5\u07E6\x03\x02\x02\x02\u07E6\u07E8\x03\x02\x02\x02\u07E7\u07E5\x03" +
        "\x02\x02\x02\u07E8\u07E9\x05\u0134\x9B\x02\u07E9\xBD\x03\x02\x02\x02\u07EA" +
        "\u07EB\x07+\x02\x02\u07EB\u07EC\x05\xE2r\x02\u07EC\u07F0\x05\u0134\x9B" +
        "\x02\u07ED\u07EF\x05\u0138\x9D\x02\u07EE\u07ED\x03\x02\x02\x02\u07EF\u07F2" +
        "\x03\x02\x02\x02\u07F0\u07EE\x03\x02\x02\x02\u07F0\u07F1\x03\x02\x02\x02" +
        "\u07F1\u07FA\x03\x02\x02\x02\u07F2\u07F0\x03\x02\x02\x02\u07F3\u07F7\x05" +
        "$\x13\x02\u07F4\u07F6\x05\u0138\x9D\x02\u07F5\u07F4\x03\x02\x02\x02\u07F6" +
        "\u07F9\x03\x02\x02\x02\u07F7\u07F5\x03\x02\x02\x02\u07F7\u07F8\x03\x02" +
        "\x02\x02\u07F8\u07FB\x03\x02\x02\x02\u07F9\u07F7\x03\x02\x02\x02\u07FA" +
        "\u07F3\x03\x02\x02\x02\u07FB\u07FC\x03\x02\x02\x02\u07FC\u07FA\x03\x02" +
        "\x02\x02\u07FC\u07FD\x03\x02\x02\x02\u07FD\xBF\x03\x02\x02\x02\u07FE\u07FF" +
        "\x07,\x02\x02\u07FF\u0800\x05\xE2r\x02\u0800\u0801\x05\u0134\x9B\x02\u0801" +
        "\u0802\x05\u013E\xA0\x02\u0802\u0803\x05\xC2b\x02\u0803\u0804\x05\u013E" +
        "\xA0\x02\u0804\u080F\x05\xC4c\x02\u0805\u0806\x05\u013E\xA0\x02\u0806" +
        "\u080C\x05\xC8e\x02\u0807\u0808\x05\u0140\xA1\x02\u0808\u0809\x05\xCA" +
        "f\x02\u0809\u080B\x03\x02\x02\x02\u080A\u0807\x03\x02\x02\x02\u080B\u080E" +
        "\x03\x02\x02\x02\u080C\u080A\x03\x02\x02\x02\u080C\u080D\x03\x02\x02\x02" +
        "\u080D\u0810\x03\x02\x02\x02\u080E\u080C\x03\x02\x02\x02\u080F\u0805\x03" +
        "\x02\x02\x02\u0810\u0811\x03\x02\x02\x02\u0811\u080F\x03\x02\x02\x02\u0811" +
        "\u0812\x03\x02\x02\x02\u0812\u0813\x03\x02\x02\x02\u0813\u0814\x05\u013E" +
        "\xA0\x02\u0814\xC1\x03\x02\x02\x02\u0815\u0819\x05\xC6d\x02\u0816\u0817" +
        "\x05\u0138\x9D\x02\u0817\u0818\x05\xF6|\x02\u0818\u081A\x03\x02";
    bitmark._serializedATNSegment4 = "\x02\x02\u0819\u0816\x03\x02\x02\x02\u0819\u081A\x03\x02\x02\x02\u081A" +
        "\xC3\x03\x02\x02\x02\u081B\u081F\x05\xC6d\x02\u081C\u081D\x05\u0138\x9D" +
        "\x02\u081D\u081E\x05\xF6|\x02\u081E\u0820\x03\x02\x02\x02\u081F\u081C" +
        "\x03\x02\x02\x02\u081F\u0820\x03\x02\x02\x02\u0820\xC5\x03\x02\x02\x02" +
        "\u0821\u0822\x07F\x02\x02\u0822\u0823\x05\u010A\x86\x02\u0823\u0824\x05" +
        "\u0134\x9B\x02\u0824\xC7\x03\x02\x02\x02\u0825\u0826\x05\u010A\x86\x02" +
        "\u0826\xC9\x03\x02\x02\x02\u0827\u0828\x05\u010A\x86\x02\u0828\xCB\x03" +
        "\x02\x02\x02\u0829\u082A\x07-\x02\x02\u082A\u082B\x05\xE2r\x02\u082B\u082C" +
        "\x05\u0134\x9B\x02\u082C\u082D\x05\u013E\xA0\x02\u082D\u082E\x05\xC2b" +
        "\x02\u082E\u082F\x05\u013E\xA0\x02\u082F\u083A\x05\xC4c\x02\u0830\u0831" +
        "\x05\u013E\xA0\x02\u0831\u0837\x05\xC8e\x02\u0832\u0833\x05\u0140\xA1" +
        "\x02\u0833\u0834\x05\xCAf\x02\u0834\u0836\x03\x02\x02\x02\u0835\u0832" +
        "\x03\x02\x02\x02\u0836\u0839\x03\x02\x02\x02\u0837\u0835\x03\x02\x02\x02" +
        "\u0837\u0838\x03\x02\x02\x02\u0838\u083B\x03\x02\x02\x02\u0839\u0837\x03" +
        "\x02\x02\x02\u083A\u0830\x03\x02\x02\x02\u083B\u083C\x03\x02\x02\x02\u083C" +
        "\u083A\x03\x02\x02\x02\u083C\u083D\x03\x02\x02\x02\u083D\u083E\x03\x02" +
        "\x02\x02\u083E\u083F\x05\u013E\xA0\x02\u083F\xCD\x03\x02\x02\x02\u0840" +
        "\u0841\x07.\x02\x02\u0841\u0842\x05\xE2r\x02\u0842\u084D\x05\u0134\x9B" +
        "\x02\u0843\u0844\x05\u013E\xA0\x02\u0844\u084A\x05\xD0i\x02\u0845\u0846" +
        "\x05\u0140\xA1\x02\u0846\u0847\x05\xD0i\x02\u0847\u0849\x03\x02\x02\x02" +
        "\u0848\u0845\x03\x02\x02\x02\u0849\u084C\x03\x02\x02\x02\u084A\u0848\x03" +
        "\x02\x02\x02\u084A\u084B\x03\x02\x02\x02\u084B\u084E\x03\x02\x02\x02\u084C" +
        "\u084A\x03\x02\x02\x02\u084D\u0843\x03\x02\x02\x02\u084E\u084F\x03\x02" +
        "\x02\x02\u084F\u084D\x03\x02\x02\x02\u084F\u0850\x03\x02\x02\x02\u0850" +
        "\u0851\x03\x02\x02\x02\u0851\u0852\x05\u013E\xA0\x02\u0852\xCF\x03\x02" +
        "\x02\x02\u0853\u085B\x05\u015A\xAE\x02\u0854\u085B\x05.\x18\x02\u0855" +
        "\u085B\x05\xF8}\x02\u0856\u085B\x05*\x16\x02\u0857\u085B\x054\x1B\x02" +
        "\u0858\u085B\x056\x1C\x02\u0859\u085B\x058\x1D\x02\u085A\u0853\x03\x02" +
        "\x02\x02\u085A\u0854\x03\x02\x02\x02\u085A\u0855\x03\x02\x02\x02\u085A" +
        "\u0856\x03\x02\x02\x02\u085A\u0857\x03\x02\x02\x02\u085A\u0858\x03\x02" +
        "\x02\x02\u085A\u0859\x03\x02\x02\x02\u085B\u085C\x03\x02\x02\x02\u085C" +
        "\u085A\x03\x02\x02\x02\u085C\u085D\x03\x02\x02\x02\u085D\xD1\x03\x02\x02" +
        "\x02\u085E\u085F\x07/\x02\x02\u085F\u0860\x05\xE2r\x02\u0860\u0864\x05" +
        "\u0134\x9B\x02\u0861\u0863\x05\u0138\x9D\x02\u0862\u0861\x03\x02\x02\x02" +
        "\u0863\u0866\x03\x02\x02\x02\u0864\u0862\x03\x02\x02\x02\u0864\u0865\x03" +
        "\x02\x02\x02\u0865\u0870\x03\x02\x02\x02\u0866\u0864\x03\x02\x02\x02\u0867" +
        "\u086B\x05$\x13\x02\u0868\u086A\x05\u0138\x9D\x02\u0869\u0868\x03\x02" +
        "\x02\x02\u086A\u086D\x03\x02\x02\x02\u086B\u0869\x03\x02\x02\x02\u086B" +
        "\u086C\x03\x02\x02\x02\u086C\u086F\x03\x02\x02\x02\u086D\u086B\x03\x02" +
        "\x02\x02\u086E\u0867\x03\x02\x02\x02\u086F\u0872\x03\x02\x02\x02\u0870" +
        "\u086E\x03\x02\x02\x02\u0870\u0871\x03\x02\x02\x02\u0871\u087C\x03\x02" +
        "\x02\x02\u0872\u0870\x03\x02\x02\x02\u0873\u0874\x05\u013E\xA0\x02\u0874" +
        "\u0878\x05\u010A\x86\x02\u0875\u0876\x05\u0138\x9D\x02\u0876\u0877\x05" +
        "\xD6l\x02\u0877\u0879\x03\x02\x02\x02\u0878\u0875\x03\x02\x02\x02\u0879" +
        "\u087A\x03\x02\x02\x02\u087A\u0878\x03\x02\x02\x02\u087A\u087B\x03\x02" +
        "\x02\x02\u087B\u087D\x03\x02\x02\x02\u087C\u0873\x03\x02\x02\x02\u087D" +
        "\u087E\x03\x02\x02\x02\u087E\u087C\x03\x02\x02\x02\u087E\u087F\x03\x02" +
        "\x02\x02\u087F\u0880\x03\x02\x02\x02\u0880\u0881\x05\u013E\xA0\x02\u0881" +
        "\xD3\x03\x02\x02\x02\u0882\u0883\x070\x02\x02\u0883\u0884\x05\xE2r\x02" +
        "\u0884\u0888\x05\u0134\x9B\x02\u0885\u0887\x05\u0138\x9D\x02\u0886\u0885" +
        "\x03\x02\x02\x02\u0887\u088A\x03\x02\x02\x02\u0888\u0886\x03\x02\x02\x02" +
        "\u0888\u0889\x03\x02\x02\x02\u0889\u0894\x03\x02\x02\x02\u088A\u0888\x03" +
        "\x02\x02\x02\u088B\u088F\x05$\x13\x02\u088C\u088E\x05\u0138\x9D\x02\u088D" +
        "\u088C\x03\x02\x02\x02\u088E\u0891\x03\x02\x02\x02\u088F\u088D\x03\x02" +
        "\x02\x02\u088F\u0890\x03\x02\x02\x02\u0890\u0893\x03\x02\x02\x02\u0891" +
        "\u088F\x03\x02\x02\x02\u0892\u088B\x03\x02\x02\x02\u0893\u0896\x03\x02" +
        "\x02\x02\u0894\u0892\x03\x02\x02\x02\u0894\u0895\x03\x02\x02\x02\u0895" +
        "\u08A0\x03\x02\x02\x02\u0896\u0894\x03\x02\x02\x02\u0897\u0898\x05\u013E" +
        "\xA0\x02\u0898\u089C\x05\u010A\x86\x02\u0899\u089A\x05\u0138\x9D\x02\u089A" +
        "\u089B\x05\xD6l\x02\u089B\u089D\x03\x02\x02\x02\u089C\u0899\x03\x02\x02" +
        "\x02\u089D\u089E\x03\x02\x02\x02\u089E\u089C\x03\x02\x02\x02\u089E\u089F" +
        "\x03\x02\x02\x02\u089F\u08A1\x03\x02\x02\x02\u08A0\u0897\x03\x02\x02\x02" +
        "\u08A1\u08A2\x03\x02\x02\x02\u08A2\u08A0\x03\x02\x02\x02\u08A2\u08A3\x03" +
        "\x02\x02\x02\u08A3\u08A4\x03\x02\x02\x02\u08A4\u08A5\x05\u013E\xA0\x02" +
        "\u08A5\xD5\x03\x02\x02\x02\u08A6\u08A7\x076\x02\x02\u08A7\u08A8\x05\u010A" +
        "\x86\x02\u08A8\u08AA\x05\u0134\x9B\x02\u08A9\u08AB\x05\xE0q\x02\u08AA" +
        "\u08A9\x03\x02\x02\x02\u08AA\u08AB\x03\x02\x02\x02\u08AB\xD7\x03\x02\x02" +
        "\x02\u08AC\u08AD\x071\x02\x02\u08AD\u08AE\x05\xE2r\x02\u08AE\u08B2\x05" +
        "\u0134\x9B\x02\u08AF\u08B1\x05\u0138\x9D\x02\u08B0\u08AF\x03\x02\x02\x02" +
        "\u08B1\u08B4\x03\x02\x02\x02\u08B2\u08B0\x03\x02\x02\x02\u08B2\u08B3\x03" +
        "\x02\x02\x02\u08B3\u08BE\x03\x02\x02\x02\u08B4\u08B2\x03\x02\x02\x02\u08B5" +
        "\u08B9\x05$\x13\x02\u08B6\u08B8\x05\u0138\x9D\x02\u08B7\u08B6\x03\x02" +
        "\x02\x02\u08B8\u08BB\x03\x02\x02\x02\u08B9\u08B7\x03\x02\x02\x02\u08B9" +
        "\u08BA\x03\x02\x02\x02\u08BA\u08BD\x03\x02\x02\x02\u08BB\u08B9\x03\x02" +
        "\x02\x02\u08BC\u08B5\x03\x02\x02\x02\u08BD\u08C0\x03\x02\x02\x02\u08BE" +
        "\u08BC\x03\x02\x02\x02\u08BE\u08BF\x03\x02\x02\x02\u08BF\u08CA\x03\x02" +
        "\x02\x02\u08C0\u08BE\x03\x02\x02\x02\u08C1\u08C2\x05\u013E\xA0\x02\u08C2" +
        "\u08C6\x05\u010A\x86\x02\u08C3\u08C4\x05\u0138\x9D\x02\u08C4\u08C5\x05" +
        "\xD6l\x02\u08C5\u08C7\x03\x02\x02\x02\u08C6\u08C3\x03\x02\x02\x02\u08C7" +
        "\u08C8\x03\x02\x02\x02\u08C8\u08C6\x03\x02\x02\x02\u08C8\u08C9\x03\x02" +
        "\x02\x02\u08C9\u08CB\x03\x02\x02\x02\u08CA\u08C1\x03\x02\x02\x02\u08CB" +
        "\u08CC\x03\x02\x02\x02\u08CC\u08CA\x03\x02\x02\x02\u08CC\u08CD\x03\x02" +
        "\x02\x02\u08CD\u08CE\x03\x02\x02\x02\u08CE\u08CF\x05\u013E\xA0\x02\u08CF" +
        "\xD9\x03\x02\x02\x02\u08D0\u08D1\x072\x02\x02\u08D1\u08D2\x05\xE2r\x02" +
        "\u08D2\u08D6\x05\u0134\x9B\x02\u08D3\u08D5\x05\u0138\x9D\x02\u08D4\u08D3" +
        "\x03\x02\x02\x02\u08D5\u08D8\x03\x02\x02\x02\u08D6\u08D4\x03\x02\x02\x02" +
        "\u08D6\u08D7\x03\x02\x02\x02\u08D7\u08E2\x03\x02\x02\x02\u08D8\u08D6\x03" +
        "\x02\x02\x02\u08D9\u08DD\x05$\x13\x02\u08DA\u08DC\x05\u0138\x9D\x02\u08DB" +
        "\u08DA\x03\x02\x02\x02\u08DC\u08DF\x03\x02\x02\x02\u08DD\u08DB\x03\x02" +
        "\x02\x02\u08DD\u08DE\x03\x02\x02\x02\u08DE\u08E1\x03\x02\x02\x02\u08DF" +
        "\u08DD\x03\x02\x02\x02\u08E0\u08D9\x03\x02\x02\x02\u08E1\u08E4\x03\x02" +
        "\x02\x02\u08E2\u08E0\x03\x02\x02\x02\u08E2\u08E3\x03\x02\x02\x02\u08E3" +
        "\u08EE\x03\x02\x02\x02\u08E4\u08E2\x03\x02\x02\x02\u08E5\u08E6\x05\u013E" +
        "\xA0\x02\u08E6\u08EA\x05\u010A\x86\x02\u08E7\u08E8\x05\u0138\x9D\x02\u08E8" +
        "\u08E9\x05\xD6l\x02\u08E9\u08EB\x03\x02\x02\x02\u08EA\u08E7\x03\x02\x02" +
        "\x02\u08EB\u08EC\x03\x02\x02\x02\u08EC\u08EA\x03\x02\x02\x02\u08EC\u08ED" +
        "\x03\x02\x02\x02\u08ED\u08EF\x03\x02\x02\x02\u08EE\u08E5\x03\x02\x02\x02" +
        "\u08EF\u08F0\x03\x02\x02\x02\u08F0\u08EE\x03\x02\x02\x02\u08F0\u08F1\x03" +
        "\x02\x02\x02\u08F1\u08F2\x03\x02\x02\x02\u08F2\u08F3\x05\u013E\xA0\x02" +
        "\u08F3\xDB\x03\x02\x02\x02\u08F4\u08F5\x073\x02\x02\u08F5\u08F6\x05\xE2" +
        "r\x02\u08F6\u08FA\x05\u0134\x9B\x02\u08F7\u08F9\x05\u0138\x9D\x02\u08F8" +
        "\u08F7\x03\x02\x02\x02\u08F9\u08FC\x03\x02\x02\x02\u08FA\u08F8\x03\x02" +
        "\x02\x02\u08FA\u08FB\x03\x02\x02\x02\u08FB\u0906\x03\x02\x02\x02\u08FC" +
        "\u08FA\x03\x02\x02\x02\u08FD\u0901\x05$\x13\x02\u08FE\u0900\x05\u0138" +
        "\x9D\x02\u08FF\u08FE\x03\x02\x02\x02\u0900\u0903\x03\x02\x02\x02\u0901" +
        "\u08FF\x03\x02\x02\x02\u0901\u0902\x03\x02\x02\x02\u0902\u0905\x03\x02" +
        "\x02\x02\u0903\u0901\x03\x02\x02\x02\u0904\u08FD\x03\x02\x02\x02\u0905" +
        "\u0908\x03\x02\x02\x02\u0906\u0904\x03\x02\x02\x02\u0906\u0907\x03\x02" +
        "\x02\x02\u0907\u0912\x03\x02\x02\x02\u0908\u0906\x03\x02\x02\x02\u0909" +
        "\u090A\x05\u013E\xA0\x02\u090A\u090E\x05\u010A\x86\x02\u090B\u090C\x05" +
        "\u0138\x9D\x02\u090C\u090D\x05\xD6l\x02\u090D\u090F\x03\x02\x02\x02\u090E" +
        "\u090B\x03\x02\x02\x02\u090F\u0910\x03\x02\x02\x02\u0910\u090E\x03\x02" +
        "\x02\x02\u0910\u0911\x03\x02\x02\x02\u0911\u0913\x03\x02\x02\x02\u0912" +
        "\u0909\x03\x02\x02\x02\u0913\u0914\x03\x02\x02\x02\u0914\u0912\x03\x02" +
        "\x02\x02\u0914\u0915\x03\x02\x02\x02\u0915\u0916\x03\x02\x02\x02\u0916" +
        "\u0917\x05\u013E\xA0\x02\u0917\xDD\x03\x02\x02\x02\u0918\u0919\x074\x02" +
        "\x02\u0919\u091A\x05\xE2r\x02\u091A\u091E\x05\u0134\x9B\x02\u091B\u091D" +
        "\x05\u0138\x9D\x02\u091C\u091B\x03\x02\x02\x02\u091D\u0920\x03\x02\x02" +
        "\x02\u091E\u091C\x03\x02\x02\x02\u091E\u091F\x03\x02\x02\x02\u091F\u092A" +
        "\x03\x02\x02\x02\u0920\u091E\x03\x02\x02\x02\u0921\u0925\x05$\x13\x02" +
        "\u0922\u0924\x05\u0138\x9D\x02\u0923\u0922\x03\x02\x02\x02\u0924\u0927" +
        "\x03\x02\x02\x02\u0925\u0923\x03\x02\x02\x02\u0925\u0926\x03\x02\x02\x02" +
        "\u0926\u0929\x03\x02\x02\x02\u0927\u0925\x03\x02\x02\x02\u0928\u0921\x03" +
        "\x02\x02\x02\u0929\u092C\x03\x02\x02\x02\u092A\u0928\x03\x02\x02\x02\u092A" +
        "\u092B\x03\x02\x02\x02\u092B\u0936\x03\x02\x02\x02\u092C\u092A\x03\x02" +
        "\x02\x02\u092D\u092E\x05\u013E\xA0\x02\u092E\u0932\x05\u010A\x86\x02\u092F" +
        "\u0930\x05\u0138\x9D\x02\u0930\u0931\x05\xD6l\x02\u0931\u0933\x03\x02" +
        "\x02\x02\u0932\u092F\x03\x02\x02\x02\u0933\u0934\x03\x02\x02\x02\u0934" +
        "\u0932\x03\x02\x02\x02\u0934\u0935\x03\x02\x02\x02\u0935\u0937\x03\x02" +
        "\x02\x02\u0936\u092D\x03\x02\x02\x02\u0937\u0938\x03\x02\x02\x02\u0938" +
        "\u0936\x03\x02\x02\x02\u0938\u0939\x03\x02\x02\x02\u0939\u093A\x03\x02" +
        "\x02\x02\u093A\u093B\x05\u013E\xA0\x02\u093B\xDF\x03\x02\x02\x02\u093C" +
        "\u093D\x07s\x02\x02\u093D\u093E\x05\u0156\xAC\x02\u093E\u093F\x05\u0134" +
        "\x9B\x02\u093F\xE1\x03\x02\x02\x02\u0940\u0942\t\x04\x02\x02\u0941\u0940" +
        "\x03\x02\x02\x02\u0942\u0945\x03\x02\x02\x02\u0943\u0941\x03\x02\x02\x02" +
        "\u0943\u0944\x03\x02\x02\x02\u0944\u0951\x03\x02\x02\x02\u0945\u0943\x03" +
        "\x02\x02\x02\u0946\u0950\x07|\x02\x02\u0947\u0948\x07K\x02\x02\u0948\u0950" +
        "\x05\xE4s\x02\u0949\u094A\x07K\x02\x02\u094A\u0950\x05\xE8u\x02\u094B" +
        "\u094C\x07K\x02\x02\u094C\u0950\x05\xECw\x02\u094D\u094E\x07K\x02\x02" +
        "\u094E\u0950\x05\xF0y\x02\u094F\u0946\x03\x02\x02\x02\u094F\u0947\x03" +
        "\x02\x02\x02\u094F\u0949\x03\x02\x02\x02\u094F\u094B\x03\x02\x02\x02\u094F" +
        "\u094D\x03\x02\x02\x02\u0950\u0953\x03\x02\x02\x02\u0951\u094F\x03\x02" +
        "\x02\x02\u0951\u0952\x03\x02\x02\x02\u0952\xE3\x03\x02\x02\x02\u0953\u0951" +
        "\x03\x02\x02\x02\u0954\u0958\x07}\x02\x02\u0955\u0956\x07J\x02\x02\u0956" +
        "\u0959\x05\xE6t\x02\u0957\u0959\x07\x9A\x02\x02\u0958\u0955\x03\x02\x02" +
        "\x02\u0958\u0957\x03\x02\x02\x02\u0958\u0959\x03\x02\x02\x02\u0959\u0966" +
        "\x03\x02\x02\x02\u095A\u095D\x07~\x02\x02\u095B\u095C\x07J\x02\x02\u095C" +
        "\u095E\x05\xE6t\x02\u095D\u095B\x03\x02\x02\x02\u095D\u095E\x03\x02\x02" +
        "\x02\u095E\u0966\x03\x02\x02\x02\u095F\u0962\x07\x7F\x02\x02\u0960\u0961" +
        "\x07J\x02\x02\u0961\u0963\x05\xE6t\x02\u0962\u0960\x03\x02\x02\x02\u0962" +
        "\u0963\x03\x02\x02\x02\u0963\u0966\x03\x02\x02\x02\u0964\u0966\x07\x80" +
        "\x02\x02\u0965\u0954\x03\x02\x02\x02\u0965\u095A\x03\x02\x02\x02\u0965" +
        "\u095F\x03\x02\x02\x02\u0965\u0964\x03\x02\x02\x02\u0966\xE5\x03\x02\x02" +
        "\x02\u0967\u0968\t\x05\x02\x02\u0968\xE7\x03\x02\x02\x02\u0969\u096C\x07" +
        "\x81\x02\x02\u096A\u096B\x07J\x02\x02\u096B\u096D\x05\xEAv\x02\u096C\u096A" +
        "\x03\x02\x02\x02\u096C\u096D\x03\x02\x02\x02\u096D\u0974\x03\x02\x02\x02" +
        "\u096E\u0971\x07\x82\x02\x02\u096F\u0970\x07J\x02\x02\u0970\u0972\x05" +
        "\xEAv\x02\u0971\u096F\x03\x02\x02\x02\u0971\u0972\x03\x02\x02\x02\u0972" +
        "\u0974\x03\x02\x02\x02\u0973\u0969\x03\x02\x02\x02\u0973\u096E\x03\x02" +
        "\x02\x02\u0974\xE9\x03\x02\x02\x02\u0975\u0976\t\x06\x02\x02\u0976\xEB" +
        "\x03\x02\x02\x02\u0977\u097A\x07\x83\x02\x02\u0978\u0979\x07J\x02\x02" +
        "\u0979\u097B\x05\xEEx\x02\u097A\u0978\x03\x02\x02\x02\u097A\u097B\x03" +
        "\x02\x02\x02\u097B\u0982\x03\x02\x02\x02\u097C\u097F\x07\x84\x02\x02\u097D" +
        "\u097E\x07J\x02\x02\u097E\u0980\x05\xEEx\x02\u097F\u097D\x03\x02\x02\x02" +
        "\u097F\u0980\x03\x02\x02\x02\u0980\u0982\x03\x02\x02\x02\u0981\u0977\x03" +
        "\x02\x02\x02\u0981\u097C\x03\x02\x02\x02\u0982\xED\x03\x02\x02\x02\u0983" +
        "\u0984\t\x07\x02\x02\u0984\xEF\x03\x02\x02\x02\u0985\u0986\t\b\x02\x02" +
        "\u0986\xF1\x03\x02\x02\x02\u0987\u0988\t\t\x02\x02\u0988\xF3\x03\x02\x02" +
        "\x02\u0989\u098A\x07\x8A\x02\x02\u098A\xF5\x03\x02\x02\x02\u098B\u098C" +
        "\x078\x02\x02\u098C\u098E\x05\xE4s\x02\u098D\u098F\x05\u0104\x83\x02\u098E" +
        "\u098D\x03\x02\x02\x02\u098E\u098F\x03\x02\x02\x02\u098F\u0990\x03\x02" +
        "\x02\x02\u0990\u0991\x07L\x02\x02\u0991\u0992\x05\u0106\x84\x02\u0992" +
        "\u0995\x05\u0134\x9B\x02\u0993\u0994\x07h\x02\x02\u0994\u0996\x07\x9B" +
        "\x02\x02\u0995\u0993\x03\x02\x02\x02\u0995\u0996\x03\x02\x02\x02\u0996" +
        "\u099B\x03\x02\x02\x02\u0997\u0998\x07\x98\x02\x02\u0998\u0999\x05\u015A" +
        "\xAE\x02\u0999\u099A\x05\u0134\x9B\x02\u099A\u099C\x03\x02\x02\x02\u099B" +
        "\u0997\x03\x02\x02\x02\u099B\u099C\x03\x02\x02\x02\u099C\xF7\x03\x02\x02" +
        "\x02\u099D\u099E\x078\x02\x02\u099E\u099F\x05\xE8u\x02\u099F\u09A0\x07" +
        "L\x02\x02\u09A0\u09A1\x05\u0106\x84\x02\u09A1\u09A6\x05\u0134\x9B\x02" +
        "\u09A2\u09A3\x07\x98\x02\x02\u09A3\u09A4\x05\u015A\xAE\x02\u09A4\u09A5" +
        "\x05\u0134\x9B\x02\u09A5\u09A7\x03\x02\x02\x02\u09A6\u09A2\x03\x02\x02" +
        "\x02\u09A6\u09A7\x03\x02\x02\x02\u09A7\xF9\x03\x02\x02\x02\u09A8\u09A9" +
        "\x078\x02\x02\u09A9\u09AA\x05\xECw\x02\u09AA\u09AB\x07L\x02\x02\u09AB" +
        "\u09AC\x05\u0106\x84\x02\u09AC\u09B1\x05\u0134\x9B\x02\u09AD\u09AE\x07" +
        "\x98\x02\x02\u09AE\u09AF\x05\u015A\xAE\x02\u09AF\u09B0\x05\u0134\x9B\x02" +
        "\u09B0\u09B2\x03\x02\x02\x02\u09B1\u09AD\x03\x02\x02\x02\u09B1\u09B2\x03" +
        "\x02\x02\x02\u09B2\xFB\x03\x02\x02\x02\u09B3\u09B4\x078\x02\x02\u09B4" +
        "\u09B5\x05\xF0y\x02\u09B5\u09B6\x07L\x02\x02\u09B6\u09B7\x05\u0106\x84" +
        "\x02\u09B7\u09BC\x05\u0134\x9B\x02\u09B8\u09B9\x07\x98\x02\x02\u09B9\u09BA" +
        "\x05\u015A\xAE\x02\u09BA\u09BB\x05\u0134\x9B\x02\u09BB\u09BD\x03\x02\x02" +
        "\x02\u09BC\u09B8\x03\x02\x02\x02\u09BC\u09BD\x03\x02\x02\x02\u09BD\xFD" +
        "\x03\x02\x02\x02\u09BE\u09BF\x078\x02\x02\u09BF\u09C0\x05\xF2z\x02\u09C0" +
        "\u09C1\x07L\x02\x02\u09C1\u09C2\x05\u0106\x84\x02\u09C2\u09C7\x05\u0134" +
        "\x9B\x02\u09C3\u09C4\x07\x98\x02\x02\u09C4\u09C5\x05\u015A\xAE\x02\u09C5" +
        "\u09C6\x05\u0134\x9B\x02\u09C6\u09C8\x03\x02\x02\x02\u09C7\u09C3\x03\x02" +
        "\x02\x02\u09C7\u09C8\x03\x02\x02\x02\u09C8\xFF\x03\x02\x02\x02\u09C9\u09CA" +
        "\x078\x02\x02\u09CA\u09CB\x05\xF4{\x02\u09CB\u09CE\x07L\x02\x02\u09CC" +
        "\u09CF\x05\u0106\x84\x02\u09CD\u09CF\x05\u0102\x82\x02\u09CE\u09CC\x03" +
        "\x02\x02\x02\u09CE\u09CD\x03\x02\x02\x02\u09CF\u09D0\x03\x02\x02\x02\u09D0" +
        "\u09D5\x05\u0134\x9B\x02\u09D1\u09D2\x07\x98\x02\x02\u09D2\u09D3\x05\u015A" +
        "\xAE\x02\u09D3\u09D4\x05\u0134\x9B\x02\u09D4\u09D6\x03\x02\x02\x02\u09D5" +
        "\u09D1\x03\x02\x02\x02\u09D5\u09D6\x03\x02\x02\x02\u09D6\u0101\x03\x02" +
        "\x02\x02\u09D7\u09D8\x07\x97\x02\x02\u09D8\u09D9\x07M\x02\x02\u09D9\u09DA" +
        "\x05\u0156\xAC\x02\u09DA\u0103\x03\x02\x02\x02\u09DB\u09DD\x07N\x02\x02" +
        "\u09DC\u09DE\x07e\x02\x02\u09DD\u09DC\x03\x02\x02\x02\u09DE\u09DF\x03" +
        "\x02\x02\x02\u09DF\u09DD\x03\x02\x02\x02\u09DF\u09E0\x03\x02\x02\x02\u09E0" +
        "\u09E1\x03\x02\x02\x02\u09E1\u09E2\x07L\x02\x02\u09E2\u0105\x03\x02\x02" +
        "\x02\u09E3\u09E5\x07t\x02\x02\u09E4\u09E6\n\x03\x02\x02\u09E5\u09E4\x03" +
        "\x02\x02\x02\u09E6\u09E7\x03\x02\x02\x02\u09E7\u09E5\x03\x02\x02\x02\u09E7" +
        "\u09E8\x03\x02\x02\x02\u09E8\u09F0\x03\x02\x02\x02\u09E9\u09EB\x07u\x02" +
        "\x02\u09EA\u09EC\n\x03\x02\x02\u09EB\u09EA\x03\x02\x02\x02\u09EC\u09ED" +
        "\x03\x02\x02\x02\u09ED\u09EB\x03\x02\x02\x02\u09ED\u09EE\x03\x02\x02\x02" +
        "\u09EE\u09F0\x03\x02\x02\x02\u09EF\u09E3\x03\x02\x02\x02\u09EF\u09E9\x03" +
        "\x02\x02\x02\u09F0\u0107\x03\x02\x02\x02\u09F1\u09F3\x05\u010A\x86\x02" +
        "\u09F2\u09F4\x05\u0138\x9D\x02\u09F3\u09F2\x03\x02\x02\x02\u09F3\u09F4" +
        "\x03\x02\x02\x02\u09F4\u09F6\x03\x02\x02\x02\u09F5\u09F1\x03\x02\x02\x02" +
        "\u09F6\u09F7\x03\x02\x02\x02\u09F7\u09F5\x03\x02\x02\x02\u09F7\u09F8\x03" +
        "\x02\x02\x02\u09F8\u0109\x03\x02\x02\x02\u09F9\u0A1A\x05\u0148\xA5\x02" +
        "\u09FA\u0A1A\x05\u014A\xA6\x02\u09FB\u09FF\x05\u0158\xAD\x02\u09FC\u09FD" +
        "\x05\u015C\xAF\x02\u09FD\u09FE\x05\u0156\xAC\x02\u09FE\u0A00\x03\x02\x02" +
        "\x02\u09FF\u09FC\x03\x02\x02\x02\u09FF\u0A00\x03\x02\x02\x02\u0A00\u0A1A" +
        "\x03\x02\x02\x02\u0A01\u0A05\x05\u015A\xAE\x02\u0A02\u0A03\x05\u015C\xAF" +
        "\x02\u0A03\u0A04\x05\u0156\xAC\x02\u0A04\u0A06\x03\x02\x02\x02\u0A05\u0A02" +
        "\x03\x02\x02\x02\u0A05\u0A06\x03\x02\x02\x02\u0A06\u0A1A\x03\x02\x02\x02" +
        "\u0A07\u0A1A\x05\u0142\xA2\x02\u0A08\u0A09\x05\u012C\x97\x02\u0A09\u0A0A" +
        "\x05\u010A\x86\x02\u0A0A\u0A0B\x05\u0134\x9B\x02\u0A0B\u0A1A\x03\x02\x02" +
        "\x02\u0A0C\u0A1A\x05\u0156\xAC\x02\u0A0D\u0A1A\x05\u0112\x8A\x02\u0A0E" +
        "\u0A10\x07g\x02\x02\u0A0F\u0A0E\x03\x02\x02\x02\u0A0F\u0A10\x03\x02\x02" +
        "\x02\u0A10\u0A11\x03\x02\x02\x02\u0A11\u0A13\x07J\x02\x02\u0A12\u0A14" +
        "\x07g\x02\x02\u0A13\u0A12\x03\x02\x02\x02\u0A13\u0A14\x03\x02\x02\x02" +
        "\u0A14\u0A1A\x03\x02\x02\x02\u0A15\u0A17\x07K\x02\x02\u0A16\u0A18\x07" +
        "g\x02\x02\u0A17\u0A16\x03\x02\x02\x02\u0A17\u0A18\x03\x02\x02\x02\u0A18" +
        "\u0A1A\x03\x02\x02\x02\u0A19\u09F9\x03\x02\x02\x02\u0A19\u09FA\x03\x02" +
        "\x02\x02\u0A19\u09FB\x03\x02\x02\x02\u0A19\u0A01\x03\x02\x02\x02\u0A19" +
        "\u0A07\x03\x02\x02\x02\u0A19\u0A08\x03\x02\x02\x02\u0A19\u0A0C\x03\x02" +
        "\x02\x02\u0A19\u0A0D\x03\x02\x02\x02\u0A19\u0A0F\x03\x02\x02\x02\u0A19" +
        "\u0A15\x03\x02\x02\x02\u0A1A\u010B\x03\x02\x02\x02\u0A1B\u0A1D\x07;\x02" +
        "\x02\u0A1C\u0A1E\x05\u010A\x86\x02\u0A1D\u0A1C\x03\x02\x02\x02\u0A1D\u0A1E" +
        "\x03\x02\x02\x02\u0A1E\u0A1F\x03\x02\x02\x02\u0A1F\u0A20\x05\u0134\x9B" +
        "\x02\u0A20\u010D\x03\x02\x02\x02\u0A21\u0A23\x079\x02\x02\u0A22\u0A24" +
        "\x05\u010A\x86\x02\u0A23\u0A22\x03\x02\x02\x02\u0A23\u0A24\x03\x02\x02" +
        "\x02\u0A24\u0A25\x03\x02\x02\x02\u0A25\u0A2C\x05\u0134\x9B\x02\u0A26\u0A28" +
        "\x07:\x02\x02\u0A27\u0A29\x05\u010A\x86\x02\u0A28\u0A27\x03\x02\x02\x02" +
        "\u0A28\u0A29\x03\x02\x02\x02\u0A29\u0A2A\x03\x02\x02\x02\u0A2A\u0A2C\x05" +
        "\u0134\x9B\x02\u0A2B\u0A21\x03\x02\x02\x02\u0A2B\u0A26\x03\x02\x02\x02" +
        "\u0A2C\u010F\x03\x02\x02\x02\u0A2D\u0A2E\x07E\x02\x02\u0A2E\u0A33\x05" +
        "\u010A\x86\x02\u0A2F\u0A32\x07J\x02\x02\u0A30\u0A32\x05\u015A\xAE\x02" +
        "\u0A31\u0A2F\x03\x02\x02\x02\u0A31\u0A30\x03\x02\x02\x02\u0A32\u0A35\x03" +
        "\x02\x02\x02\u0A33\u0A31\x03\x02\x02\x02\u0A33\u0A34\x03\x02\x02\x02\u0A34" +
        "\u0A36\x03\x02\x02\x02\u0A35\u0A33\x03\x02\x02\x02\u0A36\u0A37\x05\u0134" +
        "\x9B\x02\u0A37\u0111\x03\x02\x02\x02\u0A38\u0A39\x077\x02\x02\u0A39\u0A3A" +
        "\x05\u010A\x86\x02\u0A3A\u0A3B\x05\u0134\x9B\x02\u0A3B\u0113\x03\x02\x02" +
        "\x02\u0A3C\u0A3D\x075\x02\x02\u0A3D\u0115\x03\x02\x02\x02\u0A3E\u0A3F" +
        "\x076\x02\x02\u0A3F\u0117\x03\x02\x02\x02\u0A40\u0A41\x077\x02\x02\u0A41" +
        "\u0119\x03\x02\x02\x02\u0A42\u0A43\t\n\x02\x02\u0A43\u011B\x03\x02\x02" +
        "\x02\u0A44\u0A45\x07;\x02\x02\u0A45\u011D\x03\x02\x02\x02\u0A46\u0A47" +
        "\x07<\x02\x02\u0A47\u011F\x03\x02\x02\x02\u0A48\u0A49\x07=\x02\x02\u0A49" +
        "\u0121\x03\x02\x02\x02\u0A4A\u0A4B\x07>\x02\x02\u0A4B\u0123\x03\x02\x02" +
        "\x02\u0A4C\u0A4D\x07?\x02\x02\u0A4D\u0125\x03\x02\x02\x02\u0A4E\u0A4F" +
        "\x07@\x02\x02\u0A4F\u0127\x03\x02\x02\x02\u0A50\u0A51\x07A\x02\x02\u0A51" +
        "\u0129\x03\x02\x02\x02\u0A52\u0A53\x07B\x02\x02\u0A53\u012B\x03\x02\x02" +
        "\x02\u0A54\u0A55\x07C\x02\x02\u0A55\u012D\x03\x02\x02\x02\u0A56\u0A57" +
        "\x07D\x02\x02\u0A57\u012F\x03\x02\x02\x02\u0A58\u0A59\x07E\x02\x02\u0A59" +
        "\u0131\x03\x02\x02\x02\u0A5A\u0A5B\x07H\x02\x02\u0A5B\u0133\x03\x02\x02" +
        "\x02\u0A5C\u0A5D\x07I\x02\x02\u0A5D\u0135\x03\x02\x02\x02\u0A5E\u0A5F" +
        "\x07I\x02\x02\u0A5F\u0137\x03\x02\x02\x02\u0A60\u0A61\x07h\x02\x02\u0A61" +
        "\u0139\x03\x02\x02\x02\u0A62\u0A63\x07S\x02\x02\u0A63\u013B\x03\x02\x02" +
        "\x02\u0A64\u0A65\t\v\x02\x02\u0A65\u013D\x03\x02\x02\x02\u0A66\u0A67\t" +
        "\f\x02\x02\u0A67\u013F\x03\x02\x02\x02\u0A68\u0A69\t\r\x02\x02\u0A69\u0141" +
        "\x03\x02\x02\x02\u0A6A\u0A6B\t\x0E\x02\x02\u0A6B\u0143\x03\x02\x02\x02" +
        "\u0A6C\u0A6D\x07]\x02\x02\u0A6D\u0145\x03\x02\x02\x02\u0A6E\u0A6F\x07" +
        "^\x02\x02\u0A6F\u0147\x03\x02\x02\x02\u0A70\u0A71\x07\\\x02\x02\u0A71" +
        "\u0149\x03\x02\x02\x02\u0A72\u0A73\x07_\x02\x02\u0A73\u014B\x03\x02\x02" +
        "\x02\u0A74\u0A75\x07`\x02\x02\u0A75\u014D\x03\x02\x02\x02\u0A76\u0A77" +
        "\x07a\x02\x02\u0A77\u014F\x03\x02\x02\x02\u0A78\u0A79\x07b\x02\x02\u0A79" +
        "\u0151\x03\x02\x02\x02\u0A7A\u0A7B\x07c\x02\x02\u0A7B\u0153\x03\x02\x02" +
        "\x02\u0A7C\u0A7D\x07X\x02\x02\u0A7D\u0155\x03\x02\x02\x02\u0A7E\u0A7F" +
        "\x07e\x02\x02\u0A7F\u0157\x03\x02\x02\x02\u0A80\u0A81\x07f\x02\x02\u0A81" +
        "\u0159\x03\x02\x02\x02\u0A82\u0A89\x07i\x02\x02\u0A83\u0A89\x07K\x02\x02" +
        "\u0A84\u0A85\x07O\x02\x02\u0A85\u0A89\n\x0F\x02\x02\u0A86\u0A87\x07P\x02" +
        "\x02\u0A87\u0A89\n\x10\x02\x02\u0A88\u0A82\x03\x02\x02\x02\u0A88\u0A83" +
        "\x03\x02\x02\x02\u0A88\u0A84\x03\x02\x02\x02\u0A88\u0A86\x03\x02\x02\x02" +
        "\u0A89\u0A8A\x03\x02\x02\x02\u0A8A\u0A88\x03\x02\x02\x02\u0A8A\u0A8B\x03" +
        "\x02\x02\x02\u0A8B\u015B\x03\x02\x02\x02\u0A8C\u0A8D\x07g\x02\x02\u0A8D" +
        "\u015D\x03\x02\x02\x02\u015D\u0160\u0165\u016A\u0170\u01AA\u01AE\u01B1" +
        "\u01B7\u01C0\u01C2\u01C4\u01C7\u01D0\u01D8\u01E4\u01E6\u01EC\u01F3\u01F9" +
        "\u0203\u0209\u0211\u021B\u0221\u023A\u0241\u0246\u025F\u0266\u026D\u0275" +
        "\u027B\u0280\u0283\u0288\u028F\u0294\u029B\u02A0\u02A3\u02A8\u02AF\u02B4" +
        "\u02BC\u02BE\u02C5\u02CA\u02D1\u02D9\u02DF\u02E4\u02ED\u02F4\u02F7\u02FA" +
        "\u0300\u0304\u0308\u030E\u0313\u0319\u031E\u0324\u0330\u0335\u0340\u0344" +
        "\u0349\u034C\u0351\u0356\u035A\u035F\u0367\u036B\u0377\u037C\u0381\u0384" +
        "\u0389\u038F\u0394\u0398\u039D\u03A7\u03AC\u03B0\u03B7\u03BA\u03BC\u03BF" +
        "\u03C3\u03C7\u03CC\u03D7\u03DC\u03DE\u03E7\u03EE\u03F5\u03F8\u03FA\u0404" +
        "\u0409\u040F\u0414\u0418\u041E\u042A\u042F\u0433\u0435\u043D\u0441\u0446" +
        "\u044B\u0451\u0455\u0457\u045C\u0460\u0469\u0471\u0478\u047D\u0484\u048B" +
        "\u0490\u0495\u04A0\u04A7\u04AC\u04B3\u04BC\u04C1\u04C5\u04CA\u04CF\u04D7" +
        "\u04E0\u04E5\u04E7\u04EB\u04F0\u04F9\u04FB\u0505\u0509\u050E\u0514\u051C" +
        "\u0524\u0527\u052A\u052F\u0535\u0537\u053A\u053D\u0540\u054A\u0552\u055E" +
        "\u0568\u0571\u0576\u057E\u0582\u0587\u058A\u058E\u0596\u059A\u059E\u05A1" +
        "\u05A7\u05AC\u05AE\u05B2\u05B4\u05B9\u05CD\u05D2\u05D8\u05DF\u05E5\u05F0" +
        "\u05F5\u05FB\u0602\u0608\u0611\u0615\u061B\u0622\u0628\u0631\u0635\u063B" +
        "\u0642\u0648\u0651\u0655\u065B\u0666\u066A\u0670\u067B\u067F\u0685\u0690" +
        "\u0694\u0698\u06A3\u06A7\u06AD\u06B2\u06B6\u06B9\u06BE\u06C1\u06CB\u06D3" +
        "\u06DA\u06DF\u06E6\u06EB\u06EF\u06F4\u0700\u0705\u070B\u0713\u071D\u0723" +
        "\u072B\u0730\u0735\u073C\u0747\u0749\u0751\u0756\u0761\u0766\u0771\u0776" +
        "\u077F\u0785\u0788\u0792\u0797\u079B\u07AB\u07B9\u07C2\u07C4\u07CC\u07D3" +
        "\u07D9\u07E5\u07F0\u07F7\u07FC\u080C\u0811\u0819\u081F\u0837\u083C\u084A" +
        "\u084F\u085A\u085C\u0864\u086B\u0870\u087A\u087E\u0888\u088F\u0894\u089E" +
        "\u08A2\u08AA\u08B2\u08B9\u08BE\u08C8\u08CC\u08D6\u08DD\u08E2\u08EC\u08F0" +
        "\u08FA\u0901\u0906\u0910\u0914\u091E\u0925\u092A\u0934\u0938\u0943\u094F" +
        "\u0951\u0958\u095D\u0962\u0965\u096C\u0971\u0973\u097A\u097F\u0981\u098E" +
        "\u0995\u099B\u09A6\u09B1\u09BC\u09C7\u09CE\u09D5\u09DF\u09E7\u09ED\u09EF" +
        "\u09F3\u09F7\u09FF\u0A05\u0A0F\u0A13\u0A17\u0A19\u0A1D\u0A23\u0A28\u0A2B" +
        "\u0A31\u0A33\u0A88\u0A8A";
    bitmark._serializedATN = Utils.join([
        bitmark._serializedATNSegment0,
        bitmark._serializedATNSegment1,
        bitmark._serializedATNSegment2,
        bitmark._serializedATNSegment3,
        bitmark._serializedATNSegment4,
    ], "");
    return bitmark;
})();
export { bitmark };
export class BitmarkContext extends ParserRuleContext {
    EOF() { return this.getToken(bitmark.EOF, 0); }
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
    sp(i) {
        if (i === undefined) {
            return this.getRuleContexts(SpContext);
        }
        else {
            return this.getRuleContext(i, SpContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_bitmark; }
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
export class Bitmark_Context extends ParserRuleContext {
    bit() {
        return this.tryGetRuleContext(0, BitContext);
    }
    lines() {
        return this.tryGetRuleContext(0, LinesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_bitmark_; }
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
export class BitContext extends ParserRuleContext {
    book() {
        return this.tryGetRuleContext(0, BookContext);
    }
    chapter() {
        return this.tryGetRuleContext(0, ChapterContext);
    }
    listline_() {
        return this.tryGetRuleContext(0, Listline_Context);
    }
    titlestar_() {
        return this.tryGetRuleContext(0, Titlestar_Context);
    }
    remark_() {
        return this.tryGetRuleContext(0, Remark_Context);
    }
    reference() {
        return this.tryGetRuleContext(0, ReferenceContext);
    }
    summary() {
        return this.tryGetRuleContext(0, SummaryContext);
    }
    toc() {
        return this.tryGetRuleContext(0, TocContext);
    }
    bit_alias() {
        return this.tryGetRuleContext(0, Bit_aliasContext);
    }
    internal_link() {
        return this.tryGetRuleContext(0, Internal_linkContext);
    }
    anchor() {
        return this.tryGetRuleContext(0, AnchorContext);
    }
    group_born() {
        return this.tryGetRuleContext(0, Group_bornContext);
    }
    group_died() {
        return this.tryGetRuleContext(0, Group_diedContext);
    }
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
    multiple_choice() {
        return this.tryGetRuleContext(0, Multiple_choiceContext);
    }
    multiple_choice_1() {
        return this.tryGetRuleContext(0, Multiple_choice_1Context);
    }
    multiple_choice_text() {
        return this.tryGetRuleContext(0, Multiple_choice_textContext);
    }
    multiple_response() {
        return this.tryGetRuleContext(0, Multiple_responseContext);
    }
    multiple_response_1() {
        return this.tryGetRuleContext(0, Multiple_response_1Context);
    }
    essay() {
        return this.tryGetRuleContext(0, EssayContext);
    }
    interview() {
        return this.tryGetRuleContext(0, InterviewContext);
    }
    interview_instruction_grouped() {
        return this.tryGetRuleContext(0, Interview_instruction_groupedContext);
    }
    match_() {
        return this.tryGetRuleContext(0, Match_Context);
    }
    match_all() {
        return this.tryGetRuleContext(0, Match_allContext);
    }
    match_all_reverse() {
        return this.tryGetRuleContext(0, Match_all_reverseContext);
    }
    match_reverse() {
        return this.tryGetRuleContext(0, Match_reverseContext);
    }
    match_picture() {
        return this.tryGetRuleContext(0, Match_pictureContext);
    }
    match_audio() {
        return this.tryGetRuleContext(0, Match_audioContext);
    }
    match_solution_grouped() {
        return this.tryGetRuleContext(0, Match_solution_groupedContext);
    }
    true_false_1() {
        return this.tryGetRuleContext(0, True_false_1Context);
    }
    true_false() {
        return this.tryGetRuleContext(0, True_falseContext);
    }
    sequence() {
        return this.tryGetRuleContext(0, SequenceContext);
    }
    correction() {
        return this.tryGetRuleContext(0, CorrectionContext);
    }
    mark_() {
        return this.tryGetRuleContext(0, Mark_Context);
    }
    document_upload() {
        return this.tryGetRuleContext(0, Document_uploadContext);
    }
    take_picture() {
        return this.tryGetRuleContext(0, Take_pictureContext);
    }
    record_audio() {
        return this.tryGetRuleContext(0, Record_audioContext);
    }
    preparation_note() {
        return this.tryGetRuleContext(0, Preparation_noteContext);
    }
    assignment() {
        return this.tryGetRuleContext(0, AssignmentContext);
    }
    article() {
        return this.tryGetRuleContext(0, ArticleContext);
    }
    article_attachment() {
        return this.tryGetRuleContext(0, Article_attachmentContext);
    }
    flashcard() {
        return this.tryGetRuleContext(0, FlashcardContext);
    }
    flashcard_1() {
        return this.tryGetRuleContext(0, Flashcard_1Context);
    }
    chat() {
        return this.tryGetRuleContext(0, ChatContext);
    }
    conversation() {
        return this.tryGetRuleContext(0, ConversationContext);
    }
    bot_interview() {
        return this.tryGetRuleContext(0, Bot_interviewContext);
    }
    self_assessment() {
        return this.tryGetRuleContext(0, Self_assessmentContext);
    }
    rating() {
        return this.tryGetRuleContext(0, RatingContext);
    }
    survey() {
        return this.tryGetRuleContext(0, SurveyContext);
    }
    survey_1() {
        return this.tryGetRuleContext(0, Survey_1Context);
    }
    survey_anonymous() {
        return this.tryGetRuleContext(0, Survey_anonymousContext);
    }
    survey_anonymous_1() {
        return this.tryGetRuleContext(0, Survey_anonymous_1Context);
    }
    hint() {
        return this.tryGetRuleContext(0, HintContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_bit; }
    // @Override
    enterRule(listener) {
        if (listener.enterBit) {
            listener.enterBit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBit) {
            listener.exitBit(this);
        }
    }
}
export class BookContext extends ParserRuleContext {
    BitBook() { return this.getToken(bitmark.BitBook, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    title_etc() {
        return this.getRuleContext(0, Title_etcContext);
    }
    sp() {
        return this.tryGetRuleContext(0, SpContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    ColonCollection() { return this.tryGetToken(bitmark.ColonCollection, 0); }
    ColonBook() { return this.tryGetToken(bitmark.ColonBook, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_book; }
    // @Override
    enterRule(listener) {
        if (listener.enterBook) {
            listener.enterBook(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBook) {
            listener.exitBook(this);
        }
    }
}
export class ChapterContext extends ParserRuleContext {
    BitChapter() { return this.getToken(bitmark.BitChapter, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    title_etc() {
        return this.getRuleContext(0, Title_etcContext);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.COLON);
        }
        else {
            return this.getToken(bitmark.COLON, i);
        }
    }
    sp() {
        return this.tryGetRuleContext(0, SpContext);
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
    get ruleIndex() { return bitmark.RULE_chapter; }
    // @Override
    enterRule(listener) {
        if (listener.enterChapter) {
            listener.enterChapter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChapter) {
            listener.exitChapter(this);
        }
    }
}
export class TitleContext extends ParserRuleContext {
    OPHASH() { return this.getToken(bitmark.OPHASH, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
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
    get ruleIndex() { return bitmark.RULE_title; }
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
export class SubtitleContext extends ParserRuleContext {
    OPHASH2() { return this.getToken(bitmark.OPHASH2, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
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
    get ruleIndex() { return bitmark.RULE_subtitle; }
    // @Override
    enterRule(listener) {
        if (listener.enterSubtitle) {
            listener.enterSubtitle(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSubtitle) {
            listener.exitSubtitle(this);
        }
    }
}
export class ProgressContext extends ParserRuleContext {
    AtProgress() { return this.getToken(bitmark.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_progress; }
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
export class ReferenceContext extends ParserRuleContext {
    AtReference() { return this.getToken(bitmark.AtReference, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
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
            return this.getTokens(bitmark.COLON);
        }
        else {
            return this.getToken(bitmark.COLON, i);
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
    get ruleIndex() { return bitmark.RULE_reference; }
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
export class TocContext extends ParserRuleContext {
    BitToc() { return this.getToken(bitmark.BitToc, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl() {
        return this.getRuleContext(0, NlContext);
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_toc; }
    // @Override
    enterRule(listener) {
        if (listener.enterToc) {
            listener.enterToc(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitToc) {
            listener.exitToc(this);
        }
    }
}
export class SummaryContext extends ParserRuleContext {
    BitSummary() { return this.getToken(bitmark.BitSummary, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    title_etc() {
        return this.getRuleContext(0, Title_etcContext);
    }
    sp() {
        return this.tryGetRuleContext(0, SpContext);
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
    get ruleIndex() { return bitmark.RULE_summary; }
    // @Override
    enterRule(listener) {
        if (listener.enterSummary) {
            listener.enterSummary(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSummary) {
            listener.exitSummary(this);
        }
    }
}
export class Internal_linkContext extends ParserRuleContext {
    BitIntlink() { return this.getToken(bitmark.BitIntlink, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_internal_link; }
    // @Override
    enterRule(listener) {
        if (listener.enterInternal_link) {
            listener.enterInternal_link(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInternal_link) {
            listener.exitInternal_link(this);
        }
    }
}
export class Bit_aliasContext extends ParserRuleContext {
    BitAlias() { return this.getToken(bitmark.BitAlias, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    alias() {
        return this.getRuleContext(0, AliasContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_bit_alias; }
    // @Override
    enterRule(listener) {
        if (listener.enterBit_alias) {
            listener.enterBit_alias(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBit_alias) {
            listener.exitBit_alias(this);
        }
    }
}
export class Title_etcContext extends ParserRuleContext {
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    title(i) {
        if (i === undefined) {
            return this.getRuleContexts(TitleContext);
        }
        else {
            return this.getRuleContext(i, TitleContext);
        }
    }
    subtitle(i) {
        if (i === undefined) {
            return this.getRuleContexts(SubtitleContext);
        }
        else {
            return this.getRuleContext(i, SubtitleContext);
        }
    }
    atdef(i) {
        if (i === undefined) {
            return this.getRuleContexts(AtdefContext);
        }
        else {
            return this.getRuleContext(i, AtdefContext);
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
    instruction(i) {
        if (i === undefined) {
            return this.getRuleContexts(InstructionContext);
        }
        else {
            return this.getRuleContext(i, InstructionContext);
        }
    }
    alias(i) {
        if (i === undefined) {
            return this.getRuleContexts(AliasContext);
        }
        else {
            return this.getRuleContext(i, AliasContext);
        }
    }
    anchor(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnchorContext);
        }
        else {
            return this.getRuleContext(i, AnchorContext);
        }
    }
    progress(i) {
        if (i === undefined) {
            return this.getRuleContexts(ProgressContext);
        }
        else {
            return this.getRuleContext(i, ProgressContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_title_etc; }
    // @Override
    enterRule(listener) {
        if (listener.enterTitle_etc) {
            listener.enterTitle_etc(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTitle_etc) {
            listener.exitTitle_etc(this);
        }
    }
}
export class Group_bornContext extends ParserRuleContext {
    BitGroups() { return this.getToken(bitmark.BitGroups, 0); }
    cl(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClContext);
        }
        else {
            return this.getRuleContext(i, ClContext);
        }
    }
    nl() {
        return this.getRuleContext(0, NlContext);
    }
    opr() {
        return this.tryGetRuleContext(0, OprContext);
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_group_born; }
    // @Override
    enterRule(listener) {
        if (listener.enterGroup_born) {
            listener.enterGroup_born(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGroup_born) {
            listener.exitGroup_born(this);
        }
    }
}
export class Group_diedContext extends ParserRuleContext {
    BitGroupt() { return this.getToken(bitmark.BitGroupt, 0); }
    cl(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClContext);
        }
        else {
            return this.getRuleContext(i, ClContext);
        }
    }
    nl() {
        return this.getRuleContext(0, NlContext);
    }
    opr() {
        return this.tryGetRuleContext(0, OprContext);
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_group_died; }
    // @Override
    enterRule(listener) {
        if (listener.enterGroup_died) {
            listener.enterGroup_died(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGroup_died) {
            listener.exitGroup_died(this);
        }
    }
}
export class ClozeContext extends ParserRuleContext {
    BitCloze() { return this.getToken(bitmark.BitCloze, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    get ruleIndex() { return bitmark.RULE_cloze; }
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
export class BitElemContext extends ParserRuleContext {
    titlestar_() {
        return this.tryGetRuleContext(0, Titlestar_Context);
    }
    note_() {
        return this.tryGetRuleContext(0, Note_Context);
    }
    remark_() {
        return this.tryGetRuleContext(0, Remark_Context);
    }
    help_() {
        return this.tryGetRuleContext(0, Help_Context);
    }
    highlight_() {
        return this.tryGetRuleContext(0, Highlight_Context);
    }
    annotate_() {
        return this.tryGetRuleContext(0, Annotate_Context);
    }
    annotate_image_() {
        return this.tryGetRuleContext(0, Annotate_image_Context);
    }
    ins_() {
        return this.tryGetRuleContext(0, Ins_Context);
    }
    del_() {
        return this.tryGetRuleContext(0, Del_Context);
    }
    listline_() {
        return this.tryGetRuleContext(0, Listline_Context);
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
    alias() {
        return this.tryGetRuleContext(0, AliasContext);
    }
    sp() {
        return this.tryGetRuleContext(0, SpContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_bitElem; }
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
export class Cloze_instruction_groupedContext extends ParserRuleContext {
    BitClozeinstgrp() { return this.getToken(bitmark.BitClozeinstgrp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    instruction() {
        return this.tryGetRuleContext(0, InstructionContext);
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
    get ruleIndex() { return bitmark.RULE_cloze_instruction_grouped; }
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
export class Cloze_solution_groupedContext extends ParserRuleContext {
    BitClozesolgrp() { return this.getToken(bitmark.BitClozesolgrp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    instruction() {
        return this.tryGetRuleContext(0, InstructionContext);
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
    get ruleIndex() { return bitmark.RULE_cloze_solution_grouped; }
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
export class GapContext extends ParserRuleContext {
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
    get ruleIndex() { return bitmark.RULE_gap; }
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
export class Single_gapContext extends ParserRuleContext {
    OPU() { return this.getToken(bitmark.OPU, 0); }
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
    get ruleIndex() { return bitmark.RULE_single_gap; }
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
export class InstructionContext extends ParserRuleContext {
    OPB() { return this.getToken(bitmark.OPB, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    sp(i) {
        if (i === undefined) {
            return this.getRuleContexts(SpContext);
        }
        else {
            return this.getRuleContext(i, SpContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_instruction; }
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
export class HintContext extends ParserRuleContext {
    OPQ() { return this.getToken(bitmark.OPQ, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.CL);
        }
        else {
            return this.getToken(bitmark.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_hint; }
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
export class ChoicesContext extends ParserRuleContext {
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
    example(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExampleContext);
        }
        else {
            return this.getRuleContext(i, ExampleContext);
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
    sp(i) {
        if (i === undefined) {
            return this.getRuleContexts(SpContext);
        }
        else {
            return this.getRuleContext(i, SpContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_choices; }
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
export class Choice_plusContext extends ParserRuleContext {
    OPP() { return this.getToken(bitmark.OPP, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    get ruleIndex() { return bitmark.RULE_choice_plus; }
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
export class Choice_minusContext extends ParserRuleContext {
    OPM() { return this.getToken(bitmark.OPM, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    get ruleIndex() { return bitmark.RULE_choice_minus; }
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
export class Choice_starContext extends ParserRuleContext {
    OPR() { return this.getToken(bitmark.OPR, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    get ruleIndex() { return bitmark.RULE_choice_star; }
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
export class Multiple_choice_1Context extends ParserRuleContext {
    BitMultichoice1() { return this.getToken(bitmark.BitMultichoice1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    choices() {
        return this.getRuleContext(0, ChoicesContext);
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
    get ruleIndex() { return bitmark.RULE_multiple_choice_1; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiple_choice_1) {
            listener.enterMultiple_choice_1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiple_choice_1) {
            listener.exitMultiple_choice_1(this);
        }
    }
}
export class Multiple_choiceContext extends ParserRuleContext {
    BitMultichoice() { return this.getToken(bitmark.BitMultichoice, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    item(i) {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }
        else {
            return this.getRuleContext(i, ItemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_multiple_choice; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiple_choice) {
            listener.enterMultiple_choice(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiple_choice) {
            listener.exitMultiple_choice(this);
        }
    }
}
export class Multiple_response_1Context extends ParserRuleContext {
    BitMultiresp1() { return this.getToken(bitmark.BitMultiresp1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    choices() {
        return this.getRuleContext(0, ChoicesContext);
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
    get ruleIndex() { return bitmark.RULE_multiple_response_1; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiple_response_1) {
            listener.enterMultiple_response_1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiple_response_1) {
            listener.exitMultiple_response_1(this);
        }
    }
}
export class Multiple_responseContext extends ParserRuleContext {
    BitMultiresp() { return this.getToken(bitmark.BitMultiresp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    choices(i) {
        if (i === undefined) {
            return this.getRuleContexts(ChoicesContext);
        }
        else {
            return this.getRuleContext(i, ChoicesContext);
        }
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_multiple_response; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiple_response) {
            listener.enterMultiple_response(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiple_response) {
            listener.exitMultiple_response(this);
        }
    }
}
export class Multiple_choice_textContext extends ParserRuleContext {
    BitMultichoisetext() { return this.getToken(bitmark.BitMultichoisetext, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
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
    example(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExampleContext);
        }
        else {
            return this.getRuleContext(i, ExampleContext);
        }
    }
    sp(i) {
        if (i === undefined) {
            return this.getRuleContexts(SpContext);
        }
        else {
            return this.getRuleContext(i, SpContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_multiple_choice_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiple_choice_text) {
            listener.enterMultiple_choice_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiple_choice_text) {
            listener.exitMultiple_choice_text(this);
        }
    }
}
export class Headed_inline_choicesContext extends ParserRuleContext {
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
    get ruleIndex() { return bitmark.RULE_headed_inline_choices; }
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
export class Headed_choicesContext extends ParserRuleContext {
    choices() {
        return this.getRuleContext(0, ChoicesContext);
    }
    choice_head() {
        return this.tryGetRuleContext(0, Choice_headContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_headed_choices; }
    // @Override
    enterRule(listener) {
        if (listener.enterHeaded_choices) {
            listener.enterHeaded_choices(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHeaded_choices) {
            listener.exitHeaded_choices(this);
        }
    }
}
export class Choice_headContext extends ParserRuleContext {
    OPS() { return this.getToken(bitmark.OPS, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_choice_head; }
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
export class Inline_choicesContext extends ParserRuleContext {
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
    get ruleIndex() { return bitmark.RULE_inline_choices; }
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
export class Cloze_and_multiple_choice_textContext extends ParserRuleContext {
    BitClozeandmulti() { return this.getToken(bitmark.BitClozeandmulti, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    inline_choices(i) {
        if (i === undefined) {
            return this.getRuleContexts(Inline_choicesContext);
        }
        else {
            return this.getRuleContext(i, Inline_choicesContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_cloze_and_multiple_choice_text; }
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
export class EssayContext extends ParserRuleContext {
    BitEssay() { return this.getToken(bitmark.BitEssay, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    ml_example(i) {
        if (i === undefined) {
            return this.getRuleContexts(Ml_exampleContext);
        }
        else {
            return this.getRuleContext(i, Ml_exampleContext);
        }
    }
    AmpArticleAtt() { return this.tryGetToken(bitmark.AmpArticleAtt, 0); }
    article_attachment() {
        return this.tryGetRuleContext(0, Article_attachmentContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_essay; }
    // @Override
    enterRule(listener) {
        if (listener.enterEssay) {
            listener.enterEssay(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEssay) {
            listener.exitEssay(this);
        }
    }
}
export class Article_attachmentContext extends ParserRuleContext {
    BitArticleattach() { return this.getToken(bitmark.BitArticleattach, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
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
    headed_choices(i) {
        if (i === undefined) {
            return this.getRuleContexts(Headed_choicesContext);
        }
        else {
            return this.getRuleContext(i, Headed_choicesContext);
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
    get ruleIndex() { return bitmark.RULE_article_attachment; }
    // @Override
    enterRule(listener) {
        if (listener.enterArticle_attachment) {
            listener.enterArticle_attachment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArticle_attachment) {
            listener.exitArticle_attachment(this);
        }
    }
}
export class Ml_exampleContext extends ParserRuleContext {
    AtExamplecol() { return this.getToken(bitmark.AtExamplecol, 0); }
    lines() {
        return this.getRuleContext(0, LinesContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
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
    get ruleIndex() { return bitmark.RULE_ml_example; }
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
export class ExampleContext extends ParserRuleContext {
    AtExamplecl() { return this.tryGetToken(bitmark.AtExamplecl, 0); }
    AtExamplecol() { return this.tryGetToken(bitmark.AtExamplecol, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    cl() {
        return this.tryGetRuleContext(0, ClContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_example; }
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
export class InterviewContext extends ParserRuleContext {
    BitInterview() { return this.getToken(bitmark.BitInterview, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    interview_answer(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_answerContext);
        }
        else {
            return this.getRuleContext(i, Interview_answerContext);
        }
    }
    interview_question(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_questionContext);
        }
        else {
            return this.getRuleContext(i, Interview_questionContext);
        }
    }
    eq(i) {
        if (i === undefined) {
            return this.getRuleContexts(EqContext);
        }
        else {
            return this.getRuleContext(i, EqContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_interview; }
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
export class Interview_questionContext extends ParserRuleContext {
    interview_answer__() {
        return this.getRuleContext(0, Interview_answer__Context);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    interview_answer(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_answerContext);
        }
        else {
            return this.getRuleContext(i, Interview_answerContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_interview_question; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_question) {
            listener.enterInterview_question(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_question) {
            listener.exitInterview_question(this);
        }
    }
}
export class Interview_answerContext extends ParserRuleContext {
    interview_answer__() {
        return this.getRuleContext(0, Interview_answer__Context);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    interview_answer(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_answerContext);
        }
        else {
            return this.getRuleContext(i, Interview_answerContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_interview_answer; }
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
export class Interview_answer__Context extends ParserRuleContext {
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    ml_example(i) {
        if (i === undefined) {
            return this.getRuleContexts(Ml_exampleContext);
        }
        else {
            return this.getRuleContext(i, Ml_exampleContext);
        }
    }
    shortans() {
        return this.tryGetRuleContext(0, ShortansContext);
    }
    longans() {
        return this.tryGetRuleContext(0, LongansContext);
    }
    dollarans() {
        return this.tryGetRuleContext(0, DollaransContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_interview_answer__; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_answer__) {
            listener.enterInterview_answer__(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_answer__) {
            listener.exitInterview_answer__(this);
        }
    }
}
export class LongansContext extends ParserRuleContext {
    AtLonganswer() { return this.getToken(bitmark.AtLonganswer, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_longans; }
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
export class ShortansContext extends ParserRuleContext {
    AtShortanswer() { return this.getToken(bitmark.AtShortanswer, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_shortans; }
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
export class DollaransContext extends ParserRuleContext {
    OPDOLL() { return this.getToken(bitmark.OPDOLL, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
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
            return this.getTokens(bitmark.COLON);
        }
        else {
            return this.getToken(bitmark.COLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_dollarans; }
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
export class Interview_instruction_groupedContext extends ParserRuleContext {
    BitInterviewinstgrp() { return this.getToken(bitmark.BitInterviewinstgrp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    interview_answer(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_answerContext);
        }
        else {
            return this.getRuleContext(i, Interview_answerContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_interview_instruction_grouped; }
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
export class QueryContext extends ParserRuleContext {
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtExamplecl() { return this.tryGetToken(bitmark.AtExamplecl, 0); }
    listline_() {
        return this.tryGetRuleContext(0, Listline_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_query; }
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
export class AnswerContext extends ParserRuleContext {
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    or() {
        return this.tryGetRuleContext(0, OrContext);
    }
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    sp() {
        return this.tryGetRuleContext(0, SpContext);
    }
    listline_() {
        return this.tryGetRuleContext(0, Listline_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_answer; }
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
export class HeadingContext extends ParserRuleContext {
    key_title() {
        return this.getRuleContext(0, Key_titleContext);
    }
    eq() {
        return this.getRuleContext(0, EqContext);
    }
    value_title() {
        return this.getRuleContext(0, Value_titleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_heading; }
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
export class Key_titleContext extends ParserRuleContext {
    OPHASH() { return this.getToken(bitmark.OPHASH, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
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
    get ruleIndex() { return bitmark.RULE_key_title; }
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
export class Value_titleContext extends ParserRuleContext {
    OPHASH() { return this.getToken(bitmark.OPHASH, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
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
    get ruleIndex() { return bitmark.RULE_value_title; }
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
export class PairContext extends ParserRuleContext {
    hspl() {
        return this.tryGetRuleContext(0, HsplContext);
    }
    pquery() {
        return this.tryGetRuleContext(0, PqueryContext);
    }
    eq() {
        return this.tryGetRuleContext(0, EqContext);
    }
    panswer() {
        return this.tryGetRuleContext(0, PanswerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_pair; }
    // @Override
    enterRule(listener) {
        if (listener.enterPair) {
            listener.enterPair(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair) {
            listener.exitPair(this);
        }
    }
}
export class PairsContext extends ParserRuleContext {
    pair(i) {
        if (i === undefined) {
            return this.getRuleContexts(PairContext);
        }
        else {
            return this.getRuleContext(i, PairContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_pairs; }
    // @Override
    enterRule(listener) {
        if (listener.enterPairs) {
            listener.enterPairs(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPairs) {
            listener.exitPairs(this);
        }
    }
}
export class Pair_imageContext extends ParserRuleContext {
    hspl() {
        return this.tryGetRuleContext(0, HsplContext);
    }
    pimagebit() {
        return this.tryGetRuleContext(0, PimagebitContext);
    }
    eq() {
        return this.tryGetRuleContext(0, EqContext);
    }
    panswer() {
        return this.tryGetRuleContext(0, PanswerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_pair_image; }
    // @Override
    enterRule(listener) {
        if (listener.enterPair_image) {
            listener.enterPair_image(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair_image) {
            listener.exitPair_image(this);
        }
    }
}
export class Pair_imagesContext extends ParserRuleContext {
    pair_image(i) {
        if (i === undefined) {
            return this.getRuleContexts(Pair_imageContext);
        }
        else {
            return this.getRuleContext(i, Pair_imageContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_pair_images; }
    // @Override
    enterRule(listener) {
        if (listener.enterPair_images) {
            listener.enterPair_images(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair_images) {
            listener.exitPair_images(this);
        }
    }
}
export class Pair_audioContext extends ParserRuleContext {
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
        }
    }
    paudiobit(i) {
        if (i === undefined) {
            return this.getRuleContexts(PaudiobitContext);
        }
        else {
            return this.getRuleContext(i, PaudiobitContext);
        }
    }
    eq(i) {
        if (i === undefined) {
            return this.getRuleContexts(EqContext);
        }
        else {
            return this.getRuleContext(i, EqContext);
        }
    }
    panswer(i) {
        if (i === undefined) {
            return this.getRuleContexts(PanswerContext);
        }
        else {
            return this.getRuleContext(i, PanswerContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_pair_audio; }
    // @Override
    enterRule(listener) {
        if (listener.enterPair_audio) {
            listener.enterPair_audio(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair_audio) {
            listener.exitPair_audio(this);
        }
    }
}
export class Pair_audiosContext extends ParserRuleContext {
    pair_audio(i) {
        if (i === undefined) {
            return this.getRuleContexts(Pair_audioContext);
        }
        else {
            return this.getRuleContext(i, Pair_audioContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_pair_audios; }
    // @Override
    enterRule(listener) {
        if (listener.enterPair_audios) {
            listener.enterPair_audios(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair_audios) {
            listener.exitPair_audios(this);
        }
    }
}
export class PqueryContext extends ParserRuleContext {
    pquery__(i) {
        if (i === undefined) {
            return this.getRuleContexts(Pquery__Context);
        }
        else {
            return this.getRuleContext(i, Pquery__Context);
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
    get ruleIndex() { return bitmark.RULE_pquery; }
    // @Override
    enterRule(listener) {
        if (listener.enterPquery) {
            listener.enterPquery(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPquery) {
            listener.exitPquery(this);
        }
    }
}
export class Pquery__Context extends ParserRuleContext {
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
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    titlestar_() {
        return this.tryGetRuleContext(0, Titlestar_Context);
    }
    listline_() {
        return this.tryGetRuleContext(0, Listline_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_pquery__; }
    // @Override
    enterRule(listener) {
        if (listener.enterPquery__) {
            listener.enterPquery__(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPquery__) {
            listener.exitPquery__(this);
        }
    }
}
export class PanswerContext extends ParserRuleContext {
    panswer__(i) {
        if (i === undefined) {
            return this.getRuleContexts(Panswer__Context);
        }
        else {
            return this.getRuleContext(i, Panswer__Context);
        }
    }
    or(i) {
        if (i === undefined) {
            return this.getRuleContexts(OrContext);
        }
        else {
            return this.getRuleContext(i, OrContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_panswer; }
    // @Override
    enterRule(listener) {
        if (listener.enterPanswer) {
            listener.enterPanswer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPanswer) {
            listener.exitPanswer(this);
        }
    }
}
export class Panswer__Context extends ParserRuleContext {
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    sp() {
        return this.tryGetRuleContext(0, SpContext);
    }
    titlestar_() {
        return this.tryGetRuleContext(0, Titlestar_Context);
    }
    listline_() {
        return this.tryGetRuleContext(0, Listline_Context);
    }
    opdoll() {
        return this.tryGetRuleContext(0, OpdollContext);
    }
    cl() {
        return this.tryGetRuleContext(0, ClContext);
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
    get ruleIndex() { return bitmark.RULE_panswer__; }
    // @Override
    enterRule(listener) {
        if (listener.enterPanswer__) {
            listener.enterPanswer__(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPanswer__) {
            listener.exitPanswer__(this);
        }
    }
}
export class PimagebitContext extends ParserRuleContext {
    OPAMP() { return this.getToken(bitmark.OPAMP, 0); }
    image_format() {
        return this.getRuleContext(0, Image_formatContext);
    }
    DBLCOLON() { return this.getToken(bitmark.DBLCOLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    resolution() {
        return this.tryGetRuleContext(0, ResolutionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_pimagebit; }
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
export class PaudiobitContext extends ParserRuleContext {
    OPAMP() { return this.getToken(bitmark.OPAMP, 0); }
    audio_format() {
        return this.getRuleContext(0, Audio_formatContext);
    }
    DBLCOLON() { return this.getToken(bitmark.DBLCOLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_paudiobit; }
    // @Override
    enterRule(listener) {
        if (listener.enterPaudiobit) {
            listener.enterPaudiobit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPaudiobit) {
            listener.exitPaudiobit(this);
        }
    }
}
export class Match_Context extends ParserRuleContext {
    BitMatch() { return this.getToken(bitmark.BitMatch, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    pairs() {
        return this.getRuleContext(0, PairsContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    heading() {
        return this.tryGetRuleContext(0, HeadingContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_match_; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatch_) {
            listener.enterMatch_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatch_) {
            listener.exitMatch_(this);
        }
    }
}
export class Match_allContext extends ParserRuleContext {
    BitMatchall() { return this.getToken(bitmark.BitMatchall, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    pairs() {
        return this.getRuleContext(0, PairsContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    heading() {
        return this.tryGetRuleContext(0, HeadingContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_match_all; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatch_all) {
            listener.enterMatch_all(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatch_all) {
            listener.exitMatch_all(this);
        }
    }
}
export class Match_reverseContext extends ParserRuleContext {
    BitMatchrev() { return this.getToken(bitmark.BitMatchrev, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    pairs() {
        return this.getRuleContext(0, PairsContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    heading() {
        return this.tryGetRuleContext(0, HeadingContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_match_reverse; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatch_reverse) {
            listener.enterMatch_reverse(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatch_reverse) {
            listener.exitMatch_reverse(this);
        }
    }
}
export class Match_all_reverseContext extends ParserRuleContext {
    BitMatchallrev() { return this.getToken(bitmark.BitMatchallrev, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    pairs() {
        return this.getRuleContext(0, PairsContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    heading() {
        return this.tryGetRuleContext(0, HeadingContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_match_all_reverse; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatch_all_reverse) {
            listener.enterMatch_all_reverse(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatch_all_reverse) {
            listener.exitMatch_all_reverse(this);
        }
    }
}
export class Match_pictureContext extends ParserRuleContext {
    BitMatchpic() { return this.getToken(bitmark.BitMatchpic, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    pair_images() {
        return this.getRuleContext(0, Pair_imagesContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    heading() {
        return this.tryGetRuleContext(0, HeadingContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_match_picture; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatch_picture) {
            listener.enterMatch_picture(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatch_picture) {
            listener.exitMatch_picture(this);
        }
    }
}
export class Match_audioContext extends ParserRuleContext {
    BitMatchaudio() { return this.getToken(bitmark.BitMatchaudio, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    pair_audio() {
        return this.getRuleContext(0, Pair_audioContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    heading() {
        return this.tryGetRuleContext(0, HeadingContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_match_audio; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatch_audio) {
            listener.enterMatch_audio(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatch_audio) {
            listener.exitMatch_audio(this);
        }
    }
}
export class Match_solution_groupedContext extends ParserRuleContext {
    BitMatchsolgrp() { return this.getToken(bitmark.BitMatchsolgrp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    pairs() {
        return this.getRuleContext(0, PairsContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    heading() {
        return this.tryGetRuleContext(0, HeadingContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_match_solution_grouped; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatch_solution_grouped) {
            listener.enterMatch_solution_grouped(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatch_solution_grouped) {
            listener.exitMatch_solution_grouped(this);
        }
    }
}
export class True_false_1Context extends ParserRuleContext {
    BitTruefalse1() { return this.getToken(bitmark.BitTruefalse1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    choices() {
        return this.getRuleContext(0, ChoicesContext);
    }
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
    get ruleIndex() { return bitmark.RULE_true_false_1; }
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
export class True_falseContext extends ParserRuleContext {
    BitTruefalse() { return this.getToken(bitmark.BitTruefalse, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    titlestar_(i) {
        if (i === undefined) {
            return this.getRuleContexts(Titlestar_Context);
        }
        else {
            return this.getRuleContext(i, Titlestar_Context);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_true_false; }
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
export class Bool_labelContext extends ParserRuleContext {
    AtLabeltrue() { return this.tryGetToken(bitmark.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    AtLabelfalse() { return this.tryGetToken(bitmark.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_bool_label; }
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
export class SequenceContext extends ParserRuleContext {
    BitSequence() { return this.getToken(bitmark.BitSequence, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    sspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(SsplContext);
        }
        else {
            return this.getRuleContext(i, SsplContext);
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
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
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
    get ruleIndex() { return bitmark.RULE_sequence; }
    // @Override
    enterRule(listener) {
        if (listener.enterSequence) {
            listener.enterSequence(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSequence) {
            listener.exitSequence(this);
        }
    }
}
export class CorrectionContext extends ParserRuleContext {
    BitCorrection() { return this.getToken(bitmark.BitCorrection, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    corrs(i) {
        if (i === undefined) {
            return this.getRuleContexts(CorrsContext);
        }
        else {
            return this.getRuleContext(i, CorrsContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_correction; }
    // @Override
    enterRule(listener) {
        if (listener.enterCorrection) {
            listener.enterCorrection(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCorrection) {
            listener.exitCorrection(this);
        }
    }
}
export class CorrsContext extends ParserRuleContext {
    OPM() { return this.tryGetToken(bitmark.OPM, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl() {
        return this.getRuleContext(0, NlContext);
    }
    OPP() { return this.tryGetToken(bitmark.OPP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_corrs; }
    // @Override
    enterRule(listener) {
        if (listener.enterCorrs) {
            listener.enterCorrs(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCorrs) {
            listener.exitCorrs(this);
        }
    }
}
export class Mark_Context extends ParserRuleContext {
    BitMark() { return this.getToken(bitmark.BitMark, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    mark_text(i) {
        if (i === undefined) {
            return this.getRuleContexts(Mark_textContext);
        }
        else {
            return this.getRuleContext(i, Mark_textContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_mark_; }
    // @Override
    enterRule(listener) {
        if (listener.enterMark_) {
            listener.enterMark_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMark_) {
            listener.exitMark_(this);
        }
    }
}
export class Mark_textContext extends ParserRuleContext {
    OPS() { return this.getToken(bitmark.OPS, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    mark_color() {
        return this.tryGetRuleContext(0, Mark_colorContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_mark_text; }
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
export class Mark_colorContext extends ParserRuleContext {
    OPAMARK() { return this.getToken(bitmark.OPAMARK, 0); }
    string() {
        return this.getRuleContext(0, StringContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_mark_color; }
    // @Override
    enterRule(listener) {
        if (listener.enterMark_color) {
            listener.enterMark_color(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMark_color) {
            listener.exitMark_color(this);
        }
    }
}
export class Document_uploadContext extends ParserRuleContext {
    BitDocup() { return this.getToken(bitmark.BitDocup, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    COLON() { return this.tryGetToken(bitmark.COLON, 0); }
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    audio_type() {
        return this.tryGetRuleContext(0, Audio_typeContext);
    }
    image_type() {
        return this.tryGetRuleContext(0, Image_typeContext);
    }
    video_type() {
        return this.tryGetRuleContext(0, Video_typeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_document_upload; }
    // @Override
    enterRule(listener) {
        if (listener.enterDocument_upload) {
            listener.enterDocument_upload(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDocument_upload) {
            listener.exitDocument_upload(this);
        }
    }
}
export class Take_pictureContext extends ParserRuleContext {
    BitTakepic() { return this.getToken(bitmark.BitTakepic, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    get ruleIndex() { return bitmark.RULE_take_picture; }
    // @Override
    enterRule(listener) {
        if (listener.enterTake_picture) {
            listener.enterTake_picture(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTake_picture) {
            listener.exitTake_picture(this);
        }
    }
}
export class Record_audioContext extends ParserRuleContext {
    BitRecaud() { return this.getToken(bitmark.BitRecaud, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    get ruleIndex() { return bitmark.RULE_record_audio; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecord_audio) {
            listener.enterRecord_audio(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecord_audio) {
            listener.exitRecord_audio(this);
        }
    }
}
export class Preparation_noteContext extends ParserRuleContext {
    BitPrepnote() { return this.getToken(bitmark.BitPrepnote, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NlContext);
        }
        else {
            return this.getRuleContext(i, NlContext);
        }
    }
    instruction() {
        return this.tryGetRuleContext(0, InstructionContext);
    }
    lines() {
        return this.tryGetRuleContext(0, LinesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_preparation_note; }
    // @Override
    enterRule(listener) {
        if (listener.enterPreparation_note) {
            listener.enterPreparation_note(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPreparation_note) {
            listener.exitPreparation_note(this);
        }
    }
}
export class AssignmentContext extends ParserRuleContext {
    BitAssign() { return this.getToken(bitmark.BitAssign, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    lines() {
        return this.tryGetRuleContext(0, LinesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_assignment; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    }
}
export class Flashcard_1Context extends ParserRuleContext {
    BitFlash1() { return this.getToken(bitmark.BitFlash1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    nl() {
        return this.getRuleContext(0, NlContext);
    }
    side(i) {
        if (i === undefined) {
            return this.getRuleContexts(SideContext);
        }
        else {
            return this.getRuleContext(i, SideContext);
        }
    }
    eq() {
        return this.getRuleContext(0, EqContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_flashcard_1; }
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
export class FlashcardContext extends ParserRuleContext {
    BitFlash() { return this.getToken(bitmark.BitFlash, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    eq(i) {
        if (i === undefined) {
            return this.getRuleContexts(EqContext);
        }
        else {
            return this.getRuleContext(i, EqContext);
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
    get ruleIndex() { return bitmark.RULE_flashcard; }
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
export class SidexContext extends ParserRuleContext {
    atdef(i) {
        if (i === undefined) {
            return this.getRuleContexts(AtdefContext);
        }
        else {
            return this.getRuleContext(i, AtdefContext);
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
    instruction(i) {
        if (i === undefined) {
            return this.getRuleContexts(InstructionContext);
        }
        else {
            return this.getRuleContext(i, InstructionContext);
        }
    }
    audiobit(i) {
        if (i === undefined) {
            return this.getRuleContexts(AudiobitContext);
        }
        else {
            return this.getRuleContext(i, AudiobitContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_sidex; }
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
export class SideContext extends ParserRuleContext {
    sidex(i) {
        if (i === undefined) {
            return this.getRuleContexts(SidexContext);
        }
        else {
            return this.getRuleContext(i, SidexContext);
        }
    }
    or(i) {
        if (i === undefined) {
            return this.getRuleContexts(OrContext);
        }
        else {
            return this.getRuleContext(i, OrContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_side; }
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
export class AtdefContext extends ParserRuleContext {
    atdef_(i) {
        if (i === undefined) {
            return this.getRuleContexts(Atdef_Context);
        }
        else {
            return this.getRuleContext(i, Atdef_Context);
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
    get ruleIndex() { return bitmark.RULE_atdef; }
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
export class Atdef_Context extends ParserRuleContext {
    OPA() { return this.getToken(bitmark.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    COLON() { return this.getToken(bitmark.COLON, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
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
    get ruleIndex() { return bitmark.RULE_atdef_; }
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
export class ArticleContext extends ParserRuleContext {
    BitArticle() { return this.getToken(bitmark.BitArticle, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
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
    get ruleIndex() { return bitmark.RULE_article; }
    // @Override
    enterRule(listener) {
        if (listener.enterArticle) {
            listener.enterArticle(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArticle) {
            listener.exitArticle(this);
        }
    }
}
export class ChatContext extends ParserRuleContext {
    BitChat() { return this.getToken(bitmark.BitChat, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
        }
    }
    initiator() {
        return this.getRuleContext(0, InitiatorContext);
    }
    partner() {
        return this.getRuleContext(0, PartnerContext);
    }
    chat_initiator(i) {
        if (i === undefined) {
            return this.getRuleContexts(Chat_initiatorContext);
        }
        else {
            return this.getRuleContext(i, Chat_initiatorContext);
        }
    }
    sspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(SsplContext);
        }
        else {
            return this.getRuleContext(i, SsplContext);
        }
    }
    chat_partner(i) {
        if (i === undefined) {
            return this.getRuleContexts(Chat_partnerContext);
        }
        else {
            return this.getRuleContext(i, Chat_partnerContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_chat; }
    // @Override
    enterRule(listener) {
        if (listener.enterChat) {
            listener.enterChat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChat) {
            listener.exitChat(this);
        }
    }
}
export class InitiatorContext extends ParserRuleContext {
    name_text() {
        return this.getRuleContext(0, Name_textContext);
    }
    nl() {
        return this.tryGetRuleContext(0, NlContext);
    }
    imagebit() {
        return this.tryGetRuleContext(0, ImagebitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_initiator; }
    // @Override
    enterRule(listener) {
        if (listener.enterInitiator) {
            listener.enterInitiator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInitiator) {
            listener.exitInitiator(this);
        }
    }
}
export class PartnerContext extends ParserRuleContext {
    name_text() {
        return this.getRuleContext(0, Name_textContext);
    }
    nl() {
        return this.tryGetRuleContext(0, NlContext);
    }
    imagebit() {
        return this.tryGetRuleContext(0, ImagebitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_partner; }
    // @Override
    enterRule(listener) {
        if (listener.enterPartner) {
            listener.enterPartner(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPartner) {
            listener.exitPartner(this);
        }
    }
}
export class Name_textContext extends ParserRuleContext {
    OPHASH() { return this.getToken(bitmark.OPHASH, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_name_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterName_text) {
            listener.enterName_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitName_text) {
            listener.exitName_text(this);
        }
    }
}
export class Chat_initiatorContext extends ParserRuleContext {
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_chat_initiator; }
    // @Override
    enterRule(listener) {
        if (listener.enterChat_initiator) {
            listener.enterChat_initiator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChat_initiator) {
            listener.exitChat_initiator(this);
        }
    }
}
export class Chat_partnerContext extends ParserRuleContext {
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_chat_partner; }
    // @Override
    enterRule(listener) {
        if (listener.enterChat_partner) {
            listener.enterChat_partner(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChat_partner) {
            listener.exitChat_partner(this);
        }
    }
}
export class ConversationContext extends ParserRuleContext {
    BitConv() { return this.getToken(bitmark.BitConv, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
        }
    }
    initiator() {
        return this.getRuleContext(0, InitiatorContext);
    }
    partner() {
        return this.getRuleContext(0, PartnerContext);
    }
    chat_initiator(i) {
        if (i === undefined) {
            return this.getRuleContexts(Chat_initiatorContext);
        }
        else {
            return this.getRuleContext(i, Chat_initiatorContext);
        }
    }
    sspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(SsplContext);
        }
        else {
            return this.getRuleContext(i, SsplContext);
        }
    }
    chat_partner(i) {
        if (i === undefined) {
            return this.getRuleContexts(Chat_partnerContext);
        }
        else {
            return this.getRuleContext(i, Chat_partnerContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_conversation; }
    // @Override
    enterRule(listener) {
        if (listener.enterConversation) {
            listener.enterConversation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConversation) {
            listener.exitConversation(this);
        }
    }
}
export class Bot_interviewContext extends ParserRuleContext {
    BitBotint() { return this.getToken(bitmark.BitBotint, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
        }
    }
    bot_choice(i) {
        if (i === undefined) {
            return this.getRuleContexts(Bot_choiceContext);
        }
        else {
            return this.getRuleContext(i, Bot_choiceContext);
        }
    }
    sspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(SsplContext);
        }
        else {
            return this.getRuleContext(i, SsplContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_bot_interview; }
    // @Override
    enterRule(listener) {
        if (listener.enterBot_interview) {
            listener.enterBot_interview(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBot_interview) {
            listener.exitBot_interview(this);
        }
    }
}
export class Bot_choiceContext extends ParserRuleContext {
    words(i) {
        if (i === undefined) {
            return this.getRuleContexts(WordsContext);
        }
        else {
            return this.getRuleContext(i, WordsContext);
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
    audiobit(i) {
        if (i === undefined) {
            return this.getRuleContexts(AudiobitContext);
        }
        else {
            return this.getRuleContext(i, AudiobitContext);
        }
    }
    gap(i) {
        if (i === undefined) {
            return this.getRuleContexts(GapContext);
        }
        else {
            return this.getRuleContext(i, GapContext);
        }
    }
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
    get ruleIndex() { return bitmark.RULE_bot_choice; }
    // @Override
    enterRule(listener) {
        if (listener.enterBot_choice) {
            listener.enterBot_choice(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBot_choice) {
            listener.exitBot_choice(this);
        }
    }
}
export class Self_assessmentContext extends ParserRuleContext {
    BitSelfassess() { return this.getToken(bitmark.BitSelfassess, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
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
    bullet_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(Bullet_itemContext);
        }
        else {
            return this.getRuleContext(i, Bullet_itemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_self_assessment; }
    // @Override
    enterRule(listener) {
        if (listener.enterSelf_assessment) {
            listener.enterSelf_assessment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSelf_assessment) {
            listener.exitSelf_assessment(this);
        }
    }
}
export class RatingContext extends ParserRuleContext {
    BitRating() { return this.getToken(bitmark.BitRating, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
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
    bullet_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(Bullet_itemContext);
        }
        else {
            return this.getRuleContext(i, Bullet_itemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_rating; }
    // @Override
    enterRule(listener) {
        if (listener.enterRating) {
            listener.enterRating(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRating) {
            listener.exitRating(this);
        }
    }
}
export class Bullet_itemContext extends ParserRuleContext {
    OPBUL() { return this.getToken(bitmark.OPBUL, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    atpoint() {
        return this.tryGetRuleContext(0, AtpointContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_bullet_item; }
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
export class SurveyContext extends ParserRuleContext {
    BitSurvey() { return this.getToken(bitmark.BitSurvey, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
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
    bullet_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(Bullet_itemContext);
        }
        else {
            return this.getRuleContext(i, Bullet_itemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_survey; }
    // @Override
    enterRule(listener) {
        if (listener.enterSurvey) {
            listener.enterSurvey(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSurvey) {
            listener.exitSurvey(this);
        }
    }
}
export class Survey_1Context extends ParserRuleContext {
    BitSurvey1() { return this.getToken(bitmark.BitSurvey1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
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
    bullet_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(Bullet_itemContext);
        }
        else {
            return this.getRuleContext(i, Bullet_itemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_survey_1; }
    // @Override
    enterRule(listener) {
        if (listener.enterSurvey_1) {
            listener.enterSurvey_1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSurvey_1) {
            listener.exitSurvey_1(this);
        }
    }
}
export class Survey_anonymousContext extends ParserRuleContext {
    BitSurveyanon() { return this.getToken(bitmark.BitSurveyanon, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
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
    bullet_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(Bullet_itemContext);
        }
        else {
            return this.getRuleContext(i, Bullet_itemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_survey_anonymous; }
    // @Override
    enterRule(listener) {
        if (listener.enterSurvey_anonymous) {
            listener.enterSurvey_anonymous(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSurvey_anonymous) {
            listener.exitSurvey_anonymous(this);
        }
    }
}
export class Survey_anonymous_1Context extends ParserRuleContext {
    BitSurveyanon1() { return this.getToken(bitmark.BitSurveyanon1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    hspl(i) {
        if (i === undefined) {
            return this.getRuleContexts(HsplContext);
        }
        else {
            return this.getRuleContext(i, HsplContext);
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
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
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
    bullet_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(Bullet_itemContext);
        }
        else {
            return this.getRuleContext(i, Bullet_itemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_survey_anonymous_1; }
    // @Override
    enterRule(listener) {
        if (listener.enterSurvey_anonymous_1) {
            listener.enterSurvey_anonymous_1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSurvey_anonymous_1) {
            listener.exitSurvey_anonymous_1(this);
        }
    }
}
export class AtpointContext extends ParserRuleContext {
    AtPoints() { return this.getToken(bitmark.AtPoints, 0); }
    numeric() {
        return this.getRuleContext(0, NumericContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_atpoint; }
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
export class FormatContext extends ParserRuleContext {
    ColonText(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.ColonText);
        }
        else {
            return this.getToken(bitmark.ColonText, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.AMP);
        }
        else {
            return this.getToken(bitmark.AMP, i);
        }
    }
    image_format(i) {
        if (i === undefined) {
            return this.getRuleContexts(Image_formatContext);
        }
        else {
            return this.getRuleContext(i, Image_formatContext);
        }
    }
    audio_format(i) {
        if (i === undefined) {
            return this.getRuleContexts(Audio_formatContext);
        }
        else {
            return this.getRuleContext(i, Audio_formatContext);
        }
    }
    video_format(i) {
        if (i === undefined) {
            return this.getRuleContexts(Video_formatContext);
        }
        else {
            return this.getRuleContext(i, Video_formatContext);
        }
    }
    article_format(i) {
        if (i === undefined) {
            return this.getRuleContexts(Article_formatContext);
        }
        else {
            return this.getRuleContext(i, Article_formatContext);
        }
    }
    BitmarkMinus(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.BitmarkMinus);
        }
        else {
            return this.getToken(bitmark.BitmarkMinus, i);
        }
    }
    BitmarkPlus(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.BitmarkPlus);
        }
        else {
            return this.getToken(bitmark.BitmarkPlus, i);
        }
    }
    AmpArticle(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.AmpArticle);
        }
        else {
            return this.getToken(bitmark.AmpArticle, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_format; }
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
export class Image_formatContext extends ParserRuleContext {
    Image() { return this.tryGetToken(bitmark.Image, 0); }
    COLON() { return this.tryGetToken(bitmark.COLON, 0); }
    image_type() {
        return this.tryGetRuleContext(0, Image_typeContext);
    }
    DotArticleAtt() { return this.tryGetToken(bitmark.DotArticleAtt, 0); }
    ImageOnline() { return this.tryGetToken(bitmark.ImageOnline, 0); }
    ImageZoom() { return this.tryGetToken(bitmark.ImageZoom, 0); }
    ImageWAudio() { return this.tryGetToken(bitmark.ImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_image_format; }
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
export class Image_typeContext extends ParserRuleContext {
    BASIC() { return this.tryGetToken(bitmark.BASIC, 0); }
    JPG() { return this.tryGetToken(bitmark.JPG, 0); }
    PNG() { return this.tryGetToken(bitmark.PNG, 0); }
    GIF() { return this.tryGetToken(bitmark.GIF, 0); }
    SVG() { return this.tryGetToken(bitmark.SVG, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_image_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterImage_type) {
            listener.enterImage_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImage_type) {
            listener.exitImage_type(this);
        }
    }
}
export class Audio_formatContext extends ParserRuleContext {
    Audio() { return this.tryGetToken(bitmark.Audio, 0); }
    COLON() { return this.tryGetToken(bitmark.COLON, 0); }
    audio_type() {
        return this.tryGetRuleContext(0, Audio_typeContext);
    }
    AudioOnline() { return this.tryGetToken(bitmark.AudioOnline, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_audio_format; }
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
export class Audio_typeContext extends ParserRuleContext {
    BASIC() { return this.tryGetToken(bitmark.BASIC, 0); }
    MP3() { return this.tryGetToken(bitmark.MP3, 0); }
    MP4() { return this.tryGetToken(bitmark.MP4, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_audio_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterAudio_type) {
            listener.enterAudio_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAudio_type) {
            listener.exitAudio_type(this);
        }
    }
}
export class Video_formatContext extends ParserRuleContext {
    Video() { return this.tryGetToken(bitmark.Video, 0); }
    COLON() { return this.tryGetToken(bitmark.COLON, 0); }
    video_type() {
        return this.tryGetRuleContext(0, Video_typeContext);
    }
    VideoOnline() { return this.tryGetToken(bitmark.VideoOnline, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_video_format; }
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
export class Video_typeContext extends ParserRuleContext {
    MP4() { return this.tryGetToken(bitmark.MP4, 0); }
    FLV() { return this.tryGetToken(bitmark.FLV, 0); }
    GIF() { return this.tryGetToken(bitmark.GIF, 0); }
    WMV() { return this.tryGetToken(bitmark.WMV, 0); }
    MPEG() { return this.tryGetToken(bitmark.MPEG, 0); }
    MPG() { return this.tryGetToken(bitmark.MPG, 0); }
    MP2() { return this.tryGetToken(bitmark.MP2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_video_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterVideo_type) {
            listener.enterVideo_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVideo_type) {
            listener.exitVideo_type(this);
        }
    }
}
export class Article_formatContext extends ParserRuleContext {
    Article() { return this.tryGetToken(bitmark.Article, 0); }
    ArticleOnline() { return this.tryGetToken(bitmark.ArticleOnline, 0); }
    ArticleAttachmt() { return this.tryGetToken(bitmark.ArticleAttachmt, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_article_format; }
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
export class Document_formatContext extends ParserRuleContext {
    Document() { return this.tryGetToken(bitmark.Document, 0); }
    DocumentOnline() { return this.tryGetToken(bitmark.DocumentOnline, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_document_format; }
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
export class App_formatContext extends ParserRuleContext {
    App() { return this.getToken(bitmark.App, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_app_format; }
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
export class ImagebitContext extends ParserRuleContext {
    OPAMP() { return this.getToken(bitmark.OPAMP, 0); }
    image_format() {
        return this.getRuleContext(0, Image_formatContext);
    }
    DBLCOLON() { return this.getToken(bitmark.DBLCOLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    cl(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClContext);
        }
        else {
            return this.getRuleContext(i, ClContext);
        }
    }
    resolution() {
        return this.tryGetRuleContext(0, ResolutionContext);
    }
    NL() { return this.tryGetToken(bitmark.NL, 0); }
    ShowInIndex() { return this.tryGetToken(bitmark.ShowInIndex, 0); }
    OPATALT() { return this.tryGetToken(bitmark.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_imagebit; }
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
export class AudiobitContext extends ParserRuleContext {
    OPAMP() { return this.getToken(bitmark.OPAMP, 0); }
    audio_format() {
        return this.getRuleContext(0, Audio_formatContext);
    }
    DBLCOLON() { return this.getToken(bitmark.DBLCOLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    cl(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClContext);
        }
        else {
            return this.getRuleContext(i, ClContext);
        }
    }
    OPATALT() { return this.tryGetToken(bitmark.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_audiobit; }
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
export class VideobitContext extends ParserRuleContext {
    OPAMP() { return this.getToken(bitmark.OPAMP, 0); }
    video_format() {
        return this.getRuleContext(0, Video_formatContext);
    }
    DBLCOLON() { return this.getToken(bitmark.DBLCOLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    cl(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClContext);
        }
        else {
            return this.getRuleContext(i, ClContext);
        }
    }
    OPATALT() { return this.tryGetToken(bitmark.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_videobit; }
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
export class ArticlebitContext extends ParserRuleContext {
    OPAMP() { return this.getToken(bitmark.OPAMP, 0); }
    article_format() {
        return this.getRuleContext(0, Article_formatContext);
    }
    DBLCOLON() { return this.getToken(bitmark.DBLCOLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    cl(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClContext);
        }
        else {
            return this.getRuleContext(i, ClContext);
        }
    }
    OPATALT() { return this.tryGetToken(bitmark.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_articlebit; }
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
export class DocumentbitContext extends ParserRuleContext {
    OPAMP() { return this.getToken(bitmark.OPAMP, 0); }
    document_format() {
        return this.getRuleContext(0, Document_formatContext);
    }
    DBLCOLON() { return this.getToken(bitmark.DBLCOLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    cl(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClContext);
        }
        else {
            return this.getRuleContext(i, ClContext);
        }
    }
    OPATALT() { return this.tryGetToken(bitmark.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_documentbit; }
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
export class AppbitContext extends ParserRuleContext {
    OPAMP() { return this.getToken(bitmark.OPAMP, 0); }
    app_format() {
        return this.getRuleContext(0, App_formatContext);
    }
    DBLCOLON() { return this.getToken(bitmark.DBLCOLON, 0); }
    cl(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClContext);
        }
        else {
            return this.getRuleContext(i, ClContext);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(bitmark.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_appbit; }
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
export class TelephoneContext extends ParserRuleContext {
    TEL() { return this.getToken(bitmark.TEL, 0); }
    PLUS() { return this.getToken(bitmark.PLUS, 0); }
    numeric() {
        return this.getRuleContext(0, NumericContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_telephone; }
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
export class ResolutionContext extends ParserRuleContext {
    DotAt() { return this.getToken(bitmark.DotAt, 0); }
    DBLCOLON() { return this.getToken(bitmark.DBLCOLON, 0); }
    NUMERIC(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.NUMERIC);
        }
        else {
            return this.getToken(bitmark.NUMERIC, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_resolution; }
    // @Override
    enterRule(listener) {
        if (listener.enterResolution) {
            listener.enterResolution(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResolution) {
            listener.exitResolution(this);
        }
    }
}
export class UrlContext extends ParserRuleContext {
    Http() { return this.tryGetToken(bitmark.Http, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.CL);
        }
        else {
            return this.getToken(bitmark.CL, i);
        }
    }
    Https() { return this.tryGetToken(bitmark.Https, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_url; }
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
export class LinesContext extends ParserRuleContext {
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
    get ruleIndex() { return bitmark.RULE_lines; }
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
export class S_and_wContext extends ParserRuleContext {
    note_() {
        return this.tryGetRuleContext(0, Note_Context);
    }
    remark_() {
        return this.tryGetRuleContext(0, Remark_Context);
    }
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
    sp() {
        return this.tryGetRuleContext(0, SpContext);
    }
    numeric() {
        return this.tryGetRuleContext(0, NumericContext);
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    titlestar_() {
        return this.tryGetRuleContext(0, Titlestar_Context);
    }
    ops() {
        return this.tryGetRuleContext(0, OpsContext);
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    cl() {
        return this.tryGetRuleContext(0, ClContext);
    }
    bracket_escaped() {
        return this.tryGetRuleContext(0, Bracket_escapedContext);
    }
    COLON() { return this.tryGetToken(bitmark.COLON, 0); }
    SP(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.SP);
        }
        else {
            return this.getToken(bitmark.SP, i);
        }
    }
    AMP() { return this.tryGetToken(bitmark.AMP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_s_and_w; }
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
export class AnchorContext extends ParserRuleContext {
    OPDANGLE() { return this.getToken(bitmark.OPDANGLE, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_anchor; }
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
export class AliasContext extends ParserRuleContext {
    OPRANGLES() { return this.tryGetToken(bitmark.OPRANGLES, 0); }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(bitmark.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_alias; }
    // @Override
    enterRule(listener) {
        if (listener.enterAlias) {
            listener.enterAlias(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAlias) {
            listener.exitAlias(this);
        }
    }
}
export class ItemContext extends ParserRuleContext {
    OPC() { return this.getToken(bitmark.OPC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.COLON);
        }
        else {
            return this.getToken(bitmark.COLON, i);
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
    get ruleIndex() { return bitmark.RULE_item; }
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
export class Bracket_escapedContext extends ParserRuleContext {
    OPESC() { return this.getToken(bitmark.OPESC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    cl() {
        return this.getRuleContext(0, ClContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_bracket_escaped; }
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
export class OpdollContext extends ParserRuleContext {
    OPDOLL() { return this.getToken(bitmark.OPDOLL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opdoll; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpdoll) {
            listener.enterOpdoll(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpdoll) {
            listener.exitOpdoll(this);
        }
    }
}
export class OpbulContext extends ParserRuleContext {
    OPBUL() { return this.getToken(bitmark.OPBUL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opbul; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpbul) {
            listener.enterOpbul(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpbul) {
            listener.exitOpbul(this);
        }
    }
}
export class OpescapeContext extends ParserRuleContext {
    OPESC() { return this.getToken(bitmark.OPESC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opescape; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpescape) {
            listener.enterOpescape(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpescape) {
            listener.exitOpescape(this);
        }
    }
}
export class OprangleContext extends ParserRuleContext {
    OPRANGLES() { return this.tryGetToken(bitmark.OPRANGLES, 0); }
    OPRANGLEL() { return this.tryGetToken(bitmark.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_oprangle; }
    // @Override
    enterRule(listener) {
        if (listener.enterOprangle) {
            listener.enterOprangle(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOprangle) {
            listener.exitOprangle(this);
        }
    }
}
export class OpdangleContext extends ParserRuleContext {
    OPDANGLE() { return this.getToken(bitmark.OPDANGLE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opdangle; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpdangle) {
            listener.enterOpdangle(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpdangle) {
            listener.exitOpdangle(this);
        }
    }
}
export class OpdContext extends ParserRuleContext {
    OPD() { return this.getToken(bitmark.OPD, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opd; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpd) {
            listener.enterOpd(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpd) {
            listener.exitOpd(this);
        }
    }
}
export class OpuContext extends ParserRuleContext {
    OPU() { return this.getToken(bitmark.OPU, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opu; }
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
export class OpbContext extends ParserRuleContext {
    OPB() { return this.getToken(bitmark.OPB, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opb; }
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
export class OpqContext extends ParserRuleContext {
    OPQ() { return this.getToken(bitmark.OPQ, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opq; }
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
export class OpaContext extends ParserRuleContext {
    OPA() { return this.getToken(bitmark.OPA, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opa; }
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
export class OppContext extends ParserRuleContext {
    OPP() { return this.getToken(bitmark.OPP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opp; }
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
export class OpmContext extends ParserRuleContext {
    OPM() { return this.getToken(bitmark.OPM, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opm; }
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
export class OpsContext extends ParserRuleContext {
    OPS() { return this.getToken(bitmark.OPS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_ops; }
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
export class OprContext extends ParserRuleContext {
    OPR() { return this.getToken(bitmark.OPR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opr; }
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
export class OpcContext extends ParserRuleContext {
    OPC() { return this.getToken(bitmark.OPC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_opc; }
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
export class OpContext extends ParserRuleContext {
    OP() { return this.getToken(bitmark.OP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_op; }
    // @Override
    enterRule(listener) {
        if (listener.enterOp) {
            listener.enterOp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOp) {
            listener.exitOp(this);
        }
    }
}
export class ClContext extends ParserRuleContext {
    CL() { return this.getToken(bitmark.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_cl; }
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
export class ClnspContext extends ParserRuleContext {
    CL() { return this.getToken(bitmark.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_clnsp; }
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
export class NlContext extends ParserRuleContext {
    NL() { return this.getToken(bitmark.NL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_nl; }
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
export class OrContext extends ParserRuleContext {
    OR() { return this.getToken(bitmark.OR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_or; }
    // @Override
    enterRule(listener) {
        if (listener.enterOr) {
            listener.enterOr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOr) {
            listener.exitOr(this);
        }
    }
}
export class EqContext extends ParserRuleContext {
    EQ() { return this.tryGetToken(bitmark.EQ, 0); }
    EQ2() { return this.tryGetToken(bitmark.EQ2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_eq; }
    // @Override
    enterRule(listener) {
        if (listener.enterEq) {
            listener.enterEq(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEq) {
            listener.exitEq(this);
        }
    }
}
export class HsplContext extends ParserRuleContext {
    HSPL() { return this.tryGetToken(bitmark.HSPL, 0); }
    HSPL2() { return this.tryGetToken(bitmark.HSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_hspl; }
    // @Override
    enterRule(listener) {
        if (listener.enterHspl) {
            listener.enterHspl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHspl) {
            listener.exitHspl(this);
        }
    }
}
export class SsplContext extends ParserRuleContext {
    SSPL() { return this.tryGetToken(bitmark.SSPL, 0); }
    SSPL2() { return this.tryGetToken(bitmark.SSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_sspl; }
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
export class Titlestar_Context extends ParserRuleContext {
    EMP1() { return this.tryGetToken(bitmark.EMP1, 0); }
    EMP2() { return this.tryGetToken(bitmark.EMP2, 0); }
    EMP3() { return this.tryGetToken(bitmark.EMP3, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_titlestar_; }
    // @Override
    enterRule(listener) {
        if (listener.enterTitlestar_) {
            listener.enterTitlestar_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTitlestar_) {
            listener.exitTitlestar_(this);
        }
    }
}
export class Ins_Context extends ParserRuleContext {
    INS() { return this.getToken(bitmark.INS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_ins_; }
    // @Override
    enterRule(listener) {
        if (listener.enterIns_) {
            listener.enterIns_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIns_) {
            listener.exitIns_(this);
        }
    }
}
export class Del_Context extends ParserRuleContext {
    DEL() { return this.getToken(bitmark.DEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_del_; }
    // @Override
    enterRule(listener) {
        if (listener.enterDel_) {
            listener.enterDel_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDel_) {
            listener.exitDel_(this);
        }
    }
}
export class Note_Context extends ParserRuleContext {
    NOTE() { return this.getToken(bitmark.NOTE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_note_; }
    // @Override
    enterRule(listener) {
        if (listener.enterNote_) {
            listener.enterNote_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNote_) {
            listener.exitNote_(this);
        }
    }
}
export class Remark_Context extends ParserRuleContext {
    REM() { return this.getToken(bitmark.REM, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_remark_; }
    // @Override
    enterRule(listener) {
        if (listener.enterRemark_) {
            listener.enterRemark_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRemark_) {
            listener.exitRemark_(this);
        }
    }
}
export class Help_Context extends ParserRuleContext {
    HELP() { return this.getToken(bitmark.HELP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_help_; }
    // @Override
    enterRule(listener) {
        if (listener.enterHelp_) {
            listener.enterHelp_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHelp_) {
            listener.exitHelp_(this);
        }
    }
}
export class Highlight_Context extends ParserRuleContext {
    HIGH() { return this.getToken(bitmark.HIGH, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_highlight_; }
    // @Override
    enterRule(listener) {
        if (listener.enterHighlight_) {
            listener.enterHighlight_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHighlight_) {
            listener.exitHighlight_(this);
        }
    }
}
export class Annotate_Context extends ParserRuleContext {
    ANNO() { return this.getToken(bitmark.ANNO, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_annotate_; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotate_) {
            listener.enterAnnotate_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotate_) {
            listener.exitAnnotate_(this);
        }
    }
}
export class Annotate_image_Context extends ParserRuleContext {
    ANNO_IM() { return this.getToken(bitmark.ANNO_IM, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_annotate_image_; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotate_image_) {
            listener.enterAnnotate_image_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotate_image_) {
            listener.exitAnnotate_image_(this);
        }
    }
}
export class Listline_Context extends ParserRuleContext {
    LIST_LINE() { return this.getToken(bitmark.LIST_LINE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_listline_; }
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
export class NumericContext extends ParserRuleContext {
    NUMERIC() { return this.getToken(bitmark.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_numeric; }
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
export class StringContext extends ParserRuleContext {
    STRING() { return this.getToken(bitmark.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_string; }
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
export class WordsContext extends ParserRuleContext {
    SENTENCE(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.SENTENCE);
        }
        else {
            return this.getToken(bitmark.SENTENCE, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.AMP);
        }
        else {
            return this.getToken(bitmark.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.Greater);
        }
        else {
            return this.getToken(bitmark.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(bitmark.Less);
        }
        else {
            return this.getToken(bitmark.Less, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_words; }
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
export class SpContext extends ParserRuleContext {
    SP() { return this.getToken(bitmark.SP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmark.RULE_sp; }
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
